import er from "react";
function Mt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ct = { exports: {} }, ne = {};
var yt;
function tr() {
  if (yt) return ne;
  yt = 1;
  var t = er, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(v, d, L) {
    var A, M = {}, k = null, F = null;
    L !== void 0 && (k = "" + L), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (F = d.ref);
    for (A in d) i.call(d, A) && !l.hasOwnProperty(A) && (M[A] = d[A]);
    if (v && v.defaultProps) for (A in d = v.defaultProps, d) M[A] === void 0 && (M[A] = d[A]);
    return { $$typeof: n, type: v, key: k, ref: F, props: M, _owner: c.current };
  }
  return ne.Fragment = o, ne.jsx = p, ne.jsxs = p, ne;
}
Ct.exports = tr();
var Et = Ct.exports, It = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var l = "", p = 0; p < arguments.length; p++) {
        var v = arguments[p];
        v && (l = c(l, i(v)));
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
        n.call(l, v) && l[v] && (p = c(p, v));
      return p;
    }
    function c(l, p) {
      return p ? l ? l + " " + p : l + p : l;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(It);
var rr = It.exports;
const At = /* @__PURE__ */ Mt(rr);
var xt = { exports: {} }, Ue, gt;
function nr() {
  if (gt) return Ue;
  gt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ue = t, Ue;
}
var He, bt;
function ar() {
  if (bt) return He;
  bt = 1;
  var t = nr();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, He = function() {
    function i(p, v, d, L, A, M) {
      if (M !== t) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    i.isRequired = i;
    function c() {
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
      arrayOf: c,
      element: i,
      elementType: i,
      instanceOf: c,
      node: i,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, He;
}
xt.exports = ar()();
var or = xt.exports;
const f = /* @__PURE__ */ Mt(or);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function qe(t, n) {
  return qe = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, qe(t, n);
}
function ir() {
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
  return ir() ? de = Reflect.construct : de = function(c, l, p) {
    var v = [null];
    v.push.apply(v, l);
    var d = Function.bind.apply(c, v), L = new d();
    return p && qe(L, p.prototype), L;
  }, de.apply(null, arguments);
}
function x(t) {
  return sr(t) || lr(t) || ur(t) || fr();
}
function sr(t) {
  if (Array.isArray(t)) return Ye(t);
}
function lr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ur(t, n) {
  if (t) {
    if (typeof t == "string") return Ye(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Ye(t, n);
  }
}
function Ye(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, i = new Array(n); o < n; o++) i[o] = t[o];
  return i;
}
function fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cr = Object.hasOwnProperty, St = Object.setPrototypeOf, pr = Object.isFrozen, mr = Object.getPrototypeOf, dr = Object.getOwnPropertyDescriptor, O = Object.freeze, w = Object.seal, vr = Object.create, kt = typeof Reflect < "u" && Reflect, Te = kt.apply, Ve = kt.construct;
Te || (Te = function(n, o, i) {
  return n.apply(o, i);
});
O || (O = function(n) {
  return n;
});
w || (w = function(n) {
  return n;
});
Ve || (Ve = function(n, o) {
  return de(n, x(o));
});
var Tr = D(Array.prototype.forEach), Ot = D(Array.prototype.pop), ae = D(Array.prototype.push), ve = D(String.prototype.toLowerCase), We = D(String.prototype.toString), Rt = D(String.prototype.match), I = D(String.prototype.replace), _r = D(String.prototype.indexOf), hr = D(String.prototype.trim), b = D(RegExp.prototype.test), ze = yr(TypeError);
function D(t) {
  return function(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      i[c - 1] = arguments[c];
    return Te(t, n, i);
  };
}
function yr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return Ve(t, o);
  };
}
function u(t, n, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : ve, St && St(t, null);
  for (var c = n.length; c--; ) {
    var l = n[c];
    if (typeof l == "string") {
      var p = o(l);
      p !== l && (pr(n) || (n[c] = p), l = p);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var n = vr(null), o;
  for (o in t)
    Te(cr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function pe(t, n) {
  for (; t !== null; ) {
    var o = dr(t, n);
    if (o) {
      if (o.get)
        return D(o.get);
      if (typeof o.value == "function")
        return D(o.value);
    }
    t = mr(t);
  }
  function i(c) {
    return console.warn("fallback value for", c), null;
  }
  return i;
}
var Lt = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ge = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Be = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Er = O(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $e = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ar = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nt = O(["#text"]), wt = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), je = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dt = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), me = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), br = w(/<%[\w\W]*|[\w\W]*%>/gm), Sr = w(/\${[\w\W]*}/gm), Or = w(/^data-[\-\w.\u00B7-\uFFFF]/), Rr = w(/^aria-[\-\w]+$/), Lr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Nr = w(/^(?:\w+script|data):/i), wr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = w(/^html$/i), Mr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Cr = function() {
  return typeof window > "u" ? null : window;
}, Ir = function(n, o) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var i = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (i = o.currentScript.getAttribute(c));
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
function Pt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cr(), n = function(e) {
    return Pt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, i = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, p = t.Node, v = t.Element, d = t.NodeFilter, L = t.NamedNodeMap, A = L === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : L, M = t.HTMLFormElement, k = t.DOMParser, F = t.trustedTypes, j = v.prototype, _e = pe(j, "cloneNode"), q = pe(j, "nextSibling"), he = pe(j, "childNodes"), Q = pe(j, "parentNode");
  if (typeof l == "function") {
    var ye = i.createElement("template");
    ye.content && ye.content.ownerDocument && (i = ye.content.ownerDocument);
  }
  var C = Ir(F, o), Ee = C ? C.createHTML("") : "", oe = i, Ae = oe.implementation, Ut = oe.createNodeIterator, Ht = oe.createDocumentFragment, Wt = oe.getElementsByTagName, zt = o.importNode, Xe = {};
  try {
    Xe = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var P = {};
  n.isSupported = typeof Q == "function" && Ae && Ae.createHTMLDocument !== void 0 && Xe !== 9;
  var ge = gr, be = br, Se = Sr, Gt = Or, Bt = Rr, $t = Nr, Ke = wr, jt = Mr, Oe = Lr, h = null, Ze = u({}, [].concat(x(Lt), x(Ge), x(Be), x($e), x(Nt))), y = null, Je = u({}, [].concat(x(wt), x(je), x(Dt), x(me))), T = Object.seal(Object.create(null, {
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
  })), ee = null, Re = null, Qe = !0, Le = !0, et = !1, tt = !0, Y = !1, Ne = !0, z = !1, we = !1, De = !1, V = !1, ie = !1, se = !1, rt = !0, nt = !1, qt = "user-content-", Me = !0, te = !1, X = {}, K = null, at = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ot = null, it = u({}, ["audio", "video", "img", "source", "image", "track"]), Ce = null, st = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), le = "http://www.w3.org/1998/Math/MathML", ue = "http://www.w3.org/2000/svg", U = "http://www.w3.org/1999/xhtml", Z = U, Ie = !1, xe = null, Yt = u({}, [le, ue, U], We), G, Vt = ["application/xhtml+xml", "text/html"], Xt = "text/html", E, J = null, Kt = i.createElement("form"), lt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ke = function(e) {
    J && J === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    Vt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Xt : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? We : ve, h = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, E) : Ze, y = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, E) : Je, xe = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, We) : Yt, Ce = "ADD_URI_SAFE_ATTR" in e ? u(
      $(st),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : st, ot = "ADD_DATA_URI_TAGS" in e ? u(
      $(it),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : it, K = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, E) : at, ee = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, E) : {}, Re = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, E) : {}, X = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Qe = e.ALLOW_ARIA_ATTR !== !1, Le = e.ALLOW_DATA_ATTR !== !1, et = e.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Y = e.SAFE_FOR_TEMPLATES || !1, Ne = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, se = e.RETURN_TRUSTED_TYPE || !1, De = e.FORCE_BODY || !1, rt = e.SANITIZE_DOM !== !1, nt = e.SANITIZE_NAMED_PROPS || !1, Me = e.KEEP_CONTENT !== !1, te = e.IN_PLACE || !1, Oe = e.ALLOWED_URI_REGEXP || Oe, Z = e.NAMESPACE || U, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Y && (Le = !1), ie && (V = !0), X && (h = u({}, x(Nt)), y = [], X.html === !0 && (u(h, Lt), u(y, wt)), X.svg === !0 && (u(h, Ge), u(y, je), u(y, me)), X.svgFilters === !0 && (u(h, Be), u(y, je), u(y, me)), X.mathMl === !0 && (u(h, $e), u(y, Dt), u(y, me))), e.ADD_TAGS && (h === Ze && (h = $(h)), u(h, e.ADD_TAGS, E)), e.ADD_ATTR && (y === Je && (y = $(y)), u(y, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && u(Ce, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (K === at && (K = $(K)), u(K, e.FORBID_CONTENTS, E)), Me && (h["#text"] = !0), z && u(h, ["html", "head", "body"]), h.table && (u(h, ["tbody"]), delete ee.tbody), O && O(e), J = e);
  }, ut = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ft = u({}, ["annotation-xml"]), Zt = u({}, ["title", "style", "font", "a", "script"]), fe = u({}, Ge);
  u(fe, Be), u(fe, Er);
  var Pe = u({}, $e);
  u(Pe, Ar);
  var Jt = function(e) {
    var r = Q(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: Z,
      tagName: "template"
    });
    var a = ve(e.tagName), m = ve(r.tagName);
    return xe[e.namespaceURI] ? e.namespaceURI === ue ? r.namespaceURI === U ? a === "svg" : r.namespaceURI === le ? a === "svg" && (m === "annotation-xml" || ut[m]) : !!fe[a] : e.namespaceURI === le ? r.namespaceURI === U ? a === "math" : r.namespaceURI === ue ? a === "math" && ft[m] : !!Pe[a] : e.namespaceURI === U ? r.namespaceURI === ue && !ft[m] || r.namespaceURI === le && !ut[m] ? !1 : !Pe[a] && (Zt[a] || !fe[a]) : !!(G === "application/xhtml+xml" && xe[e.namespaceURI]) : !1;
  }, N = function(e) {
    ae(n.removed, {
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
  }, ce = function(e, r) {
    try {
      ae(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      ae(n.removed, {
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
  }, ct = function(e) {
    var r, a;
    if (De)
      e = "<remove></remove>" + e;
    else {
      var m = Rt(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    G === "application/xhtml+xml" && Z === U && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = C ? C.createHTML(e) : e;
    if (Z === U)
      try {
        r = new k().parseFromString(R, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Ae.createDocument(Z, "template", null);
      try {
        r.documentElement.innerHTML = Ie ? Ee : R;
      } catch {
      }
    }
    var S = r.body || r.documentElement;
    return e && a && S.insertBefore(i.createTextNode(a), S.childNodes[0] || null), Z === U ? Wt.call(r, z ? "html" : "body")[0] : z ? r.documentElement : S;
  }, pt = function(e) {
    return Ut.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, mt = function(e) {
    return e instanceof M && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof A) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, re = function(e) {
    return W(p) === "object" ? e instanceof p : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, H = function(e, r, a) {
    P[e] && Tr(P[e], function(m) {
      m.call(n, r, a, J);
    });
  }, dt = function(e) {
    var r;
    if (H("beforeSanitizeElements", e, null), mt(e) || b(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = E(e.nodeName);
    if (H("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !re(e.firstElementChild) && (!re(e.content) || !re(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || a === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || Ne && e.nodeType === 8 && b(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!h[a] || ee[a]) {
      if (!ee[a] && Tt(a) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (Me && !K[a]) {
        var m = Q(e) || e.parentNode, R = he(e) || e.childNodes;
        if (R && m)
          for (var S = R.length, g = S - 1; g >= 0; --g) {
            var B = _e(R[g], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(B, q(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof v && !Jt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (Y && e.nodeType === 3 && (r = e.textContent, r = I(r, ge, " "), r = I(r, be, " "), r = I(r, Se, " "), e.textContent !== r && (ae(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), H("afterSanitizeElements", e, null), !1);
  }, vt = function(e, r, a) {
    if (rt && (r === "id" || r === "name") && (a in i || a in Kt))
      return !1;
    if (!(Le && !Re[r] && b(Gt, r))) {
      if (!(Qe && b(Bt, r))) {
        if (!y[r] || Re[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Tt(e) && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && b(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && b(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!Ce[r]) {
          if (!b(Oe, I(a, Ke, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && _r(a, "data:") === 0 && ot[e])) {
              if (!(et && !b($t, I(a, Ke, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Tt = function(e) {
    return e !== "annotation-xml" && Rt(e, jt);
  }, _t = function(e) {
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
        if (a = _ === "value" ? r.value : hr(r.value), m = E(_), g.attrName = m, g.attrValue = a, g.keepAttr = !0, g.forceKeepAttr = void 0, H("uponSanitizeAttribute", e, g), a = g.attrValue, !g.forceKeepAttr && (ce(_, e), !!g.keepAttr)) {
          if (!tt && b(/\/>/i, a)) {
            ce(_, e);
            continue;
          }
          Y && (a = I(a, ge, " "), a = I(a, be, " "), a = I(a, Se, " "));
          var ht = E(e.nodeName);
          if (vt(ht, m, a)) {
            if (nt && (m === "id" || m === "name") && (ce(_, e), a = qt + a), Ne && b(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(_, e);
              continue;
            }
            if (C && W(F) === "object" && typeof F.getAttributeType == "function" && !Fe)
              switch (F.getAttributeType(ht, m)) {
                case "TrustedHTML": {
                  a = C.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = C.createScriptURL(a);
                  break;
                }
              }
            try {
              Fe ? e.setAttributeNS(Fe, _, a) : e.setAttribute(_, a), mt(e) ? N(e) : Ot(n.removed);
            } catch {
            }
          }
        }
      }
      H("afterSanitizeAttributes", e, null);
    }
  }, Qt = function s(e) {
    var r, a = pt(e);
    for (H("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      H("uponSanitizeShadowNode", r, null), !dt(r) && (r.content instanceof c && s(r.content), _t(r));
    H("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, R, S;
    if (Ie = !s, Ie && (s = "<!-->"), typeof s != "string" && !re(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw ze("dirty is not a string, aborting");
      } else
        throw ze("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (re(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (we || ke(e), n.removed = [], typeof s == "string" && (te = !1), te) {
      if (s.nodeName) {
        var g = E(s.nodeName);
        if (!h[g] || ee[g])
          throw ze("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof p)
      r = ct("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!V && !Y && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && se ? C.createHTML(s) : s;
      if (r = ct(s), !r)
        return V ? null : se ? Ee : "";
    }
    r && De && N(r.firstChild);
    for (var B = pt(te ? s : r); m = B.nextNode(); )
      m.nodeType === 3 && m === R || dt(m) || (m.content instanceof c && Qt(m.content), _t(m), R = m);
    if (R = null, te)
      return s;
    if (V) {
      if (ie)
        for (S = Ht.call(r.ownerDocument); r.firstChild; )
          S.appendChild(r.firstChild);
      else
        S = r;
      return (y.shadowroot || y.shadowrootmod) && (S = zt.call(o, S, !0)), S;
    }
    var _ = z ? r.outerHTML : r.innerHTML;
    return z && h["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && b(Dr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), Y && (_ = I(_, ge, " "), _ = I(_, be, " "), _ = I(_, Se, " ")), C && se ? C.createHTML(_) : _;
  }, n.setConfig = function(s) {
    ke(s), we = !0;
  }, n.clearConfig = function() {
    J = null, we = !1;
  }, n.isValidAttribute = function(s, e, r) {
    J || ke({});
    var a = E(s), m = E(e);
    return vt(a, m, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (P[s] = P[s] || [], ae(P[s], e));
  }, n.removeHook = function(s) {
    if (P[s])
      return Ot(P[s]);
  }, n.removeHooks = function(s) {
    P[s] && (P[s] = []);
  }, n.removeAllHooks = function() {
    P = {};
  }, n;
}
Pt();
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
const xr = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: i = "",
  section: c = "",
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
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: v.toLowerCase()
  };
  d && d.push(L);
}, kr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ft = ({
  label: t,
  cardTitle: n,
  ariaLabel: o,
  block: i,
  color: c,
  disabled: l,
  element: p,
  href: v,
  icon: d,
  innerRef: L,
  onClick: A,
  size: M,
  classes: k,
  target: F,
  ...j
}) => {
  const _e = At("btn", {
    [`btn-${c}`]: !0,
    "btn-md": M === "small",
    "btn-sm": M === "xsmall",
    "btn-block": i,
    disabled: l
  });
  let q = p;
  v && p === "button" && (q = "a");
  const he = (Q) => {
    xr({ ...kr, text: Q, section: n }), A == null || A();
  };
  return /* @__PURE__ */ Et.jsxs(
    q,
    {
      type: q === "button" && A ? "button" : void 0,
      ...j,
      className: At(k) || _e,
      href: v,
      ref: L,
      onClick: () => he(t),
      "aria-label": o,
      target: q === "a" ? F : null,
      children: [
        d && /* @__PURE__ */ Et.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
        t
      ]
    }
  );
};
Ft.propTypes = {
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
Ft.defaultProps = {
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
  Ft as Button
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
