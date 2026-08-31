var r = require("./220.js");
var o = Object.prototype;
var i = o.hasOwnProperty;
var s = o.toString;
var a = r ? r.toStringTag : undefined;
module.exports = function (t) {
  var e = i.call(t, a);
  var n = t[a];
  try {
    t[a] = undefined;
    var r = true;
  } catch (t) {}
  var o = s.call(t);
  if (r) {
    if (e) {
      t[a] = n;
    } else {
      delete t[a];
    }
  }
  return o;
};