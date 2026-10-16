document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".v3-home-news > ul");
  if (!list || list.children.length <= 5) return;

  // Keep the complete news archive readable when JavaScript is unavailable.
  const older = Array.from(list.children).slice(5);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "v3-news-toggle";
  list.id = "news-items";
  button.setAttribute("aria-controls", list.id);
  const update = (expanded) => {
    older.forEach(item => {
      item.hidden = !expanded;
      item.classList.toggle("v3-news-revealed", expanded);
    });
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show less news ↑" : `Older news (${older.length}) ↓`;
  };
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    // Keep the control in view when collapsing a long archive.
    const top = button.getBoundingClientRect().top;
    update(expanded);
    if (!expanded && top > 0 && button.getBoundingClientRect().top < 0) {
      button.scrollIntoView({ block: "center", behavior: "instant" });
    }
  });
  update(false);
  list.after(button);
});
