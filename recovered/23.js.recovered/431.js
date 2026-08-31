require(/*webcrack:missing*/"./7.js");
import * as r from /*webcrack:missing*/"./2.js";
import * as o from "./85.js";
import * as i from "./396.js";
class s extends i.a {
  opened(t) {}
}
const a = Object(i.b)(new s());
function c(t, e, n, r) {
  var o;
  var i = arguments.length;
  var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (o = t[a]) {
        s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
      }
    }
  }
  if (i > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
class u {
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
    Object(r.h)(() => this.pluginViews.map(t => t), ([t]) => {
      a.opened(t);
    });
  }
  initDom(t) {
    this.pluginsTags[t] = true;
  }
  async show(t) {
    if (this.pluginViews.includes(t)) {
      return;
    }
    const e = this.pluginsMap[t];
    if (this.pluginsTags[e] === false) {
      try {
        await this.requestPermission(e);
        Object(r.i)(() => {
          this.pluginsTags[e] = true;
          this.pluginViews.push(t);
        });
      } catch (t) {
        console.log("show:", t);
      }
    } else {
      this.pluginViews.push(t);
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
  requestPermission(t) {
    switch (t) {
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
    const t = this.pluginViews.pop();
    if (this.pluginViews.length === 0) {
      document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform", "none");
    }
    return t;
  }
}
c([r.g], u.prototype, "pluginsTags", undefined);
c([r.b], u.prototype, "initDom", null);
c([r.g], u.prototype, "pluginViews", undefined);
c([r.g], u.prototype, "focusRepair", undefined);
c([r.b], u.prototype, "show", null);
c([r.b], u.prototype, "showRepair", null);
c([r.b], u.prototype, "showRepairBadVersion", null);
c([r.b], u.prototype, "blurRepair", null);
c([r.b], u.prototype, "hideLast", null);
export const pluginStore = new u();