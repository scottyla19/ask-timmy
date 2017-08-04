import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Who extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Sidebar />

          <div className="main">
            <h2> Who is Timmy? </h2>
            <p>
              Who is Timmy? Timmy is our friend and he knows best. He wise
              beyond his years and is always available to share his wisdom,
              whether we request it or not. Being the generous people that are
              we have decided to create a platform for Timmy to share his vast
              repository of knowledge and wisdom.
            </p>

            <h3> Things Timmy does well:</h3>
            <ul className="thumbup">
              <li> Fly random places</li>
              <li> Show up when you least expect/want it</li>
              <li> College, lots of people go for 7 years.</li>
              <li>
                Throw sharp things.
                <a
                  href="http://missoulian.com/sports/success-in-the-sun-montana-qualifies-athletes-for-big-sky/article_cfafdf4c-941a-5ac4-ab61-cea38158358f.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out the Men's Javelin results at the bottom.
                </a>
              </li>
              <li>
                Give answers to all of your questions (sometimes unwanted)
              </li>
            </ul>
            <h3> Things Timmy doesn't do well:</h3>
            <ul className="thumbdown">
              <li> Grown up things.</li>
              <li>
                College, usually people get multiple or advanced degrees after 7
                years.
              </li>
            </ul>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Who;
