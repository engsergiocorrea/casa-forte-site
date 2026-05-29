import type { Metadata } from 'next';
import Image from 'next/image';
import EmpreendimentoCard from '@/components/EmpreendimentoCard';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import { EMPREENDIMENTOS, STATUS_LABELS } from '@/data/empreendimentos';

export const metadata: Metadata = {
  title: 'Empreendimentos',
  description:
    'Conheça os empreendimentos da Casa Forte: lançamentos, obras em andamento e projetos entregues na Rota Ecológica dos Milagres, Alagoas.',
};

export default function EmpreendimentosPage() {
  const lancamentos = EMPREENDIMENTOS.filter(
    (e) => e.status === 'lancamento' || e.status === 'em-comercializacao'
  );
  const emObras = EMPREENDIMENTOS.filter((e) => e.status === 'em-obras');
  const futuros = EMPREENDIMENTOS.filter((e) => e.status === 'futuro-lancamento');
  const entregues = EMPREENDIMENTOS.filter((e) => e.status === 'entregue');

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '450px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80"
            alt="Empreendimentos Casa Forte"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.88) 0%, rgba(20,18,16,0.35) 60%, transparent 100%)',
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', paddingBottom: '5rem' }}>
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
            Portfólio
          </span>
          <h1 style={{ color: 'white', fontWeight: 300, maxWidth: '580px', lineHeight: 1.1 }}>
            Empreendimentos
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              maxWidth: '500px',
              marginTop: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Lançamentos, obras em andamento e projetos entregues. Cada
            empreendimento reflete o compromisso Casa Forte com qualidade e
            localização estratégica.
          </p>
        </div>
      </section>

      {/* Lançamentos */}
      {lancamentos.length > 0 && (
        <section className="section">
          <div className="container">
            <span className="section-eyebrow">Em comercialização</span>
            <h2
              className="section-title"
              style={{ marginBottom: '3rem', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Lançamentos
            </h2>
            <div className="grid-3">
              {lancamentos.map((emp) => (
                <EmpreendimentoCard key={emp.slug} empreendimento={emp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Futuros */}
      {futuros.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--color-bege)', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="container">
            <span className="section-eyebrow">Em breve</span>
            <h2
              className="section-title"
              style={{ marginBottom: '3rem', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Futuros Lançamentos
            </h2>
            <div className="grid-3">
              {futuros.map((emp) => (
                <EmpreendimentoCard key={emp.slug} empreendimento={emp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Entregues */}
      {entregues.length > 0 && (
        <section className="section">
          <div className="container">
            <span className="section-eyebrow">Histórico</span>
            <h2
              className="section-title"
              style={{ marginBottom: '3rem', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Obras Entregues
            </h2>
            <div className="grid-3">
              {entregues.map((emp) => (
                <EmpreendimentoCard key={emp.slug} empreendimento={emp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAWhatsApp />
    </>
  );
}
