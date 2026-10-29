import { linkTargetProps, site } from "@/content/site";
import { ArrowIcon } from "@/components/icons";

export function Contact() {
  const channels = [
    site.email
      ? { href: `mailto:${site.email}`, label: site.email }
      : null,
    site.linkedin ? { href: site.linkedin, label: "LinkedIn" } : null,
    site.github ? { href: site.github, label: "GitHub" } : null,
  ].filter((channel) => channel !== null);

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div>
          <h2 className="section-title contact-title" id="contact-title">
            {site.contact.titleLead} <em>{site.contact.titleAccent}</em>
          </h2>
          {channels.length > 0 ? (
            <ul className="contact-list">
              {channels.map((channel) => (
                <li key={channel.href}>
                  <a className="text-link" href={channel.href} {...linkTargetProps(channel.href)}>
                    {channel.label}
                    {channel.href.startsWith("https://") ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {site.email ? (
          <div>
            <a className="btn" href={`mailto:${site.email}`}>
              {site.contact.cta}
              <ArrowIcon />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
