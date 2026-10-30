import type { ReactNode } from "react";
import { IndexRow } from "@/components/index-row";

export function IndexDisclosure({
  id,
  number,
  title,
  summary,
  children,
}: {
  id: string;
  number: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <li>
      <details className="index-disclosure" id={id}>
        <IndexRow number={number} summary={summary} title={title} />
        <div className="index-panel">{children}</div>
      </details>
    </li>
  );
}
