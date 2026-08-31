var o = require("./361.js");
var n = require("./7890.js");
var i = require("./741.js");
var s = require(/*webcrack:missing*/"./9445.js");
const {
  hasOwnProperty: a
} = Object.prototype;
function l(e, t) {
  Object.keys(t).forEach(r => {
    (function (e, t, r) {
      const o = t[r];
      if ((0, i.Xq)(o)) {
        if (a.call(e, r) && (0, i.Kn)(o)) {
          e[r] = l(Object(e[r]), o);
        } else {
          e[r] = o;
        }
      }
    })(e, t, r);
  });
  return e;
}
const d = (0, s.iH)("zh-CN");
const c = (0, s.qj)({
  "zh-CN": {
    name: "姓名",
    tel: "电话",
    save: "保存",
    confirm: "确认",
    cancel: "取消",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
      end: "结束",
      start: "开始",
      title: "日期选择",
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      monthTitle: (e, t) => `${e}年${t}月`,
      rangePrompt: e => `最多选择 ${e} 天`
    },
    vanCascader: {
      select: "请选择"
    },
    vanPagination: {
      prev: "上一页",
      next: "下一页"
    },
    vanPullRefresh: {
      pulling: "下拉即可刷新...",
      loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
      label: "合计:"
    },
    vanCoupon: {
      unlimited: "无门槛",
      discount: e => `${e}折`,
      condition: e => `满${e}元可用`
    },
    vanCouponCell: {
      title: "优惠券",
      count: e => `${e}张可用`
    },
    vanCouponList: {
      exchange: "兑换",
      close: "不使用",
      enable: "可用",
      disabled: "不可用",
      placeholder: "输入优惠码"
    },
    vanAddressEdit: {
      area: "地区",
      postal: "邮政编码",
      areaEmpty: "请选择地区",
      addressEmpty: "请填写详细地址",
      postalEmpty: "邮政编码不正确",
      addressDetail: "详细地址",
      defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
      add: "新增地址"
    }
  }
});
var u = {
  messages: () => c[d.value],
  use(e, t) {
    d.value = e;
    this.add({
      [e]: t
    });
  },
  add(e = {}) {
    l(c, e);
  }
};
function h(e) {
  const t = (0, n._A)(e) + ".";
  return (e, ...r) => {
    const n = u.messages();
    const s = (0, o.U2)(n, t + e) || (0, o.U2)(n, e);
    if ((0, i.mf)(s)) {
      return s(...r);
    } else {
      return s;
    }
  };
}
function p(e, t) {
  if (t) {
    if (typeof t == "string") {
      return ` ${e}--${t}`;
    } else if (Array.isArray(t)) {
      return t.reduce((t, r) => t + p(e, r), "");
    } else {
      return Object.keys(t).reduce((r, o) => r + (t[o] ? p(e, o) : ""), "");
    }
  } else {
    return "";
  }
}
function v(e) {
  return (t, r) => {
    if (t && typeof t != "string") {
      r = t;
      t = "";
    }
    return `${t = t ? `${e}__${t}` : e}${p(t, r)}`;
  };
}
export function do(e) {
  const t = `van-${e}`;
  return [t, v(t), h(t)];
}