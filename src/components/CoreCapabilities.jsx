import { useState, useRef } from 'react';
import { 
  MonitorSmartphone, 
  ReceiptText, 
  Package, 
  UsersRound, 
  ChartNoAxesCombined, 
  Store,
  CheckCircle2, 
  ChevronRight,
  Printer, 
  Share2, 
  QrCode, 
  Wallet, 
  CreditCard, 
  Search,
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Tag, 
  FileText,
  Clock,
  Layers,
  ArrowUpRight,
  TrendingUp,
  SlidersHorizontal,
  Smartphone,
  Shirt,
  Coffee,
  ShoppingBag,
  BadgeCheck,
  Check
} from 'lucide-react';

/**
 * Core Capabilities Section — VJ Enterprises Digital Solutions
 * Pure SaaS Feature Showcase:
 * Highlights the verified features, operational specifications, hardware integrations,
 * and business capabilities of FASTBILLO without simulated application mockups.
 */
export default function CoreCapabilities() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  // Keyboard navigation for feature selector tabs
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % capabilities.length;
      setActiveTab(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + capabilities.length) % capabilities.length;
      setActiveTab(prevIndex);
      tabRefs.current[prevIndex]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTab(0);
      tabRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveTab(capabilities.length - 1);
      tabRefs.current[capabilities.length - 1]?.focus();
    }
  };

  const capabilities = [
    {
      id: 'pos',
      title: 'Quick-Touch POS',
      badge: 'Point of Sale Engine',
      icon: MonitorSmartphone,
      tagline: 'High-Speed Checkout & 100% Offline-First Counter Reliability',
      description: 'Engineered specifically for busy retail checkout counters to ring up customer items in milliseconds, handle mixed payment modes, and maintain complete billing continuity even during network outages.',
      highlights: [
        {
          icon: Zap,
          title: 'Instant Barcode & Touch Lookup',
          description: 'Add products to cart in milliseconds via camera scanner, handheld USB/Bluetooth barcode guns, or high-contrast quick-touch tile buttons.'
        },
        {
          icon: Wallet,
          title: 'Flexible Multi-Tender Split',
          description: 'Accept partial cash, UPI QR scan, and card payments on a single invoice with automatic balance calculation and zero rounding errors.'
        },
        {
          icon: ShieldCheck,
          title: 'Zero-Downtime Offline Mode',
          description: 'All transaction data is stored locally on-device. Continue billing customers seamlessly even during broadband or mobile network drops.'
        }
      ],
      specifications: [
        { label: 'Speed', value: '< 0.3s', detail: 'Instant cart calculation & response' },
        { label: 'Availability', value: '100% Offline', detail: 'Local SQLite data persistence' },
        { label: 'Tender Modes', value: 'Multi-Tender', detail: 'Cash, UPI, Card, Store Credit' },
        { label: 'Hardware Input', value: 'Universal', detail: 'Touch, Barcode Scanners, Keyboard' }
      ],
      capabilitiesList: [
        'Instant Barcode & QR Scanning',
        'Split Tender Payments (Cash + UPI)',
        'Hold & Resume Carts During Rush Hours',
        'Custom Percentage & Fixed Discount Rules',
        'Dynamic Item-Level Tax Overrides',
        'Customer Profile & Khata Tagging',
        'Fast Bill Cancellation & Returns',
        'Responsive High-Contrast Touch UI'
      ],
      businessImpact: {
        metric: '65% Faster',
        label: 'Queue Clearance Speed',
        description: 'Significantly cuts down customer waiting time during peak shopping hours, preventing walkouts and boosting daily billing volume.'
      }
    },
    {
      id: 'invoicing',
      title: 'Thermal & Digital Invoicing',
      badge: 'Print & Paperless Delivery',
      icon: ReceiptText,
      tagline: 'Universal Bluetooth Thermal Printing & 1-Click WhatsApp Receipts',
      description: 'Print compliant retail receipts in seconds on standard ESC/POS thermal printers, or send digital PDF invoices directly to customer phones via WhatsApp.',
      highlights: [
        {
          icon: Printer,
          title: 'Universal ESC/POS Bluetooth Support',
          description: 'Wirelessly connect to any standard 58mm (2-inch) or 80mm (3-inch) Bluetooth thermal printer without complex drivers or setup.'
        },
        {
          icon: Share2,
          title: 'Instant WhatsApp E-Bill Delivery',
          description: 'Reduce thermal paper roll costs by automatically sending professional PDF invoices directly to the customer\'s WhatsApp.'
        },
        {
          icon: QrCode,
          title: 'GST & Tax-Compliant Layouts',
          description: 'Auto-generates compliant tax receipts with shop GSTIN, state code, HSN/SAC breakdowns, CGST/SGST splitting, and dynamic UPI QR payment codes.'
        }
      ],
      specifications: [
        { label: 'Thermal Sizes', value: '58mm & 80mm', detail: 'Standard 2-inch & 3-inch rolls' },
        { label: 'Wireless Protocol', value: 'Bluetooth 4.0+', detail: 'Industry-standard ESC/POS' },
        { label: 'Digital Delivery', value: 'WhatsApp PDF', detail: 'Paperless, zero-waste delivery' },
        { label: 'Tax Compliance', value: 'GST Ready', detail: 'HSN/SAC & CGST/SGST splitting' }
      ],
      capabilitiesList: [
        'Bluetooth 58mm & 80mm Printer Pairing',
        'Direct WhatsApp PDF Delivery',
        'Dynamic Dynamic UPI Payment QR Code',
        'Custom Business Name, Logo & Contact Header',
        'Automatic HSN/SAC Code Categorization',
        'Custom Terms & Return Policy Footers',
        'Instant Reprint for Past Invoices',
        'Secure Paperless Digital Bill Archival'
      ],
      businessImpact: {
        metric: '40% Savings',
        label: 'Consumable Paper Costs',
        description: 'Eco-friendly digital invoices reduce reliance on thermal paper rolls, decrease printer hardware wear, and delight modern mobile-first customers.'
      }
    },
    {
      id: 'catalog',
      title: 'Product Catalog Management',
      badge: 'SKU & Inventory Control',
      icon: Package,
      tagline: 'Centralized Item Catalog, Variant Pricing & Real-Time Stock Tracking',
      description: 'Organize your entire shop inventory with custom categories, SKU barcodes, dynamic price tiers, GST tax slabs, and automated low-stock warnings.',
      highlights: [
        {
          icon: Tag,
          title: 'Multi-Variant Item Matrix',
          description: 'Configure variations such as size, color, pack size, or unit weight (kg, g, l, pcs) under a single master product record.'
        },
        {
          icon: SlidersHorizontal,
          title: 'GST Slab Mapping & HSN Codes',
          description: 'Assign 0%, 5%, 12%, 18%, or 28% GST tax rates with automatic CGST and SGST division per product category.'
        },
        {
          icon: ShieldCheck,
          title: 'Automated Stock Level Alerts',
          description: 'Set minimum inventory thresholds to receive proactive notifications before high-demand items run out of stock.'
        }
      ],
      specifications: [
        { label: 'Catalog Capacity', value: 'Unlimited SKUs', detail: 'Fast indexing & instant search' },
        { label: 'Tax Rates', value: '0% to 28% GST', detail: 'Pre-configured tax slabs' },
        { label: 'Stock Deduction', value: 'Real-Time', detail: 'Auto-updated on every sale' },
        { label: 'Measurement Units', value: 'Pcs, Kg, G, L', detail: 'Standard & fractional units' }
      ],
      capabilitiesList: [
        'Batch & Expiry Date Management',
        'Bulk CSV / Excel Product Import',
        'Custom Barcode Generation & Scanning',
        'Category & Subcategory Hierarchy',
        'Wholesale vs Retail Pricing Tiers',
        'Automated Low-Stock Threshold Warnings',
        'Damaged Stock & Shrinkage Logging',
        'Full Product Price Change Audit Trail'
      ],
      businessImpact: {
        metric: '0% Stockouts',
        label: 'Unnoticed Inventory Loss',
        description: 'Proactive low-stock thresholds prevent lost sales, ensuring your top-selling retail products are always reordered on time.'
      }
    },
    {
      id: 'customers',
      title: 'Customer Records & Khata',
      badge: 'Ledger & Customer CRM',
      icon: UsersRound,
      tagline: 'Digital Khata Credit Register, Purchase History & WhatsApp Reminders',
      description: 'Maintain a secure digital credit register (Khata), track individual customer purchase histories, and send automated WhatsApp payment reminders with one tap.',
      highlights: [
        {
          icon: FileText,
          title: 'Digital Khata Credit Tracking',
          description: 'Record credit purchases (Udhar) with zero calculation mistakes, keeping an exact running balance for every trusted customer.'
        },
        {
          icon: Clock,
          title: 'Complete Purchase History',
          description: 'Access every customer\'s past bills, preferred items, and visit frequency right at the checkout counter.'
        },
        {
          icon: Share2,
          title: '1-Click WhatsApp Payment Reminders',
          description: 'Send professional payment balance summaries with UPI QR links directly to customer WhatsApp chat to collect pending dues faster.'
        }
      ],
      specifications: [
        { label: 'Ledger Accuracy', value: '100% Digital', detail: 'Eliminates manual notebook errors' },
        { label: 'Payment Reminders', value: '1-Click WhatsApp', detail: 'Includes bill summary & UPI QR' },
        { label: 'History Retention', value: 'Lifetime Records', detail: 'Full invoice log per customer' },
        { label: 'Data Security', value: 'Encrypted', detail: 'Local & cloud-synced backups' }
      ],
      capabilitiesList: [
        'Quick Customer Phone Number Lookup',
        'Digital Udhar / Credit Register',
        'Partial Payment Logging & Receipts',
        'Automated WhatsApp Dues Reminders',
        'Customer Lifetime Purchase History',
        'Customer-Specific Discount Rules',
        'Store Credit & Advance Payment Management',
        'Exportable Khata PDF Statements'
      ],
      businessImpact: {
        metric: '3x Faster',
        label: 'Credit Dues Collection',
        description: 'Automated WhatsApp reminder links with integrated UPI make it effortless for customers to settle pending balances promptly.'
      }
    },
    {
      id: 'reports',
      title: 'End-of-Day Register Reports',
      badge: 'Audit & Closing Analytics',
      icon: ChartNoAxesCombined,
      tagline: 'Cash Reconciliation, Tender Audits & Sales Performance Analytics',
      description: 'Close your register with complete peace of mind using automated day-end reconciliation that compares cash drawer physical counts against recorded transactions.',
      highlights: [
        {
          icon: ShieldCheck,
          title: 'Cash Drawer Reconciliation',
          description: 'Input your physical drawer count and let the system verify differences instantly, eliminating unaccounted discrepancies.'
        },
        {
          icon: CreditCard,
          title: 'Payment Mode Tender Breakdown',
          description: 'View exact separate totals for Cash, UPI / QR payments, Credit Cards, and Customer Credit (Udhar) generated throughout the day.'
        },
        {
          icon: Printer,
          title: 'Printable Day-End Z-Report',
          description: 'Print a compact register closing slip on your thermal printer or export an executive PDF summary for business owners.'
        }
      ],
      specifications: [
        { label: 'Audit Coverage', value: '100% Transactions', detail: 'Timestamped audit trails' },
        { label: 'Tender Breakdown', value: 'Cash, UPI, Card', detail: 'Separate sub-totals per mode' },
        { label: 'Export Options', value: 'Print, PDF & Excel', detail: 'Instant Z-Report format' },
        { label: 'Register Security', value: 'Manager PIN', detail: 'Secure shift & day closing' }
      ],
      capabilitiesList: [
        'Physical Cash Drawer Count Audit',
        'Net Sales & Gross Collection Summary',
        'Hourly Sales Velocity Analytics',
        'Top-Selling Products Leaderboard',
        'Staff Shift Handoff Reconciliation',
        'Voided Items & Refund Audit Trail',
        'Tax Collection (CGST / SGST) Tally',
        'Instant Thermal Z-Report Printing'
      ],
      businessImpact: {
        metric: '15 Mins',
        label: 'Saved Per Daily Closing',
        description: 'Replaces tedious manual paper ledger calculations with automated 1-click day-end reconciliation and instant tender balance.'
      }
    },
    {
      id: 'flexibility',
      title: 'Multi-Industry Flexibility',
      badge: 'Industry Presets & Adapters',
      icon: Store,
      tagline: 'Pre-Configured Workflows Built for Your Specific Retail Format',
      description: 'Adapt FASTBILLO to your store type with one click. Dedicated presets configure tax rules, billing workflows, and receipt formats tailored for your retail vertical.',
      highlights: [
        {
          icon: ShoppingBag,
          title: 'Grocery & Kirana Stores',
          description: 'Built for rapid barcode scanning, loose grain weight calculations, fast unit additions, and high-volume queue clearance.'
        },
        {
          icon: Shirt,
          title: 'Apparel & Fashion Boutiques',
          description: 'Manage garment sizes (S, M, L, XL), colors, brand tags, exchange policies, and elegant branded tax invoices.'
        },
        {
          icon: Smartphone,
          title: 'Electronics & Mobile Outlets',
          description: 'Track IMEI/serial numbers, manage manufacturer warranties, and generate full B2B/B2C GST tax invoices.'
        }
      ],
      specifications: [
        { label: 'Industry Presets', value: '6+ Verticals', detail: 'Specialized retail configurations' },
        { label: 'Barcode Support', value: 'EAN-13, UPC, 128', detail: 'All standard barcode symbologies' },
        { label: 'Unit Flexibility', value: 'Fractional & Pcs', detail: 'Kg, grams, liters, piece units' },
        { label: 'Invoice Layout', value: 'Custom Templates', detail: 'Branded policies & headers' }
      ],
      capabilitiesList: [
        'Kirana & Supermarket Fast Mode',
        'Apparel Variant & Size Matrix',
        'Electronics Serial / IMEI Tracking',
        'Cafe & QSR Order Token Slips',
        'Hardware & Building Material Units',
        'Pharmacy Batch & Expiry Tracking',
        'Gift & Stationery Shop Support',
        'Customizable Header & Policy Notes'
      ],
      businessImpact: {
        metric: 'Zero Setup',
        label: 'Ready Out-of-the-Box',
        description: 'Instant industry-specific workflows without expensive custom software development or lengthy employee training.'
      }
    }
  ];

  const currentCap = capabilities[activeTab];
  const ActiveIcon = currentCap.icon;

  return (
    <section className="section fastbillo-capabilities-section" id="core-capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center capabilities-header">
          <div className="inline-badge">
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span>Product Capabilities</span>
          </div>
          <h2 className="section-title">
            Built For High-Speed Retail & Modern Business Operations
          </h2>
          <p className="section-subtitle">
            Explore the verified core capabilities of FASTBILLO engineered to eliminate billing bottlenecks, automate compliance, and streamline store management.
          </p>
        </div>

        {/* Feature Explorer Layout */}
        <div className="capabilities-explorer-layout">
          {/* Navigation Sidebar / Tab Selector */}
          <nav 
            className="capabilities-nav-panel" 
            role="tablist" 
            aria-label="FASTBILLO Product Capabilities"
          >
            <div className="nav-panel-header">
              <span className="nav-panel-title">Explore Capabilities</span>
              <span className="nav-panel-count">{capabilities.length} Features</span>
            </div>

            <div className="capabilities-tabs-list">
              {capabilities.map((cap, idx) => {
                const IconComponent = cap.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={cap.id}
                    ref={(el) => (tabRefs.current[idx] = el)}
                    role="tab"
                    id={`capability-tab-${cap.id}`}
                    aria-selected={isActive}
                    aria-controls={`capability-panel-${cap.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`capability-nav-button ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  >
                    <div className={`nav-icon-container ${isActive ? 'active-icon' : ''}`}>
                      <IconComponent size={20} />
                    </div>

                    <div className="nav-button-text">
                      <div className="nav-button-header">
                        <span className="nav-button-title">{cap.title}</span>
                      </div>
                      <span className="nav-button-badge">{cap.badge}</span>
                    </div>

                    <div className="nav-active-indicator">
                      <ChevronRight size={18} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Summary Card at bottom of nav */}
            <div className="nav-summary-box">
              <div className="summary-box-icon">
                <BadgeCheck size={18} />
              </div>
              <div className="summary-box-text">
                <strong>Android & Mobile First</strong>
                <p>Designed for touchscreens, handheld POS terminals & smartphones.</p>
              </div>
            </div>
          </nav>

          {/* Main Feature Presentation Panel */}
          <main 
            className="capability-detail-panel" 
            role="tabpanel"
            id={`capability-panel-${currentCap.id}`}
            aria-labelledby={`capability-tab-${currentCap.id}`}
          >
            {/* Top Feature Banner */}
            <div className="feature-hero-banner">
              <div className="feature-hero-badge-row">
                <div className="feature-category-badge">
                  <ActiveIcon size={14} />
                  <span>{currentCap.badge}</span>
                </div>
                <span className="feature-number-pill">Feature 0{activeTab + 1} of 06</span>
              </div>

              <h3 className="feature-hero-title">{currentCap.title}</h3>
              <p className="feature-hero-tagline">{currentCap.tagline}</p>
              <p className="feature-hero-desc">{currentCap.description}</p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="feature-highlights-section">
              <h4 className="subpanel-section-title">
                <Sparkles size={16} />
                <span>Key Feature Highlights</span>
              </h4>

              <div className="feature-highlights-grid">
                {currentCap.highlights.map((highlight, hIdx) => {
                  const HIcon = highlight.icon;
                  return (
                    <div key={hIdx} className="feature-highlight-card">
                      <div className="highlight-icon-wrap">
                        <HIcon size={20} />
                      </div>
                      <h5 className="highlight-title">{highlight.title}</h5>
                      <p className="highlight-desc">{highlight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Operational Specifications Grid */}
            <div className="feature-specs-section">
              <h4 className="subpanel-section-title">
                <SlidersHorizontal size={16} />
                <span>Operational Specifications</span>
              </h4>

              <div className="feature-specs-grid">
                {currentCap.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="feature-spec-card">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                    <span className="spec-detail">{spec.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Capabilities Tag Matrix */}
            <div className="feature-capabilities-list-section">
              <h4 className="subpanel-section-title">
                <BadgeCheck size={16} />
                <span>Included Capabilities</span>
              </h4>

              <div className="capabilities-tags-grid">
                {currentCap.capabilitiesList.map((item, cIdx) => (
                  <div key={cIdx} className="capability-tag-item">
                    <Check size={14} className="tag-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact Footer Banner */}
            <div className="feature-impact-banner">
              <div className="impact-stat-badge">
                <span className="impact-stat-number">{currentCap.businessImpact.metric}</span>
                <span className="impact-stat-label">{currentCap.businessImpact.label}</span>
              </div>
              <div className="impact-text-content">
                <div className="impact-heading">
                  <TrendingUp size={16} />
                  <span>Business Impact</span>
                </div>
                <p className="impact-description">{currentCap.businessImpact.description}</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
