var r = /\w*$/;
module.exports = function (t) {
  var e = new t.constructor(t.source, r.exec(t));
  e.lastIndex = t.lastIndex;
  return e;
};