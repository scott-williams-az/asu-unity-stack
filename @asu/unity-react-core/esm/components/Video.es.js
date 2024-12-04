import Qt, { useRef as er } from "react";
function Lt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, te = {};
var _t;
function tr() {
  if (_t) return te;
  _t = 1;
  var t = Qt, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, d, M) {
    var O, U = {}, H = null, z = null;
    M !== void 0 && (H = "" + M), d.key !== void 0 && (H = "" + d.key), d.ref !== void 0 && (z = d.ref);
    for (O in d) i.call(d, O) && !l.hasOwnProperty(O) && (U[O] = d[O]);
    if (m && m.defaultProps) for (O in d = m.defaultProps, d) U[O] === void 0 && (U[O] = d[O]);
    return { $$typeof: n, type: m, key: H, ref: z, props: U, _owner: u.current };
  }
  return te.Fragment = o, te.jsx = f, te.jsxs = f, te;
}
Nt.exports = tr();
var N = Nt.exports, wt = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var l = "", f = 0; f < arguments.length; f++) {
        var m = arguments[f];
        m && (l = u(l, i(m)));
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
      var f = "";
      for (var m in l)
        n.call(l, m) && l[m] && (f = u(f, m));
      return f;
    }
    function u(l, f) {
      return f ? l ? l + " " + f : l + f : l;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(wt);
var rr = wt.exports;
const Dt = /* @__PURE__ */ Lt(rr);
var Mt = { exports: {} }, Pe, ht;
function nr() {
  if (ht) return Pe;
  ht = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, yt;
function ar() {
  if (yt) return Fe;
  yt = 1;
  var t = nr();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, Fe = function() {
    function i(f, m, d, M, O, U) {
      if (U !== t) {
        var H = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw H.name = "Invariant Violation", H;
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
  }, Fe;
}
Mt.exports = ar()();
var or = Mt.exports;
const S = /* @__PURE__ */ Lt(or);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function je(t, n) {
  return je = Object.setPrototypeOf || function(i, u) {
    return i.__proto__ = u, i;
  }, je(t, n);
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
function me(t, n, o) {
  return ir() ? me = Reflect.construct : me = function(u, l, f) {
    var m = [null];
    m.push.apply(m, l);
    var d = Function.bind.apply(u, m), M = new d();
    return f && je(M, f.prototype), M;
  }, me.apply(null, arguments);
}
function I(t) {
  return sr(t) || lr(t) || ur(t) || cr();
}
function sr(t) {
  if (Array.isArray(t)) return $e(t);
}
function lr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ur(t, n) {
  if (t) {
    if (typeof t == "string") return $e(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return $e(t, n);
  }
}
function $e(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, i = new Array(n); o < n; o++) i[o] = t[o];
  return i;
}
function cr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fr = Object.hasOwnProperty, Et = Object.setPrototypeOf, pr = Object.isFrozen, mr = Object.getPrototypeOf, dr = Object.getOwnPropertyDescriptor, b = Object.freeze, w = Object.seal, vr = Object.create, Ct = typeof Reflect < "u" && Reflect, ve = Ct.apply, qe = Ct.construct;
ve || (ve = function(n, o, i) {
  return n.apply(o, i);
});
b || (b = function(n) {
  return n;
});
w || (w = function(n) {
  return n;
});
qe || (qe = function(n, o) {
  return me(n, I(o));
});
var Tr = D(Array.prototype.forEach), At = D(Array.prototype.pop), re = D(Array.prototype.push), de = D(String.prototype.toLowerCase), Ue = D(String.prototype.toString), gt = D(String.prototype.match), x = D(String.prototype.replace), _r = D(String.prototype.indexOf), hr = D(String.prototype.trim), A = D(RegExp.prototype.test), He = yr(TypeError);
function D(t) {
  return function(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      i[u - 1] = arguments[u];
    return ve(t, n, i);
  };
}
function yr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return qe(t, o);
  };
}
function c(t, n, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : de, Et && Et(t, null);
  for (var u = n.length; u--; ) {
    var l = n[u];
    if (typeof l == "string") {
      var f = o(l);
      f !== l && (pr(n) || (n[u] = f), l = f);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var n = vr(null), o;
  for (o in t)
    ve(fr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function fe(t, n) {
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
  function i(u) {
    return console.warn("fallback value for", u), null;
  }
  return i;
}
var St = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Er = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ar = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bt = b(["#text"]), Rt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ot = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gr = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sr = w(/<%[\w\W]*|[\w\W]*%>/gm), br = w(/\${[\w\W]*}/gm), Rr = w(/^data-[\-\w.\u00B7-\uFFFF]/), Or = w(/^aria-[\-\w]+$/), Lr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Nr = w(/^(?:\w+script|data):/i), wr = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = w(/^html$/i), Mr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Cr = function() {
  return typeof window > "u" ? null : window;
}, xr = function(n, o) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var i = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (i = o.currentScript.getAttribute(u));
  var l = "dompurify" + (i ? "#" + i : "");
  try {
    return n.createPolicy(l, {
      createHTML: function(m) {
        return m;
      },
      createScriptURL: function(m) {
        return m;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function xt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cr(), n = function(e) {
    return xt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, i = t.document, u = t.DocumentFragment, l = t.HTMLTemplateElement, f = t.Node, m = t.Element, d = t.NodeFilter, M = t.NamedNodeMap, O = M === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : M, U = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ne = m.prototype, It = fe(ne, "cloneNode"), kt = fe(ne, "nextSibling"), Pt = fe(ne, "childNodes"), Te = fe(ne, "parentNode");
  if (typeof l == "function") {
    var _e = i.createElement("template");
    _e.content && _e.content.ownerDocument && (i = _e.content.ownerDocument);
  }
  var C = xr(z, o), he = C ? C.createHTML("") : "", ae = i, ye = ae.implementation, Ft = ae.createNodeIterator, Ut = ae.createDocumentFragment, Ht = ae.getElementsByTagName, Wt = o.importNode, Ve = {};
  try {
    Ve = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var k = {};
  n.isSupported = typeof Te == "function" && ye && ye.createHTMLDocument !== void 0 && Ve !== 9;
  var Ee = gr, Ae = Sr, ge = br, zt = Rr, Gt = Or, Bt = Nr, Ye = wr, jt = Mr, Se = Lr, _ = null, Xe = c({}, [].concat(I(St), I(We), I(ze), I(Ge), I(bt))), h = null, Ke = c({}, [].concat(I(Rt), I(Be), I(Ot), I(pe))), v = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Ze = !0, Re = !0, Je = !1, Qe = !0, q = !1, Oe = !0, G = !1, Le = !1, Ne = !1, V = !1, oe = !1, ie = !1, et = !0, tt = !1, $t = "user-content-", we = !0, Q = !1, Y = {}, X = null, rt = c({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), nt = null, at = c({}, ["audio", "video", "img", "source", "image", "track"]), De = null, ot = c({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, Me = !1, Ce = null, qt = c({}, [se, le, P], Ue), B, Vt = ["application/xhtml+xml", "text/html"], Yt = "text/html", y, Z = null, Xt = i.createElement("form"), it = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, xe = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Vt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Yt : B = e.PARSER_MEDIA_TYPE, y = B === "application/xhtml+xml" ? Ue : de, _ = "ALLOWED_TAGS" in e ? c({}, e.ALLOWED_TAGS, y) : Xe, h = "ALLOWED_ATTR" in e ? c({}, e.ALLOWED_ATTR, y) : Ke, Ce = "ALLOWED_NAMESPACES" in e ? c({}, e.ALLOWED_NAMESPACES, Ue) : qt, De = "ADD_URI_SAFE_ATTR" in e ? c(
      $(ot),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, nt = "ADD_DATA_URI_TAGS" in e ? c(
      $(at),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : at, X = "FORBID_CONTENTS" in e ? c({}, e.FORBID_CONTENTS, y) : rt, J = "FORBID_TAGS" in e ? c({}, e.FORBID_TAGS, y) : {}, be = "FORBID_ATTR" in e ? c({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Ze = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Je = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Qe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, et = e.SANITIZE_DOM !== !1, tt = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || P, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Re = !1), oe && (V = !0), Y && (_ = c({}, I(bt)), h = [], Y.html === !0 && (c(_, St), c(h, Rt)), Y.svg === !0 && (c(_, We), c(h, Be), c(h, pe)), Y.svgFilters === !0 && (c(_, ze), c(h, Be), c(h, pe)), Y.mathMl === !0 && (c(_, Ge), c(h, Ot), c(h, pe))), e.ADD_TAGS && (_ === Xe && (_ = $(_)), c(_, e.ADD_TAGS, y)), e.ADD_ATTR && (h === Ke && (h = $(h)), c(h, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && c(De, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (X === rt && (X = $(X)), c(X, e.FORBID_CONTENTS, y)), we && (_["#text"] = !0), G && c(_, ["html", "head", "body"]), _.table && (c(_, ["tbody"]), delete J.tbody), b && b(e), Z = e);
  }, st = c({}, ["mi", "mo", "mn", "ms", "mtext"]), lt = c({}, ["annotation-xml"]), Kt = c({}, ["title", "style", "font", "a", "script"]), ue = c({}, We);
  c(ue, ze), c(ue, Er);
  var Ie = c({}, Ge);
  c(Ie, Ar);
  var Zt = function(e) {
    var r = Te(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), p = de(r.tagName);
    return Ce[e.namespaceURI] ? e.namespaceURI === le ? r.namespaceURI === P ? a === "svg" : r.namespaceURI === se ? a === "svg" && (p === "annotation-xml" || st[p]) : !!ue[a] : e.namespaceURI === se ? r.namespaceURI === P ? a === "math" : r.namespaceURI === le ? a === "math" && lt[p] : !!Ie[a] : e.namespaceURI === P ? r.namespaceURI === le && !lt[p] || r.namespaceURI === se && !st[p] ? !1 : !Ie[a] && (Kt[a] || !ue[a]) : !!(B === "application/xhtml+xml" && Ce[e.namespaceURI]) : !1;
  }, L = function(e) {
    re(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = he;
      } catch {
        e.remove();
      }
    }
  }, ce = function(e, r) {
    try {
      re(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      re(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !h[e])
      if (V || oe)
        try {
          L(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ut = function(e) {
    var r, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var p = gt(e, /^[\r\n\t ]+/);
      a = p && p[0];
    }
    B === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = C ? C.createHTML(e) : e;
    if (K === P)
      try {
        r = new H().parseFromString(R, B);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ye.createDocument(K, "template", null);
      try {
        r.documentElement.innerHTML = Me ? he : R;
      } catch {
      }
    }
    var g = r.body || r.documentElement;
    return e && a && g.insertBefore(i.createTextNode(a), g.childNodes[0] || null), K === P ? Ht.call(r, G ? "html" : "body")[0] : G ? r.documentElement : g;
  }, ct = function(e) {
    return Ft.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ft = function(e) {
    return e instanceof U && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(f) === "object" ? e instanceof f : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, F = function(e, r, a) {
    k[e] && Tr(k[e], function(p) {
      p.call(n, r, a, Z);
    });
  }, pt = function(e) {
    var r;
    if (F("beforeSanitizeElements", e, null), ft(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return L(e), !0;
    var a = y(e.nodeName);
    if (F("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: _
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || a === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return L(e), !0;
    if (!_[a] || J[a]) {
      if (!J[a] && dt(a) && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (we && !X[a]) {
        var p = Te(e) || e.parentNode, R = Pt(e) || e.childNodes;
        if (R && p)
          for (var g = R.length, E = g - 1; E >= 0; --E) {
            var j = It(R[E], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore(j, kt(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof m && !Zt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (q && e.nodeType === 3 && (r = e.textContent, r = x(r, Ee, " "), r = x(r, Ae, " "), r = x(r, ge, " "), e.textContent !== r && (re(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), F("afterSanitizeElements", e, null), !1);
  }, mt = function(e, r, a) {
    if (et && (r === "id" || r === "name") && (a in i || a in Xt))
      return !1;
    if (!(Re && !be[r] && A(zt, r))) {
      if (!(Ze && A(Gt, r))) {
        if (!h[r] || be[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(dt(e) && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && A(v.attributeNameCheck, r) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && A(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!De[r]) {
          if (!A(Se, x(a, Ye, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && _r(a, "data:") === 0 && nt[e])) {
              if (!(Je && !A(Bt, x(a, Ye, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, dt = function(e) {
    return e !== "annotation-xml" && gt(e, jt);
  }, vt = function(e) {
    var r, a, p, R;
    F("beforeSanitizeAttributes", e, null);
    var g = e.attributes;
    if (g) {
      var E = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: h
      };
      for (R = g.length; R--; ) {
        r = g[R];
        var j = r, T = j.name, ke = j.namespaceURI;
        if (a = T === "value" ? r.value : hr(r.value), p = y(T), E.attrName = p, E.attrValue = a, E.keepAttr = !0, E.forceKeepAttr = void 0, F("uponSanitizeAttribute", e, E), a = E.attrValue, !E.forceKeepAttr && (ce(T, e), !!E.keepAttr)) {
          if (!Qe && A(/\/>/i, a)) {
            ce(T, e);
            continue;
          }
          q && (a = x(a, Ee, " "), a = x(a, Ae, " "), a = x(a, ge, " "));
          var Tt = y(e.nodeName);
          if (mt(Tt, p, a)) {
            if (tt && (p === "id" || p === "name") && (ce(T, e), a = $t + a), Oe && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(T, e);
              continue;
            }
            if (C && W(z) === "object" && typeof z.getAttributeType == "function" && !ke)
              switch (z.getAttributeType(Tt, p)) {
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
              ke ? e.setAttributeNS(ke, T, a) : e.setAttribute(T, a), ft(e) ? L(e) : At(n.removed);
            } catch {
            }
          }
        }
      }
      F("afterSanitizeAttributes", e, null);
    }
  }, Jt = function s(e) {
    var r, a = ct(e);
    for (F("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      F("uponSanitizeShadowNode", r, null), !pt(r) && (r.content instanceof u && s(r.content), vt(r));
    F("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, p, R, g;
    if (Me = !s, Me && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || xe(e), n.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var E = y(s.nodeName);
        if (!_[E] || J[E])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      r = ut("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!V && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && ie ? C.createHTML(s) : s;
      if (r = ut(s), !r)
        return V ? null : ie ? he : "";
    }
    r && Ne && L(r.firstChild);
    for (var j = ct(Q ? s : r); p = j.nextNode(); )
      p.nodeType === 3 && p === R || pt(p) || (p.content instanceof u && Jt(p.content), vt(p), R = p);
    if (R = null, Q)
      return s;
    if (V) {
      if (oe)
        for (g = Ut.call(r.ownerDocument); r.firstChild; )
          g.appendChild(r.firstChild);
      else
        g = r;
      return (h.shadowroot || h.shadowrootmod) && (g = Wt.call(o, g, !0)), g;
    }
    var T = G ? r.outerHTML : r.innerHTML;
    return G && _["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && A(Dr, r.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + T), q && (T = x(T, Ee, " "), T = x(T, Ae, " "), T = x(T, ge, " ")), C && ie ? C.createHTML(T) : T;
  }, n.setConfig = function(s) {
    xe(s), Le = !0;
  }, n.clearConfig = function() {
    Z = null, Le = !1;
  }, n.isValidAttribute = function(s, e, r) {
    Z || xe({});
    var a = y(s), p = y(e);
    return mt(a, p, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], re(k[s], e));
  }, n.removeHook = function(s) {
    if (k[s])
      return At(k[s]);
  }, n.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, n.removeAllHooks = function() {
    k = {};
  }, n;
}
xt();
S.shape({
  event: S.string,
  action: S.string,
  name: S.string,
  region: S.string,
  section: S.string,
  component: S.string,
  type: S.string,
  text: S.string
});
const Ir = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: i = "",
  section: u = "",
  text: l = "",
  region: f = "",
  component: m = ""
}) => {
  const { dataLayer: d } = window, M = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: f.toLowerCase(),
    section: u.toLowerCase(),
    text: l.toLowerCase(),
    component: m.toLowerCase()
  };
  d && d.push(M);
}, kr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Pr = ({
  url: t = "",
  vttUrl: n,
  caption: o,
  title: i = "",
  className: u,
  controls: l = !0
}) => {
  const f = er(null), m = () => {
    Ir({ ...kr, section: i });
  };
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: Dt(`uds-video-container ${u}`, {
        "uds-video-with-caption": o
      }),
      children: [
        /* @__PURE__ */ N.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ N.jsxs(
          "video",
          {
            ref: f,
            title: i,
            onClick: m,
            playsInline: !0,
            controls: l || !0,
            children: [
              /* @__PURE__ */ N.jsx("source", { src: t }),
              /* @__PURE__ */ N.jsx(
                "track",
                {
                  src: n,
                  kind: "captions",
                  srcLang: "en",
                  label: "english_captions"
                }
              )
            ]
          }
        ) }),
        o && /* @__PURE__ */ N.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ N.jsx("figcaption", { children: o }) })
      ]
    }
  );
}, Fr = ({ title: t = "", caption: n, url: o = "", className: i }) => /* @__PURE__ */ N.jsxs(
  "div",
  {
    className: Dt(`uds-video-container ${i}`, {
      "uds-video-with-caption": n
    }),
    children: [
      /* @__PURE__ */ N.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ N.jsx("iframe", { title: t, src: o }) }),
      n && /* @__PURE__ */ N.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ N.jsx("figcaption", { children: n }) })
    ]
  }
), Ur = (t) => {
  const {
    type: n = "video",
    url: o = "",
    vttUrl: i,
    title: u = "",
    caption: l,
    className: f,
    controls: m = !0
  } = t;
  return n === "youtube" ? Fr({ url: o, title: u, caption: l, className: f }) : Pr({
    url: o,
    vttUrl: i,
    title: u,
    caption: l,
    className: f,
    controls: m
  });
};
Ur.propTypes = {
  type: S.oneOf(["video", "youtube"]),
  url: S.string,
  vttUrl: S.string,
  title: S.string,
  className: S.string,
  caption: S.string,
  controls: S.bool
};
export {
  Ur as Video
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
