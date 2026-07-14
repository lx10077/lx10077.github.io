document.addEventListener("DOMContentLoaded", () => {
  const controls = Array.from(document.querySelectorAll("[data-site-disclosure]"));
  const panels = Array.from(document.querySelectorAll(".v3-home-disclosures > section"));

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const panel = document.getElementById(control.dataset.siteDisclosure);
      if (!panel) return;

      const shouldOpen = panel.hidden;

      panels.forEach((item) => {
        item.hidden = true;
      });
      controls.forEach((item) => {
        item.setAttribute("aria-expanded", "false");
      });

      if (shouldOpen) {
        panel.hidden = false;
        control.setAttribute("aria-expanded", "true");
      }
    });
  });
});
