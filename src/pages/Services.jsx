import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CTA from '../components/CTA.jsx';
import FAQ from '../components/FAQ.jsx';
import { services } from '../assets/siteData.js';

const featuredNames = new Set(['Website Development', 'SEO Services', 'Digital Marketing', 'Social Media Marketing', 'Video Editing', 'Branding and Design']);

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore website development, SEO, digital marketing, social media marketing, Google Ads, Meta Ads, video editing, branding, and consulting services."
        path="/services"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: services.map((service, index) => ({
            '@type': 'Service',
            position: index + 1,
            name: service.title,
            description: service.description
          }))
        }}
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Focused digital services for stronger websites, campaigns, content, and systems.</h1>
          <p>Choose a single service or combine capabilities into a complete digital growth program.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Service Cards"
            title="Core agency services"
            description="Each service includes strategy, execution, benefits, and a clear next step."
            align="center"
          />
          <div className="card-grid">
            {services.filter((service) => featuredNames.has(service.title)).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
