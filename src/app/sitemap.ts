import { MetadataRoute } from 'next';
import { EMPREENDIMENTOS } from '@/data/empreendimentos';
import { SITE } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const empreendimentoUrls = EMPREENDIMENTOS.map((e) => ({
    url: `${SITE.url}/empreendimentos/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/empreendimentos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...empreendimentoUrls,
    {
      url: `${SITE.url}/obras-entregues`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/investidores`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contato`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
