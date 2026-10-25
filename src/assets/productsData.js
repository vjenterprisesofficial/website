/**
 * Centralized Product Data Architecture
 * Source of truth for software and digital products offered by VJ Enterprises Digital Solutions.
 * Easily extensible for future products.
 */

export const products = [
  {
    id: "fastbillo",
    name: "FASTBILLO",
    slug: "fastbillo",
    tagline: "Smart Billing & Business Management Platform",
    category: "Business Software",
    shortDescription: "Smart billing and business management software designed to help businesses simplify billing and everyday operations.",
    description: "FASTBILLO is a business billing and POS platform designed to help business owners manage everyday business operations through a streamlined digital experience.",
    icon: "/products/fastbillo-icon.svg",
    image: "/products/fastbillo-app-screen.jpg",
    screenshots: [
      {
        id: "billing",
        title: "Fast Point-of-Sale Billing",
        desc: "Instant barcode and quick-touch item search, customizable tax calculation, and one-tap invoice generation.",
        mockupType: "billing"
      },
      {
        id: "inventory",
        title: "Inventory & Stock Control",
        desc: "Real-time stock tracking, low inventory notifications, and centralized product catalog management.",
        mockupType: "inventory"
      },
      {
        id: "reports",
        title: "Business Reports & Analytics",
        desc: "Daily sales summaries, transaction history, and revenue trend visual metrics.",
        mockupType: "reports"
      }
    ],
    status: "available", // "available" | "coming_soon"
    statusLabel: "Available on Android",
    featured: true,
    detailPath: "/products/fastbillo",
    // Configurable Google Play Store URL
    googlePlayUrl: "", // Set to your Google Play Store URL when live
    // Configurable APK download URL.
    // If empty or file not available, the UI gracefully renders a disabled "Coming Soon" or notification state.
    downloadUrl: "", // Set to "/downloads/fastbillo.apk" when uploaded and ready
    releaseDate: "2026",
    benefits: [
      {
        title: "Simplified Billing Workflows",
        description: "Create GST and non-GST invoices in seconds with pre-saved catalogs, fast search, and multiple tender types."
      },
      {
        title: "Product & Inventory Management",
        description: "Organize items by categories, track real-time stock levels, and prevent out-of-stock billing delays."
      },
      {
        title: "Business Transaction Management",
        description: "Log daily sales, manage customer balances, record payment receipts, and audit day-end cash registers."
      },
      {
        title: "Sales Reporting & Metrics",
        description: "Access instant insights into top-selling products, daily revenues, and gross profitability directly on your device."
      },
      {
        title: "Day-to-Day Operational Efficiency",
        description: "Designed for business owners and retail staff to operate with minimal training and zero unnecessary friction."
      }
    ],
    features: [
      {
        title: "Quick-Touch POS",
        detail: "Speed up retail queues with an intuitive point-of-sale layout designed for touchscreens and mobile devices."
      },
      {
        title: "Thermal & Digital Invoicing",
        detail: "Print receipts on standard Bluetooth thermal printers or share PDF invoices directly with customers via WhatsApp."
      },
      {
        title: "Product Catalog Management",
        detail: "Easily add products with unit prices, barcodes, item codes, tax rates, and categorization."
      },
      {
        title: "Customer Records",
        detail: "Keep customer profiles, purchase history, and outstanding ledger balances organized in one place."
      },
      {
        title: "End-of-Day Register Reports",
        detail: "Close your register with full cash reconciliation and daily transaction summaries."
      },
      {
        title: "Multi-Industry Flexibility",
        detail: "Customized presets for grocery stores, retail boutiques, electronics outlets, service desks, and general trade."
      }
    ],
    useCases: [
      {
        title: "Retail Stores & Boutiques",
        description: "Fast customer checkout, barcode scan support, and instant digital receipts for modern retail counters."
      },
      {
        title: "Grocery & Departmental Outlets",
        description: "Manage large product catalogs, high-speed item additions, and accurate stock counts without delays."
      },
      {
        title: "Electronics & Hardware Shops",
        description: "Track item serial numbers, item variations, customer ledgers, and formal tax invoices."
      },
      {
        title: "Wholesale & Distribution Counters",
        description: "Generate customer bills, manage credit limits, track outstanding balances, and export daily ledgers."
      }
    ],
    pricing: [
      {
        id: "starter",
        name: "Starter",
        tagline: "For small shops, cafes & single-counter merchants",
        duration: "Quarterly Plan",
        price: "₹999",
        originalPrice: "₹1,499",
        period: "/ 3 Months",
        featured: false,
        features: [
          "1 Mobile or Tablet Terminal",
          "Fast POS Billing & Barcode Scanning",
          "WhatsApp & SMS Digital Receipts",
          "Up to 500 Product Catalog Items",
          "Daily Sales & Day-End Cash Summary",
          "Direct WhatsApp Support"
        ],
        ctaText: "Get Starter Plan",
        ctaPlan: "Starter (₹999 / 3 Months)"
      },
      {
        id: "annual",
        name: "Professional",
        tagline: "Most popular for growing retail & busy grocery stores",
        duration: "Annual Plan",
        price: "₹2,499",
        originalPrice: "₹3,999",
        period: "/ 1 Year",
        badge: "Most Popular",
        featured: true,
        features: [
          "Everything in Starter, plus:",
          "Unlimited Invoices & Receipts",
          "Unlimited Products & Item Barcodes",
          "Live Inventory & Low Stock Alerts",
          "Bluetooth Thermal Printer (58mm/80mm)",
          "Customer Ledger & Credit (Udhar) Tracking",
          "Priority WhatsApp Support & Free Updates"
        ],
        ctaText: "Choose Professional",
        ctaPlan: "Professional (₹2,499 / Year)"
      },
      {
        id: "lifetime",
        name: "Lifetime License",
        tagline: "One-time payment for permanent peace of mind",
        duration: "One-Time Payment",
        price: "₹5,999",
        originalPrice: "₹8,999",
        period: "Lifetime Validity",
        badge: "Best Value",
        featured: false,
        features: [
          "One-time payment, no recurring fees",
          "All Professional Plan Features",
          "Multi-Counter & Multi-Device Access",
          "Custom Invoice Branding (Store Logo & GST)",
          "Cloud Data Backup & Instant Restore",
          "VIP Onboarding & Dedicated Support",
          "All Future Feature Updates Included"
        ],
        ctaText: "Get Lifetime License",
        ctaPlan: "Lifetime License (₹5,999)"
      }
    ],
    faqs: [
      {
        question: "What is FASTBILLO?",
        answer: "FASTBILLO is a business billing, POS, and everyday management platform developed by VJ Enterprises Digital Solutions. It enables business owners to manage fast checkout billing, inventory tracking, customer accounts, and daily sales reports from an Android application."
      },
      {
        question: "Which types of businesses can use FASTBILLO?",
        answer: "FASTBILLO is built as a flexible, general-purpose business platform suitable for retail shops, grocery outlets, apparel boutiques, electronics stores, service centers, and general merchant counters."
      },
      {
        question: "How can I download the Android application?",
        answer: "You can download the FASTBILLO Android APK directly from our official Products page or request early access by reaching out to our team. Once downloaded, you can install the APK on any compatible Android smartphone or tablet."
      },
      {
        question: "How do I install the APK on my Android device?",
        answer: "After downloading the APK file on your Android device: 1. Tap on the downloaded file from your notifications or Downloads folder. 2. If Android displays an 'Install unknown apps' security prompt, tap Settings and toggle 'Allow from this source'. 3. Tap 'Install' and wait for the installation to finish. 4. Open FASTBILLO and begin setting up your business profile."
      },
      {
        question: "Where can I find product information and support?",
        answer: "Official product guides, release updates, and dedicated technical support are provided directly by VJ Enterprises Digital Solutions. You can contact our support desk via email at contact@vjenterprisesdigitalsolutions.com or through WhatsApp at +91 7447411269."
      }
    ]
  }
];

export function getAllProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase()) || null;
}
