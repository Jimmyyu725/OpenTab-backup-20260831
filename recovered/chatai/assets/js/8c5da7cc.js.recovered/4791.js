var n = require("./4772.js");
var o = null;
export function x(e) {
  if (n.v.useDeprecatedSynchronousErrorHandling) {
    var t = !o;
    if (t) {
      o = {
        errorThrown: false,
        error: null
      };
    }
    e();
    if (t) {
      var r = o;
      var a = r.errorThrown;
      var i = r.error;
      o = null;
      if (a) {
        throw i;
      }
    }
  } else {
    e();
  }
}
export function O(e) {
  if (n.v.useDeprecatedSynchronousErrorHandling && o) {
    o.errorThrown = true;
    o.error = e;
  }
}