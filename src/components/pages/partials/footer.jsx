import React from "react";
import { Link } from "react-router-dom";
import privacyp from "../../../images/privacyp.png";



const Footer = () => (

<div className="footer-color">

<div className="container">

<div className="row">


<div className="col">

<h4 className="footer-topic">Company</h4>

<Link to="/about">
    <li className="li-2">About </li>
    </Link>
  
  <Link to="/contact">
    <li className="li-2"> Contact</li>
</Link>

</div>

<div className="col">
<h4 className="footer-topic">Product</h4>

<a href="https://cueballapp.com" target="_blank;">
<li className="li-2">The Cueball App</li>
</a>

<a href="https://www.cueballwallet.com" target="_blank;">
<li className="li-2">My Cueball Wallet</li>
</a>


    
</div>

<div className="col">
<h4 className="footer-topic">Discover</h4>

<Link to="/careers">
    <li className="li-2">Careers</li>
</Link>
<li className="li-2">Branding</li>
    
</div>


<div className="col">
<h4 className="footer-topic  auto-zie">Legal</h4>


<Link to="/privacy">
<li className="li-2"> Privacy & Terms </li>
</Link>

<img src={privacyp} className="img-fluid privacyp"/>
    
</div>



</div>


<div className="row">

<div className="col-sm-12">

<p className="written"> Optimal Source Plus LTD is a creative agency that leverages on advanced technologies to
deliver consolidated solutions <br></br>through meaningful innovations.
Optimal Source Plus was founded by a team who share a passion to influence
and <br></br>nurture the human spirit, one app, one person at a time.</p>


<h5 className="copy">T&C Applies | ©2019 Optimal source plus All rights reserved.</h5>

</div>

</div>



</div>

</div>



    );

    export default Footer;