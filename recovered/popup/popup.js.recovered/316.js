require("./7.js");
import * as r from "./0.js";
import * as i from "./3.js";
const o = ["infinity-notes-img", "custom-wallpaper-library"];
const s = {};
export const uploadFile = async (t, e, n) => {
  let a;
  try {
    if (s[n] && s[n].endTime > Date.now()) {
      a = s[n];
    } else {
      let t = null;
      t = o.includes(n) ? await i.a.get(r.y + "/upload/public_private_token", {
        type: n
      }, {
        _auth: true
      }) : await i.a.get(r.y + "/upload/token", {
        type: n
      });
      if (t.code !== 0 || !t.data.token) {
        return {
          error: t
        };
      }
      a = t.data;
      a.endTime = Date.now() + (a.expires - 600) * 1000;
      s[n] = a;
    }
    const {
      token: c,
      prefix: u
    } = a;
    const l = new FormData();
    l.append("token", c);
    l.append("key", u + e);
    l.append("file", t, e);
    const {
      key: h,
      url: p
    } = await i.a.post(a.host, l, {
      timeout: 180000,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return {
      data: {
        url: p,
        key: h
      }
    };
  } catch (t) {
    return {
      error: t
    };
  }
};