import Qt, { useState as er } from "react";
function Nt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ct = { exports: {} }, te = {};
var ht;
function tr() {
  if (ht) return te;
  ht = 1;
  var t = Qt, r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, d, O) {
    var b, D = {}, U = null, z = null;
    O !== void 0 && (U = "" + O), d.key !== void 0 && (U = "" + d.key), d.ref !== void 0 && (z = d.ref);
    for (b in d) i.call(d, b) && !l.hasOwnProperty(b) && (D[b] = d[b]);
    if (p && p.defaultProps) for (b in d = p.defaultProps, d) D[b] === void 0 && (D[b] = d[b]);
    return { $$typeof: r, type: p, key: U, ref: z, props: D, _owner: c.current };
  }
  return te.Fragment = o, te.jsx = f, te.jsxs = f, te;
}
Ct.exports = tr();
var H = Ct.exports, wt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function o() {
      for (var l = "", f = 0; f < arguments.length; f++) {
        var p = arguments[f];
        p && (l = c(l, i(p)));
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
      for (var p in l)
        r.call(l, p) && l[p] && (f = c(f, p));
      return f;
    }
    function c(l, f) {
      return f ? l ? l + " " + f : l + f : l;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(wt);
var rr = wt.exports;
const nr = /* @__PURE__ */ Nt(rr);
var Dt = { exports: {} }, Pe, Et;
function ar() {
  if (Et) return Pe;
  Et = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, yt;
function or() {
  if (yt) return Fe;
  yt = 1;
  var t = ar();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Fe = function() {
    function i(f, p, d, O, b, D) {
      if (D !== t) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
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
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Fe;
}
Dt.exports = or()();
var ir = Dt.exports;
const T = /* @__PURE__ */ Nt(ir);
T.shape({
  event: T.string,
  action: T.string,
  name: T.string,
  region: T.string,
  section: T.string,
  component: T.string,
  type: T.string,
  text: T.string
});
const sr = ({
  event: t = "",
  action: r = "",
  name: o = "",
  type: i = "",
  section: c = "",
  text: l = "",
  region: f = "",
  component: p = ""
}) => {
  const { dataLayer: d } = window, O = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: f.toLowerCase(),
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: p.toLowerCase()
  };
  d && d.push(O);
}, lr = (t, r) => ({
  "data-ga": t.text,
  "data-ga-name": t.name,
  "data-ga-event": t.event,
  "data-ga-action": t.action,
  "data-ga-type": t.type,
  "data-ga-region": t.region,
  "data-ga-section": t.section,
  "data-ga-component": t.component,
  onClick: typeof r == "function" ? r : void 0
}), ur = (t, r) => ({
  onClick: (o) => {
    sr(t), typeof r == "function" && r();
  }
});
function cr(t, r, o) {
  return r ? lr(t, o) : ur(t, o);
}
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, W(t);
}
function $e(t, r) {
  return $e = Object.setPrototypeOf || function(i, c) {
    return i.__proto__ = c, i;
  }, $e(t, r);
}
function fr() {
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
  return fr() ? me = Reflect.construct : me = function(c, l, f) {
    var p = [null];
    p.push.apply(p, l);
    var d = Function.bind.apply(c, p), O = new d();
    return f && $e(O, f.prototype), O;
  }, me.apply(null, arguments);
}
function x(t) {
  return pr(t) || mr(t) || dr(t) || vr();
}
function pr(t) {
  if (Array.isArray(t)) return je(t);
}
function mr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function dr(t, r) {
  if (t) {
    if (typeof t == "string") return je(t, r);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return je(t, r);
  }
}
function je(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var o = 0, i = new Array(r); o < r; o++) i[o] = t[o];
  return i;
}
function vr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tr = Object.hasOwnProperty, At = Object.setPrototypeOf, _r = Object.isFrozen, hr = Object.getPrototypeOf, Er = Object.getOwnPropertyDescriptor, R = Object.freeze, C = Object.seal, yr = Object.create, Mt = typeof Reflect < "u" && Reflect, ve = Mt.apply, qe = Mt.construct;
ve || (ve = function(r, o, i) {
  return r.apply(o, i);
});
R || (R = function(r) {
  return r;
});
C || (C = function(r) {
  return r;
});
qe || (qe = function(r, o) {
  return me(r, x(o));
});
var Ar = w(Array.prototype.forEach), gt = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Ue = w(String.prototype.toString), St = w(String.prototype.match), I = w(String.prototype.replace), gr = w(String.prototype.indexOf), Sr = w(String.prototype.trim), g = w(RegExp.prototype.test), He = br(TypeError);
function w(t) {
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      i[c - 1] = arguments[c];
    return ve(t, r, i);
  };
}
function br(t) {
  return function() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return qe(t, o);
  };
}
function u(t, r, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : de, At && At(t, null);
  for (var c = r.length; c--; ) {
    var l = r[c];
    if (typeof l == "string") {
      var f = o(l);
      f !== l && (_r(r) || (r[c] = f), l = f);
    }
    t[l] = !0;
  }
  return t;
}
function j(t) {
  var r = yr(null), o;
  for (o in t)
    ve(Tr, t, [o]) === !0 && (r[o] = t[o]);
  return r;
}
function fe(t, r) {
  for (; t !== null; ) {
    var o = Er(t, r);
    if (o) {
      if (o.get)
        return w(o.get);
      if (typeof o.value == "function")
        return w(o.value);
    }
    t = hr(t);
  }
  function i(c) {
    return console.warn("fallback value for", c), null;
  }
  return i;
}
var bt = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Rr = R(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Or = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = R(["#text"]), Ot = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = R(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lr = C(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Nr = C(/<%[\w\W]*|[\w\W]*%>/gm), Cr = C(/\${[\w\W]*}/gm), wr = C(/^data-[\-\w.\u00B7-\uFFFF]/), Dr = C(/^aria-[\-\w]+$/), Mr = C(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ir = C(/^(?:\w+script|data):/i), xr = C(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kr = C(/^html$/i), Pr = C(/^[a-z][.\w]*(-[.\w]+)+$/i), Fr = function() {
  return typeof window > "u" ? null : window;
}, Ur = function(r, o) {
  if (W(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var i = null, c = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(c) && (i = o.currentScript.getAttribute(c));
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
function It() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr(), r = function(e) {
    return It(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var o = t.document, i = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, f = t.Node, p = t.Element, d = t.NodeFilter, O = t.NamedNodeMap, b = O === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : O, D = t.HTMLFormElement, U = t.DOMParser, z = t.trustedTypes, ne = p.prototype, xt = fe(ne, "cloneNode"), kt = fe(ne, "nextSibling"), Pt = fe(ne, "childNodes"), Te = fe(ne, "parentNode");
  if (typeof l == "function") {
    var _e = i.createElement("template");
    _e.content && _e.content.ownerDocument && (i = _e.content.ownerDocument);
  }
  var M = Ur(z, o), he = M ? M.createHTML("") : "", ae = i, Ee = ae.implementation, Ft = ae.createNodeIterator, Ut = ae.createDocumentFragment, Ht = ae.getElementsByTagName, Wt = o.importNode, Ye = {};
  try {
    Ye = j(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var k = {};
  r.isSupported = typeof Te == "function" && Ee && Ee.createHTMLDocument !== void 0 && Ye !== 9;
  var ye = Lr, Ae = Nr, ge = Cr, zt = wr, Gt = Dr, Bt = Ir, Xe = xr, $t = Pr, Se = Mr, h = null, Ke = u({}, [].concat(x(bt), x(We), x(ze), x(Ge), x(Rt))), E = null, Ze = u({}, [].concat(x(Ot), x(Be), x(Lt), x(pe))), v = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Je = !0, Re = !0, Qe = !1, et = !0, q = !1, Oe = !0, G = !1, Le = !1, Ne = !1, V = !1, oe = !1, ie = !1, tt = !0, rt = !1, jt = "user-content-", Ce = !0, Q = !1, Y = {}, X = null, nt = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, ot = u({}, ["audio", "video", "img", "source", "image", "track"]), we = null, it = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, De = !1, Me = null, qt = u({}, [se, le, P], Ue), B, Vt = ["application/xhtml+xml", "text/html"], Yt = "text/html", y, Z = null, Xt = i.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ie = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = j(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Vt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Yt : B = e.PARSER_MEDIA_TYPE, y = B === "application/xhtml+xml" ? Ue : de, h = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, y) : Ke, E = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, y) : Ze, Me = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, Ue) : qt, we = "ADD_URI_SAFE_ATTR" in e ? u(
      j(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : it, at = "ADD_DATA_URI_TAGS" in e ? u(
      j(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, y) : nt, J = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, y) : {}, be = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, Ce = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || P, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Re = !1), oe && (V = !0), Y && (h = u({}, x(Rt)), E = [], Y.html === !0 && (u(h, bt), u(E, Ot)), Y.svg === !0 && (u(h, We), u(E, Be), u(E, pe)), Y.svgFilters === !0 && (u(h, ze), u(E, Be), u(E, pe)), Y.mathMl === !0 && (u(h, Ge), u(E, Lt), u(E, pe))), e.ADD_TAGS && (h === Ke && (h = j(h)), u(h, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Ze && (E = j(E)), u(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && u(we, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (X === nt && (X = j(X)), u(X, e.FORBID_CONTENTS, y)), Ce && (h["#text"] = !0), G && u(h, ["html", "head", "body"]), h.table && (u(h, ["tbody"]), delete J.tbody), R && R(e), Z = e);
  }, lt = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = u({}, ["annotation-xml"]), Kt = u({}, ["title", "style", "font", "a", "script"]), ue = u({}, We);
  u(ue, ze), u(ue, Rr);
  var xe = u({}, Ge);
  u(xe, Or);
  var Zt = function(e) {
    var n = Te(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), m = de(n.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === P ? a === "svg" : n.namespaceURI === se ? a === "svg" && (m === "annotation-xml" || lt[m]) : !!ue[a] : e.namespaceURI === se ? n.namespaceURI === P ? a === "math" : n.namespaceURI === le ? a === "math" && ut[m] : !!xe[a] : e.namespaceURI === P ? n.namespaceURI === le && !ut[m] || n.namespaceURI === se && !lt[m] ? !1 : !xe[a] && (Kt[a] || !ue[a]) : !!(B === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
  }, N = function(e) {
    re(r.removed, {
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
  }, ce = function(e, n) {
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
      if (V || oe)
        try {
          N(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ct = function(e) {
    var n, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var m = St(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    B === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = M ? M.createHTML(e) : e;
    if (K === P)
      try {
        n = new U().parseFromString(L, B);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ee.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = De ? he : L;
      } catch {
      }
    }
    var S = n.body || n.documentElement;
    return e && a && S.insertBefore(i.createTextNode(a), S.childNodes[0] || null), K === P ? Ht.call(n, G ? "html" : "body")[0] : G ? n.documentElement : S;
  }, ft = function(e) {
    return Ft.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof D && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof b) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(f) === "object" ? e instanceof f : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, F = function(e, n, a) {
    k[e] && Ar(k[e], function(m) {
      m.call(r, n, a, Z);
    });
  }, mt = function(e) {
    var n;
    if (F("beforeSanitizeElements", e, null), pt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = y(e.nodeName);
    if (F("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!h[a] || J[a]) {
      if (!J[a] && vt(a) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (Ce && !X[a]) {
        var m = Te(e) || e.parentNode, L = Pt(e) || e.childNodes;
        if (L && m)
          for (var S = L.length, A = S - 1; A >= 0; --A) {
            var $ = xt(L[A], !0);
            $.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore($, kt(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof p && !Zt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = I(n, ye, " "), n = I(n, Ae, " "), n = I(n, ge, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), F("afterSanitizeElements", e, null), !1);
  }, dt = function(e, n, a) {
    if (tt && (n === "id" || n === "name") && (a in i || a in Xt))
      return !1;
    if (!(Re && !be[n] && g(zt, n))) {
      if (!(Je && g(Gt, n))) {
        if (!E[n] || be[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && g(v.attributeNameCheck, n) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!we[n]) {
          if (!g(Se, I(a, Xe, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && gr(a, "data:") === 0 && at[e])) {
              if (!(Qe && !g(Bt, I(a, Xe, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vt = function(e) {
    return e !== "annotation-xml" && St(e, $t);
  }, Tt = function(e) {
    var n, a, m, L;
    F("beforeSanitizeAttributes", e, null);
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
        var $ = n, _ = $.name, ke = $.namespaceURI;
        if (a = _ === "value" ? n.value : Sr(n.value), m = y(_), A.attrName = m, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, F("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ce(_, e), !!A.keepAttr)) {
          if (!et && g(/\/>/i, a)) {
            ce(_, e);
            continue;
          }
          q && (a = I(a, ye, " "), a = I(a, Ae, " "), a = I(a, ge, " "));
          var _t = y(e.nodeName);
          if (dt(_t, m, a)) {
            if (rt && (m === "id" || m === "name") && (ce(_, e), a = jt + a), Oe && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(_, e);
              continue;
            }
            if (M && W(z) === "object" && typeof z.getAttributeType == "function" && !ke)
              switch (z.getAttributeType(_t, m)) {
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
              ke ? e.setAttributeNS(ke, _, a) : e.setAttribute(_, a), pt(e) ? N(e) : gt(r.removed);
            } catch {
            }
          }
        }
      }
      F("afterSanitizeAttributes", e, null);
    }
  }, Jt = function s(e) {
    var n, a = ft(e);
    for (F("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      F("uponSanitizeShadowNode", n, null), !mt(n) && (n.content instanceof c && s(n.content), Tt(n));
    F("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, m, L, S;
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
    if (Le || Ie(e), r.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var A = y(s.nodeName);
        if (!h[A] || J[A])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      n = ct("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!V && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return M && ie ? M.createHTML(s) : s;
      if (n = ct(s), !n)
        return V ? null : ie ? he : "";
    }
    n && Ne && N(n.firstChild);
    for (var $ = ft(Q ? s : n); m = $.nextNode(); )
      m.nodeType === 3 && m === L || mt(m) || (m.content instanceof c && Jt(m.content), Tt(m), L = m);
    if (L = null, Q)
      return s;
    if (V) {
      if (oe)
        for (S = Ut.call(n.ownerDocument); n.firstChild; )
          S.appendChild(n.firstChild);
      else
        S = n;
      return (E.shadowroot || E.shadowrootmod) && (S = Wt.call(o, S, !0)), S;
    }
    var _ = G ? n.outerHTML : n.innerHTML;
    return G && h["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && g(kr, n.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + _), q && (_ = I(_, ye, " "), _ = I(_, Ae, " "), _ = I(_, ge, " ")), M && ie ? M.createHTML(_) : _;
  }, r.setConfig = function(s) {
    Ie(s), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(s, e, n) {
    Z || Ie({});
    var a = y(s), m = y(e);
    return dt(a, m, n);
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
It();
const Hr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ve = ({
  color: t,
  icon: r,
  innerRef: o,
  onClick: i,
  size: c,
  cardTitle: l,
  className: f,
  useExternal: p,
  ...d
}) => /* @__PURE__ */ H.jsx(
  "button",
  {
    type: "button",
    className: `btn btn-circle btn-circle-alt-${t} ${c === "large" && "btn-circle-large"} ${f}`,
    ref: o,
    "aria-label": "Close",
    ...cr(
      {
        ...Hr,
        text: `${r == null ? void 0 : r[1]} icon`,
        section: l
      },
      p,
      i
    ),
    ...d,
    children: /* @__PURE__ */ H.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
  }
);
Ve.propTypes = {
  /**
    Color the button based on the background color
  */
  color: T.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: T.arrayOf(T.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: T.oneOfType([
    T.object,
    T.func,
    T.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: T.func,
  /**
   * Card title
   */
  cardTitle: T.string,
  /**
    Button size
  */
  size: T.oneOf(["large", "small"]),
  className: T.string,
  useExternal: T.bool
};
Ve.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
var Wr = /* @__PURE__ */ ((t) => (t.WARNING = "warning", t.INFO = "info", t.SUCCESS = "success", t.ERROR = "error", t))(Wr || {});
const Br = ({
  type: t,
  dismissable: r,
  children: o,
  useExternal: i
}) => {
  var O, b, D;
  const [c, l] = er(!0), f = () => l(!1), p = {
    warning: {
      iconTitle: "Warning",
      iconName: "bell",
      alertClass: "warning"
    },
    info: {
      iconTitle: "Information",
      iconName: "info-circle",
      alertClass: "info"
    },
    success: {
      iconTitle: "Success",
      iconName: "check-circle",
      alertClass: "success"
    },
    error: {
      iconTitle: "Error",
      iconName: "exclamation-triangle",
      alertClass: "danger"
    }
  }, d = i ? {
    "data-bs-dismiss": "alert"
    // used with BS5 and HTML
  } : {
    onClick: f
    // Used with react
  };
  return c && /* @__PURE__ */ H.jsxs(
    "div",
    {
      className: nr("alert", {
        "alert-dismissable": r,
        [`alert-${(O = p[t]) == null ? void 0 : O.alertClass}`]: t
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ H.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ H.jsx(
          "span",
          {
            title: (b = p[t]) == null ? void 0 : b.iconTitle,
            className: `fa fa-icon fa-${(D = p[t]) == null ? void 0 : D.iconName}`
          }
        ) }),
        /* @__PURE__ */ H.jsx("div", { className: "alert-content", children: o }),
        r && /* @__PURE__ */ H.jsx("div", { className: "alert-close", children: /* @__PURE__ */ H.jsx(
          Ve,
          {
            icon: ["fas", "times"],
            ...d,
            useExternal: i
          }
        ) })
      ]
    }
  );
};
export {
  Br as SystemAlert,
  Wr as SystemAlertType
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
