import React from "react";
import { IoFitness } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <div className="py-16 px-16 md:py-[5vh] md:px-10 bg-primary text-white mt-[5vh]">
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2024 Gym Pro. All rights reserved.
        </Typography>

        {/* Social media icons */}
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-4">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 focus:text-blue-500 text-2xl transition-colors"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 focus:text-blue-500 text-2xl transition-colors"
            >
              <FaSquareInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 focus:text-blue-500 text-2xl transition-colors"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-500 focus:text-blue-500 text-2xl transition-colors"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
