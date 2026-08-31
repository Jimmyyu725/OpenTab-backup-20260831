var r = require("./510.js");
module.exports = function (t, e) {
  var n = t.__data__;
  if (r(e)) {
    return n[typeof e == "string" ? "string" : "hash"];
  } else {
    return n.map;
  }
};