document.addEventListener("DOMContentLoaded", () => {
  if (!("IntersectionObserver" in window)) return;
  const mobile = window.matchMedia("(max-width: 599px)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const descriptions = Array.from(document.querySelectorAll(".v3-research-hub-meta"));
  const seen = new WeakSet();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("v3-mobile-revealed");
      seen.add(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });
  const update = () => {
    observer.disconnect();
    if (!mobile.matches || reduced.matches) return;
    descriptions.forEach(description => {
      if (!seen.has(description)) observer.observe(description);
    });
  };
  mobile.addEventListener("change", update);
  reduced.addEventListener("change", update);
  update();
});
