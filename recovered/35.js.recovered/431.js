require(/*webcrack:missing*/"./7.js");
import * as t from /*webcrack:missing*/"./2.js";
import * as o from /*webcrack:missing*/"./85.js";
import * as n from "./396.js";
class r extends n.a {
  opened(e) {}
}
const a = Object(n.b)(new r());
function p(e, i, s, t) {
  var o;
  var n = arguments.length;
  var r = n < 3 ? i : t === null ? t = Object.getOwnPropertyDescriptor(i, s) : t;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    r = Reflect.decorate(e, i, s, t);
  } else {
    for (var a = e.length - 1; a >= 0; a--) {
      if (o = e[a]) {
        r = (n < 3 ? o(r) : n > 3 ? o(i, s, r) : o(i, s)) || r;
      }
    }
  }
  if (n > 3 && r) {
    Object.defineProperty(i, s, r);
  }
  return r;
}
class c {
  constructor() {
    this.pluginsMap = {
      "infinity://weather": "side-weather",
      "infinity://todos": "side-todos",
      "infinity://notes": "side-notes",
      "infinity://history": "side-history",
      "infinity://bookmarks": "side-bookmarks",
      "infinity://extension": "side-extension",
      "infinity://chrome-apps": "chrome-apps",
      "infinity://wallpaper": "wallpaper",
      "infinity://settings": "side-profile",
      search: "side-search",
      profile: "side-profile",
      editIcon: "side-editicon",
      "side-tutorial": "side-tutorial",
      "infinity://chatai": "chatai"
    };
    this.pluginsTags = {
      "side-weather": false,
      "side-todos": false,
      "side-notes": false,
      "side-history": false,
      "side-bookmarks": false,
      "side-extension": false,
      "chrome-apps": false,
      "side-profile": false,
      "side-search": false,
      "side-editicon": false,
      "side-tutorial": false,
      wallpaper: false,
      chatai: false
    };
    this.pluginViews = [];
    this.focusRepair = false;
    Object(t.h)(() => this.pluginViews.map(e => e), ([e]) => {
      a.opened(e);
    });
  }
  initDom(e) {
    this.pluginsTags[e] = true;
  }
  async show(e) {
    if (this.pluginViews.includes(e)) {
      return;
    }
    const i = this.pluginsMap[e];
    if (this.pluginsTags[i] === false) {
      try {
        await this.requestPermission(i);
        Object(t.i)(() => {
          this.pluginsTags[i] = true;
          this.pluginViews.push(e);
        });
      } catch (e) {
        console.log("show:", e);
      }
    } else {
      this.pluginViews.push(e);
    }
  }
  async showRepair() {
    this.focusRepair = true;
    this.show("profile");
  }
  async showRepairBadVersion() {
    this.focusRepair = true;
    this.show("profile");
  }
  blurRepair() {
    this.focusRepair = false;
  }
  requestPermission(e) {
    switch (e) {
      case "side-bookmarks":
        return o.a.request(["bookmarks", "favicon"]);
      case "side-extension":
      case "chrome-apps":
        return o.a.request(["management"]);
      case "side-history":
        return o.a.request(["history", "favicon"]);
    }
  }
  hideLast() {
    const e = this.pluginViews.pop();
    if (this.pluginViews.length === 0) {
      document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform", "none");
    }
    return e;
  }
}
p([t.g], c.prototype, "pluginsTags", undefined);
p([t.b], c.prototype, "initDom", null);
p([t.g], c.prototype, "pluginViews", undefined);
p([t.g], c.prototype, "focusRepair", undefined);
p([t.b], c.prototype, "show", null);
p([t.b], c.prototype, "showRepair", null);
p([t.b], c.prototype, "showRepairBadVersion", null);
p([t.b], c.prototype, "blurRepair", null);
p([t.b], c.prototype, "hideLast", null);
export const pluginStore = new c();