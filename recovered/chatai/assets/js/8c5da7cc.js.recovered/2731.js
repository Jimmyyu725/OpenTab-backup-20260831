var n = require(/*webcrack:missing*/"./5981.js");
var o = require(/*webcrack:missing*/"./4003.js");
i18n("全部");
i18n("工具");
i18n("资讯阅读");
i18n("娱乐");
export const VU = {
  name: o.sM ? "发工资" : "Payday",
  time: 1673280000000,
  repeatType: "month",
  dateType: "solar",
  timerStyle: {
    fontColor: "rgba(248, 248, 248, 1)",
    bgType: "image",
    bgColor: "rgba(182, 150, 135, 1)",
    bgImageColor: "",
    bgImage: {
      large: "https://static.wetab.link/widget-background/background08_larg.jpg",
      medium: "https://static.wetab.link/widget-background/background08_medium.jpg",
      small: "https://static.wetab.link/widget-background/background08_small.jpg"
    },
    bgMask: 20
  }
};
export const gs = {
  name: o.sM ? "与 Tina 相识" : "In love with Smith",
  time: 1589904000000,
  dateType: "solar",
  timerStyle: {
    fontColor: "rgba(248, 248, 248, 1)",
    bgType: "image",
    bgColor: "rgba(109, 131, 95, 1)",
    bgImageColor: "",
    bgImage: {
      large: "https://static.wetab.link/widget-background/background05_larg.jpg",
      medium: "https://static.wetab.link/widget-background/background05_medium.jpg",
      small: "https://static.wetab.link/widget-background/background05_small.jpg"
    },
    bgMask: 20
  }
};
export const S9 = e => {
  if (o.sM) {
    n.R.success({
      message: `【${e}】添加完成`
    });
  } else {
    n.R.success({
      message: `[${e}] add success`
    });
  }
};
export const Pe = {
  w: 1024,
  h: 640
};