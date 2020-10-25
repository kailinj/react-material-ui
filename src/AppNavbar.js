import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function AppNavbar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'white',
    },
    text: {
      color: theme.palette.primary.main,
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.text} variant="h6" noWrap>
          The Mom Project
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
