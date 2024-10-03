import React, { useState } from "react";
import { NavbarMenu } from "../Mockdata/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa"; // Importing Profile, Settings, and Logout icons
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set this to true for demonstration
  const [profileOpen, setProfileOpen] = useState(false); // Track profile dropdown status

  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged in status to false on logout
    navigate("/login"); // Redirect to login page
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen); // Toggle profile dropdown
  };

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-2 px-4">
          {/* logo section */}
          <div className="flex items-center gap-2 text-3xl py-6 px-6 font-[700] uppercase ">
            <FaDumbbell />
            <p>Gym</p>
            <p className="text-secondary">pro</p>
          </div>

          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-600">
              {NavbarMenu.map((item, index) => {
                return (
                  <li key={item.key || index}>
                    <a
                      href={item.link}
                      className="inline-block hover:text-primary font-semibold text-xl text-gray-600"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* icons and profile section */}
          <div className="py-2 px-4 flex justify-between items-center gap-4">
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 hidden md:block">
              <CiSearch />
            </button>
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>

            {/* Show Login/Logout based on login status */}
            {!isLoggedIn ? (
              <button
                className="p-1 md:p-3 hover:bg-primary hover:text-white duration-200 text-primary font-semibold rounded-md border-2 border-primary md:block"
                onClick={() => navigate("/login")} // Navigate to /login on click
              >
                Login
              </button>
            ) : (
              <div className="relative">
                {/* Profile Section (Visible if logged in) */}
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={toggleProfileDropdown} // Toggle dropdown on click
                >
                  <FaUserCircle className="text-2xl" /> {/* Profile Icon */}
                  <p className="text-xl font-semibold">Username</p>
                </div>

                {/* Profile Dropdown (Visible if profileOpen is true) */}
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        onClick={() => navigate("/profile")}
                      >
                        <FaUserCircle /> {/* Profile Icon */}
                        <span>Profile</span>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        onClick={handleLogout} // Handle logout
                      >
                        <FaSignOutAlt /> {/* Logout Icon */}
                        <span>Logout</span>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        onClick={() => navigate("/settings")}
                      >
                        <FaCog /> {/* Settings Icon */}
                        <span>Settings</span>
                      </li>
                      
                      
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Hamburger menu */}
            <button
              className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 block md:hidden"
              onClick={() => setOpen(!open)}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu sidebar section */}
      <MobileNav open={open} />
    </>
  );
}

export default Navbar;
