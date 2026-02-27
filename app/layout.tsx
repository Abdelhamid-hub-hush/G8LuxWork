import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/lang/LanguageProvider";

export const metadata: Metadata = {
  title: "G8LuxWork | Rénovation & Construction",
  description:
    "Entreprise multi-services: rénovation, électricité, plomberie, peinture, faux plafonds, aluminium, verre trempé, réseaux & caméras.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
