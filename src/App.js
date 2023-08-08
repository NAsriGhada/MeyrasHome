import CommingSoon from "./components/CommingSoon/CommingSoon.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import PlaceOrderPage from "./pages/PlaceOrder/PlaceOrderPage.jsx";
import Testimonial from "./pages/Testimonial/Testimonial.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CommingSoon />} path="/comming-soon" />
        <Route element={<PlaceOrderPage />} path="/placeOrder" />
        <Route element={ <Testimonial />} path="/testimonial" />
        <Route element={ <Contact />} path="/contact" />
        <Route element={ <Gallery />} path="/gallery" />
      </Routes>
    </div>
  );
}

export default App;
