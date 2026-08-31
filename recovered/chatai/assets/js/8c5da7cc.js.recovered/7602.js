export function P(e, t) {
  if (e) {
    var r = e.indexOf(t);
    if (r >= 0) {
      e.splice(r, 1);
    }
  }
}