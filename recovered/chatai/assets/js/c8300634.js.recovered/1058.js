export function f(n, r, e, t = 0, u = false) {
  var o = r.schedule(function () {
    e();
    if (u) {
      n.add(this.schedule(null, t));
    } else {
      this.unsubscribe();
    }
  }, t);
  n.add(o);
  if (!u) {
    return o;
  }
}