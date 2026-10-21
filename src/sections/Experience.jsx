
import {
  BriefcaseBusiness,
  Users,
  Pickaxe,
  Megaphone,
  Database,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const professionalExperience = [
  {
    role: "Assistant Coal Mining Engineer Intern",
    organization: "Rack Mak Mining and Trading P.L.C.",
    period: "March 2024 – June 2024",
    location: "Tolay Woreda Coal Mining Site, Jimma Zone, Oromia",
    category: "Mining Engineering",
    icon: Pickaxe,
    responsibilities: [
      "Assisted with day-to-day activities at the coal mining site.",
      "Supported field activities while following workplace and safety procedures.",
      "Worked with team members in a practical technical environment.",
      "Gained practical exposure to mining operations and teamwork.",
    ],
  },
  {
    role: "Digital Marketing Intern",
    organization: "Digital Addis",
    period: "1 month",
    category: "Digital Marketing",
    icon: Megaphone,
    responsibilities: [
      "Supported social media management and digital promotion activities.",
      "Assisted with graphic design for digital content.",
      "Gained practical exposure to search engine optimization (SEO).",
      "Worked with team members on assigned marketing tasks and content creation.",
    ],
  },
  {
    role: "Data Annotation Contractor",
    organization: "R&D Group",
    period: "1 day",
    category: "Data & Technology",
    icon: Database,
    responsibilities: [
      "Annotated vehicle images in traffic according to assigned guidelines.",
      "Completed the assigned work with accuracy and attention to detail.",
    ],
  },
];

const volunteerExperience = [
  {
    role: "Event Volunteer",
    organization: "Science and Technology Education Festival",
    detail:
      "Collaboration involving the Ministry of Women and Social Affairs and EdConnect Ethiopia",
    responsibilities: [
      "Supported school tours and event activities.",
      "Participated in call-center activities and data entry.",
      "Developed communication and public-speaking experience.",
    ],
  },
  {
    role: "Event Support Volunteer",
    organization: "Ethiopian Youth Council",
    detail: "Event organization and guest welcoming",
    responsibilities: [
      "Assisted with event organization.",
      "Welcomed guests and supported event activities.",
    ],
  },
  {
    role: "Volunteer",
    organization: "EPAA CSO Week",
    detail: "March 5–7, 2026",
    responsibilities: [
      "Welcomed visitors and shared information about EPAA.",
      "Explained the role of professional associations and civil society organizations to visitors.",
    ],
  },
  {
    role: "Community Volunteer",
    organization: "Rotaract Club of Abogid",
    detail: "Community service",
    responsibilities: [
      "Participated in a pad donation activity supporting the community.",
    ],
  },
  {
    role: "Digital Storytelling Participant",
    organization: "Future Fit Young Africa",
    detail: "Digital storytelling workshop",
    responsibilities: [
      "Participated in a digital storytelling workshop.",
      "Published a personal story.",
    ],
  },
];

function ExperienceCard({ experience, volunteer = false }) {
  const Icon = volunteer ? Users : experience.icon;

  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900">
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
          <Icon size={23} />
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
            {experience.category || "Community Involvement"}
          </p>

          <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white">
            {experience.role}
          </h3>

          <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">
            {experience.organization}
          </p>
        </div>
      </div>

      <div className="mb-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
        {experience.period && (
          <p className="flex items-center gap-2">
            <CalendarDays size={15} />
            {experience.period}
          </p>
        )}

        {experience.location && <p>{experience.location}</p>}

        {experience.detail && <p>{experience.detail}</p>}
      </div>

      <ul className="space-y-3">
        {experience.responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Experience() {
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-16 font-[Georgia] transition-colors duration-200 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-slate-900 dark:text-blue-400">
            <BriefcaseBusiness size={16} />
            My Experience
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Experience That Shapes
            <span className="block text-blue-600 dark:text-blue-400">
              My Professional Growth
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            My experience combines mining engineering, digital marketing,
            data annotation, and community involvement. Each opportunity has
            helped me build practical skills, work with others, and continue
            growing professionally.
          </p>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Professional Experience
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Practical experience across engineering, digital marketing,
              and data-related work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {professionalExperience.map((experience) => (
              <ExperienceCard
                key={experience.organization}
                experience={experience}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Volunteering & Community Activities
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Experiences that strengthened my communication, teamwork,
              adaptability, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {volunteerExperience.map((experience) => (
              <ExperienceCard
                key={experience.organization}
                experience={experience}
                volunteer
              />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-[#e99230] px-6 py-10 text-center text-white sm:px-10">
          <CalendarDays className="mx-auto mb-4 text-blue-300" size={30} />

          <h2 className="text-2xl font-bold">
            Committed to Growth, Inspired by Learning
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            I bring curiosity, responsibility, and a willingness to learn to
            every opportunity. I am ready to build on my experience while
            contributing to meaningful projects and collaborative teams.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Explore My Projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
