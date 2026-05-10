'use client';

import { useInView } from '@/hooks/useInView';
import styles from './Manifesto.module.scss';

const values = [
  {
    icon: '○',
    title: 'Biologico al 100%',
    desc: 'Nessun pesticida, nessun compromesso. Solo terra sana e pratiche rispettose dei cicli naturali.',
  },
  {
    icon: '◇',
    title: 'Stagionale per natura',
    desc: 'Ogni prodotto nasce nel momento giusto, quando la terra lo permette e la stagione lo chiede.',
  },
  {
    icon: '△',
    title: 'Azienda di famiglia',
    desc: 'Tre generazioni di passione per la terra, i suoi ritmi e i frutti che ogni stagione porta con sé.',
  },
];

export function Manifesto() {
  const { ref: quoteRef, isInView: quoteVisible } = useInView<HTMLDivElement>();
  const { ref: valuesRef, isInView: valuesVisible } = useInView<HTMLDivElement>();

  return (
    <section
      className={styles.section}
      aria-labelledby="manifesto-heading"
    >
      <div className={styles.inner}>
        {/* Eyebrow */}
        <p className={styles.eyebrow} id="manifesto-heading" role="heading" aria-level={2}>
          Il Nostro Manifesto
        </p>

        {/* Quote */}
        <div
          ref={quoteRef}
          className={`${styles.quoteWrap} ${quoteVisible ? styles.visible : ''}`}
        >
          <blockquote className={styles.quote}>
            <p>
              &ldquo;Crediamo in una terra rispettata, in prodotti onesti e in stagioni
              che scandiscono il ritmo della vita.&rdquo;
            </p>
          </blockquote>
          <hr className={styles.rule} aria-hidden="true" />
        </div>

        {/* Values */}
        <div
          ref={valuesRef}
          className={`${styles.values} ${valuesVisible ? styles.valuesVisible : ''}`}
        >
          {values.map((v, i) => (
            <article
              key={v.title}
              className={styles.value}
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className={styles.valueIcon} aria-hidden="true">
                {v.icon}
              </span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
