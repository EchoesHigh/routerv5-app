import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginScreen from "../pages/LoginScreen";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
        <PrivateRouter path="/" auth={log} component={AppRouter} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
