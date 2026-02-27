"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";

export default function Header() {
  const { lang, setLang } = useLang();

  const t = {
    fr: { services: "Services", realisations: "Réalisations", about: "À propos", contact: "Contact", call: "Appeler", wa: "WhatsApp" },
    ar: { services: "الخدمات", realisations: "الأعمال", about: "من نحن", contact: "اتصال", call: "اتصل", wa: "واتساب" },
  }[lang];

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-gold/40 grid place-items-center">
            <span className="text-sm tracking-widest text-gold">G8</span>
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-gold">{site.name}</div>
            <div className="text-xs text-white/50">{site.tagline[lang]}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm text-white/70 hover:text-white" href="/">
  {lang === "fr" ? "Accueil" : "الرئيسية"}
</Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/services">{t.services}</Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/realisations">{t.realisations}</Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/a-propos">{t.about}</Link>
          <Link className="text-sm text-white/70 hover:text-white" href="/contact">{t.contact}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm border border-white/15 text-white/80 hover:bg-white/5"
            onClick={() => setLang(lang === "fr" ? "ar" : "fr")}
            aria-label="Changer la langue"
          >
            {lang === "fr" ? "AR" : "FR"}
          </button>

          <a className="rounded-full px-4 py-2 text-sm border border-white/15 text-white/80 hover:bg-white/5" href={`tel:${site.phoneE164}`}>
            {t.call}
          </a>
          <a className="rounded-full px-4 py-2 text-sm bg-gold text-black hover:bg-[#ffe1a2]" href={`https://wa.me/${site.phoneDigits}`} target="_blank" rel="noreferrer">
            {t.wa}
          </a>
        </div>
      </div>
    </header>
  );
}
