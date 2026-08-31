var e = require("./17.js")("iterator");
var o = false;
try {
  var i = 0;
  var c = {
    next: function () {
      return {
        done: !!i++
      };
    },
    return: function () {
      o = true;
    }
  };
  c[e] = function () {
    return this;
  };
  Array.from(c, function () {
    throw 2;
  });
} catch (t) {}
module.exports = function (t, n) {
  if (!n && !o) {
    return false;
  }
  var r = false;
  try {
    var i = {
      [e]: function () {
        return {
          next: function () {
            return {
              done: r = true
            };
          }
        };
      }
    };
    t(i);
  } catch (t) {}
  return r;
};