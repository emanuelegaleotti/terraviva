'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ContattiBanco.module.scss';

const days = [
  { day: 'Lunedì',    hours: '9:00 – 19:30' },
  { day: 'Martedì',   hours: '9:00 – 19:30' },
  { day: 'Mercoledì', hours: '9:00 – 19:30' },
  { day: 'Giovedì',   hours: '9:00 – 19:30' },
  { day: 'Venerdì',   hours: '9:00 – 19:30' },
  { day: 'Sabato',    hours: '9:00 – 19:30' },
  { day: 'Domenica',  hours: 'Chiuso' },
];

export function ContattiBanco() {
  const { ref: heroRef, isInView: heroVisible } = useInView<HTMLDivElement>();
  const { ref: infoRef, isInView: infoVisible } = useInView<HTMLDivElement>();
  const { ref: mapRef,  isInView: mapVisible  } = useInView<HTMLDivElement>();
  const { ref: mercatiRef, isInView: mercatiVisible } = useInView<HTMLDivElement>();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="contatti-title">
        <div className={styles.grain} aria-hidden="true" />
        <div className={styles.topStrip}>
          <span className={styles.chip}>Reggiolo, Emilia-Romagna</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.chip}>Vendita Diretta</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.chip}>Prodotti Freschi</span>
        </div>
        <div className={styles.fill} aria-hidden="true" />
        <div
          ref={heroRef}
          className={`${styles.heroContent} ${heroVisible ? styles.heroContentVisible : ''}`}
        >
          <h1 className={styles.heroTitle} id="contatti-title">
            <span>Dove</span>
            <span>Trovarci.</span>
          </h1>
          <p className={styles.heroAddress}>
            Strada Caselli 10<br />
            42046 Reggiolo (RE)
          </p>
        </div>
        <div className={styles.statsBar}>
          <div className={styles.statCell}>
            <span>Lun – Sab</span>
            <span>Giorni apertura</span>
          </div>
          <div className={styles.statCell}>
            <span>9:00</span>
            <span>Apertura</span>
          </div>
          <div className={styles.statCell}>
            <span>19:30</span>
            <span>Chiusura</span>
          </div>
          <div className={styles.statCell}>
            <span>Fresco</span>
            <span>Dal campo al banco</span>
          </div>
        </div>
      </section>

      {/* ── Info + Orari ─────────────────────────────────────── */}
      <section className={styles.sectionLight} aria-labelledby="orari-title">
        <div
          ref={infoRef}
          className={`${styles.infoGrid} ${infoVisible ? styles.infoGridVisible : ''}`}
        >
          {/* Left: descrizione */}
          <div className={styles.infoText}>
            <span className={styles.eyebrow}>Il Banco</span>
            <h2 id="orari-title">
              Prodotti freschi,<br />ogni giorno.
            </h2>
            <p>
              Al banco di Strada Caselli 10 trovi verdure e prodotti stagionali
              coltivati direttamente da TerraViva. Raccolti freschi, portati
              direttamente dal campo, senza intermediari.
            </p>
            <p>
              Puoi venire a trovarci dal lunedì al sabato, tutto il giorno.
              Ti aspettiamo.
            </p>
            <address className={styles.address}>
              <div>
                <span aria-hidden="true">📍</span>
                <span>Strada Caselli 10, 42046 Reggiolo (RE)</span>
              </div>
              <div>
                <span aria-hidden="true">✉</span>
                <a href="mailto:info@terraviva-reggiolo.it">info@terraviva-reggiolo.it</a>
              </div>
              <div>
                <span aria-hidden="true">📞</span>
                <a href="tel:+390522000000">+39 0522 000 000</a>
              </div>
            </address>
          </div>

          {/* Right: orari */}
          <div className={styles.orari}>
            <p className={styles.orariTitle}>Orari di apertura</p>
            <ul aria-label="Orari del banco TerraViva">
              {days.map((d) => (
                <li
                  key={d.day}
                  className={d.hours === 'Chiuso' ? styles.closed : ''}
                >
                  <span>{d.day}</span>
                  <span>{d.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Mappa ────────────────────────────────────────────── */}
      <div
        ref={mapRef}
        className={`${styles.mapWrap} ${mapVisible ? styles.mapVisible : ''}`}
        aria-label="Mappa posizione banco TerraViva a Reggiolo"
      >
        <iframe
          title="Posizione banco TerraViva – Strada Caselli 10, Reggiolo"
          src="https://maps.google.com/maps?q=Strada+Caselli+10,+42046+Reggiolo+RE+Italia&output=embed&z=16"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
        />
      </div>

      {/* ── Mercati contadini ─────────────────────────────────── */}
      <section
        className={styles.sectionDark}
        ref={mercatiRef}
        aria-labelledby="mercati-title"
      >
        <div className={`${styles.mercatiInner} ${mercatiVisible ? styles.mercatiVisible : ''}`}>
          <div className={styles.mercatiLeft}>
            <span className={styles.badge}>Prossimamente</span>
            <h2 id="mercati-title">
              Ci vediamo anche<br />
              <em>ai mercati contadini.</em>
            </h2>
          </div>
          <div className={styles.mercatiRight}>
            <p>
              Presto TerraViva parteciperà ai mercati contadini della zona reggiana.
              Un'occasione in più per incontrarci, conoscere i prodotti della stagione
              e portare a casa il meglio dell'agricoltura biologica locale.
            </p>
            <p>
              Seguici per restare aggiornato sulle date e le location.
              Ti aspettiamo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
