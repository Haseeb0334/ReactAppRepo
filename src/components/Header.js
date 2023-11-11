import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header=()=>{
    return(
        <h1>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">HaseebKhan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Projects</Nav.Link>
            <NavDropdown title="Reviews" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Buyers Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Seller Reviews
              </NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
           <Nav.Link href="#action2">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success">SignUp</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </h1>
    )
}
export default Header;