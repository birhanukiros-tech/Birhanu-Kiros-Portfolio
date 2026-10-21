import {
  Code2,
  Database,
  Palette,
  Users,
  Languages,
  Monitor,
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
    skills: ["English — Intermediate", "Tigrinya — Native", "Amharic — Native"],
  },
];

function Skills() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 font-[Georgia] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Monitor size={16} />
            My Skills
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Skills & <span className="text-blue-600">Expertise</span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            My background combines web development, digital marketing,
            data-related work, and professional experience. I continue
            developing these skills through practical projects and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {group.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-blue-100 bg-blue-50/70 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-100 hover:text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-[#e99230] px-6 py-8 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Always Learning, Always Growing
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
            I believe that continuous learning, practical experience, and
            collaboration are essential to professional growth. I am eager to
            apply my skills while developing new ones.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
