import React, { Component } from "react";

import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";
import { Icon } from "rmwc/Icon";

import "./CoVoDrawer.css";

class CoVoDrawer extends Component {
  render() {
    console.log(
      "Welcome into CoVoDrawer with drawerState : " + this.props.drawerState
    );
    return (
      <Drawer
        temporary
        open={this.props.drawerState}
        onClose={this.props.onDrawerClose}
      >
        <DrawerHeader>CoVo</DrawerHeader>
        <DrawerContent>
          <ListItem>
            <ListItemText>
              <a href="#" selected /> N1
              <Icon strategy="ligature">stars</Icon>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Pizza</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Icecream</ListItemText>
          </ListItem>
        </DrawerContent>
      </Drawer>
    );
  }
}

export default CoVoDrawer;
