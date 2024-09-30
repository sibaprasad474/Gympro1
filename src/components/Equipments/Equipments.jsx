import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 2,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <FaDumbbell />,
    delay: 3,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GiGymBag />,
    delay: 4,
  },
];
function Equipments() {
  return (
    <div>
      <div className="container md:py-24 px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="flex flex-col gap-2 md:px-10">
            <h1 className="text-3xl md:text-5xl font-bold p-1">
              What we offer for you
            </h1>
            <p className="text-gray-500 p-1">
              It is a long established fact that a reader readable.
            </p>
          </div>
          {EquipmentData.map((item) => {
            return (
              <motion.div 
              initial={{x: -450}}
              animate={{x: 0}} 
              transition={{ duration: item.delay }}
              className="flex flex-col gap-1 md:px-4 p-5 md:py-3 rounded-[1%] bg-[#f7f2f6] md:rounded-[10%]">
                <div className="text-4xl p-2">{item.icon}</div>
                <div className="text-3xl font-bold p-2">{item.title}</div>
                <div className="text-lg p-2">{item.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Equipments;
