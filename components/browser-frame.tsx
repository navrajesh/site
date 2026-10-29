import Image from "next/image";
import type { Project } from "@/content/site";

function PlaceholderArt({ tone }: { tone: Project["tone"] }) {
  if (tone === "gold") {
    return <div className="specimen" />;
  }

  if (tone === "estate") {
    return (
      <div className="facade">
        <span className="wing" />
        <span className="tower" />
      </div>
    );
  }

  if (
    tone === "tokenx" ||
    tone === "aura" ||
    tone === "certified" ||
    tone === "kya" ||
    tone === "proof" ||
    tone === "labs" ||
    tone === "serviceflow"
  ) {
    return (
      <div className="nodes">
        <span className="node" />
        <span className="edge" />
        <span className="node" />
        <span className="edge" />
        <span className="node" />
      </div>
    );
  }

  return (
    <div className="lessons">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export function BrowserFrame({
  project,
  size = "feature",
  priority = false,
  className = "",
}: {
  project: Project;
  size?: "hero" | "feature" | "flagship" | "support";
  priority?: boolean;
  className?: string;
}) {
  const lift = size === "hero" ? "" : "frame-lift";
  const image = project.image;

  return (
    <figure className={`frame frame-${size} ${lift} ${className}`.trim()}>
      <div className="chrome" aria-hidden="true">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="chrome-label">Preview</span>
        <span />
      </div>
      {image.src ? (
        <div className={`shot shot-${size}`}>
          <a
            className="shot-link"
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              sizes={
                size === "support"
                  ? "(min-width: 1024px) 360px, 100vw"
                  : size === "flagship"
                    ? "(min-width: 1024px) 1100px, 100vw"
                    : "(min-width: 1024px) 720px, 100vw"
              }
            />
            <span className="sr-only">Open larger screenshot</span>
          </a>
        </div>
      ) : (
        <div className={`preview preview-${project.tone}`}>
          <p className="preview-stamp">Placeholder</p>
          <div>
            <p className="preview-kicker">{project.placeholder.kicker}</p>
            <p className="preview-title">{project.title}</p>
            <ul className="preview-marks">
              {project.placeholder.marks.map((mark) => (
                <li key={mark}>{mark}</li>
              ))}
            </ul>
          </div>
          <PlaceholderArt tone={project.tone} />
          <p className="preview-note">Layout preview, not a product screenshot.</p>
        </div>
      )}
    </figure>
  );
}
