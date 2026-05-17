import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { ContattiBanco } from '@/components/sections/ContattiBanco/ContattiBanco';

export const metadata: Metadata = {
  title: 'Dove Trovarci – Banco Vendita a Reggiolo',
  description:
    'Trova il banco di TerraViva in Strada Caselli 10 a Reggiolo. Prodotti freschi e stagionali biologici direttamente dal campo, dal lunedì al sabato dalle 9:00 alle 19:30.',
  keywords: [
    'banco vendita biologico Reggiolo',
    'prodotti freschi Reggiolo',
    'acquisto diretto azienda agricola',
    'mercato contadino Reggio Emilia',
    'TerraViva contatti',
    'Strada Caselli Reggiolo',
  ],
  alternates: {
    canonical: '/contatti',
  },
};

export default function ContattiPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContattiBanco />
      </main>
      <Footer />
    </>
  );
}
