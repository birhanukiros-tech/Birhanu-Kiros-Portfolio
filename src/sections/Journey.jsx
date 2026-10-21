
import { Link } from "react-router-dom";
import {
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  Code2,
  Mail,
  ArrowRight,
} from "lucide-react";

function Journey() {
  const exploreLinks = [
    { label: "Educational Background", to: "/education", icon: GraduationCap },
    { label: "Experience", to: "/experience", icon: BriefcaseBusiness },
    { label: "Projects", to: "/projects", icon: FolderKanban },
    { label: "Skills", to: "/skills", icon: Code2 },
    { label: "Contact", to: "/contact", icon: Mail },
  ];

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="bg-slate-50 px-5 pb-14 pt-8 transition-colors duration-200 dark:bg-slate-950 sm:px-8 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-8 max-w-4xl sm:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            My Story
          </p>

          <h1
            id="journey-heading"
            className="font-['Georgia',serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            My Journey
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />
        </div>

        {/* Your story */}
        <div className="max-w-4xl space-y-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:space-y-6 sm:text-lg sm:leading-8">
          <p>
            My name is{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              Birhanu Kiros Melku
            </strong>
            . I graduated from Aksum University in February 2024 with a
            degree in Mining Engineering and a GPA of 3.56.
          </p>

          <p>
            After graduation, I started looking for work and exploring
            different opportunities. Although finding a job was not easy,
            I decided to keep learning, volunteer with different
            organizations, and take part in events where I could meet
            people, gain experience, and learn outside the classroom.
          </p>

          <p>
            Through volunteering, I took part in event organization,
            welcoming guests, call-center activities, data entry, and
            community work. These experiences helped me improve my
            communication, teamwork, customer service, and leadership
            skills. They also taught me the value of being adaptable,
            working with different people, and taking responsibility.
          </p>

          <p>
            At the same time, I explored digital marketing, data-related
            work, and other technology opportunities. I completed digital
            marketing training, took online courses in programming,
            leadership, and business planning, and participated in the
            Aspire Leaders Program. I also took part in a digital
            storytelling workshop and published my story.
          </p>

          <p>
            My interest in technology has continued to grow, and I am
            now{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              studying Full-Stack Software Development at IBT College
              of Canada
            </strong>
            . I have built projects using HTML, CSS, JavaScript, React,
            and Next.js, including three versions of my Addis Eats
            food-ordering project.
          </p>

          <p className="rounded-xl border-l-4 border-blue-600 bg-white px-5 py-5 font-medium leading-7 text-slate-800 shadow-sm sm:px-7 sm:py-6 sm:leading-8 dark:border-blue-400 dark:bg-slate-900 dark:text-slate-100">
            My journey has taught me to keep learning, adapt to new
            situations, and look for ways to solve practical problems.
            I am now working toward a career where I can use technology,
            creativity, and my different experiences to build useful
            digital solutions.
          </p>
        </div>

        {/* Links to other portfolio pages */}
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800 sm:mt-14 sm:pt-10">
          <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Continue Exploring
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            Explore my education, professional experience, projects, and
            skills, or get in touch with me.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:bg-slate-800 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className="shrink-0 text-blue-600 dark:text-blue-400"
                    />
                    <span className="font-medium">{link.label}</span>
                  </span>

                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
