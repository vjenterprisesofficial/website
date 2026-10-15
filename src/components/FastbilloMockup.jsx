import { useState } from 'react';
import { 
  Receipt, 
  Package, 
  TrendingUp, 
  CheckCircle2, 
  Search, 
  Printer, 
  Smartphone,
  Share2,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function FastbilloMockup({ activeTab = 'billing', interactive = true }) {
  const [currentView, setCurrentView] = useState(activeTab);

  return (
    <div className="fastbillo-mockup-wrapper">
      {/* 3D Perspective Device Stage */}
      <div className="device-stage">
        {/* Floating Context Badge 1 */}
        <div className="floating-badge badge-top-left">
          <span className="badge-dot" />
          <div className="badge-text">
            <strong>Fast Touch POS</strong>
            <span>Sub-second billing</span>
          </div>
        </div>

        {/* Floating Context Badge 2 */}
        <div className="floating-badge badge-bottom-right">
          <TrendingUp size={16} className="badge-icon-accent" />
          <div className="badge-text">
            <strong>Real-time Sales</strong>
            <span>Instant day reconciliation</span>
          </div>
        </div>

        {/* Smartphone Frame */}
        <div className="mockup-device-phone">
          {/* Hardware bezel details */}
          <div className="device-speaker" />
          <div className="device-camera" />

          {/* Device Screen */}
          <div className="device-screen">
            {/* Top Status Bar */}
            <div className="device-status-bar">
              <span className="status-time">09:41 AM</span>
              <div className="status-icons">
                <span className="signal-bars">●●●</span>
                <span className="battery-icon">100%</span>
              </div>
            </div>

            {/* App Header */}
            <div className="app-header">
              <div className="app-brand-pill">
                <div className="app-mini-icon">
                  <Receipt size={14} />
                </div>
                <div>
                  <h4 className="app-title">FASTBILLO</h4>
                  <span className="app-subtitle">Terminal #01 &bull; Active</span>
                </div>
              </div>
              <span className="app-status-badge">ONLINE</span>
            </div>

            {/* In-App Tab Switcher */}
            {interactive && (
              <div className="app-nav-tabs" role="tablist">
                <button
                  type="button"
                  className={`app-tab-btn ${currentView === 'billing' ? 'is-active' : ''}`}
                  onClick={() => setCurrentView('billing')}
                  aria-selected={currentView === 'billing'}
                >
                  <Receipt size={14} /> POS Billing
                </button>
                <button
                  type="button"
                  className={`app-tab-btn ${currentView === 'inventory' ? 'is-active' : ''}`}
                  onClick={() => setCurrentView('inventory')}
                  aria-selected={currentView === 'inventory'}
                >
                  <Package size={14} /> Stock
                </button>
                <button
                  type="button"
                  className={`app-tab-btn ${currentView === 'reports' ? 'is-active' : ''}`}
                  onClick={() => setCurrentView('reports')}
                  aria-selected={currentView === 'reports'}
                >
                  <TrendingUp size={14} /> Reports
                </button>
              </div>
            )}

            {/* Screen Content View: POS Billing */}
            {currentView === 'billing' && (
              <div className="app-body billing-view">
                <div className="app-search-bar">
                  <Search size={14} />
                  <span>Search item or barcode scan...</span>
                </div>

                <div className="order-items-card">
                  <div className="order-items-header">
                    <span>Current Order (#1042)</span>
                    <span className="badge-count">3 Items</span>
                  </div>

                  <div className="order-item-row">
                    <div>
                      <strong>Cotton Polo T-Shirt</strong>
                      <span>SKU: CLO-092 &bull; Qty: 2</span>
                    </div>
                    <strong>₹1,200</strong>
                  </div>

                  <div className="order-item-row">
                    <div>
                      <strong>Thermal Water Bottle</strong>
                      <span>SKU: ACC-104 &bull; Qty: 1</span>
                    </div>
                    <strong>₹450</strong>
                  </div>

                  <div className="order-item-row">
                    <div>
                      <strong>Canvas Carry Bag</strong>
                      <span>SKU: BAG-003 &bull; Qty: 1</span>
                    </div>
                    <strong>₹190</strong>
                  </div>
                </div>

                <div className="bill-summary-card">
                  <div className="summary-line">
                    <span>Subtotal</span>
                    <span>₹1,840.00</span>
                  </div>
                  <div className="summary-line">
                    <span>GST (5%)</span>
                    <span>₹92.00</span>
                  </div>
                  <div className="summary-line total-line">
                    <span>Net Payable</span>
                    <span className="total-amount">₹1,932.00</span>
                  </div>
                </div>

                <div className="checkout-action-row">
                  <button type="button" className="btn-app-action btn-print">
                    <Printer size={14} /> Print Bill
                  </button>
                  <button type="button" className="btn-app-action btn-charge">
                    <CheckCircle2 size={14} /> Pay & Close
                  </button>
                </div>
              </div>
            )}

            {/* Screen Content View: Inventory */}
            {currentView === 'inventory' && (
              <div className="app-body inventory-view">
                <div className="inventory-stats-strip">
                  <div className="stat-pill">
                    <strong>148</strong>
                    <span>Total SKUs</span>
                  </div>
                  <div className="stat-pill">
                    <strong>3</strong>
                    <span className="warning-text">Low Stock</span>
                  </div>
                  <div className="stat-pill">
                    <strong>8</strong>
                    <span>Categories</span>
                  </div>
                </div>

                <div className="stock-list">
                  <div className="stock-item-card">
                    <div className="stock-info">
                      <strong>Classic Denim Jacket</strong>
                      <span>Category: Apparel &bull; ₹1,850</span>
                    </div>
                    <span className="stock-badge in-stock">24 In Stock</span>
                  </div>

                  <div className="stock-item-card">
                    <div className="stock-info">
                      <strong>Wireless Bluetooth Speaker</strong>
                      <span>Category: Electronics &bull; ₹2,100</span>
                    </div>
                    <span className="stock-badge in-stock">18 In Stock</span>
                  </div>

                  <div className="stock-item-card">
                    <div className="stock-info">
                      <strong>Organic Green Tea (250g)</strong>
                      <span>Category: Grocery &bull; ₹320</span>
                    </div>
                    <span className="stock-badge low-stock">Only 2 Left</span>
                  </div>
                </div>
              </div>
            )}

            {/* Screen Content View: Reports */}
            {currentView === 'reports' && (
              <div className="app-body reports-view">
                <div className="report-summary-card">
                  <span>Today's Total Sales</span>
                  <h3 className="sales-figure">₹34,820.00</h3>
                  <div className="sales-trend">
                    <TrendingUp size={14} />
                    <span>42 Bills Generated &bull; Average ₹829</span>
                  </div>
                </div>

                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <span>UPI / QR Payments</span>
                    <strong>₹24,180 (69%)</strong>
                  </div>
                  <div className="breakdown-item">
                    <span>Cash Transactions</span>
                    <strong>₹8,640 (25%)</strong>
                  </div>
                  <div className="breakdown-item">
                    <span>Card / Other</span>
                    <strong>₹2,000 (6%)</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Device Home Bar */}
            <div className="device-home-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
