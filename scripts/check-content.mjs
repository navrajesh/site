import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = readFileSync(path.join(root, "content", "site.ts"), "utf8");
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
  "not the official T-REX suite",
  "Not audited, and not custody of physical gold.",
  "local Hardhat chain 31337",
  "Writes are simulated before wallet submission.",
  "There is no public-chain deployment.",
  "pending an active Twilio account",
  "manually triggered playbook",
  "SaaS prototype",
  "Authorization proof of concept",
  "Credential proof of concept",
  "Not a production wallet",
  "does not make live model calls",
  "Some of the Node.js labs do call models.",
  "does not sync across devices",
  "No learner accounts.",
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
