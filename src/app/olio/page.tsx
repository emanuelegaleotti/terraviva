import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { OlioHero } from '@/components/sections/OlioHero/OlioHero';
import { OlioStoria } from '@/components/sections/OlioStoria/OlioStoria';
import { OlioCultivar } from '@/components/sections/OlioCultivar/OlioCultivar';
import { OlioProprieta } from '@/components/sections/OlioProprieta/OlioProprieta';
import { OlioLinea } from '@/components/sections/OlioLinea/OlioLinea';
import { OlioProgetto } from '@/components/sections/OlioProgetto/OlioProgetto';

export const metadata: Metadata = {
  title: "Olio EVO Reggiano – Montelocco e Bianello in Pianura",
  description:
    "Il progetto di coltivazione delle cultivar autoctone Montelocco e Bianello nella pianura reggiana, portato avanti da Emanuele e Giovanni Galeotti per produrre olio extravergine tipico del territorio.",
  keywords: [
    "olio reggiano",
    "cultivar Montelocco",
    "cultivar Bianello",
    "olivo pianura reggiana",
    "olio EVO Reggio Emilia",
    "ulivi autoctoni pianura emiliana",
    "famiglia Galeotti",
    "olio extravergine Emilia-Romagna",
  ],
  openGraph: {
    title: "Olio EVO Reggiano – Montelocco e Bianello in Pianura",
    description:
      "Le cultivar autoctone Montelocco e Bianello coltivate nella pianura reggiana. Un progetto di biodiversità e identità territoriale portato avanti dalla famiglia Galeotti.",
    type: "article",
  },
  alternates: {
    canonical: "/olio",
  },
};

export default function OlioPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <OlioHero />
        <OlioStoria />
        <OlioCultivar />
        <OlioProprieta />
        <OlioLinea />
        <OlioProgetto />
      </main>
      <Footer />
    </>
  );
}
