var n = require(/*webcrack:missing*/"./5.js");
var s = n;
require(/*webcrack:missing*/"./7.js");
var _a = require(/*webcrack:missing*/"./0.js");
var o = require("./164.js");
var _c = require(/*webcrack:missing*/"./165.js");
export function a(e) {
  let t = 0;
  switch (e) {
    case "per-hour":
      t = _a.q ? 3600000 : 20000;
      break;
    case "twelve-hour":
      t = 43200000;
      break;
    case "one-day":
      t = 86400000;
  }
  return t;
}
export async function d(e) {
  let t;
  var i;
  t = typeof e == "string" ? await (i = e, fetch(i).then(e => e.blob())) : e;
  return await new s((e, i) => {
    const n = new FileReader();
    n.readAsDataURL(t);
    n.onload = () => {
      e(n.result);
    };
    n.onerror = i;
  });
}
export async function b() {
  const e = await Object(_c.getBingWallpaper)();
  if (e.error) {
    throw e.error;
  }
  const [t] = Object(o.b)([e.data]);
  return t;
}
export async function c() {
  const e = await Object(_c.getCustomColor)();
  if (!e.error) {
    return e.data.map(e => {
      e.type = "color";
      return e;
    });
  }
  console.warn(e.error);
}