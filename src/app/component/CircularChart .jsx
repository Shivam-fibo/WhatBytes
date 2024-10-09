"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChart = ({ correctAnswers, totalQuestions }) => {

  const data = {
    labels: ["Correct", "Remaining"],
    datasets: [
      {
        data: [correctAnswers, totalQuestions - correctAnswers],
        backgroundColor: ["#4CAF50", "#e0e0e0"], // Green for correct, light gray for remaining
        hoverBackgroundColor: ["#45a049", "#d9d9d9"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // Makes the chart appear more like a progress circle
    plugins: {
      legend: {
        display: false, // Hide the legend for a cleaner look
      },
      tooltip: {
        enabled: false, // Disable tooltips for simplicity
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="relative w-48 ">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
     
      </div>
    </div>
  );
};

export default CircularChart;
