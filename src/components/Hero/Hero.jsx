import React from "react";
import { FaPlay } from "react-icons/fa6";
import img1 from '../../assets/img1.png';
import { motion } from "framer-motion";  // Import framer-motion

function Hero() {
  return (
    <>
      <div className="absolute">
        <section className="w-[100vw]">
          <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">
            {/* brand info with animation */}
            <motion.div
              className="flex flex-col py-16 px-16 md:py-[15vh] md:px-10 font-playfair justify-center"
              initial={{ x: -100 }}         // Start from -100px (offscreen to the left)
              animate={{ x: 0 }}            // Animate to initial position (0px)
              transition={{ duration: 2 }}  // Animation duration
            >
              <h1 className="text-5xl lg:text-7xl font-bold lg:leading-tight">
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health</span>{" "}
              </h1>
              <p className="text-gray-600 xl:max-w-[400px] py-6 leading-relaxed text-xl">
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </p>
              {/* button section */}
              <div className="flex mt-10">
                <button className="p-3 bg-primary text-white rounded-md text-xl hover:text-lg duration-200">
                  Order now
                </button>
                <button className="flex justify-center items-center text-2xl p-4 gap-1 font-bold">
                  <FaPlay />
                  Watch now
                </button>
              </div>
            </motion.div>
            {/* Hero image with rotation */}
            <motion.div
              className="flex justify-center items-center py-16 px-16 md:py-[15vh] md:px-10"
              initial={{ rotate: 90 }}      // Initial rotation of +45 degrees
              animate={{ rotate: 0 }}       // Animate to 0 degrees (initial position)
              transition={{ duration: 2 }}  // Set animation duration
            >
              <img src={img1} alt="" className="w-[350px] xl:w-[700px] drop-shadow" />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
