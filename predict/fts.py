from typing import List, Dict, Any
from fuzzy import FuzzyTriangleGate


class FTS:
    def __init__(
        self,
        dataset: List[Dict[str, Any]],
        options: Dict[str, Any],
    ):
        self._dataset = dataset
        # Sisipkan opsi untuk margin, interval, dan fitur lainnya
        self._margin_multiplier = options.get("marginMultiplier", 0.1)
        self._min_margin = options.get(
            "minMargin", self.min_value * self._margin_multiplier
        )
        self._max_margin = options.get(
            "maxMargin", self.max_value * self._margin_multiplier
        )
        if "interval" in options:
            self._partition_interval = options["interval"]
            self._partition_count = int(
                (self.upper_bound - self.lower_bound) / options["interval"]
            )
        else:
            self._partition_count = options.get("partitionCount", 10)
            self._partition_interval = (
                self.upper_bound - self.lower_bound
            ) / self._partition_count
        self._partition_ref = []
        self._ruleset = {}
        for i in range(self._partition_count):
            prev_point = (
                0
                if i == 0
                else (self.lower_bound + (self._partition_interval * (i - 1)))
            )
            max_point = self.lower_bound + (self._partition_interval * i)
            next_point = self.lower_bound + (self._partition_interval * (i + 1))
            self._partition_ref.append(
                FuzzyTriangleGate(prev_point, max_point, next_point)
            )
            self._ruleset[i] = set()

    @property
    def lower_bound(self) -> float:
        return min(v["value"] for v in self._dataset) - self._min_margin

    @property
    def upper_bound(self) -> float:
        return max(v["value"] for v in self._dataset) + self._max_margin

    @property
    def partition_count(self) -> int:
        return self._partition_count

    @property
    def partition_length(self) -> float:
        return self._partition_interval

    @property
    def max_value(self) -> float:
        return max(v["value"] for v in self._dataset)

    @property
    def min_value(self) -> float:
        return min(v["value"] for v in self._dataset)

    def nearest_partition(self, value: float) -> int:
        degrees = [x.degree(value) for x in self._partition_ref]
        highest_degree = max(degrees)
        return degrees.index(highest_degree)

    def train(self) -> None:
        generated_pattern = [self.nearest_partition(v["value"]) for v in self._dataset]

        for i in range(1, len(generated_pattern)):
            precedent = generated_pattern[i - 1]
            consequent = generated_pattern[i]

            self._ruleset[precedent].add((consequent))

    def test(self, options: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        base_data = (
            options["dataset"] if options and "dataset" in options else self._dataset
        )
        predicted = []

        for i, item in enumerate(base_data):
            key, value = item["key"], item["value"]

            partition_index = self.nearest_partition(value)
            partition_consequent = self._ruleset.get(partition_index, set())
            predicted_value = 0

            if len(partition_consequent) == 0:
                predicted_value = self._partition_ref[partition_index].median
            else:
                # Hitung nilai prediksi berdasarkan luas tanam dan luas panen yang dimasukkan
                total_weighted_sum = sum(
                    self._partition_ref[x].median for x in partition_consequent
                )
                total_weight = len(partition_consequent)

                predicted_value += (
                    total_weighted_sum / total_weight if total_weight != 0 else 0
                )

            predicted.append({"key": key, "value": value, "predicted": predicted_value})

        return predicted
