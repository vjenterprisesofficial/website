import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Pause, Play } from 'lucide-react';
import { testimonials } from '../assets/siteData.js';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[index];

  const stars = useMemo(() => Array.from({ length: active.rating }, (_, itemIndex) => itemIndex), [active.rating]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const move = (direction) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      className="testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client Testimonials"
    >
      <button 
        className="icon-btn" 
        type="button" 
        onClick={() => move(-1)} 
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>

      <article 
        className="testimonial-slide" 
        aria-roledescription="slide"
        aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
      >
        <div className="stars" aria-label={`${active.rating} star rating`}>
          {stars.map((star) => <Star key={star} size={18} fill="currentColor" />)}
        </div>
        <blockquote>{active.quote}</blockquote>
        <div>
          <strong>{active.name}</strong>
          <span>{active.role}</span>
        </div>
        
        {/* WCAG 2.2 SC 2.2.2 Pause/Play Mechanism */}
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <button
            type="button"
            className="icon-btn"
            style={{ width: '32px', height: '32px' }}
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play testimonial slideshow" : "Pause testimonial slideshow"}
            title={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '600' }}>
            {index + 1} / {testimonials.length}
          </span>
        </div>
      </article>

      <button 
        className="icon-btn" 
        type="button" 
        onClick={() => move(1)} 
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
