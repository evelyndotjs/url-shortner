import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const NavBarStyle = {
  padding: "1rem",
  fontWeight: "bold",
};

const SignUpButton = {
  backgroundColor: "hsl(180, 66%, 49%)",
  color: "#FFF",
  borderRadius: "20px",
  marginLeft: "20px",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const Spacing = {
  marginLeft: "20px",
};

function Navigation() {
  return (
    <Navbar style={NavBarStyle} bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={"/logo.svg"} fluid alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={Spacing} className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link style={Spacing} href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link style={Spacing} href="#resources">
              Resources
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end justify-content-between">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link style={SignUpButton} href="#signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
export { SignUpButton };
