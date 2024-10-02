import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.png";
import setting1 from "../../assets/setting1.png";

const Signup = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., API call)
    // Once signup is successful, navigate to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <motion.div
          className="hidden md:block lg:w-1/2 bg-cover"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <img src={setting1} alt="Gym illustration" className="w-full" />
        </motion.div>

        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Create an Account</p>
          <form onSubmit={handleSignup}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="text"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                required
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-center text-center">
            <p className="text-xs text-gray-500 capitalize w-full">
              Already have an account?
              <span
                className="text-blue-700 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {" "}
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
