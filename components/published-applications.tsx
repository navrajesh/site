import Image from "next/image";
import { publishedApplications } from "@/content/site";
import { TextLink } from "@/components/text-link";

export function PublishedApplications() {
  const count = String(publishedApplications.length).padStart(2, "0");

  return (
    <div className="index-group">
      <div className="index-heading">
        <h2 className="index-title" id="published-applications-title">
          Published Applications
        </h2>
        <p className="section-index">{count} applications</p>
        <p className="index-subtitle">
          Independently developed and successfully published applications on Amazon Alexa Skills
          Store and Salesforce AppExchange.
        </p>
      </div>
      <ul className="published-list">
        {publishedApplications.map((application) => (
          <li key={application.id}>
            <article className="published-entry" aria-labelledby={`${application.id}-title`}>
              <div className="published-visual">
                <Image
                  src={application.image.src}
                  alt={application.image.alt}
                  width={application.image.width}
                  height={application.image.height}
                  className="published-shot"
                  sizes="(min-width: 1024px) 34rem, 100vw"
                />
              </div>
              <div className="published-copy">
                <p className="published-kicker">{application.category}</p>
                <h3 className="published-title" id={`${application.id}-title`}>
                  {application.title}
                </h3>
                <p className="published-status">{application.status}</p>
                <p className="published-description">{application.description}</p>
                <ul className="tech-list" aria-label={`${application.title} technical focus`}>
                  {application.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <TextLink href={application.href}>{application.linkLabel}</TextLink>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
