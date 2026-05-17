'use client';

import { useInView } from '@/hooks/useInView';
import styles from './OlioProprieta.module.scss';

const sensoriali = [
  {
    label: 'Fruttato',
    desc: 'Percezione olfattiva dell\'oliva sana. Può essere leggero, medio o intenso.',
    value: 'Medio',
  },
  {
    label: 'Amaro',
    desc: 'Deriva dai polifenoli. Un amaro equilibrato è indice di qualità, freschezza e ricchezza antiossidante.',
    value: 'Moderato',
  },
  {
    label: 'Piccante',
    desc: 'Sensazione positiva causata dai composti fenolici. Indica presenza di antiossidanti e elevata conservabilità.',
    value: 'Elegante',
  },
];

const nutraceutici = [
  {
    num: '01',
    title: 'Sistema cardiovascolare',
    desc: 'L\'acido oleico riduce il colesterolo LDL e protegge le arterie dall\'ossidazione.',
  },
  {
    num: '02',
    title: 'Azione antiossidante',
    desc: 'I polifenoli contrastano lo stress ossidativo e rallentano l\'invecchiamento cellulare.',
  },
  {
    num: '03',
    title: 'Proprietà antinfiammatorie',
    desc: 'L\'oleocantale agisce in modo simile a blandi antinfiammatori naturali.',
  },
  {
    num: '04',
    title: 'Stabilità in cottura',
    desc: 'L\'alto contenuto di acido oleico rende l\'EVO molto stabile alle alte temperature.',
  },
];

export function OlioProprieta() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();
  const { ref: sensRef, isInView: sensVisible } = useInView<HTMLDivElement>();
  const { ref: nutraRef, isInView: nutraVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} aria-labelledby="proprieta-title">
      {/* Header */}
      <div className={styles.sectionTop} ref={headRef}>
        <div className={`${styles.topInner} ${headVisible ? styles.topVisible : ''}`}>
          <div className={styles.topLeft}>
            <span>L&apos;Olio EVO</span>
            <p aria-hidden="true">Qualità</p>
          </div>
          <div className={styles.topRight}>
            <h2 id="proprieta-title">
              Un alimento,<br />una medicina.
            </h2>
          </div>
        </div>
      </div>

      {/* Parametri sensoriali */}
      <div
        ref={sensRef}
        className={`${styles.sensoriali} ${sensVisible ? styles.sensorialiVisible : ''}`}
        aria-label="Parametri sensoriali dell'olio EVO"
      >
        <div className={styles.sensorialiInner}>
          <p className={styles.sensorialiEyebrow}>Parametri organolettici</p>
          <div className={styles.sensorialiGrid}>
            {sensoriali.map((s, i) => (
              <div
                key={s.label}
                className={styles.sensCell}
                style={{ '--i': i } as React.CSSProperties}
              >
                <div className={styles.sensCellTop}>
                  <span className={styles.sensCellLabel}>{s.label}</span>
                  <span className={styles.sensCellValue}>{s.value}</span>
                </div>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proprietà nutraceutiche */}
      <div
        ref={nutraRef}
        className={`${styles.nutraceutici} ${nutraVisible ? styles.nutraceuticiVisible : ''}`}
      >
        <div className={styles.nutraceuticiInner}>
          <p className={styles.nutraceuticiEyebrow}>Proprietà nutraceutiche</p>
          <div className={styles.nutraceuticiGrid}>
            {nutraceutici.map((n, i) => (
              <div
                key={n.num}
                className={styles.nutraCard}
                style={{ '--i': i } as React.CSSProperties}
              >
                <span aria-hidden="true">{n.num}</span>
                <h3>{n.title}</h3>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
