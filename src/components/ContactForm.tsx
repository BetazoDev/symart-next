"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="text-xl font-medium">Enviado. Te respondemos en menos de 24 horas.</p>;
  }

  return (
    <form onSubmit={submit} className="grid content-start gap-4">
      <Field name="nombre" label="Nombre" />
      <Field name="correo" label="Correo" type="email" />
      <Field name="telefono" label="Teléfono" />
      <label className="text-sm">
        Mensaje
        <textarea name="mensaje" required rows={5} className="mt-2 w-full rounded-md border border-neutral-300 px-3 py-2 outline-none" />
      </label>
      <button type="submit" className="h-11 w-fit rounded-md bg-[#ff0000] px-6 text-sm text-white">
        Enviar
      </button>
    </form>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <label className="text-sm">
      {label}
      <input name={name} type={type} required className="mt-2 h-11 w-full rounded-md border border-neutral-300 px-3 outline-none" />
    </label>
  );
}
