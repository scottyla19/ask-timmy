import React from "react";
import Home from "./components/Home";
import Who from "./components/Who";
import What from "./components/What";
import Why from "./components/Why";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/why" component={Why} />
      <Route path="/what" component={What} />
      <Route path="/who" component={Who} />
    </div>
  </Router>;

export default App;
