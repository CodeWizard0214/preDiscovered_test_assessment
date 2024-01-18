import Image from "next/image";

import Overview from "@/components/dashboard/Overview";
import BrokenDown from "@/components/dashboard/BrokenDown";
import Custodians from "@/components/dashboard/Custodians";
import Acknowledgement from "@/components/dashboard/Acknowledgement";

export default function Home() {
  return (
    <div className='flex flex-col gap-7.5'>
      <div className="flex lg:flex-row flex-col gap-7.5">
        <div className="flex-1">
          <Overview />
        </div>
        <div className="lg:flex-none flex-1">
          <BrokenDown />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-7.5">
        <div className="flex-1">
          <Custodians />
        </div>
        <div className="flex-1">
          <Acknowledgement />
        </div>
      </div>
    </div>
  );
}
