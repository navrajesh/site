import Image from "next/image";
import { publishedApplications } from "@/content/site";
import { IndexDisclosure } from "@/components/index-disclosure";
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
          Hands-on development and successful publication of applications on the Amazon Alexa
          Skills Store and Salesforce AppExchange.
        </p>
      </div>
      <ul className="index-list">
        {publishedApplications.map((application) => (
          <IndexDisclosure
            id={application.id}
            key={application.id}
            number={application.number}
            summary={application.summary}
            title={application.title}
          >
            <div className="published-visual">
              <Image
                src={application.image.src}
                alt={application.image.alt}
                width={application.image.width}
                height={application.image.height}
                className="published-shot"
                sizes="(min-width: 1024px) 46rem, 100vw"
              />
            </div>
            <p className="published-kicker">{application.category}</p>
            <p className="published-status">{application.status}</p>
            <p className="published-description">{application.description}</p>
            <ul className="tech-list" aria-label={`${application.title} technical focus`}>
              {application.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TextLink href={application.href}>{application.linkLabel}</TextLink>
          </IndexDisclosure>
        ))}
      </ul>
    </div>
  );
}
