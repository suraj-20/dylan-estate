import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProperyDetails from "./pages/property-details/ProperyDetails";
import PreviewPage from "./pages/preview/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property-detail" element={<ProperyDetails />}></Route>
        <Route path="/preview" element={<PreviewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
