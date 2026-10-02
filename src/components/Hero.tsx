"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = ["/images/hero-1.jpg", "/images/hero-2.jpg"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-black text-white">
      {slides.map((src, slide) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`hero-photo absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${slide === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1380px] items-center px-6">
        <div className="max-w-xl pt-16">
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] md:text-7xl">
            <span className="hero-line">Muebles de</span>
            <span className="hero-line">oficina a medida</span>
          </h1>
          <p className="hero-fade mt-5 max-w-md text-sm leading-relaxed text-white md:text-base">
            Diseñamos, fabricamos e instalamos mobiliario corporativo en Aguascalientes, a tu medida.
          </p>
          <Link
            href="/productos"
            className="hero-fade mt-6 inline-block rounded-md bg-[#ff0000] px-4 py-2.5 text-sm text-white hover:bg-[#cc0000]"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((src, slide) => (
          <button
            key={src}
            type="button"
            aria-label={`Mostrar diapositiva ${slide + 1}`}
            onClick={() => setIndex(slide)}
            className={`h-2.5 w-2.5 rounded-full ${slide === index ? "bg-white" : "bg-white/45"}`}
          />
        ))}
      </div>
    </section>
  );
}
