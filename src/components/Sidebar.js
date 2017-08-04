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
            <h3>Go home </h3>
          </Link>
          <Link to="/why">
            <h3> Why is this a thing? </h3>
          </Link>
          <Link to="/who">
            <h3> Who is Timmy? </h3>
          </Link>
        </div>
        <Divider />

        <QuestionsList listType="noAnswer" />
        <QuestionsList listType="publicAnswer" />
      </div>
    );
  }
}

export default Sidebar;
