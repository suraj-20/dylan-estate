import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import ProperyDetails from "./pages/property-details/ProperyDetails";
import PreviewPage from "./pages/preview/PreviewPage";
import PreviewNavbar from "./components/navbar/PreviewNavbar";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/preview" ? <PreviewNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property-detail" element={<ProperyDetails />}></Route>
        <Route path="/preview" element={<PreviewPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
