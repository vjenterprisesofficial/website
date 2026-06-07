import { useEffect } from 'react';
import { company } from '../assets/siteData.js';

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes.identity).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }

  Object.entries(attributes.values).forEach(([key, value]) => element.setAttribute(key, value));
};

export default function SEO({ title, description, path = '/', image = '/vj-enterprises-logo.png', schema }) {
  useEffect(() => {
    const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`;
    const canonicalUrl = `${company.domain}${path === '/' ? '' : path}`;
    const imageUrl = image.startsWith('http') ? image : `${company.domain}${image}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', {
      identity: { name: 'description' },
      values: { content: description }
    });
    setMeta('meta[property="og:title"]', {
      identity: { property: 'og:title' },
      values: { content: fullTitle }
    });
    setMeta('meta[property="og:description"]', {
      identity: { property: 'og:description' },
      values: { content: description }
    });
    setMeta('meta[property="og:type"]', {
      identity: { property: 'og:type' },
      values: { content: 'website' }
    });
    setMeta('meta[property="og:url"]', {
      identity: { property: 'og:url' },
      values: { content: canonicalUrl }
    });
    setMeta('meta[property="og:image"]', {
      identity: { property: 'og:image' },
      values: { content: imageUrl }
    });
    setMeta('meta[name="twitter:card"]', {
      identity: { name: 'twitter:card' },
      values: { content: 'summary_large_image' }
    });
    setMeta('meta[name="twitter:title"]', {
      identity: { name: 'twitter:title' },
      values: { content: fullTitle }
    });
    setMeta('meta[name="twitter:description"]', {
      identity: { name: 'twitter:description' },
      values: { content: description }
    });
    setMeta('meta[name="twitter:image"]', {
      identity: { name: 'twitter:image' },
      values: { content: imageUrl }
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const oldSchema = document.head.querySelector('script[data-schema="page"]');
    if (oldSchema) oldSchema.remove();

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.schema = 'page';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, schema]);

  return null;
}
