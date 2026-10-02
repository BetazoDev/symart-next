import type { Metadata } from "next";

export const metadata: Metadata = { title: "Términos" };

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-32">
      <h1 className="text-5xl font-semibold tracking-tight">Términos</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-neutral-700">
        <p>Los precios publicados son de referencia. La cotización formal la confirma el taller.</p>
        <p>El color del catálogo no cambia el precio. Medidas y acabados especiales se revisan en la cotización.</p>
        <p>La garantía es de 5 años contra defectos de fabricación, en sillas y en muebles.</p>
      </div>
    </article>
  );
}
