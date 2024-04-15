import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Rooms from "./components/Rooms.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import Services from "./components/Services.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./ContactUs.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
