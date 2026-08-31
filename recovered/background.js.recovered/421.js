var n = /\s/;
module.exports = function (t) {
  for (var e = t.length; e-- && n.test(t.charAt(e)););
  return e;
};