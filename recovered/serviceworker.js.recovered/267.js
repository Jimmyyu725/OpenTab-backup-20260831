var r = require("./11.js")("iterator");
var o = false;
try {
  var i = 0;
  var s = {
    next: function () {
      return {
        done: !!i++
      };
    },
    return: function () {
      o = true;
    }
  };
  s[r] = function () {
    return this;
  };
  Array.from(s, function () {
    throw 2;
  });
} catch (t) {}
module.exports = function (t, e) {
  if (!e && !o) {
    return false;
  }
  var n = false;
  try {
    var i = {
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
    t(i);
  } catch (t) {}
  return n;
};