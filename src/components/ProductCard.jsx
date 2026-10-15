import { Link } from 'react-router-dom';
import { Download, ArrowRight, Smartphone, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { trackProductCtaClick, trackApkDownloadClick } from '../utils/analytics.js';

export default function ProductCard({ product, showFullDetails = false }) {
  if (!product) return null;

  const hasDownload = Boolean(product.downloadUrl && product.downloadUrl.trim() !== "");

  const handleDownloadClick = (e) => {
    trackApkDownloadClick(product.id, product.version, hasDownload);
    if (!hasDownload) {
      e.preventDefault();
      // Informative user feedback without broken link
      alert(`${product.name} Android APK is currently in final rollout. You can request direct early access via WhatsApp or our Contact form!`);
    }
  };

  const handleExploreClick = () => {
    trackProductCtaClick(product.id, 'explore');
  };

  return (
    <article className="product-card reveal-card">
      <div className="product-card-top">
        <div className="product-badge-row">
          <span className="product-category-tag">{product.category}</span>
          <span className={`product-status-pill status-${product.status}`}>
            <span className="status-pulse-dot" />
            {product.statusLabel || (product.status === 'available' ? 'Available' : 'Coming Soon')}
          </span>
        </div>

        <div className="product-identity">
          <div className="product-icon-frame">
            <img 
              src={product.icon} 
              alt={`${product.name} icon`} 
              width="56" 
              height="56"
              onError={(e) => {
                // Safe visual fallback if image is missing
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="product-icon-fallback" style={{ display: 'none' }}>
              <Smartphone size={28} />
            </div>
          </div>
          <div className="product-title-group">
            <h3 className="product-name">{product.name}</h3>
            {product.tagline && <span className="product-tagline">{product.tagline}</span>}
          </div>
        </div>

        <p className="product-short-desc">{product.shortDescription}</p>

        {showFullDetails && product.benefits && (
          <ul className="product-card-benefits">
            {product.benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx}>
                <CheckCircle2 size={15} />
                <span>{benefit.title}</span>
              </li>
            ))}
          </ul>
        )}

        {product.platform && product.platform.length > 0 && (
          <div className="product-platform-specs">
            <span className="spec-label">Platform:</span>
            {product.platform.map((p, idx) => (
              <span key={idx} className="spec-tag">{p}</span>
            ))}
            {product.version && <span className="spec-tag">v{product.version}</span>}
          </div>
        )}
      </div>

      <div className="product-card-actions">
        <Link 
          to={product.detailPath || `/products/${product.slug}`} 
          className="btn btn-primary product-primary-btn"
          onClick={handleExploreClick}
        >
          <span>Explore {product.name}</span>
          <ArrowRight size={16} />
        </Link>

        {product.status === 'available' && (
          hasDownload ? (
            <a 
              href={product.downloadUrl} 
              className="btn btn-secondary product-download-btn"
              download
              onClick={handleDownloadClick}
              title={`Download ${product.name} Android APK`}
            >
              <Download size={16} />
              <span>Download APK</span>
            </a>
          ) : (
            <button 
              type="button" 
              className="btn btn-secondary product-download-btn is-coming-soon"
              onClick={handleDownloadClick}
              title="APK Release in progress. Click to request early build."
            >
              <Download size={16} />
              <span>APK: In Rollout</span>
            </button>
          )
        )}
      </div>
    </article>
  );
}
