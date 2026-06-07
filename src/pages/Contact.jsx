import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../assets/siteData.js';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact VJ Enterprises Digital Solutions for websites, web applications, SEO, digital marketing, social media, ads, branding, video editing, and consulting."
        path="/contact"
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Contact Us</p>
          <h1>Let us understand your goals and recommend the right digital next step.</h1>
          <p>Send an enquiry, call, email, or start a WhatsApp conversation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeader eyebrow="Lead Form" title="Request a project discussion" description="The form is configured for Web3Forms and does not require a backend." />
            <ContactForm />
          </div>

          <aside className="contact-aside">
            <article>
              <Mail size={22} />
              <h3>Email</h3>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </article>
            <article>
              <Phone size={22} />
              <h3>Phone</h3>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            </article>
            <article>
              <MapPin size={22} />
              <h3>Address</h3>
              <p>{company.address}</p>
            </article>
            <a className="btn btn-primary" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Location" title="Google Map Placeholder" align="center" />
          <div className="map-placeholder" role="img" aria-label="Google map placeholder for Bengaluru, Karnataka">
            <MapPin size={42} />
            <strong>Bengaluru, Karnataka, India</strong>
            <span>Replace this placeholder with your Google Maps embed iframe before launch.</span>
          </div>
        </div>
      </section>
    </>
  );
}
