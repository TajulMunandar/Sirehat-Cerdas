import math


def base_lookup(interval):
    return 0.1 if interval <= 0.1 else 10 ** math.ceil(math.log10(interval) - 1)


def average_interval(dataset):
    range_vals = [
        abs(dataset[i] - dataset[i - 1]) for i in range(len(dataset)) if i > 0
    ]
    range_average = sum(range_vals) / len(range_vals)
    half_average = range_average / 2
    return base_lookup(half_average)


def mean_squared_error(actual, forecast):
    if len(actual) != len(forecast):
        raise ValueError("Actual data and forecast data have different lengths")
    return sum((a - f) ** 2 for a, f in zip(actual, forecast)) / len(actual)


def average_forecasting_error_rate(actual, forecast):
    if len(actual) != len(forecast):
        raise ValueError("Actual data and forecast data have different lengths")
    return sum(abs(a - f) / a for a, f in zip(actual, forecast)) / len(actual)
