import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";


import logo from "images/concept-reply.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(92,9,121,1) 0%, rgba(162,49,69,1) 50%, rgba(255,102,0,1) 100%)",
    padding: 20,
  },
  appTitle: {
    paddingLeft: 20,
    paddingTop: 5,
  },
}));

const AppHeader = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <img src={logo} alt="logo" height="75" weight="150" style={{ backgroundColor: 'white' }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default React.memo(AppHeader);