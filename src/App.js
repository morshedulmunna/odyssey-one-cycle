import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Error404 from "./component/error404/Error404";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import useLoad from "./hooks/customHook";
import Dashboard from "./pages/Dashboard";

export const ThemeContext = React.createContext([]);

function App() {
  const [review] = useLoad();
  return (
    <>
      <Navbar />
      <ThemeContext.Provider value={review}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
