import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { company } from '../assets/siteData.js';

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="floating-actions">
      <a
        className="whatsapp-float"
        href={`https://wa.me/${company.whatsapp}?text=Hi%20VJ%20Enterprises%2C%20I%20need%20help%20with%20digital%20services.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <button
        className={`back-top ${visible ? 'is-visible' : ''}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={21} />
      </button>
    </div>
  );
}
