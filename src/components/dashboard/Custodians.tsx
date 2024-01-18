import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import HorizontalBarChart from "../Charts/HorizontalBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Custodians  = () => {

  return (
    <div className="w-full h-full px-7.5 pt-7.5 pb-12 text-white rounded-[20px] bg-black-light-100">
      <p className="text-xl leading-8 font-semibold">Custodians Under Hold</p>
      <HorizontalBarChart />
    </div>
  )
}

export default Custodians;