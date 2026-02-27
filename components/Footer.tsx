import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-white/50 flex flex-col md:flex-row gap-6 justify-between">
        <div>
          <div className="text-white/70">© {new Date().getFullYear()} {site.name}. Tous droits réservés.</div>
          <div className="mt-2">
            {site.city} • <a className="text-gold hover:underline" href={`tel:${site.phoneE164}`}>{site.phoneE164}</a> •{" "}
            <a className="text-gold hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div className="flex gap-4">
          <a className="hover:text-white" href={site.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a className="hover:text-white" href={site.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <Link className="hover:text-white" href="/contact">Devis</Link>
        </div>
      </div>
    </footer>
  );
}
