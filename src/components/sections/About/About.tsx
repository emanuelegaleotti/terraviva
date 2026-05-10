'use client';

import { useInView } from '@/hooks/useInView';
import styles from './About.module.scss';

function Stat({ value, label }: { value: string; label: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`${styles.stat} ${isInView ? styles.statVisible : ''}`}
    >
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export function About() {
  const { ref: textRef, isInView: textVisible } = useInView<HTMLDivElement>();
  const { ref: visualRef, isInView: visualVisible } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="prodotti" aria-labelledby="about-title">
      <div className={styles.inner}>
        {/* ── Text column ── */}
        <div
          ref={textRef}
          className={`${styles.textCol} ${textVisible ? styles.visible : ''}`}
        >
          <p className={styles.eyebrow}>Chi Siamo</p>
          <h2 className={styles.title} id="about-title">
            Una storia lunga<br />
            quattro decenni
          </h2>
          <p className={styles.body}>
            TerraViva nasce nel 1985 a Reggiolo, nel cuore della pianura emiliana.
            Quella che era la visione di Giuseppe Mantovani — coltivare la terra con
            rispetto, senza compromessi — è oggi una realtà portata avanti con la
            stessa passione dalla terza generazione della famiglia.
          </p>
          <p className={styles.body}>
            Ogni stagione porta con sé i suoi prodotti, i suoi sapori, le sue sfide.
            Noi li accogliamo tutti, perché è nel ritmo naturale della terra che
            troviamo il senso del nostro lavoro.
          </p>
          <a href="#contatti" className={styles.cta}>
            La Nostra Storia →
          </a>
        </div>

        {/* ── Visual column ── */}
        <div
          ref={visualRef}
          className={`${styles.visual} ${visualVisible ? styles.visible : ''}`}
          aria-hidden="true"
        >
          <div className={styles.visualCard}>
            {/* Decorative seasonal quadrant wheel */}
            <div className={styles.wheel} role="presentation">
              <div className={`${styles.quadrant} ${styles.q1}`}>
                <span>P</span>
              </div>
              <div className={`${styles.quadrant} ${styles.q2}`}>
                <span>E</span>
              </div>
              <div className={`${styles.quadrant} ${styles.q3}`}>
                <span>A</span>
              </div>
              <div className={`${styles.quadrant} ${styles.q4}`}>
                <span>I</span>
              </div>
            </div>
            <p className={styles.wheelCaption}>
              Quattro stagioni,<br />un solo impegno.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className={styles.statsRow} aria-label="I numeri di TerraViva">
        <Stat value="40+" label="Anni di attività" />
        <Stat value="12" label="Ettari coltivati" />
        <Stat value="80+" label="Varietà stagionali" />
        <Stat value="3ª" label="Generazione" />
      </div>
    </section>
  );
}
