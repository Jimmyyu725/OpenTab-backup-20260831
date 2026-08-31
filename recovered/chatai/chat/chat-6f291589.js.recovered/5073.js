var i;
(function (s, r) {
  "use strict";

  var a = "function";
  var o = "undefined";
  var u = "object";
  var g = "string";
  var h = "model";
  var c = "name";
  var l = "type";
  var d = "vendor";
  var F = "version";
  var f = "architecture";
  var C = "console";
  var p = "mobile";
  var y = "tablet";
  var A = "smarttv";
  var E = "wearable";
  var _ = "embedded";
  var D = "Amazon";
  var x = "Apple";
  var m = "ASUS";
  var w = "BlackBerry";
  var B = "Firefox";
  var b = "Google";
  var j = "Huawei";
  var S = "LG";
  var I = "Microsoft";
  var v = "Motorola";
  var z = "Opera";
  var k = "Samsung";
  var M = "Sony";
  var T = "Xiaomi";
  var N = "Zebra";
  var Y = "Facebook";
  function O(e) {
    var t = {};
    for (var n = 0; n < e.length; n++) {
      t[e[n].toUpperCase()] = e[n];
    }
    return t;
  }
  function Z(e, t) {
    return typeof e === g && G(t).indexOf(G(e)) !== -1;
  }
  function G(e) {
    return e.toLowerCase();
  }
  function H(e, t) {
    if (typeof e === g) {
      e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      if (typeof t === o) {
        return e;
      } else {
        return e.substring(0, 255);
      }
    }
  }
  function P(e, t) {
    var n;
    var i;
    var s;
    var o;
    for (var g, h, c = 0; c < t.length && !g;) {
      var l = t[c];
      var d = t[c + 1];
      for (n = i = 0; n < l.length && !g;) {
        if (g = l[n++].exec(e)) {
          for (s = 0; s < d.length; s++) {
            h = g[++i];
            if (typeof (o = d[s]) === u && o.length > 0) {
              if (o.length === 2) {
                if (typeof o[1] == a) {
                  this[o[0]] = o[1].call(this, h);
                } else {
                  this[o[0]] = o[1];
                }
              } else if (o.length === 3) {
                if (typeof o[1] !== a || o[1].exec && o[1].test) {
                  this[o[0]] = h ? h.replace(o[1], o[2]) : r;
                } else {
                  this[o[0]] = h ? o[1].call(this, h, o[2]) : r;
                }
              } else if (o.length === 4) {
                this[o[0]] = h ? o[3].call(this, h.replace(o[1], o[2])) : r;
              }
            } else {
              this[o] = h || r;
            }
          }
        }
      }
      c += 2;
    }
  }
  function L(e, t) {
    for (var n in t) {
      if (typeof t[n] === u && t[n].length > 0) {
        for (var i = 0; i < t[n].length; i++) {
          if (Z(t[n][i], e)) {
            if (n === "?") {
              return r;
            } else {
              return n;
            }
          }
        }
      } else if (Z(t[n], e)) {
        if (n === "?") {
          return r;
        } else {
          return n;
        }
      }
    }
    return e;
  }
  var X = {
    ME: "4.90",
    "NT 3.11": "NT3.51",
    "NT 4.0": "NT4.0",
    2000: "NT 5.0",
    XP: ["NT 5.1", "NT 5.2"],
    Vista: "NT 6.0",
    7: "NT 6.1",
    8: "NT 6.2",
    8.1: "NT 6.3",
    10: ["NT 6.4", "NT 10.0"],
    RT: "ARM"
  };
  var J = {
    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [F, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [F, [c, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [c, F], [/opios[\/ ]+([\w\.]+)/i], [F, [c, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [F, [c, z]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [c, F], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [F, [c, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [F, [c, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [F, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [F, [c, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [F, [c, "IE"]], [/yabrowser\/([\w\.]+)/i], [F, [c, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure Browser"], F], [/\bfocus\/([\w\.]+)/i], [F, [c, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [F, [c, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [F, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [F, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [F, [c, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [F, [c, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [F, [c, B]], [/\bqihu|(qi?ho?o?|360)browser/i], [[c, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 Browser"], F], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], F], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [c, F], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [c], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[c, Y], F], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [c, F], [/\bgsa\/([\w\.]+) .*safari\//i], [F, [c, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [F, [c, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[c, "Chrome WebView"], F], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [F, [c, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [c, F], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [F, [c, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [F, c], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [c, [F, L, {
      "1.0": "/8",
      1.2: "/1",
      1.3: "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }]], [/(webkit|khtml)\/([\w\.]+)/i], [c, F], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[c, "Netscape"], F], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [F, [c, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [c, F]],
    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[f, "amd64"]], [/(ia32(?=;))/i], [[f, G]], [/((?:i[346]|x)86)[;\)]/i], [[f, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[f, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[f, "armhf"]], [/windows (ce|mobile); ppc;/i], [[f, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[f, /ower/, "", G]], [/(sun4\w)[;\)]/i], [[f, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[f, G]]],
    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [h, [d, k], [l, y]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [h, [d, k], [l, p]], [/\((ip(?:hone|od)[\w ]*);/i], [h, [d, x], [l, p]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [h, [d, x], [l, y]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [h, [d, j], [l, y]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [h, [d, j], [l, p]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[h, /_/g, " "], [d, T], [l, p]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[h, /_/g, " "], [d, T], [l, y]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [h, [d, "OPPO"], [l, p]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [h, [d, "Vivo"], [l, p]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [h, [d, "Realme"], [l, p]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [h, [d, v], [l, p]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [h, [d, v], [l, y]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [h, [d, S], [l, y]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [h, [d, S], [l, p]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [h, [d, "Lenovo"], [l, y]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[h, /_/g, " "], [d, "Nokia"], [l, p]], [/(pixel c)\b/i], [h, [d, b], [l, y]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [h, [d, b], [l, p]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [h, [d, M], [l, p]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[h, "Xperia Tablet"], [d, M], [l, y]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [h, [d, "OnePlus"], [l, p]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [h, [d, D], [l, y]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[h, /(.+)/g, "Fire Phone $1"], [d, D], [l, p]], [/(playbook);[-\w\),; ]+(rim)/i], [h, d, [l, y]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [h, [d, w], [l, p]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [h, [d, m], [l, y]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [h, [d, m], [l, p]], [/(nexus 9)/i], [h, [d, "HTC"], [l, y]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [d, [h, /_/g, " "], [l, p]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [h, [d, "Acer"], [l, y]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [h, [d, "Meizu"], [l, p]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [h, [d, "Sharp"], [l, p]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [d, h, [l, p]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [d, h, [l, y]], [/(surface duo)/i], [h, [d, I], [l, y]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [h, [d, "Fairphone"], [l, p]], [/(u304aa)/i], [h, [d, "AT&T"], [l, p]], [/\bsie-(\w*)/i], [h, [d, "Siemens"], [l, p]], [/\b(rct\w+) b/i], [h, [d, "RCA"], [l, y]], [/\b(venue[\d ]{2,7}) b/i], [h, [d, "Dell"], [l, y]], [/\b(q(?:mv|ta)\w+) b/i], [h, [d, "Verizon"], [l, y]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [h, [d, "Barnes & Noble"], [l, y]], [/\b(tm\d{3}\w+) b/i], [h, [d, "NuVision"], [l, y]], [/\b(k88) b/i], [h, [d, "ZTE"], [l, y]], [/\b(nx\d{3}j) b/i], [h, [d, "ZTE"], [l, p]], [/\b(gen\d{3}) b.+49h/i], [h, [d, "Swiss"], [l, p]], [/\b(zur\d{3}) b/i], [h, [d, "Swiss"], [l, y]], [/\b((zeki)?tb.*\b) b/i], [h, [d, "Zeki"], [l, y]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[d, "Dragon Touch"], h, [l, y]], [/\b(ns-?\w{0,9}) b/i], [h, [d, "Insignia"], [l, y]], [/\b((nxa|next)-?\w{0,9}) b/i], [h, [d, "NextBook"], [l, y]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[d, "Voice"], h, [l, p]], [/\b(lvtel\-)?(v1[12]) b/i], [[d, "LvTel"], h, [l, p]], [/\b(ph-1) /i], [h, [d, "Essential"], [l, p]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [h, [d, "Envizen"], [l, y]], [/\b(trio[-\w\. ]+) b/i], [h, [d, "MachSpeed"], [l, y]], [/\btu_(1491) b/i], [h, [d, "Rotor"], [l, y]], [/(shield[\w ]+) b/i], [h, [d, "Nvidia"], [l, y]], [/(sprint) (\w+)/i], [d, h, [l, p]], [/(kin\.[onetw]{3})/i], [[h, /\./g, " "], [d, I], [l, p]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [h, [d, N], [l, y]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [h, [d, N], [l, p]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [d, h, [l, C]], [/droid.+; (shield) bui/i], [h, [d, "Nvidia"], [l, C]], [/(playstation [345portablevi]+)/i], [h, [d, M], [l, C]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [h, [d, I], [l, C]], [/smart-tv.+(samsung)/i], [d, [l, A]], [/hbbtv.+maple;(\d+)/i], [[h, /^/, "SmartTV"], [d, k], [l, A]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[d, S], [l, A]], [/(apple) ?tv/i], [d, [h, "Apple TV"], [l, A]], [/crkey/i], [[h, "Chromecast"], [d, b], [l, A]], [/droid.+aft(\w)( bui|\))/i], [h, [d, D], [l, A]], [/\(dtv[\);].+(aquos)/i], [h, [d, "Sharp"], [l, A]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[d, H], [h, H], [l, A]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[l, A]], [/((pebble))app/i], [d, h, [l, E]], [/droid.+; (glass) \d/i], [h, [d, b], [l, E]], [/droid.+; (wt63?0{2,3})\)/i], [h, [d, N], [l, E]], [/(quest( 2)?)/i], [h, [d, Y], [l, E]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [d, [l, _]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [h, [l, p]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [h, [l, y]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[l, y]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[l, p]], [/(android[-\w\. ]{0,9});.+buil/i], [h, [d, "Generic"]]],
    engine: [[/windows.+ edge\/([\w\.]+)/i], [F, [c, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [F, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [c, F], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [F, c]],
    os: [[/microsoft (windows) (vista|xp)/i], [c, F], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [c, [F, L, X]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[c, "Windows"], [F, L, X]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[F, /_/g, "."], [c, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[c, "Mac OS"], [F, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [F, c], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [c, F], [/\(bb(10);/i], [F, [c, w]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [F, [c, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [F, [c, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [F, [c, "webOS"]], [/crkey\/([\d\.]+)/i], [F, [c, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[c, "Chromium OS"], F], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [c, F], [/(sunos) ?([\w\.\d]*)/i], [[c, "Solaris"], F], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [c, F]]
  };
  function q(e, t) {
    if (typeof e === u) {
      t = e;
      e = r;
    }
    if (!(this instanceof q)) {
      return new q(e, t).getResult();
    }
    var n = e || (typeof s !== o && s.navigator && s.navigator.userAgent ? s.navigator.userAgent : "");
    var i = t ? function (e, t) {
      var n = {};
      for (var i in e) {
        if (t[i] && t[i].length % 2 == 0) {
          n[i] = t[i].concat(e[i]);
        } else {
          n[i] = e[i];
        }
      }
      return n;
    }(J, t) : J;
    this.getBrowser = function () {
      var e;
      var t = {
        name: r,
        version: r
      };
      P.call(t, n, i.browser);
      t.major = typeof (e = t.version) === g ? e.replace(/[^\d\.]/g, "").split(".")[0] : r;
      return t;
    };
    this.getCPU = function () {
      var e = {
        architecture: r
      };
      P.call(e, n, i.cpu);
      return e;
    };
    this.getDevice = function () {
      var e = {
        vendor: r,
        model: r,
        type: r
      };
      P.call(e, n, i.device);
      return e;
    };
    this.getEngine = function () {
      var e = {
        name: r,
        version: r
      };
      P.call(e, n, i.engine);
      return e;
    };
    this.getOS = function () {
      var e = {
        name: r,
        version: r
      };
      P.call(e, n, i.os);
      return e;
    };
    this.getResult = function () {
      return {
        ua: this.getUA(),
        browser: this.getBrowser(),
        engine: this.getEngine(),
        os: this.getOS(),
        device: this.getDevice(),
        cpu: this.getCPU()
      };
    };
    this.getUA = function () {
      return n;
    };
    this.setUA = function (e) {
      n = typeof e === g && e.length > 255 ? H(e, 255) : e;
      return this;
    };
    this.setUA(n);
    return this;
  }
  q.VERSION = "1.0.2";
  q.BROWSER = O([c, F, "major"]);
  q.CPU = O([f]);
  q.DEVICE = O([h, d, l, C, p, A, y, E, _]);
  q.ENGINE = q.OS = O([c, F]);
  if (typeof exports !== o) {
    if (module.exports) {
      exports = module.exports = q;
    }
    exports.UAParser = q;
  } else if (require.amdO) {
    if ((i = function () {
      return q;
    }.call(exports, require, exports, module)) !== r) {
      module.exports = i;
    }
  } else if (typeof s !== o) {
    s.UAParser = q;
  }
  var R = typeof s !== o && (s.jQuery || s.Zepto);
  if (R && !R.ua) {
    var U = new q();
    R.ua = U.getResult();
    R.ua.get = function () {
      return U.getUA();
    };
    R.ua.set = function (e) {
      U.setUA(e);
      var t = U.getResult();
      for (var n in t) {
        R.ua[n] = t[n];
      }
    };
  }
})(typeof window == "object" ? window : this);