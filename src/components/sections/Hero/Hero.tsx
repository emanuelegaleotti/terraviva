'use client';

import { useScrollY } from '@/hooks/useScrollY';
import styles from './Hero.module.scss';

const stats = [
  { value: '40+', label: 'Varietà di prodotti' },
  { value: '4', label: 'Stagioni di raccolta' },
  { value: '100%', label: 'Biologico certificato' },
  { value: '12 ha', label: 'Ettari coltivati' },
];

export function Hero() {
  const scrollY = useScrollY();

  return (
    <section
      className={styles.hero}
      aria-label="TerraViva – Agricoltura biologica a Reggiolo"
    >
      {/* Parallax bg */}
      <div
        className={styles.parallax}
        aria-hidden="true"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      />
      {/* Grain */}
      <div className={styles.grain} aria-hidden="true" />

      {/* ── Top strip ── */}
      <div className={styles.topStrip}>
        <span className={styles.chip}>Reggiolo, Emilia-Romagna</span>
        <span className={styles.chipDivider} aria-hidden="true" />
        <span className={styles.chip}>Biologico certificato</span>
        <span className={styles.chipDivider} aria-hidden="true" />
        <span className={styles.chip}>Dal 1987</span>
      </div>

      {/* ── Breathing room ── */}
      <div className={styles.fill} aria-hidden="true" />

      {/* ── Headline block ── */}
      <div className={styles.headlineBlock}>
        <h1 className={styles.headline}>
          <span className={styles.hLine}>
            <span>La Terra,</span>
          </span>
          <span className={styles.hLine}>
            <span>Le Stagioni,</span>
          </span>
          <span className={`${styles.hLine} ${styles.hLineAccent}`}>
            <span>La Vita.</span>
          </span>
        </h1>

        <div className={styles.ctaGroup}>
          <a href="#stagioni" className={styles.ctaPrimary}>
            Scopri i prodotti <span aria-hidden="true">→</span>
          </a>
          <a href="#chi-siamo" className={styles.ctaGhost}>
            La nostra storia
          </a>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className={styles.statsBar} aria-label="I numeri di TerraViva">
        {stats.map((s) => (
          <div key={s.label} className={styles.statCell}>
            <span>{s.value}</span>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
