import $e, { useRef as Je, useContext as Wt, createElement as on, forwardRef as sn, useImperativeHandle as ln, useState as St, useEffect as Xe, useCallback as cn } from "react";
function Dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lr = { exports: {} }, Ke = {};
var ur;
function un() {
  if (ur) return Ke;
  ur = 1;
  var e = $e, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, p, v) {
    var A, T = {}, I = null, M = null;
    v !== void 0 && (I = "" + v), p.key !== void 0 && (I = "" + p.key), p.ref !== void 0 && (M = p.ref);
    for (A in p) n.call(p, A) && !l.hasOwnProperty(A) && (T[A] = p[A]);
    if (f && f.defaultProps) for (A in p = f.defaultProps, p) T[A] === void 0 && (T[A] = p[A]);
    return { $$typeof: r, type: f, key: I, ref: M, props: T, _owner: o.current };
  }
  return Ke.Fragment = t, Ke.jsx = s, Ke.jsxs = s, Ke;
}
Lr.exports = un();
var ce = Lr.exports, Mr = { exports: {} }, Tt = { exports: {} }, W = {};
var fr;
function fn() {
  if (fr) return W;
  fr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, T = e ? Symbol.for("react.suspense") : 60113, I = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, D = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, F = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function k(c) {
    if (typeof c == "object" && c !== null) {
      var X = c.$$typeof;
      switch (X) {
        case r:
          switch (c = c.type, c) {
            case p:
            case v:
            case n:
            case l:
            case o:
            case T:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case f:
                case A:
                case w:
                case M:
                case s:
                  return c;
                default:
                  return X;
              }
          }
        case t:
          return X;
      }
    }
  }
  function C(c) {
    return k(c) === v;
  }
  return W.AsyncMode = p, W.ConcurrentMode = v, W.ContextConsumer = f, W.ContextProvider = s, W.Element = r, W.ForwardRef = A, W.Fragment = n, W.Lazy = w, W.Memo = M, W.Portal = t, W.Profiler = l, W.StrictMode = o, W.Suspense = T, W.isAsyncMode = function(c) {
    return C(c) || k(c) === p;
  }, W.isConcurrentMode = C, W.isContextConsumer = function(c) {
    return k(c) === f;
  }, W.isContextProvider = function(c) {
    return k(c) === s;
  }, W.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, W.isForwardRef = function(c) {
    return k(c) === A;
  }, W.isFragment = function(c) {
    return k(c) === n;
  }, W.isLazy = function(c) {
    return k(c) === w;
  }, W.isMemo = function(c) {
    return k(c) === M;
  }, W.isPortal = function(c) {
    return k(c) === t;
  }, W.isProfiler = function(c) {
    return k(c) === l;
  }, W.isStrictMode = function(c) {
    return k(c) === o;
  }, W.isSuspense = function(c) {
    return k(c) === T;
  }, W.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === v || c === l || c === o || c === T || c === I || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === M || c.$$typeof === s || c.$$typeof === f || c.$$typeof === A || c.$$typeof === E || c.$$typeof === F || c.$$typeof === O || c.$$typeof === D);
  }, W.typeOf = k, W;
}
var pr;
function Fr() {
  return pr || (pr = 1, Tt.exports = fn()), Tt.exports;
}
var wt, dr;
function pn() {
  if (dr) return wt;
  dr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wt = e, wt;
}
var Et, mr;
function dn() {
  if (mr) return Et;
  mr = 1;
  var e = pn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Et = function() {
    function n(s, f, p, v, A, T) {
      if (T !== e) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var l = {
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
    return l.PropTypes = l, l;
  }, Et;
}
Mr.exports = dn()();
var mn = Mr.exports;
const H = /* @__PURE__ */ Dr(mn);
function De(e) {
  "@babel/helpers - typeof";
  return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, De(e);
}
function Dt(e, r) {
  return Dt = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Dt(e, r);
}
function hn() {
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
  return hn() ? ut = Reflect.construct : ut = function(o, l, s) {
    var f = [null];
    f.push.apply(f, l);
    var p = Function.bind.apply(o, f), v = new p();
    return s && Dt(v, s.prototype), v;
  }, ut.apply(null, arguments);
}
function we(e) {
  return vn(e) || yn(e) || gn(e) || bn();
}
function vn(e) {
  if (Array.isArray(e)) return Lt(e);
}
function yn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gn(e, r) {
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
function bn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var An = Object.hasOwnProperty, hr = Object.setPrototypeOf, _n = Object.isFrozen, Sn = Object.getPrototypeOf, Tn = Object.getOwnPropertyDescriptor, fe = Object.freeze, _e = Object.seal, wn = Object.create, jr = typeof Reflect < "u" && Reflect, dt = jr.apply, Mt = jr.construct;
dt || (dt = function(r, t, n) {
  return r.apply(t, n);
});
fe || (fe = function(r) {
  return r;
});
_e || (_e = function(r) {
  return r;
});
Mt || (Mt = function(r, t) {
  return ut(r, we(t));
});
var En = Se(Array.prototype.forEach), vr = Se(Array.prototype.pop), Ze = Se(Array.prototype.push), ft = Se(String.prototype.toLowerCase), Ct = Se(String.prototype.toString), yr = Se(String.prototype.match), Te = Se(String.prototype.replace), Cn = Se(String.prototype.indexOf), Rn = Se(String.prototype.trim), se = Se(RegExp.prototype.test), Rt = On(TypeError);
function Se(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    return dt(e, r, n);
  };
}
function On(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Mt(e, t);
  };
}
function P(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : ft, hr && hr(e, null);
  for (var o = r.length; o--; ) {
    var l = r[o];
    if (typeof l == "string") {
      var s = t(l);
      s !== l && (_n(r) || (r[o] = s), l = s);
    }
    e[l] = !0;
  }
  return e;
}
function Ue(e) {
  var r = wn(null), t;
  for (t in e)
    dt(An, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function ot(e, r) {
  for (; e !== null; ) {
    var t = Tn(e, r);
    if (t) {
      if (t.get)
        return Se(t.get);
      if (typeof t.value == "function")
        return Se(t.value);
    }
    e = Sn(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var gr = fe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = fe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), kt = fe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), kn = fe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xt = fe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), xn = fe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), br = fe(["#text"]), Ar = fe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Nt = fe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _r = fe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), it = fe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nn = _e(/\{\{[\w\W]*|[\w\W]*\}\}/gm), In = _e(/<%[\w\W]*|[\w\W]*%>/gm), Pn = _e(/\${[\w\W]*}/gm), Dn = _e(/^data-[\-\w.\u00B7-\uFFFF]/), Ln = _e(/^aria-[\-\w]+$/), Mn = _e(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Fn = _e(/^(?:\w+script|data):/i), jn = _e(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), zn = _e(/^html$/i), Un = _e(/^[a-z][.\w]*(-[.\w]+)+$/i), Hn = function() {
  return typeof window > "u" ? null : window;
}, $n = function(r, t) {
  if (De(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, o = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
  var l = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(l, {
      createHTML: function(f) {
        return f;
      },
      createScriptURL: function(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function zr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hn(), r = function(a) {
    return zr(a);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, o = e.DocumentFragment, l = e.HTMLTemplateElement, s = e.Node, f = e.Element, p = e.NodeFilter, v = e.NamedNodeMap, A = v === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : v, T = e.HTMLFormElement, I = e.DOMParser, M = e.trustedTypes, w = f.prototype, D = ot(w, "cloneNode"), E = ot(w, "nextSibling"), F = ot(w, "childNodes"), O = ot(w, "parentNode");
  if (typeof l == "function") {
    var k = n.createElement("template");
    k.content && k.content.ownerDocument && (n = k.content.ownerDocument);
  }
  var C = $n(M, t), c = C ? C.createHTML("") : "", X = n, R = X.implementation, G = X.createNodeIterator, re = X.createDocumentFragment, ye = X.getElementsByTagName, pe = t.importNode, ne = {};
  try {
    ne = Ue(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var K = {};
  r.isSupported = typeof O == "function" && R && R.createHTMLDocument !== void 0 && ne !== 9;
  var de = Nn, ae = In, Ce = Pn, ge = Dn, me = Ln, Me = Fn, Re = jn, Fe = Un, g = Mn, m = null, y = P({}, [].concat(we(gr), we(Ot), we(kt), we(xt), we(br))), b = null, i = P({}, [].concat(we(Ar), we(Nt), we(_r), we(it))), S = Object.seal(Object.create(null, {
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
  })), d = null, V = null, U = !0, j = !0, N = !1, ee = !0, Q = !1, L = !0, q = !1, z = !1, J = !1, be = !1, Z = !1, Oe = !1, Pe = !0, he = !1, x = "user-content-", Y = !0, ke = !1, Ee = {}, ue = null, Xt = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Kt = null, Zt = P({}, ["audio", "video", "img", "source", "image", "track"]), vt = null, Qt = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), tt = "http://www.w3.org/1998/Math/MathML", rt = "http://www.w3.org/2000/svg", xe = "http://www.w3.org/1999/xhtml", We = xe, yt = !1, gt = null, Qr = P({}, [tt, rt, xe], Ct), je, Jr = ["application/xhtml+xml", "text/html"], en = "text/html", oe, Be = null, tn = n.createElement("form"), Jt = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, bt = function(a) {
    Be && Be === a || ((!a || De(a) !== "object") && (a = {}), a = Ue(a), je = // eslint-disable-next-line unicorn/prefer-includes
    Jr.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? je = en : je = a.PARSER_MEDIA_TYPE, oe = je === "application/xhtml+xml" ? Ct : ft, m = "ALLOWED_TAGS" in a ? P({}, a.ALLOWED_TAGS, oe) : y, b = "ALLOWED_ATTR" in a ? P({}, a.ALLOWED_ATTR, oe) : i, gt = "ALLOWED_NAMESPACES" in a ? P({}, a.ALLOWED_NAMESPACES, Ct) : Qr, vt = "ADD_URI_SAFE_ATTR" in a ? P(
      Ue(Qt),
      // eslint-disable-line indent
      a.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      oe
      // eslint-disable-line indent
    ) : Qt, Kt = "ADD_DATA_URI_TAGS" in a ? P(
      Ue(Zt),
      // eslint-disable-line indent
      a.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      oe
      // eslint-disable-line indent
    ) : Zt, ue = "FORBID_CONTENTS" in a ? P({}, a.FORBID_CONTENTS, oe) : Xt, d = "FORBID_TAGS" in a ? P({}, a.FORBID_TAGS, oe) : {}, V = "FORBID_ATTR" in a ? P({}, a.FORBID_ATTR, oe) : {}, Ee = "USE_PROFILES" in a ? a.USE_PROFILES : !1, U = a.ALLOW_ARIA_ATTR !== !1, j = a.ALLOW_DATA_ATTR !== !1, N = a.ALLOW_UNKNOWN_PROTOCOLS || !1, ee = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = a.SAFE_FOR_TEMPLATES || !1, L = a.SAFE_FOR_XML !== !1, q = a.WHOLE_DOCUMENT || !1, be = a.RETURN_DOM || !1, Z = a.RETURN_DOM_FRAGMENT || !1, Oe = a.RETURN_TRUSTED_TYPE || !1, J = a.FORCE_BODY || !1, Pe = a.SANITIZE_DOM !== !1, he = a.SANITIZE_NAMED_PROPS || !1, Y = a.KEEP_CONTENT !== !1, ke = a.IN_PLACE || !1, g = a.ALLOWED_URI_REGEXP || g, We = a.NAMESPACE || xe, S = a.CUSTOM_ELEMENT_HANDLING || {}, a.CUSTOM_ELEMENT_HANDLING && Jt(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (S.tagNameCheck = a.CUSTOM_ELEMENT_HANDLING.tagNameCheck), a.CUSTOM_ELEMENT_HANDLING && Jt(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (S.attributeNameCheck = a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), a.CUSTOM_ELEMENT_HANDLING && typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (S.allowCustomizedBuiltInElements = a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Q && (j = !1), Z && (be = !0), Ee && (m = P({}, we(br)), b = [], Ee.html === !0 && (P(m, gr), P(b, Ar)), Ee.svg === !0 && (P(m, Ot), P(b, Nt), P(b, it)), Ee.svgFilters === !0 && (P(m, kt), P(b, Nt), P(b, it)), Ee.mathMl === !0 && (P(m, xt), P(b, _r), P(b, it))), a.ADD_TAGS && (m === y && (m = Ue(m)), P(m, a.ADD_TAGS, oe)), a.ADD_ATTR && (b === i && (b = Ue(b)), P(b, a.ADD_ATTR, oe)), a.ADD_URI_SAFE_ATTR && P(vt, a.ADD_URI_SAFE_ATTR, oe), a.FORBID_CONTENTS && (ue === Xt && (ue = Ue(ue)), P(ue, a.FORBID_CONTENTS, oe)), Y && (m["#text"] = !0), q && P(m, ["html", "head", "body"]), m.table && (P(m, ["tbody"]), delete d.tbody), fe && fe(a), Be = a);
  }, er = P({}, ["mi", "mo", "mn", "ms", "mtext"]), tr = P({}, ["annotation-xml"]), rn = P({}, ["title", "style", "font", "a", "script"]), nt = P({}, Ot);
  P(nt, kt), P(nt, kn);
  var At = P({}, xt);
  P(At, xn);
  var nn = function(a) {
    var u = O(a);
    (!u || !u.tagName) && (u = {
      namespaceURI: We,
      tagName: "template"
    });
    var h = ft(a.tagName), $ = ft(u.tagName);
    return gt[a.namespaceURI] ? a.namespaceURI === rt ? u.namespaceURI === xe ? h === "svg" : u.namespaceURI === tt ? h === "svg" && ($ === "annotation-xml" || er[$]) : !!nt[h] : a.namespaceURI === tt ? u.namespaceURI === xe ? h === "math" : u.namespaceURI === rt ? h === "math" && tr[$] : !!At[h] : a.namespaceURI === xe ? u.namespaceURI === rt && !tr[$] || u.namespaceURI === tt && !er[$] ? !1 : !At[h] && (rn[h] || !nt[h]) : !!(je === "application/xhtml+xml" && gt[a.namespaceURI]) : !1;
  }, Ae = function(a) {
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
  }, at = function(a, u) {
    try {
      Ze(r.removed, {
        attribute: u.getAttributeNode(a),
        from: u
      });
    } catch {
      Ze(r.removed, {
        attribute: null,
        from: u
      });
    }
    if (u.removeAttribute(a), a === "is" && !b[a])
      if (be || Z)
        try {
          Ae(u);
        } catch {
        }
      else
        try {
          u.setAttribute(a, "");
        } catch {
        }
  }, rr = function(a) {
    var u, h;
    if (J)
      a = "<remove></remove>" + a;
    else {
      var $ = yr(a, /^[\r\n\t ]+/);
      h = $ && $[0];
    }
    je === "application/xhtml+xml" && We === xe && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    var ve = C ? C.createHTML(a) : a;
    if (We === xe)
      try {
        u = new I().parseFromString(ve, je);
      } catch {
      }
    if (!u || !u.documentElement) {
      u = R.createDocument(We, "template", null);
      try {
        u.documentElement.innerHTML = yt ? c : ve;
      } catch {
      }
    }
    var le = u.body || u.documentElement;
    return a && h && le.insertBefore(n.createTextNode(h), le.childNodes[0] || null), We === xe ? ye.call(u, q ? "html" : "body")[0] : q ? u.documentElement : le;
  }, nr = function(a) {
    return G.call(
      a.ownerDocument || a,
      a,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ar = function(a) {
    return a instanceof T && (typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || !(a.attributes instanceof A) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function");
  }, qe = function(a) {
    return De(s) === "object" ? a instanceof s : a && De(a) === "object" && typeof a.nodeType == "number" && typeof a.nodeName == "string";
  }, Ne = function(a, u, h) {
    K[a] && En(K[a], function($) {
      $.call(r, u, h, Be);
    });
  }, or = function(a) {
    var u;
    if (Ne("beforeSanitizeElements", a, null), ar(a) || se(/[\u0080-\uFFFF]/, a.nodeName))
      return Ae(a), !0;
    var h = oe(a.nodeName);
    if (Ne("uponSanitizeElement", a, {
      tagName: h,
      allowedTags: m
    }), a.hasChildNodes() && !qe(a.firstElementChild) && (!qe(a.content) || !qe(a.content.firstElementChild)) && se(/<[/\w]/g, a.innerHTML) && se(/<[/\w]/g, a.textContent) || h === "select" && se(/<template/i, a.innerHTML) || a.nodeType === 7 || L && a.nodeType === 8 && se(/<[/\w]/g, a.data))
      return Ae(a), !0;
    if (!m[h] || d[h]) {
      if (!d[h] && sr(h) && (S.tagNameCheck instanceof RegExp && se(S.tagNameCheck, h) || S.tagNameCheck instanceof Function && S.tagNameCheck(h)))
        return !1;
      if (Y && !ue[h]) {
        var $ = O(a) || a.parentNode, ve = F(a) || a.childNodes;
        if (ve && $)
          for (var le = ve.length, ie = le - 1; ie >= 0; --ie) {
            var ze = D(ve[ie], !0);
            ze.__removalCount = (a.__removalCount || 0) + 1, $.insertBefore(ze, E(a));
          }
      }
      return Ae(a), !0;
    }
    return a instanceof f && !nn(a) || (h === "noscript" || h === "noembed" || h === "noframes") && se(/<\/no(script|embed|frames)/i, a.innerHTML) ? (Ae(a), !0) : (Q && a.nodeType === 3 && (u = a.textContent, u = Te(u, de, " "), u = Te(u, ae, " "), u = Te(u, Ce, " "), a.textContent !== u && (Ze(r.removed, {
      element: a.cloneNode()
    }), a.textContent = u)), Ne("afterSanitizeElements", a, null), !1);
  }, ir = function(a, u, h) {
    if (Pe && (u === "id" || u === "name") && (h in n || h in tn))
      return !1;
    if (!(j && !V[u] && se(ge, u))) {
      if (!(U && se(me, u))) {
        if (!b[u] || V[u]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(sr(a) && (S.tagNameCheck instanceof RegExp && se(S.tagNameCheck, a) || S.tagNameCheck instanceof Function && S.tagNameCheck(a)) && (S.attributeNameCheck instanceof RegExp && se(S.attributeNameCheck, u) || S.attributeNameCheck instanceof Function && S.attributeNameCheck(u)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            u === "is" && S.allowCustomizedBuiltInElements && (S.tagNameCheck instanceof RegExp && se(S.tagNameCheck, h) || S.tagNameCheck instanceof Function && S.tagNameCheck(h)))
          ) return !1;
        } else if (!vt[u]) {
          if (!se(g, Te(h, Re, ""))) {
            if (!((u === "src" || u === "xlink:href" || u === "href") && a !== "script" && Cn(h, "data:") === 0 && Kt[a])) {
              if (!(N && !se(Me, Te(h, Re, "")))) {
                if (h)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, sr = function(a) {
    return a !== "annotation-xml" && yr(a, Fe);
  }, lr = function(a) {
    var u, h, $, ve;
    Ne("beforeSanitizeAttributes", a, null);
    var le = a.attributes;
    if (le) {
      var ie = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: b
      };
      for (ve = le.length; ve--; ) {
        u = le[ve];
        var ze = u, te = ze.name, _t = ze.namespaceURI;
        if (h = te === "value" ? u.value : Rn(u.value), $ = oe(te), ie.attrName = $, ie.attrValue = h, ie.keepAttr = !0, ie.forceKeepAttr = void 0, Ne("uponSanitizeAttribute", a, ie), h = ie.attrValue, !ie.forceKeepAttr && (at(te, a), !!ie.keepAttr)) {
          if (!ee && se(/\/>/i, h)) {
            at(te, a);
            continue;
          }
          Q && (h = Te(h, de, " "), h = Te(h, ae, " "), h = Te(h, Ce, " "));
          var cr = oe(a.nodeName);
          if (ir(cr, $, h)) {
            if (he && ($ === "id" || $ === "name") && (at(te, a), h = x + h), L && se(/((--!?|])>)|<\/(style|title)/i, h)) {
              at(te, a);
              continue;
            }
            if (C && De(M) === "object" && typeof M.getAttributeType == "function" && !_t)
              switch (M.getAttributeType(cr, $)) {
                case "TrustedHTML": {
                  h = C.createHTML(h);
                  break;
                }
                case "TrustedScriptURL": {
                  h = C.createScriptURL(h);
                  break;
                }
              }
            try {
              _t ? a.setAttributeNS(_t, te, h) : a.setAttribute(te, h), ar(a) ? Ae(a) : vr(r.removed);
            } catch {
            }
          }
        }
      }
      Ne("afterSanitizeAttributes", a, null);
    }
  }, an = function _(a) {
    var u, h = nr(a);
    for (Ne("beforeSanitizeShadowDOM", a, null); u = h.nextNode(); )
      Ne("uponSanitizeShadowNode", u, null), !or(u) && (u.content instanceof o && _(u.content), lr(u));
    Ne("afterSanitizeShadowDOM", a, null);
  };
  return r.sanitize = function(_) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u, h, $, ve, le;
    if (yt = !_, yt && (_ = "<!-->"), typeof _ != "string" && !qe(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw Rt("dirty is not a string, aborting");
      } else
        throw Rt("toString is not a function");
    if (!r.isSupported) {
      if (De(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof _ == "string")
          return e.toStaticHTML(_);
        if (qe(_))
          return e.toStaticHTML(_.outerHTML);
      }
      return _;
    }
    if (z || bt(a), r.removed = [], typeof _ == "string" && (ke = !1), ke) {
      if (_.nodeName) {
        var ie = oe(_.nodeName);
        if (!m[ie] || d[ie])
          throw Rt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof s)
      u = rr("<!---->"), h = u.ownerDocument.importNode(_, !0), h.nodeType === 1 && h.nodeName === "BODY" || h.nodeName === "HTML" ? u = h : u.appendChild(h);
    else {
      if (!be && !Q && !q && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return C && Oe ? C.createHTML(_) : _;
      if (u = rr(_), !u)
        return be ? null : Oe ? c : "";
    }
    u && J && Ae(u.firstChild);
    for (var ze = nr(ke ? _ : u); $ = ze.nextNode(); )
      $.nodeType === 3 && $ === ve || or($) || ($.content instanceof o && an($.content), lr($), ve = $);
    if (ve = null, ke)
      return _;
    if (be) {
      if (Z)
        for (le = re.call(u.ownerDocument); u.firstChild; )
          le.appendChild(u.firstChild);
      else
        le = u;
      return (b.shadowroot || b.shadowrootmod) && (le = pe.call(t, le, !0)), le;
    }
    var te = q ? u.outerHTML : u.innerHTML;
    return q && m["!doctype"] && u.ownerDocument && u.ownerDocument.doctype && u.ownerDocument.doctype.name && se(zn, u.ownerDocument.doctype.name) && (te = "<!DOCTYPE " + u.ownerDocument.doctype.name + `>
` + te), Q && (te = Te(te, de, " "), te = Te(te, ae, " "), te = Te(te, Ce, " ")), C && Oe ? C.createHTML(te) : te;
  }, r.setConfig = function(_) {
    bt(_), z = !0;
  }, r.clearConfig = function() {
    Be = null, z = !1;
  }, r.isValidAttribute = function(_, a, u) {
    Be || bt({});
    var h = oe(_), $ = oe(a);
    return ir(h, $, u);
  }, r.addHook = function(_, a) {
    typeof a == "function" && (K[_] = K[_] || [], Ze(K[_], a));
  }, r.removeHook = function(_) {
    if (K[_])
      return vr(K[_]);
  }, r.removeHooks = function(_) {
    K[_] && (K[_] = []);
  }, r.removeAllHooks = function() {
    K = {};
  }, r;
}
zr();
H.shape({
  event: H.string,
  action: H.string,
  name: H.string,
  region: H.string,
  section: H.string,
  component: H.string,
  type: H.string,
  text: H.string
});
const Sr = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: o = "",
  text: l = "",
  region: s = "",
  component: f = ""
}) => {
  const { dataLayer: p } = window, v = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: o.toLowerCase(),
    text: l.toLowerCase(),
    component: f.toLowerCase()
  };
  p && p.push(v);
};
var Bt = Fr();
function Wn(e) {
  function r(g, m, y, b, i) {
    for (var S = 0, d = 0, V = 0, U = 0, j, N, ee = 0, Q = 0, L, q = L = j = 0, z = 0, J = 0, be = 0, Z = 0, Oe = y.length, Pe = Oe - 1, he, x = "", Y = "", ke = "", Ee = "", ue; z < Oe; ) {
      if (N = y.charCodeAt(z), z === Pe && d + U + V + S !== 0 && (d !== 0 && (N = d === 47 ? 10 : 47), U = V = S = 0, Oe++, Pe++), d + U + V + S === 0) {
        if (z === Pe && (0 < J && (x = x.replace(I, "")), 0 < x.trim().length)) {
          switch (N) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              x += y.charAt(z);
          }
          N = 59;
        }
        switch (N) {
          case 123:
            for (x = x.trim(), j = x.charCodeAt(0), L = 1, Z = ++z; z < Oe; ) {
              switch (N = y.charCodeAt(z)) {
                case 123:
                  L++;
                  break;
                case 125:
                  L--;
                  break;
                case 47:
                  switch (N = y.charCodeAt(z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (q = z + 1; q < Pe; ++q)
                          switch (y.charCodeAt(q)) {
                            case 47:
                              if (N === 42 && y.charCodeAt(q - 1) === 42 && z + 2 !== q) {
                                z = q + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (N === 47) {
                                z = q + 1;
                                break e;
                              }
                          }
                        z = q;
                      }
                  }
                  break;
                case 91:
                  N++;
                case 40:
                  N++;
                case 34:
                case 39:
                  for (; z++ < Pe && y.charCodeAt(z) !== N; )
                    ;
              }
              if (L === 0) break;
              z++;
            }
            switch (L = y.substring(Z, z), j === 0 && (j = (x = x.replace(T, "").trim()).charCodeAt(0)), j) {
              case 64:
                switch (0 < J && (x = x.replace(I, "")), N = x.charCodeAt(1), N) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    J = m;
                    break;
                  default:
                    J = Ce;
                }
                if (L = r(m, J, L, N, i + 1), Z = L.length, 0 < me && (J = t(Ce, x, be), ue = f(3, L, J, m, K, ne, Z, N, i, b), x = J.join(""), ue !== void 0 && (Z = (L = ue.trim()).length) === 0 && (N = 0, L = "")), 0 < Z) switch (N) {
                  case 115:
                    x = x.replace(X, s);
                  case 100:
                  case 109:
                  case 45:
                    L = x + "{" + L + "}";
                    break;
                  case 107:
                    x = x.replace(O, "$1 $2"), L = x + "{" + L + "}", L = ae === 1 || ae === 2 && l("@" + L, 3) ? "@-webkit-" + L + "@" + L : "@" + L;
                    break;
                  default:
                    L = x + L, b === 112 && (L = (Y += L, ""));
                }
                else L = "";
                break;
              default:
                L = r(m, t(m, x, be), L, b, i + 1);
            }
            ke += L, L = be = J = q = j = 0, x = "", N = y.charCodeAt(++z);
            break;
          case 125:
          case 59:
            if (x = (0 < J ? x.replace(I, "") : x).trim(), 1 < (Z = x.length)) switch (q === 0 && (j = x.charCodeAt(0), j === 45 || 96 < j && 123 > j) && (Z = (x = x.replace(" ", ":")).length), 0 < me && (ue = f(1, x, m, g, K, ne, Y.length, b, i, b)) !== void 0 && (Z = (x = ue.trim()).length) === 0 && (x = "\0\0"), j = x.charCodeAt(0), N = x.charCodeAt(1), j) {
              case 0:
                break;
              case 64:
                if (N === 105 || N === 99) {
                  Ee += x + y.charAt(z);
                  break;
                }
              default:
                x.charCodeAt(Z - 1) !== 58 && (Y += o(x, j, N, x.charCodeAt(2)));
            }
            be = J = q = j = 0, x = "", N = y.charCodeAt(++z);
        }
      }
      switch (N) {
        case 13:
        case 10:
          d === 47 ? d = 0 : 1 + j === 0 && b !== 107 && 0 < x.length && (J = 1, x += "\0"), 0 < me * Re && f(0, x, m, g, K, ne, Y.length, b, i, b), ne = 1, K++;
          break;
        case 59:
        case 125:
          if (d + U + V + S === 0) {
            ne++;
            break;
          }
        default:
          switch (ne++, he = y.charAt(z), N) {
            case 9:
            case 32:
              if (U + S + d === 0) switch (ee) {
                case 44:
                case 58:
                case 9:
                case 32:
                  he = "";
                  break;
                default:
                  N !== 32 && (he = " ");
              }
              break;
            case 0:
              he = "\\0";
              break;
            case 12:
              he = "\\f";
              break;
            case 11:
              he = "\\v";
              break;
            case 38:
              U + d + S === 0 && (J = be = 1, he = "\f" + he);
              break;
            case 108:
              if (U + d + S + de === 0 && 0 < q) switch (z - q) {
                case 2:
                  ee === 112 && y.charCodeAt(z - 3) === 58 && (de = ee);
                case 8:
                  Q === 111 && (de = Q);
              }
              break;
            case 58:
              U + d + S === 0 && (q = z);
              break;
            case 44:
              d + V + U + S === 0 && (J = 1, he += "\r");
              break;
            case 34:
            case 39:
              d === 0 && (U = U === N ? 0 : U === 0 ? N : U);
              break;
            case 91:
              U + d + V === 0 && S++;
              break;
            case 93:
              U + d + V === 0 && S--;
              break;
            case 41:
              U + d + S === 0 && V--;
              break;
            case 40:
              if (U + d + S === 0) {
                if (j === 0) switch (2 * ee + 3 * Q) {
                  case 533:
                    break;
                  default:
                    j = 1;
                }
                V++;
              }
              break;
            case 64:
              d + V + U + S + q + L === 0 && (L = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + S + V)) switch (d) {
                case 0:
                  switch (2 * N + 3 * y.charCodeAt(z + 1)) {
                    case 235:
                      d = 47;
                      break;
                    case 220:
                      Z = z, d = 42;
                  }
                  break;
                case 42:
                  N === 47 && ee === 42 && Z + 2 !== z && (y.charCodeAt(Z + 2) === 33 && (Y += y.substring(Z, z + 1)), he = "", d = 0);
              }
          }
          d === 0 && (x += he);
      }
      Q = ee, ee = N, z++;
    }
    if (Z = Y.length, 0 < Z) {
      if (J = m, 0 < me && (ue = f(2, Y, J, g, K, ne, Z, b, i, b), ue !== void 0 && (Y = ue).length === 0)) return Ee + Y + ke;
      if (Y = J.join(",") + "{" + Y + "}", ae * de !== 0) {
        switch (ae !== 2 || l(Y, 2) || (de = 0), de) {
          case 111:
            Y = Y.replace(C, ":-moz-$1") + Y;
            break;
          case 112:
            Y = Y.replace(k, "::-webkit-input-$1") + Y.replace(k, "::-moz-$1") + Y.replace(k, ":-ms-input-$1") + Y;
        }
        de = 0;
      }
    }
    return Ee + Y + ke;
  }
  function t(g, m, y) {
    var b = m.trim().split(E);
    m = b;
    var i = b.length, S = g.length;
    switch (S) {
      case 0:
      case 1:
        var d = 0;
        for (g = S === 0 ? "" : g[0] + " "; d < i; ++d)
          m[d] = n(g, m[d], y).trim();
        break;
      default:
        var V = d = 0;
        for (m = []; d < i; ++d)
          for (var U = 0; U < S; ++U)
            m[V++] = n(g[U] + " ", b[d], y).trim();
    }
    return m;
  }
  function n(g, m, y) {
    var b = m.charCodeAt(0);
    switch (33 > b && (b = (m = m.trim()).charCodeAt(0)), b) {
      case 38:
        return m.replace(F, "$1" + g.trim());
      case 58:
        return g.trim() + m.replace(F, "$1" + g.trim());
      default:
        if (0 < 1 * y && 0 < m.indexOf("\f")) return m.replace(F, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + m;
  }
  function o(g, m, y, b) {
    var i = g + ";", S = 2 * m + 3 * y + 4 * b;
    if (S === 944) {
      g = i.indexOf(":", 9) + 1;
      var d = i.substring(g, i.length - 1).trim();
      return d = i.substring(0, g).trim() + d + ";", ae === 1 || ae === 2 && l(d, 1) ? "-webkit-" + d + d : d;
    }
    if (ae === 0 || ae === 2 && !l(i, 1)) return i;
    switch (S) {
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
        if (0 < i.indexOf("image-set(", 11)) return i.replace(pe, "$1-webkit-$2") + i;
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
        return d = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + d + "-webkit-" + i + "-ms-flex-pack" + d + i;
      case 1005:
        return w.test(i) ? i.replace(M, ":-webkit-") + i.replace(M, ":-moz-") + i : i;
      case 1e3:
        switch (d = i.substring(13).trim(), m = d.indexOf("-") + 1, d.charCodeAt(0) + d.charCodeAt(m)) {
          case 226:
            d = i.replace(c, "tb");
            break;
          case 232:
            d = i.replace(c, "tb-rl");
            break;
          case 220:
            d = i.replace(c, "lr");
            break;
          default:
            return i;
        }
        return "-webkit-" + i + "-ms-" + d + i;
      case 1017:
        if (i.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (m = (i = g).length - 10, d = (i.charCodeAt(m) === 33 ? i.substring(0, m) : i).substring(g.indexOf(":", 7) + 1).trim(), S = d.charCodeAt(0) + (d.charCodeAt(7) | 0)) {
          case 203:
            if (111 > d.charCodeAt(8)) break;
          case 115:
            i = i.replace(d, "-webkit-" + d) + ";" + i;
            break;
          case 207:
          case 102:
            i = i.replace(d, "-webkit-" + (102 < S ? "inline-" : "") + "box") + ";" + i.replace(d, "-webkit-" + d) + ";" + i.replace(d, "-ms-" + d + "box") + ";" + i;
        }
        return i + ";";
      case 938:
        if (i.charCodeAt(5) === 45) switch (i.charCodeAt(6)) {
          case 105:
            return d = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + d + "-ms-flex-" + d + i;
          case 115:
            return "-webkit-" + i + "-ms-flex-item-" + i.replace(G, "") + i;
          default:
            return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(G, "") + i;
        }
        break;
      case 973:
      case 989:
        if (i.charCodeAt(3) !== 45 || i.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ye.test(g) === !0) return (d = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(g.replace("stretch", "fill-available"), m, y, b).replace(":fill-available", ":stretch") : i.replace(d, "-webkit-" + d) + i.replace(d, "-moz-" + d.replace("fill-", "")) + i;
        break;
      case 962:
        if (i = "-webkit-" + i + (i.charCodeAt(5) === 102 ? "-ms-" + i : "") + i, y + b === 211 && i.charCodeAt(13) === 105 && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(D, "$1-webkit-$2") + i;
    }
    return i;
  }
  function l(g, m) {
    var y = g.indexOf(m === 1 ? ":" : "{"), b = g.substring(0, m !== 3 ? y : 10);
    return y = g.substring(y + 1, g.length - 1), Me(m !== 2 ? b : b.replace(re, "$1"), y, m);
  }
  function s(g, m) {
    var y = o(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return y !== m + ";" ? y.replace(R, " or ($1)").substring(4) : "(" + m + ")";
  }
  function f(g, m, y, b, i, S, d, V, U, j) {
    for (var N = 0, ee = m, Q; N < me; ++N)
      switch (Q = ge[N].call(A, g, ee, y, b, i, S, d, V, U, j)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ee = Q;
      }
    if (ee !== m) return ee;
  }
  function p(g) {
    switch (g) {
      case void 0:
      case null:
        me = ge.length = 0;
        break;
      default:
        if (typeof g == "function") ge[me++] = g;
        else if (typeof g == "object") for (var m = 0, y = g.length; m < y; ++m)
          p(g[m]);
        else Re = !!g | 0;
    }
    return p;
  }
  function v(g) {
    return g = g.prefix, g !== void 0 && (Me = null, g ? typeof g != "function" ? ae = 1 : (ae = 2, Me = g) : ae = 0), v;
  }
  function A(g, m) {
    var y = g;
    if (33 > y.charCodeAt(0) && (y = y.trim()), Fe = y, y = [Fe], 0 < me) {
      var b = f(-1, m, y, y, K, ne, 0, 0, 0, 0);
      b !== void 0 && typeof b == "string" && (m = b);
    }
    var i = r(Ce, y, m, 0, 0);
    return 0 < me && (b = f(-2, i, y, y, K, ne, i.length, 0, 0, 0), b !== void 0 && (i = b)), Fe = "", de = 0, ne = K = 1, i;
  }
  var T = /^\0+/g, I = /[\0\r\f]/g, M = /: */g, w = /zoo|gra/, D = /([,: ])(transform)/g, E = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, O = /@(k\w+)\s*(\S*)\s*/, k = /::(place)/g, C = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, X = /\(\s*(.*)\s*\)/g, R = /([\s\S]*?);/g, G = /-self|flex-/g, re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ye = /stretch|:\s*\w+\-(?:conte|avail)/, pe = /([^-])(image-set\()/, ne = 1, K = 1, de = 0, ae = 1, Ce = [], ge = [], me = 0, Me = null, Re = 0, Fe = "";
  return A.use = p, A.set = v, e !== void 0 && v(e), A;
}
var Bn = {
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
function Gn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Vn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Tr = /* @__PURE__ */ Gn(
  function(e) {
    return Vn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Gt = Fr(), Yn = {
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
}, qn = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Xn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ur = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vt = {};
Vt[Gt.ForwardRef] = Xn;
Vt[Gt.Memo] = Ur;
function wr(e) {
  return Gt.isMemo(e) ? Ur : Vt[e.$$typeof] || Yn;
}
var Kn = Object.defineProperty, Zn = Object.getOwnPropertyNames, Er = Object.getOwnPropertySymbols, Qn = Object.getOwnPropertyDescriptor, Jn = Object.getPrototypeOf, Cr = Object.prototype;
function Hr(e, r, t) {
  if (typeof r != "string") {
    if (Cr) {
      var n = Jn(r);
      n && n !== Cr && Hr(e, n, t);
    }
    var o = Zn(r);
    Er && (o = o.concat(Er(r)));
    for (var l = wr(e), s = wr(r), f = 0; f < o.length; ++f) {
      var p = o[f];
      if (!qn[p] && !(t && t[p]) && !(s && s[p]) && !(l && l[p])) {
        var v = Qn(r, p);
        try {
          Kn(e, p, v);
        } catch {
        }
      }
    }
  }
  return e;
}
var ea = Hr;
const ta = /* @__PURE__ */ Dr(ea);
var B = { env: { NODE_ENV: "production" } };
function Ie() {
  return (Ie = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Rr = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Ft = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Bt.typeOf(e);
}, mt = Object.freeze([]), Le = Object.freeze({});
function et(e) {
  return typeof e == "function";
}
function jt(e) {
  return B.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Yt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ge = typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_ATTR || B.env.SC_ATTR) || "data-styled", qt = typeof window < "u" && "HTMLElement" in window, ra = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof B < "u" && B.env !== void 0 && (B.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && B.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? B.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && B.env.REACT_APP_SC_DISABLE_SPEEDY : B.env.SC_DISABLE_SPEEDY !== void 0 && B.env.SC_DISABLE_SPEEDY !== "" ? B.env.SC_DISABLE_SPEEDY !== "false" && B.env.SC_DISABLE_SPEEDY : B.env.NODE_ENV !== "production")), na = B.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function aa() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ye(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw B.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(aa.apply(void 0, [na[e]].concat(t)).trim());
}
var oa = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, l = o.length, s = l; t >= s; ) (s <<= 1) < 0 && Ye(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var f = l; f < s; f++) this.groupSizes[f] = 0;
    }
    for (var p = this.indexOfGroup(t + 1), v = 0, A = n.length; v < A; v++) this.tag.insertRule(p, n[v]) && (this.groupSizes[t]++, p++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), l = o + n;
      this.groupSizes[t] = 0;
      for (var s = o; s < l; s++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], l = this.indexOfGroup(t), s = l + o, f = l; f < s; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), pt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), Qe = 1, st = function(e) {
  if (pt.has(e)) return pt.get(e);
  for (; ht.has(Qe); ) Qe++;
  var r = Qe++;
  return B.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Ye(16, "" + r), pt.set(e, r), ht.set(r, e), r;
}, ia = function(e) {
  return ht.get(e);
}, sa = function(e, r) {
  r >= Qe && (Qe = r + 1), pt.set(e, r), ht.set(r, e);
}, la = "style[" + Ge + '][data-styled-version="5.3.11"]', ca = new RegExp("^" + Ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ua = function(e, r, t) {
  for (var n, o = t.split(","), l = 0, s = o.length; l < s; l++) (n = o[l]) && e.registerName(r, n);
}, fa = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, l = t.length; o < l; o++) {
    var s = t[o].trim();
    if (s) {
      var f = s.match(ca);
      if (f) {
        var p = 0 | parseInt(f[1], 10), v = f[2];
        p !== 0 && (sa(v, p), ua(e, v, f[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, pa = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, $r = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(f) {
    for (var p = f.childNodes, v = p.length; v >= 0; v--) {
      var A = p[v];
      if (A && A.nodeType === 1 && A.hasAttribute(Ge)) return A;
    }
  }(t), l = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ge, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = pa();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, l), n;
}, da = function() {
  function e(t) {
    var n = this.element = $r(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var l = document.styleSheets, s = 0, f = l.length; s < f; s++) {
        var p = l[s];
        if (p.ownerNode === o) return p;
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
}(), ma = function() {
  function e(t) {
    var n = this.element = $r(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), l = this.nodes[t];
      return this.element.insertBefore(o, l || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ha = function() {
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
}(), Or = qt, va = { isServer: !qt, useCSSOMInjection: !ra }, Wr = function() {
  function e(t, n, o) {
    t === void 0 && (t = Le), n === void 0 && (n = {}), this.options = Ie({}, va, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && qt && Or && (Or = !1, function(l) {
      for (var s = document.querySelectorAll(la), f = 0, p = s.length; f < p; f++) {
        var v = s[f];
        v && v.getAttribute(Ge) !== "active" && (fa(l, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  e.registerId = function(t) {
    return st(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ie({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, l = n.useCSSOMInjection, s = n.target, t = o ? new ha(s) : l ? new da(s) : new ma(s), new oa(t)));
    var t, n, o, l, s;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (st(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(st(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(st(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, l = "", s = 0; s < o; s++) {
        var f = ia(s);
        if (f !== void 0) {
          var p = t.names.get(f), v = n.getGroup(s);
          if (p && v && p.size) {
            var A = Ge + ".g" + s + '[id="' + f + '"]', T = "";
            p !== void 0 && p.forEach(function(I) {
              I.length > 0 && (T += I + ",");
            }), l += "" + v + A + '{content:"' + T + `"}/*!sc*/
`;
          }
        }
      }
      return l;
    }(this);
  }, e;
}(), ya = /(a)(d)/gi, kr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = kr(r % 52) + t;
  return (kr(r % 52) + t).replace(ya, "$1-$2");
}
var He = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Br = function(e) {
  return He(5381, e);
};
function ga(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (et(t) && !Yt(t)) return !1;
  }
  return !0;
}
var ba = Br("5.3.11"), Aa = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = B.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && ga(r), this.componentId = t, this.baseHash = He(ba, t), this.baseStyle = n, Wr.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, l = [];
    if (this.baseStyle && l.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) l.push(this.staticRulesId);
    else {
      var s = Ve(this.rules, r, t, n).join(""), f = zt(He(this.baseHash, s) >>> 0);
      if (!t.hasNameForId(o, f)) {
        var p = n(s, "." + f, void 0, o);
        t.insertRules(o, f, p);
      }
      l.push(f), this.staticRulesId = f;
    }
    else {
      for (var v = this.rules.length, A = He(this.baseHash, n.hash), T = "", I = 0; I < v; I++) {
        var M = this.rules[I];
        if (typeof M == "string") T += M, B.env.NODE_ENV !== "production" && (A = He(A, M + I));
        else if (M) {
          var w = Ve(M, r, t, n), D = Array.isArray(w) ? w.join("") : w;
          A = He(A, D + I), T += D;
        }
      }
      if (T) {
        var E = zt(A >>> 0);
        if (!t.hasNameForId(o, E)) {
          var F = n(T, "." + E, void 0, o);
          t.insertRules(o, E, F);
        }
        l.push(E);
      }
    }
    return l.join(" ");
  }, e;
}(), _a = /^\s*\/\/.*$/gm, Sa = [":", "[", ".", "#"];
function Ta(e) {
  var r, t, n, o, l = Le, s = l.options, f = s === void 0 ? Le : s, p = l.plugins, v = p === void 0 ? mt : p, A = new Wn(f), T = [], I = /* @__PURE__ */ function(D) {
    function E(F) {
      if (F) try {
        D(F + "}");
      } catch {
      }
    }
    return function(F, O, k, C, c, X, R, G, re, ye) {
      switch (F) {
        case 1:
          if (re === 0 && O.charCodeAt(0) === 64) return D(O + ";"), "";
          break;
        case 2:
          if (G === 0) return O + "/*|*/";
          break;
        case 3:
          switch (G) {
            case 102:
            case 112:
              return D(k[0] + O), "";
            default:
              return O + (ye === 0 ? "/*|*/" : "");
          }
        case -2:
          O.split("/*|*/}").forEach(E);
      }
    };
  }(function(D) {
    T.push(D);
  }), M = function(D, E, F) {
    return E === 0 && Sa.indexOf(F[t.length]) !== -1 || F.match(o) ? D : "." + r;
  };
  function w(D, E, F, O) {
    O === void 0 && (O = "&");
    var k = D.replace(_a, ""), C = E && F ? F + " " + E + " { " + k + " }" : k;
    return r = O, t = E, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), A(F || !E ? "" : E, C);
  }
  return A.use([].concat(v, [function(D, E, F) {
    D === 2 && F.length && F[0].lastIndexOf(t) > 0 && (F[0] = F[0].replace(n, M));
  }, I, function(D) {
    if (D === -2) {
      var E = T;
      return T = [], E;
    }
  }])), w.hash = v.length ? v.reduce(function(D, E) {
    return E.name || Ye(15), He(D, E.name);
  }, 5381).toString() : "", w;
}
var Gr = $e.createContext();
Gr.Consumer;
var Vr = $e.createContext(), wa = (Vr.Consumer, new Wr()), Ut = Ta();
function Ea() {
  return Wt(Gr) || wa;
}
function Ca() {
  return Wt(Vr) || Ut;
}
var Ra = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, l) {
      l === void 0 && (l = Ut);
      var s = n.name + l.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, l(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Ye(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Ut), this.name + r.hash;
  }, e;
}(), Oa = /([A-Z])/, ka = /([A-Z])/g, xa = /^ms-/, Na = function(e) {
  return "-" + e.toLowerCase();
};
function xr(e) {
  return Oa.test(e) ? e.replace(ka, Na).replace(xa, "-ms-") : e;
}
var Nr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ve(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, l = [], s = 0, f = e.length; s < f; s += 1) (o = Ve(e[s], r, t, n)) !== "" && (Array.isArray(o) ? l.push.apply(l, o) : l.push(o));
    return l;
  }
  if (Nr(e)) return "";
  if (Yt(e)) return "." + e.styledComponentId;
  if (et(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !r) return e;
    var p = e(r);
    return B.env.NODE_ENV !== "production" && Bt.isElement(p) && console.warn(jt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ve(p, r, t, n);
  }
  var v;
  return e instanceof Ra ? t ? (e.inject(t, n), e.getName(n)) : e : Ft(e) ? function A(T, I) {
    var M, w, D = [];
    for (var E in T) T.hasOwnProperty(E) && !Nr(T[E]) && (Array.isArray(T[E]) && T[E].isCss || et(T[E]) ? D.push(xr(E) + ":", T[E], ";") : Ft(T[E]) ? D.push.apply(D, A(T[E], E)) : D.push(xr(E) + ": " + (M = E, (w = T[E]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || M in Bn || M.startsWith("--") ? String(w).trim() : w + "px") + ";"));
    return I ? [I + " {"].concat(D, ["}"]) : D;
  }(e) : e.toString();
}
var Ir = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ia(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return et(e) || Ft(e) ? Ir(Ve(Rr(mt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ir(Ve(Rr(e, t)));
}
var Pr = /invalid hook call/i, lt = /* @__PURE__ */ new Set(), Pa = function(e, r) {
  if (B.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(l) {
        if (Pr.test(l)) o = !1, lt.delete(t);
        else {
          for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++) f[p - 1] = arguments[p];
          n.apply(void 0, [l].concat(f));
        }
      }, Je(), o && !lt.has(t) && (console.warn(t), lt.add(t));
    } catch (l) {
      Pr.test(l.message) && lt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Da = function(e, r, t) {
  return t === void 0 && (t = Le), e.theme !== t.theme && e.theme || r || t.theme;
}, La = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ma = /(^-|-$)/g;
function It(e) {
  return e.replace(La, "-").replace(Ma, "");
}
var Fa = function(e) {
  return zt(Br(e) >>> 0);
};
function ct(e) {
  return typeof e == "string" && (B.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ht = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ja = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function za(e, r, t) {
  var n = e[t];
  Ht(r) && Ht(n) ? Yr(n, r) : e[t] = r;
}
function Yr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, l = t; o < l.length; o++) {
    var s = l[o];
    if (Ht(s)) for (var f in s) ja(f) && za(e, s[f], f);
  }
  return e;
}
var qr = $e.createContext();
qr.Consumer;
var Pt = {};
function Xr(e, r, t) {
  var n = Yt(e), o = !ct(e), l = r.attrs, s = l === void 0 ? mt : l, f = r.componentId, p = f === void 0 ? function(O, k) {
    var C = typeof O != "string" ? "sc" : It(O);
    Pt[C] = (Pt[C] || 0) + 1;
    var c = C + "-" + Fa("5.3.11" + C + Pt[C]);
    return k ? k + "-" + c : c;
  }(r.displayName, r.parentComponentId) : f, v = r.displayName, A = v === void 0 ? function(O) {
    return ct(O) ? "styled." + O : "Styled(" + jt(O) + ")";
  }(e) : v, T = r.displayName && r.componentId ? It(r.displayName) + "-" + r.componentId : r.componentId || p, I = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, M = r.shouldForwardProp;
  n && e.shouldForwardProp && (M = r.shouldForwardProp ? function(O, k, C) {
    return e.shouldForwardProp(O, k, C) && r.shouldForwardProp(O, k, C);
  } : e.shouldForwardProp);
  var w, D = new Aa(t, T, n ? e.componentStyle : void 0), E = D.isStatic && s.length === 0, F = function(O, k) {
    return function(C, c, X, R) {
      var G = C.attrs, re = C.componentStyle, ye = C.defaultProps, pe = C.foldedComponentIds, ne = C.shouldForwardProp, K = C.styledComponentId, de = C.target, ae = function(b, i, S) {
        b === void 0 && (b = Le);
        var d = Ie({}, i, { theme: b }), V = {};
        return S.forEach(function(U) {
          var j, N, ee, Q = U;
          for (j in et(Q) && (Q = Q(d)), Q) d[j] = V[j] = j === "className" ? (N = V[j], ee = Q[j], N && ee ? N + " " + ee : N || ee) : Q[j];
        }), [d, V];
      }(Da(c, Wt(qr), ye) || Le, c, G), Ce = ae[0], ge = ae[1], me = function(b, i, S, d) {
        var V = Ea(), U = Ca(), j = i ? b.generateAndInjectStyles(Le, V, U) : b.generateAndInjectStyles(S, V, U);
        return B.env.NODE_ENV !== "production" && !i && d && d(j), j;
      }(re, R, Ce, B.env.NODE_ENV !== "production" ? C.warnTooManyClasses : void 0), Me = X, Re = ge.$as || c.$as || ge.as || c.as || de, Fe = ct(Re), g = ge !== c ? Ie({}, c, {}, ge) : c, m = {};
      for (var y in g) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? m.as = g[y] : (ne ? ne(y, Tr, Re) : !Fe || Tr(y)) && (m[y] = g[y]));
      return c.style && ge.style !== c.style && (m.style = Ie({}, c.style, {}, ge.style)), m.className = Array.prototype.concat(pe, K, me !== K ? me : null, c.className, ge.className).filter(Boolean).join(" "), m.ref = Me, on(Re, m);
    }(w, O, k, E);
  };
  return F.displayName = A, (w = $e.forwardRef(F)).attrs = I, w.componentStyle = D, w.displayName = A, w.shouldForwardProp = M, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : mt, w.styledComponentId = T, w.target = n ? e.target : e, w.withComponent = function(O) {
    var k = r.componentId, C = function(X, R) {
      if (X == null) return {};
      var G, re, ye = {}, pe = Object.keys(X);
      for (re = 0; re < pe.length; re++) G = pe[re], R.indexOf(G) >= 0 || (ye[G] = X[G]);
      return ye;
    }(r, ["componentId"]), c = k && k + "-" + (ct(O) ? O : It(jt(O)));
    return Xr(O, Ie({}, C, { attrs: I, componentId: c }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = n ? Yr({}, e.defaultProps, O) : O;
  } }), B.env.NODE_ENV !== "production" && (Pa(A, T), w.warnTooManyClasses = /* @__PURE__ */ function(O, k) {
    var C = {}, c = !1;
    return function(X) {
      if (!c && (C[X] = !0, Object.keys(C).length >= 200)) {
        var R = k ? ' with the id of "' + k + '"' : "";
        console.warn("Over 200 classes were generated for component " + O + R + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, C = {};
      }
    };
  }(A, T)), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), o && ta(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var $t = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Le), !Bt.isValidElementType(n)) return Ye(1, String(n));
    var l = function() {
      return t(n, o, Ia.apply(void 0, arguments));
    };
    return l.withConfig = function(s) {
      return r(t, n, Ie({}, o, {}, s));
    }, l.attrs = function(s) {
      return r(t, n, Ie({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, l;
  }(Xr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  $t[e] = $t(e);
});
B.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), B.env.NODE_ENV !== "production" && B.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Ua = $t.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Kr = ({ hidePrev: e, hideNext: r, clickPrev: t, clickNext: n }) => /* @__PURE__ */ ce.jsxs(Ua, { children: [
  !e && /* @__PURE__ */ ce.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: t,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ ce.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ ce.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ),
  !r && /* @__PURE__ */ ce.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: n,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ ce.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ ce.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  )
] });
Kr.propTypes = {
  hidePrev: H.bool,
  hideNext: H.bool,
  clickPrev: H.func.isRequired,
  clickNext: H.func.isRequired
};
const Zr = sn(function(r, t) {
  const {
    id: n,
    selected: o,
    title: l,
    selectTab: s,
    leftKeyPressed: f,
    rightKeyPressed: p,
    icon: v
  } = r, A = Je(null);
  ln(
    t,
    () => ({
      focus() {
        A.current.focus();
      },
      scrollIntoView() {
        var w, D, E, F, O, k, C;
        const I = ((w = A.current) == null ? void 0 : w.offsetWidth) / 2 + A.current.offsetLeft, M = ((E = (D = A.current) == null ? void 0 : D.offsetParent) == null ? void 0 : E.scrollLeft) + ((O = (F = A.current) == null ? void 0 : F.offsetParent) == null ? void 0 : O.offsetWidth) / 2;
        (C = (k = A.current) == null ? void 0 : k.offsetParent) == null || C.scrollBy({
          left: I - M
        });
      }
    }),
    []
  );
  const T = (I) => {
    I.keyCode === 37 ? (I.preventDefault(), f()) : I.keyCode === 39 && (I.preventDefault(), p());
  };
  return /* @__PURE__ */ ce.jsxs(
    "a",
    {
      ref: A,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: n,
      href: `#nav-${n}`,
      role: "tab",
      "aria-controls": `nav-${n}`,
      "aria-selected": o,
      onClick: (I) => s(I, n, l),
      onKeyDown: T,
      tabIndex: o ? "" : "-1",
      children: [
        l,
        " ",
        v && /* @__PURE__ */ ce.jsx("i", { className: `${v == null ? void 0 : v[0]} fa-${v == null ? void 0 : v[1]} me-1` })
      ]
    }
  );
});
Zr.propTypes = {
  id: H.string.isRequired,
  selected: H.bool.isRequired,
  title: H.string.isRequired,
  selectTab: H.func.isRequired,
  leftKeyPressed: H.func.isRequired,
  rightKeyPressed: H.func.isRequired,
  icon: H.arrayOf(H.string)
};
function Ha() {
  const e = Je({}), r = cn(
    (t) => (n) => {
      e.current[t] = n;
    },
    []
  );
  return [e, r];
}
const $a = ({ id: e, bgColor: r, selected: t, children: n }) => t && /* @__PURE__ */ ce.jsx(
  "div",
  {
    className: `tab-pane fade show ${t ? "show active" : ""} ${r === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
$a.propTypes = {
  id: H.string.isRequired,
  bgColor: H.string,
  selected: H.bool,
  children: H.oneOfType([H.array, H.element])
};
const Wa = ({
  initialTab: e = "",
  children: r,
  bgColor: t = "",
  onTabChange: n = (o) => {
  }
}) => {
  const o = $e.Children.toArray(r), l = Je(!1), [s, f] = St(
    e && e !== "null" ? e : o[0].props.id
  ), p = Je(null), [v, A] = Ha(), T = (R) => {
    var G;
    n(R), (G = v.current[R]) == null || G.focus(), f(R);
  }, [I, M] = St(0), [w, D] = St();
  Xe(() => {
    const R = () => {
      M(p.current.scrollLeft);
    };
    return p.current.addEventListener("scroll", R), R(), () => {
      p.current && p.current.removeEventListener("scroll", R);
    };
  }, [w]), Xe(() => {
    const R = () => {
      D(
        p.current.scrollWidth - p.current.offsetWidth
      );
    };
    return window.addEventListener("resize", R), R(), () => {
      p.current && window.removeEventListener("resize", R);
    };
  }, []), Xe(() => {
    var R;
    (R = v.current[s]) == null || R.scrollIntoView();
  }, [s]), Xe(() => {
    l.current && e && e !== "null" && s !== e && f(e);
  }, [e]), Xe(() => {
    l.current = !0;
  }, []);
  const E = (R) => {
    Sr({
      event: "select",
      action: "click",
      name: "onclick",
      type: "carousel",
      region: "main content",
      text: R
    });
  }, F = (R) => {
    Sr({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      text: R
    });
  }, O = o.map((R) => $e.cloneElement(R, {
    bgColor: t,
    selected: s === R.props.id
  })), k = (R) => {
    const G = p.current, re = G.scrollWidth - G.clientWidth;
    let pe = G.scrollLeft + 200 * R;
    pe = Math.max(0, Math.min(re, pe)), G.scrollTo({
      left: pe,
      behavior: "smooth"
    });
  }, C = (R, G, re) => {
    F(re), R.preventDefault(), T(G);
  }, c = (R = !0) => {
    const G = o.length, re = R ? 1 : -1, ye = o.findIndex((ne) => ne.props.id === s), pe = o[(G + ye + re) % G].props.id;
    T(pe);
  };
  let X = "uds-tabbed-panels";
  return t === "bg-dark" && (X += " uds-tabbed-panels-dark"), /* @__PURE__ */ ce.jsxs("div", { className: t, children: [
    /* @__PURE__ */ ce.jsxs("nav", { className: X, children: [
      /* @__PURE__ */ ce.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: p, children: o.map((R, G) => /* @__PURE__ */ ce.jsx(
        Zr,
        {
          ref: A(R.props.id),
          id: R.props.id,
          title: R.props.title,
          selected: s === R.props.id,
          selectTab: C,
          leftKeyPressed: () => c(!1),
          rightKeyPressed: () => c(),
          icon: R.props.icon,
          index: G
        },
        R.props.id
      )) }),
      /* @__PURE__ */ ce.jsx(
        Kr,
        {
          hidePrev: I <= 0,
          hideNext: I >= w,
          clickPrev: () => {
            k(-1), E("left chevron");
          },
          clickNext: () => {
            k(1), E("right chevron");
          }
        }
      )
    ] }),
    /* @__PURE__ */ ce.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: O
      }
    )
  ] });
};
Wa.propTypes = {
  initialTab: H.string,
  children: H.arrayOf(H.element).isRequired,
  bgColor: H.string,
  onTabChange: H.func
};
export {
  $a as Tab,
  Wa as TabbedPanels
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
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
