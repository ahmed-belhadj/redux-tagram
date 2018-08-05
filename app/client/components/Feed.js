import React from "react";
import Post from "./Post";

const Feed = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Post {...this.props} key={index} index={index} post={post} />
        ))}
      </div>
    );
  }
});

export default Feed;
