import React from "react";

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      alert("I'm alive");
    }, 1000);
  }

  render() {
    return <h1>My Title</h1>;
  }
}
export default Alert;
