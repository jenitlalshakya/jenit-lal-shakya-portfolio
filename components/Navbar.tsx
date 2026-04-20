"use client";

import React, { useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
    closeMobileMenu();
  };

  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4 sm:px-6 md:px-[8%] lg:px-[10%] mt-2">
      <nav className="glass mx-auto w-full max-w-7xl rounded-3xl px-5 py-1 md:px-6 border border-(--outline-variant)">
        <div className="flex items-center justify-between md:grid md:grid-cols-3">
          <div className="flex items-center">
            <a
              onClick={() => handleScroll("home")}
              className="
                cursor-pointer
                font-semibold tracking-wide
                text-lg md:text-xl
                text-(--on-surface)
                transition-colors
                hover:text-(--primary)
              "
            >
              Jenit Lal Shakya
            </a>
          </div>

          <ul className="hidden md:flex justify-center items-center gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="
                    group relative inline
                    text-sm md:text-[15px]
                    font-medium
                    text-(--on-surface-variant)
                    hover:text-(--primary)
                    transition-colors duration-200
                  "
                >
                  {item.label}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0
                      bg-(--nav-loading)
                      transition-all duration-300 ease-out
                      group-hover:w-full
                      group-hover:shadow-[0_0_6px_rgba(77,142,255,0.5),0_0_12px_rgba(77,142,255,0.3)]
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-1 ml-auto">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((c) => !c)}
              aria-label="Toggle navigation menu"
              className="
                md:hidden
                flex h-11 w-11 items-center justify-center
                rounded-full
                text-(--on-surface-variant)
                hover:text-(--primary)
                transition-colors
              "
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <ul className="mt-4 flex flex-col gap-3 border-t border-(--outline-variant)/50 pt-4 md:hidden">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="
                    group relative inline
                    text-sm
                    font-medium
                    text-(--on-surface-variant)
                    hover:text-(--primary)
                    transition-colors
                  "
                >
                  {item.label}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0
                      bg-(--nav-loading)
                      transition-all duration-300 ease-out
                      group-hover:w-full
                      group-hover:shadow-[0_0_6px_rgba(77,142,255,0.5),0_0_12px_rgba(77,142,255,0.3)]
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
