import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Header from "./Header";

import * as actionCreators from "../actions/actionCreators";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default App;
