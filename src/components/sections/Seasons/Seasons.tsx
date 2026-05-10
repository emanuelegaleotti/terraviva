'use client';

import { useInView } from '@/hooks/useInView';
import styles from './Seasons.module.scss';

interface SeasonData {
  num: string;
  label: string;
  months: string;
  products: string[];
}

const seasons: SeasonData[] = [
  {
    num: '01',
    label: 'Primavera',
    months: 'Mar · Apr · Mag',
    products: ['Asparagi', 'Piselli', 'Spinaci', 'Lattuga', 'Ravanelli', 'Fave', 'Fragole'],
  },
  {
    num: '02',
    label: 'Estate',
    months: 'Giu · Lug · Ago',
    products: ['Pomodori', 'Zucchine', 'Melanzane', 'Peperoni', 'Cetrioli', 'Basilico', 'Cocomero'],
  },
  {
    num: '03',
    label: 'Autunno',
    months: 'Set · Ott · Nov',
    products: ['Zucca', 'Cavolo', 'Broccoli', 'Carote', 'Radicchio', 'Mele', 'Pere'],
  },
  {
    num: '04',
    label: 'Inverno',
    months: 'Dic · Gen · Feb',
    products: ['Cavolo nero', 'Cime di rapa', 'Finocchio', 'Porri', 'Verza', 'Topinambur'],
  },
];

function getCurrentSeasonIndex(): number {
  const m = new Date().getMonth() + 1;
  if (m >= 3 && m <= 5) return 0;
  if (m >= 6 && m <= 8) return 1;
  if (m >= 9 && m <= 11) return 2;
  return 3;
}

export function Seasons() {
  const { ref, isInView } = useInView<HTMLElement>();
  const currentIdx = getCurrentSeasonIndex();

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.visible : ''}`}
      id="stagioni"
      aria-labelledby="seasons-title"
    >
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <div className={styles.headerInner}>
          <span className={styles.eyebrow}>Le Stagioni in Tavola</span>
          <h2 className={styles.title} id="seasons-title">
            La natura decide<br />quando è il momento.
          </h2>
        </div>
      </div>

      {/* Grid of season cards */}
      <div className={styles.grid} role="list" aria-label="Stagioni e prodotti">
        {seasons.map((season, i) => (
          <article
            key={season.num}
            className={`${styles.card} ${i === currentIdx ? styles.cardCurrent : ''}`}
            role="listitem"
            style={{ '--i': i } as React.CSSProperties}
          >
            <div className={styles.meta}>
              <span aria-hidden="true">{season.num}</span>
              {i === currentIdx && (
                <span className={styles.now}>Ora</span>
              )}
            </div>
            <h3>{season.label}</h3>
            <small>{season.months}</small>
            <ul role="list" aria-label={`Prodotti di ${season.label}`}>
              {season.products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
