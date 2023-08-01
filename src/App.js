import CommingSoon from "./components/CommingSoon/CommingSoon.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
// import { useTranslation } from "react-i18next";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CommingSoon />} path="/comming-soon" />
      </Routes>
    </div>
  );
}

export default App;
