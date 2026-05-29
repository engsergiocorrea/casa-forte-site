export type StatusEmpreendimento =
  | 'lancamento'
  | 'em-obras'
  | 'entregue'
  | 'futuro-lancamento'
  | 'em-comercializacao';

export interface Empreendimento {
  slug: string;
  nome: string;
  localizacao: string;
  status: StatusEmpreendimento;
  tipo: string;
  descricaoCurta: string;
  descricaoCompleta: string;
  imagemCapa: string;
  imagens: string[];
  linkTabela?: string;
  linkFolder?: string;
  previsaoEntrega?: string;
  unidades?: number;
  destaque?: boolean;
  diferenciais?: string[];
}

export const EMPREENDIMENTOS: Empreendimento[] = [
  {
    slug: 'uma-milagres',
    nome: 'UMÁ Milagres',
    localizacao: 'São Miguel dos Milagres, AL',
    status: 'lancamento',
    tipo: 'Studios e Unidades Boutique',
    descricaoCurta:
      'Um refúgio no litoral norte de Alagoas — mar calmo, águas cristalinas e sofisticação discreta que transforma esse paraíso em uma experiência.',
    descricaoCompleta:
      'O UMÁ Milagres nasce no coração de São Miguel dos Milagres, uma das regiões mais preservadas e exclusivas de Alagoas. Com projeto arquitetônico assinado pela Ceres Arquitetura e Interiores e construção pela Casa Forte, o empreendimento entrega studios e unidades duplex com acabamento de altíssimo padrão, piscina com bar, spa, academia, bar lounge e espaço beleza — tudo integrado a um ambiente natural único na Rota Ecológica dos Milagres.',
    imagemCapa:
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85',
    imagens: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=85',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1400&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=85',
      'https://images.unsplash.com/photo-1551882547-ff40c4a49f93?w=1400&q=85',
    ],
    linkTabela: 'https://tabelas.casaforteinc.com.br/empreendimentos/uma-milagres',
    linkFolder: '/folders/uma-milagres.pdf',
    destaque: true,
    unidades: 56,
    diferenciais: [
      'Frente para o mar em São Miguel dos Milagres',
      'Projeto assinado pela Ceres Arquitetura e Interiores',
      'Studios a partir de 31,39m² e duplex até 44,89m²',
      'Piscina com bar, spa, academia e espaço beleza',
      'Elevador e bicicletário',
      'Bar Lounge e empório',
      'Unidades premium com piscina privativa',
      'Alto potencial de locação por temporada',
    ],
  },
  {
    slug: 'casas-santorini',
    nome: 'Casas Santorini',
    localizacao: 'Praia do Patacho, AL',
    status: 'em-obras',
    tipo: 'Condomínio de Casas — 24 Unidades',
    descricaoCurta:
      'Condomínio com 24 casas na Praia do Patacho, com portaria remota 24h, carregadores para carros elétricos e paisagismo integrado à natureza local.',
    descricaoCompleta:
      'As Casas Santorini situam-se na deslumbrante Praia do Patacho, um dos destinos mais procurados da Rota Ecológica dos Milagres. Com 24 unidades em condomínio fechado, o projeto entrega casas com identidade arquitetônica marcante e infraestrutura completa: portaria remota 24 horas, carregadores para carros elétricos, sistemas de gás a granel, biodigestores para tratamento de águas, método inovador de tratamento de água e paisagismo integrado com a natureza local. Uma parceria para gestão locatícia está disponível para investidores.',
    imagemCapa: '/images/empreendimentos/casas-santorini-capa.jpg',
    imagens: [
      '/images/empreendimentos/casas-santorini-capa.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1400&q=85',
    ],
    linkFolder: '/folders/casas-santorini.pdf',
    destaque: true,
    unidades: 24,
    diferenciais: [
      'Condomínio com 24 unidades na Praia do Patacho',
      'Portaria remota 24 horas',
      'Carregadores para carros elétricos',
      'Sistemas de gás a granel',
      'Biodigestores para tratamento de águas',
      'Método inovador de tratamento de água',
      'Paisagismo integrado com a natureza local',
      'Parceria para gestão locatícia',
    ],
  },
  {
    slug: 'villa-maui',
    nome: 'Villa Maui',
    localizacao: 'Rota Ecológica dos Milagres, AL',
    status: 'entregue',
    tipo: 'Empreendimento Residencial',
    descricaoCurta:
      'Projeto entregue pela Casa Forte na Rota Ecológica dos Milagres, representando o compromisso com qualidade, prazo e excelência construtiva.',
    descricaoCompleta:
      'O Villa Maui é um dos marcos do portfólio entregue pela Casa Forte na Rota Ecológica dos Milagres. O empreendimento demonstra a capacidade da empresa de desenvolver produtos imobiliários com qualidade construtiva, gestão eficiente e foco no cliente. A entrega reafirmou o compromisso da Casa Forte com transparência, prazo e responsabilidade.',
    imagemCapa:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
    imagens: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85',
    ],
    linkFolder: '/folders/villa-maui.pdf',
    diferenciais: [
      'Entregue dentro do prazo',
      'Acabamento de alto padrão',
      'Gestão técnica próxima',
      'Localização privilegiada na Rota dos Milagres',
    ],
  },
  {
    slug: 'villa-natur',
    nome: 'Villa Natur',
    localizacao: 'Praia do Riacho — São Miguel dos Milagres, AL',
    status: 'entregue',
    tipo: 'Vila Residencial',
    descricaoCurta:
      '16 unidades com suítes e piscina privativa. A vila mais charmosa de São Miguel dos Milagres, entregue pela Casa Forte.',
    descricaoCompleta:
      'O Villa Natur integra o portfólio de obras entregues pela Casa Forte, com 16 unidades na Praia do Riacho — conhecida por suas águas calmas e areia dourada, a 450 metros da AL-101. Com 3 suítes e piscina privativa por unidade, o projeto entregou qualidade construtiva e um projeto de interiores com identidade própria.',
    imagemCapa:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85',
    imagens: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=85',
      'https://images.unsplash.com/photo-1560185127-6a8a40d26dbc?w=1400&q=85',
    ],
    linkFolder: '/folders/villa-natur.pdf',
    unidades: 16,
    diferenciais: [
      '16 unidades com 3 suítes',
      'Piscina privativa por unidade',
      'Praia do Riacho — 450m da praia',
      'Entregue com qualidade comprovada',
    ],
  },
  {
    slug: 'java',
    nome: 'Java',
    localizacao: 'Rota Ecológica dos Milagres, AL',
    status: 'em-obras',
    tipo: 'Residencial com Área de Lazer',
    descricaoCurta:
      'Empreendimento em obras na Rota dos Milagres com piscina de design exclusivo inspirada na ilha de Java, arquitetura contemporânea e paisagismo tropical.',
    descricaoCompleta:
      'O Java é um empreendimento em obras na Rota Ecológica dos Milagres com conceito visual inspirado na ilha de Java — natureza, design e sofisticação tropical. O projeto se destaca pela piscina com design exclusivo, arquitetura contemporânea de linhas orgânicas, paisagismo exuberante com palmeiras e vegetação tropical, e áreas de convivência que integram o interior e o exterior de forma fluida. A Casa Forte conduz a obra com gestão técnica própria e o mesmo padrão de qualidade de todo o seu portfólio.',
    imagemCapa: '/images/empreendimentos/java-capa.jpg',
    imagens: [
      '/images/empreendimentos/java-capa.jpg',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1400&q=85',
    ],
    linkFolder: '/folders/java.pdf',
    diferenciais: [
      'Piscina com design exclusivo inspirado na ilha de Java',
      'Arquitetura contemporânea de linhas orgânicas',
      'Paisagismo tropical exuberante',
      'Áreas de convivência integradas',
      'Em obras com gestão técnica Casa Forte',
      'Localização na Rota Ecológica dos Milagres',
    ],
  },
];

export const EMPREENDIMENTOS_ENTREGUES = EMPREENDIMENTOS.filter(
  (e) => e.status === 'entregue'
);

export const EMPREENDIMENTOS_DESTAQUE = EMPREENDIMENTOS.filter(
  (e) => e.destaque
);

export function getEmpreendimentoBySlug(slug: string): Empreendimento | undefined {
  return EMPREENDIMENTOS.find((e) => e.slug === slug);
}

export const STATUS_LABELS: Record<StatusEmpreendimento, string> = {
  lancamento: 'Lançamento',
  'em-obras': 'Em Obras',
  entregue: 'Entregue',
  'futuro-lancamento': 'Futuro Lançamento',
  'em-comercializacao': 'Em Comercialização',
};

export const STATUS_COLORS: Record<StatusEmpreendimento, string> = {
  lancamento: '#E8390E',
  'em-obras': '#2A6EBB',
  entregue: '#1A7A4A',
  'futuro-lancamento': '#7A5C1A',
  'em-comercializacao': '#E8390E',
};
