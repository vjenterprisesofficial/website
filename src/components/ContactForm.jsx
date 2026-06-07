import { services } from '../assets/siteData.js';

export default function ContactForm({ compact = false }) {
  return (
    <form className={`contact-form ${compact ? 'compact' : ''}`} action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY" />
      <input type="hidden" name="subject" value="New lead from VJ Enterprises Digital Solutions website" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

      <label>
        Name
        <input name="name" type="text" placeholder="Your full name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="+91 98765 43210" required />
      </label>
      <label>
        Service Required
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>{service.title}</option>
          ))}
        </select>
      </label>
      <label className="full">
        Message
        <textarea name="message" placeholder="Tell us about your goals, timeline, and budget range." rows="5" required />
      </label>
      <button className="btn btn-primary full" type="submit">Send Enquiry</button>
    </form>
  );
}
