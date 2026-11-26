import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { RequestSourceButton } from "@/components/source-access";
import { linkTargetProps, site } from "@/content/site";

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title contact-title" id="contact-title">
            {site.contact.titleLead} <em>{site.contact.titleAccent}</em>
          </h2>
          <p className="contact-intro">{site.contact.intro}</p>
        </div>
        <ul className="contact-links">
          {site.email ? (
            <li>
              <a
                className="contact-link"
                href={`mailto:${site.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon />
                Email
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ) : null}
          {site.linkedin ? (
            <li>
              <a className="contact-link" href={site.linkedin} {...linkTargetProps(site.linkedin)}>
                <LinkedInIcon />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ) : null}
          <li>
            <RequestSourceButton className="contact-link">
              <GitHubIcon />
              Request Source Access
            </RequestSourceButton>
          </li>
          {site.resume ? (
            <li>
              <a className="contact-link is-primary" href={site.resume.href} {...linkTargetProps(site.resume.href)}>
                {site.resume.label}
                <span className="sr-only">, PDF, opens in a new tab</span>
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}
