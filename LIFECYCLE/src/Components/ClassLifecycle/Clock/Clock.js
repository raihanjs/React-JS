import React, { Component } from "react";

class Clock extends Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    this.clockTime = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("CurrentTime updated");
  }

  componentWillUnmount() {
    clearInterval(this.clockTime);
  }

  render() {
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
