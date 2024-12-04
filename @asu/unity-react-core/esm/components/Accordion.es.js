import rr, { useState as nr } from "react";
function Ct(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} }, te = {};
var _t;
function ar() {
  if (_t) return te;
  _t = 1;
  var t = rr, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(p, h, O) {
    var R, D = {}, H = null, z = null;
    O !== void 0 && (H = "" + O), h.key !== void 0 && (H = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (R in h) i.call(h, R) && !l.hasOwnProperty(R) && (D[R] = h[R]);
    if (p && p.defaultProps) for (R in h = p.defaultProps, h) D[R] === void 0 && (D[R] = h[R]);
    return { $$typeof: r, type: p, key: H, ref: z, props: D, _owner: u.current };
  }
  return te.Fragment = o, te.jsx = c, te.jsxs = c, te;
}
wt.exports = ar();
var P = wt.exports, Dt = { exports: {} }, ke, Et;
function or() {
  if (Et) return ke;
  Et = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = t, ke;
}
var Fe, yt;
function ir() {
  if (yt) return Fe;
  yt = 1;
  var t = or();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Fe = function() {
    function i(c, p, h, O, R, D) {
      if (D !== t) {
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
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Fe;
}
Dt.exports = ir()();
var sr = Dt.exports;
const m = /* @__PURE__ */ Ct(sr);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, W(t);
}
function $e(t, r) {
  return $e = Object.setPrototypeOf || function(i, u) {
    return i.__proto__ = u, i;
  }, $e(t, r);
}
function lr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, r, o) {
  return lr() ? me = Reflect.construct : me = function(u, l, c) {
    var p = [null];
    p.push.apply(p, l);
    var h = Function.bind.apply(u, p), O = new h();
    return c && $e(O, c.prototype), O;
  }, me.apply(null, arguments);
}
function I(t) {
  return cr(t) || ur(t) || fr(t) || pr();
}
function cr(t) {
  if (Array.isArray(t)) return qe(t);
}
function ur(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function fr(t, r) {
  if (t) {
    if (typeof t == "string") return qe(t, r);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return qe(t, r);
  }
}
function qe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
  return i;
}
function pr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var mr = Object.hasOwnProperty, At = Object.setPrototypeOf, dr = Object.isFrozen, hr = Object.getPrototypeOf, vr = Object.getOwnPropertyDescriptor, b = Object.freeze, C = Object.seal, Tr = Object.create, Mt = typeof Reflect < "u" && Reflect, he = Mt.apply, Ye = Mt.construct;
he || (he = function(r, o, i) {
  return r.apply(o, i);
});
b || (b = function(r) {
  return r;
});
C || (C = function(r) {
  return r;
});
Ye || (Ye = function(r, o) {
  return me(r, I(o));
});
var _r = w(Array.prototype.forEach), gt = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Ue = w(String.prototype.toString), St = w(String.prototype.match), x = w(String.prototype.replace), Er = w(String.prototype.indexOf), yr = w(String.prototype.trim), g = w(RegExp.prototype.test), He = Ar(TypeError);
function w(t) {
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      i[u - 1] = arguments[u];
    return he(t, r, i);
  };
}
function Ar(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return Ye(t, o);
  };
}
function f(t, r, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : de, At && At(t, null);
  for (var u = r.length; u--; ) {
    var l = r[u];
    if (typeof l == "string") {
      var c = o(l);
      c !== l && (dr(r) || (r[u] = c), l = c);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var r = Tr(null), o;
  for (o in t)
    he(mr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function fe(t, r) {
  for (; t !== null; ) {
    var o = vr(t, r);
    if (o) {
      if (o.get)
        return w(o.get);
      if (typeof o.value == "function")
        return w(o.value);
    }
    t = hr(t);
  }
  function i(u) {
    return console.warn("fallback value for", u), null;
  }
  return i;
}
var bt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gr = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Sr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ot = b(["#text"]), Rt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), br = C(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Or = C(/<%[\w\W]*|[\w\W]*%>/gm), Rr = C(/\${[\w\W]*}/gm), Lr = C(/^data-[\-\w.\u00B7-\uFFFF]/), Nr = C(/^aria-[\-\w]+$/), Cr = C(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wr = C(/^(?:\w+script|data):/i), Dr = C(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Mr = C(/^html$/i), xr = C(/^[a-z][.\w]*(-[.\w]+)+$/i), Ir = function() {
  return typeof window > "u" ? null : window;
}, Pr = function(r, o) {
  if (W(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var i = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (i = o.currentScript.getAttribute(u));
  var l = "dompurify" + (i ? "#" + i : "");
  try {
    return r.createPolicy(l, {
      createHTML: function(p) {
        return p;
      },
      createScriptURL: function(p) {
        return p;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function xt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ir(), r = function(e) {
    return xt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, i = t.document, u = t.DocumentFragment, l = t.HTMLTemplateElement, c = t.Node, p = t.Element, h = t.NodeFilter, O = t.NamedNodeMap, R = O === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : O, D = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ne = p.prototype, Ft = fe(ne, "cloneNode"), Ut = fe(ne, "nextSibling"), Ht = fe(ne, "childNodes"), ve = fe(ne, "parentNode");
  if (typeof l == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var M = Pr(z, o), _e = M ? M.createHTML("") : "", ae = i, Ee = ae.implementation, Wt = ae.createNodeIterator, zt = ae.createDocumentFragment, Gt = ae.getElementsByTagName, Bt = o.importNode, Ve = {};
  try {
    Ve = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var k = {};
  r.isSupported = typeof ve == "function" && Ee && Ee.createHTMLDocument !== void 0 && Ve !== 9;
  var ye = br, Ae = Or, ge = Rr, jt = Lr, $t = Nr, qt = wr, Xe = Dr, Yt = xr, Se = Cr, _ = null, Ke = f({}, [].concat(I(bt), I(We), I(ze), I(Ge), I(Ot))), E = null, Ze = f({}, [].concat(I(Rt), I(Be), I(Lt), I(pe))), v = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Je = !0, Oe = !0, Qe = !1, et = !0, q = !1, Re = !0, G = !1, Le = !1, Ne = !1, Y = !1, oe = !1, ie = !1, tt = !0, rt = !1, Vt = "user-content-", Ce = !0, Q = !1, V = {}, X = null, nt = f({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, ot = f({}, ["audio", "video", "img", "source", "image", "track"]), we = null, it = f({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", F = "http://www.w3.org/1999/xhtml", K = F, De = !1, Me = null, Xt = f({}, [se, le, F], Ue), B, Kt = ["application/xhtml+xml", "text/html"], Zt = "text/html", y, Z = null, Jt = i.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, xe = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Kt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Zt : B = e.PARSER_MEDIA_TYPE, y = B === "application/xhtml+xml" ? Ue : de, _ = "ALLOWED_TAGS" in e ? f({}, e.ALLOWED_TAGS, y) : Ke, E = "ALLOWED_ATTR" in e ? f({}, e.ALLOWED_ATTR, y) : Ze, Me = "ALLOWED_NAMESPACES" in e ? f({}, e.ALLOWED_NAMESPACES, Ue) : Xt, we = "ADD_URI_SAFE_ATTR" in e ? f(
      $(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : it, at = "ADD_DATA_URI_TAGS" in e ? f(
      $(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? f({}, e.FORBID_CONTENTS, y) : nt, J = "FORBID_TAGS" in e ? f({}, e.FORBID_TAGS, y) : {}, be = "FORBID_ATTR" in e ? f({}, e.FORBID_ATTR, y) : {}, V = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, Oe = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Re = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, Ce = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || F, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Oe = !1), oe && (Y = !0), V && (_ = f({}, I(Ot)), E = [], V.html === !0 && (f(_, bt), f(E, Rt)), V.svg === !0 && (f(_, We), f(E, Be), f(E, pe)), V.svgFilters === !0 && (f(_, ze), f(E, Be), f(E, pe)), V.mathMl === !0 && (f(_, Ge), f(E, Lt), f(E, pe))), e.ADD_TAGS && (_ === Ke && (_ = $(_)), f(_, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Ze && (E = $(E)), f(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && f(we, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (X === nt && (X = $(X)), f(X, e.FORBID_CONTENTS, y)), Ce && (_["#text"] = !0), G && f(_, ["html", "head", "body"]), _.table && (f(_, ["tbody"]), delete J.tbody), b && b(e), Z = e);
  }, lt = f({}, ["mi", "mo", "mn", "ms", "mtext"]), ct = f({}, ["annotation-xml"]), Qt = f({}, ["title", "style", "font", "a", "script"]), ce = f({}, We);
  f(ce, ze), f(ce, gr);
  var Ie = f({}, Ge);
  f(Ie, Sr);
  var er = function(e) {
    var n = ve(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), d = de(n.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === F ? a === "svg" : n.namespaceURI === se ? a === "svg" && (d === "annotation-xml" || lt[d]) : !!ce[a] : e.namespaceURI === se ? n.namespaceURI === F ? a === "math" : n.namespaceURI === le ? a === "math" && ct[d] : !!Ie[a] : e.namespaceURI === F ? n.namespaceURI === le && !ct[d] || n.namespaceURI === se && !lt[d] ? !1 : !Ie[a] && (Qt[a] || !ce[a]) : !!(B === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
  }, N = function(e) {
    re(r.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = _e;
      } catch {
        e.remove();
      }
    }
  }, ue = function(e, n) {
    try {
      re(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      re(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is" && !E[e])
      if (Y || oe)
        try {
          N(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ut = function(e) {
    var n, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var d = St(e, /^[\r\n\t ]+/);
      a = d && d[0];
    }
    B === "application/xhtml+xml" && K === F && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = M ? M.createHTML(e) : e;
    if (K === F)
      try {
        n = new H().parseFromString(L, B);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ee.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = De ? _e : L;
      } catch {
      }
    }
    var S = n.body || n.documentElement;
    return e && a && S.insertBefore(i.createTextNode(a), S.childNodes[0] || null), K === F ? Gt.call(n, G ? "html" : "body")[0] : G ? n.documentElement : S;
  }, ft = function(e) {
    return Wt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof D && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof R) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(c) === "object" ? e instanceof c : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, U = function(e, n, a) {
    k[e] && _r(k[e], function(d) {
      d.call(r, n, a, Z);
    });
  }, mt = function(e) {
    var n;
    if (U("beforeSanitizeElements", e, null), pt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = y(e.nodeName);
    if (U("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: _
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Re && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!_[a] || J[a]) {
      if (!J[a] && ht(a) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (Ce && !X[a]) {
        var d = ve(e) || e.parentNode, L = Ht(e) || e.childNodes;
        if (L && d)
          for (var S = L.length, A = S - 1; A >= 0; --A) {
            var j = Ft(L[A], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, d.insertBefore(j, Ut(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof p && !er(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = x(n, ye, " "), n = x(n, Ae, " "), n = x(n, ge, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), U("afterSanitizeElements", e, null), !1);
  }, dt = function(e, n, a) {
    if (tt && (n === "id" || n === "name") && (a in i || a in Jt))
      return !1;
    if (!(Oe && !be[n] && g(jt, n))) {
      if (!(Je && g($t, n))) {
        if (!E[n] || be[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ht(e) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && g(v.attributeNameCheck, n) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!we[n]) {
          if (!g(Se, x(a, Xe, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && Er(a, "data:") === 0 && at[e])) {
              if (!(Qe && !g(qt, x(a, Xe, "")))) {
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
    return e !== "annotation-xml" && St(e, Yt);
  }, vt = function(e) {
    var n, a, d, L;
    U("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (L = S.length; L--; ) {
        n = S[L];
        var j = n, T = j.name, Pe = j.namespaceURI;
        if (a = T === "value" ? n.value : yr(n.value), d = y(T), A.attrName = d, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, U("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ue(T, e), !!A.keepAttr)) {
          if (!et && g(/\/>/i, a)) {
            ue(T, e);
            continue;
          }
          q && (a = x(a, ye, " "), a = x(a, Ae, " "), a = x(a, ge, " "));
          var Tt = y(e.nodeName);
          if (dt(Tt, d, a)) {
            if (rt && (d === "id" || d === "name") && (ue(T, e), a = Vt + a), Re && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(T, e);
              continue;
            }
            if (M && W(z) === "object" && typeof z.getAttributeType == "function" && !Pe)
              switch (z.getAttributeType(Tt, d)) {
                case "TrustedHTML": {
                  a = M.createHTML(a);
                  break;
                }
                case "TrustedScriptURL": {
                  a = M.createScriptURL(a);
                  break;
                }
              }
            try {
              Pe ? e.setAttributeNS(Pe, T, a) : e.setAttribute(T, a), pt(e) ? N(e) : gt(r.removed);
            } catch {
            }
          }
        }
      }
      U("afterSanitizeAttributes", e, null);
    }
  }, tr = function s(e) {
    var n, a = ft(e);
    for (U("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      U("uponSanitizeShadowNode", n, null), !mt(n) && (n.content instanceof u && s(n.content), vt(n));
    U("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, d, L, S;
    if (De = !s, De && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!r.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || xe(e), r.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var A = y(s.nodeName);
        if (!_[A] || J[A])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof c)
      n = ut("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!Y && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return M && ie ? M.createHTML(s) : s;
      if (n = ut(s), !n)
        return Y ? null : ie ? _e : "";
    }
    n && Ne && N(n.firstChild);
    for (var j = ft(Q ? s : n); d = j.nextNode(); )
      d.nodeType === 3 && d === L || mt(d) || (d.content instanceof u && tr(d.content), vt(d), L = d);
    if (L = null, Q)
      return s;
    if (Y) {
      if (oe)
        for (S = zt.call(n.ownerDocument); n.firstChild; )
          S.appendChild(n.firstChild);
      else
        S = n;
      return (E.shadowroot || E.shadowrootmod) && (S = Bt.call(o, S, !0)), S;
    }
    var T = G ? n.outerHTML : n.innerHTML;
    return G && _["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && g(Mr, n.ownerDocument.doctype.name) && (T = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + T), q && (T = x(T, ye, " "), T = x(T, Ae, " "), T = x(T, ge, " ")), M && ie ? M.createHTML(T) : T;
  }, r.setConfig = function(s) {
    xe(s), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(s, e, n) {
    Z || xe({});
    var a = y(s), d = y(e);
    return dt(a, d, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], re(k[s], e));
  }, r.removeHook = function(s) {
    if (k[s])
      return gt(k[s]);
  }, r.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, r.removeAllHooks = function() {
    k = {};
  }, r;
}
var kr = xt();
const Fr = (t) => ({ __html: kr.sanitize(t) });
m.shape({
  event: m.string,
  action: m.string,
  name: m.string,
  region: m.string,
  section: m.string,
  component: m.string,
  type: m.string,
  text: m.string
});
const Ur = ({
  event: t = "",
  action: r = "",
  name: o = "",
  type: i = "",
  section: u = "",
  text: l = "",
  region: c = "",
  component: p = ""
}) => {
  const { dataLayer: h } = window, O = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: c.toLowerCase(),
    section: u.toLowerCase(),
    text: l.toLowerCase(),
    component: p.toLowerCase()
  };
  h && h.push(O);
};
m.shape({
  url: m.string,
  altText: m.string,
  cssClass: m.arrayOf(m.string),
  size: m.oneOf(["small", "medium", "large"])
});
m.shape({
  text: m.string,
  maxWidth: m.string,
  cssClass: m.arrayOf(m.string),
  highlightColor: m.oneOf(["gold", "black"])
});
const It = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  content: m.shape({
    icon: m.string,
    header: m.string,
    body: m.string
  })
});
var Pt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function o() {
      for (var l = "", c = 0; c < arguments.length; c++) {
        var p = arguments[c];
        p && (l = u(l, i(p)));
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
      var c = "";
      for (var p in l)
        r.call(l, p) && l[p] && (c = u(c, p));
      return c;
    }
    function u(l, c) {
      return c ? l ? l + " " + c : l + c : l;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(Pt);
var Hr = Pt.exports;
const je = /* @__PURE__ */ Ct(Hr), kt = ({ id: t, item: r, openCard: o, onClick: i }) => {
  var u, l, c, p, h, O;
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: je("accordion-item", "mt-3", {
        [`accordion-item-${r.color}`]: r.color,
        "accordion-header-icon": (u = r.content) == null ? void 0 : u.icon
      }),
      children: [
        /* @__PURE__ */ P.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ P.jsx("h4", { children: /* @__PURE__ */ P.jsxs(
          "a",
          {
            "data-testid": "accordion-opener",
            className: je({ collapsed: t !== o }),
            "data-bs-toggle": "collapse",
            href: `#card-body-${t}`,
            role: "button",
            "aria-expanded": t === o,
            "aria-controls": `card-body-${t}`,
            onClick: (R) => {
              var D;
              return i(R, t, (D = r.content) == null ? void 0 : D.header);
            },
            children: [
              (l = r.content) != null && l.icon ? /* @__PURE__ */ P.jsxs("span", { className: "accordion-icon", children: [
                /* @__PURE__ */ P.jsx(
                  "i",
                  {
                    className: `${(c = r.content.icon) == null ? void 0 : c[0]} fa-${(p = r.content.icon) == null ? void 0 : p[1]} me-2`
                  }
                ),
                r.content.header
              ] }) : (h = r.content) == null ? void 0 : h.header,
              /* @__PURE__ */ P.jsx("i", { className: "fas fa-chevron-up" })
            ]
          }
        ) }) }),
        ((O = r.content) == null ? void 0 : O.body) && /* @__PURE__ */ P.jsx("div", { id: `card-body-${t}`, className: je("collapse"), children: /* @__PURE__ */ P.jsx(
          "div",
          {
            className: "accordion-body",
            dangerouslySetInnerHTML: Fr(r.content.body)
          }
        ) })
      ]
    }
  );
};
kt.propTypes = {
  id: m.number,
  item: It,
  openCard: m.number,
  onClick: m.func
};
const Wr = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Nt = {
  OPEN: "open",
  CLOSE: "close"
}, zr = ({ cards: t, openedCard: r }) => {
  const [o, i] = nr(r), u = (c, p) => {
    Ur({
      ...Wr,
      action: p,
      text: c
    });
  }, l = (c, p, h) => {
    c.preventDefault(), (o === p || o) && u(
      t[o - 1].content.header,
      Nt.CLOSE
    ), o !== p ? (i(p), u(h, Nt.OPEN)) : i(null);
  };
  return /* @__PURE__ */ P.jsx("div", { className: "accordion", children: t == null ? void 0 : t.map(
    (c, p) => c.content.body && c.content.header && /* @__PURE__ */ P.jsx(
      kt,
      {
        id: p + 1,
        item: c,
        openCard: o,
        onClick: l
      },
      p + 1
    )
  ) });
};
zr.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: m.arrayOf(It).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: m.number
};
export {
  zr as Accordion
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
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
