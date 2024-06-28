from flask import Flask, jsonify
from flask_cors import CORS
import requests
from collections import defaultdict
from datetime import datetime
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from collections import Counter

app = Flask(__name__)
CORS(app)

def getDataClusteringFromDatabase():
    laravel_api_url = "http://127.0.0.1:8000/api/get-data-clustering"

    try:
        response = requests.get(laravel_api_url)
        response.raise_for_status()
        kunjungan = response.json()

        return kunjungan

    except Exception as e:
        print("Error occurred while fetching or processing data:", e)
        return None

def group_by_month(kunjungan):
    grouped_data = defaultdict(list)
    for data in kunjungan:
        tanggal = data['transaksiobat']['kunjungan']['registrasi']['tanggal']
        bulan = datetime.strptime(tanggal, '%Y-%m-%d %H:%M:%S').strftime('%Y-%m')
        grouped_data[bulan].append(data)
    return grouped_data

def transform_data(grouped_data):
    transformed_data = {}

    for bulan, data_per_bulan in grouped_data.items():
        transformed_data[bulan] = []

        for data in data_per_bulan:
            transformed_item = {
                'id_obat': data['id_obat'],
                'tanggal': data['transaksiobat']['kunjungan']['registrasi']['tanggal'],
                'nama_obat': data['obat']['nama_obat']
            }
            transformed_data[bulan].append(transformed_item)

    return transformed_data

def cluster_per_month(grouped_data):
    clustered_data_per_month = {}
    for bulan, data_per_bulan in grouped_data.items():
        datas = {
            'id_obat': [int(data['id_obat']) for data in data_per_bulan],  
        }
        data = pd.DataFrame(datas)

        kmeans = KMeans(n_clusters=3, random_state=0).fit(data)
        labels = kmeans.labels_

        data['cluster'] = labels.tolist()  
        data['nama_obat'] = [data['nama_obat'] for data in data_per_bulan] 
        dict_records = data.to_dict(orient='records')
        clustered_data_per_month[bulan] = dict_records

    return clustered_data_per_month

def count_most_common(clustered_data_per_month):
    counted_data_per_month = {}
    
    for bulan, data_per_bulan in clustered_data_per_month.items():
        counted_data = {}
        for cluster_id in range(3):  # Sesuaikan dengan jumlah cluster yang Anda tentukan
            cluster_data = [data for data in data_per_bulan if data['cluster'] == cluster_id]
            id_obat_counts = Counter(data['id_obat'] for data in cluster_data)
            most_common = id_obat_counts.most_common(1)
            if most_common:
                most_common_id_obat = most_common[0][0]
                most_common_nama_obat = next((data['nama_obat'] for data in cluster_data if data['id_obat'] == most_common_id_obat), None)
                counted_data[cluster_id] = {
                    'id_obat': most_common_id_obat,
                    'nama_obat': most_common_nama_obat,
                    'jumlah': most_common[0][1]
                }
        
        counted_data_per_month[bulan] = counted_data
    
    return counted_data_per_month


@app.route("/clustering", methods=["GET"])
def clustering():
    kunjungan = getDataClusteringFromDatabase()

    grouped_data = group_by_month(kunjungan)
    transformed_data = transform_data(grouped_data)

    clustered_data_per_month = cluster_per_month(transformed_data)

    most_common_data_per_month = count_most_common(clustered_data_per_month)

    return jsonify(most_common_data_per_month)
    

if __name__ == "__main__":
    app.run(debug=True)
