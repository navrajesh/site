import { publicLinks, type Project } from "@/content/site";
import { BrowserFrame } from "@/components/browser-frame";
import { TextLink } from "@/components/text-link";

export function ProjectPanel({ project }: { project: Project }) {
  const links = publicLinks(project.links).filter(
    (link) => !link.href.startsWith("https://github.com/"),
  );
  const frameSize = project.featured ? "feature" : "support";

  return (
    <>
      <div className="index-frame">
        <BrowserFrame project={project} size={frameSize} />
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
      <p className="published-kicker">{project.category}</p>
      {project.tagline ? <p className="tagline">{project.tagline}</p> : null}
      <p className="published-description">{project.description}</p>
      {project.role ? (
        <p className="role-line">
          <strong>Role</strong> · {project.role}
        </p>
      ) : null}
      {project.contribution ? <p className="contribution">{project.contribution}</p> : null}
      {project.useCaseCatalog ? (
        <p className="catalog-line">
          <strong>Use-case catalog</strong> · {project.useCaseCatalog}
        </p>
      ) : null}
      <ul className="tech-list" aria-label={`${project.title} technical focus`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <p className="status-line">
        <strong>Status</strong> · {project.status}
      </p>
      {project.architectureScope && project.architectureScope.length > 0 ? (
        <section className="architecture-scope" aria-label="Architecture and scope">
          <h3>Architecture &amp; Scope</h3>
          <ul className="highlights">
            {project.architectureScope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
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
    </>
  );
}
