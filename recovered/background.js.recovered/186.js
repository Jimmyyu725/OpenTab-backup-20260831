var r = require("./354.js").Buffer;
var o = r.isEncoding || function (t) {
  switch ((t = "" + t) && t.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function i(t) {
  var e;
  this.encoding = function (t) {
    var e = function (t) {
      if (!t) {
        return "utf8";
      }
      var e;
      while (true) {
        switch (t) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return t;
          default:
            if (e) {
              return;
            }
            t = ("" + t).toLowerCase();
            e = true;
        }
      }
    }(t);
    if (typeof e != "string" && (r.isEncoding === o || !o(t))) {
      throw new Error("Unknown encoding: " + t);
    }
    return e || t;
  }(t);
  switch (this.encoding) {
    case "utf16le":
      this.text = u;
      this.end = c;
      e = 4;
      break;
    case "utf8":
      this.fillLast = a;
      e = 4;
      break;
    case "base64":
      this.text = f;
      this.end = l;
      e = 3;
      break;
    default:
      this.write = h;
      this.end = p;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = r.allocUnsafe(e);
}
function s(t) {
  if (t <= 127) {
    return 0;
  } else if (t >> 5 == 6) {
    return 2;
  } else if (t >> 4 == 14) {
    return 3;
  } else if (t >> 3 == 30) {
    return 4;
  } else if (t >> 6 == 2) {
    return -1;
  } else {
    return -2;
  }
}
function a(t) {
  var e = this.lastTotal - this.lastNeed;
  var n = function (t, e, n) {
    if ((e[0] & 192) != 128) {
      t.lastNeed = 0;
      return "�";
    }
    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) != 128) {
        t.lastNeed = 1;
        return "�";
      }
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) != 128) {
        t.lastNeed = 2;
        return "�";
      }
    }
  }(this, t);
  if (n !== undefined) {
    return n;
  } else if (this.lastNeed <= t.length) {
    t.copy(this.lastChar, e, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  } else {
    t.copy(this.lastChar, e, 0, t.length);
    this.lastNeed -= t.length;
    return;
  }
}
function u(t, e) {
  if ((t.length - e) % 2 == 0) {
    var n = t.toString("utf16le", e);
    if (n) {
      var r = n.charCodeAt(n.length - 1);
      if (r >= 55296 && r <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = t[t.length - 2];
        this.lastChar[1] = t[t.length - 1];
        return n.slice(0, -1);
      }
    }
    return n;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = t[t.length - 1];
  return t.toString("utf16le", e, t.length - 1);
}
function c(t) {
  var e = t && t.length ? this.write(t) : "";
  if (this.lastNeed) {
    var n = this.lastTotal - this.lastNeed;
    return e + this.lastChar.toString("utf16le", 0, n);
  }
  return e;
}
function f(t, e) {
  var n = (t.length - e) % 3;
  if (n === 0) {
    return t.toString("base64", e);
  } else {
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
      this.lastChar[0] = t[t.length - 1];
    } else {
      this.lastChar[0] = t[t.length - 2];
      this.lastChar[1] = t[t.length - 1];
    }
    return t.toString("base64", e, t.length - n);
  }
}
function l(t) {
  var e = t && t.length ? this.write(t) : "";
  if (this.lastNeed) {
    return e + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  } else {
    return e;
  }
}
function h(t) {
  return t.toString(this.encoding);
}
function p(t) {
  if (t && t.length) {
    return this.write(t);
  } else {
    return "";
  }
}
exports.StringDecoder = i;
i.prototype.write = function (t) {
  if (t.length === 0) {
    return "";
  }
  var e;
  var n;
  if (this.lastNeed) {
    if ((e = this.fillLast(t)) === undefined) {
      return "";
    }
    n = this.lastNeed;
    this.lastNeed = 0;
  } else {
    n = 0;
  }
  if (n < t.length) {
    if (e) {
      return e + this.text(t, n);
    } else {
      return this.text(t, n);
    }
  } else {
    return e || "";
  }
};
i.prototype.end = function (t) {
  var e = t && t.length ? this.write(t) : "";
  if (this.lastNeed) {
    return e + "�";
  } else {
    return e;
  }
};
i.prototype.text = function (t, e) {
  var n = function (t, e, n) {
    var r = e.length - 1;
    if (r < n) {
      return 0;
    }
    var o = s(e[r]);
    if (o >= 0) {
      if (o > 0) {
        t.lastNeed = o - 1;
      }
      return o;
    }
    if (--r < n || o === -2) {
      return 0;
    }
    if ((o = s(e[r])) >= 0) {
      if (o > 0) {
        t.lastNeed = o - 2;
      }
      return o;
    }
    if (--r < n || o === -2) {
      return 0;
    }
    if ((o = s(e[r])) >= 0) {
      if (o > 0) {
        if (o === 2) {
          o = 0;
        } else {
          t.lastNeed = o - 3;
        }
      }
      return o;
    }
    return 0;
  }(this, t, e);
  if (!this.lastNeed) {
    return t.toString("utf8", e);
  }
  this.lastTotal = n;
  var r = t.length - (n - this.lastNeed);
  t.copy(this.lastChar, 0, r);
  return t.toString("utf8", e, r);
};
i.prototype.fillLast = function (t) {
  if (this.lastNeed <= t.length) {
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length);
  this.lastNeed -= t.length;
};