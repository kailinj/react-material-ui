import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import AppNavbar from "./AppNavbar";
import AppLeftDrawer from "./AppLeftDrawer";
import ActionCenterContent from "./ActionCenterContent";
import Expertises from "./Expertises";
import { indigo } from "@material-ui/core/colors";

const primaryLightColor = "#f3f7ff";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const ourTheme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["A200"],
      light: primaryLightColor
    },
    secondary: {
      main: "#b0eee3",
      light: "#f3fcfc"
    }
  },
  typography: {
    fontFamily: ["Poppins", '"Century Gothic"', "sans-serif"].join(","),
    h1: {
      fontFamily: "Abril Fatface"
    },
    h2: {
      fontFamily: "Abril Fatface"
    },
    h3: {
      fontFamily: "Abril Fatface"
    },
    h4: {
      fontFamily: "Abril Fatface",
      fontSize: "30px"
    },
    subtitle1: {
      fontFamily: "Abril Fatface",
      fontWeight: 700
    },
    body2: {
      fontWeight: 500
    }
  },
  props: {
    MuiButton: {
      disableElevation: true
    },
    // MuiInputLabel: {
    //   shrink: true
    // },
    MuiInput: {
      disableUnderline: true
    },
    MuiSelect: {
      fullWidth: true
    },
    MuiTextField: {
      fullWidth: true
    }
  },
  overrides: {
    MuiCardContent: {
      root: {
        padding: 40
      }
    },
    MuiCardHeader: {
      title: {
        fontSize: "20px",
        fontWeight: 500
      }
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Poppins"],
        html: {
          WebkitFontSmoothing: "auto"
        }
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: primaryLightColor
      }
    },
    MuiInput: {
      root: {
        // border: `none`,
        borderRadius: 3,
        boxShadow: `inset 0 1px 3px 0 rgba(142,145,153,0.2)`,
        outline: `none`,
        // outline: `1px solid transparent`,
        transition: `box-shadow 150ms ease-in`,
        "&$focused": {
          // border: `none`,
          boxShadow: `inset 0 1px 5px 0 rgba(142,145,153,0.8),
                        0 0 0 0.1rem rgba(102,133,255,0.5)`,
          transitionFunction: `ease-out`
        }
      }
    },
    // MuiInputLabel: {
    //   root: {
    //     textTransform: "uppercase",
    //     fontSize: ".85rem"
    //   }
    // },
    MuiTab: {
      root: {
        fontWeight: 500
      }
    }
  }
});

export default function App() {
  const classes = useStyles(ourTheme);
  return (
    <ThemeProvider theme={ourTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppNavbar />
        <AppLeftDrawer />
        <main className={classes.content}>
          <Toolbar />
          <ActionCenterContent />
          <Expertises />
        </main>
      </div>
    </ThemeProvider>
  );
}
