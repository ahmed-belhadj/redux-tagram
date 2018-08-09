import { createStore, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import rootReducer from "./reducers/index";
import posts from "./data/posts";
import comments from "./data/comments";

const defaultState = { posts, comments };

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const newRootReducer = require("./reducers/index").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
