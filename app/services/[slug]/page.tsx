"use client";

import Link from "next/link";
import { useLang } from "@/components/lang/LanguageProvider";
import { services } from "@/lib/content";
import PhotoCatalog from "@/components/Lightbox";
import { servicePhotos } from "@/lib/servicePhotos";

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
          <h1 className="text-2xl font-semibold">
            {lang === "fr" ? "Service introuvable" : "الخدمة غير موجودة"}
          </h1>
          <Link className="mt-4 inline-block text-gold hover:underline" href="/services">
            {lang === "fr" ? "Retour services →" : "رجوع للخدمات →"}
          </Link>
        </div>
      </section>
    );
  }

  // ✅ هنا كيجيب صور هاد الخدمة حسب slug
  const photos = servicePhotos[params.slug] ?? [];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link className="text-sm text-white/60 hover:text-white" href="/services">
        ← {lang === "fr" ? "Services" : "الخدمات"}
      </Link>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
          <h1 className="text-3xl font-semibold">{service.title[lang]}</h1>
          <p className="mt-4 text-white/70">{service.short[lang]}</p>

          <ul className="mt-6 grid gap-2">
            {service.bullets[lang].map((b) => (
              <li key={b} className="flex gap-2 text-sm text-white/75">
                <span className="text-gold">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* ✅ Photos du service (Catalogue clickable لكلشي) */}
          <div className="mt-8">
            <div className="text-sm text-white/70">
              {lang === "fr" ? "Photos du service" : "صور الخدمة"}
            </div>

            {photos.length ? (
              <div className="mt-3">
                <PhotoCatalog images={photos} columns={2} />
              </div>
            ) : (
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/5" />
                <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-white/5" />
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-soft">
          <div className="text-sm text-white/70">
            {lang === "fr" ? "Demander un devis" : "طلب عرض سعر"}
          </div>
          <p className="mt-2 text-sm text-white/60">
            {lang === "fr"
              ? "Contactez-nous sur WhatsApp pour une réponse rapide."
              : "تواصل معنا على واتساب للرد السريع."}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <a
              className="rounded-2xl bg-gold text-black px-4 py-2 text-sm font-medium hover:bg-[#ffe1a2]"
              href="https://wa.me/212661829568"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              href="tel:+212661829568"
            >
              {lang === "fr" ? "Appeler" : "اتصل"}
            </a>
            <Link
              className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
              href="/contact"
            >
              {lang === "fr" ? "Formulaire" : "نموذج"}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}