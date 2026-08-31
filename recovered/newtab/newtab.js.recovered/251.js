var r = require("./6.js");
var _i = require("./0.js");
var _o = require("./51.js");
var _a = require("./36.js");
export const j = {
  name: Object(r.i18n)("search"),
  uuid: "dd3af9cc97ad7de8984baaf59514bb52",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/mychromesearch.png",
  desc: "",
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://www.google.com/search?q="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://www.google.com/search?tbm=isch&q="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://www.google.com/search?tbm=nws&q="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://www.google.com/search?tbm=vid&q="
  }, {
    name: Object(r.i18n)("map"),
    url: "https://www.google.com/maps/preview?q="
  }]
};
export const a = {
  name: Object(r.i18n)("baidu"),
  uuid: "0c47016a8cd2d631bc618d4f3a741335",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png",
  desc: Object(r.i18n)("most_used_in_chinese"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://www.baidu.com/s?tn=75144485_dg&ch=3&ie=utf-8&wd="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://image.baidu.com/search/index?isource=infinity&iname=baidu&tn=baiduimage&word="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://news.baidu.com/ns?isource=infinity&iname=baidu&tn=news&ie=utf-8&word="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://video.baidu.com/v?isource=infinity&iname=baidu&ie=utf-8&word="
  }, {
    name: Object(r.i18n)("map"),
    url: "http://map.baidu.com/?isource=infinity&iname=baidu&newmap=1&ie=utf-8&s=s%26wd%3D"
  }]
};
const u = {
  name: Object(r.i18n)("google"),
  uuid: "a22dcc25c75de3f58cb518e32c576865",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png",
  desc: Object(r.i18n)("google_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://www.google.com/search?q="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://www.google.com/search?isource=infinity&iname=google&tbm=isch&q="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://www.google.com/search?isource=infinity&iname=google&tbm=nws&q="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://www.google.com/search?isource=infinity&iname=google&tbm=vid&q="
  }, {
    name: Object(r.i18n)("map"),
    url: "https://www.google.com/maps/preview?isource=infinity&iname=google&q="
  }]
};
const _l = {
  name: Object(r.i18n)("bing"),
  uuid: "5a6afaa65c95a841f6149c4e1591a637",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png",
  desc: Object(r.i18n)("bing_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://cn.bing.com/search?isource=infinity&iname=bing&itype=web&q="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://cn.bing.com/images/search?isource=infinity&iname=bing&q="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://global.bing.com/news/search?isource=infinity&iname=bing&q="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://cn.bing.com/videos/search?isource=infinity&iname=bing&q="
  }, {
    name: Object(r.i18n)("map"),
    url: "https://www.bing.com/ditu/?isource=infinity&iname=bing&q="
  }]
};
export const n = [a, _l, {
  name: Object(r.i18n)("yahoo"),
  uuid: "C26068F55492EF9E93E05E34A3B31139",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/yahoo.png",
  desc: Object(r.i18n)("yahoo_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://search.yahoo.com/search?isource=infinity&iname=yahoo&itype=web&p="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://images.search.yahoo.com/search?isource=infinity&iname=yahoo&p="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://news.search.yahoo.com/search?isource=infinity&iname=yahoo&p="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://video.search.yahoo.com/search/video?isource=infinity&iname=yahoo&p="
  }]
}, {
  name: Object(r.i18n)("yandex"),
  uuid: "f33155f8c51a36fb76dad667dec7e44f",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/yandex.png",
  desc: Object(r.i18n)("yandex_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://yandex.com/search/?isource=infinity&itype=web&iname=yandex&text="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://yandex.com/images/search?isource=infinity&iname=yandex&text="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://news.yandex.com/yandsearch?isource=infinity&iname=yandex&text="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://yandex.com/video/search?isource=infinity&iname=yandex&text="
  }]
}, {
  name: Object(r.i18n)("duckduckgo"),
  uuid: "569CD6FB4F6502B918DB8B30EC235384",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/duckduckgo.png",
  desc: Object(r.i18n)("duckduckgo_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&itype=web&q="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&t=h_&dbexp=a&iax=1&ia=images&q="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&t=h_&dbexp=a&ia=news&q="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://duckduckgo.com/?isource=infinity&iname=duckduckgo&t=h_&iax=1&ia=videos&q="
  }]
}, {
  name: Object(r.i18n)("n_360"),
  uuid: "70adaba7374f6089aca0374dea85df00",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/360.png",
  desc: Object(r.i18n)("360_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://www.so.com/s?src=lm&ls=sm2054017&lm_extend=ctype:4&q="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://image.so.com/i?isource=infinity&iname=360&src=infinitynewtab&q="
  }, {
    name: Object(r.i18n)("news"),
    url: "http://news.so.com/ns?isource=infinity&iname=360&src=infinitynewtab&q="
  }, {
    name: Object(r.i18n)("videos"),
    url: "http://video.so.com/v?isource=infinity&iname=360&src=infinitynewtab&q="
  }]
}, {
  name: Object(r.i18n)("sougou"),
  uuid: "a3e908082e31a92396970f8b58583863",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/sougou.png",
  desc: Object(r.i18n)("sougou_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://www.sogou.com/sogou?isource=infinity&iname=sogou&itype=web&pid=sogou-site-7985672db979303a&query="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://pic.sogou.com/pics?isource=infinity&iname=sogou&ie=utf8&query="
  }, {
    name: Object(r.i18n)("news"),
    url: "http://news.sogou.com/news?isource=infinity&iname=sogou&ie=utf8&query="
  }, {
    name: Object(r.i18n)("videos"),
    url: "http://v.sogou.com/v?isource=infinity&iname=sogou&ie=utf8&query="
  }, {
    name: Object(r.i18n)("wechat"),
    url: "http://weixin.sogou.com/weixin?isource=infinity&iname=sogou&type=2&ie=utf8&query="
  }]
}, {
  name: Object(r.i18n)("yarndex_ru"),
  uuid: "ff1ca8c4e6661d52440b7f2e15cb6a13",
  logo: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/russia-yandex.png",
  desc: Object(r.i18n)("yandex_desc"),
  types: [{
    name: Object(r.i18n)("html"),
    url: "https://yandex.ru/search/?text="
  }, {
    name: Object(r.i18n)("photos"),
    url: "https://yandex.ru/images/search?text="
  }, {
    name: Object(r.i18n)("news"),
    url: "https://news.yandex.ru/yandsearch?text="
  }, {
    name: Object(r.i18n)("videos"),
    url: "https://yandex.ru/video/search?text="
  }]
}];
export const g = "6dcbbe4e9dc6ef2fd68da7d8befd117c";
export const f = "https://www.infinitynewtab.com/jd.pro.html";
export const e = "https://homepage.inftab.com/jd.pro.html";
export const d = "5001b4d70b1c62f14859b51a6e8abd6f";
export const c = "https://games.infinitynewtab.com/";
export const b = "https://games.inftab.com/";
const _b = {
  "zh-CN": [{
    name: Object(r.i18n)("settings"),
    uuid: "552fa3a378b29375843fa3d021cbe129",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/9622b98e90dd4f107d23481566095b34.png",
    type: "app",
    target: "infinity://settings"
  }, {
    name: "京东商城",
    uuid: g,
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/cee009549b352def723ba09d6da4b742.png",
    type: "web",
    target: e
  }, {
    name: "天猫精选",
    uuid: "be0ab26cf4dc6239c98791f7b18b633a",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2f301c86bb2d0efeec3d49930147157f.png",
    type: "web",
    target: "https://s.click.taobao.com/t?e=m%3D2%26s%3DV5ucSP%2F1kT4cQipKwQzePCperVdZeJviK7Vc7tFgwiFRAdhuF14FMRBynALhehQ4RitN3%2FurF3xNWm%2FATOfjswMAKinyMfntv%2FFgqkVH8133BMlVy3qlGE2srC8Mk09eQgZss1jm63jcHtRpEUy6RPalRWTdFmFpJPwiig1bxLMnyi1UQ%2F17I10hO9fBPG8oXH%2BQH9e66Y4%3D"
  }, {
    name: "爱淘宝",
    uuid: "c34f380f9d9136fc3b4dbd32f24feea3",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/346647fb95fbac4d303c93fa0a4936d3.png",
    type: "web",
    target: "https://ai.taobao.com/?pid=mm_50570328_39070332_145428725"
  }, {
    name: "唯品会",
    uuid: "237ae8efe805e4bd741fa32f040b4571",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127100741.png.png",
    target: "http://click.union.vip.com/redirect.php?url=eyJjaGFuIjoiaW5maW5pdHkiLCJhZGNvZGUiOiI5dnpnMHBxYiIsInNjaGVtZWNvZGUiOiJmNWEwNWQ2NiIsInVjb2RlIjoibWQyd2dycnUifQ==",
    type: "web"
  }, {
    name: "稿定设计",
    uuid: "f0b90e0f436466b121ebcc46297cbfc1",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/f0b90e0f436466b121ebcc46297cbfc1.png",
    target: "https://www.gaoding.com/utms/6ab367adcc9945e38f24ebec652c295e ",
    type: "web"
  }, {
    name: "百度",
    uuid: "aeb990ca3978666676b1fbb811bb0dfc",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/c9f7546ad597dd7fb53e8129b6c07877.png",
    target: "https://www.baidu.com/?tn=44004473_48_oem_dg&ie=utf-8",
    type: "web"
  }, {
    name: "论文猫",
    uuid: "ebd5cc9193bde437e76de2ca1abd2121",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/ebd5cc9193bde437e76de2ca1abd2121.png",
    target: "https://papercat.pro?pic=gk2W",
    type: "web"
  }, {
    name: "携程网",
    uuid: "afe7a96e6db449e6199df118756d5672",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/1502895222082.png",
    target: "http://www.ctrip.com/?allianceid=1050724&sid=1786019",
    type: "web"
  }, {
    name: "DeepSider",
    uuid: "dbd6895d645eceb05cbcc5926952c505",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/dbd6895d645eceb05cbcc5926952c505.png",
    target: "https://deepsider.ai/?utm_source=infinity",
    type: "web"
  }, {
    name: "爱奇艺",
    uuid: "3d3a7777700d30c5f29be964835f398d",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/226c6aff617dbc253ce26d23be07c446.png",
    target: "https://www.iqiyi.com/?vfm=m_470_zhd&fv=97e6d58de4b83d39",
    type: "web"
  }, {
    name: "狐猴",
    uuid: "7e6e38a85dc4b7873d6e36ae00753142",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/7e6e38a85dc4b7873d6e36ae00753142.png",
    target: "https://www.lemurbrowser.com/app/zh/?utm_source=infinity",
    type: "web"
  }, {
    name: "Infinity Games",
    uuid: d,
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/5001b4d70b1c62f14859b51a6e8abd6f.png",
    type: "web",
    target: b
  }, {
    name: "Infinitytab",
    uuid: "bc545d7b32d3dc84c3041ca092fb2689",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/bc545d7b32d3dc84c3041ca092fb2689.png",
    type: "web",
    target: "https://www.infinitytab.com/?utm_source=extension"
  }, (_i.i || _i.k) && {
    name: "扩展管理",
    uuid: "194dd7b46ac16ac93becf5386f14bcca",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/194dd7b46ac16ac93becf5386f14bcca.png",
    type: "app",
    target: "infinity://extension"
  }, {
    name: "壁纸库",
    uuid: "76e8e8a1cb47ef88dc9faaf52167aa9a",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/76e8e8a1cb47ef88dc9faaf52167aa9a.png",
    type: "app",
    target: "infinity://wallpaper"
  }, _i.k && {
    name: Object(r.i18n)("edge_app_store"),
    uuid: "744e63c4998c83753d7d37a4fbd3e26f",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/eeedf66223852ae037aa58284858187d.png",
    type: "web",
    target: "https://microsoftedge.microsoft.com/addons"
  }, _i.n && {
    name: Object(r.i18n)("firefox_app_store"),
    uuid: "743965befe82a5255fb48dcf7b848bbb",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/7ef4532818b99d9320879c3e4979fc01.png",
    type: "web",
    target: "https://addons.mozilla.org"
  }, {
    name: "小米有品",
    uuid: "f3e3cb59c45d1bc6687b8393b4f271b1",
    bgType: "image",
    bgImage: "https://infinitypro-img.infinitynewtab.com/custom-icon/9001cf4suf1jwn7y3b7juxl0x1tpbc.png",
    target: "https://c.duomai.com/track.php?aid=4705&dm_fid=16055&euid=infinity&site_id=950780&t=https%3A%2F%2Fwww.xiaomiyoupin.com",
    type: "web"
  }, {
    name: "哔哩哔哩",
    uuid: "ae50fb1b26d79a1a7bf89b02b5d30fb1",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/d8b62f4d64bda8800b1c788cd5ba3c68.png",
    target: "http://www.bilibili.com/",
    type: "web"
  }, {
    name: "知乎",
    uuid: "86626e617258ad15b93e249c8d81a9f4",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2b89ebe968d8cafe77a5c587daa79c7f.png",
    target: "https://www.zhihu.com/",
    type: "web"
  }, {
    name: "GitHub",
    uuid: "a23b4cf17327527ae66aad5d13f059da",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/a23b4cf17327527ae66aad5d13f059da.png",
    target: "https://github.com/",
    type: "web"
  }, {
    name: "华为商城",
    uuid: "940dba4bb4740f5340b2115a90582e6b",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/940dba4bb4740f5340b2115a90582e6b.png",
    target: "https://c.duomai.com/track.php?aid=387&dm_fid=16055&euid=infinity&site_id=950780&t=https%3A%2F%2Fwww.vmall.com%2Findex.html",
    type: "web",
    bgColor: ""
  }, {
    name: "斗鱼",
    uuid: "78f61134f1b7826bd587ac290b1781e1",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/66f3d54ad9a6e62fbcb13bbf96211f67.png",
    target: "http://www.douyutv.com/",
    type: "web"
  }, {
    name: "当当网",
    uuid: "25bbf99ce3252149703a0a9b71dcd6b3",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/513b4167dd3c9bfd83f6ceae56d7bf7f.png",
    target: "http://union.dangdang.com/transfer.php?from=P-319540-infinity&amp;amp;amp;ad_type=10&amp;amp;amp;sys_id=1&amp;amp;amp;backurl=http://www.dangdang.com",
    type: "web"
  }, {
    name: "微软",
    uuid: "422f830b299a5d3a3f3c4d5a939d25bf",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/2f580fd771401efdc2118f0562e3ab45.png",
    target: "https://c.duomai.com/track.php?aid=2649&dm_fid=16052&euid=infinity&site_id=339485&t=https%3A%2F%2Fwww.microsoftstore.com.cn",
    type: "web"
  }, {
    name: "新浪微博",
    uuid: "0485f5de0396bd313ec0e4ab22080bb9",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/0f2ab700f8fff5b6e9ebc7d6a976981f.png",
    target: "http://weibo.com/",
    type: "web"
  }],
  default: [{
    uuid: "080772d54828d47e7f8ce223c66f36df",
    name: "Booking",
    target: "https://www.booking.com/index.html?aid=1267011",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/83e58c13ed40dc8393297d43d2639cce.png",
    bgType: "image",
    type: "web"
  }, {
    uuid: "66117abb3659ad746baadc8c1e0b28df",
    name: "Twitter",
    target: "https://twitter.com",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/0c7e5d8b40c38cde576595b23546cc91.png",
    bgType: "image",
    type: "web"
  }, {
    uuid: "4299970b2e054e9a39450e6f854a684c",
    name: "Amazon",
    target: "https://sovrn.co/11h5wnr",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/e67eed044bf08fbcac16a0527fcc165a.png",
    bgType: "image",
    type: "web"
  }, {
    uuid: "912ed4e109a1cde4b956fa8a1670fae2",
    name: "eBay",
    target: "https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339103610&customid=infinity&toolid=10001&mkevt=1",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/ebay.png",
    bgType: "image",
    type: "web"
  }, {
    name: "Youtube",
    uuid: "60e546111669c1d829f962c8831a0926",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/37d396f9975e494b10ac8696d64ebb2a.png",
    type: "web",
    target: "https://youtube.com"
  }, {
    name: "Gmail",
    uuid: "01d0a35ebb602dde4dadd63887cc2a91",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/gmail_2.png",
    type: "app",
    target: "infinity://gmail"
  }, {
    name: "AliExpress",
    uuid: "c4cbd39c0ff571475f3f4d09df79426c",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/07ec46eac62dca559954f3c21736b5c0.png",
    target: "http://s.click.aliexpress.com/e/jy3RvNn",
    type: "web"
  }, {
    name: "Settings",
    uuid: "552fa3a378b29375843fa3d021cbe129",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/9622b98e90dd4f107d23481566095b34.png",
    type: "app",
    target: "infinity://settings"
  }, {
    name: "Spotify",
    uuid: "f91b1d1670595c8e7a5459fcc32ad0d4",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/a0fdd81b4dda32d7394a9151f6d274ef.png",
    target: "https://sovrn.co/19egzal",
    type: "web"
  }, {
    name: "Walmart",
    uuid: "778bb326cdf44093d702f6f016754cec",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127100751.png",
    target: "https://redirect.viglink.com?key=ddac7c192269498283581986ec8a9aaa&u=https%3A%2F%2Fwww.walmart.com%2F",
    type: "web"
  }, {
    name: "Microsoft",
    uuid: "cbad4a1402d12a5574cabf9c0cc10634",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127092730.png",
    target: "https://sovrn.co/3to9uma",
    type: "web"
  }, {
    name: "Lemur",
    uuid: "24f02a8178e6236d22dc563857bf32f8",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/24f02a8178e6236d22dc563857bf32f8.png",
    target: "https://www.lemurbrowser.com/app/en/?utm_source=infinity",
    type: "web"
  }, {
    name: "Turbotax",
    uuid: "b170651fde3c3b89289c588266c582a3",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/b170651fde3c3b89289c588266c582a3.png",
    target: "https://sovrn.co/9mrq11x",
    type: "web"
  }, {
    name: "Samsung",
    uuid: "4f7ffdfa59a5879cba9bfd41e8b5b9f6",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/ea07e21040037300243e520d89e0e818.png",
    target: "https://sovrn.co/15mhkmf",
    type: "web"
  }, {
    name: "Alibaba",
    uuid: "8c94edee5ce4c028a2fcd80fbaed84ea",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/656ff7858665d1adcc5efeba588d5871.png",
    target: "http://www.alibaba.com/",
    type: "web"
  }, {
    name: "Wallpapers library",
    uuid: "76e8e8a1cb47ef88dc9faaf52167aa9a",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/76e8e8a1cb47ef88dc9faaf52167aa9a.png",
    type: "app",
    target: "infinity://wallpaper"
  }, _i.i && {
    name: Object(r.i18n)("chrome_app_store"),
    uuid: "744e698c837a43c49fbd3e26753d7d3f",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/d2085270ca1ded965bfaac2d2a6b12dc.png",
    type: "web",
    target: "https://chrome.google.com/webstore/category/extensions"
  }, _i.k && {
    name: Object(r.i18n)("edge_app_store"),
    uuid: "744e63c4998c83753d7d37a4fbd3e26f",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/eeedf66223852ae037aa58284858187d.png",
    type: "web",
    target: "https://microsoftedge.microsoft.com/addons"
  }, _i.n && {
    name: Object(r.i18n)("firefox_app_store"),
    uuid: "743965befe82a5255fb48dcf7b848bbb",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/7ef4532818b99d9320879c3e4979fc01.png",
    type: "web",
    target: "https://addons.mozilla.org"
  }, {
    name: "Infinitytab",
    uuid: "bc545d7b32d3dc84c3041ca092fb2689",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/bc545d7b32d3dc84c3041ca092fb2689.png",
    type: "web",
    target: "https://www.infinitytab.com/?utm_source=extension"
  }, {
    name: "Infinity Games",
    uuid: d,
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/5001b4d70b1c62f14859b51a6e8abd6f.png",
    type: "web",
    target: b
  }, (_i.i || _i.k) && {
    name: "Extensions",
    uuid: "194dd7b46ac16ac93becf5386f14bcca",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/194dd7b46ac16ac93becf5386f14bcca.png",
    type: "app",
    target: "infinity://extension"
  }, {
    name: "Target",
    uuid: "cdcca78e7ecbc8c627d51cc783a4fd07",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/79c6cad0aca11ad3b7726f075d9a5371.png",
    target: "http://www.target.com",
    type: "web"
  }, {
    name: "TripAdvisor",
    uuid: "c4b68571e44bb47d16456c5182e590ee",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/9001c8a3ah8l05e5u2fqhoxf8rh9ek.png.png",
    target: "https://redirect.viglink.com?key=ddac7c192269498283581986ec8a9aaa&u=https%3A%2F%2Fwww.tripadvisor.com%2F",
    type: "web"
  }, {
    name: "Indeed",
    uuid: "69a66cfb185c3aef3539de59316d8e28",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/69a66cfb185c3aef3539de59316d8e28.png",
    target: "https://sovrn.co/o8pohng",
    type: "web"
  }, {
    name: "Hulu",
    uuid: "ae3c79247f84079e195ba1290e6c7946",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/150127092951.png",
    target: "https://sovrn.co/c6vffrc",
    type: "web"
  }, {
    name: "Lenovo",
    uuid: "04d2045593f65a947d5d8a225e2d966d",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/04d2045593f65a947d5d8a225e2d966d.png",
    target: "https://sovrn.co/1laxjon",
    type: "web"
  }, {
    name: "macys",
    uuid: "174e3ea9866bdaad35be4899a3890f5e",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/174e3ea9866bdaad35be4899a3890f5e.png",
    target: "https://sovrn.co/0qtuyb4",
    type: "web"
  }, {
    name: "Expedia",
    uuid: "0aac2322924424d864d45919527a4bd9",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/0aac2322924424d864d45919527a4bd9.png",
    target: "https://sovrn.co/1afrm3y",
    type: "web"
  }, {
    name: "Airbnb",
    uuid: "e76e90dc2b1acac991f19e82c58f5259",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/5bcf01b6d7301fd2adf4155a807262ac.png",
    target: "https://sovrn.co/l1ewazi",
    type: "web"
  }, {
    name: "AT&T",
    uuid: "e0f4649ae91a59cb296b3f266cd9eb80",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/icon/e0f4649ae91a59cb296b3f266cd9eb80.png",
    target: "https://sovrn.co/153zpbb",
    type: "web"
  }]
};
export const p = {
  name: Object(r.i18n)("weather"),
  uuid: "eed2a9287b324510678cd5e714888e99",
  bgType: "image",
  bgImage: "https://infinityicon.infinitynewtab.com/assets/weather/default.png",
  type: "app",
  bgColor: "#36B3FF",
  target: "infinity://weather"
};
export const h = {
  name: "Infinity AI",
  uuid: "eed2a9287b324510678cd5e723788e11",
  bgType: "image",
  bgImage: "https://infinityicon.infinitynewtab.com/assets/infiityai-icon.png",
  type: "app",
  target: "infinity://chatai"
};
export const m = t => [!_a.a && _i.l && h, p, {
  name: Object(r.i18n)("todos"),
  uuid: "c09f31db43d7faca5bf659fadad3967c",
  bgType: "image",
  bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/6e49210c084629259f22609980c48ecf.png",
  type: "app",
  target: "infinity://todos"
}, {
  name: Object(r.i18n)("notes"),
  uuid: "ea5ac5d9e9e08c1d57ad413e9e38d376",
  bgType: "image",
  bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/006b88c07a2e87d5a61f3c969a70575c.png",
  type: "app",
  target: "infinity://notes"
}, _i.l && !_i.r && {
  name: Object(r.i18n)("folder"),
  uuid: "folder-1gso53bkma3hh6lqtjkjpx7lyh1",
  children: [{
    name: Object(r.i18n)("bookmarks"),
    uuid: "96646a13688f5bfd0aaf4811a579aee1",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/31a36139ccf4b9b005ec55445bf833b0.png",
    type: "app",
    target: "infinity://bookmarks"
  }, {
    name: Object(r.i18n)("history"),
    uuid: "4528cef4f8d66e661cb3143af733694e",
    bgType: "image",
    bgImage: "https://infinityicon.infinitynewtab.com/user-share-icon/history_2.png",
    type: "app",
    target: "infinity://history"
  }]
}, ...(_b[t] || _b.default)].filter(t => t).reduce((t, e, n) => {
  e.id ||= "siteId-" + e.uuid;
  e.updatetime = 0;
  if (e.children) {
    e.children.forEach(t => {
      t.id = "siteId-" + t.uuid;
      t.updatetime = 0;
    });
  }
  const r = Math.floor(n / 18);
  t[r] ||= [];
  t[r].push(e);
  return t;
}, []);
export const o = [{
  name: Object(r.i18n)("all_wallpaper_sources"),
  value: "all",
  desc: Object(r.i18n)("all_wallpaper_sources_desc"),
  img: Object(_o.a)("source-all.png", true)
}, {
  name: Object(r.i18n)("infinity_landscape_wallpaper_source"),
  value: "InfinityLandscape",
  desc: Object(r.i18n)("infinity_landscape_wallpaper_source_desc"),
  img: Object(_o.a)("source-infinity-landscape.png", true)
}, {
  name: Object(r.i18n)("infinity_comic_wallpaper_source"),
  value: "Infinity",
  desc: Object(r.i18n)("infinity_comic_wallpaper_source_desc"),
  img: Object(_o.a)("source-infinity-comic.png", true)
}, {
  name: "Bing",
  value: "bing",
  desc: Object(r.i18n)("bing_wallpaper_source_desc"),
  img: Object(_o.a)("source-bing.png", true)
}, {
  name: "Unsplash",
  value: "Unsplash",
  desc: Object(r.i18n)("unsplash_wallpaper_source_desc"),
  img: Object(_o.a)("source-unsplash.png", true)
}, {
  name: "Life Of Pix",
  value: "Life Of Pix",
  desc: Object(r.i18n)("life_of_pix_wallpaper_source_desc"),
  img: Object(_o.a)("source-life-of-pix.png", true)
}, {
  name: "MMT",
  value: "MMT",
  desc: Object(r.i18n)("mmt_wallpaper_source_desc"),
  img: Object(_o.a)("source-mmt.png", true)
}, {
  name: "Realistic Shots",
  value: "Realistic Shots",
  desc: Object(r.i18n)("realistic_shots_wallpaper_source_desc"),
  img: Object(_o.a)("source-realistic-shots.png", true)
}, {
  name: "Jay Mantri",
  value: "Jay Mantri",
  desc: Object(r.i18n)("jay_mantri_wallpaper_source_desc"),
  img: Object(_o.a)("source-jay-mantri.png", true)
}, {
  name: "Free Nature Stock",
  value: "Free Nature Stock",
  desc: Object(r.i18n)("free_nature_stock_wallpaper_source_desc"),
  img: Object(_o.a)("source-free-nature-stock.png", true)
}, {
  name: "Skitter Photo",
  value: "Skitter Photo",
  desc: Object(r.i18n)("skitter_photo_wallpaper_source_desc"),
  img: Object(_o.a)("source-skitter-photo.png", true)
}, {
  name: "Startup Stock Photos",
  value: "Startup Stock Photos",
  desc: Object(r.i18n)("startup_stock_wallpaper_source_desc"),
  img: Object(_o.a)("source-startup-stock-photos.png", true)
}, {
  name: "Barn Images",
  value: "Barn Images",
  desc: Object(r.i18n)("barn_images_wallpaper_source_desc"),
  img: Object(_o.a)("source-barn.png", true)
}, {
  name: "Picography",
  value: "Picography",
  desc: Object(r.i18n)("picography_wallpaper_source_desc"),
  img: Object(_o.a)("source-picography.png", true)
}];
export const i = ["c00018", "de8930", "f7d946", "cbe582", "506f37", "60a8d8", "184878", "be7ab9"];
export const l = () => r.IS_ZH ? a : _i.i ? j : _l;
export const k = () => r.IS_ZH ? [Object.assign(Object.assign({}, a), {
  updatetime: 0
}), Object.assign(Object.assign({}, _l), {
  updatetime: 0
})] : [Object.assign(Object.assign({}, _l), {
  updatetime: 0
}), Object.assign(Object.assign({}, u), {
  updatetime: 0
})];