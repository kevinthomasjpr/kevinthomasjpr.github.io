(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  var root = document.documentElement;
  var LANG_KEY = "site-lang";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function storedLang() {
    try {
      var s = localStorage.getItem(LANG_KEY);
      if (s === "en" || s === "de") return s;
    } catch (e) { /* storage blocked: fall through */ }
    return (navigator.language || "en").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  var lang = storedLang();
  var L = function () { return C[lang]; };
  var t = function (path) { var v = get(L().ui, path); return v == null ? "" : v; };

  /* ---------- reveal on scroll ---------- */
  var revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
    : null;

  function observeReveals(ctx) {
    $all(".reveal:not(.in)", ctx).forEach(function (el, i) {
      if (!revealObserver || reduceMotion) { el.classList.add("in"); return; }
      if (el.classList.contains("card")) el.style.transitionDelay = (i % 2) * 90 + "ms";
      revealObserver.observe(el);
    });
  }

  /* ---------- card visuals (decorative SVG) ---------- */
  var visuals = {
    solar: function () {
      // 44 inverters as a grid, six weak ones highlighted, plus the two plants' performance ratios
      var s = "", weak = { 5: 1, 13: 1, 18: 1, 27: 1, 31: 1, 40: 1 };
      for (var i = 0; i < 44; i++) {
        var c = i % 11, r = Math.floor(i / 11);
        var x = 38 + c * 19, y = 70 + r * 25;
        s += '<rect x="' + x + '" y="' + y + '" width="14" height="18" rx="3" fill="' +
          (weak[i] ? "rgba(255,107,107,.75)" : "rgba(255,181,71," + (0.35 + ((i * 7) % 5) * 0.08) + ")") + '"/>';
      }
      return '<svg viewBox="0 0 400 250" aria-hidden="true">' +
        '<text class="v-txt" x="38" y="54">' + esc(t("viz.inverters")) + '</text>' + s +
        '<rect class="v-dim" x="270" y="70" width="34" height="118" rx="5"/>' +
        '<rect x="270" y="84" width="34" height="104" rx="5" fill="rgba(255,255,255,.55)"/>' +
        '<rect class="v-dim" x="318" y="70" width="34" height="118" rx="5"/>' +
        '<rect x="318" y="106" width="34" height="82" rx="5" fill="#ffb547"/>' +
        '<text class="v-txt" x="287" y="208" text-anchor="middle">P1</text>' +
        '<text class="v-txt" x="335" y="208" text-anchor="middle">P2</text>' +
        '<text class="v-txt" x="270" y="54">PR</text>' +
        "</svg>";
    },
    cooling: function () {
      // 12 heat loads x 8 pump speeds; the outlined cell per column is the slowest safe speed
      var s = "", path = [], cw = 24, ch = 18, ox = 58, oy = 40;
      for (var c = 0; c < 12; c++) {
        var best = null;
        for (var sp = 0; sp < 8; sp++) {
          var temp = 0.12 + 0.85 * (c / 11) - 0.55 * (sp / 7);
          if (best === null && temp < 0.6) best = sp;
          var tt = Math.max(0, Math.min(1, temp));
          var hue = 205 - 205 * tt;
          var x = ox + c * (cw + 2), y = oy + (7 - sp) * (ch + 2);
          s += '<rect x="' + x + '" y="' + y + '" width="' + cw + '" height="' + ch + '" rx="3" fill="hsl(' +
            hue.toFixed(0) + ' 80% ' + (40 + tt * 14).toFixed(0) + '% / .8)"/>';
        }
        var bx = ox + c * (cw + 2), by = oy + (7 - best) * (ch + 2);
        s += '<rect x="' + (bx - 1) + '" y="' + (by - 1) + '" width="' + (cw + 2) + '" height="' + (ch + 2) + '" rx="4" fill="none" stroke="#fff" stroke-width="1.6"/>';
        path.push((bx + cw / 2) + "," + (by + ch / 2));
      }
      return '<svg viewBox="0 0 400 250" aria-hidden="true">' + s +
        '<polyline points="' + path.join(" ") + '" fill="none" stroke="#fff" stroke-width="1.4" stroke-dasharray="3 3" opacity=".8"/>' +
        '<text class="v-txt" x="58" y="222">' + esc(t("viz.load")) + ' →</text>' +
        '<text class="v-txt" x="44" y="190" transform="rotate(-90 44 190)">' + esc(t("viz.speed")) + ' →</text>' +
        "</svg>";
    },
    ev: function () {
      var pts = [], limitY = 62;
      for (var i = 0; i <= 60; i++) {
        var u = i / 60;
        var temp = 1 - Math.exp(-u / 0.32) * (1 - 0.06 * Math.sin(u * 9));
        pts.push((50 + u * 300).toFixed(1) + "," + (200 - temp * 112).toFixed(1));
      }
      var line = pts.join(" ");
      return '<svg viewBox="0 0 400 250" aria-hidden="true">' +
        '<defs><linearGradient id="evg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8a5c" stop-opacity=".35"/><stop offset="1" stop-color="#ff8a5c" stop-opacity="0"/></linearGradient></defs>' +
        '<rect x="50" y="' + limitY + '" width="300" height="26" fill="rgba(95,220,160,.08)"/>' +
        '<line x1="50" x2="350" y1="' + limitY + '" y2="' + limitY + '" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="6 5"/>' +
        '<text class="v-txt" x="350" y="' + (limitY - 10) + '" text-anchor="end" style="fill:#ff9a9a">' + esc(t("viz.limit")) + '</text>' +
        '<text class="v-txt" x="200" y="' + (limitY + 18) + '" text-anchor="middle" style="fill:#7fe3b4">' + esc(t("viz.margin")) + '</text>' +
        '<polygon points="50,200 ' + line + ' 350,200" fill="url(#evg)"/>' +
        '<polyline points="' + line + '" fill="none" stroke="#ff8a5c" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<line x1="50" x2="350" y1="200" y2="200" stroke="rgba(255,255,255,.12)"/>' +
        '<text class="v-txt" x="50" y="222">' + esc(t("viz.time")) + ' →</text>' +
        "</svg>";
    },
    cad: function () {
      var blades = "";
      for (var i = 0; i < 22; i++) {
        var a = (i / 22) * Math.PI * 2;
        var x1 = 200 + Math.cos(a) * 30, y1 = 125 + Math.sin(a) * 30;
        var x2 = 200 + Math.cos(a + 0.32) * 92, y2 = 125 + Math.sin(a + 0.32) * 92;
        blades += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '"/>';
      }
      return '<svg viewBox="0 0 400 250" aria-hidden="true">' +
        '<circle cx="200" cy="125" r="104" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2"/>' +
        '<circle cx="200" cy="125" r="96" fill="none" stroke="rgba(255,255,255,.08)"/>' +
        '<g class="v-fan" stroke="rgba(160,215,255,.7)" stroke-width="2.2" stroke-linecap="round">' + blades + "</g>" +
        '<circle cx="200" cy="125" r="28" fill="#1b1e23" stroke="rgba(255,255,255,.35)" stroke-width="2"/>' +
        '<circle cx="200" cy="125" r="8" fill="rgba(160,215,255,.8)"/>' +
        "</svg>";
    }
  };
  visuals.vocab = function () {
    // a flip card (German side) over a second card (English side), plus diary progress
    var bars = "";
    for (var i = 0; i < 10; i++) {
      bars += '<rect x="' + (262 + i * 11) + '" y="' + (176 - [6, 9, 12, 16, 15, 21, 26, 30, 34, 40][i]) +
        '" width="7" height="' + [6, 9, 12, 16, 15, 21, 26, 30, 34, 40][i] + '" rx="2" fill="rgba(95,220,160,' + (0.35 + i * 0.06).toFixed(2) + ')"/>';
    }
    return '<svg viewBox="0 0 400 250" aria-hidden="true">' +
      '<g transform="rotate(7 150 125)"><rect x="70" y="58" width="150" height="104" rx="12" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.18)"/>' +
      '<text class="v-txt" x="145" y="117" text-anchor="middle">the apple</text></g>' +
      '<g transform="rotate(-5 140 120)"><rect x="56" y="70" width="160" height="110" rx="12" fill="#1f2a26" stroke="rgba(95,220,160,.55)" stroke-width="1.5"/>' +
      '<text class="v-txt" x="136" y="108" text-anchor="middle" style="fill:#7fe3b4">der</text>' +
      '<text class="v-txt-strong" x="136" y="138" text-anchor="middle">Apfel</text>' +
      '<text class="v-txt" x="136" y="162" text-anchor="middle">die Äpfel</text></g>' +
      '<text class="v-txt" x="262" y="94">diary</text>' + bars +
      '<line x1="258" x2="372" y1="180" y2="180" stroke="rgba(255,255,255,.12)"/>' +
      '<g transform="translate(262 196)"><rect width="22" height="18" rx="4" fill="none" stroke="rgba(255,255,255,.35)"/><text class="v-txt" x="11" y="13" text-anchor="middle">ä</text>' +
      '<rect x="28" width="22" height="18" rx="4" fill="none" stroke="rgba(255,255,255,.35)"/><text class="v-txt" x="39" y="13" text-anchor="middle">ö</text>' +
      '<rect x="56" width="22" height="18" rx="4" fill="none" stroke="rgba(255,255,255,.35)"/><text class="v-txt" x="67" y="13" text-anchor="middle">ü</text>' +
      '<rect x="84" width="22" height="18" rx="4" fill="none" stroke="rgba(255,255,255,.35)"/><text class="v-txt" x="95" y="13" text-anchor="middle">ß</text></g>' +
      "</svg>";
  };

  var tints = {
    vocab: "rgba(95,220,160,.15)",
    solar: "rgba(255,181,71,.18)",
    cooling: "rgba(98,200,255,.16)",
    ev: "rgba(255,138,92,.16)",
    cad: "rgba(160,215,255,.14)"
  };

  /* ---------- renderers ---------- */
  var rendered = false;

  function renderCards() {
    var html = L().projects.map(function (p) {
      return '<a class="card reveal' + (rendered ? " in" : "") + '" href="#/work/' + p.id + '" data-id="' + p.id + '">' +
        '<div class="card-visual" style="--tint:' + tints[p.id] + '">' + visuals[p.id]() + "</div>" +
        '<div class="card-body">' +
          '<span class="card-meta">' + esc(p.meta) + "</span>" +
          '<h3 class="card-title">' + esc(p.title) + "</h3>" +
          '<p class="card-tagline">' + esc(p.tagline) + "</p>" +
          '<div class="tags">' + p.tags.map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</div>" +
          '<span class="card-open">' + esc(t("card.open")) + ' <span class="arrow" aria-hidden="true">→</span></span>' +
        "</div></a>";
    }).join("");
    $("#cards").innerHTML = html;
  }

  function renderInfo() {
    var d = L();
    $("#steps").innerHTML = d.approach.map(function (s) {
      return '<div class="step"><span class="step-n">' + s.n + "</span><h4>" + esc(s.t) + "</h4><p>" + esc(s.d) + "</p></div>";
    }).join("");

    $("#timeline").innerHTML = d.timeline.map(function (it) {
      return '<li class="tl-item"' + (it.id ? ' id="exp-' + it.id + '"' : "") + '><span class="tl-period">' + esc(it.period) + "</span><div>" +
        '<div class="tl-title">' + esc(it.title) + "</div>" +
        '<div class="tl-org">' + esc(it.org) + " · " + esc(it.place) + "</div>" +
        '<ul class="tl-points">' + it.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
        "</div></li>";
    }).join("");

    $("#skills").innerHTML = d.skills.map(function (g) {
      return '<div class="skill-group"><h4>' + esc(g.name) + '</h4><div class="tags">' +
        g.items.map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</div></div>";
    }).join("");

    $("#languages").innerHTML = d.languages.map(function (l) {
      return '<li class="lang-row"><span class="f-main">' + esc(l.name) + '</span><span class="f-sub">' + esc(l.level) + "</span></li>";
    }).join("");

    $("#certs").innerHTML = C.certifications.map(function (c) {
      return '<li><div class="f-main">' + esc(c.name) + '</div><div class="f-sub">' + esc(c.year) +
        ' · <a class="f-link" href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(t("info.verify")) + " ↗</a></div></li>";
    }).join("");

    $("#pubs").innerHTML = C.publications.map(function (p) {
      return '<li><a class="f-main" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + ' <span class="f-link">↗</span></a>' +
        '<div class="f-sub">' + esc(p.venue) + "</div></li>";
    }).join("");
  }

  /* ---------- Why me: sticky notes ---------- */
  // Each note covers a reason card. Clicking peels the note off (it falls and fades),
  // revealing the reason and a "See why" link to the proof. State survives language switches.
  var noteIcons = {
    path: '<path d="M6 30 C14 30 12 14 22 14 S30 6 32 6"/><circle cx="6" cy="30" r="3"/><path d="M27 4 L33 6 L31 12"/>',
    search: '<circle cx="15" cy="15" r="9"/><path d="M22 22 L32 32"/>',
    bulb: '<path d="M13 26 C13 21 8 19 8 13 a10 10 0 0 1 20 0 c0 6 -5 8 -5 13 Z"/><path d="M14 30 H22 M15 34 H21"/>',
    check: '<circle cx="18" cy="18" r="13"/><path d="M11 18 L16 23 L25 13"/>',
    "case": '<rect x="5" y="11" width="26" height="19" rx="3"/><path d="M13 11 V7 H23 V11 M5 19 H31"/>'
  };
  var noteTilt = ["-3deg", "2.5deg", "-1.5deg", "3deg", "-2.5deg"];
  var peeled = [false, false, false, false, false];
  var touchOnly = window.matchMedia("(hover: none)").matches;

  function renderNotes() {
    $("#board").innerHTML = L().reasons.map(function (r, i) {
      return '<div class="slot' + (peeled[i] ? " is-peeled" : "") + '" data-i="' + i + '">' +
        '<div class="reason">' +
          '<span class="reason-n">' + esc(r.n) + "</span>" +
          '<h3 class="reason-word">' + esc(r.word) + "</h3>" +
          '<p class="reason-proof">' + esc(r.proof) + "</p>" +
          '<button type="button" class="reason-see" data-target="' + esc(r.target) + '"' + (peeled[i] ? "" : ' tabindex="-1"') + ">" +
            esc(t("why.see")) + ' <span class="arrow" aria-hidden="true">→</span></button>' +
        "</div>" +
        (peeled[i] ? "" :
          '<button type="button" class="note note-' + (i + 1) + '" style="--tilt:' + noteTilt[i] + '" aria-label="' +
            esc(t("why.noteLabel") + " " + r.n + ": " + r.word) + '">' +
            '<span class="note-tape" aria-hidden="true"></span>' +
            '<span class="note-n" aria-hidden="true">' + esc(r.n) + "</span>" +
            '<span class="note-foot" aria-hidden="true">' +
              '<svg class="note-icon" viewBox="0 0 36 36">' + noteIcons[r.icon] + "</svg>" +
              '<span class="note-peel">' + esc(t(touchOnly ? "why.peelTouch" : "why.peel")) + ' <span class="note-peel-arrow">↗</span></span>' +
            "</span>" +
          "</button>") +
        "</div>";
    }).join("");
    $("#notes-reset").hidden = peeled.indexOf(false) !== -1;
  }

  function peel(slot, byKeyboard) {
    var i = +slot.getAttribute("data-i");
    var note = $(".note", slot);
    if (!note || note.classList.contains("falling")) return;
    peeled[i] = true;
    slot.classList.add("is-peeled");
    note.classList.add("falling");
    var see = $(".reason-see", slot);
    see.removeAttribute("tabindex");
    var done = function () { if (note.parentNode) note.remove(); };
    note.addEventListener("animationend", done, { once: true });
    setTimeout(done, 1400);
    // keyboard users continue on the revealed link; mouse users get no focus ring
    if (byKeyboard) setTimeout(function () { see.focus({ preventScroll: true }); }, 450);
    if (peeled.indexOf(false) === -1) {
      setTimeout(function () { $("#notes-reset").hidden = false; }, 700);
    }
  }

  function stickBack() {
    peeled = [false, false, false, false, false];
    renderNotes();
    $all("#board .note").forEach(function (n, k) {
      n.style.animationDelay = k * 70 + "ms";
      n.classList.add("sticking");
    });
    var first = $("#board .note");
    if (first) first.focus({ preventScroll: true });
  }

  function showProof(target) {
    if (target === "work") {
      $("#work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    } else if (target.indexOf("exp:") === 0) {
      var el = $("#exp-" + target.slice(4));
      if (!el) return;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      el.classList.remove("flash");
      void el.offsetWidth; // restart the highlight animation
      el.classList.add("flash");
    } else {
      openedFromPage = true;
      location.hash = "#/work/" + target;
    }
  }

  $("#board").addEventListener("click", function (e) {
    var see = e.target.closest(".reason-see");
    if (see) { showProof(see.getAttribute("data-target")); return; }
    var note = e.target.closest(".note");
    if (note) peel(note.parentNode, e.detail === 0);
  });
  $("#notes-reset").addEventListener("click", stickBack);

  function renderSheet(p) {
    var parts = [];
    parts.push('<header class="cs-head"><div class="cs-meta">' + esc(p.meta) + "</div>" +
      '<h2 class="cs-title" id="sheet-title">' + esc(p.title) + "</h2>" +
      '<p class="cs-tagline">' + esc(p.tagline) + "</p></header>");
    parts.push('<div class="cs-visual" style="--tint:' + tints[p.id] + '">' + visuals[p.id]() + "</div>");
    parts.push('<section class="cs-grid"><h3 class="label">' + esc(t("sheet.overview")) + '</h3><p class="cs-text">' + esc(p.overview) + "</p></section>");
    parts.push('<section class="cs-grid"><h3 class="label">' + esc(t("sheet.approach")) + '</h3><ol class="cs-list">' +
      p.approach.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ol></section>");
    if (p.results.length) {
      parts.push('<section class="cs-grid"><h3 class="label">' + esc(t("sheet.results")) + '</h3><div class="stats">' +
        p.results.map(function (r) { return '<div class="stat"><strong>' + esc(r.v) + "</strong><span>" + esc(r.l) + "</span></div>"; }).join("") +
        "</div></section>");
    }
    if (p.findings.length) {
      parts.push('<section class="cs-grid"><h3 class="label">' + esc(t("sheet.findings")) + '</h3><ul class="cs-bullets">' +
        p.findings.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></section>");
    }
    parts.push('<section class="cs-grid"><h3 class="label">' + esc(t("sheet.stack")) + '</h3><div class="tags">' +
      p.tags.map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</div></section>");
    if (p.note) {
      parts.push('<section class="cs-grid"><h3 class="label">' + esc(t("sheet.note")) + '</h3><p class="cs-note">' + esc(p.note) + "</p></section>");
    }
    parts.push('<div class="cs-cta"><a class="btn btn-primary" href="' + esc(p.repo) + '" target="_blank" rel="noopener">' +
      esc(t("sheet.code")) + ' <span aria-hidden="true">↗</span></a></div>');
    $("#sheet-body").innerHTML = parts.join("");
  }

  /* ---------- language ---------- */
  function applyLang() {
    root.lang = lang;
    document.title = t("title");
    $all("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    // CV buttons stay hidden until a file path is set in content.js (cvFile)
    var cv = t("cvFile");
    $all("[data-cv]").forEach(function (a) {
      a.hidden = !cv;
      if (cv) a.href = cv;
    });
    $all('[data-link="email"]').forEach(function (a) {
      a.href = "mailto:" + C.links.email + "?subject=" + encodeURIComponent(t("mail.subject"));
    });
    hideMailHelp();
    var btn = $(".lang");
    btn.setAttribute("data-active", lang);
    btn.setAttribute("aria-label", t("nav.lang"));
    renderCards();
    renderInfo();
    renderNotes();
    if (currentId) { var p = findProject(currentId); if (p) renderSheet(p); }
    if (rendered) $all(".reveal").forEach(function (el) { el.classList.add("in"); });
    rendered = true;
    positionIndicator();
  }

  $(".lang").addEventListener("click", function () {
    lang = lang === "en" ? "de" : "en";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyLang();
  });

  /* ---------- email: mailto, with a fallback when no mail app answers ---------- */
  // Some setups (no default mail app, VS Code's built-in preview, some browsers) ignore
  // mailto links silently. If the page keeps focus after the click, offer copy / Gmail.
  var mailHelp = null, mailTimer = 0;

  function hideMailHelp() {
    if (mailHelp) { mailHelp.remove(); mailHelp = null; }
  }

  function showMailHelp(anchor) {
    hideMailHelp();
    var addr = C.links.email;
    var gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(addr) +
      "&su=" + encodeURIComponent(t("mail.subject"));
    mailHelp = document.createElement("div");
    mailHelp.className = "mail-help";
    mailHelp.setAttribute("role", "status");
    mailHelp.innerHTML =
      '<span class="mail-help-q">' + esc(t("mail.nothing")) + "</span>" +
      '<span class="mail-help-addr">' + esc(addr) + "</span>" +
      '<span class="mail-help-actions">' +
        '<button type="button" class="btn btn-primary btn-sm" data-copy>' + esc(t("mail.copy")) + "</button>" +
        '<a class="btn btn-ghost btn-sm" href="' + esc(gmail) + '" target="_blank" rel="noopener">' + esc(t("mail.gmail")) + ' <span aria-hidden="true">↗</span></a>' +
      "</span>";
    anchor.parentNode.insertAdjacentElement("afterend", mailHelp);
    $("[data-copy]", mailHelp).addEventListener("click", function (e) {
      var btn = e.currentTarget;
      var done = function () { btn.textContent = t("mail.copied"); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(done, function () { fallbackCopy(addr); done(); });
      } else { fallbackCopy(addr); done(); }
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    ta.remove();
  }

  $all('[data-link="email"]').forEach(function (a) {
    a.addEventListener("click", function () {
      var left = false;
      var onBlur = function () { left = true; };
      window.addEventListener("blur", onBlur, { once: true });
      clearTimeout(mailTimer);
      mailTimer = setTimeout(function () {
        window.removeEventListener("blur", onBlur);
        if (!left && document.visibilityState === "visible") showMailHelp(a);
      }, 1200);
    });
  });

  // Fixed links
  $all('[data-link="linkedin"]').forEach(function (a) { a.href = C.links.linkedin; });
  $all('[data-link="github"]').forEach(function (a) { a.href = C.links.github; });
  $("#year").textContent = new Date().getFullYear();

  /* ---------- case study sheet (hash routed: #/work/<id>) ---------- */
  var sheet = $("#sheet"), panel = $(".sheet-panel", sheet);
  var currentId = null, openedFromPage = false, lastFocus = null;

  function findProject(id) {
    return L().projects.filter(function (p) { return p.id === id; })[0];
  }

  function openSheet(id) {
    var p = findProject(id);
    if (!p) { closeSheet(true); return; }
    if (currentId !== id) { renderSheet(p); panel.scrollTop = 0; }
    currentId = id;
    lastFocus = document.activeElement;
    sheet.classList.add("open");
    sheet.setAttribute("aria-hidden", "false");
    root.classList.add("locked");
    setTimeout(function () { panel.focus({ preventScroll: true }); }, 50);
  }

  function closeSheet(silent) {
    if (!currentId) return;
    currentId = null;
    sheet.classList.remove("open");
    sheet.setAttribute("aria-hidden", "true");
    root.classList.remove("locked");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    if (!silent) {
      if (openedFromPage) history.back();
      else history.replaceState(null, "", location.pathname + location.search + "#work");
    }
    openedFromPage = false;
  }

  function route() {
    var m = location.hash.match(/^#\/work\/([\w-]+)/);
    if (m) openSheet(m[1]); else closeSheet(true);
  }

  document.addEventListener("click", function (e) {
    var card = e.target.closest && e.target.closest("a.card");
    if (card) openedFromPage = true;
    if (e.target.closest && e.target.closest("[data-close]")) { e.preventDefault(); closeSheet(false); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && currentId) closeSheet(false);
  });
  window.addEventListener("hashchange", route);

  /* ---------- section pill indicator ---------- */
  var pillLinks = $all(".pill a"), indicator = $(".pill-indicator"), activeSection = null;

  function positionIndicator() {
    var link = activeSection && $('.pill a[data-section="' + activeSection + '"]');
    pillLinks.forEach(function (a) { a.classList.toggle("active", a === link); });
    if (!link) { indicator.style.opacity = "0"; return; }
    indicator.style.opacity = "1";
    indicator.style.width = link.offsetWidth + "px";
    indicator.style.transform = "translateX(" + link.offsetLeft + "px)";
  }

  if ("IntersectionObserver" in window) {
    var visible = {};
    var secObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.getAttribute("data-observe")] = e.isIntersecting; });
      var next = visible.info ? "info" : visible.work ? "work" : visible.why ? "why" : null;
      if (next !== activeSection) { activeSection = next; positionIndicator(); }
    }, { rootMargin: "-45% 0px -50% 0px" });
    $all("[data-observe]").forEach(function (s) { secObserver.observe(s); });
  }
  window.addEventListener("resize", positionIndicator);

  /* ---------- hero background art (decorative) ---------- */
  function buildHeroArt() {
    var svg = $("#hero-art");
    if (!svg) return;
    var W = 640, H = 560, period = 320;
    // dot grid
    var dots = "";
    for (var y = 14; y < H; y += 26) {
      for (var x = 14; x < W; x += 26) dots += '<circle class="ha-dot" cx="' + x + '" cy="' + y + '" r="1.2"/>';
    }
    // signal traces: drawn two periods wider than the box and slid left by one period, so the loop is seamless
    var waves = [
      { y: 190, a: 34, k: 1, color: "rgba(255,181,71,.55)", dur: 46 },
      { y: 280, a: 22, k: 2, color: "rgba(255,255,255,.16)", dur: 60 },
      { y: 360, a: 40, k: 1, color: "rgba(98,200,255,.30)", dur: 52 },
      { y: 440, a: 16, k: 3, color: "rgba(255,255,255,.10)", dur: 70 }
    ];
    var paths = waves.map(function (w, i) {
      var d = "";
      for (var x = 0; x <= W + period * 2; x += 6) {
        var t = (x / period) * Math.PI * 2;
        var yv = w.y + w.a * Math.sin(t * w.k + i) + w.a * 0.35 * Math.sin(t * w.k * 3 + i * 2);
        d += (x ? "L" : "M") + x + " " + yv.toFixed(1);
      }
      var shift = -(period / w.k) * w.k; // one full period
      return '<g class="ha-drift" style="--dur:' + w.dur + "s;--shift:" + shift + 'px">' +
        '<path class="ha-wave" d="' + d + '" stroke="' + w.color + '"/></g>';
    }).join("");
    svg.innerHTML = dots + paths;
    requestAnimationFrame(function () { svg.parentNode.classList.add("on"); });
  }

  /* ---------- hero chart ---------- */
  function buildChart() {
    var svg = $("#chart");
    var x0 = 40, x1 = 580, base = 220, amp = 168, n = 140;
    var exp = [], meas = [];
    for (var i = 0; i <= n; i++) {
      var x = x0 + (x1 - x0) * i / n;
      var u = (x - 310) / 128;
      var e = amp * Math.exp(-u * u);
      var noise = (Math.sin(i * 1.7) * 2 + Math.sin(i * 0.43) * 3.2) * (e / amp);
      var d = (x - 306) / 30;
      var dip = Math.exp(-Math.pow(d, 4));            // flat-bottomed midday drop
      var m = Math.max(0, (e * 0.92 + noise) * (1 - 0.7 * dip));
      exp.push([x, base - e]);
      meas.push([x, base - m]);
    }
    var toPath = function (pts) {
      return pts.map(function (p, k) { return (k ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join("");
    };
    var dipPt = meas[Math.round((306 - x0) / (x1 - x0) * n)];
    var grid = "";
    [60, 100, 140, 180, 220].forEach(function (y) { grid += '<line class="c-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + y + '" y2="' + y + '"/>'; });
    var labels = ["06:00", "09:00", "12:00", "15:00", "18:00"].map(function (l, k) {
      return '<text class="c-axis" x="' + (x0 + k * 135) + '" y="246" text-anchor="middle">' + l + "</text>";
    }).join("");

    svg.innerHTML =
      '<defs><linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#ffb547" stop-opacity=".28"/><stop offset="1" stop-color="#ffb547" stop-opacity="0"/></linearGradient></defs>' +
      grid + labels +
      '<rect class="c-band" x="268" y="20" width="76" height="200" rx="6"/>' +
      '<path class="c-area" d="' + toPath(meas) + "L" + x1 + " " + base + "L" + x0 + " " + base + 'Z" fill="url(#areaG)"/>' +
      '<path class="c-exp" d="' + toPath(exp) + '"/>' +
      '<path class="c-meas-glow" d="' + toPath(meas) + '"/>' +
      '<path class="c-meas" d="' + toPath(meas) + '"/>' +
      '<circle class="c-ring" cx="' + dipPt[0] + '" cy="' + dipPt[1].toFixed(1) + '" r="5"/>' +
      '<circle class="c-dot" cx="' + dipPt[0] + '" cy="' + dipPt[1].toFixed(1) + '" r="4.5"/>';

    var lines = $all(".c-meas, .c-meas-glow", svg);
    var len = lines[0].getTotalLength();
    var draw = function () { svg.classList.add("drawn"); };

    if (reduceMotion) { draw(); return; }
    lines.forEach(function (l) {
      l.style.strokeDasharray = len;
      l.style.strokeDashoffset = len;
      l.style.transition = "stroke-dashoffset 2.2s cubic-bezier(.45,.05,.25,1) .3s";
    });
    var go = function () {
      lines.forEach(function (l) { l.style.strokeDashoffset = "0"; });
      draw();
    };
    if ("IntersectionObserver" in window) {
      var o = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { requestAnimationFrame(go); o.disconnect(); }
      }, { threshold: 0.35 });
      o.observe(svg);
    } else { go(); }
  }

  /* ---------- gentle tilt on the hero monitor (mouse only) ---------- */
  function tilt() {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var mon = $("#monitor"), stage = $(".monitor-stage"), raf = 0, px = 0, py = 0;
    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width - 0.5;
      py = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(function () {
        mon.style.setProperty("--ry", (px * 4).toFixed(2) + "deg");
        mon.style.setProperty("--rx", (-py * 3).toFixed(2) + "deg");
        raf = 0;
      });
    });
    stage.addEventListener("pointerleave", function () {
      mon.style.setProperty("--ry", "0deg");
      mon.style.setProperty("--rx", "0deg");
    });
  }

  /* ---------- start ---------- */
  applyLang();
  observeReveals(document);
  buildHeroArt();
  buildChart();
  tilt();
  route();
})();
