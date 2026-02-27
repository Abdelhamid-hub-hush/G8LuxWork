"use client";

import Image, { type ImageProps } from "next/image";
import React, { useMemo } from "react";
import { site } from "@/lib/site";

type Props = Omit<ImageProps, "alt"> & {
  alt?: string;
  /** Opacité du watermark (0 → 1). */
  watermarkOpacity?: number;
  /** Taille du motif du watermark (px). */
  watermarkSizePx?: number;
  /** Texte du watermark (par défaut: site.name). */
  watermarkText?: string;
  /** Désactive le clic droit sur l'image (anti download basique). */
  disableContextMenu?: boolean;
};

function svgDataUri(text: string) {
  // Simple SVG motif (diagonal) – encodé en URI
  const safe = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="220" viewBox="0 0 420 220">
  <defs>
    <style>
      .t{font-family:Arial, sans-serif;font-size:28px;font-weight:700;fill:#ffffff;}
      .s{font-family:Arial, sans-serif;font-size:14px;font-weight:600;fill:#ffffff;}
    </style>
  </defs>
  <g opacity="1" transform="rotate(-18 210 110)">
    <text x="20" y="110" class="t">${safe}</text>
    <text x="22" y="140" class="s">g8luxwork.com</text>
  </g>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function WatermarkedImage({
  watermarkOpacity = 0.10,
  watermarkSizePx = 220,
  watermarkText = site.name,
  disableContextMenu = true,
  style,
  className,
  alt,
  ...props
}: Props) {
  const pattern = useMemo(() => svgDataUri(watermarkText), [watermarkText]);

  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", height: "100%" }}
      onContextMenu={disableContextMenu ? (e) => e.preventDefault() : undefined}
    >
      <Image
        {...props}
        alt={alt ?? "Image"}
        draggable={false}
        style={style}
      />

      {/* Watermark overlay */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          backgroundImage: `url("${pattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: `${watermarkSizePx}px`,
          opacity: watermarkOpacity,
          mixBlendMode: "normal",
        }}
      />
    </div>
  );
}
