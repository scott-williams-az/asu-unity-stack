import Ye, { useId as tr } from "react";
function Dt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xt = { exports: {} }, re = {};
var At;
function rr() {
  if (At) return re;
  At = 1;
  var t = Ye, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(v, d, L) {
    var A, C = {}, k = null, F = null;
    L !== void 0 && (k = "" + L), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (A in d) i.call(d, A) && !l.hasOwnProperty(A) && (C[A] = d[A]);
    if (v && v.defaultProps) for (A in d = v.defaultProps, d) C[A] === void 0 && (C[A] = d[A]);
    return { $$typeof: n, type: v, key: k, ref: F, props: C, _owner: u.current };
  }
  return re.Fragment = o, re.jsx = p, re.jsxs = p, re;
}
xt.exports = rr();
var Ue = xt.exports, It = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var l = "", p = 0; p < arguments.length; p++) {
        var v = arguments[p];
        v && (l = u(l, i(v)));
      }
      return l;
    }
    function i(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return o.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var p = "";
      for (var v in l)
        n.call(l, v) && l[v] && (p = u(p, v));
      return p;
    }
    function u(l, p) {
      return p ? l ? l + " " + p : l + p : l;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(It);
var nr = It.exports;
const gt = /* @__PURE__ */ Dt(nr);
var kt = { exports: {} }, He, bt;
function ar() {
  if (bt) return He;
  bt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var We, St;
function or() {
  if (St) return We;
  St = 1;
  var t = ar();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, We = function() {
    function i(p, v, d, L, A, C) {
      if (C !== t) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    i.isRequired = i;
    function u() {
      return i;
    }
    var l = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: u,
      element: i,
      elementType: i,
      instanceOf: u,
      node: i,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, We;
}
kt.exports = or()();
var ir = kt.exports;
const f = /* @__PURE__ */ Dt(ir);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function Ve(t, n) {
  return Ve = Object.setPrototypeOf || function(i, u) {
    return i.__proto__ = u, i;
  }, Ve(t, n);
}
function sr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function de(t, n, o) {
  return sr() ? de = Reflect.construct : de = function(u, l, p) {
    var v = [null];
    v.push.apply(v, l);
    var d = Function.bind.apply(u, v), L = new d();
    return p && Ve(L, p.prototype), L;
  }, de.apply(null, arguments);
}
function I(t) {
  return lr(t) || ur(t) || cr(t) || fr();
}
function lr(t) {
  if (Array.isArray(t)) return Xe(t);
}
function ur(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function cr(t, n) {
  if (t) {
    if (typeof t == "string") return Xe(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Xe(t, n);
  }
}
function Xe(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, i = new Array(n); o < n; o++) i[o] = t[o];
  return i;
}
function fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pr = Object.hasOwnProperty, Ot = Object.setPrototypeOf, mr = Object.isFrozen, dr = Object.getPrototypeOf, vr = Object.getOwnPropertyDescriptor, O = Object.freeze, w = Object.seal, Tr = Object.create, Pt = typeof Reflect < "u" && Reflect, Te = Pt.apply, Ke = Pt.construct;
Te || (Te = function(n, o, i) {
  return n.apply(o, i);
});
O || (O = function(n) {
  return n;
});
w || (w = function(n) {
  return n;
});
Ke || (Ke = function(n, o) {
  return de(n, I(o));
});
var _r = M(Array.prototype.forEach), Rt = M(Array.prototype.pop), ne = M(Array.prototype.push), ve = M(String.prototype.toLowerCase), ze = M(String.prototype.toString), Lt = M(String.prototype.match), x = M(String.prototype.replace), hr = M(String.prototype.indexOf), yr = M(String.prototype.trim), b = M(RegExp.prototype.test), Ge = Er(TypeError);
function M(t) {
  return function(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      i[u - 1] = arguments[u];
    return Te(t, n, i);
  };
}
function Er(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return Ke(t, o);
  };
}
function c(t, n, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : ve, Ot && Ot(t, null);
  for (var u = n.length; u--; ) {
    var l = n[u];
    if (typeof l == "string") {
      var p = o(l);
      p !== l && (mr(n) || (n[u] = p), l = p);
    }
    t[l] = !0;
  }
  return t;
}
function j(t) {
  var n = Tr(null), o;
  for (o in t)
    Te(pr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function pe(t, n) {
  for (; t !== null; ) {
    var o = vr(t, n);
    if (o) {
      if (o.get)
        return M(o.get);
      if (typeof o.value == "function")
        return M(o.value);
    }
    t = dr(t);
  }
  function i(u) {
    return console.warn("fallback value for", u), null;
  }
  return i;
}
var Nt = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Be = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), je = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ar = O(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $e = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), gr = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wt = O(["#text"]), Mt = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), qe = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ct = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), me = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), br = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sr = w(/<%[\w\W]*|[\w\W]*%>/gm), Or = w(/\${[\w\W]*}/gm), Rr = w(/^data-[\-\w.\u00B7-\uFFFF]/), Lr = w(/^aria-[\-\w]+$/), Nr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wr = w(/^(?:\w+script|data):/i), Mr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Cr = w(/^html$/i), Dr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), xr = function() {
  return typeof window > "u" ? null : window;
}, Ir = function(n, o) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var i = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (i = o.currentScript.getAttribute(u));
  var l = "dompurify" + (i ? "#" + i : "");
  try {
    return n.createPolicy(l, {
      createHTML: function(v) {
        return v;
      },
      createScriptURL: function(v) {
        return v;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function Ft() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xr(), n = function(e) {
    return Ft(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, i = t.document, u = t.DocumentFragment, l = t.HTMLTemplateElement, p = t.Node, v = t.Element, d = t.NodeFilter, L = t.NamedNodeMap, A = L === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : L, C = t.HTMLFormElement, k = t.DOMParser, F = t.trustedTypes, $ = v.prototype, _e = pe($, "cloneNode"), q = pe($, "nextSibling"), he = pe($, "childNodes"), ae = pe($, "parentNode");
  if (typeof l == "function") {
    var ye = i.createElement("template");
    ye.content && ye.content.ownerDocument && (i = ye.content.ownerDocument);
  }
  var D = Ir(F, o), Ee = D ? D.createHTML("") : "", oe = i, Ae = oe.implementation, Ht = oe.createNodeIterator, Wt = oe.createDocumentFragment, zt = oe.getElementsByTagName, Gt = o.importNode, Ze = {};
  try {
    Ze = j(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var P = {};
  n.isSupported = typeof ae == "function" && Ae && Ae.createHTMLDocument !== void 0 && Ze !== 9;
  var ge = br, be = Sr, Se = Or, Bt = Rr, jt = Lr, $t = wr, Je = Mr, qt = Dr, Oe = Nr, h = null, Qe = c({}, [].concat(I(Nt), I(Be), I(je), I($e), I(wt))), y = null, et = c({}, [].concat(I(Mt), I(qe), I(Ct), I(me))), T = Object.seal(Object.create(null, {
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
  })), Q = null, Re = null, tt = !0, Le = !0, rt = !1, nt = !0, Y = !1, Ne = !0, z = !1, we = !1, Me = !1, V = !1, ie = !1, se = !1, at = !0, ot = !1, Yt = "user-content-", Ce = !0, ee = !1, X = {}, K = null, it = c({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), st = null, lt = c({}, ["audio", "video", "img", "source", "image", "track"]), De = null, ut = c({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), le = "http://www.w3.org/1998/Math/MathML", ue = "http://www.w3.org/2000/svg", U = "http://www.w3.org/1999/xhtml", Z = U, xe = !1, Ie = null, Vt = c({}, [le, ue, U], ze), G, Xt = ["application/xhtml+xml", "text/html"], Kt = "text/html", E, J = null, Zt = i.createElement("form"), ct = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ke = function(e) {
    J && J === e || ((!e || W(e) !== "object") && (e = {}), e = j(e), G = // eslint-disable-next-line unicorn/prefer-includes
    Xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Kt : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? ze : ve, h = "ALLOWED_TAGS" in e ? c({}, e.ALLOWED_TAGS, E) : Qe, y = "ALLOWED_ATTR" in e ? c({}, e.ALLOWED_ATTR, E) : et, Ie = "ALLOWED_NAMESPACES" in e ? c({}, e.ALLOWED_NAMESPACES, ze) : Vt, De = "ADD_URI_SAFE_ATTR" in e ? c(
      j(ut),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ut, st = "ADD_DATA_URI_TAGS" in e ? c(
      j(lt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : lt, K = "FORBID_CONTENTS" in e ? c({}, e.FORBID_CONTENTS, E) : it, Q = "FORBID_TAGS" in e ? c({}, e.FORBID_TAGS, E) : {}, Re = "FORBID_ATTR" in e ? c({}, e.FORBID_ATTR, E) : {}, X = "USE_PROFILES" in e ? e.USE_PROFILES : !1, tt = e.ALLOW_ARIA_ATTR !== !1, Le = e.ALLOW_DATA_ATTR !== !1, rt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, nt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = e.SAFE_FOR_TEMPLATES || !1, Ne = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, se = e.RETURN_TRUSTED_TYPE || !1, Me = e.FORCE_BODY || !1, at = e.SANITIZE_DOM !== !1, ot = e.SANITIZE_NAMED_PROPS || !1, Ce = e.KEEP_CONTENT !== !1, ee = e.IN_PLACE || !1, Oe = e.ALLOWED_URI_REGEXP || Oe, Z = e.NAMESPACE || U, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ct(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y && (Le = !1), ie && (V = !0), X && (h = c({}, I(wt)), y = [], X.html === !0 && (c(h, Nt), c(y, Mt)), X.svg === !0 && (c(h, Be), c(y, qe), c(y, me)), X.svgFilters === !0 && (c(h, je), c(y, qe), c(y, me)), X.mathMl === !0 && (c(h, $e), c(y, Ct), c(y, me))), e.ADD_TAGS && (h === Qe && (h = j(h)), c(h, e.ADD_TAGS, E)), e.ADD_ATTR && (y === et && (y = j(y)), c(y, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && c(De, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (K === it && (K = j(K)), c(K, e.FORBID_CONTENTS, E)), Ce && (h["#text"] = !0), z && c(h, ["html", "head", "body"]), h.table && (c(h, ["tbody"]), delete Q.tbody), O && O(e), J = e);
  }, ft = c({}, ["mi", "mo", "mn", "ms", "mtext"]), pt = c({}, ["annotation-xml"]), Jt = c({}, ["title", "style", "font", "a", "script"]), ce = c({}, Be);
  c(ce, je), c(ce, Ar);
  var Pe = c({}, $e);
  c(Pe, gr);
  var Qt = function(e) {
    var r = ae(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Z,
      tagName: "template"
    });
    var a = ve(e.tagName), m = ve(r.tagName);
    return Ie[e.namespaceURI] ? e.namespaceURI === ue ? r.namespaceURI === U ? a === "svg" : r.namespaceURI === le ? a === "svg" && (m === "annotation-xml" || ft[m]) : !!ce[a] : e.namespaceURI === le ? r.namespaceURI === U ? a === "math" : r.namespaceURI === ue ? a === "math" && pt[m] : !!Pe[a] : e.namespaceURI === U ? r.namespaceURI === ue && !pt[m] || r.namespaceURI === le && !ft[m] ? !1 : !Pe[a] && (Jt[a] || !ce[a]) : !!(G === "application/xhtml+xml" && Ie[e.namespaceURI]) : !1;
  }, N = function(e) {
    ne(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = Ee;
      } catch {
        e.remove();
      }
    }
  }, fe = function(e, r) {
    try {
      ne(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      ne(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !y[e])
      if (V || ie)
        try {
          N(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, mt = function(e) {
    var r, a;
    if (Me)
      e = "<remove></remove>" + e;
    else {
      var m = Lt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    G === "application/xhtml+xml" && Z === U && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = D ? D.createHTML(e) : e;
    if (Z === U)
      try {
        r = new k().parseFromString(R, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Ae.createDocument(Z, "template", null);
      try {
        r.documentElement.innerHTML = xe ? Ee : R;
      } catch {
      }
    }
    var S = r.body || r.documentElement;
    return e && a && S.insertBefore(i.createTextNode(a), S.childNodes[0] || null), Z === U ? zt.call(r, z ? "html" : "body")[0] : z ? r.documentElement : S;
  }, dt = function(e) {
    return Ht.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, vt = function(e) {
    return e instanceof C && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof A) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, te = function(e) {
    return W(p) === "object" ? e instanceof p : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, H = function(e, r, a) {
    P[e] && _r(P[e], function(m) {
      m.call(n, r, a, J);
    });
  }, Tt = function(e) {
    var r;
    if (H("beforeSanitizeElements", e, null), vt(e) || b(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = E(e.nodeName);
    if (H("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !te(e.firstElementChild) && (!te(e.content) || !te(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || a === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || Ne && e.nodeType === 8 && b(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!h[a] || Q[a]) {
      if (!Q[a] && ht(a) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (Ce && !K[a]) {
        var m = ae(e) || e.parentNode, R = he(e) || e.childNodes;
        if (R && m)
          for (var S = R.length, g = S - 1; g >= 0; --g) {
            var B = _e(R[g], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(B, q(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof v && !Qt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (Y && e.nodeType === 3 && (r = e.textContent, r = x(r, ge, " "), r = x(r, be, " "), r = x(r, Se, " "), e.textContent !== r && (ne(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), H("afterSanitizeElements", e, null), !1);
  }, _t = function(e, r, a) {
    if (at && (r === "id" || r === "name") && (a in i || a in Zt))
      return !1;
    if (!(Le && !Re[r] && b(Bt, r))) {
      if (!(tt && b(jt, r))) {
        if (!y[r] || Re[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ht(e) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && b(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!De[r]) {
          if (!b(Oe, x(a, Je, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && hr(a, "data:") === 0 && st[e])) {
              if (!(rt && !b($t, x(a, Je, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ht = function(e) {
    return e !== "annotation-xml" && Lt(e, qt);
  }, yt = function(e) {
    var r, a, m, R;
    H("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var g = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: y
      };
      for (R = S.length; R--; ) {
        r = S[R];
        var B = r, _ = B.name, Fe = B.namespaceURI;
        if (a = _ === "value" ? r.value : yr(r.value), m = E(_), g.attrName = m, g.attrValue = a, g.keepAttr = !0, g.forceKeepAttr = void 0, H("uponSanitizeAttribute", e, g), a = g.attrValue, !g.forceKeepAttr && (fe(_, e), !!g.keepAttr)) {
          if (!nt && b(/\/>/i, a)) {
            fe(_, e);
            continue;
          }
          Y && (a = x(a, ge, " "), a = x(a, be, " "), a = x(a, Se, " "));
          var Et = E(e.nodeName);
          if (_t(Et, m, a)) {
            if (ot && (m === "id" || m === "name") && (fe(_, e), a = Yt + a), Ne && b(/((--!?|])>)|<\/(style|title)/i, a)) {
              fe(_, e);
              continue;
            }
            if (D && W(F) === "object" && typeof F.getAttributeType == "function" && !Fe)
              switch (F.getAttributeType(Et, m)) {
                case "TrustedHTML": {
                  a = D.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = D.createScriptURL(a);
                  break;
                }
              }
            try {
              Fe ? e.setAttributeNS(Fe, _, a) : e.setAttribute(_, a), vt(e) ? N(e) : Rt(n.removed);
            } catch {
            }
          }
        }
      }
      H("afterSanitizeAttributes", e, null);
    }
  }, er = function s(e) {
    var r, a = dt(e);
    for (H("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      H("uponSanitizeShadowNode", r, null), !Tt(r) && (r.content instanceof u && s(r.content), yt(r));
    H("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, R, S;
    if (xe = !s, xe && (s = "<!-->"), typeof s != "string" && !te(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Ge("dirty is not a string, aborting");
      } else
        throw Ge("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (te(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (we || ke(e), n.removed = [], typeof s == "string" && (ee = !1), ee) {
      if (s.nodeName) {
        var g = E(s.nodeName);
        if (!h[g] || Q[g])
          throw Ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof p)
      r = mt("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!V && !Y && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return D && se ? D.createHTML(s) : s;
      if (r = mt(s), !r)
        return V ? null : se ? Ee : "";
    }
    r && Me && N(r.firstChild);
    for (var B = dt(ee ? s : r); m = B.nextNode(); )
      m.nodeType === 3 && m === R || Tt(m) || (m.content instanceof u && er(m.content), yt(m), R = m);
    if (R = null, ee)
      return s;
    if (V) {
      if (ie)
        for (S = Wt.call(r.ownerDocument); r.firstChild; )
          S.appendChild(r.firstChild);
      else
        S = r;
      return (y.shadowroot || y.shadowrootmod) && (S = Gt.call(o, S, !0)), S;
    }
    var _ = z ? r.outerHTML : r.innerHTML;
    return z && h["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && b(Cr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), Y && (_ = x(_, ge, " "), _ = x(_, be, " "), _ = x(_, Se, " ")), D && se ? D.createHTML(_) : _;
  }, n.setConfig = function(s) {
    ke(s), we = !0;
  }, n.clearConfig = function() {
    J = null, we = !1;
  }, n.isValidAttribute = function(s, e, r) {
    J || ke({});
    var a = E(s), m = E(e);
    return _t(a, m, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (P[s] = P[s] || [], ne(P[s], e));
  }, n.removeHook = function(s) {
    if (P[s])
      return Rt(P[s]);
  }, n.removeHooks = function(s) {
    P[s] && (P[s] = []);
  }, n.removeAllHooks = function() {
    P = {};
  }, n;
}
Ft();
f.shape({
  event: f.string,
  action: f.string,
  name: f.string,
  region: f.string,
  section: f.string,
  component: f.string,
  type: f.string,
  text: f.string
});
const kr = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: i = "",
  section: u = "",
  text: l = "",
  region: p = "",
  component: v = ""
}) => {
  const { dataLayer: d } = window, L = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: p.toLowerCase(),
    section: u.toLowerCase(),
    text: l.toLowerCase(),
    component: v.toLowerCase()
  };
  d && d.push(L);
}, Pr = "staticMarkup";
function Fr() {
  const n = tr().indexOf(Pr) > -1 ? !0 : void 0;
  return {
    isBootstrap: n,
    isReact: n ? void 0 : !0
  };
}
const Ur = ({ gaData: t, children: n }) => {
  const { isReact: o } = Fr(), { onClick: i, ...u } = n.props;
  return o ? Ye.cloneElement(n, {
    ...u,
    onClick: (l) => (kr(t), i ? i(l) : !0)
  }) : Ye.cloneElement(n, {
    ...u,
    onClick: i,
    "data-ga": t.text,
    "data-ga-name": t.name,
    "data-ga-event": t.event,
    "data-ga-action": t.action,
    "data-ga-type": t.type,
    "data-ga-region": t.region,
    "data-ga-section": t.section,
    "data-ga-component": t.component
  });
}, Hr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ut = ({
  label: t,
  cardTitle: n,
  ariaLabel: o,
  block: i,
  color: u,
  disabled: l,
  element: p,
  href: v,
  icon: d,
  innerRef: L,
  onClick: A,
  size: C,
  classes: k,
  target: F,
  ...$
}) => {
  const _e = gt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": C === "small",
    "btn-sm": C === "xsmall",
    "btn-block": i,
    disabled: l
  });
  let q = p;
  v && p === "button" && (q = "a");
  const he = (ae) => {
    A == null || A();
  };
  return /* @__PURE__ */ Ue.jsx(
    Ur,
    {
      gaData: { ...Hr, text: t, section: n },
      children: /* @__PURE__ */ Ue.jsxs(
        q,
        {
          type: q === "button" && A ? "button" : void 0,
          ...$,
          className: gt(k) || _e,
          href: v,
          ref: L,
          onClick: he,
          "aria-label": o,
          target: q === "a" ? F : null,
          children: [
            d && /* @__PURE__ */ Ue.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
            t
          ]
        }
      )
    }
  );
};
Ut.propTypes = {
  /**
   * Button label
   */
  label: f.string,
  /**
   * Card title
   */
  cardTitle: f.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: f.string,
  /**
    Render button as a block-button?
  */
  block: f.bool,
  /**
    Button background color
  */
  color: f.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: f.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: f.oneOfType([
    f.func,
    f.string,
    f.shape({ $$typeof: f.symbol, render: f.func }),
    f.arrayOf(
      f.oneOfType([
        f.func,
        f.string,
        f.shape({ $$typeof: f.symbol, render: f.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: f.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: f.arrayOf(f.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: f.oneOfType([
    f.object,
    f.func,
    f.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: f.func,
  /**
    Button size
  */
  size: f.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: f.arrayOf(f.string),
  /**
   Link target type
   */
  target: f.oneOf(["_blank", "_self", "_top", "_parent"])
};
Ut.defaultProps = {
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
export {
  Ut as Button
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
