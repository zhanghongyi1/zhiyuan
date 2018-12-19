import React, { Component } from "react";
// import { render } from "react-dom";
import { Link } from "react-router-dom";
class My404Component extends Component {
  render() {
    return (
      <span>
        <Link to="/">home</Link>
        <br />
        404
      </span>
    );
  }
}

export default My404Component;
