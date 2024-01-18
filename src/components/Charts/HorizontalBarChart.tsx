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
  ChartOptions,
} from 'chart.js';

import { HORIZONTAL_CHART_DATA } from "@/mock/mock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<'bar'> = {
  responsive: true,
  indexAxis: 'y',
  scales: {
    x: {
      title: {
        display: true,
        text: "Case Number",
        padding: {
          top: 20
        }
      },
      ticks: {
        display: false
      },
      grid: {
        display: false
      },
      border: {
        width: 0
      }
    },
    y: {
      ticks: {
        color: '#D2D3D6',
        font: {
          size: 14,
        },
        crossAlign: "near",
      },
      title: {
        display: true,
        text: "Name of custodian",
        padding: {
          bottom: 18
        }
      },
      grid: {
        display: false
      },
      border: {
        width: 0
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
  }
};

const HorizontalBarChart = () => {
  const horizontalBarTrack = {
    id: 'horizontalBarTrack',
    beforeDatasetsDraw(chart: ChartJS<'bar'>) {
      const { ctx, data, chartArea , scales } = chart;
      const { top, bottom, left, right, width, height } = chartArea;
      const barThickness = chart.getDatasetMeta(0).data[0].height;
      const radius = 15;

      ctx.save();

      data.datasets[0].data.forEach((datapoint, index) => {
        const y = scales.y.getPixelForValue(index);
        const halfBarThickness = barThickness / 2;

        ctx.beginPath();

        ctx.moveTo(left + radius, y - halfBarThickness);
        ctx.arcTo(left, y - halfBarThickness, left, y + halfBarThickness, radius);
        ctx.arcTo(left, y + halfBarThickness, right, y + halfBarThickness, radius);
        ctx.arcTo(right, y + halfBarThickness, right, y - halfBarThickness, radius);
        ctx.arcTo(right, y - halfBarThickness, left + radius, y - halfBarThickness, radius);
        ctx.closePath();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();

        const valueLabel = Array.isArray(datapoint) ? datapoint[0] : datapoint; // Assuming data.labels contain values
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.font = 'bold 16px Arial, sans-serif'; // Adjust font size and family as needed
        ctx.textBaseline = 'middle';

        ctx.fillText(valueLabel?.toString() ?? "", right - ctx.measureText(valueLabel?.toString() ?? "").width - 10, y);
      })
    }
  }

  return (
    <Bar
      data={HORIZONTAL_CHART_DATA}
      options={options}
      plugins={[horizontalBarTrack]}
    />
  )
}

export default HorizontalBarChart;