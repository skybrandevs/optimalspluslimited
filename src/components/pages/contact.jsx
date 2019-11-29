import React from "react";
import Navbar from "./partials/navbar";
import contact from "../../images/contact.png";



const Contact = () => (

<div>


<div className="padding-nav">

<Navbar/>

</div>


<div className="container">


<div className="row">

<div className="col-sm-12">


<h4 className="contact-header">Contact Optimals Plus</h4>

<p className="contact-intro">Optimal Source Plus LTD is a creative agency that leverages on advanced technologies.</p>

<img src={contact} className="img-fluid contact animated pulse  bounce-swing"/>

</div>


</div>



</div>



<div className="container">


<div className="row">


<div className="col-sm-6">

<h4 className="col-1st">Looking for help?</h4>
<a href="contact.html" target="blank;">
<button className="newsletter-btn-2"> Talk to us </button>
</a>


</div>


<div className="col-sm-6">
    
<h4 className="col-2nd">Mailing Address</h4>
<p className="stylish">Optimals source plus Ltd <br></br> Lagos , Nigeria. <br></br> Tel - +234 812 428 8480 <br></br>

Mail - help@mail-optimalsplus.com
 </p>

</div>


</div>


</div>


</div>


    );

    export default Contact;
    