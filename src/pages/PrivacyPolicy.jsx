import SEO from '../components/SEO.jsx';
import { company } from '../assets/siteData.js';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for VJ Enterprises Digital Solutions website visitors and enquiry form users."
        path="/privacy-policy"
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Privacy Policy</p>
          <h1>How we handle website visitor and enquiry information.</h1>
          <p>Last updated: June 7, 2026</p>
        </div>
      </section>
      <section className="section legal">
        <div className="container narrow">
          <h2>Information We Collect</h2>
          <p>When you submit a contact form, we may collect your name, email address, phone number, selected service, and message so we can respond to your enquiry.</p>
          <h2>How We Use Information</h2>
          <p>We use submitted information to respond to enquiries, provide proposals, improve our services, and communicate relevant project updates.</p>
          <h2>Third-Party Services</h2>
          <p>The contact form is configured for Web3Forms. If analytics, advertising pixels, or embedded maps are added later, those providers may process limited technical data.</p>
          <h2>Data Retention</h2>
          <p>We retain enquiry information only as long as needed for communication, project delivery, compliance, and legitimate business records.</p>
          <h2>Your Choices</h2>
          <p>You can request correction or deletion of your information by emailing <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
