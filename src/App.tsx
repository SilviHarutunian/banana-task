import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Courses" />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
