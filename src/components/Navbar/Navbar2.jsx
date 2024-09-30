import React from "react";
import { NavbarMenu } from "../Mockdata/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import MobileNav2 from "./MobileNav2";
import { useState } from "react";
function Navbar2() {
    const [open,setOpen]=useState(false)
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 px-4">
          {/* logo section  */}
            <div className="py-3 px-3 flex justify-center items-center gap-2 text-2xl">
                <FaDumbbell/>
                <p className="text-secondary">Gym</p>
                <p>pro</p>
            </div>
          {/* items section  */}
            <div className="py-2 px-2 hidden md:block">
                <ul className="flex justify-between items-center gap-6">
                    {
                        NavbarMenu.map((item)=>{
                            return(
                                <li className="text-lg hover:text-primary duration-200 font-semibold" key={item.id}><a href={item.link}>{item.title}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
          {/* icons section + mobile hamburger */}
          <div className="py-2 px-2 flex justify-center items-center gap-4">
            <button className="text-2xl hover:bg-primary p-2 rounded-full duration-200">
                <CiSearch/>
            </button>
            <button className="text-2xl hover:bg-primary p-2 rounded-full duration-200">
                <PiShoppingCartThin/>
            </button>
            <button className="p-2 hover:bg-primary hover:text-white duration-200 text-primary font-semibold rounded-md border-2 border-primary hidden md:block">
                Login
            </button>
            <button className="text-2xl block md:hidden" onClick={()=>{setOpen(!open)}}>
                <MdMenu/>
            </button>
          </div>

          {/* mobile responsive nav */}
          <MobileNav2 open={open}/>

        </div>
      </nav>
    </>
  );
}

export default Navbar2;
