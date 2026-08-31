require("./7.js");
import * as r from "./0.js";
import * as i from "./3.js";
const o = ["infinity-notes-img", "custom-wallpaper-library"];
const a = {};
export const uploadFile = async (t, e, n) => {
  let s;
  try {
    if (a[n] && a[n].endTime > Date.now()) {
      s = a[n];
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
      s = t.data;
      s.endTime = Date.now() + (s.expires - 600) * 1000;
      a[n] = s;
    }
    const {
      token: c,
      prefix: u
    } = s;
    const l = new FormData();
    l.append("token", c);
    l.append("key", u + e);
    l.append("file", t, e);
    const {
      key: f,
      url: h
    } = await i.a.post(s.host, l, {
      timeout: 180000,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return {
      data: {
        url: h,
        key: f
      }
    };
  } catch (t) {
    return {
      error: t
    };
  }
};