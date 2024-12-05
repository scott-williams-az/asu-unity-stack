import He, { useId as dn, useRef as pn, useContext as Bt, createElement as mn } from "react";
function Wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fr = { exports: {} }, Ze = {};
var hr;
function hn() {
  if (hr) return Ze;
  hr = 1;
  var e = He, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, f, y) {
    var b, g = {}, L = null, D = null;
    y !== void 0 && (L = "" + y), f.key !== void 0 && (L = "" + f.key), f.ref !== void 0 && (D = f.ref);
    for (b in f) n.call(f, b) && !s.hasOwnProperty(b) && (g[b] = f[b]);
    if (u && u.defaultProps) for (b in f = u.defaultProps, f) g[b] === void 0 && (g[b] = f[b]);
    return { $$typeof: r, type: u, key: L, ref: D, props: g, _owner: i.current };
  }
  return Ze.Fragment = t, Ze.jsx = c, Ze.jsxs = c, Ze;
}
Fr.exports = hn();
var _ = Fr.exports, zr = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var s = "", c = 0; c < arguments.length; c++) {
        var u = arguments[c];
        u && (s = i(s, n(u)));
      }
      return s;
    }
    function n(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return t.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var c = "";
      for (var u in s)
        r.call(s, u) && s[u] && (c = i(c, u));
      return c;
    }
    function i(s, c) {
      return c ? s ? s + " " + c : s + c : s;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(zr);
var gn = zr.exports;
const Je = /* @__PURE__ */ Wt(gn);
var $r = { exports: {} }, St = { exports: {} }, B = {};
var gr;
function vn() {
  if (gr) return B;
  gr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, D = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function P(p) {
    if (typeof p == "object" && p !== null) {
      var J = p.$$typeof;
      switch (J) {
        case r:
          switch (p = p.type, p) {
            case f:
            case y:
            case n:
            case s:
            case i:
            case g:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case b:
                case x:
                case D:
                case c:
                  return p;
                default:
                  return J;
              }
          }
        case t:
          return J;
      }
    }
  }
  function k(p) {
    return P(p) === y;
  }
  return B.AsyncMode = f, B.ConcurrentMode = y, B.ContextConsumer = u, B.ContextProvider = c, B.Element = r, B.ForwardRef = b, B.Fragment = n, B.Lazy = x, B.Memo = D, B.Portal = t, B.Profiler = s, B.StrictMode = i, B.Suspense = g, B.isAsyncMode = function(p) {
    return k(p) || P(p) === f;
  }, B.isConcurrentMode = k, B.isContextConsumer = function(p) {
    return P(p) === u;
  }, B.isContextProvider = function(p) {
    return P(p) === c;
  }, B.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, B.isForwardRef = function(p) {
    return P(p) === b;
  }, B.isFragment = function(p) {
    return P(p) === n;
  }, B.isLazy = function(p) {
    return P(p) === x;
  }, B.isMemo = function(p) {
    return P(p) === D;
  }, B.isPortal = function(p) {
    return P(p) === t;
  }, B.isProfiler = function(p) {
    return P(p) === s;
  }, B.isStrictMode = function(p) {
    return P(p) === i;
  }, B.isSuspense = function(p) {
    return P(p) === g;
  }, B.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === y || p === s || p === i || p === g || p === L || typeof p == "object" && p !== null && (p.$$typeof === x || p.$$typeof === D || p.$$typeof === c || p.$$typeof === u || p.$$typeof === b || p.$$typeof === w || p.$$typeof === j || p.$$typeof === N || p.$$typeof === R);
  }, B.typeOf = P, B;
}
var vr;
function Ur() {
  return vr || (vr = 1, St.exports = vn()), St.exports;
}
var wt, yr;
function yn() {
  if (yr) return wt;
  yr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Et, br;
function bn() {
  if (br) return Et;
  br = 1;
  var e = yn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Et = function() {
    function n(c, u, f, y, b, g) {
      if (g !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, Et;
}
$r.exports = bn()();
var _n = $r.exports;
const o = /* @__PURE__ */ Wt(_n), Tn = (e) => (e || []).join(" ");
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Pe(e);
}
function Pt(e, r) {
  return Pt = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Pt(e, r);
}
function An() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ut(e, r, t) {
  return An() ? ut = Reflect.construct : ut = function(i, s, c) {
    var u = [null];
    u.push.apply(u, s);
    var f = Function.bind.apply(i, u), y = new f();
    return c && Pt(y, c.prototype), y;
  }, ut.apply(null, arguments);
}
function Ae(e) {
  return Sn(e) || wn(e) || En(e) || On();
}
function Sn(e) {
  if (Array.isArray(e)) return Dt(e);
}
function wn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function En(e, r) {
  if (e) {
    if (typeof e == "string") return Dt(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Dt(e, r);
  }
}
function Dt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function On() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var xn = Object.hasOwnProperty, _r = Object.setPrototypeOf, kn = Object.isFrozen, Cn = Object.getPrototypeOf, Rn = Object.getOwnPropertyDescriptor, le = Object.freeze, be = Object.seal, Nn = Object.create, Hr = typeof Reflect < "u" && Reflect, pt = Hr.apply, Mt = Hr.construct;
pt || (pt = function(r, t, n) {
  return r.apply(t, n);
});
le || (le = function(r) {
  return r;
});
be || (be = function(r) {
  return r;
});
Mt || (Mt = function(r, t) {
  return ut(r, Ae(t));
});
var In = _e(Array.prototype.forEach), Tr = _e(Array.prototype.pop), Ke = _e(Array.prototype.push), ft = _e(String.prototype.toLowerCase), Ot = _e(String.prototype.toString), Ar = _e(String.prototype.match), Te = _e(String.prototype.replace), Ln = _e(String.prototype.indexOf), Pn = _e(String.prototype.trim), ae = _e(RegExp.prototype.test), xt = Dn(TypeError);
function _e(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return pt(e, r, n);
  };
}
function Dn(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Mt(e, t);
  };
}
function M(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ft, _r && _r(e, null);
  for (var i = r.length; i--; ) {
    var s = r[i];
    if (typeof s == "string") {
      var c = t(s);
      c !== s && (kn(r) || (r[i] = c), s = c);
    }
    e[s] = !0;
  }
  return e;
}
function $e(e) {
  var r = Nn(null), t;
  for (t in e)
    pt(xn, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function ot(e, r) {
  for (; e !== null; ) {
    var t = Rn(e, r);
    if (t) {
      if (t.get)
        return _e(t.get);
      if (typeof t.value == "function")
        return _e(t.value);
    }
    e = Cn(e);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
var Sr = le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kt = le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ct = le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mn = le(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Rt = le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), jn = le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wr = le(["#text"]), Er = le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Nt = le(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Or = le(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), it = le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Fn = be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), zn = be(/<%[\w\W]*|[\w\W]*%>/gm), $n = be(/\${[\w\W]*}/gm), Un = be(/^data-[\-\w.\u00B7-\uFFFF]/), Hn = be(/^aria-[\-\w]+$/), Bn = be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Wn = be(/^(?:\w+script|data):/i), Gn = be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Vn = be(/^html$/i), Yn = be(/^[a-z][.\w]*(-[.\w]+)+$/i), qn = function() {
  return typeof window > "u" ? null : window;
}, Xn = function(r, t) {
  if (Pe(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, i = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(i) && (n = t.currentScript.getAttribute(i));
  var s = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(s, {
      createHTML: function(u) {
        return u;
      },
      createScriptURL: function(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function Br() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qn(), r = function(a) {
    return Br(a);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, i = e.DocumentFragment, s = e.HTMLTemplateElement, c = e.Node, u = e.Element, f = e.NodeFilter, y = e.NamedNodeMap, b = y === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : y, g = e.HTMLFormElement, L = e.DOMParser, D = e.trustedTypes, x = u.prototype, R = ot(x, "cloneNode"), w = ot(x, "nextSibling"), j = ot(x, "childNodes"), N = ot(x, "parentNode");
  if (typeof s == "function") {
    var P = n.createElement("template");
    P.content && P.content.ownerDocument && (n = P.content.ownerDocument);
  }
  var k = Xn(D, t), p = k ? k.createHTML("") : "", J = n, he = J.implementation, ce = J.createNodeIterator, ge = J.createDocumentFragment, Se = J.getElementsByTagName, Ie = t.importNode, oe = {};
  try {
    oe = $e(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var q = {};
  r.isSupported = typeof N == "function" && he && he.createHTMLDocument !== void 0 && oe !== 9;
  var ue = Fn, te = zn, Ee = $n, me = Un, fe = Hn, Me = Wn, Oe = Gn, je = Yn, A = Bn, h = null, T = M({}, [].concat(Ae(Sr), Ae(kt), Ae(Ct), Ae(Rt), Ae(wr))), S = null, l = M({}, [].concat(Ae(Er), Ae(Nt), Ae(Or), Ae(it))), O = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), m = null, G = null, U = !0, z = !0, I = !1, Q = !0, Z = !1, F = !0, Y = !1, $ = !1, K = !1, ve = !1, X = !1, xe = !1, Le = !0, de = !1, C = "user-content-", V = !0, ke = !1, we = {}, se = null, er = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), tr = null, rr = M({}, ["audio", "video", "img", "source", "image", "track"]), vt = null, nr = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt = "http://www.w3.org/1998/Math/MathML", rt = "http://www.w3.org/2000/svg", Ce = "http://www.w3.org/1999/xhtml", Be = Ce, yt = !1, bt = null, an = M({}, [tt, rt, Ce], Ot), Fe, on = ["application/xhtml+xml", "text/html"], sn = "text/html", re, We = null, ln = n.createElement("form"), ar = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, _t = function(a) {
    We && We === a || ((!a || Pe(a) !== "object") && (a = {}), a = $e(a), Fe = // eslint-disable-next-line unicorn/prefer-includes
    on.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Fe = sn : Fe = a.PARSER_MEDIA_TYPE, re = Fe === "application/xhtml+xml" ? Ot : ft, h = "ALLOWED_TAGS" in a ? M({}, a.ALLOWED_TAGS, re) : T, S = "ALLOWED_ATTR" in a ? M({}, a.ALLOWED_ATTR, re) : l, bt = "ALLOWED_NAMESPACES" in a ? M({}, a.ALLOWED_NAMESPACES, Ot) : an, vt = "ADD_URI_SAFE_ATTR" in a ? M(
      $e(nr),
      // eslint-disable-line indent
      a.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : nr, tr = "ADD_DATA_URI_TAGS" in a ? M(
      $e(rr),
      // eslint-disable-line indent
      a.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : rr, se = "FORBID_CONTENTS" in a ? M({}, a.FORBID_CONTENTS, re) : er, m = "FORBID_TAGS" in a ? M({}, a.FORBID_TAGS, re) : {}, G = "FORBID_ATTR" in a ? M({}, a.FORBID_ATTR, re) : {}, we = "USE_PROFILES" in a ? a.USE_PROFILES : !1, U = a.ALLOW_ARIA_ATTR !== !1, z = a.ALLOW_DATA_ATTR !== !1, I = a.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, F = a.SAFE_FOR_XML !== !1, Y = a.WHOLE_DOCUMENT || !1, ve = a.RETURN_DOM || !1, X = a.RETURN_DOM_FRAGMENT || !1, xe = a.RETURN_TRUSTED_TYPE || !1, K = a.FORCE_BODY || !1, Le = a.SANITIZE_DOM !== !1, de = a.SANITIZE_NAMED_PROPS || !1, V = a.KEEP_CONTENT !== !1, ke = a.IN_PLACE || !1, A = a.ALLOWED_URI_REGEXP || A, Be = a.NAMESPACE || Ce, O = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && ar(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (O.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && ar(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (O.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (O.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && (z = !1), X && (ve = !0), we && (h = M({}, Ae(wr)), S = [], we.html === !0 && (M(h, Sr), M(S, Er)), we.svg === !0 && (M(h, kt), M(S, Nt), M(S, it)), we.svgFilters === !0 && (M(h, Ct), M(S, Nt), M(S, it)), we.mathMl === !0 && (M(h, Rt), M(S, Or), M(S, it))), a.ADD_TAGS && (h === T && (h = $e(h)), M(h, a.ADD_TAGS, re)), a.ADD_ATTR && (S === l && (S = $e(S)), M(S, a.ADD_ATTR, re)), a.ADD_URI_SAFE_ATTR && M(vt, a.ADD_URI_SAFE_ATTR, re), a.FORBID_CONTENTS && (se === er && (se = $e(se)), M(se, a.FORBID_CONTENTS, re)), V && (h["#text"] = !0), Y && M(h, ["html", "head", "body"]), h.table && (M(h, ["tbody"]), delete m.tbody), le && le(a), We = a);
  }, or = M({}, ["mi", "mo", "mn", "ms", "mtext"]), ir = M({}, ["annotation-xml"]), cn = M({}, ["title", "style", "font", "a", "script"]), nt = M({}, kt);
  M(nt, Ct), M(nt, Mn);
  var Tt = M({}, Rt);
  M(Tt, jn);
  var un = function(a) {
    var d = N(a);
    (!d || !d.tagName) && (d = {
      namespaceURI: Be,
      tagName: "template"
    });
    var v = ft(a.tagName), H = ft(d.tagName);
    return bt[a.namespaceURI] ? a.namespaceURI === rt ? d.namespaceURI === Ce ? v === "svg" : d.namespaceURI === tt ? v === "svg" && (H === "annotation-xml" || or[H]) : !!nt[v] : a.namespaceURI === tt ? d.namespaceURI === Ce ? v === "math" : d.namespaceURI === rt ? v === "math" && ir[H] : !!Tt[v] : a.namespaceURI === Ce ? d.namespaceURI === rt && !ir[H] || d.namespaceURI === tt && !or[H] ? !1 : !Tt[v] && (cn[v] || !nt[v]) : !!(Fe === "application/xhtml+xml" && bt[a.namespaceURI]) : !1;
  }, ye = function(a) {
    Ke(r.removed, {
      element: a
    });
    try {
      a.parentNode.removeChild(a);
    } catch {
      try {
        a.outerHTML = p;
      } catch {
        a.remove();
      }
    }
  }, at = function(a, d) {
    try {
      Ke(r.removed, {
        attribute: d.getAttributeNode(a),
        from: d
      });
    } catch {
      Ke(r.removed, {
        attribute: null,
        from: d
      });
    }
    if (d.removeAttribute(a), a === "is" && !S[a])
      if (ve || X)
        try {
          ye(d);
        } catch {
        }
      else
        try {
          d.setAttribute(a, "");
        } catch {
        }
  }, sr = function(a) {
    var d, v;
    if (K)
      a = "<remove></remove>" + a;
    else {
      var H = Ar(a, /^[\r\n\t ]+/);
      v = H && H[0];
    }
    Fe === "application/xhtml+xml" && Be === Ce && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    var pe = k ? k.createHTML(a) : a;
    if (Be === Ce)
      try {
        d = new L().parseFromString(pe, Fe);
      } catch {
      }
    if (!d || !d.documentElement) {
      d = he.createDocument(Be, "template", null);
      try {
        d.documentElement.innerHTML = yt ? p : pe;
      } catch {
      }
    }
    var ie = d.body || d.documentElement;
    return a && v && ie.insertBefore(n.createTextNode(v), ie.childNodes[0] || null), Be === Ce ? Se.call(d, Y ? "html" : "body")[0] : Y ? d.documentElement : ie;
  }, lr = function(a) {
    return ce.call(
      a.ownerDocument || a,
      a,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, cr = function(a) {
    return a instanceof g && (typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || !(a.attributes instanceof b) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function");
  }, Xe = function(a) {
    return Pe(c) === "object" ? a instanceof c : a && Pe(a) === "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
  }, Re = function(a, d, v) {
    q[a] && In(q[a], function(H) {
      H.call(r, d, v, We);
    });
  }, ur = function(a) {
    var d;
    if (Re("beforeSanitizeElements", a, null), cr(a) || ae(/[\u0080-\uFFFF]/, a.nodeName))
      return ye(a), !0;
    var v = re(a.nodeName);
    if (Re("uponSanitizeElement", a, {
      tagName: v,
      allowedTags: h
    }), a.hasChildNodes() && !Xe(a.firstElementChild) && (!Xe(a.content) || !Xe(a.content.firstElementChild)) && ae(/<[/\w]/g, a.innerHTML) && ae(/<[/\w]/g, a.textContent) || v === "select" && ae(/<template/i, a.innerHTML) || a.nodeType === 7 || F && a.nodeType === 8 && ae(/<[/\w]/g, a.data))
      return ye(a), !0;
    if (!h[v] || m[v]) {
      if (!m[v] && dr(v) && (O.tagNameCheck instanceof RegExp && ae(O.tagNameCheck, v) || O.tagNameCheck instanceof Function && O.tagNameCheck(v)))
        return !1;
      if (V && !se[v]) {
        var H = N(a) || a.parentNode, pe = j(a) || a.childNodes;
        if (pe && H)
          for (var ie = pe.length, ne = ie - 1; ne >= 0; --ne) {
            var ze = R(pe[ne], !0);
            ze.__removalCount = (a.__removalCount || 0) + 1, H.insertBefore(ze, w(a));
          }
      }
      return ye(a), !0;
    }
    return a instanceof u && !un(a) || (v === "noscript" || v === "noembed" || v === "noframes") && ae(/<\/no(script|embed|frames)/i, a.innerHTML) ? (ye(a), !0) : (Z && a.nodeType === 3 && (d = a.textContent, d = Te(d, ue, " "), d = Te(d, te, " "), d = Te(d, Ee, " "), a.textContent !== d && (Ke(r.removed, {
      element: a.cloneNode()
    }), a.textContent = d)), Re("afterSanitizeElements", a, null), !1);
  }, fr = function(a, d, v) {
    if (Le && (d === "id" || d === "name") && (v in n || v in ln))
      return !1;
    if (!(z && !G[d] && ae(me, d))) {
      if (!(U && ae(fe, d))) {
        if (!S[d] || G[d]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(dr(a) && (O.tagNameCheck instanceof RegExp && ae(O.tagNameCheck, a) || O.tagNameCheck instanceof Function && O.tagNameCheck(a)) && (O.attributeNameCheck instanceof RegExp && ae(O.attributeNameCheck, d) || O.attributeNameCheck instanceof Function && O.attributeNameCheck(d)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            d === "is" && O.allowCustomizedBuiltInElements && (O.tagNameCheck instanceof RegExp && ae(O.tagNameCheck, v) || O.tagNameCheck instanceof Function && O.tagNameCheck(v)))
          ) return !1;
        } else if (!vt[d]) {
          if (!ae(A, Te(v, Oe, ""))) {
            if (!((d === "src" || d === "xlink:href" || d === "href") && a !== "script" && Ln(v, "data:") === 0 && tr[a])) {
              if (!(I && !ae(Me, Te(v, Oe, "")))) {
                if (v)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, dr = function(a) {
    return a !== "annotation-xml" && Ar(a, je);
  }, pr = function(a) {
    var d, v, H, pe;
    Re("beforeSanitizeAttributes", a, null);
    var ie = a.attributes;
    if (ie) {
      var ne = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: S
      };
      for (pe = ie.length; pe--; ) {
        d = ie[pe];
        var ze = d, ee = ze.name, At = ze.namespaceURI;
        if (v = ee === "value" ? d.value : Pn(d.value), H = re(ee), ne.attrName = H, ne.attrValue = v, ne.keepAttr = !0, ne.forceKeepAttr = void 0, Re("uponSanitizeAttribute", a, ne), v = ne.attrValue, !ne.forceKeepAttr && (at(ee, a), !!ne.keepAttr)) {
          if (!Q && ae(/\/>/i, v)) {
            at(ee, a);
            continue;
          }
          Z && (v = Te(v, ue, " "), v = Te(v, te, " "), v = Te(v, Ee, " "));
          var mr = re(a.nodeName);
          if (fr(mr, H, v)) {
            if (de && (H === "id" || H === "name") && (at(ee, a), v = C + v), F && ae(/((--!?|])>)|<\/(style|title)/i, v)) {
              at(ee, a);
              continue;
            }
            if (k && Pe(D) === "object" && typeof D.getAttributeType == "function" && !At)
              switch (D.getAttributeType(mr, H)) {
                case "TrustedHTML": {
                  v = k.createHTML(v);
                  break;
                }
                case "TrustedScriptURL": {
                  v = k.createScriptURL(v);
                  break;
                }
              }
            try {
              At ? a.setAttributeNS(At, ee, v) : a.setAttribute(ee, v), cr(a) ? ye(a) : Tr(r.removed);
            } catch {
            }
          }
        }
      }
      Re("afterSanitizeAttributes", a, null);
    }
  }, fn = function E(a) {
    var d, v = lr(a);
    for (Re("beforeSanitizeShadowDOM", a, null); d = v.nextNode(); )
      Re("uponSanitizeShadowNode", d, null), !ur(d) && (d.content instanceof i && E(d.content), pr(d));
    Re("afterSanitizeShadowDOM", a, null);
  };
  return r.sanitize = function(E) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, v, H, pe, ie;
    if (yt = !E, yt && (E = "<!-->"), typeof E != "string" && !Xe(E))
      if (typeof E.toString == "function") {
        if (E = E.toString(), typeof E != "string")
          throw xt("dirty is not a string, aborting");
      } else
        throw xt("toString is not a function");
    if (!r.isSupported) {
      if (Pe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof E == "string")
          return e.toStaticHTML(E);
        if (Xe(E))
          return e.toStaticHTML(E.outerHTML);
      }
      return E;
    }
    if ($ || _t(a), r.removed = [], typeof E == "string" && (ke = !1), ke) {
      if (E.nodeName) {
        var ne = re(E.nodeName);
        if (!h[ne] || m[ne])
          throw xt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (E instanceof c)
      d = sr("<!---->"), v = d.ownerDocument.importNode(E, !0), v.nodeType === 1 && v.nodeName === "BODY" || v.nodeName === "HTML" ? d = v : d.appendChild(v);
    else {
      if (!ve && !Z && !Y && // eslint-disable-next-line unicorn/prefer-includes
      E.indexOf("<") === -1)
        return k && xe ? k.createHTML(E) : E;
      if (d = sr(E), !d)
        return ve ? null : xe ? p : "";
    }
    d && K && ye(d.firstChild);
    for (var ze = lr(ke ? E : d); H = ze.nextNode(); )
      H.nodeType === 3 && H === pe || ur(H) || (H.content instanceof i && fn(H.content), pr(H), pe = H);
    if (pe = null, ke)
      return E;
    if (ve) {
      if (X)
        for (ie = ge.call(d.ownerDocument); d.firstChild; )
          ie.appendChild(d.firstChild);
      else
        ie = d;
      return (S.shadowroot || S.shadowrootmod) && (ie = Ie.call(t, ie, !0)), ie;
    }
    var ee = Y ? d.outerHTML : d.innerHTML;
    return Y && h["!doctype"] && d.ownerDocument && d.ownerDocument.doctype && d.ownerDocument.doctype.name && ae(Vn, d.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + d.ownerDocument.doctype.name + `>
` + ee), Z && (ee = Te(ee, ue, " "), ee = Te(ee, te, " "), ee = Te(ee, Ee, " ")), k && xe ? k.createHTML(ee) : ee;
  }, r.setConfig = function(E) {
    _t(E), $ = !0;
  }, r.clearConfig = function() {
    We = null, $ = !1;
  }, r.isValidAttribute = function(E, a, d) {
    We || _t({});
    var v = re(E), H = re(a);
    return fr(v, H, d);
  }, r.addHook = function(E, a) {
    typeof a == "function" && (q[E] = q[E] || [], Ke(q[E], a));
  }, r.removeHook = function(E) {
    if (q[E])
      return Tr(q[E]);
  }, r.removeHooks = function(E) {
    q[E] && (q[E] = []);
  }, r.removeAllHooks = function() {
    q = {};
  }, r;
}
var Zn = Br();
const Ge = (e) => ({ __html: Zn.sanitize(e) });
o.shape({
  event: o.string,
  action: o.string,
  name: o.string,
  region: o.string,
  section: o.string,
  component: o.string,
  type: o.string,
  text: o.string
});
const Wr = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: i = "",
  text: s = "",
  region: c = "",
  component: u = ""
}) => {
  const { dataLayer: f } = window, y = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: c.toLowerCase(),
    section: i.toLowerCase(),
    text: s.toLowerCase(),
    component: u.toLowerCase()
  };
  f && f.push(y);
}, Kn = "staticMarkup";
function Qn() {
  const r = dn().indexOf(Kn) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Gr = ({ gaData: e, children: r }) => {
  const { isReact: t } = Qn(), { onClick: n, ...i } = r.props;
  return t ? He.cloneElement(r, {
    ...i,
    onClick: (s) => (Wr(e), n ? n(s) : !0)
  }) : He.cloneElement(r, {
    ...i,
    onClick: n,
    "data-ga": e.text,
    "data-ga-name": e.name,
    "data-ga-event": e.event,
    "data-ga-action": e.action,
    "data-ga-type": e.type,
    "data-ga-region": e.region,
    "data-ga-section": e.section,
    "data-ga-component": e.component
  });
}, Jn = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Gt = ({
  label: e,
  cardTitle: r,
  ariaLabel: t,
  block: n,
  color: i,
  disabled: s,
  element: c,
  href: u,
  icon: f,
  innerRef: y,
  onClick: b,
  size: g,
  classes: L,
  target: D,
  ...x
}) => {
  const R = Je("btn", {
    [`btn-${i}`]: !0,
    "btn-md": g === "small",
    "btn-sm": g === "xsmall",
    "btn-block": n,
    disabled: s
  });
  let w = c;
  u && c === "button" && (w = "a");
  const j = (N) => {
    b == null || b();
  };
  return /* @__PURE__ */ _.jsx(
    Gr,
    {
      gaData: { ...Jn, text: e, section: r },
      children: /* @__PURE__ */ _.jsxs(
        w,
        {
          type: w === "button" && b ? "button" : void 0,
          ...x,
          className: Je(L) || R,
          href: u,
          ref: y,
          onClick: j,
          "aria-label": t,
          target: w === "a" ? D : null,
          children: [
            f && /* @__PURE__ */ _.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Gt.propTypes = {
  /**
   * Button label
   */
  label: o.string,
  /**
   * Card title
   */
  cardTitle: o.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Render button as a block-button?
  */
  block: o.bool,
  /**
    Button background color
  */
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func,
  /**
    Button size
  */
  size: o.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: o.arrayOf(o.string),
  /**
   Link target type
   */
  target: o.oneOf(["_blank", "_self", "_top", "_parent"])
};
Gt.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  block: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "default",
  classes: void 0,
  target: "_self"
};
const ea = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vt = ({
  label: e,
  cardTitle: r,
  ariaLabel: t,
  color: n,
  disabled: i,
  element: s,
  innerRef: c,
  href: u,
  onClick: f,
  ...y
}) => {
  const b = Je("btn", "btn-tag", {
    "btn-tag-alt-white": n === "white",
    "btn-tag-alt-gray": n === "gray",
    "btn-tag-alt-dark": n === "dark",
    disabled: i
  });
  let g = s;
  u && s === "button" && (g = "a");
  const L = (D) => {
    Wr({ ...ea, text: D, section: r }), f == null || f();
  };
  return (
    // @ts-ignore
    /* @__PURE__ */ _.jsx(
      g,
      {
        type: g === "button" && f ? "button" : void 0,
        ...y,
        className: b,
        href: u,
        ref: c,
        onClick: () => L(e),
        "aria-label": t,
        children: e
      }
    )
  );
};
Vt.propTypes = {
  /**
    Button tag label
  */
  label: o.string,
  /**
   * Card title
   */
  cardTitle: o.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Button background color
  */
  color: o.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func
};
Vt.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  innerRef: void 0,
  onClick: void 0
};
const Vr = ({
  src: e,
  alt: r,
  cssClasses: t,
  loading: n = "lazy",
  decoding: i = "async",
  dataTestId: s,
  fetchPriority: c = "auto",
  width: u,
  height: f,
  cardLink: y,
  title: b,
  caption: g,
  captionTitle: L,
  border: D,
  dropShadow: x
}) => {
  const R = {
    src: e,
    alt: r,
    loading: n,
    decoding: i,
    fetchpriority: c,
    // React attribute bug workaround
    ...(t == null ? void 0 : t.length) > 0 && { className: Tn(t) },
    ...s && { "data-testid": s },
    ...u && { width: u },
    ...f && { height: f }
  }, w = Je("uds-img", {
    borderless: !D,
    "uds-img-drop-shadow": x
  }), j = (P) => {
    const k = P ? `${R.className} ${P}` : R.className;
    return y ? /* @__PURE__ */ _.jsxs("a", { href: y, children: [
      /* @__PURE__ */ _.jsx("img", { ...R, className: k }),
      /* @__PURE__ */ _.jsx("span", { className: "visually-hidden", children: b })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ _.jsx("img", { ...R, className: k })
    );
  }, N = () => /* @__PURE__ */ _.jsx("div", { className: w, children: /* @__PURE__ */ _.jsxs("figure", { className: "figure uds-figure", children: [
    j(),
    g && /* @__PURE__ */ _.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      L && /* @__PURE__ */ _.jsx("h3", { children: L }),
      /* @__PURE__ */ _.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ge(g)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: g ? N() : j(w) });
};
Vr.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: o.string.isRequired,
  /**
   * Image alt text
   */
  alt: o.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: o.arrayOf(o.string),
  /**
   * Image loading mode
   */
  loading: o.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: o.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: o.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: o.string,
  /**
   * Height of the image
   */
  height: o.string,
  dataTestId: o.string,
  cardLink: o.string,
  title: o.string,
  caption: o.string,
  captionTitle: o.string,
  border: o.bool,
  dropShadow: o.bool
};
var Yt = Ur();
function ta(e) {
  function r(A, h, T, S, l) {
    for (var O = 0, m = 0, G = 0, U = 0, z, I, Q = 0, Z = 0, F, Y = F = z = 0, $ = 0, K = 0, ve = 0, X = 0, xe = T.length, Le = xe - 1, de, C = "", V = "", ke = "", we = "", se; $ < xe; ) {
      if (I = T.charCodeAt($), $ === Le && m + U + G + O !== 0 && (m !== 0 && (I = m === 47 ? 10 : 47), U = G = O = 0, xe++, Le++), m + U + G + O === 0) {
        if ($ === Le && (0 < K && (C = C.replace(L, "")), 0 < C.trim().length)) {
          switch (I) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              C += T.charAt($);
          }
          I = 59;
        }
        switch (I) {
          case 123:
            for (C = C.trim(), z = C.charCodeAt(0), F = 1, X = ++$; $ < xe; ) {
              switch (I = T.charCodeAt($)) {
                case 123:
                  F++;
                  break;
                case 125:
                  F--;
                  break;
                case 47:
                  switch (I = T.charCodeAt($ + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = $ + 1; Y < Le; ++Y)
                          switch (T.charCodeAt(Y)) {
                            case 47:
                              if (I === 42 && T.charCodeAt(Y - 1) === 42 && $ + 2 !== Y) {
                                $ = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (I === 47) {
                                $ = Y + 1;
                                break e;
                              }
                          }
                        $ = Y;
                      }
                  }
                  break;
                case 91:
                  I++;
                case 40:
                  I++;
                case 34:
                case 39:
                  for (; $++ < Le && T.charCodeAt($) !== I; )
                    ;
              }
              if (F === 0) break;
              $++;
            }
            switch (F = T.substring(X, $), z === 0 && (z = (C = C.replace(g, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < K && (C = C.replace(L, "")), I = C.charCodeAt(1), I) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    K = h;
                    break;
                  default:
                    K = Ee;
                }
                if (F = r(h, K, F, I, l + 1), X = F.length, 0 < fe && (K = t(Ee, C, ve), se = u(3, F, K, h, q, oe, X, I, l, S), C = K.join(""), se !== void 0 && (X = (F = se.trim()).length) === 0 && (I = 0, F = "")), 0 < X) switch (I) {
                  case 115:
                    C = C.replace(J, c);
                  case 100:
                  case 109:
                  case 45:
                    F = C + "{" + F + "}";
                    break;
                  case 107:
                    C = C.replace(N, "$1 $2"), F = C + "{" + F + "}", F = te === 1 || te === 2 && s("@" + F, 3) ? "@-webkit-" + F + "@" + F : "@" + F;
                    break;
                  default:
                    F = C + F, S === 112 && (F = (V += F, ""));
                }
                else F = "";
                break;
              default:
                F = r(h, t(h, C, ve), F, S, l + 1);
            }
            ke += F, F = ve = K = Y = z = 0, C = "", I = T.charCodeAt(++$);
            break;
          case 125:
          case 59:
            if (C = (0 < K ? C.replace(L, "") : C).trim(), 1 < (X = C.length)) switch (Y === 0 && (z = C.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (X = (C = C.replace(" ", ":")).length), 0 < fe && (se = u(1, C, h, A, q, oe, V.length, S, l, S)) !== void 0 && (X = (C = se.trim()).length) === 0 && (C = "\0\0"), z = C.charCodeAt(0), I = C.charCodeAt(1), z) {
              case 0:
                break;
              case 64:
                if (I === 105 || I === 99) {
                  we += C + T.charAt($);
                  break;
                }
              default:
                C.charCodeAt(X - 1) !== 58 && (V += i(C, z, I, C.charCodeAt(2)));
            }
            ve = K = Y = z = 0, C = "", I = T.charCodeAt(++$);
        }
      }
      switch (I) {
        case 13:
        case 10:
          m === 47 ? m = 0 : 1 + z === 0 && S !== 107 && 0 < C.length && (K = 1, C += "\0"), 0 < fe * Oe && u(0, C, h, A, q, oe, V.length, S, l, S), oe = 1, q++;
          break;
        case 59:
        case 125:
          if (m + U + G + O === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, de = T.charAt($), I) {
            case 9:
            case 32:
              if (U + O + m === 0) switch (Q) {
                case 44:
                case 58:
                case 9:
                case 32:
                  de = "";
                  break;
                default:
                  I !== 32 && (de = " ");
              }
              break;
            case 0:
              de = "\\0";
              break;
            case 12:
              de = "\\f";
              break;
            case 11:
              de = "\\v";
              break;
            case 38:
              U + m + O === 0 && (K = ve = 1, de = "\f" + de);
              break;
            case 108:
              if (U + m + O + ue === 0 && 0 < Y) switch ($ - Y) {
                case 2:
                  Q === 112 && T.charCodeAt($ - 3) === 58 && (ue = Q);
                case 8:
                  Z === 111 && (ue = Z);
              }
              break;
            case 58:
              U + m + O === 0 && (Y = $);
              break;
            case 44:
              m + G + U + O === 0 && (K = 1, de += "\r");
              break;
            case 34:
            case 39:
              m === 0 && (U = U === I ? 0 : U === 0 ? I : U);
              break;
            case 91:
              U + m + G === 0 && O++;
              break;
            case 93:
              U + m + G === 0 && O--;
              break;
            case 41:
              U + m + O === 0 && G--;
              break;
            case 40:
              if (U + m + O === 0) {
                if (z === 0) switch (2 * Q + 3 * Z) {
                  case 533:
                    break;
                  default:
                    z = 1;
                }
                G++;
              }
              break;
            case 64:
              m + G + U + O + Y + F === 0 && (F = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + O + G)) switch (m) {
                case 0:
                  switch (2 * I + 3 * T.charCodeAt($ + 1)) {
                    case 235:
                      m = 47;
                      break;
                    case 220:
                      X = $, m = 42;
                  }
                  break;
                case 42:
                  I === 47 && Q === 42 && X + 2 !== $ && (T.charCodeAt(X + 2) === 33 && (V += T.substring(X, $ + 1)), de = "", m = 0);
              }
          }
          m === 0 && (C += de);
      }
      Z = Q, Q = I, $++;
    }
    if (X = V.length, 0 < X) {
      if (K = h, 0 < fe && (se = u(2, V, K, A, q, oe, X, S, l, S), se !== void 0 && (V = se).length === 0)) return we + V + ke;
      if (V = K.join(",") + "{" + V + "}", te * ue !== 0) {
        switch (te !== 2 || s(V, 2) || (ue = 0), ue) {
          case 111:
            V = V.replace(k, ":-moz-$1") + V;
            break;
          case 112:
            V = V.replace(P, "::-webkit-input-$1") + V.replace(P, "::-moz-$1") + V.replace(P, ":-ms-input-$1") + V;
        }
        ue = 0;
      }
    }
    return we + V + ke;
  }
  function t(A, h, T) {
    var S = h.trim().split(w);
    h = S;
    var l = S.length, O = A.length;
    switch (O) {
      case 0:
      case 1:
        var m = 0;
        for (A = O === 0 ? "" : A[0] + " "; m < l; ++m)
          h[m] = n(A, h[m], T).trim();
        break;
      default:
        var G = m = 0;
        for (h = []; m < l; ++m)
          for (var U = 0; U < O; ++U)
            h[G++] = n(A[U] + " ", S[m], T).trim();
    }
    return h;
  }
  function n(A, h, T) {
    var S = h.charCodeAt(0);
    switch (33 > S && (S = (h = h.trim()).charCodeAt(0)), S) {
      case 38:
        return h.replace(j, "$1" + A.trim());
      case 58:
        return A.trim() + h.replace(j, "$1" + A.trim());
      default:
        if (0 < 1 * T && 0 < h.indexOf("\f")) return h.replace(j, (A.charCodeAt(0) === 58 ? "" : "$1") + A.trim());
    }
    return A + h;
  }
  function i(A, h, T, S) {
    var l = A + ";", O = 2 * h + 3 * T + 4 * S;
    if (O === 944) {
      A = l.indexOf(":", 9) + 1;
      var m = l.substring(A, l.length - 1).trim();
      return m = l.substring(0, A).trim() + m + ";", te === 1 || te === 2 && s(m, 1) ? "-webkit-" + m + m : m;
    }
    if (te === 0 || te === 2 && !s(l, 1)) return l;
    switch (O) {
      case 1015:
        return l.charCodeAt(10) === 97 ? "-webkit-" + l + l : l;
      case 951:
        return l.charCodeAt(3) === 116 ? "-webkit-" + l + l : l;
      case 963:
        return l.charCodeAt(5) === 110 ? "-webkit-" + l + l : l;
      case 1009:
        if (l.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + l + l;
      case 978:
        return "-webkit-" + l + "-moz-" + l + l;
      case 1019:
      case 983:
        return "-webkit-" + l + "-moz-" + l + "-ms-" + l + l;
      case 883:
        if (l.charCodeAt(8) === 45) return "-webkit-" + l + l;
        if (0 < l.indexOf("image-set(", 11)) return l.replace(Ie, "$1-webkit-$2") + l;
        break;
      case 932:
        if (l.charCodeAt(4) === 45) switch (l.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + l.replace("-grow", "") + "-webkit-" + l + "-ms-" + l.replace("grow", "positive") + l;
          case 115:
            return "-webkit-" + l + "-ms-" + l.replace("shrink", "negative") + l;
          case 98:
            return "-webkit-" + l + "-ms-" + l.replace("basis", "preferred-size") + l;
        }
        return "-webkit-" + l + "-ms-" + l + l;
      case 964:
        return "-webkit-" + l + "-ms-flex-" + l + l;
      case 1023:
        if (l.charCodeAt(8) !== 99) break;
        return m = l.substring(l.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + m + "-webkit-" + l + "-ms-flex-pack" + m + l;
      case 1005:
        return x.test(l) ? l.replace(D, ":-webkit-") + l.replace(D, ":-moz-") + l : l;
      case 1e3:
        switch (m = l.substring(13).trim(), h = m.indexOf("-") + 1, m.charCodeAt(0) + m.charCodeAt(h)) {
          case 226:
            m = l.replace(p, "tb");
            break;
          case 232:
            m = l.replace(p, "tb-rl");
            break;
          case 220:
            m = l.replace(p, "lr");
            break;
          default:
            return l;
        }
        return "-webkit-" + l + "-ms-" + m + l;
      case 1017:
        if (l.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (h = (l = A).length - 10, m = (l.charCodeAt(h) === 33 ? l.substring(0, h) : l).substring(A.indexOf(":", 7) + 1).trim(), O = m.charCodeAt(0) + (m.charCodeAt(7) | 0)) {
          case 203:
            if (111 > m.charCodeAt(8)) break;
          case 115:
            l = l.replace(m, "-webkit-" + m) + ";" + l;
            break;
          case 207:
          case 102:
            l = l.replace(m, "-webkit-" + (102 < O ? "inline-" : "") + "box") + ";" + l.replace(m, "-webkit-" + m) + ";" + l.replace(m, "-ms-" + m + "box") + ";" + l;
        }
        return l + ";";
      case 938:
        if (l.charCodeAt(5) === 45) switch (l.charCodeAt(6)) {
          case 105:
            return m = l.replace("-items", ""), "-webkit-" + l + "-webkit-box-" + m + "-ms-flex-" + m + l;
          case 115:
            return "-webkit-" + l + "-ms-flex-item-" + l.replace(ce, "") + l;
          default:
            return "-webkit-" + l + "-ms-flex-line-pack" + l.replace("align-content", "").replace(ce, "") + l;
        }
        break;
      case 973:
      case 989:
        if (l.charCodeAt(3) !== 45 || l.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Se.test(A) === !0) return (m = A.substring(A.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(A.replace("stretch", "fill-available"), h, T, S).replace(":fill-available", ":stretch") : l.replace(m, "-webkit-" + m) + l.replace(m, "-moz-" + m.replace("fill-", "")) + l;
        break;
      case 962:
        if (l = "-webkit-" + l + (l.charCodeAt(5) === 102 ? "-ms-" + l : "") + l, T + S === 211 && l.charCodeAt(13) === 105 && 0 < l.indexOf("transform", 10)) return l.substring(0, l.indexOf(";", 27) + 1).replace(R, "$1-webkit-$2") + l;
    }
    return l;
  }
  function s(A, h) {
    var T = A.indexOf(h === 1 ? ":" : "{"), S = A.substring(0, h !== 3 ? T : 10);
    return T = A.substring(T + 1, A.length - 1), Me(h !== 2 ? S : S.replace(ge, "$1"), T, h);
  }
  function c(A, h) {
    var T = i(h, h.charCodeAt(0), h.charCodeAt(1), h.charCodeAt(2));
    return T !== h + ";" ? T.replace(he, " or ($1)").substring(4) : "(" + h + ")";
  }
  function u(A, h, T, S, l, O, m, G, U, z) {
    for (var I = 0, Q = h, Z; I < fe; ++I)
      switch (Z = me[I].call(b, A, Q, T, S, l, O, m, G, U, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = Z;
      }
    if (Q !== h) return Q;
  }
  function f(A) {
    switch (A) {
      case void 0:
      case null:
        fe = me.length = 0;
        break;
      default:
        if (typeof A == "function") me[fe++] = A;
        else if (typeof A == "object") for (var h = 0, T = A.length; h < T; ++h)
          f(A[h]);
        else Oe = !!A | 0;
    }
    return f;
  }
  function y(A) {
    return A = A.prefix, A !== void 0 && (Me = null, A ? typeof A != "function" ? te = 1 : (te = 2, Me = A) : te = 0), y;
  }
  function b(A, h) {
    var T = A;
    if (33 > T.charCodeAt(0) && (T = T.trim()), je = T, T = [je], 0 < fe) {
      var S = u(-1, h, T, T, q, oe, 0, 0, 0, 0);
      S !== void 0 && typeof S == "string" && (h = S);
    }
    var l = r(Ee, T, h, 0, 0);
    return 0 < fe && (S = u(-2, l, T, T, q, oe, l.length, 0, 0, 0), S !== void 0 && (l = S)), je = "", ue = 0, oe = q = 1, l;
  }
  var g = /^\0+/g, L = /[\0\r\f]/g, D = /: */g, x = /zoo|gra/, R = /([,: ])(transform)/g, w = /,\r+?/g, j = /([\t\r\n ])*\f?&/g, N = /@(k\w+)\s*(\S*)\s*/, P = /::(place)/g, k = /:(read-only)/g, p = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, ce = /-self|flex-/g, ge = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Se = /stretch|:\s*\w+\-(?:conte|avail)/, Ie = /([^-])(image-set\()/, oe = 1, q = 1, ue = 0, te = 1, Ee = [], me = [], fe = 0, Me = null, Oe = 0, je = "";
  return b.use = f, b.set = y, e !== void 0 && y(e), b;
}
var ra = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function na(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var aa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xr = /* @__PURE__ */ na(
  function(e) {
    return aa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = Ur(), oa = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, ia = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, sa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xt = {};
Xt[qt.ForwardRef] = sa;
Xt[qt.Memo] = Yr;
function kr(e) {
  return qt.isMemo(e) ? Yr : Xt[e.$$typeof] || oa;
}
var la = Object.defineProperty, ca = Object.getOwnPropertyNames, Cr = Object.getOwnPropertySymbols, ua = Object.getOwnPropertyDescriptor, fa = Object.getPrototypeOf, Rr = Object.prototype;
function qr(e, r, t) {
  if (typeof r != "string") {
    if (Rr) {
      var n = fa(r);
      n && n !== Rr && qr(e, n, t);
    }
    var i = ca(r);
    Cr && (i = i.concat(Cr(r)));
    for (var s = kr(e), c = kr(r), u = 0; u < i.length; ++u) {
      var f = i[u];
      if (!ia[f] && !(t && t[f]) && !(c && c[f]) && !(s && s[f])) {
        var y = ua(r, f);
        try {
          la(e, f, y);
        } catch {
        }
      }
    }
  }
  return e;
}
var da = qr;
const pa = /* @__PURE__ */ Wt(da);
var W = { env: { NODE_ENV: "production" } };
function Ne() {
  return (Ne = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Nr = function(e, r) {
  for (var t = [e[0]], n = 0, i = r.length; n < i; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, jt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Yt.typeOf(e);
}, mt = Object.freeze([]), De = Object.freeze({});
function et(e) {
  return typeof e == "function";
}
function Ft(e) {
  return W.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ve = typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR) || "data-styled", Kt = typeof window < "u" && "HTMLElement" in window, ma = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.env.REACT_APP_SC_DISABLE_SPEEDY : W.env.SC_DISABLE_SPEEDY !== void 0 && W.env.SC_DISABLE_SPEEDY !== "" ? W.env.SC_DISABLE_SPEEDY !== "false" && W.env.SC_DISABLE_SPEEDY : W.env.NODE_ENV !== "production")), ha = W.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function ga() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw W.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ga.apply(void 0, [ha[e]].concat(t)).trim());
}
var va = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, i = 0; i < t; i++) n += this.groupSizes[i];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, c = s; t >= c; ) (c <<= 1) < 0 && qe(16, "" + t);
      this.groupSizes = new Uint32Array(c), this.groupSizes.set(i), this.length = c;
      for (var u = s; u < c; u++) this.groupSizes[u] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), y = 0, b = n.length; y < b; y++) this.tag.insertRule(f, n[y]) && (this.groupSizes[t]++, f++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], i = this.indexOfGroup(t), s = i + n;
      this.groupSizes[t] = 0;
      for (var c = i; c < s; c++) this.tag.deleteRule(i);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var i = this.groupSizes[t], s = this.indexOfGroup(t), c = s + i, u = s; u < c; u++) n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), dt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Qe = 1, st = function(e) {
  if (dt.has(e)) return dt.get(e);
  for (; ht.has(Qe); ) Qe++;
  var r = Qe++;
  return W.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && qe(16, "" + r), dt.set(e, r), ht.set(r, e), r;
}, ya = function(e) {
  return ht.get(e);
}, ba = function(e, r) {
  r >= Qe && (Qe = r + 1), dt.set(e, r), ht.set(r, e);
}, _a = "style[" + Ve + '][data-styled-version="5.3.11"]', Ta = new RegExp("^" + Ve + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Aa = function(e, r, t) {
  for (var n, i = t.split(","), s = 0, c = i.length; s < c; s++) (n = i[s]) && e.registerName(r, n);
}, Sa = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], i = 0, s = t.length; i < s; i++) {
    var c = t[i].trim();
    if (c) {
      var u = c.match(Ta);
      if (u) {
        var f = 0 | parseInt(u[1], 10), y = u[2];
        f !== 0 && (ba(y, f), Aa(e, y, u[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else n.push(c);
    }
  }
}, wa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Xr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), i = function(u) {
    for (var f = u.childNodes, y = f.length; y >= 0; y--) {
      var b = f[y];
      if (b && b.nodeType === 1 && b.hasAttribute(Ve)) return b;
    }
  }(t), s = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(Ve, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var c = wa();
  return c && n.setAttribute("nonce", c), t.insertBefore(n, s), n;
}, Ea = function() {
  function e(t) {
    var n = this.element = Xr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var s = document.styleSheets, c = 0, u = s.length; c < u; c++) {
        var f = s[c];
        if (f.ownerNode === i) return f;
      }
      qe(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Oa = function() {
  function e(t) {
    var n = this.element = Xr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), xa = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Ir = Kt, ka = { isServer: !Kt, useCSSOMInjection: !ma }, Zr = function() {
  function e(t, n, i) {
    t === void 0 && (t = De), n === void 0 && (n = {}), this.options = Ne({}, ka, {}, t), this.gs = n, this.names = new Map(i), this.server = !!t.isServer, !this.server && Kt && Ir && (Ir = !1, function(s) {
      for (var c = document.querySelectorAll(_a), u = 0, f = c.length; u < f; u++) {
        var y = c[u];
        y && y.getAttribute(Ve) !== "active" && (Sa(s, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this));
  }
  e.registerId = function(t) {
    return st(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ne({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, s = n.useCSSOMInjection, c = n.target, t = i ? new xa(c) : s ? new Ea(c) : new Oa(c), new va(t)));
    var t, n, i, s, c;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (st(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(t, i);
    }
  }, r.insertRules = function(t, n, i) {
    this.registerName(t, n), this.getTag().insertRules(st(t), i);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(st(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), i = n.length, s = "", c = 0; c < i; c++) {
        var u = ya(c);
        if (u !== void 0) {
          var f = t.names.get(u), y = n.getGroup(c);
          if (f && y && f.size) {
            var b = Ve + ".g" + c + '[id="' + u + '"]', g = "";
            f !== void 0 && f.forEach(function(L) {
              L.length > 0 && (g += L + ",");
            }), s += "" + y + b + '{content:"' + g + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ca = /(a)(d)/gi, Lr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Lr(r % 52) + t;
  return (Lr(r % 52) + t).replace(Ca, "$1-$2");
}
var Ue = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Kr = function(e) {
  return Ue(5381, e);
};
function Ra(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (et(t) && !Zt(t)) return !1;
  }
  return !0;
}
var Na = Kr("5.3.11"), Ia = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = W.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ra(r), this.componentId = t, this.baseHash = Ue(Na, t), this.baseStyle = n, Zr.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var c = Ye(this.rules, r, t, n).join(""), u = zt(Ue(this.baseHash, c) >>> 0);
      if (!t.hasNameForId(i, u)) {
        var f = n(c, "." + u, void 0, i);
        t.insertRules(i, u, f);
      }
      s.push(u), this.staticRulesId = u;
    }
    else {
      for (var y = this.rules.length, b = Ue(this.baseHash, n.hash), g = "", L = 0; L < y; L++) {
        var D = this.rules[L];
        if (typeof D == "string") g += D, W.env.NODE_ENV !== "production" && (b = Ue(b, D + L));
        else if (D) {
          var x = Ye(D, r, t, n), R = Array.isArray(x) ? x.join("") : x;
          b = Ue(b, R + L), g += R;
        }
      }
      if (g) {
        var w = zt(b >>> 0);
        if (!t.hasNameForId(i, w)) {
          var j = n(g, "." + w, void 0, i);
          t.insertRules(i, w, j);
        }
        s.push(w);
      }
    }
    return s.join(" ");
  }, e;
}(), La = /^\s*\/\/.*$/gm, Pa = [":", "[", ".", "#"];
function Da(e) {
  var r, t, n, i, s = De, c = s.options, u = c === void 0 ? De : c, f = s.plugins, y = f === void 0 ? mt : f, b = new ta(u), g = [], L = /* @__PURE__ */ function(R) {
    function w(j) {
      if (j) try {
        R(j + "}");
      } catch {
      }
    }
    return function(j, N, P, k, p, J, he, ce, ge, Se) {
      switch (j) {
        case 1:
          if (ge === 0 && N.charCodeAt(0) === 64) return R(N + ";"), "";
          break;
        case 2:
          if (ce === 0) return N + "/*|*/";
          break;
        case 3:
          switch (ce) {
            case 102:
            case 112:
              return R(P[0] + N), "";
            default:
              return N + (Se === 0 ? "/*|*/" : "");
          }
        case -2:
          N.split("/*|*/}").forEach(w);
      }
    };
  }(function(R) {
    g.push(R);
  }), D = function(R, w, j) {
    return w === 0 && Pa.indexOf(j[t.length]) !== -1 || j.match(i) ? R : "." + r;
  };
  function x(R, w, j, N) {
    N === void 0 && (N = "&");
    var P = R.replace(La, ""), k = w && j ? j + " " + w + " { " + P + " }" : P;
    return r = N, t = w, n = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), b(j || !w ? "" : w, k);
  }
  return b.use([].concat(y, [function(R, w, j) {
    R === 2 && j.length && j[0].lastIndexOf(t) > 0 && (j[0] = j[0].replace(n, D));
  }, L, function(R) {
    if (R === -2) {
      var w = g;
      return g = [], w;
    }
  }])), x.hash = y.length ? y.reduce(function(R, w) {
    return w.name || qe(15), Ue(R, w.name);
  }, 5381).toString() : "", x;
}
var Qr = He.createContext();
Qr.Consumer;
var Jr = He.createContext(), Ma = (Jr.Consumer, new Zr()), $t = Da();
function ja() {
  return Bt(Qr) || Ma;
}
function Fa() {
  return Bt(Jr) || $t;
}
var za = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(i, s) {
      s === void 0 && (s = $t);
      var c = n.name + s.hash;
      i.hasNameForId(n.id, c) || i.insertRules(n.id, c, s(n.rules, c, "@keyframes"));
    }, this.toString = function() {
      return qe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = $t), this.name + r.hash;
  }, e;
}(), $a = /([A-Z])/, Ua = /([A-Z])/g, Ha = /^ms-/, Ba = function(e) {
  return "-" + e.toLowerCase();
};
function Pr(e) {
  return $a.test(e) ? e.replace(Ua, Ba).replace(Ha, "-ms-") : e;
}
var Dr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var i, s = [], c = 0, u = e.length; c < u; c += 1) (i = Ye(e[c], r, t, n)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (Dr(e)) return "";
  if (Zt(e)) return "." + e.styledComponentId;
  if (et(e)) {
    if (typeof (y = e) != "function" || y.prototype && y.prototype.isReactComponent || !r) return e;
    var f = e(r);
    return W.env.NODE_ENV !== "production" && Yt.isElement(f) && console.warn(Ft(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ye(f, r, t, n);
  }
  var y;
  return e instanceof za ? t ? (e.inject(t, n), e.getName(n)) : e : jt(e) ? function b(g, L) {
    var D, x, R = [];
    for (var w in g) g.hasOwnProperty(w) && !Dr(g[w]) && (Array.isArray(g[w]) && g[w].isCss || et(g[w]) ? R.push(Pr(w) + ":", g[w], ";") : jt(g[w]) ? R.push.apply(R, b(g[w], w)) : R.push(Pr(w) + ": " + (D = w, (x = g[w]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || D in ra || D.startsWith("--") ? String(x).trim() : x + "px") + ";"));
    return L ? [L + " {"].concat(R, ["}"]) : R;
  }(e) : e.toString();
}
var Mr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wa(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return et(e) || jt(e) ? Mr(Ye(Nr(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Mr(Ye(Nr(e, t)));
}
var jr = /invalid hook call/i, lt = /* @__PURE__ */ new Set(), Ga = function(e, r) {
  if (W.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        if (jr.test(s)) i = !1, lt.delete(t);
        else {
          for (var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) u[f - 1] = arguments[f];
          n.apply(void 0, [s].concat(u));
        }
      }, pn(), i && !lt.has(t) && (console.warn(t), lt.add(t));
    } catch (s) {
      jr.test(s.message) && lt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Va = function(e, r, t) {
  return t === void 0 && (t = De), e.theme !== t.theme && e.theme || r || t.theme;
}, Ya = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, qa = /(^-|-$)/g;
function It(e) {
  return e.replace(Ya, "-").replace(qa, "");
}
var Xa = function(e) {
  return zt(Kr(e) >>> 0);
};
function ct(e) {
  return typeof e == "string" && (W.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ut = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Za = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ka(e, r, t) {
  var n = e[t];
  Ut(r) && Ut(n) ? en(n, r) : e[t] = r;
}
function en(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var i = 0, s = t; i < s.length; i++) {
    var c = s[i];
    if (Ut(c)) for (var u in c) Za(u) && Ka(e, c[u], u);
  }
  return e;
}
var tn = He.createContext();
tn.Consumer;
var Lt = {};
function rn(e, r, t) {
  var n = Zt(e), i = !ct(e), s = r.attrs, c = s === void 0 ? mt : s, u = r.componentId, f = u === void 0 ? function(N, P) {
    var k = typeof N != "string" ? "sc" : It(N);
    Lt[k] = (Lt[k] || 0) + 1;
    var p = k + "-" + Xa("5.3.11" + k + Lt[k]);
    return P ? P + "-" + p : p;
  }(r.displayName, r.parentComponentId) : u, y = r.displayName, b = y === void 0 ? function(N) {
    return ct(N) ? "styled." + N : "Styled(" + Ft(N) + ")";
  }(e) : y, g = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || f, L = n && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, D = r.shouldForwardProp;
  n && e.shouldForwardProp && (D = r.shouldForwardProp ? function(N, P, k) {
    return e.shouldForwardProp(N, P, k) && r.shouldForwardProp(N, P, k);
  } : e.shouldForwardProp);
  var x, R = new Ia(t, g, n ? e.componentStyle : void 0), w = R.isStatic && c.length === 0, j = function(N, P) {
    return function(k, p, J, he) {
      var ce = k.attrs, ge = k.componentStyle, Se = k.defaultProps, Ie = k.foldedComponentIds, oe = k.shouldForwardProp, q = k.styledComponentId, ue = k.target, te = function(S, l, O) {
        S === void 0 && (S = De);
        var m = Ne({}, l, { theme: S }), G = {};
        return O.forEach(function(U) {
          var z, I, Q, Z = U;
          for (z in et(Z) && (Z = Z(m)), Z) m[z] = G[z] = z === "className" ? (I = G[z], Q = Z[z], I && Q ? I + " " + Q : I || Q) : Z[z];
        }), [m, G];
      }(Va(p, Bt(tn), Se) || De, p, ce), Ee = te[0], me = te[1], fe = function(S, l, O, m) {
        var G = ja(), U = Fa(), z = l ? S.generateAndInjectStyles(De, G, U) : S.generateAndInjectStyles(O, G, U);
        return W.env.NODE_ENV !== "production" && !l && m && m(z), z;
      }(ge, he, Ee, W.env.NODE_ENV !== "production" ? k.warnTooManyClasses : void 0), Me = J, Oe = me.$as || p.$as || me.as || p.as || ue, je = ct(Oe), A = me !== p ? Ne({}, p, {}, me) : p, h = {};
      for (var T in A) T[0] !== "$" && T !== "as" && (T === "forwardedAs" ? h.as = A[T] : (oe ? oe(T, xr, Oe) : !je || xr(T)) && (h[T] = A[T]));
      return p.style && me.style !== p.style && (h.style = Ne({}, p.style, {}, me.style)), h.className = Array.prototype.concat(Ie, q, fe !== q ? fe : null, p.className, me.className).filter(Boolean).join(" "), h.ref = Me, mn(Oe, h);
    }(x, N, P, w);
  };
  return j.displayName = b, (x = He.forwardRef(j)).attrs = L, x.componentStyle = R, x.displayName = b, x.shouldForwardProp = D, x.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, x.styledComponentId = g, x.target = n ? e.target : e, x.withComponent = function(N) {
    var P = r.componentId, k = function(J, he) {
      if (J == null) return {};
      var ce, ge, Se = {}, Ie = Object.keys(J);
      for (ge = 0; ge < Ie.length; ge++) ce = Ie[ge], he.indexOf(ce) >= 0 || (Se[ce] = J[ce]);
      return Se;
    }(r, ["componentId"]), p = P && P + "-" + (ct(N) ? N : It(Ft(N)));
    return rn(N, Ne({}, k, { attrs: L, componentId: p }), t);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = n ? en({}, e.defaultProps, N) : N;
  } }), W.env.NODE_ENV !== "production" && (Ga(b, g), x.warnTooManyClasses = /* @__PURE__ */ function(N, P) {
    var k = {}, p = !1;
    return function(J) {
      if (!p && (k[J] = !0, Object.keys(k).length >= 200)) {
        var he = P ? ' with the id of "' + P + '"' : "";
        console.warn("Over 200 classes were generated for component " + N + he + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, k = {};
      }
    };
  }(b, g)), Object.defineProperty(x, "toString", { value: function() {
    return "." + x.styledComponentId;
  } }), i && pa(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var Ht = function(e) {
  return function r(t, n, i) {
    if (i === void 0 && (i = De), !Yt.isValidElementType(n)) return qe(1, String(n));
    var s = function() {
      return t(n, i, Wa.apply(void 0, arguments));
    };
    return s.withConfig = function(c) {
      return r(t, n, Ne({}, i, {}, c));
    }, s.attrs = function(c) {
      return r(t, n, Ne({}, i, { attrs: Array.prototype.concat(i.attrs, c).filter(Boolean) }));
    }, s;
  }(rn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ht[e] = Ht(e);
});
W.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), W.env.NODE_ENV !== "production" && W.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Qa = Ht.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ja = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), eo = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ja(e) ? `mailto:${e}` : e, to = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, nn = ({
  type: e,
  width: r,
  horizontal: t,
  image: n,
  imageAltText: i,
  title: s,
  icon: c,
  body: u,
  eventFormat: f,
  eventLocation: y,
  eventTime: b,
  buttons: g,
  linkLabel: L,
  linkUrl: D,
  tags: x,
  showBorders: R,
  cardLink: w
}) => /* @__PURE__ */ _.jsx(
  Qt,
  {
    type: e,
    width: r,
    horizontal: t,
    image: n,
    imageAltText: i,
    title: s,
    icon: c,
    body: u,
    eventFormat: f,
    eventLocation: y,
    eventTime: b,
    buttons: g,
    linkLabel: L,
    linkUrl: D,
    tags: x,
    showBorders: R,
    cardLink: w
  }
);
nn.propTypes = {
  /**
   * Type of card
   */
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: o.bool,
  /**
   * Card title
   */
  title: o.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * Card body content
   */
  body: o.string,
  /**
   * Event info format
   */
  eventFormat: o.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: o.string,
  /**
   * Event start time
   */
  eventTime: o.string,
  /**
   * Card header image
   */
  image: o.string,
  /**
   * Card header image alt text
   */
  imageAltText: o.string,
  /**
   * Buttons
   */
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  /**
   * Tags
   */
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: o.bool,
  /**
   * Card link
   */
  cardLink: o.string
};
nn.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: void 0,
  eventFormat: "stack",
  eventTime: void 0,
  eventLocation: void 0,
  icon: void 0,
  image: void 0,
  imageAltText: void 0,
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Qt = ({
  type: e,
  width: r,
  horizontal: t,
  image: n,
  imageAltText: i,
  title: s,
  icon: c,
  body: u,
  eventFormat: f,
  eventLocation: y,
  eventTime: b,
  buttons: g,
  linkLabel: L,
  linkUrl: D,
  tags: x,
  showBorders: R,
  cardLink: w
}) => {
  const j = Je("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${r.replace("%", "")}`]: r !== "100%",
    "card-horizontal": t,
    borderless: !R
  });
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: /* @__PURE__ */ _.jsxs(Qa, { className: j, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ _.jsx(
      Vr,
      {
        src: n,
        alt: i,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: w,
        title: s
      }
    ),
    !n && c && /* @__PURE__ */ _.jsx(
      "i",
      {
        className: `${c == null ? void 0 : c[0]} fa-${c == null ? void 0 : c[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    t ? /* @__PURE__ */ _.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ _.jsx(
      gt,
      {
        type: e,
        body: u,
        eventFormat: f,
        eventLocation: y,
        eventTime: b,
        title: s,
        buttons: g,
        linkLabel: L,
        linkUrl: D,
        tags: x,
        cardLink: w
      }
    ) }) : /* @__PURE__ */ _.jsx(
      gt,
      {
        type: e,
        body: u,
        eventFormat: f,
        eventLocation: y,
        eventTime: b,
        title: s,
        buttons: g,
        linkLabel: L,
        linkUrl: D,
        tags: x,
        cardLink: w
      }
    )
  ] }) });
};
Qt.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: o.bool,
  title: o.string.isRequired,
  icon: o.arrayOf(o.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  image: o.string,
  imageAltText: o.string,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  showBorders: o.bool,
  cardLink: o.string
};
Qt.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: void 0,
  image: "",
  imageAltText: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const gt = ({
  type: e,
  body: r,
  eventFormat: t,
  eventLocation: n,
  eventTime: i,
  title: s,
  buttons: c,
  linkLabel: u,
  linkUrl: f,
  tags: y,
  cardLink: b
}) => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
  !!s && /* @__PURE__ */ _.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ _.jsx("h3", { className: "card-title", children: b ? /* @__PURE__ */ _.jsx("a", { href: b, children: s }) : s }) }),
  !!r && /* @__PURE__ */ _.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ _.jsx("div", { dangerouslySetInnerHTML: Ge(r) }) }),
  e === "event" && (i || n) && /* @__PURE__ */ _.jsx(
    Jt,
    {
      eventFormat: t,
      eventTime: i,
      eventLocation: n
    }
  ),
  c && /* @__PURE__ */ _.jsx("div", { className: "card-buttons", children: c.map((g) => /* @__PURE__ */ _.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ _.jsx(
        Gt,
        {
          ariaLabel: g.ariaLabel,
          color: g.color,
          icon: g.icon,
          href: g.href,
          label: g.label,
          onClick: g.onClick,
          size: g.size,
          target: g.target,
          cardTitle: s
        }
      )
    },
    `${g.label}-${g.href}`
  )) }),
  f && u && /* @__PURE__ */ _.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ _.jsx(
    Gr,
    {
      gaData: {
        ...to,
        section: s,
        text: u
      },
      children: /* @__PURE__ */ _.jsx("a", { href: eo(f), children: u })
    }
  ) }),
  y && /* @__PURE__ */ _.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: y.map((g) => (
    // @ts-ignore
    /* @__PURE__ */ _.jsx(
      Vt,
      {
        ariaLabel: g.ariaLabel,
        color: g.color,
        href: g.href,
        label: g.label,
        onClick: g.onClick,
        cardTitle: s
      },
      `${g.label}-${g.href}`
    )
  )) })
] });
gt.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  title: o.string.isRequired,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  cardLink: o.string
};
gt.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0
};
const Jt = ({ eventFormat: e, eventTime: r, eventLocation: t }) => e === "inline" ? /* @__PURE__ */ _.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ _.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ _.jsx("div", { dangerouslySetInnerHTML: Ge(r) })
  ] }),
  t && /* @__PURE__ */ _.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ _.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ge(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
  r && /* @__PURE__ */ _.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ _.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ _.jsx("div", { dangerouslySetInnerHTML: Ge(r) })
  ] }) }),
  t && /* @__PURE__ */ _.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ _.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ _.jsx("span", { children: /* @__PURE__ */ _.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ge(t)
      }
    ) })
  ] }) })
] });
Jt.propTypes = {
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string
};
Jt.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
export {
  nn as Card
};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
