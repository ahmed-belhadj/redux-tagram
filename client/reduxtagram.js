import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import App from "./components/App";
import Feed from "./components/Feed";
import SelectedPost from "./components/SelectedPost";

import store, { history } from "./store";

import css from "./styles/style.styl";

import Raven from "raven-js";
import { sentry_url, logException } from "./data/config";

Raven.config(sentry_url, {
  tags: {
    git_commit: "BADA55",
    userLevel: "editor"
  }
}).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Feed} />
        <Route path="/view/:postId" component={SelectedPost} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
