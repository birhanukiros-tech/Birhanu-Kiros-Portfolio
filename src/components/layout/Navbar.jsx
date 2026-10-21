
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePhoto from "../../assets/Birhanu_Port.jpg";
import {
  House,
  Milestone,
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  Code2,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

function Navbar({ isDarkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/", icon: House },
    { label: "My Journey", to: "/journey", icon: Milestone },
    { label: "Education", to: "/education", icon: GraduationCap },
    { label: "Experience", to: "/experience", icon: BriefcaseBusiness },
    { label: "Projects", to: "/projects", icon: FolderKanban },
    { label: "Skills", to: "/skills", icon: Code2 },
    { label: "Contact", to: "/contact", icon: Mail },
  ];

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? isDarkMode
          ? "bg-slate-800 text-blue-400"
          : "bg-blue-50 text-blue-600"
        : isDarkMode
          ? "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
          : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm backdrop-blur-md ${
        isDarkMode
          ? "border-slate-700 bg-[#0F172A]/95"
          : "border-blue-100 bg-white/90"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={`flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          <img
            src={profilePhoto}
            alt="Birhanu Kiros Melku"
            className="h-10 w-10 rounded-full border-2 border-blue-300 object-cover"
          />
          <span>
            Birhanu<span className="text-blue-500">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkStyle}
              >
                <Icon size={16} />
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`rounded-full border p-2.5 transition duration-200 ${
              isDarkMode
                ? "border-slate-600 bg-slate-800 text-yellow-300 hover:bg-slate-700"
                : "border-blue-100 bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className={`rounded-lg border p-2 transition hover:bg-blue-50 lg:hidden ${
              isDarkMode
                ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                : "border-blue-100 text-slate-700"
            }`}
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className={`border-t px-4 py-3 shadow-md lg:hidden sm:px-6 ${
            isDarkMode
              ? "border-slate-700 bg-[#0F172A]"
              : "border-blue-100 bg-white"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkStyle}
                >
                  <Icon size={18} />
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
