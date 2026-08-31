var r = require("./76.js");
module.exports = function (t, e) {
  var n = this.__data__;
  var o = r(n, t);
  if (o < 0) {
    ++this.size;
    n.push([t, e]);
  } else {
    n[o][1] = e;
  }
  return this;
};