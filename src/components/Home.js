import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainHome from "./MainHome";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <MainHome />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Home;
