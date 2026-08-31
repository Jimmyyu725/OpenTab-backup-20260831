var r = require("./8.js")("iterator");
var i = false;
try {
  var o = 0;
  var a = {
    next: function () {
      return {
        done: !!o++
      };
    },
    return: function () {
      i = true;
    }
  };
  a[r] = function () {
    return this;
  };
  Array.from(a, function () {
    throw 2;
  });
} catch (t) {}
module.exports = function (t, e) {
  if (!e && !i) {
    return false;
  }
  var n = false;
  try {
    var o = {
      [r]: function () {
        return {
          next: function () {
            return {
              done: n = true
            };
          }
        };
      }
    };
    t(o);
  } catch (t) {}
  return n;
};