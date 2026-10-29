export type ProjectLink = {
  href: string;
  label: string;
};

export type ProjectImage = {
  /** Public path such as `/projects/gold.webp`. Null keeps the labeled placeholder. */
  src: string | null;
  alt: string;
};

export type ProjectTone =
  | "tokenx"
  | "gold"
  | "estate"
  | "aura"
  | "certified"
  | "kya"
  | "proof"
  | "labs"
  | "academy"
  | "serviceflow";

export type Project = {
  id: string;
  order: number;
  number: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  overviewSummary: string;
  role?: string;
  contribution?: string;
  useCaseCatalog?: string;
  technologies: readonly string[];
  status: string;
  featured: boolean;
  flagship?: boolean;
  notes: readonly string[];
  tone: ProjectTone;
  links: readonly ProjectLink[];
  image: ProjectImage;
  gallery?: readonly ProjectImage[];
  placeholder: {
    kicker: string;
    marks: readonly string[];
  };
};

export type NavLink = {
  href: string;
  label: string;
};

export type Site = {
  name: string;
  fullName: string;
  role: string;
  email: string | null;
  linkedin: string | null;
  github: string | null;
  resume: { href: string; label: string } | null;
  navigation: readonly NavLink[];
  hero: {
    eyebrow: string;
    titleLead: string;
    titleTail: string;
    accent: string;
    summary: string;
    cta: string;
  };
  expertise: {
    tenure: string;
    areas: string;
  };
  about: {
    eyebrow: string;
    titleLead: string;
    titleTail: string;
    body: string;
    detail: string;
  };
  contact: {
    titleLead: string;
    titleAccent: string;
    cta: string;
  };
  projects: readonly Project[];
};

const httpsLink = /^https:\/\/\S+$/;

export function publicLinks(links: readonly ProjectLink[]): ProjectLink[] {
  return links.filter((link) => httpsLink.test(link.href) && !link.href.includes("#"));
}

export function linkTargetProps(href: string): {
  target?: "_blank";
  rel?: string;
} {
  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return {};
  }

  if (href.startsWith("https://") || href.startsWith("http://") || href === "/resume") {
    return { target: "_blank", rel: "noopener noreferrer" };
  }

  return {};
}

export function orderedProjects(projects: readonly Project[] = site.projects): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export const site: Site = {
  name: "Rajesh",
  fullName: "Rajesh N Krishnan",
  role: "Principal engineer",
  // Decoded from the Cloudflare-protected address in docs/resume/index.html
  // and confirmed by the mailto link in docs/resume/resume.pdf.
  email: "navrajesh@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajesh-nkrishnan/",
  github: "https://github.com/navrajesh",
  resume: {
    href: "/resume",
    label: "Resume",
  },
  navigation: [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Principal engineer · Full-stack · Blockchain · AI",
    titleLead: "Engineering ideas.",
    titleTail: "Into",
    accent: "experiences.",
    summary:
      "I build thoughtful digital products, from full-stack platforms to blockchain systems and AI agent workflows.",
    cta: "Explore selected work",
  },
  expertise: {
    tenure: "20+ years of engineering",
    areas: "Web platforms / Blockchain systems / AI workflows",
  },
  about: {
    eyebrow: "About",
    titleLead: "Depth across the stack.",
    titleTail: "Curiosity beyond it.",
    body: "I’m Rajesh, an engineer with 20+ years of experience across web, mobile, voice, and blockchain. My work spans frontend architecture, backend services, and technical leadership, with a current focus on blockchain systems, AI agent workflows, and interactive products.",
    detail:
      "Currently engineering lead for Web3, blockchain, and RWA tokenization at LifeSite Inc. Previously principal engineer at Dell SonicWall, with earlier engineering work at Intuit, Commerce One, and as an independent full-stack consultant.",
  },
  contact: {
    titleLead: "Let’s build something",
    titleAccent: "meaningful.",
    cta: "Get in touch",
  },
  projects: [
    {
      id: "tokenx",
      order: 1,
      number: "01",
      title: "TokenX — Web3 Platform & Demo Suite",
      category: "Web3 Platform · Professional Work",
      description:
        "A Web3 platform and demo suite exploring tokenization, provenance, authentication, ticketing, and loyalty across multiple business use cases.",
      overviewSummary:
        "Web3 platform engineering, smart contracts, backend APIs, and tokenization workflows spanning provenance, authentication, ticketing, and loyalty.",
      role: "Principal design and development lead at LifeSite.",
      contribution:
        "My work spans smart contracts, Node.js APIs, custodial wallet and signing services, event indexing, deployment tooling, and use-case demos.",
      useCaseCatalog:
        "Provenance, authentication, ticketing, and loyalty, alongside other listed catalog entries.",
      notes: [
        "TokenX is one professional platform project with several listed use cases, not separate portfolio entries for every catalog item.",
        "The screenshots show a demo catalog. Visible Open Demo actions for Carbon Credits, Event Ticketing, and Rare Whiskey do not establish verified deep flows.",
        "Other catalog entries are listed use cases, not automatically completed functionality. Network coverage is not inferred from the Arbitrum Testnet selector alone.",
      ],
      technologies: ["Solidity", "Node.js", "Ethereum/EVM", "HashiCorp Vault"],
      status: "Hosted platform and demo suite",
      featured: true,
      flagship: true,
      tone: "tokenx",
      links: [
        {
          href: "https://www.tokenx.dev/demos",
          label: "Explore demo suite",
        },
      ],
      image: {
        src: "/projects/tokenx-demos-catalog.jpg",
        alt: "TokenX demos catalog with sidebar navigation and listed tokenization use cases",
      },
      gallery: [
        {
          src: "/projects/tokenx-demos-authentication.jpg",
          alt: "TokenX demo cards for authentication and event ticketing use cases",
        },
        {
          src: "/projects/tokenx-demos-provenance.jpg",
          alt: "TokenX demo cards for provenance and authenticity use cases",
        },
      ],
      placeholder: {
        kicker: "Hosted demo suite",
        marks: ["Provenance", "Authentication", "Loyalty"],
      },
    },
    {
      id: "gold-tokenization",
      order: 2,
      number: "02",
      title: "Gold Tokenization",
      category: "Blockchain / Asset Tokenization",
      tagline: "Exploring the lifecycle of tokenized gold.",
      description:
        "A full-stack testnet prototype exploring gold reserve records, permissioned token operations, and custodian-managed redemption workflows.",
      overviewSummary:
        "Full-stack testnet application, custom permissioned contracts, reserve records, and redemption workflows.",
      notes: [
        "Polygon Amoy. Custom permissioned contracts, not the official T-REX suite.",
        "Not audited, and not custody of physical gold. Reserve enforcement is not complete across all mint paths.",
      ],
      technologies: ["React", "Express", "Solidity", "Drizzle"],
      status: "Testnet proof of concept",
      featured: true,
      tone: "gold",
      links: [
        {
          href: "https://gold-tokenization.vercel.app",
          label: "Live demo",
        },
        {
          href: "https://github.com/navrajesh/uc-gold-tokenization",
          label: "Source",
        },
      ],
      image: {
        src: null,
        alt: "Gold Tokenization reserve and redemption interface",
      },
      placeholder: {
        kicker: "Polygon Amoy",
        marks: ["Reserve", "Redemption", "Custodian"],
      },
    },
    {
      id: "rwa-estate",
      order: 3,
      number: "03",
      title: "RWA Estate",
      category: "Blockchain / Permissioned Assets",
      tagline: "Exploring permissioned real-estate tokens.",
      description:
        "A local demonstration of the official ERC-3643/T-REX suite, featuring identity-gated transfers and administrative token controls.",
      overviewSummary:
        "Official ERC-3643/T-REX integration, identity-gated transfers, and local token administration.",
      notes: [
        "Blockchain operations use local Hardhat chain 31337. Writes are simulated before wallet submission.",
        "There is no public-chain deployment. Property details are fictional fixtures, not ownership or an investment result.",
      ],
      technologies: ["Next.js", "Solidity", "Hardhat", "viem"],
      status: "Local blockchain demo",
      featured: true,
      tone: "estate",
      links: [
        {
          href: "https://raj-rwa-real-estate.vercel.app",
          label: "Live demo",
        },
      ],
      image: {
        src: null,
        alt: "RWA Estate local ERC-3643 demonstration",
      },
      placeholder: {
        kicker: "Local chain 31337",
        marks: ["Identity", "Transfer", "Simulate"],
      },
    },
    {
      id: "aura",
      order: 4,
      number: "04",
      title: "AURA — Patient Reactivation OS",
      category: "SaaS / Customer Engagement",
      description:
        "A multi-tenant SaaS application for patient imports, personalized SMS outreach, and conversations, with customer and admin portals.",
      overviewSummary:
        "Multi-tenant SaaS, customer/admin portals, tenant isolation, and SMS workflows.",
      notes: [
        "Clerk organizations, with separate customer and admin applications. Tenant isolation uses Postgres RLS and database roles.",
        "The supplied README describes a CSV import pipeline, reusable SMS templates, Twilio messaging, SSE, and Inngest jobs. Live SMS validation is pending an active Twilio account.",
        "Templates are a manually triggered playbook, not a scheduled campaign engine. Staging and production schema rollout differ.",
      ],
      technologies: ["Next.js", "TypeScript", "Postgres", "Drizzle"],
      status: "SaaS prototype",
      featured: true,
      tone: "aura",
      links: [],
      image: {
        src: null,
        alt: "AURA customer portal with synthetic patient outreach",
      },
      placeholder: {
        kicker: "Synthetic data only",
        marks: ["Import", "Templates", "Inbox"],
      },
    },
    {
      id: "kya-procurement",
      order: 5,
      number: "05",
      title: "KYA Procurement Lab",
      category: "Agent Identity / Authorization",
      description:
        "A procurement authorization proof of concept combining signed organizational credentials, delegated agent authority, spending policies, and a tamper-evident decision trail.",
      overviewSummary:
        "Agent identity, delegated authority, spending policies, and auditability.",
      notes: [
        "A mock KYB provider issues an organization credential, then an agent authorization and a signed purchase request.",
        "The vendor checks trust, relationships, status, replay, and policy, including transaction, category, and vendor limits.",
        "Agent behavior is deterministic. There is no model call, standardized KYA profile, DID, real KYB, payment, or blockchain integration. The decision trail is tamper-evident, not immutable storage.",
      ],
      technologies: ["Next.js", "TypeScript", "Ed25519/JWS", "Prisma", "SQLite"],
      status: "Authorization proof of concept",
      featured: false,
      tone: "kya",
      links: [
        {
          href: "https://kya-procurement-agent-poc-gold.vercel.app",
          label: "Live demo",
        },
      ],
      image: {
        src: null,
        alt: "KYA Procurement Lab authorization trace",
      },
      placeholder: {
        kicker: "Local proof of concept",
        marks: ["KYB", "Policy", "Trace"],
      },
    },
    {
      id: "proofline",
      order: 6,
      number: "06",
      title: "Proofline VC Lab",
      category: "Digital Identity / Verifiable Credentials",
      description:
        "A browser-based credential proof of concept demonstrating issuance, selective disclosure, holder-bound presentations, and detailed verification checks.",
      overviewSummary:
        "Credential issuance, selective disclosure, holder binding, and verification.",
      notes: [
        "Issuer, holder wallet, and verifier flow with ES256 signatures, requested-claim disclosure, holder binding, and nonce, audience, expiration, and local status checks.",
        "Browser wallet storage and exportable holder keys are educational. Issuer keys, requests, and credential status stay in the local process.",
        "Not a production wallet, DID resolver, blockchain integration, or zero-knowledge proof system.",
      ],
      technologies: ["Next.js", "TypeScript", "SD-JWT VC", "Web Crypto"],
      status: "Credential proof of concept",
      featured: false,
      tone: "proof",
      links: [
        {
          href: "https://vc-browser-poc.vercel.app",
          label: "Live demo",
        },
      ],
      image: {
        src: null,
        alt: "Proofline issuer, wallet, and verifier flow",
      },
      placeholder: {
        kicker: "Browser proof of concept",
        marks: ["Issue", "Disclose", "Verify"],
      },
    },
    {
      id: "aura-certified",
      order: 7,
      number: "07",
      title: "Aura Certified — Business Certification VC",
      category: "Digital Identity / Verifiable Credentials",
      tagline: "Turning verified evidence into public trust.",
      description:
        "A location-specific business certification proof of concept spanning private evidence review, weighted assessment, signed credentials, QR verification, and credential lifecycle controls.",
      overviewSummary:
        "Evidence review, signed business credentials, public verification, and lifecycle controls.",
      notes: [
        "All businesses, people, addresses, documents, and images are fictional demonstration data.",
        "Phase 1 uses JOSE Ed25519 signatures and W3C-style credentials; no blockchain is used.",
      ],
      technologies: ["Next.js", "Postgres", "Drizzle", "JOSE/Ed25519"],
      status: "Phase 1 proof of concept",
      featured: false,
      tone: "certified",
      links: [
        {
          href: "https://aura-certified-vc-murex.vercel.app",
          label: "Live demo",
        },
      ],
      image: {
        src: null,
        alt: "Aura Certified evidence review and credential verification flow",
      },
      placeholder: {
        kicker: "Phase 1 proof of concept",
        marks: ["Evidence", "Credential", "Verify"],
      },
    },
    {
      id: "ai-agent-labs",
      order: 8,
      number: "08",
      title: "AI Agent Labs",
      category: "AI Engineering / Interactive Learning",
      tagline: "From tool calls to reliable workflows.",
      description:
        "Thirteen Node.js labs exploring tool calling, MCP, retrieval, planning, evaluation, and human approval, paired with a browser simulation playground.",
      overviewSummary:
        "Tool calling, MCP, retrieval, orchestration, evaluation, and human approval.",
      notes: [
        "The browser playground replays deterministic simulations and does not make live model calls.",
        "Some of the Node.js labs do call models.",
      ],
      technologies: ["Node.js", "OpenAI SDK", "MCP", "Next.js"],
      status: "Labs + browser simulations",
      featured: false,
      tone: "labs",
      links: [
        {
          href: "https://ai-agent-labs.vercel.app",
          label: "Live demo",
        },
      ],
      image: {
        src: null,
        alt: "AI Agent Labs simulation playground",
      },
      placeholder: {
        kicker: "13 labs",
        marks: ["Tools", "MCP", "Evaluation"],
      },
    },
    {
      id: "system-design-academy",
      order: 9,
      number: "09",
      title: "System Design Academy",
      category: "System Design / Interactive Learning",
      tagline: "Making complex systems tangible.",
      description:
        "An interactive system design curriculum with 64 lessons, architecture exploration, comparison matrices, and failure walkthroughs.",
      overviewSummary:
        "Interactive technical education, architecture exploration, and content engineering.",
      notes: [
        "Progress is stored in the browser and does not sync across devices.",
        "No learner accounts. Progress does not sync across devices, and interview outcomes are not claimed.",
      ],
      technologies: ["Next.js", "TypeScript", "MDX"],
      status: "Interactive learning app",
      featured: false,
      tone: "academy",
      links: [
        {
          href: "https://system-design-academy-lemon.vercel.app",
          label: "Live demo",
        },
        {
          href: "https://github.com/navrajesh/system-design-academy",
          label: "Source",
        },
      ],
      image: {
        src: "/projects/system-design-academy.jpg",
        alt: "System Design Academy homepage, with the curriculum sidebar and an empty local progress indicator",
      },
      placeholder: {
        kicker: "64 lessons",
        marks: ["Lessons", "Matrices", "Failures"],
      },
    },
    {
      id: "serviceflow",
      order: 10,
      number: "10",
      title: "ServiceFlow",
      category: "SaaS / Field Service Operations",
      tagline: "One operational thread from booking to invoice.",
      description:
        "A production-style portfolio foundation for fictional home-service operations, with responsive marketing and role-specific customer, technician, and administrator shells.",
      overviewSummary:
        "Home-service workflow design, responsive role-based shells, and an extensible SaaS foundation.",
      notes: [
        "All people, addresses, appointments, payments, invoices, and messages are fictional.",
        "The current deployment is a foundation: authentication, persistence, booking, payments, and operational workflows remain planned milestones.",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Playwright"],
      status: "Foundation prototype",
      featured: false,
      tone: "serviceflow",
      links: [
        {
          href: "https://service-flow-raj.vercel.app",
          label: "Live demo",
        },
      ],
      image: {
        src: null,
        alt: "ServiceFlow marketing page and role-specific portal shells",
      },
      placeholder: {
        kicker: "Fictional operations demo",
        marks: ["Booking", "Dispatch", "Invoice"],
      },
    },
  ],
};
