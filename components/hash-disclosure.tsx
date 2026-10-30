"use client";

import { useEffect } from "react";

function openHashedDisclosure() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) {
    return;
  }

  const target = document.getElementById(id);
  const details =
    target instanceof HTMLDetailsElement ? target : target?.closest("details");

  if (!(details instanceof HTMLDetailsElement)) {
    return;
  }

  if (!details.classList.contains("index-disclosure")) {
    return;
  }

  details.open = true;
  details.scrollIntoView({ block: "start" });
}

export function HashDisclosure() {
  useEffect(() => {
    openHashedDisclosure();
    window.addEventListener("hashchange", openHashedDisclosure);
    return () => window.removeEventListener("hashchange", openHashedDisclosure);
  }, []);

  return null;
}
