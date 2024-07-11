import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProperyDetails from "./pages/property-details/ProperyDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property-detail" element={<ProperyDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
