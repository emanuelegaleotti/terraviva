'use client';

import { useScrollY } from '@/hooks/useScrollY';
import styles from './Hero.module.scss';

export function Hero() {
  const scrollY = useScrollY();

  return (
    <section
      className={styles.hero}
      aria-label="Benvenuti in TerraViva"
    >
      {/* Parallax gradient blob */}
      <div
        className={styles.parallaxBg}
        aria-hidden="true"
        style={{ transform: `translateY(${scrollY * 0.28}px)` }}
      />

      {/* Grain texture overlay */}
      <div className={styles.grain} aria-hidden="true" />

      {/* ── Content ── */}
      <div className={styles.content}>
        <p className={styles.preTitle}>
          <span aria-hidden="true">↳</span> Reggiolo, Emilia‑Romagna
        </p>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <span>La Terra.</span>
          </span>
          <span className={styles.titleLine}>
            <span>Le Stagioni.</span>
          </span>
          <span className={`${styles.titleLine} ${styles.titleAccent}`}>
            <span>La Vita.</span>
          </span>
        </h1>

        <p className={styles.body}>
          Coltivazioni biologiche e stagionali<br />
          dal cuore dell&apos;Emilia‑Romagna.
        </p>

        <div className={styles.actions}>
          <a href="#prodotti" className={styles.ctaPrimary}>
            Scopri i Prodotti
          </a>
          <a href="#chi-siamo" className={styles.ctaSecondary}>
            La Nostra Storia
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLabel}>Scorri</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}
