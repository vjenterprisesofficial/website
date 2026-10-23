import { useEffect } from 'react';
import { X, Smartphone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../assets/siteData.js';
import { trackWhatsAppClick } from '../utils/analytics.js';

export default function ApkNoticeModal({ isOpen, onClose, productName = 'FASTBILLO' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div 
        className="modal-card" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="apk-modal-title"
        style={{ maxWidth: '480px', textAlign: 'center' }}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(228, 66, 45, 0.1)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px'
        }}>
          <Smartphone size={32} />
        </div>

        <h2 id="apk-modal-title" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
          {productName} APK In Staging
        </h2>

        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
          The direct Android APK package is in final rollout. You can receive the verified APK installation package directly via WhatsApp or request direct early access.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href={`https://wa.me/${company.whatsapp}?text=Hi%20VJ%20Enterprises%2C%20I%20would%20like%20to%20request%20the%20${encodeURIComponent(productName)}%20Android%20APK.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              trackWhatsAppClick('apk_modal');
              onClose();
            }}
          >
            <MessageCircle size={18} />
            <span>Request Direct on WhatsApp</span>
          </a>

          <Link
            to="/contact?product=fastbillo"
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={onClose}
          >
            <Mail size={18} />
            <span>Request via Contact Form</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
