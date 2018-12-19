import React from "react";
import { Route, Switch } from "react-router-dom";
import My404 from "../components/404/my404Component";
import Home from "../components/home";
import About from "../components/about/about";
const PrimaryLayout = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={My404} />
      </Switch>
);
export default PrimaryLayout;

