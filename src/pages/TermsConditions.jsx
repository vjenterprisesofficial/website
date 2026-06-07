import SEO from '../components/SEO.jsx';
import { company } from '../assets/siteData.js';

export default function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for using the VJ Enterprises Digital Solutions website."
        path="/terms-and-conditions"
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Terms & Conditions</p>
          <h1>Website terms for visitors and prospective clients.</h1>
          <p>Last updated: June 7, 2026</p>
        </div>
      </section>
      <section className="section legal">
        <div className="container narrow">
          <h2>Use of Website</h2>
          <p>This website provides general information about {company.name}, our services, and ways to contact us. You agree not to misuse the website or attempt to disrupt its operation.</p>
          <h2>Service Information</h2>
          <p>Service descriptions are informational. Project scope, timelines, deliverables, and pricing are confirmed separately through written proposals or agreements.</p>
          <h2>Intellectual Property</h2>
          <p>Website text, branding, layouts, and design assets are owned by or licensed to {company.name} unless otherwise stated.</p>
          <h2>External Links</h2>
          <p>Links to third-party platforms are provided for convenience. We are not responsible for their content, policies, or availability.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
