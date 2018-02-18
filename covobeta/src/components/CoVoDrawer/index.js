import React, { Component } from "react";

//Installed dependencies imports
import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";
import { Link } from "react-router-dom";

//CoVo components imports

//Content imports
import "./CoVoDrawer.css";

//Temporary or unclassified imports

//Beginning of implementation
class CoVoDrawer extends Component {
  render() {
    return (
      <div id="covo-drawer">
        <Drawer
          temporary
          open={this.props.drawerState}
          onClose={this.props.onDrawerClose}
        >
          <DrawerHeader>
            <Link
              className="black-link"
              to="/"
              onClick={this.props.onDrawerClose}
            >
              CoVo
            </Link>
          </DrawerHeader>
          <DrawerContent>
            <ListItem>
              <ListItemText>
                <Link
                  className="black-link"
                  to="/"
                  onClick={this.props.onDrawerClose}
                >
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link
                  className="black-link"
                  to="/forum"
                  onClick={this.props.onDrawerClose}
                >
                  Forum
                </Link>
              </ListItemText>
            </ListItem>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default CoVoDrawer;
