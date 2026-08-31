module.exports = o;
var r = require("./156.js").EventEmitter;
function o() {
  r.call(this);
}
require("./91.js")(o, r);
o.Readable = require("./183.js");
o.Writable = require("./356.js");
o.Duplex = require("./357.js");
o.Transform = require("./358.js");
o.PassThrough = require("./359.js");
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
    n.on("close", u);
  }
  var s = false;
  function a() {
    if (!s) {
      s = true;
      t.end();
    }
  }
  function u() {
    if (!s) {
      s = true;
      if (typeof t.destroy == "function") {
        t.destroy();
      }
    }
  }
  function c(t) {
    f();
    if (r.listenerCount(this, "error") === 0) {
      throw t;
    }
  }
  function f() {
    n.removeListener("data", o);
    t.removeListener("drain", i);
    n.removeListener("end", a);
    n.removeListener("close", u);
    n.removeListener("error", c);
    t.removeListener("error", c);
    n.removeListener("end", f);
    n.removeListener("close", f);
    t.removeListener("close", f);
  }
  n.on("error", c);
  t.on("error", c);
  n.on("end", f);
  n.on("close", f);
  t.on("close", f);
  t.emit("pipe", n);
  return t;
};