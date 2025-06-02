/* eslint-disable no-unused-vars */
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const Activity = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Tasks",
        data: [1, 2, 1, 3, 0, 4, 2],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 160, // Chart height
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        show: true,
        borderColor: "#e5e7eb",
        strokeDashArray: 4,
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "12px",
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
        max: 4,
        tickAmount: 4,
        labels: {
          style: {
            colors: "#6b7280",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        theme: "light",
        x: { show: false },
        y: {
          formatter: (val) => `${val} tasks`,
        },
      },
      colors: ["#141522"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.05,
          stops: [0, 90, 100],
        },
      },
    },
  });

  return (
    <div className="bg-white h-[214px] p-3 pt-2 rounded-xl shadow-sm w-full">
      <h2 className="text-sm font-semibold text-gray-800 mb-2">
        Weekly Activity
      </h2>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={160} // Chart height inside fixed-height container
      />
    </div>
  );
};

export default Activity;
