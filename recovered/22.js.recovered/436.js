/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
module.exports = function () {
  "use strict";

  function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      if (e) {
        r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function e(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n] ?? {};
      if (n % 2) {
        t(Object(r), true).forEach(function (t) {
          o(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        t(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function n(t) {
    return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
      return typeof t;
    } : function (t) {
      if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof t;
      }
    })(t);
  }
  function r(t, e) {
    if (!(t instanceof e)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(t, r.key, r);
    }
  }
  function o(t, e, n) {
    if (e in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  function s(t) {
    return function (t) {
      if (Array.isArray(t)) {
        return a(t);
      }
    }(t) || function (t) {
      if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) {
        return Array.from(t);
      }
    }(t) || function (t, e) {
      if (t) {
        if (typeof t == "string") {
          return a(t, e);
        }
        var n = Object.prototype.toString.call(t).slice(8, -1);
        if (n === "Object" && t.constructor) {
          n = t.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(t);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return a(t, e);
        } else {
          return undefined;
        }
      }
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function a(t, e) {
    if (e == null || e > t.length) {
      e = t.length;
    }
    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }
    return r;
  }
  var c = typeof window != "undefined" && window.document !== undefined;
  var u = c ? window : {};
  var l = !!c && !!u.document.documentElement && "ontouchstart" in u.document.documentElement;
  var h = !!c && "PointerEvent" in u;
  var p = `cropper-crop`;
  var f = `cropper-disabled`;
  var d = `cropper-hidden`;
  var g = `cropper-hide`;
  var m = `cropper-invisible`;
  var y = `cropper-modal`;
  var b = `cropper-move`;
  var v = `cropperAction`;
  var w = `cropperPreview`;
  var x = l ? "touchstart" : "mousedown";
  var _ = l ? "touchmove" : "mousemove";
  var T = l ? "touchend touchcancel" : "mouseup";
  var E = h ? "pointerdown" : x;
  var O = h ? "pointermove" : _;
  var S = h ? "pointerup pointercancel" : T;
  var I = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var A = /^data:/;
  var k = /^data:image\/jpeg;base64,/;
  var C = /^img|canvas$/i;
  var D = {
    viewMode: 0,
    dragMode: "crop",
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: "",
    responsive: true,
    restore: true,
    checkCrossOrigin: true,
    checkOrientation: true,
    modal: true,
    guides: true,
    center: true,
    highlight: true,
    background: true,
    autoCrop: true,
    autoCropArea: 0.8,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    zoomOnTouch: true,
    zoomOnWheel: true,
    wheelZoomRatio: 0.1,
    cropBoxMovable: true,
    cropBoxResizable: true,
    toggleDragModeOnDblclick: true,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };
  var j = Number.isNaN || u.isNaN;
  function N(t) {
    return typeof t == "number" && !j(t);
  }
  function P(t) {
    return t > 0 && t < Infinity;
  }
  function L(t) {
    return t === undefined;
  }
  function R(t) {
    return n(t) === "object" && t !== null;
  }
  var M = Object.prototype.hasOwnProperty;
  function B(t) {
    if (!R(t)) {
      return false;
    }
    try {
      var e = t.constructor;
      var n = e.prototype;
      return e && n && M.call(n, "isPrototypeOf");
    } catch (t) {
      return false;
    }
  }
  function U(t) {
    return typeof t == "function";
  }
  var F = Array.prototype.slice;
  function W(t) {
    if (Array.from) {
      return Array.from(t);
    } else {
      return F.call(t);
    }
  }
  function z(t, e) {
    if (t && U(e)) {
      if (Array.isArray(t) || N(t.length)) {
        W(t).forEach(function (n, r) {
          e.call(t, n, r, t);
        });
      } else if (R(t)) {
        Object.keys(t).forEach(function (n) {
          e.call(t, t[n], n, t);
        });
      }
    }
    return t;
  }
  var q = Object.assign || function (t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
      n[r - 1] = arguments[r];
    }
    if (R(t) && n.length > 0) {
      n.forEach(function (e) {
        if (R(e)) {
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          });
        }
      });
    }
    return t;
  };
  var V = /\.\d*(?:0|9){12}\d*$/;
  function $(t, e = 100000000000) {
    if (V.test(t)) {
      return Math.round(t * e) / e;
    } else {
      return t;
    }
  }
  var H = /^width|height|left|top|marginLeft|marginTop$/;
  function Y(t, e) {
    var n = t.style;
    z(e, function (t, e) {
      if (H.test(e) && N(t)) {
        t = `${t}px`;
      }
      n[e] = t;
    });
  }
  function G(t, e) {
    if (e) {
      if (N(t.length)) {
        z(t, function (t) {
          G(t, e);
        });
      } else if (t.classList) {
        t.classList.add(e);
      } else {
        var n = t.className.trim();
        if (n) {
          if (n.indexOf(e) < 0) {
            t.className = `${n} ${e}`;
          }
        } else {
          t.className = e;
        }
      }
    }
  }
  function X(t, e) {
    if (e) {
      if (N(t.length)) {
        z(t, function (t) {
          X(t, e);
        });
      } else if (t.classList) {
        t.classList.remove(e);
      } else if (t.className.indexOf(e) >= 0) {
        t.className = t.className.replace(e, "");
      }
    }
  }
  function K(t, e, n) {
    if (e) {
      if (N(t.length)) {
        z(t, function (t) {
          K(t, e, n);
        });
      } else if (n) {
        G(t, e);
      } else {
        X(t, e);
      }
    }
  }
  var Q = /([a-z\d])([A-Z])/g;
  function J(t) {
    return t.replace(Q, "$1-$2").toLowerCase();
  }
  function Z(t, e) {
    if (R(t[e])) {
      return t[e];
    } else if (t.dataset) {
      return t.dataset[e];
    } else {
      return t.getAttribute(`data-${J(e)}`);
    }
  }
  function tt(t, e, n) {
    if (R(n)) {
      t[e] = n;
    } else if (t.dataset) {
      t.dataset[e] = n;
    } else {
      t.setAttribute(`data-${J(e)}`, n);
    }
  }
  var et = /\s\s*/;
  var nt = function () {
    var t = false;
    if (c) {
      var e = false;
      function n() {}
      var r = Object.defineProperty({}, "once", {
        get: function () {
          t = true;
          return e;
        },
        set: function (t) {
          e = t;
        }
      });
      u.addEventListener("test", n, r);
      u.removeEventListener("test", n, r);
    }
    return t;
  }();
  function rt(t, e, n, r = {}) {
    var i = n;
    e.trim().split(et).forEach(function (e) {
      if (!nt) {
        var o = t.listeners;
        if (o && o[e] && o[e][n]) {
          i = o[e][n];
          delete o[e][n];
          if (Object.keys(o[e]).length === 0) {
            delete o[e];
          }
          if (Object.keys(o).length === 0) {
            delete t.listeners;
          }
        }
      }
      t.removeEventListener(e, i, r);
    });
  }
  function it(t, e, n, r = {}) {
    var i = n;
    e.trim().split(et).forEach(function (e) {
      if (r.once && !nt) {
        var o = t.listeners;
        var s = o === undefined ? {} : o;
        i = function () {
          delete s[e][n];
          t.removeEventListener(e, i, r);
          for (var o = arguments.length, a = new Array(o), c = 0; c < o; c++) {
            a[c] = arguments[c];
          }
          n.apply(t, a);
        };
        s[e] ||= {};
        if (s[e][n]) {
          t.removeEventListener(e, s[e][n], r);
        }
        s[e][n] = i;
        t.listeners = s;
      }
      t.addEventListener(e, i, r);
    });
  }
  function ot(t, e, n) {
    var r;
    if (U(Event) && U(CustomEvent)) {
      r = new CustomEvent(e, {
        detail: n,
        bubbles: true,
        cancelable: true
      });
    } else {
      (r = document.createEvent("CustomEvent")).initCustomEvent(e, true, true, n);
    }
    return t.dispatchEvent(r);
  }
  function st(t) {
    var e = t.getBoundingClientRect();
    return {
      left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: e.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var at = u.location;
  var ct = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  function ut(t) {
    var e = t.match(ct);
    return e !== null && (e[1] !== at.protocol || e[2] !== at.hostname || e[3] !== at.port);
  }
  function lt(t) {
    var e = `timestamp=${new Date().getTime()}`;
    return t + (t.indexOf("?") === -1 ? "?" : "&") + e;
  }
  function ht(t) {
    var e = t.rotate;
    var n = t.scaleX;
    var r = t.scaleY;
    var i = t.translateX;
    var o = t.translateY;
    var s = [];
    if (N(i) && i !== 0) {
      s.push(`translateX(${i}px)`);
    }
    if (N(o) && o !== 0) {
      s.push(`translateY(${o}px)`);
    }
    if (N(e) && e !== 0) {
      s.push(`rotate(${e}deg)`);
    }
    if (N(n) && n !== 1) {
      s.push(`scaleX(${n})`);
    }
    if (N(r) && r !== 1) {
      s.push(`scaleY(${r})`);
    }
    var a = s.length ? s.join(" ") : "none";
    return {
      WebkitTransform: a,
      msTransform: a,
      transform: a
    };
  }
  function pt(t, n) {
    var r = t.pageX;
    var i = t.pageY;
    var o = {
      endX: r,
      endY: i
    };
    if (n) {
      return o;
    } else {
      return e({
        startX: r,
        startY: i
      }, o);
    }
  }
  function ft(t) {
    var e = t.aspectRatio;
    var n = t.height;
    var r = t.width;
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "contain";
    var o = P(r);
    var s = P(n);
    if (o && s) {
      var a = n * e;
      if (i === "contain" && a > r || i === "cover" && a < r) {
        n = r / e;
      } else {
        r = n * e;
      }
    } else if (o) {
      n = r / e;
    } else if (s) {
      r = n * e;
    }
    return {
      width: r,
      height: n
    };
  }
  function dt(t, e, n, r) {
    var i = e.aspectRatio;
    var o = e.naturalWidth;
    var a = e.naturalHeight;
    var c = e.rotate;
    var u = c === undefined ? 0 : c;
    var l = e.scaleX;
    var h = l === undefined ? 1 : l;
    var p = e.scaleY;
    var f = p === undefined ? 1 : p;
    var d = n.aspectRatio;
    var g = n.naturalWidth;
    var m = n.naturalHeight;
    var y = r.fillColor;
    var b = y === undefined ? "transparent" : y;
    var v = r.imageSmoothingEnabled;
    var w = v === undefined || v;
    var x = r.imageSmoothingQuality;
    var _ = x === undefined ? "low" : x;
    var T = r.maxWidth;
    var E = T === undefined ? Infinity : T;
    var O = r.maxHeight;
    var S = O === undefined ? Infinity : O;
    var I = r.minWidth;
    var A = I === undefined ? 0 : I;
    var k = r.minHeight;
    var C = k === undefined ? 0 : k;
    var D = document.createElement("canvas");
    var j = D.getContext("2d");
    var N = ft({
      aspectRatio: d,
      width: E,
      height: S
    });
    var P = ft({
      aspectRatio: d,
      width: A,
      height: C
    }, "cover");
    var L = Math.min(N.width, Math.max(P.width, g));
    var R = Math.min(N.height, Math.max(P.height, m));
    var M = ft({
      aspectRatio: i,
      width: E,
      height: S
    });
    var B = ft({
      aspectRatio: i,
      width: A,
      height: C
    }, "cover");
    var U = Math.min(M.width, Math.max(B.width, o));
    var F = Math.min(M.height, Math.max(B.height, a));
    var W = [-U / 2, -F / 2, U, F];
    D.width = $(L);
    D.height = $(R);
    j.fillStyle = b;
    j.fillRect(0, 0, L, R);
    j.save();
    j.translate(L / 2, R / 2);
    j.rotate(u * Math.PI / 180);
    j.scale(h, f);
    j.imageSmoothingEnabled = w;
    j.imageSmoothingQuality = _;
    j.drawImage.apply(j, [t].concat(s(W.map(function (t) {
      return Math.floor($(t));
    }))));
    j.restore();
    return D;
  }
  var gt = String.fromCharCode;
  var mt = /^data:.*,/;
  function yt(t) {
    var e;
    var n = new DataView(t);
    try {
      var r;
      var i;
      var o;
      if (n.getUint8(0) === 255 && n.getUint8(1) === 216) {
        for (var s = n.byteLength, a = 2; a + 1 < s;) {
          if (n.getUint8(a) === 255 && n.getUint8(a + 1) === 225) {
            i = a;
            break;
          }
          a += 1;
        }
      }
      if (i) {
        var c = i + 10;
        if (function (t, e, n) {
          var r = "";
          n += e;
          for (var i = e; i < n; i += 1) {
            r += gt(t.getUint8(i));
          }
          return r;
        }(n, i + 4, 4) === "Exif") {
          var u = n.getUint16(c);
          if (((r = u === 18761) || u === 19789) && n.getUint16(c + 2, r) === 42) {
            var l = n.getUint32(c + 4, r);
            if (l >= 8) {
              o = c + l;
            }
          }
        }
      }
      if (o) {
        var h;
        var p;
        var f = n.getUint16(o, r);
        for (p = 0; p < f; p += 1) {
          h = o + p * 12 + 2;
          if (n.getUint16(h, r) === 274) {
            h += 8;
            e = n.getUint16(h, r);
            n.setUint16(h, 1, r);
            break;
          }
        }
      }
    } catch (t) {
      e = 1;
    }
    return e;
  }
  var bt = {
    render: function () {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function () {
      var t = this.element;
      var e = this.options;
      var n = this.container;
      var r = this.cropper;
      var i = Number(e.minContainerWidth);
      var o = Number(e.minContainerHeight);
      G(r, d);
      X(t, d);
      var s = {
        width: Math.max(n.offsetWidth, i >= 0 ? i : 200),
        height: Math.max(n.offsetHeight, o >= 0 ? o : 100)
      };
      this.containerData = s;
      Y(r, {
        width: s.width,
        height: s.height
      });
      G(t, d);
      X(r, d);
    },
    initCanvas: function () {
      var t = this.containerData;
      var e = this.imageData;
      var n = this.options.viewMode;
      var r = Math.abs(e.rotate) % 180 == 90;
      var i = r ? e.naturalHeight : e.naturalWidth;
      var o = r ? e.naturalWidth : e.naturalHeight;
      var s = i / o;
      var a = t.width;
      var c = t.height;
      if (t.height * s > t.width) {
        if (n === 3) {
          a = t.height * s;
        } else {
          c = t.width / s;
        }
      } else if (n === 3) {
        c = t.width / s;
      } else {
        a = t.height * s;
      }
      var u = {
        aspectRatio: s,
        naturalWidth: i,
        naturalHeight: o,
        width: a,
        height: c
      };
      this.canvasData = u;
      this.limited = n === 1 || n === 2;
      this.limitCanvas(true, true);
      u.width = Math.min(Math.max(u.width, u.minWidth), u.maxWidth);
      u.height = Math.min(Math.max(u.height, u.minHeight), u.maxHeight);
      u.left = (t.width - u.width) / 2;
      u.top = (t.height - u.height) / 2;
      u.oldLeft = u.left;
      u.oldTop = u.top;
      this.initialCanvasData = q({}, u);
    },
    limitCanvas: function (t, e) {
      var n = this.options;
      var r = this.containerData;
      var i = this.canvasData;
      var o = this.cropBoxData;
      var s = n.viewMode;
      var a = i.aspectRatio;
      var c = this.cropped && o;
      if (t) {
        var u = Number(n.minCanvasWidth) || 0;
        var l = Number(n.minCanvasHeight) || 0;
        if (s > 1) {
          u = Math.max(u, r.width);
          l = Math.max(l, r.height);
          if (s === 3) {
            if (l * a > u) {
              u = l * a;
            } else {
              l = u / a;
            }
          }
        } else if (s > 0) {
          if (u) {
            u = Math.max(u, c ? o.width : 0);
          } else if (l) {
            l = Math.max(l, c ? o.height : 0);
          } else if (c) {
            u = o.width;
            if ((l = o.height) * a > u) {
              u = l * a;
            } else {
              l = u / a;
            }
          }
        }
        var h = ft({
          aspectRatio: a,
          width: u,
          height: l
        });
        u = h.width;
        l = h.height;
        i.minWidth = u;
        i.minHeight = l;
        i.maxWidth = Infinity;
        i.maxHeight = Infinity;
      }
      if (e) {
        if (s > (c ? 0 : 1)) {
          var p = r.width - i.width;
          var f = r.height - i.height;
          i.minLeft = Math.min(0, p);
          i.minTop = Math.min(0, f);
          i.maxLeft = Math.max(0, p);
          i.maxTop = Math.max(0, f);
          if (c && this.limited) {
            i.minLeft = Math.min(o.left, o.left + (o.width - i.width));
            i.minTop = Math.min(o.top, o.top + (o.height - i.height));
            i.maxLeft = o.left;
            i.maxTop = o.top;
            if (s === 2) {
              if (i.width >= r.width) {
                i.minLeft = Math.min(0, p);
                i.maxLeft = Math.max(0, p);
              }
              if (i.height >= r.height) {
                i.minTop = Math.min(0, f);
                i.maxTop = Math.max(0, f);
              }
            }
          }
        } else {
          i.minLeft = -i.width;
          i.minTop = -i.height;
          i.maxLeft = r.width;
          i.maxTop = r.height;
        }
      }
    },
    renderCanvas: function (t, e) {
      var n = this.canvasData;
      var r = this.imageData;
      if (e) {
        var i = function (t) {
          var e = t.width;
          var n = t.height;
          var r = t.degree;
          if ((r = Math.abs(r) % 180) == 90) {
            return {
              width: n,
              height: e
            };
          }
          var i = r % 90 * Math.PI / 180;
          var o = Math.sin(i);
          var s = Math.cos(i);
          var a = e * s + n * o;
          var c = e * o + n * s;
          if (r > 90) {
            return {
              width: c,
              height: a
            };
          } else {
            return {
              width: a,
              height: c
            };
          }
        }({
          width: r.naturalWidth * Math.abs(r.scaleX || 1),
          height: r.naturalHeight * Math.abs(r.scaleY || 1),
          degree: r.rotate || 0
        });
        var o = i.width;
        var s = i.height;
        var a = n.width * (o / n.naturalWidth);
        var c = n.height * (s / n.naturalHeight);
        n.left -= (a - n.width) / 2;
        n.top -= (c - n.height) / 2;
        n.width = a;
        n.height = c;
        n.aspectRatio = o / s;
        n.naturalWidth = o;
        n.naturalHeight = s;
        this.limitCanvas(true, false);
      }
      if (n.width > n.maxWidth || n.width < n.minWidth) {
        n.left = n.oldLeft;
      }
      if (n.height > n.maxHeight || n.height < n.minHeight) {
        n.top = n.oldTop;
      }
      n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth);
      n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight);
      this.limitCanvas(false, true);
      n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft);
      n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop);
      n.oldLeft = n.left;
      n.oldTop = n.top;
      Y(this.canvas, q({
        width: n.width,
        height: n.height
      }, ht({
        translateX: n.left,
        translateY: n.top
      })));
      this.renderImage(t);
      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function (t) {
      var e = this.canvasData;
      var n = this.imageData;
      var r = n.naturalWidth * (e.width / e.naturalWidth);
      var i = n.naturalHeight * (e.height / e.naturalHeight);
      q(n, {
        width: r,
        height: i,
        left: (e.width - r) / 2,
        top: (e.height - i) / 2
      });
      Y(this.image, q({
        width: n.width,
        height: n.height
      }, ht(q({
        translateX: n.left,
        translateY: n.top
      }, n))));
      if (t) {
        this.output();
      }
    },
    initCropBox: function () {
      var t = this.options;
      var e = this.canvasData;
      var n = t.aspectRatio || t.initialAspectRatio;
      var r = Number(t.autoCropArea) || 0.8;
      var i = {
        width: e.width,
        height: e.height
      };
      if (n) {
        if (e.height * n > e.width) {
          i.height = i.width / n;
        } else {
          i.width = i.height * n;
        }
      }
      this.cropBoxData = i;
      this.limitCropBox(true, true);
      i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth);
      i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight);
      i.width = Math.max(i.minWidth, i.width * r);
      i.height = Math.max(i.minHeight, i.height * r);
      i.left = e.left + (e.width - i.width) / 2;
      i.top = e.top + (e.height - i.height) / 2;
      i.oldLeft = i.left;
      i.oldTop = i.top;
      this.initialCropBoxData = q({}, i);
    },
    limitCropBox: function (t, e) {
      var n = this.options;
      var r = this.containerData;
      var i = this.canvasData;
      var o = this.cropBoxData;
      var s = this.limited;
      var a = n.aspectRatio;
      if (t) {
        var c = Number(n.minCropBoxWidth) || 0;
        var u = Number(n.minCropBoxHeight) || 0;
        var l = s ? Math.min(r.width, i.width, i.width + i.left, r.width - i.left) : r.width;
        var h = s ? Math.min(r.height, i.height, i.height + i.top, r.height - i.top) : r.height;
        c = Math.min(c, r.width);
        u = Math.min(u, r.height);
        if (a) {
          if (c && u) {
            if (u * a > c) {
              u = c / a;
            } else {
              c = u * a;
            }
          } else if (c) {
            u = c / a;
          } else if (u) {
            c = u * a;
          }
          if (h * a > l) {
            h = l / a;
          } else {
            l = h * a;
          }
        }
        o.minWidth = Math.min(c, l);
        o.minHeight = Math.min(u, h);
        o.maxWidth = l;
        o.maxHeight = h;
      }
      if (e) {
        if (s) {
          o.minLeft = Math.max(0, i.left);
          o.minTop = Math.max(0, i.top);
          o.maxLeft = Math.min(r.width, i.left + i.width) - o.width;
          o.maxTop = Math.min(r.height, i.top + i.height) - o.height;
        } else {
          o.minLeft = 0;
          o.minTop = 0;
          o.maxLeft = r.width - o.width;
          o.maxTop = r.height - o.height;
        }
      }
    },
    renderCropBox: function () {
      var t = this.options;
      var e = this.containerData;
      var n = this.cropBoxData;
      if (n.width > n.maxWidth || n.width < n.minWidth) {
        n.left = n.oldLeft;
      }
      if (n.height > n.maxHeight || n.height < n.minHeight) {
        n.top = n.oldTop;
      }
      n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth);
      n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight);
      this.limitCropBox(false, true);
      n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft);
      n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop);
      n.oldLeft = n.left;
      n.oldTop = n.top;
      if (t.movable && t.cropBoxMovable) {
        tt(this.face, v, n.width >= e.width && n.height >= e.height ? "move" : "all");
      }
      Y(this.cropBox, q({
        width: n.width,
        height: n.height
      }, ht({
        translateX: n.left,
        translateY: n.top
      })));
      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }
      if (!this.disabled) {
        this.output();
      }
    },
    output: function () {
      this.preview();
      ot(this.element, "crop", this.getData());
    }
  };
  var vt = {
    initPreview: function () {
      var t = this.element;
      var e = this.crossOrigin;
      var n = this.options.preview;
      var r = e ? this.crossOriginUrl : this.url;
      var i = t.alt || "The image to preview";
      var o = document.createElement("img");
      if (e) {
        o.crossOrigin = e;
      }
      o.src = r;
      o.alt = i;
      this.viewBox.appendChild(o);
      this.viewBoxImage = o;
      if (n) {
        var s = n;
        if (typeof n == "string") {
          s = t.ownerDocument.querySelectorAll(n);
        } else if (n.querySelector) {
          s = [n];
        }
        this.previews = s;
        z(s, function (t) {
          var n = document.createElement("img");
          tt(t, w, {
            width: t.offsetWidth,
            height: t.offsetHeight,
            html: t.innerHTML
          });
          if (e) {
            n.crossOrigin = e;
          }
          n.src = r;
          n.alt = i;
          n.style.cssText = "display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;\"";
          t.innerHTML = "";
          t.appendChild(n);
        });
      }
    },
    resetPreview: function () {
      z(this.previews, function (t) {
        var e = Z(t, w);
        Y(t, {
          width: e.width,
          height: e.height
        });
        t.innerHTML = e.html;
        (function (t, e) {
          if (R(t[e])) {
            try {
              delete t[e];
            } catch (n) {
              t[e] = undefined;
            }
          } else if (t.dataset) {
            try {
              delete t.dataset[e];
            } catch (n) {
              t.dataset[e] = undefined;
            }
          } else {
            t.removeAttribute(`data-${J(e)}`);
          }
        })(t, w);
      });
    },
    preview: function () {
      var t = this.imageData;
      var e = this.canvasData;
      var n = this.cropBoxData;
      var r = n.width;
      var i = n.height;
      var o = t.width;
      var s = t.height;
      var a = n.left - e.left - t.left;
      var c = n.top - e.top - t.top;
      if (this.cropped && !this.disabled) {
        Y(this.viewBoxImage, q({
          width: o,
          height: s
        }, ht(q({
          translateX: -a,
          translateY: -c
        }, t))));
        z(this.previews, function (e) {
          var n = Z(e, w);
          var u = n.width;
          var l = n.height;
          var h = u;
          var p = l;
          var f = 1;
          if (r) {
            p = i * (f = u / r);
          }
          if (i && p > l) {
            h = r * (f = l / i);
            p = l;
          }
          Y(e, {
            width: h,
            height: p
          });
          Y(e.getElementsByTagName("img")[0], q({
            width: o * f,
            height: s * f
          }, ht(q({
            translateX: -a * f,
            translateY: -c * f
          }, t))));
        });
      }
    }
  };
  var wt = {
    bind: function () {
      var t = this.element;
      var e = this.options;
      var n = this.cropper;
      if (U(e.cropstart)) {
        it(t, "cropstart", e.cropstart);
      }
      if (U(e.cropmove)) {
        it(t, "cropmove", e.cropmove);
      }
      if (U(e.cropend)) {
        it(t, "cropend", e.cropend);
      }
      if (U(e.crop)) {
        it(t, "crop", e.crop);
      }
      if (U(e.zoom)) {
        it(t, "zoom", e.zoom);
      }
      it(n, E, this.onCropStart = this.cropStart.bind(this));
      if (e.zoomable && e.zoomOnWheel) {
        it(n, "wheel", this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }
      if (e.toggleDragModeOnDblclick) {
        it(n, "dblclick", this.onDblclick = this.dblclick.bind(this));
      }
      it(t.ownerDocument, O, this.onCropMove = this.cropMove.bind(this));
      it(t.ownerDocument, S, this.onCropEnd = this.cropEnd.bind(this));
      if (e.responsive) {
        it(window, "resize", this.onResize = this.resize.bind(this));
      }
    },
    unbind: function () {
      var t = this.element;
      var e = this.options;
      var n = this.cropper;
      if (U(e.cropstart)) {
        rt(t, "cropstart", e.cropstart);
      }
      if (U(e.cropmove)) {
        rt(t, "cropmove", e.cropmove);
      }
      if (U(e.cropend)) {
        rt(t, "cropend", e.cropend);
      }
      if (U(e.crop)) {
        rt(t, "crop", e.crop);
      }
      if (U(e.zoom)) {
        rt(t, "zoom", e.zoom);
      }
      rt(n, E, this.onCropStart);
      if (e.zoomable && e.zoomOnWheel) {
        rt(n, "wheel", this.onWheel, {
          passive: false,
          capture: true
        });
      }
      if (e.toggleDragModeOnDblclick) {
        rt(n, "dblclick", this.onDblclick);
      }
      rt(t.ownerDocument, O, this.onCropMove);
      rt(t.ownerDocument, S, this.onCropEnd);
      if (e.responsive) {
        rt(window, "resize", this.onResize);
      }
    }
  };
  var xt = {
    resize: function () {
      if (!this.disabled) {
        var t;
        var e;
        var n = this.options;
        var r = this.container;
        var i = this.containerData;
        var o = r.offsetWidth / i.width;
        var s = r.offsetHeight / i.height;
        var a = Math.abs(o - 1) > Math.abs(s - 1) ? o : s;
        if (a !== 1) {
          if (n.restore) {
            t = this.getCanvasData();
            e = this.getCropBoxData();
          }
          this.render();
          if (n.restore) {
            this.setCanvasData(z(t, function (e, n) {
              t[n] = e * a;
            }));
            this.setCropBoxData(z(e, function (t, n) {
              e[n] = t * a;
            }));
          }
        }
      }
    },
    dblclick: function () {
      var t;
      var e;
      if (!this.disabled && this.options.dragMode !== "none") {
        this.setDragMode((t = this.dragBox, e = p, (t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1) ? "move" : "crop"));
      }
    },
    wheel: function (t) {
      var e = this;
      var n = Number(this.options.wheelZoomRatio) || 0.1;
      var r = 1;
      if (!this.disabled) {
        t.preventDefault();
        if (!this.wheeling) {
          this.wheeling = true;
          setTimeout(function () {
            e.wheeling = false;
          }, 50);
          if (t.deltaY) {
            r = t.deltaY > 0 ? 1 : -1;
          } else if (t.wheelDelta) {
            r = -t.wheelDelta / 120;
          } else if (t.detail) {
            r = t.detail > 0 ? 1 : -1;
          }
          this.zoom(-r * n, t);
        }
      }
    },
    cropStart: function (t) {
      var e = t.buttons;
      var n = t.button;
      if (!this.disabled && (t.type !== "mousedown" && (t.type !== "pointerdown" || t.pointerType !== "mouse") || (!N(e) || e === 1) && (!N(n) || n === 0) && !t.ctrlKey)) {
        var r;
        var i = this.options;
        var o = this.pointers;
        if (t.changedTouches) {
          z(t.changedTouches, function (t) {
            o[t.identifier] = pt(t);
          });
        } else {
          o[t.pointerId || 0] = pt(t);
        }
        r = Object.keys(o).length > 1 && i.zoomable && i.zoomOnTouch ? "zoom" : Z(t.target, v);
        if (I.test(r) && ot(this.element, "cropstart", {
          originalEvent: t,
          action: r
        }) !== false) {
          t.preventDefault();
          this.action = r;
          this.cropping = false;
          if (r === "crop") {
            this.cropping = true;
            G(this.dragBox, y);
          }
        }
      }
    },
    cropMove: function (t) {
      var e = this.action;
      if (!this.disabled && e) {
        var n = this.pointers;
        t.preventDefault();
        if (ot(this.element, "cropmove", {
          originalEvent: t,
          action: e
        }) !== false) {
          if (t.changedTouches) {
            z(t.changedTouches, function (t) {
              q(n[t.identifier] || {}, pt(t, true));
            });
          } else {
            q(n[t.pointerId || 0] || {}, pt(t, true));
          }
          this.change(t);
        }
      }
    },
    cropEnd: function (t) {
      if (!this.disabled) {
        var e = this.action;
        var n = this.pointers;
        if (t.changedTouches) {
          z(t.changedTouches, function (t) {
            delete n[t.identifier];
          });
        } else {
          delete n[t.pointerId || 0];
        }
        if (e) {
          t.preventDefault();
          if (!Object.keys(n).length) {
            this.action = "";
          }
          if (this.cropping) {
            this.cropping = false;
            K(this.dragBox, y, this.cropped && this.options.modal);
          }
          ot(this.element, "cropend", {
            originalEvent: t,
            action: e
          });
        }
      }
    }
  };
  var _t = {
    change: function (t) {
      var n;
      var r = this.options;
      var i = this.canvasData;
      var o = this.containerData;
      var s = this.cropBoxData;
      var a = this.pointers;
      var c = this.action;
      var u = r.aspectRatio;
      var l = s.left;
      var h = s.top;
      var p = s.width;
      var f = s.height;
      var g = l + p;
      var m = h + f;
      var y = 0;
      var b = 0;
      var v = o.width;
      var w = o.height;
      var x = true;
      if (!u && t.shiftKey) {
        u = p && f ? p / f : 1;
      }
      if (this.limited) {
        y = s.minLeft;
        b = s.minTop;
        v = y + Math.min(o.width, i.width, i.left + i.width);
        w = b + Math.min(o.height, i.height, i.top + i.height);
      }
      var _ = a[Object.keys(a)[0]];
      var T = {
        x: _.endX - _.startX,
        y: _.endY - _.startY
      };
      function E(t) {
        switch (t) {
          case "e":
            if (g + T.x > v) {
              T.x = v - g;
            }
            break;
          case "w":
            if (l + T.x < y) {
              T.x = y - l;
            }
            break;
          case "n":
            if (h + T.y < b) {
              T.y = b - h;
            }
            break;
          case "s":
            if (m + T.y > w) {
              T.y = w - m;
            }
        }
      }
      switch (c) {
        case "all":
          l += T.x;
          h += T.y;
          break;
        case "e":
          if (T.x >= 0 && (g >= v || u && (h <= b || m >= w))) {
            x = false;
            break;
          }
          E("e");
          if ((p += T.x) < 0) {
            c = "w";
            l -= p = -p;
          }
          if (u) {
            f = p / u;
            h += (s.height - f) / 2;
          }
          break;
        case "n":
          if (T.y <= 0 && (h <= b || u && (l <= y || g >= v))) {
            x = false;
            break;
          }
          E("n");
          f -= T.y;
          h += T.y;
          if (f < 0) {
            c = "s";
            h -= f = -f;
          }
          if (u) {
            p = f * u;
            l += (s.width - p) / 2;
          }
          break;
        case "w":
          if (T.x <= 0 && (l <= y || u && (h <= b || m >= w))) {
            x = false;
            break;
          }
          E("w");
          p -= T.x;
          l += T.x;
          if (p < 0) {
            c = "e";
            l -= p = -p;
          }
          if (u) {
            f = p / u;
            h += (s.height - f) / 2;
          }
          break;
        case "s":
          if (T.y >= 0 && (m >= w || u && (l <= y || g >= v))) {
            x = false;
            break;
          }
          E("s");
          if ((f += T.y) < 0) {
            c = "n";
            h -= f = -f;
          }
          if (u) {
            p = f * u;
            l += (s.width - p) / 2;
          }
          break;
        case "ne":
          if (u) {
            if (T.y <= 0 && (h <= b || g >= v)) {
              x = false;
              break;
            }
            E("n");
            f -= T.y;
            h += T.y;
            p = f * u;
          } else {
            E("n");
            E("e");
            if (T.x >= 0) {
              if (g < v) {
                p += T.x;
              } else if (T.y <= 0 && h <= b) {
                x = false;
              }
            } else {
              p += T.x;
            }
            if (T.y <= 0) {
              if (h > b) {
                f -= T.y;
                h += T.y;
              }
            } else {
              f -= T.y;
              h += T.y;
            }
          }
          if (p < 0 && f < 0) {
            c = "sw";
            h -= f = -f;
            l -= p = -p;
          } else if (p < 0) {
            c = "nw";
            l -= p = -p;
          } else if (f < 0) {
            c = "se";
            h -= f = -f;
          }
          break;
        case "nw":
          if (u) {
            if (T.y <= 0 && (h <= b || l <= y)) {
              x = false;
              break;
            }
            E("n");
            f -= T.y;
            h += T.y;
            p = f * u;
            l += s.width - p;
          } else {
            E("n");
            E("w");
            if (T.x <= 0) {
              if (l > y) {
                p -= T.x;
                l += T.x;
              } else if (T.y <= 0 && h <= b) {
                x = false;
              }
            } else {
              p -= T.x;
              l += T.x;
            }
            if (T.y <= 0) {
              if (h > b) {
                f -= T.y;
                h += T.y;
              }
            } else {
              f -= T.y;
              h += T.y;
            }
          }
          if (p < 0 && f < 0) {
            c = "se";
            h -= f = -f;
            l -= p = -p;
          } else if (p < 0) {
            c = "ne";
            l -= p = -p;
          } else if (f < 0) {
            c = "sw";
            h -= f = -f;
          }
          break;
        case "sw":
          if (u) {
            if (T.x <= 0 && (l <= y || m >= w)) {
              x = false;
              break;
            }
            E("w");
            p -= T.x;
            l += T.x;
            f = p / u;
          } else {
            E("s");
            E("w");
            if (T.x <= 0) {
              if (l > y) {
                p -= T.x;
                l += T.x;
              } else if (T.y >= 0 && m >= w) {
                x = false;
              }
            } else {
              p -= T.x;
              l += T.x;
            }
            if (T.y >= 0) {
              if (m < w) {
                f += T.y;
              }
            } else {
              f += T.y;
            }
          }
          if (p < 0 && f < 0) {
            c = "ne";
            h -= f = -f;
            l -= p = -p;
          } else if (p < 0) {
            c = "se";
            l -= p = -p;
          } else if (f < 0) {
            c = "nw";
            h -= f = -f;
          }
          break;
        case "se":
          if (u) {
            if (T.x >= 0 && (g >= v || m >= w)) {
              x = false;
              break;
            }
            E("e");
            f = (p += T.x) / u;
          } else {
            E("s");
            E("e");
            if (T.x >= 0) {
              if (g < v) {
                p += T.x;
              } else if (T.y >= 0 && m >= w) {
                x = false;
              }
            } else {
              p += T.x;
            }
            if (T.y >= 0) {
              if (m < w) {
                f += T.y;
              }
            } else {
              f += T.y;
            }
          }
          if (p < 0 && f < 0) {
            c = "nw";
            h -= f = -f;
            l -= p = -p;
          } else if (p < 0) {
            c = "sw";
            l -= p = -p;
          } else if (f < 0) {
            c = "ne";
            h -= f = -f;
          }
          break;
        case "move":
          this.move(T.x, T.y);
          x = false;
          break;
        case "zoom":
          this.zoom(function (t) {
            var n = e({}, t);
            var r = 0;
            z(t, function (t, e) {
              delete n[e];
              z(n, function (e) {
                var n = Math.abs(t.startX - e.startX);
                var i = Math.abs(t.startY - e.startY);
                var o = Math.abs(t.endX - e.endX);
                var s = Math.abs(t.endY - e.endY);
                var a = Math.sqrt(n * n + i * i);
                var c = (Math.sqrt(o * o + s * s) - a) / a;
                if (Math.abs(c) > Math.abs(r)) {
                  r = c;
                }
              });
            });
            return r;
          }(a), t);
          x = false;
          break;
        case "crop":
          if (!T.x || !T.y) {
            x = false;
            break;
          }
          n = st(this.cropper);
          l = _.startX - n.left;
          h = _.startY - n.top;
          p = s.minWidth;
          f = s.minHeight;
          if (T.x > 0) {
            c = T.y > 0 ? "se" : "ne";
          } else if (T.x < 0) {
            l -= p;
            c = T.y > 0 ? "sw" : "nw";
          }
          if (T.y < 0) {
            h -= f;
          }
          if (!this.cropped) {
            X(this.cropBox, d);
            this.cropped = true;
            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }
      }
      if (x) {
        s.width = p;
        s.height = f;
        s.left = l;
        s.top = h;
        this.action = c;
        this.renderCropBox();
      }
      z(a, function (t) {
        t.startX = t.endX;
        t.startY = t.endY;
      });
    }
  };
  var Tt = {
    crop: function () {
      if (!!this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);
        if (this.options.modal) {
          G(this.dragBox, y);
        }
        X(this.cropBox, d);
        this.setCropBoxData(this.initialCropBoxData);
      }
      return this;
    },
    reset: function () {
      if (this.ready && !this.disabled) {
        this.imageData = q({}, this.initialImageData);
        this.canvasData = q({}, this.initialCanvasData);
        this.cropBoxData = q({}, this.initialCropBoxData);
        this.renderCanvas();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
      return this;
    },
    clear: function () {
      if (this.cropped && !this.disabled) {
        q(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true);
        this.renderCanvas();
        X(this.dragBox, y);
        G(this.cropBox, d);
      }
      return this;
    },
    replace: function (t, e = false) {
      if (!this.disabled && t) {
        if (this.isImg) {
          this.element.src = t;
        }
        if (e) {
          this.url = t;
          this.image.src = t;
          if (this.ready) {
            this.viewBoxImage.src = t;
            z(this.previews, function (e) {
              e.getElementsByTagName("img")[0].src = t;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }
          this.options.data = null;
          this.uncreate();
          this.load(t);
        }
      }
      return this;
    },
    enable: function () {
      if (this.ready && this.disabled) {
        this.disabled = false;
        X(this.cropper, f);
      }
      return this;
    },
    disable: function () {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        G(this.cropper, f);
      }
      return this;
    },
    destroy: function () {
      var t = this.element;
      if (t.cropper) {
        t.cropper = undefined;
        if (this.isImg && this.replaced) {
          t.src = this.originalUrl;
        }
        this.uncreate();
        return this;
      } else {
        return this;
      }
    },
    move: function (t, e = t) {
      var n = this.canvasData;
      var r = n.left;
      var i = n.top;
      return this.moveTo(L(t) ? t : r + Number(t), L(e) ? e : i + Number(e));
    },
    moveTo: function (t, e = t) {
      var n = this.canvasData;
      var r = false;
      t = Number(t);
      e = Number(e);
      if (this.ready && !this.disabled && this.options.movable) {
        if (N(t)) {
          n.left = t;
          r = true;
        }
        if (N(e)) {
          n.top = e;
          r = true;
        }
        if (r) {
          this.renderCanvas(true);
        }
      }
      return this;
    },
    zoom: function (t, e) {
      var n = this.canvasData;
      t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t;
      return this.zoomTo(n.width * t / n.naturalWidth, null, e);
    },
    zoomTo: function (t, e, n) {
      var r = this.options;
      var i = this.canvasData;
      var o = i.width;
      var s = i.height;
      var a = i.naturalWidth;
      var c = i.naturalHeight;
      if ((t = Number(t)) >= 0 && this.ready && !this.disabled && r.zoomable) {
        var u = a * t;
        var l = c * t;
        if (ot(this.element, "zoom", {
          ratio: t,
          oldRatio: o / a,
          originalEvent: n
        }) === false) {
          return this;
        }
        if (n) {
          var h = this.pointers;
          var p = st(this.cropper);
          var f = h && Object.keys(h).length ? function (t) {
            var e = 0;
            var n = 0;
            var r = 0;
            z(t, function (t) {
              var i = t.startX;
              var o = t.startY;
              e += i;
              n += o;
              r += 1;
            });
            return {
              pageX: e /= r,
              pageY: n /= r
            };
          }(h) : {
            pageX: n.pageX,
            pageY: n.pageY
          };
          i.left -= (u - o) * ((f.pageX - p.left - i.left) / o);
          i.top -= (l - s) * ((f.pageY - p.top - i.top) / s);
        } else if (B(e) && N(e.x) && N(e.y)) {
          i.left -= (u - o) * ((e.x - i.left) / o);
          i.top -= (l - s) * ((e.y - i.top) / s);
        } else {
          i.left -= (u - o) / 2;
          i.top -= (l - s) / 2;
        }
        i.width = u;
        i.height = l;
        this.renderCanvas(true);
      }
      return this;
    },
    rotate: function (t) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(t));
    },
    rotateTo: function (t) {
      if (N(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = t % 360;
        this.renderCanvas(true, true);
      }
      return this;
    },
    scaleX: function (t) {
      var e = this.imageData.scaleY;
      return this.scale(t, N(e) ? e : 1);
    },
    scaleY: function (t) {
      var e = this.imageData.scaleX;
      return this.scale(N(e) ? e : 1, t);
    },
    scale: function (t, e = t) {
      var n = this.imageData;
      var r = false;
      t = Number(t);
      e = Number(e);
      if (this.ready && !this.disabled && this.options.scalable) {
        if (N(t)) {
          n.scaleX = t;
          r = true;
        }
        if (N(e)) {
          n.scaleY = e;
          r = true;
        }
        if (r) {
          this.renderCanvas(true, true);
        }
      }
      return this;
    },
    getData: function () {
      var t;
      var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      var n = this.options;
      var r = this.imageData;
      var i = this.canvasData;
      var o = this.cropBoxData;
      if (this.ready && this.cropped) {
        t = {
          x: o.left - i.left,
          y: o.top - i.top,
          width: o.width,
          height: o.height
        };
        var s = r.width / r.naturalWidth;
        z(t, function (e, n) {
          t[n] = e / s;
        });
        if (e) {
          var a = Math.round(t.y + t.height);
          var c = Math.round(t.x + t.width);
          t.x = Math.round(t.x);
          t.y = Math.round(t.y);
          t.width = c - t.x;
          t.height = a - t.y;
        }
      } else {
        t = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      if (n.rotatable) {
        t.rotate = r.rotate || 0;
      }
      if (n.scalable) {
        t.scaleX = r.scaleX || 1;
        t.scaleY = r.scaleY || 1;
      }
      return t;
    },
    setData: function (t) {
      var e = this.options;
      var n = this.imageData;
      var r = this.canvasData;
      var i = {};
      if (this.ready && !this.disabled && B(t)) {
        var o = false;
        if (e.rotatable && N(t.rotate) && t.rotate !== n.rotate) {
          n.rotate = t.rotate;
          o = true;
        }
        if (e.scalable) {
          if (N(t.scaleX) && t.scaleX !== n.scaleX) {
            n.scaleX = t.scaleX;
            o = true;
          }
          if (N(t.scaleY) && t.scaleY !== n.scaleY) {
            n.scaleY = t.scaleY;
            o = true;
          }
        }
        if (o) {
          this.renderCanvas(true, true);
        }
        var s = n.width / n.naturalWidth;
        if (N(t.x)) {
          i.left = t.x * s + r.left;
        }
        if (N(t.y)) {
          i.top = t.y * s + r.top;
        }
        if (N(t.width)) {
          i.width = t.width * s;
        }
        if (N(t.height)) {
          i.height = t.height * s;
        }
        this.setCropBoxData(i);
      }
      return this;
    },
    getContainerData: function () {
      if (this.ready) {
        return q({}, this.containerData);
      } else {
        return {};
      }
    },
    getImageData: function () {
      if (this.sized) {
        return q({}, this.imageData);
      } else {
        return {};
      }
    },
    getCanvasData: function () {
      var t = this.canvasData;
      var e = {};
      if (this.ready) {
        z(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function (n) {
          e[n] = t[n];
        });
      }
      return e;
    },
    setCanvasData: function (t) {
      var e = this.canvasData;
      var n = e.aspectRatio;
      if (this.ready && !this.disabled && B(t)) {
        if (N(t.left)) {
          e.left = t.left;
        }
        if (N(t.top)) {
          e.top = t.top;
        }
        if (N(t.width)) {
          e.width = t.width;
          e.height = t.width / n;
        } else if (N(t.height)) {
          e.height = t.height;
          e.width = t.height * n;
        }
        this.renderCanvas(true);
      }
      return this;
    },
    getCropBoxData: function () {
      var t;
      var e = this.cropBoxData;
      if (this.ready && this.cropped) {
        t = {
          left: e.left,
          top: e.top,
          width: e.width,
          height: e.height
        };
      }
      return t || {};
    },
    setCropBoxData: function (t) {
      var e;
      var n;
      var r = this.cropBoxData;
      var i = this.options.aspectRatio;
      if (this.ready && this.cropped && !this.disabled && B(t)) {
        if (N(t.left)) {
          r.left = t.left;
        }
        if (N(t.top)) {
          r.top = t.top;
        }
        if (N(t.width) && t.width !== r.width) {
          e = true;
          r.width = t.width;
        }
        if (N(t.height) && t.height !== r.height) {
          n = true;
          r.height = t.height;
        }
        if (i) {
          if (e) {
            r.height = r.width / i;
          } else if (n) {
            r.width = r.height * i;
          }
        }
        this.renderCropBox();
      }
      return this;
    },
    getCroppedCanvas: function (t = {}) {
      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }
      var e = this.canvasData;
      var n = dt(this.image, this.imageData, e, t);
      if (!this.cropped) {
        return n;
      }
      var r = this.getData();
      var i = r.x;
      var o = r.y;
      var a = r.width;
      var c = r.height;
      var u = n.width / Math.floor(e.naturalWidth);
      if (u !== 1) {
        i *= u;
        o *= u;
        a *= u;
        c *= u;
      }
      var l = a / c;
      var h = ft({
        aspectRatio: l,
        width: t.maxWidth || Infinity,
        height: t.maxHeight || Infinity
      });
      var p = ft({
        aspectRatio: l,
        width: t.minWidth || 0,
        height: t.minHeight || 0
      }, "cover");
      var f = ft({
        aspectRatio: l,
        width: t.width || (u !== 1 ? n.width : a),
        height: t.height || (u !== 1 ? n.height : c)
      });
      var d = f.width;
      var g = f.height;
      d = Math.min(h.width, Math.max(p.width, d));
      g = Math.min(h.height, Math.max(p.height, g));
      var m = document.createElement("canvas");
      var y = m.getContext("2d");
      m.width = $(d);
      m.height = $(g);
      y.fillStyle = t.fillColor || "transparent";
      y.fillRect(0, 0, d, g);
      var b = t.imageSmoothingEnabled;
      var v = b === undefined || b;
      var w = t.imageSmoothingQuality;
      y.imageSmoothingEnabled = v;
      if (w) {
        y.imageSmoothingQuality = w;
      }
      var x;
      var _;
      var T;
      var E;
      var O;
      var S;
      var I = n.width;
      var A = n.height;
      var k = i;
      var C = o;
      if (k <= -a || k > I) {
        k = 0;
        x = 0;
        T = 0;
        O = 0;
      } else if (k <= 0) {
        T = -k;
        k = 0;
        O = x = Math.min(I, a + k);
      } else if (k <= I) {
        T = 0;
        O = x = Math.min(a, I - k);
      }
      if (x <= 0 || C <= -c || C > A) {
        C = 0;
        _ = 0;
        E = 0;
        S = 0;
      } else if (C <= 0) {
        E = -C;
        C = 0;
        S = _ = Math.min(A, c + C);
      } else if (C <= A) {
        E = 0;
        S = _ = Math.min(c, A - C);
      }
      var D = [k, C, x, _];
      if (O > 0 && S > 0) {
        var j = d / a;
        D.push(T * j, E * j, O * j, S * j);
      }
      y.drawImage.apply(y, [n].concat(s(D.map(function (t) {
        return Math.floor($(t));
      }))));
      return m;
    },
    setAspectRatio: function (t) {
      var e = this.options;
      if (!this.disabled && !L(t)) {
        e.aspectRatio = Math.max(0, t) || NaN;
        if (this.ready) {
          this.initCropBox();
          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }
      return this;
    },
    setDragMode: function (t) {
      var e = this.options;
      var n = this.dragBox;
      var r = this.face;
      if (this.ready && !this.disabled) {
        var i = t === "crop";
        var o = e.movable && t === "move";
        t = i || o ? t : "none";
        e.dragMode = t;
        tt(n, v, t);
        K(n, p, i);
        K(n, b, o);
        if (!e.cropBoxMovable) {
          tt(r, v, t);
          K(r, p, i);
          K(r, b, o);
        }
      }
      return this;
    }
  };
  var Et = u.Cropper;
  var Ot = function () {
    function t(e, n = {}) {
      r(this, t);
      if (!e || !C.test(e.tagName)) {
        throw new Error("The first argument is required and must be an <img> or <canvas> element.");
      }
      this.element = e;
      this.options = q({}, D, B(n) && n);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }
    var e;
    var n;
    var o;
    e = t;
    o = [{
      key: "noConflict",
      value: function () {
        window.Cropper = Et;
        return t;
      }
    }, {
      key: "setDefaults",
      value: function (t) {
        q(D, B(t) && t);
      }
    }];
    if (n = [{
      key: "init",
      value: function () {
        var t;
        var e = this.element;
        var n = e.tagName.toLowerCase();
        if (!e.cropper) {
          e.cropper = this;
          if (n === "img") {
            this.isImg = true;
            t = e.getAttribute("src") || "";
            this.originalUrl = t;
            if (!t) {
              return;
            }
            t = e.src;
          } else if (n === "canvas" && window.HTMLCanvasElement) {
            t = e.toDataURL();
          }
          this.load(t);
        }
      }
    }, {
      key: "load",
      value: function (t) {
        var e = this;
        if (t) {
          this.url = t;
          this.imageData = {};
          var n = this.element;
          var r = this.options;
          if (!r.rotatable && !r.scalable) {
            r.checkOrientation = false;
          }
          if (r.checkOrientation && window.ArrayBuffer) {
            if (A.test(t)) {
              if (k.test(t)) {
                this.read((i = t.replace(mt, ""), o = atob(i), s = new ArrayBuffer(o.length), z(a = new Uint8Array(s), function (t, e) {
                  a[e] = o.charCodeAt(e);
                }), s));
              } else {
                this.clone();
              }
            } else {
              var i;
              var o;
              var s;
              var a;
              var c = new XMLHttpRequest();
              var u = this.clone.bind(this);
              this.reloading = true;
              this.xhr = c;
              c.onabort = u;
              c.onerror = u;
              c.ontimeout = u;
              c.onprogress = function () {
                if (c.getResponseHeader("content-type") !== "image/jpeg") {
                  c.abort();
                }
              };
              c.onload = function () {
                e.read(c.response);
              };
              c.onloadend = function () {
                e.reloading = false;
                e.xhr = null;
              };
              if (r.checkCrossOrigin && ut(t) && n.crossOrigin) {
                t = lt(t);
              }
              c.open("GET", t, true);
              c.responseType = "arraybuffer";
              c.withCredentials = n.crossOrigin === "use-credentials";
              c.send();
            }
          } else {
            this.clone();
          }
        }
      }
    }, {
      key: "read",
      value: function (t) {
        var e = this.options;
        var n = this.imageData;
        var r = yt(t);
        var i = 0;
        var o = 1;
        var s = 1;
        if (r > 1) {
          this.url = function (t, e) {
            var n = [];
            for (var r = new Uint8Array(t); r.length > 0;) {
              n.push(gt.apply(null, W(r.subarray(0, 8192))));
              r = r.subarray(8192);
            }
            return `data:${e};base64,${btoa(n.join(""))}`;
          }(t, "image/jpeg");
          var a = function (t) {
            var e = 0;
            var n = 1;
            var r = 1;
            switch (t) {
              case 2:
                n = -1;
                break;
              case 3:
                e = -180;
                break;
              case 4:
                r = -1;
                break;
              case 5:
                e = 90;
                r = -1;
                break;
              case 6:
                e = 90;
                break;
              case 7:
                e = 90;
                n = -1;
                break;
              case 8:
                e = -90;
            }
            return {
              rotate: e,
              scaleX: n,
              scaleY: r
            };
          }(r);
          i = a.rotate;
          o = a.scaleX;
          s = a.scaleY;
        }
        if (e.rotatable) {
          n.rotate = i;
        }
        if (e.scalable) {
          n.scaleX = o;
          n.scaleY = s;
        }
        this.clone();
      }
    }, {
      key: "clone",
      value: function () {
        var t = this.element;
        var e = this.url;
        var n = t.crossOrigin;
        var r = e;
        if (this.options.checkCrossOrigin && ut(e)) {
          n ||= "anonymous";
          r = lt(e);
        }
        this.crossOrigin = n;
        this.crossOriginUrl = r;
        var i = document.createElement("img");
        if (n) {
          i.crossOrigin = n;
        }
        i.src = r || e;
        i.alt = t.alt || "The image to crop";
        this.image = i;
        i.onload = this.start.bind(this);
        i.onerror = this.stop.bind(this);
        G(i, g);
        t.parentNode.insertBefore(i, t.nextSibling);
      }
    }, {
      key: "start",
      value: function () {
        var t = this;
        var e = this.image;
        e.onload = null;
        e.onerror = null;
        this.sizing = true;
        var n = u.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(u.navigator.userAgent);
        function r(e, n) {
          q(t.imageData, {
            naturalWidth: e,
            naturalHeight: n,
            aspectRatio: e / n
          });
          t.initialImageData = q({}, t.imageData);
          t.sizing = false;
          t.sized = true;
          t.build();
        }
        if (!e.naturalWidth || n) {
          var i = document.createElement("img");
          var o = document.body || document.documentElement;
          this.sizingImage = i;
          i.onload = function () {
            r(i.width, i.height);
            if (!n) {
              o.removeChild(i);
            }
          };
          i.src = e.src;
          if (!n) {
            i.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
            o.appendChild(i);
          }
        } else {
          r(e.naturalWidth, e.naturalHeight);
        }
      }
    }, {
      key: "stop",
      value: function () {
        var t = this.image;
        t.onload = null;
        t.onerror = null;
        t.parentNode.removeChild(t);
        this.image = null;
      }
    }, {
      key: "build",
      value: function () {
        if (this.sized && !this.ready) {
          var t = this.element;
          var e = this.options;
          var n = this.image;
          var r = t.parentNode;
          var i = document.createElement("div");
          i.innerHTML = "<div class=\"cropper-container\" touch-action=\"none\"><div class=\"cropper-wrap-box\"><div class=\"cropper-canvas\"></div></div><div class=\"cropper-drag-box\"></div><div class=\"cropper-crop-box\"><span class=\"cropper-view-box\"></span><span class=\"cropper-dashed dashed-h\"></span><span class=\"cropper-dashed dashed-v\"></span><span class=\"cropper-center\"></span><span class=\"cropper-face\"></span><span class=\"cropper-line line-e\" data-cropper-action=\"e\"></span><span class=\"cropper-line line-n\" data-cropper-action=\"n\"></span><span class=\"cropper-line line-w\" data-cropper-action=\"w\"></span><span class=\"cropper-line line-s\" data-cropper-action=\"s\"></span><span class=\"cropper-point point-e\" data-cropper-action=\"e\"></span><span class=\"cropper-point point-n\" data-cropper-action=\"n\"></span><span class=\"cropper-point point-w\" data-cropper-action=\"w\"></span><span class=\"cropper-point point-s\" data-cropper-action=\"s\"></span><span class=\"cropper-point point-ne\" data-cropper-action=\"ne\"></span><span class=\"cropper-point point-nw\" data-cropper-action=\"nw\"></span><span class=\"cropper-point point-sw\" data-cropper-action=\"sw\"></span><span class=\"cropper-point point-se\" data-cropper-action=\"se\"></span></div></div>";
          var o = i.querySelector(`.cropper-container`);
          var s = o.querySelector(`.cropper-canvas`);
          var a = o.querySelector(`.cropper-drag-box`);
          var c = o.querySelector(`.cropper-crop-box`);
          var u = c.querySelector(`.cropper-face`);
          this.container = r;
          this.cropper = o;
          this.canvas = s;
          this.dragBox = a;
          this.cropBox = c;
          this.viewBox = o.querySelector(`.cropper-view-box`);
          this.face = u;
          s.appendChild(n);
          G(t, d);
          r.insertBefore(o, t.nextSibling);
          if (!this.isImg) {
            X(n, g);
          }
          this.initPreview();
          this.bind();
          e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN;
          e.aspectRatio = Math.max(0, e.aspectRatio) || NaN;
          e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0;
          G(c, d);
          if (!e.guides) {
            G(c.getElementsByClassName(`cropper-dashed`), d);
          }
          if (!e.center) {
            G(c.getElementsByClassName(`cropper-center`), d);
          }
          if (e.background) {
            G(o, `cropper-bg`);
          }
          if (!e.highlight) {
            G(u, m);
          }
          if (e.cropBoxMovable) {
            G(u, b);
            tt(u, v, "all");
          }
          if (!e.cropBoxResizable) {
            G(c.getElementsByClassName(`cropper-line`), d);
            G(c.getElementsByClassName(`cropper-point`), d);
          }
          this.render();
          this.ready = true;
          this.setDragMode(e.dragMode);
          if (e.autoCrop) {
            this.crop();
          }
          this.setData(e.data);
          if (U(e.ready)) {
            it(t, "ready", e.ready, {
              once: true
            });
          }
          ot(t, "ready");
        }
      }
    }, {
      key: "unbuild",
      value: function () {
        if (this.ready) {
          this.ready = false;
          this.unbind();
          this.resetPreview();
          this.cropper.parentNode.removeChild(this.cropper);
          X(this.element, d);
        }
      }
    }, {
      key: "uncreate",
      value: function () {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
    }]) {
      i(e.prototype, n);
    }
    if (o) {
      i(e, o);
    }
    return t;
  }();
  q(Ot.prototype, bt, vt, wt, xt, _t, Tt);
  return Ot;
}();