/* ============================================================================
   Adelani Lab, interactions & rendering
   ========================================================================== */
(function () {
  "use strict";

  /* ---- tiny helpers ----------------------------------------------------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  /* ---- inline SVG icons ------------------------------------------------- */
  const ICONS = {
    sun:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    globe:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>',
    wave: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 12c2 0 2-5 4-5s2 10 4 10 2-12 4-12 2 7 4 7 2-3 2-3"/></svg>',
    eye:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    tune: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',
    bench:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16"/></svg>',
    people:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M16 6a3 3 0 0 1 0 6M22 20c0-3-1.6-5-4-5.7"/></svg>',
    shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>',
    pin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    scholar:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 8l11 6 9-4.9V17h2V8L12 2zM5 13.2V17c0 1.6 3.1 3 7 3s7-1.4 7-3v-3.8l-7 3.8-7-3.6z"/></svg>',
    github:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.1-1.5-1.1-1.5-1-.6 0-.6 0-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.300000-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5z"/></svg>',
    twitter:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.4 7.3L22 22h-6l-4.7-6.1L5.9 22H3l6.8-7.8L2 2h6.1l4.2 5.6L18.2 2zm-2.1 18h1.6L7.9 3.7H6.2L16.1 20z"/></svg>',
    link:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    linkedin:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 5.9V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z"/></svg>',
  };

  /* ---- deterministic avatar colour from a name -------------------------- */
  const AV_COLORS = [
    ["#0e3a53", "#1d6f96"], ["#df6b34", "#f0b429"], ["#2f9e74", "#79c9a6"],
    ["#6a4c93", "#a06cd5"], ["#b5172f", "#e8743b"], ["#1f6f78", "#4cb0a8"],
  ];
  /* country name -> ISO code for small flags in assets/flags/ */
  const COUNTRY_CODES = {
    Nigeria: "ng", Korea: "kr", "South Korea": "kr", China: "cn", Canada: "ca",
    Cameroon: "cm", Mexico: "mx", Ethiopia: "et", Japan: "jp", India: "in", Germany: "de",
  };
  const flagHTML = (c) => {
    const code = COUNTRY_CODES[c];
    return code
      ? `<img class="flag" src="assets/flags/${code}.png" alt="" loading="lazy"> `
      : `${ICONS.pin} `;
  };

  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const hashIdx = (s, mod) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h % mod; };

  function avatar(person) {
    if (person.photo) return `<img class="avatar" src="${person.photo}" alt="${person.name}" loading="lazy" onerror="this.replaceWith(window.__avatarFallback('${person.name.replace(/'/g, "")}'))">`;
    const [a, b] = AV_COLORS[hashIdx(person.name, AV_COLORS.length)];
    return `<div class="avatar" style="background:linear-gradient(135deg,${a},${b})" aria-hidden="true">${initials(person.name)}</div>`;
  }
  window.__avatarFallback = (name) => {
    const [a, b] = AV_COLORS[hashIdx(name, AV_COLORS.length)];
    return el(`<div class="avatar" style="background:linear-gradient(135deg,${a},${b})">${initials(name)}</div>`);
  };

  function plinks(links = {}) {
    const map = { web: "link", scholar: "scholar", github: "github", twitter: "twitter", linkedin: "linkedin" };
    const out = Object.entries(links).filter(([, v]) => v).map(([k, v]) =>
      `<a href="${v}" target="_blank" rel="noopener" aria-label="${k}" title="${k}">${ICONS[map[k]] || ICONS.link}</a>`).join("");
    return out ? `<div class="plinks">${out}</div>` : "";
  }

  /* ---- render: stats ---------------------------------------------------- */
  function renderStats(host) {
    if (!host || typeof STATS === "undefined") return;
    host.innerHTML = STATS.map((s) =>
      `<div class="stat reveal"><div class="num" data-count="${s.value}" data-suffix="${s.suffix}">0</div><div class="lbl">${s.label}</div></div>`).join("");
  }

  /* ---- render: research ------------------------------------------------- */
  function renderResearch(host) {
    if (!host || typeof RESEARCH === "undefined") return;
    host.innerHTML = RESEARCH.map((r, i) =>
      `<article class="card reveal d${(i % 3) + 1}">
         <div class="ic">${ICONS[r.icon] || ICONS.globe}</div>
         <h3>${r.title}</h3><p>${r.text}</p>
       </article>`).join("");
  }

  /* ---- render: projects ------------------------------------------------- */
  function renderProjects(host) {
    if (!host || typeof PROJECTS === "undefined") return;
    host.innerHTML = PROJECTS.map((p, i) => {
      const inner =
        `<div class="top"><span class="name">${p.name}</span><span class="tag">${p.tag}</span></div>
         <p class="note">${p.note}</p>`;
      return p.url
        ? `<a class="card proj proj-link reveal d${(i % 3) + 1}" href="${p.url}" target="_blank" rel="noopener">${inner}</a>`
        : `<article class="card proj reveal d${(i % 3) + 1}">${inner}</article>`;
    }).join("");
  }

  /* ---- render: talks ---------------------------------------------------- */
  function renderTalks(host) {
    if (!host || typeof TALKS === "undefined") return;
    host.innerHTML = TALKS.map((g) =>
      `<section class="pub-group reveal">
         <h3 class="pub-year">${g.year}</h3>
         <ol class="pub-list">
           ${g.items.map((t) => `
             <li class="pub">
               <a class="pub-title" href="${t.u}" target="_blank" rel="noopener">${t.t}</a>
               <div class="pub-meta"><span class="pub-venue">${t.date}</span><span class="talk-venue">${t.v}</span>${t.extra ? ` · <a href="${t.extra}" target="_blank" rel="noopener">slides</a>` : ""}</div>
             </li>`).join("")}
         </ol>
       </section>`).join("");
  }

  /* ---- render: publications --------------------------------------------- */
  function renderPublications(host) {
    if (!host || typeof PUBLICATIONS === "undefined") return;
    const total = PUBLICATIONS.reduce((n, g) => n + g.items.length, 0);
    host.innerHTML = PUBLICATIONS.map((g) =>
      `<section class="pub-group reveal">
         <h3 class="pub-year">${g.year}</h3>
         <ol class="pub-list">
           ${g.items.map((p) => `
             <li class="pub">
               <a class="pub-title" href="${p.u}" target="_blank" rel="noopener">${p.t}</a>
               <div class="pub-authors">${p.a}</div>
               <div class="pub-meta"><span class="pub-venue">${p.v}</span>${p.award ? `<span class="pub-award">${p.award}</span>` : ""}</div>
             </li>`).join("")}
         </ol>
       </section>`).join("");
    const countEl = document.getElementById("pub-count");
    if (countEl) countEl.textContent = total;
  }

  /* ---- render: news ----------------------------------------------------- */
  function renderNews(host, limit) {
    if (!host || typeof NEWS === "undefined") return;
    const items = limit ? NEWS.slice(0, limit) : NEWS;
    host.innerHTML = items.map((n) =>
      `<div class="tl-item reveal"><div class="tl-date">${n.date}</div><p class="tl-body">${n.body}</p></div>`).join("");
  }

  /* ---- render: people --------------------------------------------------- */
  function personCard(m) {
    const web = m.links && m.links.web;
    const nameHTML = web
      ? `<a class="nm nm-link" href="${web}" target="_blank" rel="noopener">${m.name}</a>`
      : `<div class="nm">${m.name}</div>`;
    const avatarHTML = web
      ? `<a href="${web}" target="_blank" rel="noopener" aria-label="${m.name}">${avatar(m)}</a>`
      : avatar(m);
    return `<article class="person">
      ${avatarHTML}
      <div class="meta">
        ${nameHTML}
        <div class="rl">${m.role}</div>
        ${m.work ? `<p class="wk">${m.work}</p>` : ""}
        ${m.from ? `<div class="from">${flagHTML(m.from)}${m.from}</div>` : ""}
        ${m.now ? `<p class="now">➡️ ${m.now}</p>` : ""}
        ${m.since ? `<div class="since">${m.since}</div>` : ""}
        ${plinks(m.links)}
      </div>
    </article>`;
  }

  function groupBlock(g) {
    return `<section class="group reveal" data-id="${g.id || ""}">
       <div class="group-head"><h2>${g.title}</h2><span class="count">${g.members.length}</span></div>
       <div class="people-grid">${g.members.map(personCard).join("")}</div>
     </section>`;
  }

  function renderPeople(host) {
    if (!host || typeof PEOPLE === "undefined") return;
    host.innerHTML = PEOPLE.filter((g) => g.members && g.members.length).map(groupBlock).join("");
  }

  function renderAlumni(host) {
    if (!host) return;
    const groups = (typeof ALUMNI !== "undefined" ? ALUMNI : []).filter((g) => g.members && g.members.length);
    if (!groups.length) { const sec = host.closest("section"); if (sec) sec.style.display = "none"; return; }
    host.innerHTML = groups.map(groupBlock).join("");
  }

  /* ---- render: gallery -------------------------------------------------- */
  function renderGallery(host) {
    if (!host || typeof GROUP_PHOTOS === "undefined") return;
    host.innerHTML = GROUP_PHOTOS.map((p) =>
      `<figure class="photo reveal">
         <img src="${p.src}" alt="${p.caption}" loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
         <div class="ph-fallback" style="display:none">Add <code>${p.src}</code></div>
         <figcaption class="cap"><span class="label">${p.label}</span><p>${p.caption}</p></figcaption>
       </figure>`).join("");
  }

  /* ---- scroll reveal ---------------------------------------------------- */
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((i) => io.observe(i));
  }

  /* ---- counters --------------------------------------------------------- */
  function initCounters() {
    const nums = $$("[data-count]");
    if (!nums.length) return;
    const run = (node) => {
      const target = +node.dataset.count, suffix = node.dataset.suffix || "";
      const dur = 1400, t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(target * eased) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.6 });
    nums.forEach((n) => io.observe(n));
  }

  /* ---- hero greeting cycle --------------------------------------------- */
  function initGreetings() {
    const node = $("#greet");
    if (!node || typeof GREETINGS === "undefined") return;
    let i = 0;
    const tick = () => {
      node.style.opacity = 0;
      setTimeout(() => { i = (i + 1) % GREETINGS.length; node.textContent = GREETINGS[i]; node.style.opacity = 1; }, 280);
    };
    node.textContent = GREETINGS[0];
    node.style.transition = "opacity .28s ease";
    setInterval(tick, 2200);
  }

  /* ---- floating words --------------------------------------------------- */
  function initFloatWords() {
    const host = $("#floatWords");
    if (!host || typeof GREETINGS === "undefined") return;
    const picks = GREETINGS.slice(2, 14);
    const spots = [[8, 26], [78, 18], [16, 72], [70, 66], [44, 12], [88, 48], [30, 44], [60, 84]];
    host.innerHTML = spots.map((s, i) => {
      const size = 1.1 + (i % 3) * 0.5;
      return `<span style="left:${s[0]}%;top:${s[1]}%;font-size:${size}rem;animation-delay:${i * 0.7}s">${picks[i % picks.length]}</span>`;
    }).join("");
  }

  /* ---- nav: scroll state, mobile toggle, active link -------------------- */
  function initNav() {
    const nav = $(".nav");
    if (nav) {
      const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
      onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    }
    const toggle = $(".nav-toggle"), links = $(".nav-links");
    if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));
    $$(".nav-links a").forEach((a) => a.addEventListener("click", () => links && links.classList.remove("open")));

    const here = location.pathname.split("/").pop() || "index.html";
    $$(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === here || (here === "index.html" && href === "index.html")) a.classList.add("active");
    });
  }

  /* ---- theme ------------------------------------------------------------ */
  function initTheme() {
    const btn = $("#themeToggle");
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const set = (mode) => {
      document.documentElement.setAttribute("data-theme", mode);
      if (btn) btn.innerHTML = mode === "dark" ? ICONS.sun : ICONS.moon;
      localStorage.setItem("theme", mode);
    };
    set(saved || (prefersDark ? "dark" : "light"));
    if (btn) btn.addEventListener("click", () =>
      set(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));
  }

  /* ---- inject icons into static markup ---------------------------------- */
  function injectIcons() {
    $$("[data-icon]").forEach((n) => { n.innerHTML = ICONS[n.dataset.icon] || ""; });
    const yr = $("#year"); if (yr) yr.textContent = "2026";
  }

  /* ---- boot ------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    injectIcons();
    renderStats($("#stats"));
    renderResearch($("#research"));
    renderProjects($("#projects"));
    renderPublications($("#pub-list"));
    renderTalks($("#talks-list"));
    const newsHost = $("#news-list") || $("#news");
    renderNews(newsHost, newsHost && newsHost.dataset.limit ? +newsHost.dataset.limit : null);
    renderPeople($("#people"));
    renderAlumni($("#alumni"));
    renderGallery($("#gallery"));
    initNav();
    initTheme();
    initGreetings();
    initFloatWords();
    initReveal();
    initCounters();
  });
})();
