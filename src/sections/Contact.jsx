
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
    icon:  ExternalLink,
    external: true,
  },
  {
    title: "Phone / WhatsApp",
    detail: "+251 973 176 620",
    description: "Reach me by phone or message me on WhatsApp.",
    href: "tel:+251973176620",
    label: "Call me",
    icon: Phone,
    external: false,
  },
];

function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 font-[Georgia] sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Mail size={16} />
            Get in Touch
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Let's Start a
            <span className="block text-blue-600">Conversation</span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            I'm open to opportunities in software development, digital
            marketing, and other digital fields. If you have an opportunity,
            project, or idea to discuss, I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <article
                key={method.title}
                className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-slate-900">
                      {method.title}
                    </h2>

                    <p className="mt-2 break-words text-base font-semibold text-blue-700">
                      {method.detail}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {method.description}
                    </p>
                  </div>
                </div>

                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={
                    method.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {method.label}
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
            <MapPin size={23} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Location
            </h2>

            <p className="mt-2 font-semibold text-blue-700">
              Addis Ababa, Ethiopia
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Available for professional connections and suitable
              opportunities.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-[#e99230] px-6 py-10 text-center text-slate-900 sm:px-10">
          <MessageCircle
            size={30}
            className="mx-auto"
          />

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Have an Opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7">
            I'm eager to learn, contribute, and grow with a team.
            Let's connect and explore how we could work together.
          </p>

          <a
            href="mailto:brightzbrave@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
