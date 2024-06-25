import React from "react";
import Chart from "react-apexcharts";

interface PolarAreaChartProps {
    data: number[];
    labels: string[];
}

const PolarAreaChart: React.FC<PolarAreaChartProps> = ({ data, labels }) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "polarArea",
        },
        labels: labels,
        fill: {
            opacity: 0.8,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const series = data;

    return (
        <div className="polar-area-chart">
            <Chart
                options={options}
                series={series}
                type="polarArea"
                height={350}
            />
        </div>
    );
};

export default PolarAreaChart;
