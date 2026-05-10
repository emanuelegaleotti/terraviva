'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useScrollY } from '@/hooks/useScrollY';
import styles from './Header.module.scss';

const navLinks = [
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#prodotti', label: 'I Prodotti' },
  { href: '#stagioni', label: 'Le Stagioni' },
  { href: '#contatti', label: 'Contatti' },
];

export function Header() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const isScrolled = scrollY > 80;

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
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="TerraViva – Home">
          TerraViva
        </Link>

        {/* Desktop nav */}
        <nav
          id="main-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Navigazione principale"
        >
          <ul className={styles.navList} role="list">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                  ref={i === 0 ? firstLinkRef : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Chiudi il menu' : 'Apri il menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={styles.bar} aria-hidden="true" />
          <span className={styles.bar} aria-hidden="true" />
          <span className={styles.bar} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
