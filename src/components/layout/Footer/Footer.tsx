import styles from './Footer.module.scss';

const navLinks = [
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#prodotti', label: 'I Prodotti' },
  { href: '#stagioni', label: 'Le Stagioni' },
  { href: '#contatti', label: 'Dove Trovarci' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo" id="contatti">
      <div className={styles.inner}>
        {/* ── Top grid ── */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <p className={styles.logo} aria-label="TerraViva">
              <span>TERRA</span>
              <span>VIVA</span>
            </p>
            <p className={styles.tagline}>Biologico · Stagionale · Autentico</p>
            <p className={styles.location}>
              Reggiolo, Emilia‑Romagna
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigazione footer" className={styles.col}>
            <p className={styles.colTitle}>Esplora</p>
            <ul className={styles.list} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className={styles.col}>
            <p className={styles.colTitle}>Contatti</p>
            <ul className={styles.list} role="list">
              <li>Via della Terra 12</li>
              <li>42046 Reggiolo (RE)</li>
              <li>
                <a href="mailto:info@terraviva.it" className={styles.link}>
                  info@terraviva.it
                </a>
              </li>
              <li>
                <a href="tel:+390522000000" className={styles.link}>
                  +39 0522 000 000
                </a>
              </li>
            </ul>
          </address>

          {/* Social */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Seguici</p>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TerraViva su Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TerraViva su Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} TerraViva – Agricoltura Biologica. P.IVA 00000000000
          </p>
          <p className={styles.copy}>
            Coltivato con rispetto. Raccontato con onestà.
          </p>
        </div>
      </div>
    </footer>
  );
}
