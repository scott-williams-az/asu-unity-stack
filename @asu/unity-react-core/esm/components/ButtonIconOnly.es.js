import Zt from "react";
function Jt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Lt = { exports: {} }, ee = {};
var vt;
function Qt() {
  if (vt) return ee;
  vt = 1;
  var r = Zt, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, p, D) {
    var O, F = {}, U = null, W = null;
    D !== void 0 && (U = "" + D), p.key !== void 0 && (U = "" + p.key), p.ref !== void 0 && (W = p.ref);
    for (O in p) o.call(p, O) && !f.hasOwnProperty(O) && (F[O] = p[O]);
    if (T && T.defaultProps) for (O in p = T.defaultProps, p) F[O] === void 0 && (F[O] = p[O]);
    return { $$typeof: a, type: T, key: U, ref: W, props: F, _owner: u.current };
  }
  return ee.Fragment = i, ee.jsx = m, ee.jsxs = m, ee;
}
Lt.exports = Qt();
var _t = Lt.exports, Nt = { exports: {} }, ke, ht;
function er() {
  if (ht) return ke;
  ht = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = r, ke;
}
var Pe, Et;
function tr() {
  if (Et) return Pe;
  Et = 1;
  var r = er();
  function a() {
  }
  function i() {
  }
  return i.resetWarningCache = a, Pe = function() {
    function o(m, T, p, D, O, F) {
      if (F !== r) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    o.isRequired = o;
    function u() {
      return o;
    }
    var f = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: u,
      element: o,
      elementType: o,
      instanceOf: u,
      node: o,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: i,
      resetWarningCache: a
    };
    return f.PropTypes = f, f;
  }, Pe;
}
Nt.exports = tr()();
var rr = Nt.exports;
const _ = /* @__PURE__ */ Jt(rr);
function H(r) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, H(r);
}
function Be(r, a) {
  return Be = Object.setPrototypeOf || function(o, u) {
    return o.__proto__ = u, o;
  }, Be(r, a);
}
function ar() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pe(r, a, i) {
  return ar() ? pe = Reflect.construct : pe = function(u, f, m) {
    var T = [null];
    T.push.apply(T, f);
    var p = Function.bind.apply(u, T), D = new p();
    return m && Be(D, m.prototype), D;
  }, pe.apply(null, arguments);
}
function I(r) {
  return nr(r) || or(r) || ir(r) || lr();
}
function nr(r) {
  if (Array.isArray(r)) return $e(r);
}
function or(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function ir(r, a) {
  if (r) {
    if (typeof r == "string") return $e(r, a);
    var i = Object.prototype.toString.call(r).slice(8, -1);
    if (i === "Object" && r.constructor && (i = r.constructor.name), i === "Map" || i === "Set") return Array.from(r);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return $e(r, a);
  }
}
function $e(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var i = 0, o = new Array(a); i < a; i++) o[i] = r[i];
  return o;
}
function lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var sr = Object.hasOwnProperty, yt = Object.setPrototypeOf, ur = Object.isFrozen, cr = Object.getPrototypeOf, fr = Object.getOwnPropertyDescriptor, b = Object.freeze, N = Object.seal, pr = Object.create, wt = typeof Reflect < "u" && Reflect, de = wt.apply, je = wt.construct;
de || (de = function(a, i, o) {
  return a.apply(i, o);
});
b || (b = function(a) {
  return a;
});
N || (N = function(a) {
  return a;
});
je || (je = function(a, i) {
  return pe(a, I(i));
});
var mr = w(Array.prototype.forEach), At = w(Array.prototype.pop), te = w(Array.prototype.push), me = w(String.prototype.toLowerCase), Fe = w(String.prototype.toString), gt = w(String.prototype.match), C = w(String.prototype.replace), dr = w(String.prototype.indexOf), Tr = w(String.prototype.trim), g = w(RegExp.prototype.test), Ue = vr(TypeError);
function w(r) {
  return function(a) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
      o[u - 1] = arguments[u];
    return de(r, a, o);
  };
}
function vr(r) {
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return je(r, i);
  };
}
function s(r, a, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : me, yt && yt(r, null);
  for (var u = a.length; u--; ) {
    var f = a[u];
    if (typeof f == "string") {
      var m = i(f);
      m !== f && (ur(a) || (a[u] = m), f = m);
    }
    r[f] = !0;
  }
  return r;
}
function $(r) {
  var a = pr(null), i;
  for (i in r)
    de(sr, r, [i]) === !0 && (a[i] = r[i]);
  return a;
}
function ce(r, a) {
  for (; r !== null; ) {
    var i = fr(r, a);
    if (i) {
      if (i.get)
        return w(i.get);
      if (typeof i.value == "function")
        return w(i.value);
    }
    r = cr(r);
  }
  function o(u) {
    return console.warn("fallback value for", u), null;
  }
  return o;
}
var St = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), He = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), We = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _r = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ze = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), hr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bt = b(["#text"]), Rt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ge = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ot = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Er = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yr = N(/<%[\w\W]*|[\w\W]*%>/gm), Ar = N(/\${[\w\W]*}/gm), gr = N(/^data-[\-\w.\u00B7-\uFFFF]/), Sr = N(/^aria-[\-\w]+$/), br = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rr = N(/^(?:\w+script|data):/i), Or = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lr = N(/^html$/i), Nr = N(/^[a-z][.\w]*(-[.\w]+)+$/i), wr = function() {
  return typeof window > "u" ? null : window;
}, Dr = function(a, i) {
  if (H(a) !== "object" || typeof a.createPolicy != "function")
    return null;
  var o = null, u = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(u) && (o = i.currentScript.getAttribute(u));
  var f = "dompurify" + (o ? "#" + o : "");
  try {
    return a.createPolicy(f, {
      createHTML: function(T) {
        return T;
      },
      createScriptURL: function(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + f + " could not be created."), null;
  }
};
function Dt() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wr(), a = function(e) {
    return Dt(e);
  };
  if (a.version = "2.5.7", a.removed = [], !r || !r.document || r.document.nodeType !== 9)
    return a.isSupported = !1, a;
  var i = r.document, o = r.document, u = r.DocumentFragment, f = r.HTMLTemplateElement, m = r.Node, T = r.Element, p = r.NodeFilter, D = r.NamedNodeMap, O = D === void 0 ? r.NamedNodeMap || r.MozNamedAttrMap : D, F = r.HTMLFormElement, U = r.DOMParser, W = r.trustedTypes, re = T.prototype, Ct = ce(re, "cloneNode"), It = ce(re, "nextSibling"), xt = ce(re, "childNodes"), Te = ce(re, "parentNode");
  if (typeof f == "function") {
    var ve = o.createElement("template");
    ve.content && ve.content.ownerDocument && (o = ve.content.ownerDocument);
  }
  var M = Dr(W, i), _e = M ? M.createHTML("") : "", ae = o, he = ae.implementation, kt = ae.createNodeIterator, Pt = ae.createDocumentFragment, Ft = ae.getElementsByTagName, Ut = i.importNode, qe = {};
  try {
    qe = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var x = {};
  a.isSupported = typeof Te == "function" && he && he.createHTMLDocument !== void 0 && qe !== 9;
  var Ee = Er, ye = yr, Ae = Ar, Ht = gr, Wt = Sr, zt = Rr, Ye = Or, Gt = Nr, ge = br, h = null, Ve = s({}, [].concat(I(St), I(He), I(We), I(ze), I(bt))), E = null, Xe = s({}, [].concat(I(Rt), I(Ge), I(Ot), I(fe))), d = Object.seal(Object.create(null, {
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
  })), Z = null, Se = null, Ke = !0, be = !0, Ze = !1, Je = !0, j = !1, Re = !0, z = !1, Oe = !1, Le = !1, q = !1, ne = !1, oe = !1, Qe = !0, et = !1, Bt = "user-content-", Ne = !0, J = !1, Y = {}, V = null, tt = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), rt = null, at = s({}, ["audio", "video", "img", "source", "image", "track"]), we = null, nt = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ie = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", k = "http://www.w3.org/1999/xhtml", X = k, De = !1, Me = null, $t = s({}, [ie, le, k], Fe), G, jt = ["application/xhtml+xml", "text/html"], qt = "text/html", y, K = null, Yt = o.createElement("form"), ot = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function(e) {
    K && K === e || ((!e || H(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    jt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = qt : G = e.PARSER_MEDIA_TYPE, y = G === "application/xhtml+xml" ? Fe : me, h = "ALLOWED_TAGS" in e ? s({}, e.ALLOWED_TAGS, y) : Ve, E = "ALLOWED_ATTR" in e ? s({}, e.ALLOWED_ATTR, y) : Xe, Me = "ALLOWED_NAMESPACES" in e ? s({}, e.ALLOWED_NAMESPACES, Fe) : $t, we = "ADD_URI_SAFE_ATTR" in e ? s(
      $(nt),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : nt, rt = "ADD_DATA_URI_TAGS" in e ? s(
      $(at),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : at, V = "FORBID_CONTENTS" in e ? s({}, e.FORBID_CONTENTS, y) : tt, Z = "FORBID_TAGS" in e ? s({}, e.FORBID_TAGS, y) : {}, Se = "FORBID_ATTR" in e ? s({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Ke = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, Ze = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Je = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, j = e.SAFE_FOR_TEMPLATES || !1, Re = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, q = e.RETURN_DOM || !1, ne = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Le = e.FORCE_BODY || !1, Qe = e.SANITIZE_DOM !== !1, et = e.SANITIZE_NAMED_PROPS || !1, Ne = e.KEEP_CONTENT !== !1, J = e.IN_PLACE || !1, ge = e.ALLOWED_URI_REGEXP || ge, X = e.NAMESPACE || k, d = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (d.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (d.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (d.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), j && (be = !1), ne && (q = !0), Y && (h = s({}, I(bt)), E = [], Y.html === !0 && (s(h, St), s(E, Rt)), Y.svg === !0 && (s(h, He), s(E, Ge), s(E, fe)), Y.svgFilters === !0 && (s(h, We), s(E, Ge), s(E, fe)), Y.mathMl === !0 && (s(h, ze), s(E, Ot), s(E, fe))), e.ADD_TAGS && (h === Ve && (h = $(h)), s(h, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Xe && (E = $(E)), s(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && s(we, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (V === tt && (V = $(V)), s(V, e.FORBID_CONTENTS, y)), Ne && (h["#text"] = !0), z && s(h, ["html", "head", "body"]), h.table && (s(h, ["tbody"]), delete Z.tbody), b && b(e), K = e);
  }, it = s({}, ["mi", "mo", "mn", "ms", "mtext"]), lt = s({}, ["annotation-xml"]), Vt = s({}, ["title", "style", "font", "a", "script"]), se = s({}, He);
  s(se, We), s(se, _r);
  var Ie = s({}, ze);
  s(Ie, hr);
  var Xt = function(e) {
    var t = Te(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: X,
      tagName: "template"
    });
    var n = me(e.tagName), c = me(t.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === le ? t.namespaceURI === k ? n === "svg" : t.namespaceURI === ie ? n === "svg" && (c === "annotation-xml" || it[c]) : !!se[n] : e.namespaceURI === ie ? t.namespaceURI === k ? n === "math" : t.namespaceURI === le ? n === "math" && lt[c] : !!Ie[n] : e.namespaceURI === k ? t.namespaceURI === le && !lt[c] || t.namespaceURI === ie && !it[c] ? !1 : !Ie[n] && (Vt[n] || !se[n]) : !!(G === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
  }, L = function(e) {
    te(a.removed, {
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
  }, ue = function(e, t) {
    try {
      te(a.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      te(a.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is" && !E[e])
      if (q || ne)
        try {
          L(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, st = function(e) {
    var t, n;
    if (Le)
      e = "<remove></remove>" + e;
    else {
      var c = gt(e, /^[\r\n\t ]+/);
      n = c && c[0];
    }
    G === "application/xhtml+xml" && X === k && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = M ? M.createHTML(e) : e;
    if (X === k)
      try {
        t = new U().parseFromString(R, G);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = he.createDocument(X, "template", null);
      try {
        t.documentElement.innerHTML = De ? _e : R;
      } catch {
      }
    }
    var S = t.body || t.documentElement;
    return e && n && S.insertBefore(o.createTextNode(n), S.childNodes[0] || null), X === k ? Ft.call(t, z ? "html" : "body")[0] : z ? t.documentElement : S;
  }, ut = function(e) {
    return kt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ct = function(e) {
    return e instanceof F && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Q = function(e) {
    return H(m) === "object" ? e instanceof m : e && H(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, P = function(e, t, n) {
    x[e] && mr(x[e], function(c) {
      c.call(a, t, n, K);
    });
  }, ft = function(e) {
    var t;
    if (P("beforeSanitizeElements", e, null), ct(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return L(e), !0;
    var n = y(e.nodeName);
    if (P("uponSanitizeElement", e, {
      tagName: n,
      allowedTags: h
    }), e.hasChildNodes() && !Q(e.firstElementChild) && (!Q(e.content) || !Q(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || n === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Re && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return L(e), !0;
    if (!h[n] || Z[n]) {
      if (!Z[n] && mt(n) && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, n) || d.tagNameCheck instanceof Function && d.tagNameCheck(n)))
        return !1;
      if (Ne && !V[n]) {
        var c = Te(e) || e.parentNode, R = xt(e) || e.childNodes;
        if (R && c)
          for (var S = R.length, A = S - 1; A >= 0; --A) {
            var B = Ct(R[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(B, It(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof T && !Xt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (j && e.nodeType === 3 && (t = e.textContent, t = C(t, Ee, " "), t = C(t, ye, " "), t = C(t, Ae, " "), e.textContent !== t && (te(a.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), P("afterSanitizeElements", e, null), !1);
  }, pt = function(e, t, n) {
    if (Qe && (t === "id" || t === "name") && (n in o || n in Yt))
      return !1;
    if (!(be && !Se[t] && g(Ht, t))) {
      if (!(Ke && g(Wt, t))) {
        if (!E[t] || Se[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(mt(e) && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, e) || d.tagNameCheck instanceof Function && d.tagNameCheck(e)) && (d.attributeNameCheck instanceof RegExp && g(d.attributeNameCheck, t) || d.attributeNameCheck instanceof Function && d.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && d.allowCustomizedBuiltInElements && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, n) || d.tagNameCheck instanceof Function && d.tagNameCheck(n)))
          ) return !1;
        } else if (!we[t]) {
          if (!g(ge, C(n, Ye, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && dr(n, "data:") === 0 && rt[e])) {
              if (!(Ze && !g(zt, C(n, Ye, "")))) {
                if (n)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, mt = function(e) {
    return e !== "annotation-xml" && gt(e, Gt);
  }, dt = function(e) {
    var t, n, c, R;
    P("beforeSanitizeAttributes", e, null);
    var S = e.attributes;
    if (S) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: E
      };
      for (R = S.length; R--; ) {
        t = S[R];
        var B = t, v = B.name, xe = B.namespaceURI;
        if (n = v === "value" ? t.value : Tr(t.value), c = y(v), A.attrName = c, A.attrValue = n, A.keepAttr = !0, A.forceKeepAttr = void 0, P("uponSanitizeAttribute", e, A), n = A.attrValue, !A.forceKeepAttr && (ue(v, e), !!A.keepAttr)) {
          if (!Je && g(/\/>/i, n)) {
            ue(v, e);
            continue;
          }
          j && (n = C(n, Ee, " "), n = C(n, ye, " "), n = C(n, Ae, " "));
          var Tt = y(e.nodeName);
          if (pt(Tt, c, n)) {
            if (et && (c === "id" || c === "name") && (ue(v, e), n = Bt + n), Re && g(/((--!?|])>)|<\/(style|title)/i, n)) {
              ue(v, e);
              continue;
            }
            if (M && H(W) === "object" && typeof W.getAttributeType == "function" && !xe)
              switch (W.getAttributeType(Tt, c)) {
                case "TrustedHTML": {
                  n = M.createHTML(n);
                  break;
                }
                case "TrustedScriptURL": {
                  n = M.createScriptURL(n);
                  break;
                }
              }
            try {
              xe ? e.setAttributeNS(xe, v, n) : e.setAttribute(v, n), ct(e) ? L(e) : At(a.removed);
            } catch {
            }
          }
        }
      }
      P("afterSanitizeAttributes", e, null);
    }
  }, Kt = function l(e) {
    var t, n = ut(e);
    for (P("beforeSanitizeShadowDOM", e, null); t = n.nextNode(); )
      P("uponSanitizeShadowNode", t, null), !ft(t) && (t.content instanceof u && l(t.content), dt(t));
    P("afterSanitizeShadowDOM", e, null);
  };
  return a.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t, n, c, R, S;
    if (De = !l, De && (l = "<!-->"), typeof l != "string" && !Q(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Ue("dirty is not a string, aborting");
      } else
        throw Ue("toString is not a function");
    if (!a.isSupported) {
      if (H(r.toStaticHTML) === "object" || typeof r.toStaticHTML == "function") {
        if (typeof l == "string")
          return r.toStaticHTML(l);
        if (Q(l))
          return r.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (Oe || Ce(e), a.removed = [], typeof l == "string" && (J = !1), J) {
      if (l.nodeName) {
        var A = y(l.nodeName);
        if (!h[A] || Z[A])
          throw Ue("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof m)
      t = st("<!---->"), n = t.ownerDocument.importNode(l, !0), n.nodeType === 1 && n.nodeName === "BODY" || n.nodeName === "HTML" ? t = n : t.appendChild(n);
    else {
      if (!q && !j && !z && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return M && oe ? M.createHTML(l) : l;
      if (t = st(l), !t)
        return q ? null : oe ? _e : "";
    }
    t && Le && L(t.firstChild);
    for (var B = ut(J ? l : t); c = B.nextNode(); )
      c.nodeType === 3 && c === R || ft(c) || (c.content instanceof u && Kt(c.content), dt(c), R = c);
    if (R = null, J)
      return l;
    if (q) {
      if (ne)
        for (S = Pt.call(t.ownerDocument); t.firstChild; )
          S.appendChild(t.firstChild);
      else
        S = t;
      return (E.shadowroot || E.shadowrootmod) && (S = Ut.call(i, S, !0)), S;
    }
    var v = z ? t.outerHTML : t.innerHTML;
    return z && h["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && g(Lr, t.ownerDocument.doctype.name) && (v = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + v), j && (v = C(v, Ee, " "), v = C(v, ye, " "), v = C(v, Ae, " ")), M && oe ? M.createHTML(v) : v;
  }, a.setConfig = function(l) {
    Ce(l), Oe = !0;
  }, a.clearConfig = function() {
    K = null, Oe = !1;
  }, a.isValidAttribute = function(l, e, t) {
    K || Ce({});
    var n = y(l), c = y(e);
    return pt(n, c, t);
  }, a.addHook = function(l, e) {
    typeof e == "function" && (x[l] = x[l] || [], te(x[l], e));
  }, a.removeHook = function(l) {
    if (x[l])
      return At(x[l]);
  }, a.removeHooks = function(l) {
    x[l] && (x[l] = []);
  }, a.removeAllHooks = function() {
    x = {};
  }, a;
}
Dt();
_.shape({
  event: _.string,
  action: _.string,
  name: _.string,
  region: _.string,
  section: _.string,
  component: _.string,
  type: _.string,
  text: _.string
});
const Mr = ({
  event: r = "",
  action: a = "",
  name: i = "",
  type: o = "",
  section: u = "",
  text: f = "",
  region: m = "",
  component: T = ""
}) => {
  const { dataLayer: p } = window, D = {
    event: r.toLowerCase(),
    action: a.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: m.toLowerCase(),
    section: u.toLowerCase(),
    text: f.toLowerCase(),
    component: T.toLowerCase()
  };
  p && p.push(D);
}, Cr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Mt = ({
  color: r,
  icon: a,
  innerRef: i,
  onClick: o,
  size: u,
  cardTitle: f
}) => {
  const m = (T) => {
    Mr({ ...Cr, text: T, section: f }), o == null || o();
  };
  return /* @__PURE__ */ _t.jsx(
    "button",
    {
      type: "button",
      className: `btn btn-circle btn-circle-alt-${r} ${u === "large" && "btn-circle-large"}`,
      ref: i,
      onClick: () => m(`${a == null ? void 0 : a[1]} icon`),
      "aria-label": "Close",
      children: /* @__PURE__ */ _t.jsx("i", { className: `${a == null ? void 0 : a[0]} fa-${a == null ? void 0 : a[1]}` })
    }
  );
};
Mt.propTypes = {
  /**
    Color the button based on the background color
  */
  color: _.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: _.arrayOf(_.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: _.oneOfType([
    _.object,
    _.func,
    _.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: _.func,
  /**
   * Card title
   */
  cardTitle: _.string,
  /**
    Button size
  */
  size: _.oneOf(["large", "small"])
};
Mt.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
export {
  Mt as ButtonIconOnly
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
