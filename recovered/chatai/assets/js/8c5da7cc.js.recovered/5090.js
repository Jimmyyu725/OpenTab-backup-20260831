const n = require("./3779.js");
function o(e) {
  const t = function () {
    const e = {};
    const t = Object.keys(n);
    for (let r = t.length, n = 0; n < r; n++) {
      e[t[n]] = {
        distance: -1,
        parent: null
      };
    }
    return e;
  }();
  const r = [e];
  for (t[e].distance = 0; r.length;) {
    const e = r.pop();
    const o = Object.keys(n[e]);
    for (let n = o.length, a = 0; a < n; a++) {
      const n = o[a];
      const i = t[n];
      if (i.distance === -1) {
        i.distance = t[e].distance + 1;
        i.parent = e;
        r.unshift(n);
      }
    }
  }
  return t;
}
function a(e, t) {
  return function (r) {
    return t(e(r));
  };
}
function i(e, t) {
  const r = [t[e].parent, e];
  let o = n[t[e].parent][e];
  let i = t[e].parent;
  while (t[i].parent) {
    r.unshift(t[i].parent);
    o = a(n[t[i].parent][i], o);
    i = t[i].parent;
  }
  o.conversion = r;
  return o;
}
module.exports = function (e) {
  const t = o(e);
  const r = {};
  const n = Object.keys(t);
  for (let e = n.length, o = 0; o < e; o++) {
    const e = n[o];
    if (t[e].parent !== null) {
      r[e] = i(e, t);
    }
  }
  return r;
};