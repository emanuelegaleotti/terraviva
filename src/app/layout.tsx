import type { Metadata, Viewport } from "next";
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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.terraviva-reggiolo.it";

export const viewport: Viewport = {
  themeColor: "#0d1c10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "TerraViva",

  title: {
    default: "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo",
    template: "%s | TerraViva",
  },

  description:
    "TerraViva è un'azienda agricola biologica a Reggiolo (RE), Emilia-Romagna. Dal 1987 coltiviamo prodotti freschi e stagionali nel rispetto della terra e dei suoi cicli naturali.",

  keywords: [
    "agricoltura biologica Reggiolo",
    "prodotti biologici Reggio Emilia",
    "verdure biologiche Emilia-Romagna",
    "azienda agricola biologica",
    "biologico certificato Reggiolo",
    "km zero Reggio Emilia",
    "prodotti stagionali",
    "ortaggi biologici",
    "filiera corta Emilia-Romagna",
    "TerraViva Reggiolo",
  ],

  authors: [{ name: "TerraViva", url: BASE_URL }],
  creator: "TerraViva",
  publisher: "TerraViva",
  category: "Agricoltura",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: BASE_URL,
    siteName: "TerraViva",
    title: "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo",
    description:
      "Dal 1987 coltiviamo prodotti freschi e stagionali a Reggiolo. Biologico certificato, filiera corta, rispetto per la natura.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo, Emilia-Romagna",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TerraViva – Agricoltura Biologica e Stagionale a Reggiolo",
    description:
      "Dal 1987 coltiviamo prodotti freschi e stagionali a Reggiolo. Biologico certificato, filiera corta, rispetto per la natura.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "it-IT": BASE_URL,
      "x-default": BASE_URL,
    },
  },

  // Geo meta tags – local SEO for Reggiolo (RE), Emilia-Romagna
  other: {
    "geo.region": "IT-RE",
    "geo.placename": "Reggiolo, Reggio Emilia",
    "geo.position": "44.9183;10.7961",
    ICBM: "44.9183, 10.7961",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
      </body>
    </html>
  );
}
