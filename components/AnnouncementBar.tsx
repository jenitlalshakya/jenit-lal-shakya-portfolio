"use client";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#1b2a48] to-[#14213f] text-[#dbe7ff] text-sm py-2 px-4 text-center border-b border-[#4d8eff]/30">
      🚧 This portfolio is currently under development — new features coming soon!
      <a
        href="#projects"
        className="ml-2 underline hover:text-white transition"
      >
        View Projects
      </a>
    </div>
  );
}