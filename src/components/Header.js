import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changeAuth } from "../actions";

class Header extends React.Component {
  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
      );
    }
  };

  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { changeAuth }
)(Header);
