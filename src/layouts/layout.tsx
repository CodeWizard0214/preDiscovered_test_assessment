import { ReactNode } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row bg-black-light-base h-screen overflow-auto">
      <Sidebar />
      <div className="w-full overflow-auto">
        <Header />
        <main className="mx-auto p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
