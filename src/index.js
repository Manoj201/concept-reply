import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { HashRouter, Route, Redirect } from "react-router-dom";

import App from 'app/App'
import Themes from "themes/index";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <HashRouter>
        <Route exact path="/" render={() => <Redirect to="/app/user-dashboard" />} />
        <Route path="/app" component={App} />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
