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
    <header className="sticky top-3 z-50 px-4 sm:top-4 sm:px-6 md:px-[8%] lg:px-[10%]">
      <nav className="glass mx-auto w-full max-w-7xl rounded-4xl px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:px-6">
        <div className="flex items-center justify-between">
          <a
            onClick={() => handleScroll("home")}
            className="text-xs font-semibold tracking-[0.08em] text-[#e5e2e1] uppercase sm:text-sm"
            style={{ cursor: "pointer" }}
          >
            Jenit Lal Shakya
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#c2c6d6] transition-colors hover:text-[#adc6ff] md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <ul className="hidden items-center gap-2 md:flex md:gap-3">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="group relative text-xs font-medium text-[#c2c6d6] transition-colors md:text-sm hover:text-[#4d8eff] group-hover:drop-shadow-[0_0_5px_#4d8eff,0_0_10px_#4d8eff]"
                >
                  <span className="px-2 relative inline-block">
                    <span className="relative inline-block">
                      {item.label}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#4d8eff] transition-all duration-300 ease-out group-hover:w-full group-hover:shadow-[0_0_5px_#4d8eff,0_0_10px_#4d8eff]"></span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isMobileMenuOpen && (
          <ul className="mt-3 flex flex-col gap-1 border-t border-[#424754]/50 pt-3 md:hidden">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="group relative text-xs font-medium text-[#c2c6d6] transition-colors md:text-sm hover:text-[#4d8eff] group-hover:drop-shadow-[0_0_5px_#4d8eff,0_0_10px_#4d8eff]"
                >
                  <span className="px-2 relative inline-block">
                    <span className="relative inline-block">
                      {item.label}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#4d8eff] transition-all duration-300 ease-out group-hover:w-full group-hover:shadow-[0_0_5px_#4d8eff,0_0_10px_#4d8eff]"></span>
                    </span>
                  </span>
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
