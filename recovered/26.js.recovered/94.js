var n;
var r;
var o = module.exports = {};
function i() {
  throw new Error("setTimeout has not been defined");
}
function s() {
  throw new Error("clearTimeout has not been defined");
}
function a(t) {
  if (n === setTimeout) {
    return setTimeout(t, 0);
  }
  if ((n === i || !n) && setTimeout) {
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
    n = typeof setTimeout == "function" ? setTimeout : i;
  } catch (t) {
    n = i;
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
o.nextTick = function (t) {
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
o.title = "browser";
o.browser = true;
o.env = {};
o.argv = [];
o.version = "";
o.versions = {};
o.on = g;
o.addListener = g;
o.once = g;
o.off = g;
o.removeListener = g;
o.removeAllListeners = g;
o.emit = g;
o.prependListener = g;
o.prependOnceListener = g;
o.listeners = function (t) {
  return [];
};
o.binding = function (t) {
  throw new Error("process.binding is not supported");
};
o.cwd = function () {
  return "/";
};
o.chdir = function (t) {
  throw new Error("process.chdir is not supported");
};
o.umask = function () {
  return 0;
};