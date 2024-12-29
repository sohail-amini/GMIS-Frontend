import { NavLink, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import logo from "../assets/images/gym.png";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  if (!token) {
    return <Login setToken={(newToken) => setToken(newToken)} />;
  }

  return (
    <nav className="bg-blue-700 border-b border-blue-500 w-full">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              src={logo}
              alt="Gym Logo"
              className="h-8 w-8 md:h-20 md:w-20"
            />
            <span className="hidden md:block text-white text-5xl font-bold ml-2">
              Mis Gym
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex space-x-4 ml-auto">
            <NavLink to="/" className={activeLink}>
              Home Page
            </NavLink>
            <NavLink to="/inventory" className={activeLink}>
              Inventory
            </NavLink>
            <NavLink to="/account" className={activeLink}>
              Account
            </NavLink>
          </div>
          {/* Logout Button */}
          <button
            onClick={logoutFunc}
            className="text-white bg-red-600 hover:bg-red-700 rounded-md px-4 py-2 ml-4">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
