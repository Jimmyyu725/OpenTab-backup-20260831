var r = require("./480.js");
var o = require("./209.js");
module.exports = function (t, e, n) {
  var i = true;
  var s = true;
  if (typeof t != "function") {
    throw new TypeError("Expected a function");
  }
  if (o(n)) {
    i = "leading" in n ? !!n.leading : i;
    s = "trailing" in n ? !!n.trailing : s;
  }
  return r(t, e, {
    leading: i,
    maxWait: e,
    trailing: s
  });
};