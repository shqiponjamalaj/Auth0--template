import React from "react";

const LandingPage = props => {
  return (
    <>
      <h1>LandingPage</h1>
      <button onClick={props.auth.login}>Login</button>
    </>
  );
};

export default LandingPage;
