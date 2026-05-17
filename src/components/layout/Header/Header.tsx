'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

const navByPath: Record<string, { href: string; label: string }[]> = {
  '/': [
    { href: '#chi-siamo',  label: 'Chi Siamo' },
    { href: '#stagioni',   label: 'I Prodotti' },
    { href: '#stagioni',   label: 'Le Stagioni' },
    { href: '/olio',       label: "L'Olio" },
    { href: '/contatti',   label: 'Contatti' },
  ],
  '/olio': [
    { href: '/',           label: '← Home' },
    { href: '#storia',     label: 'La Storia' },
    { href: '#cultivar',   label: 'Le Cultivar' },
    { href: '#linea',      label: 'La Linea' },
    { href: '#progetto',   label: 'Il Progetto' },
  ],
  '/contatti': [
    { href: '/',           label: '← Home' },
    { href: '#orari-title', label: 'Orari' },
    { href: '/olio',       label: "L'Olio" },
  ],
};

export function Header() {
  const pathname = usePathname();
  const navLinks = navByPath[pathname] ?? navByPath['/'];

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

        {/* Nav */}
        <nav
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Navigazione principale"
        >
          <ul role="list">
            {navLinks.map((link, i) => (
              <li key={link.label}>
                {link.href.startsWith('/') ? (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    ref={i === 0 ? firstLinkRef : undefined}
                  >
                    {link.label}
                  </a>
                )}
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
