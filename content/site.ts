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

export type ProjectIndexGroup = "featured" | "lab";

export type ProjectIndexSection = {
  id: string;
  group: ProjectIndexGroup;
  title: string;
  subtitle?: string;
  countNoun: string;
};

export type Project = {
  id: string;
  order: number;
  number: string;
  indexGroup: ProjectIndexGroup;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  overviewSummary: string;
  role?: string;
  contribution?: string;
  useCaseCatalog?: string;
  architectureScope?: readonly string[];
  technologies: readonly string[];
  status: string;
  featured: boolean;
  flagship?: boolean;
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
    intro: string;
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

export const projectIndexSections: readonly ProjectIndexSection[] = [
  {
    id: "featured-projects",
    group: "featured",
    title: "Featured Projects",
    subtitle:
      "Selected work spanning blockchain tokenization, real-world assets, and full-stack SaaS platforms.",
    countNoun: "projects",
  },
  {
    id: "engineering-labs",
    group: "lab",
    title: "Engineering Labs",
    subtitle: "Explorations in Web3, AI agents, digital identity, and system architecture.",
    countNoun: "labs",
  },
];

export type PublishedApplication = {
  id: string;
  number: string;
  title: string;
  summary: string;
  category: string;
  description: string;
  focus: readonly string[];
  href: string;
  linkLabel: string;
  status: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const publishedApplications: readonly PublishedApplication[] = [
  {
    id: "lifesite-alexa",
    number: "01",
    title: "LifeSite — Amazon Alexa Skill",
    summary: "Hands-free LifeSite information and reminders, published on Amazon Alexa.",
    category: "Voice Application · Amazon Alexa Skills Store",
    description:
      "Personally designed, developed, and published a voice-enabled integration for LifeSite, enabling hands-free access to personal information and reminders through Amazon Alexa. Implemented account-linked functionality and successfully completed Amazon's skill review and approval process.",
    focus: [
      "Amazon Alexa Skills",
      "Voice User Experience",
      "Account Linking",
      "Backend API Integration",
      "Marketplace Publishing",
    ],
    href: "https://www.amazon.com/dp/B077WGGHBB",
    linkLabel: "View on Amazon Alexa",
    status: "Published & Approved",
    image: {
      src: "/applications/lifesite-alexa.webp",
      alt: "LifeSite logo and title on the Amazon Alexa Skills store, listed under Lifestyle and Self Improvement",
      width: 816,
      height: 320,
    },
  },
  {
    id: "lifesite-salesforce",
    number: "02",
    title: "LifeSite — Salesforce AppExchange Application",
    summary: "LifeSite integration for the Salesforce ecosystem, published on AppExchange.",
    category: "Enterprise Application · Salesforce AppExchange",
    description:
      "Personally developed and published a Salesforce application integrating LifeSite with the Salesforce ecosystem. Owned the application implementation and successfully completed the Salesforce AppExchange review and approval process.",
    focus: [
      "Salesforce Lightning",
      "Enterprise Application Development",
      "Salesforce Integration",
      "Application Publishing",
      "Marketplace Review and Approval",
    ],
    href: "https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000G0vaEUAR",
    linkLabel: "View on Salesforce AppExchange",
    status: "Published & Approved",
    image: {
      src: "/applications/lifesite-salesforce.webp",
      alt: "LifeSite for Salesforce listing icon and application title from the Salesforce marketplace",
      width: 1168,
      height: 434,
    },
  },
];

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
    accent: "real-world systems.",
    summary:
      "Hands-on engineering across Web3, real-world asset tokenization, full-stack platforms, and AI-powered workflows.",
    cta: "Explore my work",
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
    intro:
      "Open to Web3, blockchain/tokenization, and full-stack engineering opportunities — full-time, contract, or consulting.",
  },
  projects: [
    {
      id: "tokenx",
      order: 1,
      number: "01",
      indexGroup: "featured",
      title: "TokenX — Web3 & Blockchain Tokenization Platform",
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
      technologies: ["Solidity", "Node.js", "Ethereum/EVM", "HashiCorp Vault"],
      status: "Hosted platform and demo suite",
      featured: true,
      flagship: true,
      tone: "tokenx",
      links: [
        {
          href: "https://www.tokenx.dev/demos",
          label: "Live demo",
        },
      ],
      image: {
        src: "/projects/01-tokenx.png",
        alt: "TokenX demos catalog listing supply chain, identity, gemstones, whiskey, documents, and loyalty",
      },
      placeholder: {
        kicker: "Hosted demo suite",
        marks: ["Provenance", "Authentication", "Loyalty"],
      },
    },
    {
      id: "aura",
      order: 2,
      number: "02",
      indexGroup: "featured",
      title: "AURA — Patient Reactivation SaaS Platform",
      category: "SaaS / Customer Engagement",
      description:
        "A multi-tenant SaaS application for patient imports, personalized SMS outreach, and conversations, with customer and admin portals.",
      overviewSummary:
        "Multi-tenant SaaS, customer/admin portals, tenant isolation, and SMS workflows.",
      architectureScope: [
        "Separate customer and admin portals, with Postgres row-level security and database roles for tenant isolation.",
        "CSV import pipeline, reusable SMS templates, Twilio messaging, SSE, and Inngest jobs.",
      ],
      technologies: ["Next.js", "TypeScript", "Postgres", "Drizzle"],
      status: "SaaS prototype",
      featured: true,
      tone: "aura",
      links: [
        {
          href: "https://app.aurainvites.com/sign-in",
          label: "Live demo",
        },
      ],
      image: {
        src: "/projects/02-aura.png",
        alt: "AURA overview with recovered revenue, patient conversions, and reactivation funnel",
      },
      placeholder: {
        kicker: "Synthetic data only",
        marks: ["Import", "Templates", "Inbox"],
      },
    },
    {
      id: "gold-tokenization",
      order: 3,
      number: "03",
      indexGroup: "featured",
      title: "Gold Tokenization — Real-World Assets (RWA)",
      category: "Blockchain / Asset Tokenization",
      tagline: "Exploring the lifecycle of tokenized gold.",
      description:
        "A full-stack testnet prototype exploring gold reserve records, permissioned token operations, and custodian-managed redemption workflows.",
      overviewSummary:
        "Full-stack Polygon blockchain testnet application, custom permissioned contracts, reserve records, and redemption workflows.",
      architectureScope: [
        "Polygon Amoy testnet prototype using custom permissioned contracts rather than the T-REX suite.",
        "Models reserve records, controlled token operations, and custodian-managed redemption workflows.",
        "Reserve enforcement is not complete across every mint path.",
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
      ],
      image: {
        src: "/projects/03-gold-tokenization.jpg",
        alt: "Gold Tokenizer reserve dashboard with vault balance, circulating supply, and on-chain verification",
      },
      placeholder: {
        kicker: "Polygon Amoy",
        marks: ["Reserve", "Redemption", "Custodian"],
      },
    },
    {
      id: "rwa-estate",
      order: 4,
      number: "04",
      indexGroup: "featured",
      title: "Real Estate Tokenization — ERC-3643",
      category: "Blockchain / Permissioned Assets",
      tagline: "Exploring permissioned real-estate tokens.",
      description:
        "A local demonstration of the official ERC-3643/T-REX suite, featuring identity-gated transfers and administrative token controls.",
      overviewSummary:
        "Official ERC-3643/T-REX integration, identity-gated transfers, and local token administration.",
      architectureScope: [
        "Built with the official ERC-3643/T-REX suite on a local Hardhat network, with identity-gated transfers and transaction simulation before submission.",
        "The hosted link is a UI preview; blockchain operations require the local Hardhat network.",
        "Property details are fictional fixtures, not ownership records or investment results.",
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
        src: "/projects/04-real-estate-tokenization.jpg",
        alt: "Real estate portfolio dashboard with property value, yield, and on-chain eligibility",
      },
      placeholder: {
        kicker: "Local chain 31337",
        marks: ["Identity", "Transfer", "Simulate"],
      },
    },
    {
      id: "kya-procurement",
      order: 5,
      number: "05",
      indexGroup: "lab",
      title: "KYA Procurement Lab",
      category: "Agent Identity / Authorization",
      description:
        "A procurement authorization proof of concept combining signed organizational credentials, delegated agent authority, spending policies, and a tamper-evident decision trail.",
      overviewSummary:
        "Agent identity, delegated authority, spending policies, and auditability.",
      architectureScope: [
        "A mock KYB provider issues an organization credential, delegated agent authority, and a signed purchase request.",
        "The vendor evaluates trust, credential relationships, status, replay protection, and transaction, category, and vendor limits.",
        "The agent is deterministic, with no model call, real KYB, payment, or blockchain integration; the audit trail is tamper-evident rather than immutable.",
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
        src: "/projects/kya-procurement-lab.png",
        alt: "KYA Procurement Lab overview showing the delegated purchasing trust chain from KYB through audit",
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
      indexGroup: "lab",
      title: "Proofline VC Lab",
      category: "Digital Identity / Verifiable Credentials",
      description:
        "A browser-based credential proof of concept demonstrating issuance, selective disclosure, holder-bound presentations, and detailed verification checks.",
      overviewSummary:
        "Credential issuance, selective disclosure, holder binding, and verification.",
      architectureScope: [
        "Issuer, holder, and verifier workflows use ES256 signatures, requested-claim disclosure, holder binding, and nonce, audience, expiration, and status checks.",
        "The educational browser wallet keeps issuer keys, requests, and credential status in the local process; it is not a DID resolver, blockchain integration, or zero-knowledge system.",
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
        src: "/projects/proofline-vc-lab.png",
        alt: "Proofline VC Lab landing page with the credential protocol flow and a signed employee training credential",
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
      indexGroup: "lab",
      title: "Aura Certified — Business Certification VC",
      category: "Digital Identity / Verifiable Credentials",
      tagline: "Turning verified evidence into public trust.",
      description:
        "A location-specific business certification proof of concept using fictional demonstration data for private evidence review, weighted assessment, off-chain signed credentials, QR verification, and lifecycle controls.",
      overviewSummary:
        "Evidence review, signed business credentials, public verification, and lifecycle controls.",
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
        src: "/projects/aura-certified-directory.png",
        alt: "Aura Certified directory showing the fictional Bella Kitchen and Harbor Grill certification listings",
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
      indexGroup: "lab",
      title: "AI Agent Labs",
      category: "AI Engineering / Interactive Learning",
      tagline: "From tool calls to reliable workflows.",
      description:
        "Node.js exercises exploring tool calling, MCP, retrieval, planning, evaluation, and human approval, paired with a browser playground that replays deterministic simulations.",
      overviewSummary:
        "Tool calling, MCP, retrieval, orchestration, evaluation, and human approval.",
      architectureScope: [
        "Thirteen Node.js exercises cover tool use, retrieval, orchestration, evaluation, and human approval.",
        "Some Node.js labs call models; the browser playground uses deterministic replays without live model calls.",
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
        src: "/projects/ai-agent-labs.png",
        alt: "AI Agent Labs homepage showing the intelligent-agent architecture and deterministic runtime diagram",
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
      indexGroup: "lab",
      title: "System Design Academy",
      category: "System Design / Interactive Learning",
      tagline: "Making complex systems tangible.",
      description:
        "An interactive system design curriculum with 64 lessons, architecture exploration, comparison matrices, and failure walkthroughs. Progress stays in the browser, without learner accounts or cross-device sync.",
      overviewSummary:
        "Interactive technical education, architecture exploration, and content engineering.",
      technologies: ["Next.js", "TypeScript", "MDX"],
      status: "Interactive learning app",
      featured: false,
      tone: "academy",
      links: [
        {
          href: "https://system-design-academy-lemon.vercel.app",
          label: "Live demo",
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
      indexGroup: "lab",
      title: "ServiceFlow",
      category: "SaaS / Field Service Operations",
      tagline: "One operational thread from booking to invoice.",
      description:
        "A responsive interface foundation for fictional home-service operations, with marketing and role-specific customer, technician, and administrator shells. Authentication, persistence, booking, payments, and live operational workflows remain planned.",
      overviewSummary:
        "Home-service workflow design, responsive role-based shells, and an extensible SaaS foundation.",
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
