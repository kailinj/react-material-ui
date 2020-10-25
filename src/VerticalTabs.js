import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box, Tabs, Tab, Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTabs = withStyles(
  (theme) => {
    return {
      root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        height: 224,
        width: '100%',
        borderRight: `1px solid transparent`,
      },
      indicator: {
        left: 0,
        right: 'unset',
        width: '5px',
        backgroundColor: theme.palette.primary.main,
        maxHeight: '24px',
        marginTop: '12px',
      },
    };
  },
  { withTheme: true },
)(Tabs);

const StyledTab = withStyles(
  (theme) => {
    return {
      root: {
        paddingLeft: '15px',
      },
      wrapper: {
        alignItems: 'flex-start',
      },
      selected: {
        color: theme.palette.primary.main,
      },
    };
  },
  { withTheme: true },
)(Tab);

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTabs
        color="primary"
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <StyledTab label="Applications"></StyledTab>
        <StyledTab label="Lounge Activity"></StyledTab>
      </StyledTabs>
    </>
  );
}
