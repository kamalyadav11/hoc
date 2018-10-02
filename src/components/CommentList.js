import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments = () => {
    this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  };
  render() {
    return <ul>{this.renderComments()}</ul>;
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
