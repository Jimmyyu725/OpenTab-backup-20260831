var n = require("./1510.js");
var o = require("./931.js");
var a = Object.hasOwnProperty;
var i = {};
for (var c in n) {
  if (a.call(n, c)) {
    i[n[c]] = c;
  }
}
var s = module.exports = {
  to: {},
  get: {}
};
function l(e, t, r) {
  return Math.min(Math.max(t, e), r);
}
function u(e) {
  var t = Math.round(e).toString(16).toUpperCase();
  if (t.length < 2) {
    return "0" + t;
  } else {
    return t;
  }
}
s.get = function (e) {
  var t;
  var r;
  switch (e.substring(0, 3).toLowerCase()) {
    case "hsl":
      t = s.get.hsl(e);
      r = "hsl";
      break;
    case "hwb":
      t = s.get.hwb(e);
      r = "hwb";
      break;
    default:
      t = s.get.rgb(e);
      r = "rgb";
  }
  if (t) {
    return {
      model: r,
      value: t
    };
  } else {
    return null;
  }
};
s.get.rgb = function (e) {
  if (!e) {
    return null;
  }
  var t;
  var r;
  var o;
  var i = [0, 0, 0, 1];
  if (t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
    o = t[2];
    t = t[1];
    r = 0;
    for (; r < 3; r++) {
      var c = r * 2;
      i[r] = parseInt(t.slice(c, c + 2), 16);
    }
    if (o) {
      i[3] = parseInt(o, 16) / 255;
    }
  } else if (t = e.match(/^#([a-f0-9]{3,4})$/i)) {
    o = (t = t[1])[3];
    r = 0;
    for (; r < 3; r++) {
      i[r] = parseInt(t[r] + t[r], 16);
    }
    if (o) {
      i[3] = parseInt(o + o, 16) / 255;
    }
  } else if (t = e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
    for (r = 0; r < 3; r++) {
      i[r] = parseInt(t[r + 1], 0);
    }
    if (t[4]) {
      if (t[5]) {
        i[3] = parseFloat(t[4]) * 0.01;
      } else {
        i[3] = parseFloat(t[4]);
      }
    }
  } else {
    if (!(t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) {
      if (t = e.match(/^(\w+)$/)) {
        if (t[1] === "transparent") {
          return [0, 0, 0, 0];
        } else if (a.call(n, t[1])) {
          (i = n[t[1]])[3] = 1;
          return i;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    for (r = 0; r < 3; r++) {
      i[r] = Math.round(parseFloat(t[r + 1]) * 2.55);
    }
    if (t[4]) {
      if (t[5]) {
        i[3] = parseFloat(t[4]) * 0.01;
      } else {
        i[3] = parseFloat(t[4]);
      }
    }
  }
  for (r = 0; r < 3; r++) {
    i[r] = l(i[r], 0, 255);
  }
  i[3] = l(i[3], 0, 1);
  return i;
};
s.get.hsl = function (e) {
  if (!e) {
    return null;
  }
  var t = e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
  if (t) {
    var r = parseFloat(t[4]);
    return [(parseFloat(t[1]) % 360 + 360) % 360, l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(r) ? 1 : r, 0, 1)];
  }
  return null;
};
s.get.hwb = function (e) {
  if (!e) {
    return null;
  }
  var t = e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
  if (t) {
    var r = parseFloat(t[4]);
    return [(parseFloat(t[1]) % 360 + 360) % 360, l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(r) ? 1 : r, 0, 1)];
  }
  return null;
};
s.to.hex = function () {
  var e = o(arguments);
  return "#" + u(e[0]) + u(e[1]) + u(e[2]) + (e[3] < 1 ? u(Math.round(e[3] * 255)) : "");
};
s.to.rgb = function () {
  var e = o(arguments);
  if (e.length < 4 || e[3] === 1) {
    return "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")";
  } else {
    return "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")";
  }
};
s.to.rgb.percent = function () {
  var e = o(arguments);
  var t = Math.round(e[0] / 255 * 100);
  var r = Math.round(e[1] / 255 * 100);
  var n = Math.round(e[2] / 255 * 100);
  if (e.length < 4 || e[3] === 1) {
    return "rgb(" + t + "%, " + r + "%, " + n + "%)";
  } else {
    return "rgba(" + t + "%, " + r + "%, " + n + "%, " + e[3] + ")";
  }
};
s.to.hsl = function () {
  var e = o(arguments);
  if (e.length < 4 || e[3] === 1) {
    return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
  } else {
    return "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
  }
};
s.to.hwb = function () {
  var e = o(arguments);
  var t = "";
  if (e.length >= 4 && e[3] !== 1) {
    t = ", " + e[3];
  }
  return "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")";
};
s.to.keyword = function (e) {
  return i[e.slice(0, 3)];
};