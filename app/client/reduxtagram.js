import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Header from "./components/Header";
import Post from "./components/Post";
import Feed from "./components/Feed";

import css from "./styles/style.styl";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Feed} />
      <Route path="/view/:postId" component={Post} />
    </Route>
  </Router>
);

render(router, document.getElementById("root"));
