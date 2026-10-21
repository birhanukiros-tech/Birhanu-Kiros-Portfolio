
import {
  Code2,
  Database,
  Palette,
  Users,
  Languages,
  Monitor,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Web Development",
    description: "Technologies I use to build websites and web applications.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    title: "Office & Data",
    description:
      "Digital tools and skills for organizing and working with information.",
    icon: Database,
    skills: [
      "Microsoft Office",
      "Data Entry",
      "Data Annotation",
      "Document Management",
      "Microsoft Excel",
    ],
  },
  {
    title: "Digital Marketing & Design",
    description:
      "Skills for creating content, reaching audiences, and communicating ideas.",
    icon: Palette,
    skills: [
      "Digital Marketing",
      "Social Media Management",
      "Search Engine Optimization (SEO)",
      "Graphic Design",
      "Content Creation",
      "Digital Storytelling",
    ],
  },
  {
    title: "Professional Skills",
    description:
      "Strengths developed through engineering, internships, volunteering, and project work.",
    icon: Users,
    skills: [
      "Communication",
      "Teamwork & Collaboration",
      "Problem-Solving",
      "Adaptability",
      "Continuous Learning",
      "Organization & Time Management",
      "Customer Service",
      "Attention to Detail",
    ],
  },
  {
    title: "Languages",
    description: "Languages I use to communicate and collaborate with others.",
    icon: Languages,
    skills: [
      "English — Intermediate",
      "Tigrinya — Native",
      "Amharic — Native",
    ],
  },
];

function Skills() {
  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-14 pt-8 transition-colors duration-200 dark:bg-slate-950 sm:px-8 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-semibold text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-blue-400">
            <Monitor size={16} />
            My Skills
          </span>

          <h1 className="mt-4 font-['Georgia',serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Skills &amp;{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Expertise
            </span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            My background combines web development, digital marketing,
            data-related work, and professional experience. I continue
            developing these skills through practical projects and learning.
          </p>
        </header>

        <div className="mb-6 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Skills developed through learning, practical work, and collaboration
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-['Georgia',serif] text-xl font-bold leading-snug text-slate-900 dark:text-white">
                      {group.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-blue-100 bg-blue-50/70 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-[#e99230] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:mt-14 sm:p-9">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
              <Code2 size={25} />
            </div>

            <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Always Learning, Always Growing
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              I believe that continuous learning, practical experience, and
              collaboration are essential to professional growth. I am eager to
              apply my skills while developing new ones.
            </p>

            <a
              href="/projects"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-400"
            >
              Explore My Projects
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Skills;
