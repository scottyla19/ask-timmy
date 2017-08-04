import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import LoginDialog from "./LoginDialog";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
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
            <LoginDialog />
            {/* <RaisedButton
              label="Login To Ask"
              labelStyle={{ color: "white" }}
              backgroundColor="#199ED8"
              className="signInButton"
              onClick={this.login}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
