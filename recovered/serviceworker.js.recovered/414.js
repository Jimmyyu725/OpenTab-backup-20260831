module.exports = function (t) {
  var e = typeof t;
  if (e == "string" || e == "number" || e == "symbol" || e == "boolean") {
    return t !== "__proto__";
  } else {
    return t === null;
  }
};