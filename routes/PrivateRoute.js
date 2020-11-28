import React from "react";
import { Route, Redirect } from "react-router-dom";
const authedUsr = true;
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
       return authedUsr ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
export default PrivateRoute;
