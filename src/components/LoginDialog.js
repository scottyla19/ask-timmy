import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import firebase from "firebase";
import fire from "../fire";
import Snackbar from "material-ui/Snackbar";

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LoginDialog extends Component {
  constructor() {
    super();
    this.loginGoogle = this.loginGoogle.bind(this);
    this.signOut = this.signOut.bind(this);
    this.state = { open: false, snackbarOpen: false };
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
  }

  loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
    this.handleClose();
  }

  signOut() {
    // Sign out of Firebase.
    this.auth.signOut();
    this.setState({ snackbarOpen: true });
  }

  // Triggers when the auth state change for instance when the user signs-in or signs-out.
  onAuthStateChanged(user) {
    if (user) {
      console.log(user.displayName);
      this.setState({ user: user });
      // User is signed in!
      // Get profile pic and user's name from the Firebase user object.
      // var profilePicUrl = user.photoURL;
      // var userName = user.displayName;

      // // Set the user's profile pic and name.
      // this.userPic.style.backgroundImage =
      //   "url(" + (profilePicUrl || "/images/profile_placeholder.png") + ")";
      // this.userName.textContent = userName;

      // Show user's profile and sign-out button.
      // this.userName.removeAttribute("hidden");
      // this.userPic.removeAttribute("hidden");
      // this.signOutButton.removeAttribute("hidden");

      // Hide sign-in button.
      // this.signInButton.setAttribute("hidden", "true");

      // We load currently existing chant messages.
      // this.loadMessages();

      // We save the Firebase Messaging Device token and enable notifications.
      // this.saveMessagingDeviceToken();
    } else {
      this.setState({ user: false });
      // User is signed out!
      // Hide user's profile and sign-out button.
      // this.userName.setAttribute("hidden", "true");
      // this.userPic.setAttribute("hidden", "true");
      // this.signOutButton.setAttribute("hidden", "true");
      // // Show sign-in button.
      // this.signInButton.removeAttribute("hidden");
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />
    ];

    return (
      <div>
        {this.state.user
          ? <RaisedButton
              label="Logout"
              labelStyle={{ color: "white" }}
              backgroundColor="#199ED8"
              className="signInButton"
              onClick={this.signOut}
            />
          : <RaisedButton
              label="Login To Ask"
              labelStyle={{ color: "white" }}
              backgroundColor="#199ED8"
              className="signInButton"
              onClick={this.handleOpen}
            />}

        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <form className="loginForm">
            <div className="emailLogin">
              <TextField hintText="Username" floatingLabelText="Username" />
              <br />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
              />
              <br />
              <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
              />
            </div>

            <p className="loginMiddle"> Or </p>
            <div className="providerLogin">
              <RaisedButton
                label="Sign in with Google"
                labelStyle={{ color: "white" }}
                backgroundColor="#dd4b39"
                labelPosition="after"
                icon={<FontIcon className="fa fa-google" />}
                className="providerLoginBtn"
                onClick={this.loginGoogle}
              />
              <RaisedButton
                label="Sign in with Twitter"
                labelStyle={{ color: "white" }}
                backgroundColor="#4099ff"
                labelPosition="after"
                icon={<FontIcon className="fa fa-twitter" />}
                className="providerLoginBtn"

                /* onTouchTap={this.loginGoogle} */
              />
              <RaisedButton
                label="Sign in with Facebook"
                labelStyle={{ color: "white" }}
                backgroundColor="#3B5998"
                labelPosition="after"
                icon={<FontIcon className="fa fa-facebook" />}
                className="providerLoginBtn"
              />
              <RaisedButton
                label="Sign in with Github"
                labelStyle={{ color: "white" }}
                backgroundColor="#24292e"
                labelPosition="after"
                icon={<FontIcon className="fa fa-github" />}
                className="providerLoginBtn"
              />
            </div>
          </form>
        </Dialog>
        <Snackbar
          open={this.state.snackbarOpen}
          message="Logged Out."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
