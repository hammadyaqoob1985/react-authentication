import React, { Component } from "react";

class Courses extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    fetch("/course", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then(response => {
        this.setState({ courses: response.courses });
      })
      .catch(error => this.setState({ message: error }));

    fetch("/admin", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => this.setState({ message: error }));
  }
  render() {
    return (
      <ul>
        {this.state.courses.map(course => {
          return <li key={course.id}>{course.title}</li>;
        })}
      </ul>
    );
  }
}

export default Courses;
