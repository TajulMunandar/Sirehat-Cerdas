from flask import Flask, jsonify
from flask_cors import CORS
from fts import FTS
from utils import mean_squared_error, average_forecasting_error_rate
import requests
import pandas as pd

app = Flask(__name__)
CORS(app)


def getDataFromDatabase():
    laravel_api_url = "http://127.0.0.1:8000/api/get-data-kunjungan"

    try:
        response = requests.get(laravel_api_url)
        response.raise_for_status()  # Membuat exception jika response status code bukan 200
        patient = response.json()  # Mendapatkan respons JSON dari API

        return patient

    except Exception as e:
        print("Error occurred while fetching or processing data:", e)
        return None


@app.route("/fuzzy", methods=["GET"])
def predict():

    jagungData = getDataFromDatabase()
    print(jagungData)
    if jagungData is None:
        return jsonify({"error": "Failed to fetch data from the database."}), 500

    dataset = []
    for data in jagungData:
        dataset.append(
            {
                "key": data["tanggal"],
                "value": data["jumlah_kunjungan"],
            }
        )
    min_val = min(v["value"] for v in dataset)
    max_val = max(v["value"] for v in dataset)
    min_border = min_val * 0.1
    max_border = max_val * 0.1
    engine = FTS(
        dataset,
        {
            "minMargin": min_border,
            "maxMargin": max_border,
            "interval": (max_val * 1.1 - min_val * 0.9) / 10,
        },
    )
    engine.train()
    singleResult = engine.test()
    forecasted = [v["predicted"] for v in singleResult[:-1]]
    actual = [v["value"] for v in singleResult[1:]]
    mse = mean_squared_error(actual, forecasted)
    afer = average_forecasting_error_rate(actual, forecasted)
    # print(singleResult)
    print({"mse": mse, "afer": afer})

    latest_data = dataset[-1]
    latest_value = latest_data["value"]

    forecasted_values = []
    for i in range(1, 6):
        # Lakukan prediksi dengan menggunakan pola historis dari data terakhir
        forecasted_value = latest_value + (latest_value - dataset[-2]["value"])
        forecasted_values.append(forecasted_value)
        # Perbarui nilai terbaru untuk iterasi berikutnya
        latest_value = forecasted_value

    prediction_results = []
    for i, value in enumerate(forecasted_values, start=0):
        prediction_results.append({"Tahun": f"Tahun {2019 + i}", "Prediksi": value})

    # Data metrik evaluasi
    evaluation_metrics = {"mse": mse, "afer": afer}
    mse_percentage = mse * 100
    afer_percentage = "{:.2f}".format(afer) * 100

    # Mengembalikan response JSON
    response_data = {
        "data_test": asep,
        "data_train": singleResult,
        "prediction_results": prediction_results[-5:],
        "evaluation_metrics": {
            "mse": f"{mse_percentage:.2f}%",
            "afer": afer_percentage,
        },
    }

    return jsonify(response_data)


if __name__ == "__main__":
    app.run(debug=True)
