import { orderedProjects } from "@/content/site";
import { ArrowDownIcon } from "@/components/icons";

export function ProjectIndex() {
  const projects = orderedProjects();
  const count = String(projects.length).padStart(2, "0");

  return (
    <section className="project-index" aria-labelledby="explore-title">
      <div className="shell">
        <div className="section-heading index-heading">
          <h2 className="index-title" id="explore-title">
            Explore the work
          </h2>
          <p className="section-index">{count} projects</p>
        </div>
        <ul className="index-list">
          {projects.map((project) => (
            <li key={project.id}>
              <a className="index-row" href={`#${project.id}`}>
                <span className="index-number">{project.number}</span>
                <span className="index-name">{project.title}</span>
                <span className="index-summary">{project.overviewSummary}</span>
                <span className="index-arrow">
                  <ArrowDownIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
