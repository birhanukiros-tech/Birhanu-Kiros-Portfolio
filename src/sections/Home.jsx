import profilePhoto from "../assets/Birhanu_Port.jpg";

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center gap-10 px-6 py-16 md:flex-row md:px-16"
    >
      {/* Left side: introduction */}
      <div className="flex-1">
        <p className="text-sm font-bold tracking-widest text-blue-600">
          BIRHANU KIROS MELKU
        </p>

        <p className="mt-2 text-lg text-slate-600">
          Junior Full-Stack Developer &amp; Digital Professional
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Hello, I'm Birhanu. Welcome to my world.
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600">
          My journey into technology has taught me to stay curious, keep
          learning, and explore new opportunities. I started with a degree
          in Mining Engineering and gradually developed a growing interest
          in technology. My background in engineering, community involvement,
          and technology training has given me a broad perspective and a
          willingness to learn.
        </p>

        <p className="mt-4 text-base leading-8 text-slate-600">
          I enjoy exploring new technologies, collaborating on meaningful
          projects, and growing through real-world challenges. Today, I'm
          developing my skills in full-stack web development and building
          projects that turn ideas into reality. I'm looking for opportunities
          to apply my skills, solve problems, contribute to a team, and
          continue growing professionally.
        </p>

        {/* Navigation buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="#journey"
            className="rounded-lg border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            My Journey
          </a>

          <a
            href="#contact"
            className="rounded-lg px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side: your photo will go here */}
      <div className="flex w-full flex-1 items-center justify-center md:justify-end">
        <img src={profilePhoto} alt="Birhanu Kiros Melku"
        className= "aspect-square w-full max-w-sm rounded-2xl object-cover shadow-lg"/>
      </div>
    </section>
  );
}

export default Home;
