import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChartComponent = ({ isBarchartData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const rangeLabels = isBarchartData.map((item) => `${item.min}-${item.max}`);

  const transactionCounts = isBarchartData.map(
    (item) => item.transactions.length
  );

  const labels = rangeLabels;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: transactionCounts,
        backgroundColor: ["rgba(10, 94, 176,0.6)"],
        borderColor: ["rgb(10, 94, 176)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Transation Bar chart Statastics",
      },     
    },
  };
  return <Bar data={data} options={options} />;
};

export default BarChartComponent;
