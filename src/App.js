import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
