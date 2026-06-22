import React, { useState } from 'react';
import {
  Calendar,
  Award,
  CheckCircle,
  GraduationCap,
  Server,
  Users,
  Layers,
  Mail,
  MapPin,
  Briefcase,
  TrendingUp,
  Sparkles,
  ArrowRight,
  BookmarkCheck,
  Zap,
  Code,
  X
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { submitContactForm } from '../api/contactService.js';
import '../styles/summer-internship.css';

// Google Apps Script Web App URL for storing internship registrations in a Google Sheet
// Change this URL if you want to store registrations in a different Google Sheet
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlnmHeOrGTaiaQHJ6Za73n77d5ytzmqFPVeZ0WiEMlvG0nJSdV7LScUyQCJufYG1rC/exec';

export default function SummerInternship() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [responseType, setResponseType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalResponseMsg, setModalResponseMsg] = useState('');
  const [modalResponseType, setModalResponseType] = useState('');

  const domains = [
    {
      title: "Cloud Computing",
      learn: "Cloud Fundamentals, Infrastructure & Security, Deployment & Monitoring.",
      highlights: "Cloud Deployment, DevOps Basics, Industry Ready Project.",
      project: "Deploy a Full Stack Web Application on AWS/Azure.",
      badge: "Infrastructure"
    },
    {
      title: "Data Analytics",
      learn: "Excel & Data Cleaning, SQL & Database, Data Visualization with Power BI.",
      highlights: "SQL Proficiency, Power BI Dashboard, Business Analytics.",
      project: "Sales & Business Performance Dashboard.",
      badge: "Data"
    },
    {
      title: "Full Stack Development",
      learn: "Frontend Development, Backend Development, Database Integration.",
      highlights: "Full Stack Development, API Development, Portfolio Project.",
      project: "Student Management Portal.",
      badge: "Development"
    },
    {
      title: "Digital Marketing & SMM",
      learn: "SEO, SEM, content strategy, algorithmic growth, performance marketing, and running high-ROI ad campaigns.",
      highlights: "Audience Segmentation, Funnel Strategy, Conversion Audits.",
      project: "Live Campaign Setup & Analytics Report.",
      badge: "Marketing"
    },
    {
      title: "Video Editing, Branding & Design",
      learn: "Professional storytelling, motion graphics, UI/UX principles, visual identity layout, and graphic design fundamentals.",
      highlights: "Hook-first Storytelling, Figma Layouts, Design Systems.",
      project: "Brand Identity Asset Kit & Short Promo Reel.",
      badge: "Creative"
    },
    {
      title: "Mobile Development",
      learn: "Designing, building, and deploying high-performance Android & iOS applications.",
      highlights: "Flutter/Dart, API Connections, Push Notifications.",
      project: "Portfolio Mobile Application Build.",
      badge: "Mobile"
    }
  ];

  const curriculumTracks = [
    {
      id: "track-a",
      name: "Tech & Engineering",
      applies: "Full Stack Development, Cloud Computing, Mobile Development",
      phases: [
        {
          num: "Phase 1",
          title: "Foundation & Architecture",
          time: "Week 1",
          details: [
            "Deep dive into core fundamentals, syntax, and environments (Frontend frameworks, Cloud basics, or Mobile UI).",
            "Understanding database schemas, repository setup, and project architecture planning."
          ]
        },
        {
          num: "Phase 2",
          title: "Core Execution & Logic",
          time: "Week 2",
          details: [
            "Writing clean code: Developing core backend APIs, state management, or setting up cloud security and infrastructure protocols.",
            "Connecting data points and implementing user authentication workflows."
          ]
        },
        {
          num: "Phase 3",
          title: "System Integration & Optimization",
          time: "Week 3",
          details: [
            "Connecting the puzzle pieces—integrating frontend with backend APIs, database scaling, or setting up automated deployment pipelines.",
            "Debugging, testing edge cases, and performance monitoring."
          ]
        },
        {
          num: "Phase 4",
          title: "Production Deployment & Review",
          time: "Final Week / Days 30–45",
          details: [
            "Going live! Deploying final products to production environments (AWS/Azure for Cloud, Render/Vercel for Web, App Stores for Mobile).",
            "Final Project Presentation: Defending your live project architecture (e.g., Student Management Portal or Full Stack AWS App) to industry mentors."
          ]
        }
      ]
    },
    {
      id: "track-b",
      name: "Data & Analytics",
      applies: "Data Analytics",
      phases: [
        {
          num: "Phase 1",
          title: "Data Gathering & Extraction",
          time: "Week 1",
          details: [
            "Mastering advanced Excel methodologies, data cleaning strategies, and database fundamentals.",
            "Writing SQL queries to extract relevant datasets from unstructured environments."
          ]
        },
        {
          num: "Phase 2",
          title: "Transformation & Modelling",
          time: "Week 2",
          details: [
            "Designing relational databases, setting up primary/foreign key mappings, and transforming raw data into structured tables.",
            "Introduction to data modeling concepts for business performance."
          ]
        },
        {
          num: "Phase 3",
          title: "Visualization & Business Intelligence",
          time: "Week 3",
          details: [
            "Moving into Power BI: Crafting intuitive visual charts, configuring DAX formulas, and designing interactive metrics.",
            "Translating hard data numbers into actionable business stories."
          ]
        },
        {
          num: "Phase 4",
          title: "Synthesis & Stakeholder Delivery",
          time: "Final Week / Days 30–45",
          details: [
            "Final polishing of real-time interactive dashboards.",
            "Final Project Presentation: Presenting your Sales & Business Performance Dashboard with executive summaries and strategic business recommendations."
          ]
        }
      ]
    },
    {
      id: "track-c",
      name: "Marketing & Creative",
      applies: "Digital Marketing, Social Media Marketing, Video Editing, Branding & Design",
      phases: [
        {
          num: "Phase 1",
          title: "Market Research & Visual Identity",
          time: "Week 1",
          details: [
            "Analyzing target audiences, competitive landscapes, and defining visual/brand guidelines.",
            "Setting up mood boards, content strategy funnels, and wireframes."
          ]
        },
        {
          num: "Phase 2",
          title: "Asset Creation & Campaign Assembly",
          time: "Week 2",
          details: [
            "The creation engine: Producing high-converting graphic layouts, professional video editing timelines, narrative scripts, and SEO target matrixes.",
            "Setting up digital advertising pipelines (Meta Ads Manager, Google Ads)."
          ]
        },
        {
          num: "Phase 3",
          title: "Testing & Funnel Optimization",
          time: "Week 3",
          details: [
            "A/B testing campaign assets, monitoring algorithm hooks, and adjusting video graphics for viewer retention.",
            "Auditing web and ad copy to maximize click-through and conversion rates."
          ]
        },
        {
          num: "Phase 4",
          title: "ROI Presentation & Analytics Evaluation",
          time: "Final Week / Days 30–45",
          details: [
            "Compiling real-world campaign analytics and evaluating growth results.",
            "Final Project Presentation: Delivering a complete digital marketing strategy or a creative portfolio piece mapped to a real business's target audience."
          ]
        }
      ]
    }
  ];

  const submitToGoogleScript = async (formData) => {
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(formData)
      });
      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch {
        return { success: true, message: 'Form submitted successfully' };
      }
    } catch (error) {
      console.error('Submit Error:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');
    setResponseType('');

    const target = e.target;
    const track = target.track.value;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const message = target.message.value || '';

    const formData = {
      name,
      email,
      phone,
      service: `Summer Internship 2026 - ${track}`,
      message: `Selected Track: ${track}\nProgram Fee: ₹2,500 (All-inclusive Offer)\nCandidate Message: ${message}`
    };

    const result = await submitToGoogleScript(formData);

    if (result.success) {
      setResponseType('success');
      setResponseMsg('Congratulations! Your internship enrollment has been received. Our support desk will contact you within 24 hours to secure your workstation allocation.');
      target.reset();
    } else {
      setResponseType('error');
      setResponseMsg(result.error || 'Something went wrong. Please try again or email us directly.');
    }
    setLoading(false);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setModalLoading(true);
    setModalResponseMsg('');
    setModalResponseType('');

    const target = e.target;
    const track = target.track.value;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const college = target.college.value;
    const course = target.course.value;
    const message = target.message.value || '';

    const formData = {
      name,
      email,
      phone,
      college,
      course,
      service: `Summer Internship 2026 - ${track}`,
      message: `Selected Track: ${track}\nCollege: ${college}\nCourse: ${course}\nProgram Fee: ₹2,500 (All-inclusive Offer)\nCandidate Message: ${message}`
    };

    const result = await submitToGoogleScript(formData);

    if (result.success) {
      setModalResponseType('success');
      setModalResponseMsg('Congratulations! Your internship enrollment has been received. Our support desk will contact you within 24 hours to secure your workstation allocation.');
      target.reset();
      setTimeout(() => {
        setIsModalOpen(false);
        setModalResponseMsg('');
      }, 4000);
    } else {
      setModalResponseType('error');
      setModalResponseMsg(result.error || 'Something went wrong. Please try again or email us directly.');
    }
    setModalLoading(false);
  };

  return (
    <div className="internship-page">
      <SEO
        title="Summer Training & Internship Program 2026"
        description="Kickstart your career this summer with VJ Enterprises. Choose from 6 specialized domains. Hands-on projects, certification, LOR, and expert mentorship."
        path="/summer-internship"
      />

      {/* Hero Section */}
      <section id="hero" className="internship-hero">
        <div className="internship-hero-glow"></div>
        <div className="container">
          <span className="internship-badge">Building Brands. Creating Impact. Since 2020.</span>
          <h1>Kickstart Your Career This Summer with <span>VJ Enterprises Digital Solutions!</span></h1>
          <p>
            Turn your summer break into a career-building powerhouse with a premium industry internship
            designed to build skills, build projects, and build your future.
          </p>

          <div className="internship-badge-container" style={{ marginBottom: '30px' }}>
            <div className="internship-hero-badge">
              <Calendar size={18} />
              <span>45 Days</span>
            </div>
            <div className="internship-hero-badge">
              <Sparkles size={18} />
              <span>Live Project Experience</span>
            </div>
            <div className="internship-hero-badge">
              <TrendingUp size={18} />
              <span>100% Practical & Guided</span>
            </div>
            <div className="internship-hero-badge">
              <Zap size={18} />
              <span>Special Offer: ₹2,500 Only</span>
            </div>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.05rem', gap: '8px' }}>
            Register for Summer Internship <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Core Details (Eligibility & Perks) */}
      <section className="section">
        <div className="container">
          <div className="internship-grid-cards">
            <div className="internship-card">
              <div className="internship-card-header">
                <div className="internship-card-icon">
                  <GraduationCap size={24} />
                </div>
                <h3>Program Eligibility</h3>
              </div>
              <ul>
                <li>B.Tech / BE (CS, IT, and all other branches)</li>
                <li>BCA & MCA Candidates</li>
                <li>Diploma Students (CS/IT/ECE)</li>
                <li>MBA Candidates (Marketing & Strategy)</li>
              </ul>
            </div>

            <div className="internship-card">
              <div className="internship-card-header">
                <div className="internship-card-icon">
                  <Award size={24} />
                </div>
                <h3>Exclusive Internship Perks</h3>
              </div>
              <ul>
                <li><strong>Internship Certificate</strong> to boost resume value</li>
                <li><strong>Letter of Recommendation (LOR)</strong> for top performers</li>
                <li><strong>LinkedIn Recommendation</strong> from mentors</li>
              </ul>
            </div>

            <div className="internship-card">
              <div className="internship-card-header">
                <div className="internship-card-icon">
                  <Layers size={24} />
                </div>
                <h3>Program Highlights</h3>
              </div>
              <ul>
                <li>4-5 Hours Intensive Technical Work</li>
                <li>Cloud Staging Server Deployments</li>
                <li>Secure API and Database setups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VJ Enterprises */}
      <section className="section alt">
        <div className="container">
          <h2 className="internship-section-title">Why Choose VJ Enterprises?</h2>
          <p className="internship-section-subtitle">
            Train with an active digital agency, not a coaching institute. Get real experience, host real projects, and build verifiable skills.
          </p>
          <div className="internship-why-grid">
            <div className="internship-why-card">
              <h3>
                <Users size={20} />
                Real Agency Ecosystem
              </h3>
              <p>
                Unlike traditional coaching institutes, we are a live, active digital agency. You will work alongside engineers handling live architectures, client accounts, and industry deadlines.
              </p>
            </div>

            <div className="internship-why-card">
              <h3>
                <CheckCircle size={20} />
                Proven Institutional Trust
              </h3>
              <p>
                Our structural credibility is verified by regional enterprise bodies and sports organizations, including OM Group, Bharat ISKF, and the Nunchaku Association of India.
              </p>
            </div>

            <div className="internship-why-card">
              <h3>
                <Server size={20} />
                Full Stack & Server Access
              </h3>
              <p>
                We teach you how to manage real production databases and servers. Your capstone project will be fully hosted live online on an active domain for recruiters to test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Specialized Domain */}
      <section className="section">
        <div className="container">
          <h2 className="internship-section-title">Choose Your Specialized Domain</h2>
          <p className="internship-section-subtitle">
            Select the track that matches your career goals. Learn from Industry Mentors, work on real-world tracks, and complete a standout final portfolio piece.
          </p>
          <div className="internship-tracks-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {domains.map((domain, index) => (
              <div key={index} className="internship-track-card">
                <div className="internship-track-header">
                  <span className="internship-track-badge">{domain.badge}</span>
                  <h3>{domain.title}</h3>
                  <p><strong>What You'll Learn:</strong> {domain.learn}</p>
                </div>
                <div className="internship-track-body">
                  <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    <strong>Key Highlights:</strong> {domain.highlights}
                  </p>
                  {domain.project && (
                    <div style={{ marginTop: '15px', padding: '12px', background: 'var(--light-bg)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary-color)', display: 'block', textTransform: 'uppercase', marginBottom: '2px' }}>🏁 Final Project:</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{domain.project}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Curriculum */}
      <section className="section alt">
        <div className="container">
          <h2 className="internship-section-title">Program Curriculum Framework</h2>
          <p className="internship-section-subtitle">
            Our curriculum is structured into four developmental phases. Select a track to explore its timeline.
          </p>

          <div className="internship-syllabus-section">
            <div className="internship-tabs-nav" style={{ marginBottom: '35px' }}>
              {curriculumTracks.map((track, idx) => (
                <button
                  key={track.id}
                  className={`internship-tab-btn ${activeTrackIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveTrackIndex(idx)}
                >
                  {track.name}
                </button>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginBottom: '40px', background: 'var(--light-bg)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary-color)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Applies to:</span>
              <span style={{ fontSize: '1rem', fontWeight: '600' }}>{curriculumTracks[activeTrackIndex].applies}</span>
            </div>

            <div className="internship-timeline-vertical" key={activeTrackIndex}>
              {curriculumTracks[activeTrackIndex].phases.map((phase, idx) => (
                <div key={idx} className="internship-timeline-item" style={{ display: 'flex', gap: '24px', marginBottom: idx === 3 ? '0' : '40px', position: 'relative' }}>
                  {idx !== 3 && (
                    <div style={{ position: 'absolute', left: '25px', top: '56px', bottom: '-48px', width: '2px', background: 'var(--border-color)' }}></div>
                  )}

                  <div className="internship-step-number-box" style={{ width: '50px', height: '50px', borderRadius: '12px', fontSize: '1.2rem', flexShrink: 0 }}>
                    0{idx + 1}
                  </div>

                  <div className="internship-step-details">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'baseline', marginBottom: '8px' }}>
                      <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#000000' }}>{phase.title}</h4>
                      <span className="internship-pricing-duration" style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'rgba(228, 66, 45, 0.06)' }}>
                        {phase.time}
                      </span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {phase.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)', fontWeight: 'bold' }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding System (Timeline Steps) */}
      <section className="section">
        <div className="container">
          <h2 className="internship-section-title">Onboarding System: How to Join</h2>
          <p className="internship-section-subtitle">
            Secure your spot and get internship-ready in four simple steps.
          </p>
          <div className="internship-timeline">
            <div className="internship-timeline-step">
              <div className="internship-timeline-num">01</div>
              <h4>Choose Your Track</h4>
              <p>Select Your Goal: Pick from our 6 specialized domains (Tech, Data, Marketing, or Creative) that perfectly match your future career roadmap.</p>
            </div>

            <div className="internship-timeline-step">
              <div className="internship-timeline-num">02</div>
              <h4>Lock Your Seat</h4>
              <p>Quick Registration: Fill out the simple application form below to claim your spot and take advantage of the special ₹2,500 offer before slots fill up!</p>
            </div>

            <div className="internship-timeline-step">
              <div className="internship-timeline-num">03</div>
              <h4>Get Your Toolkit</h4>
              <p>Ecosystem Setup: Receive your official student login credentials, software download guides, and access to the tools you'll use throughout the program.</p>
            </div>

            <div className="internship-timeline-step">
              <div className="internship-timeline-num">04</div>
              <h4>Start Learning Live</h4>
              <p>Begin Your Journey: Dive straight into hands-on training sessions and start building live projects with active guidance from industry experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Single Investment Structure Card */}
      <section className="section alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="internship-section-title">Program Details & Affordable Pricing</h2>
          <p className="internship-section-subtitle">
            We believe high-quality upskilling should be accessible. Get premium mentorship and extensive perks at an unbeatable value.
          </p>

          <div className="internship-pricing-grid" style={{ justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <div className="internship-pricing-card featured">
              <span className="internship-pricing-badge">Special Summer Offer</span>
              <div className="internship-pricing-header" style={{ paddingBottom: '10px' }}>
                <span className="internship-pricing-duration">45 Days Duration</span>
              </div>

              <div className="internship-pricing-price-box" style={{ justifyContent: 'center' }}>
                <span className="internship-pricing-del" style={{ fontSize: '1.4rem' }}>₹7,000</span>
                <span className="internship-pricing-price" style={{ fontSize: '2.8rem' }}>₹2,500</span>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>All-inclusive</span>
              </div>

              <ul className="internship-pricing-features" style={{ textAlign: 'left', marginBottom: '30px' }}>
                <li><strong>Live Project Experience</strong> with real client codecases</li>
                <li><strong>Internship Certificate</strong> (Official verifiable credentials)</li>
                <li><strong>Letter of Recommendation (LOR)</strong> for top candidates</li>
                <li><strong>LinkedIn Endorsements</strong> & mentorship reviews</li>
                <li><strong>Career Guidance Session</strong> & resume formulations</li>
              </ul>

              <button onClick={() => setIsModalOpen(true)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Register Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Modal Popup with Light Theme */}
      {isModalOpen && (
        <div className="internship-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="internship-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="internship-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>
            <h2 className="modal-title">Summer Internship Registration</h2>
            <p className="modal-subtitle">
              Secure your workstation and lock the special ₹2,500 offer before slots fill up!
            </p>

            <form onSubmit={handleModalSubmit} className="internship-modal-form">
              <div className="internship-form-group">
                <label htmlFor="modal-name">Full Name *</label>
                <input type="text" id="modal-name" name="name" placeholder="John Doe" required />
              </div>

              <div className="internship-form-group">
                <label htmlFor="modal-email">Email Address *</label>
                <input type="email" id="modal-email" name="email" placeholder="john@example.com" required />
              </div>

              <div className="internship-form-group">
                <label htmlFor="modal-phone">Phone / WhatsApp Number *</label>
                <input type="tel" id="modal-phone" name="phone" placeholder="+91 74474 11269" required />
              </div>

              <div className="internship-form-group">
                <label htmlFor="modal-college">College Name *</label>
                <input type="text" id="modal-college" name="college" placeholder="Your College / University Name" required />
              </div>

              <div className="internship-form-group">
                <label htmlFor="modal-course">Course / Degree *</label>
                <input type="text" id="modal-course" name="course" placeholder="e.g. B.Tech CS, BCA, MCA" required />
              </div>

              <div className="internship-form-group">
                <label htmlFor="modal-track">Select Technical Track *</label>
                <select id="modal-track" name="track" required>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Digital Marketing & Social Media Marketing">Digital Marketing & Social Media Marketing</option>
                  <option value="Video Editing, Branding & Design">Video Editing, Branding & Design</option>
                  <option value="Mobile Development">Mobile Development</option>
                </select>
              </div>

              <div className="internship-form-group">
                <label htmlFor="modal-message">Questions / Special Notes</label>
                <textarea id="modal-message" name="message" rows={3} placeholder="Any specific requirements or queries?"></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit-modal" disabled={modalLoading}>
                {modalLoading ? 'Submitting Registration...' : 'Register Now'}
              </button>

              {modalResponseMsg && (
                <div className={`internship-form-response ${modalResponseType}`} style={{ marginTop: '15px', color: modalResponseType === 'success' ? 'green' : 'red' }}>
                  {modalResponseMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
