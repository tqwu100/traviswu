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

      <section className="max-w-[640px] space-y-8 text-[17px] leading-8 text-white">
        <p>
          I study applied mathematics, cognitive science, and statistics at
          UCLA, with a focus on data science.
        </p>
        <p>
          In recent years, I&apos;ve{" "}
          <Button href="/engineering">analyzed planetary landing sites</Button>{" "}
          with NASA L&apos;SPACE,{" "}
          <Button href="/engineering">led data analysis and CAD</Button> for an
          FTC team that placed 2nd at state championships, and competed at the{" "}
          <Button href="/engineering">2023 FRC World Championship Finals</Button>
          .
        </p>
        <p>
          I&apos;m also a pickleball player and hobbyist{" "}
          <Button href="/photography">photographer</Button>.
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
