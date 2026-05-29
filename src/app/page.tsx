import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import EmpreendimentoCard from '@/components/EmpreendimentoCard';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { EMPREENDIMENTOS } from '@/data/empreendimentos';
import { SITE, getWhatsAppLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'Casa Forte Construtora e Incorporadora | Alagoas',
  description: SITE.descricao,
};

const EMPREENDIMENTOS_DESTAQUE = EMPREENDIMENTOS.filter((e) => e.destaque);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85"
            alt="Casa Forte — Rota Ecológica dos Milagres"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.92) 0%, rgba(20,18,16,0.5) 50%, rgba(20,18,16,0.2) 100%)',
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', paddingBottom: '8rem', paddingTop: '12rem' }}>
          <div style={{ maxWidth: '740px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-vermelho)',
                marginBottom: '1.5rem',
                animation: 'fadeInUp 0.8s ease 0.1s both',
              }}
            >
              Construtora & Incorporadora — Alagoas
            </span>

            <h1
              style={{
                color: 'white',
                fontWeight: 400,
                marginBottom: '1.75rem',
                lineHeight: 1.08,
                animation: 'fadeInUp 0.8s ease 0.25s both',
              }}
            >
              Construímos patrimônio, confiança e lugares únicos em Alagoas.
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1.05rem',
                maxWidth: '560px',
                marginBottom: '2.5rem',
                lineHeight: 1.85,
                fontWeight: 300,
                animation: 'fadeInUp 0.8s ease 0.4s both',
              }}
            >
              A Casa Forte une engenharia, incorporação e visão de futuro para
              desenvolver empreendimentos com solidez, sofisticação e alto
              potencial de valorização.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                animation: 'fadeInUp 0.8s ease 0.55s both',
              }}
            >
              <Link href="/empreendimentos" className="btn btn--primary btn--lg">
                Conheça os Empreendimentos
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-white btn--lg"
              >
                Fale com a Casa Forte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
            {SITE.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  borderRight: i < SITE.stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 400,
                    color: 'var(--color-vermelho)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.valor}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE RESUMIDO */}
      <section className="section" style={{ backgroundColor: 'var(--color-bege)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Quem Somos</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Uma empresa que constrói com propósito
              </h2>
              <div className="divider" />
              <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.9, color: 'var(--color-texto-suave)' }}>
                A Casa Forte nasceu com o propósito de construir com responsabilidade,
                solidez e visão de longo prazo. Em mais de 13 anos de atuação, entregou
                mais de 500 obras em Alagoas — de residências populares a casas de alto
                padrão em Maceió e empreendimentos boutique na Rota Ecológica dos Milagres.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-texto-suave)', lineHeight: 1.85, marginBottom: '2rem', fontWeight: 300 }}>
                Cada obra — independente do porte — carrega o mesmo compromisso: qualidade,
                prazo e respeito pelo cliente.
              </p>
              <Link href="/sobre" className="btn btn--outline">
                Nossa História
              </Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }} className="img-overlay">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=85"
                  alt="Casa Forte — Construção de alto padrão"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-2rem',
                  left: '-2rem',
                  width: '130px',
                  height: '130px',
                  backgroundColor: 'var(--color-vermelho)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', color: 'white', lineHeight: 1, fontWeight: 400 }}>
                  500
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', textAlign: 'center' }}>
                  obras<br />entregues
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRICO — 500 CASAS + MACEIÓ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span className="section-eyebrow">Histórico de Atuação</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              13 anos construindo Alagoas
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Antes dos empreendimentos na Rota dos Milagres, a Casa Forte já
              acumulava um sólido histórico de obras em todo o estado.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {/* Card 1 — Casas Populares */}
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }} className="img-overlay">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=85"
                alt="Casas populares — Casa Forte"
                fill
                style={{ objectFit: 'cover' }}
                sizes="50vw"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,18,16,0.88) 0%, rgba(20,18,16,0.2) 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '3rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 400,
                    color: 'var(--color-vermelho)',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                  }}
                >
                  500+
                </div>
                <h3 style={{ color: 'white', fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '0.75rem' }}>
                  Obras residenciais entregues
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '420px' }}>
                  Ao longo de 13 anos, a Casa Forte construiu mais de 500 residências
                  em Alagoas — incluindo casas populares entregues com o mesmo rigor
                  técnico e comprometimento que marca todos os projetos da empresa.
                  Cada família atendida reforça a base de confiança que nos trouxe até aqui.
                </p>
              </div>
            </div>

            {/* Card 2 — Maceió Alto Padrão */}
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }} className="img-overlay">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=900&q=85"
                alt="Casas de alto padrão em Maceió — Casa Forte"
                fill
                style={{ objectFit: 'cover' }}
                sizes="50vw"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,18,16,0.88) 0%, rgba(20,18,16,0.2) 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '3rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-vermelho)',
                    marginBottom: '1rem',
                  }}
                >
                  Alto Padrão · Maceió
                </div>
                <h3 style={{ color: 'white', fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '0.75rem' }}>
                  Casas de alto padrão na capital
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '420px' }}>
                  Em Maceió, a Casa Forte construiu residências de alto padrão para
                  clientes que exigem arquitetura, qualidade de materiais e gestão
                  técnica de excelência. Projetos que consolidaram nossa reputação
                  antes mesmo de chegarmos à Rota dos Milagres.
                </p>
              </div>
            </div>
          </div>

          {/* Texto de transição */}
          <div
            style={{
              marginTop: '4rem',
              padding: '3rem',
              backgroundColor: 'var(--color-bege)',
              borderLeft: '3px solid var(--color-vermelho)',
              maxWidth: '800px',
              margin: '4rem auto 0',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--color-charcoal)',
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              "Foi esse histórico — de 500 obras, de casas populares a residências
              de luxo em Maceió — que nos deu a experiência técnica e a credibilidade
              para desenvolver os empreendimentos boutique que hoje oferecemos na
              Rota Ecológica dos Milagres."
            </p>
          </div>
        </div>
      </section>

      {/* EMPREENDIMENTOS DESTAQUE */}
      <section className="section" style={{ backgroundColor: 'var(--color-bege)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '3.5rem',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span className="section-eyebrow">Portfólio — Rota dos Milagres</span>
              <h2 className="section-title">Empreendimentos em destaque</h2>
            </div>
            <Link
              href="/empreendimentos"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-texto-suave)',
                borderBottom: '1px solid var(--color-borda)',
                paddingBottom: '2px',
                whiteSpace: 'nowrap',
              }}
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid-3">
            {EMPREENDIMENTOS_DESTAQUE.map((emp) => (
              <EmpreendimentoCard key={emp.slug} empreendimento={emp} />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-eyebrow">Por que a Casa Forte</span>
            <h2 className="section-title">
              Diferenciais que constroem{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-vermelho)' }}>confiança</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {DIFERENCIAIS.map((d, i) => (
              <div
                key={i}
                style={{
                  padding: '2.25rem',
                  backgroundColor: 'var(--color-bege)',
                  borderLeft: '3px solid var(--color-vermelho)',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{d.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                  {d.titulo}
                </h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--color-texto-suave)' }}>
                  {d.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROTA ECOLÓGICA */}
      <section style={{ position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85"
            alt="Rota Ecológica dos Milagres"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(20,18,16,0.88) 0%, rgba(20,18,16,0.4) 60%, transparent 100%)',
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '600px' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-vermelho)',
                marginBottom: '1.25rem',
              }}
            >
              Nossa Região de Atuação
            </span>
            <h2 style={{ color: 'white', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Rota Ecológica dos Milagres
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: '1rem',
                marginBottom: '2rem',
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: '480px',
              }}
            >
              São Miguel dos Milagres e Praia do Patacho formam um dos destinos mais
              exclusivos do Brasil. A Casa Forte atua nessa região com um portfólio
              de empreendimentos boutique que respeitam a natureza e aproveitam o
              alto potencial de valorização da área.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {['Natureza preservada', 'Turismo de alto padrão', 'Alta valorização', 'Arquitetura exclusiva'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                    paddingBottom: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/empreendimentos" className="btn btn--outline-white">
              Ver empreendimentos na região
            </Link>
          </div>
        </div>
      </section>

      {/* INVESTIDORES */}
      <section className="section" style={{ backgroundColor: 'var(--color-charcoal)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--color-vermelho)',
                  marginBottom: '1.25rem',
                }}
              >
                Para Investidores
              </span>
              <h2 style={{ color: 'white', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Desenvolvemos oportunidades imobiliárias com visão estratégica
              </h2>
              <div style={{ width: '48px', height: '2px', background: 'var(--color-vermelho)', marginBottom: '1.75rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '2rem', fontWeight: 300 }}>
                A Casa Forte estrutura oportunidades imobiliárias com foco em
                localização, produto, execução e geração de valor. Nossa experiência
                — de 500+ obras entregues a empreendimentos boutique na Rota dos Milagres
                — oferece uma base sólida para parcerias estratégicas.
              </p>
              <Link href="/investidores" className="btn btn--primary">
                Conheça nossas oportunidades
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                '500+ obras entregues em 13 anos de mercado',
                'Experiência em casas populares, alto padrão e incorporação',
                'Atuação em regiões de alta valorização na Rota dos Milagres',
                'Gestão técnica própria, próxima de cada obra',
                'Histórico sólido de entregas e relacionamento com clientes',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem',
                    borderLeft: '2px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-vermelho)',
                      marginTop: '6px',
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 300 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTAWhatsApp />
    </>
  );
}

const DIFERENCIAIS = [
  {
    icon: '🏗',
    titulo: 'Engenharia e Gestão Técnica',
    descricao:
      'Equipe técnica própria com acompanhamento próximo de cada etapa da obra, em 13 anos e mais de 500 projetos entregues.',
  },
  {
    icon: '⭐',
    titulo: 'Padrão Construtivo',
    descricao:
      'De casas populares a empreendimentos boutique — o mesmo rigor técnico e atenção ao detalhe em cada projeto.',
  },
  {
    icon: '🤝',
    titulo: 'Transparência',
    descricao:
      'Relacionamento claro e honesto com clientes, investidores e parceiros em todas as etapas do processo.',
  },
  {
    icon: '📅',
    titulo: 'Compromisso com o Prazo',
    descricao:
      'Histórico de entregas que reforça nossa responsabilidade e respeito pelos compromissos assumidos.',
  },
  {
    icon: '📍',
    titulo: 'Localização Estratégica',
    descricao:
      'Atuação focada na Rota Ecológica dos Milagres, uma das regiões de maior valorização imobiliária de Alagoas.',
  },
  {
    icon: '📈',
    titulo: 'Visão de Incorporação',
    descricao:
      'Experiência completa do ciclo imobiliário: da identificação da oportunidade à entrega e relacionamento pós-venda.',
  },
];
