import React from "react";
import Home from "./Component/Home";
import LoginForm from "./Component/LoginForm";
import Registration from "./Component/Registration";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/userlogin">LoginForm</Link>
          <Link to="/user-registration">Registration</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userlogin" element={<LoginForm />} />
          <Route path="/user-registration" element={<Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
