'use client';

import { useInView } from '@/hooks/useInView';
import styles from './OlioProgetto.module.scss';

const productionSteps = [
  {
    years: '3–5',
    unit: 'anni',
    label: 'Prime olive',
    desc: 'I giovani alberi iniziano a produrre i primi frutti.',
  },
  {
    years: '7–10',
    unit: 'anni',
    label: 'Produzione significativa',
    desc: 'La produzione diventa economicamente rilevante.',
  },
  {
    years: '12–20',
    unit: 'anni',
    label: 'Piena produzione',
    desc: 'Le cultivar rustiche raggiungono la piena maturità produttiva.',
  },
  {
    years: '100+',
    unit: 'anni',
    label: 'Longevità',
    desc: 'Gli ulivi reggiani dimostrano una straordinaria durabilità secolare.',
  },
];

const futureChips = [
  'Recupero cultivar storiche',
  'Oli territoriali di nicchia',
  'Oleoturismo',
  'Valorizzazione gastronomica emiliana',
  'Biodiversità agricola',
];

export function OlioProgetto() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();
  const { ref: bodyRef, isInView: bodyVisible } = useInView<HTMLDivElement>();
  const { ref: stepsRef, isInView: stepsVisible } = useInView<HTMLDivElement>();
  const { ref: futureRef, isInView: futureVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="progetto" aria-labelledby="progetto-title">
      {/* Section header */}
      <div className={styles.sectionTop} ref={headRef}>
        <div className={`${styles.topInner} ${headVisible ? styles.topVisible : ''}`}>
          <div className={styles.topLeft}>
            <span>Il Progetto</span>
            <p aria-hidden="true">Galeotti</p>
          </div>
          <div className={styles.topRight}>
            <h2 id="progetto-title">
              Custodi di<br />un patrimonio.
            </h2>
          </div>
        </div>
      </div>

      {/* Project body */}
      <div className={styles.bodyWrap}>
        <div
          ref={bodyRef}
          className={`${styles.bodyInner} ${bodyVisible ? styles.bodyVisible : ''}`}
        >
          <p>
            Emanuele e Giovanni Galeotti hanno dato vita a un progetto di recupero che va
            ben oltre l'agricoltura. Anni fa, con piccole pianticine di cultivar autoctone,
            hanno iniziato il lungo percorso di coltivazione degli ulivi nella pianura reggiana.
          </p>
          <p>
            Il loro lavoro di cura, pazienza e conoscenza del territorio sta portando alla
            produzione di un olio extravergine di oliva unico nel suo genere — espressione
            di un paesaggio sospeso tra Emilia e Mediterraneo. Un olio che racconta una
            storia millenaria e protegge la biodiversità agricola locale.
          </p>
          <p>
            Le cultivar Bianello e Montelocco — recuperate, studiate e coltivate con
            dedizione — stanno diventando simboli di un territorio e di un'identità
            che merita di essere celebrata e tramandata.
          </p>
        </div>
      </div>

      {/* Production timeline */}
      <div
        ref={stepsRef}
        className={`${styles.steps} ${stepsVisible ? styles.stepsVisible : ''}`}
        aria-label="Tempi di produzione dell'olivo"
      >
        <div className={styles.stepsLabel}>
          <span>Tempi di produzione</span>
        </div>
        <div className={styles.stepsGrid}>
          {productionSteps.map((s, i) => (
            <div
              key={s.label}
              className={styles.stepCell}
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className={styles.stepValue}>
                <span className={styles.stepYears}>{s.years}</span>
                <span className={styles.stepUnit}>{s.unit}</span>
              </div>
              <strong>{s.label}</strong>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future outlook */}
      <div
        ref={futureRef}
        className={`${styles.future} ${futureVisible ? styles.futureVisible : ''}`}
      >
        <div className={styles.futureInner}>
          <span className={styles.futureEyebrow}>Prospettive</span>
          <h3>
            La pianura reggiana<br />
            <em>apre nuovi scenari.</em>
          </h3>
          <div className={styles.futureBody}>
            <p>
              Il cambiamento climatico sta modificando la geografia dell'olivo in Italia.
              La pianura reggiana — con inverni sempre meno rigidi e maturazioni più
              regolari — si sta rivelando un territorio favorevole per l'olivicoltura,
              anche fuori dai tradizionali areali collinari.
            </p>
            <p>
              Le cultivar Bianello e Montelocco possono diventare simboli identitari del
              Reggiano, come avvenuto per la Taggiasca, la Coratina o il Moraiolo.
              Il loro olio non è soltanto un alimento: è l'espressione di una storia
              millenaria di resilienza, adattamento e identità territoriale.
            </p>
          </div>
          <div className={styles.chips} aria-label="Opportunità del progetto">
            {futureChips.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
