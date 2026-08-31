var n;
var r;
var o = module.exports = {};
function i() {
  throw new Error("setTimeout has not been defined");
}
function a() {
  throw new Error("clearTimeout has not been defined");
}
function u(e) {
  if (n === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((n === i || !n) && setTimeout) {
    n = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return n(e, 0);
  } catch (t) {
    try {
      return n.call(null, e, 0);
    } catch (t) {
      return n.call(this, e, 0);
    }
  }
}
(function () {
  try {
    n = typeof setTimeout == "function" ? setTimeout : i;
  } catch (e) {
    n = i;
  }
  try {
    r = typeof clearTimeout == "function" ? clearTimeout : a;
  } catch (e) {
    r = a;
  }
})();
var c;
var s = [];
var f = false;
var l = -1;
function d() {
  if (f && c) {
    f = false;
    if (c.length) {
      s = c.concat(s);
    } else {
      l = -1;
    }
    if (s.length) {
      h();
    }
  }
}
function h() {
  if (!f) {
    var e = u(d);
    f = true;
    for (var t = s.length; t;) {
      c = s;
      s = [];
      while (++l < t) {
        if (c) {
          c[l].run();
        }
      }
      l = -1;
      t = s.length;
    }
    c = null;
    f = false;
    (function (e) {
      if (r === clearTimeout) {
        return clearTimeout(e);
      }
      if ((r === a || !r) && clearTimeout) {
        r = clearTimeout;
        return clearTimeout(e);
      }
      try {
        r(e);
      } catch (t) {
        try {
          return r.call(null, e);
        } catch (t) {
          return r.call(this, e);
        }
      }
    })(e);
  }
}
function p(e, t) {
  this.fun = e;
  this.array = t;
}
function v() {}
o.nextTick = function (e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
  }
  s.push(new p(e, t));
  if (s.length === 1 && !f) {
    u(h);
  }
};
p.prototype.run = function () {
  this.fun.apply(null, this.array);
};
o.title = "browser";
o.browser = true;
o.env = {};
o.argv = [];
o.version = "";
o.versions = {};
o.on = v;
o.addListener = v;
o.once = v;
o.off = v;
o.removeListener = v;
o.removeAllListeners = v;
o.emit = v;
o.prependListener = v;
o.prependOnceListener = v;
o.listeners = function (e) {
  return [];
};
o.binding = function (e) {
  throw new Error("process.binding is not supported");
};
o.cwd = function () {
  return "/";
};
o.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
o.umask = function () {
  return 0;
};