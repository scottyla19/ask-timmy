import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Badge from "material-ui/Badge";
import FontIcon from "material-ui/FontIcon";

class QuestionsList extends Component {
  render() {
    return (
      <div className="questionsList">
        <List>
          <Subheader>Unanswered Questions</Subheader>
          <ListItem
            primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            disabled={true}
            leftAvatar={
              <Avatar
                icon={
                  <FontIcon className="material-icons">account_circle</FontIcon>
                }
              />
            }
            rightIcon={<Badge badgeContent={-1} secondary={true} />}
          />
          <ListItem
            primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            disabled={true}
            leftAvatar={
              <Avatar
                icon={
                  <FontIcon className="material-icons">account_circle</FontIcon>
                }
              />
            }
            rightIcon={<Badge badgeContent={-2} secondary={true} />}
          />
        </List>
        <Divider />
        <List>
          <Subheader>Public Questions</Subheader>
          <ListItem
            primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            leftAvatar={
              <Avatar
                icon={
                  <FontIcon className="material-icons">account_circle</FontIcon>
                }
              />
            }
            rightIcon={
              <FontIcon className="material-icons" color="gray">
                question_answer
              </FontIcon>
            }
          />
          <ListItem
            primaryText="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            leftAvatar={
              <Avatar
                icon={
                  <FontIcon className="material-icons">account_circle</FontIcon>
                }
              />
            }
            rightIcon={
              <FontIcon className="material-icons" color="gray">
                question_answer
              </FontIcon>
            }
          />
        </List>
      </div>
    );
  }
}

export default QuestionsList;
