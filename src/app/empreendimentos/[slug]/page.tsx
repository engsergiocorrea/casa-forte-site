import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { EMPREENDIMENTOS, getEmpreendimentoBySlug, STATUS_LABELS, STATUS_COLORS } from '@/data/empreendimentos';
import { getWhatsAppLink } from '@/data/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EMPREENDIMENTOS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const emp = getEmpreendimentoBySlug(slug);
  if (!emp) return {};
  return {
    title: emp.nome,
    description: emp.descricaoCurta,
    openGraph: {
      images: [emp.imagemCapa],
    },
  };
}

export default async function EmpreendimentoPage({ params }: Props) {
  const { slug } = await params;
  const emp = getEmpreendimentoBySlug(slug);
  if (!emp) notFound();

  const statusColor = STATUS_COLORS[emp.status];
  const statusLabel = STATUS_LABELS[emp.status];

  const waMsg = `Olá! Tenho interesse no empreendimento ${emp.nome}. Pode me dar mais informações?`;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '85vh',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={emp.imagemCapa}
            alt={emp.nome}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.92) 0%, rgba(20,18,16,0.5) 50%, rgba(20,18,16,0.15) 100%)',
            }}
          />
        </div>

        {/* Breadcrumb */}
        <div
          style={{
            position: 'absolute',
            top: '8rem',
            left: 0,
            right: 0,
          }}
        >
          <div className="container">
            <nav
              style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Início</Link>
              <span>/</span>
              <Link href="/empreendimentos" style={{ color: 'rgba(255,255,255,0.5)' }}>Empreendimentos</Link>
              <span>/</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{emp.nome}</span>
            </nav>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', paddingBottom: '6rem' }}>
          <span
            className="status-badge"
            style={{
              backgroundColor: statusColor,
              color: 'white',
              marginBottom: '1.25rem',
            }}
          >
            {statusLabel}
          </span>

          <h1
            style={{
              color: 'white',
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: '0.75rem',
            }}
          >
            {emp.nome}
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
            }}
          >
            <svg width="12" height="14" viewBox="0 0 10 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 1C3.067 1 1.5 2.567 1.5 4.5C1.5 7 5 11 5 11C5 11 8.5 7 8.5 4.5C8.5 2.567 6.933 1 5 1Z" />
              <circle cx="5" cy="4.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            {emp.localizacao}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={getWhatsAppLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Tenho interesse
            </a>
            {emp.linkTabela && (
              <a
                href={emp.linkTabela}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-white"
              >
                Ver tabela de vendas ↗
              </a>
            )}
            {emp.linkFolder && (
              <a
                href={emp.linkFolder}
                download
                className="btn btn--outline-white"
              >
                ⬇ Baixar folder
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* Main */}
            <div>
              <span className="section-eyebrow">Sobre o empreendimento</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  marginBottom: '1.5rem',
                  lineHeight: 1.15,
                }}
              >
                {emp.nome}
              </h2>
              <div className="divider" style={{ marginBottom: '2rem' }} />
              <p style={{ fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                {emp.descricaoCompleta}
              </p>

              {/* Gallery */}
              {emp.imagens.length > 1 && (
                <div style={{ marginTop: '3rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    Galeria
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {emp.imagens.map((img, i) => (
                      <div
                        key={i}
                        className="img-overlay"
                        style={{ height: '220px', overflow: 'hidden' }}
                      >
                        <Image
                          src={img}
                          alt={`${emp.nome} - ${i + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Info card */}
              <div
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--color-bege)',
                  borderTop: '3px solid var(--color-vermelho)',
                  marginBottom: '1.5rem',
                  position: 'sticky',
                  top: '8rem',
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
                    marginBottom: '1.5rem',
                  }}
                >
                  Informações
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <InfoRow label="Status" value={statusLabel} accent />
                  <InfoRow label="Tipo" value={emp.tipo} />
                  <InfoRow label="Localização" value={emp.localizacao} />
                  {emp.previsaoEntrega && (
                    <InfoRow label="Previsão de entrega" value={emp.previsaoEntrega} />
                  )}
                  {emp.unidades && (
                    <InfoRow label="Unidades" value={String(emp.unidades)} />
                  )}
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--color-borda)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <a
                    href={getWhatsAppLink(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                    style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                  >
                    Quero saber mais
                  </a>
                  {emp.linkTabela && (
                    <a
                      href={emp.linkTabela}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                    >
                      Ver tabela de vendas ↗
                    </a>
                  )}
                  {emp.linkFolder && (
                    <a
                      href={emp.linkFolder}
                      download
                      className="btn btn--outline"
                      style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                    >
                      ⬇ Baixar folder
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Diferenciais */}
          {emp.diferenciais && emp.diferenciais.length > 0 && (
            <div
              style={{
                marginTop: '5rem',
                padding: '3rem',
                backgroundColor: 'var(--color-bege)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  marginBottom: '2rem',
                }}
              >
                Diferenciais
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '1rem',
                }}
              >
                {emp.diferenciais.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-vermelho)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.65, fontWeight: 300 }}>
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTAWhatsApp
        titulo={`Interesse no ${emp.nome}?`}
        subtitulo="Fale com nossa equipe e receba mais informações."
        mensagem={waMsg}
      />
    </>
  );
}

function InfoRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid var(--color-borda)',
        alignItems: 'baseline',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.72rem',
          fontWeight: 400,
          color: 'var(--color-texto-claro)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.875rem',
          fontWeight: accent ? 600 : 400,
          color: accent ? 'var(--color-vermelho)' : 'var(--color-charcoal)',
          textAlign: 'right',
        }}
      >
        {value}
      </span>
    </div>
  );
}
