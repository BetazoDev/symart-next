"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ParallaxImage, ParallaxMedia } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import { formatPrice, products, type Tag } from "@/data/catalog";

const featured = products.slice(0, 4);

const panels = [
  {
    title: "Corporativos",
    text: "Escritorios, estaciones y archivo fabricados en casa para oficinas que reciben clientes. Un solo equipo diseña, fabrica e instala.",
    image: "/images/desks-green.jpg",
    background: "/images/office-glass.jpg",
    href: "/productos?tipo=Escritorios",
  },
  {
    title: "Estaciones",
    text: "Estaciones de trabajo que ordenan el puesto, ocultan cables y aguantan el uso diario. Módulos individuales o para cuatro personas.",
    image: "/images/workstations.jpg",
    background: "/images/hero-2.jpg",
    href: "/productos?tipo=Escritorios",
  },
  {
    title: "Almacenamiento",
    text: "Archiveros, muebles bajos y libreros en los mismos acabados del escritorio. El color del catálogo no cambia el precio.",
    image: "/images/desks-red.jpg",
    background: "/images/conference.jpg",
    href: "/productos?tipo=Archivo",
  },
];

const reasons = [
  ["Garantía 5 años", "Cinco años contra defectos de fabricación, en sillas y en muebles.", "truck"],
  ["Fabricación propia", "Fabricamos en Aguascalientes y controlamos calidad, tiempos y acabados.", "box"],
  ["Respuesta en 24 h", "Cotizamos en menos de 24 horas, con planos o con una visita.", "headset"],
  ["Instalación incluida", "En Aguascalientes la entrega y la instalación van incluidas.", "pin"],
] as const;

const hotspots = [
  { slug: "recepcion", name: "Recepción", top: "32%", left: "58%" },
  { slug: "escritorio-ocg", name: "Escritorio OCG", top: "62%", left: "46%" },
  { slug: "mesa-auxiliar", name: "Mesa auxiliar", top: "48%", left: "72%" },
];

export function HomePage() {
  const [tab, setTab] = useState<Tag>("Selección");
  const [spot, setSpot] = useState<string | null>("recepcion");
  const tabProducts = products.filter((product) => product.tags.includes(tab)).slice(0, 4);
  const activeSpot = products.find((product) => product.slug === spot);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[1380px] px-6 py-28">
        <Reveal className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Lo más pedido</h2>
          <Link href="/productos" className="rounded-md border border-neutral-300 px-4 py-2 text-sm transition hover:border-[#121212]">
            Ver todo
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {featured.map((product, index) => (
            <Reveal key={product.slug} delay={index * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {panels.map((panel) => (
        <Showcase key={panel.title} panel={panel} />
      ))}

      <Ticker text="Un solo proveedor" href="/productos" action="Ver catálogo" />

      <section className="mx-auto max-w-[1380px] px-6 py-28">
        <Reveal>
          <h2 className="text-center text-5xl font-semibold tracking-tight">Por qué Symart</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {reasons.map(([title, text, icon], index) => (
            <Reveal key={title} delay={index * 80}>
              <article className="group flex h-[366px] flex-col rounded-2xl border border-neutral-200 px-6 py-8 text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                <h3 className="text-base font-medium">{title}</h3>
                <div className="grid flex-1 place-items-center text-[#121212] transition duration-300 group-hover:scale-110">
                  <ReasonIcon name={icon} />
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 pb-28">
        <div className="flex items-end justify-between">
          <p className="text-sm text-neutral-500">Líneas de catálogo</p>
          <Link href="/productos" className="rounded-md border border-neutral-300 px-4 py-2 text-sm">Ver todo</Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-6">
          {(["Selección", "Tendencia", "Destacados"] as Tag[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`text-4xl font-semibold tracking-tight transition md:text-6xl ${tab === item ? "text-[#121212]" : "text-neutral-300 hover:text-neutral-500"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal>
            <img src="/images/meeting.jpg" alt="" className="h-full min-h-[520px] w-full rounded-xl object-cover" />
          </Reveal>
          <div key={tab} className="rise grid grid-cols-2 gap-5">
            {tabProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 pb-8">
        <h2 className="sr-only">Proyectos que ya entregamos</h2>
        <div className="relative overflow-hidden rounded-xl">
          <img src="/images/hero-1.jpg" alt="Oficina entregada por Symart" className="h-[640px] w-full object-cover" />
          {hotspots.map((hotspot) => (
            <button
              key={hotspot.slug}
              type="button"
              aria-label={`Ver ${hotspot.name}`}
              onClick={() => setSpot(spot === hotspot.slug ? null : hotspot.slug)}
              style={{ top: hotspot.top, left: hotspot.left }}
              className="hotspot absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xl shadow-lg transition hover:scale-110"
            >
              {spot === hotspot.slug ? "×" : "+"}
            </button>
          ))}
          {activeSpot ? (
            <Link
              key={activeSpot.slug}
              href={`/productos/${activeSpot.slug}`}
              style={{ top: hotspots.find((item) => item.slug === activeSpot.slug)?.top, left: hotspots.find((item) => item.slug === activeSpot.slug)?.left }}
              className="chip-in absolute z-10 flex w-56 -translate-y-[120%] translate-x-6 items-center gap-3 rounded-2xl bg-white p-2 pr-4 text-[#121212] shadow-xl"
            >
              <img src={activeSpot.image} alt="" className="h-14 w-14 rounded-lg object-cover" />
              <span>
                <span className="block text-sm font-medium">{activeSpot.name}</span>
                <span className="text-sm">
                  ${formatPrice(activeSpot.price)}
                  {activeSpot.compareAt ? <span className="ml-1 text-neutral-400 line-through">${formatPrice(activeSpot.compareAt)}</span> : null}
                </span>
              </span>
            </Link>
          ) : null}
        </div>
      </section>

      <Ticker text="Taller en Aguascalientes" />

      <section className="mx-auto max-w-[1380px] px-6 py-20">
        <Reveal>
          <h2 className="text-center text-5xl font-semibold tracking-tight md:text-6xl">Contacto</h2>
        </Reveal>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="max-w-md text-2xl font-medium leading-snug tracking-tight">
              Hablas directo con el taller. Teléfono y WhatsApp +52 449 915 0678.
            </p>
            <div className="mt-16 space-y-1 text-sm text-neutral-700">
              <a href="mailto:ventas@symart.com.mx" className="block hover:text-[#ff0000]">ventas@symart.com.mx</a>
              <a href="tel:+524499150678" className="block">+52 449 915 0678</a>
              <p>Aguascalientes, México</p>
            </div>
            <div className="mt-5 flex gap-2">
              {["X", "ig", "p", "in"].map((mark) => (
                <span key={mark} className="grid h-10 w-10 place-items-center rounded-md border border-neutral-300 text-xs">{mark}</span>
              ))}
            </div>
            <Link href="/productos" className="mt-6 inline-block rounded-md bg-black px-4 py-2.5 text-sm text-white">
              Ver catálogo
            </Link>
          </div>
          <Reveal className="overflow-hidden rounded-xl">
            <img src="/images/meeting.jpg" alt="Sala de juntas" className="h-[420px] w-full object-cover transition duration-700 hover:scale-[1.04]" />
          </Reveal>
        </div>
      </section>

      <Ticker text="Proyectos" />

      <section className="mx-auto max-w-[1380px] px-6 py-20">
        <Reveal>
          <h2 className="text-center text-5xl font-semibold tracking-tight">@symartmuebles</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {["/images/desks-green.jpg", "/images/meeting.jpg", "/images/desk-wood.jpg", "/images/chair-mesh.jpg"].map((src) => (
            <div key={src} className="relative">
              <ParallaxImage src={src} amount={25} className="aspect-[4/3] rounded-xl" />
              <span className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[10px]">ig</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Showcase({ panel }: { panel: (typeof panels)[number] }) {
  return (
    <section className="relative h-[300vh]">
      <div className="absolute inset-0">
        <ParallaxMedia src={panel.background} amount={40} className="h-full w-full" />
      </div>
      <div className="sticky top-0 flex h-screen items-center justify-center px-5">
        <div className="grid h-[510px] w-[min(1380px,100%)] grid-cols-1 overflow-hidden rounded-xl bg-white p-2 shadow-2xl md:grid-cols-2">
          <div className="flex flex-col p-6 md:p-8">
            <h3 className="text-3xl font-semibold tracking-tight">{panel.title}</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">{panel.text}</p>
            <Link href={panel.href} className="mt-auto inline-flex w-fit rounded-md bg-black px-4 py-2.5 text-sm text-white">
              Ver catálogo
            </Link>
          </div>
          <ParallaxMedia src={panel.image} amount={40} radius={10} className="h-56 w-full md:h-full" />
        </div>
      </div>
    </section>
  );
}

function Ticker({ text, href, action }: { text: string; href?: string; action?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add("is-in");
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-line mx-auto flex w-full max-w-[787px] flex-col items-center gap-5 px-6 py-8">
      <span className="line-draw block h-px w-full bg-[#c2c2c2]" />
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#121212]">
        <span className="h-1.5 w-1.5 rounded-full border border-current" />
        <span>{text}</span>
        {href && action ? (
          <Link href={href} className="ml-2 rounded-md border border-neutral-300 px-4 py-2">
            {action}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function ReasonIcon({ name }: { name: "truck" | "box" | "headset" | "pin" }) {
  const common = { width: 42, height: 42, fill: "none", stroke: "currentColor", strokeWidth: 1.4 };
  if (name === "truck") {
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="17" r="1.5" />
        <circle cx="18" cy="17" r="1.5" />
      </svg>
    );
  }
  if (name === "box") {
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8l8-4 8 4-8 4-8-4zM4 8v8l8 4 8-4V8" />
        <path d="M12 12v8" />
      </svg>
    );
  }
  if (name === "headset") {
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2zM20 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  return (
    <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}
