
import {
  ExternalLink,
  ArrowUpRight,
  Code2,
  Layers3,
} from "lucide-react";

import htmlProjectImage from "../assets/addis_eats_html.png";
import reactProjectImage from "../assets/addis_eats_react.png";
import nextProjectImage from "../assets/addis_eats_next.png";

const projects = [
  {
    title: "Addis Eats",
    image: htmlProjectImage,
    version: "01",
    versionLabel: "First Version",
    category: "Frontend Development",
    description:
      "A responsive food-ordering website inspired by Ethiopian cuisine, built with core web technologies to practice page structure, styling, and interactive features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://addis-eats-html.vercel.app/index.html",
    githubUrl: "https://github.com/birhanukiros-tech/addis-eats-html",
  },
  {
    title: "Addis Eats",
    image: reactProjectImage,
    version: "02",
    versionLabel: "React",
    category: "React Development",
    description:
      "A React food-ordering application built with reusable components, menu browsing, category filtering, and a shopping cart experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://addis-eats-react-seven.vercel.app/",
    githubUrl: "https://github.com/birhanukiros-tech/addis-eats-react",
  },
  {
    title: "Addis Eats",
    image: nextProjectImage,
    version: "03",
    versionLabel: "Next.js",
    category: "Next.js Development",
    description:
      "A Next.js food-ordering application featuring menu browsing, authentication, protected routes, and an ordering workflow.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://addis-eats-nextjs-o13s.vercel.app/",
    githubUrl: "https://github.com/birhanukiros-tech/addis-eats-nextjs",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-14 pt-8 transition-colors duration-200 dark:bg-slate-950 sm:px-8 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        
<header className="mb-9 mx-auto max-w-3xl text-center sm:mb-10">
  <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-semibold text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-blue-400">
    <Code2 size={16} />
    My Work
  </span>

  <h1 className="mt-4 font-['Georgia',serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
    Projects That Turn
    <span className="mt-1 block text-blue-600 dark:text-blue-400">
      Ideas Into Reality
    </span>
  </h1>

  <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />

  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
    These projects reflect my journey from core frontend development to
    React and Next.js. Each version represents what I have learned by
    building, testing, and improving real applications.
  </p>
</header>

        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Layers3 size={17} className="text-blue-600 dark:text-blue-400" />
          <span>Three versions of one evolving project</span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.version}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={`${project.title} ${project.category} website screenshot`}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />

                <span className="absolute left-3 top-3 rounded-lg border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/95 dark:text-blue-400">
                  {project.version}
                </span>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.versionLabel} live demo`}
                  className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-slate-900/95 dark:text-white dark:hover:bg-blue-500 dark:focus-visible:outline-blue-400"
                >
                  Preview
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {project.versionLabel}
                </p>

                <h2 className="mt-2 font-['Georgia',serif] text-xl font-bold leading-snug text-slate-900 dark:text-white">
                  Addis Eats — {project.category}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-slate-800 dark:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-400"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:focus-visible:outline-blue-400"
                  >
                    <Code2 size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-[#e99230] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:mt-14 sm:p-9">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
              <Layers3 size={25} />
            </div>

            <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Every Project Is a Step Forward
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              I believe in learning by building, improving through feedback, and
              using technology to solve practical problems. I look forward to
              creating more useful digital experiences.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-400"
            >
              Let&apos;s Connect
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;
