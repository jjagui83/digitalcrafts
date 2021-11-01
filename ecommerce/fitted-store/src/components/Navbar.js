import React from 'react'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
export default function HeaderIndex() {
    return (
        <div className="App">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            
            Timeless Grails
          </Navbar.Brand>
  
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Products">
                <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
  
        </Navbar>

      </div>
    )
}
