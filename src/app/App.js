import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { Header } from 'app/shared/components'

import UserDashboard from 'app/modules/dashboard/pages/UserDashboard.page';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overFlowX: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw -240px)`,
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  fakeToolbar: {
    minHeight: 120,
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.content}>
        <div className={classes.fakeToolbar} />
        <Switch>
          <Route path="/app/user-dashboard" component={UserDashboard} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
