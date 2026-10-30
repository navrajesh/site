import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { ProjectIndex } from "@/components/project-index";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <ProjectIndex />
      <Experience />
      <Contact />
    </main>
  );
}
