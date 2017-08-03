import React, { Component } from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {/* <Route path="/why" component={StartMenu} />
      <Route path="/what" component={RecallGame} />
      <Route path="/who" component={RecallGame} /> */}
    </div>
  </Router>;

export default App;
