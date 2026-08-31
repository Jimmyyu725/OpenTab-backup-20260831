require(/*webcrack:missing*/"./7.js");
import * as o from /*webcrack:missing*/"./2.js";
import * as s from /*webcrack:missing*/"./85.js";
import * as n from "./396.js";
class r extends n.a {
  opened(e) {}
}
const a = Object(n.b)(new r());
function c(e, t, i, o) {
  var s;
  var n = arguments.length;
  var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    r = Reflect.decorate(e, t, i, o);
  } else {
    for (var a = e.length - 1; a >= 0; a--) {
      if (s = e[a]) {
        r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
      }
    }
  }
  if (n > 3 && r) {
    Object.defineProperty(t, i, r);
  }
  return r;
}
class l {
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
    Object(o.h)(() => this.pluginViews.map(e => e), ([e]) => {
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
    const t = this.pluginsMap[e];
    if (this.pluginsTags[t] === false) {
      try {
        await this.requestPermission(t);
        Object(o.i)(() => {
          this.pluginsTags[t] = true;
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
        return s.a.request(["bookmarks", "favicon"]);
      case "side-extension":
      case "chrome-apps":
        return s.a.request(["management"]);
      case "side-history":
        return s.a.request(["history", "favicon"]);
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
c([o.g], l.prototype, "pluginsTags", undefined);
c([o.b], l.prototype, "initDom", null);
c([o.g], l.prototype, "pluginViews", undefined);
c([o.g], l.prototype, "focusRepair", undefined);
c([o.b], l.prototype, "show", null);
c([o.b], l.prototype, "showRepair", null);
c([o.b], l.prototype, "showRepairBadVersion", null);
c([o.b], l.prototype, "blurRepair", null);
c([o.b], l.prototype, "hideLast", null);
export const pluginStore = new l();