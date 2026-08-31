var n = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = t.length;
  var r = new t.constructor(e);
  if (e && typeof t[0] == "string" && n.call(t, "index")) {
    r.index = t.index;
    r.input = t.input;
  }
  return r;
};