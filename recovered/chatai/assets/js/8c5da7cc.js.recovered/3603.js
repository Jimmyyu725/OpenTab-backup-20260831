const n = {
  base: {
    "--color-black": "0 0 0",
    "--color-white": "255 255 255"
  },
  light: {
    "--color-blue": "74 122 255",
    "--color-green": "52 199 89",
    "--color-yellow": "255 149 0",
    "--color-orange": "255 155 48",
    "--color-red": "255 77 79",
    "--color-t1": "28 28 30",
    "--color-t2": "58 58 60",
    "--color-t3": "142 142 148",
    "--color-t4": "199 199 204",
    "--color-b1": "209 209 214",
    "--color-b2": "229 229 234",
    "--color-b3": "248 248 248",
    "--color-b4": "255 255 255",
    "--color-b5": "255 255 255",
    "--color-m1": "255 255 255",
    "--color-m2": "0 0 0",
    "--color-todo-t1": "47 87 255",
    "--color-todo-t2": "83 147 255",
    "--color-note-t1": "192 131 93",
    "--color-note-t2": "198 174 159",
    "--color-calc-t1": "255 255 255",
    "--color-calc-t2": "200 200 204",
    "--color-calc-t3": "142 142 148",
    "--color-calc-t4": "94 94 98",
    "--color-calc-b1": "75 78 84",
    "--color-calc-b2": "50 52 57",
    "--color-calc-b3": "34 36 39",
    "--color-calc-l1": "254 189 95",
    "--color-calc-l2": "251 132 54",
    "--color-calc-l3": "96 99 107",
    "--color-calc-l4": "58 60 66",
    "--color-calc-l6": "32 33 38",
    "--color-calc-l7": "81 84 90",
    "--color-calc-l5": "63 65 72",
    "--color-calc-l8": "72 74 79",
    "--color-calc-l0": "40 41 45",
    "--color-calc-l9": "252 163 36",
    "--color-calc-yellow": "240 168 16",
    "--color-calendar-red": "255 77 79",
    "--color-calendar-b1": "255 101 101",
    "--color-calendar-b2": "255 246 241",
    "--color-worldcup-t1": "168 238 65",
    "--color-rate-t1": "28 28 30",
    "--color-rate-t2": "58 58 60",
    "--color-rate-t3": "141 142 148",
    "--color-rate-t4": "109 147 229",
    "--color-rate-b1": "255 255 255",
    "--color-rate-b2": "248 248 248",
    "--color-rate-b3": "34 36 39",
    "--color-rate-b4": "55 69 157",
    "--color-rate-b5": "238 240 239",
    "--color-rate-l1": "70 154 255",
    "--color-rate-l2": "72 90 188",
    "--color-game-b1": "38 42 53",
    "--color-game-b2": "70 74 88",
    "--color-game-b3": "23 26 34",
    "--color-game-b4": "44 47 59",
    "--color-game-b5": "20 174 60",
    "--color-game-t1": "200 200 204",
    "--color-game-t2": "142 142 148",
    "--color-movie-b1": "94 104 71",
    "--color-clock-b1": "22 21 28",
    "--color-wclock-b1": "19 20 21",
    "--color-wclock-t1": "37 216 27",
    "--color-wclock-t2": "47 142 42",
    "--color-wclock-t3": "30 82 27",
    "--color-bookmark-t1": "98 173 91",
    "--color-bookmark-b1": "248 248 248",
    "--color-bookmark-b2": "255 255 255",
    "--color-record-t1": "255 115 48"
  },
  dark: {
    "--color-blue": "83 98 255",
    "--color-green": "20 174 60",
    "--color-yellow": "255 149 0",
    "--color-orange": "255 155 48",
    "--color-red": "255 77 79",
    "--color-t1": "255 255 255",
    "--color-t2": "200 200 204",
    "--color-t3": "142 142 148",
    "--color-t4": "94 94 98",
    "--color-b1": "82 83 83",
    "--color-b2": "64 64 64",
    "--color-b3": "32 32 32",
    "--color-b4": "17 17 17",
    "--color-b5": "64 64 64",
    "--color-m1": "0 0 0",
    "--color-m2": "255 255 255",
    "--color-todo-t1": "83 147 255",
    "--color-todo-t2": "47 87 255",
    "--color-note-t1": "198 174 159",
    "--color-note-t2": "192 131 93",
    "--color-calc-t1": "255 255 255",
    "--color-calc-t2": "200 200 204",
    "--color-calc-t3": "142 142 148",
    "--color-calc-t4": "94 94 98",
    "--color-calc-b1": "75 78 84",
    "--color-calc-b2": "50 52 57",
    "--color-calc-b3": "34 36 39",
    "--color-calc-l1": "254 189 95",
    "--color-calc-l2": "251 132 54",
    "--color-calc-l3": "96 99 107",
    "--color-calc-l4": "58 60 66",
    "--color-calc-l6": "32 33 38",
    "--color-calc-l7": "81 84 90",
    "--color-calc-l8": "72 74 79",
    "--color-calc-l5": "63 65 72",
    "--color-calc-l0": "40 41 45",
    "--color-calc-l9": "252 163 36",
    "--color-calc-yellow": "240 168 16",
    "--color-calendar-red": "219 56 72",
    "--color-calendar-b1": "230 70 70",
    "--color-calendar-b2": "54 33 31",
    "--color-worldcup-t1": "168 238 65",
    "--color-rate-t1": "28 28 30",
    "--color-rate-t2": "58 58 60",
    "--color-rate-t3": "141 142 148",
    "--color-rate-t4": "109 147 229",
    "--color-rate-b1": "255 255 255",
    "--color-rate-b2": "248 248 248",
    "--color-rate-b3": "34 36 39",
    "--color-rate-b4": "55 69 157",
    "--color-rate-b5": "238 240 239",
    "--color-rate-l1": "70 154 255",
    "--color-rate-l2": "72 90 188",
    "--color-game-b1": "38 42 53",
    "--color-game-b2": "70 74 88",
    "--color-game-b3": "23 26 34",
    "--color-game-b4": "44 47 59",
    "--color-game-b5": "20 174 60",
    "--color-game-t1": "200 200 204",
    "--color-game-t2": "142 142 148",
    "--color-movie-b1": "94 104 71",
    "--color-clock-b1": "22 21 28",
    "--color-wclock-b1": "19 20 21",
    "--color-wclock-t1": "37 216 27",
    "--color-wclock-t2": "47 142 42",
    "--color-wclock-t3": "30 82 27",
    "--color-bookmark-t1": "85 170 78",
    "--color-bookmark-b1": "64 64 64",
    "--color-bookmark-b2": "82 83 83",
    "--color-record-t1": "233 94 27"
  }
};
var o = require("./6261.js");
export const gh = e => ({
  ...n.base,
  ...n[e]
});
export const Dc = async e => {
  let t;
  t = e ? e.followSystem || !e.theme ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e.theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const r = {
    ...n.base,
    ...n[t]
  };
  c(r);
  if (t === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
const c = e => {
  const t = `\n  body,\n  ::before,\n  ::after {\n    ${Object.keys(e).map(t => `${t}:${e[t]}`).join(";")}\n   }\n  `;
  const r = document.querySelector("#theme_style");
  if (r) {
    r.innerHTML = t;
  } else {
    const e = document.createElement("style");
    e.id = "theme_style";
    e.innerHTML = t;
    document.head.insertAdjacentElement("beforeend", e);
  }
};
export const J$ = e => {
  if (((e == null ? undefined : e.globalFont) || o.Df) === "system-ui") {
    document.documentElement.classList.add("system-ui");
  } else {
    document.documentElement.classList.remove("system-ui");
  }
};