// Subtle entrance for the hero content only, one deliberate moment rather than
// fade-ins scattered across every section.

document.addEventListener("DOMContentLoaded", () => {
  const heroEls = document.querySelectorAll(
    ".hero .eyebrow, .hero h1, .hero-sub, .hero-media",
  );

  heroEls.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  requestAnimationFrame(() => {
    heroEls.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  });
});
