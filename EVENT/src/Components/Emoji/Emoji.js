import React, { Component } from "react";

class Emoji extends Component {
  state = { msg: "Hello World" };
  handleClick() {
    this.setState({ msg: "Hello Bangladesh" });
  }
  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1 className="display">{msg}</h1>
        <button onClick={() => this.handleClick()}>Click Me </button>
      </div>
    );
  }
}

export default Emoji;
