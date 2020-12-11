import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { banner: "This is my message" };
  }
  render() {
    return <h1> {this.banner} </h1>;
  }
}
