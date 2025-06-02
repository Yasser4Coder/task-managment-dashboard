import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const user = {
    username: "Yasser Benseghier",
    email: "",
    profilePicture: "https://i.pravatar.cc/150?img=3",
  };
  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="hidden md:flex flex-col items-center">
        <h1 className="text-secondary-500 text-xl font-semibold">
          Hi, {user.username}!
        </h1>
        <p className=" text-secondary-400 text-base font-medium">
          Let's finish your task today!
        </p>
      </div>
      <div className="flex md:hidden items-center gap-4">
        <FiMenu size={24} style={{ cursor: "pointer" }} />
      </div>
      <div className="flex items-center gap-4 relative">
        {/* Notification Icon */}
        <div
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
        >
          <IoNotificationsOutline className="w-[24px] h-[24px]" />
          <div className="absolute top-[30%] left-[51%] bg-red-600 w-[10px] h-[10px] rounded-full"></div>
        </div>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute top-[60px] right-0 w-[300px] bg-white shadow-xl rounded-xl p-4 z-50">
            <h2 className="text-lg font-semibold mb-3">Notifications</h2>
            <ul className="space-y-2 max-h-[200px] overflow-y-auto">
              <li className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                New task assigned to you
              </li>
              <li className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                Meeting at 3PM with Mentor
              </li>
              <li className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                Your profile was viewed
              </li>
            </ul>
          </div>
        )}

        {/* Profile Picture or Initial */}
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-[52px] h-[52px] cursor-pointer rounded-full"
          />
        ) : (
          <div className="w-[52px] h-[52px] cursor-pointer rounded-full bg-primary-300 flex items-center justify-center text-white font-semibold text-lg">
            {user.username.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
