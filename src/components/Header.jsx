import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to="/">List Page</NavLink>
      <NavLink to="/add">Add Page</NavLink>
      <NavLink to="/update">Update Page</NavLink>
      <NavLink to="/fdsfsdfdsfds">Not Found Page</NavLink>
    </div>
  );
}

export default Header;
