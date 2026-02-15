import { NavLink } from "react-router-dom";
import logoIcon from "../assets/plugged_in_home_icon.png";
import useTheme from "../hooks/useTheme";

const linkBase = "text-sm font-medium transition-colors";
const linkInactive = "text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white";
const linkActive = "text-slate-950 dark:text-white";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="h-9 w-9 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20 grid place-items-center overflow-hidden dark:bg-blue-500/15 dark:ring-blue-500/30">
            <img src={logoIcon} alt="Plugged In Home" className="h-7 w-auto" />
          </div>

          <div className="leading-tight">
            <div className="font-semibold text-slate-950 dark:text-white">
              Plugged In Home
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Local IT Support
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-3 sm:gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center rounded-xl bg-slate-900/5 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900/10 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:ring-white/15"
            aria-label="Toggle color theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <a
            href="tel:+1-574-226-9413"
            className="hidden sm:inline-flex items-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
