import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./partials/navbar";
import lightbulb from "../../images/lightbulb.mp4";
import playcueball from "../../images/playcueball.png";
import appsLogo from "../../images/appsLogo.svg";
import playLogo from "../../images/playLogo.svg";
import corevalues from "../../images/corevalues.png";
import transparent from "../../images/transparent.svg";
import realtime from "../../images/realtime.svg";
import tracktask from "../../images/tracktask.svg";
import story from "../../images/story.png";
import newsletter from "../../images/newsletter.png";
import face1 from "../../images/face1.png";
import face2 from "../../images/face2.png";
import face3 from "../../images/face3.png";
import write from "../../images/write.png";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";

const Landing = () => (

<div>

<div className="padding-nav">

<Navbar/>

</div>


<div className="row baked-twist">

<div className="col-sm-6">


<h1 className="intro-text-new"> Ideas & innovation for growth.  </h1>
<p className="sub-intro-new">Optimal Source Plus LTD is a creative agency
that leverages on advanced technologies to deliver
consolidated solutions through meaningful innovations.</p>

<img src={playcueball} className="img-fluid playcueball"/> <br/>

<div className="inline">

<a href="https://www.optimalsplus.com/cueball" target="_blank;">
<img src={playLogo} className="img-fluid applogo zoom"/>

<img src={appsLogo} className="img-fluid applogo zoom "/>
</a>



</div>

</div>


<div className="col-sm-6 ">
    

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={slide1} className="d-block w-100" alt="..."/>
    </div>
    {/*
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="..."/>
    </div>
    */}
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
    </div>

    <div className="carousel-item">
      <img src={slide4} className="d-block w-100" alt="..."/>
    </div>

  </div>
</div>

    
    {/*
<video src={lightbulb} className="img-fluid light-bulb" muted="true" autoplay="true" loop="true"></video>
    */}
</div>


</div>



{/**first part ended */}


<div className="background-color">


<div className="container">

<div className="row">


<div className="col-sm-3">
    
    <h3 className="facts">Core values </h3>
    <p className="sub-intro">facts about our services.</p>
    <img src={corevalues} className="img-fluid corevalues"/>

</div>

<div className="col-sm-3">
    
<div className="card zoom">
<img src={transparent} className="img-fluid icon-set"/> 
<h5 className="top-1">We have a transparent <br/> policy</h5>
<p className="top-2"> We understand how fragile trust is that is why we operate a policy that will ensure we keep yours.</p>

</div>

</div>

<div className="col-sm-3">

<div className="card zoom">
<img src={realtime} className="img-fluid icon-set"/> 
<h5 className="top-1">We deliver in real time</h5>

<p className="top-2"> With us, you never have to worry about running against the clock. with delivery in real time,Our team works hard to build efficient game API networks for great instant payout.

</p>
    
</div>
    
</div>

<div className="col-sm-3">

<div className="card zoom">
<img src={tracktask} className="img-fluid icon-set"/> 
<h5 className="top-1">Track Task</h5>

<p className="top-2">

we also place priority on our clients knowing our progress levels.

</p>
    
</div>
    
</div>


</div>


</div>

</div>

{/*second closing*/}


<div className="container"> 

<div className="row baked-twist">


<div className="col-sm-6">

<h3 className="facts">What we are about </h3>
<p className="sub-intro">Our story</p>

<p className="story"> Optimal Source Plus LTD is a creative agency that leverages on advanced technologies to deliver consolidated solutions through meaningful innovations.
Optimal Source Plus was founded by a team who are passionate about influencing the human lifestyle, trends, and perspectives. </p>

<Link to="/about">

<button className="btn-optimal"> Learn more </button>

</Link>

</div>


<div className="col-sm-6">
   
<img src={story} className="img-fluid story-img"/>

</div>



</div>

</div>

{/*third closing div */}

<div className="container">





<div className="card-newsletter">


<div className="row baked-twist">


<div className="col-sm-6">

<h1 className="newsletter-intro"> We share our story with the whole world.</h1>
<p className="newsletter-outro">Sign up for our newsletter &
See why millions of people across 195 countries enjoy our products and services.</p>

<a href="newsletter.html" target="blank;">
<button className="newsletter-btn"> Let's procced now </button>
</a>


</div>

<div className="col-sm-6">
    <img src={newsletter} className="img-fluid newsletter animated pulse  bounce-swing"/>
</div>


</div>


</div>


</div>

{/*end of newsletter section*/}




<div className="container">

    <div className="col-sm-12">
<p className="intro-testimonials"> <span><img src={write} className="img-fluid write"/></span> "Don’t just take our word for it" </p>
<h3 className="outro-testimonials">What our gamers & customers say..</h3>
</div>

<div className="row">


<div className="col-sm-4">
<div className="testimonial-card">

<img src={face1} className="img-fluid face zoom"/>
<h5 className="testimonial-name">Johnson Adebayo</h5>
<p className="testimonial-text">“Wow! The cueball app is an awesome product from optimal source plus Ltd. None like it for now. But still needs some improvements.
I love it. Well done developers. A nice job.”</p>

</div>
</div>

<div className="col-sm-4">

<div className="testimonial-card-2">

<img src={face2} className="img-fluid face zoom"/>
<h5 className="testimonial-name">Victoria Aderokun</h5>
<p className="testimonial-text">"Optimal source plus Ltd is a great company to collaborate with."</p>


</div>
    
</div>


<div className="col-sm-4">

<div className="testimonial-card-3">
<img src={face3} className="img-fluid face zoom "/>
<h5 className="testimonial-name">Jessica Abasi</h5>
<p className="testimonial-text">"Optimal plus source Ltd is highly technical and fanatically customer oriented."</p>


</div>
    
</div>


</div>




</div>






{/* main closing div */}
</div>


    );

export default Landing;
