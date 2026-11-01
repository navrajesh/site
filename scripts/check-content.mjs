import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = readFileSync(path.join(root, "content", "site.ts"), "utf8");
const referenceSource = readFileSync(
  path.join(root, "content", "project-reference.ts"),
  "utf8",
);
const panelSource = readFileSync(
  path.join(root, "components", "project-panel.tsx"),
  "utf8",
);
const failures = [];

function requireText(value) {
  if (!source.includes(value)) {
    failures.push(`Missing required text: ${value}`);
  }
}

function forbidText(value) {
  if (source.toLowerCase().includes(value.toLowerCase())) {
    failures.push(`Forbidden text present: ${value}`);
  }
}

function requireReferenceText(value) {
  if (!referenceSource.includes(value)) {
    failures.push(`Missing internal project reference: ${value}`);
  }
}

const titles = [
  "TokenX — Web3 & Blockchain Tokenization Platform",
  "AURA — Patient Reactivation SaaS Platform",
  "Gold Tokenization — Real-World Assets (RWA)",
  "Real Estate Tokenization — ERC-3643",
  "KYA Procurement Lab",
  "Proofline VC Lab",
  "Aura Certified — Business Certification VC",
  "AI Agent Labs",
  "System Design Academy",
  "ServiceFlow",
];

let cursor = -1;
for (const title of titles) {
  const index = source.indexOf(title);
  if (index === -1 || index < cursor) {
    failures.push(`Projects are out of order at ${title}`);
  }
  cursor = index;
}

[
  "navrajesh@gmail.com",
  "https://github.com/navrajesh",
  "https://www.linkedin.com/in/rajesh-nkrishnan/",
  "https://www.tokenx.dev/demos",
  'label: "Live demo"',
  "Principal design and development lead at LifeSite.",
  "https://gold-tokenization.vercel.app",
  "https://raj-rwa-real-estate.vercel.app",
  "https://kya-procurement-agent-poc-gold.vercel.app",
  "https://vc-browser-poc.vercel.app",
  "https://app.aurainvites.com/sign-in",
  "https://aura-certified-vc-murex.vercel.app",
  "https://ai-agent-labs.vercel.app",
  "https://system-design-academy-lemon.vercel.app",
  "https://service-flow-raj.vercel.app",
  "CSV import pipeline, reusable SMS templates, Twilio messaging, SSE, and Inngest jobs.",
  "Reserve enforcement is not complete across every mint path.",
  "blockchain operations require the local Hardhat network",
  "SaaS prototype",
  "Authorization proof of concept",
  "Credential proof of concept",
  "without live model calls",
  "without learner accounts or cross-device sync",
  "Testnet proof of concept",
  "Local blockchain demo",
  "Labs + browser simulations",
  "Interactive learning app",
  "Hosted platform and demo suite",
  "Exploring the lifecycle of tokenized gold.",
  "Exploring permissioned real-estate tokens.",
  "From tool calls to reliable workflows.",
  "Making complex systems tangible.",
].forEach(requireText);

[
  "Reserve enforcement is incomplete across some mint paths.",
  "local Hardhat chain 31337",
  "Not a production wallet",
  "does not make live model calls",
  "Do not imply interview outcomes",
].forEach(requireReferenceText);

[
  "The supplied README describes",
  "Documented capabilities",
  "Do not claim",
  "Visible Open Demo actions",
  "screenshots show a demo catalog",
  "what screenshots",
  "what documentation",
  "LangChain",
  "uc-gold-tokenization-ten.vercel.app",
  "rwa-real-estate-sigma.vercel.app",
  "navrajesh/rwa-real-estate",
  "navrajesh/AI-Learn-Concepts",
  "tamper-proof",
  "guarantees authenticity",
  'href: "#"',
  "href: '#'",
  "example.com",
].forEach(forbidText);

if (panelSource.includes("Project notes") || panelSource.includes("project.notes")) {
  failures.push("Generic Project notes disclosure is still rendered");
}

const pdfPath = path.join(root, "docs", "resume", "resume.pdf");
if (!existsSync(pdfPath)) {
  failures.push("Resume PDF is missing");
} else {
  const header = readFileSync(pdfPath).subarray(0, 5).toString();
  if (header !== "%PDF-") {
    failures.push("docs/resume/resume.pdf is not a PDF");
  }
}

if (!source.includes('href: "/resume"')) {
  failures.push("Resume href is not /resume");
}

const imageSources = [...source.matchAll(/src:\s*(null|"[^"]+")/g)].map((match) => match[1]);
if (imageSources.length < 10) {
  failures.push("Expected an image src for each project");
}

for (const value of imageSources) {
  if (value === "null") {
    continue;
  }
  const publicPath = value.slice(1, -1);
  if (!publicPath.startsWith("/")) {
    failures.push(`Image src must be a public path: ${publicPath}`);
    continue;
  }
  const filePath = path.join(root, "public", publicPath);
  if (!existsSync(filePath)) {
    failures.push(`Configured screenshot is missing: ${publicPath}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Content checks passed.");
