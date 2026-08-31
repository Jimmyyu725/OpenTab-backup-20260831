require("./19.js");
export const b = require("./0.js").s ? "serviceworker" : "background";
export let a = false;
if (b === "background") {
  a = typeof ServiceWorkerGlobalScope == "function" && typeof chrome == "object";
} else if (b === "serviceworker") {
  a = typeof ServiceWorkerGlobalScope == "function";
}
export const d = {
  timeout: 0,
  taskId: ""
};
export const c = () => ("" + Date.now() / 1000 / 100000).split(".")[1].substr(0, 8) + ("" + Math.random()).split(".")[1].substr(0, 8).padEnd(8, "0");