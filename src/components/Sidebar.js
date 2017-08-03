import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuestionsList from "./QuestionsList";
import Divider from "material-ui/Divider";

const sidebarNavStyle = {
  gridArea: "sidebar",
  display: "flex",
  flexFlow: "column wrap",
  alignItems: "flex-start",
  paddingLeft: "35%"
};
class Sidebar extends Component {
  render() {
    return (
      <div
        className="sidebar"
        style={{
          borderRight: "1px solid gray",
          boxShadow: "1px 0 2px gray"
        }}
      >
        <div className="sidebarNav" style={sidebarNavStyle}>
          <Link to="/">
            <h3> HOME? </h3>
          </Link>
          <Link to="/why">
            <h3> WHY? </h3>
          </Link>
          <Link to="/what">
            <h3> WHAT? </h3>
          </Link>
          <Link to="/who">
            <h3> WHO? </h3>
          </Link>
        </div>
        <Divider />

        <QuestionsList />
      </div>
    );
  }
}

export default Sidebar;
