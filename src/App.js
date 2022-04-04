import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
