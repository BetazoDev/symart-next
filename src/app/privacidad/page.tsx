import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacidad" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-32">
      <h1 className="text-5xl font-semibold tracking-tight">Privacidad</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-neutral-700">
        <p>Los datos del formulario se usan solo para responder la cotización.</p>
        <p>Puedes escribir a ventas@symart.com.mx para pedir que borremos tu correo.</p>
        <p>No compartimos esa información con terceros para publicidad.</p>
      </div>
    </article>
  );
}
