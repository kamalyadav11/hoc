import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "../actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    this.isUserAutherised();
  }

  //@@ componentDidMount is used because when the user in on /post page and lookinh through comments, and presses signOut then it is the case of component Update
  componentDidUpdate() {
    this.isUserAutherised();
  }

  isUserAutherised = () => {
    if (!this.props.auth) {
      this.props.history.push("/");
      alert("you need to be Signed in to see post a comment");
    }
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
        <button onClick={() => this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { saveComment, fetchComments }
)(CommentBox);
