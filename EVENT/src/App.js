import React, { Component } from "react";

class App extends Component {
  state = { msg: "Hello World" };

  // handleClick = () => {
  //   this.setState({ msg: "Hello Bangladesh" });
  // };
  handleClick() {
    this.setState({ msg: "Hello Bangladesh" });
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default App;
