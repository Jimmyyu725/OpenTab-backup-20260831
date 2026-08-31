export var $Q = false;
export var $B = true;
export function t8(e, t, r) {
  if (Array.isArray(e)) {
    e.length = Math.max(e.length, t);
    e.splice(t, 1, r);
    return r;
  } else {
    e[t] = r;
    return r;
  }
}