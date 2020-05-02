import React from "react";

function NavBar(props) {
  return (
    <div>
      <nav className="nav-bar">
        <div className="right-nav">
          <NavLink linkTitle={"SERVICES"}></NavLink>
          <NavLink linkTitle={"WORK"}></NavLink>
          <NavLink linkTitle={"THE TEAM"}></NavLink>
        </div>
        <div className="left-nav">
          <i className="fas fa-mobile-alt"></i>
        </div>
      </nav>
    </div>
  );
}

function NavLink(props) {
  return (
    <a
      href="#"
      className="nav-link"
      style={{
        textDecoration: props.linkTitle === "THE TEAM" ? "underline" : "none",
      }}
    >
      {props.linkTitle}
    </a>
  );
}
export default NavBar;
