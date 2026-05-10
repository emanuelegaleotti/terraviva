'use client';

import { useInView } from '@/hooks/useInView';
import styles from './Manifesto.module.scss';

const principles = [
  {
    num: '01',
    title: 'Biologico al 100%',
    desc: 'Nessun pesticida, nessun compromesso. Solo terra sana e pratiche rispettose dei cicli naturali.',
  },
  {
    num: '02',
    title: 'Stagionale per natura',
    desc: 'Ogni prodotto nasce nel momento giusto, quando la terra lo permette e la stagione lo chiede.',
  },
  {
    num: '03',
    title: 'Famiglia e tradizione',
    desc: 'Tre generazioni di passione per la terra, i suoi ritmi e i frutti che ogni stagione porta con sé.',
  },
];

export function Manifesto() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();
  const { ref: cardsRef, isInView: cardsVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} aria-labelledby="manifesto-title">
      <div className={styles.inner}>
        {/* Section header */}
        <div
          ref={headRef}
          className={`${styles.sectionHead} ${headVisible ? styles.headVisible : ''}`}
        >
          <span className={styles.eyebrow}>I Nostri Principi</span>
          <h2 className={styles.title} id="manifesto-title">
            Un&apos;agricoltura<br />
            che rispetta la vita.
          </h2>
        </div>

        {/* Numbered cards */}
        <div
          ref={cardsRef}
          className={`${styles.cards} ${cardsVisible ? styles.cardsVisible : ''}`}
        >
          {principles.map((p, i) => (
            <article
              key={p.num}
              className={styles.card}
              style={{ '--i': i } as React.CSSProperties}
            >
              <span aria-hidden="true">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
