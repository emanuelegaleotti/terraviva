'use client';

import { useInView } from '@/hooks/useInView';
import styles from './OlioStoria.module.scss';

const documents = [
  {
    year: '1002',
    text: 'Un diploma menziona terreni coltivati a olivo nelle colline reggiane.',
  },
  {
    year: '1072',
    text: 'Citati oliveti appartenenti al monastero di San Prospero.',
  },
  {
    year: '1212',
    text: 'Un atto notarile descrive "terra con ulivi" nei pressi di Borzano.',
  },
  {
    year: '1387',
    text: 'Un podere viene descritto come "vineata, olivata, figata": vite, olivo e fico.',
  },
];

export function OlioStoria() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();
  const { ref: bodyRef, isInView: bodyVisible } = useInView<HTMLDivElement>();
  const { ref: timelineRef, isInView: timelineVisible } = useInView<HTMLDivElement>();
  const { ref: noteRef, isInView: noteVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="storia" aria-labelledby="storia-title">
      {/* Section header */}
      <div className={styles.sectionTop} ref={headRef}>
        <div className={`${styles.topInner} ${headVisible ? styles.topVisible : ''}`}>
          <div className={styles.topLeft}>
            <span>La Storia</span>
            <p aria-hidden="true">Medioevo</p>
          </div>
          <div className={styles.topRight}>
            <h2 id="storia-title">
              Una tradizione<br />millenaria.
            </h2>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.bodyWrap}>
        <div
          ref={bodyRef}
          className={`${styles.bodyInner} ${bodyVisible ? styles.bodyVisible : ''}`}
        >
          <p>
            La presenza dell'olivo nelle colline di Reggio Emilia è documentata almeno dall'Alto
            Medioevo, probabilmente sin dall'epoca romana. Il colle di Bianello, l'area di
            Quattro Castella e Canossa offrivano condizioni quasi mediterranee: esposizione a sud,
            terreni calcarei, protezione dai venti freddi e l'effetto mitigante dell'Appennino.
          </p>
          <p>
            Queste condizioni hanno permesso la selezione naturale di genotipi locali
            straordinariamente adattati, differenti da qualsiasi altra cultivar italiana.
            Le cultivar Bianello e Montelocco sono l'eredità viva di questa storia.
          </p>
        </div>
      </div>

      {/* Historical documents timeline */}
      <div
        ref={timelineRef}
        className={`${styles.timeline} ${timelineVisible ? styles.timelineVisible : ''}`}
        aria-label="Documenti storici sull'olivicoltura reggiana"
      >
        <div className={styles.timelineLabel}>
          <span>Documenti storici</span>
        </div>
        {documents.map((d, i) => (
          <div
            key={d.year}
            className={styles.timelineItem}
            style={{ '--i': i } as React.CSSProperties}
          >
            <span className={styles.timelineYear}>{d.year}</span>
            <p className={styles.timelineText}>{d.text}</p>
          </div>
        ))}
      </div>

      {/* Territory note */}
      <div
        ref={noteRef}
        className={`${styles.note} ${noteVisible ? styles.noteVisible : ''}`}
      >
        <div className={styles.noteInner}>
          <h3>Il colle di Bianello</h3>
          <p>
            Oggi parte dell'Oasi di Bianello, il colle è storicamente uno dei luoghi simbolo
            dell'olivicoltura reggiana. Gli studi recenti hanno evidenziato la presenza di ulivi
            secolari con caratteristiche genetiche uniche, differenti dalle cultivar tipiche del
            Centro Italia. Alcune ceppaie sono stimate avere oltre 300 anni.
          </p>
        </div>
      </div>
    </section>
  );
}
