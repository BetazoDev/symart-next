"use client";

import { createContext, useContext, useState } from "react";
import type { Product } from "@/data/catalog";

type Item = { product: Product; qty: number };

type CartValue = {
  items: Item[];
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (product: Product) => void;
  remove: (slug: string) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);

  function add(product: Product) {
    setItems((current) => {
      const found = current.find((item) => item.product.slug === product.slug);
      if (!found) return [...current, { product, qty: 1 }];
      return current.map((item) =>
        item.product.slug === product.slug ? { ...item, qty: item.qty + 1 } : item,
      );
    });
    setOpen(true);
  }

  function remove(slug: string) {
    setItems((current) => current.filter((item) => item.product.slug !== slug));
  }

  const count = items.reduce((total, item) => total + item.qty, 0);
  const subtotal = items.reduce((total, item) => total + item.product.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ items, open, setOpen, add, remove, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart debe usarse dentro de CartProvider");
  return value;
}
