
import React from "react";
import Home from "./Component/Home";
import Table from "./Component/Table";
import From from "./Component/From";
import About from "./Component/About";
import { ToastContainer} from 'react-toastify';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/userfrom">Form</Link>
          <Link to="/userlist">Table</Link>
          <Link to="/about">About</Link>

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userfrom" element={<From />} />
          <Route path="/userlist" element={<Table />} />
          <Route path="/userfrom/:id" element={<From />} />
          <Route path="about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
  }
  export default App