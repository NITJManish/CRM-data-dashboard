import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const activeCount = data.filter((item) => item.status === "Active").length;
  const inactiveCount = data.filter((item) => item.status === "Inactive").length;

  const chartData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Clients",
        data: [activeCount, inactiveCount],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Active vs Inactive Clients",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
