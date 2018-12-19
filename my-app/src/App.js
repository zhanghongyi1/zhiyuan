import React, { Component } from "react";
import "./App.css";
import PrimaryLayout from "./router/router";
import { HashRouter } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

class App extends Component {
  render() {
    const Fragment = global.constants.Fragment 
    return <div className="App">
      <HashRouter>
        <Fragment>
          <Header />
          {PrimaryLayout}
          <Footer />
        </Fragment>
      </HashRouter ></div>;
  }
}
export default App;
