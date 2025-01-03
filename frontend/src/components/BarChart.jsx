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

// Register Chart.js components explicitly
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const activeCount = data.filter((client) => client.status === "Active").length;
  const inactiveCount = data.filter((client) => client.status === "Inactive").length;

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
        text: "Client Status Distribution",
      },
    },
  };

  return (
    <div className="mb-4">
      <h4>Active vs Inactive Clients</h4>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
