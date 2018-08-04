import { createStore, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import rootReducer from "./reducers/index";
import posts from "./data/posts";
import comments from "./data/comments";

const defaultState = { posts, comments };

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);