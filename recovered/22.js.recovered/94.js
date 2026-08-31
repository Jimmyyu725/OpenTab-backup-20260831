var n;
var r;
var i = module.exports = {};
function o() {
  throw new Error("setTimeout has not been defined");
}
function s() {
  throw new Error("clearTimeout has not been defined");
}
function a(t) {
  if (n === setTimeout) {
    return setTimeout(t, 0);
  }
  if ((n === o || !n) && setTimeout) {
    n = setTimeout;
    return setTimeout(t, 0);
  }
  try {
    return n(t, 0);
  } catch (e) {
    try {
      return n.call(null, t, 0);
    } catch (e) {
      return n.call(this, t, 0);
    }
  }
}
(function () {
  try {
    n = typeof setTimeout == "function" ? setTimeout : o;
  } catch (t) {
    n = o;
  }
  try {
    r = typeof clearTimeout == "function" ? clearTimeout : s;
  } catch (t) {
    r = s;
  }
})();
var c;
var u = [];
var l = false;
var h = -1;
function p() {
  if (l && c) {
    l = false;
    if (c.length) {
      u = c.concat(u);
    } else {
      h = -1;
    }
    if (u.length) {
      f();
    }
  }
}
function f() {
  if (!l) {
    var t = a(p);
    l = true;
    for (var e = u.length; e;) {
      c = u;
      u = [];
      while (++h < e) {
        if (c) {
          c[h].run();
        }
      }
      h = -1;
      e = u.length;
    }
    c = null;
    l = false;
    (function (t) {
      if (r === clearTimeout) {
        return clearTimeout(t);
      }
      if ((r === s || !r) && clearTimeout) {
        r = clearTimeout;
        return clearTimeout(t);
      }
      try {
        r(t);
      } catch (e) {
        try {
          return r.call(null, t);
        } catch (e) {
          return r.call(this, t);
        }
      }
    })(t);
  }
}
function d(t, e) {
  this.fun = t;
  this.array = e;
}
function g() {}
i.nextTick = function (t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
  }
  u.push(new d(t, e));
  if (u.length === 1 && !l) {
    a(f);
  }
};
d.prototype.run = function () {
  this.fun.apply(null, this.array);
};
i.title = "browser";
i.browser = true;
i.env = {};
i.argv = [];
i.version = "";
i.versions = {};
i.on = g;
i.addListener = g;
i.once = g;
i.off = g;
i.removeListener = g;
i.removeAllListeners = g;
i.emit = g;
i.prependListener = g;
i.prependOnceListener = g;
i.listeners = function (t) {
  return [];
};
i.binding = function (t) {
  throw new Error("process.binding is not supported");
};
i.cwd = function () {
  return "/";
};
i.chdir = function (t) {
  throw new Error("process.chdir is not supported");
};
i.umask = function () {
  return 0;
};