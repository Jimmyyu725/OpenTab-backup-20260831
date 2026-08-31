module.exports = function (e, t) {
  if (t) {
    return e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "");
  } else {
    return e;
  }
};