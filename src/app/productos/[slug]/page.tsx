import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddButton } from "@/components/AddButton";
import { formatPrice, getProduct, products } from "@/data/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Producto" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <article className="mx-auto grid max-w-[1380px] gap-12 px-6 pb-20 pt-32 lg:grid-cols-2">
      <img src={product.image} alt={product.name} className="aspect-square w-full rounded-[18px] object-cover" />
      <div>
        <p className="text-sm text-neutral-500">{product.category}</p>
        <h1 className="mt-2 text-5xl font-semibold tracking-[-0.03em]">{product.name}</h1>
        <p className="mt-4 text-2xl">
          {formatPrice(product.price)}
          {product.compareAt ? (
            <span className="ml-3 text-lg text-neutral-400 line-through">{formatPrice(product.compareAt)}</span>
          ) : null}
        </p>
        <p className="mt-2 text-xs text-neutral-500">Precio de referencia. El color del catálogo no cambia el precio.</p>
        <p className="mt-6 max-w-md leading-relaxed text-neutral-700">{product.summary}</p>
        <ul className="mt-6 space-y-2 text-sm text-neutral-700">
          <li>Garantía de 5 años contra defectos de fabricación.</li>
          <li>Fabricación en Aguascalientes. Entrega de 5 a 15 días hábiles.</li>
          <li>En la ciudad, la instalación va incluida.</li>
        </ul>
        <div className="mt-8 flex gap-3">
          <AddButton product={product} />
          <Link href="/contacto" className="rounded-md bg-[#111] px-5 py-3 text-sm text-white">
            Cotizar
          </Link>
        </div>
      </div>
    </article>
  );
}
