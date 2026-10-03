import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct, products } from "@/data/catalog";

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

  const sameCategory = products.filter((item) => item.slug !== slug && item.category === product.category);
  const rest = products.filter((item) => item.slug !== slug && item.category !== product.category);
  const related = [...sameCategory, ...rest].slice(0, 4);

  return <ProductDetail product={product} related={related} />;
}
