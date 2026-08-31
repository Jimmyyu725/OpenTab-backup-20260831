var o = require(/*webcrack:missing*/"./7268.js");
var n = require(/*webcrack:missing*/"./2244.js");
const i = n._f && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype;
const s = "event";
const a = "observer";
function l(e, t) {
  if (!e.length) {
    return;
  }
  const r = e.indexOf(t);
  if (r > -1) {
    return e.splice(r, 1);
  } else {
    return undefined;
  }
}
function d(e, t) {
  if (e.tagName !== "IMG" || !e.getAttribute("data-srcset")) {
    return;
  }
  let r = e.getAttribute("data-srcset");
  const o = e.parentNode.offsetWidth * t;
  let n;
  let i;
  let s;
  r = r.trim().split(",");
  const a = r.map(e => {
    e = e.trim();
    n = e.lastIndexOf(" ");
    if (n === -1) {
      i = e;
      s = 999998;
    } else {
      i = e.substr(0, n);
      s = parseInt(e.substr(n + 1, e.length - n - 2), 10);
    }
    return [s, i];
  });
  a.sort((e, t) => {
    if (e[0] < t[0]) {
      return 1;
    }
    if (e[0] > t[0]) {
      return -1;
    }
    if (e[0] === t[0]) {
      if (t[1].indexOf(".webp", t[1].length - 5) !== -1) {
        return 1;
      }
      if (e[1].indexOf(".webp", e[1].length - 5) !== -1) {
        return -1;
      }
    }
    return 0;
  });
  let l;
  let d = "";
  for (let e = 0; e < a.length; e++) {
    l = a[e];
    d = l[1];
    const t = a[e + 1];
    if (t && t[0] < o) {
      d = l[1];
      break;
    }
    if (!t) {
      d = l[1];
      break;
    }
  }
  return d;
}
const c = (e = 1) => n._f && window.devicePixelRatio || e;
function u() {
  if (!n._f) {
    return false;
  }
  let e = true;
  try {
    const t = document.createElement("canvas");
    if (t.getContext && t.getContext("2d")) {
      e = t.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
  } catch (t) {
    e = false;
  }
  return e;
}
function h(e, t, r) {
  e.addEventListener(t, r, {
    capture: false,
    passive: true
  });
}
function p(e, t, r) {
  e.removeEventListener(t, r, false);
}
const v = (e, t, r) => {
  const o = new Image();
  if (!e || !e.src) {
    return r(new Error("image src is required"));
  }
  o.src = e.src;
  if (e.cors) {
    o.crossOrigin = e.cors;
  }
  o.onload = () => t({
    naturalHeight: o.naturalHeight,
    naturalWidth: o.naturalWidth,
    src: o.src
  });
  o.onerror = e => r(e);
};
class f {
  constructor({
    max: e
  }) {
    this.options = {
      max: e || 100
    };
    this.caches = [];
  }
  has(e) {
    return this.caches.indexOf(e) > -1;
  }
  add(e) {
    if (!this.has(e)) {
      this.caches.push(e);
      if (this.caches.length > this.options.max) {
        this.free();
      }
    }
  }
  free() {
    this.caches.shift();
  }
}
var m = require("./741.js");
var g = require("./361.js");
class b {
  constructor({
    el: e,
    src: t,
    error: r,
    loading: o,
    bindType: n,
    $parent: i,
    options: s,
    cors: a,
    elRenderer: l,
    imageCache: d
  }) {
    this.el = e;
    this.src = t;
    this.error = r;
    this.loading = o;
    this.bindType = n;
    this.attempt = 0;
    this.cors = a;
    this.naturalHeight = 0;
    this.naturalWidth = 0;
    this.options = s;
    this.$parent = i;
    this.elRenderer = l;
    this.imageCache = d;
    this.performanceData = {
      loadStart: 0,
      loadEnd: 0
    };
    this.filter();
    this.initState();
    this.render("loading", false);
  }
  initState() {
    if ("dataset" in this.el) {
      this.el.dataset.src = this.src;
    } else {
      this.el.setAttribute("data-src", this.src);
    }
    this.state = {
      loading: false,
      error: false,
      loaded: false,
      rendered: false
    };
  }
  record(e) {
    this.performanceData[e] = Date.now();
  }
  update({
    src: e,
    loading: t,
    error: r
  }) {
    const o = this.src;
    this.src = e;
    this.loading = t;
    this.error = r;
    this.filter();
    if (o !== this.src) {
      this.attempt = 0;
      this.initState();
    }
  }
  checkInView() {
    const e = (0, n.EL)(this.el);
    return e.top < window.innerHeight * this.options.preLoad && e.bottom > this.options.preLoadTop && e.left < window.innerWidth * this.options.preLoad && e.right > 0;
  }
  filter() {
    Object.keys(this.options.filter).forEach(e => {
      this.options.filter[e](this, this.options);
    });
  }
  renderLoading(e) {
    this.state.loading = true;
    v({
      src: this.loading,
      cors: this.cors
    }, () => {
      this.render("loading", false);
      this.state.loading = false;
      e();
    }, () => {
      e();
      this.state.loading = false;
    });
  }
  load(e = g.ZT) {
    if (this.attempt > this.options.attempt - 1 && this.state.error) {
      e();
    } else if (!this.state.rendered || !this.state.loaded) {
      if (this.imageCache.has(this.src)) {
        this.state.loaded = true;
        this.render("loaded", true);
        this.state.rendered = true;
        return e();
      } else {
        this.renderLoading(() => {
          var t;
          var r;
          this.attempt++;
          if ((r = (t = this.options.adapter).beforeLoad) != null) {
            r.call(t, this, this.options);
          }
          this.record("loadStart");
          v({
            src: this.src,
            cors: this.cors
          }, t => {
            this.naturalHeight = t.naturalHeight;
            this.naturalWidth = t.naturalWidth;
            this.state.loaded = true;
            this.state.error = false;
            this.record("loadEnd");
            this.render("loaded", false);
            this.state.rendered = true;
            this.imageCache.add(this.src);
            e();
          }, e => {
            this.options.silent;
            this.state.error = true;
            this.state.loaded = false;
            this.render("error", false);
          });
        });
        return;
      }
    }
  }
  render(e, t) {
    this.elRenderer(this, e, t);
  }
  performance() {
    let e = "loading";
    let t = 0;
    if (this.state.loaded) {
      e = "loaded";
      t = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1000;
    }
    if (this.state.error) {
      e = "error";
    }
    return {
      src: this.src,
      state: e,
      time: t
    };
  }
  $destroy() {
    this.el = null;
    this.src = null;
    this.error = null;
    this.loading = null;
    this.bindType = null;
    this.attempt = 0;
  }
}
const y = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const w = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"];
const S = {
  rootMargin: "0px",
  threshold: 0
};
function x() {
  return class {
    constructor({
      preLoad: e,
      error: t,
      throttleWait: r,
      preLoadTop: o,
      dispatchEvent: n,
      loading: i,
      attempt: l,
      silent: d = true,
      scale: h,
      listenEvents: p,
      filter: v,
      adapter: m,
      observer: g,
      observerOptions: b
    }) {
      this.mode = s;
      this.listeners = [];
      this.targetIndex = 0;
      this.targets = [];
      this.options = {
        silent: d,
        dispatchEvent: !!n,
        throttleWait: r || 200,
        preLoad: e || 1.3,
        preLoadTop: o || 0,
        error: t || y,
        loading: i || y,
        attempt: l || 3,
        scale: h || c(h),
        ListenEvents: p || w,
        supportWebp: u(),
        filter: v || {},
        adapter: m || {},
        observer: !!g,
        observerOptions: b || S
      };
      this.initEvent();
      this.imageCache = new f({
        max: 200
      });
      this.lazyLoadHandler = function (e, t) {
        let r = null;
        let o = 0;
        return function (...n) {
          if (r) {
            return;
          }
          const i = () => {
            o = Date.now();
            r = false;
            e.apply(this, n);
          };
          if (Date.now() - o >= t) {
            i();
          } else {
            r = setTimeout(i, t);
          }
        };
      }(this.lazyLoadHandler.bind(this), this.options.throttleWait);
      this.setMode(this.options.observer ? a : s);
    }
    config(e = {}) {
      Object.assign(this.options, e);
    }
    performance() {
      return this.listeners.map(e => e.performance());
    }
    addLazyBox(e) {
      this.listeners.push(e);
      if (n._f) {
        this.addListenerTarget(window);
        if (this.observer) {
          this.observer.observe(e.el);
        }
        if (e.$el && e.$el.parentNode) {
          this.addListenerTarget(e.$el.parentNode);
        }
      }
    }
    add(e, t, r) {
      if (this.listeners.some(t => t.el === e)) {
        this.update(e, t);
        return (0, o.Y3)(this.lazyLoadHandler);
      }
      const i = this.valueFormatter(t.value);
      let {
        src: s
      } = i;
      (0, o.Y3)(() => {
        s = d(e, this.options.scale) || s;
        if (this.observer) {
          this.observer.observe(e);
        }
        const a = Object.keys(t.modifiers)[0];
        let l;
        if (a) {
          l = r.context.$refs[a];
          l = l ? l.$el || l : document.getElementById(a);
        }
        l ||= (0, n.rP)(e);
        const c = new b({
          bindType: t.arg,
          $parent: l,
          el: e,
          src: s,
          loading: i.loading,
          error: i.error,
          cors: i.cors,
          elRenderer: this.elRenderer.bind(this),
          options: this.options,
          imageCache: this.imageCache
        });
        this.listeners.push(c);
        if (n._f) {
          this.addListenerTarget(window);
          this.addListenerTarget(l);
        }
        this.lazyLoadHandler();
        (0, o.Y3)(() => this.lazyLoadHandler());
      });
    }
    update(e, t, r) {
      const n = this.valueFormatter(t.value);
      let {
        src: i
      } = n;
      i = d(e, this.options.scale) || i;
      const s = this.listeners.find(t => t.el === e);
      if (s) {
        s.update({
          src: i,
          error: n.error,
          loading: n.loading
        });
      } else {
        this.add(e, t, r);
      }
      if (this.observer) {
        this.observer.unobserve(e);
        this.observer.observe(e);
      }
      this.lazyLoadHandler();
      (0, o.Y3)(() => this.lazyLoadHandler());
    }
    remove(e) {
      if (!e) {
        return;
      }
      if (this.observer) {
        this.observer.unobserve(e);
      }
      const t = this.listeners.find(t => t.el === e);
      if (t) {
        this.removeListenerTarget(t.$parent);
        this.removeListenerTarget(window);
        l(this.listeners, t);
        t.$destroy();
      }
    }
    removeComponent(e) {
      if (e) {
        l(this.listeners, e);
        if (this.observer) {
          this.observer.unobserve(e.el);
        }
        if (e.$parent && e.$el.parentNode) {
          this.removeListenerTarget(e.$el.parentNode);
        }
        this.removeListenerTarget(window);
      }
    }
    setMode(e) {
      if (!i && e === a) {
        e = s;
      }
      this.mode = e;
      if (e === s) {
        if (this.observer) {
          this.listeners.forEach(e => {
            this.observer.unobserve(e.el);
          });
          this.observer = null;
        }
        this.targets.forEach(e => {
          this.initListen(e.el, true);
        });
      } else {
        this.targets.forEach(e => {
          this.initListen(e.el, false);
        });
        this.initIntersectionObserver();
      }
    }
    addListenerTarget(e) {
      if (!e) {
        return;
      }
      let t = this.targets.find(t => t.el === e);
      if (t) {
        t.childrenCount++;
      } else {
        t = {
          el: e,
          id: ++this.targetIndex,
          childrenCount: 1,
          listened: true
        };
        if (this.mode === s) {
          this.initListen(t.el, true);
        }
        this.targets.push(t);
      }
      return this.targetIndex;
    }
    removeListenerTarget(e) {
      this.targets.forEach((t, r) => {
        if (t.el === e) {
          t.childrenCount--;
          if (!t.childrenCount) {
            this.initListen(t.el, false);
            this.targets.splice(r, 1);
            t = null;
          }
        }
      });
    }
    initListen(e, t) {
      this.options.ListenEvents.forEach(r => (t ? h : p)(e, r, this.lazyLoadHandler));
    }
    initEvent() {
      this.Event = {
        listeners: {
          loading: [],
          loaded: [],
          error: []
        }
      };
      this.$on = (e, t) => {
        this.Event.listeners[e] ||= [];
        this.Event.listeners[e].push(t);
      };
      this.$once = (e, t) => {
        const r = (...o) => {
          this.$off(e, r);
          t.apply(this, o);
        };
        this.$on(e, r);
      };
      this.$off = (e, t) => {
        if (t) {
          l(this.Event.listeners[e], t);
        } else {
          if (!this.Event.listeners[e]) {
            return;
          }
          this.Event.listeners[e].length = 0;
        }
      };
      this.$emit = (e, t, r) => {
        if (this.Event.listeners[e]) {
          this.Event.listeners[e].forEach(e => e(t, r));
        }
      };
    }
    lazyLoadHandler() {
      const e = [];
      this.listeners.forEach(t => {
        if (!t.el || !t.el.parentNode) {
          e.push(t);
        }
        if (t.checkInView()) {
          t.load();
        }
      });
      e.forEach(e => {
        l(this.listeners, e);
        e.$destroy();
      });
    }
    initIntersectionObserver() {
      if (i) {
        this.observer = new IntersectionObserver(this.observerHandler.bind(this), this.options.observerOptions);
        if (this.listeners.length) {
          this.listeners.forEach(e => {
            this.observer.observe(e.el);
          });
        }
      }
    }
    observerHandler(e) {
      e.forEach(e => {
        if (e.isIntersecting) {
          this.listeners.forEach(t => {
            if (t.el === e.target) {
              if (t.state.loaded) {
                return this.observer.unobserve(t.el);
              }
              t.load();
            }
          });
        }
      });
    }
    elRenderer(e, t, r) {
      if (!e.el) {
        return;
      }
      const {
        el: o,
        bindType: n
      } = e;
      let i;
      switch (t) {
        case "loading":
          i = e.loading;
          break;
        case "error":
          i = e.error;
          break;
        default:
          ({
            src: i
          } = e);
      }
      if (n) {
        o.style[n] = "url(\"" + i + "\")";
      } else if (o.getAttribute("src") !== i) {
        o.setAttribute("src", i);
      }
      o.setAttribute("lazy", t);
      this.$emit(t, e, r);
      if (this.options.adapter[t]) {
        this.options.adapter[t](e, this.options);
      }
      if (this.options.dispatchEvent) {
        const r = new CustomEvent(t, {
          detail: e
        });
        o.dispatchEvent(r);
      }
    }
    valueFormatter(e) {
      let t = e;
      let {
        loading: r,
        error: o
      } = this.options;
      if ((0, m.Kn)(e)) {
        ({
          src: t
        } = e);
        r = e.loading || this.options.loading;
        o = e.error || this.options.error;
      }
      return {
        src: t,
        loading: r,
        error: o
      };
    }
  };
}
var L = e => ({
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["show"],
  render() {
    return (0, o.h)(this.tag, this.show && this.$slots.default ? this.$slots.default() : null);
  },
  data: () => ({
    el: null,
    state: {
      loaded: false
    },
    show: false
  }),
  mounted() {
    this.el = this.$el;
    e.addLazyBox(this);
    e.lazyLoadHandler();
  },
  beforeUnmount() {
    e.removeComponent(this);
  },
  methods: {
    checkInView() {
      const t = (0, n.EL)(this.$el);
      return n._f && t.top < window.innerHeight * e.options.preLoad && t.bottom > 0 && t.left < window.innerWidth * e.options.preLoad && t.right > 0;
    },
    load() {
      this.show = true;
      this.state.loaded = true;
      this.$emit("show", this);
    },
    destroy() {
      return this.$destroy;
    }
  }
});
const O = {
  selector: "img"
};
class A {
  constructor({
    el: e,
    binding: t,
    vnode: r,
    lazy: o
  }) {
    this.el = null;
    this.vnode = r;
    this.binding = t;
    this.options = {};
    this.lazy = o;
    this.queue = [];
    this.update({
      el: e,
      binding: t
    });
  }
  update({
    el: e,
    binding: t
  }) {
    this.el = e;
    this.options = Object.assign({}, O, t.value);
    this.getImgs().forEach(e => {
      this.lazy.add(e, Object.assign({}, this.binding, {
        value: {
          src: "dataset" in e ? e.dataset.src : e.getAttribute("data-src"),
          error: ("dataset" in e ? e.dataset.error : e.getAttribute("data-error")) || this.options.error,
          loading: ("dataset" in e ? e.dataset.loading : e.getAttribute("data-loading")) || this.options.loading
        }
      }), this.vnode);
    });
  }
  getImgs() {
    return Array.from(this.el.querySelectorAll(this.options.selector));
  }
  clear() {
    this.getImgs().forEach(e => this.lazy.remove(e));
    this.vnode = null;
    this.binding = null;
    this.lazy = null;
  }
}
class z {
  constructor({
    lazy: e
  }) {
    this.lazy = e;
    this.queue = [];
  }
  bind(e, t, r) {
    const o = new A({
      el: e,
      binding: t,
      vnode: r,
      lazy: this.lazy
    });
    this.queue.push(o);
  }
  update(e, t, r) {
    const o = this.queue.find(t => t.el === e);
    if (o) {
      o.update({
        el: e,
        binding: t,
        vnode: r
      });
    }
  }
  unbind(e) {
    const t = this.queue.find(t => t.el === e);
    if (t) {
      t.clear();
      l(this.queue, t);
    }
  }
}
var E = e => ({
  props: {
    src: [String, Object],
    tag: {
      type: String,
      default: "img"
    }
  },
  render(e) {
    return e(this.tag, {
      attrs: {
        src: this.renderSrc
      }
    }, this.$slots.default);
  },
  data: () => ({
    el: null,
    options: {
      src: "",
      error: "",
      loading: "",
      attempt: e.options.attempt
    },
    state: {
      loaded: false,
      error: false,
      attempt: 0
    },
    renderSrc: ""
  }),
  watch: {
    src() {
      this.init();
      e.addLazyBox(this);
      e.lazyLoadHandler();
    }
  },
  created() {
    this.init();
    this.renderSrc = this.options.loading;
  },
  mounted() {
    this.el = this.$el;
    e.addLazyBox(this);
    e.lazyLoadHandler();
  },
  beforeUnmount() {
    e.removeComponent(this);
  },
  methods: {
    init() {
      const {
        src: t,
        loading: r,
        error: o
      } = e.valueFormatter(this.src);
      this.state.loaded = false;
      this.options.src = t;
      this.options.error = o;
      this.options.loading = r;
      this.renderSrc = this.options.loading;
    },
    checkInView() {
      const t = (0, n.EL)(this.$el);
      return t.top < window.innerHeight * e.options.preLoad && t.bottom > 0 && t.left < window.innerWidth * e.options.preLoad && t.right > 0;
    },
    load(e = g.ZT) {
      if (this.state.attempt > this.options.attempt - 1 && this.state.error) {
        e();
        return;
      }
      const {
        src: t
      } = this.options;
      v({
        src: t
      }, ({
        src: e
      }) => {
        this.renderSrc = e;
        this.state.loaded = true;
      }, () => {
        this.state.attempt++;
        this.renderSrc = this.options.error;
        this.state.error = true;
      });
    }
  }
});
export var Z = {
  install(e, t = {}) {
    const r = new (x())(t);
    const o = new z({
      lazy: r
    });
    e.config.globalProperties.$Lazyload = r;
    if (t.lazyComponent) {
      e.component("LazyComponent", L(r));
    }
    if (t.lazyImage) {
      e.component("LazyImage", E(r));
    }
    e.directive("lazy", {
      beforeMount: r.add.bind(r),
      updated: r.update.bind(r),
      unmounted: r.remove.bind(r)
    });
    e.directive("lazy-container", {
      beforeMount: o.bind.bind(o),
      updated: o.update.bind(o),
      unmounted: o.unbind.bind(o)
    });
  }
};