'use client';

import { useInView } from '@/hooks/useInView';
import styles from './About.module.scss';

const stats = [
  { value: '40+', label: 'Anni di attività', sub: 'Dal 1987' },
  { value: '12', label: 'Ettari coltivati', sub: 'Pianura emiliana' },
  { value: '80+', label: 'Varietà stagionali', sub: 'Biologiche e certificate' },
  { value: '3ª', label: 'Generazione', sub: 'Famiglia Mantovani' },
];

function StatCell({
  value, label, sub, index,
}: {
  value: string; label: string; sub: string; index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div
      ref={ref}
      className={`${styles.statCell} ${isInView ? styles.visible : ''}`}
      style={{ '--i': index } as React.CSSProperties}
    >
      <span>{value}</span>
      <span>{label}</span>
      <span>{sub}</span>
    </div>
  );
}

export function About() {
  const { ref: headRef, isInView: headVisible } = useInView<HTMLDivElement>();
  const { ref: bodyRef, isInView: bodyVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="chi-siamo" aria-labelledby="about-title">
      {/* Editorial header */}
      <div className={styles.sectionTop} ref={headRef}>
        <div className={`${styles.topInner} ${headVisible ? styles.topVisible : ''}`}>
          <div className={styles.topLeft}>
            <span>Chi Siamo</span>
            <p aria-hidden="true">1987</p>
          </div>
          <div className={styles.topRight}>
            <h2 id="about-title">
              Una storia lunga<br />quattro decenni.
            </h2>
          </div>
        </div>
      </div>

      {/* Body text */}
      <div className={styles.bodyWrap}>
        <div
          ref={bodyRef}
          className={`${styles.bodyInner} ${bodyVisible ? styles.bodyVisible : ''}`}
        >
          <p>
            TerraViva nasce nel 1987 a Reggiolo, nel cuore della pianura emiliana.
            Quella che era la visione di Giuseppe Mantovani — coltivare la terra con
            rispetto, senza compromessi — è oggi una realtà portata avanti con la
            stessa passione dalla terza generazione della famiglia.
          </p>
          <p>
            Ogni stagione porta con sé i suoi prodotti, i suoi sapori, le sue sfide.
            Noi li accogliamo tutti, perché è nel ritmo naturale della terra che
            troviamo il senso del nostro lavoro.
          </p>
          <a href="#contatti">
            Vieni a trovarci <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.stats} aria-label="I numeri di TerraViva">
        {stats.map((s, i) => (
          <StatCell key={s.label} value={s.value} label={s.label} sub={s.sub} index={i} />
        ))}
      </div>
    </section>
  );
}
