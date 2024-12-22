import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("داشبورد");
  const listItems = [
    {
      label: "داشبورد",
      icon: <MdDashboard />,
    },
    {
      label: "مدیریت اجناس",
      icon: <MdOutlineShoppingBag />,
    },
    {
      label: "کاربران",
      icon: <HiOutlineUsers />,
    },
    {
      label: "تنظیمات",
      icon: <CiSettings />,
    },
  ];
  return (
    <div className="w-1/4 h-full bg-white text-gray-600 fixed shadow-md">
      <div className="p-4 text-lg font-bold">رسا پرو</div>
      <ul className="mt-4 flex flex-col px-3 gap-y-2">
        {listItems.map((item, index) => (
          <li
            onClick={() => setActiveItem(item.label)}
            key={index}
            className={`p-2 ${
              activeItem === item.label
                ? "bg-primary text-white w-full hover:bg-primary"
                : "hover:bg-gray-100"
            } cursor-pointer flex items-center gap-x-1 rounded`}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
