import { company, services } from './siteData.js';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: company.name,
  url: company.domain,
  logo: `${company.domain}/vj-enterprises-logo.png`,
  email: company.email,
  telephone: company.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN'
  },
  sameAs: ['https://www.linkedin.com/', 'https://www.instagram.com/', 'https://www.facebook.com/'],
  areaServed: ['India', 'Global'],
  serviceType: services.map((service) => service.title)
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: company.name,
  url: company.domain,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${company.domain}/services?query={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};
