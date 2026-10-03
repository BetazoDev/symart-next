"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/components/cart-context";
import { formatPrice, type Product } from "@/data/catalog";

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const { add } = useCart();
  const shots = [
    { src: product.image, position: "center" },
    { src: product.image, position: "center top" },
  ];
  const [shot, setShot] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-[72px] px-[30px] pb-20 pt-[120px]">
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[60px]">
        <div className="flex w-full shrink-0 flex-col gap-[18px] lg:w-[400px]">
          <nav className="flex items-center gap-2 text-sm leading-[21px] tracking-[-0.42px] text-[#212121]">
            <Link href="/" className="hover:text-[#ff0000]">Inicio</Link>
            <span className="text-[10px] tracking-[0.4px] text-[#232323]">/</span>
            <Link href={`/productos?tipo=${encodeURIComponent(product.category)}`} className="hover:text-[#ff0000]">
              {product.category}
            </Link>
            <span className="text-[10px] tracking-[0.4px] text-[#232323]">/</span>
            <span className="truncate">{product.name}</span>
          </nav>

          <span className="w-fit rounded bg-[#efefef] px-2 py-[5px] text-xs text-[#212121]">
            {product.tags.join(", ")}
          </span>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold leading-[31.2px] tracking-[-0.96px] text-[#212121]">{product.name}</h1>
            <p className="text-sm font-semibold leading-none tracking-[-0.56px] text-[#212121]">
              ${formatPrice(product.price)}
              {product.compareAt ? (
                <span className="ml-2 font-medium text-neutral-400 line-through">${formatPrice(product.compareAt)}</span>
              ) : null}
            </p>
          </div>

          <p className="text-sm leading-[21px] tracking-[-0.42px] text-[#212121]">{product.summary}</p>

          <div className="flex items-center justify-between">
            <span className="text-sm leading-[21px] tracking-[-0.42px] text-[#212121]">Cantidad</span>
            <div className="flex items-center rounded-[5px] border border-neutral-200 bg-white p-1">
              <button
                type="button"
                aria-label="Reducir cantidad"
                disabled={qty <= 1}
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                className="grid h-7 w-7 place-items-center rounded bg-[#efefef] text-lg leading-none disabled:opacity-40"
              >
                −
              </button>
              <span className="w-9 text-center text-sm">{qty}</span>
              <button
                type="button"
                aria-label="Aumentar cantidad"
                onClick={() => setQty((value) => value + 1)}
                className="grid h-7 w-7 place-items-center rounded bg-[#efefef] text-lg leading-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => add(product, qty)}
              className="h-12 rounded-lg bg-[#212121] text-base font-semibold tracking-[-0.64px] text-white"
            >
              Agregar
            </button>
            <Link
              href="/contacto"
              className="grid h-12 place-items-center rounded-md bg-[#ff0000] text-base font-semibold tracking-[-0.64px] text-white"
            >
              Cotizar
            </Link>
          </div>

          <p className="flex w-fit items-center gap-1.5 rounded bg-[#efefef] px-1.5 py-1.5 text-sm font-medium leading-none tracking-[-0.56px] text-[#212121]">
            <span aria-hidden>•</span>
            Entrega de 5 a 15 días
          </p>
        </div>

        <div className="flex w-full min-w-0 gap-6 lg:flex-1">
          <div className="relative aspect-square min-w-0 flex-1 overflow-hidden rounded-xl bg-neutral-100">
            <img src={shots[shot].src} alt={product.name} className="h-full w-full object-cover" style={{ objectPosition: shots[shot].position }} />
          </div>
          <div className="flex w-[92px] shrink-0 flex-col gap-4 sm:w-[200px]">
            {shots.map((item, index) => (
              <button
                key={item.position}
                type="button"
                aria-label={`Ver foto ${index + 1}`}
                onClick={() => setShot(index)}
                className={`aspect-square overflow-hidden rounded-[3px] bg-neutral-100 ${shot === index ? "ring-2 ring-[#212121]" : ""}`}
              >
                <img src={item.src} alt="" className="h-full w-full object-cover" style={{ objectPosition: item.position }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-[34px]">
        <h2 className="text-[40px] font-semibold leading-[48px] tracking-[-1.2px] text-[#212121]">Complementos</h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
