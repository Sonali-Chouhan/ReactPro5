import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
     <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          React Redux Contact Book
        </Link>
        <Link to={"/from"}>From</Link>
        <Link to={"/Table"}>Table</Link>
      </nav>
    </div>
  )
}

export default Navbar