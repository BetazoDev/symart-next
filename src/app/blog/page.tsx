import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/catalog";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[1380px] px-6 pb-20 pt-32">
      <h1 className="text-6xl font-semibold tracking-[-0.03em]">Blog</h1>
      <p className="mt-4 max-w-xl text-neutral-600">Notas del taller sobre sillas, estaciones y proyectos de oficina.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <img src={post.image} alt="" className="aspect-[4/3] w-full rounded-[18px] object-cover" />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-[#ff0000]">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
