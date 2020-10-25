import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";

export default function Buttons() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography color="textSecondary" variant="h2">
        Material UI Buttons
      </Typography>
      <Container>
        <Typography variant="h5">variant</Typography>
        <div className={classes.margin}>
          <Button>Default (text)</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </div>
        <Typography variant="h5">color</Typography>
        <div className={classes.margin}>
          <Button variant="contained">default (default)</Button>
          <Button color="primary" variant="contained">
            primary
          </Button>
          <Button color="secondary" variant="contained">
            secondary
          </Button>
        </div>
        <Typography variant="h5">custom theme</Typography>
        <ThemeProvider theme={customTheme}>
          <div className={classes.margin}>
            <Button variant="contained">default (default)</Button>
            <Button color="primary" variant="contained">
              primary
            </Button>
            <Button color="secondary" variant="contained">
              secondary
            </Button>
          </div>
        </ThemeProvider>
        <Typography variant="h5">size</Typography>
        <div className={classes.margin}>
          <Button size="small" variant="contained">
            small
          </Button>
          <Button size="medium" variant="contained">
            medium (default)
          </Button>
          <Button size="large" variant="contained">
            large
          </Button>
        </div>
        <Typography variant="h5">disabled</Typography>
        <div className={classes.margin}>
          <Button disabled variant="contained">
            {" "}
            disabled
          </Button>
        </div>
        <Typography variant="h5">disableElevation</Typography>
        <div className={classes.margin}>
          <Button disableElevation variant="contained">
            disableElevation
          </Button>
        </div>
        <Typography variant="h5">disableFocusRipple</Typography>
        <div className={classes.margin}>
          <Button disableFocusRipple variant="contained">
            disableFocusRipple
          </Button>
        </div>
        <Typography variant="h5">disableRipple</Typography>
        <div className={classes.margin}>
          <Button disableRipple variant="contained">
            disableRipple
          </Button>
        </div>
        <Typography variant="h5">endIcon</Typography>
        <div className={classes.margin}>
          <Button endIcon={<SaveIcon />} variant="contained">
            endIcon
          </Button>
        </div>
        <Typography variant="h5">startIcon</Typography>
        <div className={classes.margin}>
          <Button startIcon={<SaveIcon />} variant="contained">
            startIcon
          </Button>
        </div>
        <Typography variant="h5">fullWidth</Typography>
        <div className={classes.margin}>
          <Button fullWidth variant="contained">
            fullWidth
          </Button>
        </div>
        <Typography variant="h5">href</Typography>
        <div className={classes.margin}>
          <Button href="https://react.school" variant="contained">
            href
          </Button>
        </div>
      </Container>
      <div className={classes.spacer} />
    </ThemeProvider>
  );
}
