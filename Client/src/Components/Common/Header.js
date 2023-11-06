import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import { FaLaptopCode } from "react-icons/fa";
// import { Link } from "react-router-dom";

function Header() {
  return (
    // <nav className="navbar navbar-light" style={{ backgroundColor: "#1abc9c" }}>
    //   <Link to={"/"}>
    //     <button className="btn btn-primary">
    //       <FaLaptopCode />
    //     </button>
    //   </Link>

    //   <form className="form-inline">
    //     <input
    //       className="form-control mr-sm-2"
    //       type="search"
    //       placeholder="Search"
    //       aria-label="Search"
    //     />
    //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
    //       Search
    //     </button>
    //   </form>
    // </nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <b>ALMP</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="">Signup</Nav.Link>
            <Nav.Link href="">Login</Nav.Link>

            <Nav.Link href="">Login</Nav.Link>

            <Nav.Link href="">Login</Nav.Link>
            <Nav.Link href="">Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Add new Asset To ALMP
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Delete Asset From ALMP
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Need an Assistance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
