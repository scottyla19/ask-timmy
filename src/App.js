import React from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
