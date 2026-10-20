
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
} from "lucide-react";

function Navbar() {
  const navLinks = [
    { label: "Home", to: "/", icon: House },
    { label: "My Journey", to: "/journey", icon: Milestone },
    { label: "Education", to: "/education", icon: GraduationCap },
    { label: "Experience", to: "/experience", icon: BriefcaseBusiness },
    { label: "Projects", to: "/projects", icon: FolderKanban },
    { label: "Skills", to: "/skills", icon: Code2 },
    { label: "Contact", to: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight text-slate-900"
        >
          <img
            src={profilePhoto}
            alt="Birhanu Kiros Melku"
            className="h-11 w-11 rounded-full border-2 border-blue-200 object-cover"
          />
          <span>
            Birhanu<span className="text-blue-600">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <Icon size={16} />
                {link.label}
              </NavLink>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Dark mode coming soon"
          title="Dark mode coming soon"
          className="shrink-0 rounded-full border border-blue-100 bg-blue-50 p-2.5 text-blue-600 transition hover:bg-blue-100"
        >
          <Moon size={19} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
