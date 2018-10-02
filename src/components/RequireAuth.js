import React, { Component } from "react";
import { connect } from "react-redux";

const RequireAuth = ChildComponent => {
  class ComposedComponent extends Component {
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
    render() {
      return <ChildComponent />;
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(ComposedComponent);
};

export default RequireAuth;
