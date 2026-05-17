'use client';

import { useInView } from '@/hooks/useInView';
import styles from './OlioCultivar.module.scss';

const cultivar = [
  {
    num: '01',
    name: 'Montelocco',
    nickname: '"Oliva Verde"',
    origin: 'Pianura reggiana · TerraViva',
    maturazione: 'Tardiva',
    isPrimary: true,
    tags: ['Cultivar principale', 'La più coltivata', 'Cuore del progetto'],
    characteristics: [
      'Cultivar dominante: la stragrande maggioranza delle piante',
      'Maturazione tardiva con mantenimento del colore verde',
      'Forte adattamento ai terreni della pianura reggiana',
      'Notevole rusticità e crescita equilibrata',
      'Adatto alle forti escursioni termiche emiliane',
    ],
    oilNotes: ['Fruttato delicato', 'Note di mela verde', 'Oliva fresca e mandorla bianca', 'Dolcezza equilibrata', 'Bassa aggressività fenolica'],
  },
  {
    num: '02',
    name: 'Bianello',
    nickname: '"Oliva Nera"',
    origin: 'Origine storica: Bianello · Quattro Castella',
    maturazione: 'Precoce',
    isPrimary: false,
    tags: ['Cultivar compagna', 'Protettrice', 'Rinforzo naturale'],
    characteristics: [
      'Presente in quantità minore, con ruolo di supporto',
      'Rafforza la vitalità del Montelocco e ne riduce le malattie',
      'Portamento assurgente con rami verticali',
      'Elevata rusticità e tolleranza alle basse temperature',
      'Maturazione precoce rispetto al Montelocco',
    ],
    oilNotes: ['Fruttato medio', 'Note erbacee e carciofo', 'Sentori di mandorla', 'Amaro moderato', 'Piccante elegante e persistente'],
  },
];

export function OlioCultivar() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="cultivar" aria-labelledby="cultivar-title">
      {/* Section header */}
      <div ref={headRef} className={styles.sectionHead}>
        <div className={`${styles.headInner} ${headVisible ? styles.headVisible : ''}`}>
          <span className={styles.eyebrow}>Le Cultivar Autoctone</span>
          <h2 className={styles.title} id="cultivar-title">
            Il Montelocco<br />
            <em>è il cuore.</em>
          </h2>
          <p className={styles.intro}>
            Il progetto ruota attorno al <strong style={{ color: 'rgba(163,230,53,0.85)' }}>Montelocco</strong> — la cultivar
            principale, quella più coltivata, l'"Oliva Verde" del territorio reggiano.
            Il Bianello è presente in quantità minore con un ruolo preciso: rafforzare
            le piante di Montelocco e proteggerle dalle malattie.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {cultivar.map((c, i) => (
          <CultivarCard key={c.name} data={c} index={i} />
        ))}
      </div>
    </section>
  );
}

function CultivarCard({
  data: c,
  index,
}: {
  data: (typeof cultivar)[0];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${c.isPrimary ? styles.cardPrimary : styles.cardSecondary} ${isInView ? styles.cardVisible : ''}`}
      style={{ '--i': index } as React.CSSProperties}
      aria-labelledby={`cultivar-${c.name}`}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardNum} aria-hidden="true">{c.num}</span>
        <div className={styles.cardTags}>
          {c.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className={styles.cardName}>
        <h3 id={`cultivar-${c.name}`}>{c.name}</h3>
        <p className={styles.nickname}>{c.nickname}</p>
        <p className={styles.origin}>{c.origin}</p>
        <span className={`${styles.maturazioneBadge} ${c.isPrimary ? styles.badgePrimary : styles.badgeSecondary}`}>
          {c.isPrimary ? 'Cultivar principale' : 'Cultivar compagna'}
        </span>
      </div>

      <ul className={styles.characteristics} aria-label={`Caratteristiche agronomiche del ${c.name}`}>
        {c.characteristics.map((ch) => (
          <li key={ch}>
            <span aria-hidden="true">—</span>
            {ch}
          </li>
        ))}
      </ul>

      <div className={styles.oilProfile}>
        <p className={styles.oilProfileTitle}>
          {c.isPrimary ? "Profilo dell'olio" : "Contributo all'olio"}
        </p>
        <ul aria-label={c.isPrimary ? `Note organolettiche dell'olio di ${c.name}` : `Contributo del ${c.name} all'olio`}>
          {c.oilNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
