import React from "react";
import Navbar from "./partials/navbar";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import micheal from "../../images/micheal.png";
import fila from "../../images/fila.png";
import moshood from "../../images/moshood.png";
import daniel from "../../images/daniel.png";
import valuesteamwork from "../../images/valuesteamwork.svg";
import vision from "../../images/vision.svg";
import customers from "../../images/customers .svg";
import kingmimo from "../../images/kingmimo.jpg";
import droneart from "../../images/droneart.png";
import juguo from "../../images/juguo.png";


const About = () => (


    <div>

<div className="padding-nav">
<Navbar/>
</div>


<div className="container">

<div className="row">

<div className="col-sm-12">

<h1 className="intro-text-2 padd-top-left-right"> Great ideas , innovations & stories.  </h1>
<p className="sub-text">Optimal Source Plus LTD is a creative agency that leverages on advanced technologies to
deliver consolidated solutions through meaningful innovations.
Optimal Source Plus was founded by a team who share a passion to influence
and nurture the human spirit, one app, one person at a time.</p>


</div>
</div>
</div>


<div className="container-fluid">

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


<div className="container">


<div className="col-sm-12">
    <h4  className="intro-text-3"> Meet our outstanding & creative team members</h4>
    <p className="sub-text-2">These People Work Hard So You Can Play Hard.</p>
</div>

<div className="row">

<div className="col-sm-3">
<img src={micheal} className="img-fluid profile"/>
<h5 className="team-names">Micheal Iyaki</h5>
<h6 className="team-title">Co-founder optimal plus</h6>
</div>

<div className="col-sm-3">
<img src={moshood} className="img-fluid profile"/>
<h5 className="team-names">Moshood Ogunsanya</h5>
<h6 className="team-title">Brand manager & co-operate communications.</h6>
</div>

<div className="col-sm-3">
<img src={fila} className="img-fluid profile"/>
<h5 className="team-names">Yemi Olufelo</h5>
<h6 className="team-title">Business & development.
</h6>
</div>

<div className="col-sm-3">
<img src={daniel} className="img-fluid profile"/>
<h5 className="team-names">Daniel Iyaki</h5>
<h6 className="team-title">Director of operations.</h6>
</div>


</div>


</div>


<div className="footer-color">

<div className="container">


    <div className="col-sm-12">
        <h4 className="topic-header">What defines us..</h4>
        <p className="topic-title"> Our values define the Optimal plus culture, who we are, and what we do every day. They are the foundation of our identity and the compass of our interaction with all stakeholders: customers, regulators, investors, partners and our communities. </p>
    </div>

<div className="row">

<div className="col-xl">

<div className="card-about">

<img src={vision} className="img-fluid design-size-2"/>
<h4 className="mission">Vision</h4>
<h6 className="mission-2">Our goals</h6>
<p className="para-title">Optimal Source Plus LTD is driven with the purpose of delivering an exciting experience to our clients.
We seek to apply our innovative expertise to contribute to society through technology and integrated solutions.
Our goal is to improve the lives of 5 million people through our products and services by the year 2040.
</p>

</div>


</div>

<div className="col-xl">

<div className="card-about">

<img src={valuesteamwork} className="img-fluid design-size"/>
<h4 className="mission"> Mission</h4>
<h6 className="mission-2">Our promise</h6>
<p className="para-title">At optimal source plus LTD, we want to leverage on advanced technologies to solve problems
while expressing our creativity in a way that impacts society one person at a time.
We always strive to understand specific digital and economical challenges
people face and provide solutions through our innovations.</p>

</div>
    
</div>


<div className="col-xl">

<div className="card-about">

<img src={customers} className="img-fluid design-size"/>
<h4 className="mission">Our Customer</h4>
<h6 className="mission-2">Satisfaction & Obsession</h6>
<p className="para-title">We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>

</div>
    
</div>





</div>

</div>



</div>


{/* collaborations*/}

<div className="container">

<div className="col-sm-12">

<h4 className="topic-header-2">We collaborate with more than <br></br>20 organizations around the globe.</h4>  
<p className="topic-title-33"> We have a diverse sense of brand experience with a well articulated <br></br>
strategy & tactical ideas that delivers client expectations. </p>
</div>


<div className="row">

<div className="col-sm-4">

<img src={kingmimo} className="img-fluid logo-client zoom"/>

</div>

<div className="col-sm-4">
<img src={droneart} className="img-fluid logo-client zoom"/>
</div>


<div className="col-sm-4">
<img src={juguo} className="img-fluid logo-client-2 zoom"/>
</div>

</div>



</div>



{/*end*/}



    </div>



    );

    export default About;
    