import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import ManScreen from "../pages/ManScreen";
import SearchScreen from "../pages/SearchScreen";
import WomanScreen from "../pages/WomanScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/men" component={ManScreen} />
        <Route exact path="/women" component={WomanScreen} />
        <Route exact path="/search" component={SearchScreen} />
        {/* <Redirect to="/men" /> */}
      </Switch>
    </>
  );
};

export default AppRouter;
