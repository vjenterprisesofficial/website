export default function PortfolioCard({ project }) {
  return (
    <article className="portfolio-card reveal">
      <div className="project-visual" style={{ '--project-accent': project.accent }}>
        <div className="browser-bar"><span /><span /><span /></div>
        {project.image ? (
          <img 
            className="project-screenshot" 
            src={project.image} 
            alt={`${project.title} screenshot`} 
            loading="lazy" 
          />
        ) : (
          <div className="project-lines">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
      <div className="portfolio-content">
        <span className="tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.tech.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </article>
  );
}
