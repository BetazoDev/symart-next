import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-[1380px] gap-12 px-6 pb-20 pt-32 lg:grid-cols-2">
      <div>
        <h1 className="text-6xl font-semibold tracking-[-0.03em]">Contacto</h1>
        <p className="mt-5 max-w-md text-lg leading-snug">
          Hablas directo con el taller. Teléfono y WhatsApp +52 449 915 0678.
        </p>
        <p className="mt-6 text-sm">
          <a href="mailto:ventas@symart.com.mx" className="hover:text-[#ff0000]">ventas@symart.com.mx</a>
        </p>
        <p className="text-sm text-neutral-600">Aguascalientes, México</p>
        <p className="mt-2 text-sm text-neutral-600">Lunes a viernes, 8:30 a 18:30</p>
        <img src="/images/conference.jpg" alt="Sala de juntas" className="mt-8 h-72 w-full rounded-[18px] object-cover" />
      </div>
      <ContactForm />
    </div>
  );
}
