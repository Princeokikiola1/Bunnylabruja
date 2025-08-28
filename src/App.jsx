import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkTreePage from "./pages/LinkTreePage";
import SpellBookingUI from "./pages/SpellBookingUI"; 
import InfernoBotanicaPage from "./pages/InfernoBotanicaPage";
import ShopPage from "./pages/ShopPage";
import ServicesPage from "./pages/Services";
import ProductPage from "./pages/ProductPage"; 
import ReadingBooking from "./pages/ReadingBooking"; // <-- new booking page
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinkTreePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/bookings" element={<SpellBookingUI />} />
        <Route path="/inferno" element={<InfernoBotanicaPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/custom-workings" element={<ProductPage />} /> 
        {/* Custom Workings page */}
        <Route path="/reading-booking" element={<ReadingBooking />} /> 
        {/* New Reading Booking page */}
      </Routes>
    </Router>
  );
}

export default App;
