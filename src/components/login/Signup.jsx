import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import setting1 from "../../assets/setting1.png";
import Footer1 from "../footer/Footer1";
const Signup = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // State variables to store form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Log the form data to console
    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    // Perform signup logic here (e.g., API call)
    // Once signup is successful, navigate to the login page
    navigate("/login");
  };

  return (
    <>
    <div className="flex items-center justify-center mt-10 w-full px-5 sm:px-0">
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} // Store value in state
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} // Store value in state
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
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Store value in state
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
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Store value in state
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Store value in state
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
    <Footer1/>
    </>
  );
};

export default Signup;
