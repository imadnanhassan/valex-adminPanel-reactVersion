import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sample data for the line chart
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the line chart
    const lineChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      lineChart.destroy(); // Cleanup when the component unmounts
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
}
