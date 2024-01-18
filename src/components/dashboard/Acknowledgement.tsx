import React from "react";
import VerticalBarChart from "../Charts/VerticalBarChart";

const Acknowledgement = () => {
  return (
    <div className="w-full h-full px-7.5 pt-7.5 pb-12 text-white rounded-[20px] bg-black-light-100">
      <p className="text-xl leading-8 font-semibold">Legal Hold Acknowledgement Status by Case</p>
      <div className="pt-5">
        <VerticalBarChart />
      </div>
    </div>
  )
}

export default Acknowledgement;