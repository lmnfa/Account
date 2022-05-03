import React, { Component } from "react";

class App extends Component {
  clickHandler = (event) => {
    console.log(event.target);
  };

  render() {
    return (
      <button type="button" onClick={this.clickHandler}>
        Subscribe
      </button>
    );
  }
}
