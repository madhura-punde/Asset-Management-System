import React from "react";
import Sidebar from "./Sidebar";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#1abc9c" }}>
      <Sidebar />
      <Link to={"/"}>
        <button className="btn btn-primary">
          <FaLaptopCode />
        </button>
      </Link>

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
