import React, { Component } from "react";
// import { render } from "react-dom";
import { Link } from "react-router-dom";
import Child from "./child/child";
class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Gopinath"
    };
  }
  componentWillMount() {}

  render() {
    return (
      <span>
        <Link to="/">home</Link>
        <Child name="Sara" />
      </span>
    );
  }
}

export default UsersPage;
