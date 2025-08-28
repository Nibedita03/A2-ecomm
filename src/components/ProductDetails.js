import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <h4>Product not found</h4>;

  return (
    <Row>
      <Col md={6}>
        <img src={product.image} alt={product.title} className="img-fluid" style={{borderRadius:8, objectFit:'cover'}} />
      </Col>
      <Col md={6}>
        <h3>{product.title}</h3>
        <p className="text-muted">Category: {product.category}</p>
        <h4 className="text-primary">₹{product.price}</h4>
        <p>Rating: {product.rating} ⭐</p>
        <p>{product.description}</p>

        <div className="d-flex gap-2">
          <Button onClick={() => { addToCart(product, 1); navigate('/cart'); }} variant="primary">Add to cart & Go to Cart</Button>
          <Button onClick={() => addToCart(product)} variant="outline-primary">Add to cart</Button>
        </div>
      </Col>
    </Row>
  );
}
