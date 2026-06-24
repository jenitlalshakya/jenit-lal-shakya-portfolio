const NAVBAR_OFFSET = 88;

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
};

export const clearHashFromUrl = () => {
  const url = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", url);
};

export const parseSectionId = (href: string) =>
  href.startsWith("#") ? href.slice(1) : href;
