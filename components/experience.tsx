import { site } from "@/content/site";
import { TextLink } from "@/components/text-link";

export function Experience() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div>
          <p className="eyebrow">{site.about.eyebrow}</p>
          <h2 className="section-title" id="about-title">
            {site.about.titleLead}
            <br />
            {site.about.titleTail}
          </h2>
        </div>
        <div className="about-copy">
          <p>{site.about.body}</p>
          <p>{site.about.detail}</p>
          {site.resume ? (
            <p>
              <TextLink href={site.resume.href}>{site.resume.label}</TextLink>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
