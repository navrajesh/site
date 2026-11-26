import Image from "next/image";
import type { JourneyLogo, JourneyMilestone } from "@/content/site";
import { site } from "@/content/site";

function JourneyLogoImage({ logo }: { logo: JourneyLogo }) {
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      loading="eager"
      unoptimized
    />
  );
}

function JourneyMilestoneItem({ milestone }: { milestone: JourneyMilestone }) {
  return (
    <li className={milestone.emphasis ? "journey-item is-emphasis" : "journey-item"}>
      <span className="journey-marker" aria-hidden="true" />
      <div className="journey-body">
        <p className="journey-period">{milestone.period}</p>
        <div className="journey-logo">
          {milestone.logo ? <JourneyLogoImage logo={milestone.logo} /> : null}
          {milestone.clients && milestone.clients.length > 0 ? (
            <ul className="journey-client-list" aria-label={milestone.clientsLabel}>
              {milestone.clients.map((logo) => (
                <li key={logo.src}>
                  <JourneyLogoImage logo={logo} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <h3 className="journey-org">{milestone.organization}</h3>
        <p className="journey-role">{milestone.role}</p>
        <div className="journey-copy">
          <p className="journey-description">{milestone.description}</p>
          {milestone.detail ? <p className="journey-detail">{milestone.detail}</p> : null}
        </div>
      </div>
    </li>
  );
}

export function Journey() {
  const { eyebrow, titleLead, titleTail, summary, milestones } = site.journey;

  return (
    <section className="section journey" id="journey" aria-labelledby="journey-title">
      <div className="shell">
        <header className="journey-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title" id="journey-title">
            {titleLead}
            <br />
            {titleTail}
          </h2>
          <p className="journey-summary">{summary}</p>
        </header>
        <ol className="journey-list">
          {milestones.map((milestone) => (
            <JourneyMilestoneItem key={milestone.id} milestone={milestone} />
          ))}
        </ol>
      </div>
    </section>
  );
}
