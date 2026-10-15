import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company, services, socialLinks } from '../assets/siteData.js';

const baseUrl = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <section className="footer-brand" aria-label="Company information">
          <Link className="brand" to="/" aria-label="VJ Enterprises Digital Solutions">
            <img 
              className="brand-logo" 
              src={`${baseUrl}vj-enterprises-logo.png`} 
              width="48" 
              height="48" 
              alt="VJ Enterprises Logo" 
            />
            <div className="brand-text">
              <div className="brand-name">
                <span className="brand-name-top">VJ ENTERPRISES</span>
                <span className="brand-name-bottom">DIGITAL SOLUTIONS</span>
              </div>
              <span className="brand-tagline">Grow Digitally, Grow Confidently</span>
            </div>
          </Link>
          <p className="footer-tagline-text">{company.tagline}</p>
          <div className="social-list" aria-label="Social media profiles">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </section>

        <section>
          <h2>Navigation</h2>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products/fastbillo">FASTBILLO POS</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </section>

        <section>
          <h2>Core Services</h2>
          <ul className="footer-list">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}><Link to="/services">{service.title}</Link></li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Contact & Office</h2>
          <ul className="footer-list contact-list">
            <li><Mail size={16} />&nbsp;<a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><Phone size={16} />&nbsp;<a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></li>
            <li><MapPin size={16} />&nbsp;<span>{company.address}</span></li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom container">
        <span>Copyright &copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <div className="footer-legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="legal-sep">&bull;</span>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <span className="legal-sep">&bull;</span>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
