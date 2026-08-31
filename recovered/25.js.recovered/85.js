var r = require("./5.js");
var o = r;
var i = require("./0.js");
const s = {};
export const a = new class {
  constructor() {
    this.request = (t, e) => {
      if ((i.n || i.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
        t.splice(t.findIndex(t => t === "favicon"), 1);
      }
      return new o((n, r) => {
        if (i.s) {
          r();
          return;
        }
        let o = "";
        if (i.n) {
          o = t.join(",") + (e == null ? undefined : e.join(","));
          if (s[o]) {
            r(new Error("repeat"));
            return;
          }
          s[o] = true;
        }
        chrome.permissions.request({
          permissions: t,
          origins: e
        }, t => {
          if (i.n && s[o]) {
            delete s[o];
          }
          if (chrome.runtime.lastError) {
            r(chrome.runtime.lastError);
          } else if (t) {
            n(true);
          } else {
            r(new Error("REJECT"));
          }
        });
      });
    };
    this.has = (t, e) => {
      if ((i.n || i.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
        t.splice(t.findIndex(t => t === "favicon"), 1);
      }
      return new o(n => {
        if (i.s) {
          n(false);
        } else {
          chrome.permissions.contains({
            permissions: t,
            origins: e
          }, t => {
            n(t);
          });
        }
      });
    };
  }
}();