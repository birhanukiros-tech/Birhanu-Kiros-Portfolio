
import { Link } from "react-router-dom";
import { Mail, Code2, ExternalLink, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "My Journey", to: "/journey" },
  { label: "Education", to: "/education" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-[#EFF6FF] px-5 py-6 font-[Georgia] transition-colors duration-200 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              to="/"
              className="text-lg font-bold text-slate-900 dark:text-white"
            >
              Birhanu<span className="text-blue-600 dark:text-blue-400">.</span>
            </Link>

            <p className="mt-2 max-w-xs text-xs leading-5 text-slate-600 dark:text-slate-300">
              Junior Full-Stack Developer & Digital Professional,
              building skills and useful digital experiences.
            </p>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">
              Addis Ababa, Ethiopia
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-block rounded px-1 py-1 text-xs text-slate-600 transition-all duration-200 hover:translate-x-1 hover:bg-blue-100 hover:text-blue-700 hover:underline dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Let's Connect
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
              Have an opportunity or want to work together? Get in touch.
            </p>

            <div className="mt-3 flex gap-2">
              <a
                href="mailto:brightzbrave@gmail.com"
                aria-label="Email Birhanu"
                title="Email"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-200 bg-white text-blue-600 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:border-blue-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Mail size={16} />
              </a>

              <a
                href="https://github.com/birhanukiros-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-200 bg-white text-blue-600 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:border-blue-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Code2 size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/birhanukirosmelku"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-200 bg-white text-blue-600 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400 dark:hover:border-blue-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-blue-200 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:text-slate-300">
          <p>
            © {new Date().getFullYear()} Birhanu Kiros Melku. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="inline-flex items-center gap-1 self-start font-medium text-blue-600 transition hover:text-blue-800 sm:self-auto dark:text-blue-400 dark:hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
