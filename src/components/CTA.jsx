import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Lead generation CTA</p>
          <h2>Ready to turn your digital presence into a growth channel?</h2>
          <p>Get a practical roadmap for your website, SEO, ads, content, and conversion flow.</p>
        </div>
        <Link className="btn btn-light" to="/contact">
          Request a Free Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
