require(/*webcrack:missing*/"./7.js");
var o = require(/*webcrack:missing*/"./2.js");
var s = require(/*webcrack:missing*/"./403.js");
var n = s;
var r = require("./309.js");
var _a = require(/*webcrack:missing*/"./24.js");
var c = require(/*webcrack:missing*/"./13.js");
var l = require("./161.js");
function p(e, t, i, o) {
  var s;
  var n = arguments.length;
  var r = n < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, i) : o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    r = Reflect.decorate(e, t, i, o);
  } else {
    for (var a = e.length - 1; a >= 0; a--) {
      if (s = e[a]) {
        r = (n < 3 ? s(r) : n > 3 ? s(t, i, r) : s(t, i)) || r;
      }
    }
  }
  if (n > 3 && r) {
    Object.defineProperty(t, i, r);
  }
  return r;
}
const h = [{
  text: i18n("todo_welcome"),
  todoId: "todo-id1dtkk87it2iepal6dv4hr2uig0c",
  time: Date.now(),
  updatetime: 0,
  done: false
}];
class d extends r.a {
  constructor() {
    super(...arguments);
    this.todoList = h;
    this.currenetState = "done";
    this.listLength = localStorage.getItem("todo-length") || 0;
  }
  toggleState(e) {
    this.currenetState = e;
  }
  get needNotificationPermission() {
    return this.todoList.some(e => !!e.dueDate);
  }
  diffRemote(e) {
    const t = e => {
      if (e == null ? undefined : e.updatetime) {
        const t = {
          updatetime: undefined
        };
        e.done = !!e.done;
        return Object.assign(Object.assign({}, e), t);
      }
    };
    const i = n(e.todoList || [], t);
    const s = n(Object(o.j)(this.todoList), t);
    return !o.d.structural(i, s);
  }
  mergeRemote(e, t) {
    if (e.todoList) {
      if (t) {
        this.todoList = e.todoList;
      } else {
        const t = this.todoList;
        const i = e.todoList;
        const {
          result: o
        } = _a.a.mergeArray(t, i, "todoId");
        this.todoList = o;
      }
    }
  }
  edit(e) {
    this.todoList = this.todoList.map(t => t.todoId === e ? Object.assign(Object.assign({}, t), {
      edit: !t.edit
    }) : t);
  }
  get hasDoneTodo() {
    return this.todoList.filter(e => e.done).length;
  }
  async addTodo(e) {
    if (!e.trim().length) {
      return;
    }
    const t = {
      done: false,
      time: +new Date(),
      todoId: _a.a.randomId("todo-"),
      updatetime: await _a.a.getTimestamp(),
      text: e
    };
    Object(o.i)(() => {
      this.todoList = [t, ...this.todoList];
    });
  }
  removeTodo() {
    this.todoList = this.todoList.filter(e => !e.done);
  }
  deleteTodo(e) {
    this.todoList = this.todoList.filter(t => t.todoId !== e);
  }
  async toggleTodo(e) {
    const t = await _a.a.getTimestamp();
    Object(o.i)(() => {
      this.todoList = this.todoList.map(i => i.todoId === e ? Object.assign(Object.assign({}, i), {
        done: !i.done,
        updatetime: t
      }) : Object.assign({}, i));
    });
  }
  async updateTodo(e, t) {
    const i = await _a.a.getTimestamp();
    Object(o.i)(() => {
      this.todoList = this.todoList.map(o => o.todoId === e ? Object.assign(Object.assign(Object.assign({}, o), t), {
        updatetime: i,
        edit: false
      }) : Object.assign({}, o));
    });
  }
  removeTime(e) {
    this.todoList = this.todoList.map(t => t.todoId === e ? Object.assign(Object.assign({}, t), {
      dueDate: "",
      dueTime: "",
      dueTimestamp: null
    }) : t);
  }
}
p([o.g], d.prototype, "todoList", undefined);
p([o.g], d.prototype, "currenetState", undefined);
p([o.b], d.prototype, "toggleState", null);
p([o.e], d.prototype, "needNotificationPermission", null);
p([o.b], d.prototype, "mergeRemote", null);
p([o.b], d.prototype, "edit", null);
p([o.g], d.prototype, "listLength", undefined);
p([o.e], d.prototype, "hasDoneTodo", null);
p([o.b], d.prototype, "addTodo", null);
p([o.b], d.prototype, "removeTodo", null);
p([o.b], d.prototype, "deleteTodo", null);
p([o.b], d.prototype, "toggleTodo", null);
p([o.b], d.prototype, "updateTodo", null);
p([o.b], d.prototype, "removeTime", null);
export const a = new d();
a.initSyncStore(c.k, ["todoList", "listLength"], {});
a.initAutoBackup("todo", ["todoList"]);
Object(o.c)(() => {
  if (a.firstSync) {
    const e = a.todoList.filter(e => !e.done).length;
    Object(o.i)(() => {
      a.listLength = e;
    });
    localStorage.setItem("todo-length", e + "");
  }
});
let g = false;
Object(o.c)(() => {
  if (a.firstSync) {
    const e = a.todoList.filter(e => !e.done && e.dueTimestamp > Date.now()).map(e => Object(o.j)(e));
    if (!g) {
      g = true;
      return;
    }
    l.slave.postTask("slave:change-todo", e);
  }
});
Object(o.c)(() => {
  let e = false;
  const {
    todoList: t
  } = a;
  for (let i = 0; i < t.length - 1; i++) {
    const {
      done: o
    } = t[i];
    const s = t[i + 1].done;
    if (o && !s) {
      e = true;
      break;
    }
  }
  if (e) {
    Object(o.i)(() => {
      const e = t.filter(e => e.done);
      const i = t.filter(e => !e.done);
      a.todoList = [...i, ...e];
    });
    e = false;
  }
}, {
  delay: 300
});