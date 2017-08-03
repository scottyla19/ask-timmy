import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Avatar from "material-ui/Avatar";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ask Timmy</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div className="headerWrapper">
          <div className="headerLeft">
            <Avatar
              src="/images/timmy-avatar.jpg"
              size={80}
              style={{ border: "2px solid #199ED8" }}
            />
          </div>
          <div className="headerMid">
            <h1>Ask Timmy</h1>
          </div>
          <div className="headerRight">
            <RaisedButton
              label="Login To Ask"
              labelStyle={{ color: "white" }}
              backgroundColor="#199ED8"
              className="signInButton"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
