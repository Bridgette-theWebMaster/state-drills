import React, { Component } from "react";

export default class Bomb extends React.Component {
  state = {
    count: 0,
  };
  // what happens when the element is mounted
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  // what to do after the element has mounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // what I want displayed
  renderDisplay() {
    const { count } = this.state;
    if (count >= 8) {
      clearInterval(this.interval);
      return "BOOM!";
    } else if (count % 2 === 0) {
      return "tick";
    } else {
      return "tock";
    }
  }
  // what will actually display
  render() {
    return <div className="CountdownBomb">{this.renderDisplay()}</div>;
  }
}
