import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Equipments from "./components/Equipments/Equipments";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <div>
        <Navbar />
        <Hero />
        <Equipments/>
      </div>
       
    </div>
  );
}

export default App;
