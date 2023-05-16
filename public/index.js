(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/ua-parser-js/src/ua-parser.js
  var require_ua_parser = __commonJS({
    "node_modules/ua-parser-js/src/ua-parser.js"(exports, module) {
      (function(window2, undefined) {
        "use strict";
        var LIBVERSION = "1.0.35", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 350;
        var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", VIERA = "Viera", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
        var extend = function(regexes2, extensions) {
          var mergedRegexes = {};
          for (var i in regexes2) {
            if (extensions[i] && extensions[i].length % 2 === 0) {
              mergedRegexes[i] = extensions[i].concat(regexes2[i]);
            } else {
              mergedRegexes[i] = regexes2[i];
            }
          }
          return mergedRegexes;
        }, enumerize = function(arr) {
          var enums = {};
          for (var i = 0; i < arr.length; i++) {
            enums[arr[i].toUpperCase()] = arr[i];
          }
          return enums;
        }, has = function(str1, str2) {
          return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        }, lowerize = function(str) {
          return str.toLowerCase();
        }, majorize = function(version) {
          return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
        }, trim = function(str, len) {
          if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
          }
        };
        var rgxMapper = function(ua, arrays) {
          var i = 0, j, k, p, q, matches, match;
          while (i < arrays.length && !matches) {
            var regex = arrays[i], props = arrays[i + 1];
            j = k = 0;
            while (j < regex.length && !matches) {
              if (!regex[j]) {
                break;
              }
              matches = regex[j++].exec(ua);
              if (!!matches) {
                for (p = 0; p < props.length; p++) {
                  match = matches[++k];
                  q = props[p];
                  if (typeof q === OBJ_TYPE && q.length > 0) {
                    if (q.length === 2) {
                      if (typeof q[1] == FUNC_TYPE) {
                        this[q[0]] = q[1].call(this, match);
                      } else {
                        this[q[0]] = q[1];
                      }
                    } else if (q.length === 3) {
                      if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                      } else {
                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                      }
                    } else if (q.length === 4) {
                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    }
                  } else {
                    this[q] = match ? match : undefined;
                  }
                }
              }
            }
            i += 2;
          }
        }, strMapper = function(str, map) {
          for (var i in map) {
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
              for (var j = 0; j < map[i].length; j++) {
                if (has(map[i][j], str)) {
                  return i === UNKNOWN ? undefined : i;
                }
              }
            } else if (has(map[i], str)) {
              return i === UNKNOWN ? undefined : i;
            }
          }
          return str;
        };
        var oldSafariMap = {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }, windowsVersionMap = {
          "ME": "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          "2000": "NT 5.0",
          "XP": ["NT 5.1", "NT 5.2"],
          "Vista": "NT 6.0",
          "7": "NT 6.1",
          "8": "NT 6.2",
          "8.1": "NT 6.3",
          "10": ["NT 6.4", "NT 10.0"],
          "RT": "ARM"
        };
        var regexes = {
          browser: [
            [
              /\b(?:crmo|crios)\/([\w\.]+)/i
              // Chrome for Android/iOS
            ],
            [VERSION, [NAME, "Chrome"]],
            [
              /edg(?:e|ios|a)?\/([\w\.]+)/i
              // Microsoft Edge
            ],
            [VERSION, [NAME, "Edge"]],
            [
              // Presto based
              /(opera mini)\/([-\w\.]+)/i,
              // Opera Mini
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              // Opera Mobi/Tablet
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
              // Opera
            ],
            [NAME, VERSION],
            [
              /opios[\/ ]+([\w\.]+)/i
              // Opera mini on iphone >= 8.0
            ],
            [VERSION, [NAME, OPERA + " Mini"]],
            [
              /\bopr\/([\w\.]+)/i
              // Opera Webkit
            ],
            [VERSION, [NAME, OPERA]],
            [
              // Mixed
              /(kindle)\/([\w\.]+)/i,
              // Kindle
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              // Lunascape/Maxthon/Netfront/Jasmine/Blazer
              // Trident based
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              // Avant/IEMobile/SlimBrowser
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              // Baidu Browser
              /(?:ms|\()(ie) ([\w\.]+)/i,
              // Internet Explorer
              // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
              /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
              // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
              /(heytap|ovi)browser\/([\d\.]+)/i,
              // Heytap/Ovi
              /(weibo)__([\d\.]+)/i
              // Weibo
            ],
            [NAME, VERSION],
            [
              /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
              // UCBrowser
            ],
            [VERSION, [NAME, "UC" + BROWSER]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              // WeChat Desktop for Windows Built-in Browser
              /\bqbcore\/([\w\.]+).+microm/i
            ],
            [VERSION, [NAME, "WeChat(Win) Desktop"]],
            [
              /micromessenger\/([\w\.]+)/i
              // WeChat
            ],
            [VERSION, [NAME, "WeChat"]],
            [
              /konqueror\/([\w\.]+)/i
              // Konqueror
            ],
            [VERSION, [NAME, "Konqueror"]],
            [
              /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
              // IE11
            ],
            [VERSION, [NAME, "IE"]],
            [
              /ya(?:search)?browser\/([\w\.]+)/i
              // Yandex
            ],
            [VERSION, [NAME, "Yandex"]],
            [
              /(avast|avg)\/([\w\.]+)/i
              // Avast/AVG Secure Browser
            ],
            [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
            [
              /\bfocus\/([\w\.]+)/i
              // Firefox Focus
            ],
            [VERSION, [NAME, FIREFOX + " Focus"]],
            [
              /\bopt\/([\w\.]+)/i
              // Opera Touch
            ],
            [VERSION, [NAME, OPERA + " Touch"]],
            [
              /coc_coc\w+\/([\w\.]+)/i
              // Coc Coc Browser
            ],
            [VERSION, [NAME, "Coc Coc"]],
            [
              /dolfin\/([\w\.]+)/i
              // Dolphin
            ],
            [VERSION, [NAME, "Dolphin"]],
            [
              /coast\/([\w\.]+)/i
              // Opera Coast
            ],
            [VERSION, [NAME, OPERA + " Coast"]],
            [
              /miuibrowser\/([\w\.]+)/i
              // MIUI Browser
            ],
            [VERSION, [NAME, "MIUI " + BROWSER]],
            [
              /fxios\/([-\w\.]+)/i
              // Firefox for iOS
            ],
            [VERSION, [NAME, FIREFOX]],
            [
              /\bqihu|(qi?ho?o?|360)browser/i
              // 360
            ],
            [[NAME, "360 " + BROWSER]],
            [
              /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ],
            [[NAME, /(.+)/, "$1 " + BROWSER], VERSION],
            [
              // Oculus/Samsung/Sailfish/Huawei Browser
              /(comodo_dragon)\/([\w\.]+)/i
              // Comodo Dragon
            ],
            [[NAME, /_/g, " "], VERSION],
            [
              /(electron)\/([\w\.]+) safari/i,
              // Electron-based App
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              // Tesla
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
              // QQBrowser/Baidu App/2345 Browser
            ],
            [NAME, VERSION],
            [
              /(metasr)[\/ ]?([\w\.]+)/i,
              // SouGouBrowser
              /(lbbrowser)/i,
              // LieBao Browser
              /\[(linkedin)app\]/i
              // LinkedIn App for iOS & Android
            ],
            [NAME],
            [
              // WebView
              /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
              // Facebook App for iOS & Android
            ],
            [[NAME, FACEBOOK], VERSION],
            [
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              // Kakao App
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              // Naver InApp
              /safari (line)\/([\w\.]+)/i,
              // Line App for iOS
              /\b(line)\/([\w\.]+)\/iab/i,
              // Line App for Android
              /(chromium|instagram)[\/ ]([-\w\.]+)/i
              // Chromium/Instagram
            ],
            [NAME, VERSION],
            [
              /\bgsa\/([\w\.]+) .*safari\//i
              // Google Search Appliance on iOS
            ],
            [VERSION, [NAME, "GSA"]],
            [
              /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
              // TikTok
            ],
            [VERSION, [NAME, "TikTok"]],
            [
              /headlesschrome(?:\/([\w\.]+)| )/i
              // Chrome Headless
            ],
            [VERSION, [NAME, CHROME + " Headless"]],
            [
              / wv\).+(chrome)\/([\w\.]+)/i
              // Chrome WebView
            ],
            [[NAME, CHROME + " WebView"], VERSION],
            [
              /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
              // Android Browser
            ],
            [VERSION, [NAME, "Android " + BROWSER]],
            [
              /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
              // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [NAME, VERSION],
            [
              /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
              // Mobile Safari
            ],
            [VERSION, [NAME, "Mobile Safari"]],
            [
              /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
              // Safari & Safari Mobile
            ],
            [VERSION, NAME],
            [
              /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
              // Safari < 3.0
            ],
            [NAME, [VERSION, strMapper, oldSafariMap]],
            [
              /(webkit|khtml)\/([\w\.]+)/i
            ],
            [NAME, VERSION],
            [
              // Gecko based
              /(navigator|netscape\d?)\/([-\w\.]+)/i
              // Netscape
            ],
            [[NAME, "Netscape"], VERSION],
            [
              /mobile vr; rv:([\w\.]+)\).+firefox/i
              // Firefox Reality
            ],
            [VERSION, [NAME, FIREFOX + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              // Flow
              /(swiftfox)/i,
              // Swiftfox
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
              /(firefox)\/([\w\.]+)/i,
              // Other Firefox-based
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              // Mozilla
              // Other
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
              /(links) \(([\w\.]+)/i,
              // Links
              /panasonic;(viera)/i
              // Panasonic Viera
            ],
            [NAME, VERSION],
            [
              /(cobalt)\/([\w\.]+)/i
              // Cobalt
            ],
            [NAME, [VERSION, /master.|lts./, ""]]
          ],
          cpu: [
            [
              /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
              // AMD64 (x64)
            ],
            [[ARCHITECTURE, "amd64"]],
            [
              /(ia32(?=;))/i
              // IA32 (quicktime)
            ],
            [[ARCHITECTURE, lowerize]],
            [
              /((?:i[346]|x)86)[;\)]/i
              // IA32 (x86)
            ],
            [[ARCHITECTURE, "ia32"]],
            [
              /\b(aarch64|arm(v?8e?l?|_?64))\b/i
              // ARM64
            ],
            [[ARCHITECTURE, "arm64"]],
            [
              /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
              // ARMHF
            ],
            [[ARCHITECTURE, "armhf"]],
            [
              // PocketPC mistakenly identified as PowerPC
              /windows (ce|mobile); ppc;/i
            ],
            [[ARCHITECTURE, "arm"]],
            [
              /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
              // PowerPC
            ],
            [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
            [
              /(sun4\w)[;\)]/i
              // SPARC
            ],
            [[ARCHITECTURE, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
              // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ],
            [[ARCHITECTURE, lowerize]]
          ],
          device: [
            [
              //////////////////////////
              // MOBILES & TABLETS
              /////////////////////////
              // Samsung
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i
            ],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
            [
              // Apple
              /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
              // iPod/iPhone
            ],
            [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              // iPad
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
            [
              /(macintosh);/i
            ],
            [MODEL, [VENDOR, APPLE]],
            [
              // Sharp
              /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
            [
              // Huawei
              /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
            [
              // Xiaomi
              /\b(poco[\w ]+)(?: bui|\))/i,
              // Xiaomi POCO
              /\b; (\w+) build\/hm\1/i,
              // Xiaomi Hongmi 'numeric' models
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              // Xiaomi Hongmi
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              // Xiaomi Redmi
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
              // Xiaomi Mi
            ],
            [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
            [
              /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
              // Mi Pad tablets
            ],
            [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
            [
              // OPPO
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
            [
              // Vivo
              /vivo (\w+)(?: bui|\))/i,
              /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
            [
              // Realme
              /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ],
            [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
            [
              // Motorola
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
            [
              /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
            [
              // LG
              /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [MODEL, [VENDOR, LG], [TYPE, TABLET]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i
            ],
            [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
            [
              // Lenovo
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
            [
              // Nokia
              /(?:maemo|nokia).*(n900|lumia \d+)/i,
              /nokia[-_ ]?([-\w\.]*)/i
            ],
            [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
            [
              // Google
              /(pixel c)\b/i
              // Google Pixel C
            ],
            [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
            [
              /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
              // Google Pixel
            ],
            [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
            [
              // Sony
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
            [
              /sony tablet [ps]/i,
              /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
            [
              // OnePlus
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
            [
              // Amazon
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              // Kindle Fire without Silk / Echo Show
              /(kf[a-z]+)( bui|\)).+silk\//i
              // Kindle Fire HD
            ],
            [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
            [
              /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
              // Fire Phone
            ],
            [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
            [
              // BlackBerry
              /(playbook);[-\w\),; ]+(rim)/i
              // BlackBerry PlayBook
            ],
            [MODEL, VENDOR, [TYPE, TABLET]],
            [
              /\b((?:bb[a-f]|st[hv])100-\d)/i,
              /\(bb10; (\w+)/i
              // BlackBerry 10
            ],
            [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
            [
              // Asus
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
            [
              / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
            [
              // HTC
              /(nexus 9)/i
              // HTC Nexus 9
            ],
            [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              // HTC
              // ZTE
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
              // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
            [
              // Acer
              /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
            [
              // Meizu
              /droid.+; (m[1-5] note) bui/i,
              /\bmz-([-\w]{2,})/i
            ],
            [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
            [
              // MIXED
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
              /(hp) ([\w ]+\w)/i,
              // HP iPAQ
              /(asus)-?(\w+)/i,
              // Asus
              /(microsoft); (lumia[\w ]+)/i,
              // Microsoft Lumia
              /(lenovo)[-_ ]?([-\w]+)/i,
              // Lenovo
              /(jolla)/i,
              // Jolla
              /(oppo) ?([\w ]+) bui/i
              // OPPO
            ],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [
              /(kobo)\s(ereader|touch)/i,
              // Kobo
              /(archos) (gamepad2?)/i,
              // Archos
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              // HP TouchPad
              /(kindle)\/([\w\.]+)/i,
              // Kindle
              /(nook)[\w ]+build\/(\w+)/i,
              // Nook
              /(dell) (strea[kpr\d ]*[\dko])/i,
              // Dell Streak
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              // Le Pan Tablets
              /(trinity)[- ]*(t\d{3}) bui/i,
              // Trinity Tablets
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              // Gigaset Tablets
              /(vodafone) ([\w ]+)(?:\)| bui)/i
              // Vodafone
            ],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [
              /(surface duo)/i
              // Surface Duo
            ],
            [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
            [
              /droid [\d\.]+; (fp\du?)(?: b|\))/i
              // Fairphone
            ],
            [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
            [
              /(u304aa)/i
              // AT&T
            ],
            [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
            [
              /\bsie-(\w*)/i
              // Siemens
            ],
            [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
            [
              /\b(rct\w+) b/i
              // RCA Tablets
            ],
            [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
            [
              /\b(venue[\d ]{2,7}) b/i
              // Dell Venue Tablets
            ],
            [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
            [
              /\b(q(?:mv|ta)\w+) b/i
              // Verizon Tablet
            ],
            [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
            [
              /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
              // Barnes & Noble Tablet
            ],
            [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
            [
              /\b(tm\d{3}\w+) b/i
            ],
            [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
            [
              /\b(k88) b/i
              // ZTE K Series Tablet
            ],
            [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
            [
              /\b(nx\d{3}j) b/i
              // ZTE Nubia
            ],
            [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
            [
              /\b(gen\d{3}) b.+49h/i
              // Swiss GEN Mobile
            ],
            [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
            [
              /\b(zur\d{3}) b/i
              // Swiss ZUR Tablet
            ],
            [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
            [
              /\b((zeki)?tb.*\b) b/i
              // Zeki Tablets
            ],
            [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
            [
              /\b([yr]\d{2}) b/i,
              /\b(dragon[- ]+touch |dt)(\w{5}) b/i
              // Dragon Touch Tablet
            ],
            [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
            [
              /\b(ns-?\w{0,9}) b/i
              // Insignia Tablets
            ],
            [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
            [
              /\b((nxa|next)-?\w{0,9}) b/i
              // NextBook Tablets
            ],
            [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
            [
              /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
              // Voice Xtreme Phones
            ],
            [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
            [
              /\b(lvtel\-)?(v1[12]) b/i
              // LvTel Phones
            ],
            [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
            [
              /\b(ph-1) /i
              // Essential PH-1
            ],
            [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
            [
              /\b(v(100md|700na|7011|917g).*\b) b/i
              // Envizen Tablets
            ],
            [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
            [
              /\b(trio[-\w\. ]+) b/i
              // MachSpeed Tablets
            ],
            [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
            [
              /\btu_(1491) b/i
              // Rotor Tablets
            ],
            [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
            [
              /(shield[\w ]+) b/i
              // Nvidia Shield Tablets
            ],
            [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
            [
              /(sprint) (\w+)/i
              // Sprint Phones
            ],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [
              /(kin\.[onetw]{3})/i
              // Microsoft Kin
            ],
            [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
            [
              /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
              // Zebra
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
            [
              /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
            [
              ///////////////////
              // SMARTTVS
              ///////////////////
              /smart-tv.+(samsung)/i
              // Samsung
            ],
            [VENDOR, [TYPE, SMARTTV]],
            [
              /hbbtv.+maple;(\d+)/i
            ],
            [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
            [
              /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
              // LG SmartTV
            ],
            [[VENDOR, LG], [TYPE, SMARTTV]],
            [
              /(apple) ?tv/i
              // Apple TV
            ],
            [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
            [
              /crkey/i
              // Google Chromecast
            ],
            [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
            [
              /droid.+aft(\w)( bui|\))/i
              // Fire TV
            ],
            [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
            [
              /\(dtv[\);].+(aquos)/i,
              /(aquos-tv[\w ]+)\)/i
              // Sharp
            ],
            [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
            [
              /(bravia[\w ]+)( bui|\))/i
              // Sony
            ],
            [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
            [
              /(mitv-\w{5}) bui/i
              // Xiaomi
            ],
            [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
            [
              /Hbbtv.*(technisat) (.*);/i
              // TechniSAT
            ],
            [VENDOR, MODEL, [TYPE, SMARTTV]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              // Roku
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
              // HbbTV devices
            ],
            [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
            [
              /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
              // SmartTV from Unidentified Vendors
            ],
            [[TYPE, SMARTTV]],
            [
              ///////////////////
              // CONSOLES
              ///////////////////
              /(ouya)/i,
              // Ouya
              /(nintendo) ([wids3utch]+)/i
              // Nintendo
            ],
            [VENDOR, MODEL, [TYPE, CONSOLE]],
            [
              /droid.+; (shield) bui/i
              // Nvidia
            ],
            [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
            [
              /(playstation [345portablevi]+)/i
              // Playstation
            ],
            [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
            [
              /\b(xbox(?: one)?(?!; xbox))[\); ]/i
              // Microsoft Xbox
            ],
            [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
            [
              ///////////////////
              // WEARABLES
              ///////////////////
              /((pebble))app/i
              // Pebble
            ],
            [VENDOR, MODEL, [TYPE, WEARABLE]],
            [
              /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
              // Apple Watch
            ],
            [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
            [
              /droid.+; (glass) \d/i
              // Google Glass
            ],
            [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
            [
              /droid.+; (wt63?0{2,3})\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
            [
              /(quest( 2| pro)?)/i
              // Oculus Quest
            ],
            [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
            [
              ///////////////////
              // EMBEDDED
              ///////////////////
              /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
              // Tesla
            ],
            [VENDOR, [TYPE, EMBEDDED]],
            [
              /(aeobc)\b/i
              // Echo Dot
            ],
            [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
            [
              ////////////////////
              // MIXED (GENERIC)
              ///////////////////
              /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
              // Android Phones from Unidentified Vendors
            ],
            [MODEL, [TYPE, MOBILE]],
            [
              /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
              // Android Tablets from Unidentified Vendors
            ],
            [MODEL, [TYPE, TABLET]],
            [
              /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
              // Unidentifiable Tablet
            ],
            [[TYPE, TABLET]],
            [
              /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
              // Unidentifiable Mobile
            ],
            [[TYPE, MOBILE]],
            [
              /(android[-\w\. ]{0,9});.+buil/i
              // Generic Android Device
            ],
            [MODEL, [VENDOR, "Generic"]]
          ],
          engine: [
            [
              /windows.+ edge\/([\w\.]+)/i
              // EdgeHTML
            ],
            [VERSION, [NAME, EDGE + "HTML"]],
            [
              /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
              // Blink
            ],
            [VERSION, [NAME, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              // Presto
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
              /ekioh(flow)\/([\w\.]+)/i,
              // Flow
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              // KHTML/Tasman/Links
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              // iCab
              /\b(libweb)/i
            ],
            [NAME, VERSION],
            [
              /rv\:([\w\.]{1,9})\b.+(gecko)/i
              // Gecko
            ],
            [VERSION, NAME]
          ],
          os: [
            [
              // Windows
              /microsoft (windows) (vista|xp)/i
              // Windows (iTunes)
            ],
            [NAME, VERSION],
            [
              /(windows) nt 6\.2; (arm)/i,
              // Windows RT
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              // Windows Phone
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ],
            [NAME, [VERSION, strMapper, windowsVersionMap]],
            [
              /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [[NAME, "Windows"], [VERSION, strMapper, windowsVersionMap]],
            [
              // iOS/macOS
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              // iOS
              /ios;fbsv\/([\d\.]+)/i,
              /cfnetwork\/.+darwin/i
            ],
            [[VERSION, /_/g, "."], [NAME, "iOS"]],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i
              // Mac OS
            ],
            [[NAME, MAC_OS], [VERSION, /_/g, "."]],
            [
              // Mobile OSes
              /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
              // Android-x86/HarmonyOS
            ],
            [VERSION, NAME],
            [
              // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              // Blackberry
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              // Tizen/KaiOS
              /\((series40);/i
              // Series 40
            ],
            [NAME, VERSION],
            [
              /\(bb(10);/i
              // BlackBerry 10
            ],
            [VERSION, [NAME, BLACKBERRY]],
            [
              /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
              // Symbian
            ],
            [VERSION, [NAME, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
              // Firefox OS
            ],
            [VERSION, [NAME, FIREFOX + " OS"]],
            [
              /web0s;.+rt(tv)/i,
              /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
              // WebOS
            ],
            [VERSION, [NAME, "webOS"]],
            [
              /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
              // watchOS
            ],
            [VERSION, [NAME, "watchOS"]],
            [
              // Google Chromecast
              /crkey\/([\d\.]+)/i
              // Google Chromecast
            ],
            [VERSION, [NAME, CHROME + "cast"]],
            [
              /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
              // Chromium OS
            ],
            [[NAME, CHROMIUM_OS], VERSION],
            [
              // Smart TVs
              /panasonic;(viera)/i,
              // Panasonic Viera
              /(netrange)mmh/i,
              // Netrange
              /(nettv)\/(\d+\.[\w\.]+)/i,
              // NetTV
              // Console
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              // Nintendo/Playstation
              /(xbox); +xbox ([^\);]+)/i,
              // Microsoft Xbox (360, One, X, S, Series X, Series S)
              // Other
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              // Joli/Palm
              /(mint)[\/\(\) ]?(\w*)/i,
              // Mint
              /(mageia|vectorlinux)[; ]/i,
              // Mageia/VectorLinux
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
              /(hurd|linux) ?([\w\.]*)/i,
              // Hurd/Linux
              /(gnu) ?([\w\.]*)/i,
              // GNU
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
              /(haiku) (\w+)/i
              // Haiku
            ],
            [NAME, VERSION],
            [
              /(sunos) ?([\w\.\d]*)/i
              // Solaris
            ],
            [[NAME, "Solaris"], VERSION],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              // Solaris
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              // AIX
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
              /(unix) ?([\w\.]*)/i
              // UNIX
            ],
            [NAME, VERSION]
          ]
        };
        var UAParser2 = function(ua, extensions) {
          if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
          }
          if (!(this instanceof UAParser2)) {
            return new UAParser2(ua, extensions).getResult();
          }
          var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined;
          var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
          var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined;
          var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
          var _isSelfNav = _navigator && _navigator.userAgent == _ua;
          this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
              _browser[NAME] = "Brave";
            }
            return _browser;
          };
          this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
          };
          this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
              _device[TYPE] = MOBILE;
            }
            if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
              _device[MODEL] = "iPad";
              _device[TYPE] = TABLET;
            }
            return _device;
          };
          this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
          };
          this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != "Unknown") {
              _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
            }
            return _os;
          };
          this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          };
          this.getUA = function() {
            return _ua;
          };
          this.setUA = function(ua2) {
            _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
            return this;
          };
          this.setUA(_ua);
          return this;
        };
        UAParser2.VERSION = LIBVERSION;
        UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
        UAParser2.CPU = enumerize([ARCHITECTURE]);
        UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
        UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
        if (typeof exports !== UNDEF_TYPE) {
          if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser2;
          }
          exports.UAParser = UAParser2;
        } else {
          if (typeof define === FUNC_TYPE && define.amd) {
            define(function() {
              return UAParser2;
            });
          } else if (typeof window2 !== UNDEF_TYPE) {
            window2.UAParser = UAParser2;
          }
        }
        var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
        if ($ && !$.ua) {
          var parser = new UAParser2();
          $.ua = parser.getResult();
          $.ua.get = function() {
            return parser.getUA();
          };
          $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
              $.ua[prop] = result[prop];
            }
          };
        }
      })(typeof window === "object" ? window : exports);
    }
  });

  // src/states/boot.js
  var BootState = {
    preload: function() {
      Engine.game.load.image("progressBar", Engine.BASE_URL + "assets/progressBar.png");
    },
    create: function() {
      Engine.game.physics.startSystem(Phaser.Physics.ARCADE);
      Engine.game.time.advancedTiming = true;
      Engine.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      Engine.game.scale.setShowAll();
      Engine.game.scale.pageAlignHorizontally = true;
      Engine.game.scale.pageAlignVeritcally = true;
      Engine.game.scale.refresh();
      Engine.game.state.start("load");
    }
  };
  var boot_default = BootState;

  // src/states/load.js
  var LoadState = {
    preload: function() {
      var loadingLabel = Engine.game.add.text(Engine.game.world.centerX, 150, "loading...", { font: "30px Space Mono", fill: "#ffffff" });
      loadingLabel.anchor.setTo(0.5, 0.5);
      var progressBar = Engine.game.add.sprite(Engine.game.world.centerX, 200, "progressBar");
      progressBar.anchor.setTo(0.5, 0.5);
      Engine.game.load.setPreloadSprite(progressBar);
      Engine.game.load.image("pixel", Engine.BASE_URL + "assets/red_particle.png");
      Engine.game.load.image("bullet", Engine.BASE_URL + "assets/bullet.png");
      Engine.game.load.image("smoke", Engine.BASE_URL + "assets/smoke.png");
      Engine.game.load.image("dust", Engine.BASE_URL + "assets/dust.png");
      Engine.game.load.image("puff", Engine.BASE_URL + "assets/puff.png");
      Engine.game.load.image("smoke-small", Engine.BASE_URL + "assets/smoke-small.png");
      Engine.game.load.image("projectile", Engine.BASE_URL + "assets/projectile.png");
      Engine.game.load.image("environment", Engine.backgroundImage);
      Engine.game.load.image("building-deco", Engine.BASE_URL + "assets/building-deco.png");
      Engine.game.load.image("pyramid-tower", Engine.BASE_URL + "assets/pyramid-tower.png");
      Engine.game.load.image("small-building", Engine.BASE_URL + "assets/small-building.png");
      Engine.game.load.image("tower-clock", Engine.BASE_URL + "assets/tower-clock.png");
      Engine.game.load.image("small-tower", Engine.BASE_URL + "assets/small-tower.png");
      Engine.game.load.image("truck", Engine.BASE_URL + "assets/truck.png");
      Engine.game.load.image("tank", Engine.BASE_URL + "assets/tank.png");
      Engine.game.load.image("chopper", Engine.BASE_URL + "assets/chopper-1.png");
      Engine.game.load.image("jet", Engine.BASE_URL + "assets/jet.png");
      Engine.game.load.image("start", Engine.BASE_URL + "assets/start.png");
      let playerData = Engine.playerData;
      Engine.game.load.spritesheet("player", Engine.BASE_URL + playerData.sprite, playerData.frameWidth, playerData.frameHeight);
      Engine.textures = {};
      let projectileGraphic = this.make.graphics({ x: 0, y: 0, add: false });
      projectileGraphic.beginFill(12109012);
      projectileGraphic.drawCircle(0, 0, 75);
      projectileGraphic.endFill();
      Engine.textures.projectile = projectileGraphic.generateTexture();
    },
    create: function() {
      Engine.game.state.start("menu");
    }
  };
  var load_default = LoadState;

  // src/states/menu.js
  var MenuState = {
    create: function() {
      Engine.game.camera.reset();
      Engine.game.stage.backgroundColor = "#0a0401";
      let fontSize = Engine.device.type == "mobile" ? "30px" : "44px";
      var titleLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, 150, "GamesMeanEverything presents..", { font: `16px Space Mono`, fill: "#ffffff" });
      titleLabel.anchor.setTo(0.5, 0.5);
      let levelY = 225;
      var levelLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, levelY, `KING METABOY`, { font: `${fontSize} Space Mono`, fill: "#ffffff" });
      levelLabel.anchor.setTo(0.5, 0.5);
      let startY = levelY + 100;
      var startButton = Engine.game.add.sprite(Engine.GAME_WIDTH / 2, startY, "start");
      startButton.anchor.setTo(0.5, 0.5);
      startButton.alpha = 0.75;
      startButton.inputEnabled = true;
      startButton.input.useHandCursor = true;
      startButton.events.onInputUp.add(this.start, this);
      Engine.game.add.tween(startButton).to({ alpha: 1 }, 1e3, Phaser.Easing.Linear.None, true, 0.75, 500, true);
      var startKey = Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      startKey.onDown.addOnce(this.start, this);
    },
    start: function() {
      Engine.game.time.events.add(500, function() {
        Engine.game.state.start("play");
      });
    }
  };
  var menu_default = MenuState;

  // src/objects/player.js
  var range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  };
  var Player = class {
    constructor() {
      this.sprite = Engine.game.add.sprite(0, Engine.GAME_HEIGHT - 50, "player");
      this.sprite.animations.add("left", range(0, Engine.playerData.frames / 2), Engine.playerData.frameRate, true);
      this.sprite.animations.add("right", range(Engine.playerData.frames / 2, Engine.playerData.frames).reverse(), Engine.playerData.frameRate, true);
      this.sprite.anchor.setTo(0.5, 0.5);
      Engine.game.physics.arcade.enable(this.sprite);
      this.sprite.body.gravity.y = Engine.gravity;
      this.sprite.body.collideWorldBounds = true;
      this.health = 100;
      this.nextFire = 0;
      this.fireRate = 500;
      this.alive = true;
      this.facing = "right";
      this.movingX = false;
      this.movingY = false;
      this.speed = 306 * Engine.playerData.speedFactor;
      this.projectiles = Engine.game.add.group();
      this.projectiles.enableBody = true;
      this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
      this.projectiles.createMultiple(12, "projectile", 0, false);
      this.projectiles.setAll("anchor.x", 0.5);
      this.projectiles.setAll("anchor.y", 0.5);
      this.projectiles.setAll("outOfBoundsKill", true);
      this.projectiles.setAll("checkWorldBounds", true);
    }
    fire() {
      if (Engine.game.time.now > this.nextFire && this.projectiles.countDead() > 0 && this.alive) {
        this.nextFire = Engine.game.time.now + this.fireRate;
        for (let i = 0; i < 2; i++) {
          let projectile = this.projectiles.getFirstExists(false);
          let px;
          let py;
          if (i == 0) {
            px = this.sprite.x - 50;
            py = this.sprite.y - 100;
          } else {
            px = this.sprite.x + 50;
            py = this.sprite.y - 100;
          }
          projectile.reset(px, py);
          projectile.velocity = 150;
          projectile.rotation = Engine.game.physics.arcade.angleToPointer(projectile);
          Engine.game.physics.arcade.velocityFromAngle(projectile.angle, 750, projectile.body.velocity);
          projectile.emitter = Engine.game.add.emitter(px, py, 100);
          projectile.emitter.placement = "top";
          projectile.emitter.makeParticles("smoke");
          projectile.emitter.setYSpeed(0);
          projectile.emitter.setXSpeed(-350);
          projectile.emitter.gravity = 0;
          projectile.emitter.setAlpha(1, 0, 500);
          projectile.emitter.setScale(0.7, 0.5, 0.7, 0.5, 1e3);
          projectile.emitter.start(false, 500, 150);
          Engine.particles.startSmallExplosion(Engine.particles.puff, px, py);
        }
      }
    }
  };

  // src/objects/buildings.js
  var BUILDING_TYPES = [
    {
      sprite: "building-deco",
      height: 400,
      width: 250,
      health: 8
    },
    {
      sprite: "small-building",
      height: 350,
      width: 390,
      health: 4
    },
    {
      sprite: "pyramid-tower",
      height: 600,
      width: 200,
      health: 6
    },
    {
      sprite: "tower-clock",
      height: 400,
      width: 144,
      health: 4
    },
    {
      sprite: "small-tower",
      height: 300,
      width: 300,
      health: 4
    }
  ];
  var Buildings = class {
    constructor() {
      this.group = Engine.game.add.group();
      this.group.enableBody = true;
      this.group.physicsBodyType = Phaser.Physics.ARCADE;
      this.group.setAll("outOfBoundsKill", true);
      this.group.setAll("checkWorldBounds", true);
      this.spawnTime = 0;
    }
    spawn() {
      const buildingType = BUILDING_TYPES[Engine.game.rnd.integerInRange(0, BUILDING_TYPES.length - 1)];
      let building = this.group.create(
        Engine.GAME_WIDTH - 1,
        Engine.GAME_HEIGHT - buildingType.height,
        buildingType.sprite
      );
      building.body.gravity.y = 0;
      building.body.immovable = true;
      building.body.velocity.x = -Engine.GAME_SPEED;
      building.health = buildingType.health;
      building.objectType = "building";
      return building;
    }
    update() {
      if (this.spawnTime < Engine.levelTime) {
        this.spawn();
        this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3, 5);
      }
    }
  };

  // src/objects/vehicles.js
  var VEHICLE_TYPES = [
    {
      sprite: "truck",
      height: 63,
      width: 128,
      health: 2,
      speed: 200,
      damage: 1,
      fireRate: 400
    },
    {
      sprite: "tank",
      height: 74,
      width: 128,
      health: 6,
      speed: 100,
      damage: 5,
      fireRate: 800
    },
    {
      sprite: "chopper",
      height: 51,
      width: 175,
      health: 2,
      speed: -250,
      damage: 5,
      fireRate: 200
    },
    {
      sprite: "jet",
      height: 67,
      width: 163,
      health: 2,
      speed: 500,
      damage: 5,
      fireRate: 150
    }
  ];
  var Vehicles = class {
    constructor() {
      this.group = Engine.game.add.group();
      this.group.enableBody = true;
      this.group.physicsBodyType = Phaser.Physics.ARCADE;
      this.group.setAll("checkWorldBounds", true);
      this.spawnTime = 0;
      this.projectiles = Engine.game.add.group();
      this.projectiles.enableBody = true;
      this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
      this.projectiles.createMultiple(50, "bullet", 0, false);
      this.projectiles.setAll("anchor.x", 0.5);
      this.projectiles.setAll("anchor.y", 0.5);
      this.projectiles.setAll("outOfBoundsKill", true);
      this.projectiles.setAll("checkWorldBounds", true);
    }
    spawn() {
      const vehicleType = VEHICLE_TYPES[Engine.game.rnd.integerInRange(0, VEHICLE_TYPES.length - 1)];
      let vx, vy;
      switch (vehicleType.sprite) {
        case "chopper":
          vx = Engine.GAME_WIDTH - 1;
          vy = Engine.GAME_HEIGHT * 0.125;
          break;
        case "jet":
          vx = 1;
          vy = Engine.GAME_HEIGHT * 0.08;
          break;
        default:
          vx = 1;
          vy = Engine.GAME_HEIGHT - vehicleType.height - 20;
          break;
      }
      let vehicle = this.group.create(
        vx,
        vy,
        vehicleType.sprite
      );
      vehicle.body.gravity.y = 0;
      vehicle.body.immovable = true;
      vehicle.body.velocity.x = vehicleType.speed;
      vehicle.health = vehicleType.health;
      vehicle.config = vehicleType;
      vehicle.objectType = "vehicle";
      vehicle.nextFire = 0;
      return vehicle;
    }
    update() {
      if (this.spawnTime < Engine.levelTime && Engine.score > 350) {
        this.spawn();
        this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(2, 4);
      }
      this.group.forEachAlive(function(vehicle) {
        if (Engine.game.time.now > vehicle.nextFire && this.projectiles.countDead() > 0) {
          let projectile = this.projectiles.getFirstExists(false);
          let px = vehicle.centerX;
          let py = vehicle.centerY;
          projectile.reset(px, py);
          Engine.game.physics.arcade.moveToObject(projectile, Engine.player.sprite, 750);
          vehicle.nextFire = Engine.game.time.now + vehicle.config.fireRate;
        }
      }, this);
    }
    fire(vehicle) {
      if (Engine.game.time.now > vehicle.nextFire && this.projectiles.countDead() > 0) {
        let projectile = this.projectiles.getFirstExists(false);
        let px = vehicle.centerX;
        let py = vehicle.centerY;
        projectile.reset(px, py);
        Engine.game.physics.arcade.moveToObject(projectile, Engine.player.sprite, 120);
        vehicle.nextFire = Engine.game.time.now + vehicle.fireRate;
      }
    }
  };

  // src/objects/particles.js
  var Particles = class {
    constructor() {
      this.splat = Engine.game.add.emitter(0, 0, 250);
      this.splat.makeParticles("pixel");
      this.splat.setYSpeed(-100, 25);
      this.splat.setXSpeed(-75, 75);
      this.splat.gravity = Engine.gravity / 2;
      this.splat.setAlpha(1, 0, 1e3);
      this.smoke = Engine.game.add.emitter(0, 0, 125);
      this.smoke.makeParticles("smoke");
      this.smoke.setYSpeed(-250, 250);
      this.smoke.setXSpeed(-350, 50);
      this.smoke.setAlpha(1, 0, 2e3);
      this.smoke.setScale(3, 0, 3, 0, 2e3);
      this.dust = Engine.game.add.emitter(0, 0, 125);
      this.dust.makeParticles("dust");
      this.dust.setYSpeed(-500, 500);
      this.dust.setXSpeed(-500, 250);
      this.dust.setAlpha(0.75, 0, 2e3);
      this.dust.setScale(1.5, 0, 1.5, 0, 2e3);
      this.puff = Engine.game.add.emitter(0, 0, 150);
      this.puff.makeParticles("puff");
      this.puff.setYSpeed(-250, 250);
      this.puff.setXSpeed(-350, 350);
      this.puff.setAlpha(0.75, 0, 750);
      this.puff.setScale(0.2, 1, 0.2, 1, 750);
      this.smallSmoke = Engine.game.add.emitter(0, 0, 250);
      this.smallSmoke.makeParticles("smoke");
      this.smallSmoke.setYSpeed(-100, 100);
      this.smallSmoke.setXSpeed(-100, 100);
      this.smallSmoke.setAlpha(1, 0, 1e3);
      this.smallSmoke.setScale(1.25, 0, 1.25, 0, 1e3);
    }
    startExplosion(emitter, x, y) {
      emitter.x = x;
      emitter.y = y;
      emitter.start(true, 2e3, null, 24);
      return;
    }
    startSmallExplosion(emitter, x, y) {
      emitter.x = x;
      emitter.y = y;
      emitter.start(true, 1e3, null, 12);
      return;
    }
    startDamageEmission(emitter, x, y) {
      emitter.x = x;
      emitter.y = y;
      emitter.start(true, 2e3, null, 9);
      return;
    }
    startSplat(emitter, x, y) {
      emitter.x = x;
      emitter.y = y;
      if (Engine.splatter > 0) {
        let splatter = 6 * Engine.splatter;
        emitter.start(true, 600, null, splatter);
      }
    }
    startCrumble(emitter, x, y) {
      emitter.x = x;
      emitter.y = y;
      emitter.start(true, 1240, null, 10);
    }
  };

  // src/states/play.js
  var PlayState = {
    create: function() {
      Engine.score = 0;
      Engine.game.stage.backgroundColor = Engine.backgroundColor;
      this.environment = Engine.game.add.tileSprite(0, 0, Engine.GAME_WIDTH, Engine.GAME_HEIGHT, "environment");
      this.environment.fixedToCamera = true;
      this.environment.autoScroll(-Engine.SCROLL_SPEED, 0);
      Engine.player = new Player();
      Engine.player.sprite.animations.play(Engine.player.facing);
      Engine.game.camera.reset();
      Engine.game.camera.follow(Engine.player.sprite, Phaser.Camera.FOLLOW_PLATFORMER);
      this.vehicles = new Vehicles();
      this.buildings = new Buildings();
      Engine.particles = new Particles();
      this.healthBar = Engine.game.add.graphics(8, 8);
      this.healthBar.fixedToCamera = true;
      this.drawHealthBar();
      this.gameText = Engine.game.add.text(10, 10, "0", { font: "18px Space Mono", fill: "#ffffff", align: "left" });
      this.gameText.fixedToCamera = true;
      this.scoreText = Engine.game.add.text(Engine.game.camera.width - 160, 10, "0", { font: "18px Space Mono", fill: "#ffffff", align: "left" });
      this.scoreText.fixedToCamera = true;
      this.messageBar = Engine.game.add.sprite(Engine.game.camera.width / 2, 56, "blackbar");
      this.messageBar.anchor.setTo(0.5, 0.5);
      this.messageBar.fixedToCamera = true;
      this.messageBar.alpha = 0;
      this.messageText = Engine.game.add.text(Engine.game.camera.width / 2, 56, "", { font: "18px Space Mono", fill: "#ffff00", align: "left" });
      this.messageText.anchor.setTo(0.5, 0.5);
      this.messageText.fixedToCamera = true;
      this.input = {
        // cursor:  Engine.game.input.keyboard.createCursorKeys(),
        left: Engine.game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: Engine.game.input.keyboard.addKey(Phaser.Keyboard.D),
        fire: Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
      };
      Engine.levelTime = 0;
      this.levelTimer = Engine.game.time.create(false);
      this.levelTimer.loop(100, function() {
        Engine.levelTime += 0.1;
        Engine.score += 1;
      }, this);
      this.levelTimer.start();
    },
    drawHealthBar: function() {
      var maxWidth = Engine.game.camera.width - 16;
      var height = 32;
      var width = maxWidth * (Engine.player.health / 100);
      this.healthBar.clear();
      if (width > 0) {
        this.healthBar.beginFill(7343360, 0.5);
        this.healthBar.lineStyle(2, 4852740, 0.8);
        this.healthBar.moveTo(0, 0);
        this.healthBar.lineTo(width, 0);
        this.healthBar.lineTo(width, height);
        this.healthBar.lineTo(0, height);
        this.healthBar.lineTo(0, 0);
        this.healthBar.endFill();
      }
    },
    update: function() {
      this.messageText.text = "";
      this.messageBar.alpha = 0;
      Engine.game.physics.arcade.overlap(Engine.player.sprite, this.buildings.group, this.hitPlayerBuldings, null, this);
      Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
      Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.buildings.group, this.hitProjectilesObjects, null, this);
      Engine.game.physics.arcade.overlap(Engine.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);
      if (this.game.input.activePointer.isDown) {
        Engine.player.fire();
      }
      this.updateMovement();
      this.vehicles.update();
      this.buildings.update();
      this.updateProjectiles();
      const healthText = Engine.player.health > 0 ? Engine.player.health : "dead";
      this.gameText.text = `Health: ${healthText}`;
      this.scoreText.text = `Score: ${Engine.score}`;
    },
    movePlayer: function(direction) {
      if (direction == "left" || direction == "right") {
        let directionFactor = direction == "left" ? -1 : 1;
        Engine.player.sprite.body.velocity.x = Engine.player.speed * directionFactor;
        Engine.player.facing = direction;
        Engine.player.movingX = true;
      } else {
        let directionFactor = direction == "up" ? -1 : 1;
        Engine.player.sprite.body.velocity.y = Engine.player.speed * directionFactor;
        Engine.player.movingY = true;
      }
      Engine.player.sprite.animations.play(Engine.player.facing);
    },
    updateMovement: function() {
      if (this.input.left.isDown) {
        this.movePlayer("left");
      } else if (this.input.right.isDown) {
        this.movePlayer("right");
      }
      if (!Engine.player.movingX) {
        Engine.player.sprite.body.velocity.x = 0;
      }
      if (!Engine.player.movingY) {
        Engine.player.sprite.body.velocity.y = 0;
      }
      Engine.player.movingX = false;
      Engine.player.movingY = false;
    },
    updateProjectiles: function() {
      Engine.player.projectiles.forEachAlive(function(projectile) {
        projectile.angle += Engine.game.rnd.integerInRange(1, 3);
        if (projectile.emitter) {
          projectile.emitter.x = projectile.world.x;
          projectile.emitter.y = projectile.world.y;
          if (projectile.emitter.x < 1 || projectile.emitter.x > Engine.GAME_WIDTH || projectile.emitter.y < 1 || projectile.emitter.y > Engine.GAME_HEIGHT) {
            projectile.emitter.kill();
          }
        }
      }, this);
    },
    // Callback for player projectile hits
    hitProjectilesObjects: function(_projectile, _object) {
      _object.health -= 1;
      if (_object.health > 0) {
        Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);
        if (_projectile.emitter) {
          _projectile.emitter.destroy();
        }
        _projectile.kill();
        Engine.score += 5;
      } else {
        Engine.particles.startExplosion(Engine.particles.smoke, _object.centerX, _object.centerY);
        if (_object.objectType == "building") {
          Engine.particles.startCrumble(Engine.particles.dust, _object.centerX, _object.centerY);
        }
        if (_projectile.emitter) {
          _projectile.emitter.destroy();
        }
        _projectile.kill();
        _object.kill();
        Engine.score += 100;
      }
    },
    hitPlayerEnemyProjectiles: function(_player, _projectile) {
      Engine.player.health -= 1;
      if (Engine.player.health > 0) {
        Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX + 50, _projectile.centerY);
        _projectile.kill();
      } else {
        Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX, _projectile.centerY);
        if (_projectile.emitter) {
          _projectile.emitter.destroy();
        }
        _projectile.kill();
        this.playerDie();
      }
      this.drawHealthBar();
      return;
    },
    // We do the damage here
    hitPlayerBuldings: function(_player, _building) {
      _building.health -= 0.1;
      if (_building.health > 0) {
        Engine.particles.startCrumble(Engine.particles.dust, _building.centerX, _building.centerY);
      } else {
        Engine.particles.startExplosion(Engine.particles.smoke, _building.centerX, _building.centerY);
        _building.kill();
        Engine.score += 100;
      }
      return;
    },
    playerDie: function() {
      if (Engine.player.alive) {
        Engine.player.alive = false;
        Engine.deaths += 1;
        Engine.levelDeaths += 1;
        Engine.player.sprite.kill();
        Engine.game.camera.flash(6231060, 850);
      }
      Engine.game.time.events.add(2500, function() {
        Engine.game.state.start("menu");
      }, this);
    },
    reset: function() {
    }
  };
  var play_default = PlayState;

  // src/states/summary.js
  var SummaryState = {
    create: function() {
      this.LEVEL_NAME = `${Engine.campaign} ${Engine.currentMap + 1}`;
      this.congrats = [];
      if (Engine.score == 100) {
        this.congrats.push("PERFECT RUN!");
      } else if (Engine.score < 11) {
        this.congrats.push("YOU BARELY ESCAPED!");
      }
      if (this.isBestTime) {
        this.congrats.push("NEW BEST TIME!");
      }
      Engine.game.camera.reset();
      Engine.game.stage.backgroundColor = "#0a0401";
      var clouds = Engine.game.add.tileSprite(0, 0, Engine.game.width, Engine.game.height, "clouds");
      clouds.fixedToCamera = true;
      clouds.alpha = 0.33;
      clouds.autoScroll(-10, -1);
      let startKey = Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      startKey.onDown.addOnce(this.start, this);
      if (Engine.currentMap < Engine.maps.length - 1) {
        this.buildSummaryUI();
      } else {
        this.buildEndgameUI();
      }
      var startLabel = Engine.game.add.sprite(Engine.game.camera.width / 2, Engine.game.camera.height - 160, "start");
      startLabel.anchor.setTo(0.5, 0.5);
      startLabel.alpha = 0.75;
      startLabel.inputEnabled = true;
      startLabel.input.useHandCursor = true;
      startLabel.events.onInputUp.add(this.start, this);
      Engine.game.add.tween(startLabel).to({ alpha: 1 }, 1e3, Phaser.Easing.Linear.None, true, 0.75, 500, true);
    },
    buildSummaryUI() {
      let nameLabel = Engine.game.add.text(Engine.game.camera.width / 2, 64, `Level ${Engine.currentMap + 1} complete`, { font: "32px Space Mono", fill: "#ffffff" });
      nameLabel.anchor.setTo(0.5, 0.5);
      let scoreLabel = Engine.game.add.text(Engine.game.camera.width / 2, 128, `Time: ${Engine.levelTime.toFixed(1)}`, { font: "32px Space Mono", fill: "#ffffff" });
      scoreLabel.anchor.setTo(0.5, 0.5);
      this.congrats.map((congrat, index) => {
        let congratsLabel = Engine.game.add.text(Engine.game.camera.width / 2, 192 + index * 64, congrat, { font: "32px Space Mono", fill: "#ffffff" });
        congratsLabel.anchor.setTo(0.5, 0.5);
      });
    },
    buildEndgameUI() {
      var nameLabel = Engine.game.add.text(Engine.game.camera.width / 2, 64, `You win!`, { font: "44px Space Mono", fill: "#ffffff" });
      nameLabel.anchor.setTo(0.5, 0.5);
      var scoreLabel = Engine.game.add.text(Engine.game.camera.width / 2, 128, `Time: ${Engine.levelTime.toFixed(1)}`, { font: "32px Space Mono", fill: "#ffffff" });
      scoreLabel.anchor.setTo(0.5, 0.5);
      var scoreLabel = Engine.game.add.text(Engine.game.camera.width / 2, 192, `Total Deaths: ${Engine.deaths}`, { font: "32px Space Mono", fill: "#ffffff" });
      scoreLabel.anchor.setTo(0.5, 0.5);
      this.congrats.map((congrat, index) => {
        let congratsLabel = Engine.game.add.text(Engine.game.camera.width / 2, 256 + index * 64, congrat, { font: "24px Space Mono", fill: "#ffffff" });
        congratsLabel.anchor.setTo(0.5, 0.5);
      });
    }
  };
  var summary_default = SummaryState;

  // src/game.js
  var import_ua_parser_js = __toESM(require_ua_parser());
  var Engine2 = {
    running: false,
    TILESIZE: 128,
    GAME_SPEED: 150,
    SCROLL_SPEED: 50,
    GAME_HEIGHT: 0,
    GAME_WIDTH: 0,
    BASE_URL: "/",
    GAMEMODES: {
      FREEPLAY: 1,
      CAMPAIGN: 2
    }
  };
  var Phaser2 = window.Phaser;
  function setCavasSize() {
    Engine2.GAME_WIDTH = 1280;
    Engine2.GAME_HEIGHT = 720;
  }
  function runGame(gameOptions) {
    console.log(`Welcome to my Metaboy Game Jam submission.`);
    let uap = new import_ua_parser_js.UAParser();
    Engine2.device = uap.getDevice();
    Engine2.maps = gameOptions.maps;
    Engine2.backgroundColor = gameOptions.backgroundColor;
    Engine2.backgroundImage = gameOptions.backgroundImage;
    Engine2.backgroundMusic = gameOptions.music;
    Engine2.currentMap = 0;
    Engine2.splatter = 1;
    Engine2.gravity = 0;
    Engine2.playerData = gameOptions.playerData;
    Engine2.weaponData = gameOptions.weaponData;
    Engine2.walletAddress = gameOptions.walletAddress;
    Engine2.sounds = {};
    Engine2.muteStatus = gameOptions.muted;
    Engine2.deaths = 0;
    Engine2.levelDeaths = 0;
    Engine2.levelTime = 0;
    Engine2.campaignTime = 0;
    setCavasSize();
    Engine2.game = new Phaser2.Game(Engine2.GAME_WIDTH, Engine2.GAME_HEIGHT, Phaser2.AUTO, "game");
    Engine2.musicPlaying = false;
    Engine2.game.state.add("boot", boot_default);
    Engine2.game.state.add("load", load_default);
    Engine2.game.state.add("menu", menu_default);
    Engine2.game.state.add("play", play_default);
    Engine2.game.state.add("summary", summary_default);
    Engine2.campaign = gameOptions.campaign;
    Engine2.running = true;
    Engine2.game.state.start("boot");
    window.Engine = Engine2;
  }

  // src/app.js
  function startGame() {
    runGame({
      // backgroundColor: "#a9d8e8",
      backgroundColor: "#1c0000",
      backgroundImage: "/assets/environment.png",
      // music: "/assets/music/green-zone.mp3",
      playerData: {
        "name": "OG MetaBoy #8847",
        "sprite": "assets/player-base.png",
        "leftFrame": 11,
        "rightFrame": 12,
        "frameHeight": 483,
        "frameWidth": 320,
        "frames": 24,
        "frameRate": 24,
        "speedFactor": 1.05,
        "jumpFactor": 0.983
      }
    });
    var gameEl = document.getElementById("game");
    if (gameEl) {
      gameEl.focus();
    }
  }
  window.onload = function() {
    startGame();
  };
})();
