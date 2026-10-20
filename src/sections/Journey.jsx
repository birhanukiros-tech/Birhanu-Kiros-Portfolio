
function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="bg-slate-50 px-6 py-20 md:px-16 md:py-28 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            My Story
          </p>

          <h2
            id="journey-heading"
            className="font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white"
          >
            My Journey
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Your story */}
        <div className="max-w-3xl space-y-6 text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
          <p>
            My name is <strong className="font-semibold text-slate-900 dark:text-white">Birhanu Kiros Melku</strong>.
            {" "}I graduated from Aksum University in February 2024 with a
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
            now <strong className="font-semibold text-slate-900 dark:text-white">studying Full-Stack Software Development at IBT College
            of Canada</strong>. I have built projects using HTML, CSS, JavaScript,
            React, and Next.js, including three versions of my Addis Eats
            food-ordering project.
          </p>

          <p className="rounded-xl border-l-4 border-blue-600 bg-white px-6 py-5 font-medium text-slate-800 shadow-sm dark:bg-slate-900 dark:text-slate-100">
            My journey has taught me to keep learning, adapt to new
            situations, and look for ways to solve practical problems.
            I am now working toward a career where I can use technology,
            creativity, and my different experiences to build useful
            digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;
