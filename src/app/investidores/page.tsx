import type { Metadata } from 'next';
import Image from 'next/image';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { getWhatsAppLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'Investidores',
  description:
    'Conheça como a Casa Forte estrutura oportunidades imobiliárias com foco em localização, produto, execução e geração de valor.',
};

export default function InvestidoresPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '85vh',
          minHeight: '580px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
            alt="Investidores Casa Forte"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.92) 0%, rgba(20,18,16,0.55) 55%, rgba(20,18,16,0.2) 100%)',
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', paddingBottom: '7rem' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-vermelho)',
              marginBottom: '1.25rem',
            }}
          >
            Para Investidores & Parceiros
          </span>
          <h1
            style={{
              color: 'white',
              fontWeight: 300,
              maxWidth: '740px',
              lineHeight: 1.08,
              marginBottom: '1.5rem',
            }}
          >
            Investir em desenvolvimento imobiliário com quem entende de obra, mercado e valorização.
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.05rem',
              maxWidth: '560px',
              fontWeight: 300,
              lineHeight: 1.85,
              marginBottom: '2.5rem',
            }}
          >
            A Casa Forte estrutura oportunidades imobiliárias com foco em
            localização, produto, execução e geração de valor.
          </p>
          <a
            href={getWhatsAppLink('Olá! Tenho interesse em conhecer oportunidades de investimento com a Casa Forte.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            Falar com a Casa Forte
          </a>
        </div>
      </section>

      {/* Por que investir */}
      <section className="section" style={{ backgroundColor: 'var(--color-bege)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-eyebrow">Diferenciais</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Por que investir com a Casa Forte
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: '0 auto' }}
            >
              Nossa experiência real em construção e incorporação é o que diferencia
              nossas oportunidades no mercado.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {MOTIVOS.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderBottom: '3px solid var(--color-vermelho)',
                  transition: 'box-shadow var(--transition-base)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    color: 'var(--color-vermelho)',
                    opacity: 0.3,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                  }}
                >
                  {m.titulo}
                </h4>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8, fontWeight: 300 }}>
                  {m.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de atuação */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="section-eyebrow">Como trabalhamos</span>
              <h2
                className="section-title"
                style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
              >
                Modelo de atuação
              </h2>
              <div className="divider" style={{ marginBottom: '2rem' }} />
              <p style={{ lineHeight: 1.9, marginBottom: '1.5rem' }}>
                Da identificação da oportunidade à comercialização, a Casa Forte
                conduz cada projeto com rigor, proximidade e comprometimento com
                todos os envolvidos.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {ETAPAS.map((etapa, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      paddingBottom: '1.5rem',
                      paddingTop: i > 0 ? '1.5rem' : 0,
                      borderBottom: i < ETAPAS.length - 1 ? '1px solid var(--color-borda)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-vermelho)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'white',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1rem',
                          fontWeight: 500,
                          marginBottom: '0.25rem',
                        }}
                      >
                        {etapa.titulo}
                      </h4>
                      <p style={{ fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>
                        {etapa.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="img-overlay" style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
                  alt="Casa Forte - Modelo de atuação"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        style={{
          backgroundColor: 'var(--color-bege)',
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '2.5rem',
              backgroundColor: 'white',
              borderLeft: '3px solid var(--color-borda)',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-texto-claro)',
                marginBottom: '1rem',
              }}
            >
              Aviso Legal
            </h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.85, fontWeight: 300 }}>
              As informações apresentadas nesta página têm caráter institucional e não
              representam promessa de rentabilidade, oferta pública de investimento ou
              garantia de retorno. Cada oportunidade deve ser analisada individualmente,
              conforme sua estrutura jurídica, econômica e comercial.
            </p>
          </div>
        </div>
      </section>

      <CTAWhatsApp
        titulo="Quer conhecer futuras oportunidades com a Casa Forte?"
        subtitulo="Entre em contato com nossa equipe para uma conversa estratégica."
        mensagem="Olá! Tenho interesse em conhecer oportunidades de investimento com a Casa Forte."
      />
    </>
  );
}

const MOTIVOS = [
  {
    titulo: 'Experiência real em construção',
    descricao:
      'Mais de 13 anos construindo e incorporando no mercado alagoano, com gestão técnica própria e histórico sólido de entregas.',
  },
  {
    titulo: 'Atuação em regiões de valorização',
    descricao:
      'A Rota Ecológica dos Milagres é uma das regiões de maior valorização imobiliária do Nordeste. Estamos nela desde o início.',
  },
  {
    titulo: 'Gestão próxima da obra',
    descricao:
      'Equipe técnica acompanha cada etapa da construção de perto, garantindo qualidade, prazo e controle de custos.',
  },
  {
    titulo: 'Histórico de entregas',
    descricao:
      'Projetos concluídos e clientes satisfeitos são nossa referência mais sólida. Cada entrega fortalece nossa credibilidade.',
  },
  {
    titulo: 'Produtos com apelo comercial',
    descricao:
      'Desenvolvemos empreendimentos pensados para o mercado: com identidade, localização estratégica e público bem definido.',
  },
  {
    titulo: 'Visão de longo prazo',
    descricao:
      'Não fazemos projetos de curto prazo. Construímos relações, portfólios e resultados que se sustentam ao longo do tempo.',
  },
];

const ETAPAS = [
  {
    titulo: 'Identificação de oportunidades',
    descricao: 'Análise de terrenos, localização e viabilidade antes de qualquer compromisso.',
  },
  {
    titulo: 'Estruturação do produto',
    descricao: 'Definição do conceito, tipologia, público e posicionamento de mercado.',
  },
  {
    titulo: 'Desenvolvimento do projeto',
    descricao: 'Projeto arquitetônico, memorial descritivo e aprovações.',
  },
  {
    titulo: 'Construção',
    descricao: 'Execução com equipe técnica própria, controle de qualidade e cronograma.',
  },
  {
    titulo: 'Comercialização',
    descricao: 'Estratégia de vendas com tabelas públicas, transparência e atendimento consultivo.',
  },
  {
    titulo: 'Entrega e pós-venda',
    descricao: 'Entrega documentada e relacionamento contínuo com o cliente.',
  },
];
