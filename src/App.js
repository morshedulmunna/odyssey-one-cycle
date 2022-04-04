import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import useLoad from "./hooks/customHook";

export const ThemeContext = React.createContext([]);

function App() {
  const [review, setReview] = useLoad();
  return (
    <>
      <Navbar />
      <ThemeContext.Provider value={review}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
