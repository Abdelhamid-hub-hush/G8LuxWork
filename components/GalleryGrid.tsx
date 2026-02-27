"use client";

import { useMemo, useState } from "react";
import { gallery } from "@/lib/gallery";
import PhotoCatalog from "@/components/Lightbox";

export default function GalleryGrid() {
  const categories = useMemo(
    () => ["Tout", ...Array.from(new Set(gallery.map((g) => g.category)))],
    []
  );
  const [filter, setFilter] = useState<string>("Tout");

  const items = useMemo(
    () => (filter === "Tout" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  const images = useMemo(
    () => items.map((it) => ({ src: it.src, alt: it.alt, caption: it.category })),
    [items]
  );

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-3 py-1 text-xs border ${
              filter === c ? "border-gold/60 text-gold" : "border-white/10 text-white/70"
            } hover:bg-white/5`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <PhotoCatalog images={images} columns={3} />
      </div>
    </div>
  );
}