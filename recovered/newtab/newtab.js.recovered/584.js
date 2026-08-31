const r = require("./211.js");
module.exports = (t, e) => {
  try {
    return new r(t, e).range || "*";
  } catch (t) {
    return null;
  }
};