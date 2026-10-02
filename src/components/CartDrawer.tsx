"use client";

import Link from "next/link";
import { formatPrice } from "@/data/catalog";
import { useCart } from "@/components/cart-context";

export function CartDrawer() {
  const { open, setOpen, items, remove, subtotal } = useCart();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Cerrar carrito"
        className="backdrop-in absolute inset-0 bg-black/45"
        onClick={() => setOpen(false)}
      />
      <aside className="drawer-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
          <h2 className="text-xl font-semibold tracking-tight">Tu carrito</h2>
          <button type="button" onClick={() => setOpen(false)} className="text-2xl leading-none" aria-label="Cerrar">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-auto px-6 py-6">
          {items.length === 0 ? (
            <div>
              <p className="text-lg font-medium">El carrito está vacío</p>
              <p className="mt-2 text-sm text-neutral-600">Todavía no hay productos.</p>
              <Link
                href="/productos"
                onClick={() => setOpen(false)}
                className="mt-6 inline-block rounded-md bg-[#ff0000] px-4 py-2 text-sm text-white"
              >
                Ver catálogo
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.product.slug} className="flex gap-4">
                  <img src={item.product.image} alt="" className="h-20 w-20 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-neutral-600">
                      {item.qty} × {formatPrice(item.product.price)}
                    </p>
                    <button
                      type="button"
                      onClick={() => remove(item.product.slug)}
                      className="mt-1 text-sm text-neutral-500 hover:text-[#ff0000]"
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-neutral-200 px-6 py-5">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-neutral-500">Precio de referencia. La cotización formal se confirma por teléfono.</p>
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-[#111] py-3 text-center text-sm text-white"
          >
            Cotizar
          </Link>
        </div>
      </aside>
    </div>
  );
}
