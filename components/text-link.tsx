import type { ReactNode } from "react";
import { linkTargetProps } from "@/content/site";
import { ArrowIcon } from "@/components/icons";

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const props = linkTargetProps(href);
  const opensNewTab = props.target === "_blank";

  return (
    <a className="text-link" href={href} {...props}>
      {children}
      {opensNewTab ? (
        <>
          <ArrowIcon />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      ) : null}
    </a>
  );
}
