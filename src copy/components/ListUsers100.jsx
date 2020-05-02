import React from "react";
import userData from "./userMockData";

function ListUsers() {
  return (
    <div className="main">
      <h1 className="heading">List of 100 Users</h1>
      {userData.map((user) => (
        <li classNames="list-items" key={user.id}>
          <div className="user-num">User #{user.id}: </div>
          <div>Name: &nbsp;{user.first_name}</div>
          <div>Email: &nbsp;{user.email}</div>
          <div>Country: &nbsp;{user.country}</div>
          <hr />
        </li>
      ))}
    </div>
  );
}

function List() {
  return (
    <ul className="list">
      <ListUsers></ListUsers>
    </ul>
  );
}

export default List;
