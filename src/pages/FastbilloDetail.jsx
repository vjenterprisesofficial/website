import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  CheckCircle2, 
  Smartphone, 
  Receipt, 
  Package, 
  TrendingUp, 
  Printer, 
  HelpCircle, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Store,
  ShoppingBag,
  Cpu,
  FileSpreadsheet,
  Settings,
  AlertTriangle,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import FastbilloMockup from '../components/FastbilloMockup.jsx';
import { getProductBySlug } from '../assets/productsData.js';
import { company } from '../assets/siteData.js';
import { trackProductView, trackApkDownloadClick, trackProductCtaClick, trackWhatsAppClick } from '../utils/analytics.js';

export default function FastbilloDetail() {
  const product = getProductBySlug('fastbillo');
  const [activeFeature, setActiveFeature] = useState('billing');

  const featurePreviews = [
    { id: 'billing', label: 'Quick Billing', desc: 'Create a customer bill', icon: Receipt },
    { id: 'products', label: 'Products & Stock', desc: 'Manage your items', icon: Package },
    { id: 'sales', label: 'Sales Overview', desc: 'Review daily sales', icon: TrendingUp }
  ];

  const handlePreviewKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % featurePreviews.length;
      setActiveFeature(featurePreviews[nextIndex].id);
      document.getElementById(`feature-tab-${featurePreviews[nextIndex].id}`)?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + featurePreviews.length) % featurePreviews.length;
      setActiveFeature(featurePreviews[prevIndex].id);
      document.getElementById(`feature-tab-${featurePreviews[prevIndex].id}`)?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveFeature(featurePreviews[0].id);
      document.getElementById(`feature-tab-${featurePreviews[0].id}`)?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveFeature(featurePreviews[featurePreviews.length - 1].id);
      document.getElementById(`feature-tab-${featurePreviews[featurePreviews.length - 1].id}`)?.focus();
    }
  };

  useEffect(() => {
    if (product) {
      trackProductView(product.id, product.name);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container section">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const hasApk = Boolean(product.downloadUrl && product.downloadUrl.trim() !== "");

  const handleDownloadClick = (e) => {
    trackApkDownloadClick(product.id, product.version, hasApk);
    if (!hasApk) {
      e.preventDefault();
      alert('The FASTBILLO Android APK release is currently undergoing final staging. To receive the direct APK package or early access build immediately, please contact our team via WhatsApp or the contact form!');
    }
  };

  const handleWhatsAppSupport = () => {
    trackWhatsAppClick('fastbillo_page');
  };

  return (
    <>
      <SEO
        title="FASTBILLO — Smart Billing & Business POS Software"
        description="FASTBILLO is a business billing, POS, and everyday management platform designed to help retail and merchant businesses simplify operations."
        path="/products/fastbillo"
      />

      {/* Product Hero */}
      <section className="fastbillo-hero-section" aria-labelledby="fastbillo-hero-title">
        <div className="container fastbillo-hero-grid">
          <div className="fastbillo-hero-content">
            <div className="fastbillo-hero-eyebrow">
              <span className="eyebrow-badge">
                <span className="eyebrow-dot" aria-hidden="true" />
                SIMPLE BUSINESS BILLING
              </span>
            </div>

            <h1 id="fastbillo-hero-title" className="fastbillo-hero-title">
              Meet FASTBILLO
              <span className="title-highlight">Run your business. The easy way.</span>
            </h1>

            <p className="fastbillo-hero-supporting">
              Billing, products, and sales — all in one app.
            </p>

            <p className="fastbillo-hero-lead">
              Create bills, manage your products, and keep track of daily sales from your phone. Spend less time managing paperwork and more time growing your business.
            </p>

            <div className="fastbillo-hero-ctas">
              {hasApk ? (
                <a
                  href={product.downloadUrl}
                  className="btn btn-primary fastbillo-btn-primary btn-large-download"
                  download
                  onClick={handleDownloadClick}
                >
                  <Download size={20} aria-hidden="true" />
                  <span>Download the App</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary fastbillo-btn-primary btn-large-download is-coming-soon"
                  onClick={handleDownloadClick}
                  aria-label="Download the App"
                >
                  <Download size={20} aria-hidden="true" />
                  <span>Download the App</span>
                </button>
              )}

              <a 
                href="#pricing" 
                className="btn btn-secondary fastbillo-btn-secondary btn-large-consult"
                onClick={(e) => {
                  trackProductCtaClick('fastbillo', 'pricing');
                  const el = document.getElementById('pricing');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                    el.focus({ preventScroll: true });
                  }
                }}
              >
                <span>View Pricing</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            {/* Accessible 3-Feature Preview Selector */}
            <div className="fastbillo-feature-previews" role="region" aria-label="Interactive Feature Previews">
              <span className="feature-previews-label">Explore in app:</span>
              <div 
                className="feature-preview-tabs" 
                role="tablist" 
                aria-label="FASTBILLO Feature Previews"
              >
                {featurePreviews.map((preview, index) => {
                  const Icon = preview.icon;
                  const isActive = activeFeature === preview.id;
                  return (
                    <button
                      key={preview.id}
                      id={`feature-tab-${preview.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="fastbillo-mockup-display"
                      tabIndex={isActive ? 0 : -1}
                      className={`feature-preview-tab ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveFeature(preview.id)}
                      onKeyDown={(e) => handlePreviewKeyDown(e, index)}
                    >
                      <Icon size={15} aria-hidden="true" />
                      <span>{preview.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="fastbillo-hero-mockup" id="fastbillo-mockup-display">
            <FastbilloMockup activeFeature={activeFeature} />
          </div>
        </div>
      </section>

      {/* Verified Product Capabilities Grid */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Essential Business Tools Built Into One Interface"
            description="Verified platform capabilities engineered specifically for shop counters, store managers, and retail operators."
            align="center"
          />

          <div className="fastbillo-features-grid">
            {product.features.map((feat, idx) => (
              <article key={idx} className="fastbillo-feature-card">
                <div className="feature-icon-badge">
                  {idx === 0 && <Receipt size={22} />}
                  {idx === 1 && <Printer size={22} />}
                  {idx === 2 && <Package size={22} />}
                  {idx === 3 && <Store size={22} />}
                  {idx === 4 && <TrendingUp size={22} />}
                  {idx === 5 && <Layers size={22} />}
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Workflow */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Workflow"
            title="How FASTBILLO Works in Your Daily Business"
            description="Simple 4-step sequence from setup to closing out your register."
            align="center"
          />

          <div className="workflow-steps-grid">
            <div className="workflow-step-card">
              <div className="step-number">01</div>
              <h4>Add Your Catalog</h4>
              <p>Add products with prices, item codes, units, and applicable tax rates in minutes.</p>
            </div>

            <div className="workflow-step-card">
              <div className="step-number">02</div>
              <h4>Fast POS Billing</h4>
              <p>Tap products or scan barcodes to add items to customer orders in a fraction of a second.</p>
            </div>

            <div className="workflow-step-card">
              <div className="step-number">03</div>
              <h4>Print or Share Bill</h4>
              <p>Output receipts via Bluetooth thermal printers or share digital invoices on WhatsApp.</p>
            </div>

            <div className="workflow-step-card">
              <div className="step-number">04</div>
              <h4>Reconcile Daily Sales</h4>
              <p>Audit cash, UPI, and total register collection at day-end with structured reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Business Use Cases */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Multi-Industry Support"
            title="Built for Diverse Business Categories"
            description="FASTBILLO is a flexible, multi-industry platform tailored for modern retail, wholesale, and service counters."
            align="center"
          />

          <div className="use-case-grid">
            {product.useCases.map((useCase, idx) => (
              <article key={idx} className="use-case-card">
                <div className="use-case-icon">
                  {idx === 0 && <ShoppingBag size={22} />}
                  {idx === 1 && <Store size={22} />}
                  {idx === 2 && <Cpu size={22} />}
                  {idx === 3 && <FileSpreadsheet size={22} />}
                </div>
                <div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section id="pricing" className="section alt fastbillo-pricing-section">
        <div className="container">
          <SectionHeader
            eyebrow="Pricing Plans"
            title="Simple, Transparent &amp; Affordable Plans"
            description="Equip your retail counter with FASTBILLO. Choose the plan that best fits your business volume with no hidden charges."
            align="center"
          />

          <div className="fastbillo-pricing-grid">
            {product.pricing?.map((plan) => (
              <div 
                key={plan.id} 
                className={`fastbillo-pricing-card ${plan.featured ? 'is-featured' : ''}`}
              >
                {plan.badge && (
                  <span className="fastbillo-pricing-badge">{plan.badge}</span>
                )}

                <div className="fastbillo-pricing-header">
                  <span className="fastbillo-pricing-duration">{plan.duration}</span>
                  <h3>{plan.name}</h3>
                  <p className="fastbillo-pricing-tagline">{plan.tagline}</p>
                </div>

                <div className="fastbillo-pricing-price-box">
                  {plan.originalPrice && (
                    <span className="fastbillo-pricing-del">{plan.originalPrice}</span>
                  )}
                  <div className="fastbillo-pricing-amount-row">
                    <span className="fastbillo-pricing-price">{plan.price}</span>
                    <span className="fastbillo-pricing-period">{plan.period}</span>
                  </div>
                </div>

                <ul className="fastbillo-pricing-features">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={16} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="fastbillo-pricing-cta-wrap">
                  <Link
                    to={`/contact?product=fastbillo&plan=${encodeURIComponent(plan.ctaPlan)}`}
                    className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} full`}
                    onClick={() => trackProductCtaClick('fastbillo', `pricing_${plan.id}`)}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href={`https://wa.me/${company.whatsapp}?text=Hi%20VJ%20Enterprises%2C%20I%20am%20interested%20in%20the%20FASTBILLO%20${encodeURIComponent(plan.name)}%20plan.`}
                    target="_blank"
                    rel="noreferrer"
                    className="fastbillo-whatsapp-quick-link"
                    onClick={() => trackWhatsAppClick(`pricing_${plan.id}`)}
                  >
                    <MessageCircle size={14} />
                    <span>Or quick chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="fastbillo-pricing-guarantee">
            <ShieldCheck size={22} className="guarantee-icon" />
            <div>
              <strong>Instant Setup &amp; Dedicated WhatsApp Support</strong>
              <p>Every license includes full onboarding assistance, receipt printer configuration, and direct technical support from VJ Enterprises Digital Solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Android Installation Instructions */}
      <section className="section installation-section">
        <div className="container narrow">
          <div className="installation-guide-card">
            <div className="guide-header">
              <Smartphone size={28} className="guide-icon" />
              <div>
                <h2>Android APK Installation Guide</h2>
                <p>Follow these quick steps to install FASTBILLO directly onto your Android device.</p>
              </div>
            </div>

            <div className="installation-steps-list">
              <div className="install-step">
                <span className="step-index">1</span>
                <div>
                  <strong>Download the APK file</strong>
                  <p>Tap the &ldquo;Download Android APK&rdquo; button above on your smartphone or tablet browser.</p>
                </div>
              </div>

              <div className="install-step">
                <span className="step-index">2</span>
                <div>
                  <strong>Open the Downloaded Package</strong>
                  <p>When the download completes, tap the file in your notification drawer or open it from your device&rsquo;s &ldquo;Files / Downloads&rdquo; folder.</p>
                </div>
              </div>

              <div className="install-step">
                <span className="step-index">3</span>
                <div>
                  <strong>Allow App Installation (Android Security)</strong>
                  <p>
                    If Android prompts <em>&ldquo;For your security, your phone is not allowed to install unknown apps from this source&rdquo;</em>, tap <strong>Settings</strong> and toggle <strong>&ldquo;Allow from this source&rdquo;</strong>.
                  </p>
                </div>
              </div>

              <div className="install-step">
                <span className="step-index">4</span>
                <div>
                  <strong>Install and Launch</strong>
                  <p>Tap <strong>Install</strong>. Once complete, launch FASTBILLO from your home screen and follow the setup wizard.</p>
                </div>
              </div>
            </div>

            <div className="guide-security-box">
              <ShieldCheck size={20} />
              <span>
                FASTBILLO packages are built and verified by VJ Enterprises Digital Solutions with zero bloatware or unnecessary device permissions.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      <section className="section alt">
        <div className="container narrow">
          <SectionHeader
            eyebrow="Product FAQs"
            title="Frequently Asked Questions about FASTBILLO"
            align="center"
          />

          <div className="faq-list">
            {product.faqs.map((faq, idx) => (
              <details key={idx} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Product Support / Conversion Band */}
      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">DEDICATED PRODUCT SUPPORT</p>
            <h2>Ready to Deploy FASTBILLO for Your Business?</h2>
            <p>
              Get in touch with our product engineers for an onboarding walkthrough, hardware pairing advice, or bulk terminal deployment.
            </p>
          </div>
          <div className="hero-actions">
            <Link 
              className="btn btn-light" 
              to="/contact?product=fastbillo"
              onClick={() => trackProductCtaClick('fastbillo', 'consultation')}
            >
              Contact Support &amp; Sales
            </Link>
            <a 
              className="btn btn-secondary" 
              href={`https://wa.me/${company.whatsapp}?text=Hi%20VJ%20Enterprises%2C%20I%20want%20to%20learn%20more%20about%20FASTBILLO.`}
              target="_blank" 
              rel="noreferrer"
              onClick={handleWhatsAppSupport}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
