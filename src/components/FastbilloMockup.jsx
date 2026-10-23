import { useState, useRef } from 'react';
import { 
  TrendingUp, 
  ChevronDown
} from 'lucide-react';

export default function FastbilloMockup({ 
  imageSrc = '/products/fastbillo-app-screen.jpg',
  alt = 'FASTBILLO Android POS Mobile App Interface'
}) {
  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollTop > 60);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

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
            <span>Instant reconciliation</span>
          </div>
        </div>

        {/* Smartphone Frame */}
        <div className="mockup-device-phone">
          {/* Top Hardware Bezel Details */}
          <div className="device-speaker-slit" />

          {/* Device Screen displaying the real FastBillo mobile app */}
          <div className="device-screen device-screen-app">
            <div 
              className="device-screen-scroll-container" 
              ref={scrollRef}
              onScroll={handleScroll}
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
                title="Scroll to view full app"
                aria-label="Scroll to view full app"
              >
                <span>Scroll to explore</span>
                <ChevronDown size={13} className="bounce-arrow" />
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
                <ChevronDown size={13} style={{ transform: 'rotate(180deg)' }} />
              </button>
            )}
          </div>

          {/* Device Hardware Home Indicator */}
          <div className="device-home-pill" />
        </div>
      </div>
    </div>
  );
}
