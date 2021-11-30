
import { HOME_SCREEN, STARED_REPOS_SCREEN } from '../../constants/navigations';

import './style.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div className="navStyle">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href={`${STARED_REPOS_SCREEN}`}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href={`${HOME_SCREEN}`}>Stared</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeScreen;

