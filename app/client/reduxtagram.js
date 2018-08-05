import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import App from "./components/App";
import Feed from "./components/Feed";
import SelectedPost from "./components/SelectedPost";

import store, { history } from "./store";

import css from "./styles/style.styl";

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
