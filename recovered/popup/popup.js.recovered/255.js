require("./19.js");
require("./64.js");
export const a = function (t) {
  return (t = "" + t).replace(/</g, "&lt;").replace(/>/g, "&gt;");
};