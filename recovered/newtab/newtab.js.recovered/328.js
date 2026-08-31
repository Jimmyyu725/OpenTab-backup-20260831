module.exports = function (t, e) {
  if (e) {
    return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "");
  } else {
    return t;
  }
};