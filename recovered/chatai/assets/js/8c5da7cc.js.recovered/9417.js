var _n = require(/*webcrack:missing*/"./3131.js");
var o = require(/*webcrack:missing*/"./4003.js");
var a = require("./8287.js");
const i = new (require(/*webcrack:missing*/"./1475.js")._P)("chat-pay/widget-status", 1000);
var c = require(/*webcrack:missing*/"./3737.js");
export const n = (0, _n.Q_)(c.B.compliance, {
  syncStorage: {
    watch: ["chatBanned", "chatInfo"]
  },
  state: () => ({
    chatBanned: false,
    contactShow: false,
    chatInfo: {}
  }),
  actions: {
    setContactShow(e) {
      this.contactShow = e;
    },
    async getChatCompliance() {
      const [e, t] = await (async () => {
        try {
          if (i.isLocked) {
            return ["locked error"];
          }
          const e = await a.hj.get(`${o.H}chat-pay/widget-status`, {}, {
            _auth: true
          });
          if (e.code === 0 && e.data) {
            i.setLock();
            return [null, e.data];
          }
          throw e;
        } catch (e) {
          return ["catch error"];
        }
      })();
      if (!e && t) {
        this.chatBanned = t.status === "upgrading";
        this.chatInfo = t;
      }
    }
  }
});