function n(e, t) {
  var n;
  var r;
  var i = e.posMax;
  var a = true;
  var o = true;
  n = t > 0 ? e.src.charCodeAt(t - 1) : -1;
  r = t + 1 <= i ? e.src.charCodeAt(t + 1) : -1;
  if (n === 32 || n === 9 || r >= 48 && r <= 57) {
    o = false;
  }
  if (r === 32 || r === 9) {
    a = false;
  }
  return {
    can_open: a,
    can_close: o
  };
}
function r(e, t) {
  var r;
  var i;
  var a;
  var o;
  if (e.src[e.pos] !== "$") {
    return false;
  }
  if (!n(e, e.pos).can_open) {
    if (!t) {
      e.pending += "$";
    }
    e.pos += 1;
    return true;
  }
  for (i = r = e.pos + 1; (i = e.src.indexOf("$", i)) !== -1;) {
    for (o = i - 1; e.src[o] === "\\";) {
      o -= 1;
    }
    if ((i - o) % 2 == 1) {
      break;
    }
    i += 1;
  }
  if (i === -1) {
    if (!t) {
      e.pending += "$";
    }
    e.pos = r;
    return true;
  } else if (i - r == 0) {
    if (!t) {
      e.pending += "$$";
    }
    e.pos = r + 1;
    return true;
  } else if (n(e, i).can_close) {
    if (!t) {
      (a = e.push("math_inline", "math", 0)).markup = "$";
      a.content = e.src.slice(r, i);
    }
    e.pos = i + 1;
    return true;
  } else {
    if (!t) {
      e.pending += "$";
    }
    e.pos = r;
    return true;
  }
}
function i(e, t, n, r) {
  var i;
  var a;
  var o;
  var s;
  var l;
  var c = false;
  var u = e.bMarks[t] + e.tShift[t];
  var p = e.eMarks[t];
  if (u + 2 > p) {
    return false;
  }
  if (e.src.slice(u, u + 2) !== "$$") {
    return false;
  }
  u += 2;
  i = e.src.slice(u, p);
  if (r) {
    return true;
  }
  if (i.trim().slice(-2) === "$$") {
    i = i.trim().slice(0, -2);
    c = true;
  }
  o = t;
  while (!c && !(++o >= n) && (!((u = e.bMarks[o] + e.tShift[o]) < (p = e.eMarks[o])) || !(e.tShift[o] < e.blkIndent))) {
    if (e.src.slice(u, p).trim().slice(-2) === "$$") {
      s = e.src.slice(0, p).lastIndexOf("$$");
      a = e.src.slice(u, s);
      c = true;
    }
  }
  e.line = o + 1;
  (l = e.push("math_block", "math", 0)).block = true;
  l.content = (i && i.trim() ? i + "\n" : "") + e.getLines(t + 1, o, e.tShift[t], true) + (a && a.trim() ? a : "");
  l.map = [t, e.line];
  l.markup = "$$";
  return true;
}
exports.__esModule = true;
exports.default = function (e, t) {
  var n = (t = t || {}).katex;
  e.inline.ruler.after("escape", "math_inline", r);
  e.block.ruler.after("blockquote", "math_block", i, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  });
  e.renderer.rules.math_inline = function (e, r) {
    return function (e) {
      t.displayMode = false;
      try {
        return n.renderToString(e, t);
      } catch (n) {
        t.throwOnError;
        return e;
      }
    }(e[r].content);
  };
  e.renderer.rules.math_block = function (e, r) {
    return function (e) {
      t.displayMode = true;
      try {
        return "<p>" + n.renderToString(e, t) + "</p>";
      } catch (n) {
        t.throwOnError;
        return e;
      }
    }(e[r].content) + "\n";
  };
};