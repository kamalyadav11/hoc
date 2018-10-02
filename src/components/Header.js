import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  renderButton = () => {};
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
};

export default Header;
