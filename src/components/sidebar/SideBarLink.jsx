import { Link } from "react-router-dom";

const SideBarLink = ({ title, to, icon, selected }) => {
  return (
    <Link
      to={to}
      className={`w-full max-w-[188px] text-center flex items-center gap-3 ${
        selected ? "bg-[#f5f5f7]" : ""
      }  hover:bg-[#eaeaec] transition-colors duration-200 rounded-xl py-3 px-4`}
    >
      <div className="text-secondary-500 text-xl">{icon}</div>
      <span className="font-medium text-sm text-secondary-500">{title}</span>
    </Link>
  );
};

export default SideBarLink;
