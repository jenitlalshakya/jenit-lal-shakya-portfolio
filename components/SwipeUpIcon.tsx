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
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: hovered
          ? "rgba(77, 142, 255, 0.25"
          : "rgba(77, 142, 255, 0.15)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: pressed
          ? "0 6px 12 rgba(77, 142, 255, 0.4)"
          : visible
          ? "0 16px 32px rgba(77, 142, 255, 0.5)"
          : "0 12px 24px rgba(77, 142, 255, 0.3)",
        transform: visible
          ? pressed
            ? "scale(0.92)"
            : "translateY(0)"
          : "translateY(50px)",
        
        transition: "opacity 0.3s ease, transform 0.15s ease, box-shadow 0.15s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      title="Scroll to top"
    >
      {/* Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#adc6ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </div>
  );
};

export default SwipeUpIcon;
