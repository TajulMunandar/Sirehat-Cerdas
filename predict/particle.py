import random


class Particle:
    @property
    def best_position(self):
        return self._positions[self._best_position_index]

    @property
    def best_fit_result(self):
        return self._fitting_results[self._best_position_index]

    def __init__(self, options):
        self._fit_fn = options["fit_fn"]
        self._select_fn = options["selector_fn"]
        self._velocities = [
            options["min"] + (random.random() * (options["max"] - options["min"]))
        ]
        self._positions = [
            options["min"] + (random.random() * (options["max"] - options["min"]))
        ]
        self._self_confidence = options.get(
            "self_confidence", random.random()
        )  # Use random value if not provided
        self._best_position_index = 0
        first_fit = self.fit(self._positions[0])
        self._fitting_results = [first_fit]
        self._weight = options["weight"]

    def fit(self, position):
        return self._fit_fn(position)

    def select(self):
        return self._select_fn(self._fitting_results)

    def update(self, swarm_confidence, global_best):
        latest_velocity = self._velocities[-1]
        latest_position = self._positions[-1]
        local_best = self._positions[self._best_position_index]

        next_velocity = (
            (self._weight * latest_velocity)
            + (self._self_confidence * random.random() * (local_best - latest_position))
            + (swarm_confidence * random.random() * (global_best - latest_position))
        )
        self._velocities.append(next_velocity)

        next_position = latest_position + next_velocity
        self._positions.append(next_position)

        next_fit = self.fit(next_position)
        self._fitting_results.append(next_fit)

        self._best_position_index = self.select()
