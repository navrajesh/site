import {
  orderedProjects,
  projectIndexSections,
  type Project,
} from "@/content/site";
import { ArrowDownIcon } from "@/components/icons";

function ProjectIndexList({ projects }: { projects: readonly Project[] }) {
  return (
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
  );
}

export function ProjectIndex() {
  const projects = orderedProjects();

  return (
    <section className="project-index" aria-label="Explore the work">
      <div className="shell">
        {projectIndexSections.map((section) => {
          const items = projects.filter((project) => project.indexGroup === section.group);
          const count = String(items.length).padStart(2, "0");

          return (
            <div className="index-group" key={section.id}>
              <div className="index-heading">
                <h2 className="index-title" id={`${section.id}-index-title`}>
                  {section.title}
                </h2>
                <p className="section-index">
                  {count} {section.countNoun}
                </p>
                {section.subtitle ? <p className="index-subtitle">{section.subtitle}</p> : null}
              </div>
              <ProjectIndexList projects={items} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
