export let a = (a = 21) => {
  let i = "";
  let p = crypto.getRandomValues(new Uint8Array(a));
  while (a--) {
    let t = p[a] & 63;
    i += t < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t < 63 ? "_" : "-";
  }
  return i;
};