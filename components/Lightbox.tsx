"use client";

import { useEffect, useMemo, useState } from "react";
import WatermarkedImage from "@/components/WatermarkedImage";

export type PhotoItem = {
  src: string;
  alt?: string;
  caption?: string;
};

function lockBodyScroll(lock: boolean) {
  document.body.style.overflow = lock ? "hidden" : "";
}

function Modal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images?: PhotoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  useEffect(() => {
    lockBodyScroll(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockBodyScroll(false);
    };
  }, [onClose, onPrev, onNext]);

  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-6xl rounded-3xl border border-white/10 bg-black/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-sm text-white/80 hover:bg-black/80"
          onClick={onClose}
        >
          ✕
        </button>

        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xl text-white/80 hover:bg-black/80"
          onClick={onPrev}
        >
          ‹
        </button>

        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xl text-white/80 hover:bg-black/80"
          onClick={onNext}
        >
          ›
        </button>

        <div className="relative aspect-[16/10] bg-black">
          <WatermarkedImage src={img.src} alt={img.alt ?? "Photo"} fill className="object-contain" watermarkOpacity={0.12} watermarkSizePx={260} priority />
        </div>

        <div className="p-4 text-sm text-white/70 flex items-center justify-between">
          <div className="truncate">{img.alt ?? img.caption ?? ""}</div>
          <div className="text-white/50">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhotoCatalog({
  images = [],
  columns = 3,
  thumbAspect = "4/3",
}: {
  images?: PhotoItem[];
  columns?: 2 | 3 | 4;
  thumbAspect?: "1/1" | "4/3" | "16/9";
}) {
  const imagesSafe = images ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const gridCols = useMemo(() => {
    if (columns === 2) return "grid-cols-2";
    if (columns === 3) return "grid-cols-2 md:grid-cols-3";
    return "grid-cols-2 md:grid-cols-4";
  }, [columns]);

  const aspect = useMemo(() => {
    if (thumbAspect === "1/1") return "aspect-square";
    if (thumbAspect === "16/9") return "aspect-[16/9]";
    return "aspect-[4/3]";
  }, [thumbAspect]);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div>
      <div className={`grid gap-3 ${gridCols}`}>
        {imagesSafe.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`relative ${aspect} overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] cursor-pointer`}
          >
            {/* مهم: نخلي الصورة ما تشدّش click */}
            <WatermarkedImage
              src={it.src}
              alt={it.alt ?? "Photo"}
              fill
              className="object-cover pointer-events-none"
              watermarkOpacity={0.10}
              watermarkSizePx={220}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition" />
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <Modal images={imagesSafe} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      ) : null}
    </div>
  );
}