import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Privacys from "./components/pages/privacys";
import Footer from "./components/pages/partials/footer";
import Careers from "./components/pages/careers";
import Contact from "./components/pages/contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/privacys" component={Privacys}/>
        <Route path="/careers" component={Careers}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
