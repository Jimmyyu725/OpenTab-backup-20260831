var n = require(/*webcrack:missing*/"./4003.js");
var o = require("./8287.js");
export const x4 = async e => {
  try {
    const t = await o.hj.post(`${n.H}user/login`, e, {
      _delay: 200
    });
    if (t.code === 0) {
      return [null, t.data];
    }
    if (t.code === 4001) {
      return [i18n("账号或者密码错误")];
    }
    throw new Error();
  } catch (e) {
    return [i18n("系统错误，发送失败")];
  }
};
export const Cz = async e => {
  try {
    const t = await o.hj.post(`${n.H}verify/send-email`, e, {
      _delay: 200,
      fetchOpts: {
        credentials: "include"
      }
    });
    if (t.code === 0) {
      return [null, null];
    }
    if (t.code === 4009) {
      return [i18n("验证码错误")];
    }
    if (t.code === 4006) {
      return [i18n("账号已存在")];
    }
    if (t.code === 4010) {
      return [i18n("发送太频繁,请稍后再试")];
    }
    if (t.code === 4012) {
      return [i18n("账号不存在")];
    }
    throw new Error();
  } catch (e) {
    return [i18n("系统错误，发送失败")];
  }
};
export const Jd = async () => {
  try {
    const e = await o.hj.get(`${n.H}verify/image-token`, {});
    if (e.code === 0) {
      return [null, e.data];
    }
    throw new Error();
  } catch (e) {
    return [i18n("网络错误")];
  }
};
export const Zd = async e => {
  try {
    const t = await o.hj.post(`${n.H}verify/send-email-token`, e, {
      _delay: 200
    });
    if (t.code === 0) {
      return [null, null];
    }
    if (t.code === 4009) {
      return [i18n("验证码错误")];
    }
    if (t.code === 4006) {
      return [i18n("账号已存在")];
    }
    if (t.code === 4010) {
      return [i18n("发送太频繁,请稍后再试")];
    }
    if (t.code === 4012) {
      return [i18n("账号不存在")];
    }
    throw new Error();
  } catch (e) {
    return [i18n("系统错误，发送失败")];
  }
};
export const lm = async e => {
  try {
    const t = await o.hj.post(`${n.H}verify/verify-email`, e, {
      _delay: 200,
      _single: true,
      fetchOpts: {
        credentials: "include"
      }
    });
    if (t.code === 0) {
      return [null, null];
    }
    if (t.code === 4009) {
      return [i18n("验证码错误")];
    }
    if (t.code === 4011) {
      return [i18n("邮箱验证码错误")];
    }
    throw new Error(i18n("未知错误"));
  } catch (e) {
    return [`接口报错：${e}`];
  }
};
export const z2 = async e => {
  try {
    const t = await o.hj.post(`${n.H}user/register`, e, {
      _delay: 200,
      _single: true
    });
    if (t.code === 0) {
      return [null, t.data];
    }
    if (t.code === 4006) {
      return [i18n("账号已存在")];
    }
    if (t.code === 4011) {
      return [i18n("邮箱验证码错误")];
    }
    throw new Error(i18n("未知错误"));
  } catch (e) {
    return [`接口报错：${e}`];
  }
};
export const LI = async e => {
  try {
    const t = await o.hj.post(`${n.H}user/find-password`, e, {
      _delay: 200,
      _single: true
    });
    if (t.code === 0) {
      return [null, t.data];
    }
    if (t.code === 4011) {
      return [i18n("邮箱验证码错误")];
    }
    throw new Error(i18n("未知错误"));
  } catch (e) {
    return [`接口报错：${e}`];
  }
};
export const et = async () => {
  try {
    const e = await o.hj.get(`${n.H}user/profile`, {}, {
      _auth: true
    });
    if (e.code === 0) {
      return [null, e.data];
    }
    throw new Error();
  } catch (e) {
    return [i18n("网络错误")];
  }
};
export const tm = async () => {
  try {
    const e = await o.hj.post(`${n.H}user/delete`, {}, {
      _auth: true
    });
    if (e.code === 0) {
      return [null, e.data];
    }
    throw new Error();
  } catch (e) {
    return [i18n("网络错误")];
  }
};
export const Co = async e => {
  try {
    const t = `${n.H}user/email-status?emails=${e.join(",")}`;
    const r = await o.hj.get(t, {});
    if (r.code === 0) {
      return [null, r.data.filter(e => e.isChatPro).map(e => e.email)];
    }
    throw new Error();
  } catch (e) {
    return [i18n("网络错误")];
  }
};
export const sG = async () => {
  try {
    const e = await o.hj.get(`${n.H}user/co-user`, {}, {
      _auth: true
    });
    if (e.code === 0 && e.data) {
      return [null, e.data];
    }
    throw new Error();
  } catch (e) {
    return [i18n("网络错误")];
  }
};