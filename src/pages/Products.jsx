import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  Layers, 
  BarChart3,
  MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ProductCard from '../components/ProductCard.jsx';
import FastbilloMockup from '../components/FastbilloMockup.jsx';
import CTA from '../components/CTA.jsx';
import { products, getProductBySlug } from '../assets/productsData.js';
import { trackProductView, trackProductCtaClick, trackApkDownloadClick } from '../utils/analytics.js';
import ApkNoticeModal from '../components/ApkNoticeModal.jsx';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const fastbillo = getProductBySlug('fastbillo') || products[0];

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const hasFastbilloApk = Boolean(fastbillo.downloadUrl && fastbillo.downloadUrl.trim() !== "");

  const handleApkClick = (e) => {
    trackApkDownloadClick(fastbillo.id, fastbillo.version, hasFastbilloApk);
    if (!hasFastbilloApk) {
      e.preventDefault();
      setIsApkModalOpen(true);
    }
  };

  const handleScrollToDirectory = () => {
    const el = document.getElementById('products-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Products | Smart Digital Products for Business"
        description="Discover practical digital products by VJ Enterprises Digital Solutions, including FASTBILLO smart billing and business management platform."
        path="/products"
      />

      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container products-hero-grid">
          <div className="products-hero-copy">
            <span className="eyebrow">OUR PRODUCTS</span>
            <h1>Smart Digital Products. Real Business Value.</h1>
            <p>
              Discover practical digital products designed to simplify workflows, improve productivity, and help businesses operate more efficiently.
            </p>
            <div className="hero-actions">
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleScrollToDirectory}
              >
                <span>Explore Our Products</span>
                <ArrowRight size={18} />
              </button>
              <Link className="btn btn-secondary" to="/contact?service=products">
                Talk to Our Team
              </Link>
            </div>
            <div className="hero-product-tags">
              <span className="product-tag-pill">
                <CheckCircle2 size={14} /> Built In-House
              </span>
              <span className="product-tag-pill">
                <CheckCircle2 size={14} /> Android Compatible
              </span>
              <span className="product-tag-pill">
                <CheckCircle2 size={14} /> Enterprise Ready
              </span>
            </div>
          </div>

          <div className="products-hero-preview">
            <FastbilloMockup activeTab="billing" interactive={true} />
          </div>
        </div>
      </section>

      {/* Product Discovery and Directory */}
      <section id="products-directory" className="section">
        <div className="container">
          <div className="directory-header-row">
            <div>
              <SectionHeader
                eyebrow="Product Directory"
                title="Software Solutions Built for Operations"
                description="Explore our growing ecosystem of software tools tailored for day-to-day business efficiency."
              />
            </div>
            
            {/* Search Input */}
            <div className="product-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search products by name or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} showFullDetails={true} />
              ))}
            </div>
          ) : (
            <div className="no-products-found">
              <p>No products matched &ldquo;{searchQuery}&rdquo;.</p>
              <button type="button" className="btn btn-secondary" onClick={() => setSearchQuery('')}>
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Product In-Depth Section: FASTBILLO */}
      <section className="section alt featured-product-spotlight">
        <div className="container">
          <div className="spotlight-two-column">
            <div className="spotlight-copy">
              <div className="spotlight-badge-line">
                <span className="product-category-tag">{fastbillo.category}</span>
                <span className="spotlight-version-tag">Android App &bull; v{fastbillo.version}</span>
              </div>

              <h2>Meet FASTBILLO &mdash; Simplify the Way You Manage Your Business.</h2>
              <p className="spotlight-lead">
                FASTBILLO is a business billing and POS platform designed to help business owners manage everyday business operations through a streamlined digital experience.
              </p>

              <div className="spotlight-benefits-list">
                {fastbillo.benefits.map((benefit, idx) => (
                  <div key={idx} className="spotlight-benefit-item">
                    <div className="spotlight-benefit-icon">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <strong>{benefit.title}</strong>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FASTBILLO Action Buttons */}
              <div className="spotlight-actions">
                <Link 
                  to="/products/fastbillo" 
                  className="btn btn-primary"
                  onClick={() => trackProductCtaClick('fastbillo', 'explore')}
                >
                  <span>Explore FASTBILLO</span>
                  <ArrowRight size={17} />
                </Link>

                {hasFastbilloApk ? (
                  <a 
                    href={fastbillo.downloadUrl} 
                    className="btn btn-secondary"
                    download
                    onClick={handleApkClick}
                  >
                    <Download size={17} />
                    <span>Download APK ({fastbillo.fileSize || '18 MB'})</span>
                  </a>
                ) : (
                  <button 
                    type="button" 
                    className="btn btn-secondary is-coming-soon"
                    onClick={handleApkClick}
                  >
                    <Download size={17} />
                    <span>Download APK &bull; In Rollout</span>
                  </button>
                )}
                
                <Link 
                  to="/contact?product=fastbillo" 
                  className="btn btn-secondary btn-contact-product"
                >
                  <MessageSquare size={17} />
                  <span>Request Demo</span>
                </Link>
              </div>

              {/* Verified Installation Notice */}
              <div className="installation-micro-guide">
                <strong>Android Setup Note:</strong>
                <p>
                  Requires Android 8.0+. When installing APK files from browser downloads, Android may ask to &ldquo;Allow from this source&rdquo; under system security settings.
                </p>
              </div>
            </div>

            <div className="spotlight-visual">
              <FastbilloMockup activeTab="billing" interactive={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits Section */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Business First Architecture"
            title="Designed Around the Way Businesses Work."
            description="Our software products are engineered with clarity, speed, and real operational utility at their core."
            align="center"
          />

          <div className="product-values-grid">
            <article className="product-value-card">
              <div className="value-icon-box">
                <Zap size={24} />
              </div>
              <h3>Simple User Experience</h3>
              <p>
                Clean touch-first interfaces require near-zero training so cashier staff and shop owners can begin billing right away.
              </p>
            </article>

            <article className="product-value-card">
              <div className="value-icon-box">
                <Layers size={24} />
              </div>
              <h3>Efficient Daily Workflows</h3>
              <p>
                From catalog lookups to thermal receipt generation, operations are streamlined to eliminate customer waiting times.
              </p>
            </article>

            <article className="product-value-card">
              <div className="value-icon-box">
                <BarChart3 size={24} />
              </div>
              <h3>Practical Business Tools</h3>
              <p>
                Focuses on essential everyday features like inventory counts, GST breakdown, customer ledgers, and cash reconciliation.
              </p>
            </article>

            <article className="product-value-card">
              <div className="value-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Scalable Digital Solutions</h3>
              <p>
                Engineered to handle expanding product catalogs and multi-terminal operations without slowing down.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      <section className="section alt">
        <div className="container narrow">
          <SectionHeader
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions About Our Products"
            align="center"
          />

          <div className="faq-list">
            {fastbillo.faqs.map((faq, idx) => (
              <details key={idx} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Products Page Final Conversion CTA */}
      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">READY TO GROW?</p>
            <h2>Looking for the Right Digital Solution for Your Business?</h2>
            <p>Explore our products or talk to our team to find a solution that fits your business needs.</p>
          </div>
          <div className="hero-actions">
            <button 
              type="button" 
              className="btn btn-light"
              onClick={handleScrollToDirectory}
            >
              Explore Products
            </button>
            <Link className="btn btn-secondary" to="/contact?service=products">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <ApkNoticeModal
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
        productName={fastbillo.name}
      />
    </>
  );
}
