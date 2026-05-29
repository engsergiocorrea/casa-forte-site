import { getWhatsAppLink } from '@/data/site';

interface Props {
  titulo?: string;
  subtitulo?: string;
  mensagem?: string;
  dark?: boolean;
}

export default function CTAWhatsApp({
  titulo = 'Quer construir, investir ou conhecer nossos empreendimentos?',
  subtitulo = 'Fale diretamente com nossa equipe e dê o primeiro passo.',
  mensagem,
  dark = true,
}: Props) {
  return (
    <section
      style={{
        backgroundColor: dark ? 'var(--color-charcoal)' : 'var(--color-vermelho)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-40px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'white',
            marginBottom: '1.25rem',
            maxWidth: '700px',
            margin: '0 auto 1.25rem',
          }}
        >
          {titulo}
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '2.5rem',
            fontWeight: 300,
          }}
        >
          {subtitulo}
        </p>
        <a
          href={getWhatsAppLink(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--lg"
          style={{ backgroundColor: dark ? 'var(--color-vermelho)' : 'white', color: dark ? 'white' : 'var(--color-vermelho)' }}
        >
          <WhatsAppIcon />
          Falar com a Casa Forte
        </a>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
