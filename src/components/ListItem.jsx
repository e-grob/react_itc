import React from "react";

function ListItem(props) {
  return (
    // <ul>
    //   {" "}
    //   Travel Locations
    <li>
      <img src={props.image} alt={props.name} />
      <p>Location: {props.name}</p>
      <a href={props.url}>Google Maps</a>
    </li>
    // </ul>
  );
}

export default ListItem;
