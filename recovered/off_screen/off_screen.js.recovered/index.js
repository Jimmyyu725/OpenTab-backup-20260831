import * as r from "./34.js";
r.b.listen({
  action: r.a.BG_PLAY_AUDIO,
  from: "background",
  to: "offscreen"
}, t => new Audio(t.audioUrl).play());
r.b.listen({
  action: r.a.BG_GET_LOCAL_STORAGE,
  from: "background",
  to: "offscreen"
}, t => localStorage.getItem(t.key));
r.b.listen({
  action: r.a.BG_SET_LOCAL_STORAGE,
  from: "background",
  to: "offscreen"
}, t => {
  localStorage.setItem(t.key, t.valueStr);
  return null;
});
r.b.listen({
  action: r.a.BG_REMOVE_LOCAL_STORAGE,
  from: "background",
  to: "offscreen"
}, t => {
  localStorage.removeItem(t.key);
  return null;
});