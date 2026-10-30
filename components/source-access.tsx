"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { CloseIcon } from "@/components/icons";
import { site } from "@/content/site";

const SourceAccessContext = createContext<() => void>(() => {});

const sourceSubject = "Portfolio — Source Access Request";
const sourceBody = `Hi Raj,

I'd like to request access to the source code for:

Project:
Organization:
Reason for access:

Thanks,`;

function sourceMailto() {
  return `mailto:${site.email}?subject=${encodeURIComponent(sourceSubject)}&body=${encodeURIComponent(sourceBody)}`;
}

export function SourceAccessProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <SourceAccessContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        className="source-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          }
        }}
      >
        <div className="source-dialog-head">
          <h2 id={titleId}>Request Source Access</h2>
          <button
            type="button"
            className="source-dialog-close"
            onClick={close}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <p id={descriptionId}>
          Please mention which project you&apos;d like to review and briefly
          introduce yourself.
        </p>
        <a
          className="btn"
          href={sourceMailto()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Request access
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </dialog>
    </SourceAccessContext.Provider>
  );
}

export function RequestSourceButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const open = useContext(SourceAccessContext);

  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
