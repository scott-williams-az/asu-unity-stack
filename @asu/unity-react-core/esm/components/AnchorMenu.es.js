import $e, { useState as Fr, useEffect as Pt, useId as un, useRef as jr, useContext as Wt, createElement as fn } from "react";
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hr = { exports: {} }, Ze = {};
var dr;
function pn() {
  if (dr) return Ze;
  dr = 1;
  var e = $e, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, d, v) {
    var S, C = {}, L = null, F = null;
    v !== void 0 && (L = "" + v), d.key !== void 0 && (L = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (S in d) n.call(d, S) && !i.hasOwnProperty(S) && (C[S] = d[S]);
    if (u && u.defaultProps) for (S in d = u.defaultProps, d) C[S] === void 0 && (C[S] = d[S]);
    return { $$typeof: r, type: u, key: L, ref: F, props: C, _owner: o.current };
  }
  return Ze.Fragment = t, Ze.jsx = l, Ze.jsxs = l, Ze;
}
Hr.exports = pn();
var ye = Hr.exports, zr = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var i = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (i = o(i, n(u)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return t.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var l = "";
      for (var u in i)
        r.call(i, u) && i[u] && (l = o(l, u));
      return l;
    }
    function o(i, l) {
      return l ? i ? i + " " + l : i + l : i;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(zr);
var dn = zr.exports;
const Ge = /* @__PURE__ */ Gt(dn);
var Ur = { exports: {} }, St = { exports: {} }, $ = {};
var mr;
function mn() {
  if (mr) return $;
  mr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, L = e ? Symbol.for("react.suspense_list") : 60120, F = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, P = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function k(c) {
    if (typeof c == "object" && c !== null) {
      var V = c.$$typeof;
      switch (V) {
        case r:
          switch (c = c.type, c) {
            case d:
            case v:
            case n:
            case i:
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
    return k(c) === v;
  }
  return $.AsyncMode = d, $.ConcurrentMode = v, $.ContextConsumer = u, $.ContextProvider = l, $.Element = r, $.ForwardRef = S, $.Fragment = n, $.Lazy = R, $.Memo = F, $.Portal = t, $.Profiler = i, $.StrictMode = o, $.Suspense = C, $.isAsyncMode = function(c) {
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
    return k(c) === i;
  }, $.isStrictMode = function(c) {
    return k(c) === o;
  }, $.isSuspense = function(c) {
    return k(c) === C;
  }, $.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === v || c === i || c === o || c === C || c === L || typeof c == "object" && c !== null && (c.$$typeof === R || c.$$typeof === F || c.$$typeof === l || c.$$typeof === u || c.$$typeof === S || c.$$typeof === h || c.$$typeof === I || c.$$typeof === T || c.$$typeof === P);
  }, $.typeOf = k, $;
}
var hr;
function $r() {
  return hr || (hr = 1, St.exports = mn()), St.exports;
}
var wt, gr;
function hn() {
  if (gr) return wt;
  gr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Tt, vr;
function gn() {
  if (vr) return Tt;
  vr = 1;
  var e = hn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Tt = function() {
    function n(l, u, d, v, S, C) {
      if (C !== e) {
        var L = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw L.name = "Invariant Violation", L;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, Tt;
}
Ur.exports = gn()();
var vn = Ur.exports;
const O = /* @__PURE__ */ Gt(vn);
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
function Lt(e, r) {
  return Lt = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Lt(e, r);
}
function bn() {
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
  return bn() ? ct = Reflect.construct : ct = function(o, i, l) {
    var u = [null];
    u.push.apply(u, i);
    var d = Function.bind.apply(o, u), v = new d();
    return l && Lt(v, l.prototype), v;
  }, ct.apply(null, arguments);
}
function Se(e) {
  return An(e) || _n(e) || Sn(e) || wn();
}
function An(e) {
  if (Array.isArray(e)) return Dt(e);
}
function _n(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sn(e, r) {
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
function wn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tn = Object.hasOwnProperty, yr = Object.setPrototypeOf, En = Object.isFrozen, Cn = Object.getPrototypeOf, On = Object.getOwnPropertyDescriptor, ce = Object.freeze, be = Object.seal, Rn = Object.create, Br = typeof Reflect < "u" && Reflect, dt = Br.apply, Ft = Br.construct;
dt || (dt = function(r, t, n) {
  return r.apply(t, n);
});
ce || (ce = function(r) {
  return r;
});
be || (be = function(r) {
  return r;
});
Ft || (Ft = function(r, t) {
  return ct(r, Se(t));
});
var kn = Ae(Array.prototype.forEach), br = Ae(Array.prototype.pop), Ke = Ae(Array.prototype.push), ut = Ae(String.prototype.toLowerCase), Et = Ae(String.prototype.toString), Ar = Ae(String.prototype.match), _e = Ae(String.prototype.replace), xn = Ae(String.prototype.indexOf), Nn = Ae(String.prototype.trim), ae = Ae(RegExp.prototype.test), Ct = In(TypeError);
function Ae(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    return dt(e, r, n);
  };
}
function In(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Ft(e, t);
  };
}
function M(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ut, yr && yr(e, null);
  for (var o = r.length; o--; ) {
    var i = r[o];
    if (typeof i == "string") {
      var l = t(i);
      l !== i && (En(r) || (r[o] = l), i = l);
    }
    e[i] = !0;
  }
  return e;
}
function ze(e) {
  var r = Rn(null), t;
  for (t in e)
    dt(Tn, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function at(e, r) {
  for (; e !== null; ) {
    var t = On(e, r);
    if (t) {
      if (t.get)
        return Ae(t.get);
      if (typeof t.value == "function")
        return Ae(t.value);
    }
    e = Cn(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var _r = ce(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = ce(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rt = ce(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Mn = ce(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kt = ce(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Pn = ce(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sr = ce(["#text"]), wr = ce(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), xt = ce(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tr = ce(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ot = ce(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ln = be(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dn = be(/<%[\w\W]*|[\w\W]*%>/gm), Fn = be(/\${[\w\W]*}/gm), jn = be(/^data-[\-\w.\u00B7-\uFFFF]/), Hn = be(/^aria-[\-\w]+$/), zn = be(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Un = be(/^(?:\w+script|data):/i), $n = be(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bn = be(/^html$/i), Wn = be(/^[a-z][.\w]*(-[.\w]+)+$/i), Gn = function() {
  return typeof window > "u" ? null : window;
}, Vn = function(r, t) {
  if (Pe(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, o = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(i, {
      createHTML: function(u) {
        return u;
      },
      createScriptURL: function(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Wr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Gn(), r = function(a) {
    return Wr(a);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, o = e.DocumentFragment, i = e.HTMLTemplateElement, l = e.Node, u = e.Element, d = e.NodeFilter, v = e.NamedNodeMap, S = v === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : v, C = e.HTMLFormElement, L = e.DOMParser, F = e.trustedTypes, R = u.prototype, P = at(R, "cloneNode"), h = at(R, "nextSibling"), I = at(R, "childNodes"), T = at(R, "parentNode");
  if (typeof i == "function") {
    var k = n.createElement("template");
    k.content && k.content.ownerDocument && (n = k.content.ownerDocument);
  }
  var E = Vn(F, t), c = E ? E.createHTML("") : "", V = n, J = V.implementation, oe = V.createNodeIterator, ue = V.createDocumentFragment, we = V.getElementsByTagName, Ie = t.importNode, ie = {};
  try {
    ie = ze(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var q = {};
  r.isSupported = typeof T == "function" && J && J.createHTMLDocument !== void 0 && ie !== 9;
  var fe = Ln, te = Dn, Ee = Fn, he = jn, pe = Hn, De = Un, Ce = $n, Fe = Wn, b = zn, m = null, y = M({}, [].concat(Se(_r), Se(Ot), Se(Rt), Se(kt), Se(Sr))), A = null, s = M({}, [].concat(Se(wr), Se(xt), Se(Tr), Se(ot))), w = Object.seal(Object.create(null, {
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
  })), p = null, W = null, z = !0, j = !0, N = !1, Q = !0, Z = !1, D = !0, Y = !1, H = !1, K = !1, ge = !1, X = !1, Oe = !1, Me = !0, de = !1, x = "user-content-", G = !0, Re = !1, Te = {}, le = null, Qt = M({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Jt = null, er = M({}, ["audio", "video", "img", "source", "image", "track"]), gt = null, tr = M({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), et = "http://www.w3.org/1998/Math/MathML", tt = "http://www.w3.org/2000/svg", ke = "http://www.w3.org/1999/xhtml", Be = ke, vt = !1, yt = null, rn = M({}, [et, tt, ke], Et), je, nn = ["application/xhtml+xml", "text/html"], an = "text/html", re, We = null, on = n.createElement("form"), rr = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, bt = function(a) {
    We && We === a || ((!a || Pe(a) !== "object") && (a = {}), a = ze(a), je = // eslint-disable-next-line unicorn/prefer-includes
    nn.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? je = an : je = a.PARSER_MEDIA_TYPE, re = je === "application/xhtml+xml" ? Et : ut, m = "ALLOWED_TAGS" in a ? M({}, a.ALLOWED_TAGS, re) : y, A = "ALLOWED_ATTR" in a ? M({}, a.ALLOWED_ATTR, re) : s, yt = "ALLOWED_NAMESPACES" in a ? M({}, a.ALLOWED_NAMESPACES, Et) : rn, gt = "ADD_URI_SAFE_ATTR" in a ? M(
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
    ) : er, le = "FORBID_CONTENTS" in a ? M({}, a.FORBID_CONTENTS, re) : Qt, p = "FORBID_TAGS" in a ? M({}, a.FORBID_TAGS, re) : {}, W = "FORBID_ATTR" in a ? M({}, a.FORBID_ATTR, re) : {}, Te = "USE_PROFILES" in a ? a.USE_PROFILES : !1, z = a.ALLOW_ARIA_ATTR !== !1, j = a.ALLOW_DATA_ATTR !== !1, N = a.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = a.SAFE_FOR_TEMPLATES || !1, D = a.SAFE_FOR_XML !== !1, Y = a.WHOLE_DOCUMENT || !1, ge = a.RETURN_DOM || !1, X = a.RETURN_DOM_FRAGMENT || !1, Oe = a.RETURN_TRUSTED_TYPE || !1, K = a.FORCE_BODY || !1, Me = a.SANITIZE_DOM !== !1, de = a.SANITIZE_NAMED_PROPS || !1, G = a.KEEP_CONTENT !== !1, Re = a.IN_PLACE || !1, b = a.ALLOWED_URI_REGEXP || b, Be = a.NAMESPACE || ke, w = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && rr(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (w.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && rr(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (w.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Z && (j = !1), X && (ge = !0), Te && (m = M({}, Se(Sr)), A = [], Te.html === !0 && (M(m, _r), M(A, wr)), Te.svg === !0 && (M(m, Ot), M(A, xt), M(A, ot)), Te.svgFilters === !0 && (M(m, Rt), M(A, xt), M(A, ot)), Te.mathMl === !0 && (M(m, kt), M(A, Tr), M(A, ot))), a.ADD_TAGS && (m === y && (m = ze(m)), M(m, a.ADD_TAGS, re)), a.ADD_ATTR && (A === s && (A = ze(A)), M(A, a.ADD_ATTR, re)), a.ADD_URI_SAFE_ATTR && M(gt, a.ADD_URI_SAFE_ATTR, re), a.FORBID_CONTENTS && (le === Qt && (le = ze(le)), M(le, a.FORBID_CONTENTS, re)), G && (m["#text"] = !0), Y && M(m, ["html", "head", "body"]), m.table && (M(m, ["tbody"]), delete p.tbody), ce && ce(a), We = a);
  }, nr = M({}, ["mi", "mo", "mn", "ms", "mtext"]), ar = M({}, ["annotation-xml"]), sn = M({}, ["title", "style", "font", "a", "script"]), rt = M({}, Ot);
  M(rt, Rt), M(rt, Mn);
  var At = M({}, kt);
  M(At, Pn);
  var ln = function(a) {
    var f = T(a);
    (!f || !f.tagName) && (f = {
      namespaceURI: Be,
      tagName: "template"
    });
    var g = ut(a.tagName), U = ut(f.tagName);
    return yt[a.namespaceURI] ? a.namespaceURI === tt ? f.namespaceURI === ke ? g === "svg" : f.namespaceURI === et ? g === "svg" && (U === "annotation-xml" || nr[U]) : !!rt[g] : a.namespaceURI === et ? f.namespaceURI === ke ? g === "math" : f.namespaceURI === tt ? g === "math" && ar[U] : !!At[g] : a.namespaceURI === ke ? f.namespaceURI === tt && !ar[U] || f.namespaceURI === et && !nr[U] ? !1 : !At[g] && (sn[g] || !rt[g]) : !!(je === "application/xhtml+xml" && yt[a.namespaceURI]) : !1;
  }, ve = function(a) {
    Ke(r.removed, {
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
      Ke(r.removed, {
        attribute: f.getAttributeNode(a),
        from: f
      });
    } catch {
      Ke(r.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(a), a === "is" && !A[a])
      if (ge || X)
        try {
          ve(f);
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
    je === "application/xhtml+xml" && Be === ke && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    var me = E ? E.createHTML(a) : a;
    if (Be === ke)
      try {
        f = new L().parseFromString(me, je);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = J.createDocument(Be, "template", null);
      try {
        f.documentElement.innerHTML = vt ? c : me;
      } catch {
      }
    }
    var se = f.body || f.documentElement;
    return a && g && se.insertBefore(n.createTextNode(g), se.childNodes[0] || null), Be === ke ? we.call(f, Y ? "html" : "body")[0] : Y ? f.documentElement : se;
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
  }, Xe = function(a) {
    return Pe(l) === "object" ? a instanceof l : a && Pe(a) === "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
  }, xe = function(a, f, g) {
    q[a] && kn(q[a], function(U) {
      U.call(r, f, g, We);
    });
  }, lr = function(a) {
    var f;
    if (xe("beforeSanitizeElements", a, null), sr(a) || ae(/[\u0080-\uFFFF]/, a.nodeName))
      return ve(a), !0;
    var g = re(a.nodeName);
    if (xe("uponSanitizeElement", a, {
      tagName: g,
      allowedTags: m
    }), a.hasChildNodes() && !Xe(a.firstElementChild) && (!Xe(a.content) || !Xe(a.content.firstElementChild)) && ae(/<[/\w]/g, a.innerHTML) && ae(/<[/\w]/g, a.textContent) || g === "select" && ae(/<template/i, a.innerHTML) || a.nodeType === 7 || D && a.nodeType === 8 && ae(/<[/\w]/g, a.data))
      return ve(a), !0;
    if (!m[g] || p[g]) {
      if (!p[g] && ur(g) && (w.tagNameCheck instanceof RegExp && ae(w.tagNameCheck, g) || w.tagNameCheck instanceof Function && w.tagNameCheck(g)))
        return !1;
      if (G && !le[g]) {
        var U = T(a) || a.parentNode, me = I(a) || a.childNodes;
        if (me && U)
          for (var se = me.length, ne = se - 1; ne >= 0; --ne) {
            var He = P(me[ne], !0);
            He.__removalCount = (a.__removalCount || 0) + 1, U.insertBefore(He, h(a));
          }
      }
      return ve(a), !0;
    }
    return a instanceof u && !ln(a) || (g === "noscript" || g === "noembed" || g === "noframes") && ae(/<\/no(script|embed|frames)/i, a.innerHTML) ? (ve(a), !0) : (Z && a.nodeType === 3 && (f = a.textContent, f = _e(f, fe, " "), f = _e(f, te, " "), f = _e(f, Ee, " "), a.textContent !== f && (Ke(r.removed, {
      element: a.cloneNode()
    }), a.textContent = f)), xe("afterSanitizeElements", a, null), !1);
  }, cr = function(a, f, g) {
    if (Me && (f === "id" || f === "name") && (g in n || g in on))
      return !1;
    if (!(j && !W[f] && ae(he, f))) {
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
          if (!ae(b, _e(g, Ce, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && a !== "script" && xn(g, "data:") === 0 && Jt[a])) {
              if (!(N && !ae(De, _e(g, Ce, "")))) {
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
        var He = f, ee = He.name, _t = He.namespaceURI;
        if (g = ee === "value" ? f.value : Nn(f.value), U = re(ee), ne.attrName = U, ne.attrValue = g, ne.keepAttr = !0, ne.forceKeepAttr = void 0, xe("uponSanitizeAttribute", a, ne), g = ne.attrValue, !ne.forceKeepAttr && (nt(ee, a), !!ne.keepAttr)) {
          if (!Q && ae(/\/>/i, g)) {
            nt(ee, a);
            continue;
          }
          Z && (g = _e(g, fe, " "), g = _e(g, te, " "), g = _e(g, Ee, " "));
          var pr = re(a.nodeName);
          if (cr(pr, U, g)) {
            if (de && (U === "id" || U === "name") && (nt(ee, a), g = x + g), D && ae(/((--!?|])>)|<\/(style|title)/i, g)) {
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
              _t ? a.setAttributeNS(_t, ee, g) : a.setAttribute(ee, g), sr(a) ? ve(a) : br(r.removed);
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
    if (vt = !_, vt && (_ = "<!-->"), typeof _ != "string" && !Xe(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw Ct("dirty is not a string, aborting");
      } else
        throw Ct("toString is not a function");
    if (!r.isSupported) {
      if (Pe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof _ == "string")
          return e.toStaticHTML(_);
        if (Xe(_))
          return e.toStaticHTML(_.outerHTML);
      }
      return _;
    }
    if (H || bt(a), r.removed = [], typeof _ == "string" && (Re = !1), Re) {
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
    f && K && ve(f.firstChild);
    for (var He = ir(Re ? _ : f); U = He.nextNode(); )
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
    return Y && m["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && ae(Bn, f.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + ee), Z && (ee = _e(ee, fe, " "), ee = _e(ee, te, " "), ee = _e(ee, Ee, " ")), E && Oe ? E.createHTML(ee) : ee;
  }, r.setConfig = function(_) {
    bt(_), H = !0;
  }, r.clearConfig = function() {
    We = null, H = !1;
  }, r.isValidAttribute = function(_, a, f) {
    We || bt({});
    var g = re(_), U = re(a);
    return cr(g, U, f);
  }, r.addHook = function(_, a) {
    typeof a == "function" && (q[_] = q[_] || [], Ke(q[_], a));
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
function Yn(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
let Nt = !1;
const qn = (e, r) => {
  Nt || (Nt = !0, setTimeout(() => {
    e(), Nt = !1;
  }, r));
};
let Er;
const Xn = (e, r) => {
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
  text: i = "",
  region: l = "",
  component: u = ""
}) => {
  const { dataLayer: d } = window, v = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: o.toLowerCase(),
    text: i.toLowerCase(),
    component: u.toLowerCase()
  };
  d && d.push(v);
}, Zn = "staticMarkup";
function Kn() {
  const r = un().indexOf(Zn) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const Qn = ({ gaData: e, children: r }) => {
  const { isReact: t } = Kn(), { onClick: n, ...o } = r.props;
  return t ? $e.cloneElement(r, {
    ...o,
    onClick: (i) => (Gr(e), n ? n(i) : !0)
  }) : $e.cloneElement(r, {
    ...o,
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
}, Vt = ({
  label: e,
  cardTitle: r,
  ariaLabel: t,
  block: n,
  color: o,
  disabled: i,
  element: l,
  href: u,
  icon: d,
  innerRef: v,
  onClick: S,
  size: C,
  classes: L,
  target: F,
  ...R
}) => {
  const P = Ge("btn", {
    [`btn-${o}`]: !0,
    "btn-md": C === "small",
    "btn-sm": C === "xsmall",
    "btn-block": n,
    disabled: i
  });
  let h = l;
  u && l === "button" && (h = "a");
  const I = (T) => {
    S == null || S();
  };
  return /* @__PURE__ */ ye.jsx(
    Qn,
    {
      gaData: { ...Jn, text: e, section: r },
      children: /* @__PURE__ */ ye.jsxs(
        h,
        {
          type: h === "button" && S ? "button" : void 0,
          ...R,
          className: Ge(L) || P,
          href: u,
          ref: v,
          onClick: I,
          "aria-label": t,
          target: h === "a" ? F : null,
          children: [
            d && /* @__PURE__ */ ye.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
            e
          ]
        }
      )
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
function ea(e) {
  function r(b, m, y, A, s) {
    for (var w = 0, p = 0, W = 0, z = 0, j, N, Q = 0, Z = 0, D, Y = D = j = 0, H = 0, K = 0, ge = 0, X = 0, Oe = y.length, Me = Oe - 1, de, x = "", G = "", Re = "", Te = "", le; H < Oe; ) {
      if (N = y.charCodeAt(H), H === Me && p + z + W + w !== 0 && (p !== 0 && (N = p === 47 ? 10 : 47), z = W = w = 0, Oe++, Me++), p + z + W + w === 0) {
        if (H === Me && (0 < K && (x = x.replace(L, "")), 0 < x.trim().length)) {
          switch (N) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              x += y.charAt(H);
          }
          N = 59;
        }
        switch (N) {
          case 123:
            for (x = x.trim(), j = x.charCodeAt(0), D = 1, X = ++H; H < Oe; ) {
              switch (N = y.charCodeAt(H)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (N = y.charCodeAt(H + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = H + 1; Y < Me; ++Y)
                          switch (y.charCodeAt(Y)) {
                            case 47:
                              if (N === 42 && y.charCodeAt(Y - 1) === 42 && H + 2 !== Y) {
                                H = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (N === 47) {
                                H = Y + 1;
                                break e;
                              }
                          }
                        H = Y;
                      }
                  }
                  break;
                case 91:
                  N++;
                case 40:
                  N++;
                case 34:
                case 39:
                  for (; H++ < Me && y.charCodeAt(H) !== N; )
                    ;
              }
              if (D === 0) break;
              H++;
            }
            switch (D = y.substring(X, H), j === 0 && (j = (x = x.replace(C, "").trim()).charCodeAt(0)), j) {
              case 64:
                switch (0 < K && (x = x.replace(L, "")), N = x.charCodeAt(1), N) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    K = m;
                    break;
                  default:
                    K = Ee;
                }
                if (D = r(m, K, D, N, s + 1), X = D.length, 0 < pe && (K = t(Ee, x, ge), le = u(3, D, K, m, q, ie, X, N, s, A), x = K.join(""), le !== void 0 && (X = (D = le.trim()).length) === 0 && (N = 0, D = "")), 0 < X) switch (N) {
                  case 115:
                    x = x.replace(V, l);
                  case 100:
                  case 109:
                  case 45:
                    D = x + "{" + D + "}";
                    break;
                  case 107:
                    x = x.replace(T, "$1 $2"), D = x + "{" + D + "}", D = te === 1 || te === 2 && i("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                    break;
                  default:
                    D = x + D, A === 112 && (D = (G += D, ""));
                }
                else D = "";
                break;
              default:
                D = r(m, t(m, x, ge), D, A, s + 1);
            }
            Re += D, D = ge = K = Y = j = 0, x = "", N = y.charCodeAt(++H);
            break;
          case 125:
          case 59:
            if (x = (0 < K ? x.replace(L, "") : x).trim(), 1 < (X = x.length)) switch (Y === 0 && (j = x.charCodeAt(0), j === 45 || 96 < j && 123 > j) && (X = (x = x.replace(" ", ":")).length), 0 < pe && (le = u(1, x, m, b, q, ie, G.length, A, s, A)) !== void 0 && (X = (x = le.trim()).length) === 0 && (x = "\0\0"), j = x.charCodeAt(0), N = x.charCodeAt(1), j) {
              case 0:
                break;
              case 64:
                if (N === 105 || N === 99) {
                  Te += x + y.charAt(H);
                  break;
                }
              default:
                x.charCodeAt(X - 1) !== 58 && (G += o(x, j, N, x.charCodeAt(2)));
            }
            ge = K = Y = j = 0, x = "", N = y.charCodeAt(++H);
        }
      }
      switch (N) {
        case 13:
        case 10:
          p === 47 ? p = 0 : 1 + j === 0 && A !== 107 && 0 < x.length && (K = 1, x += "\0"), 0 < pe * Ce && u(0, x, m, b, q, ie, G.length, A, s, A), ie = 1, q++;
          break;
        case 59:
        case 125:
          if (p + z + W + w === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, de = y.charAt(H), N) {
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
              if (z + p + w + fe === 0 && 0 < Y) switch (H - Y) {
                case 2:
                  Q === 112 && y.charCodeAt(H - 3) === 58 && (fe = Q);
                case 8:
                  Z === 111 && (fe = Z);
              }
              break;
            case 58:
              z + p + w === 0 && (Y = H);
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
                if (j === 0) switch (2 * Q + 3 * Z) {
                  case 533:
                    break;
                  default:
                    j = 1;
                }
                W++;
              }
              break;
            case 64:
              p + W + z + w + Y + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < z + w + W)) switch (p) {
                case 0:
                  switch (2 * N + 3 * y.charCodeAt(H + 1)) {
                    case 235:
                      p = 47;
                      break;
                    case 220:
                      X = H, p = 42;
                  }
                  break;
                case 42:
                  N === 47 && Q === 42 && X + 2 !== H && (y.charCodeAt(X + 2) === 33 && (G += y.substring(X, H + 1)), de = "", p = 0);
              }
          }
          p === 0 && (x += de);
      }
      Z = Q, Q = N, H++;
    }
    if (X = G.length, 0 < X) {
      if (K = m, 0 < pe && (le = u(2, G, K, b, q, ie, X, A, s, A), le !== void 0 && (G = le).length === 0)) return Te + G + Re;
      if (G = K.join(",") + "{" + G + "}", te * fe !== 0) {
        switch (te !== 2 || i(G, 2) || (fe = 0), fe) {
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
  function t(b, m, y) {
    var A = m.trim().split(h);
    m = A;
    var s = A.length, w = b.length;
    switch (w) {
      case 0:
      case 1:
        var p = 0;
        for (b = w === 0 ? "" : b[0] + " "; p < s; ++p)
          m[p] = n(b, m[p], y).trim();
        break;
      default:
        var W = p = 0;
        for (m = []; p < s; ++p)
          for (var z = 0; z < w; ++z)
            m[W++] = n(b[z] + " ", A[p], y).trim();
    }
    return m;
  }
  function n(b, m, y) {
    var A = m.charCodeAt(0);
    switch (33 > A && (A = (m = m.trim()).charCodeAt(0)), A) {
      case 38:
        return m.replace(I, "$1" + b.trim());
      case 58:
        return b.trim() + m.replace(I, "$1" + b.trim());
      default:
        if (0 < 1 * y && 0 < m.indexOf("\f")) return m.replace(I, (b.charCodeAt(0) === 58 ? "" : "$1") + b.trim());
    }
    return b + m;
  }
  function o(b, m, y, A) {
    var s = b + ";", w = 2 * m + 3 * y + 4 * A;
    if (w === 944) {
      b = s.indexOf(":", 9) + 1;
      var p = s.substring(b, s.length - 1).trim();
      return p = s.substring(0, b).trim() + p + ";", te === 1 || te === 2 && i(p, 1) ? "-webkit-" + p + p : p;
    }
    if (te === 0 || te === 2 && !i(s, 1)) return s;
    switch (w) {
      case 1015:
        return s.charCodeAt(10) === 97 ? "-webkit-" + s + s : s;
      case 951:
        return s.charCodeAt(3) === 116 ? "-webkit-" + s + s : s;
      case 963:
        return s.charCodeAt(5) === 110 ? "-webkit-" + s + s : s;
      case 1009:
        if (s.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + s + s;
      case 978:
        return "-webkit-" + s + "-moz-" + s + s;
      case 1019:
      case 983:
        return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
      case 883:
        if (s.charCodeAt(8) === 45) return "-webkit-" + s + s;
        if (0 < s.indexOf("image-set(", 11)) return s.replace(Ie, "$1-webkit-$2") + s;
        break;
      case 932:
        if (s.charCodeAt(4) === 45) switch (s.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
          case 115:
            return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
          case 98:
            return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s;
        }
        return "-webkit-" + s + "-ms-" + s + s;
      case 964:
        return "-webkit-" + s + "-ms-flex-" + s + s;
      case 1023:
        if (s.charCodeAt(8) !== 99) break;
        return p = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + p + "-webkit-" + s + "-ms-flex-pack" + p + s;
      case 1005:
        return R.test(s) ? s.replace(F, ":-webkit-") + s.replace(F, ":-moz-") + s : s;
      case 1e3:
        switch (p = s.substring(13).trim(), m = p.indexOf("-") + 1, p.charCodeAt(0) + p.charCodeAt(m)) {
          case 226:
            p = s.replace(c, "tb");
            break;
          case 232:
            p = s.replace(c, "tb-rl");
            break;
          case 220:
            p = s.replace(c, "lr");
            break;
          default:
            return s;
        }
        return "-webkit-" + s + "-ms-" + p + s;
      case 1017:
        if (s.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (m = (s = b).length - 10, p = (s.charCodeAt(m) === 33 ? s.substring(0, m) : s).substring(b.indexOf(":", 7) + 1).trim(), w = p.charCodeAt(0) + (p.charCodeAt(7) | 0)) {
          case 203:
            if (111 > p.charCodeAt(8)) break;
          case 115:
            s = s.replace(p, "-webkit-" + p) + ";" + s;
            break;
          case 207:
          case 102:
            s = s.replace(p, "-webkit-" + (102 < w ? "inline-" : "") + "box") + ";" + s.replace(p, "-webkit-" + p) + ";" + s.replace(p, "-ms-" + p + "box") + ";" + s;
        }
        return s + ";";
      case 938:
        if (s.charCodeAt(5) === 45) switch (s.charCodeAt(6)) {
          case 105:
            return p = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + p + "-ms-flex-" + p + s;
          case 115:
            return "-webkit-" + s + "-ms-flex-item-" + s.replace(oe, "") + s;
          default:
            return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(oe, "") + s;
        }
        break;
      case 973:
      case 989:
        if (s.charCodeAt(3) !== 45 || s.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(b) === !0) return (p = b.substring(b.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(b.replace("stretch", "fill-available"), m, y, A).replace(":fill-available", ":stretch") : s.replace(p, "-webkit-" + p) + s.replace(p, "-moz-" + p.replace("fill-", "")) + s;
        break;
      case 962:
        if (s = "-webkit-" + s + (s.charCodeAt(5) === 102 ? "-ms-" + s : "") + s, y + A === 211 && s.charCodeAt(13) === 105 && 0 < s.indexOf("transform", 10)) return s.substring(0, s.indexOf(";", 27) + 1).replace(P, "$1-webkit-$2") + s;
    }
    return s;
  }
  function i(b, m) {
    var y = b.indexOf(m === 1 ? ":" : "{"), A = b.substring(0, m !== 3 ? y : 10);
    return y = b.substring(y + 1, b.length - 1), De(m !== 2 ? A : A.replace(ue, "$1"), y, m);
  }
  function l(b, m) {
    var y = o(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return y !== m + ";" ? y.replace(J, " or ($1)").substring(4) : "(" + m + ")";
  }
  function u(b, m, y, A, s, w, p, W, z, j) {
    for (var N = 0, Q = m, Z; N < pe; ++N)
      switch (Z = he[N].call(S, b, Q, y, A, s, w, p, W, z, j)) {
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
        else if (typeof b == "object") for (var m = 0, y = b.length; m < y; ++m)
          d(b[m]);
        else Ce = !!b | 0;
    }
    return d;
  }
  function v(b) {
    return b = b.prefix, b !== void 0 && (De = null, b ? typeof b != "function" ? te = 1 : (te = 2, De = b) : te = 0), v;
  }
  function S(b, m) {
    var y = b;
    if (33 > y.charCodeAt(0) && (y = y.trim()), Fe = y, y = [Fe], 0 < pe) {
      var A = u(-1, m, y, y, q, ie, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (m = A);
    }
    var s = r(Ee, y, m, 0, 0);
    return 0 < pe && (A = u(-2, s, y, y, q, ie, s.length, 0, 0, 0), A !== void 0 && (s = A)), Fe = "", fe = 0, ie = q = 1, s;
  }
  var C = /^\0+/g, L = /[\0\r\f]/g, F = /: */g, R = /zoo|gra/, P = /([,: ])(transform)/g, h = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, T = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, E = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, V = /\(\s*(.*)\s*\)/g, J = /([\s\S]*?);/g, oe = /-self|flex-/g, ue = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, Ie = /([^-])(image-set\()/, ie = 1, q = 1, fe = 0, te = 1, Ee = [], he = [], pe = 0, De = null, Ce = 0, Fe = "";
  return S.use = d, S.set = v, e !== void 0 && v(e), S;
}
var ta = {
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
function ra(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var na = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cr = /* @__PURE__ */ ra(
  function(e) {
    return na.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qt = $r(), aa = {
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
}, oa = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ia = {
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
Xt[qt.ForwardRef] = ia;
Xt[qt.Memo] = Vr;
function Or(e) {
  return qt.isMemo(e) ? Vr : Xt[e.$$typeof] || aa;
}
var sa = Object.defineProperty, la = Object.getOwnPropertyNames, Rr = Object.getOwnPropertySymbols, ca = Object.getOwnPropertyDescriptor, ua = Object.getPrototypeOf, kr = Object.prototype;
function Yr(e, r, t) {
  if (typeof r != "string") {
    if (kr) {
      var n = ua(r);
      n && n !== kr && Yr(e, n, t);
    }
    var o = la(r);
    Rr && (o = o.concat(Rr(r)));
    for (var i = Or(e), l = Or(r), u = 0; u < o.length; ++u) {
      var d = o[u];
      if (!oa[d] && !(t && t[d]) && !(l && l[d]) && !(i && i[d])) {
        var v = ca(r, d);
        try {
          sa(e, d, v);
        } catch {
        }
      }
    }
  }
  return e;
}
var fa = Yr;
const pa = /* @__PURE__ */ Gt(fa);
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
}, jt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Yt.typeOf(e);
}, mt = Object.freeze([]), Le = Object.freeze({});
function Je(e) {
  return typeof e == "function";
}
function Ht(e) {
  return B.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ve = typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_ATTR || B.env.SC_ATTR) || "data-styled", Kt = typeof window < "u" && "HTMLElement" in window, da = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && B.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? B.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && B.env.REACT_APP_SC_DISABLE_SPEEDY : B.env.SC_DISABLE_SPEEDY !== void 0 && B.env.SC_DISABLE_SPEEDY !== "" ? B.env.SC_DISABLE_SPEEDY !== "false" && B.env.SC_DISABLE_SPEEDY : B.env.NODE_ENV !== "production")), ma = B.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ha() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw B.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ha.apply(void 0, [ma[e]].concat(t)).trim());
}
var ga = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, l = i; t >= l; ) (l <<= 1) < 0 && qe(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var u = i; u < l; u++) this.groupSizes[u] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), v = 0, S = n.length; v < S; v++) this.tag.insertRule(d, n[v]) && (this.groupSizes[t]++, d++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < i; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], i = this.indexOfGroup(t), l = i + o, u = i; u < l; u++) n += this.tag.getRule(u) + `/*!sc*/
`;
    return n;
  }, e;
}(), ft = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Qe = 1, it = function(e) {
  if (ft.has(e)) return ft.get(e);
  for (; ht.has(Qe); ) Qe++;
  var r = Qe++;
  return B.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && qe(16, "" + r), ft.set(e, r), ht.set(r, e), r;
}, va = function(e) {
  return ht.get(e);
}, ya = function(e, r) {
  r >= Qe && (Qe = r + 1), ft.set(e, r), ht.set(r, e);
}, ba = "style[" + Ve + '][data-styled-version="5.3.11"]', Aa = new RegExp("^" + Ve + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), _a = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, l = o.length; i < l; i++) (n = o[i]) && e.registerName(r, n);
}, Sa = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, i = t.length; o < i; o++) {
    var l = t[o].trim();
    if (l) {
      var u = l.match(Aa);
      if (u) {
        var d = 0 | parseInt(u[1], 10), v = u[2];
        d !== 0 && (ya(v, d), _a(e, v, u[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, wa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, qr = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(u) {
    for (var d = u.childNodes, v = d.length; v >= 0; v--) {
      var S = d[v];
      if (S && S.nodeType === 1 && S.hasAttribute(Ve)) return S;
    }
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ve, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = wa();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, i), n;
}, Ta = function() {
  function e(t) {
    var n = this.element = qr(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, l = 0, u = i.length; l < u; l++) {
        var d = i[l];
        if (d.ownerNode === o) return d;
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
}(), Ea = function() {
  function e(t) {
    var n = this.element = qr(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), i = this.nodes[t];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Ca = function() {
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
}(), Nr = Kt, Oa = { isServer: !Kt, useCSSOMInjection: !da }, Xr = function() {
  function e(t, n, o) {
    t === void 0 && (t = Le), n === void 0 && (n = {}), this.options = Ne({}, Oa, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Kt && Nr && (Nr = !1, function(i) {
      for (var l = document.querySelectorAll(ba), u = 0, d = l.length; u < d; u++) {
        var v = l[u];
        v && v.getAttribute(Ve) !== "active" && (Sa(i, v), v.parentNode && v.parentNode.removeChild(v));
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
    return this.tag || (this.tag = (o = (n = this.options).isServer, i = n.useCSSOMInjection, l = n.target, t = o ? new Ca(l) : i ? new Ta(l) : new Ea(l), new ga(t)));
    var t, n, o, i, l;
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
      for (var n = t.getTag(), o = n.length, i = "", l = 0; l < o; l++) {
        var u = va(l);
        if (u !== void 0) {
          var d = t.names.get(u), v = n.getGroup(l);
          if (d && v && d.size) {
            var S = Ve + ".g" + l + '[id="' + u + '"]', C = "";
            d !== void 0 && d.forEach(function(L) {
              L.length > 0 && (C += L + ",");
            }), i += "" + v + S + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Ra = /(a)(d)/gi, Ir = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Ir(r % 52) + t;
  return (Ir(r % 52) + t).replace(Ra, "$1-$2");
}
var Ue = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Zr = function(e) {
  return Ue(5381, e);
};
function ka(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Je(t) && !Zt(t)) return !1;
  }
  return !0;
}
var xa = Zr("5.3.11"), Na = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = B.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ka(r), this.componentId = t, this.baseHash = Ue(xa, t), this.baseStyle = n, Xr.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = Ye(this.rules, r, t, n).join(""), u = zt(Ue(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, u)) {
        var d = n(l, "." + u, void 0, o);
        t.insertRules(o, u, d);
      }
      i.push(u), this.staticRulesId = u;
    }
    else {
      for (var v = this.rules.length, S = Ue(this.baseHash, n.hash), C = "", L = 0; L < v; L++) {
        var F = this.rules[L];
        if (typeof F == "string") C += F, B.env.NODE_ENV !== "production" && (S = Ue(S, F + L));
        else if (F) {
          var R = Ye(F, r, t, n), P = Array.isArray(R) ? R.join("") : R;
          S = Ue(S, P + L), C += P;
        }
      }
      if (C) {
        var h = zt(S >>> 0);
        if (!t.hasNameForId(o, h)) {
          var I = n(C, "." + h, void 0, o);
          t.insertRules(o, h, I);
        }
        i.push(h);
      }
    }
    return i.join(" ");
  }, e;
}(), Ia = /^\s*\/\/.*$/gm, Ma = [":", "[", ".", "#"];
function Pa(e) {
  var r, t, n, o, i = Le, l = i.options, u = l === void 0 ? Le : l, d = i.plugins, v = d === void 0 ? mt : d, S = new ea(u), C = [], L = /* @__PURE__ */ function(P) {
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
    return h === 0 && Ma.indexOf(I[t.length]) !== -1 || I.match(o) ? P : "." + r;
  };
  function R(P, h, I, T) {
    T === void 0 && (T = "&");
    var k = P.replace(Ia, ""), E = h && I ? I + " " + h + " { " + k + " }" : k;
    return r = T, t = h, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), S(I || !h ? "" : h, E);
  }
  return S.use([].concat(v, [function(P, h, I) {
    P === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(n, F));
  }, L, function(P) {
    if (P === -2) {
      var h = C;
      return C = [], h;
    }
  }])), R.hash = v.length ? v.reduce(function(P, h) {
    return h.name || qe(15), Ue(P, h.name);
  }, 5381).toString() : "", R;
}
var Kr = $e.createContext();
Kr.Consumer;
var Qr = $e.createContext(), La = (Qr.Consumer, new Xr()), Ut = Pa();
function Da() {
  return Wt(Kr) || La;
}
function Fa() {
  return Wt(Qr) || Ut;
}
var ja = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ut);
      var l = n.name + i.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, i(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return qe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ut), this.name + r.hash;
  }, e;
}(), Ha = /([A-Z])/, za = /([A-Z])/g, Ua = /^ms-/, $a = function(e) {
  return "-" + e.toLowerCase();
};
function Mr(e) {
  return Ha.test(e) ? e.replace(za, $a).replace(Ua, "-ms-") : e;
}
var Pr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, u = e.length; l < u; l += 1) (o = Ye(e[l], r, t, n)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Pr(e)) return "";
  if (Zt(e)) return "." + e.styledComponentId;
  if (Je(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !r) return e;
    var d = e(r);
    return B.env.NODE_ENV !== "production" && Yt.isElement(d) && console.warn(Ht(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ye(d, r, t, n);
  }
  var v;
  return e instanceof ja ? t ? (e.inject(t, n), e.getName(n)) : e : jt(e) ? function S(C, L) {
    var F, R, P = [];
    for (var h in C) C.hasOwnProperty(h) && !Pr(C[h]) && (Array.isArray(C[h]) && C[h].isCss || Je(C[h]) ? P.push(Mr(h) + ":", C[h], ";") : jt(C[h]) ? P.push.apply(P, S(C[h], h)) : P.push(Mr(h) + ": " + (F = h, (R = C[h]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || F in ta || F.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return L ? [L + " {"].concat(P, ["}"]) : P;
  }(e) : e.toString();
}
var Lr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ba(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Je(e) || jt(e) ? Lr(Ye(xr(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Lr(Ye(xr(e, t)));
}
var Dr = /invalid hook call/i, st = /* @__PURE__ */ new Set(), Wa = function(e, r) {
  if (B.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (Dr.test(i)) o = !1, st.delete(t);
        else {
          for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++) u[d - 1] = arguments[d];
          n.apply(void 0, [i].concat(u));
        }
      }, jr(), o && !st.has(t) && (console.warn(t), st.add(t));
    } catch (i) {
      Dr.test(i.message) && st.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Ga = function(e, r, t) {
  return t === void 0 && (t = Le), e.theme !== t.theme && e.theme || r || t.theme;
}, Va = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ya = /(^-|-$)/g;
function It(e) {
  return e.replace(Va, "-").replace(Ya, "");
}
var qa = function(e) {
  return zt(Zr(e) >>> 0);
};
function lt(e) {
  return typeof e == "string" && (B.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $t = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Xa = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Za(e, r, t) {
  var n = e[t];
  $t(r) && $t(n) ? Jr(n, r) : e[t] = r;
}
function Jr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, i = t; o < i.length; o++) {
    var l = i[o];
    if ($t(l)) for (var u in l) Xa(u) && Za(e, l[u], u);
  }
  return e;
}
var en = $e.createContext();
en.Consumer;
var Mt = {};
function tn(e, r, t) {
  var n = Zt(e), o = !lt(e), i = r.attrs, l = i === void 0 ? mt : i, u = r.componentId, d = u === void 0 ? function(T, k) {
    var E = typeof T != "string" ? "sc" : It(T);
    Mt[E] = (Mt[E] || 0) + 1;
    var c = E + "-" + qa("5.3.11" + E + Mt[E]);
    return k ? k + "-" + c : c;
  }(r.displayName, r.parentComponentId) : u, v = r.displayName, S = v === void 0 ? function(T) {
    return lt(T) ? "styled." + T : "Styled(" + Ht(T) + ")";
  }(e) : v, C = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || d, L = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, F = r.shouldForwardProp;
  n && e.shouldForwardProp && (F = r.shouldForwardProp ? function(T, k, E) {
    return e.shouldForwardProp(T, k, E) && r.shouldForwardProp(T, k, E);
  } : e.shouldForwardProp);
  var R, P = new Na(t, C, n ? e.componentStyle : void 0), h = P.isStatic && l.length === 0, I = function(T, k) {
    return function(E, c, V, J) {
      var oe = E.attrs, ue = E.componentStyle, we = E.defaultProps, Ie = E.foldedComponentIds, ie = E.shouldForwardProp, q = E.styledComponentId, fe = E.target, te = function(A, s, w) {
        A === void 0 && (A = Le);
        var p = Ne({}, s, { theme: A }), W = {};
        return w.forEach(function(z) {
          var j, N, Q, Z = z;
          for (j in Je(Z) && (Z = Z(p)), Z) p[j] = W[j] = j === "className" ? (N = W[j], Q = Z[j], N && Q ? N + " " + Q : N || Q) : Z[j];
        }), [p, W];
      }(Ga(c, Wt(en), we) || Le, c, oe), Ee = te[0], he = te[1], pe = function(A, s, w, p) {
        var W = Da(), z = Fa(), j = s ? A.generateAndInjectStyles(Le, W, z) : A.generateAndInjectStyles(w, W, z);
        return B.env.NODE_ENV !== "production" && !s && p && p(j), j;
      }(ue, J, Ee, B.env.NODE_ENV !== "production" ? E.warnTooManyClasses : void 0), De = V, Ce = he.$as || c.$as || he.as || c.as || fe, Fe = lt(Ce), b = he !== c ? Ne({}, c, {}, he) : c, m = {};
      for (var y in b) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? m.as = b[y] : (ie ? ie(y, Cr, Ce) : !Fe || Cr(y)) && (m[y] = b[y]));
      return c.style && he.style !== c.style && (m.style = Ne({}, c.style, {}, he.style)), m.className = Array.prototype.concat(Ie, q, pe !== q ? pe : null, c.className, he.className).filter(Boolean).join(" "), m.ref = De, fn(Ce, m);
    }(R, T, k, h);
  };
  return I.displayName = S, (R = $e.forwardRef(I)).attrs = L, R.componentStyle = P, R.displayName = S, R.shouldForwardProp = F, R.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, R.styledComponentId = C, R.target = n ? e.target : e, R.withComponent = function(T) {
    var k = r.componentId, E = function(V, J) {
      if (V == null) return {};
      var oe, ue, we = {}, Ie = Object.keys(V);
      for (ue = 0; ue < Ie.length; ue++) oe = Ie[ue], J.indexOf(oe) >= 0 || (we[oe] = V[oe]);
      return we;
    }(r, ["componentId"]), c = k && k + "-" + (lt(T) ? T : It(Ht(T)));
    return tn(T, Ne({}, E, { attrs: L, componentId: c }), t);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = n ? Jr({}, e.defaultProps, T) : T;
  } }), B.env.NODE_ENV !== "production" && (Wa(S, C), R.warnTooManyClasses = /* @__PURE__ */ function(T, k) {
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
  } }), o && pa(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var Bt = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Le), !Yt.isValidElementType(n)) return qe(1, String(n));
    var i = function() {
      return t(n, o, Ba.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return r(t, n, Ne({}, o, {}, l));
    }, i.attrs = function(l) {
      return r(t, n, Ne({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, i;
  }(tn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Bt[e] = Bt(e);
});
B.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), B.env.NODE_ENV !== "production" && B.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ka = Bt.div`
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
`, pt = "On This Page", Qa = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: pt
}, Ja = ({
  items: e,
  firstElementId: r,
  focusFirstFocusableElement: t = !1
}) => {
  const n = jr(null), o = yn("(max-width: 991px)"), [i, l] = Fr({
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
    const E = i.hasHeader ? u + k : k;
    e == null || e.forEach(({ targetIdName: V }) => {
      const J = document.getElementById(V), oe = (J == null ? void 0 : J.getBoundingClientRect().top) - E, ue = (J == null ? void 0 : J.getBoundingClientRect().bottom) - E;
      oe < 0 && ue > 0 && (h.activeContainer = V);
    }), l((V) => ({
      ...V,
      ...h
    }));
  }, v = () => {
    qn(d, 150), Xn(d, 150);
  }, S = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), C = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function L(h = null) {
    if (h === null) return i.containerClass;
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
    return I.length > 0 ? I.join(" ") : L(h.parentElement);
  }
  Pt(() => {
    const h = document.getElementById(r) || null, I = {
      hasHeader: S(),
      hasAltMenuSpacing: C(),
      containerClass: L(h)
    };
    l((T) => ({
      ...T,
      ...I
    }));
  }, []), Pt(() => (window == null || window.addEventListener("scroll", v), () => window.removeEventListener("scroll", v)), [i.hasHeader]);
  const F = (h) => {
    var E, c;
    const I = window.scrollY - (i.hasHeader ? u + 100 : 100), T = o ? 410 : 90;
    let k = ((E = document.getElementById(h)) == null ? void 0 : E.getBoundingClientRect().top) + I;
    n.current.classList.contains("sticky") || (k -= T), t && ((c = Yn(`#${h}`)) == null || c.focus()), window.scrollTo({ top: k, behavior: "smooth" });
  }, R = () => {
    Gr({
      ...Qa,
      action: i.showMenu ? "close" : "open"
    });
  }, P = () => {
    l((h) => ({
      ...h,
      showMenu: !h.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ ye.jsx(
    Ka,
    {
      requiresAltMenuSpacing: i.hasAltMenuSpacing,
      ref: n,
      className: Ge(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: i.sticky,
          "with-header": i.hasHeader
        }
      ),
      style: i.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ ye.jsxs("div", { className: `${i.containerClass} uds-anchor-menu-wrapper`, children: [
        o ? /* @__PURE__ */ ye.jsx(
          "button",
          {
            className: Ge("mobile-menu-toggler", {
              "show-menu": i.showMenu
            }),
            type: "button",
            onClick: () => {
              R(), P();
            },
            "data-bs-toggle": "collapse",
            "data-bs-target": "#collapseAnchorMenu",
            "aria-controls": "collapseAnchorMenu",
            children: /* @__PURE__ */ ye.jsxs("h4", { children: [
              pt,
              ":",
              /* @__PURE__ */ ye.jsx("i", { className: "fas fa-chevron-down" })
            ] })
          }
        ) : /* @__PURE__ */ ye.jsxs("h4", { children: [
          pt,
          ":"
        ] }),
        /* @__PURE__ */ ye.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: Ge("card", "card-body", "collapse", {
              show: i.showMenu
            }),
            children: /* @__PURE__ */ ye.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": pt,
                children: e == null ? void 0 : e.map((h) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ ye.jsx(
                    Vt,
                    {
                      "data-testid": `anchor-item-${h.targetIdName}`,
                      classes: Ge("nav-link", {
                        active: i.activeContainer === h.targetIdName
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
Ja.propTypes = {
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
  Ja as AnchorMenu
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
