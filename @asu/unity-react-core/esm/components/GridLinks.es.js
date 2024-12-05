import je, { useId as Zt } from "react";
function Jt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} }, te = {};
var ht;
function Qt() {
  if (ht) return te;
  ht = 1;
  var t = je, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(_, p, N) {
    var b, F = {}, U = null, W = null;
    N !== void 0 && (U = "" + N), p.key !== void 0 && (U = "" + p.key), p.ref !== void 0 && (W = p.ref);
    for (b in p) o.call(p, b) && !f.hasOwnProperty(b) && (F[b] = p[b]);
    if (_ && _.defaultProps) for (b in p = _.defaultProps, p) F[b] === void 0 && (F[b] = p[b]);
    return { $$typeof: n, type: _, key: U, ref: W, props: F, _owner: l.current };
  }
  return te.Fragment = i, te.jsx = d, te.jsxs = d, te;
}
wt.exports = Qt();
var j = wt.exports;
function H(t) {
  "@babel/helpers - typeof";
  return H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, H(t);
}
function $e(t, n) {
  return $e = Object.setPrototypeOf || function(o, l) {
    return o.__proto__ = l, o;
  }, $e(t, n);
}
function er() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function me(t, n, i) {
  return er() ? me = Reflect.construct : me = function(l, f, d) {
    var _ = [null];
    _.push.apply(_, f);
    var p = Function.bind.apply(l, _), N = new p();
    return d && $e(N, d.prototype), N;
  }, me.apply(null, arguments);
}
function D(t) {
  return tr(t) || rr(t) || nr(t) || ar();
}
function tr(t) {
  if (Array.isArray(t)) return qe(t);
}
function rr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function nr(t, n) {
  if (t) {
    if (typeof t == "string") return qe(t, n);
    var i = Object.prototype.toString.call(t).slice(8, -1);
    if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
    if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return qe(t, n);
  }
}
function qe(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var i = 0, o = new Array(n); i < n; i++) o[i] = t[i];
  return o;
}
function ar() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var or = Object.hasOwnProperty, Et = Object.setPrototypeOf, ir = Object.isFrozen, sr = Object.getPrototypeOf, lr = Object.getOwnPropertyDescriptor, S = Object.freeze, L = Object.seal, ur = Object.create, Nt = typeof Reflect < "u" && Reflect, ve = Nt.apply, Ye = Nt.construct;
ve || (ve = function(n, i, o) {
  return n.apply(i, o);
});
S || (S = function(n) {
  return n;
});
L || (L = function(n) {
  return n;
});
Ye || (Ye = function(n, i) {
  return me(n, D(i));
});
var cr = w(Array.prototype.forEach), yt = w(Array.prototype.pop), re = w(Array.prototype.push), de = w(String.prototype.toLowerCase), Pe = w(String.prototype.toString), At = w(String.prototype.match), M = w(String.prototype.replace), fr = w(String.prototype.indexOf), pr = w(String.prototype.trim), A = w(RegExp.prototype.test), Fe = mr(TypeError);
function w(t) {
  return function(n) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
      o[l - 1] = arguments[l];
    return ve(t, n, o);
  };
}
function mr(t) {
  return function() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return Ye(t, i);
  };
}
function u(t, n, i) {
  var o;
  i = (o = i) !== null && o !== void 0 ? o : de, Et && Et(t, null);
  for (var l = n.length; l--; ) {
    var f = n[l];
    if (typeof f == "string") {
      var d = i(f);
      d !== f && (ir(n) || (n[l] = d), f = d);
    }
    t[f] = !0;
  }
  return t;
}
function $(t) {
  var n = ur(null), i;
  for (i in t)
    ve(or, t, [i]) === !0 && (n[i] = t[i]);
  return n;
}
function fe(t, n) {
  for (; t !== null; ) {
    var i = lr(t, n);
    if (i) {
      if (i.get)
        return w(i.get);
      if (typeof i.value == "function")
        return w(i.value);
    }
    t = sr(t);
  }
  function o(l) {
    return console.warn("fallback value for", l), null;
  }
  return o;
}
var gt = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ue = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), He = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), dr = S(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), We = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), vr = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), St = S(["#text"]), Rt = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), ze = S(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), bt = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), _r = L(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Tr = L(/<%[\w\W]*|[\w\W]*%>/gm), hr = L(/\${[\w\W]*}/gm), Er = L(/^data-[\-\w.\u00B7-\uFFFF]/), yr = L(/^aria-[\-\w]+$/), Ar = L(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gr = L(/^(?:\w+script|data):/i), Sr = L(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Rr = L(/^html$/i), br = L(/^[a-z][.\w]*(-[.\w]+)+$/i), Or = function() {
  return typeof window > "u" ? null : window;
}, Lr = function(n, i) {
  if (H(n) !== "object" || typeof n.createPolicy != "function")
    return null;
  var o = null, l = "data-tt-policy-suffix";
  i.currentScript && i.currentScript.hasAttribute(l) && (o = i.currentScript.getAttribute(l));
  var f = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(f, {
      createHTML: function(_) {
        return _;
      },
      createScriptURL: function(_) {
        return _;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + f + " could not be created."), null;
  }
};
function Ct() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Or(), n = function(e) {
    return Ct(e);
  };
  if (n.version = "2.5.7", n.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return n.isSupported = !1, n;
  var i = t.document, o = t.document, l = t.DocumentFragment, f = t.HTMLTemplateElement, d = t.Node, _ = t.Element, p = t.NodeFilter, N = t.NamedNodeMap, b = N === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : N, F = t.HTMLFormElement, U = t.DOMParser, W = t.trustedTypes, ne = _.prototype, Dt = fe(ne, "cloneNode"), It = fe(ne, "nextSibling"), xt = fe(ne, "childNodes"), _e = fe(ne, "parentNode");
  if (typeof f == "function") {
    var Te = o.createElement("template");
    Te.content && Te.content.ownerDocument && (o = Te.content.ownerDocument);
  }
  var C = Lr(W, i), he = C ? C.createHTML("") : "", ae = o, Ee = ae.implementation, kt = ae.createNodeIterator, Pt = ae.createDocumentFragment, Ft = ae.getElementsByTagName, Ut = i.importNode, Ve = {};
  try {
    Ve = $(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var I = {};
  n.isSupported = typeof _e == "function" && Ee && Ee.createHTMLDocument !== void 0 && Ve !== 9;
  var ye = _r, Ae = Tr, ge = hr, Ht = Er, Wt = yr, zt = gr, Xe = Sr, Gt = br, Se = Ar, T = null, Ke = u({}, [].concat(D(gt), D(Ue), D(He), D(We), D(St))), h = null, Ze = u({}, [].concat(D(Rt), D(ze), D(bt), D(pe))), m = Object.seal(Object.create(null, {
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
  })), J = null, Re = null, Je = !0, be = !0, Qe = !1, et = !0, q = !1, Oe = !0, z = !1, Le = !1, we = !1, Y = !1, oe = !1, ie = !1, tt = !0, rt = !1, Bt = "user-content-", Ne = !0, Q = !1, V = {}, X = null, nt = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), at = null, ot = u({}, ["audio", "video", "img", "source", "image", "track"]), Ce = null, it = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), se = "http://www.w3.org/1998/Math/MathML", le = "http://www.w3.org/2000/svg", x = "http://www.w3.org/1999/xhtml", K = x, Me = !1, De = null, jt = u({}, [se, le, x], Pe), G, $t = ["application/xhtml+xml", "text/html"], qt = "text/html", E, Z = null, Yt = o.createElement("form"), st = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ie = function(e) {
    Z && Z === e || ((!e || H(e) !== "object") && (e = {}), e = $(e), G = // eslint-disable-next-line unicorn/prefer-includes
    $t.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? G = qt : G = e.PARSER_MEDIA_TYPE, E = G === "application/xhtml+xml" ? Pe : de, T = "ALLOWED_TAGS" in e ? u({}, e.ALLOWED_TAGS, E) : Ke, h = "ALLOWED_ATTR" in e ? u({}, e.ALLOWED_ATTR, E) : Ze, De = "ALLOWED_NAMESPACES" in e ? u({}, e.ALLOWED_NAMESPACES, Pe) : jt, Ce = "ADD_URI_SAFE_ATTR" in e ? u(
      $(it),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : it, at = "ADD_DATA_URI_TAGS" in e ? u(
      $(ot),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      E
      // eslint-disable-line indent
    ) : ot, X = "FORBID_CONTENTS" in e ? u({}, e.FORBID_CONTENTS, E) : nt, J = "FORBID_TAGS" in e ? u({}, e.FORBID_TAGS, E) : {}, Re = "FORBID_ATTR" in e ? u({}, e.FORBID_ATTR, E) : {}, V = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Je = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, Qe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = e.SAFE_FOR_TEMPLATES || !1, Oe = e.SAFE_FOR_XML !== !1, z = e.WHOLE_DOCUMENT || !1, Y = e.RETURN_DOM || !1, oe = e.RETURN_DOM_FRAGMENT || !1, ie = e.RETURN_TRUSTED_TYPE || !1, we = e.FORCE_BODY || !1, tt = e.SANITIZE_DOM !== !1, rt = e.SANITIZE_NAMED_PROPS || !1, Ne = e.KEEP_CONTENT !== !1, Q = e.IN_PLACE || !1, Se = e.ALLOWED_URI_REGEXP || Se, K = e.NAMESPACE || x, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && st(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), q && (be = !1), oe && (Y = !0), V && (T = u({}, D(St)), h = [], V.html === !0 && (u(T, gt), u(h, Rt)), V.svg === !0 && (u(T, Ue), u(h, ze), u(h, pe)), V.svgFilters === !0 && (u(T, He), u(h, ze), u(h, pe)), V.mathMl === !0 && (u(T, We), u(h, bt), u(h, pe))), e.ADD_TAGS && (T === Ke && (T = $(T)), u(T, e.ADD_TAGS, E)), e.ADD_ATTR && (h === Ze && (h = $(h)), u(h, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && u(Ce, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (X === nt && (X = $(X)), u(X, e.FORBID_CONTENTS, E)), Ne && (T["#text"] = !0), z && u(T, ["html", "head", "body"]), T.table && (u(T, ["tbody"]), delete J.tbody), S && S(e), Z = e);
  }, lt = u({}, ["mi", "mo", "mn", "ms", "mtext"]), ut = u({}, ["annotation-xml"]), Vt = u({}, ["title", "style", "font", "a", "script"]), ue = u({}, Ue);
  u(ue, He), u(ue, dr);
  var xe = u({}, We);
  u(xe, vr);
  var Xt = function(e) {
    var r = _e(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: K,
      tagName: "template"
    });
    var a = de(e.tagName), c = de(r.tagName);
    return De[e.namespaceURI] ? e.namespaceURI === le ? r.namespaceURI === x ? a === "svg" : r.namespaceURI === se ? a === "svg" && (c === "annotation-xml" || lt[c]) : !!ue[a] : e.namespaceURI === se ? r.namespaceURI === x ? a === "math" : r.namespaceURI === le ? a === "math" && ut[c] : !!xe[a] : e.namespaceURI === x ? r.namespaceURI === le && !ut[c] || r.namespaceURI === se && !lt[c] ? !1 : !xe[a] && (Vt[a] || !ue[a]) : !!(G === "application/xhtml+xml" && De[e.namespaceURI]) : !1;
  }, O = function(e) {
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
      if (Y || oe)
        try {
          O(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, ct = function(e) {
    var r, a;
    if (we)
      e = "<remove></remove>" + e;
    else {
      var c = At(e, /^[\r\n\t ]+/);
      a = c && c[0];
    }
    G === "application/xhtml+xml" && K === x && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var R = C ? C.createHTML(e) : e;
    if (K === x)
      try {
        r = new U().parseFromString(R, G);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = Ee.createDocument(K, "template", null);
      try {
        r.documentElement.innerHTML = Me ? he : R;
      } catch {
      }
    }
    var g = r.body || r.documentElement;
    return e && a && g.insertBefore(o.createTextNode(a), g.childNodes[0] || null), K === x ? Ft.call(r, z ? "html" : "body")[0] : z ? r.documentElement : g;
  }, ft = function(e) {
    return kt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, pt = function(e) {
    return e instanceof F && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof b) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ee = function(e) {
    return H(d) === "object" ? e instanceof d : e && H(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, k = function(e, r, a) {
    I[e] && cr(I[e], function(c) {
      c.call(n, r, a, Z);
    });
  }, mt = function(e) {
    var r;
    if (k("beforeSanitizeElements", e, null), pt(e) || A(/[\u0080-\uFFFF]/, e.nodeName))
      return O(e), !0;
    var a = E(e.nodeName);
    if (k("uponSanitizeElement", e, {
      tagName: a,
      allowedTags: T
    }), e.hasChildNodes() && !ee(e.firstElementChild) && (!ee(e.content) || !ee(e.content.firstElementChild)) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || a === "select" && A(/<template/i, e.innerHTML) || e.nodeType === 7 || Oe && e.nodeType === 8 && A(/<[/\w]/g, e.data))
      return O(e), !0;
    if (!T[a] || J[a]) {
      if (!J[a] && vt(a) && (m.tagNameCheck instanceof RegExp && A(m.tagNameCheck, a) || m.tagNameCheck instanceof Function && m.tagNameCheck(a)))
        return !1;
      if (Ne && !X[a]) {
        var c = _e(e) || e.parentNode, R = xt(e) || e.childNodes;
        if (R && c)
          for (var g = R.length, y = g - 1; y >= 0; --y) {
            var B = Dt(R[y], !0);
            B.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(B, It(e));
          }
      }
      return O(e), !0;
    }
    return e instanceof _ && !Xt(e) || (a === "noscript" || a === "noembed" || a === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (O(e), !0) : (q && e.nodeType === 3 && (r = e.textContent, r = M(r, ye, " "), r = M(r, Ae, " "), r = M(r, ge, " "), e.textContent !== r && (re(n.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), k("afterSanitizeElements", e, null), !1);
  }, dt = function(e, r, a) {
    if (tt && (r === "id" || r === "name") && (a in o || a in Yt))
      return !1;
    if (!(be && !Re[r] && A(Ht, r))) {
      if (!(Je && A(Wt, r))) {
        if (!h[r] || Re[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vt(e) && (m.tagNameCheck instanceof RegExp && A(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && A(m.attributeNameCheck, r) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && A(m.tagNameCheck, a) || m.tagNameCheck instanceof Function && m.tagNameCheck(a)))
          ) return !1;
        } else if (!Ce[r]) {
          if (!A(Se, M(a, Xe, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && fr(a, "data:") === 0 && at[e])) {
              if (!(Qe && !A(zt, M(a, Xe, "")))) {
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
    return e !== "annotation-xml" && At(e, Gt);
  }, _t = function(e) {
    var r, a, c, R;
    k("beforeSanitizeAttributes", e, null);
    var g = e.attributes;
    if (g) {
      var y = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: h
      };
      for (R = g.length; R--; ) {
        r = g[R];
        var B = r, v = B.name, ke = B.namespaceURI;
        if (a = v === "value" ? r.value : pr(r.value), c = E(v), y.attrName = c, y.attrValue = a, y.keepAttr = !0, y.forceKeepAttr = void 0, k("uponSanitizeAttribute", e, y), a = y.attrValue, !y.forceKeepAttr && (ce(v, e), !!y.keepAttr)) {
          if (!et && A(/\/>/i, a)) {
            ce(v, e);
            continue;
          }
          q && (a = M(a, ye, " "), a = M(a, Ae, " "), a = M(a, ge, " "));
          var Tt = E(e.nodeName);
          if (dt(Tt, c, a)) {
            if (rt && (c === "id" || c === "name") && (ce(v, e), a = Bt + a), Oe && A(/((--!?|])>)|<\/(style|title)/i, a)) {
              ce(v, e);
              continue;
            }
            if (C && H(W) === "object" && typeof W.getAttributeType == "function" && !ke)
              switch (W.getAttributeType(Tt, c)) {
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
              ke ? e.setAttributeNS(ke, v, a) : e.setAttribute(v, a), pt(e) ? O(e) : yt(n.removed);
            } catch {
            }
          }
        }
      }
      k("afterSanitizeAttributes", e, null);
    }
  }, Kt = function s(e) {
    var r, a = ft(e);
    for (k("beforeSanitizeShadowDOM", e, null); r = a.nextNode(); )
      k("uponSanitizeShadowNode", r, null), !mt(r) && (r.content instanceof l && s(r.content), _t(r));
    k("afterSanitizeShadowDOM", e, null);
  };
  return n.sanitize = function(s) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, a, c, R, g;
    if (Me = !s, Me && (s = "<!-->"), typeof s != "string" && !ee(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw Fe("dirty is not a string, aborting");
      } else
        throw Fe("toString is not a function");
    if (!n.isSupported) {
      if (H(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof s == "string")
          return t.toStaticHTML(s);
        if (ee(s))
          return t.toStaticHTML(s.outerHTML);
      }
      return s;
    }
    if (Le || Ie(e), n.removed = [], typeof s == "string" && (Q = !1), Q) {
      if (s.nodeName) {
        var y = E(s.nodeName);
        if (!T[y] || J[y])
          throw Fe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof d)
      r = ct("<!---->"), a = r.ownerDocument.importNode(s, !0), a.nodeType === 1 && a.nodeName === "BODY" || a.nodeName === "HTML" ? r = a : r.appendChild(a);
    else {
      if (!Y && !q && !z && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return C && ie ? C.createHTML(s) : s;
      if (r = ct(s), !r)
        return Y ? null : ie ? he : "";
    }
    r && we && O(r.firstChild);
    for (var B = ft(Q ? s : r); c = B.nextNode(); )
      c.nodeType === 3 && c === R || mt(c) || (c.content instanceof l && Kt(c.content), _t(c), R = c);
    if (R = null, Q)
      return s;
    if (Y) {
      if (oe)
        for (g = Pt.call(r.ownerDocument); r.firstChild; )
          g.appendChild(r.firstChild);
      else
        g = r;
      return (h.shadowroot || h.shadowrootmod) && (g = Ut.call(i, g, !0)), g;
    }
    var v = z ? r.outerHTML : r.innerHTML;
    return z && T["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && A(Rr, r.ownerDocument.doctype.name) && (v = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + v), q && (v = M(v, ye, " "), v = M(v, Ae, " "), v = M(v, ge, " ")), C && ie ? C.createHTML(v) : v;
  }, n.setConfig = function(s) {
    Ie(s), Le = !0;
  }, n.clearConfig = function() {
    Z = null, Le = !1;
  }, n.isValidAttribute = function(s, e, r) {
    Z || Ie({});
    var a = E(s), c = E(e);
    return dt(a, c, r);
  }, n.addHook = function(s, e) {
    typeof e == "function" && (I[s] = I[s] || [], re(I[s], e));
  }, n.removeHook = function(s) {
    if (I[s])
      return yt(I[s]);
  }, n.removeHooks = function(s) {
    I[s] && (I[s] = []);
  }, n.removeAllHooks = function() {
    I = {};
  }, n;
}
Ct();
var Mt = { exports: {} }, Ge, Ot;
function wr() {
  if (Ot) return Ge;
  Ot = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ge = t, Ge;
}
var Be, Lt;
function Nr() {
  if (Lt) return Be;
  Lt = 1;
  var t = wr();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, Be = function() {
    function o(d, _, p, N, b, F) {
      if (F !== t) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    o.isRequired = o;
    function l() {
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
      arrayOf: l,
      element: o,
      elementType: o,
      instanceOf: l,
      node: o,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return f.PropTypes = f, f;
  }, Be;
}
Mt.exports = Nr()();
var Cr = Mt.exports;
const P = /* @__PURE__ */ Jt(Cr);
P.shape({
  event: P.string,
  action: P.string,
  name: P.string,
  region: P.string,
  section: P.string,
  component: P.string,
  type: P.string,
  text: P.string
});
const Mr = ({
  event: t = "",
  action: n = "",
  name: i = "",
  type: o = "",
  section: l = "",
  text: f = "",
  region: d = "",
  component: _ = ""
}) => {
  const { dataLayer: p } = window, N = {
    event: t.toLowerCase(),
    action: n.toLowerCase(),
    name: i.toLowerCase(),
    type: o.toLowerCase(),
    region: d.toLowerCase(),
    section: l.toLowerCase(),
    text: f.toLowerCase(),
    component: _.toLowerCase()
  };
  p && p.push(N);
}, Dr = "staticMarkup";
function Ir() {
  const n = Zt().indexOf(Dr) > -1 ? !0 : void 0;
  return {
    isBootstrap: n,
    isReact: n ? void 0 : !0
  };
}
const xr = ({
  gaData: t,
  children: n
}) => {
  const { isReact: i } = Ir(), { onClick: o, ...l } = n.props;
  return i ? je.cloneElement(n, {
    ...l,
    onClick: (f) => (Mr(t), o ? o(f) : !0)
  }) : je.cloneElement(n, {
    ...l,
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
}, kr = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, Pr = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Hr = ({
  gridLinkItems: t,
  numColumns: n,
  textColor: i,
  children: o
}) => /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
  /* @__PURE__ */ j.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        n,
        kr[i]
      ].join(" "),
      children: t && t.map((l) => /* @__PURE__ */ j.jsx(
        xr,
        {
          gaData: {
            ...Pr,
            text: l.label,
            section: `grid links ${l.label}`
          },
          children: /* @__PURE__ */ j.jsxs("a", { href: l.href, children: [
            /* @__PURE__ */ j.jsx("span", { className: `fa fa-fw ${l.icon}` }),
            l.label
          ] })
        },
        l.label + l.href
      ))
    }
  ),
  /* @__PURE__ */ j.jsx("div", { children: o })
] });
export {
  Hr as GridLinks
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
