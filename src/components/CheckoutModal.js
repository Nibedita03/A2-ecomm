import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function CheckoutModal({ show, onHide, total, onConfirm }) {
  const [processing, setProcessing] = useState(false);

  function handleConfirm(e) {
    e.preventDefault();
    setProcessing(true);
    // simulate processing delay
    setTimeout(() => {
      setProcessing(false);
      onConfirm();
      alert("Order placed! (simulated)");
    }, 900);
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleConfirm}>
          <Form.Group className="mb-2">
            <Form.Label>Full name</Form.Label>
            <Form.Control required placeholder="Your name" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Address</Form.Label>
            <Form.Control required placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Payment (simulated)</Form.Label>
            <Form.Control required placeholder="Card details (simulated)" />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>Total: <strong>₹{total}</strong></div>
            <div>
              <Button variant="secondary" onClick={onHide} className="me-2">Cancel</Button>
              <Button type="submit" variant="primary" disabled={processing}>{processing ? "Processing..." : "Place Order"}</Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
