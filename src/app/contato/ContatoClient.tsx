'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SITE, getWhatsAppLink } from '@/data/site';

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}.\n\nAssunto: ${form.assunto}\nEmail: ${form.email}\nTelefone: ${form.telefone}\n\n${form.mensagem}`;
    window.open(getWhatsAppLink(msg), '_blank');
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 1.1rem',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    fontWeight: 300,
    color: 'var(--color-charcoal)',
    backgroundColor: 'var(--color-bege)',
    border: '1.5px solid var(--color-borda)',
    outline: 'none',
    transition: 'border-color var(--transition-fast)',
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.68rem',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--color-texto-suave)',
    marginBottom: '0.5rem',
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '55vh',
          minHeight: '420px',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1800&q=80"
            alt="Contato Casa Forte"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(20,18,16,0.88) 0%, rgba(20,18,16,0.4) 60%, transparent 100%)',
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
            Fale Conosco
          </span>
          <h1 style={{ color: 'white', fontWeight: 300, maxWidth: '540px', lineHeight: 1.1 }}>
            Contato
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.6fr',
              gap: '6rem',
              alignItems: 'start',
            }}
          >
            {/* Info */}
            <div>
              <span className="section-eyebrow">Informações</span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  marginBottom: '1.5rem',
                  lineHeight: 1.15,
                }}
              >
                Estamos prontos para atender você
              </h2>
              <div className="divider" style={{ marginBottom: '2rem' }} />
              <p style={{ lineHeight: 1.9, marginBottom: '2.5rem' }}>
                Seja para conhecer nossos empreendimentos, tirar dúvidas sobre obras
                em andamento ou explorar possibilidades de parceria — nossa equipe
                está disponível.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-texto-claro)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    WhatsApp
                  </div>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: 'var(--color-charcoal)',
                      fontWeight: 400,
                    }}
                  >
                    {SITE.whatsappFormatado}
                  </a>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-texto-claro)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Região de atuação
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: 'var(--color-charcoal)',
                      lineHeight: 1.5,
                    }}
                  >
                    Rota Ecológica dos Milagres<br />
                    Alagoas — Brasil
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--color-texto-claro)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Sistema de Tabelas
                  </div>
                  <a
                    href={SITE.urlTabelas}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      color: 'var(--color-vermelho)',
                      fontWeight: 400,
                    }}
                  >
                    tabelas.casaforteinc.com.br ↗
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div
              style={{
                padding: '3rem',
                backgroundColor: 'var(--color-bege)',
                borderTop: '3px solid var(--color-vermelho)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  marginBottom: '2rem',
                }}
              >
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="nome" style={labelStyle}>Nome *</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" style={labelStyle}>Telefone</label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(82) 99999-9999"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="assunto" style={labelStyle}>Assunto *</label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={form.assunto}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none' }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Informações sobre empreendimentos">Informações sobre empreendimentos</option>
                    <option value="Investimento e parceria">Investimento e parceria</option>
                    <option value="Tabelas de vendas">Tabelas de vendas</option>
                    <option value="Pós-venda">Pós-venda</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" style={labelStyle}>Mensagem *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                >
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
