require("./7.js");
require("./19.js");
var r = require("./51.js");
var i = require("./253.js");
var o = require("./308.js");
export const a = (t, e = false, n = false, o = "4px") => t.bgType === "color" ? t.bgColorImage ? `\n      <img draggable="false"  ${t.bgColor && t.bgColor !== "transparent" ? `style="background-color:${t.bgColor};"` : ""} class="search-icon search-icon-img ${n ? "shortcut-drag" : ""}" ${e ? "data-uuid=" + t.uuid : ""} src="${Object(r.c)(t.bgColorImage)}" alt="" />\n    ` : ` <div class="search-icon search-icon-img ${n ? "shortcut-drag" : ""}" ${e ? "data-uuid=" + t.uuid : ""}>${Object(i.a)(t, o)}</div> ` : t.logo ? ` <img draggable="false" ${t.bgColor && t.bgColor !== "transparent" ? `style="background-color:${t.bgColor};"` : ""}  class="search-icon-img ${n ? "shortcut-drag" : ""}" ${e ? "data-uuid=" + t.uuid : ""} src="${Object(r.c)(t.logo)}" alt="" />` : "<div></div> ";
export const b = async t => {
  const {
    hide: e,
    hideCategory: n,
    hideButton: r,
    shadow: i
  } = t.search || {};
  const s = document.querySelector(".search-box");
  if (e) {
    s.classList.add("hide");
    return;
  }
  const c = Object(o.a)("store-search");
  if (!c || !c.searchEngine) {
    return;
  }
  const {
    miniMode: u
  } = t.icon || {};
  const {
    current: l
  } = c.searchEngine;
  const f = `\n  <div class="newtab-search ${u ? "minimode" : ""}">\n        <ul class="search-type${n ? " hide" : ""}">\n        ${n ? "" : (h = l.types || [], h.length > 1 ? h.map((t, e) => `<li class="search-type-item${e === 0 ? " active" : ""}">${t.name}</li>`).join("") : "<li class=\"search-type-item holder\">&nbsp;</li>")}\n        </ul>\n        <form class="search-card ${i ? "shadow" : ""}">\n          <button type="button" class="search-card-engine">\n          ${a(l)}\n            <i class="icon-down"></i>\n          </button>\n          <input class="search-card-input" type="text" placeholder="${i18n("input_and_search")}">\n          <button class="search-card-btn${r ? " hide" : ""}" type="submit">\n          <img class="icon-search" src="https://infinityicon.infinitynewtab.com/assets/search.svg"/>\n          </button>\n        </form>\n      </div>\n  `;
  var h;
  s.innerHTML = f;
};