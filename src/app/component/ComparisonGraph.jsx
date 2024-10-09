"use client";
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const ComparisonGraph = ({ rank, percentile, correctAnswers, totalQuestions }) => {
  const data = useMemo(() => ({
    labels: [0, 10, 25, 50, 75, 90, 100],
    datasets: [
      {
        label: "Performance Metrics",
        data: [
          rank,
          correctAnswers * 5,
          percentile,
          72,
          100 - rank,
          percentile + 10,
          correctAnswers,
        ],
        borderColor: "#4F46E5",
        fill: false,
        pointRadius: 3,
        tension: 0.4,
      },
    ],
  }), [rank, percentile, correctAnswers]);

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Value: ${context.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 border-black   mt-6">
      <h2 className="text-2xl font-bold mb-4">Comparison Graph</h2>
      <p className="text-left mb-4">
       <b> You scored {percentile}% percentile</b>, which is lower than the average percentile of 72% 
        of all the engineers who took this assessment.
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonGraph;
