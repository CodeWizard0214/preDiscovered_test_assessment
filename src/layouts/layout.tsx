import { ReactNode, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);

  return (
    <div className="flex flex-row bg-black-light-base h-screen overflow-auto">
      <div className={`md:block ${ isMobileSidebar ? "block" : "hidden" }`}>
        <Sidebar sidebarOpen={isMobileSidebar} setShowMobileSideBar={() => setIsMobileSidebar(false)} />
      </div>
      <div className="w-full overflow-auto">
        <Header setShowMobileMenu={() => setIsMobileSidebar(!isMobileSidebar)} />
        <main className="mx-auto p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
