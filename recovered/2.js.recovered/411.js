var r = Object.prototype;
module.exports = function (t) {
  var e = t && t.constructor;
  return t === (typeof e == "function" && e.prototype || r);
};