
import {
  BriefcaseBusiness,
  Users,
  Pickaxe,
  Megaphone,
  Database,
  CalendarDays,
  ArrowUpRight,
  MapPin,
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
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 sm:p-6">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
          <Icon size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {experience.category || "Community Involvement"}
          </p>

          <h3 className="font-['Georgia',serif] text-lg font-bold leading-snug text-slate-900 dark:text-white sm:text-xl">
            {experience.role}
          </h3>

          <p className="mt-1 font-medium leading-6 text-slate-600 dark:text-slate-300">
            {experience.organization}
          </p>
        </div>
      </div>

      {(experience.period || experience.location || experience.detail) && (
        <div className="mb-4 space-y-2 border-b border-slate-100 pb-4 text-sm leading-6 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {experience.period && (
            <p className="flex items-start gap-2">
              <CalendarDays className="mt-1 shrink-0" size={15} />
              <span>{experience.period}</span>
            </p>
          )}

          {experience.location && (
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 shrink-0" size={15} />
              <span>{experience.location}</span>
            </p>
          )}

          {experience.detail && <p>{experience.detail}</p>}
        </div>
      )}

      <ul className="space-y-2.5">
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
    <section className="min-h-screen bg-slate-50 px-5 pb-14 pt-8 transition-colors duration-200 dark:bg-slate-950 sm:px-8 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-4xl sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-semibold text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-blue-400">
            <BriefcaseBusiness size={16} />
            My Experience
          </span>

          <h1 className="mt-4 font-['Georgia',serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Experience That Shapes
            <span className="mt-1 block text-blue-600 dark:text-blue-400">
              My Professional Growth
            </span>
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            My experience combines mining engineering, digital marketing,
            data annotation, and community involvement. Each opportunity has
            helped me build practical skills, work with others, and continue
            growing professionally.
          </p>
        </header>

        <section aria-labelledby="professional-heading" className="mb-12 sm:mb-14">
          <div className="mb-6">
            <h2
              id="professional-heading"
              className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
            >
              Professional Experience
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              Practical experience across engineering, digital marketing,
              and data-related work.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {professionalExperience.map((experience) => (
              <ExperienceCard
                key={experience.organization}
                experience={experience}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="volunteering-heading">
          <div className="mb-6">
            <h2
              id="volunteering-heading"
              className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
            >
              Volunteering &amp; Community Activities
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              Experiences that strengthened my communication, teamwork,
              adaptability, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2">
            {volunteerExperience.map((experience) => (
              <ExperienceCard
                key={experience.organization}
                experience={experience}
                volunteer
              />
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-blue-100 bg-[#e99230] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:mt-14 sm:p-9">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
              <CalendarDays size={25} />
            </div>

            <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Committed to Growth, Inspired by Learning
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              I bring curiosity, responsibility, and a willingness to learn to
              every opportunity. I am ready to build on my experience while
              contributing to meaningful projects and collaborative teams.
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

export default Experience;
