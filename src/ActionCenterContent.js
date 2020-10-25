import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const LightGreenCard = withStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.light,
      marginBottom: theme.spacing(4)
    }
  };
})(Card);

export default function ActionCenterContent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <LightGreenCard>
        <Box m={2} fontWeight={600} display="flex" alignItems="center">
          <Icon color="primary">notifications_none</Icon>
          <Box mx={1}>
            Welcome to The Mom Project! Complete your profile to increase
            interest from prospective employers.
          </Box>
          <IconButton aria-label="expand" onClick={handleExpandClick}>
            <Icon color="primary">
              {"keyboard_arrow_" + (expanded ? "up" : "down")}
            </Icon>
          </IconButton>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div>Togglable content :)</div>
            <Button variant="contained" color="primary">
              Check it out!
            </Button>
          </CardContent>
        </Collapse>
      </LightGreenCard>
    </>
  );
}
