import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <header>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="fw-bold">e-Commerce</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <LinkContainer to="/products"><Nav.Link>Products</Nav.Link></LinkContainer>
              <Nav.Link href="#categories">Categories</Nav.Link>
            </Nav>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link>
                  Cart {count > 0 && <Badge bg="primary" pill className="ms-1">{count}</Badge>}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
