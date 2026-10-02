"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/Reveal";

const pages = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/conocenos", label: "Conócenos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto grid max-w-[1380px] items-end gap-10 px-6 pb-8 pt-24 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal>
            <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Cuéntanos el proyecto y te respondemos en menos de 24 horas
            </h2>
          </Reveal>
          <p className="mt-10 text-sm text-white/70">• Correo de trabajo</p>
          {sent ? (
            <p className="mt-4">Enviado.</p>
          ) : (
            <form onSubmit={submit} className="mt-3 flex max-w-md">
              <label className="sr-only" htmlFor="footer-email">Correo de trabajo</label>
              <input
                id="footer-email"
                required
                type="email"
                placeholder="Correo de trabajo"
                className="h-12 flex-1 rounded-l-md bg-white px-4 text-sm text-[#121212] outline-none"
              />
              <button type="submit" className="h-12 rounded-r-md bg-[#ff0000] px-5 text-sm">
                Enviar
              </button>
            </form>
          )}
        </div>
        <Reveal>
          <p className="text-7xl font-semibold tracking-tight md:text-8xl lg:text-[7.5rem] lg:leading-none">Symart</p>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-[1380px] gap-8 border-t border-white/15 px-6 py-10 text-sm md:grid-cols-4">
        <div>
          <p className="text-white/60">• Páginas</p>
          <ul className="mt-4 space-y-2 text-white/80">
            {pages.map((page) => (
              <li key={page.href}><Link href={page.href} className="hover:text-white">{page.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white/60">• Symart ventas</p>
          <p className="mt-4 text-white/80">Área de servicio</p>
          <p className="text-white/80">Sin showroom público</p>
          <a href="tel:+524499150678" className="mt-2 block text-white/80 hover:text-white">+52 449 915 0678</a>
        </div>
        <div>
          <p className="text-white/60">• Symart taller</p>
          <p className="mt-4 text-white/80">Cotización en menos de 24 horas</p>
          <a href="mailto:ventas@symart.com.mx" className="text-white/80 hover:text-white">ventas@symart.com.mx</a>
        </div>
        <div className="md:text-right">
          <div className="mb-8 space-y-2 text-white/80 md:text-right">
            <Link href="/envios" className="block hover:text-white">Envíos</Link>
            <Link href="/terminos" className="block hover:text-white">Términos</Link>
            <Link href="/privacidad" className="block hover:text-white">Privacidad</Link>
          </div>
          <p className="text-white/60">• Symart obra</p>
          <p className="mt-4 text-white/80">Fabricación e instalación</p>
          <a href="tel:+524499150678" className="text-white/80 hover:text-white">+52 449 915 0678</a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1380px] items-center justify-between border-t border-white/15 px-6 py-5 text-sm text-white/60">
        <p>© 2026 Symart. Muebles de oficina a tu medida.</p>
        <div className="flex gap-2">
          {["f", "X", "in", "▶"].map((mark) => (
            <span key={mark} className="grid h-9 w-9 place-items-center rounded-md border border-white/20 text-xs text-white">
              {mark}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
