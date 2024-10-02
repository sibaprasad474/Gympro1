import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Equipments from "./components/Equipments/Equipments";
import Footer1 from "./components/footer/Footer1";
import Cartbody from "./components/cart/Cartbody";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          {/* Route to the Home component (Hero component in your case) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Equipments />
                <Footer1 />
              </>
            }
          />
          <Route path="/cart" element={<Cartbody />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
