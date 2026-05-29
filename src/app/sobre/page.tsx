import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { SITE, getWhatsAppLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'Sobre a Casa Forte',
  description:
    'Conheça a história, valores e o compromisso da Casa Forte Construtora e Incorporadora com mais de 13 anos no mercado imobiliário de Alagoas.',
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '70vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
            alt="Casa Forte"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.88) 0%, rgba(20,18,16,0.4) 60%, rgba(20,18,16,0.2) 100%)',
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', paddingBottom: '6rem' }}>
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
            Sobre
          </span>
          <h1
            style={{
              color: 'white',
              fontWeight: 300,
              maxWidth: '640px',
              lineHeight: 1.1,
            }}
          >
            Uma empresa construída sobre responsabilidade e visão
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '6rem',
              alignItems: 'start',
            }}
          >
            {/* Sidebar */}
            <div>
              <div
                style={{
                  position: 'sticky',
                  top: '8rem',
                }}
              >
                <div
                  style={{
                    padding: '2.5rem',
                    backgroundColor: 'var(--color-bege)',
                    borderTop: '3px solid var(--color-vermelho)',
                    marginBottom: '2rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '4rem',
                      fontWeight: 300,
                      color: 'var(--color-vermelho)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {SITE.anosAtuacao}+
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-texto-suave)',
                    }}
                  >
                    Anos de atuação no mercado imobiliário alagoano
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { n: '500+', l: 'Obras entregues em Alagoas' },
                    { n: '5', l: 'Empreendimentos na Rota dos Milagres' },
                    { n: 'MCZ', l: 'Casas de alto padrão em Maceió' },
                  ].map((s) => (
                    <div
                      key={s.l}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '1.25rem 0',
                        borderBottom: '1px solid var(--color-borda)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '2rem',
                          fontWeight: 400,
                          color: 'var(--color-charcoal)',
                          minWidth: '60px',
                        }}
                      >
                        {s.n}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          color: 'var(--color-texto-suave)',
                          fontWeight: 300,
                        }}
                      >
                        {s.l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-eyebrow">Nossa História</span>
              <h2
                className="section-title"
                style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
              >
                A Casa Forte
              </h2>
              <div className="divider" style={{ marginBottom: '2rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                  A Casa Forte é uma construtora e incorporadora alagoana que atua com
                  foco em solidez, responsabilidade e visão de longo prazo. Em mais de
                  {' '}{SITE.anosAtuacao} anos de mercado, a empresa entregou mais de 500 obras
                  em Alagoas — consolidando uma trajetória que começa muito antes dos
                  empreendimentos na Rota dos Milagres.
                </p>
                <p style={{ lineHeight: 1.9 }}>
                  A história da Casa Forte foi construída obra a obra. Centenas de
                  famílias atendidas com residências populares, casas de alto padrão
                  erguidas em Maceió, projetos que exigiram engenharia, gestão e
                  comprometimento real com cada cliente. Esse histórico foi o que
                  nos preparou para chegar à Rota Ecológica dos Milagres com credibilidade.
                </p>
                <p style={{ lineHeight: 1.9 }}>
                  Na Rota dos Milagres, a Casa Forte desenvolve empreendimentos boutique
                  em São Miguel dos Milagres e Praia do Patacho — região que escolhemos
                  pela beleza natural preservada, pelo potencial de valorização e pelo
                  perfil de cliente que merece um produto à altura do lugar.
                </p>
                <p style={{ lineHeight: 1.9 }}>
                  Mais do que construir imóveis, a Casa Forte constrói relações. Com
                  clientes, investidores e parceiros, a empresa preza pela transparência,
                  pelo respeito ao prazo e pelo comprometimento com a entrega que foi
                  prometida.
                </p>
              </div>

              {/* Pilares */}
              <div style={{ marginTop: '4rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    marginBottom: '2rem',
                  }}
                >
                  O que nos move
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {PILARES.map((pilar, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '1.5rem',
                        backgroundColor: 'var(--color-bege)',
                        borderLeft: '3px solid var(--color-vermelho)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.5rem',
                          fontWeight: 400,
                          color: 'var(--color-vermelho)',
                          opacity: 0.4,
                          minWidth: '30px',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.1rem',
                            marginBottom: '0.4rem',
                            fontWeight: 500,
                          }}
                        >
                          {pilar.titulo}
                        </h4>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.75, fontWeight: 300 }}>
                          {pilar.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=80"
          alt="Obras Casa Forte"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(20,18,16,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              color: 'white',
              fontWeight: 300,
              fontStyle: 'italic',
              textAlign: 'center',
              maxWidth: '700px',
              padding: '0 2rem',
            }}
          >
            "Cada obra é um compromisso. Cada entrega, uma promessa cumprida."
          </p>
        </div>
      </section>

      <CTAWhatsApp
        titulo="Quer conhecer mais sobre a Casa Forte?"
        subtitulo="Entre em contato com nossa equipe."
      />
    </>
  );
}

const PILARES = [
  {
    titulo: 'Construir com responsabilidade',
    descricao:
      'Cada projeto é conduzido com rigor técnico, ética e comprometimento com as pessoas envolvidas.',
  },
  {
    titulo: 'Gerar valor para clientes e investidores',
    descricao:
      'Buscamos produtos que ofereçam qualidade de vida, valorização patrimonial e satisfação real.',
  },
  {
    titulo: 'Entregar qualidade',
    descricao:
      'O padrão construtivo da Casa Forte é uma escolha, não uma consequência. É a base de tudo que fazemos.',
  },
  {
    titulo: 'Atuar com transparência',
    descricao:
      'Comunicação clara e honesta em todas as etapas: do contrato à entrega das chaves.',
  },
  {
    titulo: 'Desenvolver projetos com identidade',
    descricao:
      'Cada empreendimento tem um propósito e uma história. Não fazemos produtos genéricos.',
  },
];
