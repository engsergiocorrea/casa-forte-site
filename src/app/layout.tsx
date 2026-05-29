import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Casa Forte Construtora e Incorporadora | Alagoas',
    template: '%s | Casa Forte',
  },
  description: SITE.descricao,
  keywords: [
    'construtora',
    'incorporadora',
    'alagoas',
    'são miguel dos milagres',
    'rota ecológica dos milagres',
    'imóveis',
    'alto padrão',
    'empreendimentos',
    'casaforteinc',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.nome,
    title: 'Casa Forte Construtora e Incorporadora | Alagoas',
    description: SITE.descricao,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,300;1,6..96,400&family=Outfit:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
