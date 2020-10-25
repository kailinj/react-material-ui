import React from "react";
import {
  Drawer,
  Toolbar,
  Box,
  Typography,
  Divider,
  Avatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VerticalTabs from "./VerticalTabs";

export default function AppLeftDrawer() {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerContainer: {
      overflow: "auto"
    },
    avatar: {
      height: "120px",
      width: "120px",
      border: "1px solid blue"
    }
  }));

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <Box m={3}>
          <Avatar className={classes.avatar} src="./avatar.svg"></Avatar>
          <Box my={2}>
            <Box mb={1}>
              <Typography variant="h4">Welcome, Kailin!</Typography>
            </Box>
            <Typography variant="caption">
              <Box display="flex">
                <Box fontWeight="fontWeightBold">TALENT PROFILE: </Box>
                &nbsp;Complete!
              </Box>
            </Typography>
          </Box>
          <Divider></Divider>
        </Box>
        <VerticalTabs></VerticalTabs>
      </div>
    </Drawer>
  );
}
