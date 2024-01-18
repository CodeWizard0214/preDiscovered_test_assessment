import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import MenuIcon from "./MenuIcon";

const Sidebar = () => {
  return (
    <aside
      className="h-screen px-5 py-7 flex flex-col items-center justify-between bg-white bg-opacity-5 border-r border-solid border-r-white border-opacity-10 shadow-2xl"
    >
      <div className="flex flex-col gap-14">
        <Image src="/assets/img/logo.png" alt="logo" width={57} height={57} />
        <div className="flex flex-col gap-8 items-center">
          <MenuIcon imgURL="/assets/img/graph.svg" width={25} height={25} url="/" />
          <MenuIcon imgURL="/assets/img/agreement.svg" width={25} height={25} url="/matters" />
          <MenuIcon imgURL="/assets/img/bell.svg" width={23} height={25} />
          <MenuIcon imgURL="/assets/img/rects.svg" width={25} height={25} />
          <MenuIcon imgURL="/assets/img/person.svg" width={25} height={25} />
          <MenuIcon imgURL="/assets/img/people.svg" width={25} height={25} />
          <MenuIcon imgURL="/assets/img/pie.svg" width={25} height={25} />
        </div>
      </div>
      <button className="w-12.5 h-12.5 rounded-full flex items-center justify-center bg-warning-50">
        <Image src="/assets/img/chat.svg" alt="chat" width={25} height={25} />
      </button>
    </aside>
  );
};

export default Sidebar;