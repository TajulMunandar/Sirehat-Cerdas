import { CChart } from "@coreui/react-chartjs";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import Chart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";

interface DashboardDoktersProps {
    countDokter: number;
    countPasien: number;
    countKonsultasiOnline: number;
    countKunjungan: number;
    countKunjunganHariIni: number;
}

const Dashboard: React.FC<DashboardDoktersProps> = ({
    countDokter,
    countPasien,
    countKonsultasiOnline,
    countKunjungan,
    countKunjunganHariIni,
}) => {
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(date);
    };

    const [predictions, setPredictions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:5001/predict"
                );
                const predictionsWithIntegers = response.data.map(
                    (item: any) => ({
                        tanggal: formatDate(new Date(item.tanggal)),
                        rata_rata_kunjungan: Math.round(
                            item.rata_rata_kunjungan
                        ), // Atau parseInt(item.rata_rata_kunjungan)
                    })
                );
                setPredictions(predictionsWithIntegers);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const chartOptions = {
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.9,
                gradientToColors: ["#cffafe", "#1580EB"], // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 0.6,
                opacityTo: 0.7,
                stops: [0, 50, 100],
                colorStops: [],
            },
        },
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: predictions.map((item: any) => item.tanggal),
        },
        grid: {
            show: false, // This will hide the grid
        },
    };

    const chartData = {
        labels: predictions.map((item: any) => item.tanggal),
        series: [
            {
                name: "Predicted Visits",
                data: predictions.map((item: any) => item.rata_rata_kunjungan),
            },
        ],
    };

    // Function to convert month number to month name
    const getMonthName = (monthNumber: number): string => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('default', { month: 'long' });
    };

    interface DrugData {
        id_obat: number;
        jumlah: number;
        nama_obat: string;
    }

    interface ApiResponse {
        [date: string]: {
            [key: string]: DrugData;
        };
    }

    const [rawData, setRawData] = useState<ApiResponse | null>(null);
    const [chartDataCluster, setChartDataCluster] = useState({
        labels: [] as string[],
        datasets: [
            {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [] as number[],
            },
        ],
    });

    useEffect(() => {
        // Fetch data from the Flask API using axios
        axios.get<ApiResponse>("http://127.0.0.1:5000/clustering")
            .then((response) => {
                setRawData(response.data); // Save the raw response data
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
            });
    }, []);

    useEffect(() => {
        if (rawData) {
            const labels: string[] = [];
            const dataValues: number[] = [];

            Object.keys(rawData).forEach((date) => {
                const yearMonth = date.split('-');
                const year = yearMonth[0];
                const month = getMonthName(parseInt(yearMonth[1]));
                const monthYearLabel = `${month} ${year}`;

                const monthData = rawData[date];
                let maxDrug: DrugData = { id_obat: 0, jumlah: 0, nama_obat: '' };

                Object.values(monthData).forEach((drug) => {
                    if (drug.jumlah > maxDrug.jumlah) {
                        maxDrug = drug;
                    }
                });

                labels.push(`${monthYearLabel} - ${maxDrug.nama_obat}`);
                dataValues.push(maxDrug.jumlah);
            });

            setChartDataCluster({
                labels: labels,
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: dataValues,
                    },
                ],
            });
        }
    }, [rawData]);

    return (
        <>
            <Head title="Dashboard" />
            <MainDashboard nav={"Dashboard"}>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                    <div className="col-2">
                                        {" "}
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-cyan-100 rounded-full dark:bg-rose-600">
                                            <span className="font-medium text-gray-600 dark:text-rose-300">
                                                <FontAwesomeIcon
                                                    icon={[
                                                        "fas",
                                                        "chart-simple",
                                                    ]}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-10 justify-start text-left items-start">
                                        <h5 className={`font-semibold mb-2`}>
                                            Total Kunjungan
                                        </h5>
                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            {countKunjungan}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                    <div className="col-2">
                                        {" "}
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-indigo-600">
                                            <span className="font-medium text-gray-600 dark:text-indigo-300">
                                                <FontAwesomeIcon
                                                    icon={["fas", "hospital"]}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-10 justify-start text-left items-start">
                                        <h5 className={`font-semibold mb-2`}>
                                            Total Poli
                                        </h5>
                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                    <div className="col-2">
                                        {" "}
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-violet-600">
                                            <span className="font-medium text-gray-600 dark:text-violet-300">
                                                <FontAwesomeIcon
                                                    icon={[
                                                        "fas",
                                                        "user-doctor",
                                                    ]}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-10 justify-start text-left items-start">
                                        <h5 className={`font-semibold mb-2`}>
                                            Total Dokter
                                        </h5>

                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            {countDokter}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                    <div className="col-2">
                                        {" "}
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-amber-500">
                                            <span className="font-medium text-gray-600 dark:text-amber-200">
                                                <FontAwesomeIcon
                                                    icon={["fas", "chart-line"]}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-10 justify-start text-left items-start">
                                        <h5 className={`font-semibold mb-2`}>
                                            Total Kunjungan Harian
                                        </h5>
                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            {countKunjunganHariIni}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                    <div className="col-2">
                                        {" "}
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-emerald-600">
                                            <span className="font-medium text-gray-600 dark:text-emerald-300">
                                                <FontAwesomeIcon
                                                    icon={[
                                                        "fas",
                                                        "hand-holding-medical",
                                                    ]}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-10 justify-start text-left items-start">
                                        <h5 className={`font-semibold mb-2`}>
                                            Total Konsultasi Online
                                        </h5>
                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            {countKonsultasiOnline}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                    <div className="col-2">
                                        {" "}
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-pink-600">
                                            <span className="font-medium text-gray-600 dark:text-pink-300">
                                                <FontAwesomeIcon
                                                    icon={["fas", "user"]}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-10 justify-start text-left items-start">
                                        <h5 className={`font-semibold mb-2`}>
                                            Total Pasien
                                        </h5>

                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            {countPasien}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col col-lg-8">
                        <div className="card">
                            <div className="card-body ">
                                <div className="flex justify-between items-center mb-3">
                                    <h5>Prediksi Trafic Pengunjung</h5>
                                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-blue-500">
                                        <span className="font-medium text-gray-600 dark:text-blue-200">
                                            <FontAwesomeIcon
                                                icon={["fas", "chart-line"]}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <Chart
                                    options={chartOptions}
                                    series={chartData.series}
                                    stroke={"smooth"}
                                    type="area"
                                    width="100%"
                                    height="120%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="card ">
                            <div className="card-body ">
                                <div className="flex justify-between items-center mb-3 ">
                                    <h5>Clustering</h5>
                                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">
                                            <FontAwesomeIcon
                                                icon={["fas", "kit-medical"]}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    <CChart
                                        type="doughnut"
                                        data={chartDataCluster}
                                        options={{
                                            plugins: {
                                                legend: {
                                                    labels: {
                                                        color: '#000',
                                                    },
                                                }
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainDashboard>
        </>
    );
};

export default Dashboard;
