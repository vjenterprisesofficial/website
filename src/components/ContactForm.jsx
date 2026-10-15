import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { services } from '../assets/siteData.js';
import { products } from '../assets/productsData.js';
import { submitContactForm } from '../api/contactService.js';
import { trackLeadGenerated } from '../utils/analytics.js';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function ContactForm({ compact = false, preselectedInterest = '' }) {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    // Check if query param specifies product or service
    const productParam = searchParams.get('product');
    const serviceParam = searchParams.get('service');

    if (preselectedInterest) {
      setSelectedService(preselectedInterest);
    } else if (productParam) {
      const matched = products.find(p => p.slug.toLowerCase() === productParam.toLowerCase());
      if (matched) {
        setSelectedService(`Product: ${matched.name}`);
      } else {
        setSelectedService('Product: FASTBILLO');
      }
    } else if (serviceParam) {
      const matched = services.find(s => s.slug.toLowerCase() === serviceParam.toLowerCase());
      if (matched) {
        setSelectedService(matched.title);
      }
    }
  }, [searchParams, preselectedInterest]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMessage('');
    setResponseType('');

    const formElement = e.target;
    const formData = {
      name: formElement.name.value.trim(),
      email: formElement.email.value.trim(),
      phone: formElement.phone.value.trim(),
      service: formElement.service.value,
      message: formElement.message.value.trim()
    };

    const result = await submitContactForm(formData);

    if (result.success) {
      setResponseType('success');
      setResponseMessage('Thank you! Your enquiry has been received. Our team will contact you shortly.');
      trackLeadGenerated('contact_form', formData.service);
      formElement.reset();
      setSelectedService('');
    } else {
      setResponseType('error');
      setResponseMessage(result.error || 'Unable to submit enquiry right now. Please message us directly on WhatsApp.');
    }

    setLoading(false);
  };

  return (
    <form
      id="gtm-lead-form"
      className={`contact-form modern-form ${compact ? 'compact' : ''}`}
      onSubmit={handleSubmit}
      noValidate={false}
    >
      <div className="form-field-group">
        <label htmlFor="form-name">
          Full Name <span className="req-star">*</span>
        </label>
        <input
          id="form-name"
          type="text"
          name="name"
          placeholder="e.g. Rahul Sharma"
          required
          autoComplete="name"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="form-email">
          Business Email <span className="req-star">*</span>
        </label>
        <input
          id="form-email"
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="form-phone">
          Phone / WhatsApp Number <span className="req-star">*</span>
        </label>
        <input
          id="form-phone"
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          required
          autoComplete="tel"
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="form-service">
          Service or Product of Interest <span className="req-star">*</span>
        </label>
        <select
          id="form-service"
          name="service"
          required
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="" disabled>
            Select a service or product
          </option>

          <optgroup label="Software Products">
            {products.map((prod) => (
              <option key={prod.id} value={`Product: ${prod.name}`}>
                {prod.name} (Business Billing & POS)
              </option>
            ))}
            <option value="Product: Custom Software / App">
              Custom Product / Mobile App Development
            </option>
          </optgroup>

          <optgroup label="Agency IT & Marketing Services">
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="form-field-group full">
        <label htmlFor="form-message">
          Project Details / Requirements <span className="req-star">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          rows={compact ? 4 : 5}
          placeholder="Tell us about your business goals, required features, timeline, or current challenges."
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary full form-submit-btn"
        disabled={loading}
      >
        {loading ? (
          <span>Sending enquiry...</span>
        ) : (
          <>
            <Send size={16} />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>

      {responseMessage && (
        <div
          className={`form-feedback-alert ${responseType}`}
          role="alert"
          style={{
            marginTop: '15px',
            padding: '14px 16px',
            borderRadius: 'var(--radius)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: responseType === 'success' ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${responseType === 'success' ? '#bbf7d0' : '#fecaca'}`,
            color: responseType === 'success' ? '#166534' : '#991b1b',
            fontSize: '0.92rem',
            lineHeight: 1.45,
            gridColumn: '1 / -1'
          }}
        >
          {responseType === 'success' ? (
            <CheckCircle2 size={18} style={{ flexShrink: 0, color: '#16a34a' }} />
          ) : (
            <AlertCircle size={18} style={{ flexShrink: 0, color: '#dc2626' }} />
          )}
          <span>{responseMessage}</span>
        </div>
      )}
    </form>
  );
}