/* ============================================================================
   Portfolio engine — renders everything from PORTFOLIO (data.js)
   ============================================================================ */
(function () {
  "use strict";
  const D = window.PORTFOLIO || {};
  const $ = (s, c = document) => c.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );

  /* ---- inline SVG icons -------------------------------------------------- */
  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.5v15.5H.24V8zM8.5 8h4.32v2.12h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9v8.82h-4.5v-7.82c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12v7.96H8.5V8z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7L2.5 5.5h19L12 11zm0 2.2L2 7.3V18h20V7.3l-10 5.9z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M3.9 12a4.1 4.1 0 0 1 4.1-4.1h3v2h-3a2.1 2.1 0 1 0 0 4.2h3v2h-3A4.1 4.1 0 0 1 3.9 12zm6.1 1h4v-2h-4v2zm3-5.1h3a4.1 4.1 0 0 1 0 8.2h-3v-2h3a2.1 2.1 0 1 0 0-4.2h-3v-2z"/></svg>',
  };
  const icon = (k) => ICONS[k] || ICONS.link;

  /* ======================================================================
     RENDER
     ====================================================================== */
  function render() {
    const p = D.profile || {};
    // Title / brand
    if (p.name) {
      document.title = p.name + " — Portfolio";
      const brandName = $(".nav__name");
      if (brandName) brandName.textContent = p.name;
      const mark = $(".nav__mark");
      if (mark) mark.textContent = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
      const hn = $("#heroName");
      if (hn) hn.textContent = p.name;
    }
    const tg = $("#heroTagline");
    if (tg) tg.textContent = p.tagline || "";

    buildNav();
    buildStats(p.stats || []);
    buildAbout(D.about || {});
    buildExperience(D.experience || []);
    buildProjects(D.projects || []);
    buildSkills(D.skills || []);
    buildEducation(D.education || []);
    buildAwards(D.awards || []);
    buildCerts(D.certificates || []);
    buildLeadership(D.leadership || []);
    buildChips("#interestsList", D.interests || []);
    buildChips("#languagesList", D.languages || []);
    buildContact(D.contact || {});
    const fn = $("#footerNote");
    if (fn && D.footer) fn.textContent = "© " + new Date().getFullYear() + " " + (p.name || "") + " · " + (D.footer.note || "");
  }

  /* ---- Nav links (auto from sections present) --------------------------- */
  function buildNav() {
    const map = [
      ["about", "About"], ["experience", "Experience"], ["projects", "Projects"],
      ["skills", "Skills"], ["education", "Education"], ["achievements", "More"],
      ["contact", "Contact"],
    ];
    const wrap = $("#navLinks");
    if (!wrap) return;
    map.forEach(([id, label]) => {
      if (!document.getElementById(id)) return;
      const a = el("a", null, label);
      a.href = "#" + id;
      a.dataset.scroll = "";
      a.dataset.target = id;
      wrap.appendChild(a);
    });
  }

  function buildStats(stats) {
    const wrap = $("#heroStats");
    if (!wrap) return;
    stats.forEach((s) => {
      const node = el("div", "stat reveal");
      node.dataset.delay = "1";
      node.innerHTML =
        '<div class="stat__value" data-count="' + s.value + '" data-suffix="' + esc(s.suffix || "") + '">0</div>' +
        '<div class="stat__label">' + esc(s.label) + "</div>";
      wrap.appendChild(node);
    });
  }

  function buildAbout(a) {
    const h = $("#aboutHeading");
    if (h && a.heading) h.textContent = a.heading;
    const body = $("#aboutBody");
    if (!body) return;
    (a.paragraphs || []).forEach((t) => body.appendChild(el("p", null, esc(t))));
    if ((a.highlights || []).length) {
      const chips = el("div", "about__chips");
      a.highlights.forEach((c) => chips.appendChild(el("span", "about__chip", esc(c))));
      body.appendChild(chips);
    }
  }

  function buildExperience(list) {
    const wrap = $("#experienceList");
    if (!wrap) return;
    list.forEach((job, i) => {
      const item = el("div", "tl-item reveal");
      item.dataset.delay = String(Math.min(i + 1, 4));
      const points = (job.points || []).map((pt) => "<li>" + esc(pt) + "</li>").join("");
      item.innerHTML =
        '<div class="tl-card">' +
          '<div class="tl-head">' +
            '<div><span class="tl-role">' + esc(job.role) + '</span> ' +
            '<span class="tl-company">· ' + esc(job.company) + "</span></div>" +
            '<span class="tl-period">' + esc(job.period) + "</span>" +
          "</div>" +
          '<ul class="tl-points">' + points + "</ul>" +
        "</div>";
      wrap.appendChild(item);
    });
  }

  function buildProjects(list) {
    const wrap = $("#projectsList");
    if (!wrap) return;
    list.forEach((pr, i) => {
      const card = el("div", "card reveal tilt");
      card.dataset.delay = String(Math.min(i + 1, 4));
      const tags = (pr.tags || []).map((t) => "<span>" + esc(t) + "</span>").join("");
      const link = pr.link ? '<a class="card__link" href="' + esc(pr.link) + '" target="_blank" rel="noopener">View project</a>' : "";
      card.innerHTML =
        (pr.tag ? '<div class="card__tag">' + esc(pr.tag) + "</div>" : "") +
        '<h3 class="card__title">' + esc(pr.title) + "</h3>" +
        '<p class="card__desc">' + esc(pr.description) + "</p>" +
        '<div class="card__tags">' + tags + "</div>" + link;
      wrap.appendChild(card);
    });
  }

  function buildSkills(list) {
    const wrap = $("#skillsList");
    if (!wrap) return;
    list.forEach((s, i) => {
      const node = el("div", "skill reveal");
      node.dataset.delay = String(Math.min(i + 1, 4));
      node.innerHTML =
        '<div class="skill__top"><span>' + esc(s.name) + '</span>' +
        '<span class="skill__pct">' + (s.level || 0) + "%</span></div>" +
        '<div class="skill__track"><div class="skill__fill" data-level="' + (s.level || 0) + '"></div></div>';
      wrap.appendChild(node);
    });
  }

  function buildEducation(list) {
    const wrap = $("#educationList");
    if (!wrap) return;
    list.forEach((e, i) => {
      const item = el("div", "tl-item reveal");
      item.dataset.delay = String(Math.min(i + 1, 4));
      item.innerHTML =
        '<div class="tl-card">' +
          '<div class="tl-head">' +
            '<span class="tl-role">' + esc(e.degree) + "</span>" +
            '<span class="tl-period">' + esc(e.year) + "</span>" +
          "</div>" +
          '<div class="tl-meta">' + esc(e.institute) + "</div>" +
          (e.score ? '<span class="tl-score">' + esc(e.score) + "</span>" : "") +
        "</div>";
      wrap.appendChild(item);
    });
  }

  function buildAwards(list) {
    const wrap = $("#awardsList");
    if (!wrap) return;
    list.forEach((a) => {
      wrap.appendChild(el("div", "item",
        '<div class="item__title">' + esc(a.title) + "</div>" +
        (a.detail ? '<div class="item__detail">' + esc(a.detail) + "</div>" : "")));
    });
  }

  function buildCerts(list) {
    const wrap = $("#certsList");
    if (!wrap) return;
    list.forEach((c) => {
      const title = c.link
        ? '<a class="item__title" href="' + esc(c.link) + '" target="_blank" rel="noopener">' + esc(c.name) + " ↗</a>"
        : '<div class="item__title">' + esc(c.name) + "</div>";
      wrap.appendChild(el("div", "item", title +
        (c.meta ? '<div class="item__detail">' + esc(c.meta) + "</div>" : "")));
    });
  }

  function buildLeadership(list) {
    const wrap = $("#leadershipList");
    if (!wrap) return;
    list.forEach((l) => {
      wrap.appendChild(el("div", "item",
        '<div class="item__title">' + esc(l.title) + "</div>" +
        '<div class="item__detail">' + esc(l.org) + " · " + esc(l.year) + "</div>"));
    });
  }

  function buildChips(sel, list) {
    const wrap = $(sel);
    if (!wrap) return;
    list.forEach((t) => wrap.appendChild(el("span", "chip", esc(t))));
  }

  function buildContact(c) {
    const h = $("#contactHeading");
    if (h && c.heading) h.textContent = c.heading;
    const body = $("#contactBody");
    if (!body) return;
    let html = "";
    if (c.blurb) html += '<p class="contact__blurb">' + esc(c.blurb) + "</p>";
    if (c.email) html += '<a class="contact__email" href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>";
    if (c.phone) html += '<a class="contact__phone" href="tel:' + esc(c.phone.replace(/\s/g, "")) + '">' + esc(c.phone) + "</a>";
    const socials = (c.socials || []).map((s) =>
      '<a class="social" href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
      icon(s.icon) + "<span>" + esc(s.label) + "</span></a>").join("");
    if (socials) html += '<div class="contact__socials">' + socials + "</div>";
    body.innerHTML = html;
  }

  /* ======================================================================
     INTERACTIONS
     ====================================================================== */

  // typed rotating role
  function typeRoles() {
    const target = $("#heroRole");
    const roles = (D.profile && D.profile.roles) || [];
    if (!target || !roles.length) return;
    let ri = 0, ci = 0, deleting = false;
    function tick() {
      const word = roles[ri];
      target.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 70); }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1600); }
      else if (deleting && ci > 0) { ci--; setTimeout(tick, 35); }
      else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 320); }
    }
    tick();
  }

  // scroll reveal + counters + skill bars
  function observeReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        e.target.querySelectorAll(".skill__fill").forEach((f) => {
          f.style.width = (f.dataset.level || 0) + "%";
        });
        e.target.querySelectorAll("[data-count]").forEach(animateCount);
        if (e.target.matches("[data-count]")) animateCount(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
  }

  function animateCount(node) {
    if (node.dataset.done) return;
    node.dataset.done = "1";
    const target = parseFloat(node.dataset.count) || 0;
    const suffix = node.dataset.suffix || "";
    const isFloat = !Number.isInteger(target);
    const dur = 1500;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = target * eased;
      node.textContent = (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else node.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
    }
    requestAnimationFrame(step);
  }

  // scrollspy + nav bg + progress + back-to-top
  function scrollEffects() {
    const nav = $("#nav");
    const progress = $("#scrollProgress");
    const toTop = $("#toTop");
    const links = Array.from(document.querySelectorAll(".nav__links a"));
    const sections = links
      .map((a) => document.getElementById(a.dataset.target))
      .filter(Boolean);

    function onScroll() {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      nav.classList.toggle("scrolled", y > 40);
      if (toTop) toTop.classList.toggle("show", y > 600);

      let current = sections[0] ? sections[0].id : "";
      sections.forEach((s) => { if (y >= s.offsetTop - 140) current = s.id; });
      links.forEach((a) => a.classList.toggle("active", a.dataset.target === current));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // smooth-scroll for in-page links
  function smoothLinks() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("[data-scroll]");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id[0] !== "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    });
  }

  // mobile menu
  let menuOpen = false;
  function closeMenu() {
    menuOpen = false;
    $("#navLinks").classList.remove("open");
    $("#navBurger").classList.remove("open");
    $("#navBurger").setAttribute("aria-expanded", "false");
  }
  function menu() {
    const burger = $("#navBurger");
    burger.addEventListener("click", () => {
      menuOpen = !menuOpen;
      $("#navLinks").classList.toggle("open", menuOpen);
      burger.classList.toggle("open", menuOpen);
      burger.setAttribute("aria-expanded", String(menuOpen));
    });
  }

  // theme toggle (remembers choice)
  function theme() {
    const btn = $("#themeToggle");
    let saved = null;
    try { saved = localStorage.getItem("kd-theme"); } catch (_) {}
    if (saved === "light") document.body.classList.add("light");
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const mode = document.body.classList.contains("light") ? "light" : "dark";
      try { localStorage.setItem("kd-theme", mode); } catch (_) {}
    });
  }

  // back to top
  function backToTop() {
    $("#toTop").addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // cursor glow + card spotlight + tilt
  function pointerFx() {
    const glow = $(".cursor-glow");
    const fine = window.matchMedia("(pointer:fine)").matches;
    if (fine && glow) {
      window.addEventListener("pointermove", (e) => {
        glow.style.opacity = "0.6";
        glow.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px) translate(-50%,-50%)";
      });
    }
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const mx = e.clientX - r.left, my = e.clientY - r.top;
        card.style.setProperty("--mx", mx + "px");
        card.style.setProperty("--my", my + "px");
        if (fine) {
          const rx = (my / r.height - 0.5) * -6;
          const ry = (mx / r.width - 0.5) * 6;
          card.style.transform = "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-4px)";
        }
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }

  // hero parallax on scroll
  function heroParallax() {
    const inner = $(".hero__inner");
    if (!inner) return;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        inner.style.transform = "translateY(" + y * 0.18 + "px)";
        inner.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.8)));
      }
    }, { passive: true });
  }

  // lightweight particle field
  function particles() {
    const canvas = $("#particles");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let w, h, pts;
    function size() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(70, Math.floor(w / 22));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.8 + 0.6,
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167,139,250,0.5)";
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = dx * dx + dy * dy;
          if (dist < 13000) {
            ctx.strokeStyle = "rgba(124,92,255," + (0.16 * (1 - dist / 13000)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }
    size();
    window.addEventListener("resize", size);
    frame();
  }

  /* ---- init ------------------------------------------------------------- */
  function init() {
    render();
    typeRoles();
    observeReveals();
    scrollEffects();
    smoothLinks();
    menu();
    theme();
    backToTop();
    pointerFx();
    heroParallax();
    particles();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
