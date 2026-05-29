import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { EMPREENDIMENTOS_ENTREGUES } from '@/data/empreendimentos';

export const metadata: Metadata = {
  title: 'Obras Entregues',
  description:
    'Histórico de obras entregues pela Casa Forte Construtora e Incorporadora. Confiança construída com cada entrega.',
};

export default function ObrasEntreguesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '65vh',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
            alt="Obras Entregues"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.9) 0%, rgba(20,18,16,0.4) 60%, transparent 100%)',
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', paddingBottom: '5.5rem' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-vermelho)',
              marginBottom: '1rem',
            }}
          >
            Histórico
          </span>
          <h1 style={{ color: 'white', fontWeight: 300, maxWidth: '640px', lineHeight: 1.1 }}>
            Obras entregues, confiança construída.
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              maxWidth: '520px',
              marginTop: '1.25rem',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Cada obra entregue é a prova do compromisso da Casa Forte com seus
            clientes, parceiros e com a qualidade que prometeu desde o primeiro dia.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section
        style={{
          backgroundColor: 'var(--color-charcoal)',
          padding: '5rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0',
              textAlign: 'center',
            }}
          >
            {[
              { valor: `${EMPREENDIMENTOS_ENTREGUES.length}+`, label: 'Projetos entregues' },
              { valor: '13+', label: 'Anos de mercado' },
              { valor: '100%', label: 'Compromisso com o prazo' },
              { valor: 'AL', label: 'Atuação em Alagoas' },
            ].map((s, i, arr) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                    fontWeight: 300,
                    color: 'var(--color-vermelho)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {s.valor}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de obras */}
      <section className="section">
        <div className="container">
          <span className="section-eyebrow">Portfólio entregue</span>
          <h2
            className="section-title"
            style={{ marginBottom: '3.5rem', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Projetos concluídos
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {EMPREENDIMENTOS_ENTREGUES.map((emp, i) => (
              <div
                key={emp.slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                  gap: '4rem',
                  alignItems: 'center',
                }}
              >
                {/* Image — alternates side */}
                <div
                  className="img-overlay"
                  style={{
                    order: i % 2 === 0 ? 0 : 1,
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={emp.imagemCapa}
                    alt={emp.nome}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                    }}
                  >
                    <span
                      className="status-badge"
                      style={{ backgroundColor: '#1A7A4A', color: 'white' }}
                    >
                      Entregue
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--color-vermelho)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {emp.tipo}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      fontWeight: 400,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {emp.nome}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      color: 'var(--color-texto-claro)',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 1C3.067 1 1.5 2.567 1.5 4.5C1.5 7 5 11 5 11C5 11 8.5 7 8.5 4.5C8.5 2.567 6.933 1 5 1Z" />
                      <circle cx="5" cy="4.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    {emp.localizacao}
                  </p>
                  <div className="divider" style={{ marginBottom: '1.5rem' }} />
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '2rem', fontWeight: 300 }}>
                    {emp.descricaoCurta}
                  </p>
                  <Link
                    href={`/empreendimentos/${emp.slug}`}
                    className="btn btn--outline btn--sm"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote break */}
      <section
        style={{
          backgroundColor: 'var(--color-bege)',
          padding: '6rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--color-charcoal)',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: 1.4,
            }}
          >
            "Cada chave entregue representa um compromisso cumprido e uma
            história que começa."
          </p>
          <div
            style={{
              width: '48px',
              height: '2px',
              background: 'var(--color-vermelho)',
              margin: '0 auto',
            }}
          />
        </div>
      </section>

      <CTAWhatsApp />
    </>
  );
}
