import Link from "next/link";
// import DarkModeSwitcher from "./DarkModeSwitcher";
// import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SearchInput from "../common/SearchInput";
import DropdownMessage from "./DropDownMessage";
import DropDownNotification from "./DropDownNotification";
import DropdownUser from "./DropDownUser";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const pathname = usePathname();

  const replacePathName = (path : string) => {
    let modificedString = path.slice(1);
    console.log(modificedString, "modificedString")
   return modificedString.replace(modificedString, modificedString.charAt(0).toUpperCase() + modificedString.slice(1))
  } 
  // replacePathName(pathname);
  // console.log(pathname, "pathname")
  return (
    <header className="top-0 z-999 flex w-full items-center lg:justify-between justify-end gap-20 mt-7.5 px-8">
      <div className="hidden lg:flex flex-1 justify-between items-center gap-6 ">
        {
          pathname === "/" ? (
            <div className="flex gap-6">
              <p className="text-[white] text-4xl font-semibold">Dashboard</p>
              <button
                className="px-8.5 py-2.5 flex flex-row items-center gap-2 border border-solid border-blue-sky rounded-lg"
              >
                <p className="text-sm font-medium leading-5 text-white">Print</p>
              </button>
            </div >
          )  : <p className="text-[white] text-4xl font-semibold">{replacePathName(pathname)}</p>
        }
        <SearchInput keyword={keyword} onChange={setKeyword} />
      </div>
      <div className="flex flex-row w-fit gap-3">
        <DropDownNotification />
        <DropdownMessage />
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
