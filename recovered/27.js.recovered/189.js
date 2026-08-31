var e = require("./45.js");
module.exports = function (t, n) {
  if (!e(t)) {
    return t;
  }
  var r;
  var o;
  if (n && typeof (r = t.toString) == "function" && !e(o = r.call(t))) {
    return o;
  }
  if (typeof (r = t.valueOf) == "function" && !e(o = r.call(t))) {
    return o;
  }
  if (!n && typeof (r = t.toString) == "function" && !e(o = r.call(t))) {
    return o;
  }
  throw TypeError("Can't convert object to primitive value");
};