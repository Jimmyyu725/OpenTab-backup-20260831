require(/*webcrack:missing*/"./7.js");
var n = require(/*webcrack:missing*/"./2.js");
var s = require(/*webcrack:missing*/"./403.js");
var _a = s;
var o = require(/*webcrack:missing*/"./309.js");
var c = require(/*webcrack:missing*/"./22.js");
var r = require(/*webcrack:missing*/"./24.js");
var l = require(/*webcrack:missing*/"./13.js");
function d(e, t, i, n) {
  var s;
  var a = arguments.length;
  var o = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    o = Reflect.decorate(e, t, i, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (s = e[c]) {
        o = (a < 3 ? s(o) : a > 3 ? s(t, i, o) : s(t, i)) || o;
      }
    }
  }
  if (a > 3 && o) {
    Object.defineProperty(t, i, o);
  }
  return o;
}
const u = [{
  title: "",
  content: "",
  time: +new Date(),
  id: "note-default-1ehj4oc7ubn8bgu9zb2spjip0vj",
  updatetime: 0,
  fontSize: 14
}];
class p extends o.a {
  constructor() {
    super(...arguments);
    this.linkModal = false;
    this.list = u;
    this.checkedId = this.list[0].id;
    this.boldActive = false;
  }
  toogleLinkModal() {
    this.linkModal = !this.linkModal;
  }
  setBoldActive(e) {
    this.boldActive = e;
  }
  get isEmpty() {
    return this.list.length === 0;
  }
  get checkedNote() {
    if (this.checkedId) {
      return this.list.filter(e => e.id === this.checkedId)[0];
    } else {
      return this.list[0];
    }
  }
  get noteList() {
    const e = [];
    const t = [];
    this.list.forEach(i => {
      if (i.sticky) {
        e.push(i);
      } else {
        t.push(i);
      }
    });
    return e.concat(t);
  }
  diffRemote(e) {
    const t = e => {
      if (e == null ? undefined : e.updatetime) {
        const t = {
          updatetime: undefined
        };
        return Object.assign(Object.assign({}, e), t);
      }
    };
    const i = _a(e.list || [], t);
    const s = _a(Object(n.j)(this.list), t);
    return !n.d.structural(i, s);
  }
  mergeRemote(e, t) {
    if (e.list) {
      if (t) {
        this.list = e.list;
        this.checkedId = e.checkedId;
      } else {
        const t = this.list;
        const i = e.list;
        this.checkedId = e.checkedId;
        const {
          result: n
        } = r.a.mergeArray(t, i);
        this.list = n;
      }
    }
  }
  async add({
    title: e = "",
    content: t = ""
  }) {
    const i = r.a.randomId("note-");
    const s = await r.a.getTimestamp();
    const a = {
      title: e,
      content: t,
      time: +new Date(),
      id: i,
      updatetime: s,
      fontSize: 14
    };
    Object(n.i)(() => {
      this.list = [a, ...this.list];
      this.checkedId = i;
    });
  }
  delete(e) {
    this.list = this.list.filter(t => t.id !== e);
    if (e === this.checkedId && !this.isEmpty) {
      this.checkedId = this.list[0].id;
    }
  }
  setTop(e) {
    const t = this.list.findIndex(t => t.id === e);
    if (t !== -1) {
      const [e] = this.list.splice(t, 1);
      e.sticky = true;
      this.list.unshift(e);
    }
  }
  cancelSetTop(e) {
    const t = this.list.findIndex(t => t.id === e);
    if (t !== -1) {
      const [e] = this.list.splice(t, 1);
      e.sticky = false;
      this.list.unshift(e);
    }
  }
  updateId(e) {
    this.checkedId = e;
  }
  async updateNote(e) {
    const t = await r.a.getTimestamp();
    Object(n.i)(() => {
      if (this.list?.length) {
        this.list = this.list.map(i => i.id === e.id ? Object.assign(Object.assign(Object.assign({}, i), e), {
          updatetime: t
        }) : Object.assign({}, i));
      }
    });
  }
  async upload(e, t) {
    const {
      data: s,
      error: a
    } = await c.e.uploadFile(e, t + ".png", "infinity-notes-img");
    if (a) {
      return {
        error: a.response?.data?.error ? a.response.data.error : a.message,
        data: ""
      };
    }
    return {
      data: s,
      error: ""
    };
  }
}
d([n.g], p.prototype, "linkModal", undefined);
d([n.b], p.prototype, "toogleLinkModal", null);
d([n.g], p.prototype, "list", undefined);
d([n.g], p.prototype, "checkedId", undefined);
d([n.g], p.prototype, "boldActive", undefined);
d([n.b], p.prototype, "setBoldActive", null);
d([n.e], p.prototype, "isEmpty", null);
d([n.e], p.prototype, "checkedNote", null);
d([n.e], p.prototype, "noteList", null);
d([n.b], p.prototype, "mergeRemote", null);
d([n.b], p.prototype, "add", null);
d([n.b], p.prototype, "delete", null);
d([n.b], p.prototype, "setTop", null);
d([n.b], p.prototype, "cancelSetTop", null);
d([n.b], p.prototype, "updateId", null);
d([n.b], p.prototype, "updateNote", null);
d([n.b], p.prototype, "upload", null);
export const a = new p();
a.initSyncStore(l.d, ["list", "checkedId"], {});
a.initAutoBackup("note", ["list", "checkedId"]);