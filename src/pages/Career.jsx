import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";
import JobCard from "../components/JobCard";

import { jobs, internships } from "../assets/siteData";
import "../styles/careerpage.css";

export default function Career() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join VJ Enterprises and build innovative digital solutions."
        path="/careers"
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Careers</p>

          <h1>Join a team building digital solutions that matter.</h1>

          <p>
            We're looking for talented individuals who care about quality,
            growth, and collaboration.
          </p>
        </div>
      </section>

      {/* Jobs */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Full-Time Opportunities"
            title="Career Positions"
            description="Explore our current openings."
            align="center"
          />

          <div className="job-list-container">
            {jobs.map((job) => (
              <JobCard key={job.id} data={job} cardType="job" />
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
            description="Gain practical experience while learning from industry experts."
            align="center"
          />

          <div className="job-list-container">
            {internships.map((internship) => (
              <JobCard
                key={internship.id}
                data={internship}
                cardType="internship"
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
