import Logo from "../../assets/sideBar/Logo.png";
import SideBarLink from "./SideBarLink";
import HelpCenter from "./HelpCenter";
import { useLocation } from "react-router-dom";

import {
  FiGrid,
  FiCheckSquare,
  FiUsers,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

const SideBar = () => {
  const location = useLocation();
  const links = [
    { title: "Overview", icon: <FiGrid />, path: "/" },
    { title: "Task", icon: <FiCheckSquare />, path: "/task" },
    { title: "Mentors", icon: <FiUsers />, path: "/mentors" },
    { title: "Message", icon: <FiMessageSquare />, path: "/message" },
    { title: "Settings", icon: <FiSettings />, path: "/settings" },
  ];
  return (
    <div className=" bg-primary-0 gap-[50px] pt-[25px] w-full flex h-full flex-col items-center max-w-[252px]">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-[50px] w-full items-center h-full justify-between">
        <div className="w-full gap-[20px] flex flex-col text-center items-center">
          {links.map((link, index) => (
            <SideBarLink
              selected={location.pathname === link.path}
              key={index}
              to={link.path}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </div>
        <HelpCenter />
      </div>
    </div>
  );
};

export default SideBar;
