// React Bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// import navigation styles
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navbar">
      <Container>
        <div>
          <Link to={"/"}>
            <Navbar.Brand>open-meadow</Navbar.Brand>
          </Link>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>Projects</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
