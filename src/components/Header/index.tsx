import Link from "next/link";
// import DarkModeSwitcher from "./DarkModeSwitcher";
// import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { useState } from "react";
import SearchInput from "../common/SearchInput";
import DropdownMessage from "./DropDownMessage";
import DropDownNotification from "./DropDownNotification";
import DropdownUser from "./DropDownUser";

const Header = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <header className="top-0 z-999 flex w-full items-center justify-end gap-20">
      <SearchInput keyword={keyword} onChange={setKeyword} />
      <div className="flex flex-row w-fit gap-3 pt-4">
        <DropDownNotification />
        <DropdownMessage />
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
