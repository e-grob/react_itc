import React from "react";

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    console.log(event.target.value);
    // const { name, checked } = event.target;
    this.setState({ [event.target.name]: event.target.checked });
  }

  render() {
    return (
      <div className="checkbox">
        {this.state.isChecked && <Alert></Alert>}
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            name="isChecked"
            onChange={this.handleChange}
          />
          What happens if you check the box?
        </label>
      </div>
    );
  }
}

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      alert("I'm alive!");
    }, 1000);
  }

  render() {
    return <h1>You checked me!</h1>;
  }
}
export default Checkbox;
