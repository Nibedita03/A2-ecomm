import React from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  const highlights = products.slice(0, 4);

  return (
    <>
      <Carousel className="mb-4 home-hero">
        <Carousel.Item>
          <img className="d-block w-100 hero-img" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=60" alt="Sale" />
          <Carousel.Caption>
            <h3>Summer Sale — Up to 40% Off</h3>
            <p>Trending styles & accessories</p>
            <Link to="/products"><Button variant="primary">Shop Now</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hero-img" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=60" alt="Gadgets" />
          <Carousel.Caption>
            <h3>Latest Gadgets</h3>
            <p>Top picks for tech lovers</p>
            <Link to="/products"><Button variant="light">Explore</Button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Product Highlights</h4>
          <Link to="/products">View all</Link>
        </div>
        <Row xs={1} sm={2} md={4} className="g-3">
          {highlights.map(p => (
            <Col key={p.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={p.image} style={{height:180, objectFit:'cover'}} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6">{p.title}</Card.Title>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="fw-bold">₹{p.price}</div>
                    <Link to={`/products/${p.id}`} className="btn btn-sm btn-outline-primary">View</Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section id="categories" className="mb-5">
        <h5>Shop by Category</h5>
        <div className="d-flex gap-2 flex-wrap mt-2">
          <Link to="/products?category=electronics" className="btn btn-outline-secondary">Electronics</Link>
          <Link to="/products?category=clothing" className="btn btn-outline-secondary">Clothing</Link>
          <Link to="/products" className="btn btn-outline-secondary">All</Link>
        </div>
      </section>
    </>
  );
}
