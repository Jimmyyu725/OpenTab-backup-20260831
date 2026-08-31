function n(e, t) {
  n = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var r in t) {
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        e[r] = t[r];
      }
    }
  };
  return n(e, t);
}
export function ZT(e, t) {
  if (typeof t != "function" && t !== null) {
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  }
  function r() {
    this.constructor = e;
  }
  n(e, t);
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
export function pi() {
  pi = Object.assign || function (e) {
    var t;
    for (var r = 1, n = arguments.length; r < n; r++) {
      for (var o in t = arguments[r]) {
        if (Object.prototype.hasOwnProperty.call(t, o)) {
          e[o] = t[o];
        }
      }
    }
    return e;
  };
  return pi.apply(this, arguments);
}
export function _T(e, t) {
  var r = {};
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
      r[n] = e[n];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) {
      if (t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o])) {
        r[n[o]] = e[n[o]];
      }
    }
  }
  return r;
}
export function mG(e, t, r, n) {
  return new (r ||= Promise)(function (o, a) {
    function i(e) {
      try {
        s(n.next(e));
      } catch (e) {
        a(e);
      }
    }
    function c(e) {
      try {
        s(n.throw(e));
      } catch (e) {
        a(e);
      }
    }
    function s(e) {
      var t;
      if (e.done) {
        o(e.value);
      } else {
        (t = e.value, t instanceof r ? t : new r(function (e) {
          e(t);
        })).then(i, c);
      }
    }
    s((n = n.apply(e, t || [])).next());
  });
}
export function Jh(e, t) {
  var r;
  var n;
  var o;
  var a;
  var i = {
    label: 0,
    sent: function () {
      if (o[0] & 1) {
        throw o[1];
      }
      return o[1];
    },
    trys: [],
    ops: []
  };
  a = {
    next: c(0),
    throw: c(1),
    return: c(2)
  };
  if (typeof Symbol == "function") {
    a[Symbol.iterator] = function () {
      return this;
    };
  }
  return a;
  function c(a) {
    return function (c) {
      return function (a) {
        if (r) {
          throw new TypeError("Generator is already executing.");
        }
        while (i) {
          try {
            r = 1;
            if (n && (o = a[0] & 2 ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) {
              return o;
            }
            n = 0;
            if (o) {
              a = [a[0] & 2, o.value];
            }
            switch (a[0]) {
              case 0:
              case 1:
                o = a;
                break;
              case 4:
                i.label++;
                return {
                  value: a[1],
                  done: false
                };
              case 5:
                i.label++;
                n = a[1];
                a = [0];
                continue;
              case 7:
                a = i.ops.pop();
                i.trys.pop();
                continue;
              default:
                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || a[0] !== 6 && a[0] !== 2)) {
                  i = 0;
                  continue;
                }
                if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                  i.label = a[1];
                  break;
                }
                if (a[0] === 6 && i.label < o[1]) {
                  i.label = o[1];
                  o = a;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2];
                  i.ops.push(a);
                  break;
                }
                if (o[2]) {
                  i.ops.pop();
                }
                i.trys.pop();
                continue;
            }
            a = t.call(e, i);
          } catch (e) {
            a = [6, e];
            n = 0;
          } finally {
            r = o = 0;
          }
        }
        if (a[0] & 5) {
          throw a[1];
        }
        return {
          value: a[0] ? a[1] : undefined,
          done: true
        };
      }([a, c]);
    };
  }
}
Object.create;
export function XA(e) {
  var t = typeof Symbol == "function" && Symbol.iterator;
  var r = t && e[t];
  var n = 0;
  if (r) {
    return r.call(e);
  }
  if (e && typeof e.length == "number") {
    return {
      next: function () {
        if (e && n >= e.length) {
          e = undefined;
        }
        return {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
export function CR(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) {
    return e;
  }
  var n;
  var o;
  var a = r.call(e);
  var i = [];
  try {
    while ((t === undefined || t-- > 0) && !(n = a.next()).done) {
      i.push(n.value);
    }
  } catch (e) {
    o = {
      error: e
    };
  } finally {
    try {
      if (n && !n.done && (r = a.return)) {
        r.call(a);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return i;
}
export function ev(e, t, r) {
  if (r || arguments.length === 2) {
    var n;
    for (var o = 0, a = t.length; o < a; o++) {
      if (!!n || !(o in t)) {
        n ||= Array.prototype.slice.call(t, 0, o);
        n[o] = t[o];
      }
    }
  }
  return e.concat(n || Array.prototype.slice.call(t));
}
export function qq(e) {
  if (this instanceof qq) {
    this.v = e;
    return this;
  } else {
    return new qq(e);
  }
}
export function FC(e, t, r) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var n;
  var o = r.apply(e, t || []);
  var a = [];
  n = {};
  i("next");
  i("throw");
  i("return");
  n[Symbol.asyncIterator] = function () {
    return this;
  };
  return n;
  function i(e) {
    if (o[e]) {
      n[e] = function (t) {
        return new Promise(function (r, n) {
          if (!(a.push([e, t, r, n]) > 1)) {
            c(e, t);
          }
        });
      };
    }
  }
  function c(e, t) {
    try {
      if ((r = o[e](t)).value instanceof qq) {
        Promise.resolve(r.value.v).then(s, l);
      } else {
        u(a[0][2], r);
      }
    } catch (e) {
      u(a[0][3], e);
    }
    var r;
  }
  function s(e) {
    c("next", e);
  }
  function l(e) {
    c("throw", e);
  }
  function u(e, t) {
    e(t);
    a.shift();
    if (a.length) {
      c(a[0][0], a[0][1]);
    }
  }
}
export function KL(e) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var t;
  var r = e[Symbol.asyncIterator];
  if (r) {
    return r.call(e);
  } else {
    e = XA(e);
    t = {};
    n("next");
    n("throw");
    n("return");
    t[Symbol.asyncIterator] = function () {
      return this;
    };
    return t;
  }
  function n(r) {
    t[r] = e[r] && function (t) {
      return new Promise(function (n, o) {
        (function (e, t, r, n) {
          Promise.resolve(n).then(function (t) {
            e({
              value: t,
              done: r
            });
          }, t);
        })(n, o, (t = e[r](t)).done, t.value);
      });
    };
  }
}
Object.create;