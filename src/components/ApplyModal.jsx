import { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Info, FileText } from "lucide-react";
import { submitJobApplication } from "../api/contactService.js";

export default function ApplyModal({ isOpen, onClose, jobData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [applyType, setApplyType] = useState("job");
  const [post, setPost] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Sync state with selected job when modal opens
  useEffect(() => {
    if (isOpen && jobData) {
      setName("");
      setEmail("");
      setPhone("");
      setApplyType(jobData.cardType || "job");
      setPost(jobData.title || "");
      setResumeUrl("");
      setSuccess(false);
      setError("");
      setLoading(false);
    }
  }, [isOpen, jobData]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
    setError("");

    // Basic URL validation for Google Drive
    const trimmedUrl = resumeUrl.trim();
    if (!trimmedUrl.includes("drive.google.com") && !trimmedUrl.includes("docs.google.com")) {
      setError("Please paste a valid Google Drive sharing link.");
      setLoading(false);
      return;
    }

    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      applyType: applyType === "job" ? "Job" : "Internship",
      post: post.trim(),
      resumeUrl: trimmedUrl,
      formType: "job_application",
      submittedAt: new Date().toISOString()
    };

    const result = await submitJobApplication(formData);

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || "Unable to submit your application. Please try again later.");
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
            <h2>Application Submitted!</h2>
            <p>
              Thank you for applying, <strong>{name}</strong>! Your application for the{" "}
              <strong>{post}</strong> position (as a{" "}
              {applyType === "job" ? "Job" : "Internship"} applicant) has been received.
            </p>
            <p className="success-note">
              Our hiring team will review your resume and contact you soon if your profile matches our requirements.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="eyebrow">Apply Now</span>
              <h2>Join Our Team</h2>
              <p>Please fill out the form below to submit your application.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              {error && (
                <div className="modal-error-alert">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="modal-name">Full Name</label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-email">Email Address</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-type">Apply For</label>
                  <select
                    id="modal-type"
                    required
                    value={applyType}
                    onChange={(e) => setApplyType(e.target.value)}
                  >
                    <option value="job">Job</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="modal-post">Post / Position</label>
                  <input
                    id="modal-post"
                    type="text"
                    required
                    placeholder="Position you're applying for"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-resume">Resume Google Drive URL</label>
                <div className="input-with-icon">
                  <FileText size={18} className="input-icon" />
                  <input
                    id="modal-resume"
                    type="url"
                    required
                    placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                    value={resumeUrl}
                    onChange={(e) => setResumeUrl(e.target.value)}
                  />
                </div>
              </div>

              <div className="resume-guide-box">
                <div className="guide-title">
                  <Info size={16} />
                  <span>How to get your Google Drive Resume Link:</span>
                </div>
                <ol className="guide-steps">
                  <li>Upload your resume file (PDF or DOCX preferred) to Google Drive.</li>
                  <li>Right-click the file in Google Drive, select <strong>Share</strong> &gt; <strong>Share</strong>.</li>
                  <li>Under <strong>General access</strong>, change <strong>Restricted</strong> to <strong>Anyone with the link</strong>.</li>
                  <li>Click <strong>Copy link</strong> and paste it into the input above.</li>
                </ol>
                <div className="guide-warning">
                  * Important: Ensure the file permission is set to <strong>Anyone with the link</strong> so our recruitment team can view it.
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary full-width"
                disabled={loading}
              >
                {loading ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
