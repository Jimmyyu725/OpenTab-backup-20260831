var r = require("./5.js");
var i = r;
var o = require("./0.js");
const _a = {};
export const a = new class {
  constructor() {
    this.request = (t, e) => {
      if ((o.n || o.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
        t.splice(t.findIndex(t => t === "favicon"), 1);
      }
      return new i((n, r) => {
        if (o.s) {
          r();
          return;
        }
        let i = "";
        if (o.n) {
          i = t.join(",") + (e == null ? undefined : e.join(","));
          if (_a[i]) {
            r(new Error("repeat"));
            return;
          }
          _a[i] = true;
        }
        chrome.permissions.request({
          permissions: t,
          origins: e
        }, t => {
          if (o.n && _a[i]) {
            delete _a[i];
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
      if ((o.n || o.h) && t.includes("favicon") && (t = Array.from(new Set(t))).length > 1) {
        t.splice(t.findIndex(t => t === "favicon"), 1);
      }
      return new i(n => {
        if (o.s) {
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