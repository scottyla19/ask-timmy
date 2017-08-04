import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class What extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Sidebar />

          <div className="main">
            <h2> WHAT </h2>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default What;
