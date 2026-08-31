module.exports = i;
var r = require("./156.js").EventEmitter;
function i() {
  r.call(this);
}
require("./91.js")(i, r);
i.Readable = require("./183.js");
i.Writable = require("./356.js");
i.Duplex = require("./357.js");
i.Transform = require("./358.js");
i.PassThrough = require("./359.js");
i.Stream = i;
i.prototype.pipe = function (t, e) {
  var n = this;
  function i(e) {
    if (t.writable && t.write(e) === false && n.pause) {
      n.pause();
    }
  }
  function o() {
    if (n.readable && n.resume) {
      n.resume();
    }
  }
  n.on("data", i);
  t.on("drain", o);
  if (!t._isStdio && (!e || e.end !== false)) {
    n.on("end", s);
    n.on("close", c);
  }
  var a = false;
  function s() {
    if (!a) {
      a = true;
      t.end();
    }
  }
  function c() {
    if (!a) {
      a = true;
      if (typeof t.destroy == "function") {
        t.destroy();
      }
    }
  }
  function u(t) {
    l();
    if (r.listenerCount(this, "error") === 0) {
      throw t;
    }
  }
  function l() {
    n.removeListener("data", i);
    t.removeListener("drain", o);
    n.removeListener("end", s);
    n.removeListener("close", c);
    n.removeListener("error", u);
    t.removeListener("error", u);
    n.removeListener("end", l);
    n.removeListener("close", l);
    t.removeListener("close", l);
  }
  n.on("error", u);
  t.on("error", u);
  n.on("end", l);
  n.on("close", l);
  t.on("close", l);
  t.emit("pipe", n);
  return t;
};