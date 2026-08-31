var n;
var r;
var i = module.exports = {};
function o() {
  throw new Error("setTimeout has not been defined");
}
function a() {
  throw new Error("clearTimeout has not been defined");
}
function s(t) {
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
    r = typeof clearTimeout == "function" ? clearTimeout : a;
  } catch (t) {
    r = a;
  }
})();
var c;
var u = [];
var l = false;
var f = -1;
function h() {
  if (l && c) {
    l = false;
    if (c.length) {
      u = c.concat(u);
    } else {
      f = -1;
    }
    if (u.length) {
      p();
    }
  }
}
function p() {
  if (!l) {
    var t = s(h);
    l = true;
    for (var e = u.length; e;) {
      c = u;
      u = [];
      while (++f < e) {
        if (c) {
          c[f].run();
        }
      }
      f = -1;
      e = u.length;
    }
    c = null;
    l = false;
    (function (t) {
      if (r === clearTimeout) {
        return clearTimeout(t);
      }
      if ((r === a || !r) && clearTimeout) {
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
function m() {}
i.nextTick = function (t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
  }
  u.push(new d(t, e));
  if (u.length === 1 && !l) {
    s(p);
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
i.on = m;
i.addListener = m;
i.once = m;
i.off = m;
i.removeListener = m;
i.removeAllListeners = m;
i.emit = m;
i.prependListener = m;
i.prependOnceListener = m;
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