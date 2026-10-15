import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { navLinks } from '../assets/siteData.js';
import { trackContactClick } from '../utils/analytics.js';

const baseUrl = import.meta.env.BASE_URL;

export default function Navbar({ onGetProposalClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Handle sticky scroll-state transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    trackContactClick('consultation_modal', 'navbar');
    if (onGetProposalClick) {
      onGetProposalClick();
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="navbar container" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="VJ Enterprises Digital Solutions Home">
          <img 
            className="brand-logo" 
            src={`${baseUrl}vj-enterprises-logo.png`} 
            width="50" 
            height="50" 
            alt="VJ Enterprises Logo" 
          />
          <div className="brand-text">
            <div className="brand-name">
              <span>VJ ENTERPRISES</span>
              <span>DIGITAL SOLUTIONS</span>
            </div>
            <span className="brand-tagline">Grow Digitally, Grow Confidently</span>
          </div>
        </Link>

        {/* Desktop & Mobile Navigation Panel */}
        <div className={`nav-panel ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => {
            if (link.subLinks) {
              return (
                <div 
                  key={link.to} 
                  className={`nav-item-dropdown ${productsDropdownOpen ? 'dropdown-active' : ''}`}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <div className="nav-dropdown-trigger">
                    <NavLink 
                      className={({ isActive }) => `nav-link nav-link-featured ${isActive ? 'active' : ''}`}
                      to={link.to}
                    >
                      <span>{link.label}</span>
                      {link.badge && <span className="nav-pill-badge">{link.badge}</span>}
                    </NavLink>
                    <button 
                      type="button" 
                      className="dropdown-arrow-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setProductsDropdownOpen(!productsDropdownOpen);
                      }}
                      aria-expanded={productsDropdownOpen}
                      aria-label="Toggle products menu"
                    >
                      <ChevronDown size={14} className={`dropdown-icon ${productsDropdownOpen ? 'rotated' : ''}`} />
                    </button>
                  </div>

                  {/* Dropdown Menu */}
                  <div className={`nav-dropdown-menu ${productsDropdownOpen ? 'show' : ''}`}>
                    {link.subLinks.map((sub) => (
                      <NavLink
                        key={sub.to}
                        to={sub.to}
                        className={({ isActive }) => `dropdown-item ${isActive ? 'is-current' : ''}`}
                        onClick={() => {
                          setOpen(false);
                          setProductsDropdownOpen(false);
                        }}
                      >
                        <div className="dropdown-item-text">
                          <strong>{sub.label}</strong>
                          <span>{sub.description}</span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink 
                key={link.to} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to={link.to}
              >
                {link.label}
              </NavLink>
            );
          })}

          <button 
            type="button" 
            className="btn btn-small btn-primary nav-cta-btn" 
            onClick={handleConsultationClick}
          >
            <Sparkles size={15} />
            <span>Get a Free Consultation</span>
          </button>
        </div>

        <div className="nav-actions">
          <button 
            className="icon-btn menu-btn" 
            type="button" 
            onClick={() => setOpen((value) => !value)} 
            aria-label="Toggle menu" 
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
