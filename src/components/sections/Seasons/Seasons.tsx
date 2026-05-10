'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './Seasons.module.scss';

type SeasonKey = 'primavera' | 'estate' | 'autunno' | 'inverno';

interface SeasonData {
  label: string;
  tagline: string;
  products: string[];
}

const seasons: Record<SeasonKey, SeasonData> = {
  primavera: {
    label: 'Primavera',
    tagline: 'Il risveglio della terra — marzo · aprile · maggio',
    products: ['Asparagi', 'Piselli', 'Spinaci', 'Lattuga', 'Ravanelli', 'Fave', 'Fragole', 'Finocchi'],
  },
  estate: {
    label: 'Estate',
    tagline: 'Il calore del sole — giugno · luglio · agosto',
    products: ['Pomodori', 'Zucchine', 'Melanzane', 'Peperoni', 'Fagiolini', 'Cetrioli', 'Basilico', 'Cocomero'],
  },
  autunno: {
    label: 'Autunno',
    tagline: 'La ricchezza della raccolta — settembre · ottobre · novembre',
    products: ['Zucca', 'Cavolo', 'Broccoli', 'Carote', 'Barbabietola', 'Radicchio', 'Mele', 'Pere'],
  },
  inverno: {
    label: 'Inverno',
    tagline: 'La lentezza e la profondità — dicembre · gennaio · febbraio',
    products: ['Cavolo nero', 'Cime di rapa', 'Finocchio', 'Porri', 'Verza', 'Topinambur', 'Arance', 'Clementine'],
  },
};

function getCurrentSeason(): SeasonKey {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'primavera';
  if (month >= 6 && month <= 8) return 'estate';
  if (month >= 9 && month <= 11) return 'autunno';
  return 'inverno';
}

const seasonKeys = Object.keys(seasons) as SeasonKey[];

export function Seasons() {
  const [active, setActive] = useState<SeasonKey>(getCurrentSeason());
  const { ref, isInView } = useInView<HTMLElement>();
  const current = seasons[active];

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      id="stagioni"
      aria-labelledby="seasons-title"
    >
      <div className={styles.inner}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>Le Stagioni in Tavola</p>
          <h2 className={styles.title} id="seasons-title">
            La natura decide<br />
            quando è il momento giusto.
          </h2>
          <p className={styles.subtitle}>Noi raccogliamo. Voi assaporate.</p>
        </header>

        {/* Season tabs */}
        <div role="tablist" aria-label="Scegli la stagione" className={styles.tabs}>
          {seasonKeys.map((key) => (
            <button
              key={key}
              role="tab"
              id={`tab-${key}`}
              aria-selected={active === key}
              aria-controls={`panel-${key}`}
              className={`${styles.tab} ${active === key ? styles.tabActive : ''} ${styles[key]}`}
              onClick={() => setActive(key)}
            >
              {seasons[key].label}
            </button>
          ))}
        </div>

        {/* Season panel */}
        <div
          key={active}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className={styles.panel}
        >
          <p className={styles.tagline}>{current.tagline}</p>
          <ul
            className={styles.products}
            role="list"
            aria-label={`Prodotti di ${current.label}`}
          >
            {current.products.map((product) => (
              <li key={product} className={styles.product}>
                {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
