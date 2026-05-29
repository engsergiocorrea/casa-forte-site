import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
};

export default function PoliticaPrivacidadePage() {
  return (
    <section style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="section-eyebrow">Legal</span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            marginBottom: '1.5rem',
          }}
        >
          Política de Privacidade
        </h1>
        <div className="divider" style={{ marginBottom: '3rem' }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <p style={{ lineHeight: 1.9 }}>
            A <strong>{SITE.nome}</strong> valoriza a privacidade dos seus usuários e
            está comprometida com a proteção dos dados pessoais coletados em nosso site.
            Esta política descreve como coletamos, utilizamos e protegemos suas informações.
          </p>

          {SECTIONS.map((s, i) => (
            <div key={i}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: 'var(--color-charcoal)',
                }}
              >
                {s.titulo}
              </h2>
              <p style={{ lineHeight: 1.9 }}>{s.conteudo}</p>
            </div>
          ))}

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-texto-claro)',
              fontWeight: 300,
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--color-borda)',
            }}
          >
            Última atualização: {new Date().getFullYear()}. Em caso de dúvidas, entre em
            contato pelo WhatsApp {SITE.whatsappFormatado}.
          </p>
        </div>
      </div>
    </section>
  );
}

const SECTIONS = [
  {
    titulo: '1. Dados coletados',
    conteudo:
      'Coletamos informações fornecidas voluntariamente por você ao entrar em contato conosco, como nome, telefone, e-mail e mensagem. Não coletamos dados sensíveis sem sua autorização explícita.',
  },
  {
    titulo: '2. Uso das informações',
    conteudo:
      'As informações coletadas são utilizadas exclusivamente para responder às suas solicitações, enviar informações sobre nossos empreendimentos e melhorar nossos serviços. Não compartilhamos seus dados com terceiros sem seu consentimento.',
  },
  {
    titulo: '3. Cookies',
    conteudo:
      'Nosso site pode utilizar cookies para melhorar a experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.',
  },
  {
    titulo: '4. Segurança',
    conteudo:
      'Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.',
  },
  {
    titulo: '5. Seus direitos (LGPD)',
    conteudo:
      'Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Para exercer esses direitos, entre em contato conosco.',
  },
  {
    titulo: '6. Links externos',
    conteudo:
      'Este site pode conter links para sites externos, como nosso sistema de tabelas de vendas. Não nos responsabilizamos pelas práticas de privacidade desses sites.',
  },
  {
    titulo: '7. Alterações nesta política',
    conteudo:
      'Reservamos o direito de atualizar esta política periodicamente. Recomendamos que você a revise regularmente. Alterações significativas serão comunicadas de forma adequada.',
  },
];
