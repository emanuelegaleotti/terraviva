'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';

const navLinks = [
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#stagioni', label: 'I Prodotti' },
  { href: '#stagioni', label: 'Le Stagioni' },
  { href: '#contatti', label: 'Contatti' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) firstLinkRef.current?.focus();
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="TerraViva – Torna alla home">
          <span>TerraViva</span>
          <span aria-hidden="true">Bio</span>
        </Link>

        {/* Desktop nav */}
        <nav
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Navigazione principale"
        >
          <ul role="list">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  ref={i === 0 ? firstLinkRef : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
