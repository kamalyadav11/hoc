import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "../actions";
import RequireAuth from "./RequireAuth";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  onChangeInput = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
    console.log(this.state.comment);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.onChangeInput} />
          <div>
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments }
)(RequireAuth(CommentBox));
