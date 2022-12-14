import React from "react";
import "./Header.css";
import "./Header.scss";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import HeaderImg from "./img-header/header-img2.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  } 
  return (
    <Navbar className="header-body" sticky="top" collapseOnSelect expand="lg" bg="secondary" variant="white">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="header-image" height={50} src={HeaderImg} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto   header-weight">
            <Nav.Link href="home">HOME</Nav.Link>
            <Nav.Link href="services">SERVICES</Nav.Link>
            <Nav.Link   href="experts">EXPERTS</Nav.Link>
            {/* <NavDropdown title="Others" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="header-weight">
            <Nav.Link as={Link} to="about">
              ABOUT
            </Nav.Link>
            {user ? (
              <Button onClick={handleSignOut} variant="outline-light">Sign Out</Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
