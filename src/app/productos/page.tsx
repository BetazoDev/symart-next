import { Suspense } from "react";
import { Catalog } from "@/components/Catalog";

export const metadata = { title: "Catálogo" };

export default function ProductosPage() {
  return (
    <Suspense fallback={<p className="px-6 pt-32">Cargando catálogo…</p>}>
      <Catalog />
    </Suspense>
  );
}
