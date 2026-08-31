var r = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = t.length;
  var n = new t.constructor(e);
  if (e && typeof t[0] == "string" && r.call(t, "index")) {
    n.index = t.index;
    n.input = t.input;
  }
  return n;
};