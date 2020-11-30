import React from "react";
import Loader from "components/Loader/Loader";
let Home = React.lazy(() => import("components/Home/Home"));
import Applications from "components/Applications/Applications";
import { Switch, Route } from "react-router-dom";
import "src/styles/app.css";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>
        </Route>
        <Route path="/applications">
          <Applications />
        </Route>
      </Switch>
    </>
  );
}
