import React, { Component } from "react";
// import { render } from "react-dom";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <span>
        <header style={{ background: "#ccc" }}>
          <div>header</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </header>
      </span>
    );
  }
}

export default Header;
