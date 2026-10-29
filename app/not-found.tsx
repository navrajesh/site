import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="shell missing" id="content">
      <p className="eyebrow">404</p>
      <h1 className="section-title">This page is not on the site.</h1>
      <p className="lede">The portfolio lives on the home page.</p>
      <Link className="btn" href="/">
        Return home
      </Link>
    </main>
  );
}
