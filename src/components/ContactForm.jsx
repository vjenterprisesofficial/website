import { useState } from 'react';
import { services } from '../assets/siteData.js';
import { submitContactForm } from '../api/contactService.js';

export default function ContactForm({ compact = false }) {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMessage('');
    setResponseType('');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value
    };

    const result = await submitContactForm(formData);

    if (result.success) {
      setResponseType('success');
      setResponseMessage(
        'Thank you! Your enquiry has been submitted successfully.'
      );

      e.target.reset();
    } else {
      setResponseType('error');
      setResponseMessage(
        result.error || 'Unable to submit enquiry.'
      );
    }

    setLoading(false);
  };

  return (
    <form
      className={`contact-form ${compact ? 'compact' : ''}`}
      onSubmit={handleSubmit}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </label>

      <label>
        Phone
        <input
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          required
        />
      </label>

      <label>
        Service Required
        <select
          name="service"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>

          {services.map((service) => (
            <option
              key={service.slug}
              value={service.title}
            >
              {service.title}
            </option>
          ))}
        </select>
      </label>

      <label className="full">
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your goals, timeline and budget."
          required
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary full"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>

      {responseMessage && (
        <div
          style={{
            marginTop: '15px',
            padding: '12px',
            borderRadius: '8px',
            background:
              responseType === 'success'
                ? '#d4edda'
                : '#f8d7da',
            color:
              responseType === 'success'
                ? '#155724'
                : '#721c24'
          }}
        >
          {responseMessage}
        </div>
      )}
    </form>
  );
}