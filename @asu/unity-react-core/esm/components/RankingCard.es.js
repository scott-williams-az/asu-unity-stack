import lr, { useState as ur } from "react";
function Ft(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ut = { exports: {} }, oe = {};
var Rt;
function cr() {
  if (Rt) return oe;
  Rt = 1;
  var t = lr, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, v, O) {
    var L, w = {}, I = null, U = null;
    O !== void 0 && (I = "" + O), v.key !== void 0 && (I = "" + v.key), v.ref !== void 0 && (U = v.ref);
    for (L in v) o.call(v, L) && !l.hasOwnProperty(L) && (w[L] = v[L]);
    if (d && d.defaultProps) for (L in v = d.defaultProps, v) w[L] === void 0 && (w[L] = v[L]);
    return { $$typeof: n, type: d, key: I, ref: U, props: w, _owner: u.current };
  }
  return oe.Fragment = a, oe.jsx = f, oe.jsxs = f, oe;
}
Ut.exports = cr();
var m = Ut.exports, Ht = { exports: {} };
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function a() {
      for (var l = "", f = 0; f < arguments.length; f++) {
        var d = arguments[f];
        d && (l = u(l, o(d)));
      }
      return l;
    }
    function o(l) {
      if (typeof l == "string" || typeof l == "number")
        return l;
      if (typeof l != "object")
        return "";
      if (Array.isArray(l))
        return a.apply(null, l);
      if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
        return l.toString();
      var f = "";
      for (var d in l)
        n.call(l, d) && l[d] && (f = u(f, d));
      return f;
    }
    function u(l, f) {
      return f ? l ? l + " " + f : l + f : l;
    }
    t.exports ? (a.default = a, t.exports = a) : window.classNames = a;
  })();
})(Ht);
var pr = Ht.exports;
const Ee = /* @__PURE__ */ Ft(pr);
var jt = { exports: {} }, We, bt;
function fr() {
  if (bt) return We;
  bt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return We = t, We;
}
var ze, Ot;
function mr() {
  if (Ot) return ze;
  Ot = 1;
  var t = fr();
  function n() {
  }
  function a() {
  }
  return a.resetWarningCache = n, ze = function() {
    function o(f, d, v, O, L, w) {
      if (w !== t) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    o.isRequired = o;
    function u() {
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
      checkPropTypes: a,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, ze;
}
jt.exports = mr()();
var dr = jt.exports;
const c = /* @__PURE__ */ Ft(dr), hr = (t) => (t || []).join(" ");
function W(t) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, W(t);
}
function Xe(t, n) {
  return Xe = Object.setPrototypeOf || function(o, u) {
    return o.__proto__ = u, o;
  }, Xe(t, n);
}
function vr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ye(t, n, a) {
  return vr() ? ye = Reflect.construct : ye = function(u, l, f) {
    var d = [null];
    d.push.apply(d, l);
    var v = Function.bind.apply(u, d), O = new v();
    return f && Xe(O, f.prototype), O;
  }, ye.apply(null, arguments);
}
function P(t) {
  return Tr(t) || _r(t) || yr(t) || gr();
}
function Tr(t) {
  if (Array.isArray(t)) return Ke(t);
}
function _r(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function yr(t, n) {
  if (t) {
    if (typeof t == "string") return Ke(t, n);
    var a = Object.prototype.toString.call(t).slice(8, -1);
    if (a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set") return Array.from(t);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Ke(t, n);
  }
}
function Ke(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var a = 0, o = new Array(n); a < n; a++) o[a] = t[a];
  return o;
}
function gr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Er = Object.hasOwnProperty, Lt = Object.setPrototypeOf, Ar = Object.isFrozen, Sr = Object.getPrototypeOf, Rr = Object.getOwnPropertyDescriptor, b = Object.freeze, C = Object.seal, br = Object.create, Wt = typeof Reflect < "u" && Reflect, Ae = Wt.apply, Ze = Wt.construct;
Ae || (Ae = function(n, a, o) {
  return n.apply(a, o);
});
b || (b = function(n) {
  return n;
});
C || (C = function(n) {
  return n;
});
Ze || (Ze = function(n, a) {
  return ye(n, P(a));
});
var Or = D(Array.prototype.forEach), Nt = D(Array.prototype.pop), se = D(Array.prototype.push), ge = D(String.prototype.toLowerCase), Ge = D(String.prototype.toString), xt = D(String.prototype.match), k = D(String.prototype.replace), Lr = D(String.prototype.indexOf), Nr = D(String.prototype.trim), S = D(RegExp.prototype.test), Be = xr(TypeError);
function D(t) {
  return function(n) {
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      o[u - 1] = arguments[u];
    return Ae(t, n, o);
  };
}
function xr(t) {
  return function() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return Ze(t, a);
  };
}
function p(t, n, a) {
  var o;
  a = (o = a) !== null && o !== void 0 ? o : ge, Lt && Lt(t, null);
  for (var u = n.length; u--; ) {
    var l = n[u];
    if (typeof l == "string") {
      var f = a(l);
      f !== l && (Ar(n) || (n[u] = f), l = f);
    }
    t[l] = !0;
  }
  return t;
}
function q(t) {
  var n = br(null), a;
  for (a in t)
    Ae(Er, t, [a]) === !0 && (n[a] = t[a]);
  return n;
}
function Te(t, n) {
  for (; t !== null; ) {
    var a = Rr(t, n);
    if (a) {
      if (a.get)
        return D(a.get);
      if (typeof a.value == "function")
        return D(a.value);
    }
    t = Sr(t);
  }
  function o(u) {
    return console.warn("fallback value for", u), null;
  }
  return o;
}
var wt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), qe = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $e = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wr = b(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ve = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Mr = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Mt = b(["#text"]), Ct = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ye = b(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dt = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), _e = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Cr = C(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Dr = C(/<%[\w\W]*|[\w\W]*%>/gm), Ir = C(/\${[\w\W]*}/gm), kr = C(/^data-[\-\w.\u00B7-\uFFFF]/), Pr = C(/^aria-[\-\w]+$/), Fr = C(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ur = C(/^(?:\w+script|data):/i), Hr = C(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), jr = C(/^html$/i), Wr = C(/^[a-z][.\w]*(-[.\w]+)+$/i), zr = function() {
  return typeof window > "u" ? null : window;
}, Gr = function(n, a) {
  if (W(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var o = null, u = "data-tt-policy-suffix";
  a.currentScript && a.currentScript.hasAttribute(u) && (o = a.currentScript.getAttribute(u));
  var l = "dompurify" + (o ? "#" + o : "");
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
function zt() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zr(), n = function(e) {
    return zt(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var a = t.document, o = t.document, u = t.DocumentFragment, l = t.HTMLTemplateElement, f = t.Node, d = t.Element, v = t.NodeFilter, O = t.NamedNodeMap, L = O === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : O, w = t.HTMLFormElement, I = t.DOMParser, U = t.trustedTypes, V = d.prototype, Y = Te(V, "cloneNode"), le = Te(V, "nextSibling"), ue = Te(V, "childNodes"), re = Te(V, "parentNode");
  if (typeof l == "function") {
    var X = o.createElement("template");
    X.content && X.content.ownerDocument && (o = X.content.ownerDocument);
  }
  var N = Gr(U, a), Se = N ? N.createHTML("") : "", ce = o, Re = ce.implementation, $t = ce.createNodeIterator, Vt = ce.createDocumentFragment, Yt = ce.getElementsByTagName, Xt = a.importNode, et = {};
  try {
    et = q(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var F = {};
  n.isSupported = typeof re == "function" && Re && Re.createHTMLDocument !== void 0 && et !== 9;
  var be = Cr, Oe = Dr, Le = Ir, Kt = kr, Zt = Pr, Jt = Ur, tt = Hr, Qt = Wr, Ne = Fr, y = null, rt = p({}, [].concat(P(wt), P(qe), P($e), P(Ve), P(Mt))), g = null, nt = p({}, [].concat(P(Ct), P(Ye), P(Dt), P(_e))), T = Object.seal(Object.create(null, {
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
  })), ne = null, xe = null, at = !0, we = !0, it = !1, ot = !0, K = !1, Me = !0, z = !1, Ce = !1, De = !1, Z = !1, pe = !1, fe = !1, st = !0, lt = !1, er = "user-content-", Ie = !0, ae = !1, J = {}, Q = null, ut = p({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ct = null, pt = p({}, ["audio", "video", "img", "source", "image", "track"]), ke = null, ft = p({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), me = "http://www.w3.org/1998/Math/MathML", de = "http://www.w3.org/2000/svg", H = "http://www.w3.org/1999/xhtml", ee = H, Pe = !1, Fe = null, tr = p({}, [me, de, H], Ge), G, rr = ["application/xhtml+xml", "text/html"], nr = "text/html", E, te = null, ar = o.createElement("form"), mt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ue = function(e) {
    te && te === e || ((!e || W(e) !== "object") && (e = {}), e = q(e), G = // eslint-disable-next-line unicorn/prefer-includes
    rr.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = nr : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? Ge : ge, y = "ALLOWED_TAGS" in e ? p({}, e.ALLOWED_TAGS, E) : rt, g = "ALLOWED_ATTR" in e ? p({}, e.ALLOWED_ATTR, E) : nt, Fe = "ALLOWED_NAMESPACES" in e ? p({}, e.ALLOWED_NAMESPACES, Ge) : tr, ke = "ADD_URI_SAFE_ATTR" in e ? p(
      q(ft),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ft, ct = "ADD_DATA_URI_TAGS" in e ? p(
      q(pt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : pt, Q = "FORBID_CONTENTS" in e ? p({}, e.FORBID_CONTENTS, E) : ut, ne = "FORBID_TAGS" in e ? p({}, e.FORBID_TAGS, E) : {}, xe = "FORBID_ATTR" in e ? p({}, e.FORBID_ATTR, E) : {}, J = "USE_PROFILES" in e ? e.USE_PROFILES : !1, at = e.ALLOW_ARIA_ATTR !== !1, we = e.ALLOW_DATA_ATTR !== !1, it = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ot = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, K = e.SAFE_FOR_TEMPLATES || !1, Me = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, Z = e.RETURN_DOM || !1, pe = e.RETURN_DOM_FRAGMENT || !1, fe = e.RETURN_TRUSTED_TYPE || !1, De = e.FORCE_BODY || !1, st = e.SANITIZE_DOM !== !1, lt = e.SANITIZE_NAMED_PROPS || !1, Ie = e.KEEP_CONTENT !== !1, ae = e.IN_PLACE || !1, Ne = e.ALLOWED_URI_REGEXP || Ne, ee = e.NAMESPACE || H, T = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (T.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (T.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (T.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), K && (we = !1), pe && (Z = !0), J && (y = p({}, P(Mt)), g = [], J.html === !0 && (p(y, wt), p(g, Ct)), J.svg === !0 && (p(y, qe), p(g, Ye), p(g, _e)), J.svgFilters === !0 && (p(y, $e), p(g, Ye), p(g, _e)), J.mathMl === !0 && (p(y, Ve), p(g, Dt), p(g, _e))), e.ADD_TAGS && (y === rt && (y = q(y)), p(y, e.ADD_TAGS, E)), e.ADD_ATTR && (g === nt && (g = q(g)), p(g, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && p(ke, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (Q === ut && (Q = q(Q)), p(Q, e.FORBID_CONTENTS, E)), Ie && (y["#text"] = !0), z && p(y, ["html", "head", "body"]), y.table && (p(y, ["tbody"]), delete ne.tbody), b && b(e), te = e);
  }, dt = p({}, ["mi", "mo", "mn", "ms", "mtext"]), ht = p({}, ["annotation-xml"]), ir = p({}, ["title", "style", "font", "a", "script"]), he = p({}, qe);
  p(he, $e), p(he, wr);
  var He = p({}, Ve);
  p(He, Mr);
  var or = function(e) {
    var r = re(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: ee,
      tagName: "template"
    });
    var i = ge(e.tagName), h = ge(r.tagName);
    return Fe[e.namespaceURI] ? e.namespaceURI === de ? r.namespaceURI === H ? i === "svg" : r.namespaceURI === me ? i === "svg" && (h === "annotation-xml" || dt[h]) : !!he[i] : e.namespaceURI === me ? r.namespaceURI === H ? i === "math" : r.namespaceURI === de ? i === "math" && ht[h] : !!He[i] : e.namespaceURI === H ? r.namespaceURI === de && !ht[h] || r.namespaceURI === me && !dt[h] ? !1 : !He[i] && (ir[i] || !he[i]) : !!(G === "application/xhtml+xml" && Fe[e.namespaceURI]) : !1;
  }, M = function(e) {
    se(n.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = Se;
      } catch {
        e.remove();
      }
    }
  }, ve = function(e, r) {
    try {
      se(n.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      se(n.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !g[e])
      if (Z || pe)
        try {
          M(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, vt = function(e) {
    var r, i;
    if (De)
      e = "<remove></remove>" + e;
    else {
      var h = xt(e, /^[\r\n\t ]+/);
      i = h && h[0];
    }
    G === "application/xhtml+xml" && ee === H && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var x = N ? N.createHTML(e) : e;
    if (ee === H)
      try {
        r = new I().parseFromString(x, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Re.createDocument(ee, "template", null);
      try {
        r.documentElement.innerHTML = Pe ? Se : x;
      } catch {
      }
    }
    var R = r.body || r.documentElement;
    return e && i && R.insertBefore(o.createTextNode(i), R.childNodes[0] || null), ee === H ? Yt.call(r, z ? "html" : "body")[0] : z ? r.documentElement : R;
  }, Tt = function(e) {
    return $t.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, _t = function(e) {
    return e instanceof w && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof L) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ie = function(e) {
    return W(f) === "object" ? e instanceof f : e && W(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, j = function(e, r, i) {
    F[e] && Or(F[e], function(h) {
      h.call(n, r, i, te);
    });
  }, yt = function(e) {
    var r;
    if (j("beforeSanitizeElements", e, null), _t(e) || S(/[\u0080-\uFFFF]/, e.nodeName))
      return M(e), !0;
    var i = E(e.nodeName);
    if (j("uponSanitizeElement", e, {
      tagName: i,
      allowedTags: y
    }), e.hasChildNodes() && !ie(e.firstElementChild) && (!ie(e.content) || !ie(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent) || i === "select" && S(/<template/i, e.innerHTML) || e.nodeType === 7 || Me && e.nodeType === 8 && S(/<[/\w]/g, e.data))
      return M(e), !0;
    if (!y[i] || ne[i]) {
      if (!ne[i] && Et(i) && (T.tagNameCheck instanceof RegExp && S(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
        return !1;
      if (Ie && !Q[i]) {
        var h = re(e) || e.parentNode, x = ue(e) || e.childNodes;
        if (x && h)
          for (var R = x.length, A = R - 1; A >= 0; --A) {
            var B = Y(x[A], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, h.insertBefore(B, le(e));
          }
      }
      return M(e), !0;
    }
    return e instanceof d && !or(e) || (i === "noscript" || i === "noembed" || i === "noframes") && S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (M(e), !0) : (K && e.nodeType === 3 && (r = e.textContent, r = k(r, be, " "), r = k(r, Oe, " "), r = k(r, Le, " "), e.textContent !== r && (se(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), j("afterSanitizeElements", e, null), !1);
  }, gt = function(e, r, i) {
    if (st && (r === "id" || r === "name") && (i in o || i in ar))
      return !1;
    if (!(we && !xe[r] && S(Kt, r))) {
      if (!(at && S(Zt, r))) {
        if (!g[r] || xe[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Et(e) && (T.tagNameCheck instanceof RegExp && S(T.tagNameCheck, e) || T.tagNameCheck instanceof Function && T.tagNameCheck(e)) && (T.attributeNameCheck instanceof RegExp && S(T.attributeNameCheck, r) || T.attributeNameCheck instanceof Function && T.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && T.allowCustomizedBuiltInElements && (T.tagNameCheck instanceof RegExp && S(T.tagNameCheck, i) || T.tagNameCheck instanceof Function && T.tagNameCheck(i)))
          ) return !1;
        } else if (!ke[r]) {
          if (!S(Ne, k(i, tt, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && Lr(i, "data:") === 0 && ct[e])) {
              if (!(it && !S(Jt, k(i, tt, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Et = function(e) {
    return e !== "annotation-xml" && xt(e, Qt);
  }, At = function(e) {
    var r, i, h, x;
    j("beforeSanitizeAttributes", e, null);
    var R = e.attributes;
    if (R) {
      var A = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: g
      };
      for (x = R.length; x--; ) {
        r = R[x];
        var B = r, _ = B.name, je = B.namespaceURI;
        if (i = _ === "value" ? r.value : Nr(r.value), h = E(_), A.attrName = h, A.attrValue = i, A.keepAttr = !0, A.forceKeepAttr = void 0, j("uponSanitizeAttribute", e, A), i = A.attrValue, !A.forceKeepAttr && (ve(_, e), !!A.keepAttr)) {
          if (!ot && S(/\/>/i, i)) {
            ve(_, e);
            continue;
          }
          K && (i = k(i, be, " "), i = k(i, Oe, " "), i = k(i, Le, " "));
          var St = E(e.nodeName);
          if (gt(St, h, i)) {
            if (lt && (h === "id" || h === "name") && (ve(_, e), i = er + i), Me && S(/((--!?|])>)|<\/(style|title)/i, i)) {
              ve(_, e);
              continue;
            }
            if (N && W(U) === "object" && typeof U.getAttributeType == "function" && !je)
              switch (U.getAttributeType(St, h)) {
                case "TrustedHTML": {
                  i = N.createHTML(i);
                  break;
                }
                case "TrustedScriptURL": {
                  i = N.createScriptURL(i);
                  break;
                }
              }
            try {
              je ? e.setAttributeNS(je, _, i) : e.setAttribute(_, i), _t(e) ? M(e) : Nt(n.removed);
            } catch {
            }
          }
        }
      }
      j("afterSanitizeAttributes", e, null);
    }
  }, sr = function s(e) {
    var r, i = Tt(e);
    for (j("beforeSanitizeShadowDOM", e, null); r = i.nextNode(); )
      j("uponSanitizeShadowNode", r, null), !yt(r) && (r.content instanceof u && s(r.content), At(r));
    j("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, h, x, R;
    if (Pe = !s, Pe && (s = "<!-->"), typeof s != "string" && !ie(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Be("dirty is not a string, aborting");
      } else
        throw Be("toString is not a function");
    if (!n.isSupported) {
      if (W(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ie(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Ce || Ue(e), n.removed = [], typeof s == "string" && (ae = !1), ae) {
      if (s.nodeName) {
        var A = E(s.nodeName);
        if (!y[A] || ne[A])
          throw Be("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof f)
      r = vt("<!---->"), i = r.ownerDocument.importNode(s, !0), i.nodeType === 1 && i.nodeName === "BODY" || i.nodeName === "HTML" ? r = i : r.appendChild(i);
    else {
      if (!Z && !K && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return N && fe ? N.createHTML(s) : s;
      if (r = vt(s), !r)
        return Z ? null : fe ? Se : "";
    }
    r && De && M(r.firstChild);
    for (var B = Tt(ae ? s : r); h = B.nextNode(); )
      h.nodeType === 3 && h === x || yt(h) || (h.content instanceof u && sr(h.content), At(h), x = h);
    if (x = null, ae)
      return s;
    if (Z) {
      if (pe)
        for (R = Vt.call(r.ownerDocument); r.firstChild; )
          R.appendChild(r.firstChild);
      else
        R = r;
      return (g.shadowroot || g.shadowrootmod) && (R = Xt.call(a, R, !0)), R;
    }
    var _ = z ? r.outerHTML : r.innerHTML;
    return z && y["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && S(jr, r.ownerDocument.doctype.name) && (_ = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + _), K && (_ = k(_, be, " "), _ = k(_, Oe, " "), _ = k(_, Le, " ")), N && fe ? N.createHTML(_) : _;
  }, n.setConfig = function(s) {
    Ue(s), Ce = !0;
  }, n.clearConfig = function() {
    te = null, Ce = !1;
  }, n.isValidAttribute = function(s, e, r) {
    te || Ue({});
    var i = E(s), h = E(e);
    return gt(i, h, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (F[s] = F[s] || [], se(F[s], e));
  }, n.removeHook = function(s) {
    if (F[s])
      return Nt(F[s]);
  }, n.removeHooks = function(s) {
    F[s] && (F[s] = []);
  }, n.removeAllHooks = function() {
    F = {};
  }, n;
}
var Br = zt();
const Je = (t) => ({ __html: Br.sanitize(t) });
c.shape({
  event: c.string,
  action: c.string,
  name: c.string,
  region: c.string,
  section: c.string,
  component: c.string,
  type: c.string,
  text: c.string
});
const It = ({
  event: t = "",
  action: n = "",
  name: a = "",
  type: o = "",
  section: u = "",
  text: l = "",
  region: f = "",
  component: d = ""
}) => {
  const { dataLayer: v } = window, O = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: a.toLowerCase(),
    type: o.toLowerCase(),
    region: f.toLowerCase(),
    section: u.toLowerCase(),
    text: l.toLowerCase(),
    component: d.toLowerCase()
  };
  v && v.push(O);
}, Qe = ({
  src: t,
  alt: n,
  cssClasses: a,
  loading: o = "lazy",
  decoding: u = "async",
  dataTestId: l,
  fetchPriority: f = "auto",
  width: d,
  height: v,
  cardLink: O,
  title: L,
  caption: w,
  captionTitle: I,
  border: U,
  dropShadow: V
}) => {
  const Y = {
    src: t,
    alt: n,
    loading: o,
    decoding: u,
    fetchpriority: f,
    // React attribute bug workaround
    ...(a == null ? void 0 : a.length) > 0 && { className: hr(a) },
    ...l && { "data-testid": l },
    ...d && { width: d },
    ...v && { height: v }
  }, le = Ee("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": V
  }), ue = (X) => {
    const N = X ? `${Y.className} ${X}` : Y.className;
    return O ? /* @__PURE__ */ m.jsxs("a", { href: O, children: [
      /* @__PURE__ */ m.jsx("img", { ...Y, className: N }),
      /* @__PURE__ */ m.jsx("span", { className: "visually-hidden", children: L })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ m.jsx("img", { ...Y, className: N })
    );
  }, re = () => /* @__PURE__ */ m.jsx("div", { className: le, children: /* @__PURE__ */ m.jsxs("figure", { className: "figure uds-figure", children: [
    ue(),
    w && /* @__PURE__ */ m.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      I && /* @__PURE__ */ m.jsx("h3", { children: I }),
      /* @__PURE__ */ m.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Je(w)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: w ? re() : ue(le) });
};
Qe.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: c.string.isRequired,
  /**
   * Image alt text
   */
  alt: c.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: c.arrayOf(c.string),
  /**
   * Image loading mode
   */
  loading: c.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: c.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: c.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: c.string,
  /**
   * Height of the image
   */
  height: c.string,
  dataTestId: c.string,
  cardLink: c.string,
  title: c.string,
  caption: c.string,
  captionTitle: c.string,
  border: c.bool,
  dropShadow: c.bool
};
const kt = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Pt = {
  OPEN: "open",
  CLOSE: "close"
}, qr = {
  LARGE: "large",
  SMALL: "small"
}, $ = (t) => t === qr.SMALL, Gt = ({ size: t, image: n, imageAlt: a }) => $(t) ? /* @__PURE__ */ m.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ m.jsx(Qe, { src: n, alt: a, fetchPriority: "high" }) }) : /* @__PURE__ */ m.jsx(Qe, { src: n, alt: a, fetchPriority: "high" });
Gt.propTypes = {
  size: c.oneOf(["small", "large"]),
  image: c.string.isRequired,
  imageAlt: c.string.isRequired
};
const Bt = ({ heading: t, citation: n }) => /* @__PURE__ */ m.jsxs("div", { className: "citation", children: [
  /* @__PURE__ */ m.jsx("h4", { children: t }),
  /* @__PURE__ */ m.jsxs("p", { children: [
    "— ",
    n
  ] })
] });
Bt.propTypes = {
  heading: c.string.isRequired,
  citation: c.string.isRequired
};
const qt = ({ imageSize: t, body: n, heading: a, readMoreLink: o }) => {
  const [u, l] = ur(!1), f = `info-layer-${Math.floor(Math.random() * 1e5)}`, d = (v) => {
    (v.type === "click" || v.key === "Enter" || v.key === " ") && (l(!u), It({
      ...kt,
      text: "Expand ranking",
      action: u ? Pt.OPEN : Pt.CLOSE,
      section: a
    }));
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: Ee("info-layer", { active: u }),
      "data-testid": "info-layer",
      id: f,
      children: /* @__PURE__ */ m.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: Ee("header", {
              closed: $(t) && !u
            }),
            children: [
              $(t) && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ m.jsx("p", { dangerouslySetInnerHTML: Je(n) }),
              !$(t) && /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs(
                "button",
                {
                  onClick: d,
                  className: "btn-expand",
                  type: "button",
                  "aria-expanded": u,
                  "aria-controls": f,
                  children: [
                    /* @__PURE__ */ m.jsx("h4", { children: a }),
                    /* @__PURE__ */ m.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              ) }),
              $(t) && /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs(
                "button",
                {
                  onClick: d,
                  className: "btn btn-expand",
                  type: "button",
                  "aria-expanded": u,
                  "aria-controls": f,
                  children: [
                    /* @__PURE__ */ m.jsx("span", { className: "visually-hidden", children: a }),
                    /* @__PURE__ */ m.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              ) })
            ]
          }
        ),
        !$(t) && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ m.jsx("p", { dangerouslySetInnerHTML: Je(n) }),
        o && /* @__PURE__ */ m.jsxs(
          "a",
          {
            href: o,
            className: "read-more",
            onClick: () => {
              It({
                ...kt,
                section: a,
                text: "read more"
              });
            },
            children: [
              "Read more ",
              /* @__PURE__ */ m.jsx("span", { className: "visually-hidden", children: a }),
              /* @__PURE__ */ m.jsx(
                "span",
                {
                  className: "fas icon-small fa-arrow-right",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
qt.propTypes = {
  imageSize: c.oneOf(["small", "large"]),
  body: c.string.isRequired,
  heading: c.string.isRequired,
  readMoreLink: c.string
};
const $r = ({
  imageSize: t = "large",
  image: n,
  imageAlt: a,
  heading: o,
  body: u,
  readMoreLink: l = "",
  citation: f
}) => /* @__PURE__ */ m.jsxs(
  "div",
  {
    className: Ee("card-ranking", {
      "large-image": t === "large",
      "small-image": t === "small"
    }),
    children: [
      /* @__PURE__ */ m.jsx(Gt, { size: t, image: n, imageAlt: a }),
      $(t) && /* @__PURE__ */ m.jsx(Bt, { heading: o, citation: f }),
      /* @__PURE__ */ m.jsx(
        qt,
        {
          imageSize: t,
          body: u,
          heading: o,
          readMoreLink: l
        }
      )
    ]
  }
);
$r.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: c.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: c.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: c.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: c.string.isRequired,
  /**
   * Ranking card body content
   */
  body: c.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: c.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: c.string
};
export {
  $r as RankingCard
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
