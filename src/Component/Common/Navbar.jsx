import React from "react";
import { useState, useEffect } from "react";
import { Search, User, Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* ================= THEME INIT ================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  /* ================= TOGGLE THEME ================= */
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="w-full bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-blue-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Zinka
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <NavItem label="Home" active />
            <NavItem label="About" />
            <NavItem label="Pages" plus />

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-orange-500">
                Services +
              </button>

              {serviceOpen && (
                <div className="
                  absolute top-10 left-0 w-56 rounded-md overflow-hidden
                  bg-white dark:bg-[#262626]
                  text-gray-800 dark:text-gray-200
                  border-t-4 border-orange-500
                  shadow-xl
                ">
                  <DropdownItem text="Services" />
                  <DropdownItem text="Service Details" />
                </div>
              )}
            </div>

            <NavItem label="Blog" plus />
            <NavItem label="Contact" />
          </nav>

          {/* RIGHT ICONS */}
          <div className="hidden lg:flex items-center gap-4">

            {/* 🌙 THEME TOGGLE */}
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

            <IconBtn>
              <Search size={18} />
            </IconBtn>

            <IconBtn>
              <User size={18} />
            </IconBtn>

            <button className="ml-3 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition font-semibold">
              Get Started +
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          lg:hidden
          bg-white dark:bg-[#1c1c1c]
          text-gray-900 dark:text-gray-100
          border-t border-gray-200 dark:border-gray-700
        ">
          <MobileItem text="Home" />
          <MobileItem text="About" />
          <MobileItem text="Pages" />
          <MobileItem text="Services" />
          <MobileItem text="Blog" />
          <MobileItem text="Contact" />

          <div className="p-4">
            <button className="w-full py-3 rounded-full bg-orange-500 text-white font-semibold">
              Get Started +
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ================= COMPONENTS ================= */

const ThemeToggle = ({ darkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="
      relative w-14 h-8 rounded-full
      border-2 border-orange-500
      flex items-center px-1
      transition-all duration-300
      bg-white dark:bg-[#1c1c1c]
    "
  >
    <div
      className={`w-6 h-6 rounded-full bg-yellow-400 text-white
        flex items-center justify-center transition-transform duration-300
        ${darkMode ? "translate-x-6" : "translate-x-0"}`}
    >
      {darkMode ? <Moon size={14} /> : <Sun size={14} />}
    </div>
  </button>
);

const NavItem = ({ label, active, plus }) => (
  <div className="relative cursor-pointer text-gray-700 dark:text-gray-200 hover:text-orange-500">
    <span className="flex items-center gap-1">
      {label} {plus && "+"}
    </span>
    {active && (
      <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-blue-500" />
    )}
  </div>
);

const DropdownItem = ({ text }) => (
  <div className="
    px-5 py-3 cursor-pointer
    hover:bg-gray-100 dark:hover:bg-[#333]
  ">
    {text}
  </div>
);

const IconBtn = ({ children }) => (
  <div className="
    w-10 h-10 flex items-center justify-center rounded-full
    bg-gray-100 dark:bg-[#2a2a2a]
    text-gray-800 dark:text-white
    hover:bg-orange-500 hover:text-white
    transition cursor-pointer
  ">
    {children}
  </div>
);

const MobileItem = ({ text }) => (
  <div className="
    px-4 py-3
    border-b border-gray-200 dark:border-gray-700
    hover:bg-gray-100 dark:hover:bg-[#2a2a2a]
  ">
    {text}
  </div>
);

export default Navbar;
