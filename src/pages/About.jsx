import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTA from '../components/CTA.jsx';
import { team, values } from '../assets/siteData.js';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about VJ Enterprises Digital Solutions, our mission, vision, values, and team approach to IT services and digital marketing."
        path="/about"
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">About Us</p>
          <h1>We bring technology, creative direction, and growth strategy into one focused agency.</h1>
          <p>Our job is to make digital execution easier for business owners while keeping quality, speed, and measurable outcomes in view.</p>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <article className="story-panel">
            <p className="eyebrow">Company Story</p>
            <h2>Built for businesses that need practical digital momentum.</h2>
            <p>
              VJ Enterprises Digital Solutions was created to help growing companies avoid fragmented vendor work. We combine website development, web apps, SEO, ads, social media, video, branding, and consulting so every digital touchpoint supports the same business goal.
            </p>
          </article>
          <article className="mission-card">
            <h2>Mission</h2>
            <p>To deliver reliable, high-quality digital solutions that help businesses attract better leads, communicate clearly, and operate with confidence.</p>
          </article>
          <article className="mission-card">
            <h2>Vision</h2>
            <p>To become a trusted digital partner for ambitious brands that want modern technology, sharp marketing, and lasting online presence.</p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Core Values" title="The principles behind our work" align="center" />
          <div className="values-grid">
            {values.map((value, index) => (
              <article key={value} className="value-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Team"
            title="Specialists across strategy, design, development, and marketing"
            description="A lean team structure keeps work collaborative, accountable, and easy to move forward."
            align="center"
          />
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <div className="avatar" aria-hidden="true">{member.name.split(' ').map((part) => part[0]).join('')}</div>
                <h3>{member.name}</h3>
                <strong>{member.role}</strong>
                <p>{member.specialty}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
