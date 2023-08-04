import CommingSoon from "./components/CommingSoon/CommingSoon.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import PlaceOrderPage from "./pages/PlaceOrder/PlaceOrderPage.jsx";
import Stage from "./stage/Stage.jsx";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CommingSoon />} path="/comming-soon" />
        <Route element={ <PlaceOrderPage />} path="/placeOrder" />
      </Routes>
      {/* <Stage /> */}
    </div>
  );
}

export default App;
