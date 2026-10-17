import { useEffect } from 'react';
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
      <section className="fastbillo-hero-section">
        <div className="container fastbillo-hero-grid">
          <div className="fastbillo-hero-content">

            <h1 className="fastbillo-hero-title">
              Meet FASTBILLO
              <span className="title-highlight">Smart Billing &amp; POS Platform</span>
            </h1>

            <p className="fastbillo-hero-lead">
              FASTBILLO is a business billing and POS platform designed to help business owners manage everyday operations through a streamlined digital experience on Android devices.
            </p>

            <div className="hero-spec-pills">
              <span className="spec-pill">
                <strong>Platform:</strong> Android 8.0+
              </span>
              <span className="spec-pill">
                <strong>Version:</strong> {product.version || '1.0'}
              </span>
              <span className="spec-pill">
                <strong>Size:</strong> {product.fileSize || '18.5 MB'}
              </span>
            </div>

            <div className="fastbillo-hero-ctas">
              {hasApk ? (
                <a
                  href={product.downloadUrl}
                  className="btn btn-primary btn-large-download"
                  download
                  onClick={handleDownloadClick}
                >
                  <Download size={20} />
                  <span>Download Android APK</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-large-download is-coming-soon"
                  onClick={handleDownloadClick}
                >
                  <Download size={20} />
                  <span>Download APK &bull; In Final Rollout</span>
                </button>
              )}

              <Link 
                to="/contact?product=fastbillo" 
                className="btn btn-secondary btn-large-consult"
                onClick={() => trackProductCtaClick('fastbillo', 'consultation')}
              >
                <span>Request Live Demo</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="apk-disclaimer-note">
              <span>Verified Android APK direct distribution. Safe, lightweight, and pre-tested for retail hardware.</span>
            </div>
          </div>

          <div className="fastbillo-hero-mockup">
            <FastbilloMockup activeTab="billing" interactive={true} />
          </div>
        </div>
      </section>

      {/* Verified Product Capabilities Grid */}
      <section className="section alt">
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
      <section className="section">
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
      <section className="section alt">
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
      <section className="section">
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
