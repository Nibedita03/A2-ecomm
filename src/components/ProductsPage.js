import React, { useMemo, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import productsData from "../data/products";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category") || "";
  const [category, setCategory] = useState(categoryQuery);
  const [sort, setSort] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    let list = productsData.slice();
    if (category) list = list.filter(p => p.category === category);
    if (sort === "low") list.sort((a,b) => a.price - b.price);
    if (sort === "high") list.sort((a,b) => b.price - a.price);
    return list;
  }, [category, sort]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Products</h4>
        <div className="d-flex gap-2">
          <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </Form.Select>
          <Form.Select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </Form.Select>
        </div>
      </div>

      <Row xs={1} sm={2} md={3} lg={3} className="g-3">
        {filtered.slice(0, visibleCount).map(p => (
          <Col key={p.id}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>

      {visibleCount < filtered.length && (
        <div className="text-center mt-4">
          <Button onClick={() => setVisibleCount(c => c + 6)}>Load more</Button>
        </div>
      )}

      {filtered.length === 0 && <p className="mt-3">No products found.</p>}
    </>
  );
}
