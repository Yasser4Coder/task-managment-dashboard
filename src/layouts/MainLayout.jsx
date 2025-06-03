import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import Filter from "../components/filter/Filter";

const MainLayout = () => {
  return (
    <div className="parent">
      <div className="div1">
        <SideBar />
      </div>
      <div className="div2 flex flex-col justify-center bg-primary-0 px-[30px]">
        <Header />
        <Filter />
      </div>
      <div className="div3 bg-[#f5f5f7] p-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
