exports.Z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [e, i] of t) {
    n[e] = i;
  }
  return n;
};