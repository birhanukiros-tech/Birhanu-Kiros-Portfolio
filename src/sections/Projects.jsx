
import { ExternalLink, ArrowUpRight, Code2, } from "lucide-react";
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
    <section className="min-h-screen bg-white px-6 py-16 font-[Georgia] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Code2 size={16} />
            My Work
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Projects That Turn
            <span className="block text-blue-600">Ideas Into Reality</span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            These projects reflect my journey from core frontend development to
            React and Next.js. Each version represents what I have learned by
            building, testing, and improving real applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.version}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} ${project.category} website screenshot`}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.versionLabel} live demo`}
                  title={`Open ${project.versionLabel} live demo`}
                  className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {project.versionLabel}
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Addis Eats — {project.category}
                </h3>

                <p className="mt-3 min-h-28 flex-1 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  >
                    <Code2 size={17} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-900 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Every Project Is a Step Forward
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            I believe in learning by building, improving through feedback, and
            using technology to solve practical problems. I look forward to
            creating more useful digital experiences.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Let&apos;s Connect
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
