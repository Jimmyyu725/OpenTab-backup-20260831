var o = require("./7890.js");
export function n(e) {
  e.install = t => {
    const {
      name: r
    } = e;
    t.component(r, e);
    t.component((0, o._A)(`-${r}`), e);
  };
  return e;
}