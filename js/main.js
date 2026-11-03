const ICONS = {
  email:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6m0 3c0-2 1.2-3 2.8-3s2.2 1.1 2.2 3v3"/></svg>'
};

function media(src, label, alt) {
  if (src) return `<img src="${src}" alt="${alt || label}">`;
  return `<div class="placeholder">${label}</div>`;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <button class="menu-btn" aria-label="Open project menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="socials">
      <a href="${SITE.email}" aria-label="Email">${ICONS.email}</a>
      <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
    </div>
    <a class="site-name" href="index.html">${SITE.name}</a>
    <nav class="drawer" aria-label="Projects">
      <a class="drawer-home" href="index.html">Home</a>
      <p class="drawer-title">Projects</p>
      ${PROJECTS.map((p) => `<a href="project.html?id=${p.id}">${p.name}</a>`).join("")}
    </nav>
    <div class="scrim"></div>`;

  const btn = el.querySelector(".menu-btn");
  const toggle = (open) => {
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open);
  };
  btn.addEventListener("click", () => toggle(!document.body.classList.contains("menu-open")));
  el.querySelector(".scrim").addEventListener("click", () => toggle(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && toggle(false));
}

function renderHome() {
  const slides = document.getElementById("slideshow");
  slides.innerHTML = `
    ${SLIDES.map((s, i) => `<div class="slide${i === 0 ? " active" : ""}">${media(s.img, s.caption)}</div>`).join("")}
    <button class="arrow prev" aria-label="Previous slide">&#8249;</button>
    <button class="arrow next" aria-label="Next slide">&#8250;</button>
    <div class="dots">${SLIDES.map((_, i) => `<button aria-label="Slide ${i + 1}"${i === 0 ? ' class="active"' : ""}></button>`).join("")}</div>`;
  initSlideshow(slides);

  document.getElementById("about-text").textContent = SITE.about;
  document.getElementById("about-photo").innerHTML = media(SITE.aboutPhoto, "My Photo");

  document.getElementById("grid").innerHTML = PROJECTS.map(
    (p) => `
    <a class="card" href="project.html?id=${p.id}">
      <div class="card-img">${media(p.cover, "Project Photo", p.name)}</div>
      <span>${p.name}</span>
    </a>`
  ).join("");
}

function initSlideshow(root) {
  const slides = [...root.querySelectorAll(".slide")];
  const dots = [...root.querySelectorAll(".dots button")];
  let i = 0;
  let timer;
  const show = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
  };
  const start = () => {
    clearInterval(timer);
    timer = setInterval(() => show(i + 1), 5000);
  };
  root.querySelector(".prev").onclick = () => { show(i - 1); start(); };
  root.querySelector(".next").onclick = () => { show(i + 1); start(); };
  dots.forEach((d, k) => (d.onclick = () => { show(k); start(); }));
  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", start);
  start();
}

function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS.find((x) => x.id === id) || PROJECTS[0];
  document.title = `${p.name} — ${SITE.name}`;
  if (p.theme) document.body.classList.add(p.theme);
  const copy = p.glitch ? "copy glitch" : "copy";
  document.getElementById("project").innerHTML = `
    <h1 class="project-title">${p.name}</h1>
    <div class="frame hero">${media(p.hero, "Project Photo", p.name)}</div>
    <p class="${copy}">${p.description}</p>
    <div class="frame wide">${media(p.wide, "Project Photo", p.name)}</div>
    <p class="${copy}">${p.detail}</p>
    <div class="gallery">
      ${p.gallery.map((g) => `<div class="frame">${media(g, "Project Photo", p.name)}</div>`).join("")}
    </div>`;
}

renderHeader();
if (document.getElementById("slideshow")) renderHome();
if (document.getElementById("project")) renderProject();
