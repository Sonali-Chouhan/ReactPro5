import React from "react";
import Home from "./Component/Home";
import Table from "./Component/Table";
import From from "./Component/From";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/table">Table</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<From />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
