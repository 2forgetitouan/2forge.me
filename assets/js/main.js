(function () {
  "use strict";

  // Icônes SVG locales (24×24, tracé seul, couleur héritée via currentColor).
  var ICONS = {
    play:   '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5v5l4.2-2.5z"/>',
    power:  '<path d="M12 3v8"/><path d="M7.05 6.6a7.5 7.5 0 1 0 9.9 0"/>',
    server: '<rect x="3" y="4" width="18" height="6.5" rx="1.5"/><rect x="3" y="13.5" width="18" height="6.5" rx="1.5"/><path d="M7 7.25h.01M7 16.75h.01"/>',
    braces: '<path d="M8.5 4C6.5 4 6 5 6 6.5v2C6 10 5 11.5 3.5 12 5 12.5 6 14 6 15.5v2C6 19 6.5 20 8.5 20"/><path d="M15.5 4c2 0 2.5 1 2.5 2.5v2c0 1.5 1 3 2.5 3.5-1.5.5-2.5 2-2.5 3.5v2c0 1.5-.5 2.5-2.5 2.5"/>',
    globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>'
  };
  var ARROW = '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>';

  function svg(inner, cls) {
    var ns = "http://www.w3.org/2000/svg";
    var el = document.createElementNS(ns, "svg");
    el.setAttribute("viewBox", "0 0 24 24");
    el.setAttribute("aria-hidden", "true");
    el.setAttribute("focusable", "false");
    if (cls) el.setAttribute("class", cls);
    el.innerHTML = inner; // contenu constant défini ci-dessus, jamais issu de la config
    return el;
  }

  function hostOf(url) {
    try { return new URL(url).host; } catch (e) { return url; }
  }

  function buildCard(service) {
    var li = document.createElement("li");

    var a = document.createElement("a");
    a.className = "card";
    a.href = service.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.id = "service-" + service.id;

    var icon = document.createElement("span");
    icon.className = "card__icon";
    icon.appendChild(svg(ICONS[service.icon] || ICONS.globe));

    var body = document.createElement("span");
    body.className = "card__body";

    var name = document.createElement("span");
    name.className = "card__name";
    name.textContent = service.name;

    var host = document.createElement("span");
    host.className = "card__host";
    host.textContent = hostOf(service.url);

    body.appendChild(name);
    body.appendChild(host);

    if (service.description) {
      var desc = document.createElement("span");
      desc.className = "card__desc";
      desc.textContent = service.description;
      body.appendChild(desc);
    }

    var hint = document.createElement("span");
    hint.className = "visually-hidden";
    hint.textContent = " (s'ouvre dans un nouvel onglet)";

    a.appendChild(icon);
    a.appendChild(body);
    a.appendChild(svg(ARROW, "card__arrow"));
    a.appendChild(hint);
    li.appendChild(a);
    return li;
  }

  function init() {
    var list = document.getElementById("service-list");
    var count = document.getElementById("service-count");
    if (!list || typeof SERVICES === "undefined") return;

    var fragment = document.createDocumentFragment();
    SERVICES.forEach(function (s) { fragment.appendChild(buildCard(s)); });
    list.appendChild(fragment);
    list.removeAttribute("aria-busy");

    if (count) {
      var n = SERVICES.length;
      count.textContent = n + (n > 1 ? " sous-domaines" : " sous-domaine");
    }

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
