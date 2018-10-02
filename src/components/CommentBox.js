import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions";

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
    //Add save comment

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
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment }
)(CommentBox);
