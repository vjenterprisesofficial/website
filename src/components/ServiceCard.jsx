import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card reveal">
      <div className="icon-wrap"><Icon size={25} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="benefit-list">
        {service.benefits.map((benefit) => (
          <li key={benefit}><Check size={16} />{benefit}</li>
        ))}
      </ul>
      <Link className="text-link" to="/contact">
        {service.cta}<ArrowRight size={17} />
      </Link>
    </article>
  );
}
