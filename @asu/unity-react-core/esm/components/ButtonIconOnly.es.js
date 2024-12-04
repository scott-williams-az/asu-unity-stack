import Zt from "react";
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Lt = { exports: {} }, ee = {};
var Tt;
function Qt() {
  if (Tt) return ee;
  Tt = 1;
  var t = Zt, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, f, C) {
    var O, F = {}, U = null, W = null;
    C !== void 0 && (U = "" + C), f.key !== void 0 && (U = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (O in f) i.call(f, O) && !p.hasOwnProperty(O) && (F[O] = f[O]);
    if (T && T.defaultProps) for (O in f = T.defaultProps, f) F[O] === void 0 && (F[O] = f[O]);
    return { $$typeof: r, type: T, key: U, ref: W, props: F, _owner: u.current };
  }
  return ee.Fragment = o, ee.jsx = m, ee.jsxs = m, ee;
}
Lt.exports = Qt();
var _t = Lt.exports, Nt = { exports: {} }, ke, ht;
function er() {
  if (ht) return ke;
  ht = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = t, ke;
}
var Pe, Et;
function tr() {
  if (Et) return Pe;
  Et = 1;
  var t = er();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Pe = function() {
    function i(m, T, f, C, O, F) {
      if (F !== t) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    i.isRequired = i;
    function u() {
      return i;
    }
    var p = {
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
    return p.PropTypes = p, p;
  }, Pe;
}
Nt.exports = tr()();
var rr = Nt.exports;
const v = /* @__PURE__ */ Jt(rr);
v.shape({
  event: v.string,
  action: v.string,
  name: v.string,
  region: v.string,
  section: v.string,
  component: v.string,
  type: v.string,
  text: v.string
});
const ar = ({
  event: t = "",
  action: r = "",
  name: o = "",
  type: i = "",
  section: u = "",
  text: p = "",
  region: m = "",
  component: T = ""
}) => {
  const { dataLayer: f } = window, C = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: m.toLowerCase(),
    section: u.toLowerCase(),
    text: p.toLowerCase(),
    component: T.toLowerCase()
  };
  f && f.push(C);
}, nr = (t, r) => ({
  "data-ga": t.text,
  "data-ga-name": t.name,
  "data-ga-event": t.event,
  "data-ga-action": t.action,
  "data-ga-type": t.type,
  "data-ga-region": t.region,
  "data-ga-section": t.section,
  "data-ga-component": t.component,
  onClick: typeof r == "function" ? r : void 0
}), or = (t, r) => ({
  onClick: (o) => {
    ar(t), typeof r == "function" && r();
  }
});
function ir(t, r, o) {
  return r ? nr(t, o) : or(t, o);
}
function H(t) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, H(t);
}
function Be(t, r) {
  return Be = Object.setPrototypeOf || function(i, u) {
    return i.__proto__ = u, i;
  }, Be(t, r);
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
function pe(t, r, o) {
  return lr() ? pe = Reflect.construct : pe = function(u, p, m) {
    var T = [null];
    T.push.apply(T, p);
    var f = Function.bind.apply(u, T), C = new f();
    return m && Be(C, m.prototype), C;
  }, pe.apply(null, arguments);
}
function I(t) {
  return sr(t) || ur(t) || cr(t) || fr();
}
function sr(t) {
  if (Array.isArray(t)) return $e(t);
}
function ur(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function cr(t, r) {
  if (t) {
    if (typeof t == "string") return $e(t, r);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return $e(t, r);
  }
}
function $e(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
  return i;
}
function fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pr = Object.hasOwnProperty, yt = Object.setPrototypeOf, mr = Object.isFrozen, dr = Object.getPrototypeOf, vr = Object.getOwnPropertyDescriptor, b = Object.freeze, N = Object.seal, Tr = Object.create, wt = typeof Reflect < "u" && Reflect, de = wt.apply, je = wt.construct;
de || (de = function(r, o, i) {
  return r.apply(o, i);
});
b || (b = function(r) {
  return r;
});
N || (N = function(r) {
  return r;
});
je || (je = function(r, o) {
  return pe(r, I(o));
});
var _r = w(Array.prototype.forEach), At = w(Array.prototype.pop), te = w(Array.prototype.push), me = w(String.prototype.toLowerCase), Fe = w(String.prototype.toString), gt = w(String.prototype.match), M = w(String.prototype.replace), hr = w(String.prototype.indexOf), Er = w(String.prototype.trim), g = w(RegExp.prototype.test), Ue = yr(TypeError);
function w(t) {
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
      i[u - 1] = arguments[u];
    return de(t, r, i);
  };
}
function yr(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return je(t, o);
  };
}
function s(t, r, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : me, yt && yt(t, null);
  for (var u = r.length; u--; ) {
    var p = r[u];
    if (typeof p == "string") {
      var m = o(p);
      m !== p && (mr(r) || (r[u] = m), p = m);
    }
    t[p] = !0;
  }
  return t;
}
function $(t) {
  var r = Tr(null), o;
  for (o in t)
    de(pr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function ce(t, r) {
  for (; t !== null; ) {
    var o = vr(t, r);
    if (o) {
      if (o.get)
        return w(o.get);
      if (typeof o.value == "function")
        return w(o.value);
    }
    t = dr(t);
  }
  function i(u) {
    return console.warn("fallback value for", u), null;
  }
  return i;
}
var St = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), He = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), We = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ar = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ze = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), gr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bt = b(["#text"]), Rt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ge = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ot = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sr = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), br = N(/<%[\w\W]*|[\w\W]*%>/gm), Rr = N(/\${[\w\W]*}/gm), Or = N(/^data-[\-\w.\u00B7-\uFFFF]/), Lr = N(/^aria-[\-\w]+$/), Nr = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wr = N(/^(?:\w+script|data):/i), Cr = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = N(/^html$/i), Mr = N(/^[a-z][.\w]*(-[.\w]+)+$/i), Ir = function() {
  return typeof window > "u" ? null : window;
}, xr = function(r, o) {
  if (H(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var i = null, u = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(u) && (i = o.currentScript.getAttribute(u));
  var p = "dompurify" + (i ? "#" + i : "");
  try {
    return r.createPolicy(p, {
      createHTML: function(T) {
        return T;
      },
      createScriptURL: function(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
};
function Ct() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ir(), r = function(e) {
    return Ct(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, i = t.document, u = t.DocumentFragment, p = t.HTMLTemplateElement, m = t.Node, T = t.Element, f = t.NodeFilter, C = t.NamedNodeMap, O = C === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : C, F = t.HTMLFormElement, U = t.DOMParser, W = t.trustedTypes, re = T.prototype, Mt = ce(re, "cloneNode"), It = ce(re, "nextSibling"), xt = ce(re, "childNodes"), ve = ce(re, "parentNode");
  if (typeof p == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var D = xr(W, o), _e = D ? D.createHTML("") : "", ae = i, he = ae.implementation, kt = ae.createNodeIterator, Pt = ae.createDocumentFragment, Ft = ae.getElementsByTagName, Ut = o.importNode, qe = {};
  try {
    qe = $(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var x = {};
  r.isSupported = typeof ve == "function" && he && he.createHTMLDocument !== void 0 && qe !== 9;
  var Ee = Sr, ye = br, Ae = Rr, Ht = Or, Wt = Lr, zt = wr, Ye = Cr, Gt = Mr, ge = Nr, h = null, Ve = s({}, [].concat(I(St), I(He), I(We), I(ze), I(bt))), E = null, Xe = s({}, [].concat(I(Rt), I(Ge), I(Ot), I(fe))), d = Object.seal(Object.create(null, {
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
  })), Z = null, Se = null, Ke = !0, be = !0, Ze = !1, Je = !0, j = !1, Re = !0, z = !1, Oe = !1, Le = !1, q = !1, ne = !1, oe = !1, Qe = !0, et = !1, Bt = "user-content-", Ne = !0, J = !1, Y = {}, V = null, tt = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), rt = null, at = s({}, ["audio", "video", "img", "source", "image", "track"]), we = null, nt = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ie = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", k = "http://www.w3.org/1999/xhtml", X = k, Ce = !1, De = null, $t = s({}, [ie, le, k], Fe), G, jt = ["application/xhtml+xml", "text/html"], qt = "text/html", y, K = null, Yt = i.createElement("form"), ot = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Me = function(e) {
    K && K === e || ((!e || H(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    jt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = qt : G = e.PARSER_MEDIA_TYPE, y = G === "application/xhtml+xml" ? Fe : me, h = "ALLOWED_TAGS" in e ? s({}, e.ALLOWED_TAGS, y) : Ve, E = "ALLOWED_ATTR" in e ? s({}, e.ALLOWED_ATTR, y) : Xe, De = "ALLOWED_NAMESPACES" in e ? s({}, e.ALLOWED_NAMESPACES, Fe) : $t, we = "ADD_URI_SAFE_ATTR" in e ? s(
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
  s(se, We), s(se, Ar);
  var Ie = s({}, ze);
  s(Ie, gr);
  var Xt = function(e) {
    var a = ve(e);
    (!a || !a.tagName) && (a = {
      namespaceURI: X,
      tagName: "template"
    });
    var n = me(e.tagName), c = me(a.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? a.namespaceURI === k ? n === "svg" : a.namespaceURI === ie ? n === "svg" && (c === "annotation-xml" || it[c]) : !!se[n] : e.namespaceURI === ie ? a.namespaceURI === k ? n === "math" : a.namespaceURI === le ? n === "math" && lt[c] : !!Ie[n] : e.namespaceURI === k ? a.namespaceURI === le && !lt[c] || a.namespaceURI === ie && !it[c] ? !1 : !Ie[n] && (Vt[n] || !se[n]) : !!(G === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
  }, L = function(e) {
    te(r.removed, {
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
  }, ue = function(e, a) {
    try {
      te(r.removed, {
        attribute: a.getAttributeNode(e),
        from: a
      });
    } catch {
      te(r.removed, {
        attribute: null,
        from: a
      });
    }
    if (a.removeAttribute(e), e === "is" && !E[e])
      if (q || ne)
        try {
          L(a);
        } catch {
        }
      else
        try {
          a.setAttribute(e, "");
        } catch {
        }
  }, st = function(e) {
    var a, n;
    if (Le)
      e = "<remove></remove>" + e;
    else {
      var c = gt(e, /^[\r\n\t ]+/);
      n = c && c[0];
    }
    G === "application/xhtml+xml" && X === k && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = D ? D.createHTML(e) : e;
    if (X === k)
      try {
        a = new U().parseFromString(R, G);
      } catch {
      }
    if (!a || !a.documentElement) {
      a = he.createDocument(X, "template", null);
      try {
        a.documentElement.innerHTML = Ce ? _e : R;
      } catch {
      }
    }
    var S = a.body || a.documentElement;
    return e && n && S.insertBefore(i.createTextNode(n), S.childNodes[0] || null), X === k ? Ft.call(a, z ? "html" : "body")[0] : z ? a.documentElement : S;
  }, ut = function(e) {
    return kt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ct = function(e) {
    return e instanceof F && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Q = function(e) {
    return H(m) === "object" ? e instanceof m : e && H(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, P = function(e, a, n) {
    x[e] && _r(x[e], function(c) {
      c.call(r, a, n, K);
    });
  }, ft = function(e) {
    var a;
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
        var c = ve(e) || e.parentNode, R = xt(e) || e.childNodes;
        if (R && c)
          for (var S = R.length, A = S - 1; A >= 0; --A) {
            var B = Mt(R[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(B, It(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof T && !Xt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (j && e.nodeType === 3 && (a = e.textContent, a = M(a, Ee, " "), a = M(a, ye, " "), a = M(a, Ae, " "), e.textContent !== a && (te(r.removed, {
      element: e.cloneNode()
    }), e.textContent = a)), P("afterSanitizeElements", e, null), !1);
  }, pt = function(e, a, n) {
    if (Qe && (a === "id" || a === "name") && (n in i || n in Yt))
      return !1;
    if (!(be && !Se[a] && g(Ht, a))) {
      if (!(Ke && g(Wt, a))) {
        if (!E[a] || Se[a]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(mt(e) && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, e) || d.tagNameCheck instanceof Function && d.tagNameCheck(e)) && (d.attributeNameCheck instanceof RegExp && g(d.attributeNameCheck, a) || d.attributeNameCheck instanceof Function && d.attributeNameCheck(a)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            a === "is" && d.allowCustomizedBuiltInElements && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, n) || d.tagNameCheck instanceof Function && d.tagNameCheck(n)))
          ) return !1;
        } else if (!we[a]) {
          if (!g(ge, M(n, Ye, ""))) {
            if (!((a === "src" || a === "xlink:href" || a === "href") && e !== "script" && hr(n, "data:") === 0 && rt[e])) {
              if (!(Ze && !g(zt, M(n, Ye, "")))) {
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
    var a, n, c, R;
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
        a = S[R];
        var B = a, _ = B.name, xe = B.namespaceURI;
        if (n = _ === "value" ? a.value : Er(a.value), c = y(_), A.attrName = c, A.attrValue = n, A.keepAttr = !0, A.forceKeepAttr = void 0, P("uponSanitizeAttribute", e, A), n = A.attrValue, !A.forceKeepAttr && (ue(_, e), !!A.keepAttr)) {
          if (!Je && g(/\/>/i, n)) {
            ue(_, e);
            continue;
          }
          j && (n = M(n, Ee, " "), n = M(n, ye, " "), n = M(n, Ae, " "));
          var vt = y(e.nodeName);
          if (pt(vt, c, n)) {
            if (et && (c === "id" || c === "name") && (ue(_, e), n = Bt + n), Re && g(/((--!?|])>)|<\/(style|title)/i, n)) {
              ue(_, e);
              continue;
            }
            if (D && H(W) === "object" && typeof W.getAttributeType == "function" && !xe)
              switch (W.getAttributeType(vt, c)) {
                case "TrustedHTML": {
                  n = D.createHTML(n);
                  break;
                }
                case "TrustedScriptURL": {
                  n = D.createScriptURL(n);
                  break;
                }
              }
            try {
              xe ? e.setAttributeNS(xe, _, n) : e.setAttribute(_, n), ct(e) ? L(e) : At(r.removed);
            } catch {
            }
          }
        }
      }
      P("afterSanitizeAttributes", e, null);
    }
  }, Kt = function l(e) {
    var a, n = ut(e);
    for (P("beforeSanitizeShadowDOM", e, null); a = n.nextNode(); )
      P("uponSanitizeShadowNode", a, null), !ft(a) && (a.content instanceof u && l(a.content), dt(a));
    P("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(l) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a, n, c, R, S;
    if (Ce = !l, Ce && (l = "<!-->"), typeof l != "string" && !Q(l))
      if (typeof l.toString == "function") {
        if (l = l.toString(), typeof l != "string")
          throw Ue("dirty is not a string, aborting");
      } else
        throw Ue("toString is not a function");
    if (!r.isSupported) {
      if (H(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof l == "string")
          return t.toStaticHTML(l);
        if (Q(l))
          return t.toStaticHTML(l.outerHTML);
      }
      return l;
    }
    if (Oe || Me(e), r.removed = [], typeof l == "string" && (J = !1), J) {
      if (l.nodeName) {
        var A = y(l.nodeName);
        if (!h[A] || Z[A])
          throw Ue("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (l instanceof m)
      a = st("<!---->"), n = a.ownerDocument.importNode(l, !0), n.nodeType === 1 && n.nodeName === "BODY" || n.nodeName === "HTML" ? a = n : a.appendChild(n);
    else {
      if (!q && !j && !z && // eslint-disable-next-line unicorn/prefer-includes
      l.indexOf("<") === -1)
        return D && oe ? D.createHTML(l) : l;
      if (a = st(l), !a)
        return q ? null : oe ? _e : "";
    }
    a && Le && L(a.firstChild);
    for (var B = ut(J ? l : a); c = B.nextNode(); )
      c.nodeType === 3 && c === R || ft(c) || (c.content instanceof u && Kt(c.content), dt(c), R = c);
    if (R = null, J)
      return l;
    if (q) {
      if (ne)
        for (S = Pt.call(a.ownerDocument); a.firstChild; )
          S.appendChild(a.firstChild);
      else
        S = a;
      return (E.shadowroot || E.shadowrootmod) && (S = Ut.call(o, S, !0)), S;
    }
    var _ = z ? a.outerHTML : a.innerHTML;
    return z && h["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && g(Dr, a.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + a.ownerDocument.doctype.name + `>
` + _), j && (_ = M(_, Ee, " "), _ = M(_, ye, " "), _ = M(_, Ae, " ")), D && oe ? D.createHTML(_) : _;
  }, r.setConfig = function(l) {
    Me(l), Oe = !0;
  }, r.clearConfig = function() {
    K = null, Oe = !1;
  }, r.isValidAttribute = function(l, e, a) {
    K || Me({});
    var n = y(l), c = y(e);
    return pt(n, c, a);
  }, r.addHook = function(l, e) {
    typeof e == "function" && (x[l] = x[l] || [], te(x[l], e));
  }, r.removeHook = function(l) {
    if (x[l])
      return At(x[l]);
  }, r.removeHooks = function(l) {
    x[l] && (x[l] = []);
  }, r.removeAllHooks = function() {
    x = {};
  }, r;
}
Ct();
const kr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Dt = ({
  color: t,
  icon: r,
  innerRef: o,
  onClick: i,
  size: u,
  cardTitle: p,
  className: m,
  useExternal: T,
  ...f
}) => /* @__PURE__ */ _t.jsx(
  "button",
  {
    type: "button",
    className: `btn btn-circle btn-circle-alt-${t} ${u === "large" && "btn-circle-large"} ${m}`,
    ref: o,
    "aria-label": "Close",
    ...ir(
      {
        ...kr,
        text: `${r == null ? void 0 : r[1]} icon`,
        section: p
      },
      T,
      i
    ),
    ...f,
    children: /* @__PURE__ */ _t.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
  }
);
Dt.propTypes = {
  /**
    Color the button based on the background color
  */
  color: v.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: v.arrayOf(v.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: v.oneOfType([
    v.object,
    v.func,
    v.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: v.func,
  /**
   * Card title
   */
  cardTitle: v.string,
  /**
    Button size
  */
  size: v.oneOf(["large", "small"]),
  className: v.string,
  useExternal: v.bool
};
Dt.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
export {
  Dt as ButtonIconOnly
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
