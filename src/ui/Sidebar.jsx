import { useEffect, useState } from "react";
import BoardList from "../features/board/BoardList";
import Logo from "./Logo";
import OpenSidebar from "./OpenSidebar";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth > 768) setIsSidebarOpen(false);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative row-span-full bg-secondary pr-6 text-primaryGray shadow-sm shadow-neutral-50">
      <div
        className={`relative w-full md:hidden ${
          isSidebarOpen ? "block" : " md:hidden"
        }`}
      >
        <OpenSidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      <div
        className={`mt-8 ${isSidebarOpen ? "block pt-12" : "hidden md:block"}`}
      >
        <Logo />
        <BoardList />
      </div>
    </div>
  );
}

export default Sidebar;
