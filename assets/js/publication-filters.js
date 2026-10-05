document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("filtered-publications");
  if (!root) return;
  const buttons = Array.from(document.querySelectorAll("[data-topic]"));
  const filters = document.querySelector('.v3-topic-filters');
  const toggle = filters.querySelector('.v3-topic-toggle');
  const closeTopics = () => {
    filters.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    filters.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', event => {
    if (!filters.contains(event.target)) closeTopics();
  });
  filters.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeTopics(); toggle.focus(); }
  });
  const wideScreen = window.matchMedia('(min-width: 1000px)');
  wideScreen.addEventListener('change', closeTopics);
  const papers = Array.from(root.querySelectorAll("[data-paper-topics]"));
  function filter(topic) {
    const selected = topic.split(",");
    papers.forEach(paper => {
      const matches = topic === "all" || paper.dataset.paperTopics.split(/[,\s]+/).some(tag => selected.includes(tag));
      paper.closest("li").hidden = !matches;
    });
    root.querySelectorAll("ol.bibliography").forEach(list => {
      const visible = Array.from(list.children).some(item => !item.hidden);
      list.hidden = !visible;
      const heading = list.previousElementSibling;
      if (heading && /^H[1-6]$/.test(heading.tagName)) heading.hidden = !visible;
    });
    const headings = Array.from(root.querySelectorAll("h2.bibliography"));
    headings.forEach(heading => heading.classList.remove("first-visible-year"));
    const firstVisible = headings.find(heading => !heading.hidden);
    if (firstVisible) firstVisible.classList.add("first-visible-year");
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.topic === topic)));
    toggle.querySelector('.v3-topic-current').textContent = buttons.find(button => button.dataset.topic === topic).textContent;
    closeTopics();
  }
  buttons.forEach(button => button.addEventListener("click", () => {
    const wasBelowListStart = root.getBoundingClientRect().top < 70;
    filter(button.dataset.topic);
    if (!wideScreen.matches) toggle.focus({ preventScroll: true });
    if (wasBelowListStart) root.scrollIntoView({ block: "start" });
    const url = new URL(window.location.href);
    if (button.dataset.topic === "all") url.searchParams.delete("topic");
    else url.searchParams.set("topic", button.dataset.topic);
    history.replaceState(null, "", url);
  }));
  function fromUrl() {
    const requested = new URLSearchParams(window.location.search).get("topic");
    const aliases = {
      LLM: "evaluation", llm: "evaluation", "evaluation,detection": "evaluation",
      reinforcement: "reinforcement,online", online: "reinforcement,online", RL: "reinforcement,online",
      FL: "federated", "IF,OPT,causal": "inference"
    };
    const topic = aliases[requested] || requested;
    filter(buttons.some(button => button.dataset.topic === topic) ? topic : "all");
  }
  window.addEventListener("popstate", fromUrl);
  fromUrl();
});
