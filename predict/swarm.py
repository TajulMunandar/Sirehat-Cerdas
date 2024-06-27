import random
from particle import Particle  # Assuming Particle class is defined in particle.py


class Swarm:
    @property
    def best_position(self):
        return self._best_position

    @property
    def best_fit(self):
        return self._best_fit

    def __init__(self, options):
        if not (0 < options["weight"] < 1):
            print("Weight out of boundaries, generating random weight...")
            self._w = random.random()
        else:
            self._w = options["weight"]

        self._max_iteration = options.get("max_iteration", 10000)
        self._fit_fn = options["fitness_function"]
        self._select_fn = options["selector_function"]
        self._stop_criteria = options["stop_criteria"]
        self._swarm_confidence = options.get("swarm_confidence", random.random())

        self._particles = [
            Particle(
                {
                    "min": options["spaces"]["min"],
                    "max": options["spaces"]["max"],
                    "fit_fn": self._fit_fn,
                    "selector_fn": self._select_fn,
                    "self_confidence": options.get("self_confidence", None),
                    "weight": self._w,
                }
            )
            for _ in range(options["particle_count"])
        ]

        best_particle_idx = self._select_fn(
            [particle.best_fit_result for particle in self._particles]
        )
        self._best_fit = self._particles[best_particle_idx].best_fit_result
        self._best_position = self._particles[best_particle_idx].best_position

    def optimize(self):
        stop = self._stop_criteria(self._best_fit)
        current_iteration = 0

        while not stop and current_iteration < self._max_iteration:
            for particle in self._particles:
                particle.update(self._swarm_confidence, self._best_position)

            best_particle_idx = self._select_fn(
                [particle.best_fit_result for particle in self._particles]
            )
            self._best_fit = self._particles[best_particle_idx].best_fit_result
            self._best_position = self._particles[best_particle_idx].best_position

            stop = self._stop_criteria(self._best_fit)
            current_iteration += 1

        return current_iteration
