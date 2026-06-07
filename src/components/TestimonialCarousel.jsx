import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../assets/siteData.js';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const stars = useMemo(() => Array.from({ length: active.rating }, (_, itemIndex) => itemIndex), [active.rating]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, []);

  const move = (direction) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-carousel" aria-live="polite">
      <button className="icon-btn" type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
        <ChevronLeft size={20} />
      </button>
      <article className="testimonial-slide">
        <div className="stars" aria-label={`${active.rating} star rating`}>
          {stars.map((star) => <Star key={star} size={18} fill="currentColor" />)}
        </div>
        <blockquote>{active.quote}</blockquote>
        <div>
          <strong>{active.name}</strong>
          <span>{active.role}</span>
        </div>
      </article>
      <button className="icon-btn" type="button" onClick={() => move(1)} aria-label="Next testimonial">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
