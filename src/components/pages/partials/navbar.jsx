import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import menu from "../../../images/menu.png";



const Navbar = () => (



    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand"> <img src={logo} className="img-fluid logo"/> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <img src={menu} className="img-fluid menu-small"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to ="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About?</Link>
        </li>
        <li className="nav-item">
          <Link to="/careers" className="nav-link">Careers</Link>
        </li>

      
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      <span className="navbar-text">
      <li className="nav-item hides">
          <a className="nav-link" href="stories.html" target="_blank;">Events</a>
        </li>
        <li className="nav-item hides">
        
        </li>
      </span>
    </div>
  </nav>


    );

    export default Navbar;