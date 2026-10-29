import { orderedProjects, site } from "@/content/site";
import { ArrowIcon } from "@/components/icons";
import { BrowserFrame } from "@/components/browser-frame";

export function Hero() {
  const projects = orderedProjects();
  const tokenx = projects.find((project) => project.id === "tokenx");
  const gold = projects.find((project) => project.id === "gold-tokenization");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div>
          <p className="eyebrow">{site.hero.eyebrow}</p>
          <h1 className="display" id="hero-title">
            {site.hero.titleLead}
            <br />
            {site.hero.titleTail} <em>{site.hero.accent}</em>
          </h1>
          <p className="lede">{site.hero.summary}</p>
          <a className="btn" href="#work">
            {site.hero.cta}
            <ArrowIcon />
          </a>
        </div>
        <div className="hero-stage">
          {tokenx ? (
            <BrowserFrame
              className="hero-card hero-card-front"
              project={tokenx}
              size="hero"
              priority
            />
          ) : null}
          {gold ? (
            <BrowserFrame
              className="hero-card hero-card-back"
              project={gold}
              size="hero"
            />
          ) : null}
        </div>
      </div>
      <div className="expertise">
        <div className="shell expertise-row">
          <p className="tenure">{site.expertise.tenure}</p>
          <span className="expertise-rule" aria-hidden="true" />
          <p className="areas">{site.expertise.areas}</p>
        </div>
      </div>
    </section>
  );
}
