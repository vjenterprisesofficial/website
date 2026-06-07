import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company, navLinks, services, socialLinks } from '../assets/siteData.js';

const baseUrl = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <section className="footer-brand" aria-label="Company information">
          <Link className="brand" to="/">
            <img className="brand-logo" src={`${baseUrl}vj-enterprises-logo.png`} width="50" height="50" alt="" />
            <div className="brand-text">
              <div className="brand-name">
                <span>VJ ENTERPRISES</span>
                <span>DIGITAL SOLUTIONS</span>
              </div>
              <span className="brand-tagline">Grow Digitally, Grow Confidently</span>
            </div>
          </Link>
          <p>{company.tagline}</p>
          <div className="social-list">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </section>

        <section>
          <h2>Quick Links</h2>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
            ))}
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </section>

        <section>
          <h2>Services</h2>
          <ul className="footer-list">
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}><Link to="/services">{service.title}</Link></li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <ul className="footer-list contact-list">
            <li><Mail size={17} /><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><Phone size={17} /><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></li>
            <li><MapPin size={17} /><span>{company.address}</span></li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom container">
        <span>Copyright &copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
