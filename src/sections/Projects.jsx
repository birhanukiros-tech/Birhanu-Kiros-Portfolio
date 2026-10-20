import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    title: "Addis Eats",
    version: "01",
    category: "Frontend Development",
    description:
      "A food-ordering website inspired by Ethiopian cuisine. This project focuses on building a clear, responsive interface using the core frontend web technologies.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Addis Eats",
    version: "02",
    category: "React Development",
    description:
      "A React-based food-ordering application featuring reusable components, menu browsing, category filtering, and a shopping cart experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Addis Eats",
    version: "03",
    category: "Full-Stack Development",
    description:
      "A Next.js food-ordering application developed with menu browsing, authentication, protected routes, and an ordering workflow.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://addis-eats-nextjs-o13s.vercel.app/",
    githubUrl: "",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 font-[Georgia] sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Introduction */}
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
            These projects reflect my journey in web development, from building
            with HTML, CSS, and JavaScript to creating applications with React
            and Next.js. Each version represents an opportunity to learn,
            practice, and improve.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.version}
              className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Visual header */}
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
                <div className="text-center">
                  <span className="text-sm font-semibold tracking-[0.2em] text-blue-600">
                    PROJECT {project.version}
                  </span>

                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {project.title}
                    <span className="text-blue-600">.</span>
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {project.category}
                  </p>
                </div>

                <span className="absolute right-4 top-4 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-medium text-blue-700">
                  {project.version === "01"
                    ? "First Version"
                    : project.version === "02"
                      ? "React"
                      : "Next.js"}
                </span>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Addis Eats — {project.category}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technology tags */}
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

                {/* Project links */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">
                      Demo link to add
                    </span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                    >
                      <ExternalLink size={17} />
                      Source Code
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">
  GitHub link to add
</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing section */}
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
            Let's Connect
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;