'use client';

import { useInView } from '@/hooks/useInView';
import styles from './OlioLinea.module.scss';

const oils = [
  {
    num: '01',
    name: 'Un Tranquèl',
    tags: ['Olio di punta', 'Equilibrato', 'Versatile'],
    tagline: 'Olio equilibrato e versatile',
    accent: 'green' as const,
    note: undefined,
    description:
      'C\'è sempre quello che sta bene dappertutto. Quello che non ha bisogno di farsi notare. Un Tranquèl è un olio equilibrato, morbido e versatile, pensato per la cucina quotidiana. Delicato senza essere anonimo, presente senza coprire.',
    closing: 'È l\'olio che resta sempre sulla tavola.',
    uses: ['Pane', 'Pasta', 'Verdure', 'Pesce', 'Carne'],
  },
  {
    num: '02',
    name: 'Dun Diàvel',
    tags: ['Piccante', 'Aromatico', 'Persistente'],
    tagline: 'Olio piccante e deciso',
    accent: 'lime' as const,
    note: 'Peperoncini coltivati in azienda · Habanero · Carolina Reaper',
    description:
      'Piccante, vivo, irrequieto. Dun Diàvel nasce dall\'infusione di peperoncini coltivati direttamente dall\'azienda agricola. Si scelgono varietà aromatiche — Habanero e Carolina Reaper — per regalare all\'olio profumo e complessità, non solo piccantezza. Il risultato è un extravergine dal finale pungente e dai profumi floreali e fruttati, ricco di personalità.',
    closing: 'Un olio che non accompagna. Comanda.',
    uses: ['Griglia', 'Bruschette', 'Legumi', 'Pizza', 'Verdure'],
  },
  {
    num: '03',
    name: 'Stulrapiòp',
    tags: ['Forte', 'Rustico', 'Intenso'],
    tagline: 'Olio forte e rustico',
    accent: 'earth' as const,
    note: undefined,
    description:
      'Olio extravergine rustico e deciso, nato dagli ulivi autoctoni coltivati nella pianura reggiana. Stulrapiòp è un olio vero, grezzo nel carattere e intenso nel gusto. Ha profumi erbacei, note amare importanti e una struttura forte, quasi selvatica.',
    closing: 'Non cerca equilibrio. Cerca carattere.',
    uses: ['Pane caldo', 'Zuppe', 'Carne alla brace', 'Tavole contadine'],
  },
];

export function OlioLinea() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="linea" aria-labelledby="linea-title">
      {/* Header */}
      <div className={styles.sectionTop} ref={headRef}>
        <div className={`${styles.topInner} ${headVisible ? styles.topVisible : ''}`}>
          <div className={styles.topLeft}>
            <span>La Linea</span>
            <p aria-hidden="true">Oli</p>
          </div>
          <div className={styles.topRight}>
            <h2 id="linea-title">
              Tre oli.<br />Tre caratteri.
            </h2>
            <p className={styles.topSub}>
              Tre nomi in dialetto reggiano. Tre personalità distinte. L&apos;olio di punta
              è <strong style={{ color: 'rgba(163,230,53,0.8)' }}>Un Tranquèl</strong> — equilibrato,
              quotidiano, per tutti. Poi quello che comanda e quello che non cerca compromessi.
            </p>
          </div>
        </div>
      </div>

      {/* Oil cards */}
      <div className={styles.oils}>
        {oils.map((oil, i) => (
          <OilCard key={oil.name} oil={oil} index={i} />
        ))}
      </div>
    </section>
  );
}

function OilCard({
  oil,
  index,
}: {
  oil: (typeof oils)[0];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.12 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${styles[`card--${oil.accent}`]} ${isInView ? styles.cardVisible : ''}`}
      style={{ '--i': index } as React.CSSProperties}
      aria-labelledby={`oil-${index}`}
    >
      {/* Top row: num + tags */}
      <div className={styles.cardMeta}>
        <span className={styles.cardNum} aria-hidden="true">{oil.num}</span>
        <div className={styles.cardTags}>
          {oil.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className={styles.cardNameWrap}>
        <h3 className={styles.cardName} id={`oil-${index}`}>{oil.name}</h3>
        <p className={styles.cardTagline}>{oil.tagline}</p>
        {oil.note && (
          <p className={styles.cardNote}>{oil.note}</p>
        )}
      </div>

      {/* Divider */}
      <div className={styles.cardDivider} aria-hidden="true" />

      {/* Description */}
      <p className={styles.cardDesc}>{oil.description}</p>
      <p className={styles.cardClosing}>{oil.closing}</p>

      {/* Uses */}
      <div className={styles.cardUses} aria-label={`Abbinamenti consigliati per ${oil.name}`}>
        {oil.uses.map((u) => (
          <span key={u}>{u}</span>
        ))}
      </div>
    </article>
  );
}
