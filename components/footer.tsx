import { linkTargetProps, site } from "@/content/site";

export function Footer() {
  const links = [
    ...site.navigation,
    site.resume ? { href: site.resume.href, label: site.resume.label } : null,
    site.github ? { href: site.github, label: "GitHub" } : null,
  ].filter((link) => link !== null);

  return (
    <footer className="site-footer">
      <div className="shell footer-bar">
        <a className="wordmark" href="#top">
          {site.name}.
        </a>
        <ul className="footer-nav">
          {links.map((link) => (
            <li key={`${link.href}-${link.label}`}>
              <a href={link.href} {...linkTargetProps(link.href)}>
                {link.label}
                {link.href.startsWith("https://") || link.href === "/resume" ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-note">{site.role}</p>
      </div>
    </footer>
  );
}
