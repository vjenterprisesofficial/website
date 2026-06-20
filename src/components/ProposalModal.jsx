import { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';
import { services } from '../assets/siteData.js';
import { submitContactForm } from '../api/contactService.js';

export default function ProposalModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setMessage('');
      setSuccess(false);
      setError('');
      setLoading(false);
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service,
      message: message.trim(),
      formType: 'proposal_request',
      submittedAt: new Date().toISOString()
    };

    const result = await submitContactForm(formData);

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || 'Unable to submit your proposal request. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {success ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="success-icon" />
            </div>
            <h2>Request Submitted!</h2>
            <p>
              Thank you, <strong>{name}</strong>! Your request for a project proposal regarding{' '}
              <strong>{service}</strong> has been received.
            </p>
            <p className="success-note">
              Our strategy team will review your requirements and get back to you with a draft proposal or schedule a brief discovery call within 24 hours.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="eyebrow">Get Proposal</span>
              <h2>Request a Project Proposal</h2>
              <p>Tell us about your digital needs and project timeline.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {error && (
                <div className="modal-error-alert">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="proposal-name">Full Name</label>
                <input
                  id="proposal-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="proposal-email">Email Address</label>
                  <input
                    id="proposal-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="proposal-phone">Phone Number</label>
                  <input
                    id="proposal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="proposal-service">Service Required</label>
                <div className="input-with-icon">
                  <Briefcase size={18} className="input-icon" />
                  <select
                    id="proposal-service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{ paddingLeft: '38px' }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((srv) => (
                      <option key={srv.slug} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="proposal-message">Project Requirements & Timeline</label>
                <textarea
                  id="proposal-message"
                  required
                  rows="4"
                  placeholder="Describe your project, objectives, desired timeline and budget."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--text)',
                    background: 'rgba(255, 255, 255, 0.85)',
                    padding: '11px 12px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary full-width"
                disabled={loading}
              >
                {loading ? 'Submitting Request...' : 'Get Free Proposal'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
