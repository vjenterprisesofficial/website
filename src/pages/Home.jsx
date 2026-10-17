import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Zap, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import ContactForm from '../components/ContactForm.jsx';
import CTA from '../components/CTA.jsx';
import FAQ from '../components/FAQ.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { organizationSchema, websiteSchema } from '../assets/structuredData.js';
import { portfolio, processSteps, serviceHighlights, services, statCards, whyChooseUs } from '../assets/siteData.js';
import { getFeaturedProducts } from '../assets/productsData.js';
import { trackContactClick } from '../utils/analytics.js';

export default function Home() {
  const homeSchema = [organizationSchema, websiteSchema];
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <SEO
        title="Digital Experiences That Turn Ambition Into Growth"
        description="We design high-performing websites, build intelligent digital solutions, and deliver strategic marketing that helps businesses attract customers and grow."
        path="/"
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={14} /> IT Services &bull; Digital Marketing &bull; Software Products
            </p>
            <h1>Digital Experiences That Turn Ambition Into Growth.</h1>
            <p className="hero-lead-text">
              We design high-performing websites, build intelligent digital solutions, and deliver strategic marketing that helps businesses attract customers and grow.
            </p>
            <div className="hero-actions">
              <Link 
                className="btn btn-primary hero-main-cta" 
                to="/contact"
                onClick={() => trackContactClick('project_discussion', 'hero')}
              >
                <span>Let&rsquo;s Discuss Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" to="/services">
                Explore Our Services
              </Link>
            </div>
            <div className="stats-row">
              {statCards.map((stat) => (
                <div key={stat.label} className="stat-card-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D-Inspired Visual Composition with Real Project Assets */}
          <div className="hero-visual" aria-label="Digital agency interactive mockup composition">
            <div className="hero-card-floating card-top-right">
              <div className="floating-metric-badge">
                <TrendingUp size={16} />
                <span>+48% Organic Growth</span>
              </div>
              <strong>Verified Client ROI</strong>
            </div>

            <div className="hero-mockup-stack">
              {/* Layer 1: Real Portfolio Website Preview */}
              <div className="mockup-frame-layer layer-back">
                <div className="frame-header-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <img 
                  src="/portfolio/karate-bharat.png" 
                  alt="Sports Portal Interface" 
                  className="mockup-preview-img"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Layer 2: Main Responsive Web App Showcase */}
              <div className="mockup-frame-layer layer-front">
                <div className="frame-header-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <img 
                  src="/portfolio/nunchaku-india.png" 
                  alt="Official National Platform" 
                  className="mockup-preview-img"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="floating-live-badge">
                  <span className="live-pulse" />
                  <span>Production Live</span>
                </div>
              </div>
            </div>

            <div className="hero-card-floating card-bottom-left">
              <span>Delivery Standard</span>
              <div className="delivery-meter-bar">
                <div className="meter-fill" style={{ width: '96%' }} />
              </div>
              <small>Lighthouse Target: 90+ Score</small>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Strip */}
      <section className="trust-strip-section">
        <div className="container trust-strip-inner">
          <span className="trust-label">TRUSTED BY ORGANIZATIONS &amp; ENTERPRISES</span>
          <div className="trust-badges-grid">
            <div className="trust-badge-item">
              <ShieldCheck size={18} />
              <span>Full-Stack Web &amp; Apps</span>
            </div>
            <div className="trust-badge-item">
              <Zap size={18} />
              <span>Performance Focused</span>
            </div>
            <div className="trust-badge-item">
              <Layers size={18} />
              <span>Native In-House Products</span>
            </div>
            <div className="trust-badge-item">
              <CheckCircle2 size={18} />
              <span>Verified Client Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
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

      {/* Dedicated Featured Products Section */}
      <section className="section alt home-products-section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">OUR SOFTWARE PRODUCTS</p>
              <h2>Products Built to Simplify Business.</h2>
              <p className="header-subtitle">
                Explore digital products developed to help businesses streamline everyday operations and work more efficiently.
              </p>
            </div>
            <Link to="/products/fastbillo" className="btn btn-secondary btn-view-all-products">
              <span>Explore FASTBILLO</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="products-grid featured-products-list">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showFullDetails={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
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
          <div className="section-bottom-action">
            <Link to="/services" className="btn btn-secondary">
              <span>View All 10+ Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Our Work Process"
            title="A Structured Path From Concept to Measurable Outcome"
            description="How we partner with you to deliver high-converting digital assets."
            align="center"
          />
          <div className="process-grid">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="process-card">
                  <div className="process-step-header">
                    <span className="process-step-index">0{idx + 1}</span>
                    <div className="process-icon-box">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Portfolio Projects */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Selected Portfolio"
            title="Recent Project Directions &amp; Client Deployments"
            description="Representative work across websites, portals, SEO campaigns, and technical consulting."
            align="center"
          />
          <div className="portfolio-grid">
            {portfolio.slice(0, 3).map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))}
          </div>
          <div className="section-bottom-action">
            <Link to="/portfolio" className="btn btn-secondary">
              <span>View Full Project Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section alt">
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

      {/* Authentic Client Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Client Testimonials"
            title="Clear communication, practical delivery, stronger digital outcomes"
            align="center"
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* Conversion Banner */}
      <CTA />

      {/* Contact & Lead Generation Preview */}
      <section className="section contact-preview">
        <div className="container two-column">
          <div>
            <p className="eyebrow">Let&rsquo;s Connect</p>
            <h2>Tell us what you want to build, improve, or promote.</h2>
            <p>
              Fill out the project enquiry form below and our leadership team will respond with a tailored recommendation and next steps.
            </p>
            <div className="contact-quick-perks">
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Response within 24 business hours</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>No-obligation scope review</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Direct consultation with lead engineers</span>
              </div>
            </div>
          </div>
          <ContactForm compact />
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Newsletter */}
      <div className="container"><Newsletter /></div>
    </>
  );
}
