require(/*webcrack:missing*/"./7.js");
var r = require(/*webcrack:missing*/"./2.js");
var o = require(/*webcrack:missing*/"./403.js");
var i = o;
var s = require("./309.js");
var _a = require("./24.js");
var c = require("./13.js");
var u = require("./161.js");
function l(t, e, n, r) {
  var o;
  var i = arguments.length;
  var s = i < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, n) : r;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    s = Reflect.decorate(t, e, n, r);
  } else {
    for (var a = t.length - 1; a >= 0; a--) {
      if (o = t[a]) {
        s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s;
      }
    }
  }
  if (i > 3 && s) {
    Object.defineProperty(e, n, s);
  }
  return s;
}
const h = [{
  text: i18n("todo_welcome"),
  todoId: "todo-id1dtkk87it2iepal6dv4hr2uig0c",
  time: Date.now(),
  updatetime: 0,
  done: false
}];
class p extends s.a {
  constructor() {
    super(...arguments);
    this.todoList = h;
    this.currenetState = "done";
    this.listLength = localStorage.getItem("todo-length") || 0;
  }
  toggleState(t) {
    this.currenetState = t;
  }
  get needNotificationPermission() {
    return this.todoList.some(t => !!t.dueDate);
  }
  diffRemote(t) {
    const e = t => {
      if (t == null ? undefined : t.updatetime) {
        const e = {
          updatetime: undefined
        };
        t.done = !!t.done;
        return Object.assign(Object.assign({}, t), e);
      }
    };
    const n = i(t.todoList || [], e);
    const o = i(Object(r.j)(this.todoList), e);
    return !r.d.structural(n, o);
  }
  mergeRemote(t, e) {
    if (t.todoList) {
      if (e) {
        this.todoList = t.todoList;
      } else {
        const e = this.todoList;
        const n = t.todoList;
        const {
          result: r
        } = _a.a.mergeArray(e, n, "todoId");
        this.todoList = r;
      }
    }
  }
  edit(t) {
    this.todoList = this.todoList.map(e => e.todoId === t ? Object.assign(Object.assign({}, e), {
      edit: !e.edit
    }) : e);
  }
  get hasDoneTodo() {
    return this.todoList.filter(t => t.done).length;
  }
  async addTodo(t) {
    if (!t.trim().length) {
      return;
    }
    const e = {
      done: false,
      time: +new Date(),
      todoId: _a.a.randomId("todo-"),
      updatetime: await _a.a.getTimestamp(),
      text: t
    };
    Object(r.i)(() => {
      this.todoList = [e, ...this.todoList];
    });
  }
  removeTodo() {
    this.todoList = this.todoList.filter(t => !t.done);
  }
  deleteTodo(t) {
    this.todoList = this.todoList.filter(e => e.todoId !== t);
  }
  async toggleTodo(t) {
    const e = await _a.a.getTimestamp();
    Object(r.i)(() => {
      this.todoList = this.todoList.map(n => n.todoId === t ? Object.assign(Object.assign({}, n), {
        done: !n.done,
        updatetime: e
      }) : Object.assign({}, n));
    });
  }
  async updateTodo(t, e) {
    const n = await _a.a.getTimestamp();
    Object(r.i)(() => {
      this.todoList = this.todoList.map(r => r.todoId === t ? Object.assign(Object.assign(Object.assign({}, r), e), {
        updatetime: n,
        edit: false
      }) : Object.assign({}, r));
    });
  }
  removeTime(t) {
    this.todoList = this.todoList.map(e => e.todoId === t ? Object.assign(Object.assign({}, e), {
      dueDate: "",
      dueTime: "",
      dueTimestamp: null
    }) : e);
  }
}
l([r.g], p.prototype, "todoList", undefined);
l([r.g], p.prototype, "currenetState", undefined);
l([r.b], p.prototype, "toggleState", null);
l([r.e], p.prototype, "needNotificationPermission", null);
l([r.b], p.prototype, "mergeRemote", null);
l([r.b], p.prototype, "edit", null);
l([r.g], p.prototype, "listLength", undefined);
l([r.e], p.prototype, "hasDoneTodo", null);
l([r.b], p.prototype, "addTodo", null);
l([r.b], p.prototype, "removeTodo", null);
l([r.b], p.prototype, "deleteTodo", null);
l([r.b], p.prototype, "toggleTodo", null);
l([r.b], p.prototype, "updateTodo", null);
l([r.b], p.prototype, "removeTime", null);
export const a = new p();
a.initSyncStore(c.k, ["todoList", "listLength"], {});
a.initAutoBackup("todo", ["todoList"]);
Object(r.c)(() => {
  if (a.firstSync) {
    const t = a.todoList.filter(t => !t.done).length;
    Object(r.i)(() => {
      a.listLength = t;
    });
    localStorage.setItem("todo-length", t + "");
  }
});
let d = false;
Object(r.c)(() => {
  if (a.firstSync) {
    const t = a.todoList.filter(t => !t.done && t.dueTimestamp > Date.now()).map(t => Object(r.j)(t));
    if (!d) {
      d = true;
      return;
    }
    u.slave.postTask("slave:change-todo", t);
  }
});
Object(r.c)(() => {
  let t = false;
  const {
    todoList: e
  } = a;
  for (let n = 0; n < e.length - 1; n++) {
    const {
      done: r
    } = e[n];
    const o = e[n + 1].done;
    if (r && !o) {
      t = true;
      break;
    }
  }
  if (t) {
    Object(r.i)(() => {
      const t = e.filter(t => t.done);
      const n = e.filter(t => !t.done);
      a.todoList = [...n, ...t];
    });
    t = false;
  }
}, {
  delay: 300
});