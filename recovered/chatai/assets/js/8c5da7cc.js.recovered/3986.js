var n = require("./3056.js");
export var z = {
  setTimeout: function (e, t) {
    var r = [];
    for (var a = 2; a < arguments.length; a++) {
      r[a - 2] = arguments[a];
    }
    var i = z.delegate;
    if (i == null ? undefined : i.setTimeout) {
      return i.setTimeout.apply(i, (0, n.ev)([e, t], (0, n.CR)(r)));
    } else {
      return setTimeout.apply(undefined, (0, n.ev)([e, t], (0, n.CR)(r)));
    }
  },
  clearTimeout: function (e) {
    var t = z.delegate;
    return ((t == null ? undefined : t.clearTimeout) || clearTimeout)(e);
  },
  delegate: undefined
};