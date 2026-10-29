import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { ProjectIndex } from "@/components/project-index";
import { ProjectShowcase } from "@/components/project-showcase";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <ProjectIndex />
      <ProjectShowcase />
      <Experience />
      <Contact />
    </main>
  );
}
