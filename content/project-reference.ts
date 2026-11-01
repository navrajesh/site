/**
 * Internal project constraints and review references.
 *
 * This file is intentionally not imported by the portfolio UI. It preserves
 * implementation limits that should inform future copy without rendering
 * reviewer commentary on public project cards.
 */
export const projectReference = {
  tokenx: [
    "TokenX is one professional platform project with several representative use cases.",
    "Visible catalog actions and screenshots do not, by themselves, verify every listed deep flow.",
    "Do not infer network coverage from a testnet selector or claim every catalog entry is complete.",
  ],
  aura: [
    "Customer and admin applications use Clerk organizations; Postgres RLS and database roles provide tenant isolation.",
    "The documented pipeline includes CSV import, reusable SMS templates, Twilio messaging, SSE, and background jobs.",
    "Live SMS validation is pending an active Twilio account. Templates are manually triggered rather than a scheduled campaign engine.",
  ],
  goldTokenization: [
    "Polygon Amoy prototype with custom permissioned contracts, not the official T-REX suite.",
    "Not audited and not custody of physical gold. Reserve enforcement is incomplete across some mint paths.",
    "The public demo link is enabled by explicit portfolio-owner approval; keep the testnet and incomplete reserve-enforcement limitations visible.",
    "Public demo: https://gold-tokenization.vercel.app",
  ],
  rwaEstate: [
    "Blockchain operations require local Hardhat chain 31337; writes are simulated before wallet submission.",
    "There is no public-chain deployment. Hosted links are UI previews only.",
    "Property details are fictional fixtures, not ownership records or investment results.",
  ],
  kyaProcurement: [
    "The KYB provider is mocked and the agent behavior is deterministic; there is no model call, real KYB, payment, DID, or blockchain integration.",
    "The decision trail is tamper-evident, not immutable storage.",
  ],
  proofline: [
    "Browser wallet storage and exportable holder keys are educational; issuer keys, requests, and credential status remain in the local process.",
    "Not a production wallet, DID resolver, blockchain integration, or zero-knowledge proof system.",
  ],
  auraCertified: [
    "All businesses, people, addresses, documents, and images are fictional demonstration data.",
    "Phase 1 uses JOSE Ed25519 signatures and W3C-style credentials; no blockchain is used.",
  ],
  aiAgentLabs: [
    "The browser playground replays deterministic simulations and does not make live model calls.",
    "Some Node.js labs do call models.",
  ],
  systemDesignAcademy: [
    "Progress is browser-local, with no learner accounts or cross-device sync.",
    "Do not imply interview outcomes or completion guarantees.",
  ],
  serviceflow: [
    "All people, addresses, appointments, payments, invoices, and messages are fictional.",
    "Authentication, persistence, booking, payments, and operational workflows remain planned milestones.",
  ],
} as const;
