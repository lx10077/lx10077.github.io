(() => {
  const nav = document.querySelector('.v3-nav');
  if (!nav) return;
  const toggle = nav.querySelector('.v3-menu-toggle');
  const menu = nav.querySelector('.v3-menu');
  const setOpen = open => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  const update = () => {
    nav.classList.add('is-measuring');
    const style = getComputedStyle(nav);
    const available = nav.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    const required = nav.querySelector('.v3-logo').getBoundingClientRect().width + menu.getBoundingClientRect().width + parseFloat(style.columnGap);
    nav.classList.remove('is-measuring');
    const compact = required > available;
    nav.classList.toggle('is-compact', compact);
    if (!compact) setOpen(false);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  new ResizeObserver(update).observe(nav);
  document.fonts.ready.then(update);
  update();
})();
