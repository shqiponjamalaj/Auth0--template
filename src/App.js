import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/auth-zero/Auth/Auth.js";
import Dashboard from "./containers/Dashboard";
import LandingPage from "./containers/LandingPage";
import Callback from "./containers/auth-zero/Callback/Callback";
import "./App.css";
import Onborading from "./containers/Onboarding/Onboarding.js";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <LandingPage {...props} auth={auth} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route
          path="/dashboard"
          render={props => <Dashboard {...props} auth={auth} />}
        />
        <Route
          path="/onboarding"
          render={props => <Onborading {...props} auth={auth} />}
        />
      </Switch>
    </div>
  );
}

export default App;
