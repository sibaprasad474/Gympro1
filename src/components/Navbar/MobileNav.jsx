import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../Mockdata/data";
function MobileNav({ open }) {
  if (open) {
    return (
      <>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-20 block md:hidden left-0 w-full h-screen z-20"
          >
            <div className="container bg-primary text-white w-[80vw] rounded-xl">
              <ul className="flex justify-center items-center flex-col p-6 gap-8">
                {NavbarMenu.map((item) => {
                  return (
                    <li key={item.key}>
                      <a
                        href={item.link}
                        className="inline-block hover:text-primary font-semibold"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }
}

export default MobileNav;
