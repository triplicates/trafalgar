import React from "react";
import Home from "components/Home/Home";
import Applications from "components/Applications/Applications";
import { Switch, Route } from "react-router-dom";
import "src/styles/remove.css";
import "src/styles/fonts.css";
import "src/styles/variables.css";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/applications">
          <Applications />
        </Route>
      </Switch>
    </>
  );
}
