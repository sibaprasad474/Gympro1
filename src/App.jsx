import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Equipments from "./components/Equipments/Equipments";
import Footer1 from "./components/footer/Footer1";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
