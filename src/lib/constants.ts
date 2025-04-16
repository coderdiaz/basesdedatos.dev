import SeoMeta from '@/assets/images/meta.jpg'

export const constants = {
  BASE_URL: 'https://basesdedatos.dev',
}

export type Seo = {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  image: any;
  type: 'website' | 'article';
}

export const defaultSeo: Seo = {
  title: 'Diseña bases de datos y aprende el lenguaje SQL',
  description: 'Aprende a diseñar y construir bases de datos relacionales con PostgreSQL y SQL desde cero. Curso gratuito para dominar consultas, relaciones y diseño eficiente de bases de datos.',
  keywords: 'bases de datos, aprendizaje, comunidad base de datos, aprendizaje base de datos',
  canonicalUrl: 'https://basesdedatos.dev/',
  image: SeoMeta,
  type: 'website',
}
