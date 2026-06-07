import { useMemo, useState } from 'react';
import SEO from '../components/SEO.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import CTA from '../components/CTA.jsx';
import { portfolio } from '../assets/siteData.js';

export default function Portfolio() {
  const categories = useMemo(() => ['All', ...new Set(portfolio.map((project) => project.category))], []);
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? portfolio : portfolio.filter((project) => project.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio"
        description="View portfolio examples across website development, web applications, SEO, digital marketing, branding, and video editing."
        path="/portfolio"
      />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Portfolio</p>
          <h1>Project examples across technology, marketing, creative, and growth work.</h1>
          <p>Use the category filters to browse representative work and the technologies behind each project.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Portfolio Gallery" title="Selected project directions" align="center" />
          <div className="filter-tabs" role="tablist" aria-label="Portfolio categories">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filteredProjects.map((project) => <PortfolioCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
