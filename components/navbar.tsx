import { ChevronLast, Moon } from "lucide-react";

const NavBar = () => {
  // TODO: Toggle dark mode on click

  return (
    <nav className="flex items-center justify-between rounded-t-lg px-8 text-sm dark:bg-stone-900/50">
      <div className="flex -rotate-180 items-center transition-transform hover:rotate-0 dark:text-white/90">
        <ChevronLast size={32} strokeWidth={1.0} />
        <h1 className="text-lg">vt92i.dev</h1>
      </div>
      <ul className="flex">
        <li className="p-4 transition-colors dark:text-white/90 dark:hover:bg-stone-900/50">
          Home
        </li>
        <li className="p-4 transition-colors dark:text-white/50 dark:hover:bg-stone-900/50">
          About
        </li>
        <li className="p-4 transition-colors dark:text-white/50 dark:hover:bg-stone-900/50">
          Projects
        </li>
        <li className="p-4"></li>
        <li className="p-4 transition-colors dark:text-white/50 dark:hover:bg-stone-900/50">
          Quote
        </li>
        <li className="p-4 transition-colors dark:text-white/50 dark:hover:bg-stone-900/50">
          ChatGPT
        </li>
        <li className="p-4 transition-colors dark:text-white/50 dark:hover:bg-stone-900/50">
          Proxy Checker
        </li>
        <li className="p-4 transition-colors dark:text-white/50 dark:hover:bg-stone-900/50">
          Terminal
        </li>
      </ul>
      <div className="flex hover:animate-pulse hover:cursor-pointer dark:text-white/90">
        <Moon size={24} strokeWidth={1.0} />
      </div>
    </nav>
  );
};

export default NavBar;
