import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";


const Navbar = () => (



    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand"> <img src={logo} className="img-fluid logo"/> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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
          <a className="nav-link" href="contact.html" target="_blank;">Contact</a>
        </li>
      </ul>
      <span className="navbar-text">
      <li className="nav-item hides">
          <a className="nav-link" href="stories.html" target="_blank;">Great stories</a>
        </li>
        <li className="nav-item hides">
          <a className="nav-link" href="#"></a>
        </li>
      </span>
    </div>
  </nav>


    );

    export default Navbar;