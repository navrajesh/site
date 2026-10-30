import { ArrowDownIcon } from "@/components/icons";

export function IndexRow({
  number,
  title,
  summary,
}: {
  number: string;
  title: string;
  summary: string;
}) {
  return (
    <summary className="index-row">
      <span className="index-number">{number}</span>
      <span className="index-name">{title}</span>
      <span className="index-summary">{summary}</span>
      <span className="index-arrow">
        <span className="index-toggle">
          <span className="index-toggle-open">Expand</span>
          <span className="index-toggle-close">Collapse</span>
        </span>
        <span className="index-chevron">
          <ArrowDownIcon />
        </span>
      </span>
    </summary>
  );
}
