import React from "react";
import ReactDOM from "react-dom";
import { Router, withRouter } from "react-router-dom";
import history from "./containers/auth-zero/history";
import "./index.css";
import App from "./App";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router history={history}>
    <AppWithRouter />
  </Router>,
  document.getElementById("root")
);
