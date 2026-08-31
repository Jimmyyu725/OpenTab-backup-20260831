function n(e) {
  var t = e.getBoundingClientRect();
  return {
    width: t.width,
    height: t.height,
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    left: t.left,
    x: t.left,
    y: t.top
  };
}
function o(e) {
  if (e == null) {
    return window;
  }
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function a(e) {
  var t = o(e);
  return {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function i(e) {
  return e instanceof o(e).Element || e instanceof Element;
}
function c(e) {
  return e instanceof o(e).HTMLElement || e instanceof HTMLElement;
}
function s(e) {
  if (e) {
    return (e.nodeName || "").toLowerCase();
  } else {
    return null;
  }
}
function l(e) {
  return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function u(e) {
  return o(e).getComputedStyle(e);
}
function _f(e) {
  var t = u(e);
  var r = t.overflow;
  var n = t.overflowX;
  var o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function d(e, t, r = false) {
  var i;
  var u;
  var d = l(t);
  var h = n(e);
  var p = c(t);
  var g = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var y = {
    x: 0,
    y: 0
  };
  if (p || !p && !r) {
    if (s(t) !== "body" || _f(d)) {
      g = (i = t) !== o(i) && c(i) ? {
        scrollLeft: (u = i).scrollLeft,
        scrollTop: u.scrollTop
      } : a(i);
    }
    if (c(t)) {
      (y = n(t)).x += t.clientLeft;
      y.y += t.clientTop;
    } else if (d) {
      y.x = function (e) {
        return n(l(e)).left + a(e).scrollLeft;
      }(d);
    }
  }
  return {
    x: h.left + g.scrollLeft - y.x,
    y: h.top + g.scrollTop - y.y,
    width: h.width,
    height: h.height
  };
}
function h(e) {
  if (s(e) === "html") {
    return e;
  } else {
    return e.assignedSlot || e.parentNode || (t = e, typeof ShadowRoot != "undefined" && (t instanceof o(t).ShadowRoot || t instanceof ShadowRoot) ? e.host : null) || l(e);
  }
  var t;
}
function p(e) {
  if (["html", "body", "#document"].indexOf(s(e)) >= 0) {
    return e.ownerDocument.body;
  } else if (c(e) && _f(e)) {
    return e;
  } else {
    return p(h(e));
  }
}
function g(e, t) {
  var r;
  if (t === undefined) {
    t = [];
  }
  var n = p(e);
  var a = n === ((r = e.ownerDocument) == null ? undefined : r.body);
  var i = o(n);
  var c = a ? [i].concat(i.visualViewport || [], _f(n) ? n : []) : n;
  var s = t.concat(c);
  if (a) {
    return s;
  } else {
    return s.concat(g(h(c)));
  }
}
function y(e) {
  return ["table", "td", "th"].indexOf(s(e)) >= 0;
}
function v(e) {
  if (c(e) && u(e).position !== "fixed") {
    return e.offsetParent;
  } else {
    return null;
  }
}
function b(e) {
  var t = o(e);
  for (var r = v(e); r && y(r) && u(r).position === "static";) {
    r = v(r);
  }
  if (r && (s(r) === "html" || s(r) === "body" && u(r).position === "static")) {
    return t;
  } else {
    return r || function (e) {
      var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
      if (navigator.userAgent.indexOf("Trident") !== -1 && c(e) && u(e).position === "fixed") {
        return null;
      }
      for (var r = h(e); c(r) && ["html", "body"].indexOf(s(r)) < 0;) {
        var n = u(r);
        if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none") {
          return r;
        }
        r = r.parentNode;
      }
      return null;
    }(e) || t;
  }
}
var m = "top";
var w = "bottom";
var _ = "right";
var k = "left";
var A = "start";
var E = [].concat([m, w, _, k], ["auto"]).reduce(function (e, t) {
  return e.concat([t, t + "-" + A, t + "-end"]);
}, []);
var C = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function x(e) {
  var t = new Map();
  var r = new Set();
  var n = [];
  function o(e) {
    r.add(e.name);
    [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
      if (!r.has(e)) {
        var n = t.get(e);
        if (n) {
          o(n);
        }
      }
    });
    n.push(e);
  }
  e.forEach(function (e) {
    t.set(e.name, e);
  });
  e.forEach(function (e) {
    if (!r.has(e.name)) {
      o(e);
    }
  });
  return n;
}
function S(e) {
  return e.split("-")[0];
}
var O = Math.round;
var B = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function j() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  return !t.some(function (e) {
    return !e || typeof e.getBoundingClientRect != "function";
  });
}
function D(e = {}) {
  var t = e;
  var r = t.defaultModifiers;
  var o = r === undefined ? [] : r;
  var a = t.defaultOptions;
  var c = a === undefined ? B : a;
  return function (e, t, r = c) {
    var a;
    var s;
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, B, c),
      modifiersData: {},
      elements: {
        reference: e,
        popper: t
      },
      attributes: {},
      styles: {}
    };
    var u = [];
    var f = false;
    var h = {
      state: l,
      setOptions: function (r) {
        p();
        l.options = Object.assign({}, c, l.options, r);
        l.scrollParents = {
          reference: i(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
          popper: g(t)
        };
        var n = function (e) {
          var t = x(e);
          return C.reduce(function (e, r) {
            return e.concat(t.filter(function (e) {
              return e.phase === r;
            }));
          }, []);
        }(function (e) {
          var t = e.reduce(function (e, t) {
            var r = e[t.name];
            e[t.name] = r ? Object.assign({}, r, t, {
              options: Object.assign({}, r.options, t.options),
              data: Object.assign({}, r.data, t.data)
            }) : t;
            return e;
          }, {});
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        }([].concat(o, l.options.modifiers)));
        l.orderedModifiers = n.filter(function (e) {
          return e.enabled;
        });
        l.orderedModifiers.forEach(function (e) {
          var t = e.name;
          var r = e.options;
          var n = r === undefined ? {} : r;
          var o = e.effect;
          if (typeof o == "function") {
            var a = o({
              state: l,
              name: t,
              instance: h,
              options: n
            });
            function i() {}
            u.push(a || i);
          }
        });
        return h.update();
      },
      forceUpdate: function () {
        if (!f) {
          var e = l.elements;
          var t = e.reference;
          var r = e.popper;
          if (j(t, r)) {
            var o;
            var a;
            var i;
            var c;
            l.rects = {
              reference: d(t, b(r), l.options.strategy === "fixed"),
              popper: (o = r, a = n(o), i = o.offsetWidth, c = o.offsetHeight, Math.abs(a.width - i) <= 1 && (i = a.width), Math.abs(a.height - c) <= 1 && (c = a.height), {
                x: o.offsetLeft,
                y: o.offsetTop,
                width: i,
                height: c
              })
            };
            l.reset = false;
            l.placement = l.options.placement;
            l.orderedModifiers.forEach(function (e) {
              return l.modifiersData[e.name] = Object.assign({}, e.data);
            });
            for (var s = 0; s < l.orderedModifiers.length; s++) {
              if (l.reset !== true) {
                var u = l.orderedModifiers[s];
                var p = u.fn;
                var g = u.options;
                var y = g === undefined ? {} : g;
                var v = u.name;
                if (typeof p == "function") {
                  l = p({
                    state: l,
                    options: y,
                    name: v,
                    instance: h
                  }) || l;
                }
              } else {
                l.reset = false;
                s = -1;
              }
            }
          }
        }
      },
      update: (a = function () {
        return new Promise(function (e) {
          h.forceUpdate();
          e(l);
        });
      }, function () {
        s ||= new Promise(function (e) {
          Promise.resolve().then(function () {
            s = undefined;
            e(a());
          });
        });
        return s;
      }),
      destroy: function () {
        p();
        f = true;
      }
    };
    if (!j(e, t)) {
      return h;
    }
    function p() {
      u.forEach(function (e) {
        return e();
      });
      u = [];
    }
    h.setOptions(r).then(function (e) {
      if (!f && r.onFirstUpdate) {
        r.onFirstUpdate(e);
      }
    });
    return h;
  };
}
var F = {
  passive: true
};
var P = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function M(e) {
  var t;
  var r = e.popper;
  var n = e.popperRect;
  var a = e.placement;
  var i = e.offsets;
  var c = e.position;
  var s = e.gpuAcceleration;
  var f = e.adaptive;
  var d = e.roundOffsets;
  var h = d === true ? function (e) {
    var t = e.x;
    var r = e.y;
    var n = window.devicePixelRatio || 1;
    return {
      x: O(O(t * n) / n) || 0,
      y: O(O(r * n) / n) || 0
    };
  }(i) : typeof d == "function" ? d(i) : i;
  var p = h.x;
  var g = p === undefined ? 0 : p;
  var y = h.y;
  var v = y === undefined ? 0 : y;
  var A = i.hasOwnProperty("x");
  var E = i.hasOwnProperty("y");
  var C = k;
  var x = m;
  var S = window;
  if (f) {
    var B = b(r);
    var j = "clientHeight";
    var D = "clientWidth";
    if (B === o(r) && u(B = l(r)).position !== "static") {
      j = "scrollHeight";
      D = "scrollWidth";
    }
    B = B;
    if (a === m) {
      x = w;
      v -= B[j] - n.height;
      v *= s ? 1 : -1;
    }
    if (a === k) {
      C = _;
      g -= B[D] - n.width;
      g *= s ? 1 : -1;
    }
  }
  var F;
  var M = Object.assign({
    position: c
  }, f && P);
  if (s) {
    return Object.assign({}, M, ((F = {})[x] = E ? "0" : "", F[C] = A ? "0" : "", F.transform = (S.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", F));
  } else {
    return Object.assign({}, M, ((t = {})[x] = E ? v + "px" : "", t[C] = A ? g + "px" : "", t.transform = "", t));
  }
}
export var f = D({
  defaultModifiers: [{
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var t = e.state;
      var r = e.instance;
      var n = e.options;
      var a = n.scroll;
      var i = a === undefined || a;
      var c = n.resize;
      var s = c === undefined || c;
      var l = o(t.elements.popper);
      var u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
      if (i) {
        u.forEach(function (e) {
          e.addEventListener("scroll", r.update, F);
        });
      }
      if (s) {
        l.addEventListener("resize", r.update, F);
      }
      return function () {
        if (i) {
          u.forEach(function (e) {
            e.removeEventListener("scroll", r.update, F);
          });
        }
        if (s) {
          l.removeEventListener("resize", r.update, F);
        }
      };
    },
    data: {}
  }, {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: function (e) {
      var t = e.state;
      var r = e.name;
      t.modifiersData[r] = function (e) {
        var t;
        var r = e.reference;
        var n = e.element;
        var o = e.placement;
        var a = o ? S(o) : null;
        var i = o ? function (e) {
          return e.split("-")[1];
        }(o) : null;
        var c = r.x + r.width / 2 - n.width / 2;
        var s = r.y + r.height / 2 - n.height / 2;
        switch (a) {
          case m:
            t = {
              x: c,
              y: r.y - n.height
            };
            break;
          case w:
            t = {
              x: c,
              y: r.y + r.height
            };
            break;
          case _:
            t = {
              x: r.x + r.width,
              y: s
            };
            break;
          case k:
            t = {
              x: r.x - n.width,
              y: s
            };
            break;
          default:
            t = {
              x: r.x,
              y: r.y
            };
        }
        var l = a ? function (e) {
          if (["top", "bottom"].indexOf(e) >= 0) {
            return "x";
          } else {
            return "y";
          }
        }(a) : null;
        if (l != null) {
          var u = l === "y" ? "height" : "width";
          switch (i) {
            case A:
              t[l] = t[l] - (r[u] / 2 - n[u] / 2);
              break;
            case "end":
              t[l] = t[l] + (r[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
      });
    },
    data: {}
  }, {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: function (e) {
      var t = e.state;
      var r = e.options;
      var n = r.gpuAcceleration;
      var o = n === undefined || n;
      var a = r.adaptive;
      var i = a === undefined || a;
      var c = r.roundOffsets;
      var s = c === undefined || c;
      var l = {
        placement: S(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: o
      };
      if (t.modifiersData.popperOffsets != null) {
        t.styles.popper = Object.assign({}, t.styles.popper, M(Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: i,
          roundOffsets: s
        })));
      }
      if (t.modifiersData.arrow != null) {
        t.styles.arrow = Object.assign({}, t.styles.arrow, M(Object.assign({}, l, {
          offsets: t.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets: s
        })));
      }
      t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
      });
    },
    data: {}
  }, {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var r = t.styles[e] || {};
        var n = t.attributes[e] || {};
        var o = t.elements[e];
        if (c(o) && s(o)) {
          Object.assign(o.style, r);
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            if (t === false) {
              o.removeAttribute(e);
            } else {
              o.setAttribute(e, t === true ? "" : t);
            }
          });
        }
      });
    },
    effect: function (e) {
      var t = e.state;
      var r = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(t.elements.popper.style, r.popper);
      t.styles = r;
      if (t.elements.arrow) {
        Object.assign(t.elements.arrow.style, r.arrow);
      }
      return function () {
        Object.keys(t.elements).forEach(function (e) {
          var n = t.elements[e];
          var o = t.attributes[e] || {};
          var a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce(function (e, t) {
            e[t] = "";
            return e;
          }, {});
          if (c(n) && s(n)) {
            Object.assign(n.style, a);
            Object.keys(o).forEach(function (e) {
              n.removeAttribute(e);
            });
          }
        });
      };
    },
    requires: ["computeStyles"]
  }]
});
export var W = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: function (e) {
    var t = e.state;
    var r = e.options;
    var n = e.name;
    var o = r.offset;
    var a = o === undefined ? [0, 0] : o;
    var i = E.reduce(function (e, r) {
      e[r] = function (e, t, r) {
        var n = S(e);
        var o = [k, m].indexOf(n) >= 0 ? -1 : 1;
        var a = typeof r == "function" ? r(Object.assign({}, t, {
          placement: e
        })) : r;
        var i = a[0];
        var c = a[1];
        i = i || 0;
        c = (c || 0) * o;
        if ([k, _].indexOf(n) >= 0) {
          return {
            x: c,
            y: i
          };
        } else {
          return {
            x: i,
            y: c
          };
        }
      }(r, t.rects, a);
      return e;
    }, {});
    var c = i[t.placement];
    var s = c.x;
    var l = c.y;
    if (t.modifiersData.popperOffsets != null) {
      t.modifiersData.popperOffsets.x += s;
      t.modifiersData.popperOffsets.y += l;
    }
    t.modifiersData[n] = i;
  }
};