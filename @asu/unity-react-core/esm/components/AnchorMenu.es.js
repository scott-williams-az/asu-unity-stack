import Je, { useState as Fr, useEffect as Pt, useRef as Hr, useContext as Wt, createElement as un } from "react";
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jr = { exports: {} }, Xe = {};
var dr;
function fn() {
  if (dr) return Xe;
  dr = 1;
  var e = Je, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, d, y) {
    var S, C = {}, D = null, F = null;
    y !== void 0 && (D = "" + y), d.key !== void 0 && (D = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (S in d) n.call(d, S) && !s.hasOwnProperty(S) && (C[S] = d[S]);
    if (u && u.defaultProps) for (S in d = u.defaultProps, d) C[S] === void 0 && (C[S] = d[S]);
    return { $$typeof: r, type: u, key: D, ref: F, props: C, _owner: o.current };
  }
  return Xe.Fragment = t, Xe.jsx = l, Xe.jsxs = l, Xe;
}
jr.exports = fn();
var Se = jr.exports, zr = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var s = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (s = o(s, n(u)));
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
      var l = "";
      for (var u in s)
        r.call(s, u) && s[u] && (l = o(l, u));
      return l;
    }
    function o(s, l) {
      return l ? s ? s + " " + l : s + l : s;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(zr);
var pn = zr.exports;
const We = /* @__PURE__ */ Gt(pn);
var Ur = { exports: {} }, St = { exports: {} }, $ = {};
var mr;
function dn() {
  if (mr) return $;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, D = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function k(c) {
    if (typeof c == "object" && c !== null) {
      var V = c.$$typeof;
      switch (V) {
        case r:
          switch (c = c.type, c) {
            case d:
            case y:
            case n:
            case s:
            case o:
            case C:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case u:
                case S:
                case R:
                case F:
                case l:
                  return c;
                default:
                  return V;
              }
          }
        case t:
          return V;
      }
    }
  }
  function E(c) {
    return k(c) === y;
  }
  return $.AsyncMode = d, $.ConcurrentMode = y, $.ContextConsumer = u, $.ContextProvider = l, $.Element = r, $.ForwardRef = S, $.Fragment = n, $.Lazy = R, $.Memo = F, $.Portal = t, $.Profiler = s, $.StrictMode = o, $.Suspense = C, $.isAsyncMode = function(c) {
    return E(c) || k(c) === d;
  }, $.isConcurrentMode = E, $.isContextConsumer = function(c) {
    return k(c) === u;
  }, $.isContextProvider = function(c) {
    return k(c) === l;
  }, $.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, $.isForwardRef = function(c) {
    return k(c) === S;
  }, $.isFragment = function(c) {
    return k(c) === n;
  }, $.isLazy = function(c) {
    return k(c) === R;
  }, $.isMemo = function(c) {
    return k(c) === F;
  }, $.isPortal = function(c) {
    return k(c) === t;
  }, $.isProfiler = function(c) {
    return k(c) === s;
  }, $.isStrictMode = function(c) {
    return k(c) === o;
  }, $.isSuspense = function(c) {
    return k(c) === C;
  }, $.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === y || c === s || c === o || c === C || c === D || typeof c == "object" && c !== null && (c.$$typeof === R || c.$$typeof === F || c.$$typeof === l || c.$$typeof === u || c.$$typeof === S || c.$$typeof === h || c.$$typeof === I || c.$$typeof === T || c.$$typeof === P);
  }, $.typeOf = k, $;
}
var hr;
function $r() {
  return hr || (hr = 1, St.exports = dn()), St.exports;
}
var wt, gr;
function mn() {
  if (gr) return wt;
  gr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Tt, yr;
function hn() {
  if (yr) return Tt;
  yr = 1;
  var e = mn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Tt = function() {
    function n(l, u, d, y, S, C) {
      if (C !== e) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    n.isRequired = n;
    function o() {
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
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, Tt;
}
Ur.exports = hn()();
var gn = Ur.exports;
const O = /* @__PURE__ */ Gt(gn);
function yn(e) {
  const [r, t] = Fr(!1);
  return Pt(() => {
    const n = window.matchMedia(e);
    n.matches !== r && t(n.matches);
    const o = () => {
      t(n.matches);
    };
    return n.addEventListener("change", o), () => n.removeEventListener("change", o);
  }, [r, e]), r;
}
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Pe(e);
}
function Dt(e, r) {
  return Dt = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Dt(e, r);
}
function vn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ct(e, r, t) {
  return vn() ? ct = Reflect.construct : ct = function(o, s, l) {
    var u = [null];
    u.push.apply(u, s);
    var d = Function.bind.apply(o, u), y = new d();
    return l && Dt(y, l.prototype), y;
  }, ct.apply(null, arguments);
}
function _e(e) {
  return bn(e) || An(e) || _n(e) || Sn();
}
function bn(e) {
  if (Array.isArray(e)) return Lt(e);
}
function An(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _n(e, r) {
  if (e) {
    if (typeof e == "string") return Lt(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Lt(e, r);
  }
}
function Lt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Sn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wn = Object.hasOwnProperty, vr = Object.setPrototypeOf, Tn = Object.isFrozen, En = Object.getPrototypeOf, Cn = Object.getOwnPropertyDescriptor, ce = Object.freeze, ve = Object.seal, On = Object.create, Br = typeof Reflect < "u" && Reflect, dt = Br.apply, Ft = Br.construct;
dt || (dt = function(r, t, n) {
  return r.apply(t, n);
});
ce || (ce = function(r) {
  return r;
});
ve || (ve = function(r) {
  return r;
});
Ft || (Ft = function(r, t) {
  return ct(r, _e(t));
});
var Rn = be(Array.prototype.forEach), br = be(Array.prototype.pop), Ze = be(Array.prototype.push), ut = be(String.prototype.toLowerCase), Et = be(String.prototype.toString), Ar = be(String.prototype.match), Ae = be(String.prototype.replace), kn = be(String.prototype.indexOf), xn = be(String.prototype.trim), ae = be(RegExp.prototype.test), Ct = Nn(TypeError);
function be(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    return dt(e, r, n);
  };
}
function Nn(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Ft(e, t);
  };
}
function M(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ut, vr && vr(e, null);
  for (var o = r.length; o--; ) {
    var s = r[o];
    if (typeof s == "string") {
      var l = t(s);
      l !== s && (Tn(r) || (r[o] = l), s = l);
    }
    e[s] = !0;
  }
  return e;
}
function ze(e) {
  var r = On(null), t;
  for (t in e)
    dt(wn, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function at(e, r) {
  for (; e !== null; ) {
    var t = Cn(e, r);
    if (t) {
      if (t.get)
        return be(t.get);
      if (typeof t.value == "function")
        return be(t.value);
    }
    e = En(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var _r = ce(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = ce(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rt = ce(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), In = ce(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kt = ce(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Mn = ce(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sr = ce(["#text"]), wr = ce(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), xt = ce(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tr = ce(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ot = ce(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pn = ve(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dn = ve(/<%[\w\W]*|[\w\W]*%>/gm), Ln = ve(/\${[\w\W]*}/gm), Fn = ve(/^data-[\-\w.\u00B7-\uFFFF]/), Hn = ve(/^aria-[\-\w]+$/), jn = ve(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zn = ve(/^(?:\w+script|data):/i), Un = ve(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $n = ve(/^html$/i), Bn = ve(/^[a-z][.\w]*(-[.\w]+)+$/i), Wn = function() {
  return typeof window > "u" ? null : window;
}, Gn = function(r, t) {
  if (Pe(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, o = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
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
function Wr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wn(), r = function(a) {
    return Wr(a);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, o = e.DocumentFragment, s = e.HTMLTemplateElement, l = e.Node, u = e.Element, d = e.NodeFilter, y = e.NamedNodeMap, S = y === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : y, C = e.HTMLFormElement, D = e.DOMParser, F = e.trustedTypes, R = u.prototype, P = at(R, "cloneNode"), h = at(R, "nextSibling"), I = at(R, "childNodes"), T = at(R, "parentNode");
  if (typeof s == "function") {
    var k = n.createElement("template");
    k.content && k.content.ownerDocument && (n = k.content.ownerDocument);
  }
  var E = Gn(F, t), c = E ? E.createHTML("") : "", V = n, J = V.implementation, oe = V.createNodeIterator, ue = V.createDocumentFragment, we = V.getElementsByTagName, Ie = t.importNode, ie = {};
  try {
    ie = ze(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var q = {};
  r.isSupported = typeof T == "function" && J && J.createHTMLDocument !== void 0 && ie !== 9;
  var fe = Pn, te = Dn, Ee = Ln, he = Fn, pe = Hn, Le = zn, Ce = Un, Fe = Bn, b = jn, m = null, v = M({}, [].concat(_e(_r), _e(Ot), _e(Rt), _e(kt), _e(Sr))), A = null, i = M({}, [].concat(_e(wr), _e(xt), _e(Tr), _e(ot))), w = Object.seal(Object.create(null, {
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
  })), p = null, W = null, z = !0, H = !0, N = !1, Q = !0, Z = !1, L = !0, Y = !1, j = !1, K = !1, ge = !1, X = !1, Oe = !1, Me = !0, de = !1, x = "user-content-", G = !0, Re = !1, Te = {}, le = null, Qt = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Jt = null, er = M({}, ["audio", "video", "img", "source", "image", "track"]), gt = null, tr = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), et = "http://www.w3.org/1998/Math/MathML", tt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", $e = ke, yt = !1, vt = null, rn = M({}, [et, tt, ke], Et), He, nn = ["application/xhtml+xml", "text/html"], an = "text/html", re, Be = null, on = n.createElement("form"), rr = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, bt = function(a) {
    Be && Be === a || ((!a || Pe(a) !== "object") && (a = {}), a = ze(a), He = // eslint-disable-next-line unicorn/prefer-includes
    nn.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? He = an : He = a.PARSER_MEDIA_TYPE, re = He === "application/xhtml+xml" ? Et : ut, m = "ALLOWED_TAGS" in a ? M({}, a.ALLOWED_TAGS, re) : v, A = "ALLOWED_ATTR" in a ? M({}, a.ALLOWED_ATTR, re) : i, vt = "ALLOWED_NAMESPACES" in a ? M({}, a.ALLOWED_NAMESPACES, Et) : rn, gt = "ADD_URI_SAFE_ATTR" in a ? M(
      ze(tr),
      // eslint-disable-line indent
      a.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : tr, Jt = "ADD_DATA_URI_TAGS" in a ? M(
      ze(er),
      // eslint-disable-line indent
      a.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : er, le = "FORBID_CONTENTS" in a ? M({}, a.FORBID_CONTENTS, re) : Qt, p = "FORBID_TAGS" in a ? M({}, a.FORBID_TAGS, re) : {}, W = "FORBID_ATTR" in a ? M({}, a.FORBID_ATTR, re) : {}, Te = "USE_PROFILES" in a ? a.USE_PROFILES : !1, z = a.ALLOW_ARIA_ATTR !== !1, H = a.ALLOW_DATA_ATTR !== !1, N = a.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, L = a.SAFE_FOR_XML !== !1, Y = a.WHOLE_DOCUMENT || !1, ge = a.RETURN_DOM || !1, X = a.RETURN_DOM_FRAGMENT || !1, Oe = a.RETURN_TRUSTED_TYPE || !1, K = a.FORCE_BODY || !1, Me = a.SANITIZE_DOM !== !1, de = a.SANITIZE_NAMED_PROPS || !1, G = a.KEEP_CONTENT !== !1, Re = a.IN_PLACE || !1, b = a.ALLOWED_URI_REGEXP || b, $e = a.NAMESPACE || ke, w = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && rr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (w.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && rr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (w.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && (H = !1), X && (ge = !0), Te && (m = M({}, _e(Sr)), A = [], Te.html === !0 && (M(m, _r), M(A, wr)), Te.svg === !0 && (M(m, Ot), M(A, xt), M(A, ot)), Te.svgFilters === !0 && (M(m, Rt), M(A, xt), M(A, ot)), Te.mathMl === !0 && (M(m, kt), M(A, Tr), M(A, ot))), a.ADD_TAGS && (m === v && (m = ze(m)), M(m, a.ADD_TAGS, re)), a.ADD_ATTR && (A === i && (A = ze(A)), M(A, a.ADD_ATTR, re)), a.ADD_URI_SAFE_ATTR && M(gt, a.ADD_URI_SAFE_ATTR, re), a.FORBID_CONTENTS && (le === Qt && (le = ze(le)), M(le, a.FORBID_CONTENTS, re)), G && (m["#text"] = !0), Y && M(m, ["html", "head", "body"]), m.table && (M(m, ["tbody"]), delete p.tbody), ce && ce(a), Be = a);
  }, nr = M({}, ["mi", "mo", "mn", "ms", "mtext"]), ar = M({}, ["annotation-xml"]), sn = M({}, ["title", "style", "font", "a", "script"]), rt = M({}, Ot);
  M(rt, Rt), M(rt, In);
  var At = M({}, kt);
  M(At, Mn);
  var ln = function(a) {
    var f = T(a);
    (!f || !f.tagName) && (f = {
      namespaceURI: $e,
      tagName: "template"
    });
    var g = ut(a.tagName), U = ut(f.tagName);
    return vt[a.namespaceURI] ? a.namespaceURI === tt ? f.namespaceURI === ke ? g === "svg" : f.namespaceURI === et ? g === "svg" && (U === "annotation-xml" || nr[U]) : !!rt[g] : a.namespaceURI === et ? f.namespaceURI === ke ? g === "math" : f.namespaceURI === tt ? g === "math" && ar[U] : !!At[g] : a.namespaceURI === ke ? f.namespaceURI === tt && !ar[U] || f.namespaceURI === et && !nr[U] ? !1 : !At[g] && (sn[g] || !rt[g]) : !!(He === "application/xhtml+xml" && vt[a.namespaceURI]) : !1;
  }, ye = function(a) {
    Ze(r.removed, {
      element: a
    });
    try {
      a.parentNode.removeChild(a);
    } catch {
      try {
        a.outerHTML = c;
      } catch {
        a.remove();
      }
    }
  }, nt = function(a, f) {
    try {
      Ze(r.removed, {
        attribute: f.getAttributeNode(a),
        from: f
      });
    } catch {
      Ze(r.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(a), a === "is" && !A[a])
      if (ge || X)
        try {
          ye(f);
        } catch {
        }
      else
        try {
          f.setAttribute(a, "");
        } catch {
        }
  }, or = function(a) {
    var f, g;
    if (K)
      a = "<remove></remove>" + a;
    else {
      var U = Ar(a, /^[\r\n\t ]+/);
      g = U && U[0];
    }
    He === "application/xhtml+xml" && $e === ke && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    var me = E ? E.createHTML(a) : a;
    if ($e === ke)
      try {
        f = new D().parseFromString(me, He);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = J.createDocument($e, "template", null);
      try {
        f.documentElement.innerHTML = yt ? c : me;
      } catch {
      }
    }
    var se = f.body || f.documentElement;
    return a && g && se.insertBefore(n.createTextNode(g), se.childNodes[0] || null), $e === ke ? we.call(f, Y ? "html" : "body")[0] : Y ? f.documentElement : se;
  }, ir = function(a) {
    return oe.call(
      a.ownerDocument || a,
      a,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, sr = function(a) {
    return a instanceof C && (typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || !(a.attributes instanceof S) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function");
  }, qe = function(a) {
    return Pe(l) === "object" ? a instanceof l : a && Pe(a) === "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
  }, xe = function(a, f, g) {
    q[a] && Rn(q[a], function(U) {
      U.call(r, f, g, Be);
    });
  }, lr = function(a) {
    var f;
    if (xe("beforeSanitizeElements", a, null), sr(a) || ae(/[\u0080-\uFFFF]/, a.nodeName))
      return ye(a), !0;
    var g = re(a.nodeName);
    if (xe("uponSanitizeElement", a, {
      tagName: g,
      allowedTags: m
    }), a.hasChildNodes() && !qe(a.firstElementChild) && (!qe(a.content) || !qe(a.content.firstElementChild)) && ae(/<[/\w]/g, a.innerHTML) && ae(/<[/\w]/g, a.textContent) || g === "select" && ae(/<template/i, a.innerHTML) || a.nodeType === 7 || L && a.nodeType === 8 && ae(/<[/\w]/g, a.data))
      return ye(a), !0;
    if (!m[g] || p[g]) {
      if (!p[g] && ur(g) && (w.tagNameCheck instanceof RegExp && ae(w.tagNameCheck, g) || w.tagNameCheck instanceof Function && w.tagNameCheck(g)))
        return !1;
      if (G && !le[g]) {
        var U = T(a) || a.parentNode, me = I(a) || a.childNodes;
        if (me && U)
          for (var se = me.length, ne = se - 1; ne >= 0; --ne) {
            var je = P(me[ne], !0);
            je.__removalCount = (a.__removalCount || 0) + 1, U.insertBefore(je, h(a));
          }
      }
      return ye(a), !0;
    }
    return a instanceof u && !ln(a) || (g === "noscript" || g === "noembed" || g === "noframes") && ae(/<\/no(script|embed|frames)/i, a.innerHTML) ? (ye(a), !0) : (Z && a.nodeType === 3 && (f = a.textContent, f = Ae(f, fe, " "), f = Ae(f, te, " "), f = Ae(f, Ee, " "), a.textContent !== f && (Ze(r.removed, {
      element: a.cloneNode()
    }), a.textContent = f)), xe("afterSanitizeElements", a, null), !1);
  }, cr = function(a, f, g) {
    if (Me && (f === "id" || f === "name") && (g in n || g in on))
      return !1;
    if (!(H && !W[f] && ae(he, f))) {
      if (!(z && ae(pe, f))) {
        if (!A[f] || W[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ur(a) && (w.tagNameCheck instanceof RegExp && ae(w.tagNameCheck, a) || w.tagNameCheck instanceof Function && w.tagNameCheck(a)) && (w.attributeNameCheck instanceof RegExp && ae(w.attributeNameCheck, f) || w.attributeNameCheck instanceof Function && w.attributeNameCheck(f)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && w.allowCustomizedBuiltInElements && (w.tagNameCheck instanceof RegExp && ae(w.tagNameCheck, g) || w.tagNameCheck instanceof Function && w.tagNameCheck(g)))
          ) return !1;
        } else if (!gt[f]) {
          if (!ae(b, Ae(g, Ce, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && a !== "script" && kn(g, "data:") === 0 && Jt[a])) {
              if (!(N && !ae(Le, Ae(g, Ce, "")))) {
                if (g)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ur = function(a) {
    return a !== "annotation-xml" && Ar(a, Fe);
  }, fr = function(a) {
    var f, g, U, me;
    xe("beforeSanitizeAttributes", a, null);
    var se = a.attributes;
    if (se) {
      var ne = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: A
      };
      for (me = se.length; me--; ) {
        f = se[me];
        var je = f, ee = je.name, _t = je.namespaceURI;
        if (g = ee === "value" ? f.value : xn(f.value), U = re(ee), ne.attrName = U, ne.attrValue = g, ne.keepAttr = !0, ne.forceKeepAttr = void 0, xe("uponSanitizeAttribute", a, ne), g = ne.attrValue, !ne.forceKeepAttr && (nt(ee, a), !!ne.keepAttr)) {
          if (!Q && ae(/\/>/i, g)) {
            nt(ee, a);
            continue;
          }
          Z && (g = Ae(g, fe, " "), g = Ae(g, te, " "), g = Ae(g, Ee, " "));
          var pr = re(a.nodeName);
          if (cr(pr, U, g)) {
            if (de && (U === "id" || U === "name") && (nt(ee, a), g = x + g), L && ae(/((--!?|])>)|<\/(style|title)/i, g)) {
              nt(ee, a);
              continue;
            }
            if (E && Pe(F) === "object" && typeof F.getAttributeType == "function" && !_t)
              switch (F.getAttributeType(pr, U)) {
                case "TrustedHTML": {
                  g = E.createHTML(g);
                  break;
                }
                case "TrustedScriptURL": {
                  g = E.createScriptURL(g);
                  break;
                }
              }
            try {
              _t ? a.setAttributeNS(_t, ee, g) : a.setAttribute(ee, g), sr(a) ? ye(a) : br(r.removed);
            } catch {
            }
          }
        }
      }
      xe("afterSanitizeAttributes", a, null);
    }
  }, cn = function _(a) {
    var f, g = ir(a);
    for (xe("beforeSanitizeShadowDOM", a, null); f = g.nextNode(); )
      xe("uponSanitizeShadowNode", f, null), !lr(f) && (f.content instanceof o && _(f.content), fr(f));
    xe("afterSanitizeShadowDOM", a, null);
  };
  return r.sanitize = function(_) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f, g, U, me, se;
    if (yt = !_, yt && (_ = "<!-->"), typeof _ != "string" && !qe(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw Ct("dirty is not a string, aborting");
      } else
        throw Ct("toString is not a function");
    if (!r.isSupported) {
      if (Pe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof _ == "string")
          return e.toStaticHTML(_);
        if (qe(_))
          return e.toStaticHTML(_.outerHTML);
      }
      return _;
    }
    if (j || bt(a), r.removed = [], typeof _ == "string" && (Re = !1), Re) {
      if (_.nodeName) {
        var ne = re(_.nodeName);
        if (!m[ne] || p[ne])
          throw Ct("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof l)
      f = or("<!---->"), g = f.ownerDocument.importNode(_, !0), g.nodeType === 1 && g.nodeName === "BODY" || g.nodeName === "HTML" ? f = g : f.appendChild(g);
    else {
      if (!ge && !Z && !Y && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return E && Oe ? E.createHTML(_) : _;
      if (f = or(_), !f)
        return ge ? null : Oe ? c : "";
    }
    f && K && ye(f.firstChild);
    for (var je = ir(Re ? _ : f); U = je.nextNode(); )
      U.nodeType === 3 && U === me || lr(U) || (U.content instanceof o && cn(U.content), fr(U), me = U);
    if (me = null, Re)
      return _;
    if (ge) {
      if (X)
        for (se = ue.call(f.ownerDocument); f.firstChild; )
          se.appendChild(f.firstChild);
      else
        se = f;
      return (A.shadowroot || A.shadowrootmod) && (se = Ie.call(t, se, !0)), se;
    }
    var ee = Y ? f.outerHTML : f.innerHTML;
    return Y && m["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && ae($n, f.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + ee), Z && (ee = Ae(ee, fe, " "), ee = Ae(ee, te, " "), ee = Ae(ee, Ee, " ")), E && Oe ? E.createHTML(ee) : ee;
  }, r.setConfig = function(_) {
    bt(_), j = !0;
  }, r.clearConfig = function() {
    Be = null, j = !1;
  }, r.isValidAttribute = function(_, a, f) {
    Be || bt({});
    var g = re(_), U = re(a);
    return cr(g, U, f);
  }, r.addHook = function(_, a) {
    typeof a == "function" && (q[_] = q[_] || [], Ze(q[_], a));
  }, r.removeHook = function(_) {
    if (q[_])
      return br(q[_]);
  }, r.removeHooks = function(_) {
    q[_] && (q[_] = []);
  }, r.removeAllHooks = function() {
    q = {};
  }, r;
}
Wr();
function Vn(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
let Nt = !1;
const Yn = (e, r) => {
  Nt || (Nt = !0, setTimeout(() => {
    e(), Nt = !1;
  }, r));
};
let Er;
const qn = (e, r) => {
  window.clearTimeout(Er), Er = window.setTimeout(e, r);
};
O.shape({
  event: O.string,
  action: O.string,
  name: O.string,
  region: O.string,
  section: O.string,
  component: O.string,
  type: O.string,
  text: O.string
});
const Gr = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: l = "",
  component: u = ""
}) => {
  const { dataLayer: d } = window, y = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: u.toLowerCase()
  };
  d && d.push(y);
}, Xn = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vt = ({
  label: e,
  cardTitle: r,
  ariaLabel: t,
  block: n,
  color: o,
  disabled: s,
  element: l,
  href: u,
  icon: d,
  innerRef: y,
  onClick: S,
  size: C,
  classes: D,
  target: F,
  ...R
}) => {
  const P = We("btn", {
    [`btn-${o}`]: !0,
    "btn-md": C === "small",
    "btn-sm": C === "xsmall",
    "btn-block": n,
    disabled: s
  });
  let h = l;
  u && l === "button" && (h = "a");
  const I = (T) => {
    Gr({ ...Xn, text: T, section: r }), S == null || S();
  };
  return /* @__PURE__ */ Se.jsxs(
    h,
    {
      type: h === "button" && S ? "button" : void 0,
      ...R,
      className: We(D) || P,
      href: u,
      ref: y,
      onClick: () => I(e),
      "aria-label": t,
      target: h === "a" ? F : null,
      children: [
        d && /* @__PURE__ */ Se.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
        e
      ]
    }
  );
};
Vt.propTypes = {
  /**
   * Button label
   */
  label: O.string,
  /**
   * Card title
   */
  cardTitle: O.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: O.string,
  /**
    Render button as a block-button?
  */
  block: O.bool,
  /**
    Button background color
  */
  color: O.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: O.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: O.oneOfType([
    O.func,
    O.string,
    O.shape({ $$typeof: O.symbol, render: O.func }),
    O.arrayOf(
      O.oneOfType([
        O.func,
        O.string,
        O.shape({ $$typeof: O.symbol, render: O.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: O.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: O.arrayOf(O.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: O.oneOfType([
    O.object,
    O.func,
    O.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: O.func,
  /**
    Button size
  */
  size: O.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: O.arrayOf(O.string),
  /**
   Link target type
   */
  target: O.oneOf(["_blank", "_self", "_top", "_parent"])
};
Vt.defaultProps = {
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
var Yt = $r();
function Zn(e) {
  function r(b, m, v, A, i) {
    for (var w = 0, p = 0, W = 0, z = 0, H, N, Q = 0, Z = 0, L, Y = L = H = 0, j = 0, K = 0, ge = 0, X = 0, Oe = v.length, Me = Oe - 1, de, x = "", G = "", Re = "", Te = "", le; j < Oe; ) {
      if (N = v.charCodeAt(j), j === Me && p + z + W + w !== 0 && (p !== 0 && (N = p === 47 ? 10 : 47), z = W = w = 0, Oe++, Me++), p + z + W + w === 0) {
        if (j === Me && (0 < K && (x = x.replace(D, "")), 0 < x.trim().length)) {
          switch (N) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              x += v.charAt(j);
          }
          N = 59;
        }
        switch (N) {
          case 123:
            for (x = x.trim(), H = x.charCodeAt(0), L = 1, X = ++j; j < Oe; ) {
              switch (N = v.charCodeAt(j)) {
                case 123:
                  L++;
                  break;
                case 125:
                  L--;
                  break;
                case 47:
                  switch (N = v.charCodeAt(j + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = j + 1; Y < Me; ++Y)
                          switch (v.charCodeAt(Y)) {
                            case 47:
                              if (N === 42 && v.charCodeAt(Y - 1) === 42 && j + 2 !== Y) {
                                j = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (N === 47) {
                                j = Y + 1;
                                break e;
                              }
                          }
                        j = Y;
                      }
                  }
                  break;
                case 91:
                  N++;
                case 40:
                  N++;
                case 34:
                case 39:
                  for (; j++ < Me && v.charCodeAt(j) !== N; )
                    ;
              }
              if (L === 0) break;
              j++;
            }
            switch (L = v.substring(X, j), H === 0 && (H = (x = x.replace(C, "").trim()).charCodeAt(0)), H) {
              case 64:
                switch (0 < K && (x = x.replace(D, "")), N = x.charCodeAt(1), N) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    K = m;
                    break;
                  default:
                    K = Ee;
                }
                if (L = r(m, K, L, N, i + 1), X = L.length, 0 < pe && (K = t(Ee, x, ge), le = u(3, L, K, m, q, ie, X, N, i, A), x = K.join(""), le !== void 0 && (X = (L = le.trim()).length) === 0 && (N = 0, L = "")), 0 < X) switch (N) {
                  case 115:
                    x = x.replace(V, l);
                  case 100:
                  case 109:
                  case 45:
                    L = x + "{" + L + "}";
                    break;
                  case 107:
                    x = x.replace(T, "$1 $2"), L = x + "{" + L + "}", L = te === 1 || te === 2 && s("@" + L, 3) ? "@-webkit-" + L + "@" + L : "@" + L;
                    break;
                  default:
                    L = x + L, A === 112 && (L = (G += L, ""));
                }
                else L = "";
                break;
              default:
                L = r(m, t(m, x, ge), L, A, i + 1);
            }
            Re += L, L = ge = K = Y = H = 0, x = "", N = v.charCodeAt(++j);
            break;
          case 125:
          case 59:
            if (x = (0 < K ? x.replace(D, "") : x).trim(), 1 < (X = x.length)) switch (Y === 0 && (H = x.charCodeAt(0), H === 45 || 96 < H && 123 > H) && (X = (x = x.replace(" ", ":")).length), 0 < pe && (le = u(1, x, m, b, q, ie, G.length, A, i, A)) !== void 0 && (X = (x = le.trim()).length) === 0 && (x = "\0\0"), H = x.charCodeAt(0), N = x.charCodeAt(1), H) {
              case 0:
                break;
              case 64:
                if (N === 105 || N === 99) {
                  Te += x + v.charAt(j);
                  break;
                }
              default:
                x.charCodeAt(X - 1) !== 58 && (G += o(x, H, N, x.charCodeAt(2)));
            }
            ge = K = Y = H = 0, x = "", N = v.charCodeAt(++j);
        }
      }
      switch (N) {
        case 13:
        case 10:
          p === 47 ? p = 0 : 1 + H === 0 && A !== 107 && 0 < x.length && (K = 1, x += "\0"), 0 < pe * Ce && u(0, x, m, b, q, ie, G.length, A, i, A), ie = 1, q++;
          break;
        case 59:
        case 125:
          if (p + z + W + w === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, de = v.charAt(j), N) {
            case 9:
            case 32:
              if (z + w + p === 0) switch (Q) {
                case 44:
                case 58:
                case 9:
                case 32:
                  de = "";
                  break;
                default:
                  N !== 32 && (de = " ");
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
              z + p + w === 0 && (K = ge = 1, de = "\f" + de);
              break;
            case 108:
              if (z + p + w + fe === 0 && 0 < Y) switch (j - Y) {
                case 2:
                  Q === 112 && v.charCodeAt(j - 3) === 58 && (fe = Q);
                case 8:
                  Z === 111 && (fe = Z);
              }
              break;
            case 58:
              z + p + w === 0 && (Y = j);
              break;
            case 44:
              p + W + z + w === 0 && (K = 1, de += "\r");
              break;
            case 34:
            case 39:
              p === 0 && (z = z === N ? 0 : z === 0 ? N : z);
              break;
            case 91:
              z + p + W === 0 && w++;
              break;
            case 93:
              z + p + W === 0 && w--;
              break;
            case 41:
              z + p + w === 0 && W--;
              break;
            case 40:
              if (z + p + w === 0) {
                if (H === 0) switch (2 * Q + 3 * Z) {
                  case 533:
                    break;
                  default:
                    H = 1;
                }
                W++;
              }
              break;
            case 64:
              p + W + z + w + Y + L === 0 && (L = 1);
              break;
            case 42:
            case 47:
              if (!(0 < z + w + W)) switch (p) {
                case 0:
                  switch (2 * N + 3 * v.charCodeAt(j + 1)) {
                    case 235:
                      p = 47;
                      break;
                    case 220:
                      X = j, p = 42;
                  }
                  break;
                case 42:
                  N === 47 && Q === 42 && X + 2 !== j && (v.charCodeAt(X + 2) === 33 && (G += v.substring(X, j + 1)), de = "", p = 0);
              }
          }
          p === 0 && (x += de);
      }
      Z = Q, Q = N, j++;
    }
    if (X = G.length, 0 < X) {
      if (K = m, 0 < pe && (le = u(2, G, K, b, q, ie, X, A, i, A), le !== void 0 && (G = le).length === 0)) return Te + G + Re;
      if (G = K.join(",") + "{" + G + "}", te * fe !== 0) {
        switch (te !== 2 || s(G, 2) || (fe = 0), fe) {
          case 111:
            G = G.replace(E, ":-moz-$1") + G;
            break;
          case 112:
            G = G.replace(k, "::-webkit-input-$1") + G.replace(k, "::-moz-$1") + G.replace(k, ":-ms-input-$1") + G;
        }
        fe = 0;
      }
    }
    return Te + G + Re;
  }
  function t(b, m, v) {
    var A = m.trim().split(h);
    m = A;
    var i = A.length, w = b.length;
    switch (w) {
      case 0:
      case 1:
        var p = 0;
        for (b = w === 0 ? "" : b[0] + " "; p < i; ++p)
          m[p] = n(b, m[p], v).trim();
        break;
      default:
        var W = p = 0;
        for (m = []; p < i; ++p)
          for (var z = 0; z < w; ++z)
            m[W++] = n(b[z] + " ", A[p], v).trim();
    }
    return m;
  }
  function n(b, m, v) {
    var A = m.charCodeAt(0);
    switch (33 > A && (A = (m = m.trim()).charCodeAt(0)), A) {
      case 38:
        return m.replace(I, "$1" + b.trim());
      case 58:
        return b.trim() + m.replace(I, "$1" + b.trim());
      default:
        if (0 < 1 * v && 0 < m.indexOf("\f")) return m.replace(I, (b.charCodeAt(0) === 58 ? "" : "$1") + b.trim());
    }
    return b + m;
  }
  function o(b, m, v, A) {
    var i = b + ";", w = 2 * m + 3 * v + 4 * A;
    if (w === 944) {
      b = i.indexOf(":", 9) + 1;
      var p = i.substring(b, i.length - 1).trim();
      return p = i.substring(0, b).trim() + p + ";", te === 1 || te === 2 && s(p, 1) ? "-webkit-" + p + p : p;
    }
    if (te === 0 || te === 2 && !s(i, 1)) return i;
    switch (w) {
      case 1015:
        return i.charCodeAt(10) === 97 ? "-webkit-" + i + i : i;
      case 951:
        return i.charCodeAt(3) === 116 ? "-webkit-" + i + i : i;
      case 963:
        return i.charCodeAt(5) === 110 ? "-webkit-" + i + i : i;
      case 1009:
        if (i.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + i + i;
      case 978:
        return "-webkit-" + i + "-moz-" + i + i;
      case 1019:
      case 983:
        return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
      case 883:
        if (i.charCodeAt(8) === 45) return "-webkit-" + i + i;
        if (0 < i.indexOf("image-set(", 11)) return i.replace(Ie, "$1-webkit-$2") + i;
        break;
      case 932:
        if (i.charCodeAt(4) === 45) switch (i.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
          case 115:
            return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
          case 98:
            return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i;
        }
        return "-webkit-" + i + "-ms-" + i + i;
      case 964:
        return "-webkit-" + i + "-ms-flex-" + i + i;
      case 1023:
        if (i.charCodeAt(8) !== 99) break;
        return p = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + p + "-webkit-" + i + "-ms-flex-pack" + p + i;
      case 1005:
        return R.test(i) ? i.replace(F, ":-webkit-") + i.replace(F, ":-moz-") + i : i;
      case 1e3:
        switch (p = i.substring(13).trim(), m = p.indexOf("-") + 1, p.charCodeAt(0) + p.charCodeAt(m)) {
          case 226:
            p = i.replace(c, "tb");
            break;
          case 232:
            p = i.replace(c, "tb-rl");
            break;
          case 220:
            p = i.replace(c, "lr");
            break;
          default:
            return i;
        }
        return "-webkit-" + i + "-ms-" + p + i;
      case 1017:
        if (i.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (m = (i = b).length - 10, p = (i.charCodeAt(m) === 33 ? i.substring(0, m) : i).substring(b.indexOf(":", 7) + 1).trim(), w = p.charCodeAt(0) + (p.charCodeAt(7) | 0)) {
          case 203:
            if (111 > p.charCodeAt(8)) break;
          case 115:
            i = i.replace(p, "-webkit-" + p) + ";" + i;
            break;
          case 207:
          case 102:
            i = i.replace(p, "-webkit-" + (102 < w ? "inline-" : "") + "box") + ";" + i.replace(p, "-webkit-" + p) + ";" + i.replace(p, "-ms-" + p + "box") + ";" + i;
        }
        return i + ";";
      case 938:
        if (i.charCodeAt(5) === 45) switch (i.charCodeAt(6)) {
          case 105:
            return p = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + p + "-ms-flex-" + p + i;
          case 115:
            return "-webkit-" + i + "-ms-flex-item-" + i.replace(oe, "") + i;
          default:
            return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(oe, "") + i;
        }
        break;
      case 973:
      case 989:
        if (i.charCodeAt(3) !== 45 || i.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(b) === !0) return (p = b.substring(b.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(b.replace("stretch", "fill-available"), m, v, A).replace(":fill-available", ":stretch") : i.replace(p, "-webkit-" + p) + i.replace(p, "-moz-" + p.replace("fill-", "")) + i;
        break;
      case 962:
        if (i = "-webkit-" + i + (i.charCodeAt(5) === 102 ? "-ms-" + i : "") + i, v + A === 211 && i.charCodeAt(13) === 105 && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(P, "$1-webkit-$2") + i;
    }
    return i;
  }
  function s(b, m) {
    var v = b.indexOf(m === 1 ? ":" : "{"), A = b.substring(0, m !== 3 ? v : 10);
    return v = b.substring(v + 1, b.length - 1), Le(m !== 2 ? A : A.replace(ue, "$1"), v, m);
  }
  function l(b, m) {
    var v = o(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return v !== m + ";" ? v.replace(J, " or ($1)").substring(4) : "(" + m + ")";
  }
  function u(b, m, v, A, i, w, p, W, z, H) {
    for (var N = 0, Q = m, Z; N < pe; ++N)
      switch (Z = he[N].call(S, b, Q, v, A, i, w, p, W, z, H)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = Z;
      }
    if (Q !== m) return Q;
  }
  function d(b) {
    switch (b) {
      case void 0:
      case null:
        pe = he.length = 0;
        break;
      default:
        if (typeof b == "function") he[pe++] = b;
        else if (typeof b == "object") for (var m = 0, v = b.length; m < v; ++m)
          d(b[m]);
        else Ce = !!b | 0;
    }
    return d;
  }
  function y(b) {
    return b = b.prefix, b !== void 0 && (Le = null, b ? typeof b != "function" ? te = 1 : (te = 2, Le = b) : te = 0), y;
  }
  function S(b, m) {
    var v = b;
    if (33 > v.charCodeAt(0) && (v = v.trim()), Fe = v, v = [Fe], 0 < pe) {
      var A = u(-1, m, v, v, q, ie, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (m = A);
    }
    var i = r(Ee, v, m, 0, 0);
    return 0 < pe && (A = u(-2, i, v, v, q, ie, i.length, 0, 0, 0), A !== void 0 && (i = A)), Fe = "", fe = 0, ie = q = 1, i;
  }
  var C = /^\0+/g, D = /[\0\r\f]/g, F = /: */g, R = /zoo|gra/, P = /([,: ])(transform)/g, h = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, T = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, E = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, V = /\(\s*(.*)\s*\)/g, J = /([\s\S]*?);/g, oe = /-self|flex-/g, ue = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, Ie = /([^-])(image-set\()/, ie = 1, q = 1, fe = 0, te = 1, Ee = [], he = [], pe = 0, Le = null, Ce = 0, Fe = "";
  return S.use = d, S.set = y, e !== void 0 && y(e), S;
}
var Kn = {
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
function Qn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Jn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cr = /* @__PURE__ */ Qn(
  function(e) {
    return Jn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = $r(), ea = {
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
}, ta = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ra = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Vr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xt = {};
Xt[qt.ForwardRef] = ra;
Xt[qt.Memo] = Vr;
function Or(e) {
  return qt.isMemo(e) ? Vr : Xt[e.$$typeof] || ea;
}
var na = Object.defineProperty, aa = Object.getOwnPropertyNames, Rr = Object.getOwnPropertySymbols, oa = Object.getOwnPropertyDescriptor, ia = Object.getPrototypeOf, kr = Object.prototype;
function Yr(e, r, t) {
  if (typeof r != "string") {
    if (kr) {
      var n = ia(r);
      n && n !== kr && Yr(e, n, t);
    }
    var o = aa(r);
    Rr && (o = o.concat(Rr(r)));
    for (var s = Or(e), l = Or(r), u = 0; u < o.length; ++u) {
      var d = o[u];
      if (!ta[d] && !(t && t[d]) && !(l && l[d]) && !(s && s[d])) {
        var y = oa(r, d);
        try {
          na(e, d, y);
        } catch {
        }
      }
    }
  }
  return e;
}
var sa = Yr;
const la = /* @__PURE__ */ Gt(sa);
var B = { env: { NODE_ENV: "production" } };
function Ne() {
  return (Ne = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var xr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Ht = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Yt.typeOf(e);
}, mt = Object.freeze([]), De = Object.freeze({});
function Qe(e) {
  return typeof e == "function";
}
function jt(e) {
  return B.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ge = typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_ATTR || B.env.SC_ATTR) || "data-styled", Kt = typeof window < "u" && "HTMLElement" in window, ca = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && B.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? B.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && B.env.REACT_APP_SC_DISABLE_SPEEDY : B.env.SC_DISABLE_SPEEDY !== void 0 && B.env.SC_DISABLE_SPEEDY !== "" ? B.env.SC_DISABLE_SPEEDY !== "false" && B.env.SC_DISABLE_SPEEDY : B.env.NODE_ENV !== "production")), ua = B.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function fa() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ye(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw B.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(fa.apply(void 0, [ua[e]].concat(t)).trim());
}
var pa = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, l = s; t >= l; ) (l <<= 1) < 0 && Ye(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = s; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), y = 0, S = n.length; y < S; y++) this.tag.insertRule(d, n[y]) && (this.groupSizes[t]++, d++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < s; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), l = s + o, u = s; u < l; u++) n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), ft = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Ke = 1, it = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; ht.has(Ke); ) Ke++;
  var r = Ke++;
  return B.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ye(16, "" + r), ft.set(e, r), ht.set(r, e), r;
}, da = function(e) {
  return ht.get(e);
}, ma = function(e, r) {
  r >= Ke && (Ke = r + 1), ft.set(e, r), ht.set(r, e);
}, ha = "style[" + Ge + '][data-styled-version="5.3.11"]', ga = new RegExp("^" + Ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ya = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, l = o.length; s < l; s++) (n = o[s]) && e.registerName(r, n);
}, va = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var l = t[o].trim();
    if (l) {
      var u = l.match(ga);
      if (u) {
        var d = 0 | parseInt(u[1], 10), y = u[2];
        d !== 0 && (ma(y, d), ya(e, y, u[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, ba = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, qr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    for (var d = u.childNodes, y = d.length; y >= 0; y--) {
      var S = d[y];
      if (S && S.nodeType === 1 && S.hasAttribute(Ge)) return S;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ge, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = ba();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, s), n;
}, Aa = function() {
  function e(t) {
    var n = this.element = qr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, l = 0, u = s.length; l < u; l++) {
        var d = s[l];
        if (d.ownerNode === o) return d;
      }
      Ye(17);
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
}(), _a = function() {
  function e(t) {
    var n = this.element = qr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Sa = function() {
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
}(), Nr = Kt, wa = { isServer: !Kt, useCSSOMInjection: !ca }, Xr = function() {
  function e(t, n, o) {
    t === void 0 && (t = De), n === void 0 && (n = {}), this.options = Ne({}, wa, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Kt && Nr && (Nr = !1, function(s) {
      for (var l = document.querySelectorAll(ha), u = 0, d = l.length; u < d; u++) {
        var y = l[u];
        y && y.getAttribute(Ge) !== "active" && (va(s, y), y.parentNode && y.parentNode.removeChild(y));
      }
    }(this));
  }
  e.registerId = function(t) {
    return it(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ne({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, t = o ? new Sa(l) : s ? new Aa(l) : new _a(l), new pa(t)));
    var t, n, o, s, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (it(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(it(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(it(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", l = 0; l < o; l++) {
        var u = da(l);
        if (u !== void 0) {
          var d = t.names.get(u), y = n.getGroup(l);
          if (d && y && d.size) {
            var S = Ge + ".g" + l + '[id="' + u + '"]', C = "";
            d !== void 0 && d.forEach(function(D) {
              D.length > 0 && (C += D + ",");
            }), s += "" + y + S + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ta = /(a)(d)/gi, Ir = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Ir(r % 52) + t;
  return (Ir(r % 52) + t).replace(Ta, "$1-$2");
}
var Ue = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Zr = function(e) {
  return Ue(5381, e);
};
function Ea(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Qe(t) && !Zt(t)) return !1;
  }
  return !0;
}
var Ca = Zr("5.3.11"), Oa = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = B.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ea(r), this.componentId = t, this.baseHash = Ue(Ca, t), this.baseStyle = n, Xr.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = Ve(this.rules, r, t, n).join(""), u = zt(Ue(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, u)) {
        var d = n(l, "." + u, void 0, o);
        t.insertRules(o, u, d);
      }
      s.push(u), this.staticRulesId = u;
    }
    else {
      for (var y = this.rules.length, S = Ue(this.baseHash, n.hash), C = "", D = 0; D < y; D++) {
        var F = this.rules[D];
        if (typeof F == "string") C += F, B.env.NODE_ENV !== "production" && (S = Ue(S, F + D));
        else if (F) {
          var R = Ve(F, r, t, n), P = Array.isArray(R) ? R.join("") : R;
          S = Ue(S, P + D), C += P;
        }
      }
      if (C) {
        var h = zt(S >>> 0);
        if (!t.hasNameForId(o, h)) {
          var I = n(C, "." + h, void 0, o);
          t.insertRules(o, h, I);
        }
        s.push(h);
      }
    }
    return s.join(" ");
  }, e;
}(), Ra = /^\s*\/\/.*$/gm, ka = [":", "[", ".", "#"];
function xa(e) {
  var r, t, n, o, s = De, l = s.options, u = l === void 0 ? De : l, d = s.plugins, y = d === void 0 ? mt : d, S = new Zn(u), C = [], D = /* @__PURE__ */ function(P) {
    function h(I) {
      if (I) try {
        P(I + "}");
      } catch {
      }
    }
    return function(I, T, k, E, c, V, J, oe, ue, we) {
      switch (I) {
        case 1:
          if (ue === 0 && T.charCodeAt(0) === 64) return P(T + ";"), "";
          break;
        case 2:
          if (oe === 0) return T + "/*|*/";
          break;
        case 3:
          switch (oe) {
            case 102:
            case 112:
              return P(k[0] + T), "";
            default:
              return T + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          T.split("/*|*/}").forEach(h);
      }
    };
  }(function(P) {
    C.push(P);
  }), F = function(P, h, I) {
    return h === 0 && ka.indexOf(I[t.length]) !== -1 || I.match(o) ? P : "." + r;
  };
  function R(P, h, I, T) {
    T === void 0 && (T = "&");
    var k = P.replace(Ra, ""), E = h && I ? I + " " + h + " { " + k + " }" : k;
    return r = T, t = h, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), S(I || !h ? "" : h, E);
  }
  return S.use([].concat(y, [function(P, h, I) {
    P === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(n, F));
  }, D, function(P) {
    if (P === -2) {
      var h = C;
      return C = [], h;
    }
  }])), R.hash = y.length ? y.reduce(function(P, h) {
    return h.name || Ye(15), Ue(P, h.name);
  }, 5381).toString() : "", R;
}
var Kr = Je.createContext();
Kr.Consumer;
var Qr = Je.createContext(), Na = (Qr.Consumer, new Xr()), Ut = xa();
function Ia() {
  return Wt(Kr) || Na;
}
function Ma() {
  return Wt(Qr) || Ut;
}
var Pa = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Ut);
      var l = n.name + s.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Ye(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ut), this.name + r.hash;
  }, e;
}(), Da = /([A-Z])/, La = /([A-Z])/g, Fa = /^ms-/, Ha = function(e) {
  return "-" + e.toLowerCase();
};
function Mr(e) {
  return Da.test(e) ? e.replace(La, Ha).replace(Fa, "-ms-") : e;
}
var Pr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ve(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], l = 0, u = e.length; l < u; l += 1) (o = Ve(e[l], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Pr(e)) return "";
  if (Zt(e)) return "." + e.styledComponentId;
  if (Qe(e)) {
    if (typeof (y = e) != "function" || y.prototype && y.prototype.isReactComponent || !r) return e;
    var d = e(r);
    return B.env.NODE_ENV !== "production" && Yt.isElement(d) && console.warn(jt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ve(d, r, t, n);
  }
  var y;
  return e instanceof Pa ? t ? (e.inject(t, n), e.getName(n)) : e : Ht(e) ? function S(C, D) {
    var F, R, P = [];
    for (var h in C) C.hasOwnProperty(h) && !Pr(C[h]) && (Array.isArray(C[h]) && C[h].isCss || Qe(C[h]) ? P.push(Mr(h) + ":", C[h], ";") : Ht(C[h]) ? P.push.apply(P, S(C[h], h)) : P.push(Mr(h) + ": " + (F = h, (R = C[h]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || F in Kn || F.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return D ? [D + " {"].concat(P, ["}"]) : P;
  }(e) : e.toString();
}
var Dr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ja(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Qe(e) || Ht(e) ? Dr(Ve(xr(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Dr(Ve(xr(e, t)));
}
var Lr = /invalid hook call/i, st = /* @__PURE__ */ new Set(), za = function(e, r) {
  if (B.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (Lr.test(s)) o = !1, st.delete(t);
        else {
          for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++) u[d - 1] = arguments[d];
          n.apply(void 0, [s].concat(u));
        }
      }, Hr(), o && !st.has(t) && (console.warn(t), st.add(t));
    } catch (s) {
      Lr.test(s.message) && st.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Ua = function(e, r, t) {
  return t === void 0 && (t = De), e.theme !== t.theme && e.theme || r || t.theme;
}, $a = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ba = /(^-|-$)/g;
function It(e) {
  return e.replace($a, "-").replace(Ba, "");
}
var Wa = function(e) {
  return zt(Zr(e) >>> 0);
};
function lt(e) {
  return typeof e == "string" && (B.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $t = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ga = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Va(e, r, t) {
  var n = e[t];
  $t(r) && $t(n) ? Jr(n, r) : e[t] = r;
}
function Jr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var l = s[o];
    if ($t(l)) for (var u in l) Ga(u) && Va(e, l[u], u);
  }
  return e;
}
var en = Je.createContext();
en.Consumer;
var Mt = {};
function tn(e, r, t) {
  var n = Zt(e), o = !lt(e), s = r.attrs, l = s === void 0 ? mt : s, u = r.componentId, d = u === void 0 ? function(T, k) {
    var E = typeof T != "string" ? "sc" : It(T);
    Mt[E] = (Mt[E] || 0) + 1;
    var c = E + "-" + Wa("5.3.11" + E + Mt[E]);
    return k ? k + "-" + c : c;
  }(r.displayName, r.parentComponentId) : u, y = r.displayName, S = y === void 0 ? function(T) {
    return lt(T) ? "styled." + T : "Styled(" + jt(T) + ")";
  }(e) : y, C = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || d, D = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, F = r.shouldForwardProp;
  n && e.shouldForwardProp && (F = r.shouldForwardProp ? function(T, k, E) {
    return e.shouldForwardProp(T, k, E) && r.shouldForwardProp(T, k, E);
  } : e.shouldForwardProp);
  var R, P = new Oa(t, C, n ? e.componentStyle : void 0), h = P.isStatic && l.length === 0, I = function(T, k) {
    return function(E, c, V, J) {
      var oe = E.attrs, ue = E.componentStyle, we = E.defaultProps, Ie = E.foldedComponentIds, ie = E.shouldForwardProp, q = E.styledComponentId, fe = E.target, te = function(A, i, w) {
        A === void 0 && (A = De);
        var p = Ne({}, i, { theme: A }), W = {};
        return w.forEach(function(z) {
          var H, N, Q, Z = z;
          for (H in Qe(Z) && (Z = Z(p)), Z) p[H] = W[H] = H === "className" ? (N = W[H], Q = Z[H], N && Q ? N + " " + Q : N || Q) : Z[H];
        }), [p, W];
      }(Ua(c, Wt(en), we) || De, c, oe), Ee = te[0], he = te[1], pe = function(A, i, w, p) {
        var W = Ia(), z = Ma(), H = i ? A.generateAndInjectStyles(De, W, z) : A.generateAndInjectStyles(w, W, z);
        return B.env.NODE_ENV !== "production" && !i && p && p(H), H;
      }(ue, J, Ee, B.env.NODE_ENV !== "production" ? E.warnTooManyClasses : void 0), Le = V, Ce = he.$as || c.$as || he.as || c.as || fe, Fe = lt(Ce), b = he !== c ? Ne({}, c, {}, he) : c, m = {};
      for (var v in b) v[0] !== "$" && v !== "as" && (v === "forwardedAs" ? m.as = b[v] : (ie ? ie(v, Cr, Ce) : !Fe || Cr(v)) && (m[v] = b[v]));
      return c.style && he.style !== c.style && (m.style = Ne({}, c.style, {}, he.style)), m.className = Array.prototype.concat(Ie, q, pe !== q ? pe : null, c.className, he.className).filter(Boolean).join(" "), m.ref = Le, un(Ce, m);
    }(R, T, k, h);
  };
  return I.displayName = S, (R = Je.forwardRef(I)).attrs = D, R.componentStyle = P, R.displayName = S, R.shouldForwardProp = F, R.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, R.styledComponentId = C, R.target = n ? e.target : e, R.withComponent = function(T) {
    var k = r.componentId, E = function(V, J) {
      if (V == null) return {};
      var oe, ue, we = {}, Ie = Object.keys(V);
      for (ue = 0; ue < Ie.length; ue++) oe = Ie[ue], J.indexOf(oe) >= 0 || (we[oe] = V[oe]);
      return we;
    }(r, ["componentId"]), c = k && k + "-" + (lt(T) ? T : It(jt(T)));
    return tn(T, Ne({}, E, { attrs: D, componentId: c }), t);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? Jr({}, e.defaultProps, T) : T;
  } }), B.env.NODE_ENV !== "production" && (za(S, C), R.warnTooManyClasses = /* @__PURE__ */ function(T, k) {
    var E = {}, c = !1;
    return function(V) {
      if (!c && (E[V] = !0, Object.keys(E).length >= 200)) {
        var J = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + T + J + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, E = {};
      }
    };
  }(S, C)), Object.defineProperty(R, "toString", { value: function() {
    return "." + R.styledComponentId;
  } }), o && la(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var Bt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = De), !Yt.isValidElementType(n)) return Ye(1, String(n));
    var s = function() {
      return t(n, o, ja.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return r(t, n, Ne({}, o, {}, l));
    }, s.attrs = function(l) {
      return r(t, n, Ne({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, s;
  }(tn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Bt[e] = Bt(e);
});
B.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), B.env.NODE_ENV !== "production" && B.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ya = Bt.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e }) => e ? "112px" : "142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`, pt = "On This Page", qa = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: pt
}, Xa = ({
  items: e,
  firstElementId: r,
  focusFirstFocusableElement: t = !1
}) => {
  const n = Hr(null), o = yn("(max-width: 991px)"), [s, l] = Fr({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), u = o ? 110 : 142, d = () => {
    var c;
    const h = {}, I = window.scrollY, T = (c = document.getElementById(r)) == null ? void 0 : c.getBoundingClientRect().top, k = 103;
    T >= 0 && (h.sticky = !1, h.activeContainer = ""), I > n.current.getBoundingClientRect().top && (h.sticky = !0);
    const E = s.hasHeader ? u + k : k;
    e == null || e.forEach(({ targetIdName: V }) => {
      const J = document.getElementById(V), oe = (J == null ? void 0 : J.getBoundingClientRect().top) - E, ue = (J == null ? void 0 : J.getBoundingClientRect().bottom) - E;
      oe < 0 && ue > 0 && (h.activeContainer = V);
    }), l((V) => ({
      ...V,
      ...h
    }));
  }, y = () => {
    Yn(d, 150), qn(d, 150);
  }, S = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), C = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function D(h = null) {
    if (h === null) return s.containerClass;
    const I = Object.values(h.classList).filter(
      (T) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(T)
    );
    return I.length > 0 ? I.join(" ") : D(h.parentElement);
  }
  Pt(() => {
    const h = document.getElementById(r) || null, I = {
      hasHeader: S(),
      hasAltMenuSpacing: C(),
      containerClass: D(h)
    };
    l((T) => ({
      ...T,
      ...I
    }));
  }, []), Pt(() => (window == null || window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y)), [s.hasHeader]);
  const F = (h) => {
    var E, c;
    const I = window.scrollY - (s.hasHeader ? u + 100 : 100), T = o ? 410 : 90;
    let k = ((E = document.getElementById(h)) == null ? void 0 : E.getBoundingClientRect().top) + I;
    n.current.classList.contains("sticky") || (k -= T), t && ((c = Vn(`#${h}`)) == null || c.focus()), window.scrollTo({ top: k, behavior: "smooth" });
  }, R = () => {
    Gr({
      ...qa,
      action: s.showMenu ? "close" : "open"
    });
  }, P = () => {
    l((h) => ({
      ...h,
      showMenu: !h.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ Se.jsx(
    Ya,
    {
      requiresAltMenuSpacing: s.hasAltMenuSpacing,
      ref: n,
      className: We(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: s.sticky,
          "with-header": s.hasHeader
        }
      ),
      style: s.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ Se.jsxs("div", { className: `${s.containerClass} uds-anchor-menu-wrapper`, children: [
        o ? /* @__PURE__ */ Se.jsx(
          "button",
          {
            className: We("mobile-menu-toggler", {
              "show-menu": s.showMenu
            }),
            type: "button",
            onClick: () => {
              R(), P();
            },
            "data-bs-toggle": "collapse",
            "data-bs-target": "#collapseAnchorMenu",
            "aria-controls": "collapseAnchorMenu",
            children: /* @__PURE__ */ Se.jsxs("h4", { children: [
              pt,
              ":",
              /* @__PURE__ */ Se.jsx("i", { className: "fas fa-chevron-down" })
            ] })
          }
        ) : /* @__PURE__ */ Se.jsxs("h4", { children: [
          pt,
          ":"
        ] }),
        /* @__PURE__ */ Se.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: We("card", "card-body", "collapse", {
              show: s.showMenu
            }),
            children: /* @__PURE__ */ Se.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": pt,
                children: e == null ? void 0 : e.map((h) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ Se.jsx(
                    Vt,
                    {
                      "data-testid": `anchor-item-${h.targetIdName}`,
                      classes: We("nav-link", {
                        active: s.activeContainer === h.targetIdName
                      }).split(" "),
                      ariaLabel: h.text,
                      label: h.text,
                      icon: h.icon,
                      onClick: () => F(h.targetIdName)
                    },
                    h.targetIdName
                  )
                ))
              }
            )
          }
        )
      ] })
    }
  );
};
Xa.propTypes = {
  /**
   * Anchor menu items
   */
  items: O.arrayOf(
    O.shape({
      text: O.string.isRequired,
      targetIdName: O.string.isRequired,
      icon: O.arrayOf(O.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: O.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: O.bool
};
export {
  Xa as AnchorMenu
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
