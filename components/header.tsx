import { MobileNav } from "@/components/mobile-nav";
import { linkTargetProps, site } from "@/content/site";

function ResumeLink({ className = "" }: { className?: string }) {
  if (!site.resume) {
    return null;
  }

  return (
    <a className={`resume-link ${className}`.trim()} href={site.resume.href} {...linkTargetProps(site.resume.href)}>
      {site.resume.label}
      <span className="sr-only">, PDF, opens in a new tab</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="shell header-bar">
        <a className="wordmark" href="#top">
          {site.name}.
        </a>
        <nav aria-label="Primary">
          <ul className="nav-desktop">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            {site.resume ? (
              <li>
                <ResumeLink />
              </li>
            ) : null}
          </ul>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
