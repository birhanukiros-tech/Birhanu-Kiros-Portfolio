import {
  GraduationCap,
  Code2,
  Award,
} from "lucide-react";

function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: "BSc in Mining Engineering",
      institution: "Aksum University",
      detail: "Graduated in February 2024",
      achievement: "GPA: 3.56",
    },
    {
      icon: Code2,
      title: "Full-Stack Software Development",
      institution: "IBT College, Canada",
      detail: "Software development training",
      achievement:
        "Learning HTML, CSS, JavaScript, React, and Next.js",
    },
  ];

  const training = [
    {
      title: "Digital Marketing and Business Practice",
      institution: "California Training Institution",
      detail: "Three-month training supported by Finn Church Aid",
    },
    {
      title: "Udacity",
      institution: "Programming Fundamentals",
      detail: "Programming training",
    },
    {
      title: "HubSpot Academy",
      institution: "Digital Marketing",
      detail: "Digital marketing training",
    },
    {
      title: "Aspire Leaders Program",
      institution: "2025",
      detail: "Leadership development program",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-20 md:px-16 md:py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Learning and Growth
          </p>

          <h1 className="font-['Georgia',serif] text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
            Educational Background
          </h1>

          <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
            My education has given me an engineering foundation and
            encouraged me to keep developing my skills in technology,
            software development, and digital work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800">
                  <Icon size={25} />
                </div>

                <h2 className="font-['Georgia',serif] text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h2>

                <p className="mt-2 font-semibold text-blue-600">
                  {item.institution}
                </p>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>

                <p className="mt-2 leading-7 text-slate-700 dark:text-slate-200">
                  {item.achievement}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mb-7 flex items-center gap-3">
            <Award className="text-blue-600" size={27} />

            <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 md:text-3xl dark:text-white">
              Training and Certificates
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {training.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="font-semibold leading-7 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-medium text-blue-600">
                  {item.institution}
                </p>

                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;