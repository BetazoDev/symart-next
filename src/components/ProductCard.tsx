import Link from "next/link";
import { formatPrice, type Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  const isNew = product.tags.includes("Nuevo");
  return (
    <Link href={`/productos/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/55 to-transparent px-4 py-4 text-sm text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Ver producto
        </span>
        {isNew ? (
          <span className="absolute right-3 top-3 rounded-md bg-[#ff0000] px-2 py-1 text-xs font-medium text-white">
            Nuevo
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-[15px] font-medium tracking-tight">{product.name}</h3>
      <p className="mt-1 text-sm text-neutral-700">
        {formatPrice(product.price)}
        {product.compareAt ? (
          <span className="ml-2 text-neutral-400 line-through">{formatPrice(product.compareAt)}</span>
        ) : null}
      </p>
    </Link>
  );
}
