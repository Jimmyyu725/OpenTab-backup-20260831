var r = require("./8029.js");
var i = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
};
module.exports = function (e, t) {
  var n;
  var a;
  var o;
  var s;
  var l;
  var c = false;
  t ||= {};
  t.debug;
  try {
    a = r();
    o = document.createRange();
    s = document.getSelection();
    (l = document.createElement("span")).textContent = e;
    l.ariaHidden = "true";
    l.style.all = "unset";
    l.style.position = "fixed";
    l.style.top = 0;
    l.style.clip = "rect(0, 0, 0, 0)";
    l.style.whiteSpace = "pre";
    l.style.webkitUserSelect = "text";
    l.style.MozUserSelect = "text";
    l.style.msUserSelect = "text";
    l.style.userSelect = "text";
    l.addEventListener("copy", function (n) {
      n.stopPropagation();
      if (t.format) {
        n.preventDefault();
        if (n.clipboardData === undefined) {
          window.clipboardData.clearData();
          var r = i[t.format] || i.default;
          window.clipboardData.setData(r, e);
        } else {
          n.clipboardData.clearData();
          n.clipboardData.setData(t.format, e);
        }
      }
      if (t.onCopy) {
        n.preventDefault();
        t.onCopy(n.clipboardData);
      }
    });
    document.body.appendChild(l);
    o.selectNodeContents(l);
    s.addRange(o);
    if (!document.execCommand("copy")) {
      throw new Error("copy command was unsuccessful");
    }
    c = true;
  } catch (r) {
    try {
      window.clipboardData.setData(t.format || "text", e);
      if (t.onCopy) {
        t.onCopy(window.clipboardData);
      }
      c = true;
    } catch (r) {
      n = function (e) {
        var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        return e.replace(/#{\s*key\s*}/g, t);
      }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter");
      window.prompt(n, e);
    }
  } finally {
    if (s) {
      if (typeof s.removeRange == "function") {
        s.removeRange(o);
      } else {
        s.removeAllRanges();
      }
    }
    if (l) {
      document.body.removeChild(l);
    }
    a();
  }
  return c;
};