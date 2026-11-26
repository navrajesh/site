import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { ProjectIndex } from "@/components/project-index";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <ProjectIndex />
      <Journey />
      <Experience />
      <Contact />
    </main>
  );
}
