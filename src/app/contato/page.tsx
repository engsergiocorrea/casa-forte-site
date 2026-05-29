import type { Metadata } from 'next';
import ContatoClient from './ContatoClient';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Casa Forte Construtora e Incorporadora. WhatsApp, formulário de contato e informações sobre nossos empreendimentos.',
};

export default function ContatoPage() {
  return <ContatoClient />;
}
