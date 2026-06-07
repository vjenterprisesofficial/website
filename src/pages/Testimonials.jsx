import { Star } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import CTA from '../components/CTA.jsx';
import { testimonials } from '../assets/siteData.js';

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read customer reviews and star ratings for VJ Enterprises Digital Solutions digital agency work."
        path="/testimonials"
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Testimonials</p>
          <h1>Clients value our clear communication, polished execution, and practical growth mindset.</h1>
          <p>Browse customer reviews and use the carousel slider to explore more feedback.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Carousel Slider" title="Featured customer review" align="center" />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Customer Reviews" title="What businesses say after working with us" align="center" />
          <div className="review-grid">
            {testimonials.map((review) => (
              <article key={review.name} className="review-card">
                <div className="stars">
                  {Array.from({ length: review.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
                </div>
                <p>{review.quote}</p>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
