const n = /^[0-9]+$/;
const r = (t, e) => {
  const r = n.test(t);
  const i = n.test(e);
  if (r && i) {
    t = +t;
    e = +e;
  }
  if (t === e) {
    return 0;
  } else if (r && !i) {
    return -1;
  } else if (i && !r) {
    return 1;
  } else if (t < e) {
    return -1;
  } else {
    return 1;
  }
};
module.exports = {
  compareIdentifiers: r,
  rcompareIdentifiers: (t, e) => r(e, t)
};