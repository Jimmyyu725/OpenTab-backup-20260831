module.exports = o;
var r = require("./69.js").EventEmitter;
function o() {
  r.call(this);
}
require("./46.js")(o, r);
o.Readable = require("./136.js");
o.Writable = require("./326.js");
o.Duplex = require("./327.js");
o.Transform = require("./328.js");
o.PassThrough = require("./329.js");
o.Stream = o;
o.prototype.pipe = function (t, e) {
  var n = this;
  function o(e) {
    if (t.writable && t.write(e) === false && n.pause) {
      n.pause();
    }
  }
  function i() {
    if (n.readable && n.resume) {
      n.resume();
    }
  }
  n.on("data", o);
  t.on("drain", i);
  if (!t._isStdio && (!e || e.end !== false)) {
    n.on("end", a);
    n.on("close", c);
  }
  var s = false;
  function a() {
    if (!s) {
      s = true;
      t.end();
    }
  }
  function c() {
    if (!s) {
      s = true;
      if (typeof t.destroy == "function") {
        t.destroy();
      }
    }
  }
  function u(t) {
    f();
    if (r.listenerCount(this, "error") === 0) {
      throw t;
    }
  }
  function f() {
    n.removeListener("data", o);
    t.removeListener("drain", i);
    n.removeListener("end", a);
    n.removeListener("close", c);
    n.removeListener("error", u);
    t.removeListener("error", u);
    n.removeListener("end", f);
    n.removeListener("close", f);
    t.removeListener("close", f);
  }
  n.on("error", u);
  t.on("error", u);
  n.on("end", f);
  n.on("close", f);
  t.on("close", f);
  t.emit("pipe", n);
  return t;
};