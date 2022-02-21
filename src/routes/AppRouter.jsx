import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomanScreen = lazy(() => import("../pages/WomanScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="d-flex justify-content-center mt-3">
            <div className="spinner-border text-info" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/men" component={ManScreen} />
          <Route exact path="/women" component={WomanScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/character/:id" component={CharacterScreen} />
          <Redirect to="/men" />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
