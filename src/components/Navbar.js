import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    // <section className="navbarbg" fixed="top">
    <Navbar className="navbarbg" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          OCCU<span classsName="py text-black">PY.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link style={{ color: "black" }} className="link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "black" }} className="link" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "black" }} to="/team">
                Team
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "black" }} className="link" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>

          <Button variant="outline-success btn-style">Sing Up</Button>
          <Button variant="outline-success btn-style btn-style-border">
            Log In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </section>
  );
}

export default Navbars;
