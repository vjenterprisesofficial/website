import { Briefcase, BookOpen, MapPin, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';
import { jobs, internships } from '../assets/siteData.js';

export default function Career() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join VJ Enterprises! We're hiring talented developers, designers, marketers, and engineers. Explore full-time roles and internships for students."
        path="/careers"
      />

      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Careers</p>
          <h1>Join a team building digital solutions that matter.</h1>
          <p>We're looking for talented individuals who care about quality, growth, and collaboration. Explore open roles and internship opportunities.</p>
        </div>
      </section>

      {/* Full-Time Positions */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Full-Time Opportunities"
            title="Career Positions"
            description="Build your career with a team that values quality work, continuous learning, and real impact."
            align="center"
          />
          <div className="card-grid">
            {jobs.map((job) => (
              <article key={job.title} className="job-card">
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="tag">{job.type}</span>
                      <span className="job-location">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Briefcase size={24} color="var(--accent)" />
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-section">
                  <h4>Requirements</h4>
                  <ul className="job-list">
                    {job.requirements.map((req) => (
                      <li key={req}>
                        <CheckCircle2 size={18} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="job-section">
                  <h4>Benefits</h4>
                  <ul className="job-list">
                    {job.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckCircle2 size={18} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link className="btn btn-primary" to="/contact">
                  Apply Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="section alt">
        <div className="container">
          <SectionHeader
            eyebrow="Student Opportunities"
            title="Internship Programs"
            description="Gain real-world experience, build your portfolio, and learn from industry professionals. Perfect for college students."
            align="center"
          />
          <div className="card-grid">
            {internships.map((internship) => (
              <article key={internship.title} className="internship-card">
                <div className="internship-header">
                  <div>
                    <h3>{internship.title}</h3>
                    <div className="internship-meta">
                      <span className="meta-item">
                        <Clock size={16} />
                        {internship.duration}
                      </span>
                      <span className="meta-item">
                        <MapPin size={16} />
                        {internship.location}
                      </span>
                    </div>
                    <span className="tag internship-tag">{internship.type}</span>
                  </div>
                  <BookOpen size={24} color="var(--accent)" />
                </div>

                <p className="internship-description">{internship.description}</p>

                <div className="internship-section">
                  <h4>You'll Learn</h4>
                  <ul className="skill-list">
                    {internship.skills.map((skill) => (
                      <li key={skill}>
                        <span className="skill-tag">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="internship-section">
                  <h4>Requirements</h4>
                  <ul className="requirement-list">
                    {internship.requirements.map((req) => (
                      <li key={req}>
                        <CheckCircle2 size={16} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="internship-stipend">
                  <DollarSign size={18} />
                  <span>{internship.stipend}</span>
                </div>

                <Link className="btn btn-secondary" to="/contact">
                  Apply for Internship
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why VJ Enterprises"
            title="What we offer"
            description="We invest in our team's growth, well-being, and success."
            align="center"
          />
          <div className="why-join-grid">
            <article className="benefit-item">
              <h3>Growth-focused mentorship</h3>
              <p>Learn from experienced professionals who care about your development and are invested in your success.</p>
            </article>
            <article className="benefit-item">
              <h3>Real-world projects</h3>
              <p>Work on projects that matter. Build features, strategies, and solutions for real clients and businesses.</p>
            </article>
            <article className="benefit-item">
              <h3>Collaborative culture</h3>
              <p>We believe in teamwork, open communication, and mutual support. No silos—just good collaboration.</p>
            </article>
            <article className="benefit-item">
              <h3>Modern tech stack</h3>
              <p>Work with contemporary tools, frameworks, and practices. Learn and apply industry-standard technologies.</p>
            </article>
            <article className="benefit-item">
              <h3>Flexible arrangements</h3>
              <p>We support remote work, flexible hours (where applicable), and work-life balance for our team.</p>
            </article>
            <article className="benefit-item">
              <h3>Learning opportunities</h3>
              <p>Budget for courses, certifications, and conferences. We encourage continuous learning and skill development.</p>
            </article>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
