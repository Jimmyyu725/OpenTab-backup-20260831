var r = require("./70.js");
function o(t, e) {
  t.emit("error", e);
}
module.exports = {
  destroy: function (t, e) {
    var n = this;
    var i = this._readableState && this._readableState.destroyed;
    var s = this._writableState && this._writableState.destroyed;
    if (i || s) {
      if (e) {
        e(t);
      } else if (!!t && (!this._writableState || !this._writableState.errorEmitted)) {
        r.nextTick(o, this, t);
      }
      return this;
    } else {
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(t || null, function (t) {
        if (!e && t) {
          r.nextTick(o, n, t);
          if (n._writableState) {
            n._writableState.errorEmitted = true;
          }
        } else if (e) {
          e(t);
        }
      });
      return this;
    }
  },
  undestroy: function () {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
};