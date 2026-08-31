function t() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);
  for (let a = 0; a < arguments.length; a++) {
    this.define(arguments[a]);
  }
  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}
t.prototype.define = function (a, i) {
  for (let p in a) {
    let t = a[p].map(function (a) {
      return a.toLowerCase();
    });
    p = p.toLowerCase();
    for (let a = 0; a < t.length; a++) {
      const n = t[a];
      if (n[0] !== "*") {
        if (!i && n in this._types) {
          throw new Error("Attempt to change mapping for \"" + n + "\" extension from \"" + this._types[n] + "\" to \"" + p + "\". Pass `force=true` to allow this, otherwise remove \"" + n + "\" from the list of extensions for \"" + p + "\".");
        }
        this._types[n] = p;
      }
    }
    if (i || !this._extensions[p]) {
      const a = t[0];
      this._extensions[p] = a[0] !== "*" ? a : a.substr(1);
    }
  }
};
t.prototype.getType = function (a) {
  let i = (a = String(a)).replace(/^.*[/\\]/, "").toLowerCase();
  let p = i.replace(/^.*\./, "").toLowerCase();
  let t = i.length < a.length;
  return (p.length < i.length - 1 || !t) && this._types[p] || null;
};
t.prototype.getExtension = function (a) {
  return (a = /^\s*([^;\s]*)/.test(a) && RegExp.$1) && this._extensions[a.toLowerCase()] || null;
};
module.exports = t;