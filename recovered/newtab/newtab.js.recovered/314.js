const r = require("./152.js");
module.exports = (t, e, n = false) => {
  if (t instanceof r) {
    return t;
  }
  try {
    return new r(t, e);
  } catch (t) {
    if (!n) {
      return null;
    }
    throw t;
  }
};