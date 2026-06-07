import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import ContactForm from '../components/ContactForm.jsx';
import CTA from '../components/CTA.jsx';
import FAQ from '../components/FAQ.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { organizationSchema, websiteSchema } from '../assets/structuredData.js';
import { portfolio, processSteps, serviceHighlights, services, statCards, whyChooseUs } from '../assets/siteData.js';

export default function Home() {
  const homeSchema = [organizationSchema, websiteSchema];

  return (
    <>
      <SEO
        title="IT Services & Digital Marketing Agency"
        description="VJ Enterprises Digital Solutions creates premium websites, web apps, SEO, ads, social media, branding, video editing, and technical consulting solutions."
        path="/"
        schema={homeSchema}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">IT Services and Digital Marketing Agency</p>
            <h1>Premium digital solutions for brands that want to grow with confidence.</h1>
            <p>
              VJ Enterprises Digital Solutions builds fast websites, useful web apps, conversion-focused campaigns, and polished brand content for modern businesses.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" to="/portfolio">View Work</Link>
            </div>
            <div className="stats-row">
              {statCards.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Digital agency dashboard preview">
            <div className="dashboard-card top">
              <span>Growth Pipeline</span>
              <strong>+48%</strong>
            </div>
            <div className="orbital-panel">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="orbit-item">
                    <Icon size={22} />
                    <span>{step.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="dashboard-card bottom">
              <span>Campaign Health</span>
              <div className="meter"><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">Company Introduction</p>
            <h2>One partner for technology, marketing, and creative execution.</h2>
          </div>
          <div className="rich-text">
            <p>
              We help businesses replace scattered digital work with a joined-up system: a strong website, clear messaging, reliable campaign channels, and practical technical guidance.
            </p>
            <div className="mini-grid">
              {serviceHighlights.map((item) => (
                <article key={item.title}>
                  <CheckCircle2 size={19} />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Services Overview"
            title="Digital capabilities for launch, scale, and optimization"
            description="From websites and web apps to SEO, paid ads, social media, video, branding, and consulting."
            align="center"
          />
          <div className="card-grid services-preview">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Built like a technology team, tuned like a growth team"
            description="We care about performance, design quality, messaging, and measurable business value."
            align="center"
          />
          <div className="feature-grid">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="feature-card reveal">
                  <Icon size={25} />
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Client Testimonials"
            title="Clear communication, practical delivery, stronger digital outcomes"
            align="center"
          />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio Preview"
            title="Recent project directions"
            description="Representative work across websites, apps, SEO, marketing, branding, and video."
            align="center"
          />
          <div className="portfolio-grid">
            {portfolio.slice(0, 3).map((project) => <PortfolioCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      <CTA />

      <section className="section contact-preview">
        <div className="container two-column">
          <div>
            <p className="eyebrow">Contact Form</p>
            <h2>Tell us what you want to build, improve, or promote.</h2>
            <p>Use the Web3Forms-powered lead form and we will respond with the next practical step.</p>
          </div>
          <ContactForm compact />
        </div>
      </section>

      <FAQ />
      <div className="container"><Newsletter /></div>
    </>
  );
}
