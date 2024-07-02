from flask import Flask, jsonify
from flask_cors import CORS
import requests
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)


# Function untuk mendapatkan data dari database Laravel
def getDataFromDatabase():
    laravel_api_url = "https://sirehatcerdas.online/api/get-data-kunjungan"

    try:
        response = requests.get(laravel_api_url)
        response.raise_for_status()  # Raise exception if status code is not 200
        data = response.json()  # Get JSON response from API
        return data

    except Exception as e:
        return None


# Function untuk melakukan prediksi menggunakan moving average
def predictMovingAverage(data, window_size=7):
    # Extract dates and visitor counts from the data
    dates = [entry["tanggal"] for entry in data]
    jumlah_kunjungan = [int(entry["jumlah_kunjungan"]) for entry in data]

    # Calculate moving average
    moving_averages = []
    for i in range(len(jumlah_kunjungan) - window_size + 1):
        window_dates = dates[i : i + window_size]
        window_counts = jumlah_kunjungan[i : i + window_size]
        avg_count = sum(window_counts) / window_size
        moving_averages.append(
            {"tanggal": window_dates[-1], "rata_rata_kunjungan": avg_count}
        )

    # Predict for future dates where data is missing
    last_known_average = (
        moving_averages[-1]["rata_rata_kunjungan"] if moving_averages else None
    )
    future_predictions = []
    future_dates = generate_future_dates(dates[-1], 7)  # Generate 7 future dates

    for i, date in enumerate(future_dates):
        # Adjust the predicted average using a simple variance
        if i % 2 == 0:
            adjusted_avg_count = last_known_average + (i % 3)
        else:
            adjusted_avg_count = last_known_average - (i % 3)

        future_predictions.append(
            {
                "tanggal": date,
                "rata_rata_kunjungan": adjusted_avg_count,  # Adjusted prediction
            }
        )

    return moving_averages[-1:] + future_predictions


def generate_future_dates(start_date, num_days):
    future_dates = []
    date = datetime.strptime(start_date, "%Y-%m-%d")

    for _ in range(1, num_days + 1):
        date += timedelta(days=1)
        future_dates.append(date.strftime("%Y-%m-%d"))

    return future_dates


# Route untuk endpoint prediksi kunjungan dengan moving average
@app.route("/predict", methods=["GET"])
def predict():
    # Mendapatkan data terbaru dari database Laravel
    data = getDataFromDatabase()

    if data is None:
        return jsonify({"error": "Failed to fetch data from the database."}), 500

    predictions = predictMovingAverage(data)

    return jsonify(predictions)


if __name__ == "__main__":
    app.run(port=5000)
