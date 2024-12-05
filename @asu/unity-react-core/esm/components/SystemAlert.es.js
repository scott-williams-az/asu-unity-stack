import je, { useId as tr, useState as rr } from "react";
function wt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ct = { exports: {} }, te = {};
var Et;
function nr() {
  if (Et) return te;
  Et = 1;
  var t = je, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, d, O) {
    var b, M = {}, H = null, z = null;
    O !== void 0 && (H = "" + O), d.key !== void 0 && (H = "" + d.key), d.ref !== void 0 && (z = d.ref);
    for (b in d) o.call(d, b) && !l.hasOwnProperty(b) && (M[b] = d[b]);
    if (m && m.defaultProps) for (b in d = m.defaultProps, d) M[b] === void 0 && (M[b] = d[b]);
    return { $$typeof: r, type: m, key: H, ref: z, props: M, _owner: c.current };
  }
  return te.Fragment = i, te.jsx = f, te.jsxs = f, te;
}
Ct.exports = nr();
var U = Ct.exports;
const ar = "staticMarkup";
function Mt() {
  const r = tr().indexOf(ar) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
var Dt = { exports: {} };
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function i() {
      for (var l = "", f = 0; f < arguments.length; f++) {
        var m = arguments[f];
        m && (l = c(l, o(m)));
      }
      return l;
    }
    function o(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return i.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var f = "";
      for (var m in l)
        r.call(l, m) && l[m] && (f = c(f, m));
      return f;
    }
    function c(l, f) {
      return f ? l ? l + " " + f : l + f : l;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(Dt);
var ir = Dt.exports;
const or = /* @__PURE__ */ wt(ir);
var It = { exports: {} }, Pe, yt;
function sr() {
  if (yt) return Pe;
  yt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, At;
function lr() {
  if (At) return Fe;
  At = 1;
  var t = sr();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Fe = function() {
    function o(f, m, d, O, b, M) {
      if (M !== t) {
        var H = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw H.name = "Invariant Violation", H;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var l = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Fe;
}
It.exports = lr()();
var cr = It.exports;
const T = /* @__PURE__ */ wt(cr);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, W(t);
}
function $e(t, r) {
  return $e = Object.setPrototypeOf || function(o, c) {
    return o.__proto__ = c, o;
  }, $e(t, r);
}
function ur() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, r, i) {
  return ur() ? me = Reflect.construct : me = function(c, l, f) {
    var m = [null];
    m.push.apply(m, l);
    var d = Function.bind.apply(c, m), O = new d();
    return f && $e(O, f.prototype), O;
  }, me.apply(null, arguments);
}
function x(t) {
  return fr(t) || pr(t) || mr(t) || dr();
}
function fr(t) {
  if (Array.isArray(t)) return qe(t);
}
function pr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function mr(t, r) {
  if (t) {
    if (typeof t == "string") return qe(t, r);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return qe(t, r);
  }
}
function qe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var i = 0, o = new Array(r); i < r; i++) o[i] = t[i];
  return o;
}
function dr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vr = Object.hasOwnProperty, gt = Object.setPrototypeOf, Tr = Object.isFrozen, _r = Object.getPrototypeOf, hr = Object.getOwnPropertyDescriptor, R = Object.freeze, w = Object.seal, Er = Object.create, xt = typeof Reflect < "u" && Reflect, ve = xt.apply, Ve = xt.construct;
ve || (ve = function(r, i, o) {
  return r.apply(i, o);
});
R || (R = function(r) {
  return r;
});
w || (w = function(r) {
  return r;
});
Ve || (Ve = function(r, i) {
  return me(r, x(i));
});
var yr = C(Array.prototype.forEach), St = C(Array.prototype.pop), re = C(Array.prototype.push), de = C(String.prototype.toLowerCase), Ue = C(String.prototype.toString), bt = C(String.prototype.match), I = C(String.prototype.replace), Ar = C(String.prototype.indexOf), gr = C(String.prototype.trim), g = C(RegExp.prototype.test), He = Sr(TypeError);
function C(t) {
  return function(r) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
      o[c - 1] = arguments[c];
    return ve(t, r, o);
  };
}
function Sr(t) {
  return function() {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return Ve(t, i);
  };
}
function u(t, r, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : de, gt && gt(t, null);
  for (var c = r.length; c--; ) {
    var l = r[c];
    if (typeof l == "string") {
      var f = i(l);
      f !== l && (Tr(r) || (r[c] = f), l = f);
    }
    t[l] = !0;
  }
  return t;
}
function $(t) {
  var r = Er(null), i;
  for (i in t)
    ve(vr, t, [i]) === !0 && (r[i] = t[i]);
  return r;
}
function fe(t, r) {
  for (; t !== null; ) {
    var i = hr(t, r);
    if (i) {
      if (i.get)
        return C(i.get);
      if (typeof i.value == "function")
        return C(i.value);
    }
    t = _r(t);
  }
  function o(c) {
    return console.warn("fallback value for", c), null;
  }
  return o;
}
var Rt = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), br = R(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Rr = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ot = R(["#text"]), Lt = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = R(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nt = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Or = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Lr = w(/<%[\w\W]*|[\w\W]*%>/gm), Nr = w(/\${[\w\W]*}/gm), wr = w(/^data-[\-\w.\u00B7-\uFFFF]/), Cr = w(/^aria-[\-\w]+$/), Mr = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Dr = w(/^(?:\w+script|data):/i), Ir = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), xr = w(/^html$/i), kr = w(/^[a-z][.\w]*(-[.\w]+)+$/i), Pr = function() {
  return typeof window > "u" ? null : window;
}, Fr = function(r, i) {
  if (W(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var o = null, c = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(c) && (o = i.currentScript.getAttribute(c));
  var l = "dompurify" + (o ? "#" + o : "");
  try {
    return r.createPolicy(l, {
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
function kt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pr(), r = function(e) {
    return kt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var i = t.document, o = t.document, c = t.DocumentFragment, l = t.HTMLTemplateElement, f = t.Node, m = t.Element, d = t.NodeFilter, O = t.NamedNodeMap, b = O === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : O, M = t.HTMLFormElement, H = t.DOMParser, z = t.trustedTypes, ne = m.prototype, Pt = fe(ne, "cloneNode"), Ft = fe(ne, "nextSibling"), Ut = fe(ne, "childNodes"), Te = fe(ne, "parentNode");
  if (typeof l == "function") {
    var _e = o.createElement("template");
    _e.content && _e.content.ownerDocument && (o = _e.content.ownerDocument);
  }
  var D = Fr(z, i), he = D ? D.createHTML("") : "", ae = o, Ee = ae.implementation, Ht = ae.createNodeIterator, Wt = ae.createDocumentFragment, zt = ae.getElementsByTagName, Gt = i.importNode, Xe = {};
  try {
    Xe = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var k = {};
  r.isSupported = typeof Te == "function" && Ee && Ee.createHTMLDocument !== void 0 && Xe !== 9;
  var ye = Or, Ae = Lr, ge = Nr, Bt = wr, jt = Cr, $t = Dr, Ke = Ir, qt = kr, Se = Mr, h = null, Ze = u({}, [].concat(x(Rt), x(We), x(ze), x(Ge), x(Ot))), E = null, Je = u({}, [].concat(x(Lt), x(Be), x(Nt), x(pe))), v = Object.seal(Object.create(null, {
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
  })), J = null, be = null, Qe = !0, Re = !0, et = !1, tt = !0, q = !1, Oe = !0, G = !1, Le = !1, Ne = !1, V = !1, ie = !1, oe = !1, rt = !0, nt = !1, Vt = "user-content-", we = !0, Q = !1, Y = {}, X = null, at = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), it = null, ot = u({}, ["audio", "video", "img", "source", "image", "track"]), Ce = null, st = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", P = "http://www.w3.org/1999/xhtml", K = P, Me = !1, De = null, Yt = u({}, [se, le, P], Ue), B, Xt = ["application/xhtml+xml", "text/html"], Kt = "text/html", y, Z = null, Zt = o.createElement("form"), lt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ie = function(e) {
    Z && Z === e || ((!e || W(e) !== "object") && (e = {}), e = $(e), B = // eslint-disable-next-line unicorn/prefer-includes
    Xt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? B = Kt : B = e.PARSER_MEDIA_TYPE, y = B === "application/xhtml+xml" ? Ue : de, h = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, y) : Ze, E = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, y) : Je, De = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, Ue) : Yt, Ce = "ADD_URI_SAFE_ATTR" in e ? u(
      $(st),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : st, it = "ADD_DATA_URI_TAGS" in e ? u(
      $(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, y) : at, J = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, y) : {}, be = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Qe = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, et = e.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, G = e.WHOLE_DOCUMENT || !1, V = e.RETURN_DOM || !1, ie = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, rt = e.SANITIZE_DOM !== !1, nt = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || P, v = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (v.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (v.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (v.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (Re = !1), ie && (V = !0), Y && (h = u({}, x(Ot)), E = [], Y.html === !0 && (u(h, Rt), u(E, Lt)), Y.svg === !0 && (u(h, We), u(E, Be), u(E, pe)), Y.svgFilters === !0 && (u(h, ze), u(E, Be), u(E, pe)), Y.mathMl === !0 && (u(h, Ge), u(E, Nt), u(E, pe))), e.ADD_TAGS && (h === Ze && (h = $(h)), u(h, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Je && (E = $(E)), u(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && u(Ce, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (X === at && (X = $(X)), u(X, e.FORBID_CONTENTS, y)), we && (h["#text"] = !0), G && u(h, ["html", "head", "body"]), h.table && (u(h, ["tbody"]), delete J.tbody), R && R(e), Z = e);
  }, ct = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = u({}, ["annotation-xml"]), Jt = u({}, ["title", "style", "font", "a", "script"]), ce = u({}, We);
  u(ce, ze), u(ce, br);
  var xe = u({}, Ge);
  u(xe, Rr);
  var Qt = function(e) {
    var n = Te(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), p = de(n.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? n.namespaceURI === P ? a === "svg" : n.namespaceURI === se ? a === "svg" && (p === "annotation-xml" || ct[p]) : !!ce[a] : e.namespaceURI === se ? n.namespaceURI === P ? a === "math" : n.namespaceURI === le ? a === "math" && ut[p] : !!xe[a] : e.namespaceURI === P ? n.namespaceURI === le && !ut[p] || n.namespaceURI === se && !ct[p] ? !1 : !xe[a] && (Jt[a] || !ce[a]) : !!(B === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
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
      if (V || ie)
        try {
          N(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ft = function(e) {
    var n, a;
    if (Ne)
      e = "<remove></remove>" + e;
    else {
      var p = bt(e, /^[\r\n\t ]+/);
      a = p && p[0];
    }
    B === "application/xhtml+xml" && K === P && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var L = D ? D.createHTML(e) : e;
    if (K === P)
      try {
        n = new H().parseFromString(L, B);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = Ee.createDocument(K, "template", null);
      try {
        n.documentElement.innerHTML = Me ? he : L;
      } catch {
      }
    }
    var S = n.body || n.documentElement;
    return e && a && S.insertBefore(o.createTextNode(a), S.childNodes[0] || null), K === P ? zt.call(n, G ? "html" : "body")[0] : G ? n.documentElement : S;
  }, pt = function(e) {
    return Ht.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, mt = function(e) {
    return e instanceof M && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof b) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return W(f) === "object" ? e instanceof f : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, F = function(e, n, a) {
    k[e] && yr(k[e], function(p) {
      p.call(r, n, a, Z);
    });
  }, dt = function(e) {
    var n;
    if (F("beforeSanitizeElements", e, null), mt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = y(e.nodeName);
    if (F("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!h[a] || J[a]) {
      if (!J[a] && Tt(a) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
        return !1;
      if (we && !X[a]) {
        var p = Te(e) || e.parentNode, L = Ut(e) || e.childNodes;
        if (L && p)
          for (var S = L.length, A = S - 1; A >= 0; --A) {
            var j = Pt(L[A], !0);
            j.__removalCount = (e.__removalCount || 0) + 1, p.insertBefore(j, Ft(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof m && !Qt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : (q && e.nodeType === 3 && (n = e.textContent, n = I(n, ye, " "), n = I(n, Ae, " "), n = I(n, ge, " "), e.textContent !== n && (re(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), F("afterSanitizeElements", e, null), !1);
  }, vt = function(e, n, a) {
    if (rt && (n === "id" || n === "name") && (a in o || a in Zt))
      return !1;
    if (!(Re && !be[n] && g(Bt, n))) {
      if (!(Qe && g(jt, n))) {
        if (!E[n] || be[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Tt(e) && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, e) || v.tagNameCheck instanceof Function && v.tagNameCheck(e)) && (v.attributeNameCheck instanceof RegExp && g(v.attributeNameCheck, n) || v.attributeNameCheck instanceof Function && v.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && v.allowCustomizedBuiltInElements && (v.tagNameCheck instanceof RegExp && g(v.tagNameCheck, a) || v.tagNameCheck instanceof Function && v.tagNameCheck(a)))
          ) return !1;
        } else if (!Ce[n]) {
          if (!g(Se, I(a, Ke, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && Ar(a, "data:") === 0 && it[e])) {
              if (!(et && !g($t, I(a, Ke, "")))) {
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
    return e !== "annotation-xml" && bt(e, qt);
  }, _t = function(e) {
    var n, a, p, L;
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
        var j = n, _ = j.name, ke = j.namespaceURI;
        if (a = _ === "value" ? n.value : gr(n.value), p = y(_), A.attrName = p, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, F("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ue(_, e), !!A.keepAttr)) {
          if (!tt && g(/\/>/i, a)) {
            ue(_, e);
            continue;
          }
          q && (a = I(a, ye, " "), a = I(a, Ae, " "), a = I(a, ge, " "));
          var ht = y(e.nodeName);
          if (vt(ht, p, a)) {
            if (nt && (p === "id" || p === "name") && (ue(_, e), a = Vt + a), Oe && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(_, e);
              continue;
            }
            if (D && W(z) === "object" && typeof z.getAttributeType == "function" && !ke)
              switch (z.getAttributeType(ht, p)) {
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
              ke ? e.setAttributeNS(ke, _, a) : e.setAttribute(_, a), mt(e) ? N(e) : St(r.removed);
            } catch {
            }
          }
        }
      }
      F("afterSanitizeAttributes", e, null);
    }
  }, er = function s(e) {
    var n, a = pt(e);
    for (F("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      F("uponSanitizeShadowNode", n, null), !dt(n) && (n.content instanceof c && s(n.content), _t(n));
    F("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, p, L, S;
    if (Me = !s, Me && (s = "<!-->"), typeof s != "string" && !ee(s))
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
      n = ft("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!V && !q && !G && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return D && oe ? D.createHTML(s) : s;
      if (n = ft(s), !n)
        return V ? null : oe ? he : "";
    }
    n && Ne && N(n.firstChild);
    for (var j = pt(Q ? s : n); p = j.nextNode(); )
      p.nodeType === 3 && p === L || dt(p) || (p.content instanceof c && er(p.content), _t(p), L = p);
    if (L = null, Q)
      return s;
    if (V) {
      if (ie)
        for (S = Wt.call(n.ownerDocument); n.firstChild; )
          S.appendChild(n.firstChild);
      else
        S = n;
      return (E.shadowroot || E.shadowrootmod) && (S = Gt.call(i, S, !0)), S;
    }
    var _ = G ? n.outerHTML : n.innerHTML;
    return G && h["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && g(xr, n.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + _), q && (_ = I(_, ye, " "), _ = I(_, Ae, " "), _ = I(_, ge, " ")), D && oe ? D.createHTML(_) : _;
  }, r.setConfig = function(s) {
    Ie(s), Le = !0;
  }, r.clearConfig = function() {
    Z = null, Le = !1;
  }, r.isValidAttribute = function(s, e, n) {
    Z || Ie({});
    var a = y(s), p = y(e);
    return vt(a, p, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], re(k[s], e));
  }, r.removeHook = function(s) {
    if (k[s])
      return St(k[s]);
  }, r.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, r.removeAllHooks = function() {
    k = {};
  }, r;
}
kt();
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
const Ur = ({
  event: t = "",
  action: r = "",
  name: i = "",
  type: o = "",
  section: c = "",
  text: l = "",
  region: f = "",
  component: m = ""
}) => {
  const { dataLayer: d } = window, O = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: f.toLowerCase(),
    section: c.toLowerCase(),
    text: l.toLowerCase(),
    component: m.toLowerCase()
  };
  d && d.push(O);
}, Hr = ({
  gaData: t,
  children: r
}) => {
  const { isReact: i } = Mt(), { onClick: o, ...c } = r.props;
  return i ? je.cloneElement(r, {
    ...c,
    onClick: (l) => (Ur(t), o ? o(l) : !0)
  }) : je.cloneElement(r, {
    ...c,
    onClick: o,
    "data-ga": t.text,
    "data-ga-name": t.name,
    "data-ga-event": t.event,
    "data-ga-action": t.action,
    "data-ga-type": t.type,
    "data-ga-region": t.region,
    "data-ga-section": t.section,
    "data-ga-component": t.component
  });
}, Wr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ye = ({
  color: t,
  icon: r,
  innerRef: i,
  onClick: o,
  size: c,
  cardTitle: l,
  className: f,
  ...m
}) => {
  const d = () => {
    o == null || o();
  };
  return /* @__PURE__ */ U.jsx(
    Hr,
    {
      gaData: {
        ...Wr,
        text: `${r == null ? void 0 : r[1]} icon`,
        section: l
      },
      children: /* @__PURE__ */ U.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${t} ${c === "large" && "btn-circle-large"} ${f}`,
          ref: i,
          "aria-label": "Close",
          onClick: d,
          ...m,
          children: /* @__PURE__ */ U.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
        }
      )
    }
  );
};
Ye.propTypes = {
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
  className: T.string
};
Ye.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
var zr = /* @__PURE__ */ ((t) => (t.WARNING = "warning", t.INFO = "info", t.SUCCESS = "success", t.ERROR = "error", t))(zr || {});
const jr = ({
  type: t,
  dismissable: r,
  children: i
}) => {
  var O, b, M;
  const { isBootstrap: o, isReact: c } = Mt(), [l, f] = rr(!0), m = () => f(!1), d = {
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
  };
  return l && /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: or("alert", {
        "alert-dismissable": r,
        [`alert-${(O = d[t]) == null ? void 0 : O.alertClass}`]: t
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ U.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ U.jsx(
          "span",
          {
            title: (b = d[t]) == null ? void 0 : b.iconTitle,
            className: `fa fa-icon fa-${(M = d[t]) == null ? void 0 : M.iconName}`
          }
        ) }),
        /* @__PURE__ */ U.jsx("div", { className: "alert-content", children: i }),
        r && /* @__PURE__ */ U.jsx("div", { className: "alert-close", children: /* @__PURE__ */ U.jsx(
          Ye,
          {
            icon: ["fas", "times"],
            onClick: c && m,
            "data-bs-dismiss": o && "alert"
          }
        ) })
      ]
    }
  );
};
export {
  jr as SystemAlert,
  zr as SystemAlertType
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
