import Link from 'next/link';
import Image from 'next/image';
import { Empreendimento, STATUS_LABELS, STATUS_COLORS } from '@/data/empreendimentos';
import { SITE } from '@/data/site';

interface Props {
  empreendimento: Empreendimento;
}

export default function EmpreendimentoCard({ empreendimento }: Props) {
  const { slug, nome, localizacao, status, tipo, descricaoCurta, imagemCapa, linkTabela } =
    empreendimento;

  const statusColor = STATUS_COLORS[status];
  const statusLabel = STATUS_LABELS[status];

  return (
    <article
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <Link href={`/empreendimentos/${slug}`} className="img-overlay" style={{ height: '260px' }}>
        <Image
          src={imagemCapa}
          alt={nome}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status badge on image */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            zIndex: 2,
          }}
        >
          <span
            className="status-badge"
            style={{
              backgroundColor: statusColor,
              color: 'white',
            }}
          >
            {statusLabel}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-vermelho)',
            marginBottom: '0.5rem',
          }}
        >
          {tipo}
        </p>

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: 400,
            marginBottom: '0.4rem',
            color: 'var(--color-charcoal)',
          }}
        >
          <Link href={`/empreendimentos/${slug}`}>{nome}</Link>
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            color: 'var(--color-texto-claro)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <PinIcon />
          {localizacao}
        </p>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-texto-suave)',
            lineHeight: 1.75,
            flex: 1,
            marginBottom: '1.5rem',
          }}
        >
          {descricaoCurta}
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link
            href={`/empreendimentos/${slug}`}
            className="btn btn--ghost btn--sm"
          >
            Saiba mais
          </Link>
          {linkTabela && (
            <a
              href={linkTabela}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
              style={{ fontSize: '0.65rem' }}
            >
              Ver tabela ↗
            </a>
          )}
          {empreendimento.linkFolder && (
            <a
              href={empreendimento.linkFolder}
              download
              className="btn btn--outline btn--sm"
              style={{ fontSize: '0.65rem' }}
            >
              ⬇ Folder
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function PinIcon() {
  return (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 1C3.067 1 1.5 2.567 1.5 4.5C1.5 7 5 11 5 11C5 11 8.5 7 8.5 4.5C8.5 2.567 6.933 1 5 1Z" />
      <circle cx="5" cy="4.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
