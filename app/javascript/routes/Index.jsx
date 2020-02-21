import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Tweets from "../components/Tweets";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tweets" exact component={Tweets} />
    </Switch>
  </Router>
);