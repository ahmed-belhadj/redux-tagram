import React from "react";

const Comments = React.createClass({
  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  },
  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const commenter = this.refs.commenter.value;
    const comment = this.refs.comment.value;
    this.props.createComment(postId, commenter, comment);
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          className="comment-form"
          ref="commentForm"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="commenter" placeholder="name" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
