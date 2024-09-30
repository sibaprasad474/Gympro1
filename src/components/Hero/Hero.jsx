import React from "react";
import { FaPlay } from "react-icons/fa6";
import img1 from "../../assets/img1.png";
import { motion } from "framer-motion"; // Import framer-motion

function Hero() {
  return (
    <>
      <div className="relative">
        {" "}
        {/* Changed to relative positioning */}
        <section className="w-[100vw] min-h-[650px]">
          {" "}
          {/* Ensure full width and height */}
          <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative mt-10">
            {/* Brand info with animation */}
            <div className="flex flex-col md:py-16 md:px-10 px-10 py-10 font-playfair justify-center md:rounded-[10%]">
              <motion.h1
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ duration:3 }}
                className="text-5xl lg:text-7xl font-[800] lg:leading-tight px-5"
              >
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health</span>{" "}
              </motion.h1>
              <motion.p
                initial={{ x: -150 }}
                animate={{ x: 0 }}
                transition={{ duration: 4 }}
                className="text-gray-600 xl:max-w-[400px] py-6 leading-relaxed text-xl px-5"
              >
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>
              {/* Button section */}
              <div className="flex mt-10 px-5">
                <button className="p-3 bg-primary text-white rounded-md text-xl hover:text-lg duration-200">
                  Order now
                </button>
                <button className="flex justify-center items-center text-2xl p-4 gap-1 font-bold">
                  <FaPlay />
                  Watch now
                </button>
              </div>
            </div>

            {/* Hero image with rotation animation */}
            <motion.div
              className="flex justify-center items-center py-16 px-16 md:py-[15vh] md:px-10"
              animate={{ rotate: [0, 360] }}
              transition={{ 
                duration: 4, 
                ease: "linear",  // Ensure smooth and consistent speed
                repeat: Infinity 
              }}
            >
              <img
                src={img1}
                alt="Gym illustration"
                className="xl:w-[700px] drop-shadow w-[100%]"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
