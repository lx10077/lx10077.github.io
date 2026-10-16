document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-paper-panel]").forEach(button => {
    button.addEventListener("click", () => {
      const paper = button.closest("[data-paper-topics]");
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      if (!paper || !panel) return;
      const expanded = button.getAttribute("aria-expanded") !== "true";
      paper.querySelectorAll("[data-paper-panel]").forEach(control => {
        control.setAttribute("aria-expanded", "false");
      });
      paper.querySelectorAll(".pub-detail-panel").forEach(item => { item.hidden = true; });
      panel.hidden = !expanded;
      button.setAttribute("aria-expanded", String(expanded));
    });
  });
  document.querySelectorAll("a.waves-effect, a.waves-light").forEach(link => {
    link.classList.remove("waves-effect", "waves-light");
  });
  if (!document.body.classList.contains("v3-body")) return;
  const topButton = document.createElement("button");
  topButton.type = "button";
  topButton.className = "v3-back-to-top";
  topButton.textContent = "↑";
  topButton.setAttribute("aria-label", "Back to top");
  topButton.title = "Back to top";
  topButton.tabIndex = -1;
  topButton.setAttribute("aria-hidden", "true");
  document.body.append(topButton);
  const updateTopButton = () => {
    const visible = window.scrollY > Math.max(400, window.innerHeight * 0.7);
    topButton.classList.toggle("is-visible", visible);
    topButton.tabIndex = visible ? 0 : -1;
    topButton.setAttribute("aria-hidden", String(!visible));
  };
  window.addEventListener("scroll", updateTopButton, { passive: true });
  window.addEventListener("resize", updateTopButton);
  topButton.addEventListener("click", () => {
    const logo = document.querySelector(".v3-logo");
    if (logo) logo.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  updateTopButton();
});
