export const SITE = {
  nome: 'Casa Forte Construtora e Incorporadora',
  nomeAbreviado: 'Casa Forte',
  tagline: 'Construímos patrimônio, confiança e lugares únicos em Alagoas.',
  descricao:
    'Construtora e incorporadora alagoana com mais de 13 anos de atuação, 500+ obras entregues e empreendimentos de alto padrão na Rota Ecológica dos Milagres e em Maceió.',
  url: 'https://casaforteinc.com.br',
  urlTabelas: 'https://tabelas.casaforteinc.com.br',
  whatsapp: '5582991017208',
  whatsappFormatado: '(82) 99101-7208',
  instagram: 'https://instagram.com/casaforteinc',
  endereco: 'Maceió, Alagoas — Brasil',
  regiaoAtuacao: 'Rota Ecológica dos Milagres e Maceió, Alagoas',
  anosAtuacao: 13,
  logo: 'https://idjzhzqvfhtfycvmfoen.supabase.co/storage/v1/object/public/empreendimentos/logosemfundo%20casa%20forte.png',
  stats: [
    { valor: '13+', label: 'Anos de Atuação' },
    { valor: '500+', label: 'Obras Entregues' },
    { valor: '5', label: 'Empreendimentos' },
    { valor: 'Alto', label: 'Padrão Construtivo' },
  ],
};

export function getWhatsAppLink(mensagem?: string): string {
  const msg = mensagem || 'Olá! Gostaria de saber mais sobre os empreendimentos da Casa Forte.';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}
