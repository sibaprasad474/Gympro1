import React from "react";
import { NavbarMenu } from "../Mockdata/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="conatiner flex justify-between items-center py-2 px-4">
          {/* logo section  */}
          <div className="flex items-center gap-2 text-3xl py-6 px-6 font-[700] uppercase ">
            <FaDumbbell />
            <p>Gym</p>
            <p className="text-secondary">pro</p>
          </div>

          {/* menu section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.key}>
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

          {/* icons section  */}
          <div className="py-2 px-4 flex justify-between items-center gap-2">
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 hidden md:block">
              <CiSearch />
            </button>
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button
              className="p-1 md:p-3 hover:bg-primary hover:text-white duration-200 text-primary font-semibold rounded-md border-2 border-primary md:block"
              onClick={() => navigate("/login")} // Navigate to /login on click
            >
              Login
            </button>
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

      {/* mobile menu sidebar section  */}
      <MobileNav open={open} />
    </>
  );
}

export default Navbar;
