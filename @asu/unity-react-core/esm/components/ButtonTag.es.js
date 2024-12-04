import Jt from "react";
function Rt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Lt = { exports: {} }, ee = {};
var Tt;
function Qt() {
  if (Tt) return ee;
  Tt = 1;
  var t = Jt, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, v, L) {
    var O, w = {}, P = null, F = null;
    L !== void 0 && (P = "" + L), v.key !== void 0 && (P = "" + v.key), v.ref !== void 0 && (F = v.ref);
    for (O in v) i.call(v, O) && !l.hasOwnProperty(O) && (w[O] = v[O]);
    if (d && d.defaultProps) for (O in v = d.defaultProps, v) w[O] === void 0 && (w[O] = v[O]);
    return { $$typeof: n, type: d, key: P, ref: F, props: w, _owner: f.current };
  }
  return ee.Fragment = o, ee.jsx = c, ee.jsxs = c, ee;
}
Lt.exports = Qt();
var er = Lt.exports, wt = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var l = "", c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        d && (l = f(l, i(d)));
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
      for (var d in l)
        n.call(l, d) && l[d] && (c = f(c, d));
      return c;
    }
    function f(l, c) {
      return c ? l ? l + " " + c : l + c : l;
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(wt);
var tr = wt.exports;
const rr = /* @__PURE__ */ Rt(tr);
var Nt = { exports: {} }, Pe, _t;
function nr() {
  if (_t) return Pe;
  _t = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var ke, ht;
function ar() {
  if (ht) return ke;
  ht = 1;
  var t = nr();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, ke = function() {
    function i(c, d, v, L, O, w) {
      if (w !== t) {
        var P = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw P.name = "Invariant Violation", P;
      }
    }
    i.isRequired = i;
    function f() {
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
      arrayOf: f,
      element: i,
      elementType: i,
      instanceOf: f,
      node: i,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, ke;
}
Nt.exports = ar()();
var or = Nt.exports;
const p = /* @__PURE__ */ Rt(or);
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function Be(t, n) {
  return Be = Object.setPrototypeOf || function(i, f) {
    return i.__proto__ = f, i;
  }, Be(t, n);
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
function pe(t, n, o) {
  return ir() ? pe = Reflect.construct : pe = function(f, l, c) {
    var d = [null];
    d.push.apply(d, l);
    var v = Function.bind.apply(f, d), L = new v();
    return c && Be(L, c.prototype), L;
  }, pe.apply(null, arguments);
}
function x(t) {
  return sr(t) || lr(t) || ur(t) || fr();
}
function sr(t) {
  if (Array.isArray(t)) return je(t);
}
function lr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ur(t, n) {
  if (t) {
    if (typeof t == "string") return je(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return je(t, n);
  }
}
function je(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var o = 0, i = new Array(n); o < n; o++) i[o] = t[o];
  return i;
}
function fr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var cr = Object.hasOwnProperty, yt = Object.setPrototypeOf, pr = Object.isFrozen, mr = Object.getPrototypeOf, dr = Object.getOwnPropertyDescriptor, S = Object.freeze, D = Object.seal, vr = Object.create, Dt = typeof Reflect < "u" && Reflect, de = Dt.apply, $e = Dt.construct;
de || (de = function(n, o, i) {
  return n.apply(o, i);
});
S || (S = function(n) {
  return n;
});
D || (D = function(n) {
  return n;
});
$e || ($e = function(n, o) {
  return pe(n, x(o));
});
var Tr = M(Array.prototype.forEach), Et = M(Array.prototype.pop), te = M(Array.prototype.push), me = M(String.prototype.toLowerCase), Fe = M(String.prototype.toString), At = M(String.prototype.match), I = M(String.prototype.replace), _r = M(String.prototype.indexOf), hr = M(String.prototype.trim), g = M(RegExp.prototype.test), Ue = yr(TypeError);
function M(t) {
  return function(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
      i[f - 1] = arguments[f];
    return de(t, n, i);
  };
}
function yr(t) {
  return function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return $e(t, o);
  };
}
function u(t, n, o) {
  var i;
  o = (i = o) !== null && i !== void 0 ? i : me, yt && yt(t, null);
  for (var f = n.length; f--; ) {
    var l = n[f];
    if (typeof l == "string") {
      var c = o(l);
      c !== l && (pr(n) || (n[f] = c), l = c);
    }
    t[l] = !0;
  }
  return t;
}
function j(t) {
  var n = vr(null), o;
  for (o in t)
    de(cr, t, [o]) === !0 && (n[o] = t[o]);
  return n;
}
function fe(t, n) {
  for (; t !== null; ) {
    var o = dr(t, n);
    if (o) {
      if (o.get)
        return M(o.get);
      if (typeof o.value == "function")
        return M(o.value);
    }
    t = mr(t);
  }
  function i(f) {
    return console.warn("fallback value for", f), null;
  }
  return i;
}
var gt = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), He = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), We = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Er = S(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ze = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ar = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), bt = S(["#text"]), St = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ge = S(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ot = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ce = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gr = D(/\{\{[\w\W]*|[\w\W]*\}\}/gm), br = D(/<%[\w\W]*|[\w\W]*%>/gm), Sr = D(/\${[\w\W]*}/gm), Or = D(/^data-[\-\w.\u00B7-\uFFFF]/), Rr = D(/^aria-[\-\w]+$/), Lr = D(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wr = D(/^(?:\w+script|data):/i), Nr = D(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Dr = D(/^html$/i), Mr = D(/^[a-z][.\w]*(-[.\w]+)+$/i), Cr = function() {
  return typeof window > "u" ? null : window;
}, Ir = function(n, o) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var i = null, f = "data-tt-policy-suffix";
  o.currentScript && o.currentScript.hasAttribute(f) && (i = o.currentScript.getAttribute(f));
  var l = "dompurify" + (i ? "#" + i : "");
  try {
    return n.createPolicy(l, {
      createHTML: function(d) {
        return d;
      },
      createScriptURL: function(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function Mt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cr(), n = function(e) {
    return Mt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var o = t.document, i = t.document, f = t.DocumentFragment, l = t.HTMLTemplateElement, c = t.Node, d = t.Element, v = t.NodeFilter, L = t.NamedNodeMap, O = L === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : L, w = t.HTMLFormElement, P = t.DOMParser, F = t.trustedTypes, re = d.prototype, It = fe(re, "cloneNode"), xt = fe(re, "nextSibling"), Pt = fe(re, "childNodes"), ve = fe(re, "parentNode");
  if (typeof l == "function") {
    var Te = i.createElement("template");
    Te.content && Te.content.ownerDocument && (i = Te.content.ownerDocument);
  }
  var C = Ir(F, o), _e = C ? C.createHTML("") : "", ne = i, he = ne.implementation, kt = ne.createNodeIterator, Ft = ne.createDocumentFragment, Ut = ne.getElementsByTagName, Ht = o.importNode, qe = {};
  try {
    qe = j(i).documentMode ? i.documentMode : {};
  } catch {
  }
  var k = {};
  n.isSupported = typeof ve == "function" && he && he.createHTMLDocument !== void 0 && qe !== 9;
  var ye = gr, Ee = br, Ae = Sr, Wt = Or, zt = Rr, Gt = wr, Ye = Nr, Bt = Mr, ge = Lr, h = null, Ve = u({}, [].concat(x(gt), x(He), x(We), x(ze), x(bt))), y = null, Xe = u({}, [].concat(x(St), x(Ge), x(Ot), x(ce))), T = Object.seal(Object.create(null, {
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
  })), Z = null, be = null, Ke = !0, Se = !0, Ze = !1, Je = !0, $ = !1, Oe = !0, z = !1, Re = !1, Le = !1, q = !1, ae = !1, oe = !1, Qe = !0, et = !1, jt = "user-content-", we = !0, J = !1, Y = {}, V = null, tt = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), rt = null, nt = u({}, ["audio", "video", "img", "source", "image", "track"]), Ne = null, at = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ie = "http://www.w3.org/1998/Math/MathML", se = "http://www.w3.org/2000/svg", U = "http://www.w3.org/1999/xhtml", X = U, De = !1, Me = null, $t = u({}, [ie, se, U], Fe), G, qt = ["application/xhtml+xml", "text/html"], Yt = "text/html", E, K = null, Vt = i.createElement("form"), ot = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function(e) {
    K && K === e || ((!e || W(e) !== "object") && (e = {}), e = j(e), G = // eslint-disable-next-line unicorn/prefer-includes
    qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Yt : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? Fe : me, h = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, E) : Ve, y = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, E) : Xe, Me = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, Fe) : $t, Ne = "ADD_URI_SAFE_ATTR" in e ? u(
      j(at),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : at, rt = "ADD_DATA_URI_TAGS" in e ? u(
      j(nt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : nt, V = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, E) : tt, Z = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, E) : {}, be = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, E) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Ke = e.ALLOW_ARIA_ATTR !== !1, Se = e.ALLOW_DATA_ATTR !== !1, Ze = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Je = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $ = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, q = e.RETURN_DOM || !1, ae = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Le = e.FORCE_BODY || !1, Qe = e.SANITIZE_DOM !== !1, et = e.SANITIZE_NAMED_PROPS || !1, we = e.KEEP_CONTENT !== !1, J = e.IN_PLACE || !1, ge = e.ALLOWED_URI_REGEXP || ge, X = e.NAMESPACE || U, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), $ && (Se = !1), ae && (q = !0), Y && (h = u({}, x(bt)), y = [], Y.html === !0 && (u(h, gt), u(y, St)), Y.svg === !0 && (u(h, He), u(y, Ge), u(y, ce)), Y.svgFilters === !0 && (u(h, We), u(y, Ge), u(y, ce)), Y.mathMl === !0 && (u(h, ze), u(y, Ot), u(y, ce))), e.ADD_TAGS && (h === Ve && (h = j(h)), u(h, e.ADD_TAGS, E)), e.ADD_ATTR && (y === Xe && (y = j(y)), u(y, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && u(Ne, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (V === tt && (V = j(V)), u(V, e.FORBID_CONTENTS, E)), we && (h["#text"] = !0), z && u(h, ["html", "head", "body"]), h.table && (u(h, ["tbody"]), delete Z.tbody), S && S(e), K = e);
  }, it = u({}, ["mi", "mo", "mn", "ms", "mtext"]), st = u({}, ["annotation-xml"]), Xt = u({}, ["title", "style", "font", "a", "script"]), le = u({}, He);
  u(le, We), u(le, Er);
  var Ie = u({}, ze);
  u(Ie, Ar);
  var Kt = function(e) {
    var r = ve(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: X,
      tagName: "template"
    });
    var a = me(e.tagName), m = me(r.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === se ? r.namespaceURI === U ? a === "svg" : r.namespaceURI === ie ? a === "svg" && (m === "annotation-xml" || it[m]) : !!le[a] : e.namespaceURI === ie ? r.namespaceURI === U ? a === "math" : r.namespaceURI === se ? a === "math" && st[m] : !!Ie[a] : e.namespaceURI === U ? r.namespaceURI === se && !st[m] || r.namespaceURI === ie && !it[m] ? !1 : !Ie[a] && (Xt[a] || !le[a]) : !!(G === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
  }, N = function(e) {
    te(n.removed, {
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
  }, ue = function(e, r) {
    try {
      te(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      te(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !y[e])
      if (q || ae)
        try {
          N(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, lt = function(e) {
    var r, a;
    if (Le)
      e = "<remove></remove>" + e;
    else {
      var m = At(e, /^[\r\n\t ]+/);
      a = m && m[0];
    }
    G === "application/xhtml+xml" && X === U && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = C ? C.createHTML(e) : e;
    if (X === U)
      try {
        r = new P().parseFromString(R, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = he.createDocument(X, "template", null);
      try {
        r.documentElement.innerHTML = De ? _e : R;
      } catch {
      }
    }
    var b = r.body || r.documentElement;
    return e && a && b.insertBefore(i.createTextNode(a), b.childNodes[0] || null), X === U ? Ut.call(r, z ? "html" : "body")[0] : z ? r.documentElement : b;
  }, ut = function(e) {
    return kt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ft = function(e) {
    return e instanceof w && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Q = function(e) {
    return W(c) === "object" ? e instanceof c : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, H = function(e, r, a) {
    k[e] && Tr(k[e], function(m) {
      m.call(n, r, a, K);
    });
  }, ct = function(e) {
    var r;
    if (H("beforeSanitizeElements", e, null), ft(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return N(e), !0;
    var a = E(e.nodeName);
    if (H("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !Q(e.firstElementChild) && (!Q(e.content) || !Q(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return N(e), !0;
    if (!h[a] || Z[a]) {
      if (!Z[a] && mt(a) && (T.tagNameCheck instanceof RegExp && g(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
        return !1;
      if (we && !V[a]) {
        var m = ve(e) || e.parentNode, R = Pt(e) || e.childNodes;
        if (R && m)
          for (var b = R.length, A = b - 1; A >= 0; --A) {
            var B = It(R[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, m.insertBefore(B, xt(e));
          }
      }
      return N(e), !0;
    }
    return e instanceof d && !Kt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (N(e), !0) : ($ && e.nodeType === 3 && (r = e.textContent, r = I(r, ye, " "), r = I(r, Ee, " "), r = I(r, Ae, " "), e.textContent !== r && (te(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), H("afterSanitizeElements", e, null), !1);
  }, pt = function(e, r, a) {
    if (Qe && (r === "id" || r === "name") && (a in i || a in Vt))
      return !1;
    if (!(Se && !be[r] && g(Wt, r))) {
      if (!(Ke && g(zt, r))) {
        if (!y[r] || be[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(mt(e) && (T.tagNameCheck instanceof RegExp && g(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && g(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && g(T.tagNameCheck, a) || T.tagNameCheck instanceof Function && T.tagNameCheck(a)))
          ) return !1;
        } else if (!Ne[r]) {
          if (!g(ge, I(a, Ye, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && _r(a, "data:") === 0 && rt[e])) {
              if (!(Ze && !g(Gt, I(a, Ye, "")))) {
                if (a)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, mt = function(e) {
    return e !== "annotation-xml" && At(e, Bt);
  }, dt = function(e) {
    var r, a, m, R;
    H("beforeSanitizeAttributes", e, null);
    var b = e.attributes;
    if (b) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: y
      };
      for (R = b.length; R--; ) {
        r = b[R];
        var B = r, _ = B.name, xe = B.namespaceURI;
        if (a = _ === "value" ? r.value : hr(r.value), m = E(_), A.attrName = m, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, H("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ue(_, e), !!A.keepAttr)) {
          if (!Je && g(/\/>/i, a)) {
            ue(_, e);
            continue;
          }
          $ && (a = I(a, ye, " "), a = I(a, Ee, " "), a = I(a, Ae, " "));
          var vt = E(e.nodeName);
          if (pt(vt, m, a)) {
            if (et && (m === "id" || m === "name") && (ue(_, e), a = jt + a), Oe && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(_, e);
              continue;
            }
            if (C && W(F) === "object" && typeof F.getAttributeType == "function" && !xe)
              switch (F.getAttributeType(vt, m)) {
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
              xe ? e.setAttributeNS(xe, _, a) : e.setAttribute(_, a), ft(e) ? N(e) : Et(n.removed);
            } catch {
            }
          }
        }
      }
      H("afterSanitizeAttributes", e, null);
    }
  }, Zt = function s(e) {
    var r, a = ut(e);
    for (H("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      H("uponSanitizeShadowNode", r, null), !ct(r) && (r.content instanceof f && s(r.content), dt(r));
    H("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, m, R, b;
    if (De = !s, De && (s = "<!-->"), typeof s != "string" && !Q(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Ue("dirty is not a string, aborting");
      } else
        throw Ue("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (Q(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Re || Ce(e), n.removed = [], typeof s == "string" && (J = !1), J) {
      if (s.nodeName) {
        var A = E(s.nodeName);
        if (!h[A] || Z[A])
          throw Ue("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof c)
      r = lt("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!q && !$ && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && oe ? C.createHTML(s) : s;
      if (r = lt(s), !r)
        return q ? null : oe ? _e : "";
    }
    r && Le && N(r.firstChild);
    for (var B = ut(J ? s : r); m = B.nextNode(); )
      m.nodeType === 3 && m === R || ct(m) || (m.content instanceof f && Zt(m.content), dt(m), R = m);
    if (R = null, J)
      return s;
    if (q) {
      if (ae)
        for (b = Ft.call(r.ownerDocument); r.firstChild; )
          b.appendChild(r.firstChild);
      else
        b = r;
      return (y.shadowroot || y.shadowrootmod) && (b = Ht.call(o, b, !0)), b;
    }
    var _ = z ? r.outerHTML : r.innerHTML;
    return z && h["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && g(Dr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), $ && (_ = I(_, ye, " "), _ = I(_, Ee, " "), _ = I(_, Ae, " ")), C && oe ? C.createHTML(_) : _;
  }, n.setConfig = function(s) {
    Ce(s), Re = !0;
  }, n.clearConfig = function() {
    K = null, Re = !1;
  }, n.isValidAttribute = function(s, e, r) {
    K || Ce({});
    var a = E(s), m = E(e);
    return pt(a, m, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (k[s] = k[s] || [], te(k[s], e));
  }, n.removeHook = function(s) {
    if (k[s])
      return Et(k[s]);
  }, n.removeHooks = function(s) {
    k[s] && (k[s] = []);
  }, n.removeAllHooks = function() {
    k = {};
  }, n;
}
Mt();
p.shape({
  event: p.string,
  action: p.string,
  name: p.string,
  region: p.string,
  section: p.string,
  component: p.string,
  type: p.string,
  text: p.string
});
const xr = ({
  event: t = "",
  action: n = "",
  name: o = "",
  type: i = "",
  section: f = "",
  text: l = "",
  region: c = "",
  component: d = ""
}) => {
  const { dataLayer: v } = window, L = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: o.toLowerCase(),
    type: i.toLowerCase(),
    region: c.toLowerCase(),
    section: f.toLowerCase(),
    text: l.toLowerCase(),
    component: d.toLowerCase()
  };
  v && v.push(L);
}, Pr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ct = ({
  label: t,
  cardTitle: n,
  ariaLabel: o,
  color: i,
  disabled: f,
  element: l,
  innerRef: c,
  href: d,
  onClick: v,
  ...L
}) => {
  const O = rr("btn", "btn-tag", {
    "btn-tag-alt-white": i === "white",
    "btn-tag-alt-gray": i === "gray",
    "btn-tag-alt-dark": i === "dark",
    disabled: f
  });
  let w = l;
  d && l === "button" && (w = "a");
  const P = (F) => {
    xr({ ...Pr, text: F, section: n }), v == null || v();
  };
  return (
    // @ts-ignore
    /* @__PURE__ */ er.jsx(
      w,
      {
        type: w === "button" && v ? "button" : void 0,
        ...L,
        className: O,
        href: d,
        ref: c,
        onClick: () => P(t),
        "aria-label": o,
        children: t
      }
    )
  );
};
Ct.propTypes = {
  /**
    Button tag label
  */
  label: p.string,
  /**
   * Card title
   */
  cardTitle: p.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: p.string,
  /**
    Button background color
  */
  color: p.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: p.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: p.oneOfType([
    p.func,
    p.string,
    p.shape({ $$typeof: p.symbol, render: p.func }),
    p.arrayOf(
      p.oneOfType([
        p.func,
        p.string,
        p.shape({ $$typeof: p.symbol, render: p.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: p.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: p.oneOfType([
    p.object,
    p.func,
    p.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: p.func
};
Ct.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  innerRef: void 0,
  onClick: void 0
};
export {
  Ct as ButtonTag
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
