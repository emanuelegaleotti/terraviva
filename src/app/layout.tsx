import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "../styles/globals.scss";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo",
    template: "%s | TerraViva",
  },
  description:
    "TerraViva è un'azienda agricola biologica e stagionale di Reggiolo. Coltiviamo la terra con rispetto per la natura e le stagioni.",
  keywords: ["agricoltura biologica", "stagionale", "Reggiolo", "prodotti biologici", "km zero"],
  authors: [{ name: "TerraViva" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "TerraViva",
    title: "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo",
    description:
      "Prodotti biologici e stagionali coltivati con cura nel cuore di Reggiolo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
      </body>
    </html>
  );
}
