import type { Metadata } from "next";

export const metadata: Metadata = { title: "Envíos" };

export default function ShippingPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-32">
      <h1 className="text-5xl font-semibold tracking-tight">Envíos</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-neutral-700">
        <p>En Aguascalientes la entrega y la instalación van incluidas.</p>
        <p>La fabricación toma de 5 a 15 días hábiles después de confirmar la cotización.</p>
        <p>Fuera de la ciudad, el traslado se cotiza aparte y se confirma antes de fabricar.</p>
      </div>
    </article>
  );
}
