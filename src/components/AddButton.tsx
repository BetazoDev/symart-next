"use client";

import type { Product } from "@/data/catalog";
import { useCart } from "@/components/cart-context";

export function AddButton({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <button
      type="button"
      onClick={() => add(product)}
      className="rounded-md bg-[#ff0000] px-5 py-3 text-sm text-white hover:bg-[#cc0000]"
    >
      Agregar
    </button>
  );
}
