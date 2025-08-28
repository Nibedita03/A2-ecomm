import React, { useState } from "react";
import { Table, Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

export default function CartPage() {
  const { items, removeFromCart, updateQty, subtotal, tax, total, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <h4>Your Cart</h4>
      {items.length === 0 ? <p>Cart is empty. Go to <a href="/products">Products</a>.</p> : (
        <>
          <Table responsive="md" className="align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th style={{width:160}}>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(i => (
                <tr key={i.id}>
                  <td style={{width:120}}>
                    <img src={i.image} alt={i.title} style={{width:90, height:60, objectFit:'cover', borderRadius:6}} />
                  </td>
                  <td>
                    <div>{i.title}</div>
                    <div className="text-muted small">Rating: {i.rating}</div>
                  </td>
                  <td>₹{i.price}</td>
                  <td>
                    <InputGroup>
                      <Button variant="outline-secondary" size="sm" onClick={() => updateQty(i.id, i.qty - 1)}>-</Button>
                      <FormControl value={i.qty} onChange={(e) => updateQty(i.id, Number(e.target.value) || 1)} style={{maxWidth:70, textAlign:'center'}}/>
                      <Button variant="outline-secondary" size="sm" onClick={() => updateQty(i.id, i.qty + 1)}>+</Button>
                    </InputGroup>
                  </td>
                  <td>₹{i.price * i.qty}</td>
                  <td><Button variant="outline-danger" size="sm" onClick={() => removeFromCart(i.id)}>Remove</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-end gap-4 flex-column flex-sm-row align-items-sm-center">
            <div className="text-end">
              <div>Subtotal: <strong>₹{subtotal}</strong></div>
              <div>Tax (12%): <strong>₹{tax}</strong></div>
              <div className="h5 mt-2">Total: <strong>₹{total}</strong></div>
            </div>

            <div>
              <Button variant="secondary" className="me-2" onClick={() => clearCart()}>Clear Cart</Button>
              <Button variant="primary" onClick={() => setShowCheckout(true)}>Proceed to Checkout</Button>
            </div>
          </div>
        </>
      )}

      <CheckoutModal show={showCheckout} onHide={() => setShowCheckout(false)} total={total} onConfirm={() => { clearCart(); setShowCheckout(false); }} />
    </>
  );
}
