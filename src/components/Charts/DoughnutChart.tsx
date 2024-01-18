import React, { useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { DOUGHNUT_DATA } from "@/mock/mock";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)

const DoughnutChart  = () => {

 const data ={
    labels:  DOUGHNUT_DATA.map(item => item.label),
    datasets: [
        {
          lable: "Poll",
          data: DOUGHNUT_DATA.map(item => item.value),
          backgroundColor: ['#323140','#AE262C', '#3A0CA3', '#F6921E', '#D8DF20', "#AE262C"],
          borderColor: ['#323140', '#AE262C', '#3A0CA3', '#F6921E', '#D8DF20', "#AE262C"],
          borderRadius: 100,
          spacing: -110,
          cutout:'85%',
          rotation: -90,
        }
    ],
 }

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 11,
        padding: 25,
        font: {
          size: 16,
          family: "Poppins"
        },

        color: 'white',
      }
    },
  },
};

const doughnutLabel = {
  id: 'doughnutLabel',
  afterDatasetsDraw(chart: ChartJS, args: number[], plugins: unknown) {
    const {ctx, data} = chart;

    const centerX = chart.getDatasetMeta(0).data[0].x;
    const centerY = chart.getDatasetMeta(0).data[0].y;

    //text
    ctx.save();
    ctx.font = 'bold 38px Poppins',
    ctx.fillStyle = 'white',
    ctx.textAlign = 'center';
    ctx.fillText(DOUGHNUT_DATA.reduce((acc, item) => acc + parseInt(item.value), 0).toString(), centerX, centerY+10);
  }
}
  return (
    <div className="w-full h-full text-white rounded-[20px] bg-black-light-100">
        <Doughnut
            data={data}
            options={options}
            plugins={[doughnutLabel]}
            width={300}
        >
        </Doughnut>
    </div>
  )
}

export default DoughnutChart;