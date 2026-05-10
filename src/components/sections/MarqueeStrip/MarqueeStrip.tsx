import styles from './MarqueeStrip.module.scss';

const items = [
  'Biologico',
  'Stagionale',
  'Dal Campo alla Tavola',
  'Reggiolo',
  'Coltivato con Rispetto',
  'Emilia‑Romagna',
  'Km Zero',
  'Senza Compromessi',
];

export function MarqueeStrip() {
  // Duplicate for seamless infinite loop
  const repeated = [...items, ...items];

  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
