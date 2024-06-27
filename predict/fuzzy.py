class FuzzyTriangleGate:
    @property
    def median(self) -> float:
        return self.mid

    def __init__(self, min_val: float, mid_val: float, max_val: float):
        self.min = min_val
        self.mid = mid_val
        self.max = max_val

    def degree(self, value: float) -> float:
        if value <= self.min or value >= self.max:
            return 0
        elif self.min < value <= self.mid:
            return (value - self.min) / (self.mid - self.min)
        else:
            return (self.max - value) / (self.max - self.mid)
