"use client";

import Link from "next/link";
import type { Lang } from "@/lib/site";
import { services } from "@/lib/content";
import { servicePhotos } from "@/lib/servicePhotos";
import WatermarkedImage from "@/components/WatermarkedImage";

export default function ServiceCards({ lang }: { lang: Lang }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {services.map((s) => {
        const photos = servicePhotos[s.slug] ?? [];
        const preview = photos.slice(0, 4);

        return (
          <div
            key={s.slug}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-soft"
          >
            <h3 className="font-medium text-gold">{s.title[lang]}</h3>
            <p className="mt-2 text-sm text-white/70">{s.short[lang]}</p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {preview.map((p) => (
                <div
                  key={p.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <WatermarkedImage
                    src={p.src}
                    alt={p.alt ?? s.title[lang]}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 50vw, 200px"
                    watermarkOpacity={0.10}
                    watermarkSizePx={160}
                  />
                </div>
              ))}

              {Array.from({ length: Math.max(0, 4 - preview.length) }).map(
                (_, i) => (
                  <div
                    key={`ph-${s.slug}-${i}`}
                    className="aspect-[4/3] rounded-xl border border-white/10 bg-white/5"
                  />
                )
              )}
            </div>

            <Link
              className="mt-4 inline-block text-sm text-gold hover:underline"
              href={`/services/${s.slug}`}
            >
              {lang === "fr" ? "En savoir plus →" : "المزيد →"}
            </Link>
          </div>
        );
      })}
    </div>
  );
}