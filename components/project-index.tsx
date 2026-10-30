import {
  orderedProjects,
  projectIndexSections,
  type Project,
  type ProjectIndexSection,
} from "@/content/site";
import { ArrowDownIcon } from "@/components/icons";
import { PublishedApplications } from "@/components/published-applications";

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

function IndexGroup({
  section,
  projects,
}: {
  section: ProjectIndexSection;
  projects: readonly Project[];
}) {
  const items = projects.filter((project) => project.indexGroup === section.group);
  const count = String(items.length).padStart(2, "0");

  return (
    <div className="index-group">
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
}

export function ProjectIndex() {
  const projects = orderedProjects();
  const featured = projectIndexSections.find((section) => section.group === "featured");
  const labs = projectIndexSections.find((section) => section.group === "lab");

  return (
    <section className="project-index" aria-label="Explore the work">
      <div className="shell">
        {featured ? <IndexGroup section={featured} projects={projects} /> : null}
        <PublishedApplications />
        {labs ? <IndexGroup section={labs} projects={projects} /> : null}
      </div>
    </section>
  );
}
