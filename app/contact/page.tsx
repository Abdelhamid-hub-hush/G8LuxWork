import { site } from "@/lib/site";
import DevisWhatsApp from "@/components/contact/DevisWhatsApp";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-white/70">
        Appelez-nous ou envoyez un message WhatsApp pour un devis rapide.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-soft">
          <h2 className="text-xl font-semibold">Informations</h2>

          <div className="mt-4 space-y-2 text-sm text-white/70">
            <div>📍 Ville: {site.city}</div>

            <div>
              📞 Téléphone:{" "}
              <a
                className="text-gold hover:underline"
                href={`tel:${site.phoneE164}`}
              >
                {site.phoneE164}
              </a>
            </div>

            <div>
              ✉️ Email:{" "}
              <a
                className="text-gold hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-black hover:bg-[#ffe1a2]"
              href={`https://wa.me/${site.phoneDigits}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:bg-white/5"
              href={`tel:${site.phoneE164}`}
            >
              Appeler
            </a>
          </div>

          <div className="mt-8">
            <div className="text-sm text-white/70">Google Map</div>

            <div className="mt-2 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.4485754108728!2d-6.904626100000001!3d33.903852799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70dbf8ee2210b%3A0x4fded6c6ef89aedb!2sG8%20WORK%20showroom01!5e0!3m2!1sfr!2sma!4v1772134497388!5m2!1sfr!2sma"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G8 WORK showroom01"
              />
            </div>

            <a
              href="https://www.google.com/maps?q=G8%20WORK%20showroom01&hl=fr&gl=ma"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]"
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>

        <DevisWhatsApp />
      </div>
    </section>
  );
}