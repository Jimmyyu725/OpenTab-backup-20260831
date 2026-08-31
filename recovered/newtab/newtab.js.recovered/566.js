const r = require("./152.js");
module.exports = (t, e, n, i, o) => {
  if (typeof n == "string") {
    o = i;
    i = n;
    n = undefined;
  }
  try {
    return new r(t instanceof r ? t.version : t, n).inc(e, i, o).version;
  } catch (t) {
    return null;
  }
};