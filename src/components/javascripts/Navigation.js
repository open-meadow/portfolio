// React Bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contexts/context";
import portfolio from "../../db/project_database";

// import navigation styles
import "../styles/Navigation.scss";

const Navigation = () => {
  const generateDropdowns = () => {
    const dropdownList = Object.keys(portfolio).map((key) => {
      return (
        <NavDropdown.Item href={`/project/${key}`}>
          {portfolio[key].name}
        </NavDropdown.Item>
      );
    });

    return dropdownList;
  };

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
              <NavDropdown title="Projects">
                {generateDropdowns()}
              </NavDropdown>
              <Nav.Link>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
