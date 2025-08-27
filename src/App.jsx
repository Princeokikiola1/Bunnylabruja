import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkTreePage from "./pages/LinkTreePage";
import SpellBookingUI from "./pages/SpellBookingUI"; // adjust path if needed
import InfernoBotanicaPage from "./pages/InfernoBotanicaPage";
import ShopPage from "./pages/ShopPage";
import ServicesPage from "./pages/Services";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinkTreePage />} />
            <Route path="/shop" element={<ShopPage />} />
        <Route path="/Bookings" element={<SpellBookingUI />} />
           <Route path="/inferno" element={<InfernoBotanicaPage />} />
          <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
