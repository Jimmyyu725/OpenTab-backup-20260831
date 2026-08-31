var r = require("./5.js");
var i = r;
require("./7.js");
var o = require("./0.js");
var _a = require("./164.js");
var s = require("./165.js");
export function a(t) {
  let e = 0;
  switch (t) {
    case "per-hour":
      e = o.q ? 3600000 : 20000;
      break;
    case "twelve-hour":
      e = 43200000;
      break;
    case "one-day":
      e = 86400000;
  }
  return e;
}
export async function d(t) {
  let e;
  var n;
  e = typeof t == "string" ? await (n = t, fetch(n).then(t => t.blob())) : t;
  return await new i((t, n) => {
    const r = new FileReader();
    r.readAsDataURL(e);
    r.onload = () => {
      t(r.result);
    };
    r.onerror = n;
  });
}
export async function b() {
  const t = await Object(s.getBingWallpaper)();
  if (t.error) {
    throw t.error;
  }
  const [e] = Object(_a.b)([t.data]);
  return e;
}
export async function c() {
  const t = await Object(s.getCustomColor)();
  if (!t.error) {
    return t.data.map(t => {
      t.type = "color";
      return t;
    });
  }
  console.warn(t.error);
}