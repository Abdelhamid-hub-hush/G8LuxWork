"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { useLang } from "@/components/lang/LanguageProvider";

export default function DevisWhatsApp() {
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");

  const t = {
    fr: { title: "Demander un devis", name: "Nom", phone: "Téléphone", service: "Service", msg: "Votre besoin...", send: "Envoyer sur WhatsApp" },
    ar: { title: "طلب عرض سعر", name: "الاسم", phone: "الهاتف", service: "الخدمة", msg: "شرح الحاجة...", send: "إرسال على واتساب" },
  }[lang];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Devis - ${site.name}*\nNom: ${name}\nTéléphone: ${phone}\nService: ${service}\nMessage: ${msg}`
    );
    window.open(`https://wa.me/${site.phoneDigits}?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
      <h3 className="font-medium">{t.title}</h3>

      <div className="mt-4 grid gap-3">
        <input
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
          placeholder={t.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
          placeholder={t.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
          placeholder={t.service}
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <textarea
          className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/30"
          rows={5}
          placeholder={t.msg}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
        />

        <button className="rounded-2xl bg-gold text-black px-5 py-3 text-sm font-medium hover:bg-[#ffe1a2]" type="submit">
          {t.send}
        </button>
      </div>
    </form>
  );
}
