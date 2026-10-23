
import {
  GraduationCap,
  Code2,
  Award,
  ExternalLink,
  Trophy,
} from "lucide-react";

import annotationCertificate from "../assets/Birhan_kiros_annotation_certfcat.png";
import digitalAucationCertificate from "../assets/Digtal Aucation Agent Certifcate.jpg";
import hubspotCertificate from "../assets/Digtal marketing Certifcate from HubSpot.jpg";
import californiaCertificate from "../assets/Digtal Marketing certifcate.jpg";

function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: "BSc in Mining Engineering",
      institution: "Aksum University",
      detail: "Graduated in February 2024",
      achievement: "GPA: 3.56",
      certificate: "/certificates/Birhanu_Tempo.pdf",
    },
    {
      icon: Code2,
      title: "Full-Stack Software Development",
      institution: "IBT College of Canada",
      detail: "Full- Stack Software development training",
      achievement: "Learning HTML, CSS, JavaScript, React, and Next.js",
    },
  ];

  const training = [
    {
      title: "Digital Marketing and Business Practice",
      institution: "California Training Institution",
      detail: "Three-month training supported by Finn Church Aid",
      certificate: californiaCertificate,
    },
    {
      title: "Programming Fundamentals",
      institution: "Udacity",
      detail: "Programming training",
      certificate:
        "/certificates/certificate _complation _of_ programming _fundemenatls.pdf",
    },
    {
      title: "Digital Marketing",
      institution: "HubSpot Academy",
      detail: "Digital marketing training",
      certificate: hubspotCertificate,
    },
    {
      title: "Aspire Leaders Program",
      institution: "2025",
      detail: "Leadership development program",
      certificate:
        "/certificates/birhanu_kiros_melku_alp_2025_certificate_of_completion.pdf",
    },
    {
      title: "Digital Storytelling Training Programme",
      institution: "Future Fit Young Africa",
      detail:
        "Participated from January to June 2026 and developed a digital story that was published through the programme.",
      certificate: "/certificates/futur_fit_young_africa_certi.pdf",
    },
    {
      title: "Mine Design using Gavia Surpac Software",
      institution: "Udacity Online Mining Software Training",
      detail: "Mine design using Gavia Surpac software",
      certificate: "/certificates/mine design certificate.pdf",
    },
    {
      title: "Digital Aucation Agent",
      institution: "Auction Ethiopia S.C",
      detail: "Digital Aucation Agent certificate",
      certificate: digitalAucationCertificate,
    },
    {
      title: "Data Annotation",
      institution: "R&D Group",
      detail: "Data annotation work",
      certificate: annotationCertificate,
    },
  ];

  const recognitions = [
    {
      icon: Trophy,
      title: "Top100 Africa Future Leader 2025",
      institution: "Top100 Africa Future Leaders",
      detail:
        "Recognized for my academic achievement, Mining Engineering background, university leadership involvement, and interest in engineering, environmental awareness, and community development.",
      year: "2025",
      link: "https://www.top100afl.com/awardees/birhanu-kiros-melku",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-14 pt-8 transition-colors duration-200 dark:bg-slate-950 sm:px-8 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-9 max-w-4xl sm:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Learning and Growth
          </p>

          <h1 className="font-['Georgia',serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Educational Background
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            My education has given me an engineering foundation and encouraged
            me to keep developing my skills in technology, software development,
            and digital work.
          </p>
        </div>

        {/* Main education */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 sm:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                  <Icon size={25} />
                </div>

                <h2 className="font-['Georgia',serif] text-xl font-bold leading-snug text-slate-900 dark:text-white sm:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
                  {item.institution}
                </p>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>

                {item.achievement && (
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                    {item.achievement}
                  </p>
                )}

                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-sm font-semibold text-blue-600 transition hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus-visible:outline-blue-400"
                  >
                    View Degree Certificate
                    <ExternalLink size={16} />
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* Training and certificates */}
        <div className="mt-12 sm:mt-14">
          <div className="mb-6 flex items-center gap-3 sm:mb-7">
            <Award
              className="shrink-0 text-blue-600 dark:text-blue-400"
              size={27}
            />

            <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Training and Certificates
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {training.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 sm:p-6"
              >
                <h3 className="font-semibold leading-7 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                  {item.institution}
                </p>

                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>

                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-sm font-semibold text-blue-600 transition hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus-visible:outline-blue-400"
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Leadership recognition */}
        <div className="mt-12 sm:mt-14">
          <div className="mb-6 flex items-center gap-3 sm:mb-7">
            <Trophy
              className="shrink-0 text-blue-600 dark:text-blue-400"
              size={27}
            />

            <h2 className="font-['Georgia',serif] text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Leadership and Recognition
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recognitions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 sm:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-semibold leading-7 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.year}
                  </p>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-sm font-semibold text-blue-600 transition hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus-visible:outline-blue-400"
                  >
                    View Official Recognition
                    <ExternalLink size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
