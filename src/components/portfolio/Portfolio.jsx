import "./portfolio.scss";

const Portfolio = ({ projects }) => {
  return (
    <div className="portfolio-grid" aria-label="Project work cards">
      {projects.map((project) => (
        <article key={project.id} className="project-card">
          <div className="card-topline">
            <span className="tag">{project.category}</span>
            <span className="status">{project.status}</span>
          </div>

          <h3>{project.title}</h3>
          <p className="role">{project.role}</p>
          <p className="problem">{project.problem}</p>
          <p className="evidence">{project.evidence}</p>

          <div className="card-links">
            {project.links.length > 0 &&
              project.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Portfolio;
