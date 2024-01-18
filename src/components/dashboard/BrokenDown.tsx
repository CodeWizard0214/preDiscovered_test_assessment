import React from "react";
import DoughnutChart from "../Charts/DoughnutChart";
const BrokenDown = () => {
  return (
    <div className="w-full h-full px-7.5 pt-7.5 pb-12 text-white rounded-[20px] bg-black-light-100">
      <p className="text-xl leading-8 font-semibold">Broken Down By Case Type</p>
      <DoughnutChart/>
    </div>
  )
}

export default BrokenDown;