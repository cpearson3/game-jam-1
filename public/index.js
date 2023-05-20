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

  // node_modules/webfontloader/webfontloader.js
  var require_webfontloader = __commonJS({
    "node_modules/webfontloader/webfontloader.js"(exports, module) {
      (function() {
        function aa(a, b, c) {
          return a.call.apply(a.bind, arguments);
        }
        function ba(a, b, c) {
          if (!a)
            throw Error();
          if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
              var c2 = Array.prototype.slice.call(arguments);
              Array.prototype.unshift.apply(c2, d);
              return a.apply(b, c2);
            };
          }
          return function() {
            return a.apply(b, arguments);
          };
        }
        function p(a, b, c) {
          p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
          return p.apply(null, arguments);
        }
        var q = Date.now || function() {
          return +/* @__PURE__ */ new Date();
        };
        function ca(a, b) {
          this.a = a;
          this.o = b || a;
          this.c = this.o.document;
        }
        var da = !!window.FontFace;
        function t(a, b, c, d) {
          b = a.c.createElement(b);
          if (c)
            for (var e in c)
              c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
          d && b.appendChild(a.c.createTextNode(d));
          return b;
        }
        function u(a, b, c) {
          a = a.c.getElementsByTagName(b)[0];
          a || (a = document.documentElement);
          a.insertBefore(c, a.lastChild);
        }
        function v(a) {
          a.parentNode && a.parentNode.removeChild(a);
        }
        function w(a, b, c) {
          b = b || [];
          c = c || [];
          for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = false, g = 0; g < d.length; g += 1)
              if (b[e] === d[g]) {
                f = true;
                break;
              }
            f || d.push(b[e]);
          }
          b = [];
          for (e = 0; e < d.length; e += 1) {
            f = false;
            for (g = 0; g < c.length; g += 1)
              if (d[e] === c[g]) {
                f = true;
                break;
              }
            f || b.push(d[e]);
          }
          a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
        }
        function y(a, b) {
          for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b)
              return true;
          return false;
        }
        function ea(a) {
          return a.o.location.hostname || a.a.location.hostname;
        }
        function z(a, b, c) {
          function d() {
            m && e && f && (m(g), m = null);
          }
          b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
          var e = false, f = true, g = null, m = c || null;
          da ? (b.onload = function() {
            e = true;
            d();
          }, b.onerror = function() {
            e = true;
            g = Error("Stylesheet failed to load");
            d();
          }) : setTimeout(function() {
            e = true;
            d();
          }, 0);
          u(a, "head", b);
        }
        function A(a, b, c, d) {
          var e = a.c.getElementsByTagName("head")[0];
          if (e) {
            var f = t(a, "script", { src: b }), g = false;
            f.onload = f.onreadystatechange = function() {
              g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = true, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
            };
            e.appendChild(f);
            setTimeout(function() {
              g || (g = true, c && c(Error("Script load timeout")));
            }, d || 5e3);
            return f;
          }
          return null;
        }
        ;
        function B() {
          this.a = 0;
          this.c = null;
        }
        function C(a) {
          a.a++;
          return function() {
            a.a--;
            D(a);
          };
        }
        function E(a, b) {
          a.c = b;
          D(a);
        }
        function D(a) {
          0 == a.a && a.c && (a.c(), a.c = null);
        }
        ;
        function F(a) {
          this.a = a || "-";
        }
        F.prototype.c = function(a) {
          for (var b = [], c = 0; c < arguments.length; c++)
            b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
          return b.join(this.a);
        };
        function G(a, b) {
          this.c = a;
          this.f = 4;
          this.a = "n";
          var c = (b || "n4").match(/^([nio])([1-9])$/i);
          c && (this.a = c[1], this.f = parseInt(c[2], 10));
        }
        function fa(a) {
          return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
        }
        function I(a) {
          var b = [];
          a = a.split(/,\s*/);
          for (var c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, "");
            -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
          }
          return b.join(",");
        }
        function J(a) {
          return a.a + a.f;
        }
        function H(a) {
          var b = "normal";
          "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
          return b;
        }
        function ga(a) {
          var b = 4, c = "n", d = null;
          a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
          return c + b;
        }
        ;
        function ha(a, b) {
          this.c = a;
          this.f = a.o.document.documentElement;
          this.h = b;
          this.a = new F("-");
          this.j = false !== b.events;
          this.g = false !== b.classes;
        }
        function ia(a) {
          a.g && w(a.f, [a.a.c("wf", "loading")]);
          K(a, "loading");
        }
        function L(a) {
          if (a.g) {
            var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
            b || c.push(a.a.c("wf", "inactive"));
            w(a.f, c, d);
          }
          K(a, "inactive");
        }
        function K(a, b, c) {
          if (a.j && a.h[b])
            if (c)
              a.h[b](c.c, J(c));
            else
              a.h[b]();
        }
        ;
        function ja() {
          this.c = {};
        }
        function ka(a, b, c) {
          var d = [], e;
          for (e in b)
            if (b.hasOwnProperty(e)) {
              var f = a.c[e];
              f && d.push(f(b[e], c));
            }
          return d;
        }
        ;
        function M(a, b) {
          this.c = a;
          this.f = b;
          this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
        }
        function N(a) {
          u(a.c, "body", a.a);
        }
        function O(a) {
          return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
        }
        ;
        function P(a, b, c, d, e, f) {
          this.g = a;
          this.j = b;
          this.a = d;
          this.c = c;
          this.f = e || 3e3;
          this.h = f || void 0;
        }
        P.prototype.start = function() {
          var a = this.c.o.document, b = this, c = q(), d = new Promise(function(d2, e2) {
            function f2() {
              q() - c >= b.f ? e2() : a.fonts.load(fa(b.a), b.h).then(function(a2) {
                1 <= a2.length ? d2() : setTimeout(f2, 25);
              }, function() {
                e2();
              });
            }
            f2();
          }), e = null, f = new Promise(function(a2, d2) {
            e = setTimeout(d2, b.f);
          });
          Promise.race([f, d]).then(function() {
            e && (clearTimeout(e), e = null);
            b.g(b.a);
          }, function() {
            b.j(b.a);
          });
        };
        function Q(a, b, c, d, e, f, g) {
          this.v = a;
          this.B = b;
          this.c = c;
          this.a = d;
          this.s = g || "BESbswy";
          this.f = {};
          this.w = e || 3e3;
          this.u = f || null;
          this.m = this.j = this.h = this.g = null;
          this.g = new M(this.c, this.s);
          this.h = new M(this.c, this.s);
          this.j = new M(this.c, this.s);
          this.m = new M(this.c, this.s);
          a = new G(this.a.c + ",serif", J(this.a));
          a = O(a);
          this.g.a.style.cssText = a;
          a = new G(this.a.c + ",sans-serif", J(this.a));
          a = O(a);
          this.h.a.style.cssText = a;
          a = new G("serif", J(this.a));
          a = O(a);
          this.j.a.style.cssText = a;
          a = new G("sans-serif", J(this.a));
          a = O(a);
          this.m.a.style.cssText = a;
          N(this.g);
          N(this.h);
          N(this.j);
          N(this.m);
        }
        var R = { D: "serif", C: "sans-serif" }, S = null;
        function T() {
          if (null === S) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
          }
          return S;
        }
        Q.prototype.start = function() {
          this.f.serif = this.j.a.offsetWidth;
          this.f["sans-serif"] = this.m.a.offsetWidth;
          this.A = q();
          U(this);
        };
        function la(a, b, c) {
          for (var d in R)
            if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]])
              return true;
          return false;
        }
        function U(a) {
          var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
          (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
          d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
        }
        function ma(a) {
          setTimeout(p(function() {
            U(this);
          }, a), 50);
        }
        function V(a, b) {
          setTimeout(p(function() {
            v(this.g.a);
            v(this.h.a);
            v(this.j.a);
            v(this.m.a);
            b(this.a);
          }, a), 0);
        }
        ;
        function W(a, b, c) {
          this.c = a;
          this.a = b;
          this.f = 0;
          this.m = this.j = false;
          this.s = c;
        }
        var X = null;
        W.prototype.g = function(a) {
          var b = this.a;
          b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
          K(b, "fontactive", a);
          this.m = true;
          na(this);
        };
        W.prototype.h = function(a) {
          var b = this.a;
          if (b.g) {
            var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
            c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
            w(b.f, d, e);
          }
          K(b, "fontinactive", a);
          na(this);
        };
        function na(a) {
          0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
        }
        ;
        function oa(a) {
          this.j = a;
          this.a = new ja();
          this.h = 0;
          this.f = this.g = true;
        }
        oa.prototype.load = function(a) {
          this.c = new ca(this.j, a.context || this.j);
          this.g = false !== a.events;
          this.f = false !== a.classes;
          pa(this, new ha(this.c, a), a);
        };
        function qa(a, b, c, d, e) {
          var f = 0 == --a.h;
          (a.f || a.g) && setTimeout(function() {
            var a2 = e || null, m = d || null || {};
            if (0 === c.length && f)
              L(b.a);
            else {
              b.f += c.length;
              f && (b.j = f);
              var h, l = [];
              for (h = 0; h < c.length; h++) {
                var k = c[h], n = m[k.c], r = b.a, x = k;
                r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
                K(r, "fontloading", x);
                r = null;
                if (null === X)
                  if (window.FontFace) {
                    var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                    X = x ? 42 < parseInt(x[1], 10) : xa ? false : true;
                  } else
                    X = false;
                X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a2, n);
                l.push(r);
              }
              for (h = 0; h < l.length; h++)
                l[h].start();
            }
          }, 0);
        }
        function pa(a, b, c) {
          var d = [], e = c.timeout;
          ia(b);
          var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
          a.h = d.length;
          b = 0;
          for (c = d.length; b < c; b++)
            d[b].load(function(b2, d2, c2) {
              qa(a, f, b2, d2, c2);
            });
        }
        ;
        function ra(a, b) {
          this.c = a;
          this.a = b;
        }
        ra.prototype.load = function(a) {
          function b() {
            if (f["__mti_fntLst" + d]) {
              var c2 = f["__mti_fntLst" + d](), e2 = [], h;
              if (c2)
                for (var l = 0; l < c2.length; l++) {
                  var k = c2[l].fontfamily;
                  void 0 != c2[l].fontStyle && void 0 != c2[l].fontWeight ? (h = c2[l].fontStyle + c2[l].fontWeight, e2.push(new G(k, h))) : e2.push(new G(k));
                }
              a(e2);
            } else
              setTimeout(function() {
                b();
              }, 50);
          }
          var c = this, d = c.a.projectId, e = c.a.version;
          if (d) {
            var f = c.c.o;
            A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function(e2) {
              e2 ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
                return c.a;
              }, b());
            }).id = "__MonotypeAPIScript__" + d;
          } else
            a([]);
        };
        function sa(a, b) {
          this.c = a;
          this.a = b;
        }
        sa.prototype.load = function(a) {
          var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new B();
          b = 0;
          for (c = d.length; b < c; b++)
            z(this.c, d[b], C(g));
          var m = [];
          b = 0;
          for (c = e.length; b < c; b++)
            if (d = e[b].split(":"), d[1])
              for (var h = d[1].split(","), l = 0; l < h.length; l += 1)
                m.push(new G(d[0], h[l]));
            else
              m.push(new G(d[0]));
          E(g, function() {
            a(m, f);
          });
        };
        function ta(a, b) {
          a ? this.c = a : this.c = ua;
          this.a = [];
          this.f = [];
          this.g = b || "";
        }
        var ua = "https://fonts.googleapis.com/css";
        function va(a, b) {
          for (var c = b.length, d = 0; d < c; d++) {
            var e = b[d].split(":");
            3 == e.length && a.f.push(e.pop());
            var f = "";
            2 == e.length && "" != e[1] && (f = ":");
            a.a.push(e.join(f));
          }
        }
        function wa(a) {
          if (0 == a.a.length)
            throw Error("No fonts to load!");
          if (-1 != a.c.indexOf("kit="))
            return a.c;
          for (var b = a.a.length, c = [], d = 0; d < b; d++)
            c.push(a.a[d].replace(/ /g, "+"));
          b = a.c + "?family=" + c.join("%7C");
          0 < a.f.length && (b += "&subset=" + a.f.join(","));
          0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
          return b;
        }
        ;
        function ya(a) {
          this.f = a;
          this.a = [];
          this.c = {};
        }
        var za = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" }, Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, Ba = { i: "i", italic: "i", n: "n", normal: "n" }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        function Da(a) {
          for (var b = a.f.length, c = 0; c < b; c++) {
            var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
            if (2 <= d.length) {
              var g;
              var m = d[1];
              g = [];
              if (m)
                for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
                  var k;
                  k = m[l];
                  if (k.match(/^[\w-]+$/)) {
                    var n = Ca.exec(k.toLowerCase());
                    if (null == n)
                      k = "";
                    else {
                      k = n[2];
                      k = null == k || "" == k ? "n" : Ba[k];
                      n = n[1];
                      if (null == n || "" == n)
                        n = "4";
                      else
                        var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                      k = [k, n].join("");
                    }
                  } else
                    k = "";
                  k && g.push(k);
                }
              0 < g.length && (f = g);
              3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
            }
            a.c[e] || (d = za[e]) && (a.c[e] = d);
            for (d = 0; d < f.length; d += 1)
              a.a.push(new G(e, f[d]));
          }
        }
        ;
        function Ea(a, b) {
          this.c = a;
          this.a = b;
        }
        var Fa = { Arimo: true, Cousine: true, Tinos: true };
        Ea.prototype.load = function(a) {
          var b = new B(), c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
          va(d, e);
          var f = new ya(e);
          Da(f);
          z(c, wa(d), C(b));
          E(b, function() {
            a(f.a, f.c, Fa);
          });
        };
        function Ga(a, b) {
          this.c = a;
          this.a = b;
        }
        Ga.prototype.load = function(a) {
          var b = this.a.id, c = this.c.o;
          b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b2) {
            if (b2)
              a([]);
            else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
              b2 = c.Typekit.config.fn;
              for (var e = [], f = 0; f < b2.length; f += 2)
                for (var g = b2[f], m = b2[f + 1], h = 0; h < m.length; h++)
                  e.push(new G(g, m[h]));
              try {
                c.Typekit.load({ events: false, classes: false, async: true });
              } catch (l) {
              }
              a(e);
            }
          }, 2e3) : a([]);
        };
        function Ha(a, b) {
          this.c = a;
          this.f = b;
          this.a = [];
        }
        Ha.prototype.load = function(a) {
          var b = this.f.id, c = this.c.o, d = this;
          b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b2, c2) {
            for (var g = 0, m = c2.fonts.length; g < m; ++g) {
              var h = c2.fonts[g];
              d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
            }
            a(d.a);
          }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b2) {
            b2 && a([]);
          })) : a([]);
        };
        var Y = new oa(window);
        Y.a.c.custom = function(a, b) {
          return new sa(b, a);
        };
        Y.a.c.fontdeck = function(a, b) {
          return new Ha(b, a);
        };
        Y.a.c.monotype = function(a, b) {
          return new ra(b, a);
        };
        Y.a.c.typekit = function(a, b) {
          return new Ga(b, a);
        };
        Y.a.c.google = function(a, b) {
          return new Ea(b, a);
        };
        var Z = { load: p(Y.load, Y) };
        "function" === typeof define && define.amd ? define(function() {
          return Z;
        }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
      })();
    }
  });

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

  // src/app.js
  var import_webfontloader = __toESM(require_webfontloader());

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
      Engine.game.load.image("yellow-star", Engine.BASE_URL + "assets/yellow-star.png");
      Engine.game.load.image("projectile", Engine.BASE_URL + "assets/projectile.png");
      Engine.game.load.image("blue-flame", Engine.BASE_URL + "assets/blue-flame.png");
      Engine.game.load.image("environment", Engine.backgroundImage);
      Engine.game.load.image("building-deco", Engine.BASE_URL + "assets/building-deco.png");
      Engine.game.load.image("pyramid-tower", Engine.BASE_URL + "assets/pyramid-tower.png");
      Engine.game.load.image("small-building", Engine.BASE_URL + "assets/small-building.png");
      Engine.game.load.image("tower-clock", Engine.BASE_URL + "assets/tower-clock.png");
      Engine.game.load.image("small-tower", Engine.BASE_URL + "assets/small-tower.png");
      Engine.game.load.image("warehouse", Engine.BASE_URL + "assets/warehouse.png");
      Engine.game.load.image("truck", Engine.BASE_URL + "assets/truck.png");
      Engine.game.load.image("tank", Engine.BASE_URL + "assets/tank.png");
      Engine.game.load.image("chopper", Engine.BASE_URL + "assets/chopper-1.png");
      Engine.game.load.image("jet", Engine.BASE_URL + "assets/jet.png");
      Engine.game.load.image("missile", Engine.BASE_URL + "assets/missile.png");
      Engine.game.load.image("missile-vertical", Engine.BASE_URL + "assets/missile-vertical.png");
      Engine.game.load.image("bomb-powerup", Engine.BASE_URL + "assets/bomb-powerup.png");
      Engine.game.load.image("health-powerup", Engine.BASE_URL + "assets/health-powerup.png");
      Engine.game.load.image("flame-powerup", Engine.BASE_URL + "assets/flame-powerup.png");
      Engine.game.load.image("ice-powerup", Engine.BASE_URL + "assets/ice-powerup.png");
      Engine.game.load.image("start", Engine.BASE_URL + "assets/start.png");
      let playerData = Engine.playerData;
      Engine.game.load.spritesheet("player", Engine.BASE_URL + playerData.sprite, playerData.frameWidth, playerData.frameHeight);
      Engine.game.load.spritesheet("boss", Engine.BASE_URL + "assets/boss.png", 483, 357);
      Engine.game.load.audio("bg-music", Engine.BASE_URL + "assets/sounds/bg-music.mp3");
      Engine.game.load.audio("boss-music", Engine.BASE_URL + "assets/sounds/boss-music.mp3");
      Engine.game.load.audio("menu-music", Engine.BASE_URL + "assets/sounds/menu-music.mp3");
      Engine.game.load.audio("tank", Engine.BASE_URL + "assets/sounds/tank.mp3");
      Engine.game.load.audio("truck", Engine.BASE_URL + "assets/sounds/truck.mp3");
      Engine.game.load.audio("jet", Engine.BASE_URL + "assets/sounds/jet.mp3");
      Engine.game.load.audio("chopper", Engine.BASE_URL + "assets/sounds/chopper.mp3");
      Engine.game.load.audio("missile", Engine.BASE_URL + "assets/sounds/missile.mp3");
      Engine.game.load.audio("boss", Engine.BASE_URL + "assets/sounds/boss.mp3");
      Engine.game.load.audio("boss-end", Engine.BASE_URL + "assets/sounds/boss-end.mp3");
      Engine.game.load.audio("explode", Engine.BASE_URL + "assets/sounds/explode.mp3");
      Engine.game.load.audio("building", Engine.BASE_URL + "assets/sounds/building.mp3");
      Engine.game.load.audio("flame-powerup", Engine.BASE_URL + "assets/sounds/flame-powerup.mp3");
      Engine.game.load.audio("health-powerup", Engine.BASE_URL + "assets/sounds/health-powerup.mp3");
      Engine.game.load.audio("ice-powerup", Engine.BASE_URL + "assets/sounds/ice-powerup.mp3");
      Engine.game.load.audio("bomb-powerup", Engine.BASE_URL + "assets/sounds/bomb-powerup.mp3");
      Engine.game.load.audio("player-fire", Engine.BASE_URL + "assets/sounds/player-fire.mp3");
      Engine.game.load.audio("player-hit", Engine.BASE_URL + "assets/sounds/player-hit.mp3");
    },
    create: function() {
      Engine.game.state.start("menu");
    }
  };
  var load_default = LoadState;

  // src/utils.js
  var range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  };
  var getRandomItem = (_array) => {
    return _array[Engine.game.rnd.integerInRange(0, _array.length - 1)];
  };

  // src/states/menu.js
  var MenuState = {
    create: function() {
      Engine.game.camera.reset();
      Engine.game.stage.backgroundColor = Engine.backgroundColor;
      this.environment = Engine.game.add.tileSprite(0, 0, Engine.GAME_WIDTH, Engine.GAME_HEIGHT, "environment");
      this.environment.fixedToCamera = true;
      this.environment.autoScroll(-Engine.SCROLL_SPEED, 0);
      this.environment.tint = 1118481;
      this.sprite = Engine.game.add.sprite(Engine.GAME_WIDTH / 2, Engine.GAME_HEIGHT / 2, "player");
      this.sprite.animations.add("left", range(0, Engine.playerData.frames / 2), Engine.playerData.frameRate, true);
      this.sprite.animations.add("right", range(Engine.playerData.frames / 2, Engine.playerData.frames).reverse(), Engine.playerData.frameRate, true);
      this.sprite.anchor.setTo(0.5, 0.5);
      this.sprite.tint = 5053186;
      this.sprite.alpha = 0.75;
      this.sprite.scale.setTo(1.5, 1.5);
      this.sprite.animations.play("right");
      let fireStartX = 0;
      let fireInterval = Engine.GAME_WIDTH / 3;
      for (let i = 0; i < 4; i++) {
        var emitter = Engine.game.add.emitter(fireStartX + i * fireInterval, Engine.GAME_HEIGHT, 500);
        emitter.makeParticles("smoke");
        emitter.setYSpeed(-600, 0);
        emitter.setXSpeed(-500, 500);
        emitter.gravity = 0;
        emitter.setAlpha(0.9, 0, 3500);
        emitter.setScale(5, 0, 5, 0, 3500);
        emitter.start(false, 3500, Engine.game.rnd.integerInRange(100, 200));
      }
      this.music = Engine.game.add.audio("menu-music");
      this.music.loop = true;
      this.music.volume = 1;
      this.music.play();
      if (Engine.score > 0) {
        var scoreLabel = Engine.game.add.text(8, 8, `Last score: ${Engine.score}`, { font: `18px VT323`, fill: "#ffffff" });
      }
      var titleLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, 150, "GamesMeanEverything presents..", { font: `32px VT323`, fill: "#ffffff" });
      titleLabel.anchor.setTo(0.5, 0.5);
      let levelY = 225;
      var levelLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, levelY, `SHIN METABOY`, { font: `60px VT323`, fill: "#ffffff" });
      levelLabel.anchor.setTo(0.5, 0.5);
      let startY = levelY + 150;
      var startButton = Engine.game.add.sprite(Engine.GAME_WIDTH / 2, startY, "start");
      startButton.anchor.setTo(0.5, 0.5);
      startButton.alpha = 0.75;
      startButton.inputEnabled = true;
      startButton.input.useHandCursor = true;
      startButton.events.onInputUp.add(this.start, this);
      let instructionsY = startY + 100;
      var instructionsLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, instructionsY, `A Left. D Right. SPACE Jumps. MOUSE Shoots `, { font: `24px VT323`, fill: "#ffffff" });
      instructionsLabel.anchor.setTo(0.5, 0.5);
      Engine.game.add.tween(startButton).to({ alpha: 1 }, 1e3, Phaser.Easing.Linear.None, true, 0.75, 500, true);
      var startKey = Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      startKey.onDown.addOnce(this.start, this);
    },
    start: function() {
      Engine.game.time.events.add(500, function() {
        this.music.stop();
        Engine.game.state.start("play");
      }, this);
    }
  };
  var menu_default = MenuState;

  // src/objects/particles.js
  var Particles = class {
    constructor() {
      this.splat = Engine.game.add.emitter(0, 0, 250);
      this.splat.makeParticles("pixel");
      this.splat.setYSpeed(-500, 500);
      this.splat.setXSpeed(-500, 500);
      this.splat.gravity = Engine.gravity / 2;
      this.splat.setAlpha(0.6, 0, 1e3);
      this.splat.setScale(2.15, 0.5, 2.15, 0.5, 1e3);
      this.smoke = Engine.game.add.emitter(0, 0, 125);
      this.smoke.makeParticles("smoke");
      this.smoke.setYSpeed(-250, 250);
      this.smoke.setXSpeed(-350, 50);
      this.smoke.setAlpha(1, 0, 2e3);
      this.smoke.setScale(3.5, 0, 3.5, 0, 2e3);
      this.dust = Engine.game.add.emitter(0, 0, 125);
      this.dust.makeParticles("dust");
      this.dust.setYSpeed(-500, 500);
      this.dust.setXSpeed(-500, 250);
      this.dust.setAlpha(0.75, 0, 2e3);
      this.dust.setScale(2, 0, 2, 0, 2e3);
      this.puff = Engine.game.add.emitter(0, 0, 100);
      this.puff.makeParticles("puff");
      this.puff.setYSpeed(-250, 250);
      this.puff.setXSpeed(-350, 350);
      this.puff.setAlpha(0.75, 0, 750);
      this.puff.setScale(0, 1, 0, 1, 750);
      this.smallSmoke = Engine.game.add.emitter(0, 0, 250);
      this.smallSmoke.makeParticles("smoke");
      this.smallSmoke.setYSpeed(-100, 100);
      this.smallSmoke.setXSpeed(-100, 100);
      this.smallSmoke.setAlpha(1, 0, 1e3);
      this.smallSmoke.setScale(0, 3, 0, 3, 1e3);
      this.bigSmoke = Engine.game.add.emitter(0, 0, 12);
      this.bigSmoke.makeParticles("smoke");
      this.bigSmoke.setYSpeed(-600, 600);
      this.bigSmoke.setXSpeed(-600, 600);
      this.bigSmoke.setAlpha(1, 0, 2500);
      this.bigSmoke.setScale(7.5, 0, 7.5, 0, 2500);
      this.stars = Engine.game.add.emitter(0, 0, 50);
      this.stars.makeParticles("yellow-star");
      this.stars.setYSpeed(-300, 300);
      this.stars.setXSpeed(-300, 300);
      this.stars.setAlpha(1, 0, 2e3);
      this.stars.setScale(0.25, 2, 0.25, 2, 2e3);
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

  // src/objects/player.js
  var PLAYER_STATES = {
    NORMAL: 0,
    FLAME: 1,
    ICE: 2
    // TBD
  };
  var Player = class {
    constructor() {
      this.startY = 0;
      this.sprite = Engine.game.add.sprite(0, this.startY, "player");
      this.sprite.animations.add("left", range(0, Engine.playerData.frames / 2), Engine.playerData.frameRate, true);
      this.sprite.animations.add("right", range(Engine.playerData.frames / 2, Engine.playerData.frames).reverse(), Engine.playerData.frameRate, true);
      this.sprite.anchor.setTo(0.5, 0.5);
      Engine.game.physics.arcade.enable(this.sprite);
      this.sprite.body.gravity.y = Engine.gravity;
      this.sprite.body.collideWorldBounds = true;
      this.health = 100;
      this.nextFire = 0;
      this.fireRate = 65;
      this.alive = true;
      this.state = PLAYER_STATES.NORMAL;
      this.powerupTime = 0;
      this.facing = "right";
      this.moving = false;
      this.speed = 306;
      this.jumping = false;
      this.jumpForce = -1e3;
      this.projectiles = Engine.game.add.group();
      this.projectiles.enableBody = true;
      this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
      this.projectiles.createMultiple(20, "projectile", 0, false);
      this.projectiles.setAll("anchor.x", 0.5);
      this.projectiles.setAll("anchor.y", 0.5);
      this.projectiles.setAll("outOfBoundsKill", true);
      this.projectiles.setAll("checkWorldBounds", true);
    }
    isGrounded() {
      return this.sprite.y + this.sprite.height / 2 > Engine.GAME_HEIGHT - 10;
    }
    move(direction) {
      let directionFactor = direction == "left" ? -1 : 1;
      this.sprite.body.velocity.x = this.speed * directionFactor;
      this.facing = direction;
      this.moving = true;
      this.sprite.animations.play(this.facing);
    }
    update(_input) {
      switch (this.state) {
        case PLAYER_STATES.FLAME:
          this.sprite.tint = 14383937;
          break;
        case PLAYER_STATES.ICE:
          this.sprite.tint = 52735;
          break;
        default:
          this.sprite.tint = 16777215;
          break;
      }
      if (this.health < 100 && this.alive) {
        this.health += 0.01;
      }
      if (_input.left.isDown) {
        this.move("left");
      } else if (_input.right.isDown) {
        this.move("right");
      }
      if (!this.moving) {
        this.sprite.body.velocity.x = 0;
      }
      this.moving = false;
      if (_input.jump.isDown) {
        this.jump();
      }
    }
    jump() {
      if (this.isGrounded() && this.alive) {
        this.sprite.body.velocity.y = this.jumpForce;
      }
    }
    fire() {
      if (Engine.game.time.now > this.nextFire && this.projectiles.countDead() > 0 && this.alive) {
        this.nextFire = Engine.game.time.now + this.fireRate;
        for (let i = 0; i < 2; i++) {
          let projectile = this.projectiles.getFirstExists(false);
          if (projectile) {
            let px;
            let py;
            if (i == 0) {
              px = this.sprite.x - 50;
              py = this.sprite.y - 100;
            } else {
              px = this.sprite.x + 50;
              py = this.sprite.y - 100;
            }
            Engine.particles.startSmallExplosion(Engine.particles.puff, px, py);
            projectile.reset(px, py);
            projectile.velocity = 150;
            projectile.rotation = Engine.game.physics.arcade.angleToPointer(projectile);
            Engine.game.physics.arcade.velocityFromAngle(projectile.angle, 750, projectile.body.velocity);
            switch (this.state) {
              case PLAYER_STATES.FLAME:
                projectile.scale.setTo(2.5);
                break;
              case PLAYER_STATES.ICE:
                projectile.scale.setTo(1);
                projectile.tint = 52735;
                break;
              default:
                projectile.scale.setTo(1);
                projectile.tint = 16777215;
                break;
            }
          }
        }
        Engine.sounds["player-fire"].play();
      }
    }
    updateProjectiles() {
      this.projectiles.forEachAlive(function(projectile) {
        projectile.angle += Engine.game.rnd.integerInRange(2, 5);
      }, this);
    }
  };

  // src/objects/buildings.js
  var BUILDING_TYPES = [
    {
      sprite: "building-deco",
      height: 400,
      width: 250,
      health: 10
    },
    {
      sprite: "small-building",
      height: 350,
      width: 390,
      health: 6
    },
    {
      sprite: "pyramid-tower",
      height: 600,
      width: 200,
      health: 8
    },
    {
      sprite: "tower-clock",
      height: 400,
      width: 144,
      health: 8
    },
    {
      sprite: "small-tower",
      height: 300,
      width: 300,
      health: 6
    },
    {
      sprite: "warehouse",
      height: 291,
      width: 350,
      health: 8
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
        this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3, 4);
      }
    }
  };

  // src/objects/vehicles.js
  var VEHICLE_TYPES = [
    {
      sprite: "truck",
      height: 63,
      width: 128,
      health: 8,
      speed: 150,
      damage: 1,
      fireRate: 300
    },
    {
      sprite: "tank",
      height: 74,
      width: 128,
      health: 12,
      speed: 60,
      damage: 5,
      fireRate: 600
    },
    {
      sprite: "chopper",
      height: 51,
      width: 175,
      health: 4,
      speed: -250,
      damage: 5,
      fireRate: 200
    },
    {
      sprite: "jet",
      height: 67,
      width: 163,
      health: 4,
      speed: 500,
      damage: 5,
      fireRate: 150
    }
  ];
  var VEHICLE_STATES = {
    NORMAL: 0,
    ICE: 1
  };
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
      let vehicleType;
      if (Engine.gameMode == Engine.GAME_MODES.RUN) {
        vehicleType = VEHICLE_TYPES[Engine.game.rnd.integerInRange(0, VEHICLE_TYPES.length - 1)];
      } else {
        vehicleType = VEHICLE_TYPES[Engine.game.rnd.integerInRange(2, 3)];
      }
      let vx, vy;
      switch (vehicleType.sprite) {
        case "chopper":
          vx = Engine.GAME_WIDTH + vehicleType.width / 2;
          vy = Engine.GAME_HEIGHT * 0.125;
          break;
        case "jet":
          vx = 0 - vehicleType.width / 2;
          vy = Engine.GAME_HEIGHT * 0.08;
          break;
        default:
          vx = 0 - vehicleType.width / 2;
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
      vehicle.nextFire = Engine.game.time.now + vehicleType.fireRate;
      vehicle.state = VEHICLE_STATES.NORMAL;
      return vehicle;
    }
    update(player) {
      if (this.spawnTime < Engine.levelTime && Engine.score > 450) {
        this.spawn();
        if (Engine.gameMode == Engine.GAME_MODES.RUN) {
          if (Engine.score < 4e3) {
            this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3, 4);
          } else if (Engine.score < 8e3) {
            this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(2, 4);
          } else if (Engine.score < 3e4) {
            this.spawnTime = Engine.levelTime + 2;
          } else {
            this.spawnTime = Engine.levelTime + 1;
          }
        } else if (Engine.gameMode == Engine.GAME_MODES.BOSS) {
          this.spawnTime = Engine.levelTime + 5;
        }
      }
      this.group.forEachAlive(function(vehicle) {
        if (Engine.game.time.now > vehicle.nextFire && this.projectiles.countDead() > 0 && vehicle.inCamera && vehicle.state == VEHICLE_STATES.NORMAL) {
          this.fire(vehicle, player);
        }
      }, this);
    }
    fire(vehicle, player) {
      let projectile = this.projectiles.getFirstExists(false);
      let px = vehicle.centerX;
      let py = vehicle.centerY;
      projectile.reset(px, py);
      Engine.game.physics.arcade.moveToObject(projectile, player.sprite, 750);
      vehicle.nextFire = Engine.game.time.now + vehicle.config.fireRate;
      Engine.sounds[vehicle.config.sprite].play();
    }
  };

  // src/objects/powerups.js
  var POWERUP_TYPES = [
    {
      sprite: "bomb-powerup",
      height: 64,
      width: 64,
      score: 500,
      health: 0
    },
    {
      sprite: "health-powerup",
      height: 64,
      width: 64,
      score: 500,
      health: 25
    },
    {
      sprite: "flame-powerup",
      height: 64,
      width: 64,
      score: 500,
      health: 0
    },
    {
      sprite: "ice-powerup",
      height: 64,
      width: 64,
      score: 500,
      health: 0
    }
  ];
  var Powerups = class {
    constructor() {
      this.group = Engine.game.add.group();
      this.group.enableBody = true;
      this.group.physicsBodyType = Phaser.Physics.ARCADE;
      this.group.setAll("outOfBoundsKill", true);
      this.group.setAll("checkWorldBounds", true);
      this.spawnTime = 0;
    }
    spawn() {
      const powerupType = POWERUP_TYPES[Engine.game.rnd.integerInRange(0, POWERUP_TYPES.length - 1)];
      let powerup = this.group.create(
        Engine.game.rnd.integerInRange(Engine.GAME_WIDTH * 0.2, Engine.GAME_WIDTH * 0.8),
        1,
        powerupType.sprite
      );
      powerup.body.gravity.y = 0;
      powerup.body.immovable = true;
      powerup.objectType = "powerup";
      powerup.config = powerupType;
      return powerup;
    }
    update() {
      if (this.spawnTime < Engine.levelTime && Engine.score > 3500) {
        let newSpawn = this.spawn();
        if (Engine.score < 8e3) {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(11, 13);
          newSpawn.body.velocity.y = 100;
        } else if (Engine.score < 12e3) {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(8, 10);
          newSpawn.body.velocity.y = 200;
        } else if (Engine.score < 3e4) {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(6, 7);
          newSpawn.body.velocity.y = 300;
        } else {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(2, 4);
          newSpawn.body.velocity.y = 350;
        }
      }
    }
  };

  // src/objects/missiles.js
  var MISSLE_TYPES = [
    {
      sprite: "missile",
      height: 28,
      width: 105,
      health: 2,
      speed: 250,
      damage: 15
    },
    {
      sprite: "missile-vertical",
      height: 75,
      width: 69,
      health: 2,
      speed: 66,
      damage: 15
    }
  ];
  var Missiles = class {
    constructor() {
      this.group = Engine.game.add.group();
      this.group.enableBody = true;
      this.group.physicsBodyType = Phaser.Physics.ARCADE;
      this.group.setAll("checkWorldBounds", true);
      this.spawnTime = 0;
    }
    spawn() {
      const missileType = getRandomItem(MISSLE_TYPES);
      let vx, vy;
      if (missileType.sprite == "missile") {
        vx = 0 - missileType.width / 2;
        vy = Engine.GAME_HEIGHT * (Engine.game.rnd.integerInRange(35, 65) / 100);
      } else {
        vx = Engine.GAME_WIDTH * (Engine.game.rnd.integerInRange(33, 85) / 100);
        vy = 0 - missileType.height / 2;
      }
      let missle = this.group.create(
        vx,
        vy,
        missileType.sprite
      );
      missle.body.gravity.y = 0;
      missle.body.immovable = true;
      missle.body.velocity.x = missileType.sprite == "missile" ? missileType.speed : 0;
      missle.body.velocity.y = missileType.sprite == "missile-vertical" ? missileType.speed : 0;
      missle.health = missileType.health;
      missle.config = missileType;
      missle.objectType = "missile";
      Engine.sounds["missile"].play();
      return missle;
    }
    update() {
      if (this.spawnTime < Engine.levelTime && Engine.score > 4e3) {
        this.spawn();
        if (Engine.score < 8e3) {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(6, 8);
        } else if (Engine.score < 12e3) {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(5, 6);
        } else if (Engine.score < 3e4) {
          this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3, 4);
        } else {
          this.spawnTime = Engine.levelTime + 1;
        }
      }
    }
  };

  // src/objects/boss.js
  var BOSS_DATA = {
    sprite: "boss",
    health: 100,
    frames: 8,
    frameRate: 8,
    frameWidth: 483,
    frameHeight: 351,
    projectileHealth: 9,
    speed: 75,
    damage: 0.3
  };
  var Boss = class {
    constructor() {
      this.health = BOSS_DATA.health;
      this.totalHealth = BOSS_DATA.health;
      this.highFireRate = 2250;
      this.midFireRate = 1750;
      this.lowFireRate = 1350;
      this.projectileSpeed = 375;
      this.alive = false;
      this.hasSpawned = false;
      this.idle = true;
    }
    spawn() {
      this.startY = 1;
      this.startX = Engine.GAME_WIDTH - BOSS_DATA.frameWidth / 2;
      this.sprite = Engine.game.add.sprite(this.startX, this.startY, "boss");
      this.sprite.animations.add("fight", range(0, BOSS_DATA.frames), BOSS_DATA.frameRate, true);
      this.sprite.animations.play("fight");
      this.sprite.anchor.setTo(0.5, 0.5);
      Engine.game.physics.arcade.enable(this.sprite);
      this.sprite.body.gravity.y = Engine.gravity;
      this.sprite.body.collideWorldBounds = true;
      this.nextFire = Engine.game.time.now + 350;
      this.jumpForce = -1400;
      this.facing = "right";
      this.moving = false;
      this.speed = BOSS_DATA.speed;
      this.damage = BOSS_DATA.damage;
      this.projectiles = Engine.game.add.group();
      this.projectiles.enableBody = true;
      this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
      this.projectiles.createMultiple(20, "blue-flame", 0, false);
      this.projectiles.setAll("anchor.x", 0.5);
      this.projectiles.setAll("anchor.y", 0.5);
      this.projectiles.setAll("outOfBoundsKill", true);
      this.projectiles.setAll("checkWorldBounds", true);
      this.sprite.alpha = 0;
      let fadeInTween = Engine.game.add.tween(this.sprite).to({ alpha: 1 }, 1e3, Phaser.Easing.Linear.None, true, 0);
      fadeInTween.onComplete.addOnce(() => {
        this.alive = true;
      }, this);
    }
    // Update boss actions
    update(player) {
      if (this.alive) {
        this.jump();
        this.fire(player);
        let rndFactor = Engine.game.rnd.integerInRange(0, 99) / 100;
        if (this.sprite.x >= this.startX) {
          this.sprite.body.velocity.x = (-1 - rndFactor) * this.speed;
        } else if (this.sprite.x < Engine.GAME_WIDTH * 0.7) {
          this.sprite.body.velocity.x = (1 + rndFactor) * this.speed;
        }
        if (this.health < 100 && this.alive) {
          this.health += 0.02;
        }
      }
    }
    isGrounded() {
      return this.sprite.y + this.sprite.height / 2 > Engine.GAME_HEIGHT - 10;
    }
    jump() {
      if (this.isGrounded()) {
        this.sprite.body.velocity.y = this.jumpForce;
      }
    }
    fire(player) {
      if (Engine.game.time.now > this.nextFire && this.projectiles.countDead() > 0) {
        let nF;
        if (this.health < 25) {
          nF = Engine.game.rnd.integerInRange(this.lowFireRate, this.midFireRate);
        } else {
          nF = Engine.game.rnd.integerInRange(this.midFireRate, this.highFireRate);
        }
        this.nextFire = Engine.game.time.now + nF;
        let projectile = this.projectiles.getFirstExists(false);
        if (projectile) {
          let px = this.sprite.centerX;
          let py = this.sprite.centerY;
          projectile.reset(px, py);
          projectile.health = BOSS_DATA.projectileHealth;
          Engine.game.physics.arcade.moveToObject(projectile, player.sprite, this.projectileSpeed);
          Engine.sounds["boss"].play();
        }
      }
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
      this.player = new Player();
      this.player.sprite.animations.play(this.player.facing);
      this.boss = new Boss();
      this.vehicles = new Vehicles();
      this.buildings = new Buildings();
      this.powerups = new Powerups();
      this.missiles = new Missiles();
      Engine.particles = new Particles();
      this.player.healthBar = Engine.game.add.graphics(8, 8);
      this.player.healthBar.fixedToCamera = true;
      this.player.healthBar.outlineColor = 7343360;
      this.player.healthBar.fillColor = 4852740;
      this.boss.healthBar = Engine.game.add.graphics(8, 56);
      this.boss.healthBar.fixedToCamera = true;
      this.boss.healthBar.outlineColor = 6254486;
      this.boss.healthBar.fillColor = 2636390;
      this.drawHealthBar(this.player);
      this.gameText = Engine.game.add.text(12, 12, "0", { font: "22px VT323", fill: "#ffffff", align: "left" });
      this.gameText.fixedToCamera = true;
      this.scoreText = Engine.game.add.text(Engine.game.camera.width - 160, 10, "0", { font: "22px VT323", fill: "#ffffff", align: "left" });
      this.scoreText.fixedToCamera = true;
      this.bossText = Engine.game.add.text(12, 60, "0", { font: "22px VT323", fill: "#ffffff", align: "left" });
      this.bossText.fixedToCamera = true;
      this.input = {
        // cursor:  Engine.game.input.keyboard.createCursorKeys(),
        left: Engine.game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: Engine.game.input.keyboard.addKey(Phaser.Keyboard.D),
        jump: Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
      };
      this.music = Engine.game.add.audio("bg-music");
      this.music.loop = true;
      this.music.volume = 0.7;
      this.music.play();
      this.bossMusic = Engine.game.add.audio("boss-music");
      this.bossMusic.loop = true;
      this.bossMusic.volume = 0.7;
      Engine.sounds["health-powerup"] = Engine.game.add.audio("health-powerup");
      Engine.sounds["flame-powerup"] = Engine.game.add.audio("flame-powerup");
      Engine.sounds["bomb-powerup"] = Engine.game.add.audio("bomb-powerup");
      Engine.sounds["ice-powerup"] = Engine.game.add.audio("ice-powerup");
      Engine.sounds["jet"] = Engine.game.add.audio("jet");
      Engine.sounds["truck"] = Engine.game.add.audio("truck");
      Engine.sounds["tank"] = Engine.game.add.audio("tank");
      Engine.sounds["chopper"] = Engine.game.add.audio("chopper");
      Engine.sounds["missile"] = Engine.game.add.audio("missile");
      Engine.sounds["building"] = Engine.game.add.audio("building");
      Engine.sounds["boss"] = Engine.game.add.audio("boss");
      Engine.sounds["boss"].volume = 0.7;
      Engine.sounds["boss-end"] = Engine.game.add.audio("boss");
      Engine.sounds["explode"] = Engine.game.add.audio("explode");
      Engine.sounds["player-fire"] = Engine.game.add.audio("player-fire");
      Engine.sounds["player-hit"] = Engine.game.add.audio("player-hit");
      Engine.sounds["player-hit"].allowMultiple = false;
      Engine.levelTime = 0;
      this.levelTimer = Engine.game.time.create(false);
      this.levelTimer.loop(100, function() {
        Engine.levelTime += 0.1;
        if (this.player.alive) {
          Engine.score += 1;
        }
      }, this);
      this.levelTimer.start();
    },
    drawHealthBar: function(gameObject) {
      var maxWidth = Engine.game.camera.width - 16;
      var height = 32;
      var width = maxWidth * (gameObject.health / 100);
      gameObject.healthBar.clear();
      if (width > 0) {
        gameObject.healthBar.beginFill(gameObject.healthBar.fillColor, 0.5);
        gameObject.healthBar.lineStyle(2, gameObject.healthBar.outlineColor, 0.8);
        gameObject.healthBar.moveTo(0, 0);
        gameObject.healthBar.lineTo(width, 0);
        gameObject.healthBar.lineTo(width, height);
        gameObject.healthBar.lineTo(0, height);
        gameObject.healthBar.lineTo(0, 0);
        gameObject.healthBar.endFill();
      }
    },
    update: function() {
      if (Engine.score > 15e3 && this.boss.health > 0) {
        Engine.gameMode = Engine.GAME_MODES.BOSS;
      }
      if (Engine.gameMode == Engine.GAME_MODES.RUN) {
        Engine.game.physics.arcade.overlap(this.player.sprite, this.buildings.group, this.hitPlayerBuldings, null, this);
        Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.group, this.hitPlayerVehicles, null, this);
        Engine.game.physics.arcade.overlap(this.player.sprite, this.missiles.group, this.hitPlayerMissiles, null, this);
        Engine.game.physics.arcade.overlap(this.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
        Engine.game.physics.arcade.overlap(this.player.projectiles, this.buildings.group, this.hitProjectilesObjects, null, this);
        Engine.game.physics.arcade.overlap(this.player.projectiles, this.missiles.group, this.hitProjectilesObjects, null, this);
        Engine.game.physics.arcade.overlap(this.player.sprite, this.powerups.group, this.hitPlayerPowerups, null, this);
        Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);
        this.vehicles.update(this.player);
        this.buildings.update();
        this.powerups.update();
        this.missiles.update();
        if (this.player.state !== PLAYER_STATES.NORMAL && Engine.levelTime > this.player.powerupTime) {
          this.player.state = PLAYER_STATES.NORMAL;
        }
      } else if (Engine.gameMode == Engine.GAME_MODES.BOSS) {
        if (this.boss.hasSpawned == false) {
          this.boss.hasSpawned = true;
          this.music.stop();
          this.bossMusic.play();
          if (this.player.alive) {
            this.player.health = 100;
            this.player.state = PLAYER_STATES.NORMAL;
          }
          this.clearGameObjects();
          Engine.game.add.tween(this.environment).to({ alpha: 0.3 }, 1e3, Phaser.Easing.Linear.None, true, 0);
          Engine.game.time.events.add(1500, function() {
            this.boss.spawn();
          }, this);
        }
        if (this.boss.alive) {
          Engine.game.physics.arcade.overlap(this.player.sprite, this.boss.sprite, this.hitPlayerBoss, null, this);
          Engine.game.physics.arcade.overlap(this.player.sprite, this.boss.projectiles, this.hitPlayerBoss, null, this);
          Engine.game.physics.arcade.overlap(this.player.projectiles, this.boss.sprite, this.hitProjectileBoss, null, this);
          Engine.game.physics.arcade.overlap(this.player.projectiles, this.boss.projectiles, this.hitProjectilesObjects, null, this);
        }
        Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.group, this.hitPlayerMissiles, null, this);
        Engine.game.physics.arcade.overlap(this.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
        Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);
        this.boss.update(this.player);
        if (this.boss.health < this.boss.totalHealth * 0.75) {
          this.vehicles.update(this.player);
        }
        this.drawHealthBar(this.boss);
      }
      if (this.game.input.activePointer.isDown) {
        this.player.fire();
      }
      this.player.update(this.input);
      this.player.updateProjectiles();
      const healthText = this.player.health > 0 ? Math.trunc(this.player.health) : "dead";
      this.gameText.text = `Health: ${healthText}`;
      this.scoreText.text = `Score: ${Engine.score}`;
      if (Engine.gameMode == Engine.GAME_MODES.BOSS) {
        const bossHealthText = this.boss.health > 0 ? Math.trunc(this.boss.health) : "dead";
        this.bossText.text = `Boss: ${bossHealthText}`;
      } else {
        this.bossText.text = "";
      }
    },
    // Callback for player projectile hits
    hitProjectilesObjects: function(_projectile, _object) {
      _object.health -= 0.333;
      if (_object.health > 0) {
        Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);
        if (this.player.state != PLAYER_STATES.FLAME) {
          _projectile.kill();
        }
        Engine.score += 2;
        if (this.player.state == PLAYER_STATES.ICE) {
          _object.tint = 52735;
          if (_object.objectType == "vehicle" || _object.objectType == "missile") {
            _object.body.velocity.x = 0;
            _object.body.velocity.y = 0;
            _object.state = VEHICLE_STATES.ICE;
          }
        }
      } else {
        Engine.particles.startExplosion(Engine.particles.smoke, _object.centerX, _object.centerY);
        if (_object.objectType == "building") {
          Engine.particles.startCrumble(Engine.particles.dust, _object.centerX, _object.centerY);
          Engine.score += 200;
        } else {
          Engine.score += 100;
        }
        _projectile.kill();
        _object.kill();
        if (_object.objectType == "building") {
          Engine.sounds["building"].play();
        } else {
          Engine.sounds["explode"].play();
        }
      }
    },
    // Handle power up collisions
    hitPlayerPowerups: function(_player, _powerup) {
      switch (_powerup.config.sprite) {
        case "bomb-powerup":
          this.clearGameObjects();
          Engine.particles.startExplosion(Engine.particles.bigSmoke, _player.centerX, _player.centerY);
          _powerup.kill();
          Engine.game.camera.flash(9256964, 850);
          break;
        case "health-powerup":
          Engine.particles.startSmallExplosion(Engine.particles.stars, this.player.sprite.centerX, this.player.sprite.centerY);
          _powerup.kill();
          Engine.game.camera.flash(16733268, 850);
          this.drawHealthBar(this.player);
          break;
        case "flame-powerup":
          _powerup.kill();
          Engine.game.camera.flash(9109504, 850);
          this.player.state = PLAYER_STATES.FLAME;
          this.player.powerupTime = Engine.levelTime + 6;
          break;
        case "ice-powerup":
          _powerup.kill();
          Engine.game.camera.flash(667963, 850);
          this.player.state = PLAYER_STATES.ICE;
          this.player.powerupTime = Engine.levelTime + 8;
          break;
        default:
          _powerup.kill();
          break;
      }
      Engine.score += _powerup.config.score;
      this.player.health += _powerup.config.health;
      this.player.health = this.player.health > 100 ? 100 : this.player.health;
      Engine.sounds[_powerup.config.sprite].play();
      return;
    },
    hitPlayerEnemyProjectiles: function(_player, _projectile) {
      this.player.health -= 1;
      if (this.player.health > 0) {
        Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX + 50, _projectile.centerY);
        _projectile.kill();
        Engine.sounds["player-hit"].play();
      } else {
        Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX, _projectile.centerY);
        _projectile.kill();
        Engine.sounds["explode"].play();
        this.playerDie();
      }
      this.drawHealthBar(this.player);
      return;
    },
    // We do the damage here
    hitPlayerBuldings: function(_player, _building) {
      _building.health -= 0.15;
      if (_building.health > 0) {
        Engine.particles.startCrumble(Engine.particles.dust, _building.centerX, _building.centerY);
      } else {
        Engine.particles.startExplosion(Engine.particles.smoke, _building.centerX, _building.centerY);
        _building.kill();
        Engine.score += 250;
        Engine.sounds["building"].play();
      }
      return;
    },
    hitPlayerVehicles: function(_player, _vehicle) {
      Engine.particles.startExplosion(Engine.particles.smoke, _vehicle.centerX, _vehicle.centerY);
      Engine.particles.startSmallExplosion(Engine.particles.dust, _vehicle.centerX, _vehicle.centerY);
      _vehicle.kill();
      Engine.score += 150;
      Engine.sounds["explode"].play();
      return;
    },
    // Missiles collisions
    hitPlayerMissiles: function(_player, _missile) {
      this.player.health -= _missile.config.damage;
      Engine.particles.startExplosion(Engine.particles.splat, _missile.centerX, _missile.centerY);
      Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _missile.centerX, _missile.centerY);
      _missile.kill();
      this.drawHealthBar(this.player);
      if (this.player.health < 1) {
        Engine.sounds["explode"].play();
        this.playerDie();
      } else {
        Engine.sounds["player-hit"].play();
      }
      return;
    },
    // Boss Mode Collisions
    hitPlayerBoss: function(_player, _boss) {
      this.player.health -= this.boss.damage;
      Engine.particles.startSmallExplosion(Engine.particles.splat, _player.centerX + 50, _player.centerY);
      this.drawHealthBar(this.player);
      if (this.player.health < 1) {
        Engine.sounds["explode"].play();
        this.playerDie();
      } else {
        if (this.levelTime - _boss.lastPlay > 1) {
          Engine.sounds["player-hit"].play();
          _boss.lastPlay = this.levelTime;
        }
      }
    },
    hitProjectileBoss: function(_object, _projectile) {
      this.boss.health -= 0.333;
      if (this.boss.health > 0) {
        Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);
        _projectile.kill();
        Engine.score += 25;
      } else {
        Engine.particles.startExplosion(Engine.particles.smoke, _object.centerX, _object.centerY);
        Engine.particles.startExplosion(Engine.particles.dust, _object.centerX, _object.centerY);
        Engine.particles.startExplosion(Engine.particles.splat, _object.centerX, _object.centerY);
        Engine.particles.startExplosion(Engine.particles.stars, this.player.sprite.centerX, this.player.sprite.centerY);
        Engine.score += 5e3;
        _projectile.kill();
        _object.kill();
        this.boss.alive = false;
        this.boss.projectiles.removeAll(true);
        this.player.health = 100;
        Engine.sounds["boss-end"].play();
        this.bossMusic.stop();
        this.music.play();
        let normalizeBGTween = Engine.game.add.tween(this.environment).to({ alpha: 1 }, 1e3, Phaser.Easing.Linear.None, true, 0);
        normalizeBGTween.onComplete.addOnce(() => {
          Engine.gameMode = Engine.GAME_MODES.RUN;
          this.boss.hasSpawned = false;
        }, this);
      }
      this.drawHealthBar(this.boss);
    },
    playerDie: function() {
      if (this.player.alive) {
        this.player.alive = false;
        Engine.deaths += 1;
        this.player.sprite.kill();
        Engine.game.camera.flash(6231060, 850);
      }
      Engine.game.time.events.add(5e3, function() {
        this.music.stop();
        this.bossMusic.stop();
        Engine.game.state.start("menu");
      }, this);
    },
    // clear all game objects
    clearGameObjects: function() {
      this.vehicles.group.forEach(function(vehicle) {
        vehicle.kill();
      }, this);
      this.buildings.group.forEach(function(building) {
        building.kill();
      }, this);
      this.missiles.group.forEach(function(missile) {
        missile.kill();
      }, this);
    }
  };
  var play_default = PlayState;

  // src/game.js
  var import_ua_parser_js = __toESM(require_ua_parser());
  var Engine2 = {
    running: false,
    TILESIZE: 128,
    GAME_SPEED: 150,
    SCROLL_SPEED: 50,
    GAME_HEIGHT: 0,
    GAME_WIDTH: 0,
    BASE_URL: "",
    GAME_MODES: {
      RUN: 1,
      BOSS: 2
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
    Engine2.gameMode = Engine2.GAME_MODES.RUN;
    Engine2.backgroundColor = gameOptions.backgroundColor;
    Engine2.backgroundImage = gameOptions.backgroundImage;
    Engine2.backgroundMusic = gameOptions.music;
    Engine2.splatter = 1;
    Engine2.gravity = 2500;
    Engine2.playerData = gameOptions.playerData;
    Engine2.weaponData = gameOptions.weaponData;
    Engine2.walletAddress = gameOptions.walletAddress;
    Engine2.sounds = {};
    Engine2.muteStatus = gameOptions.muted;
    Engine2.score = 0;
    Engine2.deaths = 0;
    Engine2.levelTime = 0;
    setCavasSize();
    Engine2.game = new Phaser2.Game(Engine2.GAME_WIDTH, Engine2.GAME_HEIGHT, Phaser2.AUTO, "game");
    Engine2.musicPlaying = false;
    Engine2.game.state.add("boot", boot_default);
    Engine2.game.state.add("load", load_default);
    Engine2.game.state.add("menu", menu_default);
    Engine2.game.state.add("play", play_default);
    Engine2.campaign = gameOptions.campaign;
    Engine2.running = true;
    Engine2.game.state.start("boot");
    window.Engine = Engine2;
  }

  // src/app.js
  window.onload = function() {
    const gameEl = document.querySelector("#game");
    gameEl.oncontextmenu = () => false;
    import_webfontloader.default.load({
      google: {
        families: ["VT323"]
      }
    });
    runGame({
      backgroundColor: "#1c0000",
      backgroundImage: "assets/environment.png",
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
  };
})();
