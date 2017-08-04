import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Why extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Sidebar />

          <div className="main">
            <h2> Why is this a thing? </h2>
            <p>
              Why is this site a thing? We're glad you asked! We made this site
              mostly as a way to annoy our friend Timmy. Leo had the vision
              years ago when he bought this domain and this evil genius has been
              plotting this for years. I decided to help create it because I
              want more practice with my web development skills.
            </p>
            <p>
              Here is how the site works. You post a question and Timmy has 3
              days to answer. You must be patient to gain wisdom from Timmy. If
              Timmy does not answer then it opens up to others to answer it.
              Don't worry, Timmy will be notified via email whenever a new
              question is asked.
            </p>
            <p>
              So if you have problems with the idea talk to Leo. If you have
              technical problems still ask Leo. Or better yet ask Timmy by
              posting on the site.
            </p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Why;
