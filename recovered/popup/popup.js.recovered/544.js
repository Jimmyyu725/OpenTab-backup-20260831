var n = /\w*$/;
module.exports = function (t) {
  var e = new t.constructor(t.source, n.exec(t));
  e.lastIndex = t.lastIndex;
  return e;
};