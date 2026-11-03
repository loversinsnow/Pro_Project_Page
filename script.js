'use strict';
const video = document.querySelector('#demo-video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && !navigator.connection?.saveData) {
  video.muted = true;
  video.play().catch(() => {}); // Native controls remain available if autoplay is blocked.
}
reducedMotion.addEventListener('change', event => { if (event.matches) video.pause(); });
for (const link of document.querySelectorAll('.chapter')) {
  link.addEventListener('click', () => {
    const start = () => { video.currentTime = Number(link.dataset.time); video.play().catch(() => {}); };
    if (video.readyState >= 1) start(); else { video.addEventListener('loadedmetadata', start, {once: true}); video.load(); }
  });
}
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
  });
});
const dialog = document.querySelector('#figure-dialog');
if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('.zoomable').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const image = link.querySelector('img');
    dialog.querySelector('img').src = link.href;
    dialog.querySelector('img').alt = image.alt;
    dialog.querySelector('p').textContent = image.alt;
    dialog.showModal();
  }));
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
}
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('waiting'); revealObserver.unobserve(entry.target); }
  }), {threshold: 0.08});
  if (!reducedMotion.matches) document.querySelectorAll('.section-heading, .stages article, .applications article').forEach(item => {
    item.classList.add('reveal', 'waiting'); revealObserver.observe(item);
  });
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) document.querySelectorAll('.nav-links a').forEach(link => {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }), {rootMargin: '-15% 0px -65% 0px'});
  ['overview', 'method', 'results', 'applications'].forEach(id => navObserver.observe(document.getElementById(id)));
}
