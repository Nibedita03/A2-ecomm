import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_items_v1");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_items_v1", JSON.stringify(items));
  }, [items]);

  function addToCart(product, qty = 1) {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      } else {
        return [...prev, { ...product, qty }];
      }
    });
  }

  function removeFromCart(id) {
    setItems(prev => prev.filter(p => p.id !== id));
  }

  function updateQty(id, qty) {
    setItems(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  }

  function clearCart() {
    setItems([]);
  }

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.12); // static 12% tax as example
  const total = subtotal + tax;

  const value = {
    items, addToCart, removeFromCart, updateQty, clearCart,
    subtotal, tax, total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
