import { NavLink } from "react-router-dom";
// import logo from "../assets/images/logo.png";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-start">
          {/* <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"> */}
          {/* <!-- Logo --> */}
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <span className="hidden md:block text-white text-5xl font-bold ml-2">
              Mis Gym
            </span>
          </NavLink>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
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
          </div>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
