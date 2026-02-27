"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLang();

  const t = {
    title: lang === "fr" ? "À propos" : "من نحن",
    intro:
      lang === "fr"
        ? `${site.name}  est une équipe multi-services basée à Témara, spécialisée dans les travaux de rénovation, d’aménagement et d’installation technique. Nous accompagnons nos clients, particuliers et professionnels, dans la réalisation de leurs projets avec sérieux et professionnalisme.

Nous mettons un point d’honneur sur la qualité des finitions, la précision dans l’exécution et le respect des délais. Chaque chantier est réalisé avec organisation et propreté, du début jusqu’à la livraison finale.

Notre objectif est simple : offrir un travail fiable, durable et soigné, tout en garantissant la satisfaction de nos clients.`
        : `${site.name} فريق خدمات متعددة فـ ${site.city}. كنركزو على الجودة، الدقة، وخدمة نظيفة من البداية حتى اللمسات الأخيرة.`,
    cards: [
      {
        k: lang === "fr" ? "Qualité" : "الجودة",
        v:
          lang === "fr"
            ? "Finitions soignées, matériaux adaptés, résultat durable."
            : "تشطيب مزيان، مواد مناسبة، ونتيجة كتدوم.",
      },
      {
        k: lang === "fr" ? "Transparence" : "الوضوح",
        v:
          lang === "fr"
            ? "Devis clair, étapes expliquées, suivi régulier."
            : "ثمن واضح، مراحل مفهومة، وتتبع مستمر.",
      },
      {
        k: lang === "fr" ? "Engagement" : "الالتزام",
        v:
          lang === "fr"
            ? "Respect des délais, protection du chantier, nettoyage."
            : "احترام الوقت، حماية الورش، والنظافة.",
      },
    ],
    processTitle: lang === "fr" ? "Comment on travaille" : "كيفاش كنخدمو",
    steps: [
      {
        k: lang === "fr" ? "1. Visite & diagnostic" : "1. زيارة وتشخيص",
        v:
          lang === "fr"
            ? "On comprend le besoin, on mesure et on conseille."
            : "كنفهمو الطلب، كنقيسو، وكنعطيو نصائح.",
      },
      {
        k: lang === "fr" ? "2. Devis" : "2. عرض الثمن",
        v:
          lang === "fr"
            ? "Un devis simple, détaillé, sans surprises."
            : "عرض ثمن واضح ومفصل بلا مفاجآت.",
      },
      {
        k: lang === "fr" ? "3. Exécution" : "3. التنفيذ",
        v:
          lang === "fr"
            ? "Équipe organisée, chantier protégé, qualité contrôlée."
            : "فريق منظم، حماية المكان، ومراقبة الجودة.",
      },
      {
        k: lang === "fr" ? "4. Livraison" : "4. التسليم",
        v:
          lang === "fr"
            ? "Nettoyage + validation finale avec vous."
            : "تنظيف + تأكيد نهائي معاك.",
      },
    ],
    mapTitle: lang === "fr" ? "Localisation" : "الموقع",
    mapText:
      lang === "fr"
        ? "Cliquez pour ouvrir Google Maps."
        : "كليكي باش يتحل Google Maps.",
    cta:
      lang === "fr"
        ? "Besoin d’un devis rapide ?"
        : "باغي عرض ثمن سريع؟",
    ctaBtn: lang === "fr" ? "Contact" : "تواصل معنا",
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-8 shadow-soft">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,214,133,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(255,214,133,0.18),transparent_45%),radial-gradient(circle_at_60%_90%,rgba(255,255,255,0.10),transparent_55%)]" />
        </div>

        <div className="relative">
          <p className="text-gold/80 text-sm tracking-wide">
            {site.tagline[lang]}
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
            {t.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              📍 {t.mapTitle}
            </a>
            <Link
              href="/contact"
              className="rounded-2xl bg-gold px-4 py-2 text-sm font-medium text-black hover:bg-[#ffe1a2]"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {t.cards.map((c) => (
          <div
            key={c.k}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-soft"
          >
            <div className="text-gold font-medium">{c.k}</div>
            <div className="mt-2 text-sm text-white/70 leading-relaxed">
              {c.v}
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">{t.processTitle}</h2>
          <div className="text-sm text-white/50">{site.city}</div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.steps.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="font-medium text-white/90">{s.k}</div>
              <div className="mt-2 text-sm text-white/70 leading-relaxed">
                {s.v}
              </div>
            </div>
          ))}
        </div>

        {/* Map box */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-medium text-white/90">{t.mapTitle}</div>
            <div className="mt-1 text-sm text-white/70">{t.mapText}</div>
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white/10 px-4 py-2 text-sm text-white/85 hover:bg-white/15"
          >
            Open Maps →
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-gold font-medium">{t.cta}</div>
          <div className="mt-1 text-sm text-white/70">
            {lang === "fr"
              ? "Envoyez-nous des photos sur WhatsApp, on vous répond vite."
              : "صيفط لينا تصاور فـ WhatsApp وكنجاوبوك بسرعة."}
          </div>
        </div>
        <Link
          href="/contact"
          className="rounded-2xl bg-gold px-5 py-3 text-sm font-semibold text-black hover:bg-[#ffe1a2]"
        >
          {t.ctaBtn}
        </Link>
      </div>
    </section>
  );
}
