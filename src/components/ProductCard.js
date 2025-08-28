import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card className="h-100 product-card">
      <Card.Img variant="top" src={product.image} style={{height:200, objectFit:'cover'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text className="small text-muted mb-2">Rating: {product.rating} ⭐</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div className="fw-bold">₹{product.price}</div>
          <div>
            <Button size="sm" variant="outline-primary" as={Link} to={`/products/${product.id}`} className="me-2">Details</Button>
            <Button size="sm" onClick={() => addToCart(product)} variant="primary">Add</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
