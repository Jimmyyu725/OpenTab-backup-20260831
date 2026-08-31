var n = typeof globalThis != "undefined" && globalThis || typeof self != "undefined" && self || n !== undefined && n;
var o = "URLSearchParams" in n;
var a = "Symbol" in n && "iterator" in Symbol;
var i = "FileReader" in n && "Blob" in n && function () {
  try {
    new Blob();
    return true;
  } catch (e) {
    return false;
  }
}();
var c = "FormData" in n;
var s = "ArrayBuffer" in n;
if (s) {
  var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
  var u = ArrayBuffer.isView || function (e) {
    return e && l.indexOf(Object.prototype.toString.call(e)) > -1;
  };
}
function f(e) {
  if (typeof e != "string") {
    e = String(e);
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "") {
    throw new TypeError("Invalid character in header field name: \"" + e + "\"");
  }
  return e.toLowerCase();
}
function d(e) {
  if (typeof e != "string") {
    e = String(e);
  }
  return e;
}
function h(e) {
  var t = {
    next: function () {
      var t = e.shift();
      return {
        done: t === undefined,
        value: t
      };
    }
  };
  if (a) {
    t[Symbol.iterator] = function () {
      return t;
    };
  }
  return t;
}
export function Headers(e) {
  this.map = {};
  if (e instanceof Headers) {
    e.forEach(function (e, t) {
      this.append(t, e);
    }, this);
  } else if (Array.isArray(e)) {
    e.forEach(function (e) {
      this.append(e[0], e[1]);
    }, this);
  } else if (e) {
    Object.getOwnPropertyNames(e).forEach(function (t) {
      this.append(t, e[t]);
    }, this);
  }
}
function g(e) {
  if (e.bodyUsed) {
    return Promise.reject(new TypeError("Already read"));
  }
  e.bodyUsed = true;
}
function y(e) {
  return new Promise(function (t, r) {
    e.onload = function () {
      t(e.result);
    };
    e.onerror = function () {
      r(e.error);
    };
  });
}
function v(e) {
  var t = new FileReader();
  var r = y(t);
  t.readAsArrayBuffer(e);
  return r;
}
function b(e) {
  if (e.slice) {
    return e.slice(0);
  }
  var t = new Uint8Array(e.byteLength);
  t.set(new Uint8Array(e));
  return t.buffer;
}
function m() {
  this.bodyUsed = false;
  this._initBody = function (e) {
    var t;
    this.bodyUsed = this.bodyUsed;
    this._bodyInit = e;
    if (e) {
      if (typeof e == "string") {
        this._bodyText = e;
      } else if (i && Blob.prototype.isPrototypeOf(e)) {
        this._bodyBlob = e;
      } else if (c && FormData.prototype.isPrototypeOf(e)) {
        this._bodyFormData = e;
      } else if (o && URLSearchParams.prototype.isPrototypeOf(e)) {
        this._bodyText = e.toString();
      } else if (s && i && (t = e) && DataView.prototype.isPrototypeOf(t)) {
        this._bodyArrayBuffer = b(e.buffer);
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (s && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))) {
        this._bodyArrayBuffer = b(e);
      } else {
        this._bodyText = e = Object.prototype.toString.call(e);
      }
    } else {
      this._bodyText = "";
    }
    if (!this.headers.get("content-type")) {
      if (typeof e == "string") {
        this.headers.set("content-type", "text/plain;charset=UTF-8");
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set("content-type", this._bodyBlob.type);
      } else if (o && URLSearchParams.prototype.isPrototypeOf(e)) {
        this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      }
    }
  };
  if (i) {
    this.blob = function () {
      var e = g(this);
      if (e) {
        return e;
      }
      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      }
      if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      }
      if (this._bodyFormData) {
        throw new Error("could not read FormData body as blob");
      }
      return Promise.resolve(new Blob([this._bodyText]));
    };
    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        var e = g(this);
        return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
      }
      return this.blob().then(v);
    };
  }
  this.text = function () {
    var e;
    var t;
    var r;
    var n = g(this);
    if (n) {
      return n;
    }
    if (this._bodyBlob) {
      e = this._bodyBlob;
      t = new FileReader();
      r = y(t);
      t.readAsText(e);
      return r;
    }
    if (this._bodyArrayBuffer) {
      return Promise.resolve(function (e) {
        for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++) {
          r[n] = String.fromCharCode(t[n]);
        }
        return r.join("");
      }(this._bodyArrayBuffer));
    }
    if (this._bodyFormData) {
      throw new Error("could not read FormData body as text");
    }
    return Promise.resolve(this._bodyText);
  };
  if (c) {
    this.formData = function () {
      return this.text().then(k);
    };
  }
  this.json = function () {
    return this.text().then(JSON.parse);
  };
  return this;
}
Headers.prototype.append = function (e, t) {
  e = f(e);
  t = d(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
};
Headers.prototype.delete = function (e) {
  delete this.map[f(e)];
};
Headers.prototype.get = function (e) {
  e = f(e);
  if (this.has(e)) {
    return this.map[e];
  } else {
    return null;
  }
};
Headers.prototype.has = function (e) {
  return this.map.hasOwnProperty(f(e));
};
Headers.prototype.set = function (e, t) {
  this.map[f(e)] = d(t);
};
Headers.prototype.forEach = function (e, t) {
  for (var r in this.map) {
    if (this.map.hasOwnProperty(r)) {
      e.call(t, this.map[r], r, this);
    }
  }
};
Headers.prototype.keys = function () {
  var e = [];
  this.forEach(function (t, r) {
    e.push(r);
  });
  return h(e);
};
Headers.prototype.values = function () {
  var e = [];
  this.forEach(function (t) {
    e.push(t);
  });
  return h(e);
};
Headers.prototype.entries = function () {
  var e = [];
  this.forEach(function (t, r) {
    e.push([r, t]);
  });
  return h(e);
};
if (a) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}
var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
export function Request(e, t) {
  if (!(this instanceof Request)) {
    throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
  }
  var r;
  var n;
  var o = (t = t || {}).body;
  if (e instanceof Request) {
    if (e.bodyUsed) {
      throw new TypeError("Already read");
    }
    this.url = e.url;
    this.credentials = e.credentials;
    if (!t.headers) {
      this.headers = new Headers(e.headers);
    }
    this.method = e.method;
    this.mode = e.mode;
    this.signal = e.signal;
    if (!o && e._bodyInit != null) {
      o = e._bodyInit;
      e.bodyUsed = true;
    }
  } else {
    this.url = String(e);
  }
  this.credentials = t.credentials || this.credentials || "same-origin";
  if (!!t.headers || !this.headers) {
    this.headers = new Headers(t.headers);
  }
  this.method = (r = t.method || this.method || "GET", n = r.toUpperCase(), w.indexOf(n) > -1 ? n : r);
  this.mode = t.mode || this.mode || null;
  this.signal = t.signal || this.signal;
  this.referrer = null;
  if ((this.method === "GET" || this.method === "HEAD") && o) {
    throw new TypeError("Body not allowed for GET or HEAD requests");
  }
  this._initBody(o);
  if ((this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var a = /([?&])_=[^&]*/;
    if (a.test(this.url)) {
      this.url = this.url.replace(a, "$1_=" + new Date().getTime());
    } else {
      this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
    }
  }
}
function k(e) {
  var t = new FormData();
  e.trim().split("&").forEach(function (e) {
    if (e) {
      var r = e.split("=");
      var n = r.shift().replace(/\+/g, " ");
      var o = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(n), decodeURIComponent(o));
    }
  });
  return t;
}
export function Response(e, t) {
  if (!(this instanceof Response)) {
    throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
  }
  t ||= {};
  this.type = "default";
  this.status = t.status === undefined ? 200 : t.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = t.statusText === undefined ? "" : "" + t.statusText;
  this.headers = new Headers(t.headers);
  this.url = t.url || "";
  this._initBody(e);
}
Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};
m.call(Request.prototype);
m.call(Response.prototype);
Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};
Response.error = function () {
  var e = new Response(null, {
    status: 0,
    statusText: ""
  });
  e.type = "error";
  return e;
};
var E = [301, 302, 303, 307, 308];
Response.redirect = function (e, t) {
  if (E.indexOf(t) === -1) {
    throw new RangeError("Invalid status code");
  }
  return new Response(null, {
    status: t,
    headers: {
      location: e
    }
  });
};
export var DOMException = n.DOMException;
try {
  new DOMException();
} catch (e) {
  (DOMException = function (e, t) {
    this.message = e;
    this.name = t;
    var r = Error(e);
    this.stack = r.stack;
  }).prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}
export function fetch(e, t) {
  return new Promise(function (r, o) {
    var a = new Request(e, t);
    if (a.signal && a.signal.aborted) {
      return o(new DOMException("Aborted", "AbortError"));
    }
    var c = new XMLHttpRequest();
    function l() {
      c.abort();
    }
    c.onload = function () {
      var e;
      var t;
      var n = {
        status: c.status,
        statusText: c.statusText,
        headers: (e = c.getAllResponseHeaders() || "", t = new Headers(), e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function (e) {
          if (e.indexOf("\n") === 0) {
            return e.substr(1, e.length);
          } else {
            return e;
          }
        }).forEach(function (e) {
          var r = e.split(":");
          var n = r.shift().trim();
          if (n) {
            var o = r.join(":").trim();
            t.append(n, o);
          }
        }), t)
      };
      n.url = "responseURL" in c ? c.responseURL : n.headers.get("X-Request-URL");
      var o = "response" in c ? c.response : c.responseText;
      setTimeout(function () {
        r(new Response(o, n));
      }, 0);
    };
    c.onerror = function () {
      setTimeout(function () {
        o(new TypeError("Network request failed"));
      }, 0);
    };
    c.ontimeout = function () {
      setTimeout(function () {
        o(new TypeError("Network request failed"));
      }, 0);
    };
    c.onabort = function () {
      setTimeout(function () {
        o(new DOMException("Aborted", "AbortError"));
      }, 0);
    };
    c.open(a.method, function (e) {
      try {
        if (e === "" && n.location.href) {
          return n.location.href;
        } else {
          return e;
        }
      } catch (t) {
        return e;
      }
    }(a.url), true);
    if (a.credentials === "include") {
      c.withCredentials = true;
    } else if (a.credentials === "omit") {
      c.withCredentials = false;
    }
    if ("responseType" in c) {
      if (i) {
        c.responseType = "blob";
      } else if (s && a.headers.get("Content-Type") && a.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
        c.responseType = "arraybuffer";
      }
    }
    if (!t || typeof t.headers != "object" || t.headers instanceof Headers) {
      a.headers.forEach(function (e, t) {
        c.setRequestHeader(t, e);
      });
    } else {
      Object.getOwnPropertyNames(t.headers).forEach(function (e) {
        c.setRequestHeader(e, d(t.headers[e]));
      });
    }
    if (a.signal) {
      a.signal.addEventListener("abort", l);
      c.onreadystatechange = function () {
        if (c.readyState === 4) {
          a.signal.removeEventListener("abort", l);
        }
      };
    }
    c.send(a._bodyInit === undefined ? null : a._bodyInit);
  });
}
fetch.polyfill = true;
if (!n.fetch) {
  n.fetch = fetch;
  n.Headers = Headers;
  n.Request = Request;
  n.Response = Response;
}