'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, getWhatsAppLink } from '@/data/site';

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/empreendimentos', label: 'Empreendimentos' },
  { href: '/obras-entregues', label: 'Obras Entregues' },
  { href: '/investidores', label: 'Investidores' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-borda)' : '1px solid rgba(255,255,255,0.15)',
          padding: scrolled ? '0.8rem 0' : '1.4rem 0',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: '0 var(--container-padding)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src={SITE.logo}
              alt="Casa Forte"
              width={140}
              height={50}
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.25rem',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: scrolled ? 'var(--color-charcoal)' : 'rgba(255,255,255,0.9)',
                  transition: 'color var(--transition-base)',
                  paddingBottom: '2px',
                  borderBottom: '1px solid transparent',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = 'var(--color-vermelho)';
                  (e.target as HTMLAnchorElement).style.borderBottomColor = 'var(--color-vermelho)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled ? 'var(--color-charcoal)' : 'rgba(255,255,255,0.9)';
                  (e.target as HTMLAnchorElement).style.borderBottomColor = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
              style={{ marginLeft: '0.5rem' }}
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="mobile-hamburger"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? 'var(--color-charcoal)' : 'white',
                  transition: 'all var(--transition-base)',
                  transformOrigin: 'center',
                  transform:
                    menuOpen
                      ? i === 0
                        ? 'translateY(7px) rotate(45deg)'
                        : i === 2
                        ? 'translateY(-7px) rotate(-45deg)'
                        : 'scaleX(0)'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'var(--color-charcoal)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <Image
            src={SITE.logo}
            alt="Casa Forte"
            width={140}
            height={50}
            style={{ height: '48px', width: 'auto', marginBottom: '1rem', opacity: 0.9 }}
          />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.02em',
                transition: 'color var(--transition-fast)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ marginTop: '1rem' }}
            onClick={() => setMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
