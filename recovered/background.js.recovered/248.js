require("./7.js");
require("./19.js");
var r = require("./0.js");
var o = require("./250.js");
export function a(t) {
  return fetch(function (t) {
    return r.f + "/mail/feed/atom?zx=" + encodeURIComponent(t);
  }(t)).then(t => {
    if (!t.ok) {
      throw new Error("response not ok");
    }
    return t.text();
  }).then(async t => {
    const e = (await o.parseStringPromise(t)).feed;
    let n = e.title[0];
    if (n) {
      try {
        n = /(\w+)@(\w+\.\w+)/.exec(n)[0];
      } catch (t) {}
    }
    const r = parseInt(e.fullcount, 10);
    const i = e.entry || [];
    const s = [];
    let a = -1;
    i.forEach(t => {
      const e = {
        id: t.id[0],
        issued: t.issued[0],
        title: t.title[0],
        summary: t.summary[0],
        link: t.link[0].$.href,
        authorName: t.author[0].name[0],
        authorEmail: t.author[0].email[0]
      };
      if (e.issued) {
        e.issued = new Date(e.issued).valueOf();
        a = Math.max(a, e.issued);
      }
      s.push(e);
    });
    return {
      count: r,
      account: n,
      lastIssuedTime: a,
      emails: s
    };
  }).catch(t => {
    throw t;
  });
}