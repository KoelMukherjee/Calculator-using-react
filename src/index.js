import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import UserDetails from "./components/user-details";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom' 

const routing = (  
    <Router>  
      <div> 
        <Route exact path="/" component={App} /> 
        <Route path="/users" component={UserDetails} />
      </div>  
    </Router>  
  )  
  ReactDOM.render(routing, document.getElementById('root'));  