import React from "react";

class Boxes extends React.Component {
  BlueBox() {
    return <div className="blue-box"></div>;
  }
  PinkBox() {
    return <div className="pink-box"></div>;
  }
  PurpleBox() {
    return (
      <div className="purple-div">
        <div className="purple-box1"></div>
        <div className="purple-box2"></div>
      </div>
    );
  }

  render() {
    return (
      <div className="green-box">
        <div className="blue-box">
          <div className="pink-box">
            <div className="purple-div">
              <div className="purple-box1"></div>
              <div className="purple-box2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boxes;
