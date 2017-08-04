import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import { List, ListItem } from "material-ui/List";
import FontIcon from "material-ui/FontIcon";

class MainHome extends Component {
  render() {
    return (
      <div className="main">
        <h2>RECENT QUESTIONS</h2>
        <List>
          <ListItem
            primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            initiallyOpen={true}
            leftAvatar={
              <Avatar
                icon={
                  <FontIcon className="material-icons">account_circle</FontIcon>
                }
              />
            }
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
                leftAvatar={
                  <Avatar
                    src="/images/timmy-avatar.jpg"
                    size={45}
                    style={{ border: "2px solid #199ED8" }}
                  />
                }
                rightIcon={
                  <FontIcon className="material-icons" color="#199ed8">
                    question_answer
                  </FontIcon>
                }
              />
            ]}
          />
          <Divider />
          <ListItem
            primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            initiallyOpen={true}
            leftAvatar={
              <Avatar
                icon={
                  <FontIcon className="material-icons">account_circle</FontIcon>
                }
              />
            }
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"
                leftAvatar={
                  <Avatar
                    src="/images/timmy-avatar.jpg"
                    size={45}
                    style={{ border: "2px solid #199ED8" }}
                  />
                }
                rightIcon={
                  <FontIcon className="material-icons" color="#199ed8">
                    question_answer
                  </FontIcon>
                }
              />
            ]}
          />
        </List>
        <Divider />
      </div>
    );
  }
}
export default MainHome;
