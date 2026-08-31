require(/*webcrack:missing*/"./7.js");
import * as t from /*webcrack:missing*/"./0.js";
let o = null;
export const createWorkBox = async () => {
  if (o) {
    return o;
  }
  if (t.s && "serviceWorker" in navigator) {
    const {
      Workbox: n
    } = await require.e(42).then(require.bind(null, 806));
    o = new n("/serviceworker.js?v=1783058950124");
    o.register();
    return o;
  }
  return null;
};