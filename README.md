# Casa Forte — Site Institucional

Site oficial da **Casa Forte Construtora e Incorporadora** — `casaforteinc.com.br`

## Stack

- **Next.js 15** com App Router
- **TypeScript**
- CSS puro (globals.css) — sem Tailwind
- **Vercel** para deploy
- Fontes: Cormorant Garamond (serif) + Jost (sans)

## Estrutura

```
src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx            # Home
│   ├── sobre/              # Sobre a Casa Forte
│   ├── empreendimentos/    # Listagem + [slug]
│   ├── obras-entregues/    # Obras entregues
│   ├── investidores/       # Página de investidores
│   ├── contato/            # Contato + formulário WhatsApp
│   └── politica-de-privacidade/
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── EmpreendimentoCard.tsx
│   └── CTAWhatsApp.tsx
└── data/
    ├── empreendimentos.ts  # ← Edite aqui os empreendimentos
    └── site.ts             # ← Dados globais do site
```

## Como editar empreendimentos

Edite o arquivo `src/data/empreendimentos.ts` para:
- Adicionar/remover empreendimentos
- Atualizar status, imagens, descrições
- Adicionar links de tabelas de venda

## Como editar dados do site

Edite `src/data/site.ts` para:
- Alterar WhatsApp, nome, stats
- Atualizar anos de atuação
- Mudar URL das tabelas

## Deploy na Vercel

```bash
# 1. Instalar dependências
npm install

# 2. Testar localmente
npm run dev

# 3. Deploy na Vercel
# - Importar repositório no dashboard Vercel
# - Framework: Next.js (detectado automaticamente)
# - Build: npm run build
# - Domínio: casaforteinc.com.br (configurar na Hostinger → CNAME para Vercel)
```

## Integração com sistema de tabelas

O site aponta para `https://tabelas.casaforteinc.com.br` em:
- Menu e footer (link "Tabelas de Vendas")
- Cards de empreendimentos com tabela (botão "Ver tabela")
- Página individual do empreendimento

Para adicionar link de tabela a um empreendimento, basta adicionar o campo `linkTabela` no arquivo `src/data/empreendimentos.ts`.
