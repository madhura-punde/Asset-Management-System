import React from "react";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#1abc9c" }}>
      <Sidebar />
      <a className="navbar-brand">Asset Management</a>

      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Header;
