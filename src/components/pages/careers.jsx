import React from "react";
import Navbar from "./partials/navbar";
import careers from "../../images/careers.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import face from "../../images/face.png";


const Careers = () => (


    <div>


<div className="container">

<Navbar/>

</div>


<div className="container">

<div className="row">

<div className="col-sm-6">
<h1 className="intro-text"> Careers at Optimals Plus.</h1>
<p className="sub-intro"> Join us in helping African grow ; start your <br></br> path with an awesome career with us.</p>

<button className="btn-optimal"> See all openings </button>

</div>


<div className="col-sm-6">

<img src={careers} className="img-fluid"/>


</div>



</div>


</div>



<div className="container">

<div className="row">


<div className="col-sm-10">

    <h5 className="looking-for">We are looking for Africa's most<br></br> creative minds</h5>
    <p className="looking-for-2">Optimals Plus Ltd is the next generation of  digital tech startup in Africa.</p>
    <div className="row-gallary">
  <div className="column">
    <img src={image1} className="rounder-border"/>
    <img src={image5} className="rounder-border"/>
    
  </div>
  <div className="column">
  <img src={image2} className="rounder-border"/>
  </div>
  <div className="column">
  <img src={image3} className="rounder-border"/>
  <img src={image6} className="rounder-border"/>
  </div>
  <div className="column">
  <img src={image4} className="rounder-border"/>
  </div>
</div>




</div>


<div className="col-sm-2">



</div>


</div>


</div>


<div className="container">


<div className="row">


<div className="col-sm-12">

<h4 className="roles">Open roles</h4>
<img src={face} className="img-fluid face"/>
<p className="sorry-text">Sorry there are no openings at the moment , Kindly check back for future chances...</p>



</div>


</div>


</div>

    </div>


    );

    export default Careers;
    