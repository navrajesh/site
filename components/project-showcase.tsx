import { orderedProjects, publicLinks, type Project } from "@/content/site";
import { BrowserFrame } from "@/components/browser-frame";
import { TextLink } from "@/components/text-link";

function ProjectCopy({ project }: { project: Project }) {
  const links = publicLinks(project.links);

  return (
    <div>
      <p className="project-number">{project.number}</p>
      <p className="project-label">{project.category}</p>
      <h3 className="project-title">{project.title}</h3>
      {project.tagline ? <p className="tagline">{project.tagline}</p> : null}
      <p className="description">{project.description}</p>
      {project.role ? <p className="role-line"><strong>Role</strong> · {project.role}</p> : null}
      {project.contribution ? <p className="contribution">{project.contribution}</p> : null}
      {project.useCaseCatalog ? (
        <p className="catalog-line">
          <strong>Use-case catalog</strong> · {project.useCaseCatalog}
        </p>
      ) : null}
      <ul className="tech-list">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <p className="status-line">
        <strong>Status</strong> · {project.status}
      </p>
      {project.notes.length > 0 ? (
        <details className="project-notes">
          <summary>Project notes</summary>
          <ul className="highlights">
            {project.notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ) : null}
      {links.length > 0 ? (
        <ul className="link-row">
          {links.map((link) => (
            <li key={link.href}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ProjectShowcase() {
  const projects = orderedProjects();
  const flagship = projects.filter((project) => project.flagship);
  const featured = projects.filter((project) => project.featured && !project.flagship);
  const supporting = projects.filter((project) => !project.featured);
  const range = `${projects[0]?.number ?? "01"} — ${projects.at(-1)?.number ?? "10"}`;

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading">
          <h2 className="section-title" id="work-title">
            Selected work
          </h2>
          <p className="section-index">{range}</p>
        </div>
        <div className="feature-list">
          {flagship.map((project) => (
            <article className="flagship" id={project.id} key={project.id}>
              <ProjectCopy project={project} />
              <div className="flagship-media">
                <BrowserFrame project={project} size="flagship" priority />
                {project.gallery && project.gallery.length > 0 ? (
                  <ul className="flagship-gallery">
                    {project.gallery.map((image) => (
                      <li key={image.src ?? image.alt}>
                        <BrowserFrame
                          project={{
                            ...project,
                            image,
                            gallery: undefined,
                          }}
                          size="support"
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
          {featured.map((project) => (
            <article className="feature" id={project.id} key={project.id}>
              <ProjectCopy project={project} />
              <BrowserFrame project={project} size="feature" />
            </article>
          ))}
        </div>
        <div className="support-block">
          <p className="support-kicker">Further work</p>
          <div className="support-grid">
            {supporting.map((project) => (
              <article className="support-card" id={project.id} key={project.id}>
                <ProjectCopy project={project} />
                <BrowserFrame project={project} size="support" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
