"use client";

import { FormEvent, useEffect, useState } from "react";

export function Popup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("symart-popup") === "1") return;
    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    sessionStorage.setItem("symart-popup", "1");
    setOpen(false);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    sessionStorage.setItem("symart-popup", "1");
  }

  if (!open) return null;

  return (
    <div className="backdrop-in fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="modal-in grid w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[0.9fr_1.1fr]">
        <img src="/images/office-glass.jpg" alt="Oficina equipada por Symart" className="h-56 w-full object-cover md:h-full" />
        <div className="relative p-6 md:p-8">
          <button type="button" onClick={close} className="absolute right-4 top-4 text-2xl leading-none" aria-label="Cerrar">
            ×
          </button>
          <p className="text-sm text-neutral-500">¿Primera visita?</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight tracking-tight">
            Cuéntanos el proyecto y te cotizamos en menos de 24 horas
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Cuéntanos el proyecto y te respondemos en menos de 24 horas.
          </p>
          {sent ? (
            <p className="mt-6 font-medium">Enviado. Te escribimos a ese correo.</p>
          ) : (
            <form onSubmit={submit} className="mt-6 flex gap-2">
              <label className="sr-only" htmlFor="popup-email">Correo de trabajo</label>
              <input
                id="popup-email"
                required
                type="email"
                placeholder="Correo de trabajo"
                className="h-11 flex-1 rounded-md border border-neutral-300 px-3 text-sm outline-none focus:border-[#121212]"
              />
              <button type="submit" className="h-11 rounded-md bg-[#ff0000] px-4 text-sm text-white hover:bg-[#cc0000]">
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
