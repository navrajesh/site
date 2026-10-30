import {
  orderedProjects,
  projectIndexSections,
  type Project,
  type ProjectIndexSection,
} from "@/content/site";
import { HashDisclosure } from "@/components/hash-disclosure";
import { IndexDisclosure } from "@/components/index-disclosure";
import { ProjectPanel } from "@/components/project-panel";
import { PublishedApplications } from "@/components/published-applications";

function ProjectIndexList({ projects }: { projects: readonly Project[] }) {
  return (
    <ul className="index-list">
      {projects.map((project) => (
        <IndexDisclosure
          id={project.id}
          key={project.id}
          number={project.number}
          summary={project.overviewSummary}
          title={project.title}
        >
          <ProjectPanel project={project} />
        </IndexDisclosure>
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
    <section className="project-index" id="work" aria-label="Explore the work">
      <HashDisclosure />
      <div className="shell">
        {featured ? <IndexGroup section={featured} projects={projects} /> : null}
        <PublishedApplications />
        {labs ? <IndexGroup section={labs} projects={projects} /> : null}
      </div>
    </section>
  );
}
