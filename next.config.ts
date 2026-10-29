import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  agentRules: false,
  devIndicators: false,
  outputFileTracingIncludes: {
    "/resume": ["./docs/resume/resume.pdf"],
  },
};

export default nextConfig;
