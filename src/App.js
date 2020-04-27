import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/ListItem.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="user-list">
          <h4>Travel Locations</h4>
          <ListItem
            name={"Paris, France"}
            image={"https://yvrdeals.com/img/ul/3q2ycwtdoapz5v8v.jpg"}
            url={"https://goo.gl/maps/vQUaoxfMubQQcXYQA"}
          ></ListItem>
          <ListItem
            name={"Rome, Italy"}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51KS6pdRNiL._AC_SY400_.jpg"
            }
            url={"https://goo.gl/maps/nvhUXYuHmzd5Gxm59"}
          ></ListItem>
          <ListItem
            name={"Bangkok, Thailand"}
            image={
              "https://as2.ftcdn.net/jpg/01/31/77/73/500_F_131777352_C9FCZFjbgPj0fU5ZeaQTPhxB5yCmXIra.jpg"
            }
            url={"https://goo.gl/maps/bTc1dSdvFoESG4j78"}
          ></ListItem>
          <ListItem
            name={"Vestmannaeyjar, Iceland"}
            image={
              "https://i.pinimg.com/originals/c7/33/06/c733067706354a90bb355c74fd000e23.jpg"
            }
            url={"https://goo.gl/maps/fj4PwKPMxscQHWnE7"}
          ></ListItem>
        </ul>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a> */}
      </header>
    </div>
  );
}

export default App;
