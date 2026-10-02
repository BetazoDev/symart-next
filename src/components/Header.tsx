"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/cart-context";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/conocenos", label: "Conócenos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);
  const countReady = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!countReady.current) {
      countReady.current = true;
      return;
    }
    setBump(true);
    const timer = window.setTimeout(() => setBump(false), 280);
    return () => window.clearTimeout(timer);
  }, [count]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-40 px-4 md:px-6">
      <div className={`pointer-events-auto mx-auto flex h-16 max-w-[1380px] items-center rounded-md bg-white/96 px-4 transition duration-300 md:px-6 ${scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,0.14)]" : "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"}`}>
        <Link href="/" className="shrink-0" aria-label="Symart">
          <img src="/images/logo.png" alt="Symart" className="h-10 w-auto" />
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-tight ${active ? "text-[#ff0000]" : "text-[#121212] hover:text-[#ff0000]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto flex items-center gap-2 text-[#121212]"
          aria-label="Abrir carrito"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 7h12l-1 13H7L6 7Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span className={`grid h-5 min-w-5 place-items-center rounded-full border border-neutral-300 text-[11px] transition ${bump ? "scale-125 border-[#ff0000] text-[#ff0000]" : ""}`}>
            {count}
          </span>
        </button>
      </div>
      <nav className="pointer-events-auto mx-auto mt-2 flex max-w-[1380px] justify-center gap-4 rounded-full bg-white/96 px-4 py-2 text-sm shadow md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-[#121212] hover:text-[#ff0000]">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
