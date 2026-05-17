import Link from 'next/link';
import styles from './OlioHero.module.scss';

const stats = [
  { value: '1002', label: 'Primo documento storico' },
  { value: '300+', label: 'Anni degli ulivi più antichi' },
  { value: '13%', label: 'Resa media in olio' },
  { value: '2', label: 'Cultivar autoctone' },
];

export function OlioHero() {
  return (
    <section
      className={styles.hero}
      aria-label="Progetto olivicolo in pianura reggiana: Montelocco e Bianello"
    >
      <div className={styles.grain} aria-hidden="true" />

      {/* Top strip */}
      <div className={styles.topStrip}>
        <Link href="/" className={styles.backLink} aria-label="Torna a TerraViva">
          <span aria-hidden="true">←</span> TerraViva
        </Link>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.chip}>Pianura Reggiana</span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.chip}>Cultivar Autoctone</span>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.chip}>Olio EVO</span>
      </div>

      <div className={styles.fill} aria-hidden="true" />

      {/* Headline block */}
      <div className={styles.headlineBlock}>
        <h1 className={styles.headline}>
          <span className={styles.hLine}><span>Ulivi delle</span></span>
          <span className={styles.hLine}><span>Colline</span></span>
          <span className={`${styles.hLine} ${styles.hLineAccent}`}><span>Reggiane.</span></span>
        </h1>

        <div className={styles.side}>
          <p className={styles.sub}>
            Il progetto ruota attorno al <strong>Montelocco</strong> — la cultivar
            autoctona protagonista dell'azienda agricola TerraViva. Il <strong>Bianello</strong>,
            presente in minore quantità, lo rafforza e lo protegge dalle malattie.
            Un progetto di recupero portato avanti dalla famiglia Galeotti.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#storia" className={styles.ctaPrimary}>
              Scopri la storia <span aria-hidden="true">→</span>
            </a>
            <a href="#progetto" className={styles.ctaGhost}>
              Il Progetto Galeotti
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar} aria-label="Numeri del progetto olivicolo">
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
