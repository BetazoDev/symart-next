import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: posts.find((post) => post.slug === slug)?.title ?? "Blog" };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-32">
      <Link href="/blog" className="text-sm text-neutral-500 hover:text-[#ff0000]">Blog</Link>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em]">{post.title}</h1>
      <img src={post.image} alt="" className="mt-8 aspect-[16/9] w-full rounded-[18px] object-cover" />
      <div className="mt-8 space-y-4 leading-relaxed text-neutral-700">
        <p>{post.excerpt}</p>
        <p>
          Symart diseña, fabrica e instala el mobiliario en Aguascalientes. La cotización sale en menos de 24 horas,
          la fabricación toma de 5 a 15 días hábiles y la garantía es de 5 años.
        </p>
        <p>El color del catálogo no cambia el precio. En la ciudad, la entrega y la instalación van incluidas.</p>
      </div>
    </article>
  );
}
