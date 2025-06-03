import { useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardRight from "../pages/dashboard/DashboardRight";

const HomePageLayout = () => {
  const user = {
    username: "Yasser Benseghier",
    email: "",
    profilePicture: "https://i.pravatar.cc/150?img=3",
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile ? (
    <div className="flex flex-col">
      <div className="px-[20px] py-[15px]">
        <Header />
        <div className="flex flex-col gap-4 mt-[10px]">
          <h1 className="text-secondary-500 text-xl font-semibold">
            Hi, {user.username}!
          </h1>
          <p className=" text-secondary-400 text-base font-medium">
            Let's finish your task today!
          </p>
        </div>
      </div>
      <div className="my-[20px]">
        <Dashboard />
      </div>
      <div className="my-[40px] px-[20px]">
        <DashboardRight />
      </div>
    </div>
  ) : (
    <div className="parent1 overflow-hidden">
      <div className="div11">
        <SideBar />
      </div>
      <div className="div22 bg-primary-0 px-[30px]">
        <Header />
      </div>
      <div className="div33 bg-[#f5f5f7] p-[30px]">
        <Dashboard />
      </div>
      <div className="div44 bg-[#f5f5f7] p-[15px]">
        <DashboardRight />
      </div>
    </div>
  );
};

export default HomePageLayout;
