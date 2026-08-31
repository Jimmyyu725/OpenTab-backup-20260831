require("./7.js");
require("./6.js");
import * as r from "./5.js";
var i = r;
require("./563.js");
import * as o from "./13.js";
import * as a from "./254.js";
import * as s from "./36.js";
import * as c from "./164.js";
function u() {
  const t = [require("./474.js"), s.b];
  return new i(e => {
    let n = false;
    t.forEach(t => {
      const r = new Image();
      r.addEventListener("load", async () => {
        if (!n) {
          n = true;
          Object(a.b)(t);
          e(t);
        }
      });
      r.src = t;
    });
  });
}
async function l() {
  const t = await Object(c.c)();
  if (t) {
    const e = await Object(c.a)(t);
    const n = window.URL.createObjectURL(e);
    Object(a.b)(n);
    return n;
  }
  throw new Error("当前壁纸base64丢失");
}
async function f(t) {
  const {
    urlInUI: e
  } = t;
  if (await Object(c.f)(e)) {
    Object(a.b)(e);
    return e;
  } else {
    return await l();
  }
}
const h = async () => {
  const t = await o.n.read();
  if (t.error) {
    await u();
    return;
  }
  const e = t.data || {};
  Object(a.c)(e.opacity, e.blur);
  try {
    switch (e.type) {
      case "local":
        {
          const t = await l();
          e.rawUrl = e.urlInUI = t;
          await o.n.create(e);
          break;
        }
      case "bing":
      case "cloud":
        {
          const t = await f(e);
          e.urlInUI = t;
          await o.n.create(e);
          break;
        }
      case "color":
        (function (t) {
          const {
            color: e
          } = t;
          if (!e) {
            throw new Error("纯色壁纸，颜色丢失");
          }
          Object(a.a)(e);
        })(e);
        break;
      case "userLibraryAuto":
      case "cloudAuto":
        {
          const t = await async function (t) {
            if (t.switchType !== "when-newtab" && t.timeEnd > Date.now()) {
              await f(t);
              return;
            }
            const e = await o.m.read();
            if (e.error) {
              await f(t);
              return;
            }
            if (e.data === null) {
              await f(t);
              return;
            }
            const n = e.data;
            if (n.onlyOneItem) {
              await f(t);
              return;
            }
            if (!n.ready) {
              await f(t);
              return;
            }
            if (await Object(c.f)(n.nextURL)) {
              Object(a.b)(n.nextURL);
              n.ready = false;
              await o.m.create(n);
              return {
                url: n.nextURL,
                id: n.nextId,
                rawUrl: n.nextRawURL
              };
            }
            await f(t);
          }(e);
          if (t) {
            e.rawUrl = t.rawUrl;
            e.urlInUI = t.url;
            e.id = t.id;
            await o.n.create(e);
          }
          break;
        }
      case "default":
        await async function (t) {
          const {
            urlInUI: e
          } = t;
          if (await Object(c.f)(e)) {
            Object(a.b)(e);
            return e;
          }
          throw new Error("默认壁纸url访问失败, url: " + e);
        }(e);
        break;
      default:
        {
          const t = await u();
          e.type = "default";
          e.rawUrl = e.urlInUI = t;
          await o.n.create(e);
        }
    }
  } catch (t) {
    await u();
  }
};
import * as p from "./308.js";
import * as d from "./455.js";
import * as m from "./0.js";
import * as g from "./251.js";
import * as y from "./255.js";
import * as b from "./51.js";
import * as w from "./253.js";
import * as v from "./418.js";
const _ = (t, e) => {
  let o = 0;
  if (t === "infinity://todos" && (e == null ? undefined : e.notice)?.todoNumber) {
    o = Number(localStorage.getItem("todo-length"));
  }
  if (t === "infinity://gmail" && (e == null ? undefined : e.notice)?.gmailNumber) {
    const t = localStorage.getItem("store-gmail");
    if (t) {
      o = JSON.parse(t)?.unreadEmailCount;
    }
  }
  if (Number(o)) {
    return `<div class="red-tag"><span>${o > 99 ? "99+" : o}</span></div>`;
  } else {
    return "";
  }
};
const E = (t, e, n) => {
  const {
    shadow: r
  } = e.font;
  return t.filter(t => t && Object(v.a)(t, false, n)).map(t => `<div class="icon"><div class="icon-content-box">\n  ${t.children && t.children.length ? ((t, e, n) => `<section class="icon-content folder" style="padding: var(--mini-icon-padding);">\n    <div class="mini-icon-box-pre">\n       ${t.children.filter(t => Object(v.a)(t, false, n)).map((t, n) => n > 8 ? "" : t.target === g.p.target ? `<div class="mini-icon-padding"><div class="mini-icon" style="background-color:${t.bgColor || "transparent"};background-size: 60% 60%;background-image:url(${Object(b.c)(t.bgImage)});"></div></div>` : t.bgType === "color" ? t.bgColorImage ? `<div class="mini-icon-padding"><div class="mini-icon" style="background-color:${t.bgColor || "transparent"};background-image:url(${Object(b.c)(t.bgColorImage)})"></div>${_(t.target, e)}</div>` : `<div class="mini-icon-padding"><div class="mini-icon" style="--svg-radius:var(--icon-radius);">\n             ${Object(w.a)(t)}\n                  ${Object(y.a)(t.bgText)}\n                </text>\n              </svg>\n            </div>${_(t.target, e)}</div>` : `<div class="mini-icon-padding"><div class="mini-icon" style="background-color:${t.bgColor || "transparent"};background-image:url(${Object(b.c)(t.bgImage)})"></div>${_(t.target, e)}</div>`).join("")}\n    </div>\n  </section>`)(t, e, n) : t.target === g.p.target ? (t => `<section class="icon-content" \n  style="background-image:url(${Object(b.c)(t.bgImage)});background-color:${t.bgColor};background-size: 60% 60%;will-change:transform;">\n</section>`)(t) : t.bgType === "image" ? ((t, e) => `<section class="icon-content" \n    style="background-image:url(${Object(b.c)(t.bgImage)});background-color:${t.bgColor || "transparent"};">\n    ${_(t.target, e)}\n  </section>`)(t, e) : t.bgType === "color" ? ((t, e) => t.bgColorImage ? `<section class="icon-content" \n    style="background-image:url(${Object(b.c)(t.bgColorImage)});background-color:${t.bgColor || "transparent"};">\n    ${_(t.target, e)}\n  </section>` : `<section class="icon-content" style="--svg-radius:var(--icon-radius);">\n  ${Object(w.a)(t)}\n      ${_(t.target, e)}\n  </section>`)(t, e) : ""}\n  <section class="icon-name ${r ? "shadow" : ""}">\n    ${Object(y.a)(t.name)}\n  </section>\n  </div></div>`).join("");
};
const x = async t => {
  const {
    miniMode: n
  } = t.icon;
  const {
    pagin: r
  } = t.view;
  if (n) {
    document.querySelector(".site-box").classList.add("hide");
  }
  (t => {
    const {
      miniMode: e,
      startAnimation: n
    } = t.icon;
    if (!e && n) {
      window.__INFINITY__.startAnimationEnd = false;
      if (m.n) {
        document.querySelector(".site-box").classList.add("start-animate-firefox");
      } else {
        document.querySelector(".site-box").classList.add("start-animate");
      }
      if ("onanimationend" in document) {
        document.querySelector(".site-box").addEventListener("animationend", t => {
          if (t.animationName === "zoomShow") {
            window.__INFINITY__.startAnimationEnd = true;
          }
        });
      } else {
        setTimeout(() => {
          window.__INFINITY__.startAnimationEnd = true;
        }, 600);
      }
    }
  })(t);
  const i = Object(p.a)("store-site");
  const o = Object(p.a)("store-user");
  const a = !s.a || (o == null ? undefined : o.isLogin) && (o == null ? undefined : o.userInfo)?.renderAI;
  if (!i) {
    return;
  }
  const c = i.sites[0];
  const u = document.querySelector(".site-items");
  const l = document.querySelector(".swiper-pagination");
  const f = `<div class="items-card${t.icon.shadow ? " icon-shadow" : ""}">\n    ${E(c || [], t, a)}\n</div>\n`;
  u.innerHTML = f;
  if (i.sites.length > 1) {
    l.innerHTML = i.sites.map((t, e) => `<span class="dot${e === 0 ? " active" : ""}"></span>`).join("");
    l.classList.remove("hide");
  }
  if (r && !n) {
    document.querySelector(".site-pagin").classList.remove("hide");
  }
};
const T = async (t, e) => {
  var n;
  var r;
  document.querySelector(".btn-setting").classList.remove("hide");
  const {
    windmill: i
  } = t.view || {};
  if (t.view.isShowHomepageBtn && m.s) {
    document.querySelector(".btn-setting-home").classList.remove("hide");
  }
  if (!s.a && !t.view.hideInfinityAI && !!localStorage.getItem("pre-chatai")) {
    document.querySelector(".btn-chatai").classList.remove("hide");
  }
  const o = localStorage.getItem("langCode") || "";
  if (o === "zh-CN" && m.s && !t.view.isHideIcp) {
    if ((n = document.querySelector(".icp.zh")) !== null && n !== undefined) {
      n.classList.remove("hide");
    }
  }
  if (o.startsWith("en") && !t.view.isHideIcp) {
    if ((r = document.querySelector(".icp.en")) !== null && r !== undefined) {
      r.classList.remove("hide");
    }
  }
  if (i) {
    document.querySelector(".windmill-box").classList.remove("hide");
  }
  const a = localStorage.getItem("infinity-updater");
  if (a) {
    try {
      const {
        info: t
      } = JSON.parse(a);
      if (t.level) {
        document.querySelector(".btn-update").classList.remove("hide");
      }
    } catch (t) {}
  }
};
require("./19.js");
import * as I from "./313.js";
import * as O from "./109.js";
import * as S from "./24.js";
import * as A from "./460.js";
function N(t) {
  return ` <img style="margin: 0;" class="bookmark-icon" src="${function (t) {
    if (m.n || m.h) {
      return "https://favicon.infinitynewtab.com/" + S.a.getFavIconSrc(t) + ".png";
    }
    return Object(A.a)(t);
  }(t)}" /> `;
}
function j(t, e, r) {
  return `\n      <div\n        class="bookmark-item"\n        style="display: inline-flex;"\n      >\n        ${e === "star" ? ` <img class="bookmark-icon" src=${require("./558.js")} /> ` : e === "folder" ? ` <img style="margin: 0;" class="bookmark-icon" src=${require("./475.js")} /> ` : ` ${N(r)} `}\n        <span class="bookmark-text" style="${t ? "" : "margin-left: 0;"}">${t}</span>\n      </div>\n  `;
}
function C(t = O.b, e = {
  topUseful: 0,
  topBookmark: 0
}) {
  const r = t.view.topBookmark && e.topBookmark === 1;
  const i = t.view.topUseful && e.topUseful === 1;
  const o = document.querySelector(".top-bookmark");
  if (r) {
    o.classList.remove("hide");
    const t = document.createElement("style");
    t.textContent = "\n.top-bookmark{\n  display: flex;\n  align-items: center;\n\n  box-sizing: border-box;\n  padding: 4px 8px;\n  border-bottom: 1px solid rgb(226, 226, 226);\n  height: 36px;\n}\n\n.bookmark-split-line {\n  display: block;\n  width: 1px;\n  height: 50%;\n  background-color: #ccc;\n  margin: 0 6px;\n}\n\n.bookmark-items {\n  height: inherit;\n  flex: 1;\n  // overflow: hidden;\n  font-size: 0;\n\n  --topbar-bookmark-height: calc(30px + 6px);\n  display: block;\n  width: 100vw;\n  height: var(--topbar-bookmark-height);\n  background-color: rgb(255, 255, 255);\n  border-bottom: 1px solid rgb(226, 226, 226);\n  box-sizing: border-box;\n  padding: 4px 0;\n  position: relative;\n}\n\n.bookmark-item {\n  height: 100%;\n  width: auto;\n  max-width: 152px;\n  box-sizing: border-box;\n  padding: 2px 10px;\n  position: relative;\n  border-radius: calc(var(--topbar-bookmark-height) / 2);\n\n  flex-flow: row nowrap;\n  align-items: center;\n  list-style: none;\n}\n\n.bookmark-item:not(:first-child) {\n  margin-left: 3px;\n}\n.bookmark-item:last-child {\n  margin-left: 0;\n}\n\n.bookmark-dropdown-entry {\n  display: block;\n  width: 0;\n  height: 100%;\n  border-radius: 12px;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  background-position: center;\n  margin-right: 3px;\n  padding: 2px 10px;\n}\n\n\n\n.bookmark-item .bookmark-icon {\n  width: 16px;\n  height: 16px;\n  vertical-align: top;\n}\n\n.bookmark-item .bookmark-text {\n  font-size: 12px;\n  color: #333;\n  margin-left: 7px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  flex: 1;\n}\n\n.bookmark-item .item-folder-arrow {\n  width: 12px;\n  height: 12px;\n  vertical-align: top;\n}\n";
    const e = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let r = "";
    if (m.i) {
      r += j(i18n("bookmarks"), "star");
    }
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      r += j(n.title, Reflect.has(n, "children") ? "folder" : "item", n.url);
    }
    const i = document.createElement("div");
    i.className = "bookmark-items";
    i.innerHTML = r;
    i.appendChild(t);
    o.appendChild(i);
    const a = document.createElement("i");
    a.className = "bookmark-dropdown-entry";
    a.style.backgroundImage = `url(${require("./559.js")})`;
    a.style.visibility = "hidden";
    o.appendChild(a);
    const s = document.createElement("i");
    s.className = "bookmark-split-line";
    o.appendChild(s);
    const c = document.createElement("div");
    o.appendChild(c);
    c.outerHTML = j(i18n("other_bookmarks"), "folder", "").trim();
    const u = i.querySelectorAll(".bookmark-item");
    let l = false;
    for (let t = u.length - 1; t >= 0; t--) {
      const e = u[t];
      if (!(e.offsetTop > 10)) {
        break;
      }
      e.style.display = "none";
      l = true;
    }
    if (l) {
      a.style.visibility = "";
    }
  }
  if (i) {
    const t = document.querySelector(".top-useful");
    const e = JSON.parse(localStorage.getItem("topSites")) || [];
    if (t) {
      if (r) {
        t.parentElement.style.top = "36px";
      }
      t.classList.remove("hide");
    }
    let n = "";
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      n += `\n<div class="item" title="${r.title}" style="max-width: 160px;min-width: 60px;">\n  <div class="icon">${N(r.url)}</div>\n  <span>${r.title}</span>\n</div>\n    `;
    }
    const i = document.createElement("style");
    i.textContent = "\n    .top-useful {\n      width: 100%;\n      height: 36px;\n      box-sizing: border-box;\n    }\n\n    .top-useful  .flex {\n      display: flex;\n      align-items: center;\n      height: 100%;\n      font-size: 12px;\n      box-sizing: border-box;\n      padding: 4px 8px;\n      flex-flow: row wrap;\n      overflow: hidden;\n    }\n    .top-useful   .item:not(:last-child) {\n      margin-right: 5px;\n    }\n    .top-useful    .item {\n      display: inline-flex;\n      height: 100%;\n      align-items: center;\n      border-radius: 24px;\n      flex-shrink: 0;\n      position: relative;\n      box-sizing: border-box;\n      padding: 2px 10px;\n      cursor: pointer;\n    }\n    .top-useful  .item::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      background-color: #151517;\n      border-radius: inherit;\n      transition: opacity 400ms;\n      pointer-events: none;\n      cursor: pointer;\n    }\n    .top-useful   .item:hover::before {\n      transition: opacity 200ms;\n      opacity: 0.12;\n    }\n\n    .top-useful  .icon {\n      width: 16px;\n      height: 16px;\n      box-sizing: border-box;\n      border-radius: 50%;\n      overflow: hidden;\n      flex-shrink: 0;\n    }\n    .top-useful    .icon img {\n      width: 100%;\n      height: 100%;\n    }\n    .top-useful  span {\n      margin-left: 6px;\n      color: #ececec;\n      text-decoration: none;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    ";
    const o = document.createElement("div");
    o.innerHTML = n;
    o.className = "flex";
    t.appendChild(i);
    t.appendChild(o);
  }
}
const D = async () => {
  const {
    setting: t,
    permission: e
  } = Object(p.a)("store-setting") || {};
  ((t = O.b, e = {
    topUseful: 0,
    topBookmark: 0
  }) => {
    const {
      row: i,
      col: o,
      rowGap: a,
      colGap: s
    } = t.layout;
    const c = t.view.topBookmark && e.topBookmark === 1;
    const u = t.view.topUseful && e.topUseful === 1;
    const l = {
      row: i,
      col: o,
      rowGap: a,
      colGap: s,
      iconScale: t.icon.scale,
      searchScale: t.search.scale,
      innerHeight: window.visualViewport?.height || window.innerHeight,
      innerWidth: window.visualViewport?.width || window.innerWidth,
      miniMode: t.icon.miniMode,
      fontSize: t.font.size,
      topUseful: u,
      topBookmark: c,
      mainRatio: t.view.scaleMain
    };
    const f = Object(I.a)(l);
    let h = 0;
    if (c) {
      h += 36;
    }
    const p = {
      "--search-height": f.searchHeight,
      "--search-width": f.searchWidth,
      "--search-margin-top": f.searchMarginTop,
      "--search-margin-bottom": f.searchMarginBottom,
      "--search-ratio": f.searchRatio,
      "--icon-box-width": f.iconBoxWidth,
      "--icon-box-height": f.iconBoxHeight,
      "--icon-one-height": f.iconOneHeight,
      "--icon-width": f.iconWidth,
      "--mini-icon-padding": f.miniIconPadding,
      "--icon-ratio": f.iconRatio,
      "--icon-font-size": Math.ceil(Math.max(t.font.size * t.view.scaleMain, 12)) + "px",
      "--icon-row": "" + i,
      "--icon-col": "" + o,
      "--icon-radius": Math.round(t.icon.radius * 100) + "%",
      "--icon-font-color": t.font.color,
      "--icon-opacity": t.icon.opacity,
      "--icon-visible": t.icon.isHideIconName ? "hidden" : "visible",
      "--search-radius": "" + t.search.radius,
      "--search-opacity": t.search.opacity,
      "--top-bar-height": h + "px",
      "--icon-padding-top": "10px",
      "--main-icons-margin": f.iconsMargin,
      "--search-btn-bgcolor": m.e === "pro" ? "#18140E" : "#00ce6d",
      "--settings-icon-top-offset": u ? "46px" : "20px",
      "--side-ratio": t.view.scaleSide
    };
    Object.keys(p).forEach(t => {
      document.body.style.setProperty(t, p[t]);
    });
  })(t, e);
  if (t) {
    await i.all([x(t), C(t, e), Object(d.b)(t), T(t)]);
  }
};
import * as k from "./23.js";
var R = k;
const L = ["store-site", "store-setting", "store-search", "store-todo", "store-notes", "store-weather", "store-wallpaper", "infinity-icons", "infinity-settings", "infinity-searchs", "infinity-todos", "infinity-notes", "infinity-weather"];
async function P() {
  const t = {};
  try {
    await R.iterate((e, n) => {
      if (L.includes(n) && e) {
        t[n] = e;
      }
    });
    return t;
  } catch (t) {
    return {};
  }
}
async function M() {
  const t = {};
  L.forEach(e => {
    const n = localStorage.getItem(e);
    if (n) {
      t[e] = n;
    }
  });
  return t;
}
import * as F from "./167.js";
var U = F;
const B = {
  name: "hook10063",
  checkNeedUpdate: t => !m.i && U.lt(t, "10.0.63"),
  async onUpdate() {
    const t = [o.g.key, o.h.key, o.i.key, o.l.key];
    await i.all(t.map(async t => {
      const e = localStorage.getItem(t);
      if (e) {
        try {
          const n = JSON.parse(e);
          const r = o.a.getInstanceFromKey(t);
          await r.create(n);
        } catch (t) {}
        if (t === o.l.key) {
          localStorage.removeItem(t);
        }
      }
    }));
    return {
      dataVersion: "10.0.63"
    };
  }
};
const $ = {
  name: "hook10070",
  checkNeedUpdate: t => U.lt(t, "10.0.70"),
  async onUpdate(t) {
    const [e] = t.split(".");
    if (e === 10) {
      const t = {
        onlyOneItem: false,
        ready: false
      };
      await o.m.create(t);
      await R.removeItem(s.d);
      await o.n.delete("storage.local");
    }
    return {
      dataVersion: "10.0.70"
    };
  }
};
import * as q from "./256.js";
import * as G from "./163.js";
import * as W from "./384.js";
function V(t) {
  const e = document.createElement("div");
  e.innerHTML = t;
  const n = e.firstChild;
  if (n == null ? undefined : n.textContent) {
    return n.textContent.substring(0, 20);
  } else {
    return e.textContent.substring(0, 20);
  }
}
const z = {
  searchSuggest: true,
  startAnimation: false,
  isHideIconName: false
};
const Y = async t => ({
  sites: (t || []).map(t => (t || []).map(t => function t(e) {
    var n;
    const r = {
      name: e.name,
      uuid: e.uid,
      updatetime: e.updateTime || Date.now(),
      id: e.id
    };
    if (e.items) {
      r.children = e.items.map(e => t(e));
    } else {
      r.target = e.url || "";
      r.type = ((n = e.url) === null || n === undefined ? undefined : n.indexOf("infinity://")) === 0 ? "app" : "web";
      r.bgImage = e.src;
      r.bgType = e.imageType || "color";
      r.bgFont = e.fontSize || 30;
      r.bgText = e.showText || "";
      r.bgColor = e.imageType === "image" && e.bgColor === "transparent" ? undefined : e.bgColor;
    }
    if (r.target === g.p.target) {
      r.bgColor = g.p.bgColor;
      r.bgImage = g.p.bgImage;
      r.name = g.p.name;
    }
    return r;
  }(t)))
});
require("./64.js");
const H = async ({
  data: t,
  icon: e,
  wallpaper: n
}) => {
  const r = {};
  if (t["infinity-settings"]) {
    t["infinity-settings"]._v2Setting = t["infinity-settings"]._v2Setting || {};
    t["infinity-settings"]._v2Setting = Object.assign(Object.assign({}, z), t["infinity-settings"]._v2Setting);
    r[o.h.key] = await (async t => {
      function e(t) {
        return Number((t / 100).toFixed(2));
      }
      let n = true;
      const r = Object(O.a)(t.column, t.row);
      if (r && r.rowGap === e(t.iconMarginY) && r.colGap === e(t.iconMarginX)) {
        n = false;
      }
      const {
        _v2Setting: i
      } = t;
      return {
        setting: {
          notice: {
            gmail: t.isOpentGmailNotication,
            gmailVoice: t.isOpentGmailRingNotication,
            gmailNumber: t.isShowGmailUnreadEmailNumbersInIco,
            todoNumber: t.isShowToDoNumbersInIco
          },
          link: {
            icon: t.isOpenLinkInNewTab,
            search: t.isSearchInNewTab,
            bookmark: t.isOpenBookmarkInNewTab,
            history: t.isOpenHistoryInNewTab
          },
          view: {
            topBookmark: t.isShowTopBookMarks,
            topUseful: t.isShowtopSites,
            windmill: t.isShowRandomWallpaperBtn,
            pagin: t.isShowSlideBtn,
            scaleSide: e(t.settingLeftSlideZoom),
            scaleMain: e(t.settingMainZoom)
          },
          layout: {
            row: t.column,
            col: t.row,
            rowGap: e(t.iconMarginY),
            colGap: e(t.iconMarginX),
            custom: n,
            customItem: [t.column, t.row]
          },
          animation: {
            easing: t.slideAnimation
          },
          icon: {
            miniMode: t.isMinimalistMode,
            shadow: t.isShowIconShadow,
            opacity: e(t.iconOpacity),
            radius: e(t.iconBorderRadius),
            scale: e(t.iconSize),
            startAnimation: i.startAnimation,
            isHideIconName: i.isHideIconName
          },
          search: {
            hide: t.isShowSearchBox,
            searchSuggest: i.searchSuggest,
            hideCategory: t.isShowSearchType,
            hideButton: t.isShowSearchBtn,
            shadow: t.searchBoxShadow,
            scale: e(t.Searchboxsize),
            radius: Number((t.searchBoxRadius / 66).toFixed(2)),
            opacity: e(t.searchBoxOpacity)
          },
          font: {
            shadow: t.isOpenFontShadow,
            size: t.fontSize,
            color: t.fontColor
          },
          _v1Setting: {
            isAutoSync: t.isAutoSync,
            presetColumn: t.presetColumn,
            presetRow: t.presetRow,
            location: t.location,
            tempUnitC: t.tempUnitC,
            bgOpacity: t.bgOpacity,
            bgBlur: t.bgBlur,
            everydayWallpaper: t.everydayWallpaper,
            refetchWallpaperPeriodInMinutes: t.refetchWallpaperPeriodInMinutes,
            wallpaperSource: t.wallpaperSource
          }
        }
      };
    })(t["infinity-settings"]);
    const e = !!t["infinity-settings"].isAutoSync;
    r[o.j.key] = {
      isOpenSync: e
    };
  }
  if (t["infinity-notes"]) {
    r[o.d.key] = await (async (t, e) => {
      return {
        list: t.map(t => {
          return {
            content: t.text,
            id: t.id,
            time: t.time,
            title: t._title || V(t.text),
            updatetime: Date.now(),
            fontSize: parseInt(e == null ? undefined : e.notesFontSize) ?? 14
          };
        }),
        checkedId: (t == null ? undefined : t.length) ? t[0]?.id : ""
      };
    })(t["infinity-notes"], t["infinity-settings"]);
  }
  if (t["infinity-todos"]) {
    r[o.k.key] = await (async t => ({
      todoList: t.map(t => ({
        done: !!t.done,
        text: t.text,
        time: t.time,
        todoId: t.id,
        updatetime: Date.now()
      }))
    }))(t["infinity-todos"]);
  }
  if (t["infinity-searchs"]) {
    r[o.g.key] = await (async t => {
      function e(t) {
        const e = {
          uuid: t.seId,
          name: t.name,
          logo: t.logo,
          bgColor: t.bgColor || "transparent"
        };
        if (t.types) {
          e.types = t.types;
        }
        return e;
      }
      const n = e(t.current);
      if (t.current.isCustom) {
        n.target = t.current.types[0].url;
      } else {
        n.types = t.current.types;
      }
      return {
        searchEngine: {
          current: n,
          all: ((t == null ? undefined : t.all) || []).map(t => {
            const n = e(t);
            if (t.isCustom) {
              n.target = t.types[0].url;
            } else {
              n.types = t.types;
            }
            return n;
          }),
          addList: ((t == null ? undefined : t.additions) || []).map(t => {
            const n = e(t);
            n.target = t.url;
            return n;
          }),
          custom: ((t == null ? undefined : t.customEngines) || []).map(t => {
            const n = e(t);
            n.target = t.types[0].url;
            return n;
          })
        }
      };
    })(t["infinity-searchs"]);
  }
  if (e) {
    r[o.i.key] = await Y(e);
  }
  if (n) {
    r[o.n.key] = await (async (t, e) => {
      const {
        wallpaperSource: n = {
          value: ""
        }
      } = e;
      const r = "https://infinitypro-img.infinitynewtab.com/findaphoto/bigLink/default.png";
      const i = {
        type: "default",
        url: t.src ? t.src : r,
        rawUrl: t.src ? t.src : r
      };
      if ("bgOpacity" in e) {
        i.opacity = e.bgOpacity;
      }
      if ("bgBlur" in e) {
        i.blur = e.bgBlur;
      }
      i.urlInUI = i.url;
      switch (t.type) {
        case "bing":
          i.type = "bing";
          break;
        case "image":
          i.type = "cloud";
          break;
        case "color":
          i.type = "color";
          i.color = t.color;
      }
      if (i.url.startsWith("http")) {
        if (e.everydayWallpaper) {
          if (n.value.startsWith("__wp_library__")) {
            i.type = "userLibraryAuto";
          } else {
            i.type = "cloudAuto";
          }
          const t = {
            60: "per-hour",
            720: "twelve-hour",
            1440: "one-day"
          };
          i.switchType = t[e.refetchWallpaperPeriodInMinutes] || "one-day";
          i.wpSource = n.value || "InfinityLandscape";
        }
      } else {
        i.type = "local";
        const t = "data:image/png;base64,";
        const e = /data:image\/(.+?);base64,/;
        if (i.url.startsWith("data:image/png;base64,data:image/")) {
          let n = i.url.replace(/data:image\/png;base64,/g, "");
          if (!e.test(n)) {
            n = `${t}${n}`;
          }
          i.url = n;
        }
        if (!e.test(i.url)) {
          i.url = `${t}${i.url}`;
        }
        delete i.rawUrl;
        delete i.urlInUI;
      }
      if (i.type === "default") {
        i.urlInUI = `${i.url}?imageView2/2/w/${screen.width}/format/webp/interlace/1`;
      }
      if (t.type === "bing") {
        i.wpSource = "bing";
      }
      return i;
    })(n, t["infinity-settings"] || {});
  }
  return r;
};
const X = async () => {
  const t = await new i(t => {
    chrome.storage.local.get(null, e => {
      try {
        const n = JSON.parse(e["infinity-wallpaper"] || null);
        const r = JSON.parse(e["infinity-bing-wallpaper-md5"] || null);
        const i = {
          src: n == null ? undefined : n.originalSrc,
          bing: r == null ? undefined : r.md5
        };
        t(i);
      } catch (e) {
        t({
          src: "",
          bing: null
        });
      }
    });
  });
  const e = await Object(G.b)("infinity-bg");
  if (e) {
    Object.assign(t, e);
  }
  return {
    data: {
      "infinity-settings": await Object(G.b)("infinity-settings"),
      "infinity-notes": await Object(G.b)("infinity-notes"),
      "infinity-todos": await Object(G.b)("infinity-todos"),
      "infinity-searchs": await Object(G.b)("infinity-searchs")
    },
    icon: await Object(G.b)("infinity-icons"),
    wallpaper: t
  };
};
const K = async t => {
  t[o.n.key] &&= await (async t => {
    if (t.type === "local") {
      await Object(c.g)(t.url);
    } else {
      await Object(c.g)(await Object(W.d)(t.url));
    }
    t.wpExt = undefined;
    return t;
  })(t[o.n.key]);
  const e = Object.keys(t);
  await i.all(e.map(async e => {
    const n = o.a.getInstanceFromKey(e);
    if (n) {
      await n.create(t[e]);
    } else {
      console.error("setLocalData ~ key", e);
    }
  }));
};
import * as J from "./22.js";
async function Q(t) {
  await o.l.create({
    isLogin: t.isLogin,
    refreshToken: t.refreshToken,
    token: t.token,
    userInfo: t.user,
    _flag: {}
  });
}
const Z = async () => {
  const t = await async function () {
    const t = await Object(G.b)("infinity-user");
    if (!(t == null ? undefined : t.isLogin)) {
      return;
    }
    const e = await J.f.loginWithUid(t);
    if (e.code === 0) {
      return e.data;
    } else {
      return undefined;
    }
  }();
  const e = await Object(G.b)("infinity-mobile-uid");
  if (t) {
    t.user.mobileuid = e;
    await Q(Object.assign(Object.assign({}, t), {
      isLogin: true
    }));
  } else {
    await Q({
      isLogin: false
    });
  }
};
async function tt() {
  const t = await async function () {
    const e = await Object(G.b)("infinity-weather");
    if ((e == null ? undefined : e.citys)?.length) {
      return e.citys.map(t => t.data.name);
    }
    return [];
  }();
  const e = await async function (t) {
    if (t == null ? undefined : t.length) {
      return await i.all(t.map(async t => {
        const r = await J.h.getCityList(t);
        if ((r == null ? undefined : r.data)?.cities?.length) {
          const {
            cid: t,
            city: e
          } = r.data.cities[0];
          return {
            cid: t,
            city: e
          };
        }
      }));
    } else {
      return [];
    }
  }(t);
  const n = await async function (t) {
    if (t == null ? undefined : t.length) {
      return await i.all(t.map(async t => {
        const e = await J.h.getForecastWeather(t.cid);
        if (e == null ? undefined : e.data) {
          return Object.assign(Object.assign({}, e.data), {
            name: t.city
          });
        }
      }));
    } else {
      return [];
    }
  }(e);
  const r = await async function () {
    return await J.h.getLocalCity();
  }();
  const a = await Object(G.b)("infinity-settings");
  const s = a ? a.tempUnitC ? "celsius" : "fahrenheit" : "celsius";
  await o.o.create({
    _flag: {},
    lastUpdated: +new Date(),
    unit: s,
    list: n,
    localData: r
  });
}
const et = async t => {
  const e = t.split(".")[0];
  if (t !== m.D) {
    await q.a.clearAllData();
  }
  if (Number(e) < 10) {
    await q.a.backupOldData(false, t);
    await (async () => {
      const t = await X();
      const e = await H(t);
      await K(e);
    })();
    let e = true;
    if (localStorage.getItem("updating-manual")) {
      try {
        const {
          data: t,
          error: n
        } = await o.l.read();
        if (n) {
          throw n;
        }
        if (t == null ? undefined : t.isLogin) {
          e = false;
        }
      } catch (t) {}
    }
    if (e) {
      await Z();
    }
    await tt();
    return;
  }
  await q.a.backupOldData(true, t);
};
const nt = {
  name: "hook10",
  checkNeedUpdate: t => U.lt(t, "10.0.0"),
  async onUpdate(t) {
    await et(t);
    try {
      await (async () => {
        ["infinity-bg", "infinity-weather", "infinity-default-search-engines", "infinity-mobile-uid", "infinity-user", "infinity-settings", "infinity-searchs", "infinity-todos", "infinity-notes", "infinity-icons"].forEach(t => {
          localStorage.removeItem(t);
        });
      })();
    } catch (t) {}
    return {
      dataVersion: "10.0.0"
    };
  }
};
const rt = {
  name: "hook1036",
  checkNeedUpdate: t => U.lt(t, "10.0.36"),
  async onUpdate() {
    window.updateFromThirtyFiveStatus = true;
    try {
      const t = await Object(W.c)();
      const {
        data: e,
        error: n
      } = await o.n.read();
      if (!n && e) {
        e.customColorItems = t.map(t => {
          if (!("type" in t)) {
            t.type = "color";
          }
          return t;
        });
        await o.n.create(e);
      }
    } catch (t) {}
    window.updateFromThirtyFiveStatus = false;
    return {
      dataVersion: "10.0.36"
    };
  }
};
const it = {
  name: "hook1040",
  checkNeedUpdate: t => U.lt(t, "10.0.40"),
  async onUpdate() {
    const t = localStorage.getItem(o.o.key);
    if (t) {
      await o.o.create(JSON.parse(t));
    }
    return {
      dataVersion: "10.0.40"
    };
  }
};
const ot = async (t, e) => {
  await (async t => {
    t = t || "0.0.0";
    let e = await R.getItem("data-record");
    e ||= {};
    if (e[t]) {
      return;
    }
    const [n, r] = await i.all([P(), M()]);
    const o = {
      indexedData: n,
      localData: r,
      time: Date.now(),
      version: m.z,
      dataVersion: t
    };
    e[t] = o;
    Object.keys(e).forEach(n => {
      if (n !== t && Date.now() - e[n].time > 2592000000) {
        delete e[n];
      }
    });
    await R.setItem("data-record", e);
  })(t);
  const n = ((t, e) => async n => {
    try {
      if (!t || !e || typeof t != "string" || typeof e != "string") {
        return;
      }
      if (n.checkNeedUpdate(t, e)) {
        await q.a.track(`begin ${n.name} from ${t} to ${e}`);
        const r = await n.onUpdate(t, e);
        if (r == null ? undefined : r.dataVersion) {
          localStorage.setItem("data-version", r.dataVersion);
        }
        await q.a.track(`success ${n.name} from ${t} to ${e}`);
      }
    } catch (r) {
      await q.a.track(`failed ${n.name} from ${t} to ${e}`, r);
      throw r;
    }
  })(t, e);
  await n(nt);
  await n(rt);
  await n(it);
  await n(B);
  await n($);
};
const at = async () => {
  let t = localStorage.getItem("data-version");
  if (t !== m.z && localStorage.getItem("user-checkout-repair") !== m.z) {
    if (!t && (t = localStorage.getItem("version"), !t)) {
      if (localStorage.getItem("infinity-icons")) {
        t = "9.9.9";
      }
    }
    var e;
    var n;
    if (t && U.valid(t) === t) {
      try {
        await (e = "tabUpdater", n = async () => {
          const e = localStorage.getItem("data-version") || t;
          if (e !== m.z) {
            console.info("begin ~ tabUpdater:", e, m.z);
            try {
              await ot(e, m.z);
              localStorage.setItem("data-version", m.z);
            } catch (t) {
              console.error("-->> ~ updater error:", t);
            }
          }
        }, navigator.locks ? new i((t, r) => {
          const i = new AbortController();
          setTimeout(() => {
            r(new Error("timeout"));
            i.abort();
          }, 20000);
          navigator.locks.request(e, {
            signal: i.signal
          }, async e => {
            try {
              const r = await n(e);
              t(r);
            } catch (t) {
              r(t);
            }
          });
        }) : (console.warn("navigator.locks is not supported"), n(null)));
      } catch (t) {
        console.error("-->> ~ tabUpdater error:", t);
      }
    } else {
      localStorage.setItem("data-version", m.z);
    }
  }
};
(async () => {
  console.time("updater");
  await at();
  console.timeEnd("updater");
  console.time("i18n");
  if (m.r) {
    const {
      initI18n: t
    } = await Promise.resolve().then(require.bind(null, 6));
    await t();
  }
  console.timeEnd("i18n");
  document.title = i18n("new_tab");
  window.globalThis = window.globalThis || window;
  window.__INFINITY__ = {};
  window.__INFINITY__.scrollbar_width = 6;
  window.__INFINITY__.startAnimationEnd = true;
  window.__INFINITY__.wpId = "__wp__";
  window.__INFINITY__.wpColorId = "__wp_color__";
  window.__INFINITY__.wpLibraryId = "__wp_library__";
  window.__INFINITY__.wpLibraryItemId = "__wp_library_item__";
  window.__INFINITY__.color_list = g.i;
  window.__INFINITY__.wallpaper_sources = g.o;
  window.__INFINITY__.isZh = m.C.isZh;
  window.__ANIMATION__ = {};
  window.__ANIMATION__.aniSideTime = 200;
  window.__ANIMATION__.aniSideFn = "cubic-bezier(0.42, 0, 0.58, 1)";
  window.__ANIMATION__.aniFolderTime = 100;
  window.__ANIMATION__.aniFolderFn = "cubic-bezier(0.42, 0, 0.58, 1)";
  window.__ANIMATION__.aniFolderBgTime = 200;
  window.__ANIMATION__.aniFolderBgFn = "cubic-bezier(0.42, 0, 0.58, 1)";
  await new i(async t => {
    console.time("pre-render");
    if (localStorage.getItem("data-version") !== m.z && localStorage.getItem("user-checkout-repair") !== m.z) {
      try {
        await Promise.all([require.e(0), require.e(3), require.e(30)]).then(require.bind(null, 809));
        document.body.classList.remove("hide-opacity");
        document.querySelector("i-updating").classList.remove("hide");
        document.querySelector("i-updating").showError();
      } catch (t) {
        console.error(t);
      }
    }
    await i.all([h(), D()]);
    document.body.classList.remove("hide-opacity");
    console.timeEnd("pre-render");
    setTimeout(t, 0);
  });
  if (m.r) {
    await require.e(34).then(require.bind(null, 808));
  }
  const {
    level1: t,
    level2: e
  } = await Promise.all([require.e(0), require.e(1), require.e(2), require.e(3), require.e(14)]).then(require.bind(null, 811));
  await t();
  await e();
})();