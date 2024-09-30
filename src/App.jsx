import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
