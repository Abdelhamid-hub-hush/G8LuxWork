"use client";

import React, { useEffect, useRef, useState } from "react";
import WatermarkedImage from "@/components/WatermarkedImage";

export type GalleryItem = { src: string; alt?: string; caption?: string };

function lock(lockBody: boolean) {
  document.body.style.overflow = lockBody ? "hidden" : "";
}

function Modal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  backText,
}: {
  images: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  backText: string;
}) {
  const img = images[index];

  useEffect(() => {
    lock(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lock(false);
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
        {/* ✅ Retour + Close */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-3">
          <button
            type="button"
            className="rounded-full border border-white/15 bg-black/60 px-3 py-2 text-sm text-white/80 hover:bg-black/80"
            onClick={onClose}
          >
            ← {backText}
          </button>
          <button
            type="button"
            className="rounded-full border border-white/15 bg-black/60 px-3 py-2 text-sm text-white/80 hover:bg-black/80"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xl text-white/80 hover:bg-black/80"
          onClick={onPrev}
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xl text-white/80 hover:bg-black/80"
          onClick={onNext}
          aria-label="Next"
        >
          ›
        </button>

        <div className="relative aspect-[16/10] bg-black">
          <WatermarkedImage
            src={img.src}
            alt={img.alt ?? "Photo"}
            fill
            className="object-contain"
            priority
            watermarkOpacity={0.12}
            watermarkSizePx={220}
          />
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

export default function ProjectsGallery({
  images,
  backText = "Retour",
}: {
  images?: GalleryItem[];
  backText?: string;
}) {
  const imagesSafe = images ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef(0);

  const open = (i: number) => {
    scrollRef.current = window.scrollY;
    setOpenIndex(i);
  };

  const close = () => {
    setOpenIndex(null);
    requestAnimationFrame(() => window.scrollTo(0, scrollRef.current));
  };

  const prev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + imagesSafe.length) % imagesSafe.length
    );

  const next = () =>
    setOpenIndex((i) =>
      i === null ? null : (i + 1) % imagesSafe.length
    );

  if (imagesSafe.length === 0) return null;

  return (
    <div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {imagesSafe.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => open(i)}
            className="mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <WatermarkedImage
                src={img.src}
                alt={img.alt ?? "Photo"}
                fill
                className="object-cover pointer-events-none"
                watermarkOpacity={0.10}
                watermarkSizePx={170}
              />
            </div>

            {(img.alt || img.caption) && (
              <div className="px-3 py-2 text-left text-sm text-white/70">
                {img.alt ?? img.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <Modal
          images={imagesSafe}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
          backText={backText}
        />
      ) : null}
    </div>
  );
}