import React, { Component } from "react";

class Public extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("/public")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then(response => {
        this.setState({ message: response.message });
      })
      .catch(error => this.setState({ message: error }));
  }
  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Public;
