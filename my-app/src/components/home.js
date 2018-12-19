import React, { Component } from "react";
import List3 from "./parent/list3";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowList3: false
    };
  }
  showConponent = () => {
    this.setState({
      isShowList3: true
    });
  };
  hideConponent = () => {
    this.setState({
      isShowList3: false
    });
  };
  render() {
    const Fragment = global.constants.Fragment 
    return (
      <Fragment>
        <br />
        <button onClick={this.showConponent}>显示Lists组件</button>
        {this.state.isShowList3 ? (
          <List3 hideConponent={this.hideConponent} />
        ) : null}
      </Fragment>
    );
  }
}

export default Home;
