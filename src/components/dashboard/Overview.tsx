import Image from "next/image";
import React from "react";

import HoldCard from "./HoldCard";
import { HOLD_OVERVIEW_DATA } from "@/mock/mock";

const Overview  = () => {
  return (
    <div className="w-full h-full px-7.5 pt-7.5 text-white rounded-[20px] bg-black-light-100">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl leading-8 font-semibold">Holds Overview</p>
          <p className="text-base font-normal text-black-300">Holds Summery</p>
        </div>
        <button
          className="px-4 py-3 flex flex-row items-center gap-2 border border-solid border-blue-sky rounded-lg"
        >
          <Image src="/assets/img/export.svg" alt="export" width={16} height={16} />
          <p className="text-sm font-medium leading-5 text-white">Export</p>
        </button>
      </div>
      <div className="mt-7.5 w-full grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2">
        {
          HOLD_OVERVIEW_DATA.map((data, index) => (
            <HoldCard
              key={index}
              bgColor={data.bgColor}
              iconBg={data.iconBg}
              value={data.value}
              desc={data.desc}
              imgURL={data.imgURL}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Overview;