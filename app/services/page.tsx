"use client";

import { useLang } from "@/components/lang/LanguageProvider";
import ServiceCards from "@/components/ServiceCards";


export default function ServicesPage() {
  const { lang } = useLang();
  const title = lang === "fr" ? "Services" : "الخدمات";
  const subtitle = lang === "fr" ? "Choisissez un service pour voir les détails." : "اختر خدمة للاطلاع على التفاصيل.";

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-2 text-white/70">{subtitle}</p>
      <ServiceCards lang={lang} />
    </section>
  );
}
