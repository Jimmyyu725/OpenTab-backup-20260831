const r = require("./462.js");
const i = require("./463.js");
const o = require("./392.js");
const a = require("./426.js");
const s = require("./425.js");
const c = require("./427.js");
module.exports = (t, e, n, u) => {
  switch (e) {
    case "===":
      if (typeof t == "object") {
        t = t.version;
      }
      if (typeof n == "object") {
        n = n.version;
      }
      return t === n;
    case "!==":
      if (typeof t == "object") {
        t = t.version;
      }
      if (typeof n == "object") {
        n = n.version;
      }
      return t !== n;
    case "":
    case "=":
    case "==":
      return r(t, n, u);
    case "!=":
      return i(t, n, u);
    case ">":
      return o(t, n, u);
    case ">=":
      return a(t, n, u);
    case "<":
      return s(t, n, u);
    case "<=":
      return c(t, n, u);
    default:
      throw new TypeError("Invalid operator: " + e);
  }
};