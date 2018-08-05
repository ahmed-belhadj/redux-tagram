import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import App from "./components/App";
import Post from "./components/Post";
import Feed from "./components/Feed";

import store, { history } from "./store";

import css from "./styles/style.styl";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Feed} />
        <Route path="/view/:postId" component={Post} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
