(function () {
  if (typeof window != "undefined") {
    var e;
    var t = "ontouchstart" in window;
    document.createTouch ||= function (e, t, n, o, a, i, c) {
      return new r(t, n, {
        pageX: o,
        pageY: a,
        screenX: i,
        screenY: c,
        clientX: o - window.pageXOffset,
        clientY: a - window.pageYOffset
      }, 0, 0);
    };
    document.createTouchList ||= function () {
      var e = o();
      for (var t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      e.length = arguments.length;
      return e;
    };
    Element.prototype.matches ||= Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    Element.prototype.closest ||= function (e) {
      var t = this;
      do {
        if (t.matches(e)) {
          return t;
        }
        t = t.parentElement || t.parentNode;
      } while (t !== null && t.nodeType === 1);
      return null;
    };
    function r(e, t, r, n, o) {
      n = n || 0;
      o = o || 0;
      this.identifier = t;
      this.target = e;
      this.clientX = r.clientX + n;
      this.clientY = r.clientY + o;
      this.screenX = r.screenX + n;
      this.screenY = r.screenY + o;
      this.pageX = r.pageX + n;
      this.pageY = r.pageY + o;
    }
    var n = false;
    s.multiTouchOffset = 75;
    if (!t) {
      new s();
    }
  }
  function o() {
    var e = [];
    e.item = function (e) {
      return this[e] || null;
    };
    e.identifiedTouch = function (e) {
      return this[e + 1] || null;
    };
    return e;
  }
  function a(t) {
    return function (r) {
      var o;
      var a;
      var s;
      if (r.type === "mousedown") {
        n = true;
      }
      if (r.type === "mouseup") {
        n = false;
      }
      if (r.type !== "mousemove" || n) {
        if (r.type === "mousedown" || !e || e && !e.dispatchEvent) {
          e = r.target;
        }
        if (e.closest("[data-no-touch-simulate]") == null) {
          o = t;
          a = r;
          (s = document.createEvent("Event")).initEvent(o, true, true);
          s.altKey = a.altKey;
          s.ctrlKey = a.ctrlKey;
          s.metaKey = a.metaKey;
          s.shiftKey = a.shiftKey;
          s.touches = c(a);
          s.targetTouches = c(a);
          s.changedTouches = i(a);
          e.dispatchEvent(s);
        }
        if (r.type === "mouseup") {
          e = null;
        }
      }
    };
  }
  function i(t) {
    var n = o();
    n.push(new r(e, 1, t, 0, 0));
    return n;
  }
  function c(e) {
    if (e.type === "mouseup") {
      return o();
    } else {
      return i(e);
    }
  }
  function s() {
    window.addEventListener("mousedown", a("touchstart"), true);
    window.addEventListener("mousemove", a("touchmove"), true);
    window.addEventListener("mouseup", a("touchend"), true);
  }
})();