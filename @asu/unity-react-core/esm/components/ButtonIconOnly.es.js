import $e, { useId as Jt } from "react";
function Qt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Nt = { exports: {} }, ee = {};
var ht;
function er() {
  if (ht) return ee;
  ht = 1;
  var t = $e, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(v, p, C) {
    var O, F = {}, U = null, W = null;
    C !== void 0 && (U = "" + C), p.key !== void 0 && (U = "" + p.key), p.ref !== void 0 && (W = p.ref);
    for (O in p) o.call(p, O) && !f.hasOwnProperty(O) && (F[O] = p[O]);
    if (v && v.defaultProps) for (O in p = v.defaultProps, p) F[O] === void 0 && (F[O] = p[O]);
    return { $$typeof: r, type: v, key: U, ref: W, props: F, _owner: u.current };
  }
  return ee.Fragment = i, ee.jsx = m, ee.jsxs = m, ee;
}
Nt.exports = er();
var ke = Nt.exports, wt = { exports: {} }, Pe, Et;
function tr() {
  if (Et) return Pe;
  Et = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pe = t, Pe;
}
var Fe, yt;
function rr() {
  if (yt) return Fe;
  yt = 1;
  var t = tr();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Fe = function() {
    function o(m, v, p, C, O, F) {
      if (F !== t) {
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
      resetWarningCache: r
    };
    return f.PropTypes = f, f;
  }, Fe;
}
wt.exports = rr()();
var nr = wt.exports;
const T = /* @__PURE__ */ Qt(nr);
function H(t) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, H(t);
}
function je(t, r) {
  return je = Object.setPrototypeOf || function(o, u) {
    return o.__proto__ = u, o;
  }, je(t, r);
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
function pe(t, r, i) {
  return ar() ? pe = Reflect.construct : pe = function(u, f, m) {
    var v = [null];
    v.push.apply(v, f);
    var p = Function.bind.apply(u, v), C = new p();
    return m && je(C, m.prototype), C;
  }, pe.apply(null, arguments);
}
function I(t) {
  return or(t) || ir(t) || sr(t) || lr();
}
function or(t) {
  if (Array.isArray(t)) return qe(t);
}
function ir(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function sr(t, r) {
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
function lr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ur = Object.hasOwnProperty, At = Object.setPrototypeOf, cr = Object.isFrozen, fr = Object.getPrototypeOf, pr = Object.getOwnPropertyDescriptor, b = Object.freeze, N = Object.seal, mr = Object.create, Ct = typeof Reflect < "u" && Reflect, de = Ct.apply, Ye = Ct.construct;
de || (de = function(r, i, o) {
  return r.apply(i, o);
});
b || (b = function(r) {
  return r;
});
N || (N = function(r) {
  return r;
});
Ye || (Ye = function(r, i) {
  return pe(r, I(i));
});
var dr = w(Array.prototype.forEach), gt = w(Array.prototype.pop), te = w(Array.prototype.push), me = w(String.prototype.toLowerCase), Ue = w(String.prototype.toString), St = w(String.prototype.match), D = w(String.prototype.replace), vr = w(String.prototype.indexOf), Tr = w(String.prototype.trim), g = w(RegExp.prototype.test), He = _r(TypeError);
function w(t) {
  return function(r) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
      o[u - 1] = arguments[u];
    return de(t, r, o);
  };
}
function _r(t) {
  return function() {
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return Ye(t, i);
  };
}
function l(t, r, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : me, At && At(t, null);
  for (var u = r.length; u--; ) {
    var f = r[u];
    if (typeof f == "string") {
      var m = i(f);
      m !== f && (cr(r) || (r[u] = m), f = m);
    }
    t[f] = !0;
  }
  return t;
}
function $(t) {
  var r = mr(null), i;
  for (i in t)
    de(ur, t, [i]) === !0 && (r[i] = t[i]);
  return r;
}
function ce(t, r) {
  for (; t !== null; ) {
    var i = pr(t, r);
    if (i) {
      if (i.get)
        return w(i.get);
      if (typeof i.value == "function")
        return w(i.value);
    }
    t = fr(t);
  }
  function o(u) {
    return console.warn("fallback value for", u), null;
  }
  return o;
}
var bt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), We = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ze = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hr = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ge = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Er = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rt = b(["#text"]), Ot = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Be = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), fe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), yr = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ar = N(/<%[\w\W]*|[\w\W]*%>/gm), gr = N(/\${[\w\W]*}/gm), Sr = N(/^data-[\-\w.\u00B7-\uFFFF]/), br = N(/^aria-[\-\w]+$/), Rr = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Or = N(/^(?:\w+script|data):/i), Lr = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Nr = N(/^html$/i), wr = N(/^[a-z][.\w]*(-[.\w]+)+$/i), Cr = function() {
  return typeof window > "u" ? null : window;
}, Mr = function(r, i) {
  if (H(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var o = null, u = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(u) && (o = i.currentScript.getAttribute(u));
  var f = "dompurify" + (o ? "#" + o : "");
  try {
    return r.createPolicy(f, {
      createHTML: function(v) {
        return v;
      },
      createScriptURL: function(v) {
        return v;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + f + " could not be created."), null;
  }
};
function Mt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cr(), r = function(e) {
    return Mt(e);
  };
  if (r.version = "2.5.7", r.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var i = t.document, o = t.document, u = t.DocumentFragment, f = t.HTMLTemplateElement, m = t.Node, v = t.Element, p = t.NodeFilter, C = t.NamedNodeMap, O = C === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : C, F = t.HTMLFormElement, U = t.DOMParser, W = t.trustedTypes, re = v.prototype, It = ce(re, "cloneNode"), xt = ce(re, "nextSibling"), kt = ce(re, "childNodes"), ve = ce(re, "parentNode");
  if (typeof f == "function") {
    var Te = o.createElement("template");
    Te.content && Te.content.ownerDocument && (o = Te.content.ownerDocument);
  }
  var M = Mr(W, i), _e = M ? M.createHTML("") : "", ne = o, he = ne.implementation, Pt = ne.createNodeIterator, Ft = ne.createDocumentFragment, Ut = ne.getElementsByTagName, Ht = i.importNode, Ve = {};
  try {
    Ve = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var x = {};
  r.isSupported = typeof ve == "function" && he && he.createHTMLDocument !== void 0 && Ve !== 9;
  var Ee = yr, ye = Ar, Ae = gr, Wt = Sr, zt = br, Gt = Or, Xe = Lr, Bt = wr, ge = Rr, h = null, Ke = l({}, [].concat(I(bt), I(We), I(ze), I(Ge), I(Rt))), E = null, Ze = l({}, [].concat(I(Ot), I(Be), I(Lt), I(fe))), d = Object.seal(Object.create(null, {
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
  })), Z = null, Se = null, Je = !0, be = !0, Qe = !1, et = !0, j = !1, Re = !0, z = !1, Oe = !1, Le = !1, q = !1, ae = !1, oe = !1, tt = !0, rt = !1, $t = "user-content-", Ne = !0, J = !1, Y = {}, V = null, nt = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, ot = l({}, ["audio", "video", "img", "source", "image", "track"]), we = null, it = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ie = "http://www.w3.org/1998/Math/MathML", se = "http://www.w3.org/2000/svg", k = "http://www.w3.org/1999/xhtml", X = k, Ce = !1, Me = null, jt = l({}, [ie, se, k], Ue), G, qt = ["application/xhtml+xml", "text/html"], Yt = "text/html", y, K = null, Vt = o.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, De = function(e) {
    K && K === e || ((!e || H(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    qt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = Yt : G = e.PARSER_MEDIA_TYPE, y = G === "application/xhtml+xml" ? Ue : me, h = "ALLOWED_TAGS" in e ? l({}, e.ALLOWED_TAGS, y) : Ke, E = "ALLOWED_ATTR" in e ? l({}, e.ALLOWED_ATTR, y) : Ze, Me = "ALLOWED_NAMESPACES" in e ? l({}, e.ALLOWED_NAMESPACES, Ue) : jt, we = "ADD_URI_SAFE_ATTR" in e ? l(
      $(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : it, at = "ADD_DATA_URI_TAGS" in e ? l(
      $(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      y
      // eslint-disable-line indent
    ) : ot, V = "FORBID_CONTENTS" in e ? l({}, e.FORBID_CONTENTS, y) : nt, Z = "FORBID_TAGS" in e ? l({}, e.FORBID_TAGS, y) : {}, Se = "FORBID_ATTR" in e ? l({}, e.FORBID_ATTR, y) : {}, Y = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, j = e.SAFE_FOR_TEMPLATES || !1, Re = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, q = e.RETURN_DOM || !1, ae = e.RETURN_DOM_FRAGMENT || !1, oe = e.RETURN_TRUSTED_TYPE || !1, Le = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, Ne = e.KEEP_CONTENT !== !1, J = e.IN_PLACE || !1, ge = e.ALLOWED_URI_REGEXP || ge, X = e.NAMESPACE || k, d = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (d.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (d.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (d.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), j && (be = !1), ae && (q = !0), Y && (h = l({}, I(Rt)), E = [], Y.html === !0 && (l(h, bt), l(E, Ot)), Y.svg === !0 && (l(h, We), l(E, Be), l(E, fe)), Y.svgFilters === !0 && (l(h, ze), l(E, Be), l(E, fe)), Y.mathMl === !0 && (l(h, Ge), l(E, Lt), l(E, fe))), e.ADD_TAGS && (h === Ke && (h = $(h)), l(h, e.ADD_TAGS, y)), e.ADD_ATTR && (E === Ze && (E = $(E)), l(E, e.ADD_ATTR, y)), e.ADD_URI_SAFE_ATTR && l(we, e.ADD_URI_SAFE_ATTR, y), e.FORBID_CONTENTS && (V === nt && (V = $(V)), l(V, e.FORBID_CONTENTS, y)), Ne && (h["#text"] = !0), z && l(h, ["html", "head", "body"]), h.table && (l(h, ["tbody"]), delete Z.tbody), b && b(e), K = e);
  }, lt = l({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = l({}, ["annotation-xml"]), Xt = l({}, ["title", "style", "font", "a", "script"]), le = l({}, We);
  l(le, ze), l(le, hr);
  var Ie = l({}, Ge);
  l(Ie, Er);
  var Kt = function(e) {
    var n = ve(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: X,
      tagName: "template"
    });
    var a = me(e.tagName), c = me(n.tagName);
    return Me[e.namespaceURI] ? e.namespaceURI === se ? n.namespaceURI === k ? a === "svg" : n.namespaceURI === ie ? a === "svg" && (c === "annotation-xml" || lt[c]) : !!le[a] : e.namespaceURI === ie ? n.namespaceURI === k ? a === "math" : n.namespaceURI === se ? a === "math" && ut[c] : !!Ie[a] : e.namespaceURI === k ? n.namespaceURI === se && !ut[c] || n.namespaceURI === ie && !lt[c] ? !1 : !Ie[a] && (Xt[a] || !le[a]) : !!(G === "application/xhtml+xml" && Me[e.namespaceURI]) : !1;
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
  }, ue = function(e, n) {
    try {
      te(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      te(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is" && !E[e])
      if (q || ae)
        try {
          L(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, ct = function(e) {
    var n, a;
    if (Le)
      e = "<remove></remove>" + e;
    else {
      var c = St(e, /^[\r\n\t ]+/);
      a = c && c[0];
    }
    G === "application/xhtml+xml" && X === k && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = M ? M.createHTML(e) : e;
    if (X === k)
      try {
        n = new U().parseFromString(R, G);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = he.createDocument(X, "template", null);
      try {
        n.documentElement.innerHTML = Ce ? _e : R;
      } catch {
      }
    }
    var S = n.body || n.documentElement;
    return e && a && S.insertBefore(o.createTextNode(a), S.childNodes[0] || null), X === k ? Ut.call(n, z ? "html" : "body")[0] : z ? n.documentElement : S;
  }, ft = function(e) {
    return Pt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof F && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof O) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Q = function(e) {
    return H(m) === "object" ? e instanceof m : e && H(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, P = function(e, n, a) {
    x[e] && dr(x[e], function(c) {
      c.call(r, n, a, K);
    });
  }, mt = function(e) {
    var n;
    if (P("beforeSanitizeElements", e, null), pt(e) || g(/[\u0080-\uFFFF]/, e.nodeName))
      return L(e), !0;
    var a = y(e.nodeName);
    if (P("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: h
    }), e.hasChildNodes() && !Q(e.firstElementChild) && (!Q(e.content) || !Q(e.content.firstElementChild)) && g(/<[/\w]/g, e.innerHTML) && g(/<[/\w]/g, e.textContent) || a === "select" && g(/<template/i, e.innerHTML) || e.nodeType === 7 || Re && e.nodeType === 8 && g(/<[/\w]/g, e.data))
      return L(e), !0;
    if (!h[a] || Z[a]) {
      if (!Z[a] && vt(a) && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, a) || d.tagNameCheck instanceof Function && d.tagNameCheck(a)))
        return !1;
      if (Ne && !V[a]) {
        var c = ve(e) || e.parentNode, R = kt(e) || e.childNodes;
        if (R && c)
          for (var S = R.length, A = S - 1; A >= 0; --A) {
            var B = It(R[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(B, xt(e));
          }
      }
      return L(e), !0;
    }
    return e instanceof v && !Kt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && g(/<\/no(script|embed|frames)/i, e.innerHTML) ? (L(e), !0) : (j && e.nodeType === 3 && (n = e.textContent, n = D(n, Ee, " "), n = D(n, ye, " "), n = D(n, Ae, " "), e.textContent !== n && (te(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), P("afterSanitizeElements", e, null), !1);
  }, dt = function(e, n, a) {
    if (tt && (n === "id" || n === "name") && (a in o || a in Vt))
      return !1;
    if (!(be && !Se[n] && g(Wt, n))) {
      if (!(Je && g(zt, n))) {
        if (!E[n] || Se[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, e) || d.tagNameCheck instanceof Function && d.tagNameCheck(e)) && (d.attributeNameCheck instanceof RegExp && g(d.attributeNameCheck, n) || d.attributeNameCheck instanceof Function && d.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && d.allowCustomizedBuiltInElements && (d.tagNameCheck instanceof RegExp && g(d.tagNameCheck, a) || d.tagNameCheck instanceof Function && d.tagNameCheck(a)))
          ) return !1;
        } else if (!we[n]) {
          if (!g(ge, D(a, Xe, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && vr(a, "data:") === 0 && at[e])) {
              if (!(Qe && !g(Gt, D(a, Xe, "")))) {
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
    return e !== "annotation-xml" && St(e, Bt);
  }, Tt = function(e) {
    var n, a, c, R;
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
        n = S[R];
        var B = n, _ = B.name, xe = B.namespaceURI;
        if (a = _ === "value" ? n.value : Tr(n.value), c = y(_), A.attrName = c, A.attrValue = a, A.keepAttr = !0, A.forceKeepAttr = void 0, P("uponSanitizeAttribute", e, A), a = A.attrValue, !A.forceKeepAttr && (ue(_, e), !!A.keepAttr)) {
          if (!et && g(/\/>/i, a)) {
            ue(_, e);
            continue;
          }
          j && (a = D(a, Ee, " "), a = D(a, ye, " "), a = D(a, Ae, " "));
          var _t = y(e.nodeName);
          if (dt(_t, c, a)) {
            if (rt && (c === "id" || c === "name") && (ue(_, e), a = $t + a), Re && g(/((--!?|])>)|<\/(style|title)/i, a)) {
              ue(_, e);
              continue;
            }
            if (M && H(W) === "object" && typeof W.getAttributeType == "function" && !xe)
              switch (W.getAttributeType(_t, c)) {
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
              xe ? e.setAttributeNS(xe, _, a) : e.setAttribute(_, a), pt(e) ? L(e) : gt(r.removed);
            } catch {
            }
          }
        }
      }
      P("afterSanitizeAttributes", e, null);
    }
  }, Zt = function s(e) {
    var n, a = ft(e);
    for (P("beforeSanitizeShadowDOM", e, null); n = a.nextNode(); )
      P("uponSanitizeShadowNode", n, null), !mt(n) && (n.content instanceof u && s(n.content), Tt(n));
    P("afterSanitizeShadowDOM", e, null);
  };
  return r.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, a, c, R, S;
    if (Ce = !s, Ce && (s = "<!-->"), typeof s != "string" && !Q(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw He("dirty is not a string, aborting");
      } else
        throw He("toString is not a function");
    if (!r.isSupported) {
      if (H(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (Q(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Oe || De(e), r.removed = [], typeof s == "string" && (J = !1), J) {
      if (s.nodeName) {
        var A = y(s.nodeName);
        if (!h[A] || Z[A])
          throw He("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof m)
      n = ct("<!---->"), a = n.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? n = a : n.appendChild(a);
    else {
      if (!q && !j && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return M && oe ? M.createHTML(s) : s;
      if (n = ct(s), !n)
        return q ? null : oe ? _e : "";
    }
    n && Le && L(n.firstChild);
    for (var B = ft(J ? s : n); c = B.nextNode(); )
      c.nodeType === 3 && c === R || mt(c) || (c.content instanceof u && Zt(c.content), Tt(c), R = c);
    if (R = null, J)
      return s;
    if (q) {
      if (ae)
        for (S = Ft.call(n.ownerDocument); n.firstChild; )
          S.appendChild(n.firstChild);
      else
        S = n;
      return (E.shadowroot || E.shadowrootmod) && (S = Ht.call(i, S, !0)), S;
    }
    var _ = z ? n.outerHTML : n.innerHTML;
    return z && h["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && g(Nr, n.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + _), j && (_ = D(_, Ee, " "), _ = D(_, ye, " "), _ = D(_, Ae, " ")), M && oe ? M.createHTML(_) : _;
  }, r.setConfig = function(s) {
    De(s), Oe = !0;
  }, r.clearConfig = function() {
    K = null, Oe = !1;
  }, r.isValidAttribute = function(s, e, n) {
    K || De({});
    var a = y(s), c = y(e);
    return dt(a, c, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && (x[s] = x[s] || [], te(x[s], e));
  }, r.removeHook = function(s) {
    if (x[s])
      return gt(x[s]);
  }, r.removeHooks = function(s) {
    x[s] && (x[s] = []);
  }, r.removeAllHooks = function() {
    x = {};
  }, r;
}
Mt();
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
const Dr = ({
  event: t = "",
  action: r = "",
  name: i = "",
  type: o = "",
  section: u = "",
  text: f = "",
  region: m = "",
  component: v = ""
}) => {
  const { dataLayer: p } = window, C = {
    event: t.toLowerCase(),
    action: r.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: m.toLowerCase(),
    section: u.toLowerCase(),
    text: f.toLowerCase(),
    component: v.toLowerCase()
  };
  p && p.push(C);
}, Ir = "staticMarkup";
function xr() {
  const r = Jt().indexOf(Ir) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const kr = ({ gaData: t, children: r }) => {
  const { isReact: i } = xr(), { onClick: o, ...u } = r.props;
  return i ? $e.cloneElement(r, {
    ...u,
    onClick: (f) => (Dr(t), o ? o(f) : !0)
  }) : $e.cloneElement(r, {
    ...u,
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
}, Pr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Dt = ({
  color: t,
  icon: r,
  innerRef: i,
  onClick: o,
  size: u,
  cardTitle: f,
  className: m,
  ...v
}) => {
  const p = () => {
    o == null || o();
  };
  return /* @__PURE__ */ ke.jsx(
    kr,
    {
      gaData: {
        ...Pr,
        text: `${r == null ? void 0 : r[1]} icon`,
        section: f
      },
      children: /* @__PURE__ */ ke.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${t} ${u === "large" && "btn-circle-large"} ${m}`,
          ref: i,
          "aria-label": "Close",
          onClick: p,
          ...v,
          children: /* @__PURE__ */ ke.jsx("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` })
        }
      )
    }
  );
};
Dt.propTypes = {
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
