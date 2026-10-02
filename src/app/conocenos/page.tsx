import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Conócenos" };

const timeline = [
  {
    year: "2012",
    title: "Más de 21 años",
    text: "Symart es una fábrica de muebles de oficina en Aguascalientes, México, que diseña, fabrica e instala mobiliario corporativo a la medida desde hace más de 21 años.",
  },
  {
    year: "2016",
    title: "Fabricación propia",
    text: "El equipo diseña el espacio, fabrica en Aguascalientes e instala. En la ciudad la entrega y el montaje van incluidos.",
  },
  {
    year: "2020",
    title: "Instalación en sitio",
    text: "Llevamos las estaciones, sillas y archivo ya armados al corporativo, y los dejamos listos para usarse.",
  },
  {
    year: "2025",
    title: "Cotización en 24 h",
    text: "Cotizamos en menos de 24 horas. La fabricación toma de 5 a 15 días hábiles y la garantía es de 5 años.",
  },
];

const questions = [
  ["¿Los muebles tienen garantía?", "Cinco años contra defectos de fabricación, en sillas y en muebles."],
  ["¿Cotizan sin planos?", "Sí. Cotizamos con planos o con una visita al espacio."],
  ["¿El color cambia el precio?", "No. El color del catálogo no cambia el precio."],
  ["¿Cuánto tarda un proyecto?", "La cotización sale en menos de 24 horas. La fabricación toma de 5 a 15 días hábiles."],
  ["¿Qué pasa si llega dañado?", "Lo revisamos con el taller y reponemos la pieza. La instalación en Aguascalientes va incluida."],
];

export default function AboutPage() {
  return (
    <div className="pb-20 pt-32">
      <section className="relative mx-auto min-h-[460px] max-w-[1380px] overflow-hidden rounded-[18px] px-6">
        <img src="/images/hero-2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
        <div className="relative max-w-xl py-24 text-white">
          <h1 className="text-6xl font-semibold tracking-[-0.03em]">El taller</h1>
          <p className="mt-4 text-lg">Lo que hacemos</p>
          <Link href="/contacto" className="mt-6 inline-block rounded-md bg-[#ff0000] px-4 py-2.5 text-sm">
            Escríbenos
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1380px] px-6">
        <h2 className="text-4xl font-semibold tracking-tight">Cómo trabajamos</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {timeline.map((item) => (
            <article key={item.year}>
              <p className="text-sm text-neutral-500">{item.year}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-[1380px] gap-6 px-6 md:grid-cols-3">
        {[
          ["Taller Symart", "Aguascalientes", "Lunes a viernes, 8:30 a 18:30"],
          ["México", "Aguascalientes, México", "Fabricación e instalación"],
          ["Ventas", "+52 449 915 0678", "ventas@symart.com.mx"],
        ].map(([title, place, detail]) => (
          <article key={title} className="rounded-[18px] bg-neutral-100 p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{place}</p>
            <p className="mt-2 text-sm text-neutral-600">{detail}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-3xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-neutral-200">
          {questions.map(([question, answer]) => (
            <details key={question} className="py-4">
              <summary className="cursor-pointer text-lg font-medium">{question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
