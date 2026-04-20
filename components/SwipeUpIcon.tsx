"use client";

import React, { useState, useEffect } from "react";

const SwipeUpIcon = () => {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      title="Scroll to top"
      className={`
        fixed bottom-10 right-10 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full cursor-pointer
        backdrop-blur-xl
        transition-all duration-200
        border border-(--outline-variant)/20

        ${hovered
          ? "bg-(--primary)/20"
          : "bg-(--primary)/10"
        }

        ${visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
        }

        ${pressed ? "scale-90" : "scale-100"
        }

        ${visible
          ? "shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
          : "shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
        }
      `}
    >
      {/* Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </div>
  );
};

export default SwipeUpIcon;
