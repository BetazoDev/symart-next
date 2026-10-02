"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, tags, type Category, type Tag } from "@/data/catalog";

export function Catalog() {
  const params = useSearchParams();
  const router = useRouter();
  const tipo = params.get("tipo");
  const etiqueta = params.get("etiqueta");
  const [query, setQuery] = useState(params.get("q") ?? "");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((product) => {
      if (tipo && product.category !== tipo) return false;
      if (etiqueta && !product.tags.includes(etiqueta as Tag)) return false;
      if (!needle) return true;
      return `${product.name} ${product.slug}`.toLowerCase().includes(needle);
    });
  }, [tipo, etiqueta, query]);

  function setFilter(key: "tipo" | "etiqueta", value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const search = next.toString();
    router.push(search ? `/productos?${search}` : "/productos");
  }

  return (
    <div className="mx-auto grid max-w-[1380px] gap-10 px-6 pb-20 pt-32 lg:grid-cols-[240px_1fr]">
      <aside>
        <p className="text-sm text-neutral-600">Busca por código</p>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar…"
          className="mt-3 h-11 w-full rounded-md border border-neutral-300 px-3 text-sm outline-none focus:border-[#121212]"
        />
        <FilterGroup
          title="Tipo"
          active={tipo}
          options={categories}
          onChange={(value) => setFilter("tipo", value)}
        />
        <FilterGroup
          title="Etiqueta"
          active={etiqueta}
          options={tags}
          onChange={(value) => setFilter("etiqueta", value)}
        />
      </aside>
      <div>
        <h1 className="text-center text-5xl font-semibold tracking-[-0.03em] md:text-6xl">Conoce el catálogo</h1>
        <p className="mt-4 text-center text-neutral-600">Mobiliario de oficina fabricado a tu medida.</p>
        {visible.length === 0 ? (
          <p className="mt-16 text-center text-neutral-600">No hay productos en esta línea.</p>
        ) : (
          <div key={`${tipo ?? ""}-${etiqueta ?? ""}-${query}`} className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((product, index) => (
              <div key={product.slug} className="rise" style={{ animationDelay: `${index * 40}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  options,
  active,
  onChange,
}: {
  title: string;
  options: readonly string[];
  active: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <fieldset className="mt-8">
      <legend className="text-sm font-medium">{title}</legend>
      <label className="mt-3 flex items-center gap-2 text-sm">
        <input type="checkbox" checked={!active} onChange={() => onChange(null)} className="accent-[#ff0000]" />
        {title === "Tipo" ? "Todos" : "Todas"}
      </label>
      {options.map((option) => (
        <label key={option} className="mt-2 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={active === option}
            onChange={() => onChange(active === option ? null : (option as Category))}
            className="accent-[#ff0000]"
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
