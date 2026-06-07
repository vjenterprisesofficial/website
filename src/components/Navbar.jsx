import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { company, navLinks } from '../assets/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="navbar container" aria-label="Primary navigation">
        <Link className="brand" to="/">
          <img className="brand-logo" src="/vj-enterprises-logo.png" width="50" height="50" alt="" />
          <span>{company.name}</span>
        </Link>

        <div className={`nav-panel ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink key={link.to} className="nav-link" to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <Link className="btn btn-small btn-primary" to="/contact">Get Proposal</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-btn menu-btn" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
