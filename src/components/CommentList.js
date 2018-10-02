import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    return (
      <div>
        <h4>Comment List</h4>
        {this.props.comments.map(comment => (
          <ul key={comment}>
            <li>{comment}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
