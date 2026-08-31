var r = require("./386.js");
module.exports = function (t, e) {
  var n = this.__data__;
  var i = r(n, t);
  if (i < 0) {
    ++this.size;
    n.push([t, e]);
  } else {
    n[i][1] = e;
  }
  return this;
};