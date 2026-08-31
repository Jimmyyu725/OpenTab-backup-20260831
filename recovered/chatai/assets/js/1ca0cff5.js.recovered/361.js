export function ZT() {}
export const l7 = Object.assign;
export const _f = typeof window != "undefined";
export function U2(e, t) {
  const r = t.split(".");
  let o = e;
  r.forEach(e => {
    o = o[e] ?? "";
  });
  return o;
}
export function ei(e, t, r) {
  return t.reduce((t, o) => {
    if (!r || e[o] !== undefined) {
      t[o] = e[o];
    }
    return t;
  }, {});
}