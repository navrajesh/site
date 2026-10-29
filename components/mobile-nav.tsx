"use client";

import { linkTargetProps, site } from "@/content/site";

export function MobileNav() {
  return (
    <details className="nav-disclosure">
      <summary>
        <span className="menu-open-label">Menu</span>
        <span className="menu-close-label">Close</span>
      </summary>
      <ul className="nav-mobile">
        {site.navigation.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(event) => {
                event.currentTarget.closest("details")?.removeAttribute("open");
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
        {site.resume ? (
          <li>
            <a href={site.resume.href} {...linkTargetProps(site.resume.href)}>
              {site.resume.label}
              <span className="sr-only">, PDF, opens in a new tab</span>
            </a>
          </li>
        ) : null}
      </ul>
    </details>
  );
}
