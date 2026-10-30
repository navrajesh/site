import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SourceAccessProvider } from "@/components/source-access";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: `${site.fullName} · Principal Engineer`,
  description: site.hero.summary,
  authors: [{ name: site.fullName }],
  applicationName: site.fullName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f1",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SourceAccessProvider>
          <Header />
          {children}
          <Footer />
        </SourceAccessProvider>
      </body>
    </html>
  );
}
