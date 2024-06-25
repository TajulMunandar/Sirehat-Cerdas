import { CChartPolarArea } from "@coreui/react-chartjs";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import Chart from "react-apexcharts";

const Dashboard: React.FC = () => {
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
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    };

    const chartSeries = [
        {
            name: "series-1",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
    ];

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
                                            12
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
                                            3
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
                                            50
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
                                            12
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
                                            Total Kunjungan
                                        </h5>
                                        <p
                                            className={`m-0 text-xl text-gray-500`}
                                        >
                                            3
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
                                            50
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
                            <div className="card-body">
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
                                    series={chartSeries}
                                    stroke={"smooth"}
                                    type="area"
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="card">
                            <div className="card-body  ">
                                <div className="flex justify-between items-center mb-3">
                                    <h5>Clustering</h5>
                                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <span className="font-medium text-gray-600 dark:text-gray-300">
                                            <FontAwesomeIcon
                                                icon={["fas", "user-doctor"]}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center h-full">
                                    <CChartPolarArea
                                        data={{
                                            labels: [
                                                "January",
                                                "February",
                                                "March",
                                            ],
                                            datasets: [
                                                {
                                                    label: "2019",
                                                    backgroundColor: [
                                                        "rgba(255, 99, 132, 0.6)",
                                                        "rgba(54, 162, 235, 0.6)",
                                                        "rgba(255, 206, 86, 0.6)",
                                                    ], // Variasi warna latar belakang area
                                                    borderColor: [
                                                        "rgba(255, 99, 132, 1)",
                                                        "rgba(54, 162, 235, 1)",
                                                        "rgba(255, 206, 86, 1)",
                                                    ], // Variasi warna garis tepi
                                                    pointBackgroundColor: [
                                                        "rgba(255, 99, 132, 1)",
                                                        "rgba(54, 162, 235, 1)",
                                                        "rgba(255, 206, 86, 1)",
                                                    ], // Variasi warna titik-titik di dalam area
                                                    pointBorderColor: "#fff", // Warna garis tepi titik-titik
                                                    pointHoverBackgroundColor:
                                                        "#fff", // Warna latar belakang saat dihover
                                                    pointHoverBorderColor: [
                                                        "rgba(255, 99, 132, 1)",
                                                        "rgba(54, 162, 235, 1)",
                                                        "rgba(255, 206, 86, 1)",
                                                    ], // Variasi warna garis tepi saat dihover
                                                    data: [56, 55, 40],
                                                },
                                            ],
                                        }}
                                        options={{
                                            aspectRatio: 1.5,
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
