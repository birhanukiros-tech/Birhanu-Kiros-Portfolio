import {
  Mail,
  Code2,
  ExternalLink,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    detail: "brightzbrave@gmail.com",
    description: "For job opportunities and professional inquiries.",
    href: "mailto:brightzbrave@gmail.com",
    label: "Send an email",
    icon: Mail,
    external: false,
  },
  {
    title: "GitHub",
    detail: "birhanukiros-tech",
    description: "Explore my projects and development work.",
    href: "https://github.com/birhanukiros-tech",
    label: "View GitHub",
    icon: Code2,
    external: true,
  },
  {
    title: "LinkedIn",
    detail: "Birhanu Kiros Melku",
    description: "Connect with me professionally.",
    href: "https://www.linkedin.com/in/birhanukirosmelku",
    label: "Visit LinkedIn",
    icon: ExternalLink,
    external: true,
  },
  {
    title: "Phone",
    detail: "+251 973 176 620",
    description: "Call me directly from a device that supports phone links.",
    href: "tel:+251973176620",
    label: "Call me",
    icon: Phone,
    external: false,
  },
  {
    title: "WhatsApp",
    detail: "+251 973 176 620",
    description: "Send me a message on WhatsApp.",
    href: "https://wa.me/251973176620",
    label: "Message on WhatsApp",
    icon: MessageCircle,
    external: true,
  },
];

function Contact() {
  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-14 pt-8 transition-colors duration-200 dark:bg-slate-950 sm:px-8 sm:pt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-semibold text-blue-700 dark:border-slate-800 dark:bg-slate-900 dark:text-blue-400">
            <Mail size={16} />
            Get in Touch
          </span>

          <h1 className="mt-4 font-['Georgia',serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Let's Start a
            <span className="mt-1 block text-blue-600 dark:text-blue-400">
              Conversation
            </span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600 dark:bg-blue-400" />

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            I'm open to opportunities in software development, digital
            marketing, and other digital fields. If you have an opportunity,
            project, or idea to discuss, I'd be happy to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <article
                key={method.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-800 dark:text-blue-400 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-['Georgia',serif] text-xl font-bold text-slate-900 dark:text-white">
                      {method.title}
                    </h2>

                    <p className="mt-2 break-words font-semibold text-blue-700 dark:text-blue-400">
                      {method.detail}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {method.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-600 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-blue-400 dark:hover:border-blue-400 dark:hover:bg-slate-800 dark:focus-visible:outline-blue-400"
                  >
                    {method.label}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-6 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 dark:border-slate-800 dark:bg-slate-900 sm:mt-8 sm:p-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm dark:bg-slate-800 dark:text-blue-400">
            <MapPin size={22} />
          </div>

          <div>
            <h2 className="font-['Georgia',serif] text-xl font-bold text-slate-900 dark:text-white">
              Location
            </h2>

            <p className="mt-2 font-semibold text-blue-700 dark:text-blue-400">
              Addis Ababa, Ethiopia
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Available for professional connections and suitable
              opportunities.
            </p>
          </div>
        </section>

        {/* Keep the original orange banner and blue button */}
        <section className="mt-10 rounded-2xl bg-[#e99230] px-6 py-10 text-center text-slate-900 sm:mt-12 sm:px-10">
          <MessageCircle size={30} className="mx-auto" />

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Have an Opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7">
            I'm eager to learn, contribute, and grow with a team.
            Let's connect and explore how we could work together.
          </p>

          <a
            href="mailto:brightzbrave@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
          >
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </section>
      </div>
    </section>
  );
}

export default Contact;