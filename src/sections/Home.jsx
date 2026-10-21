
import { Link } from "react-router-dom";
import profilePhoto from "../assets/Birhanu_Port.jpg";

function Home() {
  return (
    <section className="flex min-h-[calc(100vh-4.5rem)] flex-col items-center gap-8 bg-slate-50 px-6 py-8 transition-colors duration-200 dark:bg-slate-950 sm:py-10 md:flex-row md:gap-10 md:px-12 md:py-8 lg:px-16">
      {/* Left side: introduction */}
      <div className="w-full flex-1">
        <p className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400">
          BIRHANU KIROS MELKU
        </p>

        <p className="mt-2 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          Junior Full-Stack Developer &amp; Digital Professional
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          Hello, I'm Birhanu. Welcome to my world.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          My journey into technology has taught me to stay curious, keep
          learning, and explore new opportunities. I started with a degree
          in Mining Engineering and gradually developed a growing interest
          in technology. My background in engineering, community involvement,
          and technology training has given me a broad perspective and a
          willingness to learn.
        </p>

        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          I enjoy exploring new technologies, collaborating on meaningful
          projects, and growing through real-world challenges. Today, I'm
          developing my skills in full-stack web development and building
          projects that turn ideas into reality. I'm looking for opportunities
          to apply my skills, solve problems, contribute to a team, and
          continue growing professionally.
        </p>

        {/* Navigation buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
          <Link
            to="/projects"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            View Projects
          </Link>

          <Link
            to="/journey"
            className="rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-900"
          >
            My Journey
          </Link>

          <Link
            to="/contact"
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right side: profile photo */}
      <div className="flex w-full flex-1 items-center justify-center md:justify-end">
        <img
          src={profilePhoto}
          alt="Birhanu Kiros Melku"
          className="aspect-square w-full max-w-[18rem] rounded-2xl object-cover shadow-lg sm:max-w-sm"
        />
      </div>
    </section>
  );
}

export default Home;
