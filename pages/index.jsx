import Head from "next/head";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travis Wu</title>
        <meta
          name="description"
          content="Travis Wu studies applied mathematics, cognitive science, and statistics at UCLA."
        />
      </Head>

      <section className="space-y-8 text-[17px] leading-8 text-white">
        <p>
          I study applied mathematics, cognitive science, and statistics at
          UCLA.
        </p>
        <p>
          Currently, I&apos;m working on planetary landing site analysis with NASA L&apos;SPACE,{" "}. Previously, I
          led data analysis for an FTC robotics team that placed 2nd at state championships.
        </p>
        <p>
          I&apos;m also an avid pickleball player and a hobbyist photographer.
        </p>
      </section>

      <Footer />

      <section className="mt-20 grid grid-cols-2 gap-x-8 gap-y-14 sm:gap-x-10 sm:gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </>
  );
}
