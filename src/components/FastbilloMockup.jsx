import { useState, useRef, useEffect } from 'react';
import { 
  TrendingUp, 
  ChevronDown,
  Receipt
} from 'lucide-react';

export default function FastbilloMockup({ 
  imageSrc = '/products/fastbillo-app-screen.jpg',
  alt = 'FASTBILLO mobile billing and business management app interface showing live sales overview, billing operations, and products',
  activeFeature = 'billing'
}) {
  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Synchronize scroll position when activeFeature changes
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (activeFeature === 'billing') {
      // Scroll to POS Operations (Create Bills, All Bills)
      container.scrollTo({ top: 320, behavior });
    } else if (activeFeature === 'products') {
      // Scroll to Inventory & Products (Update Inventory, Add Item)
      container.scrollTo({ top: 580, behavior });
    } else if (activeFeature === 'sales') {
      // Scroll to Top (Revenue, Total Bills, Menu Items)
      container.scrollTo({ top: 0, behavior });
    }
  }, [activeFeature]);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollTop > 80);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      scrollRef.current.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <div className="fastbillo-mockup-wrapper">
      {/* 3D Perspective Device Stage */}
      <div className="device-stage">
        {/* Floating Feature Card 1: Quick Billing */}
        <div 
          className="floating-badge badge-top-left" 
          aria-hidden="true"
        >
          <Receipt size={16} className="badge-icon-accent" />
          <div className="badge-text">
            <strong>Quick Billing</strong>
            <span>Create a customer bill.</span>
          </div>
        </div>

        {/* Floating Feature Card 2: Sales Overview */}
        <div 
          className="floating-badge badge-bottom-right" 
          aria-hidden="true"
        >
          <TrendingUp size={16} className="badge-icon-accent" />
          <div className="badge-text">
            <strong>Sales Overview</strong>
            <span>Review your sales.</span>
          </div>
        </div>

        {/* Smartphone Frame */}
        <div className="mockup-device-phone">
          {/* Top Hardware Bezel Details */}
          <div className="device-speaker-slit" aria-hidden="true" />

          {/* Device Screen displaying the real FastBillo mobile app */}
          <div className="device-screen device-screen-app">
            <div 
              className="device-screen-scroll-container" 
              ref={scrollRef}
              onScroll={handleScroll}
              tabIndex={0}
              role="region"
              aria-label="FASTBILLO app scrollable screen preview"
            >
              <img
                src={imageSrc}
                alt={alt}
                className="fastbillo-app-screenshot"
                loading="eager"
                draggable={false}
              />
            </div>

            {/* Interactive Scroll Helper Pill */}
            {!isScrolled ? (
              <button 
                type="button" 
                className="mockup-scroll-pill" 
                onClick={scrollToBottom}
                title="Scroll to explore full app"
                aria-label="Scroll to explore full app"
              >
                <span>Scroll to explore</span>
                <ChevronDown size={13} className="bounce-arrow" aria-hidden="true" />
              </button>
            ) : (
              <button 
                type="button" 
                className="mockup-scroll-pill pill-top" 
                onClick={scrollToTop}
                title="Back to top"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ChevronDown size={13} style={{ transform: 'rotate(180deg)' }} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Device Hardware Home Indicator */}
          <div className="device-home-pill" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
