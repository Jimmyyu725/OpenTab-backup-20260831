require(/*webcrack:missing*/"./7334.js");
import * as r from /*webcrack:missing*/"./6155.js";
import * as i from /*webcrack:missing*/"./8398.js";
import * as a from /*webcrack:missing*/"./9282.js";
import * as o from /*webcrack:missing*/"./5395.js";
import * as s from /*webcrack:missing*/"./7268.js";
import * as l from /*webcrack:missing*/"./4209.js";
import * as c from /*webcrack:missing*/"./9445.js";
const u = [{
  iconClass: "icon-zhuye",
  name: i18n("主页")
}, {
  iconClass: "icon-sheji",
  name: i18n("设计")
}, {
  iconClass: "icon-chengxu",
  name: i18n("程序")
}, {
  iconClass: "icon-tupian",
  name: i18n("图片")
}, {
  iconClass: "icon-yule",
  name: i18n("娱乐")
}, {
  iconClass: "icon-gouwu",
  name: i18n("购物")
}, {
  iconClass: "icon-zixun",
  name: i18n("资讯")
}, {
  iconClass: "icon-jinrong",
  name: i18n("金融")
}, {
  iconClass: "icon-yuedu",
  name: i18n("阅读")
}, {
  iconClass: "icon-gongju",
  name: i18n("工具")
}, {
  iconClass: "icon-wangluo",
  name: i18n("网络")
}, {
  iconClass: "icon-chanpin",
  name: i18n("产品")
}, {
  iconClass: "icon-chuangyi",
  name: i18n("创意")
}, {
  iconClass: "icon-sheying",
  name: i18n("摄影")
}, {
  iconClass: "icon-keji",
  name: i18n("科技")
}, {
  iconClass: "icon-qiche",
  name: i18n("汽车")
}, {
  iconClass: "icon-lvyou",
  name: i18n("旅游")
}, {
  iconClass: "icon-dili",
  name: i18n("地理")
}, {
  iconClass: "icon-tianwen",
  name: i18n("天文")
}, {
  iconClass: "icon-huihua",
  name: i18n("绘画")
}, {
  iconClass: "icon-yinle",
  name: i18n("音乐")
}, {
  iconClass: "icon-jiankang",
  name: i18n("健康")
}, {
  iconClass: "icon-jianshen",
  name: i18n("健身")
}, {
  iconClass: "icon-tiyu",
  name: i18n("体育")
}, {
  iconClass: "icon-canyin",
  name: i18n("餐饮")
}, {
  iconClass: "icon-jianzhu",
  name: i18n("建筑")
}, {
  iconClass: "icon-dianying",
  name: i18n("电影")
}, {
  iconClass: "icon-shejiao",
  name: i18n("社交")
}];
let p;
(function (e) {
  e.IconCategory = "icon-category";
  e.CategoryWrapper = "category-wrapper";
  e.IconDock = "icon-dock";
  e.DockPageLeft = "dock-page-left";
  e.DockPageRight = "dock-page-right";
  e.DockWrapper = "dock-wrapper";
  e.IconPageUp = "icon-page-up";
  e.IconPageDown = "icon-page-down";
  e.IconPage = "icon-page";
  e.IconOnMiniFolder = "icon-on-mini-folder";
  e.IconOnMidFolder = "icon-on-mid-folder";
  e.FolderIconSuspend = "folder-icon-suspend";
  e.FolderContent = "folder-content";
  e.FolderContentUp = "folder-content-up";
  e.FolderContentDown = "folder-content-down";
  e.FolderMask = "folder-mask";
})(p ||= {});
import * as d from /*webcrack:missing*/"./4522.js";
import * as h from /*webcrack:missing*/"./1475.js";
import * as g from /*webcrack:missing*/"./2731.js";
import * as f from /*webcrack:missing*/"./4581.js";
import * as m from /*webcrack:missing*/"./4275.js";
import * as b from /*webcrack:missing*/"./9174.js";
const x = function (e) {
  var t = e == null ? 0 : e.length;
  if (t) {
    return e[t - 1];
  } else {
    return undefined;
  }
};
import * as y from /*webcrack:missing*/"./3682.js";
const v = function (e, t, n) {
  var r = -1;
  var i = e.length;
  if (t < 0) {
    t = -t > i ? 0 : i + t;
  }
  if ((n = n > i ? i : n) < 0) {
    n += i;
  }
  i = t > n ? 0 : n - t >>> 0;
  t >>>= 0;
  var a = Array(i);
  for (; ++r < i;) {
    a[r] = e[r + t];
  }
  return a;
};
const w = function (e, t) {
  if (t.length < 2) {
    return e;
  } else {
    return (0, y.Z)(e, v(t, 0, -1));
  }
};
import * as A from /*webcrack:missing*/"./6147.js";
const k = function (e, t) {
  t = (0, b.Z)(t, e);
  return (e = w(e, t)) == null || delete e[(0, A.Z)(x(t))];
};
import * as S from /*webcrack:missing*/"./684.js";
var C = Array.prototype.splice;
const E = function (e, t) {
  for (var n = e ? t.length : 0, r = n - 1; n--;) {
    var i = t[n];
    if (n == r || i !== a) {
      var a = i;
      if ((0, S.Z)(i)) {
        C.call(e, i, 1);
      } else {
        k(e, i);
      }
    }
  }
  return e;
};
const I = function (e, t) {
  var n = [];
  if (!e || !e.length) {
    return n;
  }
  var r = -1;
  var i = [];
  var a = e.length;
  for (t = (0, m.Z)(t, 3); ++r < a;) {
    var o = e[r];
    if (t(o, r, e)) {
      n.push(o);
      i.push(r);
    }
  }
  E(e, i);
  return n;
};
import * as T from /*webcrack:missing*/"./3131.js";
import * as D from /*webcrack:missing*/"./4003.js";
import * as _ from /*webcrack:missing*/"./6261.js";
import * as M from /*webcrack:missing*/"./7712.js";
const F = "622af28e7c5d1e54a2d1271d";
const z = "622af28e7c5d1e54a2d12c91";
const R = [{
  id: "category-1g8q0kd36yb7rq1g72oh269lzv4",
  iconClass: "icon-zhuye",
  name: "主页",
  updateTime: 0,
  children: (0, M.Z)([{
    type: "widget",
    name: i18n("纪念日"),
    widgetSize: "l",
    widgetName: f.Rm.timerMark,
    origin: "add",
    widgetData: g.gs,
    id: "icon-1gai64em2rym5ttafcmxxx7ohuw",
    updateTime: 0
  }, {
    type: "widget",
    name: "WeTab AI",
    widgetSize: "m",
    widgetName: f.Rm.chatgpt,
    origin: "add",
    id: "icon-1gs9ibrlr0uy5pa97ny9ir85pyp",
    updateTime: 0
  }, _.fy > 9 && {
    type: "widget",
    name: "热搜",
    widgetSize: "m",
    widgetName: f.Rm.hotsearch,
    origin: "add",
    id: "icon-1g8s5vs3qxhiflpughu7vp4m48r",
    updateTime: 0
  }, {
    type: "widget",
    name: "天气",
    widgetSize: "s",
    widgetName: f.Rm.weather,
    origin: "add",
    id: "icon-1g8s61g4b5fkox0qowum4yjp5bc",
    updateTime: 0
  }, {
    type: "widget",
    name: "日历",
    widgetSize: "s",
    widgetName: f.Rm.calendar,
    origin: "add",
    id: "icon-1gmsq34njpzpc3al4krevh5jg98",
    updateTime: 0
  }, {
    id: "folder-1h07g6h5aw9whlgk73chmecmj3a",
    origin: "add",
    type: "folder-icon",
    name: "文件夹",
    folderSize: "medium",
    children: [{
      name: "爱奇艺",
      target: "https://www.iqiyi.com/?vfm=m_470_zhd&fv=97e6d58de4b83d39",
      type: "site",
      bgType: "image",
      bgColor: "rgba(0, 0, 0, 0)",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/226c6aff617dbc253ce26d23be07c446.png",
      origin: z,
      id: "icon-1gnriafneb5pfstcicyal3gjkfk",
      updateTime: 0
    }, {
      name: "哔哩哔哩",
      target: "http://www.bilibili.com/",
      type: "site",
      bgType: "image",
      bgColor: "rgba(0, 0, 0, 0)",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/d8b62f4d64bda8800b1c788cd5ba3c68.png",
      origin: "622af28e7c5d1e54a2d12732",
      id: "icon-1g8s664ff5os3276x2ch6r9vowp",
      updateTime: 0
    }, {
      name: "抖音",
      target: "https://www.douyin.com",
      type: "site",
      bgType: "image",
      bgColor: "rgba(0, 0, 0, 0)",
      bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/8001dqh3p6ashqujabze1jzukbyung.png",
      origin: "630dd66558b016880e1b9096",
      id: "icon-1gnri1724vxo0e0jx7mill3gpww",
      updateTime: 0
    }, {
      name: "豆瓣",
      target: "http://www.douban.com",
      type: "site",
      bgType: "image",
      bgColor: "rgba(0, 0, 0, 0)",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/e9b0df13819c1029fdc4287a6a83bf6c.png",
      origin: "622af28e7c5d1e54a2d12720",
      id: "icon-1g8s67njg3z2kn9f75eeoz7d3uv",
      updateTime: 0
    }, {
      name: "IMDb",
      target: "https://www.imdb.com/",
      type: "site",
      bgType: "image",
      bgColor: "rgba(0, 0, 0, 0)",
      bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/8001cq336i4brbthw6kg0sdhdcl5gg.png",
      origin: "630dd66358b016880e1b6f99",
      id: "icon-1h07gcjr0kwtdpass4bliifl0wk",
      updateTime: 1683879251808
    }, {
      name: "腾讯视频",
      target: "https://v.qq.com/",
      type: "site",
      bgType: "image",
      bgColor: "rgba(0, 0, 0, 0)",
      bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/b8d1c93c53412b30a35217cff865dcd7.png",
      origin: "630dd65b58b016880e1b0b7b",
      id: "icon-1gnrib694a6lgfigh9mrqqdxybu",
      updateTime: 0
    }],
    updateTime: 0
  }, {
    type: "widget",
    name: "休闲小游戏",
    widgetSize: "m",
    widgetName: f.Rm.play,
    origin: "add",
    id: "icon-1got3jlj7qhxaek52effsumr21n",
    updateTime: 0
  }, {
    type: "widget",
    name: "AiPPT",
    widgetSize: "s",
    widgetName: f.Rm.aippt,
    origin: "add",
    id: "icon-1hksitk3mpaegpeukiq4mcbwe8r",
    updateTime: 0
  }, {
    name: "秘塔写作猫",
    target: "https://xiezuocat.com/?s=wetab",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1h07j6i0901cv6kzy83wh0eqv41.png",
    origin: "630dd66658b016880e1b9407",
    id: "icon-1h07jbsuo5x2bofl6hdmtxgrd4l",
    updateTime: 0
  }, {
    name: "爱淘宝",
    target: "https://ai.taobao.com/?pid=mm_50570328_39070332_145428725",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/346647fb95fbac4d303c93fa0a4936d3.png",
    origin: "622af28e7c5d1e54a2d12d9d",
    id: "icon-1g8s66sqvfy87kzpphjx8xlx9n2",
    updateTime: 0
  }, {
    name: "FlowUs",
    target: "https://flowus.cn/product?promotionChannel=GW_wetab",
    type: "site",
    bgType: "image",
    bgColor: "rgba(255, 255, 255, 1)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gubel7tvg6z5l4l4xarvf2zkkq.png",
    origin: "643f35f5f0ad9426f5daaa18",
    id: "icon-1gubeltck76a0wd20dyhnwg1rsq",
    updateTime: 0
  }, {
    type: "widget",
    name: "Ai论文生成",
    widgetSize: "s",
    widgetName: "widget-aipaper",
    origin: "add",
    id: "icon-1hnpvcuf5oe3mcn9s4g2yye34jp",
    updateTime: 0
  }, {
    name: "百度",
    target: "https://www.baidu.com/?tn=44004473_8_oem_dg",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/c9f7546ad597dd7fb53e8129b6c07877.png",
    origin: F,
    id: "icon-1g8s78hca58bhxv6c80kf84wosj",
    updateTime: 0
  }, {
    name: "新浪微博",
    target: "http://weibo.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/0f2ab700f8fff5b6e9ebc7d6a976981f.png",
    origin: "622af28e7c5d1e54a2d12c6d",
    id: "icon-1g8s7ejhf560bsujdtxj1zyhe5m",
    updateTime: 0
  }, {
    name: "知乎",
    target: "https://www.zhihu.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2b89ebe968d8cafe77a5c587daa79c7f.png",
    origin: "622af28e7c5d1e54a2d12d35",
    id: "icon-1g8s67miovq9qtby8d22v2g288r",
    updateTime: 0
  }, {
    name: "即时设计",
    target: "https://js.design/?source=wetab&plan=home",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gtqsbv9g1qfg7mgn3ug9nn2ltz.png",
    origin: "6436b9f8f0ad9426f5daa96b",
    id: "icon-1gtqukjb1fwfi8sj6vatm0zccys",
    updateTime: 0
  }, _.fy > 9 && {
    name: "天猫精选",
    target: "https://s.click.taobao.com/t?infinityType=tmall&e=m%3D2%26s%3DV5ucSP%2F1kT4cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRBynALhehQ4RitN3%2FurF3xNWm%2FATOfjswMAKinyMfntv%2FFgqkVH8133BMlVy3qlGE2srC8Mk09eQgZss1jm63jcHtRpEUy6RPalRWTdFmFpJPwiig1bxLMnyi1UQ%2F17I10hO9fBPG8oXH%2BQH9e66Y4%3D",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/be0ab26cf4dc6239c98791f7b18b633a.png",
    origin: "622af28e7c5d1e54a2d12dcf",
    id: "icon-1g8s7jhjhz9pd8656tb20ccczb4",
    updateTime: 0
  }, {
    name: "京东商城",
    target: "https://www.infinitynewtab.com/jd.pro.html ",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/cee009549b352def723ba09d6da4b742.png",
    origin: "622af28e7c5d1e54a2d12dc9",
    id: "icon-1g8s67eh0dnmckwgevcwkvpli9k",
    updateTime: 0
  }, {
    name: "唯品会",
    target: "https://t.vip.com/zA5jOm8R5e6",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127100741.png.png",
    origin: "622af28e7c5d1e54a2d12db8",
    id: "icon-1h2n32vnmrbc41nw8qsprvbsak1",
    updateTime: 0
  }, {
    name: "稿定设计",
    target: "https://www.gaoding.com/utms/970392bdfeed4e8680a0ffc585dd1bb6",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/1676018043738.png",
    origin: "63e60b4e4da0b2b1235c2d0e",
    id: "icon-1gotab1sd2waj137ki1eedu278r",
    updateTime: 0
  }, {
    name: "秘塔AI搜索",
    target: "https://metaso.cn/?s=wetaba",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1hnpur0aa82nycz000e9ra0w271.png",
    origin: "65e03d18f27dfed6cec7bca6",
    id: "icon-1hnpv13erjhr5wyjgmp1vzaxg9t",
    updateTime: 0,
    total: 0,
    lasttime: 0
  }, {
    name: "AI旋风",
    target: "https://www.aixuanfeng.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1hajpee1j1e6x5lraptd3zn2ixi.png",
    origin: "65081656e06f45a48a134de9",
    id: "icon-1hajpfb2f5l5ttl2yeonq5xlx42",
    updateTime: 0
  }])
}, {
  id: "category-1g8q0kkicdt0jp7bwr4yxowc7mg",
  iconClass: "icon-sheji",
  name: "设计",
  updateTime: 0,
  children: [{
    name: "稿定设计",
    target: "https://www.gaoding.com/utms/970392bdfeed4e8680a0ffc585dd1bb6",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/1676018043738.png",
    origin: "63e60b4e4da0b2b1235c2d0e",
    id: "icon-1gotab1sd2waj137ki1eedu2321",
    updateTime: 0
  }, {
    name: "即时设计",
    target: "https://js.design/?source=wetab&plan=design",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gtqsbv9g1qfg7mgn3ug9nn2ltz.png",
    origin: "6436b9f8f0ad9426f5daa96b",
    id: "icon-1gtqukjb1fwfi8sj6vatm0zc321",
    updateTime: 0
  }, {
    name: "花瓣",
    target: "http://huaban.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/fa2e802d92fb3b02a043aea4f5f404a3.png",
    origin: "622af28e7c5d1e54a2d12745",
    id: "icon-1g8s6atfjxtojkolhbiunb3gg3q",
    updateTime: 0
  }, {
    name: "优设-UISDC: 优秀网页设",
    target: "http://www.uisdc.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/b647f5965ccc3ffc71d3aa6aac0eeb4a.png",
    origin: "622af28e7c5d1e54a2d12ce3",
    id: "icon-1g8s6n6605tp2wrv682t7ffnv5j",
    updateTime: 0
  }, {
    name: "Pinterest",
    target: "https://www.pinterest.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/40ccf61bdd88242bed21836b83b8c65b.png",
    origin: "622af28e7c5d1e54a2d12c66",
    id: "icon-1g8s6ni6ocp5ujb5cptibhd04p1",
    updateTime: 0
  }, {
    name: "站酷 (ZCOOL) - 设计师",
    target: "http://www.zcool.com.cn/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/2e98e9396fce71e1db1d7c222f5cb898.png",
    origin: "622af28e7c5d1e54a2d12b01",
    id: "icon-1g8s6nru8j9snfaj0zsmmwbffjr",
    updateTime: 0
  }, {
    name: "500px",
    target: "https://500px.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a573a1affeb9626b30a024fa23fae232.png",
    origin: "622af28e7c5d1e54a2d12d95",
    id: "icon-1g8s6o0080p3a09rc100f6je8gd",
    updateTime: 0
  }, {
    name: "Dribbble",
    target: "https://dribbble.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127093418.png",
    origin: "622af28e7c5d1e54a2d12d97",
    id: "icon-1g8s6o5k06jzpqyrzw9yweho070",
    updateTime: 0
  }, {
    name: "ArtStation",
    target: "https://www.artstation.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150327085725.png",
    origin: "622af28e7c5d1e54a2d128f9",
    id: "icon-1g8s6od4gorpqelp27gs0jwbzdc",
    updateTime: 0
  }, {
    name: "Behance",
    target: "http://behance.com/bacosta",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/9caab10d044da062122a77b94d94a2a4.png",
    origin: "622af28e7c5d1e54a2d12809",
    id: "icon-1g8s6ql6bizqee4ic4c7arjc08x",
    updateTime: 0
  }]
}, {
  id: "category-1g8q0knpscgq24ws3sg5egbdtou",
  iconClass: "icon-chengxu",
  name: "程序",
  updateTime: 0,
  children: [{
    name: "果核剥壳",
    target: "https://www.ghxi.com/?utm_source=wetab",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/ghxi_1677135775783.png",
    origin: "63f7121c3969b024ecdfe2f6",
    id: "icon-1gpuibflh6kc91q9sk8zskzmvd6",
    updateTime: 0
  }, {
    name: "小众软件",
    target: "https://www.appinn.com/?utm_source=wetab",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/appinn_1677135775783.png",
    origin: "63f711b23969b024ecdfe2f5",
    id: "icon-1gpuicbr5k866g8nd9himlcldhw",
    updateTime: 0
  }, {
    name: "GitHub",
    target: "https://github.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/eb306ae2b122e7dde6e87fdf2970b17e.png",
    origin: "622af28e7c5d1e54a2d126fa",
    id: "icon-1g8s7gnco9ddxfnlqvbcr5jqt1q",
    updateTime: 0
  }, {
    name: "V2EX",
    target: "http://www.v2ex.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/cc9b4b985a4a2c7d034dc18bf21ea019.png",
    origin: "622af28e7c5d1e54a2d12be7",
    id: "icon-1g9jt36iq7hx22bjwlmn0f8vqpq",
    updateTime: 0
  }, {
    name: "蓝点网",
    target: "https://www.landiannews.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150405105756.png",
    origin: "630dd66358b016880e1b6fd3",
    id: "icon-1got5p8hkvbqb7kza383xr7mrcl",
    updateTime: 0
  }, {
    name: "码云",
    target: "http://git.oschina.net/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/1ba16d6fdf8ccd6a07eca98a9c908a21.png",
    origin: "622af28e7c5d1e54a2d12d52",
    id: "icon-1g9jt811fqio56gpy3nhbrjzll5",
    updateTime: 0
  }, {
    name: "慕课网",
    target: "http://www.imooc.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/6e5da7bc6eaf3ecce1ca1affcf20fca5.png",
    origin: "622af28e7c5d1e54a2d126fd",
    id: "icon-1g9jtcbv8v1k84yqct8l3e3hf4o",
    updateTime: 0
  }, {
    name: "开源中国",
    target: "http://www.oschina.net/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/8059449523d434fc2b5a60f0aba0670c.png",
    origin: "622af28e7c5d1e54a2d12b55",
    id: "icon-1g9jtdhr0lbplitqs1xtoipch9v",
    updateTime: 0
  }, {
    name: "CSDN",
    target: "http://www.csdn.net/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/226d9bd6e7176a22d1696d751947a178.png",
    origin: "622af28e7c5d1e54a2d129cd",
    id: "icon-1g8s7eqveirhzg0r37fwrby56gc",
    updateTime: 0
  }, {
    name: "人人都是产品经理",
    target: "http://www.woshipm.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/8bffc9cf5c9f6e5980bf21e7af3a4462.png",
    origin: "622af28e7c5d1e54a2d12d08",
    id: "icon-1g8s7842bizrwubewdpovko6bxy",
    updateTime: 0
  }, {
    name: "什么值得读",
    target: "https://shenmezhidedu.com/?from=wetab",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon-v2/icon1gtqr8lr31texjyjyepfpa0zyvr.png",
    origin: "630dd66558b016880e1b8d3f",
    id: "icon-1gtqrhqsgqtuajl1q7gcljzvd1l",
    updateTime: 0
  }]
}, {
  id: "category-1g8q0krkbktusp8iy05pniynhp4",
  iconClass: "icon-gouwu",
  name: "购物",
  updateTime: 0,
  children: [{
    name: "Amazon",
    target: "https://inftab.com/amazon/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/e67eed044bf08fbcac16a0527fcc165a.png",
    origin: "622af28e7c5d1e54a2d12da1",
    id: "icon-1g8s7j85i7i6fx9yrqdnw34fjj4",
    updateTime: 0
  }, {
    name: "淘宝网",
    target: "https://ai.taobao.com/?pid=mm_50570328_39070332_145428725",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/05dfef464cb99231a44521fde12adc80.png",
    origin: "622af28e7c5d1e54a2d12db6",
    id: "icon-1g8s6afo2w5jm7y945jlhea6n4z",
    updateTime: 0
  }, {
    name: "当当网",
    target: "http://union.dangdang.com/transfer.php?from=P-319540-infinity&amp;amp;amp;ad_type=10&amp;amp;amp;sys_id=1&amp;amp;amp;backurl=http://www.dangdang.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/513b4167dd3c9bfd83f6ceae56d7bf7f.png",
    origin: "622af28e7c5d1e54a2d12da8",
    id: "icon-1g8s7akil7kgozgjf0dk7h1mh6o",
    updateTime: 0
  }, {
    name: "什么值得买",
    target: "http://www.smzdm.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/82083b3712985e0aded08d10e50cb902.png",
    origin: "622af28e7c5d1e54a2d12756",
    id: "icon-1g8s7jo11jvirlcksbc0cy9v8po",
    updateTime: 0
  }, {
    name: "飞猪",
    target: "https://s.click.taobao.com/t?infinityType=alitrip&e=m%3D2%26s%3DgWbgDzAE0zMcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAg8q8DF9oG0OjiRkxbhwQNwqDrUHgVoNpvVKm9Ob0IT9VuIJQ3hZR078JvDfi2GotpoTgr1w%2FQDpNgYL1oa%2FqkrlSg55GVX5wQpJxXZWmPBrLyo8ABgHx20aHks2%2FfPFu3EqY%2Bakgpmw",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a7ed1a2bd88d75ed6a04c8a7aeb26097.png",
    origin: "622af28e7c5d1e54a2d12da3",
    id: "icon-1g8s7jta1hxeg95e9om4z6pky6j",
    updateTime: 0
  }, {
    name: "识货",
    target: "http://www.shihuo.cn/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/1c3dda56f26a98de85d4e55c87cd7622.png",
    origin: "622af28e7c5d1e54a2d12c65",
    id: "icon-1g8s7k2opy8en6s2vcsgzzy376d",
    updateTime: 0
  }]
}];
const B = [{
  id: "category-1g8q0kd36yb7rq1g72oh269lzv4",
  iconClass: "icon-zhuye",
  name: i18n("主页"),
  updateTime: 0,
  children: [{
    type: "widget",
    name: i18n("生日"),
    widgetSize: "l",
    widgetName: f.Rm.timerBirthday,
    origin: "add",
    id: "icon-1g8s6fddgfpf88hbu79jz7c3dss",
    updateTime: 0
  }, {
    type: "widget",
    name: i18n("倒计时"),
    widgetSize: "m",
    widgetName: f.Rm.timerCountdown,
    origin: "add",
    widgetData: g.VU,
    id: "icon-1g8s63vbgzduwckgrrvydofrogh",
    updateTime: 0
  }, {
    type: "widget",
    name: i18n("纪念日"),
    widgetSize: "m",
    widgetName: f.Rm.timerMark,
    origin: "add",
    widgetData: g.gs,
    id: "icon-1gai64em2rym5ttafcmxxx7ohuw",
    updateTime: 0
  }, {
    type: "widget",
    name: i18n("今年余额"),
    widgetSize: "m",
    widgetName: f.Rm.timerYear,
    origin: "add",
    id: "icon-1gai798l0apnbtop5ny9kn16y48",
    updateTime: 0
  }, {
    type: "widget",
    name: i18n("笔记"),
    widgetSize: "s",
    widgetName: f.Rm.note,
    origin: "add",
    id: "icon-1g8q0q0camb5eif8m3v1686w2td",
    updateTime: 0
  }, {
    type: "widget",
    name: i18n("待办"),
    widgetSize: "s",
    widgetName: f.Rm.todo,
    origin: "add",
    id: "icon-1g8q0ppucelj7k7etbzgcm6a1tx",
    updateTime: 0
  }, {
    name: "Instagram",
    target: "http://www.instagram.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a6d0e807a4a514867dd675cbc63890ed.png",
    origin: "622af28e7c5d1e54a2d12726",
    id: "icon-1ggua8dmdpoljp3hvdw3v43a4ra",
    updateTime: 0
  }, {
    name: "Facebook",
    target: "https://www.facebook.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/4277652ad8ce6b2d8377b092ad31507c.png",
    origin: "622af28e7c5d1e54a2d12722",
    id: "icon-1ggua8ffck1vsqt8a7gujlf2nnp",
    updateTime: 0
  }, {
    type: "widget",
    name: i18n("天气"),
    widgetSize: "s",
    widgetName: f.Rm.weather,
    origin: "add",
    id: "icon-1g8s61g4b5fkox0qowum4yjp5bc",
    updateTime: 0
  }, {
    name: "YouTube",
    target: "https://www.youtube.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a6d94620efabfdc901dc1d28dcbcb655.png",
    origin: "622af28e7c5d1e54a2d12ca4",
    id: "icon-1ggua8u6s4t15v3wacn33v59eet",
    updateTime: 0
  }, {
    name: "Twitter",
    target: "https://www.twitter.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/8f03e3943a4b730e328bb1d1906e5856.png",
    origin: "622af28e7c5d1e54a2d12734",
    id: "icon-1ggua8s2l1m609rnza8z8ba8es5",
    updateTime: 0
  }, {
    name: "Gmail",
    target: "https://mail.google.com/mail/u/0/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/7b6cee8dfbfeff522a7668c924429ad7.png",
    origin: "622af28e7c5d1e54a2d12c78",
    id: "icon-1ggua8oksg9j0vh958tfqh5n8cb",
    updateTime: 0
  }, {
    name: "Netflix",
    target: "http://www.netflix.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/7ece00d008c84a85c61e2ff06ef62134.png",
    origin: "622af28e7c5d1e54a2d12718",
    id: "icon-1ggua999j23999wqmmbb0pja62v",
    updateTime: 0
  }, {
    name: "Google",
    target: "https://www.google.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/73aa787ba15e632af86263a7649d9d26.png",
    origin: "622af28e7c5d1e54a2d12c79",
    id: "icon-1ggua97n4m8obbnystn2w51ntxa",
    updateTime: 0
  }, {
    name: "TED: Ideas worth spreading",
    target: "http://www.ted.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/5d496982170c473e70442271b33df846.png",
    origin: "622af28e7c5d1e54a2d1286c",
    id: "icon-1gguaarmct65og99acsl9jp6a1i",
    updateTime: 0
  }, {
    name: "Wikipedia",
    target: "https://www.wikipedia.org/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127093244.png",
    origin: "622af28e7c5d1e54a2d12d91",
    id: "icon-1gguaa4k4bq9743f45hi60f9ja7",
    updateTime: 0
  }, {
    name: "Snapchat",
    target: "https://www.snapchat.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/2d101f23b606f3f14a8b134ae93c0903.png",
    origin: "622af28e7c5d1e54a2d12d70",
    id: "icon-1gguaacasm4rwp99mo09ructnrf",
    updateTime: 0
  }, {
    name: "IMDB",
    target: "http://www.imdb.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127092223.png",
    origin: "622af28e7c5d1e54a2d12725",
    id: "icon-1gguaaqnct4fd2h5m1mvlr2cm9j",
    updateTime: 0
  }, {
    name: "linkedin",
    target: "https://es.linkedin.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/fa3a83e45e812b26da5ec80cb1db823b.png",
    origin: "622af28e7c5d1e54a2d12b29",
    id: "icon-1gguaer0jyhuun7y7c3e70fapo6",
    updateTime: 0
  }, {
    name: "CNN",
    target: "http://www.cnn.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150202041300.png",
    origin: "622af28e7c5d1e54a2d12dcb",
    id: "icon-1gguaf20rlbxg2lut6y9gu8schm",
    updateTime: 0
  }, {
    name: "Flipboard",
    target: "https://flipboard.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/4b053996445e38f1be8f3541f8eb5d3c.png",
    origin: "622af28e7c5d1e54a2d12b08",
    id: "icon-1gguafj0s9pvknsp0k1k13nv4s4",
    updateTime: 0
  }, {
    name: "Yandex",
    target: "http://www.yandex.ru/?clid=2324057",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/8229c540b1f8585c06a1bdfb35984979.png",
    origin: "622af28e7c5d1e54a2d12766",
    id: "icon-1gguafvqvpwpx7yhv507p2qzpdi",
    updateTime: 0
  }, {
    name: "9gag",
    target: "https://9gag.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/usericon/2ca84512c35a9aad05abee27e481dcc7.png",
    origin: "622af28e7c5d1e54a2d1283d",
    id: "icon-1gguagccgxs1158cp6mgggf4s74",
    updateTime: 0
  }]
}, {
  id: "category-1gh034ki1q6kc7nt6fac9qnxhr7",
  iconClass: "icon-yule",
  name: "Recreation",
  updateTime: 0,
  children: [{
    name: "Steam",
    target: "http://store.steampowered.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/9001chjhi3te5c95m8bbc8sd5wddd1.png",
    origin: "630dd66058b016880e1b4c86",
    id: "icon-1gh037jsd4on1qi6nykdm7qjjuy",
    updateTime: 0
  }, {
    name: "Uplay",
    target: "https://uplay.ubisoft.com/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/8001e8ruhql25nq2dssknar8w7kdhk.png",
    origin: "630dd66458b016880e1b85c3",
    id: "icon-1gh03fmabubg589hl7e2jn8yisf",
    updateTime: 0
  }, {
    name: "Origin",
    target: "https://origin.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/8001d5kkfhg19c6tzp092tzhoj4khx.png",
    origin: "630dd66558b016880e1b8efd",
    id: "icon-1gh03qcbgma12oljklcv8w6lkuz",
    updateTime: 0
  }, {
    name: "PlayStation",
    target: "http://www.PlayStation.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127101047.png",
    origin: "622af28e7c5d1e54a2d12dc3",
    id: "icon-1gh041cuntr6v9gjc62z87iv31y",
    updateTime: 0
  }, {
    name: "Epic Games",
    target: "http://epicgames.com",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/8001cmggv7bsnc11qmmc7qyib061bf.png",
    origin: "630dd66258b016880e1b5eaf",
    id: "icon-1gh04htvcjebf4fi3tzareivfxd",
    updateTime: 0
  }]
}, {
  id: "category-1g8q0krkbktusp8iy05pniynhp4",
  iconClass: "icon-gouwu",
  name: i18n("购物"),
  updateTime: 0,
  children: [{
    name: "eBay",
    target: "https://www.ebay.com?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338095340&customid=infinity&toolid=10001&mkevt=1",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/c11671f9b92cd56a5ef44aa0ea36e099.png",
    origin: "622af28e7c5d1e54a2d12da9",
    id: "icon-1ggua9npsj7mxpr4g3sojn7kg5a",
    updateTime: 0
  }, {
    name: "Amazon",
    target: "https://inftab.com/amazon/",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/cbbce9c89098a7b7b4e27fde39bb492e.png",
    origin: "622af28e7c5d1e54a2d12f05",
    id: "icon-1ggua885es1oxkw0knykzhu4xhf",
    updateTime: 0
  }, {
    name: "Booking",
    target: "https://www.booking.com/index.html?aid=1267011",
    type: "site",
    bgType: "image",
    bgColor: "rgba(0, 0, 0, 0)",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/83e58c13ed40dc8393297d43d2639cce.png",
    origin: "622af28e7c5d1e54a2d12ce0",
    id: "icon-1gh02u4ht6qq81ta6jb8pvew2ft",
    updateTime: 0
  }]
}];
const N = D.sM ? R : B;
const L = D.sM ? ["icon-1g8s78hca58bhxv6c80kf84wosj", "icon-1g8s67miovq9qtby8d22v2g288r", "icon-1g8s66sqvfy87kzpphjx8xlx9n2", "icon-1g8s67eh0dnmckwgevcwkvpli9k", "icon-1g8s6a2abxm8bet7qhh3u4gwm2p", "icon-1g8s664ff5os3276x2ch6r9vowp"] : ["icon-1ggua8oksg9j0vh958tfqh5n8cb", "icon-1gguaacasm4rwp99mo09ructnrf", "icon-1ggua8dmdpoljp3hvdw3v43a4ra", "icon-1ggua999j23999wqmmbb0pja62v", "icon-1ggua8s2l1m609rnza8z8ba8es5", "icon-1ggua8ffck1vsqt8a7gujlf2nnp"];
const P = (0, T.Q_)(d.BU.icon, {
  syncStorage: {
    watch: ["icons", "dockIdList", "iconLogData"]
  },
  syncCloud: {
    watch: ["icons", "dockIdList"]
  },
  state: () => ({
    icons: N,
    dockIdList: L,
    activeCategoryIndex: 0,
    dropPageIndex: null,
    dragIconId: "",
    dragCategoryId: "",
    dragDockId: "",
    dragIconToDockDuplicateIndex: -1,
    dragIconToDockDropId: "",
    dragIconToDocTiggerTime: 0,
    addIconTriggerTime: 0,
    folderDragStatus: undefined,
    mergedRecordData: undefined,
    currentOpenFolder: {
      id: "",
      name: "",
      origin: "",
      type: "folder-icon",
      folderSize: "mini",
      children: [],
      updateTime: 0
    },
    cacheNewFolderIcon: undefined,
    isIconMoveToFolder: false,
    dragIconPosition: "",
    folerModalShow: false,
    iconLogData: {}
  }),
  getters: {
    iconsOriginList() {
      const e = new Set();
      this.icons.forEach(t => {
        t.children.forEach(t => {
          if (t.type === "folder-icon") {
            t.children.forEach(t => {
              e.add(t.origin);
            });
          } else {
            e.add(t.origin);
          }
        });
      });
      return e;
    },
    iconsHotsearchList() {
      const e = new Set();
      this.icons.forEach(t => {
        t.children.forEach(t => {
          if (t.type === "widget" && t.widgetName === f.Rm.hotsearch) {
            e.add(t.widgetData);
          }
        });
      });
      return e;
    },
    dockList() {
      const e = new Map();
      this.icons.forEach(t => {
        let {
          children: n
        } = t;
        n.forEach(t => {
          if (t.type === "site") {
            e.set(t.id, t);
          } else if (t.type === "folder-icon") {
            t.children.forEach(t => {
              if (t.type === "site") {
                e.set(t.id, t);
              }
            });
          }
        });
      });
      this.dragIconToDocTiggerTime;
      const t = [...this.dockIdList];
      if (this.dragIconToDockDropId) {
        if (this.dragIconToDockDropId === "last") {
          const n = this.dragIconToDockDuplicateIndex === -1 ? this.dragIconId : `temp-${this.dragIconId}`;
          t.splice(t.length, 0, n);
          e.set(n, {
            ...e.get(this.dragIconId),
            id: n
          });
        } else {
          const n = t.findIndex(e => e === this.dragIconToDockDropId);
          if (n > -1) {
            const r = this.dragIconToDockDuplicateIndex === -1 ? this.dragIconId : `temp-${this.dragIconId}`;
            if (this.dockList.map(e => e.id).findIndex(e => e === r) <= n) {
              t.splice(n + 1, 0, r);
            } else {
              t.splice(n, 0, r);
            }
            e.set(r, {
              ...e.get(this.dragIconId),
              id: r
            });
          }
        }
      }
      return t.map(t => e.get(t)).filter(e => !!e);
    },
    isDraggingIcon() {
      return !!this.dragIconId;
    },
    isDraggingDockIcon() {
      return !!this.dragDockId;
    },
    isDraggingCategory() {
      return !!this.dragCategoryId;
    },
    categoryIdList() {
      return this.icons.map(e => e.id);
    },
    activeCategory() {
      return this.icons[this.activeCategoryIndex];
    },
    allIcons() {
      const e = [];
      this.icons.forEach(t => {
        t.children.forEach(t => {
          if (t.type === "site") {
            e.push(t);
          } else if (t.type === "folder-icon") {
            t.children.forEach(t => {
              e.push(t);
            });
          }
        });
      });
      return e;
    },
    logData() {
      return this.iconLogData;
    }
  },
  actions: {
    setDropPageIndex(e) {
      this.dropPageIndex = e;
    },
    setDragIconId(e) {
      this.dragIconId = e;
      this.dragIconToDockDuplicateIndex = this.dockIdList.findIndex(t => t === e);
    },
    setDragDockIconId(e) {
      this.dragDockId = e;
    },
    setDragCategoryId(e) {
      if (e) {
        const t = this.icons.findIndex(t => {
          let {
            id: n
          } = t;
          return e === n;
        });
        this.activeCategoryIndex = t;
      }
      this.dragCategoryId = e;
    },
    saveCategory(e) {
      let {
        id: t,
        name: n,
        iconClass: r
      } = e;
      if (t) {
        this.icons.some(e => {
          if (e.id === t) {
            e.name = n;
            e.iconClass = r;
            e.updateTime = Date.now();
            return true;
          }
        });
      } else {
        this.icons.push({
          id: (0, h.kb)("category-"),
          iconClass: r,
          name: n,
          updateTime: Date.now(),
          children: []
        });
        this.activeCategoryIndex = this.icons.length - 1;
      }
      this.icons = [...this.icons];
    },
    deleteCategory(e) {
      this.icons.some((t, n) => {
        if (t.id === e) {
          const e = this.icons.splice(n, 1)[0].children.map(e => e.id);
          I(this.dockIdList, t => e.includes(t));
          return true;
        }
      });
      if (this.activeCategoryIndex > this.icons.length - 1) {
        this.activeCategoryIndex = this.icons.length - 1;
      }
      if (this.icons.length === 0) {
        setTimeout(() => {
          this.saveCategory({
            ...u[0],
            id: ""
          });
        }, 200);
      } else {
        this.icons = [...this.icons];
      }
    },
    selectCategory(e) {
      this.activeCategoryIndex = e;
    },
    selectCategoryById(e) {
      const t = this.icons.findIndex(t => t.id === e);
      if (t > -1) {
        this.activeCategoryIndex = t;
      }
    },
    findIconIndex(e) {
      let t = this.activeCategoryIndex;
      let n = null;
      this.activeCategory.children.some((t, r) => t.id === e && (n = r, true));
      if (typeof n == "number") {
        return [t, n];
      } else {
        this.icons.some((r, i) => i !== this.activeCategoryIndex && r.children.some((r, a) => r.id === e && (t = i, n = a, true)));
        if (typeof n == "number") {
          return [t, n];
        } else {
          return null;
        }
      }
    },
    changeWidgetSize(e, t) {
      const n = Date.now();
      const r = this.findIconIndex(e);
      if (r) {
        const [e, i] = r;
        Object.assign(this.icons[e].children[i], {
          updateTime: n,
          widgetSize: t
        });
        this.icons[e].updateTime = n;
      }
      this.icons = [...this.icons];
    },
    saveIcon(e) {
      var t;
      const n = Date.now();
      if (this.folerModalShow && (t = this.currentOpenFolder) !== null && t !== undefined && t.id) {
        const t = this.currentOpenFolder?.id;
        const i = this.findIconIndex(t);
        const a = [...this.icons];
        if (i) {
          const [t, r] = i;
          const o = a[t].children[r];
          const s = o.children.find(t => t.id === e.id);
          Object.assign(s, {
            ...e,
            updateTime: n
          });
          o.updateTime = n;
          a[t].updateTime = n;
        }
        this.icons = a;
      } else {
        if (e.type === "site") {
          e.target = (0, h.UN)(e.target);
        }
        if (e.id) {
          const t = this.findIconIndex(e.id);
          if (t) {
            const [r, i] = t;
            Object.assign(this.icons[r].children[i], {
              ...e,
              updateTime: n
            });
            this.icons[r].updateTime = n;
          } else {
            let t = -1;
            let r = -1;
            let i = -1;
            this.icons.some((n, a) => n.children.some((n, o) => {
              if (n.type == "folder-icon") {
                return n.children.some((n, s) => {
                  if (n.id === e.id) {
                    t = a;
                    r = o;
                    i = s;
                    return true;
                  }
                });
              }
            }));
            if (t > -1 && r > -1 && i > -1) {
              const a = this.icons[t].children[r];
              if (a.children) {
                Object.assign(a.children[i], {
                  ...e,
                  updateTime: n
                });
                this.icons[t].updateTime = n;
              }
            }
          }
        } else {
          this.activeCategory.children.push({
            ...e,
            id: (0, h.kb)("icon-"),
            updateTime: n
          });
          this.activeCategory.updateTime = n;
          this.addIconTriggerTime = n;
          if (e.type === "widget") {
            (0, g.S9)(e.name);
          }
        }
        this.icons = [...this.icons];
      }
    },
    saveIconOfCategory(e, t) {
      if (e.type === "site") {
        e.target = (0, h.UN)(e.target);
      }
      const n = Date.now();
      this.icons[t].children.push({
        ...e,
        id: (0, h.kb)("icon-"),
        updateTime: n
      });
      this.activeCategoryIndex = t;
      this.activeCategory.updateTime = n;
      this.addIconTriggerTime = n;
      if (e.type === "widget") {
        (0, g.S9)(e.name);
      }
      this.icons = [...this.icons];
    },
    getIconData(e) {
      const t = this.findIconIndex(e);
      if (t) {
        const [e, n] = t;
        return this.icons[e].children[n];
      }
      return null;
    },
    saveWidgetData(e, t) {
      const n = Date.now();
      const r = this.findIconIndex(e);
      if (r) {
        const [e, i] = r;
        Object.assign(this.icons[e].children[i], {
          widgetData: t,
          updateTime: n
        });
        this.icons[e].updateTime = n;
        this.icons = [...this.icons];
      }
    },
    deleteIcon(e) {
      const t = this.findIconIndex(e);
      if (t) {
        const [e, n] = t;
        this.icons[e].children.splice(n, 1);
        this.icons[e].updateTime = Date.now();
        this.icons = [...this.icons];
      }
    },
    dragSortCategory(e, t) {
      if (e === t) {
        return false;
      }
      const n = this.icons.findIndex(e => {
        let {
          id: n
        } = e;
        return t === n;
      });
      const r = this.icons.findIndex(t => {
        let {
          id: n
        } = t;
        return e === n;
      });
      if (n === -1 || r === -1) {
        return false;
      }
      const i = this.icons[r];
      if (n > r) {
        this.icons.splice(n + 1, 0, i);
        this.icons.splice(r, 1);
      } else {
        this.icons.splice(n, 0, i);
        this.icons.splice(r + 1, 1);
      }
      this.activeCategoryIndex = n;
      this.icons = [...this.icons];
      return true;
    },
    dragSortIcon(e, t, n) {
      const r = this.findIconIndex(t);
      const i = this.findIconIndex(e);
      if (!r || !i) {
        return false;
      }
      const [a, o] = r;
      const [s, l] = i;
      const c = this.icons[s].children[l];
      if (s === a) {
        const e = n === "after" ? o + 1 : o;
        const t = o > l ? l : l + 1;
        this.icons[a].children.splice(e, 0, c);
        this.icons[s].children.splice(t, 1);
      } else {
        this.icons[a].children.splice(o, 0, c);
        this.icons[s].children.splice(l, 1);
      }
      this.icons = [...this.icons];
      return true;
    },
    dragSortIconToPage(e, t) {
      const n = this.icons[t].children;
      const r = n.findIndex(t => t.id === e);
      if (n.length > 0 || r > -1) {
        return false;
      }
      if (t !== this.dropPageIndex) {
        return false;
      }
      const i = this.findIconIndex(e);
      if (!i) {
        return false;
      }
      const [a, o] = [t, 0];
      const [s, l] = i;
      const c = this.icons[s].children[l];
      this.icons[a].children.splice(o, 0, c);
      this.icons[s].children.splice(l, 1);
      this.icons = [...this.icons];
      this.setDropPageIndex(null);
      return true;
    },
    dragSortDockIcon(e, t) {
      if (e === t) {
        return false;
      }
      const n = this.dockIdList.findIndex(e => t === e);
      const r = this.dockIdList.findIndex(t => e === t);
      return n !== -1 && r !== -1 && (n > r ? (this.dockIdList.splice(n + 1, 0, e), this.dockIdList.splice(r, 1)) : (this.dockIdList.splice(n, 0, e), this.dockIdList.splice(r + 1, 1)), this.dockIdList = [...this.dockIdList], true);
    },
    dragSortDockIconToLast(e) {
      if (this.dockIdList.length === 0) {
        this.dockIdList = [e];
        return true;
      }
      const t = this.dockIdList[this.dockIdList.length - 1];
      return this.dragSortDockIcon(e, t);
    },
    dragIconIntoDock(e, t) {
      return (this.dragIconToDockDuplicateIndex !== -1 || e !== t) && (!(this.dragIconToDockDuplicateIndex > -1) || `temp-${e}` !== t) && (this.dragIconToDockDropId = t, this.dragIconToDocTiggerTime = Date.now(), true);
    },
    dragIconIntoDockLast(e) {
      return this.dragIconIntoDock(e, "last");
    },
    cancelDragIconIntoDock() {
      this.dragIconToDockDropId = "";
    },
    dragIconIntoDockEnd() {
      if (!this.dragIconToDockDropId) {
        this.cancelDragIconIntoDock();
        return;
      }
      const e = this.dockList.map(e => {
        let {
          id: t
        } = e;
        return t;
      }).filter(e => !e.startsWith("temp-"));
      if (!(e.length > 12)) {
        this.dockIdList = e;
      }
      this.cancelDragIconIntoDock();
    },
    deleteDockItem(e) {
      const t = this.dockIdList.findIndex(t => t === e);
      if (t > -1) {
        this.dockIdList.splice(t, 1);
        this.dockIdList = [...this.dockIdList];
      }
    },
    updateIconLogData(e) {
      const t = {
        ...this.iconLogData
      };
      const n = this.iconLogData[e];
      if (n) {
        n.lasttime = Date.now();
        n.total = n.total + 1;
      } else {
        t[e] = {
          total: 1,
          lasttime: Date.now()
        };
      }
      this.iconLogData = t;
    },
    setFolderMergeStatus(e) {
      this.folderDragStatus = e || undefined;
    },
    setDragIconPosition(e) {
      this.dragIconPosition = e;
    },
    setIconMoveToFolder(e) {
      this.isIconMoveToFolder = e;
    },
    setFolerModalShow(e) {
      this.folerModalShow = e;
    },
    setFolderOutStatus() {
      this.folderDragStatus &&= {
        ...this.folderDragStatus,
        canMerge: false,
        expandShow: false
      };
    },
    updateFolderMergeStatus(e) {
      this.folderDragStatus &&= {
        ...this.folderDragStatus,
        ...e
      };
    },
    setMergedRecordData(e) {
      this.mergedRecordData = e || undefined;
    },
    mergeSiteIconToFolder() {
      const e = this.folderDragStatus;
      if (!e) {
        return;
      }
      const t = e.dragIconType === "site" && e.dropIconType === "site";
      const {
        dragId: n,
        dropId: r
      } = e;
      const i = this.findIconIndex(r);
      const a = this.findIconIndex(n);
      if (!i || !a) {
        return false;
      }
      const o = [...this.icons];
      const [s, l] = i;
      const [c, u] = a;
      const p = o[c].children[u];
      const d = (0, h.kb)("folder-");
      if (t) {
        const e = o[s].children[l];
        const t = {
          id: d,
          origin: "add",
          type: "folder-icon",
          name: i18n("文件夹"),
          folderSize: "mini",
          children: [e, p],
          updateTime: Date.now()
        };
        o[s].children[l] = t;
        this.cacheNewFolderIcon = t;
      } else {
        const e = o[s].children[l];
        if (e.children.find(e => e.id === p.id)) {
          return;
        }
        e.children.push(p);
        e.updateTime = Date.now();
      }
      o[c].children.splice(u, 1);
      o[s].updateTime = Date.now();
      this.icons = o;
      this.setMergedRecordData({
        ...e,
        iconId: t ? d : r
      });
    },
    changeFolderIconSize(e, t) {
      const n = Date.now();
      const r = this.findIconIndex(e);
      if (r) {
        const [e, i] = r;
        if (t === this.icons[e].children[i].folderSize) {
          return;
        }
        Object.assign(this.icons[e].children[i], {
          updateTime: n,
          folderSize: t
        });
        this.icons[e].updateTime = n;
      }
      this.icons = [...this.icons];
    },
    releaseIconFolder(e) {
      const t = this.findIconIndex(e);
      if (!t) {
        return;
      }
      const n = Date.now();
      const [r, i] = t;
      const a = [...this.icons];
      const o = a[r].children[i];
      a[r].children.splice(i, 1);
      if (o.children.length !== 0) {
        a[r].children.splice(i, 0, o.children[0]);
        a[r].children = a[r].children.concat(o.children.filter((e, t) => t > 0));
        a[r].updateTime = n;
        this.icons = a;
      } else {
        this.icons = a;
      }
    },
    setFolderName(e) {
      const n = this.currentOpenFolder?.id;
      if (!n) {
        return;
      }
      const r = this.findIconIndex(n);
      if (!r) {
        return;
      }
      const [i, a] = r;
      const o = [...this.icons];
      o[i].children[a].name = e;
      this.icons = o;
    },
    dragSortFolderIcon(e, t, n) {
      const r = this.currentOpenFolder.id;
      const i = this.findIconIndex(r);
      if (!i) {
        return false;
      }
      const a = [...this.icons];
      const [o, s] = i;
      const l = a[o].children[s].children;
      const c = l.findIndex(e => e.id === t);
      const u = l.findIndex(t => t.id === e);
      const p = l[u];
      if (!c && !u) {
        return false;
      }
      const d = n === "after" ? c + 1 : c;
      const h = c > u ? u : u + 1;
      l.splice(d, 0, p);
      l.splice(h, 1);
      this.icons = a;
      return true;
    },
    releaseFormerMergedIcon() {
      const e = P().mergedRecordData;
      if (!e) {
        return;
      }
      const t = [...this.icons];
      const n = Date.now();
      const r = this.findIconIndex(e.iconId);
      if (!r) {
        return;
      }
      const [i, a] = r;
      const o = t[i].children[a];
      if (e.dragIconType === "site" && e.dropIconType === "site") {
        const r = o.children.find(t => t.id === e.dropId);
        const s = o.children.find(t => t.id === e.dragId);
        if (!r || !s) {
          return;
        }
        t[i].children.splice(a, 1);
        t[i].children.splice(a, 0, r);
        t[i].children.push(s);
        t[i].updateTime = n;
        this.setMergedRecordData();
        this.icons = t;
      } else if (e.dragIconType === "site" && e.dropIconType === "folder-icon") {
        const r = o.children.find(t => t.id === e.dragId);
        if (!r) {
          return;
        }
        o.children = o.children.filter(t => t.id !== e.dragId);
        t[i].children.push(r);
        t[i].updateTime = n;
        this.setMergedRecordData();
        this.icons = t;
      }
    },
    getIconById(e) {
      const t = this.findIconIndex(e);
      if (!t) {
        return;
      }
      const [n, r] = t;
      return this.icons[n].children[r];
    },
    setCurrentOpenFolder(e) {
      this.currentOpenFolder = e || undefined;
    },
    updateOpenFolder(e) {
      const t = this.getIconById(e);
      if ((t == null ? undefined : t.type) === "folder-icon") {
        this.setCurrentOpenFolder(t);
      } else {
        this.setCurrentOpenFolder(this.cacheNewFolderIcon);
      }
      this.setFolerModalShow(true);
    },
    handleIconOutOfFolderMask() {
      const e = [...this.icons];
      const t = Date.now();
      const n = this.findIconIndex(this.currentOpenFolder.id);
      if (!n) {
        return;
      }
      const [r, i] = n;
      const a = e[r].children[i];
      const o = a.children.find(e => e.id === this.dragIconId);
      if (o) {
        a.children = a.children.filter(e => e.id !== this.dragIconId);
        e[r].children.push(o);
        e[r].updateTime = t;
        if (a.children.length <= 1) {
          const t = a.children[0];
          e[r].children.splice(i, 1);
          if (t) {
            e[r].children.splice(i, 0, t);
          }
        }
        this.icons = e;
        this.setFolerModalShow(false);
      }
    },
    deleteIconInFolder(e) {
      const t = this.findIconIndex(this.currentOpenFolder.id);
      if (!t) {
        return;
      }
      const n = [...this.icons];
      const r = Date.now();
      const [i, a] = t;
      const o = n[i].children[a];
      o.children = o.children.filter(t => t.id !== e);
      n[i].updateTime = r;
      if (o.children.length <= 1) {
        const e = o.children[0];
        n[i].children.splice(a, 1);
        n[i].children.splice(a, 0, e);
        let t = null;
        if (t) {
          clearTimeout(t);
        }
        t = window.setTimeout(() => {
          this.setCurrentOpenFolder(undefined);
          this.setFolerModalShow(false);
          this.icons = n;
        }, 100);
      } else {
        this.icons = n;
      }
    },
    batchAddToFolder(e, t) {
      const n = [...this.icons];
      const r = (0, h.kb)("folder-");
      const i = Date.now();
      const a = {
        id: r,
        origin: "add",
        type: "folder-icon",
        name: i18n("文件夹"),
        folderSize: "mini",
        children: e,
        updateTime: i
      };
      n[t].children.push(a);
      this.activeCategoryIndex = t;
      this.activeCategory.updateTime = i;
      this.addIconTriggerTime = i;
      this.icons = n;
    },
    insertFolderIntoPage(e, t, n = "文件夹", r) {
      if (t.length < 1) {
        return false;
      }
      const i = [...this.icons];
      const a = i.find(t => t.id === e);
      if (!a) {
        return false;
      }
      const o = {
        type: "folder-icon",
        folderSize: r || "mini",
        children: t,
        name: n,
        origin: "add",
        id: (0, h.kb)("folder-"),
        updateTime: Date.now()
      };
      a.children.push(o);
      this.icons = i;
    },
    addDockList(e) {
      const t = [...this.dockIdList];
      t.push(e);
      this.dockIdList = t;
    },
    filterIcons() {
      let e = false;
      this.icons.some(t => {
        if (!t) {
          e = true;
          return true;
        }
        t.children.some(t => {
          if (!t) {
            e = true;
            return true;
          }
          if (t.children) {
            t.children.some(t => {
              if (!t) {
                e = true;
                return true;
              }
            });
          }
        });
      });
      if (e) {
        this.icons = this.icons.filter(e => !!e && (e.children = e.children.filter(e => !!e && (Array.isArray(e.children) && (e.children = e.children.filter(e => !!e)), true)), true));
      }
    },
    reviseName() {
      let e = false;
      this.icons.some(t => t.children.some(t => {
        if (t.type === "widget" && t.name !== (0, f.E0)(t.widgetName)?.title && (0, f.E0)(t.widgetName)) {
          e = true;
          return true;
        }
      }));
      if (e) {
        this.icons.forEach(e => {
          e.children.forEach(e => {
            if (e.type === "widget") {
              const t = (0, f.E0)(e.widgetName);
              if (t && e.name !== t.title) {
                e.name = t.title;
              }
            }
          });
        });
        this.icons = [...this.icons];
      }
    }
  }
});
setTimeout(() => {
  P().filterIcons();
  if (D.Ji === "1.2.2" && Math.random() > 0.8) {
    P().reviseName();
  }
}, 50);
import * as O from /*webcrack:missing*/"./5424.js";
import * as q from /*webcrack:missing*/"./5676.js";
const U = {
  show: false,
  x: 0,
  y: 0,
  bgColor: "",
  meta: null,
  list: []
};
const j = (0, T.Q_)("hitab-home", {
  state: () => ({
    addIconSidebarShow: false,
    editAllIcons: false,
    editCategoryId: null,
    sidebarTransition: false,
    menus: {
      homeMain: {
        ...U
      },
      homeIcon: {
        ...U
      },
      dockIcon: {
        ...U
      },
      sidebarDotMore: {
        ...U
      },
      sidebarEdit: {
        ...U
      },
      bottomDotMore: {
        ...U
      },
      folderContent: {
        ...U
      },
      minimalistMode: {
        ...U
      }
    },
    sidebarEditCategoryState: {
      show: false,
      x: 0,
      y: 0,
      iconClass: "",
      name: "",
      id: ""
    },
    flipping: false,
    timer: null,
    addIWidgetShow: false,
    folderOperatelock: false,
    editFolderIconStatus: false,
    iconSearchShow: false,
    hasWidgetShow: false,
    homeSearchBoxShow: true
  }),
  getters: {
    currentIconFolder: () => P().currentOpenFolder,
    isDraggingIcon: () => P().isDraggingIcon,
    folerModalShow: () => P().folerModalShow,
    canSearchShow() {
      return !P().folerModalShow && !(0, O.V)().settingsShow && !(0, q.useUserStore)().loginShow && !(0, O.V)().minimalistMode && !this.addIconSidebarShow && !this.hasWidgetShow;
    }
  },
  actions: {
    setDragDockIconId(e) {
      P().setDragDockIconId(e);
    },
    setDragIconId(e) {
      P().setDragIconId(e);
    },
    setDragIconPos(e) {
      P().setDragIconPosition(e);
    },
    setDragCategoryId(e) {
      P().setDragCategoryId(e);
    },
    dragSortDockIcon(e, t) {
      if (P().dragSortDockIcon(e, t)) {
        this.setFlipping(true);
      }
    },
    dragSortDockIconToLast(e) {
      if (P().dragSortDockIconToLast(e)) {
        this.setFlipping(true);
      }
    },
    dragSortIcon(e, t, n) {
      if (P().dragSortIcon(e, t, n)) {
        this.setFlipping(true);
      }
    },
    dragSortIconToPage(e, t) {
      if (P().dragSortIconToPage(e, t)) {
        this.setFlipping(true);
      }
    },
    dragIconIntoDock(e, t) {
      if (P().dragIconIntoDock(e, t)) {
        this.setFlipping(true);
      }
    },
    dragIconIntoDockLast(e) {
      if (P().dragIconIntoDockLast(e)) {
        this.setFlipping(true);
      }
    },
    dragSortCategory(e, t) {
      if (P().dragSortCategory(e, t)) {
        this.setFlipping(true);
      }
    },
    setFlipping(e) {
      clearTimeout(this.timer);
      if (e) {
        this.flipping = e;
        this.timer = setTimeout(() => {
          this.flipping = false;
        }, 200);
      }
    },
    setEditAllIconsStatus(e) {
      this.editAllIcons = e;
    },
    setSidebarTransition(e) {
      this.sidebarTransition = e;
    },
    setAddIconSidebarStatus(e) {
      if (e === false) {
        this.hideAllMenu();
      }
      this.addIconSidebarShow = e;
    },
    setAddWidgetStatus(e) {
      if (e && this.addIconSidebarShow) {
        this.setAddIconSidebarStatus(false);
      }
      this.addIWidgetShow = e;
    },
    showSidebarEditCategory(e) {
      this.hideAllMenu();
      this.sidebarEditCategoryState = {
        ...this.sidebarEditCategoryState,
        ...e,
        show: true
      };
      if (this.sidebarEditCategoryState.id) {
        this.editCategoryId = this.sidebarEditCategoryState.id;
      } else {
        this.editCategoryId = null;
      }
    },
    hideSidebarEditCategory() {
      if (this.sidebarEditCategoryState.show) {
        this.editCategoryId = null;
        this.sidebarEditCategoryState = {
          ...this.sidebarEditCategoryState,
          show: false
        };
      }
    },
    showMenu(e, t, n) {
      this.hideAllMenu();
      if (e === "sidebarEdit" && n) {
        this.editCategoryId = n;
      }
      Object.assign(this.menus[e], {
        ...t,
        show: true
      });
    },
    hideMenu(e) {
      this.menus[e].show = false;
    },
    hideAllMenu() {
      this.hideSidebarEditCategory();
      Object.keys(this.menus).forEach(e => {
        this.menus[e].show = false;
      });
    },
    setFolderMergingIcon(e) {
      if (e) {
        this.setFlipping(true);
        P().setFolderMergeStatus(e);
      } else {
        P().setFolderMergeStatus(undefined);
      }
    },
    setFolderOutStatus() {
      P().setFolderOutStatus();
    },
    updateFolderMergeStatus(e) {
      P().updateFolderMergeStatus(e);
    },
    clearMergedRecordData() {
      P().setMergedRecordData(undefined);
    },
    setFolerModalShow(e) {
      P().setFolerModalShow(e);
    },
    setIconSearchShow(e) {
      this.iconSearchShow = e;
    },
    setHasWidgetShow(e) {
      this.hasWidgetShow = e;
    },
    setHomeSearchBoxShow(e) {
      this.homeSearchBoxShow = e;
    },
    updateFolderName(e) {
      P().setFolderName(e);
    },
    dragSortFolderIcon(e, t, n) {
      if (P().dragSortFolderIcon(e, t, n)) {
        this.setFlipping(true);
      }
    },
    releaseFormerMergedIcon() {
      if (P().mergedRecordData && !P().folerModalShow) {
        this.setFlipping(true);
        P().releaseFormerMergedIcon();
      }
    },
    drapOnFolderAndOpen(e) {
      this.setFlipping(true);
      const t = P();
      t.mergeSiteIconToFolder();
      t.updateFolderMergeStatus({
        expandShow: false,
        canMerge: false
      });
      t.updateOpenFolder(e);
    },
    dropOnFolderMaskHandler() {
      const e = P();
      if (e.dragIconPosition === "folder" || e.dragIconPosition === "home" && e.isIconMoveToFolder) {
        e.handleIconOutOfFolderMask();
      }
    },
    setIconMoveToFolder(e) {
      P().setIconMoveToFolder(e);
    },
    setEditFolderIconStatus(e) {
      this.editFolderIconStatus = e;
    },
    onDragEndHandler() {
      var e;
      const t = P();
      if ((e = t.folderDragStatus) !== null && e !== undefined && e.canMerge) {
        t.mergeSiteIconToFolder();
        t.setFolderMergeStatus(undefined);
        this.setDragIconId("");
        return true;
      } else {
        this.setDragIconId("");
        this.setFolderMergingIcon();
        this.clearMergedRecordData();
        this.setIconMoveToFolder(false);
        t.setFolderMergeStatus(undefined);
        return false;
      }
    },
    showIconSearch() {
      this.hideAllMenu();
      this.setEditAllIconsStatus(false);
      const e = document.activeElement;
      if (e && e.tagName === "INPUT") {
        e.blur();
      }
      this.setIconSearchShow(true);
      this.setHomeSearchBoxShow(false);
    }
  }
});
const H = e => {
  (0, s.dD)("data-v-091bd170");
  e = e();
  (0, s.Cn)();
  return e;
};
const V = {
  class: "pointer-events-auto absolute top-[20px] left-[20px] flex mb:top-[18px] mb:left-[14px]"
};
const G = [H(() => (0, s._)("div", {
  class: "group flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330]"
}, [(0, s._)("i", {
  class: "iconfont icon-close_window_icon text-[12px] text-color-white opacity-100"
})], -1))];
const Y = [H(() => (0, s._)("i", {
  class: "iconfont icon-close_window_icon text-[12px] text-color-white opacity-100"
}, null, -1))];
const Z = (0, s.aZ)({
  inheritAttrs: false
});
const W = (0, s.aZ)({
  ...Z,
  __name: "hi-widget-dialog",
  props: {
    fullScreen: {
      type: Boolean,
      default: false
    },
    fullScreenBtn: {
      type: Boolean,
      default: true
    },
    closeBtn: {
      type: Boolean,
      default: true
    },
    transparent: {
      type: Boolean,
      default: false
    },
    maskOpacity: {
      default: 60
    },
    hideInsertShadow: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: false
    }
  },
  emits: ["on-close", "on-fullscreen", "on-resize"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = (0, c.iH)();
    const a = (0, c.iH)();
    const u = () => {
      n("on-close");
    };
    const p = () => {
      n("on-fullscreen", !r.fullScreen);
    };
    let d;
    let h;
    (0, s.bv)(() => {
      d = new IntersectionObserver(e => {
        var t;
        t = e[0].intersectionRatio > 0;
        j().setHasWidgetShow(t);
      });
      (0, s.Y3)(() => {
        d.observe(i.value);
        window.addEventListener("keydown", e => {
          if (e.keyCode == 27) {
            if (r.fullScreen) {
              n("on-fullscreen", !r.fullScreen);
            } else {
              n("on-close");
            }
          }
        });
        if (a.value && r.resize) {
          h = new ResizeObserver(e => {
            const t = e[0].contentRect;
            if (t.height !== 0 && t.width !== 0) {
              n("on-resize", {
                h: t.height,
                w: t.width
              });
            }
          });
          h.observe(a.value);
        }
      });
    });
    (0, s.Ah)(() => {
      if (i.value) {
        d.unobserve(i.value);
      }
      if (h && a.value) {
        h.unobserve(a.value);
      }
    });
    return (t, n) => {
      const c = o.Z;
      (0, s.wg)();
      return (0, s.iD)("section", {
        ref_key: "dialogRef",
        ref: i,
        class: "hi-widget-dialog absolute inset-0 z-20 flex h-full w-full min-w-[840px] items-center justify-center"
      }, [(0, s.Wm)(c, {
        show: true,
        opacity: r.maskOpacity,
        "z-index": -2,
        onClick: u
      }, null, 8, ["opacity"]), (0, s._)("div", {
        ref_key: "containerRef",
        ref: a,
        class: (0, l.normalizeClass)(["container pointer-events-none max-h-full max-w-full overflow-hidden", [r.fullScreen ? "!h-full !w-full" : "h-[640px] max-h-[calc(100vh-40px)] w-[1024px] max-w-[calc(100vw-40px)] rounded-[12px]", r.resize && !r.fullScreen ? "resize-container relative resize" : "", t.$attrs.class]]),
        style: (0, l.normalizeStyle)(t.$attrs.style)
      }, [(0, s._)("div", {
        class: (0, l.normalizeClass)([[r.transparent ? "" : "bg-color-b4", e.hideInsertShadow ? "" : "z-[-1]"], "container-inner pointer-events-auto relative h-full w-full"])
      }, [(0, s.WI)(t.$slots, "default"), (0, s._)("div", V, [r.closeBtn ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "group mt-[-8px] hidden h-[32px] w-[32px] items-center justify-center mb:flex",
        onClick: u
      }, G)) : (0, s.kq)("", true), r.closeBtn ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: "group flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#FF7330] mb:hidden",
        onClick: u
      }, Y)) : (0, s.kq)("", true), r.fullScreenBtn ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 2,
        class: "full-btn group ml-[12px] flex h-[16px] w-[16px] items-center justify-center rounded-[50%] bg-[#34C759]",
        onClick: p
      }, [(0, s._)("i", {
        class: (0, l.normalizeClass)([[r.fullScreen ? "icon-reduction_window_icon" : "icon-maximize_window_icon"], "iconfont text-[12px] text-color-white opacity-100"])
      }, null, 2)])) : (0, s.kq)("", true)])], 2)], 6)], 512);
    };
  }
});
import * as Q from /*webcrack:missing*/"./6911.js";
const K = (0, Q.Z)(W, [["__scopeId", "data-v-091bd170"]]);
import * as X from /*webcrack:missing*/"./137.js";
import * as J from "./5307.js";
import * as $ from "./4210.js";
import * as ee from "./9390.js";
import * as te from /*webcrack:missing*/"./1172.js";
import * as ne from /*webcrack:missing*/"./1585.js";
import * as re from /*webcrack:missing*/"./5981.js";
const ie = {
  class: "flex h-full w-full flex-col items-center justify-center bg-[#303B75]"
};
const ae = (e => {
  (0, s.dD)("data-v-1cf0ac6c");
  e = e();
  (0, s.Cn)();
  return e;
})(() => (0, s._)("div", {
  class: "mt-[-80px] flex flex-col items-center text-color-white"
}, [(0, s._)("img", {
  draggable: "false",
  class: "mb-[20px] h-[88px] w-[88px]",
  src: J,
  alt: ""
}), (0, s._)("img", {
  class: "h-[23px]",
  draggable: "false",
  src: $,
  alt: ""
}), (0, s._)("span", {
  class: "mt-[6px] font-ali-55"
}, "Build your own AI assistant")], -1));
const oe = {
  class: "relative my-[48px]"
};
const se = {
  class: "h-[46px] rounded-[12px] bg-[#4A589E] px-[30px] font-ali-55 leading-[48px] text-color-white mb:mx-[12px] mb:h-auto mb:px-[12px] mb:py-[5px] mb:leading-[30px]"
};
const le = ["src"];
const ce = {
  class: "flex gap-[12px] font-ali-55 leading-none text-[#303B75]"
};
const ue = {
  class: "text-color-white"
};
const pe = (0, s.aZ)({
  __name: "chatgpt-expired-content",
  setup(e) {
    const t = (0, te.useChatGptStore)();
    const n = (0, q.useUserStore)();
    const r = () => {
      t.closeChatVipExpired(n.user.chatVipEndTime);
    };
    const i = () => {
      if (ne.q$ && ne.ID === "mobile") {
        re.R.warn({
          message: i18n("qing35ac97")
        });
      } else {
        t.setHighlihgtPlanProduct();
        t.setPanelShowType(D.s8 ? "chatai-subscribe" : "chat-expense");
      }
      t.closeChatVipExpired(n.user.chatVipEndTime);
    };
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", ie, [ae, (0, s._)("div", oe, [(0, s._)("div", se, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("ni33c280") : "你的WeTab AI Pro已过期，无限畅聊模式已关闭，续费以继续保持无限畅聊和更多其他功能"), 1), (0, s._)("img", {
        src: (0, c.SU)(ee),
        draggable: "false",
        class: "absolute left-[50%] h-[20px] w-[25px] translate-x-[-50%]",
        alt: ""
      }, null, 8, le)]), (0, s._)("div", ce, [(0, s._)("button", {
        class: "flex h-[32px] w-[138px] items-center justify-center rounded-[8px] bg-color-white px-[6px]",
        onClick: r
      }, [(0, s._)("span", null, (0, l.toDisplayString)(e.i18n("fan3eb8e8")), 1)]), (0, s._)("button", {
        class: "renew-btn flex h-[32px] w-[138px] items-center justify-center rounded-[8px] bg-color-white px-[6px]",
        onClick: i
      }, [(0, s._)("span", ue, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("xu4b3099") : "续费WeTab AI Pro"), 1)])])]);
    };
  }
});
const de = (0, Q.Z)(pe, [["__scopeId", "data-v-1cf0ac6c"]]);
const he = new class {
  localKey = "analytics-status-time";
  gap = 86400000;
  getPermission = async () => false;
  sendEvent = (() => {
    var e = this;
    return async function (t, n, r = undefined) {
      const i = await e.getPermission();
      if (!i) {
        return;
      }
      const a = {
        value: String(n)
      };
      if (r !== undefined) {
        a.label = String(r);
      }
    };
  })();
}();
const ge = {
  class: "h-[1px] w-full bg-color-white bg-opacity-[0.12] chat-w:bg-color-black chat-w:bg-opacity-[0.08]"
};
const fe = {};
const me = (0, Q.Z)(fe, [["render", function (e, t) {
  (0, s.wg)();
  return (0, s.iD)("div", ge);
}]]);
const be = e => {
  (0, s.dD)("data-v-3b4a7f77");
  e = e();
  (0, s.Cn)();
  return e;
};
const xe = {
  class: "font-ali-65 text-[14px] text-color-white"
};
const ye = be(() => (0, s._)("i", {
  class: "icon iconfont icon-export_icon1 ml-[8px] text-[18px] text-color-white"
}, null, -1));
const ve = [be(() => (0, s._)("i", {
  class: "iconfont icon-line text-[rgba(0,0,0,0.6)]"
}, null, -1))];
const we = (0, s.aZ)({
  __name: "chatgpt-conversion-item",
  props: {
    data: null,
    activeId: null
  },
  emits: ["delete"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const {
      exportMarkdown: a
    } = (0, X.useModalData)();
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", {
        class: (0, l.normalizeClass)(["group relative flex h-[68px] w-[246px] cursor-pointer flex-col justify-between rounded-[12px] px-[16px] py-[12px] transition-colors mb:w-auto", [r.activeId === r.data.id ? "insert-shadow-active item-shadow bg-[#4A589E] chat-p:bg-[#473396] chat-w:bg-[#11A57F]" : "insert-shadow bg-[#3A4684] chat-p:bg-[#2B2755] chat-w:bg-[#FFFFFF]"]])
      }, [r.data.id !== (0, c.SU)(te.NEWCHAT_ID) ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: (0, l.normalizeClass)(["pointer-events-none absolute top-[10px] right-[16px] flex shrink-0 items-center opacity-0 transition-opacity", [{
          "pointer-events-auto opacity-100": r.activeId === r.data.id
        }]]),
        onClick: t[0] ||= function () {
          return (0, c.SU)(a) && (0, c.SU)(a)(...arguments);
        }
      }, [(0, s._)("p", xe, (0, l.toDisplayString)(e.i18n("dao355405")), 1), ye], 2)) : (0, s.kq)("", true), (0, s._)("div", {
        class: (0, l.normalizeClass)([[r.activeId === r.data.id ? " w-[calc(100%-60px)]" : ""], "flex items-center justify-between transition-[width] duration-100"])
      }, [(0, s._)("p", {
        class: (0, l.normalizeClass)([[r.activeId === r.data.id ? "" : "chat-w:text-[#3A3A3C]"], "text-dot flex-1 font-ali-65 text-[14px] text-color-white"])
      }, (0, l.toDisplayString)(r.data.name), 3)], 2), (0, s._)("div", {
        class: (0, l.normalizeClass)([[r.activeId === r.data.id ? "" : "chat-w:text-[#8E8E94] chat-w:text-opacity-100"], "flex justify-between font-ali-55 text-[12px] leading-none text-color-white text-opacity-60 chat-w:text-opacity-80"])
      }, [(0, s._)("span", null, (0, l.toDisplayString)(r.data.updateTime), 1), (0, s._)("span", null, (0, l.toDisplayString)(r.data.messages.length) + " " + (0, l.toDisplayString)(e.i18n("tiao2d6a73")), 1)], 2), r.data.id !== (0, c.SU)(te.NEWCHAT_ID) ? ((0, s.wg)(), (0, s.iD)("span", {
        key: 1,
        class: "delete-shadow absolute left-[-6px] top-[-6px] hidden h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-40 backdrop-blur-[20px] transition-colors hover:cursor-default hover:bg-opacity-60 group-hover:flex",
        onClick: t[1] ||= (0, i.withModifiers)(e => n("delete", r.data.id), ["stop"])
      }, ve)) : (0, s.kq)("", true)], 2);
    };
  }
});
const Ae = (0, Q.Z)(we, [["__scopeId", "data-v-3b4a7f77"]]);
import * as ke from /*webcrack:missing*/"./9417.js";
const Se = {
  class: "w-full pt-[24px] pb-[12px]"
};
const Ce = {
  key: 0,
  class: "mb-[12px] px-[24px]"
};
const Ee = {
  class: "history-tips-box flex items-center justify-between"
};
const Ie = {
  class: "font-ali-55"
};
const Te = {
  key: 1,
  class: "px-[24px]"
};
const De = {
  class: "flex items-center justify-center"
};
const _e = {
  class: "font-ali-55 text-[12px] text-color-white opacity-40 chat-w:text-[#8E8E94] chat-w:opacity-100"
};
const Me = (0, s.aZ)({
  __name: "chatgpt-conversion-content",
  props: {
    data: null,
    activeId: null
  },
  emits: ["update:hideSideBar"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = (0, te.useChatGptStore)();
    const a = (0, ke.n)();
    function o(e) {
      i.deleteConversionItem(e);
    }
    function u() {
      i.readHistoryTips();
    }
    (0, s.bv)(() => {
      i.reqConversionList();
      i.getChatModels();
    });
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", Se, [!(0, c.SU)(i).historyTipsReaded && r.data.length > 0 && !(0, c.SU)(a).chatBanned ? ((0, s.wg)(), (0, s.iD)("article", Ce, [(0, s._)("div", Ee, [(0, s._)("span", Ie, (0, l.toDisplayString)(e.i18n("mei312650")), 1), (0, s._)("i", {
        class: "iconfont icon-close_window_icon cursor-pointer",
        onClick: u
      })])])) : (0, s.kq)("", true), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(r.data, e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.id,
          class: "mb-[12px] pl-[24px] mb:px-[24px]"
        }, [(0, s.Wm)(Ae, {
          data: e,
          "active-id": r.activeId || "",
          onClick: t => {
            r = e;
            i.setActiveConversionId(r.id);
            n("update:hideSideBar", true);
            return;
            var r;
          },
          onDelete: o
        }, null, 8, ["data", "active-id", "onClick"])]);
      }), 128)), (0, c.SU)(i).historyTipsReaded && r.data.length > 0 ? ((0, s.wg)(), (0, s.iD)("article", Te, [(0, s._)("div", De, [(0, s._)("span", _e, (0, l.toDisplayString)(e.i18n("mei312650")), 1)])])) : (0, s.kq)("", true)]);
    };
  }
});
const Fe = {
  class: "absolute inset-0 z-10 flex items-center justify-center bg-[#1C1C1E] bg-opacity-30"
};
const ze = {
  class: "shadow flex h-[325px] w-[300px] flex-col items-center rounded-[12px] bg-[#F8F8F8] py-[24px]"
};
const Re = {
  class: "flex items-center"
};
const Be = {
  class: "mt-[12px] h-[160px] w-[160px]"
};
const Ne = ["src"];
const Le = ["src"];
const Pe = {
  class: "mt-[8px] font-ali-55 text-[14px] leading-[20px] text-color-t3"
};
const Oe = (0, s.aZ)({
  __name: "chatgpt-sponsor-content",
  props: {
    show: {
      type: Boolean
    }
  },
  emits: ["close"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const o = (0, c.iH)("alipay");
    const u = e => {
      o.value = e;
    };
    return (e, t) => {
      const p = a.Z;
      (0, s.wg)();
      return (0, s.j4)(p, {
        show: r.show,
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", Fe, [(0, s._)("div", ze, [(0, s._)("div", Re, [(0, s._)("button", {
          class: (0, l.normalizeClass)(["h-[24px] w-[66px] rounded-[6px] font-ali-55 text-[14px] leading-none transition-colors", [o.value === "alipay" ? "bg-[#1777FF] text-color-white" : "bg-color-m2 bg-opacity-5  text-color-t3"]]),
          onClick: t[0] ||= e => u("alipay")
        }, " 支付宝 ", 2), (0, s._)("button", {
          class: (0, l.normalizeClass)(["ml-[12px] h-[24px] w-[66px] rounded-[6px] font-ali-55 text-[14px] leading-none transition-colors", [o.value === "wechat" ? "bg-[#21AA38] text-color-white" : "bg-color-m2 bg-opacity-5  text-color-t3"]]),
          onClick: t[1] ||= e => u("wechat")
        }, " 微信 ", 2)]), (0, s._)("div", Be, [(0, s.wy)((0, s._)("img", {
          class: "h-full w-full",
          src: (0, c.SU)(D.EF) ? "https://static.wetab.link/infinity-ai/wx_pay.svg" : "https://static.wetab.link/hitab/pay/wx_pay.png",
          alt: "",
          draggable: "false"
        }, null, 8, Ne), [[i.vShow, o.value === "wechat"]]), (0, s.wy)((0, s._)("img", {
          class: "h-full w-full",
          src: (0, c.SU)(D.EF) ? "https://static.wetab.link/infinity-ai/ali_pay.svg" : "https://static.wetab.link/hitab/pay/ali_pay.png",
          alt: "",
          draggable: "false"
        }, null, 8, Le), [[i.vShow, o.value === "alipay"]])]), (0, s._)("p", Pe, (0, l.toDisplayString)(o.value === "alipay" ? "支付宝扫一扫" : "微信扫一扫"), 1), (0, s._)("div", {
          class: "mt-[17px] flex h-[36px] w-[120px] cursor-pointer items-center justify-center rounded-[8px] bg-color-white font-ali-65 text-[16px] text-color-t2 transition-colors hover:bg-[#ebebeb]",
          onClick: t[2] ||= e => n("close")
        }, " 下次再说 ")])])]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
import * as qe from /*webcrack:missing*/"./1785.js";
const Ue = {
  class: "flex flex-col items-center"
};
const je = {
  class: "font-ali-55 text-[14px] leading-[20px] text-color-white text-opacity-40 chat-w:text-[#3A3A3C]"
};
const He = {
  class: "flex items-center pt-[12px]"
};
const Ve = (0, s.aZ)({
  __name: "chatgpt-chat-tip",
  setup(e) {
    const t = (0, te.useChatGptStore)();
    function n() {
      if (!D.EF || D.s8 || window.iframeAiInitData.phoneNumber) {
        t.onClickTryIt();
      } else {
        (0, qe.bc)({
          type: qe.o1.needBindPhone
        });
      }
    }
    (0, s.bv)(() => {
      t.reqChatTips();
      t.reqAssistantList();
    });
    return (e, r) => {
      (0, s.wg)();
      return (0, s.iD)("div", Ue, [(0, s._)("p", je, (0, l.toDisplayString)(e.i18n("shi4be1ee")) + " \"" + (0, l.toDisplayString)((0, c.SU)(t).chatTips) + "\" ", 1), (0, s._)("div", He, [(0, s._)("button", {
        class: "insert-shadow h-[28px] rounded-[8px] bg-[#3A4684] px-[18px] font-ali-55 text-[14px] leading-none text-color-white text-opacity-80 hover:text-opacity-100 chat-p:bg-[#221E47] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#3A3A3C]",
        onClick: n
      }, (0, l.toDisplayString)(e.i18n("shi48c0dd")), 1)])]);
    };
  }
});
const Ge = (0, Q.Z)(Ve, [["__scopeId", "data-v-0a11b27e"]]);
import * as Ye from "./2982.js";
import * as Ze from "./8764.js";
import * as We from "./3819.js";
import * as Qe from "./7859.js";
const Ke = {
  class: "inline-block h-full w-full overflow-hidden text-ellipsis whitespace-nowrap px-[12px] text-center font-ali-55 text-[13px] leading-[22px] text-[#3A3A3C] chat-w:text-color-white"
};
const Xe = (0, s.aZ)({
  __name: "chatgpt-input-tips",
  props: {
    dir: {
      default: "top"
    }
  },
  setup(e) {
    const t = e;
    return (e, n) => {
      (0, s.wg)();
      return (0, s.iD)("section", {
        class: (0, l.normalizeClass)(["chatgpt-input-tips pointer-events-none h-[24px] min-w-[60px] max-w-[120px] -translate-x-1/2 rounded-[4px] border-color-white bg-color-white chat-w:border-[#111111] chat-w:bg-[#111111]", [t.dir === "top" ? " after:bottom-[-8px]" : " before:top-[-8px] before:rotate-180"]])
      }, [(0, s._)("span", Ke, [(0, s.WI)(e.$slots, "default")])], 2);
    };
  }
});
const Je = (0, Q.Z)(Xe, [["__scopeId", "data-v-6e6a0af2"]]);
import * as $e from "./7254.js";
var et = $e;
import * as tt from "./518.js";
import * as nt from "./328.js";
import * as rt from "./9530.js";
var it = rt;
import * as at from "./2744.js";
var ot = at;
require("./956.js");
require("./204.js");
require("./8103.js");
require("./9566.js");
require("./5033.js");
require("./1460.js");
require("./1671.js");
require("./1965.js");
require("./6632.js");
require("./3818.js");
require("./9810.js");
require("./8028.js");
require("./254.js");
require("./7026.js");
require("./1911.js");
require("./8693.js");
require("./8978.js");
require("./7662.js");
require("./8790.js");
require("./5591.js");
require("./3048.js");
require("./2269.js");
require("./7017.js");
require("./8264.js");
require("./9093.js");
require("./1649.js");
require("./3336.js");
require("./389.js");
require("./8383.js");
require("./8515.js");
require("./3930.js");
require("./6955.js");
require("./6383.js");
require("./7303.js");
require("./4374.js");
require("./9581.js");
require("./9646.js");
require("./3672.js");
require("./87.js");
require("./6742.js");
require("./1493.js");
require("./9502.js");
require("./99.js");
require("./5752.js");
require("./6938.js");
require("./224.js");
const st = e => {
  (0, s.dD)("data-v-499be440");
  e = e();
  (0, s.Cn)();
  return e;
};
const lt = {
  class: "w-full"
};
const ct = ["src"];
const ut = {
  key: 2,
  class: "h-[24px] w-[24px] bg-[url(@widget/widget-chatgpt/img/ai-logo-fff.png)] bg-contain bg-center bg-no-repeat"
};
const pt = {
  key: 0
};
const dt = [st(() => (0, s._)("img", {
  class: "h-[20px] w-[20px] animate-spin",
  src: Ye,
  draggable: "false",
  alt: ""
}, null, -1))];
const ht = {
  key: 1,
  class: "w-full flex-shrink-0 select-text overflow-hidden break-all font-ali-55 text-[14px] leading-[20px]"
};
const gt = {
  key: 0,
  class: "flex flex-col"
};
const ft = {
  key: 0,
  class: "assistant-title mb-[8px] flex h-[28px] w-full items-center rounded-[2px] px-[6px] leading-none"
};
const mt = ["src"];
const bt = {
  class: "text-dot ml-[6px]"
};
const xt = {
  key: 1,
  class: "assistant-title flex h-[28px] w-full items-center rounded-[2px] px-[6px] leading-none"
};
const yt = st(() => (0, s._)("i", {
  class: "iconfont icon-document1 text-[20px] text-color-white chat-w:text-[#11A57F]"
}, null, -1));
const vt = {
  class: "text-dot ml-[6px]"
};
const wt = {
  key: 2,
  class: "whitespace-pre-wrap"
};
const At = {
  key: 1
};
const kt = st(() => (0, s._)("img", {
  class: "h-[20px] w-[20px] animate-spin",
  src: Ye,
  draggable: "false",
  alt: ""
}, null, -1));
const St = {
  class: "text-[14px ml-[4px] font-normal leading-[20px] text-[#8E8E94]"
};
const Ct = {
  key: 1,
  class: "mt-[12px] text-[10px] leading-[14px] text-color-t3"
};
const Et = {
  key: 2,
  class: "flex items-center leading-none"
};
const It = st(() => (0, s._)("img", {
  src: Ze,
  draggable: "false",
  class: "block h-[24px] w-[24px] chat-w:hidden",
  alt: ""
}, null, -1));
const Tt = st(() => (0, s._)("img", {
  src: We,
  draggable: "false",
  class: "hidden h-[24px] w-[24px] chat-w:block",
  alt: ""
}, null, -1));
const Dt = {
  class: "ml-[8px] font-ali-55 text-[14px] leading-[20px] text-color-white"
};
const _t = {
  key: 0,
  class: "ml-[16px]"
};
const Mt = {
  class: "flex items-center"
};
const Ft = st(() => (0, s._)("img", {
  class: "h-[20px] w-[20px]",
  src: Qe,
  alt: ""
}, null, -1));
const zt = {
  class: "ml-[4px]"
};
const Rt = {
  class: "ml-[20px] flex gap-[13px]"
};
const Bt = st(() => (0, s._)("i", {
  class: "iconfont icon-continue_ai text-[20px] text-color-white text-opacity-30 transition-colors group-hover/icon:text-opacity-100 chat-w:text-[#111111] chat-w:text-opacity-20"
}, null, -1));
const Nt = st(() => (0, s._)("i", {
  class: "iconfont icon-retry_ai text-[20px] text-color-white text-opacity-30 transition-colors group-hover/icon:text-opacity-100 chat-w:text-[#111111] chat-w:text-opacity-20"
}, null, -1));
const Lt = st(() => (0, s._)("i", {
  class: "iconfont icon-copy_ai text-[20px] text-color-white text-opacity-30 transition-colors group-hover/icon:text-opacity-100 chat-w:text-[#111111] chat-w:text-opacity-20"
}, null, -1));
const Pt = (0, s.aZ)({
  __name: "chatgpt-chat-item",
  props: {
    data: null,
    isLast: {
      type: Boolean
    },
    abortShow: {
      type: Boolean
    }
  },
  emits: ["copy", "retry", "new-chat", "pause", "search", "continue"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const a = (0, ke.n)();
    et.use(it, {
      Prism: ot
    });
    et.use((0, tt.Z)());
    et.use((0, nt.Z)());
    const {
      chatModelList: o,
      activeSelectModel: u
    } = (0, X.useModalData)();
    const p = (0, s.Fl)(() => {
      const e = r.data.modelId;
      if (!e) {
        return "";
      }
      const t = o.value.find(t => t.id === e);
      if (t && t.shortName) {
        return `https://static.wetab.link/hitab/chatgpt-widget/${t.shortName}.png`;
      } else {
        return "";
      }
    });
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", {
        class: (0, l.normalizeClass)(["w-full px-[20px]", [r.data.role === "assistant" ? "mb-[16px]" : "mb-[10px]"]])
      }, [(0, s._)("div", lt, [(0, s._)("div", {
        class: (0, l.normalizeClass)(["replay-content group relative flex w-full flex-shrink-0", [r.data.role === "assistant" ? "" : "chat-item justify-end pl-[120px]"]])
      }, [r.data.role === "assistant" ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: (0, l.normalizeClass)([[r.data.assistantLogo ? "bg-color-white" : "bg-gradient-to-bl  bg-[#2CCB92] chat-p:from-[#A93DF1] chat-p:to-[#5C55E4] chat-w:bg-[#11A57F]"], "relative mr-[8px] flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[8px]"])
      }, [(0, c.SU)(p) ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "absolute left-0 bottom-0 right-0 h-[8px] bg-contain bg-center bg-no-repeat",
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${(0, c.SU)(p)})`
        })
      }, null, 4)) : (0, s.kq)("", true), r.data.assistantLogo ? ((0, s.wg)(), (0, s.iD)("img", {
        key: 1,
        class: "h-[24px] w-[24px]",
        src: r.data.assistantLogo,
        alt: ""
      }, null, 8, ct)) : ((0, s.wg)(), (0, s.iD)("div", ut))], 2)) : (0, s.kq)("", true), (0, s._)("div", {
        class: (0, l.normalizeClass)(["chat-item-inner-box", [r.data.role === "assistant" ? "max-w-[min(calc(100%-40px),1024px)] " : ""]])
      }, [(0, s._)("div", {
        class: (0, l.normalizeClass)(["chat-item-inner relative z-0 min-h-[40px] rounded-b-[8px] py-[10px] px-[12px]", [r.data.role === "assistant" ? "insert-shadow-assistant-w rounded-tr-[8px] bg-[#F8F8F8] chat-w:border chat-w:border-color-black chat-w:border-opacity-5" : "rounded-tl-[8px] bg-[#3A4684] text-color-white chat-p:bg-[#2B2755] chat-w:bg-[#11A57F]", r.data.error ? "insert-shadow-error !bg-[#DB3848] !bg-opacity-40 !py-[8px] chat-w:bg-[#FF4D4F] chat-w:!bg-opacity-100" : "insert-shadow"]]),
        onContextmenu: t[1] ||= (0, i.withModifiers)(() => {}, ["stop"])
      }, [r.data.loading ? ((0, s.wg)(), (0, s.iD)("div", pt, dt)) : (0, s.kq)("", true), r.data.error ? ((0, s.wg)(), (0, s.iD)("div", Et, [It, Tt, (0, s._)("span", Dt, (0, l.toDisplayString)(r.data.content), 1), r.data.extra ? ((0, s.wg)(), (0, s.iD)("div", _t, [(0, s._)("span", {
        class: "flex h-[28px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[8px] bg-color-white bg-opacity-40 px-[8px] font-ali-55 text-[14px] text-color-white chat-w:bg-color-white chat-w:text-[#FF4D4F]",
        onClick: t[0] ||= e => n("new-chat")
      }, (0, l.toDisplayString)(e.i18n("xin1f2b14")), 1)])) : (0, s.kq)("", true)])) : ((0, s.wg)(), (0, s.iD)("div", ht, [r.data.role === "user" ? ((0, s.wg)(), (0, s.iD)("article", gt, [r.data.newAssistant && r.data.assistantTitle ? ((0, s.wg)(), (0, s.iD)("div", ft, [(0, s._)("img", {
        class: "h-[16px] w-[16px]",
        src: r.data.assistantLogo,
        alt: ""
      }, null, 8, mt), (0, s._)("span", bt, (0, l.toDisplayString)(r.data.assistantTitle), 1)])) : (0, s.kq)("", true), r.data.chatType === "document" ? ((0, s.wg)(), (0, s.iD)("div", xt, [yt, (0, s._)("span", vt, (0, l.toDisplayString)(r.data.filename), 1)])) : (0, s.kq)("", true), r.data.chatType !== "document" ? ((0, s.wg)(), (0, s.iD)("span", wt, (0, l.toDisplayString)(r.data.content), 1)) : (0, s.kq)("", true)])) : ((0, s.wg)(), (0, s.iD)("div", At, [r.data.searchLoading ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: (0, l.normalizeClass)([[r.data.content ? "pb-[8px]" : ""], "flex items-center"])
      }, [kt, (0, s._)("span", St, (0, l.toDisplayString)(r.data.searchText), 1)], 2)) : (0, s.kq)("", true), (0, s.Wm)((0, c.SU)(et), {
        text: r.data.content
      }, null, 8, ["text"]), r.data.loading || r.data.pending ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("p", Ct, (0, l.toDisplayString)((0, c.SU)(te.AI_TIP_TEXT)), 1))]))]))], 34), r.data.role !== "assistant" || r.data.loading || r.data.pending || (0, c.SU)(a).chatBanned ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: (0, l.normalizeClass)(["flex items-center justify-between px-[8px] pt-[8px] font-ali-55 text-[14px] leading-[20px] transition-opacity group-hover:opacity-100", [r.isLast ? "opacity-100" : "opacity-0"]])
      }, [(0, s._)("div", Mt, [(0, s._)("span", {
        class: "flex cursor-pointer items-center text-[#8E8E94] transition-colors",
        onClick: t[2] ||= e => n("search")
      }, [Ft, (0, s._)("span", zt, (0, l.toDisplayString)(e.i18n("wang3bba56")), 1)])]), (0, s._)("div", Rt, [r.isLast && (0, c.SU)(u).chatType !== "image" && !r.data.error ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "group/icon relative z-[1] cursor-pointer",
        onClick: t[3] ||= e => n("continue")
      }, [Bt, (0, s.Wm)(Je, {
        dir: "bottom",
        class: "absolute bottom-[-32px] left-1/2 opacity-0 transition-opacity group-hover/icon:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("ji4633dd")), 1)]),
        _: 1
      })])) : (0, s.kq)("", true), r.isLast && (0, c.SU)(u).chatType !== "image" ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: "group/icon relative z-[1] cursor-pointer",
        onClick: t[4] ||= e => n("retry")
      }, [Nt, (0, s.Wm)(Je, {
        dir: "bottom",
        class: "absolute bottom-[-32px] left-1/2 opacity-0 transition-opacity group-hover/icon:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("zhong4132c5")), 1)]),
        _: 1
      })])) : (0, s.kq)("", true), r.data.error ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 2,
        class: "group/icon relative z-[1] cursor-pointer",
        onClick: t[5] ||= e => n("copy")
      }, [Lt, (0, s.Wm)(Je, {
        dir: "bottom",
        class: "absolute bottom-[-32px] left-1/2 opacity-0 transition-opacity group-hover/icon:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("fu479d3a")), 1)]),
        _: 1
      })]))])], 2))], 2)], 2)])], 2);
    };
  }
});
const Ot = (0, Q.Z)(Pt, [["__scopeId", "data-v-499be440"]]);
import * as qt from /*webcrack:missing*/"./8287.js";
const Ut = new h._P("search/list", 600000);
(0, h.iS)(qt.hj.jsonp);
import * as jt from /*webcrack:missing*/"./4828.js";
import * as Ht from /*webcrack:missing*/"./2743.js";
import * as Vt from /*webcrack:missing*/"./8424.js";
const Gt = function (e, t, n, r) {
  for (var i = n - 1, a = e.length; ++i < a;) {
    if (r(e[i], t)) {
      return i;
    }
  }
  return -1;
};
import * as Yt from /*webcrack:missing*/"./4054.js";
import * as Zt from /*webcrack:missing*/"./8039.js";
var Wt = Array.prototype.splice;
const Qt = function (e, t, n, r) {
  var i = r ? Gt : Vt.Z;
  var a = -1;
  var o = t.length;
  var s = e;
  if (e === t) {
    t = (0, Zt.Z)(t);
  }
  if (n) {
    s = (0, Ht.Z)(e, (0, Yt.Z)(n));
  }
  while (++a < o) {
    for (var l = 0, c = t[a], u = n ? n(c) : c; (l = i(s, u, l, r)) > -1;) {
      if (s !== e) {
        Wt.call(s, l, 1);
      }
      Wt.call(e, l, 1);
    }
  }
  return e;
};
const Kt = function (e, t) {
  if (e && e.length && t && t.length) {
    return Qt(e, t);
  } else {
    return e;
  }
};
const Xt = (0, jt.Z)(Kt);
const Jt = {
  name: i18n("百度"),
  id: "0c47016a8cd2d631bc618d4f3a741335",
  target: "https://www.baidu.com/s?ie=utf-8&wd=",
  bgType: "image",
  bgColor: "rgba(0,0,0,0)",
  bgImage: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png",
  updateTime: 0
};
const $t = {
  name: i18n("Google"),
  id: "a22dcc25c75de3f58cb518e32c576865",
  target: "https://www.google.com/search?q=",
  bgType: "image",
  bgColor: "rgba(0,0,0,0)",
  bgImage: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png",
  updateTime: 0
};
const en = {
  name: i18n("Bing"),
  id: "5a6afaa65c95a841f6149c4e1591a637",
  target: "https://www.bing.com/search?q=",
  bgType: "image",
  bgColor: "rgba(0,0,0,0)",
  bgImage: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png",
  updateTime: 0
};
const tn = [Jt, $t, en];
const nn = [Jt, $t, en].map(e => e.id);
const rn = Jt.id;
const an = (0, T.Q_)(d.BU.search, {
  syncStorage: {
    watch: ["currentId", "currentIdList", "addList", "customList", "defaultList", "versionRecord", "langRecord", "historyList", "topList", "searchBoxStyleProps"]
  },
  syncCloud: {
    watch: ["currentId", "currentIdList", "addList", "customList", "topList", "searchBoxStyleProps"]
  },
  state: () => ({
    currentId: rn,
    currentIdList: nn,
    addList: [],
    customList: [],
    defaultList: [...tn],
    versionRecord: "",
    langRecord: "",
    historyList: [],
    topList: [],
    showCtr: false,
    searchBoxStyleProps: {
      width: 14,
      opacity: 100
    }
  }),
  getters: {
    baiduUrl() {
      return this.defaultList.find(e => e.id === Jt.id)?.target || Jt.target;
    },
    baiduTn() {
      const e = [];
      new URL(this.baiduUrl).searchParams.forEach((t, n) => {
        if (n != "wd" && t) {
          e.push(`${n}=${t}`);
        }
      });
      return e.join("&");
    },
    topLimitList() {
      const e = [...this.topList];
      if (e.length > 10) {
        e.length = 10;
      }
      return e;
    },
    searchBoxWidth() {
      return 520 + this.searchBoxStyleProps.width * 340 / 100;
    },
    searchBoxOpacity() {
      return this.searchBoxStyleProps.opacity / 100;
    }
  },
  actions: {
    async getDefaultList() {
      if (this.langRecord !== window.i18nLangCode) {
        this.versionRecord = "";
      }
      const [e, t] = await (async e => {
        try {
          if (e && Ut.isLocked) {
            return ["locked error"];
          }
          const t = await qt.hj.get(`${D.H}search/list`, {
            client: ne.ID,
            version: e
          }, {
            _delay: 0
          });
          if (t.code === 0) {
            Ut.setLock();
            const e = t.data.list;
            if (e.length === 0) {
              throw t;
            }
            return [null, {
              list: e.map(e => ({
                name: e.name,
                id: e.id,
                target: e.url,
                bgType: "image",
                bgImage: e.logo,
                bgColor: "rgba(0,0,0,0)",
                updateTime: 0
              })),
              version: t.data.version
            }];
          }
          throw t;
        } catch (e) {
          return ["catch error"];
        }
      })(this.versionRecord);
      if (e === null) {
        this.defaultList = t.list;
        this.versionRecord = t.version;
        this.langRecord = window.i18nLangCode;
      }
    },
    async selectCurrentSearch(e) {
      this.currentId = e;
    },
    async switchCurrentSearch() {
      let e = this.currentIdList.findIndex(e => e === this.currentId) + 1;
      if (e > this.currentIdList.length - 1) {
        e = 0;
      }
      this.currentId = this.currentIdList[e];
    },
    async addCurrentListItem(e) {
      this.currentIdList.push(e);
      this.currentIdList = [...this.currentIdList];
    },
    async deleteCurrentListItem(e) {
      if (e === this.currentId) {
        re.R.warn({
          message: i18n("主页搜索栏正在使用当前搜索引擎，无法取消。")
        });
        return;
      }
      const t = this.currentIdList.findIndex(t => t === e);
      if (t > -1) {
        this.currentIdList.splice(t, 1);
        this.currentIdList = [...this.currentIdList];
      }
      return t;
    },
    dragSortCurrentList(e, t) {
      if (e === t) {
        return false;
      }
      const n = this.currentIdList.findIndex(e => t === e);
      const r = this.currentIdList.findIndex(t => e === t);
      return n !== -1 && r !== -1 && (n > r ? (this.currentIdList.splice(n + 1, 0, e), this.currentIdList.splice(r, 1)) : (this.currentIdList.splice(n, 0, e), this.currentIdList.splice(r + 1, 1)), this.currentIdList = [...this.currentIdList], true);
    },
    async saveCustomListItem(e, t) {
      e.target = (0, h.UN)(e.target, true);
      let n = "customList";
      if (t === "add") {
        n = "addList";
      }
      if (e.id) {
        this[n].some(t => {
          if (t.id === e.id) {
            Object.assign(t, {
              ...e,
              updateTime: Date.now()
            });
            return true;
          }
        });
      } else {
        this[n].push({
          ...e,
          id: (0, h.kb)("search-"),
          updateTime: Date.now()
        });
      }
      this[n] = [...this[n]];
    },
    async deleteCustomListItem(e, t) {
      if (e === this.currentId) {
        return;
      }
      let n = "customList";
      if (t === "add") {
        n = "addList";
      }
      this[n].some((t, r) => {
        if (t.id === e) {
          this[n].splice(r, 1);
          return true;
        }
      });
      this[n] = [...this[n]];
      this.deleteCurrentListItem(e);
    },
    addToHistory(e) {
      const t = e.trim();
      if (!t) {
        return;
      }
      const n = Xt(this.historyList, t);
      n.unshift(t);
      if (n.length > 10) {
        n.length = 10;
      }
      this.historyList = [...n];
    },
    deleteHistory(e) {
      this.historyList.splice(e, 1);
      this.historyList = [...this.historyList];
    },
    clearHistory() {
      this.historyList = [];
    },
    addToTop(e) {
      const t = Xt(this.topList, e);
      t.unshift(e);
      if (t.length > 10) {
        t.length = 10;
      }
      this.topList = [...t];
    },
    deleteTop(e) {
      this.topList.splice(e, 1);
      this.topList = [...this.topList];
    },
    clearTop() {
      this.topList = [];
    },
    setCtrShow(e) {
      this.showCtr = e;
    },
    changeSearchBoxWidth(e) {
      this.searchBoxStyleProps = {
        ...this.searchBoxStyleProps,
        width: e
      };
    },
    changeSearchBoxOpacity(e) {
      this.searchBoxStyleProps = {
        ...this.searchBoxStyleProps,
        opacity: e
      };
    }
  }
});
import * as on from /*webcrack:missing*/"./344.js";
import * as sn from "./3573.js";
import * as ln from "./2600.js";
import * as cn from "./5130.js";
const un = e => {
  (0, s.dD)("data-v-00a4e0a2");
  e = e();
  (0, s.Cn)();
  return e;
};
const pn = {
  class: "mb-[12px] w-full px-[20px]"
};
const dn = {
  class: "relative flex w-full flex-shrink-0 overflow-hidden"
};
const hn = un(() => (0, s._)("div", {
  class: "bg-gradient-to-bl relative mr-[8px] flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-[#2CCB92] chat-p:from-[#A93DF1] chat-p:to-[#5C55E4] chat-w:bg-[#11A57F]"
}, [(0, s._)("div", {
  class: "h-[24px] w-[24px] bg-[url(@widget/widget-chatgpt/img/ai-logo-fff.png)] bg-contain bg-center bg-no-repeat"
})], -1));
const gn = {
  class: "chat-item-inner-box"
};
const fn = {
  key: 0,
  class: "flex h-[120px] w-full flex-col items-center bg-[#FF4D4F] bg-opacity-5 pt-[16px]"
};
const mn = un(() => (0, s._)("img", {
  src: sn,
  alt: "",
  class: "h-[48px] w-[60px]"
}, null, -1));
const bn = {
  class: "mt-[12px] text-[14px] text-[#FF4D4F]"
};
const xn = {
  key: 1,
  class: "flex w-full bg-color-white p-[16px] chat-w:bg-color-black chat-w:bg-opacity-5"
};
const yn = un(() => (0, s._)("img", {
  src: sn,
  alt: "",
  class: "h-[48px] w-[60px]"
}, null, -1));
const vn = {
  class: "pt-[6px] pl-[16px] font-ali-55 text-[14px] leading-[20px] text-[#3A3A3C]"
};
const wn = {
  class: "flex w-[400px] items-center justify-center overflow-hidden rounded-[4px] mb:w-full"
};
const An = {
  key: 0,
  class: "flex h-[120px] w-full flex-col items-center justify-center text-[rgb(119,119,119)] chat-w:text-color-white"
};
const kn = un(() => (0, s._)("i", {
  class: "iconfont icon-loading_small ml-[4px] animate-[spin_1.2s_linear_infinite] text-[24px]"
}, null, -1));
const Sn = {
  class: "mt-[8px]"
};
const Cn = {
  class: "mt-[2px]"
};
const En = {
  key: 1,
  class: "w-full"
};
const In = ["src"];
const Tn = {
  key: 2,
  class: "flex h-[120px] w-full flex-col items-center justify-center rounded-[4px] border border-[#FF4D4F] border-opacity-60 chat-w:border-none"
};
const Dn = un(() => (0, s._)("img", {
  src: sn,
  class: "h-[48px] w-[60px]",
  alt: ""
}, null, -1));
const _n = {
  class: "mt-[12px] font-ali-55 text-[14px] text-[#8E8E94] chat-w:text-[#FF4D4F]"
};
const Mn = {
  key: 3,
  class: "relative z-0 w-full"
};
const Fn = ["src"];
const zn = {
  class: "group absolute inset-0 z-[1] flex items-center justify-center transition-colors hover:bg-[#0000004D]"
};
const Rn = ["href"];
const Bn = [un(() => (0, s._)("img", {
  src: ln,
  class: "h-full w-full",
  alt: ""
}, null, -1))];
const Nn = {
  key: 0,
  class: "pt-[12px]"
};
const Ln = {
  key: 0,
  class: "flex gap-[8px]"
};
const Pn = ["onClick"];
const On = {
  key: 1,
  class: "flex gap-[8px] pt-[8px]"
};
const qn = ["onClick"];
const Un = (0, s.aZ)({
  __name: "chatgpt-mj-item",
  props: {
    data: null
  },
  emits: ["preview", "upgrade", "sub"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const a = ["u1", "u2", "u3", "u4"];
    const o = ["v1", "v2", "v3", "v4"];
    function c() {
      n("preview", r.data.rawImageUrl || r.data.imageUrl);
    }
    function u(e) {
      n("sub", e, r.data.imageTaskId);
    }
    function p() {
      n("upgrade");
    }
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", pn, [(0, s._)("div", dn, [hn, (0, s._)("div", gn, [r.data.error ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: (0, l.normalizeClass)(["flex w-[424px] items-center justify-center overflow-hidden rounded-b-[6px] rounded-tr-[6px] border mb:w-full", [r.data.imageError ? "border-[#FF4D4F] border-opacity-60" : "border-color-black border-opacity-5"]])
      }, [r.data.imageError ? ((0, s.wg)(), (0, s.iD)("div", fn, [mn, (0, s._)("p", bn, (0, l.toDisplayString)(e.i18n("chuang4ab364")), 1)])) : ((0, s.wg)(), (0, s.iD)("div", xn, [yn, (0, s._)("div", vn, [(0, s._)("p", null, (0, l.toDisplayString)(r.data.content), 1), r.data.extra ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "err-btn mt-[10px] flex h-[28px] w-[120px] cursor-pointer items-center justify-center text-[14px] leading-none text-color-white",
        onClick: p
      }, " 购买至尊版 ")) : (0, s.kq)("", true)])]))], 2)) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: (0, l.normalizeClass)(["chat-item-inner insert-shadow-assistant-w relative z-0 w-[424px] rounded-b-[6px] rounded-tr-[6px] bg-color-white p-[12px] transition-all mb:w-full", [r.data.imageStatucCode === 3 ? "border border-[#FF4D4F] border-opacity-60 chat-w:bg-[#DC4538] chat-w:bg-opacity-5" : "chat-w:bg-[#11A57F]"]])
      }, [(0, s._)("div", wn, [r.data.imageStatucCode === 0 || r.data.imageStatucCode === 1 ? ((0, s.wg)(), (0, s.iD)("div", An, [kn, (0, s._)("p", Sn, (0, l.toDisplayString)(e.i18n("asymbol5054a")), 1), (0, s._)("p", Cn, (0, l.toDisplayString)(e.i18n("ping26b6e2")), 1)])) : (0, s.kq)("", true), r.data.imageStatucCode === 3 && r.data.imageUrl ? ((0, s.wg)(), (0, s.iD)("div", En, [(0, s._)("img", {
        class: "h-full w-full max-w-[400px]",
        draggable: "false",
        src: r.data.imageUrl,
        alt: ""
      }, null, 8, In)])) : (0, s.kq)("", true), r.data.imageStatucCode !== 3 || r.data.imageUrl ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", Tn, [Dn, (0, s._)("p", _n, (0, l.toDisplayString)(r.data.errorMsg || e.i18n("hua4c9df2")), 1)])), r.data.imageTaskId && r.data.imageStatucCode === 2 && r.data.imageUrl ? ((0, s.wg)(), (0, s.iD)("div", Mn, [(0, s._)("img", {
        class: "h-full w-full max-w-[400px]",
        src: r.data.imageUrl,
        alt: ""
      }, null, 8, Fn), (0, s._)("div", zn, [(0, s._)("div", {
        class: "absolute top-[12px] left-[12px] z-[2] h-[20px] w-[20px] cursor-pointer opacity-0 transition-opacity group-hover:opacity-100",
        onClick: t[0] ||= (0, i.withModifiers)(() => {}, ["stop"])
      }, [(0, s._)("a", {
        href: r.data.rawImageUrl || r.data.imageUrl,
        target: "_blank",
        download: "download"
      }, Bn, 8, Rn)]), (0, s._)("img", {
        draggable: "false",
        class: "h-[104px] w-[104px] cursor-pointer opacity-0 transition-opacity group-hover:opacity-100",
        src: cn,
        onClick: c
      })])])) : (0, s.kq)("", true)]), r.data.imageStatucCode === 2 && r.data.imageTaskType !== "UTask" ? ((0, s.wg)(), (0, s.iD)("div", Nn, [r.data.imageTaskType === "MainTask" || r.data.imageTaskType === "VTask" ? ((0, s.wg)(), (0, s.iD)("div", Ln, [((0, s.wg)(), (0, s.iD)(s.HY, null, (0, s.Ko)(a, e => (0, s._)("button", {
        key: e,
        class: "h-[28px] flex-1 rounded-[4px] bg-[rgb(238,238,238)] text-[14px] text-color-black transition-colors hover:bg-[rgb(209,208,208)] chat-w:bg-color-white hover:chat-w:bg-[rgb(197,197,197)]",
        onClick: t => u(e)
      }, (0, l.toDisplayString)(e), 9, Pn)), 64))])) : (0, s.kq)("", true), r.data.imageTaskType === "MainTask" ? ((0, s.wg)(), (0, s.iD)("div", On, [((0, s.wg)(), (0, s.iD)(s.HY, null, (0, s.Ko)(o, e => (0, s._)("button", {
        key: e,
        class: "h-[28px] flex-1 rounded-[4px] bg-[rgb(238,238,238)] text-[14px] text-color-black transition-colors hover:bg-[rgb(209,208,208)] chat-w:bg-color-white hover:chat-w:bg-[rgb(197,197,197)]",
        onClick: t => u(e)
      }, (0, l.toDisplayString)(e), 9, qn)), 64))])) : (0, s.kq)("", true)])) : (0, s.kq)("", true)], 2))])])]);
    };
  }
});
const jn = (0, Q.Z)(Un, [["__scopeId", "data-v-00a4e0a2"]]);
const Hn = e => {
  (0, s.dD)("data-v-700ddefa");
  e = e();
  (0, s.Cn)();
  return e;
};
const Vn = {
  class: "mb-[12px] w-full px-[20px]"
};
const Gn = {
  class: "relative flex w-full flex-shrink-0 overflow-hidden"
};
const Yn = Hn(() => (0, s._)("div", {
  class: "bg-gradient-to-bl relative mr-[8px] flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-[#2CCB92] chat-p:from-[#A93DF1] chat-p:to-[#5C55E4] chat-w:bg-[#11A57F]"
}, [(0, s._)("div", {
  class: "h-[24px] w-[24px] bg-[url(@widget/widget-chatgpt/img/ai-logo-fff.png)] bg-contain bg-center bg-no-repeat"
})], -1));
const Zn = {
  class: "chat-item-inner-box"
};
const Wn = {
  key: 0,
  class: "flex w-[424px] items-center justify-center overflow-hidden rounded-b-[6px] rounded-tr-[6px] border border-color-black border-opacity-5 mb:w-full"
};
const Qn = {
  class: "flex w-full bg-color-white p-[16px] chat-w:bg-color-black chat-w:bg-opacity-5"
};
const Kn = Hn(() => (0, s._)("img", {
  src: sn,
  alt: "",
  class: "h-[48px] w-[60px]"
}, null, -1));
const Xn = {
  class: "pt-[6px] pl-[16px] font-ali-55 text-[14px] leading-[20px] text-[#3A3A3C]"
};
const Jn = {
  class: "flex w-[400px] items-center justify-center overflow-hidden rounded-[4px] mb:w-full"
};
const $n = {
  key: 0,
  class: "flex h-[120px] w-full flex-col items-center justify-center text-[rgb(119,119,119)] chat-w:text-color-white"
};
const er = Hn(() => (0, s._)("i", {
  class: "iconfont icon-loading_small ml-[4px] animate-[spin_1.2s_linear_infinite] text-[24px]"
}, null, -1));
const tr = {
  class: "mt-[8px]"
};
const nr = {
  class: "mt-[2px]"
};
const rr = {
  key: 1,
  class: "flex h-[120px] w-full flex-col items-center justify-center rounded-[4px] border border-[#FF4D4F] border-opacity-60 chat-w:border-none"
};
const ir = Hn(() => (0, s._)("img", {
  src: sn,
  class: "h-[48px] w-[60px]",
  alt: ""
}, null, -1));
const ar = {
  class: "mt-[12px] font-ali-55 text-[14px] text-[#8E8E94] chat-w:text-[#FF4D4F]"
};
const or = {
  key: 2,
  class: "relative z-0 w-full"
};
const sr = ["src"];
const lr = {
  class: "group absolute inset-0 z-[1] flex items-center justify-center transition-colors hover:bg-[#0000004D]"
};
const cr = ["href"];
const ur = [Hn(() => (0, s._)("img", {
  src: ln,
  class: "h-full w-full",
  alt: ""
}, null, -1))];
const pr = {
  key: 0,
  class: "ml-[48px] mt-[12px] text-[10px] leading-[14px] text-[#7883BC] chat-p:text-[rgba(255,255,255,0.6)] chat-w:text-[rgba(142,142,148,0.6)]"
};
const dr = (0, s.aZ)({
  __name: "chat-basic-image-item",
  props: {
    data: null
  },
  emits: ["preview", "upgrade"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    function a() {
      n("preview", r.data.rawImageUrl || r.data.imageUrl);
    }
    function o() {
      n("upgrade");
    }
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", Vn, [(0, s._)("div", Gn, [Yn, (0, s._)("div", Zn, [r.data.error ? ((0, s.wg)(), (0, s.iD)("div", Wn, [(0, s._)("div", Qn, [Kn, (0, s._)("div", Xn, [(0, s._)("p", null, (0, l.toDisplayString)(r.data.content), 1), r.data.extra ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "err-btn mt-[10px] flex h-[28px] w-[120px] cursor-pointer items-center justify-center text-[14px] leading-none text-color-white",
        onClick: o
      }, (0, l.toDisplayString)(e.i18n("sheng15309c")), 1)) : (0, s.kq)("", true)])])])) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: (0, l.normalizeClass)(["chat-item-inner insert-shadow-assistant-w relative z-0 w-[424px] rounded-b-[6px] rounded-tr-[6px] bg-color-white p-[12px] transition-all mb:w-full", [r.data.imageStatucCode === 3 ? "border border-[#FF4D4F] border-opacity-60 chat-w:bg-[#DC4538] chat-w:bg-opacity-5" : "chat-w:bg-[#11A57F]"]])
      }, [(0, s._)("div", Jn, [r.data.processing ? ((0, s.wg)(), (0, s.iD)("div", $n, [er, (0, s._)("p", tr, (0, l.toDisplayString)(e.i18n("asymbol5054a")), 1), (0, s._)("p", nr, (0, l.toDisplayString)(e.i18n("ping21500c")), 1)])) : (0, s.kq)("", true), r.data.processing || r.data.imageUrl ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", rr, [ir, (0, s._)("p", ar, (0, l.toDisplayString)(r.data.errorMsg || e.i18n("hua4c9df2")), 1)])), r.data.imageUrl ? ((0, s.wg)(), (0, s.iD)("div", or, [(0, s._)("img", {
        class: "h-full w-full max-w-[400px]",
        src: r.data.imageUrl,
        alt: ""
      }, null, 8, sr), (0, s._)("div", lr, [r.data.forbidden ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "absolute top-[12px] left-[12px] z-[2] h-[20px] w-[20px] cursor-pointer opacity-0 transition-opacity group-hover:opacity-100",
        onClick: t[0] ||= (0, i.withModifiers)(() => {}, ["stop"])
      }, [(0, s._)("a", {
        href: r.data.imageUrl,
        target: "_blank",
        download: "download"
      }, ur, 8, cr)])), (0, s._)("img", {
        draggable: "false",
        class: "h-[104px] w-[104px] cursor-pointer opacity-0 transition-opacity group-hover:opacity-100",
        src: cn,
        onClick: a
      })])])) : (0, s.kq)("", true)])], 2))])]), !r.data.error && r.data.imageUrl ? ((0, s.wg)(), (0, s.iD)("p", pr, (0, l.toDisplayString)((0, c.SU)(te.AI_TIP_TEXT)), 1)) : (0, s.kq)("", true)]);
    };
  }
});
const hr = (0, Q.Z)(dr, [["__scopeId", "data-v-700ddefa"]]);
const gr = {
  class: "mx-auto w-full max-w-[1024px] py-[16px]"
};
const fr = {
  key: 0,
  class: "mx-auto mb-[20px] h-[1px] w-[calc(100%-40px)] bg-color-white bg-opacity-10 chat-w:bg-color-black chat-w:bg-opacity-[0.08]"
};
const mr = (0, s.aZ)({
  __name: "chatgpt-chat-content",
  props: {
    isLogin: {
      type: Boolean
    },
    conversion: null,
    abortShow: {
      type: Boolean
    }
  },
  emits: ["copy", "retry", "new-chat", "pause", "upgrade", "continue", "preview", "sub"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    function i(e) {
      n("preview", e);
    }
    function a(e, t) {
      n("sub", e, t);
    }
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", gr, [r.conversion.id === (0, c.SU)(te.NEWCHAT_ID) && r.conversion.messages?.length === 0 ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: (0, l.normalizeClass)([r.isLogin ? "" : "pointer-events-none opacity-40"])
      }, [(0, s.Wm)(Ge)], 2)) : (0, s.kq)("", true), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(r.conversion.messages, (e, o) => {
        (0, s.wg)();
        return (0, s.iD)(s.HY, {
          key: o
        }, [o > 0 && e.newAssistant && !e.assistantId ? ((0, s.wg)(), (0, s.iD)("div", fr)) : (0, s.kq)("", true), e.chatType === "image" && e.role === "assistant" ? ((0, s.wg)(), (0, s.j4)(jn, {
          key: 1,
          data: e,
          onPreview: i,
          onSub: a,
          onUpgrade: t[0] ||= e => n("upgrade")
        }, null, 8, ["data"])) : e.chatType === "basicImage" && e.role === "assistant" ? ((0, s.wg)(), (0, s.j4)(hr, {
          key: 2,
          data: e,
          onPreview: i,
          onUpgrade: t[1] ||= e => n("upgrade")
        }, null, 8, ["data"])) : ((0, s.wg)(), (0, s.j4)(Ot, {
          key: 3,
          "is-last": r.conversion.messages.length - 1 === o,
          data: e,
          "abort-show": r.abortShow,
          onRetry: t[2] ||= e => n("retry"),
          onCopy: t => n("copy", e.content),
          onContinue: t[3] ||= e => n("continue"),
          onNewChat: t[4] ||= e => n("new-chat"),
          onPause: t[5] ||= e => n("pause"),
          onSearch: e => function (e) {
            let t = r.conversion.messages[e - 1];
            if (t.content === "继续") {
              const e = (0, on.findLast)(r.conversion.messages, e => e.role === "user" && e.content !== "继续");
              if (e) {
                t = e;
              }
            }
            const n = D.EF && window.iframeAiInitData.baiduSearch || an().baiduUrl;
            window.open(n + t.content, "_blank");
          }(o)
        }, null, 8, ["is-last", "data", "abort-show", "onCopy", "onSearch"]))], 64);
      }), 128))]);
    };
  }
});
const br = {
  class: "flex h-full w-full flex-col items-center pt-[30%]"
};
const xr = ["src"];
const yr = {
  class: "mt-[32px] font-ali-55 text-[14px] text-color-white text-opacity-40"
};
const vr = (0, s.aZ)({
  __name: "chatgpt-login-tip",
  setup(e) {
    const t = (0, q.useUserStore)();
    function r() {
      if (D.EF) {
        (0, qe.bc)({
          type: qe.o1.openLogin
        });
      } else {
        t.showLogin(false);
      }
    }
    return (e, i) => {
      (0, s.wg)();
      return (0, s.iD)("div", br, [(0, s._)("img", {
        class: "h-[88px] w-[88px]",
        src: require("./3854.js"),
        alt: ""
      }, null, 8, xr), (0, s._)("p", yr, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("nin2865cf") : e.i18n("nin24602c")), 1), (0, s._)("button", {
        id: "chat-shake-btn",
        class: (0, l.normalizeClass)(["mt-[28px] h-[36px] w-[140px] rounded-[8px] bg-[#2CCB92] px-[14px] font-ali-65 text-[16px] leading-[22px] text-color-white", [{
          "!bg-[#9044ed]": (0, c.SU)(t).chatStatus.vip
        }]]),
        onClick: r
      }, (0, l.toDisplayString)((0, c.SU)(D.PA) ? e.i18n("deng1402d1") : e.i18n("deng168e6e")), 3)]);
    };
  }
});
const wr = (0, Q.Z)(vr, [["__scopeId", "data-v-04f4ddaa"]]);
import * as Ar from /*webcrack:missing*/"./5029.js";
import * as kr from "./7244.js";
const Sr = {
  class: "flex h-full w-full flex-col items-center bg-[#F8F8F8]"
};
const Cr = (e => {
  (0, s.dD)("data-v-35cfa1cc");
  e = e();
  (0, s.Cn)();
  return e;
})(() => (0, s._)("img", {
  class: "mt-[22px] mb-[40px] h-[87px] w-[132px]",
  src: kr
}, null, -1));
const Er = {
  class: "flex flex-col items-center text-[14px] leading-[20px] text-[#3A3A3C]"
};
const Ir = {
  class: "mx-[74px] mb-[24px] mt-[40px] flex gap-[12px]"
};
const Tr = (0, s.aZ)({
  __name: "chatgpt-pro-tips",
  props: {
    show: {
      type: Boolean
    },
    content1: null
  },
  emits: ["update:show", "open"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = (0, s.Fl)({
      get: () => r.show,
      set(e) {
        n("update:show", e);
      }
    });
    const a = () => {
      i.value = false;
      n("open", true);
    };
    return (e, t) => {
      const n = Ar.Z;
      (0, s.wg)();
      return (0, s.j4)(n, {
        show: (0, c.SU)(i),
        "onUpdate:show": t[1] ||= e => (0, c.dq)(i) ? i.value = e : null,
        width: 400
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", Sr, [Cr, (0, s._)("div", Er, [(0, s._)("p", null, (0, l.toDisplayString)(r.content1), 1), (0, s._)("p", null, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("jia139454") : e.i18n("jia17e07b")), 1)]), (0, s._)("div", Ir, [(0, s._)("button", {
          class: "btn-shadow flex h-[36px] w-[120px] items-center justify-center rounded-[8px] bg-[#FFFFFF] font-ali-65 text-[16px] leading-[22px] text-[#3A3A3C]",
          onClick: t[0] ||= e => i.value = false
        }, (0, l.toDisplayString)(e.i18n("qu3625fb")), 1), (0, s._)("button", {
          class: "btn-shadow btn-bg flex h-[36px] w-[120px] items-center justify-center rounded-[8px] font-ali-65 text-[16px] leading-[22px] text-[#FFFFFF]",
          onClick: a
        }, (0, l.toDisplayString)(e.i18n("qu437bd0")), 1)])])]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const Dr = (0, Q.Z)(Tr, [["__scopeId", "data-v-35cfa1cc"]]);
import * as _r from /*webcrack:missing*/"./5762.js";
const Mr = {
  class: "chatgpt-assistant-list px-[20px]"
};
const Fr = ["onClick"];
const zr = {
  class: "top flex items-center"
};
const Rr = ["src"];
const Br = {
  class: "ml-[6px] text-[#1C1C1E]"
};
const Nr = {
  class: "bottom font-ali-55 text-[12px] text-[#8E8E93] line-clamp-2"
};
const Lr = (0, s.uE)("<div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div><div class=\"holder\" data-v-5012a22c></div>", 10);
const Pr = (0, s.aZ)({
  __name: "chatgpt-assistant-list",
  emits: ["on-select"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = (0, te.useChatGptStore)();
    const i = (0, c.iH)();
    (0, s.bv)(() => {
      (0, _r.i9H)(i.value, () => {
        r.setAssistantListStatus(false);
      });
    });
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("section", Mr, [(0, s._)("article", {
        ref_key: "listBoxRef",
        ref: i,
        class: "list-box relative mx-auto flex w-full max-w-[1024px] flex-wrap justify-between gap-x-[4px] overflow-hidden rounded-[12px] bg-[#F8F8F8] p-[10px] pb-[6px]"
      }, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(r).chatAssistantList, e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.id,
          class: (0, l.normalizeClass)([[e.id === (0, c.SU)(r).activeAssistantId ? "border-[#7282D2] chat-p:border-[#9648FF] chat-w:border-[#11A57F]" : "border-[#E5E5EA]"], "card mb-[4px] flex h-[72px] w-[164px] shrink-0 cursor-pointer flex-col justify-between rounded-[6px] border-[1px] bg-color-white px-[8px] py-[6px]"]),
          onClick: t => {
            i = e.id;
            r.resetNetoption();
            r.setActiveAssistant(i);
            r.setAssistantListStatus(false);
            n("on-select", i);
            return;
            var i;
          }
        }, [(0, s._)("div", zr, [(0, s._)("img", {
          class: "h-[16px] w-[16px]",
          src: e.logo,
          alt: ""
        }, null, 8, Rr), (0, s._)("span", Br, (0, l.toDisplayString)(e.title), 1)]), (0, s._)("div", Nr, (0, l.toDisplayString)(e.desc), 1)], 10, Fr);
      }), 128)), Lr], 512)]);
    };
  }
});
const Or = (0, Q.Z)(Pr, [["__scopeId", "data-v-5012a22c"]]);
const qr = ["onClick"];
const Ur = (0, s.aZ)({
  __name: "hi-popover-menu",
  props: {
    options: null,
    hideBoxClass: {
      type: Boolean
    }
  },
  emits: ["update:value", "menu-click"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", {
        class: (0, l.normalizeClass)(r.hideBoxClass ? "" : "hi-select-menu overflow-hidden rounded-[8px] bg-color-b5 p-[4px] shadow-popover")
      }, [(0, s._)("div", null, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(r.options, (e, t) => {
        (0, s.wg)();
        return (0, s.iD)(s.HY, {
          key: t
        }, [e ? ((0, s.wg)(), (0, s.iD)("button", {
          key: 0,
          type: "button",
          class: (0, l.normalizeClass)(["h-[32px] w-full cursor-pointer rounded-[4px] px-[16px] text-left text-[14px] text-color-t2 hover:bg-color-m2 hover:bg-opacity-[0.06] hover:text-color-t1 not-last:mb-[4px]", {
            [`text-color-${e.color}`]: e.color
          }]),
          onClick: e => {
            n("update:value", i = t);
            n("menu-click");
            if ((a = (o = r.options[i]).handler) !== null && a !== undefined) {
              a.call(o);
            }
            return;
            var i;
            var a;
            var o;
          }
        }, (0, l.toDisplayString)(e.text), 11, qr)) : (0, s.kq)("", true)], 64);
      }), 128))])], 2);
    };
  }
});
import * as jr from /*webcrack:missing*/"./3446.js";
import * as Hr from /*webcrack:missing*/"./3603.js";
const Vr = (0, s.aZ)({
  __name: "hi-popover",
  props: {
    show: {
      type: Boolean
    },
    value: {
      default: ""
    },
    options: {
      default: undefined
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    placement: {
      default: "bottom-end"
    },
    menuClass: {
      default: ""
    },
    onlyTheme: {
      default: undefined
    }
  },
  emits: ["update:show", "update:value"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = (0, s.Fl)({
      get: () => r.show,
      set(e) {
        n("update:show", e);
      }
    });
    const a = (0, s.Fl)({
      get: () => r.value,
      set(e) {
        n("update:value", e);
      }
    });
    const o = (0, c.iH)(0);
    const u = (0, c.iH)(0);
    (0, s.YP)(i, e => {
      if (e) {
        u.value = (0, jr.K)();
        o.value = (0, jr.K)();
      }
    });
    return (t, n) => {
      const p = Ur;
      const d = (0, s.up)("van-popover");
      (0, s.wg)();
      return (0, s.j4)(d, {
        show: (0, c.SU)(i),
        "onUpdate:show": n[2] ||= e => (0, c.dq)(i) ? i.value = e : null,
        placement: e.placement,
        "show-arrow": e.showArrow,
        style: (0, l.normalizeStyle)({
          zIndex: o.value,
          ...(e.onlyTheme ? (0, c.SU)(Hr.gh)(e.onlyTheme) : null)
        }),
        overlay: "",
        "overlay-class": "!bg-[transparent]",
        "overlay-style": {
          zIndex: u.value
        }
      }, {
        default: (0, s.w5)(() => [(0, s.WI)(t.$slots, "default", {}, () => [(0, s.Wm)(p, {
          value: (0, c.SU)(a),
          "onUpdate:value": n[0] ||= e => (0, c.dq)(a) ? a.value = e : null,
          options: r.options,
          class: (0, l.normalizeClass)(r.menuClass),
          onMenuClick: n[1] ||= e => i.value = false
        }, null, 8, ["value", "options", "class"])])]),
        reference: (0, s.w5)(() => [(0, s.WI)(t.$slots, "reference")]),
        _: 3
      }, 8, ["show", "placement", "show-arrow", "style", "overlay-style"]);
    };
  }
});
const Gr = {
  class: "hi-select"
};
const Yr = {
  class: "flex-1"
};
const Zr = [(0, s._)("i", {
  class: "iconfont icon-down_icon text-[12px]"
}, null, -1)];
const Wr = (0, s.aZ)({
  __name: "hi-select",
  props: {
    value: null,
    options: null,
    menuClass: null,
    onlyTheme: null,
    textClass: null
  },
  emits: ["update:value", "update:show"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = (0, c.iH)(false);
    (0, s.YP)(() => i.value, e => n("update:show", e));
    const a = (0, s.Fl)({
      get: () => r.value,
      set(e) {
        n("update:value", e);
      }
    });
    return (e, t) => {
      const n = Vr;
      (0, s.wg)();
      return (0, s.iD)("div", Gr, [(0, s.Wm)(n, {
        show: i.value,
        "onUpdate:show": t[0] ||= e => i.value = e,
        value: (0, c.SU)(a),
        "onUpdate:value": t[1] ||= e => (0, c.dq)(a) ? a.value = e : null,
        "menu-class": r.menuClass,
        options: r.options,
        "only-theme": r.onlyTheme
      }, {
        reference: (0, s.w5)(() => [(0, s._)("div", {
          class: (0, l.normalizeClass)(["flex cursor-pointer items-center", [r.textClass ? r.textClass : "text-[14px] text-color-t2"]])
        }, [(0, s._)("span", Yr, (0, l.toDisplayString)(r.options[(0, c.SU)(a)].text), 1), (0, s._)("div", {
          class: (0, l.normalizeClass)(["ml-[12px] flex-shrink-0 transform-gpu transition-transform duration-150", {
            "rotate-180": i.value,
            "ml-[6px]": r.textClass
          }])
        }, Zr, 2)], 2)]),
        _: 1
      }, 8, ["show", "value", "menu-class", "options", "only-theme"])]);
    };
  }
});
const Qr = (0, s.aZ)({
  __name: "hi-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      default: 12
    }
  },
  emits: ["update:value"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = () => {
      n("update:value", !r.value);
    };
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("button", {
        class: (0, l.normalizeClass)(["hi-switch h-[16px] rounded-[8px] p-[2px] duration-300", r.value ? "bg-color-green" : "bg-color-b1"]),
        style: (0, l.normalizeStyle)({
          width: r.size * 2 + "px",
          fontSize: r.size + "px"
        }),
        onClick: i
      }, [(0, s._)("i", {
        class: (0, l.normalizeClass)(["block h-[1em] w-[1em] transform-gpu rounded-full bg-[#fff] transition-transform duration-300", {
          "translate-x-[8px]": r.value
        }])
      }, null, 2)], 6);
    };
  }
});
import * as Kr from "./7882.js";
import * as Xr from "./7033.js";
const Jr = {
  class: "relative z-[1]"
};
const $r = {
  key: 0,
  class: "shadow model-list group inline-flex h-[28px] items-center gap-[2px] rounded-[8px] border border-color-white border-opacity-10 bg-[#4A589E] p-[2px] text-[14px] chat-p:border-color-white chat-p:border-opacity-10 chat-p:bg-[#473396] chat-w:border-color-black chat-w:border-opacity-[0.12] chat-w:bg-color-white"
};
const ei = ["onClick"];
const ti = {
  class: "hidden mb:block"
};
const ni = {
  class: "block mb:hidden"
};
const ri = {
  key: 0,
  class: "ml-[8px] h-[12px] w-[12px] bg-[url(@widget/widget-chatgpt/img/lock-white.png)] bg-cover bg-center chat-w:bg-[url(@widget/widget-chatgpt/img/lock-black.png)]"
};
const ii = (e => {
  (0, s.dD)("data-v-7fdf89c8");
  e = e();
  (0, s.Cn)();
  return e;
})(() => (0, s._)("img", {
  src: Xr,
  draggable: "false",
  class: "h-[40px] w-[61px]",
  alt: ""
}, null, -1));
const ai = {
  class: "mt-[12px] text-center font-ali-55 text-[14px] leading-[20px] text-[#1C1C1E]"
};
const oi = (0, s.aZ)({
  __name: "chatgpt-model-select",
  emits: ["select-model", "click-upgrade"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = (0, q.useUserStore)();
    const i = (0, s.Fl)(() => r.chatStatus.vip);
    const o = (0, c.iH)();
    const {
      chatModelList: u,
      activeSelectModel: p
    } = (0, X.useModalData)();
    const d = (0, c.iH)(false);
    const h = (0, c.iH)(null);
    function g(e) {
      if (i.value) {
        return !e.limitUse;
      } else {
        return !e.limitVip;
      }
    }
    function f() {
      let t = "";
      const r = o.value?.limitKey;
      if (r === "image") {
        t = te.PlanProduct.PREMIUM;
      } else if (r === "baiscImage") {
        t = te.PlanProduct.PROFESSIONAL;
      }
      n("click-upgrade", t);
      d.value = false;
    }
    (0, s.YP)(() => d.value, () => {
      if (d.value && !h.value) {
        (0, s.Y3)(() => {
          (0, _r.i9H)(h.value, () => {
            d.value = false;
          });
        });
      }
    });
    return (e, t) => {
      const r = a.Z;
      (0, s.wg)();
      return (0, s.iD)("div", Jr, [(0, c.SU)(p).id ? ((0, s.wg)(), (0, s.iD)("div", $r, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(u), e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.id,
          class: (0, l.normalizeClass)(["model-item flex h-full cursor-pointer items-center justify-center whitespace-nowrap rounded-[5px] pl-[12px] font-ali-55 text-color-white text-opacity-60 transition-colors", [(0, c.SU)(p).id === e.id ? "active-p bg-[#2CCB92] text-opacity-100 chat-w:bg-[#202020] chat-w:text-color-white " : "hover:bg-[#3A4684] hover:text-opacity-100 chat-p:hover:bg-[#2B2755] chat-w:text-[#8E8E94] chat-w:hover:bg-[#E5E5EA] chat-w:hover:text-[#1C1C1E] chat-w:hover:text-opacity-100", g(e) ? "pr-[12px]" : "pr-[4px]"]]),
          onClick: t => {
            r = e;
            o.value = r;
            if (r.id !== p.value.id) {
              if (!r.limitVip || i.value) {
                if (!r.limitUse || !D.s8) {
                  if (r.limitUse) {
                    d.value = true;
                  } else {
                    d.value = false;
                    n("select-model", r);
                  }
                }
              } else {
                d.value = true;
              }
            } else {
              d.value = false;
            }
            return;
            var r;
          }
        }, [(0, s._)("span", ti, (0, l.toDisplayString)((0, c.SU)(x)(e.abbName.split("-"))), 1), (0, s._)("span", ni, (0, l.toDisplayString)(e.abbName), 1), g(e) ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("span", ri))], 10, ei);
      }), 128))])) : (0, s.kq)("", true), (0, s.Wm)(r, {
        ani: "fade",
        show: d.value
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", {
          ref_key: "domRef",
          ref: h,
          class: "shadow absolute left-0 bottom-[32px] flex min-h-[136px] w-[282px] flex-col items-center rounded-[8px] bg-color-white p-[8px] chat-w:bg-[#f8f8f8]"
        }, [ii, (0, s._)("h2", ai, (0, l.toDisplayString)((0, c.SU)(i) ? e.i18n("sheng1f59de") : (0, c.SU)(D.EF) ? e.i18n("jia1ccbf5") : e.i18n("jia1f730c")), 1), (0, s._)("div", {
          class: "mt-[12px] flex h-[36px] w-full cursor-pointer items-center justify-center bg-[url(@widget/widget-chatgpt/img/tip-btn.png)] bg-cover bg-center bg-no-repeat text-[16px] font-medium text-color-white",
          onClick: f
        }, (0, l.toDisplayString)(e.i18n("li46b4a7")), 1)], 512)]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});
const si = (0, Q.Z)(oi, [["__scopeId", "data-v-7fdf89c8"]]);
import * as li from /*webcrack:missing*/"./661.js";
var ci = li;
import * as ui from "./2326.js";
var pi = ui;
const di = e => {
  (0, s.dD)("data-v-f6a47ea0");
  e = e();
  (0, s.Cn)();
  return e;
};
const hi = {
  class: "relative z-0 w-full max-w-[1024px] rounded-[12px] border border-[rgba(255,255,255,0.05)] bg-[#3A4684] px-[12px] pt-[12px] pb-[10px] chat-p:border-[rgba(223,197,255,0.1)] chat-p:bg-[#2B2755] chat-w:border-[rgba(0,0,0,0.12)] chat-w:bg-[#F8F8F8]"
};
const gi = {
  class: "flex w-full flex-row items-center justify-between"
};
const fi = {
  class: "flex flex-row items-center"
};
const mi = {
  class: "absolute top-[-26px] left-0"
};
const bi = {
  key: 0,
  class: "flex items-center"
};
const xi = {
  class: "font-ali-55 text-[14px] text-color-white text-opacity-60 chat-w:text-[#8E8E94] chat-w:text-opacity-100"
};
const yi = {
  class: "flex flex-row items-center"
};
const vi = di(() => (0, s._)("i", {
  class: "iconfont icon-helper_ai text-[19px] text-color-white chat-w:text-[#202020]"
}, null, -1));
const wi = {
  class: "ml-[4px] font-ali-55 text-[14px] text-color-white text-opacity-60 chat-w:text-[#3A3A3C]"
};
const Ai = ["onClick"];
const ki = [di(() => (0, s._)("i", {
  class: "iconfont icon-line text-[rgba(0,0,0,0.6)]"
}, null, -1))];
const Si = di(() => (0, s._)("i", {
  class: "iconfont icon-helper_ai text-[20px] text-color-white chat-p:text-color-white chat-w:text-[#202020]"
}, null, -1));
const Ci = di(() => (0, s._)("div", {
  class: "mx-[13px] h-[16px] w-[2px] rounded-[1px] bg-[#DFC5FF] bg-opacity-10"
}, null, -1));
const Ei = di(() => (0, s._)("i", {
  class: "iconfont icon-stop_ai text-[20px] text-color-white chat-p:text-color-white chat-w:text-[#202020]"
}, null, -1));
const Ii = {
  class: "relative w-full overflow-hidden pt-[12px]"
};
const Ti = {
  class: "relative max-h-[120px] min-h-[40px] w-full transition-all"
};
const Di = {
  class: "invisible m-0 block h-auto w-full bg-color-none p-0 transition-all"
};
const _i = {
  class: "block max-h-[120px] min-h-[40px] overflow-hidden whitespace-pre-wrap break-words font-ali-55 text-[14px] leading-[20px]"
};
const Mi = ["autofocus", "placeholder", "onKeydown"];
const Fi = (0, s.aZ)({
  __name: "chatgpt-input-box",
  props: {
    disabled: {
      type: Boolean
    },
    operateDisabled: {
      type: Boolean
    },
    abortShow: {
      type: Boolean
    }
  },
  emits: ["send", "pause"],
  setup(e, t) {
    let {
      expose: n,
      emit: r
    } = t;
    const a = e;
    ci.extend(pi);
    const o = (0, te.useChatGptStore)();
    const u = (0, q.useUserStore)();
    const p = (0, c.iH)(false);
    const d = (0, c.iH)("");
    const h = (0, c.iH)();
    const g = (0, s.Fl)(() => !!d.value.trim());
    let f;
    (0, s.YP)(d, e => {
      if (e === "/") {
        f = window.setTimeout(() => {
          if (!!u.chatStatus.vip || !u.chatStatus.pay) {
            o.setAssistantListStatus(true);
          }
        }, 100);
      } else {
        if (f !== null) {
          clearTimeout(f);
          f = null;
        }
        if (o.assistantListShow) {
          o.setAssistantListStatus(false);
        }
      }
    });
    const m = (0, s.Fl)({
      get: () => o.networkSwitch,
      set(e) {
        o.setNetworkSwitch(e);
        if (e) {
          o.clearActiveAssistant();
        }
      }
    });
    const b = (0, s.Fl)({
      get: () => o.networkOption,
      set(e) {
        o.setNetworkOption(e);
      }
    });
    const x = (0, s.Fl)(() => {
      const e = o.activeAssistant;
      if (e) {
        return {
          logo: e.logo,
          title: e.title,
          titleWidth: e.title.length * 14 + 6,
          placeholder: e.placeholder + i18n("asymbol2ca02")
        };
      } else {
        return {
          logo: Kr,
          title: "",
          titleWidth: 0,
          placeholder: i18n("shu1d1348")
        };
      }
    });
    const y = () => {
      if (!u.chatStatus.pay || u.chatStatus.vip) {
        o.setAssistantListStatus(true);
      } else {
        o.setVipTipsShow(true, D.EF ? i18n("asymbol65371") : i18n("asymbol588a2"));
      }
    };
    const v = () => {
      var e;
      if ((e = h.value) !== null && e !== undefined) {
        e.focus();
      }
    };
    const w = () => {
      o.setActiveAssistant("");
      v();
    };
    function A(e) {
      o.setHighlihgtPlanProduct(e);
      o.setPanelShowType(D.s8 ? "chatai-subscribe" : "chat-expense");
    }
    function k(e) {
      o.setSelectModel(e);
    }
    function S() {
      if (D.EF && !D.s8 && !window.iframeAiInitData.phoneNumber) {
        (0, qe.bc)({
          type: qe.o1.needBindPhone
        });
        return;
      }
      if (a.operateDisabled) {
        re.R.warn({
          message: i18n("qing31dd05")
        });
        return;
      }
      if (u.chatStatus.pay && !u.chatStatus.vip && ci(o.overLimit).isToday()) {
        o.setVipTipsShow(true, i18n("jin182449"));
        return;
      }
      const e = d.value.trim();
      if (e) {
        r("send", e);
        d.value = "";
      }
    }
    function C() {
      r("pause");
    }
    function E() {
      o.openUploadDialog();
    }
    function I(e) {
      if ((!D.s$ || e.keyCode !== 229) && !p.value) {
        S();
        e.preventDefault();
      }
    }
    function T(e) {
      e.preventDefault();
      d.value += "\n";
      (0, s.Y3)(() => {
        var e;
        if ((e = h.value) !== null && e !== undefined) {
          e.scrollTo({
            top: h.value.scrollHeight
          });
        }
      });
    }
    function _() {
      p.value = true;
    }
    function M() {
      p.value = false;
    }
    (0, s.bv)(() => {
      var e;
      if ((e = h.value) !== null && e !== undefined) {
        e.addEventListener("keydown", e => {
          if (o.assistantListShow) {
            if (e.key === "ArrowUp") {
              o.setActiveAssistantToPrev();
              e.stopPropagation();
              e.preventDefault();
            } else if (e.key === "ArrowDown") {
              o.setActiveAssistantToNext();
              e.stopPropagation();
              e.preventDefault();
            } else if (e.key === "Escape" || e.key === "Enter") {
              o.setAssistantListStatus(false);
              if (d.value === "/") {
                d.value = "";
              }
              e.stopPropagation();
              e.preventDefault();
            } else if (o.assistantListShow) {
              o.setAssistantListStatus(false);
            }
            return false;
          }
        }, true);
      }
    });
    n({
      focus: v,
      selectAssistant: () => {
        v();
        if (d.value === "/") {
          d.value = "";
        }
      }
    });
    return (e, t) => {
      const n = Qr;
      const r = Wr;
      (0, s.wg)();
      return (0, s.iD)("div", hi, [(0, s._)("div", gi, [(0, s._)("div", fi, [(0, s.Wm)(si, {
        onClickUpgrade: A,
        onSelectModel: k
      }), (0, s._)("div", mi, [(0, c.SU)(o).activeSelectModel.network ? ((0, s.wg)(), (0, s.iD)("div", bi, [(0, s._)("span", xi, (0, l.toDisplayString)((0, c.SU)(o).activeSelectModel.network), 1), (0, s.Wm)(n, {
        value: (0, c.SU)(m),
        "onUpdate:value": t[0] ||= e => (0, c.dq)(m) ? m.value = e : null,
        class: (0, l.normalizeClass)(["ml-[8px]", (0, c.SU)(m) ? "bg-color-green chat-p:bg-[rgb(141,47,224)] chat-w:bg-[#202020]" : "bg-[rgba(255,255,255,0.2)] chat-w:bg-[#D1D1D6]"])
      }, null, 8, ["value", "class"]), (0, c.SU)(o).activeSelectModel.netOptions ? ((0, s.wg)(), (0, s.j4)(r, {
        key: 0,
        value: (0, c.SU)(b),
        "onUpdate:value": t[1] ||= e => (0, c.dq)(b) ? b.value = e : null,
        class: "ml-[12px]",
        "only-theme": "light",
        options: (0, c.SU)(o).activeSelectModel.netOptions,
        "text-class": "font-ali-55 text-[14px] text-color-white text-opacity-60 chat-w:text-[#8E8E94] chat-w:text-opacity-100"
      }, null, 8, ["value", "options"])) : (0, s.kq)("", true)])) : (0, s.kq)("", true)])]), (0, s._)("div", yi, [(0, s._)("div", null, [(0, c.SU)(o).activeAssistantId ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "input-prefix group relative z-0 flex h-[28px] min-w-[28px] cursor-pointer items-center justify-around bg-[#4A589E] pl-[4px] pr-[8px] leading-none transition-transform chat-p:bg-[#473396] chat-w:bg-color-white",
        onClick: y
      }, [vi, (0, s._)("span", wi, (0, l.toDisplayString)((0, c.SU)(x).title), 1), (0, s._)("span", {
        class: "delete-shadow absolute left-[-6px] top-[-6px] hidden h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[10px] bg-color-white bg-opacity-40 backdrop-blur-[20px] transition-colors hover:cursor-default hover:bg-opacity-60 group-hover:flex",
        onClick: (0, i.withModifiers)(w, ["stop"])
      }, ki, 8, Ai)])) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: "group relative flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] transition-colors hover:bg-[rgba(0,0,0,0.16)] chat-p:hover:bg-[rgba(0,0,0,0.4)] chat-w:hover:bg-[rgba(0,0,0,0.06)]",
        onClick: y
      }, [Si, (0, s.Wm)(Je, {
        class: "absolute top-[-32px] left-1/2 opacity-0 transition-opacity group-hover:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("asymboldcd56")), 1)]),
        _: 1
      })]))]), (0, s._)("div", {
        class: "group relative ml-[12px] flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] transition-colors hover:bg-[rgba(0,0,0,0.16)] chat-p:hover:bg-[rgba(0,0,0,0.4)] chat-w:hover:bg-[rgba(0,0,0,0.06)]",
        onClick: E
      }, [(0, s._)("i", {
        class: (0, l.normalizeClass)([[(0, c.SU)(o).canSelectDocument ? "text-color-white chat-p:text-color-white chat-w:text-[#202020]" : "text-color-white text-opacity-20 chat-w:text-color-t3 chat-w:text-opacity-20"], "iconfont icon-document1 text-[20px] text-color-white chat-w:text-[#202020]"])
      }, null, 2), (0, s.Wm)(Je, {
        class: "absolute top-[-32px] left-1/2 opacity-0 transition-opacity group-hover:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("shang4c485b")), 1)]),
        _: 1
      })]), Ci, (0, s._)("div", null, [a.abortShow ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "group relative flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] transition-colors hover:bg-[rgba(0,0,0,0.16)] chat-p:hover:bg-[rgba(0,0,0,0.4)] chat-w:hover:bg-[rgba(0,0,0,0.06)]",
        onClick: C
      }, [Ei, (0, s.Wm)(Je, {
        class: "absolute top-[-32px] left-1/2 opacity-0 transition-opacity group-hover:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("ting2095e9")), 1)]),
        _: 1
      })])) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: "group relative flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-[6px] transition-colors hover:bg-[rgba(0,0,0,0.16)] chat-p:hover:bg-[rgba(0,0,0,0.4)] chat-w:hover:bg-[rgba(0,0,0,0.06)]",
        onClick: S
      }, [(0, s._)("i", {
        class: (0, l.normalizeClass)([[(0, c.SU)(g) ? "text-color-white chat-p:text-color-white chat-w:text-[#202020]" : "text-color-white text-opacity-20 chat-w:text-color-t3"], "iconfont icon-send text-[20px]"])
      }, null, 2), (0, s.Wm)(Je, {
        class: "absolute top-[-32px] left-1/2 opacity-0 transition-opacity group-hover:opacity-100"
      }, {
        default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("fa11535f")), 1)]),
        _: 1
      })]))])])]), (0, s._)("div", Ii, [(0, s._)("div", Ti, [(0, s._)("div", Di, [(0, s._)("span", _i, (0, l.toDisplayString)(d.value + " "), 1)]), (0, s.wy)((0, s._)("textarea", {
        ref_key: "textareaRef",
        ref: h,
        "onUpdate:modelValue": t[2] ||= e => d.value = e,
        autofocus: !a.disabled,
        tabindex: "-1",
        autocomplete: "off",
        class: "textarea-scroll hi-scroll absolute inset-0 box-border h-full w-full resize-none appearance-none break-words bg-color-none font-ali-55 text-[14px] leading-[20px] text-color-white chat-w:text-[#3A3A3C]",
        placeholder: (0, c.SU)(x).placeholder,
        onKeydown: [(0, i.withKeys)((0, i.withModifiers)(I, ["exact"]), ["enter"]), (0, i.withKeys)((0, i.withModifiers)(T, ["ctrl", "exact"]), ["enter"]), (0, i.withKeys)((0, i.withModifiers)(T, ["meta", "exact"]), ["enter"])],
        onCompositionstart: _,
        onCompositionend: M
      }, null, 40, Mi), [[i.vModelText, d.value]])])])]);
    };
  }
});
const zi = (0, Q.Z)(Fi, [["__scopeId", "data-v-f6a47ea0"]]);
const Ri = (0, s.aZ)({
  __name: "chatgpt-button",
  props: {
    disabled: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("button", {
        class: (0, l.normalizeClass)(["insert-shadow flex h-[32px] items-center justify-center rounded-[8px] bg-[#3A4684] pl-[9px] pr-[12px] font-ali-65 text-[14px] leading-none text-color-white text-opacity-60 transition-colors chat-p:bg-[#2B2755] chat-w:bg-[#FFFFFF] chat-w:text-[#3A3A3C] chat-w:hover:text-[#1c1c1c]", [r.disabled ? "pointer-events-none cursor-not-allowed opacity-40" : "hover:bg-[#4A589E] hover:text-opacity-100 chat-p:hover:bg-[#473396] chat-w:hover:bg-[rgba(0,0,0,0.06)]"]]),
        onClick: t[0] ||= e => n("click")
      }, [(0, s.WI)(e.$slots, "default")], 2);
    };
  }
});
const Bi = (0, Q.Z)(Ri, [["__scopeId", "data-v-7da7a906"]]);
const Ni = ["onClick"];
const Li = ["src"];
const Pi = {
  class: "absolute top-8 right-8 flex flex-col items-center gap-[20px]"
};
const Oi = ["onClick"];
const qi = [(e => {
  (0, s.dD)("data-v-7246950f");
  e = e();
  (0, s.Cn)();
  return e;
})(() => (0, s._)("i", {
  class: "iconfont icon-quxiao text-[24px]"
}, null, -1))];
const Ui = ["href"];
const ji = (0, s.aZ)({
  __name: "chatgpt-image-preview",
  props: {
    show: {
      type: Boolean
    },
    imageUrl: null
  },
  emits: ["update:show"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const a = (0, c.iH)(false);
    const l = (0, s.Fl)({
      get: () => r.show,
      set(e) {
        n("update:show", e);
      }
    });
    function u() {
      a.value = false;
      l.value = false;
      n("update:show", a.value);
    }
    (0, s.bv)(() => {
      (0, s.Y3)(() => {
        window.addEventListener("keydown", e => {
          if (e.keyCode == 27) {
            u();
          }
        }, false);
      });
    });
    return (e, t) => {
      const n = o.Z;
      (0, s.wg)();
      return (0, s.j4)(s.lR, {
        to: "body"
      }, [(0, s.Wm)(n, {
        show: (0, c.SU)(l),
        opacity: 70,
        "z-index": 21
      }, null, 8, ["show"]), (0, c.SU)(l) ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "absolute inset-0 z-30 flex items-center justify-center",
        onClick: (0, i.withModifiers)(u, ["self"])
      }, [(0, s._)("img", {
        src: r.imageUrl,
        class: "max-h-full w-auto object-contain",
        alt: ""
      }, null, 8, Li), (0, s._)("div", Pi, [(0, s._)("button", {
        class: "h-[24px] w-[24px] text-[#ffffff]",
        onClick: (0, i.withModifiers)(u, ["stop"])
      }, qi, 8, Oi), (0, s._)("a", {
        target: "_blank",
        href: r.imageUrl,
        download: "",
        class: "download-btn h-[20px] w-[20px] cursor-pointer bg-cover bg-center"
      }, null, 8, Ui)])], 8, Ni)) : (0, s.kq)("", true)]);
    };
  }
});
const Hi = (0, Q.Z)(ji, [["__scopeId", "data-v-7246950f"]]);
const Vi = e => {
  (0, s.dD)("data-v-32822570");
  e = e();
  (0, s.Cn)();
  return e;
};
const Gi = {
  class: "absolute inset-0 z-10"
};
const Yi = {
  class: "flex h-full w-full flex-col items-center justify-center bg-color-black bg-opacity-60"
};
const Zi = {
  class: "shadow flex h-[364px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8]"
};
const Wi = {
  class: "flex h-[44px] items-center justify-center border-b border-color-black border-opacity-5 font-ali-65 text-[16px] leading-none text-[#1C1C1E]"
};
const Qi = {
  class: "break-all px-[24px] pt-[24px] text-[14px] leading-[20px] text-[#3A3A3C]"
};
const Ki = {
  class: "flex-1 px-[24px] pt-[16px]"
};
const Xi = {
  class: "h-[140px] w-full rounded-[8px] border border-color-black border-opacity-[0.08] bg-color-black bg-opacity-5"
};
const Ji = Vi(() => (0, s._)("i", {
  class: "iconfont icon-bendishangchuan text-[28px]"
}, null, -1));
const $i = {
  class: "mt-[4px] text-[14px] text-[#3A3A3C]"
};
const ea = {
  class: "flex w-full flex-col items-center whitespace-pre-line pt-[4px] text-[12px] text-[#8E8E94]"
};
const ta = {
  key: 1,
  class: "flex h-full flex-col items-center pt-[24px] font-ali-55"
};
const na = Vi(() => (0, s._)("i", {
  class: "iconfont icon-bendishangchuan text-[28px]"
}, null, -1));
const ra = {
  class: "mt-[4px] text-[#3A3A3C]"
};
const ia = {
  key: 2,
  class: "flex h-full flex-col items-center pt-[24px] font-ali-55"
};
const aa = Vi(() => (0, s._)("i", {
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[24px] leading-none"
}, null, -1));
const oa = {
  class: "mt-[4px] whitespace-pre-line text-[#3A3A3C]"
};
const sa = {
  class: "mt-[8px] text-[#8E8E94]"
};
const la = {
  class: "flex flex-row justify-end p-[24px]"
};
const ca = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px] leading-none"
};
const ua = {
  key: 1
};
const pa = (0, s.aZ)({
  __name: "chatgpt-doc-upload",
  setup(e) {
    const t = (0, te.useChatGptStore)();
    const {
      uploadMetaData: n,
      selectDocFile: r,
      uploadDocLoading: i
    } = (0, X.useModalData)();
    function a() {
      if (!i.value) {
        t.setUploadModal(false);
      }
    }
    function o() {
      t.setSelectDocFile(null);
    }
    async function u() {
      const e = await (0, h.Y)(n.value.supportSuffix, "readAsDataURL", false);
      if (e.size > n.value.limitSize) {
        re.R.fail({
          message: i18n("wen29ef36")
        });
      } else {
        t.setSelectDocFile(e);
      }
    }
    function p() {
      if (!i.value) {
        if (r.value) {
          t.startUploadDocFile();
        } else {
          re.R.fail({
            message: i18n("qing3957d1")
          });
        }
      }
    }
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", Gi, [(0, s._)("div", Yi, [(0, s._)("div", Zi, [(0, s._)("div", Wi, (0, l.toDisplayString)(e.i18n("shang4c485b")), 1), (0, s._)("div", Qi, (0, l.toDisplayString)(e.i18n("shi31f6cd")), 1), (0, s._)("div", Ki, [(0, s._)("div", Xi, [(0, c.SU)(r) ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "flex h-full cursor-pointer flex-col items-center pt-[24px] font-ali-55",
        onClick: u
      }, [Ji, (0, s._)("p", $i, (0, l.toDisplayString)(e.i18n("dian3f2c24")), 1), (0, s._)("div", ea, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(n).supportSuffixText, (e, t) => {
        (0, s.wg)();
        return (0, s.iD)("p", {
          key: t
        }, (0, l.toDisplayString)(e), 1);
      }), 128))])])), (0, c.SU)(r) && !(0, c.SU)(i) ? ((0, s.wg)(), (0, s.iD)("div", ta, [na, (0, s._)("p", ra, (0, l.toDisplayString)((0, c.SU)(r)?.name), 1), (0, s._)("span", {
        class: "mt-[14px] cursor-pointer text-[#8E8E94]",
        onClick: o
      }, (0, l.toDisplayString)(e.i18n("qing14403f")), 1)])) : (0, s.kq)("", true), (0, c.SU)(r) && (0, c.SU)(i) ? ((0, s.wg)(), (0, s.iD)("div", ia, [aa, (0, s._)("p", oa, (0, l.toDisplayString)((0, c.SU)(n).loadingText), 1), (0, s._)("p", sa, (0, l.toDisplayString)((0, c.SU)(r)?.name), 1)])) : (0, s.kq)("", true)])]), (0, s._)("div", la, [(0, s._)("button", {
        class: (0, l.normalizeClass)(["h-[36px] w-[120px] rounded-[8px] font-ali-65 text-[16px] transition-colors", [(0, c.SU)(i) ? "pointer-events-none cursor-not-allowed bg-color-white text-[#979797]" : "cursor-pointer bg-color-white text-[#3A3A3C] hover:bg-[#d9d8d8]"]]),
        onClick: a
      }, (0, l.toDisplayString)(e.i18n("qu3625fb")), 3), (0, s._)("button", {
        class: (0, l.normalizeClass)(["ml-[12px] h-[36px] w-[120px] rounded-[8px] bg-[#4A589E] font-ali-65 text-[16px] text-color-white transition-colors", [(0, c.SU)(i) ? "pointer-events-none" : "cursor-pointer hover:bg-[#3a457e]"]]),
        onClick: p
      }, [(0, c.SU)(i) ? ((0, s.wg)(), (0, s.iD)("i", ca)) : ((0, s.wg)(), (0, s.iD)("span", ua, (0, l.toDisplayString)(e.i18n("shang4d5a73")), 1))], 2)])])])]);
    };
  }
});
const da = (0, Q.Z)(pa, [["__scopeId", "data-v-32822570"]]);
const ha = {
  class: "flex items-center"
};
const ga = ["src"];
const fa = {
  class: "ml-[12px] flex flex-col justify-between py-[4px]"
};
const ma = {
  class: "font-ali-65 text-[14px] leading-[20px] text-[#1C1C1E]"
};
const ba = {
  class: "mt-[8px] whitespace-pre-line font-ali-55 text-[12px] leading-[16px] text-[#3A3A3C]"
};
const xa = {
  key: 0,
  class: "mt-[8px] font-ali-55 text-[12px] leading-[16px] text-[#3A3A3C]"
};
const ya = (0, s.aZ)({
  __name: "chat-ai-contact",
  setup(e) {
    const {
      vipGroup: t
    } = (0, X.useModalData)();
    return (e, n) => {
      var r;
      var a;
      var d;
      if ((0, c.SU)(t)) {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: 0,
          class: (0, l.normalizeClass)([[(r = (0, c.SU)(t)) !== null && r !== undefined && r.qrcodeImg ? "min-h-[156px]" : "min-h-[116px]"], "box-shadow absolute z-10 w-[280px] rounded-[8px] bg-[#F8F8F8] p-[8px]"])
        }, [(0, s._)("div", ha, [(a = (0, c.SU)(t)) !== null && a !== undefined && a.qrcodeImg ? ((0, s.wg)(), (0, s.iD)("img", {
          key: 0,
          class: "h-[100px] w-[100px]",
          draggable: "false",
          src: (0, c.SU)(t)?.qrcodeImg
        }, null, 8, ga)) : (0, s.kq)("", true), (0, s._)("div", fa, [(0, s._)("p", ma, (0, l.toDisplayString)((0, c.SU)(t)?.title), 1), (0, s._)("p", ba, (0, l.toDisplayString)((0, c.SU)(t)?.desc), 1), (d = (0, c.SU)(t)) !== null && d !== undefined && d.tips ? ((0, s.wg)(), (0, s.iD)("p", xa, (0, l.toDisplayString)((0, c.SU)(t)?.tips), 1)) : (0, s.kq)("", true)])]), (0, s._)("div", {
          class: "flex cursor-text select-text flex-col border-t border-[rgba(0,0,0,0.12)] pl-[12px] pt-[8px] text-[#1C1C1E]",
          onContextmenu: n[0] ||= (0, i.withModifiers)(() => {}, ["stop"])
        }, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(t).contact, (e, t) => {
          (0, s.wg)();
          return (0, s.iD)("p", {
            key: t,
            class: "mt-[4px]"
          }, (0, l.toDisplayString)(e), 1);
        }), 128))], 32)], 2);
      } else {
        return (0, s.kq)("", true);
      }
    };
  }
});
const va = (0, Q.Z)(ya, [["__scopeId", "data-v-53d99eca"]]);
const wa = e => {
  (0, s.dD)("data-v-7d4368f8");
  e = e();
  (0, s.Cn)();
  return e;
};
const Aa = {
  class: "relative z-0 flex h-full w-full flex-row-reverse bg-[#303B75] chat-p:bg-[#151437] chat-w:bg-[#F8F8F8]"
};
const ka = {
  key: 0,
  class: "relative z-0 flex flex-1 flex-shrink-0 flex-col overflow-hidden bg-[#293266] chat-p:bg-[#0A0920] chat-w:bg-[#FFFFFF]"
};
const Sa = ["innerHTML"];
const Ca = {
  class: "absolute bottom-[12px] left-1/2 flex -translate-x-1/2 gap-[16px]"
};
const Ea = {
  key: 1,
  class: "relative z-0 flex flex-1 flex-shrink-0 flex-col overflow-hidden bg-[#293266] chat-p:bg-[#0A0920] chat-w:bg-[#FFFFFF]"
};
const Ia = {
  key: 0,
  class: "absolute bottom-[20px] left-1/2 z-10 flex h-[44px] min-w-0 -translate-x-1/2 items-center rounded-[8px] bg-[#F8F8F8] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.15)]"
};
const Ta = wa(() => (0, s._)("i", {
  class: "iconfont icon-warning_color_icon mx-[15px] rounded-full bg-color-orange text-[18px] text-[#fff]"
}, null, -1));
const Da = {
  class: "mr-[27px] whitespace-nowrap text-[14px] font-normal leading-normal text-[#3A3A3C]"
};
const _a = {
  key: 1,
  class: "relative flex items-center justify-end mb:!h-[65px]"
};
const Ma = [wa(() => (0, s._)("i", {
  class: "icon iconfont icon-toggle_icon text-[12px]"
}, null, -1))];
const Fa = {
  class: "relative flex h-[52px] items-center justify-between border-b border-color-white border-opacity-[0.12] chat-w:border-[rgba(0,0,0,0.08)]"
};
const za = {
  key: 0,
  class: "left flex h-full items-center pl-[20px] font-ali-55 text-color-white"
};
const Ra = [wa(() => (0, s._)("i", {
  class: "icon iconfont icon-toggle_icon text-[12px]"
}, null, -1))];
const Ba = {
  class: "opacity-40 chat-w:text-[#8E8E94] chat-w:opacity-100"
};
const Na = wa(() => (0, s._)("span", null, null, -1));
const La = {
  class: "right flex h-full items-center pr-[12px]"
};
const Pa = {
  class: "box group relative ml-[6px] flex h-[36px] items-center justify-center px-[4px] text-[#7883BC] transition-colors hover:text-[#B6C2FF] chat-p:text-[#8C5EF1] chat-p:hover:text-[#A97EFF] chat-w:text-[#8E8E94] chat-w:hover:text-[#3A3A3C] mb:hidden"
};
const Oa = {
  class: "flex h-[28px] items-center rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#3A4684] pl-[12px] pr-[4px] leading-none chat-p:border-[rgba(223,197,255,0.1)] chat-p:bg-[#2B2755] chat-w:border-[rgba(0,0,0,0.05)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:group-hover:bg-[#FFFFFF]"
};
const qa = {
  class: "font-ali-55 text-[#7883BC] chat-p:text-color-white chat-p:text-opacity-60 chat-w:text-[#3A3A3C]"
};
const Ua = wa(() => (0, s._)("i", {
  class: "iconfont icon-ai_feedback ml-[10px] text-[18px]"
}, null, -1));
const ja = [wa(() => (0, s._)("i", {
  class: "iconfont icon-ai_set text-[18px]"
}, null, -1))];
const Ha = {
  key: 3,
  class: "flex justify-center px-[20px] pb-[8px]"
};
const Va = {
  class: "flex w-full max-w-[1024px] flex-shrink-0 items-center justify-end"
};
const Ga = {
  class: "flex items-center text-[12px] text-[#7883BC] chat-p:text-[rgba(255,255,255,0.6)] chat-w:text-[#8E8E93]"
};
const Ya = wa(() => (0, s._)("i", {
  class: "iconfont icon-more_icon"
}, null, -1));
const Za = {
  class: "absolute bottom-[3px] mt-[12px] text-[10px] leading-[14px] text-[#7883BC] chat-p:text-[rgba(255,255,255,0.6)] chat-w:text-[rgba(142,142,148,0.6)]"
};
const Wa = {
  key: 0,
  class: "pointer-events-none h-[90px]"
};
const Qa = {
  class: "relative flex h-[89px] overflow-hidden"
};
const Ka = {
  class: "relative z-[1] flex flex-1 flex-col items-end pt-[20px] pr-[24px]"
};
const Xa = {
  class: "mt-[6px] font-ali-55 text-[14px] text-color-white chat-w:text-[#3A3A3C]"
};
const Ja = {
  class: "relative h-0"
};
const $a = {
  key: 0,
  class: "absolute bottom-0 mb-[24px] flex items-center justify-center pl-[24px] mb:w-full mb:pl-0"
};
const eo = {
  key: 1,
  class: "flex-shrink-0"
};
const to = {
  class: "flex h-[60px] items-center justify-between px-[16px]"
};
const no = {
  key: 1
};
const ro = wa(() => (0, s._)("i", {
  class: "iconfont icon-new text-[20px] opacity-60 chat-p:text-[#6c4ab6] chat-p:opacity-100 chat-p:group-hover:text-[#8c5ef1] chat-w:text-[#3A3A3C] chat-w:group-hover:text-[#1c1c1c]"
}, null, -1));
const io = {
  class: "ml-[8px]"
};
const ao = (0, s.aZ)({
  __name: "chatgpt-ai-content",
  setup(e) {
    const {
      setpanelType: t,
      setPanelShowType: n,
      onClickNewChat: r,
      conversionDataList: o,
      activeConversionId: u,
      activeConversionItem: p,
      sendMessage: d,
      reGenerate: h,
      scrollListRef: g,
      onPauseChat: f,
      sponsorShow: m,
      vipTipsShow: b,
      vipTipsContent: x,
      closeSponsor: y,
      scrollChatRef: v,
      getVipGroup: w,
      activeSelectModel: A,
      chatVipDetail: k,
      uploadDocModalShow: S
    } = (0, X.useModalData)();
    const C = (0, ke.n)();
    const E = (0, te.useChatGptStore)();
    const I = (0, c.iH)(false);
    const _ = (0, c.iH)("");
    const M = (0, s.Fl)(() => {
      let e = false;
      o.value.forEach(t => {
        if (t.messages.find(e => e.loading || e.pending)) {
          e = true;
        }
      });
      return e;
    });
    const F = (0, c.iH)(false);
    const z = (0, c.iH)();
    const R = (0, c.iH)(true);
    const B = (0, q.useUserStore)();
    const {
      isLogin: N,
      chatStatus: L
    } = (0, T.Jk)(B);
    const P = (0, s.Fl)(() => B.chatStatus.vip);
    const O = (0, s.Fl)(() => D.EF ? B.chatStatus.vip ? E.theme === "chat-white" ? "bg-[url(@widget/widget-chatgpt/chat-iframe/img/infinityai-pro-green.png)]" : "bg-[url(@widget/widget-chatgpt/chat-iframe/img/infinityai-pro.png)]" : "bg-[url(@widget/widget-chatgpt/chat-iframe/img/infinityai.png)]" : B.chatStatus.vip ? E.theme === "chat-white" ? "bg-[url(@widget/widget-chatgpt/img/ai-title-pro-green.png)]" : "bg-[url(@widget/widget-chatgpt/img/ai-title-pro-fff.png)]" : "bg-[url(@widget/widget-chatgpt/img/ai-title-fff.png)]");
    (0, s.bv)(() => {
      if (P.value) {
        E.getUserVipDetail();
      }
    });
    const U = (0, s.Fl)(() => {
      const e = E.coUserTypeData;
      if (!e.id) {
        return;
      }
      const t = E.theme;
      let n = "";
      if (t === "chat-default") {
        n = e.chatDefaultLogo;
      } else if (t === "chat-purple") {
        n = e.chatPLogo;
      } else if (t === "chat-white") {
        n = e.chatWLogo;
      }
      return {
        backgroundImage: `url(${n})`
      };
    });
    const j = (0, s.Fl)(() => {
      const e = {
        show: false,
        text: "",
        guessProduct: ""
      };
      if (!P.value) {
        return e;
      }
      if (E.modelLoading) {
        return e;
      }
      const t = A.value.limitKey;
      if (!t) {
        return e;
      }
      const n = k.value.rest[t];
      e.show = n === 0;
      const r = D.EF ? {
        "3d5": i18n("asymbolbe7c4"),
        4: i18n("asymbolf5033"),
        image: i18n("asymbolac1ff"),
        basicImage: i18n("asymbol675bc")
      } : {
        "3d5": "WeTab AI-3.5高速响应对话已使用完",
        4: "WeTab AI-4.0对话额度已使用完",
        image: "WeTab AI SD绘画额度已使用完",
        basicImage: "WeTab AI MJ绘画额度已使用完"
      };
      e.text = r[t];
      e.guessProduct = te.PlanProduct.PREMIUM;
      return e;
    });
    function H(e) {
      R.value = true;
      d(e);
      W();
    }
    function V() {
      if (!D.EF || D.s8 || window.iframeAiInitData.phoneNumber) {
        R.value = true;
        h();
        W();
      } else {
        (0, qe.bc)({
          type: qe.o1.needBindPhone
        });
      }
    }
    (0, s.YP)(() => B.chatStatus, e => {
      if (e.vip) {
        E.getUserVipDetail();
      }
      w();
    });
    const G = () => {
      if (!D.EF || D.s8 || window.iframeAiInitData.phoneNumber) {
        R.value = true;
        d("继续");
        W();
      } else {
        (0, qe.bc)({
          type: qe.o1.needBindPhone
        });
      }
    };
    function Y() {
      if (M.value) {
        re.R.warn({
          message: i18n("qing31dd05")
        });
      } else {
        r();
        K.value = true;
      }
    }
    async function Z(e) {
      if (e) {
        await navigator.clipboard.writeText(e);
        re.R.success({
          message: i18n("yi34fb42")
        });
      }
    }
    function W() {
      var e;
      F.value = false;
      if ((e = window.getSelection()) !== null && e !== undefined) {
        e.removeAllRanges();
      }
    }
    const Q = (0, s.Fl)(() => {
      const e = p.value.messages[p.value.messages.length - 1];
      return E.isRequestPage && e.pending && e.role === "assistant" && !e.searchLoading;
    });
    (0, s.YP)(() => p.value, () => {
      (0, s.Y3)(() => {
        if (R.value) {
          (0, s.Y3)(() => {
            var n;
            const r = (v.value?.scrollHeight || 0) - (v.value?.clientHeight || 0);
            if ((n = v.value) !== null && n !== undefined) {
              n.scrollTo({
                top: r,
                behavior: "auto"
              });
            }
            R.value = true;
          });
        }
      });
    }, {
      deep: true
    });
    const K = (0, c.iH)(false);
    const J = () => {
      if (!N.value) {
        const e = document.getElementById("chat-shake-btn");
        if (e) {
          e.classList.add("shake-btn");
          setTimeout(() => {
            e.classList.remove("shake-btn");
          }, 750);
        }
      }
    };
    function $(e) {
      if (e.deltaY < 0) {
        R.value = false;
      }
    }
    function ee() {
      const r = v.value?.scrollHeight || 0;
      const i = v.value?.clientHeight || 0;
      if ((v.value?.scrollTop || 0) + i === r) {
        R.value = true;
      }
    }
    const ie = (0, c.iH)();
    const ae = () => {
      ie.value.selectAssistant();
    };
    const oe = e => {
      E.setHighlihgtPlanProduct(e);
      if (ne.q$ && ne.ID === "mobile") {
        re.R.warn({
          message: i18n("qing35ac97")
        });
      } else {
        n(D.s8 ? "chatai-subscribe" : "chat-expense");
      }
    };
    const se = (0, s.Fl)(() => Math.floor(B.chatVipRest / 86400000));
    function le(e) {
      if (e) {
        _.value = e;
        I.value = true;
      }
    }
    function ce(e, t) {
      E.createMjSubTask(t, e);
    }
    return (e, t) => {
      var d;
      var h;
      var w;
      var A;
      var k;
      var T;
      var M;
      var F;
      const R = a.Z;
      (0, s.wg)();
      return (0, s.iD)("div", Aa, [(0, c.SU)(C).chatBanned && (0, c.SU)(E).activeConversionItem.messages?.length === 0 ? ((0, s.wg)(), (0, s.iD)("div", ka, [(0, s._)("div", {
        innerHTML: (0, c.SU)(C).chatInfo.content
      }, null, 8, Sa), (0, s._)("div", Ca, [(0, s._)("button", {
        class: "h-[32px] rounded-[8px] bg-[#fff] px-[40px] text-[14px] font-[400] text-[#3A3A3C] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#3A3A3C]",
        onClick: t[0] ||= e => (0, c.SU)(C).setContactShow(true)
      }, (0, l.toDisplayString)(e.i18n("lian2b6606")), 1)])])) : ((0, s.wg)(), (0, s.iD)("div", Ea, [(0, c.SU)(C).chatBanned ? ((0, s.wg)(), (0, s.iD)("div", Ia, [Ta, (0, s._)("span", Da, (0, l.toDisplayString)((0, c.SU)(C).chatInfo.chatTip), 1), (0, s._)("button", {
        class: "mr-[8px] h-[28px] whitespace-nowrap rounded-[4px] bg-[#007AFF] px-[12px] text-[14px] text-[#FFFFFF]",
        onClick: Y
      }, (0, l.toDisplayString)(e.i18n("cha25b48d")), 1)])) : (0, s.kq)("", true), (d = (0, c.SU)(L)) !== null && d !== undefined && d.vip ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", _a, [(0, s._)("button", {
        class: "absolute left-0 z-[1] ml-[54px] mt-[-10px] mr-[12px] hidden h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#3A4684] text-[#7883BC] transition-colors hover:text-[#B6C2FF] chat-p:border-[rgba(223,197,255,0.1)] chat-p:bg-[#2B2755] chat-p:text-[#8C5EF1] chat-p:hover:text-[#A97EFF] chat-w:border-[rgba(0,0,0,0.05)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#8E8E94] chat-w:hover:bg-[#FFFFFF] chat-w:hover:text-[#3A3A3C] mb:flex",
        onClick: t[1] ||= (0, i.withModifiers)(e => K.value = !K.value, ["stop"])
      }, Ma)])), (0, s._)("div", Fa, [(h = (0, c.SU)(L)) !== null && h !== undefined && h.vip && !(0, c.SU)(C).chatBanned ? ((0, s.wg)(), (0, s.iD)("article", za, [(0, s._)("button", {
        class: "z-[1] ml-[36px] mr-[12px] hidden h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#3A4684] text-[#7883BC] transition-colors hover:text-[#B6C2FF] chat-p:border-[rgba(223,197,255,0.1)] chat-p:bg-[#2B2755] chat-p:text-[#8C5EF1] chat-p:hover:text-[#A97EFF] chat-w:border-[rgba(0,0,0,0.05)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#8E8E94] chat-w:hover:bg-[#FFFFFF] chat-w:hover:text-[#3A3A3C] mb:flex",
        onClick: t[2] ||= (0, i.withModifiers)(e => K.value = !K.value, ["stop"])
      }, Ra), (0, c.SU)(se) <= 7 && !(0, c.SU)(D.s8) ? ((0, s.wg)(), (0, s.iD)(s.HY, {
        key: 0
      }, [(0, s._)("span", Ba, " 剩余" + (0, l.toDisplayString)((0, c.SU)(se)) + "天 ", 1), (0, s._)("button", {
        class: "ml-[8px] flex h-[28px] w-[80px] items-center justify-center rounded-[6px] border border-[rgba(255,255,255,0.05)] bg-[#3A4684] leading-none text-[#7883BC] chat-p:border-[rgba(223,197,255,0.1)] chat-p:bg-[#2B2755] chat-p:text-color-white chat-p:text-opacity-60 chat-w:border-[rgba(0,0,0,0.05)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#3A3A3C]",
        onClick: t[3] ||= (0, i.withModifiers)(e => oe(), ["stop"])
      }, " 立即续费 ")], 64)) : (0, s.kq)("", true)])) : (0, s.kq)("", true), Na, (0, s._)("article", La, [(0, s._)("div", Pa, [(0, s._)("div", Oa, [(0, s._)("span", qa, (0, l.toDisplayString)(e.i18n("tou2352a2")), 1), Ua]), (0, s.wy)((0, s.Wm)(va, {
        class: "contact top-[36px] right-0 hidden cursor-default group-hover:block"
      }, null, 512), [[i.vShow, true]])]), (w = (0, c.SU)(L)) !== null && w !== undefined && w.vip ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "ml-[6px] flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.05)] bg-[#3A4684] text-[#7883BC] transition-colors hover:text-[#B6C2FF] chat-p:border-[rgba(223,197,255,0.1)] chat-p:bg-[#2B2755] chat-p:text-[#8C5EF1] chat-p:hover:text-[#A97EFF] chat-w:border-[rgba(0,0,0,0.05)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#8E8E94] chat-w:hover:bg-[#FFFFFF] chat-w:hover:text-[#3A3A3C]",
        onClick: t[4] ||= e => (0, c.SU)(n)("chatai-setting")
      }, ja)) : (0, s.kq)("", true)])]), (0, s._)("div", {
        ref_key: "scrollChatRef",
        ref: v,
        class: (0, l.normalizeClass)(["chat-api-content gpt-scroll hi-scroll flex-1 flex-shrink-0 select-text", [(0, c.SU)(E).activeSelectModel.network ? "mb-[32px]" : ""]]),
        onClick: J,
        onMousewheel: $,
        onScroll: ee
      }, [(0, s._)("div", {
        ref_key: "contentRef",
        ref: z,
        class: "relative"
      }, [(0, s.Wm)(mr, {
        "is-login": (0, c.SU)(N),
        conversion: (0, c.SU)(E).activeConversionItem,
        onCopy: Z,
        onContinue: G,
        onRetry: V,
        onNewChat: (0, c.SU)(r),
        onPreview: le,
        onSub: ce,
        onUpgrade: t[5] ||= e => oe((0, c.SU)(te.PlanProduct).PREMIUM)
      }, null, 8, ["is-login", "conversion", "onNewChat"])], 512)], 34), (A = (0, c.SU)(E).chatAssistantList) !== null && A !== undefined && A.length ? (0, s.wy)(((0, s.wg)(), (0, s.j4)(Or, {
        key: 2,
        class: "z-10 mb-[4px] w-full",
        onOnSelect: ae
      }, null, 512)), [[i.vShow, (0, c.SU)(E).assistantListShow]]) : (0, s.kq)("", true), (0, c.SU)(j).show && !(0, c.SU)(C).chatBanned ? ((0, s.wg)(), (0, s.iD)("div", Ha, [(0, s._)("div", Va, [(0, s._)("div", Ga, [(0, s._)("span", null, (0, l.toDisplayString)((0, c.SU)(j).text), 1), (0, c.SU)(D.s8) ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "ml-[12px] flex cursor-pointer items-center text-color-white chat-p:text-[rgba(255,255,255,0.8)] chat-w:text-[#3A3A3C]",
        onClick: t[6] ||= e => oe((0, c.SU)(j).guessProduct)
      }, [(0, s._)("span", null, (0, l.toDisplayString)(e.i18n("sheng1f94d2")), 1), Ya]))])])])) : (0, s.kq)("", true), (0, c.SU)(C).chatBanned ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", {
        key: 4,
        class: (0, l.normalizeClass)(["flex justify-center px-[20px] pb-[20px]", (0, c.SU)(N) ? "" : "pointer-events-none opacity-50"])
      }, [(0, s.Wm)(zi, {
        ref_key: "inputRef",
        ref: ie,
        "abort-show": (0, c.SU)(Q),
        disabled: !(0, c.SU)(N),
        onSend: H,
        onPause: (0, c.SU)(f)
      }, null, 8, ["abort-show", "disabled", "onPause"]), (0, s._)("p", Za, (0, l.toDisplayString)((0, c.SU)(te.AI_TIP_TEXT)), 1)], 2))])), (0, s._)("div", {
        class: (0, l.normalizeClass)([[K.value ? "chat-left-hidden" : "chat-left"], "flex w-[296px] flex-shrink-0 flex-col border-r border-solid border-color-white border-opacity-[0.12] chat-w:border-[rgba(0,0,0,0.08)]"])
      }, [(0, c.SU)(D.PA) ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", Wa, [(0, s._)("div", Qa, [(0, s._)("div", Ka, [(0, s._)("div", {
        class: (0, l.normalizeClass)([(0, c.SU)(O), "h-[23px] w-full bg-contain bg-right bg-no-repeat"]),
        draggable: "false",
        style: (0, l.normalizeStyle)((0, c.SU)(U)),
        alt: ""
      }, null, 6), (0, s._)("p", Xa, (0, l.toDisplayString)(e.i18n("cai3a3175")), 1)])]), (0, s.Wm)(me)])), (0, s._)("div", {
        ref_key: "scrollListRef",
        ref: g,
        class: "gpt-scroll hi-scroll w-full flex-1 flex-shrink-0"
      }, [(0, c.SU)(N) ? ((0, s.wg)(), (0, s.j4)(Me, {
        key: 1,
        "hide-side-bar": K.value,
        "onUpdate:hide-side-bar": t[7] ||= e => K.value = e,
        data: (0, c.SU)(o),
        "active-id": (0, c.SU)(u)
      }, null, 8, ["hide-side-bar", "data", "active-id"])) : ((0, s.wg)(), (0, s.j4)(wr, {
        key: 0
      }))], 512), (0, s._)("div", Ja, [(k = (0, c.SU)(L)) === null || k === undefined || !k.pay || (T = (0, c.SU)(L)) !== null && T !== undefined && T.vip || (0, c.SU)(C).chatBanned ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", $a, [(0, s._)("div", {
        class: "bg-gradient-to-r flex h-[36px] w-[246px] cursor-pointer items-center justify-center rounded-[12px] from-[#5C55E4] to-[#A93DF1] leading-none tracking-wide text-color-white",
        onClick: t[8] ||= e => oe()
      }, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("sheng19d9f7") : "升级WeTab AI Pro无限畅聊"), 1)]))]), (0, c.SU)(C).chatBanned ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", eo, [(0, s.Wm)(me), (0, s._)("div", to, [((0, s.wg)(), (0, s.iD)("div", no)), (0, s.Wm)(Bi, {
        class: (0, l.normalizeClass)([["w-full"], "group"]),
        disabled: !(0, c.SU)(N),
        onClick: Y
      }, {
        default: (0, s.w5)(() => [ro, (0, s._)("span", io, (0, l.toDisplayString)(e.i18n("xin166a49")), 1)]),
        _: 1
      }, 8, ["class", "disabled"])])]))], 2), (0, s.Wm)(Oe, {
        show: (0, c.SU)(m),
        onClose: (0, c.SU)(y)
      }, null, 8, ["show", "onClose"]), (M = (0, c.SU)(L)) === null || M === undefined || !M.pay || (F = (0, c.SU)(L)) !== null && F !== undefined && F.vip ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.j4)(Dr, {
        key: 2,
        show: (0, c.SU)(b),
        "onUpdate:show": t[10] ||= e => (0, c.dq)(b) ? b.value = e : null,
        content1: (0, c.SU)(x),
        onOpen: t[11] ||= e => oe()
      }, null, 8, ["show", "content1"])), (0, s.Wm)(R, {
        show: (0, c.SU)(S),
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(da)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(Hi, {
        show: I.value,
        "onUpdate:show": t[12] ||= e => I.value = e,
        "image-url": _.value
      }, null, 8, ["show", "image-url"])]);
    };
  }
});
const oo = (0, Q.Z)(ao, [["__scopeId", "data-v-7d4368f8"]]);
import * as so from /*webcrack:missing*/"./3218.js";
import * as lo from /*webcrack:missing*/"./5427.js";
const co = (0, s._)("i", {
  class: "iconfont icon-checked_icon rounded-full text-[14px] text-color-white"
}, null, -1);
const uo = (0, s.aZ)({
  __name: "hi-checkbox",
  props: {
    value: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e;
    return (e, n) => {
      const r = a.Z;
      (0, s.wg)();
      return (0, s.iD)("button", {
        class: (0, l.normalizeClass)(["hi-checkbox block h-[16px] w-[16px] overflow-hidden rounded-[4px]", t.value ? "border-[1px] border-color-blue bg-color-blue" : "border-[3px] border-color-t4"])
      }, [(0, s.Wm)(r, {
        show: t.value,
        ani: "scale"
      }, {
        default: (0, s.w5)(() => [co]),
        _: 1
      }, 8, ["show"])], 2);
    };
  }
});
import * as po from /*webcrack:missing*/"./581.js";
import * as ho from /*webcrack:missing*/"./8294.js";
const go = e => {
  (0, s.dD)("data-v-18eb2b41");
  e = e();
  (0, s.Cn)();
  return e;
};
const fo = {
  class: "relative flex h-full w-full flex-col bg-[#303B75] chat-p:bg-[#11102e] chat-w:bg-[#F8F8F8]"
};
const mo = {
  class: "segment hidden h-[55px] w-full items-center justify-end bg-[#303B75] px-[20px] chat-p:bg-[#0A0920] chat-w:bg-[#FFFFFF]"
};
const bo = [go(() => (0, s._)("i", {
  class: "icon iconfont icon-toggle_s text-[16px] text-color-white"
}, null, -1))];
const xo = {
  class: "chat-content flex h-full w-full"
};
const yo = {
  class: "h-[90px]"
};
const vo = (0, s.uE)("<div class=\"relative z-0 flex h-[88px] overflow-hidden\" data-v-18eb2b41><div class=\"relative z-[1] flex flex-1 flex-col items-end pt-[16px] pr-[24px]\" data-v-18eb2b41><span class=\"font-ali-65 text-[20px] text-color-white chat-w:text-[#11A57F]\" data-v-18eb2b41>ChatGPT源</span><p class=\"font-ali-55 text-[12px] leading-[17px] text-color-white text-opacity-60 chat-w:text-[#3A3A3C] chat-w:text-opacity-100\" data-v-18eb2b41> 本页可自定义添加源 </p><p class=\"font-ali-55 text-[12px] leading-[17px] text-color-white text-opacity-60 chat-w:text-[#3A3A3C] chat-w:text-opacity-100\" data-v-18eb2b41> 但本站不承担法律责任，相关问题请咨询对应平台 </p></div></div>", 1);
const wo = {
  class: "hi-scroll flex-1 flex-shrink-0 pl-[6px]"
};
const Ao = {
  class: "p-[24px]"
};
const ko = ["onClick"];
const So = ["onClick"];
const Co = [go(() => (0, s._)("i", {
  class: "iconfont icon-line"
}, null, -1))];
const Eo = ["onClick"];
const Io = ["onClick"];
const To = [go(() => (0, s._)("i", {
  class: "iconfont icon-line"
}, null, -1))];
const Do = {
  class: "flex h-[60px] items-center justify-between px-[16px]"
};
const _o = go(() => (0, s._)("div", {
  class: "h-[20px] w-[20px] bg-[url(@widget/widget-chatgpt/img/ai-logo-green.png)] bg-contain bg-center bg-no-repeat chat-p:bg-[url(@widget/widget-chatgpt/img/ai-logo-purple.png)]",
  draggable: "false",
  alt: ""
}, null, -1));
const Mo = go(() => (0, s._)("span", {
  class: "ml-[8px]"
}, "WeTab AI", -1));
const Fo = go(() => (0, s._)("i", {
  class: "iconfont icon-new text-[20px] opacity-60 chat-p:text-[#6c4ab6] chat-p:opacity-100 chat-p:group-hover:text-[#8c5ef1] chat-w:text-[#3A3A3C] chat-w:group-hover:text-[#1c1c1c]"
}, null, -1));
const zo = {
  class: "ml-[8px]"
};
const Ro = {
  class: "flex flex-1 flex-col bg-color-white"
};
const Bo = ["src"];
const No = {
  class: "absolute inset-0 flex items-center justify-center bg-[#293266] bg-opacity-80"
};
const Lo = {
  class: "flex h-[316px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8]"
};
const Po = {
  class: "flex w-full justify-center border-b border-color-black border-opacity-5 py-[11px] font-ali-65 text-[16px] text-[#1C1C1E]"
};
const Oo = {
  class: "flex-1 px-[24px] pt-[24px]"
};
const qo = {
  class: "flex items-center"
};
const Uo = {
  class: "ml-[12px] font-ali-65 text-[14px] text-[#3A3A3C]"
};
const jo = {
  class: "flex flex-1 justify-end pr-[12px]"
};
const Ho = (0, s.aZ)({
  __name: "chatgpt-iframe-content",
  setup(e) {
    const t = (0, q.useUserStore)();
    const {
      list: n,
      selectLink: r,
      setSelectLink: o,
      setpanelType: u,
      addLink: p,
      customList: d,
      removeLink: h,
      removeOriginLink: g
    } = (0, X.useModalData)();
    const f = (0, te.useChatGptStore)();
    const m = (0, c.iH)(false);
    const b = (0, c.iH)(true);
    const x = (0, c.qj)({
      name: {
        value: "",
        props: {
          placeholder: i18n("ming2d7ec2"),
          icon: "icon-title_icon"
        }
      },
      url: {
        value: "",
        props: {
          icon: "icon-link",
          placeholder: i18n("lian4bfe68")
        }
      }
    });
    const y = (0, s.Fl)(() => n.value.filter(e => !e.id || !f.removedList.includes(e.id)));
    const v = {
      name: [{
        rule: /^.{2,40}$/,
        message: i18n("qing3e557e")
      }],
      url: [{
        rule: /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
        message: i18n("qing3d19b4")
      }]
    };
    function w() {
      m.value = true;
    }
    function A() {
      b.value = !b.value;
    }
    (0, s.bv)(() => {
      var e;
      var n;
      if ((e = t.chatStatus) !== null && e !== undefined && !!e.pay && ((n = t.chatStatus) === null || n === undefined || !n.vip)) {
        f.setPanelType("chatai");
      }
      f.reqGptLinks();
    });
    const k = {
      text: i18n("que438cf1"),
      size: "large",
      async handler() {
        const e = {
          name: x.name.value,
          url: x.url.value,
          iframe: b.value
        };
        p(e);
        re.R.success({
          message: i18n("tian13fdae")
        });
        setTimeout(() => {
          m.value = false;
        }, 300);
      }
    };
    const S = (0, c.iH)(false);
    const C = e => {
      if (e.url !== r.value?.url) {
        he.sendEvent("click-chatai-origin", e.url, e.name);
      }
      o(e);
      S.value = true;
    };
    return (e, t) => {
      const o = ho.Z;
      const p = po.Z;
      const f = uo;
      const E = lo.Z;
      const I = so.Z;
      const T = a.Z;
      (0, s.wg)();
      return (0, s.iD)("div", fo, [(0, s._)("div", mo, [(0, s._)("button", {
        class: "rounded-[6px] bg-color-white bg-opacity-10 p-[6px] chat-w:bg-color-black chat-w:bg-opacity-20",
        onClick: t[0] ||= e => S.value = !S.value
      }, bo)]), (0, s._)("div", xo, [(0, s._)("div", {
        class: (0, l.normalizeClass)(["absolute hidden h-full w-full bg-color-black bg-opacity-10", [{
          "left-shade": !S.value
        }]]),
        onClick: t[1] ||= e => S.value = true
      }, null, 2), (0, s._)("div", {
        class: (0, l.normalizeClass)([[S.value ? "chat-left-hidden" : "chat-left"], "flex w-[296px] flex-col border-r border-solid border-color-white border-opacity-[0.12]"])
      }, [(0, s._)("div", yo, [vo, (0, s.Wm)(me)]), (0, s._)("div", wo, [(0, s._)("div", Ao, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(y), e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.url,
          class: (0, l.normalizeClass)(["insert-shadow group relative flex h-[56px] w-full items-center rounded-[12px] px-[16px] font-ali-65 transition-colors not-last:mb-[12px]", [(0, c.SU)(r)?.url === e.url ? "active bg-[#4A589E] chat-p:bg-[#302268] chat-w:bg-[#11A57F]" : "cursor-pointer bg-[#3C4887] hover:bg-[#4A589E] chat-p:bg-[#221E47] chat-p:hover:bg-[#302268] chat-w:bg-color-white"]]),
          onClick: t => C(e)
        }, [(0, s._)("span", {
          class: (0, l.normalizeClass)([[(0, c.SU)(r)?.url === e.url ? " chat-w:text-color-white" : "chat-w:text-[#3A3A3C] "], "text-dot text-[16px] text-color-white"])
        }, (0, l.toDisplayString)(e.name), 3), (0, s._)("span", {
          class: "delete-shadow absolute left-[-6px] top-[-6px] hidden h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-60 group-hover:flex",
          onClick: (0, i.withModifiers)(t => (0, c.SU)(g)(e), ["stop"])
        }, Co, 8, So)], 10, ko);
      }), 128)), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(d), (e, t) => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.url,
          class: (0, l.normalizeClass)(["insert-shadow group relative flex h-[56px] w-full items-center rounded-[12px] px-[16px] transition-colors not-last:mb-[12px]", [(0, c.SU)(r)?.url === e.url ? "active bg-[#4A589E] font-ali-65 chat-p:bg-[#302268] chat-w:bg-[#11A57F] " : "cursor-pointer bg-[#3C4887] font-ali-55  hover:bg-[#4A589E] chat-p:bg-[#221E47] chat-p:hover:bg-[#302268] chat-w:bg-color-white  "]]),
          onClick: t => C(e)
        }, [(0, s._)("span", {
          class: (0, l.normalizeClass)([[(0, c.SU)(r)?.url === e.url ? " chat-w:text-color-white" : "chat-w:text-[#3A3A3C] "], "text-dot text-[6px] text-color-white"])
        }, (0, l.toDisplayString)(e.name), 3), (0, s._)("span", {
          class: "delete-shadow absolute left-[-6px] top-[-6px] hidden h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-[12px] bg-color-white bg-opacity-60 backdrop-blur-[20px] group-hover:flex",
          onClick: (0, i.withModifiers)(n => (0, c.SU)(h)(t, e), ["stop"])
        }, To, 8, Io)], 10, Eo);
      }), 128))])]), (0, s._)("div", null, [(0, s.Wm)(me), (0, s._)("div", Do, [(0, s.Wm)(Bi, {
        class: "group",
        onClick: t[2] ||= e => (0, c.SU)(u)("chatai")
      }, {
        default: (0, s.w5)(() => [_o, Mo]),
        _: 1
      }), (0, s.Wm)(Bi, {
        class: "group",
        onClick: w
      }, {
        default: (0, s.w5)(() => [Fo, (0, s._)("span", zo, (0, l.toDisplayString)(e.i18n("zi4ff072")), 1)]),
        _: 1
      })])])], 2), (0, s._)("div", Ro, [(0, s._)("iframe", {
        src: (0, c.SU)(r)?.url,
        class: "h-full w-full flex-1"
      }, null, 8, Bo)])]), (0, s.Wm)(T, {
        show: m.value,
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", No, [(0, s._)("div", Lo, [(0, s._)("div", Po, (0, l.toDisplayString)(e.i18n("zi4ff072")), 1), (0, s._)("div", Oo, [(0, s.Wm)(I, {
          model: x,
          rules: v,
          "submit-btn-attrs": k
        }, {
          "form-after": (0, s.w5)(() => [(0, s._)("div", qo, [(0, s.Wm)(f, {
            value: b.value,
            "onUpdate:value": t[5] ||= e => b.value = e,
            onClick: A
          }, null, 8, ["value"]), (0, s._)("span", Uo, (0, l.toDisplayString)(e.i18n("zhi16a7fe")), 1)])]),
          "form-btn": (0, s.w5)(() => [(0, s._)("div", jo, [(0, s.Wm)(E, {
            type: "main",
            class: "w-[120px]",
            onClick: t[6] ||= e => m.value = false
          }, {
            default: (0, s.w5)(() => [(0, s.Uk)((0, l.toDisplayString)(e.i18n("qu3625fb")), 1)]),
            _: 1
          })])]),
          default: (0, s.w5)(() => [(0, s.Wm)(p, {
            path: "name"
          }, {
            default: (0, s.w5)(() => [(0, s.Wm)(o, (0, s.dG)({
              value: x.name.value,
              "onUpdate:value": t[3] ||= e => x.name.value = e
            }, x.name.props), null, 16, ["value"])]),
            _: 1
          }), (0, s.Wm)(p, {
            path: "url"
          }, {
            default: (0, s.w5)(() => [(0, s.Wm)(o, (0, s.dG)({
              value: x.url.value,
              "onUpdate:value": t[4] ||= e => x.url.value = e
            }, x.url.props, {
              class: "mt-[16px]"
            }), null, 16, ["value"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])])])])]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});
const Vo = (0, Q.Z)(Ho, [["__scopeId", "data-v-18eb2b41"]]);
import * as Go from "./8020.js";
import * as Yo from "./2615.js";
import * as Zo from "./817.js";
import * as Wo from "./2625.js";
import * as Qo from "./8573.js";
import * as Ko from "./4093.js";
import * as Xo from "./95.js";
const Jo = e => {
  (0, s.dD)("data-v-28f64ca3");
  e = e();
  (0, s.Cn)();
  return e;
};
const $o = {
  key: 0,
  class: "absolute right-[8px] top-[8px] h-[26px] w-[90px]"
};
const es = ["src"];
const ts = {
  class: "h-[110px] flex-shrink-0"
};
const ns = {
  class: "text-[18px] font-medium leading-[24px] text-color-white"
};
const rs = {
  key: 0,
  class: "flex flex-row items-baseline pt-[24px] text-[14px] leading-none text-color-white"
};
const is = {
  class: "text-[32px] font-semibold"
};
const as = Jo(() => (0, s._)("span", {
  class: ""
}, "/mon", -1));
const os = {
  key: 0,
  class: "ml-[5px]"
};
const ss = {
  key: 1,
  class: "flex flex-row items-baseline pt-[24px] text-[14px] leading-none text-color-white"
};
const ls = {
  class: "text-[32px] font-semibold"
};
const cs = {
  class: ""
};
const us = {
  class: "ml-[5px]"
};
const ps = {
  class: "mt-[12px] text-[13px] font-normal leading-[18px] text-color-white text-opacity-80 line-through"
};
const ds = {
  class: "flex flex-1 flex-col pt-[8px]"
};
const hs = {
  key: 0,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: Yo,
  draggable: "false",
  alt: ""
};
const gs = {
  key: 1,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: Zo,
  draggable: "false",
  alt: ""
};
const fs = {
  key: 2,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: Go,
  draggable: "false",
  alt: ""
};
const ms = ["innerHTML"];
const bs = Jo(() => (0, s._)("div", {
  class: "my-[15px] h-[1px] bg-color-white bg-opacity-10"
}, null, -1));
const xs = {
  class: "hi-scroll flex flex-1 flex-col gap-[14px]"
};
const ys = ["innerHTML"];
const vs = {
  class: "absolute right-[8px] bottom-[8px] h-[28px] w-[28px] overflow-hidden"
};
const ws = {
  key: 0,
  src: Wo,
  class: "h-full w-full rounded-[15px]",
  draggable: "false",
  alt: ""
};
const As = {
  key: 1,
  class: "h-full w-full rounded-full border-[2px] border-solid border-color-white border-opacity-20 bg-color-white bg-opacity-10"
};
const ks = (0, s.aZ)({
  __name: "chat-expense-item",
  props: {
    payment: null,
    loading: {
      type: Boolean
    },
    checked: {
      type: Boolean
    }
  },
  emits: ["payment-click"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = e;
    const i = () => {
      n("payment-click", r.payment);
    };
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", {
        class: (0, l.normalizeClass)(["group relative flex h-full w-[304px] shrink-0 flex-col rounded-[16px] bg-[#141F62] bg-top bg-no-repeat p-[16px] transition-colors", [r.checked ? "active-shadow bg-opacity-100" : "insert-shadow bg-opacity-40"]]),
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${r.payment.headImageV2})`,
          backgroundSize: "100%"
        }),
        onClick: i
      }, [r.payment.mostPopular ? ((0, s.wg)(), (0, s.iD)("div", $o, [(0, s._)("img", {
        src: (0, c.SU)(D.s8) ? (0, c.SU)(Xo) : (0, c.SU)(Ko),
        class: "h-full w-full",
        draggable: "false",
        alt: ""
      }, null, 8, es)])) : (0, s.kq)("", true), r.payment.saveMoneyStr ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 1,
        class: "absolute right-[9px] top-[56px] h-[85px] w-[64px] bg-cover bg-center bg-no-repeat",
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${(0, c.SU)(Qo)})`
        })
      }, [(0, s._)("p", {
        class: (0, l.normalizeClass)(["text-center text-[14px] font-medium text-color-white", [(0, c.SU)(D.s8) ? "mt-[33px] leading-none" : "mt-[36px] leading-[20px]"]])
      }, (0, l.toDisplayString)(r.payment.saveMoneyStr), 3)], 4)) : (0, s.kq)("", true), (0, s._)("div", ts, [(0, s._)("h3", ns, (0, l.toDisplayString)(r.payment.name), 1), (0, c.SU)(D.s8) ? ((0, s.wg)(), (0, s.iD)("div", rs, [(0, s._)("span", is, (0, l.toDisplayString)(r.payment.symbol) + " " + (0, l.toDisplayString)(r.payment.monthPrice), 1), as, r.payment.period === "annually" ? ((0, s.wg)(), (0, s.iD)("span", os, (0, l.toDisplayString)(r.payment.yearPrice) + "/yr ", 1)) : (0, s.kq)("", true)])) : ((0, s.wg)(), (0, s.iD)("div", ss, [(0, s._)("span", ls, " ¥" + (0, l.toDisplayString)(r.payment.price), 1), (0, s._)("span", cs, "/" + (0, l.toDisplayString)(r.payment.periodText), 1), (0, s._)("span", us, (0, l.toDisplayString)(r.payment.monthPriceStr), 1)])), (0, s._)("p", ps, (0, l.toDisplayString)(r.payment.originalPriceStr), 1)]), (0, s._)("div", ds, [(0, s._)("div", null, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(r.payment.diffDesc, e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.message,
          class: "relative mt-[14px] flex items-baseline font-ali-55 text-[13px] leading-[18px] text-[#C8C8CC]"
        }, [e.type === "add" ? ((0, s.wg)(), (0, s.iD)("img", hs)) : (0, s.kq)("", true), e.type === "disabled" ? ((0, s.wg)(), (0, s.iD)("img", gs)) : (0, s.kq)("", true), e.type === "warn" ? ((0, s.wg)(), (0, s.iD)("img", fs)) : (0, s.kq)("", true), (0, s._)("div", {
          class: (0, l.normalizeClass)(["pl-[20px] text-[13px]", [e.type === "disabled" ? " opacity-40" : ""]]),
          innerHTML: e.message
        }, null, 10, ms)]);
      }), 128)), bs]), (0, s._)("div", xs, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(r.payment.sameDesc, e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e,
          class: "relative flex font-ali-55 text-[13px] leading-[18px] text-[#C8C8CC]"
        }, [(0, s._)("div", {
          class: "text-[13px]",
          innerHTML: e
        }, null, 8, ys)]);
      }), 128))])]), (0, s._)("div", vs, [r.checked ? ((0, s.wg)(), (0, s.iD)("img", ws)) : ((0, s.wg)(), (0, s.iD)("div", As))])], 6);
    };
  }
});
const Ss = (0, Q.Z)(ks, [["__scopeId", "data-v-28f64ca3"]]);
import * as Cs from /*webcrack:missing*/"./5911.js";
const Es = e => {
  (0, s.dD)("data-v-b78daaba");
  e = e();
  (0, s.Cn)();
  return e;
};
const Is = {
  class: "relative flex h-full w-full flex-col bg-[#00062F]"
};
const Ts = Es(() => (0, s._)("div", {
  class: "absolute top-[32px] right-[40px] flex flex-row items-center"
}, [(0, s._)("img", {
  class: "h-[12px] w-[12px]",
  src: Go,
  draggable: "false",
  alt: ""
}), (0, s._)("span", {
  class: "ml-[8px] font-ali-55 text-[13px] leading-[18px] text-color-white text-opacity-60"
}, " 每月1号刷新条数 ")], -1));
const Ds = {
  class: "flex items-center justify-center gap-[12px] pt-[20px]"
};
const _s = ["onClick"];
const Ms = {
  class: "relative"
};
const Fs = ["src"];
const zs = {
  class: "hi-scroll flex-1"
};
const Rs = {
  class: "flex h-full flex-wrap justify-center gap-[16px] pt-[16px] mb:flex-col mb:items-center mb:pb-[50px]"
};
const Bs = {
  class: "relative flex justify-center pt-[16px] pb-[20px]"
};
const Ns = [Es(() => (0, s._)("i", {
  class: "iconfont icon-quxiao text-[20px] text-[#FFFFFF]"
}, null, -1))];
const Ls = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const Ps = {
  key: 1
};
const Os = (0, s.aZ)({
  __name: "chatgpt-expense",
  setup(e) {
    const {
      planList: t,
      currentPlanList: n,
      planSelectedIndex: r,
      setPlanSelectedIndex: i,
      setPanelShowType: a,
      getPlanList: o,
      getPayList: u,
      panelShowType: p,
      checkAllOrders: d,
      createOrder: h,
      saveCreateOrderParams: g,
      setFromTag: f,
      highlihgtPlanProduct: m
    } = (0, X.useModalData)();
    const b = (0, q.useUserStore)();
    const x = (0, te.useChatGptStore)();
    const y = (0, s.Fl)(() => m.value || te.PlanProduct.PROFESSIONAL);
    const v = (0, s.Fl)(() => n.value.find(e => e.productId === y.value));
    (0, s.bv)(() => {
      o();
      S();
    });
    const w = (0, c.iH)(false);
    (0, s.YP)(() => p.value, e => {
      if (e === "chat-expense") {
        o();
        S();
      }
    });
    const A = (0, Cs.Z)(async () => {
      const t = v.value?.id;
      if (t) {
        if (b.token) {
          if (!w.value) {
            w.value = true;
            try {
              const e = await u();
              if (e) {
                const n = e[0];
                await k(t, n.type);
                g({
                  payPlatform: n.type,
                  planId: t
                });
                w.value = false;
              }
              w.value = false;
            } catch (e) {
              w.value = false;
            }
          }
        } else if (D.EF) {
          (0, qe.bc)({
            type: qe.o1.openLogin
          });
        } else {
          re.R.warn({
            message: i18n("ci3dafad"),
            btnText: i18n("qu4b4b85"),
            onBtnClick: () => {
              b.showLogin(false);
            }
          });
        }
      }
    }, 600, {
      leading: true,
      trailing: false
    });
    const k = async (e, t) => {
      const n = await h(e, t);
      f("");
      if (n.type === "modification") {
        a("chatai-change-plan");
      } else if (n.type === "purchase") {
        a("chatai-pay");
      }
    };
    const S = async () => {
      if (b.chatStatus.vip) {
        return;
      }
      if (await d()) {
        b.getProfile();
        a("chatai-paid");
      }
    };
    function C(e) {
      x.setHighlihgtPlanProduct(e.productId);
    }
    return (e, o) => {
      (0, s.wg)();
      return (0, s.iD)("div", Is, [Ts, (0, s._)("div", Ds, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(t), (e, t) => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: t,
          class: (0, l.normalizeClass)(["insert-shadow flex h-[28px] items-center justify-center rounded-[6px] px-[36px] text-[14px] font-medium leading-none transition-colors", [(0, c.SU)(r) === t ? "bg-[#FFFFFF] text-[#1C1C1E]" : "cursor-pointer bg-[#252865] text-[#FFFFFF]"]]),
          onClick: e => function (e) {
            i(e);
          }(t)
        }, [(0, s._)("div", Ms, [(0, s.Uk)((0, l.toDisplayString)(e.title) + " ", 1), e.discountIcon ? ((0, s.wg)(), (0, s.iD)("img", {
          key: 0,
          src: e.discountIcon,
          class: "absolute right-[-34px] top-[-16px] h-[24px] w-[36px]",
          alt: ""
        }, null, 8, Fs)) : (0, s.kq)("", true)])], 10, _s);
      }), 128))]), (0, s._)("div", zs, [(0, s._)("div", Rs, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(n), e => {
        (0, s.wg)();
        return (0, s.j4)(Ss, {
          key: e.id,
          loading: w.value && (0, c.SU)(v)?.id === e.id,
          payment: e,
          checked: (0, c.SU)(v)?.id === e.id,
          onPaymentClick: C
        }, null, 8, ["loading", "payment", "checked"]);
      }), 128))])]), (0, s._)("div", Bs, [(0, s._)("div", {
        class: "absolute top-[20px] left-[40px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[50%] border-[2px] border-color-white opacity-50 transition-opacity hover:opacity-100",
        onClick: o[0] ||= e => (0, c.SU)(a)("")
      }, Ns), (0, s._)("button", {
        class: (0, l.normalizeClass)(["btn-bg flex h-[40px] w-[304px] items-center justify-center rounded-[8px] text-[16px] font-medium leading-[20px] text-color-white transition-opacity duration-150", [w.value ? "pointer-events-none" : ""]]),
        onClick: o[1] ||= function () {
          return (0, c.SU)(A) && (0, c.SU)(A)(...arguments);
        }
      }, [w.value ? ((0, s.wg)(), (0, s.iD)("i", Ls)) : ((0, s.wg)(), (0, s.iD)("span", Ps, (0, l.toDisplayString)((0, c.SU)(v)?.btnText || "购买"), 1))], 2)])]);
    };
  }
});
const qs = (0, Q.Z)(Os, [["__scopeId", "data-v-b78daaba"]]);
import * as Us from "./1941.js";
const js = e => {
  (0, s.dD)("data-v-3770a0a7");
  e = e();
  (0, s.Cn)();
  return e;
};
const Hs = {
  class: "relative flex h-full w-full flex-col bg-[#00062F]"
};
const Vs = {
  class: "absolute top-[32px] right-[40px] flex flex-row items-center"
};
const Gs = js(() => (0, s._)("img", {
  class: "h-[12px] w-[12px]",
  src: Go,
  draggable: "false",
  alt: ""
}, null, -1));
const Ys = {
  class: "ml-[8px] font-ali-55 text-[13px] leading-[18px] text-color-white text-opacity-60"
};
const Zs = {
  class: "flex items-center justify-center gap-[12px] pt-[20px]"
};
const Ws = ["onClick"];
const Qs = {
  class: "relative"
};
const Ks = {
  key: 0,
  class: "ml-[6px]"
};
const Xs = {
  class: "hi-scroll flex-1"
};
const Js = {
  class: "flex h-full flex-wrap justify-center gap-[16px] pt-[16px] mb:flex-col mb:items-center mb:pb-[50px]"
};
const $s = {
  class: "relative flex justify-center pt-[16px] pb-[20px]"
};
const el = [js(() => (0, s._)("i", {
  class: "iconfont icon-quxiao text-[20px] text-[#FFFFFF]"
}, null, -1))];
const tl = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const nl = {
  key: 1
};
const rl = {
  class: "absolute inset-0 z-10 flex items-center justify-center bg-color-black bg-opacity-60"
};
const il = {
  class: "flex h-[268px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8] pt-[32px]"
};
const al = js(() => (0, s._)("div", {
  class: "flex justify-center"
}, [(0, s._)("img", {
  src: Us,
  class: "h-[80px] w-[80px]",
  alt: ""
})], -1));
const ol = {
  class: "flex-1 px-[20px] pt-[20px] text-[14px] font-normal text-[#3A3A3C]"
};
const sl = {
  key: 0,
  class: "text-center"
};
const ll = {
  key: 1,
  class: "text-center"
};
const cl = {
  class: "flex justify-center pb-[40px]"
};
const ul = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const pl = {
  key: 1
};
const dl = (0, s.aZ)({
  __name: "chatai-sub-plan",
  setup(e) {
    const {
      setPanelShowType: t,
      panelShowType: n,
      highlihgtPlanProduct: r
    } = (0, X.useModalData)();
    const i = (0, q.useUserStore)();
    const o = (0, te.useChatGptStore)();
    const {
      subPlanList: u,
      subPlanPeriodIndex: p,
      currentSubPlanList: d,
      subConfirmModalShow: h
    } = (0, T.Jk)(o);
    const g = (0, s.Fl)(() => r.value || te.PlanProduct.PROFESSIONAL);
    const f = (0, s.Fl)(() => d.value.find(e => e.productType === g.value));
    const m = (0, c.iH)(false);
    (0, s.bv)(() => {
      o.getInfinityAiSubPlan();
      v();
    });
    const b = (0, c.iH)(false);
    const x = (0, c.iH)("created");
    (0, s.YP)(() => n.value, e => {
      if (e === "chatai-subscribe") {
        o.getInfinityAiSubPlan();
        v();
      }
    });
    const y = (0, Cs.Z)(async () => {
      if (f.value?.id) {
        if (i.token) {
          if (!b.value && (b.value = true, D.s8)) {
            const e = f.value.id;
            if (!e) {
              b.value = false;
              return;
            }
            const t = await o.createInfinityAiSubOrder(e);
            if (t) {
              o.setSubConfirmModalShow(true);
              window.open(t, "_blank");
              return;
            } else {
              b.value = false;
              return;
            }
          }
        } else if (D.EF) {
          (0, qe.bc)({
            type: qe.o1.openLogin
          });
        }
      }
    }, 600, {
      leading: true,
      trailing: false
    });
    const v = async () => !!(await o.checkInfinityAiSubOrder()) && (i.getProfile(), o.getChatModels(), x.value = "paid", true);
    function w(e) {
      o.setHighlihgtPlanProduct(e.productType);
    }
    const A = () => {
      b.value = false;
      o.setSubConfirmModalShow(false);
    };
    const k = async () => {
      m.value = true;
      const e = await v();
      m.value = false;
      if (!e) {
        re.R.warn({
          message: "Payment failed, please try again"
        });
      }
    };
    const S = async () => {
      o.setSubConfirmModalShow(false);
      o.setPanelShowType("");
    };
    return (e, n) => {
      const i = a.Z;
      (0, s.wg)();
      return (0, s.iD)("div", Hs, [(0, s._)("div", Vs, [Gs, (0, s._)("span", Ys, (0, l.toDisplayString)(e.i18n("mei38aa65")), 1)]), (0, s._)("div", Zs, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(u), (e, t) => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: t,
          class: (0, l.normalizeClass)(["insert-shadow flex h-[28px] items-center justify-center rounded-[6px] px-[36px] text-[14px] font-medium leading-none transition-colors", [(0, c.SU)(p) === t ? "bg-[#FFFFFF] text-[#1C1C1E]" : "cursor-pointer bg-[#252865] text-[#FFFFFF]"]]),
          onClick: e => function (e) {
            o.setSubPlanPeriodIndex(e);
          }(t)
        }, [(0, s._)("div", Qs, [(0, s._)("span", null, (0, l.toDisplayString)(e.title), 1), e.discount ? ((0, s.wg)(), (0, s.iD)("span", Ks, "(" + (0, l.toDisplayString)(e.discount) + ")", 1)) : (0, s.kq)("", true)])], 10, Ws);
      }), 128))]), (0, s._)("div", Xs, [(0, s._)("div", Js, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(o).currentSubPlanList, e => {
        (0, s.wg)();
        return (0, s.j4)(Ss, {
          key: e.id,
          loading: b.value && (0, c.SU)(f)?.id === e.id,
          payment: e,
          checked: (0, c.SU)(f)?.id === e.id,
          onPaymentClick: w
        }, null, 8, ["loading", "payment", "checked"]);
      }), 128))])]), (0, s._)("div", $s, [(0, s._)("div", {
        class: "absolute top-[20px] left-[40px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[50%] border-[2px] border-color-white opacity-50 transition-opacity hover:opacity-100",
        onClick: n[0] ||= e => (0, c.SU)(t)("")
      }, el), (0, s._)("button", {
        class: (0, l.normalizeClass)(["btn-bg flex h-[40px] w-[304px] items-center justify-center rounded-[8px] text-[16px] font-medium leading-[20px] text-color-white transition-opacity duration-150", [b.value ? "pointer-events-none" : ""]]),
        onClick: n[1] ||= function () {
          return (0, c.SU)(y) && (0, c.SU)(y)(...arguments);
        }
      }, [b.value ? ((0, s.wg)(), (0, s.iD)("i", tl)) : ((0, s.wg)(), (0, s.iD)("span", nl, (0, l.toDisplayString)((0, c.SU)(f)?.btnText || e.i18n("gou4bdc33")), 1))], 2)]), (0, s.Wm)(i, {
        show: (0, c.SU)(h),
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", rl, [(0, s._)("div", il, [al, (0, s._)("div", ol, [x.value === "created" ? ((0, s.wg)(), (0, s.iD)("p", sl, " Have you completed the subscription payment? ")) : (0, s.kq)("", true), x.value === "paid" ? ((0, s.wg)(), (0, s.iD)("p", ll, " Congratulations, your subscription has been successful! thank you for your support! ")) : (0, s.kq)("", true)]), (0, s._)("div", cl, [x.value !== "paid" ? ((0, s.wg)(), (0, s.iD)("button", {
          key: 0,
          class: "confirm-btn bg-color-white text-[#3A3A3C]",
          onClick: A
        }, " Cancel ")) : (0, s.kq)("", true), x.value === "created" ? ((0, s.wg)(), (0, s.iD)("button", {
          key: 1,
          class: "confirm-btn btn-color ml-[12px] text-color-white",
          onClick: k
        }, [m.value ? ((0, s.wg)(), (0, s.iD)("i", ul)) : ((0, s.wg)(), (0, s.iD)("span", pl, "I Have Paid"))])) : (0, s.kq)("", true), x.value === "paid" ? ((0, s.wg)(), (0, s.iD)("button", {
          key: 2,
          class: "confirm-btn btn-color ml-[12px] text-color-white",
          onClick: S
        }, " Start Using ")) : (0, s.kq)("", true)])])])]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});
const hl = (0, Q.Z)(dl, [["__scopeId", "data-v-3770a0a7"]]);
import * as gl from "./935.js";
import * as fl from "./9394.js";
const ml = {
  class: "flex h-full flex-col"
};
const bl = (0, s._)("i", {
  class: "iconfont icon-return_icon text-[20px]"
}, null, -1);
const xl = {
  class: "ml-[16px] text-[16px]"
};
const yl = {
  class: "list hi-scroll mt-[24px] grow"
};
const vl = {
  class: "w-full"
};
const wl = {
  class: "h-[32px] border border-[rgba(229,229,234,0.06)] bg-[rgba(255,266,255,0.06)] text-[rgba(255,255,255,0.6)] chat-w:border-[rgba(0,0,0,0.06)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#3A3A3C] chat-w:text-opacity-60"
};
const Al = {
  class: "w-[45%] pl-[12px] text-left"
};
const kl = {
  class: "w-[25%] text-center"
};
const Sl = {
  class: "w-[30%] text-center"
};
const Cl = {
  class: "pl-[12px] text-left line-clamp-1"
};
const El = {
  class: "text-center"
};
const Il = ["href"];
const Tl = {
  key: 1
};
const Dl = {
  class: "text-center"
};
const _l = (0, s.aZ)({
  __name: "chat-ai-order",
  emits: ["on-back"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = (0, te.useChatGptStore)();
    const i = () => {
      n("on-back");
    };
    (0, s.bv)(() => {
      r.reqOrderList(true);
    });
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("section", ml, [(0, s._)("div", {
        class: "flex cursor-pointer items-center leading-none text-color-white chat-w:text-[#1C1C1E]",
        onClick: i
      }, [bl, (0, s._)("h4", xl, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("asymbol4e4bd") : "WeTab AI历史续费"), 1)]), (0, s._)("div", yl, [(0, s._)("table", vl, [(0, s._)("tr", wl, [(0, s._)("th", Al, (0, l.toDisplayString)((0, c.SU)(D.s8) ? "plan" : "名称"), 1), (0, s._)("th", kl, (0, l.toDisplayString)(e.i18n("jia40e9fd")), 1), (0, s._)("th", Sl, (0, l.toDisplayString)(e.i18n("fu4590c9")), 1)]), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(r).orderList, e => {
        (0, s.wg)();
        return (0, s.iD)("tr", {
          key: e.id,
          class: "h-[40px] border border-[rgba(255,255,255,0.06)] font-ali-55 leading-[40px] text-[rgba(255,255,255,0.6)] chat-w:border-[rgba(0,0,0,0.06)] chat-w:bg-[rgba(255,255,255,1)] chat-w:text-[#3A3A3C] chat-w:text-opacity-40"
        }, [(0, s._)("td", Cl, (0, l.toDisplayString)(e.periodText), 1), (0, s._)("td", El, [e.invoiceUrl ? ((0, s.wg)(), (0, s.iD)("a", {
          key: 0,
          class: "underline",
          target: "_blank",
          href: e.invoiceUrl
        }, (0, l.toDisplayString)(e.payAmount), 9, Il)) : ((0, s.wg)(), (0, s.iD)("span", Tl, (0, l.toDisplayString)(e.payAmount), 1))]), (0, s._)("td", Dl, (0, l.toDisplayString)(e.paySuccessTimStr), 1)]);
      }), 128))])])]);
    };
  }
});
const Ml = {
  class: "flex h-full flex-col"
};
const Fl = [(0, s._)("i", {
  class: "iconfont icon-return_icon text-[20px]"
}, null, -1), (0, s._)("h4", {
  class: "ml-[16px] text-[16px]"
}, "叠加包订单记录", -1)];
const zl = {
  class: "list hi-scroll mt-[24px] grow"
};
const Rl = {
  class: "w-full"
};
const Bl = (0, s._)("tr", {
  class: "h-[32px] border border-[rgba(229,229,234,0.06)] bg-[rgba(255,266,255,0.06)] text-[rgba(255,255,255,0.6)] chat-w:border-[rgba(0,0,0,0.06)] chat-w:bg-[rgba(0,0,0,0.06)] chat-w:text-[#3A3A3C] chat-w:text-opacity-60"
}, [(0, s._)("th", {
  class: "w-[45%] pl-[12px] text-left"
}, "订单内容"), (0, s._)("th", {
  class: "w-[25%] text-center"
}, "价格"), (0, s._)("th", {
  class: "w-[30%] text-center"
}, "时间")], -1);
const Nl = {
  class: "py-[10px] pl-[12px] text-left"
};
const Ll = {
  class: "text-center"
};
const Pl = {
  class: "text-center"
};
const Ol = (0, s.aZ)({
  __name: "chat-extra-order",
  emits: ["on-back"],
  setup(e, t) {
    let {
      emit: n
    } = t;
    const r = (0, te.useChatGptStore)();
    const i = () => {
      n("on-back");
    };
    (0, s.bv)(() => {
      r.reqExtraPackOrder();
    });
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("section", Ml, [(0, s._)("div", {
        class: "flex cursor-pointer items-center leading-none text-color-white chat-w:text-[#1C1C1E]",
        onClick: i
      }, Fl), (0, s._)("div", zl, [(0, s._)("table", Rl, [Bl, ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(r).extraPackOrders, e => {
        (0, s.wg)();
        return (0, s.iD)("tr", {
          key: e.id,
          class: "h-[40px] border border-[rgba(255,255,255,0.06)] font-ali-55 leading-[40px] text-[rgba(255,255,255,0.6)] chat-w:border-[rgba(0,0,0,0.06)] chat-w:bg-[rgba(255,255,255,1)] chat-w:text-[#3A3A3C] chat-w:text-opacity-40"
        }, [(0, s._)("td", Nl, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(e.plans, e => {
          (0, s.wg)();
          return (0, s.iD)("p", {
            key: e.name,
            class: "leading-[20px] line-clamp-1"
          }, (0, l.toDisplayString)(e.name) + ": " + (0, l.toDisplayString)(e.count) + "条", 1);
        }), 128))]), (0, s._)("td", Ll, "¥" + (0, l.toDisplayString)(e.payAmount), 1), (0, s._)("td", Pl, (0, l.toDisplayString)((t = e.paySuccessTime, ci(t).format("YYYY-MM-DD"))), 1)]);
        var t;
      }), 128))])])]);
    };
  }
});
const ql = e => {
  (0, s.dD)("data-v-3dee2614");
  e = e();
  (0, s.Cn)();
  return e;
};
const Ul = {
  class: "relative z-0 flex h-full w-full items-center justify-center gap-[16px] bg-[#293266] font-ali-55 chat-p:bg-[#00062F] chat-w:bg-[#f8f8f8]"
};
const jl = {
  class: "flex w-[360px] flex-col items-center text-color-white chat-w:text-[#3A3A3C] chat-w:text-opacity-60"
};
const Hl = {
  class: "card w-full rounded-[8px] bg-[#303B75] text-[12px] chat-p:bg-[#221E47] chat-w:bg-[#FFFFFF]"
};
const Vl = {
  class: "w-full p-[12px]"
};
const Gl = {
  key: 0,
  src: gl,
  class: "h-[22px]",
  alt: ""
};
const Yl = {
  key: 1,
  src: fl,
  class: "h-[22px] w-[112px]",
  alt: ""
};
const Zl = {
  class: "font-ali-65 text-[12px] text-color-white"
};
const Wl = {
  class: "flex items-center justify-between pt-[14px]"
};
const Ql = {
  key: 0,
  class: "ml-[4px]"
};
const Kl = ql(() => (0, s._)("i", {
  class: "iconfont icon-more_icon ml-[2px]"
}, null, -1));
const Xl = ["onClick"];
const Jl = ["onClick"];
const $l = ["onClick"];
const ec = ql(() => (0, s._)("div", {
  class: "mt-[3px] h-[1px] w-full bg-color-white bg-opacity-[0.06] chat-w:bg-color-black chat-w:bg-opacity-10"
}, null, -1));
const tc = {
  class: "px-[12px] pt-[16px] pb-[12px] text-[12px] leading-[16px]"
};
const nc = {
  class: "desc-dot relative z-0 flex pl-[16px] before:bg-[#7B3DFF]"
};
const rc = {
  class: "ml-[10px]"
};
const ic = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite]"
};
const ac = {
  key: 1
};
const oc = {
  class: "desc-dot relative z-0 mt-[16px] flex pl-[16px] before:bg-[#7B3DFF]"
};
const sc = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite]"
};
const lc = {
  key: 1
};
const cc = {
  class: "desc-dot relative z-0 mt-[16px] flex pl-[16px] before:bg-[#7B3DFF]"
};
const uc = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite]"
};
const pc = {
  key: 1
};
const dc = {
  class: "desc-dot relative z-0 mt-[16px] flex pl-[16px] before:bg-[#7B3DFF]"
};
const hc = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite]"
};
const gc = {
  key: 1
};
const fc = {
  key: 1,
  class: "mt-[40px] flex w-full items-center justify-between"
};
const mc = {
  class: "leading-none text-[#ffffff] chat-w:text-[#3A3A3C]"
};
const bc = {
  class: "flex text-[12px]"
};
const xc = ["onClick"];
const yc = {
  class: "mt-[36px] w-full"
};
const vc = ql(() => (0, s._)("i", {
  class: "iconfont icon-ai_feedback text-[18px] text-[#7883BC] chat-p:text-[#8C5EF1] chat-w:text-[#8E8E94]"
}, null, -1));
const wc = {
  class: "ml-[10px] text-[#C8C8C8] chat-w:text-[#3A3A3C]"
};
const Ac = {
  key: 0,
  class: "box absolute top-0 h-full w-[360px] pt-[60px] pb-[40px]"
};
const kc = {
  key: 1,
  class: "box absolute top-0 h-full w-[360px] pt-[60px] pb-[40px]"
};
const Sc = {
  key: 2,
  class: "absolute inset-0 flex items-center justify-center bg-color-black bg-opacity-60"
};
const Cc = {
  class: "warnCard flex h-[230px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8]"
};
const Ec = ql(() => (0, s._)("div", {
  class: "flex h-[44px] items-center justify-center border-b border-color-black border-opacity-5 font-ali-65 text-[16px] leading-none text-[#1C1C1E]"
}, " AI Pro续费提示 ", -1));
const Ic = {
  class: "flex flex-1 flex-col p-[24px]"
};
const Tc = {
  class: "flex-1 font-ali-55 text-[14px] leading-[20px] text-[#3A3A3C]"
};
const Dc = {
  class: "absolute inset-0 z-10 flex items-center justify-center bg-color-black bg-opacity-60"
};
const _c = {
  class: "flex h-[268px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8] pt-[32px]"
};
const Mc = ql(() => (0, s._)("div", {
  class: "flex justify-center"
}, [(0, s._)("img", {
  src: Us,
  class: "h-[80px] w-[80px]",
  alt: ""
})], -1));
const Fc = ql(() => (0, s._)("div", {
  class: "flex-1 px-[20px] pt-[20px] text-[14px] font-normal text-[#3A3A3C]"
}, [(0, s._)("p", {
  class: "text-center"
}, "Are you sure you want to cancel your subscription?")], -1));
const zc = {
  class: "flex justify-center pb-[40px]"
};
const Rc = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const Bc = {
  key: 1
};
const Nc = {
  class: "absolute inset-0 z-10 flex items-center justify-center bg-color-black bg-opacity-60"
};
const Lc = {
  class: "flex h-[268px] w-[400px] flex-col rounded-[12px] bg-[#F8F8F8] pt-[32px]"
};
const Pc = ql(() => (0, s._)("div", {
  class: "flex justify-center"
}, [(0, s._)("img", {
  src: Us,
  class: "h-[80px] w-[80px]",
  alt: ""
})], -1));
const Oc = ql(() => (0, s._)("div", {
  class: "flex-1 px-[20px] pt-[20px] text-[14px] font-normal text-[#3A3A3C]"
}, [(0, s._)("p", {
  class: "text-center"
}, "Are you want to resume your subscription?")], -1));
const qc = {
  class: "flex justify-center pb-[40px]"
};
const Uc = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const jc = {
  key: 1
};
const Hc = (0, s.aZ)({
  __name: "chat-ai-setting",
  setup(e) {
    const t = (0, ke.n)();
    const {
      setPanelShowType: n,
      chatVipDetail: r,
      vipDetailLoading: o,
      panelShowType: u,
      extpackRest: p,
      showRenewalConfirm: d
    } = (0, X.useModalData)();
    const h = (0, q.useUserStore)();
    const g = (0, te.useChatGptStore)();
    const f = () => {
      n("chat-expense");
    };
    const m = (0, c.iH)(false);
    const b = (0, c.iH)(false);
    const x = (0, c.iH)(false);
    function y() {
      if (ne.q$ && ne.ID === "mobile") {
        re.R.warn({
          message: "请使用电脑端进行续费"
        });
      } else {
        g.setHighlihgtPlanProduct(r.value.suggestProduct);
        if (r.value.renewalConfirm) {
          g.setShowRenewalConfirm(true);
        } else {
          f();
        }
      }
    }
    function v() {
      if (ne.q$ && ne.ID === "mobile") {
        re.R.warn({
          message: "Please use a computer to cancel"
        });
      } else {
        m.value = true;
      }
    }
    function w() {
      if (ne.q$ && ne.ID === "mobile") {
        re.R.warn({
          message: "Please use a computer to subscribe"
        });
      } else {
        b.value = true;
      }
    }
    function A() {
      g.setShowRenewalConfirm(false);
    }
    const k = (0, s.Fl)(() => ci(h.user.chatVipEndTime).format("YYYY/MM/DD"));
    const S = [{
      text: i18n("jing191345"),
      type: "chat-default"
    }, {
      text: i18n("ku486c7b"),
      type: "chat-purple"
    }, {
      text: i18n("qing19103f"),
      type: "chat-white"
    }];
    const C = (0, s.Fl)(() => g.activeTheme === "chat-purple" ? {
      normal: {
        background: "rgba(255,255,255,0.06)",
        color: "#8E8E94"
      },
      active: {
        background: "#8D2FE0",
        color: "#fff"
      }
    } : g.activeTheme === "chat-white" ? {
      normal: {
        background: "rgba(0,0,0,0.06)",
        color: "#8E8E94"
      },
      active: {
        background: "#11A57F",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.05)"
      }
    } : {
      normal: {
        background: "rgba(255,255,255,0.06)",
        color: "#fff",
        opacity: 0.6
      },
      active: {
        background: "#4A589E",
        color: "#fff"
      }
    });
    const E = () => {
      n("");
    };
    const I = (0, c.iH)(false);
    const T = (0, c.iH)(false);
    const _ = () => {
      I.value = true;
      T.value = false;
    };
    const M = () => {
      I.value = false;
    };
    const F = (0, c.iH)(false);
    const z = (0, c.iH)();
    const R = () => {
      F.value = true;
    };
    function B() {
      I.value = false;
      T.value = false;
    }
    async function N() {
      x.value = true;
      await g.cancelInfinityAiSub();
      x.value = false;
      m.value = false;
    }
    async function L() {
      x.value = true;
      await g.resumeInfinityAiSub();
      x.value = false;
      b.value = false;
    }
    (0, s.bv)(() => {
      (0, _r.i9H)(z.value, () => {
        F.value = false;
      });
      if (g.orderList.length === 0) {
        g.reqOrderList(false);
      }
      if (g.extraPackOrders.length === 0) {
        g.reqExtraPackOrder();
      }
      g.getUserVipDetail();
    });
    (0, s.YP)(() => u.value, e => {
      if (e === "chatai-setting") {
        g.getUserVipDetail();
        g.setShowRenewalConfirm(false);
      }
    });
    return (e, n) => {
      const u = a.Z;
      (0, s.wg)();
      return (0, s.iD)("section", Ul, [(0, s.wy)((0, s._)("main", jl, [(0, s._)("article", Hl, [(0, s._)("div", Vl, [(0, s._)("div", {
        class: "flex h-[24px] items-center justify-between rounded-[4px] bg-contain bg-center bg-no-repeat pl-[8px] pr-[12px]",
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${(0, c.SU)(r).banner})`
        })
      }, [(0, c.SU)(D.EF) ? ((0, s.wg)(), (0, s.iD)("img", Gl)) : ((0, s.wg)(), (0, s.iD)("img", Yl)), (0, s._)("span", Zl, (0, l.toDisplayString)((0, c.SU)(r).name), 1)], 4), (0, s._)("div", Wl, [(0, s._)("div", {
        class: "flex cursor-pointer items-center leading-none opacity-60",
        onClick: _
      }, [(0, s._)("span", null, (0, l.toDisplayString)((0, c.SU)(k)), 1), (0, c.SU)(r).subStatus === "canceled" ? ((0, s.wg)(), (0, s.iD)("span", Ql, "(Canceled)")) : (0, s.kq)("", true), Kl]), (0, c.SU)(D.s8) ? ((0, s.wg)(), (0, s.iD)(s.HY, {
        key: 0
      }, [(0, c.SU)(r).subStatus === "active" ? ((0, s.wg)(), (0, s.iD)("button", {
        key: 0,
        class: "flex h-[20px] items-center justify-center rounded-[6px] border border-color-white border-opacity-10 px-[12px] leading-none text-color-white",
        onClick: (0, i.withModifiers)(v, ["stop"])
      }, " Cancel ", 8, Xl)) : (0, s.kq)("", true), (0, c.SU)(r).subStatus === "canceled" ? ((0, s.wg)(), (0, s.iD)("button", {
        key: 1,
        class: "flex h-[20px] items-center justify-center rounded-[6px] border border-color-white border-opacity-10 px-[12px] leading-none text-color-white",
        onClick: (0, i.withModifiers)(w, ["stop"])
      }, " Resume ", 8, Jl)) : (0, s.kq)("", true)], 64)) : ((0, s.wg)(), (0, s.iD)(s.HY, {
        key: 1
      }, [(0, c.SU)(t).chatBanned ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("button", {
        key: 0,
        class: "bg-setting-btn flex h-[20px] items-center justify-center rounded-[6px] px-[12px] leading-none text-color-white",
        onClick: (0, i.withModifiers)(y, ["stop"])
      }, (0, l.toDisplayString)(e.i18n("li475b70")), 9, $l))], 64))])]), ec, (0, s._)("div", tc, [(0, s._)("div", nc, [(0, s._)("span", null, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("asymbol82bde") : e.i18n("asymbole47b3")), 1), (0, c.SU)(r).show3d5Count ? ((0, s.wg)(), (0, s.iD)(s.HY, {
        key: 0
      }, [(0, s._)("span", rc, (0, l.toDisplayString)(e.i18n("sheng4618f4")), 1), (0, c.SU)(o) ? ((0, s.wg)(), (0, s.iD)("i", ic)) : ((0, s.wg)(), (0, s.iD)("span", ac, (0, l.toDisplayString)((0, c.SU)(r).rest["3d5"]) + " " + (0, l.toDisplayString)(e.i18n("tiao2cc1ba")), 1))], 64)) : (0, s.kq)("", true)]), (0, s._)("div", oc, [(0, s._)("span", null, (0, l.toDisplayString)((0, c.SU)(D.EF) ? "GPT4.0：" : "AI-4.0："), 1), (0, c.SU)(o) ? ((0, s.wg)(), (0, s.iD)("i", sc)) : ((0, s.wg)(), (0, s.iD)("span", lc, (0, l.toDisplayString)(e.i18n("sheng443b51")) + " " + (0, l.toDisplayString)((0, c.SU)(r).rest[4]) + " " + (0, l.toDisplayString)(e.i18n("tiao2cc1ba")), 1))]), (0, s._)("div", cc, [(0, s._)("span", null, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("asymbolc5919") : e.i18n("asymboldc4ad")), 1), (0, c.SU)(o) ? ((0, s.wg)(), (0, s.iD)("i", uc)) : ((0, s.wg)(), (0, s.iD)("span", pc, (0, l.toDisplayString)(e.i18n("sheng443b51")) + " " + (0, l.toDisplayString)((0, c.SU)(r).rest.basicImage || 0) + " " + (0, l.toDisplayString)(e.i18n("tiao2cc1ba")), 1))]), (0, s._)("div", dc, [(0, s._)("span", null, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("asymbol6e2a0") : e.i18n("asymbolc9692")), 1), (0, c.SU)(o) ? ((0, s.wg)(), (0, s.iD)("i", hc)) : ((0, s.wg)(), (0, s.iD)("span", gc, (0, l.toDisplayString)(e.i18n("sheng443b51")) + " " + (0, l.toDisplayString)((0, c.SU)(r).rest.image || 0) + " " + (0, l.toDisplayString)(e.i18n("tiao2cc1ba")), 1))])])]), (0, s.kq)("", true), (0, c.SU)(t).chatBanned ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("article", fc, [(0, s._)("h4", mc, (0, l.toDisplayString)((0, c.SU)(D.EF) ? e.i18n("asymbol30a17") : "WeTab AI主题色"), 1), (0, s._)("div", bc, [((0, s.wg)(), (0, s.iD)(s.HY, null, (0, s.Ko)(S, e => (0, s._)("button", {
        key: e.type,
        style: (0, l.normalizeStyle)(e.type === (0, c.SU)(g).activeTheme ? (0, c.SU)(C).active : (0, c.SU)(C).normal),
        class: "ml-[8px] h-[28px] w-[56px] rounded-[6px] leading-none",
        onClick: t => {
          n = e.type;
          g.setTheme(n);
          return;
          var n;
        }
      }, (0, l.toDisplayString)(e.text), 13, xc)), 64))])])), (0, s._)("article", yc, [(0, s._)("button", {
        class: "bg-gradient-to-r flex h-[36px] w-full items-center justify-center rounded-[8px] from-[#5C55E4] to-[#A93DF1] leading-none text-color-white",
        onClick: E
      }, (0, l.toDisplayString)(e.i18n("fan35f411")), 1)]), (0, s._)("article", {
        ref_key: "contactRef",
        ref: z,
        class: "relative mt-[32px] flex w-[100px] cursor-pointer items-center",
        onClick: R
      }, [vc, (0, s._)("h4", wc, (0, l.toDisplayString)(e.i18n("tou294af5")), 1), (0, s.wy)((0, s.Wm)(va, {
        class: "bottom-[36px] cursor-default"
      }, null, 512), [[i.vShow, F.value]])], 512)], 512), [[i.vShow, !I.value && !T.value]]), I.value ? ((0, s.wg)(), (0, s.iD)("div", Ac, [(0, s.Wm)(_l, {
        onOnBack: M
      })])) : (0, s.kq)("", true), T.value ? ((0, s.wg)(), (0, s.iD)("div", kc, [(0, s.Wm)(Ol, {
        onOnBack: B
      })])) : (0, s.kq)("", true), (0, c.SU)(d) ? ((0, s.wg)(), (0, s.iD)("div", Sc, [(0, s._)("div", Cc, [Ec, (0, s._)("div", Ic, [(0, s._)("div", Tc, (0, l.toDisplayString)((0, c.SU)(r).renewalConfirmDesc), 1), (0, s._)("div", {
        class: "flex justify-end"
      }, [(0, s._)("button", {
        class: "h-[36px] w-[120px] rounded-[8px] bg-color-white font-ali-65 text-[16px] text-[#3A3A3C]",
        onClick: A
      }, " 取消 "), (0, s._)("button", {
        class: "ml-[12px] h-[36px] w-[120px] rounded-[8px] bg-[#4A7AFF] font-ali-65 text-[16px] text-color-white transition-colors hover:bg-[rgb(96,165,250)] active:bg-[rgb(37,99,235)]",
        onClick: f
      }, " 继续 ")])])])])) : (0, s.kq)("", true), (0, s.Wm)(u, {
        show: m.value,
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", Dc, [(0, s._)("div", _c, [Mc, Fc, (0, s._)("div", zc, [(0, s._)("button", {
          class: "confirm-btn bg-color-white text-[#3A3A3C]",
          onClick: n[0] ||= e => m.value = false
        }, " Cancel "), (0, s._)("button", {
          class: "confirm-btn btn-color ml-[12px] text-color-white",
          onClick: N
        }, [x.value ? ((0, s.wg)(), (0, s.iD)("i", Rc)) : ((0, s.wg)(), (0, s.iD)("span", Bc, "Confirm"))])])])])]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(u, {
        show: b.value,
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", Nc, [(0, s._)("div", Lc, [Pc, Oc, (0, s._)("div", qc, [(0, s._)("button", {
          class: "confirm-btn bg-color-white text-[#3A3A3C]",
          onClick: n[1] ||= e => b.value = false
        }, " Cancel "), (0, s._)("button", {
          class: "confirm-btn btn-color ml-[12px] text-color-white",
          onClick: L
        }, [x.value ? ((0, s.wg)(), (0, s.iD)("i", Uc)) : ((0, s.wg)(), (0, s.iD)("span", jc, "Confirm"))])])])])]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});
const Vc = (0, Q.Z)(Hc, [["__scopeId", "data-v-3dee2614"]]);
import * as Gc from "./1542.js";
const Yc = e => {
  (0, s.dD)("data-v-001a5d7e");
  e = e();
  (0, s.Cn)();
  return e;
};
const Zc = {
  class: "relative flex h-full w-full items-center justify-center bg-[#00062F]"
};
const Wc = {
  class: "relative z-0 h-[272px] w-[400px] overflow-visible"
};
const Qc = Yc(() => (0, s._)("div", {
  class: "card-bg absolute left-[50%] bottom-[-16px] h-[100px] w-[232px] translate-x-[-50%] rounded-[24px] bg-[#9083D2] opacity-[0.43]"
}, null, -1));
const Kc = Yc(() => (0, s._)("div", {
  class: "card-bg absolute left-[50%] bottom-[-8px] h-[100px] w-[322px] translate-x-[-50%] rounded-[24px] bg-[#9083D2]"
}, null, -1));
const Xc = {
  class: "card relative h-full w-full rounded-[24px] bg-color-white p-[12px]"
};
const Jc = {
  class: "flex h-full w-full flex-col items-center rounded-[16px] border border-[#F4E9FF] pt-[48px]"
};
const $c = ["src"];
const eu = Yc(() => (0, s._)("h4", {
  class: "font-ali-75 text-[20px] text-[#1C1C1E]"
}, "恭喜您！", -1));
const tu = ["value"];
const nu = {
  class: "mt-[12px] font-ali-75 text-[20px] text-[#1C1C1E]"
};
const ru = (0, s.aZ)({
  __name: "chat-ai-paid",
  setup(e) {
    const {
      setPanelShowType: t,
      isFreeOrder: n
    } = (0, X.useModalData)();
    const r = (0, q.useUserStore)();
    const i = (0, s.Fl)(() => r.user.email);
    return (e, r) => {
      (0, s.wg)();
      return (0, s.iD)("section", Zc, [(0, s._)("main", Wc, [Qc, Kc, (0, s._)("div", Xc, [(0, s._)("div", Jc, [(0, s._)("img", {
        class: "absolute top-[-78px] h-[115px] w-[108px]",
        src: (0, c.SU)(Gc),
        alt: ""
      }, null, 8, $c), eu, (0, s._)("input", {
        readonly: "",
        class: "mt-[12px] h-[36px] w-[220px] rounded-[8px] border border-[rgba(0,0,0,0.08)] bg-[#F8F8F8] px-[12px] text-center leading-[36px] text-[#9944FF]",
        type: "text",
        value: (0, c.SU)(i)
      }, null, 8, tu), (0, s._)("h4", nu, (0, l.toDisplayString)(`${(0, c.SU)(D.EF) ? "Infinity AI Pro" : "WeTab AI Pro"}${(0, c.SU)(n) ? "变更成功" : "购买成功"}`), 1), (0, s._)("div", {
        class: "bottom-btn mt-[26px] h-[36px] w-[120px] cursor-pointer bg-cover bg-center bg-no-repeat text-center text-[16px] leading-[36px] text-color-white",
        onClick: r[0] ||= e => (0, c.SU)(t)("")
      }, " 开始畅聊 ")])])])]);
    };
  }
});
const iu = (0, Q.Z)(ru, [["__scopeId", "data-v-001a5d7e"]]);
import * as au from "./7472.js";
import * as ou from "./7414.js";
const su = e => {
  (0, s.dD)("data-v-955b98bc");
  e = e();
  (0, s.Cn)();
  return e;
};
const lu = {
  class: "flex h-full w-full flex-col items-center bg-[#00062F]"
};
const cu = {
  class: "mt-[60px] text-[20px] font-medium leading-[28px] text-color-white"
};
const uu = su(() => (0, s._)("div", {
  class: "mt-[12px] flex items-center text-[13px] font-normal leading-[18px] text-[#C8C8CC]"
}, [(0, s._)("span", null, " 变更套餐会将当前套餐剩余价值折算到新套餐， "), (0, s._)("span", {
  class: "text-[#F0A810]"
}, "变更后原套餐失效")], -1));
const pu = {
  key: 0,
  class: "relative mt-[16px] flex gap-[20px] pt-[45px]"
};
const du = {
  class: "absolute left-0 right-0 top-[8px] flex items-center justify-center font-ali-55 text-[16px] leading-none text-color-white"
};
const hu = su(() => (0, s._)("span", null, "本次需补差价 \xA0", -1));
const gu = {
  class: "font-ali-75 text-[18px] text-color-red"
};
const fu = su(() => (0, s._)("div", {
  class: "absolute top-[33px] left-0 right-0 flex justify-center"
}, [(0, s._)("img", {
  class: "w-[199px]",
  draggable: "false",
  src: au,
  alt: ""
})], -1));
const mu = {
  key: 0,
  class: "flex flex-col items-center"
};
const bu = su(() => (0, s._)("span", {
  class: "mb-[4px] text-[16px] font-normal leading-[22px] text-[#C8C8CC]"
}, "当前套餐", -1));
const xu = {
  class: "flex flex-col items-center rounded-[8px]"
};
const yu = {
  class: "relative flex items-baseline justify-center pt-[15px]"
};
const vu = {
  class: "text-[32px] font-semibold leading-[32px] text-color-white"
};
const wu = {
  class: "text-color-white"
};
const Au = {
  class: "mt-[12px] text-[16px] font-medium leading-[22px] text-color-white"
};
const ku = {
  class: "mt-[5px] text-[14px] font-normal leading-[20px] text-color-white text-opacity-60"
};
const Su = {
  class: "mt-[18px] flex flex-col gap-[10px] pb-[6px] pl-[6px] pr-[8px] text-[#c8c8c8]"
};
const Cu = {
  key: 0,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: Yo,
  draggable: "false",
  alt: ""
};
const Eu = {
  key: 1,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: ou,
  draggable: "false",
  alt: ""
};
const Iu = ["innerHTML"];
const Tu = {
  class: "flex flex-col items-center"
};
const Du = su(() => (0, s._)("span", {
  class: "mb-[4px] text-[16px] font-normal leading-[22px] text-[#C8C8CC]"
}, "变更后套餐", -1));
const _u = {
  class: "flex flex-col items-center rounded-[8px]"
};
const Mu = {
  class: "relative flex items-baseline justify-center pt-[15px]"
};
const Fu = {
  class: "text-[32px] font-semibold leading-[32px] text-color-white"
};
const zu = {
  class: "text-color-white"
};
const Ru = {
  class: "mt-[12px] text-[16px] font-medium leading-[22px] text-color-white"
};
const Bu = {
  class: "mt-[5px] text-[14px] font-normal leading-[20px] text-color-white text-opacity-60"
};
const Nu = {
  class: "mt-[18px] flex flex-col gap-[10px] pl-[6px] pb-[6px] pr-[8px] text-[#c8c8c8]"
};
const Lu = {
  key: 0,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: Yo,
  draggable: "false",
  alt: ""
};
const Pu = {
  key: 1,
  class: "absolute left-0 top-[3px] h-[12px] w-[12px]",
  src: ou,
  draggable: "false",
  alt: ""
};
const Ou = ["innerHTML"];
const qu = {
  class: "mt-[20px] text-[13px] font-normal leading-[18px] text-[#C8C8CC]"
};
const Uu = (0, s.aZ)({
  __name: "chatai-change-plan",
  setup(e) {
    const {
      setPanelShowType: t,
      paymentOrderData: n,
      backToPlanList: r
    } = (0, X.useModalData)();
    function i() {
      r();
    }
    function a() {
      t("chatai-pay");
    }
    function o(e) {
      return ci(e).format("YYYY/MM/DD");
    }
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", lu, [(0, s._)("h3", cu, (0, l.toDisplayString)((0, c.SU)(D.EF) ? "Infinity AI Pro变更套餐" : "WeTab AI Pro变更套餐"), 1), uu, (0, c.SU)(n) ? ((0, s.wg)(), (0, s.iD)("div", pu, [(0, s._)("div", du, [hu, (0, s._)("span", gu, " ¥" + (0, l.toDisplayString)((0, c.SU)(n).newPlan.payAmount), 1)]), fu, (0, c.SU)(n).oldPlan ? ((0, s.wg)(), (0, s.iD)("div", mu, [bu, (0, s._)("div", {
        class: "insert-shadow min-h-[272px] w-[304px] rounded-[12px] bg-[#141F62] bg-top bg-no-repeat p-[8px]",
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${(0, c.SU)(n).oldPlan.headImageV2})`,
          backgroundSize: "100%"
        })
      }, [(0, s._)("div", xu, [(0, s._)("div", yu, [(0, s._)("span", vu, " ¥" + (0, l.toDisplayString)((0, c.SU)(n).oldPlan.price), 1), (0, s._)("span", wu, " \xA0 " + (0, l.toDisplayString)((0, c.SU)(n).oldPlan.periodText), 1)]), (0, s._)("h3", Au, (0, l.toDisplayString)((0, c.SU)(n).oldPlan.name), 1), (0, s._)("p", ku, " 有效期至：" + (0, l.toDisplayString)(o((0, c.SU)(n).oldPlan.vipEndTime)), 1)]), (0, s._)("div", Su, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(n).oldPlan.desc, e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.message,
          class: "relative flex font-ali-55 text-[13px] leading-[18px] text-[#C8C8CC]"
        }, [e.type === "add" ? ((0, s.wg)(), (0, s.iD)("img", Cu)) : ((0, s.wg)(), (0, s.iD)("img", Eu)), (0, s._)("div", {
          class: "pl-[20px] text-[13px]",
          innerHTML: e.message
        }, null, 8, Iu)]);
      }), 128))])], 4)])) : (0, s.kq)("", true), (0, s._)("div", Tu, [Du, (0, s._)("div", {
        class: "insert-shadow min-h-[272px] w-[304px] rounded-[12px] bg-[#141F62] bg-top bg-no-repeat p-[8px]",
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${(0, c.SU)(n).newPlan.headImageV2})`,
          backgroundSize: "100%"
        })
      }, [(0, s._)("div", _u, [(0, s._)("div", Mu, [(0, s._)("span", Fu, " ¥" + (0, l.toDisplayString)((0, c.SU)(n).newPlan.price), 1), (0, s._)("span", zu, " \xA0 " + (0, l.toDisplayString)((0, c.SU)(n).newPlan.periodText), 1)]), (0, s._)("h3", Ru, (0, l.toDisplayString)((0, c.SU)(n).newPlan.name), 1), (0, s._)("p", Bu, " 有效期至：" + (0, l.toDisplayString)(o((0, c.SU)(n).newPlan.vipEndTime)), 1)]), (0, s._)("div", Nu, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(n).newPlan.desc, e => {
        (0, s.wg)();
        return (0, s.iD)("div", {
          key: e.message,
          class: "relative flex font-ali-55 text-[13px] leading-[18px] text-[#C8C8CC]"
        }, [e.type === "add" ? ((0, s.wg)(), (0, s.iD)("img", Lu)) : ((0, s.wg)(), (0, s.iD)("img", Pu)), (0, s._)("div", {
          class: "pl-[20px] text-[13px]",
          innerHTML: e.message
        }, null, 8, Ou)]);
      }), 128))])], 4)])])) : (0, s.kq)("", true), (0, s._)("p", qu, (0, l.toDisplayString)((0, c.SU)(n)?.desc), 1), (0, s._)("div", {
        class: "flex items-center gap-[12px] pt-[28px]"
      }, [(0, s._)("button", {
        class: "insert-shadow h-[40px] w-[160px] rounded-[8px] bg-[#452F89] text-[16px] font-medium text-color-white duration-150",
        onClick: i
      }, " 取消 "), (0, s._)("button", {
        class: "h-[40px] w-[160px] rounded-[8px] bg-color-blue text-[16px] font-medium text-color-white duration-150 hover:bg-[rgb(96,165,250)] active:bg-[rgb(37,99,235)]",
        onClick: a
      }, " 继续 ")])]);
    };
  }
});
const ju = (0, Q.Z)(Uu, [["__scopeId", "data-v-955b98bc"]]);
var Hu;
import * as Vu from "./3449.js";
function Gu() {
  Gu = Object.assign || function (e) {
    var t;
    for (var n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e[i] = t[i];
        }
      }
    }
    return e;
  };
  return Gu.apply(this, arguments);
}
(function (e) {
  var t = function () {
    function t(e, n, r, a) {
      this.version = e;
      this.errorCorrectionLevel = n;
      this.modules = [];
      this.isFunction = [];
      if (e < t.MIN_VERSION || e > t.MAX_VERSION) {
        throw new RangeError("Version value out of range");
      }
      if (a < -1 || a > 7) {
        throw new RangeError("Mask value out of range");
      }
      this.size = e * 4 + 17;
      var o = [];
      for (var s = 0; s < this.size; s++) {
        o.push(false);
      }
      for (s = 0; s < this.size; s++) {
        this.modules.push(o.slice());
        this.isFunction.push(o.slice());
      }
      this.drawFunctionPatterns();
      var l = this.addEccAndInterleave(r);
      this.drawCodewords(l);
      if (a == -1) {
        var c = 1000000000;
        for (s = 0; s < 8; s++) {
          this.applyMask(s);
          this.drawFormatBits(s);
          var u = this.getPenaltyScore();
          if (u < c) {
            a = s;
            c = u;
          }
          this.applyMask(s);
        }
      }
      i(a >= 0 && a <= 7);
      this.mask = a;
      this.applyMask(a);
      this.drawFormatBits(a);
      this.isFunction = [];
    }
    t.encodeText = function (n, r) {
      var i = e.QrSegment.makeSegments(n);
      return t.encodeSegments(i, r);
    };
    t.encodeBinary = function (n, r) {
      var i = e.QrSegment.makeBytes(n);
      return t.encodeSegments([i], r);
    };
    t.encodeSegments = function (e, r, o = 1, s = 40, l = -1, c = true) {
      if (!(t.MIN_VERSION <= o) || !(o <= s) || !(s <= t.MAX_VERSION) || l < -1 || l > 7) {
        throw new RangeError("Invalid value");
      }
      var u;
      var p;
      for (u = o;; u++) {
        var d = t.getNumDataCodewords(u, r) * 8;
        var h = a.getTotalBits(e, u);
        if (h <= d) {
          p = h;
          break;
        }
        if (u >= s) {
          throw new RangeError("Data too long");
        }
      }
      for (var g = 0, f = [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH]; g < f.length; g++) {
        var m = f[g];
        if (c && p <= t.getNumDataCodewords(u, m) * 8) {
          r = m;
        }
      }
      var b = [];
      for (var x = 0, y = e; x < y.length; x++) {
        var v = y[x];
        n(v.mode.modeBits, 4, b);
        n(v.numChars, v.mode.numCharCountBits(u), b);
        for (var w = 0, A = v.getData(); w < A.length; w++) {
          var k = A[w];
          b.push(k);
        }
      }
      i(b.length == p);
      var S = t.getNumDataCodewords(u, r) * 8;
      i(b.length <= S);
      n(0, Math.min(4, S - b.length), b);
      n(0, (8 - b.length % 8) % 8, b);
      i(b.length % 8 == 0);
      for (var C = 236; b.length < S; C ^= 253) {
        n(C, 8, b);
      }
      for (var E = []; E.length * 8 < b.length;) {
        E.push(0);
      }
      b.forEach(function (e, t) {
        return E[t >>> 3] |= e << 7 - (t & 7);
      });
      return new t(u, r, E, l);
    };
    t.prototype.getModule = function (e, t) {
      return e >= 0 && e < this.size && t >= 0 && t < this.size && this.modules[t][e];
    };
    t.prototype.getModules = function () {
      return this.modules;
    };
    t.prototype.drawFunctionPatterns = function () {
      for (var e = 0; e < this.size; e++) {
        this.setFunctionModule(6, e, e % 2 == 0);
        this.setFunctionModule(e, 6, e % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      var t = this.getAlignmentPatternPositions();
      var n = t.length;
      for (e = 0; e < n; e++) {
        for (var r = 0; r < n; r++) {
          if ((e != 0 || r != 0) && (e != 0 || r != n - 1) && (e != n - 1 || r != 0)) {
            this.drawAlignmentPattern(t[e], t[r]);
          }
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    };
    t.prototype.drawFormatBits = function (e) {
      var t = this.errorCorrectionLevel.formatBits << 3 | e;
      var n = t;
      for (var a = 0; a < 10; a++) {
        n = n << 1 ^ (n >>> 9) * 1335;
      }
      var o = (t << 10 | n) ^ 21522;
      i(o >>> 15 == 0);
      for (a = 0; a <= 5; a++) {
        this.setFunctionModule(8, a, r(o, a));
      }
      this.setFunctionModule(8, 7, r(o, 6));
      this.setFunctionModule(8, 8, r(o, 7));
      this.setFunctionModule(7, 8, r(o, 8));
      for (a = 9; a < 15; a++) {
        this.setFunctionModule(14 - a, 8, r(o, a));
      }
      for (a = 0; a < 8; a++) {
        this.setFunctionModule(this.size - 1 - a, 8, r(o, a));
      }
      for (a = 8; a < 15; a++) {
        this.setFunctionModule(8, this.size - 15 + a, r(o, a));
      }
      this.setFunctionModule(8, this.size - 8, true);
    };
    t.prototype.drawVersion = function () {
      if (!(this.version < 7)) {
        var e = this.version;
        for (var t = 0; t < 12; t++) {
          e = e << 1 ^ (e >>> 11) * 7973;
        }
        var n = this.version << 12 | e;
        i(n >>> 18 == 0);
        for (t = 0; t < 18; t++) {
          var a = r(n, t);
          var o = this.size - 11 + t % 3;
          var s = Math.floor(t / 3);
          this.setFunctionModule(o, s, a);
          this.setFunctionModule(s, o, a);
        }
      }
    };
    t.prototype.drawFinderPattern = function (e, t) {
      for (var n = -4; n <= 4; n++) {
        for (var r = -4; r <= 4; r++) {
          var i = Math.max(Math.abs(r), Math.abs(n));
          var a = e + r;
          var o = t + n;
          if (a >= 0 && a < this.size && o >= 0 && o < this.size) {
            this.setFunctionModule(a, o, i != 2 && i != 4);
          }
        }
      }
    };
    t.prototype.drawAlignmentPattern = function (e, t) {
      for (var n = -2; n <= 2; n++) {
        for (var r = -2; r <= 2; r++) {
          this.setFunctionModule(e + r, t + n, Math.max(Math.abs(r), Math.abs(n)) != 1);
        }
      }
    };
    t.prototype.setFunctionModule = function (e, t, n) {
      this.modules[t][e] = n;
      this.isFunction[t][e] = true;
    };
    t.prototype.addEccAndInterleave = function (e) {
      var n = this.version;
      var r = this.errorCorrectionLevel;
      if (e.length != t.getNumDataCodewords(n, r)) {
        throw new RangeError("Invalid argument");
      }
      for (var a = t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n], o = t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n], s = Math.floor(t.getNumRawDataModules(n) / 8), l = a - s % a, c = Math.floor(s / a), u = [], p = t.reedSolomonComputeDivisor(o), d = 0, h = 0; d < a; d++) {
        var g = e.slice(h, h + c - o + (d < l ? 0 : 1));
        h += g.length;
        var f = t.reedSolomonComputeRemainder(g, p);
        if (d < l) {
          g.push(0);
        }
        u.push(g.concat(f));
      }
      var m = [];
      function b(e) {
        u.forEach(function (t, n) {
          if (e != c - o || n >= l) {
            m.push(t[e]);
          }
        });
      }
      for (d = 0; d < u[0].length; d++) {
        b(d);
      }
      i(m.length == s);
      return m;
    };
    t.prototype.drawCodewords = function (e) {
      if (e.length != Math.floor(t.getNumRawDataModules(this.version) / 8)) {
        throw new RangeError("Invalid argument");
      }
      var n = 0;
      for (var a = this.size - 1; a >= 1; a -= 2) {
        if (a == 6) {
          a = 5;
        }
        for (var o = 0; o < this.size; o++) {
          for (var s = 0; s < 2; s++) {
            var l = a - s;
            var c = (a + 1 & 2) == 0 ? this.size - 1 - o : o;
            if (!this.isFunction[c][l] && n < e.length * 8) {
              this.modules[c][l] = r(e[n >>> 3], 7 - (n & 7));
              n++;
            }
          }
        }
      }
      i(n == e.length * 8);
    };
    t.prototype.applyMask = function (e) {
      if (e < 0 || e > 7) {
        throw new RangeError("Mask value out of range");
      }
      for (var t = 0; t < this.size; t++) {
        for (var n = 0; n < this.size; n++) {
          var r = undefined;
          switch (e) {
            case 0:
              r = (n + t) % 2 == 0;
              break;
            case 1:
              r = t % 2 == 0;
              break;
            case 2:
              r = n % 3 == 0;
              break;
            case 3:
              r = (n + t) % 3 == 0;
              break;
            case 4:
              r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
              break;
            case 5:
              r = n * t % 2 + n * t % 3 == 0;
              break;
            case 6:
              r = (n * t % 2 + n * t % 3) % 2 == 0;
              break;
            case 7:
              r = ((n + t) % 2 + n * t % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[t][n] && r) {
            this.modules[t][n] = !this.modules[t][n];
          }
        }
      }
    };
    t.prototype.getPenaltyScore = function () {
      var e = 0;
      for (var n = 0; n < this.size; n++) {
        var r = false;
        var a = 0;
        var o = [0, 0, 0, 0, 0, 0, 0];
        for (var s = 0; s < this.size; s++) {
          if (this.modules[n][s] == r) {
            if (++a == 5) {
              e += t.PENALTY_N1;
            } else if (a > 5) {
              e++;
            }
          } else {
            this.finderPenaltyAddHistory(a, o);
            if (!r) {
              e += this.finderPenaltyCountPatterns(o) * t.PENALTY_N3;
            }
            r = this.modules[n][s];
            a = 1;
          }
        }
        e += this.finderPenaltyTerminateAndCount(r, a, o) * t.PENALTY_N3;
      }
      for (s = 0; s < this.size; s++) {
        r = false;
        var l = 0;
        o = [0, 0, 0, 0, 0, 0, 0];
        n = 0;
        for (; n < this.size; n++) {
          if (this.modules[n][s] == r) {
            if (++l == 5) {
              e += t.PENALTY_N1;
            } else if (l > 5) {
              e++;
            }
          } else {
            this.finderPenaltyAddHistory(l, o);
            if (!r) {
              e += this.finderPenaltyCountPatterns(o) * t.PENALTY_N3;
            }
            r = this.modules[n][s];
            l = 1;
          }
        }
        e += this.finderPenaltyTerminateAndCount(r, l, o) * t.PENALTY_N3;
      }
      for (n = 0; n < this.size - 1; n++) {
        for (s = 0; s < this.size - 1; s++) {
          var c = this.modules[n][s];
          if (c == this.modules[n][s + 1] && c == this.modules[n + 1][s] && c == this.modules[n + 1][s + 1]) {
            e += t.PENALTY_N2;
          }
        }
      }
      var u = 0;
      for (var p = 0, d = this.modules; p < d.length; p++) {
        u = d[p].reduce(function (e, t) {
          return e + (t ? 1 : 0);
        }, u);
      }
      var h = this.size * this.size;
      var g = Math.ceil(Math.abs(u * 20 - h * 10) / h) - 1;
      i(g >= 0 && g <= 9);
      i((e += g * t.PENALTY_N4) >= 0 && e <= 2568888);
      return e;
    };
    t.prototype.getAlignmentPatternPositions = function () {
      if (this.version == 1) {
        return [];
      }
      for (var e = Math.floor(this.version / 7) + 2, t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2, n = [6], r = this.size - 7; n.length < e; r -= t) {
        n.splice(1, 0, r);
      }
      return n;
    };
    t.getNumRawDataModules = function (e) {
      if (e < t.MIN_VERSION || e > t.MAX_VERSION) {
        throw new RangeError("Version number out of range");
      }
      var n = (e * 16 + 128) * e + 64;
      if (e >= 2) {
        var r = Math.floor(e / 7) + 2;
        n -= (r * 25 - 10) * r - 55;
        if (e >= 7) {
          n -= 36;
        }
      }
      i(n >= 208 && n <= 29648);
      return n;
    };
    t.getNumDataCodewords = function (e, n) {
      return Math.floor(t.getNumRawDataModules(e) / 8) - t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e] * t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e];
    };
    t.reedSolomonComputeDivisor = function (e) {
      if (e < 1 || e > 255) {
        throw new RangeError("Degree out of range");
      }
      var n = [];
      for (var r = 0; r < e - 1; r++) {
        n.push(0);
      }
      n.push(1);
      var i = 1;
      for (r = 0; r < e; r++) {
        for (var a = 0; a < n.length; a++) {
          n[a] = t.reedSolomonMultiply(n[a], i);
          if (a + 1 < n.length) {
            n[a] ^= n[a + 1];
          }
        }
        i = t.reedSolomonMultiply(i, 2);
      }
      return n;
    };
    t.reedSolomonComputeRemainder = function (e, n) {
      var r = n.map(function (e) {
        return 0;
      });
      var i = function (e) {
        var i = e ^ r.shift();
        r.push(0);
        n.forEach(function (e, n) {
          return r[n] ^= t.reedSolomonMultiply(e, i);
        });
      };
      for (var a = 0, o = e; a < o.length; a++) {
        i(o[a]);
      }
      return r;
    };
    t.reedSolomonMultiply = function (e, t) {
      if (e >>> 8 != 0 || t >>> 8 != 0) {
        throw new RangeError("Byte out of range");
      }
      var n = 0;
      for (var r = 7; r >= 0; r--) {
        n = n << 1 ^ (n >>> 7) * 285;
        n ^= (t >>> r & 1) * e;
      }
      i(n >>> 8 == 0);
      return n;
    };
    t.prototype.finderPenaltyCountPatterns = function (e) {
      var t = e[1];
      i(t <= this.size * 3);
      var n = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t;
      return (n && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (n && e[6] >= t * 4 && e[0] >= t ? 1 : 0);
    };
    t.prototype.finderPenaltyTerminateAndCount = function (e, t, n) {
      if (e) {
        this.finderPenaltyAddHistory(t, n);
        t = 0;
      }
      t += this.size;
      this.finderPenaltyAddHistory(t, n);
      return this.finderPenaltyCountPatterns(n);
    };
    t.prototype.finderPenaltyAddHistory = function (e, t) {
      if (t[0] == 0) {
        e += this.size;
      }
      t.pop();
      t.unshift(e);
    };
    t.MIN_VERSION = 1;
    t.MAX_VERSION = 40;
    t.PENALTY_N1 = 3;
    t.PENALTY_N2 = 3;
    t.PENALTY_N3 = 40;
    t.PENALTY_N4 = 10;
    t.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]];
    t.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]];
    return t;
  }();
  function n(e, t, n) {
    if (t < 0 || t > 31 || e >>> t != 0) {
      throw new RangeError("Value out of range");
    }
    for (var r = t - 1; r >= 0; r--) {
      n.push(e >>> r & 1);
    }
  }
  function r(e, t) {
    return (e >>> t & 1) != 0;
  }
  function i(e) {
    if (!e) {
      throw new Error("Assertion error");
    }
  }
  e.QrCode = t;
  var a = function () {
    function e(e, t, n) {
      this.mode = e;
      this.numChars = t;
      this.bitData = n;
      if (t < 0) {
        throw new RangeError("Invalid argument");
      }
      this.bitData = n.slice();
    }
    e.makeBytes = function (t) {
      var r = [];
      for (var i = 0, a = t; i < a.length; i++) {
        n(a[i], 8, r);
      }
      return new e(e.Mode.BYTE, t.length, r);
    };
    e.makeNumeric = function (t) {
      if (!e.isNumeric(t)) {
        throw new RangeError("String contains non-numeric characters");
      }
      var r = [];
      for (var i = 0; i < t.length;) {
        var a = Math.min(t.length - i, 3);
        n(parseInt(t.substring(i, i + a), 10), a * 3 + 1, r);
        i += a;
      }
      return new e(e.Mode.NUMERIC, t.length, r);
    };
    e.makeAlphanumeric = function (t) {
      if (!e.isAlphanumeric(t)) {
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      }
      var r;
      var i = [];
      for (r = 0; r + 2 <= t.length; r += 2) {
        var a = e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)) * 45;
        n(a += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r + 1)), 11, i);
      }
      if (r < t.length) {
        n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)), 6, i);
      }
      return new e(e.Mode.ALPHANUMERIC, t.length, i);
    };
    e.makeSegments = function (t) {
      if (t == "") {
        return [];
      } else if (e.isNumeric(t)) {
        return [e.makeNumeric(t)];
      } else if (e.isAlphanumeric(t)) {
        return [e.makeAlphanumeric(t)];
      } else {
        return [e.makeBytes(e.toUtf8ByteArray(t))];
      }
    };
    e.makeEci = function (t) {
      var r = [];
      if (t < 0) {
        throw new RangeError("ECI assignment value out of range");
      }
      if (t < 128) {
        n(t, 8, r);
      } else if (t < 16384) {
        n(2, 2, r);
        n(t, 14, r);
      } else {
        if (!(t < 1000000)) {
          throw new RangeError("ECI assignment value out of range");
        }
        n(6, 3, r);
        n(t, 21, r);
      }
      return new e(e.Mode.ECI, 0, r);
    };
    e.isNumeric = function (t) {
      return e.NUMERIC_REGEX.test(t);
    };
    e.isAlphanumeric = function (t) {
      return e.ALPHANUMERIC_REGEX.test(t);
    };
    e.prototype.getData = function () {
      return this.bitData.slice();
    };
    e.getTotalBits = function (e, t) {
      var n = 0;
      for (var r = 0, i = e; r < i.length; r++) {
        var a = i[r];
        var o = a.mode.numCharCountBits(t);
        if (a.numChars >= 1 << o) {
          return Infinity;
        }
        n += 4 + o + a.bitData.length;
      }
      return n;
    };
    e.toUtf8ByteArray = function (e) {
      e = encodeURI(e);
      var t = [];
      for (var n = 0; n < e.length; n++) {
        if (e.charAt(n) != "%") {
          t.push(e.charCodeAt(n));
        } else {
          t.push(parseInt(e.substring(n + 1, n + 3), 16));
          n += 2;
        }
      }
      return t;
    };
    e.NUMERIC_REGEX = /^[0-9]*$/;
    e.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    e.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    return e;
  }();
  e.QrSegment = a;
})(Hu ||= {});
(function (e) {
  var t;
  var n;
  t = e.QrCode ||= {};
  n = function () {
    function e(e, t) {
      this.ordinal = e;
      this.formatBits = t;
    }
    e.LOW = new e(0, 1);
    e.MEDIUM = new e(1, 0);
    e.QUARTILE = new e(2, 3);
    e.HIGH = new e(3, 2);
    return e;
  }();
  t.Ecc = n;
})(Hu ||= {});
(function (e) {
  var t;
  var n;
  t = e.QrSegment ||= {};
  n = function () {
    function e(e, t) {
      this.modeBits = e;
      this.numBitsCharCount = t;
    }
    e.prototype.numCharCountBits = function (e) {
      return this.numBitsCharCount[Math.floor((e + 7) / 17)];
    };
    e.NUMERIC = new e(1, [10, 12, 14]);
    e.ALPHANUMERIC = new e(2, [9, 11, 13]);
    e.BYTE = new e(4, [8, 16, 16]);
    e.KANJI = new e(8, [8, 10, 12]);
    e.ECI = new e(7, [0, 0, 0]);
    return e;
  }();
  t.Mode = n;
})(Hu ||= {});
var Yu = Hu;
var Zu = {
  L: Yu.QrCode.Ecc.LOW,
  M: Yu.QrCode.Ecc.MEDIUM,
  Q: Yu.QrCode.Ecc.QUARTILE,
  H: Yu.QrCode.Ecc.HIGH
};
var Wu = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
}();
function Qu(e) {
  return e in Zu;
}
function Ku(e, t = 0) {
  var n = [];
  e.forEach(function (e, r) {
    var i = null;
    e.forEach(function (a, o) {
      if (!a && i !== null) {
        n.push(`M${i + t} ${r + t}h${o - i}v1H${i + t}z`);
        i = null;
        return;
      }
      if (o !== e.length - 1) {
        if (a && i === null) {
          i = o;
        }
      } else {
        if (!a) {
          return;
        }
        if (i === null) {
          n.push(`M${o + t},${r + t} h1v1H${o + t}z`);
        } else {
          n.push(`M${i + t},${r + t} h${o + 1 - i}v1H${i + t}z`);
        }
      }
    });
  });
  return n.join("");
}
var Xu = {
  value: {
    type: String,
    required: true,
    default: ""
  },
  size: {
    type: Number,
    default: 100
  },
  level: {
    type: String,
    default: "H",
    validator: function (e) {
      return Qu(e);
    }
  },
  background: {
    type: String,
    default: "#fff"
  },
  foreground: {
    type: String,
    default: "#000"
  },
  margin: {
    type: Number,
    required: false,
    default: 0
  }
};
var Ju = Gu(Gu({}, Xu), {
  renderAs: {
    type: String,
    required: false,
    default: "canvas",
    validator: function (e) {
      return ["canvas", "svg"].indexOf(e) > -1;
    }
  }
});
var $u = (0, s.aZ)({
  name: "QRCodeSvg",
  props: Xu,
  setup: function (e) {
    var t = (0, c.iH)(0);
    var n = (0, c.iH)("");
    function r() {
      var r = e.value;
      var i = e.level;
      var a = e.margin;
      var o = Yu.QrCode.encodeText(r, Zu[i]).getModules();
      t.value = o.length + a * 2;
      n.value = Ku(o, a);
    }
    r();
    (0, s.ic)(r);
    return function () {
      return (0, s.h)("svg", {
        width: e.size,
        height: e.size,
        "shape-rendering": "crispEdges",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${t.value} ${t.value}`
      }, [(0, s.h)("path", {
        fill: e.background,
        d: `M0,0 h${t.value}v${t.value}H0z`
      }), (0, s.h)("path", {
        fill: e.foreground,
        d: n.value
      })]);
    };
  }
});
var ep = (0, s.aZ)({
  name: "QRCodeCanvas",
  props: Xu,
  setup: function (e) {
    var t = (0, c.iH)(null);
    function n() {
      var n = e.value;
      var r = e.level;
      var i = e.size;
      var a = e.margin;
      var o = e.background;
      var s = e.foreground;
      var l = t.value;
      if (l) {
        var c = l.getContext("2d");
        if (c) {
          var u = Yu.QrCode.encodeText(n, Zu[r]).getModules();
          var p = u.length + a * 2;
          var d = window.devicePixelRatio || 1;
          var h = i / p * d;
          l.height = l.width = i * d;
          c.scale(h, h);
          c.fillStyle = o;
          c.fillRect(0, 0, p, p);
          c.fillStyle = s;
          if (Wu) {
            c.fill(new Path2D(Ku(u, a)));
          } else {
            u.forEach(function (e, t) {
              e.forEach(function (e, n) {
                if (e) {
                  c.fillRect(n + a, t + a, 1, 1);
                }
              });
            });
          }
        }
      }
    }
    (0, s.bv)(n);
    (0, s.ic)(n);
    return function () {
      return (0, s.h)("canvas", {
        ref: t,
        style: {
          width: `${e.size}px`,
          height: `${e.size}px`
        }
      });
    };
  }
});
var tp = (0, s.aZ)({
  name: "Qrcode",
  render: function () {
    var e = this.$props;
    var t = e.renderAs;
    var n = e.value;
    var r = e.size;
    var i = e.margin;
    var a = e.level;
    var o = e.background;
    var l = e.foreground;
    var c = r >>> 0;
    var u = i >>> 0;
    var p = Qu(a) ? a : "H";
    return (0, s.h)(t === "svg" ? $u : ep, {
      value: n,
      size: c,
      margin: u,
      level: p,
      background: o,
      foreground: l
    });
  },
  props: Ju
});
import * as np from /*webcrack:missing*/"./8699.js";
import * as rp from /*webcrack:missing*/"./1507.js";
import * as ip from /*webcrack:missing*/"./6356.js";
const ap = e => {
  (0, s.dD)("data-v-ef116f24");
  e = e();
  (0, s.Cn)();
  return e;
};
const op = {
  class: "flex h-full w-full flex-col items-center justify-center bg-[#00062F]"
};
const sp = {
  key: 0,
  class: "insert-shadow mt-[34px] flex h-[520px] w-[416px] flex-col items-center rounded-[12px] bg-[#101643] p-[20px]"
};
const lp = ap(() => (0, s._)("h2", {
  class: "text-[20px] font-medium leading-[28px] text-color-white"
}, "订单信息", -1));
const cp = {
  class: "pt-[20px] text-[16px] leading-[22px] text-[#C8C8CC]"
};
const up = ap(() => (0, s._)("span", {
  class: "font-normal"
}, "购买账号", -1));
const pp = {
  class: "ml-[12px] font-medium"
};
const dp = {
  class: "relative flex items-baseline justify-center pt-[18px]"
};
const hp = {
  class: "text-[32px] font-semibold leading-[32px] text-color-white"
};
const gp = {
  class: "absolute left-full bottom-0 ml-[8px] text-[14px] font-normal text-color-white text-opacity-60 line-through"
};
const fp = {
  class: "mt-[12px] text-[16px] font-medium leading-[22px] text-color-white"
};
const mp = {
  class: "mt-[4px] text-[14px] font-normal text-color-white text-opacity-60"
};
const bp = {
  key: 0,
  class: "relative mt-[28px] flex h-[120px] w-[120px] items-center justify-center"
};
const xp = [ap(() => (0, s._)("img", {
  src: Vu,
  draggable: "false",
  class: "h-full",
  alt: ""
}, null, -1))];
const yp = {
  key: 1,
  class: "relative mt-[28px] flex h-[120px] w-[120px] items-center justify-center bg-color-white"
};
const vp = ["src"];
const wp = {
  class: "pt-[7px] font-ali-55 text-[13px] leading-[18px] text-color-white text-opacity-60"
};
const Ap = {
  key: 0
};
const kp = {
  key: 1
};
const Sp = {
  class: "pt-[18px] text-[13px] font-normal leading-[18px] text-[#C8C8CC]"
};
const Cp = {
  key: 0
};
const Ep = {
  key: 1
};
const Ip = ap(() => (0, s._)("span", null, "付款完成后5秒内生效，或手动", -1));
const Tp = ap(() => (0, s._)("span", null, "立马生效", -1));
const Dp = {
  class: "flex w-full gap-[16px] pt-[20px]"
};
const _p = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const Mp = {
  key: 1
};
const Fp = ap(() => (0, s._)("p", {
  class: "mt-[16px] text-[13px] font-normal leading-[18px] text-[#FF4D4F]"
}, " 本商品为虚拟商品，不支持退货，有问题可及时联系我们 ", -1));
const zp = (0, s.aZ)({
  __name: "chatai-order-pay",
  setup(e) {
    const {
      setPanelShowType: t,
      paymentOrderData: n,
      panelShowType: r,
      refreshOrder: i,
      localCurrentTime: a,
      checkPayOrderIds: o,
      payOrderIds: u,
      getChatModelList: p,
      modifyPlanForFree: d,
      isFreeOrder: h,
      getVipDetail: g,
      clearOrderIds: f,
      backToPlanList: m
    } = (0, X.useModalData)();
    const b = (0, c.iH)(false);
    const x = (0, c.iH)(false);
    const y = (0, q.useUserStore)();
    const v = (0, c.iH)(false);
    const w = (0, s.Fl)(() => y.user.email);
    let A;
    let k = null;
    function S() {
      k = window.setTimeout(() => {
        const e = Date.now();
        if (n.value.expireDuration + a.value - e < 60000) {
          b.value = true;
          if (k) {
            clearTimeout(k);
          }
          (function () {
            const e = setTimeout(() => {
              if (A) {
                A.unsubscribe();
              }
              clearTimeout(e);
            }, 10000);
          })();
          return;
        }
        S();
      }, 1000);
    }
    async function C() {
      if (!x.value) {
        try {
          x.value = true;
          if (k) {
            clearTimeout(k);
          }
          await i();
          x.value = false;
          b.value = false;
          S();
        } catch (e) {
          x.value = false;
        }
      }
    }
    function E() {
      m();
      p();
    }
    async function I() {
      try {
        v.value = true;
        await d();
        v.value = false;
        M();
      } catch (e) {}
    }
    (0, s.bv)(() => {
      T();
      if (!h) {
        S();
      }
    });
    (0, s.YP)(() => r.value, (e, t) => {
      if (e === "chatai-pay") {
        if (k) {
          clearTimeout(k);
        }
        S();
        if (t === "chatai-change-plan" || t === "chat-expense") {
          T();
        }
      } else {
        D();
      }
    });
    const T = () => {
      if (!A || !!A.closed) {
        A = (0, np.H)(5000).pipe((0, rp.z)(() => o([...u.value].reverse())), (0, ip.X)({
          delay: () => (0, np.H)(3000)
        })).subscribe(() => {
          M();
        });
      }
    };
    const D = () => {
      if (k) {
        clearTimeout(k);
      }
      if (A) {
        A.unsubscribe();
      }
    };
    const _ = (0, Cs.Z)(async () => {
      try {
        if (await o([...u.value].reverse())) {
          M();
        }
      } catch (e) {}
    }, 500, {
      leading: true,
      trailing: false
    });
    function M() {
      setTimeout(() => {
        y.getProfile().then(() => {
          (0, q.useUserStore)().tiggerTimer = Date.now();
        });
      }, 2000);
      f();
      D();
      t("chatai-paid");
      p();
      g();
    }
    return (e, t) => {
      (0, s.wg)();
      return (0, s.iD)("div", op, [(0, c.SU)(n) ? ((0, s.wg)(), (0, s.iD)("div", sp, [lp, (0, s._)("div", cp, [up, (0, s._)("span", pp, (0, l.toDisplayString)((0, c.SU)(w)), 1)]), (0, s._)("div", {
        class: "card-shadow mt-[12px] flex h-[128px] w-[288px] flex-col items-center rounded-[8px] bg-[#141F62] bg-top bg-no-repeat",
        style: (0, l.normalizeStyle)({
          backgroundImage: `url(${(0, c.SU)(n).newPlan.headImageV2})`,
          backgroundSize: "100%"
        })
      }, [(0, s._)("div", dp, [(0, s._)("span", hp, " ¥" + (0, l.toDisplayString)((0, c.SU)(n).newPlan.payAmount), 1), (0, s._)("span", gp, " ¥" + (0, l.toDisplayString)((0, c.SU)(n).newPlan.price), 1)]), (0, s._)("h3", fp, (0, l.toDisplayString)((0, c.SU)(n).newPlan.name), 1), (0, s._)("p", mp, " 有效期至：" + (0, l.toDisplayString)((r = (0, c.SU)(n).newPlan.vipEndTime, ci(r).format("YYYY/MM/DD"))), 1)], 4), (0, c.SU)(h) ? ((0, s.wg)(), (0, s.iD)("div", bp, xp)) : (0, s.kq)("", true), (0, c.SU)(h) ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.iD)("div", yp, [b.value ? ((0, s.wg)(), (0, s.iD)("div", {
        key: 0,
        class: "absolute inset-0 flex cursor-pointer items-center justify-center bg-color-black bg-opacity-80 text-color-white text-opacity-80 backdrop-blur-[2px] transition-colors hover:text-opacity-100",
        onClick: C
      }, [(0, s._)("i", {
        class: (0, l.normalizeClass)(["iconfont icon-reduction_icon text-[20px]", [x.value ? "animate-[spin_1.2s_linear_infinite] text-color-white" : ""]])
      }, null, 2)])) : (0, s.kq)("", true), (0, c.SU)(n).qrcodeType === "iframe" ? ((0, s.wg)(), (0, s.iD)("iframe", {
        key: 1,
        scrolling: "no",
        width: "104",
        height: "104",
        src: (0, c.SU)(n).pay_url
      }, null, 8, vp)) : (0, c.SU)(n).qrcodeType === "string" ? ((0, s.wg)(), (0, s.j4)(tp, {
        key: 2,
        value: (0, c.SU)(n).pay_url,
        size: 104,
        level: "L"
      }, null, 8, ["value"])) : (0, s.kq)("", true)])), (0, s._)("div", wp, [(0, c.SU)(h) ? ((0, s.wg)(), (0, s.iD)("p", Ap, "当前订单无需付款")) : ((0, s.wg)(), (0, s.iD)("p", kp, (0, l.toDisplayString)(b.value ? "二维码已过期" : "微信扫一扫"), 1))]), (0, s._)("div", Sp, [(0, c.SU)(h) ? ((0, s.wg)(), (0, s.iD)("p", Cp, "变更操作完成后无法撤销，请确认")) : ((0, s.wg)(), (0, s.iD)("p", Ep, [Ip, (0, s._)("span", {
        class: "cursor-pointer text-color-white underline underline-offset-1",
        onClick: t[0] ||= function () {
          return (0, c.SU)(_) && (0, c.SU)(_)(...arguments);
        }
      }, "刷新"), Tp]))]), (0, s._)("div", Dp, [(0, s._)("button", {
        class: "insert-shadow h-[40px] w-full rounded-[8px] bg-[#233189] text-[16px] font-medium text-color-white duration-150",
        onClick: E
      }, " 返回 "), (0, c.SU)(h) ? ((0, s.wg)(), (0, s.iD)("button", {
        key: 0,
        class: (0, l.normalizeClass)(["btn-shadow flex h-[40px] w-full items-center justify-center rounded-[8px] bg-color-blue text-[16px] font-medium leading-[20px] text-color-white duration-150", [v.value ? "pointer-events-none" : "hover:bg-[rgb(96,165,250)] active:bg-[rgb(37,99,235)]"]]),
        onClick: I
      }, [v.value ? ((0, s.wg)(), (0, s.iD)("i", _p)) : ((0, s.wg)(), (0, s.iD)("span", Mp, "确认变更"))], 2)) : (0, s.kq)("", true)])])) : (0, s.kq)("", true), Fp]);
      var r;
    };
  }
});
const Rp = (0, Q.Z)(zp, [["__scopeId", "data-v-ef116f24"]]);
import * as Bp from "./8455.js";
import * as Np from "./4575.js";
const Lp = {
  class: "flex h-[48px] w-full flex-row justify-between rounded-[12px] border border-color-white border-opacity-[0.06] bg-[#1C255E] p-[8px]"
};
const Pp = {
  class: "flex flex-row items-center"
};
const Op = {
  class: "flex h-full items-center rounded-[8px] bg-color-white pl-[8px] pr-[12px]"
};
const qp = ["src"];
const Up = {
  class: "pl-[16px] text-[14px] text-color-white"
};
const jp = {
  class: "font-ali-65 font-semibold"
};
const Hp = {
  class: "ml-[4px] font-ali-55 opacity-60"
};
const Vp = {
  class: "flex items-center"
};
const Gp = [(0, s._)("img", {
  src: Bp,
  class: "h-[12px] w-[12px]",
  alt: ""
}, null, -1)];
const Yp = [(0, s._)("img", {
  src: Np,
  class: "h-[12px] w-[12px]",
  alt: ""
}, null, -1)];
const Zp = (0, s.aZ)({
  __name: "chat-extpack-item",
  props: {
    data: null
  },
  setup(e) {
    const t = e;
    const n = (0, te.useChatGptStore)();
    const r = (0, c.iH)(0);
    function a(e) {
      const {
        value: n
      } = e.target;
      const i = Number(n);
      if (i < 0) {
        r.value = 0;
      } else if (i > t.data.limitBuyCount) {
        r.value = t.data.limitBuyCount;
      } else {
        r.value = Number(n.replace(/\D/g, "")) || 0;
      }
    }
    function o(e) {
      if ((e !== -1 || r.value !== 0) && (e !== 1 || r.value !== t.data.limitBuyCount)) {
        r.value += e;
      }
    }
    (0, s.YP)(() => r.value, e => {
      n.changeExtPlans(t.data.id, e);
    });
    (0, s.YP)(() => t.data.count, e => {
      r.value = e;
    });
    return (e, n) => {
      (0, s.wg)();
      return (0, s.iD)("div", Lp, [(0, s._)("div", Pp, [(0, s._)("div", Op, [(0, s._)("img", {
        src: t.data.icon,
        draggable: "false",
        class: "h-[16px] w-[16px]",
        alt: ""
      }, null, 8, qp), (0, s._)("span", {
        style: (0, l.normalizeStyle)({
          color: t.data.textColor
        }),
        class: "ml-[4px] font-ali-65 text-[12px] leading-[16px]"
      }, (0, l.toDisplayString)(t.data.planName), 5)]), (0, s._)("div", Up, [(0, s._)("span", jp, "¥" + (0, l.toDisplayString)(t.data.price), 1), (0, s._)("span", Hp, "/" + (0, l.toDisplayString)(t.data.limitCount) + "条", 1)])]), (0, s._)("div", Vp, [(0, s._)("button", {
        class: "expand-click flex h-[16px] w-[16px] items-center justify-center rounded-[2px] transition-colors",
        onClick: n[0] ||= e => o(-1)
      }, Gp), (0, s.wy)((0, s._)("input", {
        "onUpdate:modelValue": n[1] ||= e => r.value = e,
        class: "mx-[4px] h-[20px] w-[32px] appearance-none rounded-[4px] border border-color-white border-opacity-10 bg-[#233189] text-center font-ali-55 text-[14px] text-color-white",
        type: "number",
        step: 1,
        onInput: a
      }, null, 544), [[i.vModelText, r.value]]), (0, s._)("button", {
        class: "expand-click flex h-[16px] w-[16px] items-center justify-center rounded-[2px] transition-colors",
        onClick: n[2] ||= e => o(1)
      }, Yp)])]);
    };
  }
});
const Wp = e => {
  (0, s.dD)("data-v-ac5421c2");
  e = e();
  (0, s.Cn)();
  return e;
};
const Qp = {
  class: "relative z-0 flex h-full w-full items-center justify-center bg-[#00062F]"
};
const Kp = {
  class: "relative z-0 flex h-[520px] w-[416px] flex-col rounded-[12px] border border-color-white border-opacity-10 bg-[#101643]"
};
const Xp = {
  class: "flex-1 px-[28px] py-[20px]"
};
const Jp = Wp(() => (0, s._)("h2", {
  class: "font-ali-65 text-[20px] leading-[28px] text-color-white"
}, "购买叠加包", -1));
const $p = {
  class: "mt-[20px] font-ali-55 text-[16px] text-[#C8C8CC]"
};
const ed = Wp(() => (0, s._)("span", null, "购买账号", -1));
const td = {
  class: "ml-[13px] font-medium"
};
const nd = Wp(() => (0, s._)("div", {
  class: "my-[20px] h-[1px] w-full bg-color-white bg-opacity-10"
}, null, -1));
const rd = {
  class: "flex flex-col gap-[8px]"
};
const id = {
  class: "pt-[20px] font-ali-55 text-[12px] leading-[16px] text-color-white text-opacity-60"
};
const ad = {
  class: "p-[20px]"
};
const od = {
  class: "flex w-full items-baseline justify-end text-color-white"
};
const sd = Wp(() => (0, s._)("span", {
  class: "font-ali-55 text-[14px]"
}, "合计：", -1));
const ld = {
  class: "ml-[4px] text-[32px] font-semibold"
};
const cd = {
  class: "flex justify-between pt-[20px] font-ali-65 text-[16px]"
};
const ud = {
  key: 0,
  class: "iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[20px]"
};
const pd = {
  key: 1
};
const dd = Wp(() => (0, s._)("div", {
  class: "absolute bottom-[-34px] left-0 right-0"
}, [(0, s._)("p", {
  class: "text-center font-ali-55 text-[13px] text-[#FF4D4F]"
}, " 本商品为虚拟商品，不支持退货，有问题可及时联系我们 ")], -1));
const hd = {
  class: "absolute inset-0 z-10 flex items-center justify-center bg-color-black bg-opacity-60"
};
const gd = {
  class: "pay-shadow h-[325px] w-[300px] rounded-[12px] bg-[#F8F8F8]"
};
const fd = Wp(() => (0, s._)("div", {
  class: "border-b border-color-black border-opacity-5 pt-[9px] pb-[13px] text-center font-ali-65 text-[16px] leading-[22px] text-[#1C1C1E]"
}, " 订单支付 ", -1));
const md = {
  class: "flex flex-col items-center"
};
const bd = {
  class: "flex justify-center pt-[19px] font-ali-65 text-[24px] leading-[32px] text-[#FF4D4F]"
};
const xd = {
  class: "relative mt-[8px] flex h-[120px] w-[120px] items-center justify-center bg-color-white"
};
const yd = {
  class: "pt-[7px] font-ali-55 text-[13px] leading-[18px] text-[#8E8E94]"
};
const vd = (0, s.aZ)({
  __name: "chatai-extra-pack",
  setup(e) {
    const t = (0, q.useUserStore)();
    const n = (0, te.useChatGptStore)();
    const {
      extraTips: r,
      extPlans: i,
      localCurrentTime: o,
      panelShowType: u
    } = (0, T.Jk)(n);
    const p = (0, c.iH)(false);
    const d = (0, c.iH)(false);
    const h = (0, c.iH)(false);
    const g = (0, c.iH)(false);
    let f = null;
    (0, s.bv)(() => {
      n.reqExtraPack();
    });
    (0, s.YP)(() => u.value, e => {
      if (e === "chatai-extrapack") {
        n.reqExtraPack();
      }
    }, {
      immediate: false
    });
    const m = (0, c.iH)({
      expireDuration: 0,
      pay_url: "",
      payAmount: 0,
      orderId: ""
    });
    const b = (0, s.Fl)(() => i.value.reduce((e, t) => e + t.price * t.count, 0));
    function x() {
      n.setPanelShowType("chatai-setting");
    }
    let y;
    const v = () => {
      if (!y || !!y.closed) {
        y = (0, np.H)(5000).pipe((0, rp.z)(() => n.checkExtPackOrder(m.value.orderId)), (0, ip.X)({
          delay: () => (0, np.H)(5000)
        })).subscribe(() => {
          h.value = false;
          if (f) {
            clearTimeout(f);
          }
          w();
          n.getUserVipDetail();
          d.value = false;
          n.setPanelShowType("chatai-setting");
          n.reqExtraPackOrder();
          n.getChatModels();
        });
      }
    };
    function w() {
      if (y) {
        y.unsubscribe();
      }
    }
    function A() {
      f = window.setTimeout(() => {
        const e = Date.now();
        if (m.value.expireDuration + o.value - e < 60000) {
          h.value = true;
          if (f) {
            clearTimeout(f);
          }
          w();
          return;
        }
        A();
      }, 1000);
    }
    async function k() {
      if (b.value === 0) {
        re.R.warn({
          message: "请选择叠加包"
        });
        return;
      }
      p.value = true;
      const e = i.value.filter(e => e.count > 0).map(e => ({
        planId: e.planId,
        count: e.count
      }));
      if (e.length) {
        try {
          const t = await n.createExtPackOrder(e);
          m.value = t;
          d.value = true;
          A();
          v();
        } catch (e) {
          re.R.fail({
            message: "创建叠加包订单失败！"
          });
        }
        p.value = false;
      } else {
        re.R.warn({
          message: "请选择叠加包"
        });
      }
    }
    function S() {
      d.value = false;
      h.value = false;
      if (f) {
        clearTimeout(f);
      }
      w();
    }
    async function C() {
      if (g.value) {
        return;
      }
      g.value = true;
      if (f) {
        clearTimeout(f);
      }
      if (y) {
        y.unsubscribe();
      }
      const e = i.value.filter(e => e.count > 0).map(e => ({
        planId: e.planId,
        count: e.count
      }));
      const t = await n.createExtPackOrder(e);
      m.value = t;
      g.value = false;
      h.value = false;
      A();
      v();
    }
    return (e, n) => {
      const o = a.Z;
      (0, s.wg)();
      return (0, s.iD)("div", Qp, [(0, s._)("div", Kp, [(0, s._)("div", Xp, [Jp, (0, s._)("p", $p, [ed, (0, s._)("span", td, (0, l.toDisplayString)((0, c.SU)(t).user.email), 1)]), nd, (0, s._)("div", rd, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(i), e => {
        (0, s.wg)();
        return (0, s.j4)(Zp, {
          key: e.id,
          data: e,
          class: (0, l.normalizeClass)([e.limitBuyCount <= 0 ? "pointer-events-none opacity-40" : ""])
        }, null, 8, ["data", "class"]);
      }), 128))]), (0, s._)("div", id, [((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)((0, c.SU)(r), (e, t) => {
        (0, s.wg)();
        return (0, s.iD)("p", {
          key: t,
          class: (0, l.normalizeClass)([t === 0 ? "mb-[12px]" : "mb-[8px]"])
        }, (0, l.toDisplayString)(e), 3);
      }), 128))])]), (0, s._)("div", ad, [(0, s._)("div", od, [sd, (0, s._)("span", ld, "¥" + (0, l.toDisplayString)((0, c.SU)(b)), 1)]), (0, s._)("div", cd, [(0, s._)("button", {
        class: "h-[40px] w-[184px] rounded-[8px] border border-color-white border-opacity-10 bg-[#233189] text-[#C8C8CC]",
        onClick: x
      }, " 返回 "), (0, s._)("button", {
        class: (0, l.normalizeClass)(["btn-bg h-[40px] w-[184px] rounded-[8px] border border-color-white border-opacity-10 text-color-white", [p.value ? "pointer-events-none" : ""]]),
        onClick: k
      }, [p.value ? ((0, s.wg)(), (0, s.iD)("i", ud)) : ((0, s.wg)(), (0, s.iD)("span", pd, "购买"))], 2)])]), dd]), (0, s.Wm)(o, {
        show: d.value,
        ani: "fade"
      }, {
        default: (0, s.w5)(() => [(0, s._)("div", hd, [(0, s._)("div", gd, [fd, (0, s._)("div", md, [(0, s._)("div", bd, " ¥" + (0, l.toDisplayString)(m.value.payAmount), 1), (0, s._)("div", xd, [h.value ? ((0, s.wg)(), (0, s.iD)("div", {
          key: 0,
          class: "absolute inset-0 flex cursor-pointer items-center justify-center bg-color-black bg-opacity-80 text-color-white text-opacity-80 backdrop-blur-[2px] transition-colors hover:text-opacity-100",
          onClick: C
        }, [(0, s._)("i", {
          class: (0, l.normalizeClass)(["iconfont icon-reduction_icon text-[20px]", [g.value ? "animate-[spin_1.2s_linear_infinite] text-color-white" : ""]])
        }, null, 2)])) : (0, s.kq)("", true), (0, s.Wm)(tp, {
          value: m.value.pay_url,
          size: 104,
          level: "L"
        }, null, 8, ["value"])]), (0, s._)("p", yd, (0, l.toDisplayString)(h.value ? "二维码已过期" : "微信扫码支付"), 1)]), (0, s._)("div", {
          class: "flex justify-center p-[24px]"
        }, [(0, s._)("button", {
          class: "h-[36px] w-full rounded-[8px] bg-color-white font-ali-65 text-[16px] text-[#3A3A3C]",
          onClick: S
        }, " 取消 ")])])])]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});
const wd = (0, Q.Z)(vd, [["__scopeId", "data-v-ac5421c2"]]);
const Ad = {
  class: "h-full w-full"
};
const kd = (0, s.aZ)({
  __name: "chatgpt-ext-content",
  props: {
    type: null,
    panelShowType: null
  },
  setup(e) {
    const t = e;
    (0, s.bv)(() => {
      he.sendEvent("chatai-panel-type", t.type);
    });
    return (e, n) => {
      const r = a.Z;
      (0, s.wg)();
      return (0, s.iD)("div", Ad, [(0, s.Wm)(r, {
        class: "h-full w-full",
        show: !t.panelShowType && t.type === "chatai"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(oo)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: !t.panelShowType && t.type === "chatgpt-iframe"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(Vo)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chat-expense" || t.type === "chat-expense"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(qs)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chatai-subscribe"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(hl)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chatai-setting"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(Vc)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chatai-paid"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(iu)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chatai-change-plan"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(ju)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chatai-pay"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(Rp)]),
        _: 1
      }, 8, ["show"]), (0, s.Wm)(r, {
        class: "h-full w-full",
        show: t.panelShowType === "chatai-extrapack"
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(wd)]),
        _: 1
      }, 8, ["show"])]);
    };
  }
});
import * as Sd from /*webcrack:missing*/"./3056.js";
import * as Cd from /*webcrack:missing*/"./6626.js";
import * as Ed from /*webcrack:missing*/"./4040.js";
import * as Id from /*webcrack:missing*/"./2862.js";
import * as Td from /*webcrack:missing*/"./6559.js";
import * as Dd from /*webcrack:missing*/"./2728.js";
var _d = Array.isArray;
function Md(e) {
  return (0, Dd.U)(function (t) {
    return function (e, t) {
      if (_d(t)) {
        return e.apply(undefined, (0, Sd.ev)([], (0, Sd.CR)(t)));
      } else {
        return e(t);
      }
    }(e, t);
  });
}
var Fd = ["addListener", "removeListener"];
var zd = ["addEventListener", "removeEventListener"];
var Rd = ["on", "off"];
function Bd(e, t, n, r) {
  if ((0, Td.m)(n)) {
    r = n;
    n = undefined;
  }
  if (r) {
    return Bd(e, t, n).pipe(Md(r));
  }
  var i = (0, Sd.CR)(function (e) {
    return (0, Td.m)(e.addEventListener) && (0, Td.m)(e.removeEventListener);
  }(e) ? zd.map(function (r) {
    return function (i) {
      return e[r](t, i, n);
    };
  }) : function (e) {
    return (0, Td.m)(e.addListener) && (0, Td.m)(e.removeListener);
  }(e) ? Fd.map(Nd(e, t)) : function (e) {
    return (0, Td.m)(e.on) && (0, Td.m)(e.off);
  }(e) ? Rd.map(Nd(e, t)) : [], 2);
  var a = i[0];
  var o = i[1];
  if (!a && (0, Id.z)(e)) {
    return (0, rp.z)(function (e) {
      return Bd(e, t, n);
    })((0, Cd.Xf)(e));
  }
  if (!a) {
    throw new TypeError("Invalid event target");
  }
  return new Ed.y(function (e) {
    function t() {
      var t = [];
      for (var n = 0; n < arguments.length; n++) {
        t[n] = arguments[n];
      }
      return e.next(t.length > 1 ? t : t[0]);
    }
    a(t);
    return function () {
      return o(t);
    };
  });
}
function Nd(e, t) {
  return function (n) {
    return function (r) {
      return e[n](t, r);
    };
  };
}
import * as Ld from /*webcrack:missing*/"./7107.js";
function Pd(e = Infinity) {
  return (0, rp.z)(Ld.y, e);
}
import * as Od from /*webcrack:missing*/"./6883.js";
import * as qd from /*webcrack:missing*/"./2901.js";
import * as Ud from /*webcrack:missing*/"./1118.js";
import * as jd from /*webcrack:missing*/"./9853.js";
import * as Hd from /*webcrack:missing*/"./420.js";
import * as Vd from /*webcrack:missing*/"./1219.js";
var Gd = {
  schedule: function (e) {
    var t = requestAnimationFrame;
    var n = cancelAnimationFrame;
    var r = Gd.delegate;
    if (r) {
      t = r.requestAnimationFrame;
      n = r.cancelAnimationFrame;
    }
    var i = t(function (t) {
      n = undefined;
      e(t);
    });
    return new Vd.w0(function () {
      if (n == null) {
        return undefined;
      } else {
        return n(i);
      }
    });
  },
  requestAnimationFrame: function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = Gd.delegate;
    return ((n == null ? undefined : n.requestAnimationFrame) || requestAnimationFrame).apply(undefined, (0, Sd.ev)([], (0, Sd.CR)(e)));
  },
  cancelAnimationFrame: function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = Gd.delegate;
    return ((n == null ? undefined : n.cancelAnimationFrame) || cancelAnimationFrame).apply(undefined, (0, Sd.ev)([], (0, Sd.CR)(e)));
  },
  delegate: undefined
};
var Yd = function (e) {
  function t(t, n) {
    var r = e.call(this, t, n) || this;
    r.scheduler = t;
    r.work = n;
    return r;
  }
  (0, Sd.ZT)(t, e);
  t.prototype.requestAsyncId = function (t, n, r = 0) {
    if (r !== null && r > 0) {
      return e.prototype.requestAsyncId.call(this, t, n, r);
    } else {
      t.actions.push(this);
      return t._scheduled ||= Gd.requestAnimationFrame(function () {
        return t.flush(undefined);
      });
    }
  };
  t.prototype.recycleAsyncId = function (t, n, r = 0) {
    if (r != null && r > 0 || r == null && this.delay > 0) {
      return e.prototype.recycleAsyncId.call(this, t, n, r);
    }
    if (!t.actions.some(function (e) {
      return e.id === n;
    })) {
      Gd.cancelAnimationFrame(n);
      t._scheduled = undefined;
    }
  };
  return t;
}(Hd.o);
var Zd = function (e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  (0, Sd.ZT)(t, e);
  t.prototype.flush = function (e) {
    this._active = true;
    var t = this._scheduled;
    this._scheduled = undefined;
    var n;
    var r = this.actions;
    e = e || r.shift();
    do {
      if (n = e.execute(e.state, e.delay)) {
        break;
      }
    } while ((e = r[0]) && e.id === t && r.shift());
    this._active = false;
    if (n) {
      while ((e = r[0]) && e.id === t && r.shift()) {
        e.unsubscribe();
      }
      throw n;
    }
  };
  return t;
}(require(/*webcrack:missing*/"./3144.js").v);
var Wd = new Zd(Yd);
import * as Qd from /*webcrack:missing*/"./756.js";
var Kd = (0, require(/*webcrack:missing*/"./782.js").d)(function (e) {
  return function () {
    e(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});
import * as Xd from /*webcrack:missing*/"./7602.js";
import * as Jd from /*webcrack:missing*/"./4791.js";
var $d = function (e) {
  function t() {
    var t = e.call(this) || this;
    t.closed = false;
    t.currentObservers = null;
    t.observers = [];
    t.isStopped = false;
    t.hasError = false;
    t.thrownError = null;
    return t;
  }
  (0, Sd.ZT)(t, e);
  t.prototype.lift = function (e) {
    var t = new eh(this, this);
    t.operator = e;
    return t;
  };
  t.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new Kd();
    }
  };
  t.prototype.next = function (e) {
    var t = this;
    (0, Jd.x)(function () {
      var n;
      var r;
      t._throwIfClosed();
      if (!t.isStopped) {
        t.currentObservers ||= Array.from(t.observers);
        try {
          for (var i = (0, Sd.XA)(t.currentObservers), a = i.next(); !a.done; a = i.next()) {
            a.value.next(e);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (a && !a.done && (r = i.return)) {
              r.call(i);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    });
  };
  t.prototype.error = function (e) {
    var t = this;
    (0, Jd.x)(function () {
      t._throwIfClosed();
      if (!t.isStopped) {
        t.hasError = t.isStopped = true;
        t.thrownError = e;
        for (var n = t.observers; n.length;) {
          n.shift().error(e);
        }
      }
    });
  };
  t.prototype.complete = function () {
    var e = this;
    (0, Jd.x)(function () {
      e._throwIfClosed();
      if (!e.isStopped) {
        e.isStopped = true;
        for (var t = e.observers; t.length;) {
          t.shift().complete();
        }
      }
    });
  };
  t.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(t.prototype, "observed", {
    get: function () {
      return this.observers?.length > 0;
    },
    enumerable: false,
    configurable: true
  });
  t.prototype._trySubscribe = function (t) {
    this._throwIfClosed();
    return e.prototype._trySubscribe.call(this, t);
  };
  t.prototype._subscribe = function (e) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(e);
    return this._innerSubscribe(e);
  };
  t.prototype._innerSubscribe = function (e) {
    var t = this;
    var n = this;
    var r = n.hasError;
    var i = n.isStopped;
    var a = n.observers;
    if (r || i) {
      return Vd.Lc;
    } else {
      this.currentObservers = null;
      a.push(e);
      return new Vd.w0(function () {
        t.currentObservers = null;
        (0, Xd.P)(a, e);
      });
    }
  };
  t.prototype._checkFinalizedStatuses = function (e) {
    var t = this;
    var n = t.hasError;
    var r = t.thrownError;
    var i = t.isStopped;
    if (n) {
      e.error(r);
    } else if (i) {
      e.complete();
    }
  };
  t.prototype.asObservable = function () {
    var e = new Ed.y();
    e.source = this;
    return e;
  };
  t.create = function (e, t) {
    return new eh(e, t);
  };
  return t;
}(Ed.y);
var eh = function (e) {
  function t(t, n) {
    var r = e.call(this) || this;
    r.destination = t;
    r.source = n;
    return r;
  }
  (0, Sd.ZT)(t, e);
  t.prototype.next = function (e) {
    var t;
    var n;
    if ((n = (t = this.destination) === null || t === undefined ? undefined : t.next) !== null && n !== undefined) {
      n.call(t, e);
    }
  };
  t.prototype.error = function (e) {
    var t;
    var n;
    if ((n = (t = this.destination) === null || t === undefined ? undefined : t.error) !== null && n !== undefined) {
      n.call(t, e);
    }
  };
  t.prototype.complete = function () {
    var e;
    var t;
    if ((t = (e = this.destination) === null || e === undefined ? undefined : e.complete) !== null && t !== undefined) {
      t.call(e);
    }
  };
  t.prototype._subscribe = function (e) {
    var t;
    return ((t = this.source) === null || t === undefined ? undefined : t.subscribe(e)) ?? Vd.Lc;
  };
  return t;
}($d);
import * as th from /*webcrack:missing*/"./8825.js";
import * as nh from /*webcrack:missing*/"./3234.js";
function rh(e, t) {
  var n = [];
  for (var r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r];
  }
  if (t === true) {
    e();
    return null;
  } else if (t === false) {
    return null;
  } else {
    return t.apply(undefined, (0, Sd.ev)([], (0, Sd.CR)(n))).pipe((0, Qd.q)(1)).subscribe(function () {
      return e();
    });
  }
}
import * as ih from /*webcrack:missing*/"./9112.js";
import * as ah from /*webcrack:missing*/"./6918.js";
function oh(e, t) {
  if (t) {
    return function (n) {
      return n.pipe(oh(function (n, r) {
        return (0, Cd.Xf)(e(n, r)).pipe((0, Dd.U)(function (e, i) {
          return t(n, e, r, i);
        }));
      }));
    };
  } else {
    return (0, nh.e)(function (t, n) {
      var r = 0;
      var i = null;
      var a = false;
      t.subscribe((0, ah.x)(n, function (t) {
        if (!i) {
          i = (0, ah.x)(n, undefined, function () {
            i = null;
            if (a) {
              n.complete();
            }
          });
          (0, Cd.Xf)(e(t, r++)).subscribe(i);
        }
      }, function () {
        a = true;
        if (!i) {
          n.complete();
        }
      }));
    });
  }
}
import * as sh from /*webcrack:missing*/"./6173.js";
import * as lh from /*webcrack:missing*/"./8418.js";
var ch = {
  leading: true,
  trailing: false
};
function uh(e, t = lh.z, n = ch) {
  var r = (0, np.H)(e, t);
  return function (e, t = ch) {
    return (0, nh.e)(function (n, r) {
      var i = t.leading;
      var a = t.trailing;
      var o = false;
      var s = null;
      var l = null;
      var c = false;
      function u() {
        if (l != null) {
          l.unsubscribe();
        }
        l = null;
        if (a) {
          h();
          if (c) {
            r.complete();
          }
        }
      }
      function p() {
        l = null;
        if (c) {
          r.complete();
        }
      }
      function d(t) {
        return l = (0, Cd.Xf)(e(t)).subscribe((0, ah.x)(r, u, p));
      }
      function h() {
        if (o) {
          o = false;
          var e = s;
          s = null;
          r.next(e);
          if (!c) {
            d(e);
          }
        }
      }
      n.subscribe((0, ah.x)(r, function (e) {
        o = true;
        s = e;
        if (!l || l.closed) {
          if (i) {
            h();
          } else {
            d(e);
          }
        }
      }, function () {
        c = true;
        if (!a || !o || !l || l.closed) {
          r.complete();
        }
      }));
    });
  }(function () {
    return r;
  }, n);
}
class ph {
  constructor(e) {
    this.option = e;
    this.dir = this.option.dir.split("-");
    this.init();
  }
  dir = ["", ""];
  preX = 0;
  preY = 0;
  init() {
    const {
      target: e
    } = this.option;
    if (!e) {
      return;
    }
    const t = Bd(document, "mouseup").pipe(function (e = {}) {
      var t = e.connector;
      var n = t === undefined ? function () {
        return new $d();
      } : t;
      var r = e.resetOnError;
      var i = r === undefined || r;
      var a = e.resetOnComplete;
      var o = a === undefined || a;
      var s = e.resetOnRefCountZero;
      var l = s === undefined || s;
      return function (e) {
        var t = null;
        var r = null;
        var a = null;
        var s = 0;
        var c = false;
        var u = false;
        function p() {
          if (r != null) {
            r.unsubscribe();
          }
          r = null;
        }
        function d() {
          p();
          t = a = null;
          c = u = false;
        }
        function h() {
          var e = t;
          d();
          if (e != null) {
            e.unsubscribe();
          }
        }
        return (0, nh.e)(function (e, g) {
          s++;
          if (!u && !c) {
            p();
          }
          var f = a = a ?? n();
          g.add(function () {
            if (--s == 0 && !u && !c) {
              r = rh(h, l);
            }
          });
          f.subscribe(g);
          if (!t) {
            t = new th.Hp({
              next: function (e) {
                return f.next(e);
              },
              error: function (e) {
                u = true;
                p();
                r = rh(d, i, e);
                f.error(e);
              },
              complete: function () {
                c = true;
                p();
                r = rh(d, o);
                f.complete();
              }
            });
            (0, Ud.D)(e).subscribe(t);
          }
        })(e);
      };
    }());
    const n = Bd(document, "mousemove");
    const r = Bd(e, "mousedown").pipe((0, ih.h)(e => e.button === 0), function (e, t, n) {
      var r = (0, Td.m)(e) || t || n ? {
        next: e,
        error: t,
        complete: n
      } : e;
      if (r) {
        return (0, nh.e)(function (e, t) {
          var n;
          if ((n = r.subscribe) !== null && n !== undefined) {
            n.call(r);
          }
          var i = true;
          e.subscribe((0, ah.x)(t, function (e) {
            var n;
            if ((n = r.next) !== null && n !== undefined) {
              n.call(r, e);
            }
            t.next(e);
          }, function () {
            var e;
            i = false;
            if ((e = r.complete) !== null && e !== undefined) {
              e.call(r);
            }
            t.complete();
          }, function (e) {
            var n;
            i = false;
            if ((n = r.error) !== null && n !== undefined) {
              n.call(r, e);
            }
            t.error(e);
          }, function () {
            var e;
            var t;
            if (i) {
              if ((e = r.unsubscribe) !== null && e !== undefined) {
                e.call(r);
              }
            }
            if ((t = r.finalize) !== null && t !== undefined) {
              t.call(r);
            }
          }));
        });
      } else {
        return Ld.y;
      }
    }(t => {
      this.preX = t.clientX;
      this.preY = t.clientY;
      this.cloneDom = e.cloneNode(true);
      document.body.appendChild(this.cloneDom);
    }));
    const i = r.pipe(oh(() => {
      return function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        var n = (0, qd.yG)(e);
        var r = (0, qd._6)(e, Infinity);
        var i = e;
        if (i.length) {
          if (i.length === 1) {
            return (0, Cd.Xf)(i[0]);
          } else {
            return Pd(r)((0, Ud.D)(i, n));
          }
        } else {
          return Od.E;
        }
      }((0, jd.of)({
        type: "begin"
      }), n.pipe((e = t, (0, nh.e)(function (t, n) {
        (0, Cd.Xf)(e).subscribe((0, ah.x)(n, function () {
          return n.complete();
        }, sh.Z));
        if (!n.closed) {
          t.subscribe(n);
        }
      })), uh(0, Wd), (0, Dd.U)(e => {
        const {
          clientX: t,
          clientY: n
        } = e;
        this.cloneDom.style.left = t + "px";
        this.cloneDom.style.top = n + "px";
        const [r, i] = this.dir;
        let a = 0;
        if (r === "top") {
          a = this.preY - n;
        } else if (r === "bottom") {
          a = n - this.preY;
        }
        let o = 0;
        if (i === "left") {
          o = this.preX - t;
        } else if (i === "right") {
          o = t - this.preX;
        }
        this.preX = t;
        this.preY = n;
        return {
          gap: Math.abs(o) > Math.abs(a) ? o : a,
          client: {
            x: t,
            y: n
          }
        };
      }), (0, ih.h)(e => !!e), (0, Dd.U)(e => ({
        type: "move",
        value: e.gap,
        client: e.client
      }))), t.pipe((0, Dd.U)(() => {
        this.cloneDom.parentNode.removeChild(this.cloneDom);
        this.cloneDom = null;
        return {
          type: "end"
        };
      }), (0, Qd.q)(1)));
      var e;
    }));
    this.scale$ = i;
  }
  subscribe(e) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.scale$.subscribe(e);
  }
}
const dh = (0, s.aZ)({
  __name: "widget-chatgpt-modal",
  setup(e) {
    const {
      onCloseModal: t,
      show: n
    } = (0, X.useModal)();
    const {
      isFull: r,
      setIsFull: o,
      panelType: u,
      panelShowType: p,
      getVipGroup: d,
      customList: h,
      setpanelType: f
    } = (0, X.useModalData)();
    const m = (0, q.useUserStore)();
    const b = (0, te.useChatGptStore)();
    const x = (0, ke.n)();
    const y = (0, s.Fl)(() => m.isLogin && (m.user.chatVipEndTime || 0) > 0 && !m.chatStatus.vip && m.user.chatVipEndTime !== b.closedExpiredTime && !x.chatBanned);
    const v = (0, s.Fl)(() => `height:${b.containerRect.h}px;width:${b.containerRect.w}px;`);
    const w = e => {
      o(e);
    };
    const A = (0, s.Fl)(() => "dark");
    const k = (0, c.iH)();
    const S = (0, c.iH)();
    (0, s.YP)(() => n.value, e => {
      if (e) {
        C();
        d();
        b.setShowRenewalConfirm(false);
        b.getCoUserDetail();
        (0, s.Y3)(() => {
          if (k.value) {
            new ph({
              target: k.value,
              dir: "bottom-right"
            }).subscribe(E);
          }
        });
      }
    });
    const C = () => {
      if (u.value === "chatgpt-iframe" && !h.value.length) {
        f("chatai");
      }
    };
    const E = e => {
      if (e.type === "move") {
        var t;
        const n = (t = S.value) === null || t === undefined ? undefined : t.getBoundingClientRect();
        if (!n) {
          return;
        }
        const r = window.innerHeight;
        const i = window.innerWidth;
        const a = e.client.x - (n.left + n.width);
        const o = e.client.y - (n.top + n.height);
        let s = n.height + o;
        let l = n.width + a;
        l = l < g.Pe.w ? g.Pe.w : l > i - 40 ? i - 40 : l;
        s = s < g.Pe.h ? g.Pe.h : s > r - 40 ? r - 40 : s;
        b.setContainerRect({
          h: s,
          w: l
        });
      }
    };
    return (e, o) => {
      const d = K;
      const h = a.Z;
      (0, s.wg)();
      return (0, s.j4)(h, {
        ani: "fade",
        show: (0, c.SU)(n)
      }, {
        default: (0, s.w5)(() => [(0, s.Wm)(d, {
          class: (0, l.normalizeClass)((0, c.SU)(A)),
          "full-screen-btn": !(0, c.SU)(D.PA) && !(0, c.SU)(y),
          "full-screen": (0, c.SU)(D.PA) || !(0, c.SU)(y) && (0, c.SU)(r),
          transparent: true,
          style: (0, l.normalizeStyle)(!(0, c.SU)(ne.q$) && (0, c.SU)(v)),
          "mask-opacity": (0, c.SU)(D.EF) ? 40 : 60,
          "close-btn": !(0, c.SU)(D.PA),
          onOnFullscreen: w,
          onOnClose: (0, c.SU)(t)
        }, {
          default: (0, s.w5)(() => [(0, s._)("div", {
            ref_key: "dialogRef",
            ref: S,
            class: "h-full w-full"
          }, [(0, c.SU)(y) ? ((0, s.wg)(), (0, s.j4)(de, {
            key: 0
          })) : ((0, s.wg)(), (0, s.j4)(kd, {
            key: 1,
            type: (0, c.SU)(u),
            "panel-show-type": (0, c.SU)(p)
          }, null, 8, ["type", "panel-show-type"]))], 512), (0, s.wy)((0, s._)("div", null, [(0, s._)("div", {
            ref_key: "scaleSensor",
            ref: k,
            class: "resize-dot absolute bottom-0 right-0 z-[1] h-[20px] w-[20px] after:border-[#3A4684] chat-p:after:border-[#2B2755] chat-w:after:border-[#8E8E94] mb:hidden"
          }, null, 512), (0, s._)("div", {
            ref_key: "scaleSensor",
            ref: k,
            class: "pointer-events-auto absolute bottom-0 right-0 z-[2] h-[20px] w-[20px] cursor-nwse-resize mb:hidden"
          }, null, 512)], 512), [[i.vShow, !(0, c.SU)(r)]])]),
          _: 1
        }, 8, ["class", "full-screen-btn", "full-screen", "style", "mask-opacity", "close-btn", "onOnClose"])]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const hh = (0, Q.Z)(dh, [["__scopeId", "data-v-318fc2a2"]]);
import * as gh from /*webcrack:missing*/"./6755.js";
import * as fh from /*webcrack:missing*/"./5008.js";
(() => {
  const e = (0, h.em)();
  const t = (0, i.createApp)(hh);
  (0, fh.f)(t);
  t.use(gh.M);
  t.use(r.Z);
  t.mount(e);
})();