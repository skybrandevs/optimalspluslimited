import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Privacy from "./components/pages/privacy";
import Footer from "./components/pages/partials/footer";
import Careers from "./components/pages/careers";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/privacy" component={Privacy}/>
        <Route path="/careers" component={Careers}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
