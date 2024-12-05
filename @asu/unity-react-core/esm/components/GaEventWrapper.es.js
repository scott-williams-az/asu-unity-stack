import Tt, { useId as qt } from "react";
function P(t) {
  "@babel/helpers - typeof";
  return P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, P(t);
}
function ze(t, a) {
  return ze = Object.setPrototypeOf || function(o, u) {
    return o.__proto__ = u, o;
  }, ze(t, a);
}
function Vt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ue(t, a, s) {
  return Vt() ? ue = Reflect.construct : ue = function(u, p, E) {
    var S = [null];
    S.push.apply(S, p);
    var L = Function.bind.apply(u, S), k = new L();
    return E && ze(k, E.prototype), k;
  }, ue.apply(null, arguments);
}
function N(t) {
  return Xt(t) || Kt(t) || Zt(t) || Jt();
}
function Xt(t) {
  if (Array.isArray(t)) return Ge(t);
}
function Kt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Zt(t, a) {
  if (t) {
    if (typeof t == "string") return Ge(t, a);
    var s = Object.prototype.toString.call(t).slice(8, -1);
    if (s === "Object" && t.constructor && (s = t.constructor.name), s === "Map" || s === "Set") return Array.from(t);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return Ge(t, a);
  }
}
function Ge(t, a) {
  (a == null || a > t.length) && (a = t.length);
  for (var s = 0, o = new Array(a); s < a; s++) o[s] = t[s];
  return o;
}
function Jt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Qt = Object.hasOwnProperty, vt = Object.setPrototypeOf, er = Object.isFrozen, tr = Object.getPrototypeOf, rr = Object.getOwnPropertyDescriptor, y = Object.freeze, R = Object.seal, ar = Object.create, Rt = typeof Reflect < "u" && Reflect, fe = Rt.apply, Be = Rt.construct;
fe || (fe = function(a, s, o) {
  return a.apply(s, o);
});
y || (y = function(a) {
  return a;
});
R || (R = function(a) {
  return a;
});
Be || (Be = function(a, s) {
  return ue(a, N(s));
});
var nr = O(Array.prototype.forEach), ht = O(Array.prototype.pop), K = O(Array.prototype.push), ce = O(String.prototype.toLowerCase), Ie = O(String.prototype.toString), _t = O(String.prototype.match), w = O(String.prototype.replace), or = O(String.prototype.indexOf), ir = O(String.prototype.trim), _ = O(RegExp.prototype.test), xe = sr(TypeError);
function O(t) {
  return function(a) {
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
      o[u - 1] = arguments[u];
    return fe(t, a, o);
  };
}
function sr(t) {
  return function() {
    for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
      s[o] = arguments[o];
    return Be(t, s);
  };
}
function l(t, a, s) {
  var o;
  s = (o = s) !== null && o !== void 0 ? o : ce, vt && vt(t, null);
  for (var u = a.length; u--; ) {
    var p = a[u];
    if (typeof p == "string") {
      var E = s(p);
      E !== p && (er(a) || (a[u] = E), p = E);
    }
    t[p] = !0;
  }
  return t;
}
function W(t) {
  var a = ar(null), s;
  for (s in t)
    fe(Qt, t, [s]) === !0 && (a[s] = t[s]);
  return a;
}
function se(t, a) {
  for (; t !== null; ) {
    var s = rr(t, a);
    if (s) {
      if (s.get)
        return O(s.get);
      if (typeof s.value == "function")
        return O(s.value);
    }
    t = tr(t);
  }
  function o(u) {
    return console.warn("fallback value for", u), null;
  }
  return o;
}
var Et = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ke = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pe = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lr = y(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Fe = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), ur = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), At = y(["#text"]), yt = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Ue = y(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gt = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), le = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cr = R(/\{\{[\w\W]*|[\w\W]*\}\}/gm), fr = R(/<%[\w\W]*|[\w\W]*%>/gm), pr = R(/\${[\w\W]*}/gm), mr = R(/^data-[\-\w.\u00B7-\uFFFF]/), dr = R(/^aria-[\-\w]+$/), Tr = R(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), vr = R(/^(?:\w+script|data):/i), hr = R(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _r = R(/^html$/i), Er = R(/^[a-z][.\w]*(-[.\w]+)+$/i), Ar = function() {
  return typeof window > "u" ? null : window;
}, yr = function(a, s) {
  if (P(a) !== "object" || typeof a.createPolicy != "function")
    return null;
  var o = null, u = "data-tt-policy-suffix";
  s.currentScript && s.currentScript.hasAttribute(u) && (o = s.currentScript.getAttribute(u));
  var p = "dompurify" + (o ? "#" + o : "");
  try {
    return a.createPolicy(p, {
      createHTML: function(S) {
        return S;
      },
      createScriptURL: function(S) {
        return S;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
};
function Ot() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ar(), a = function(e) {
    return Ot(e);
  };
  if (a.version = "2.5.7", a.removed = [], !t || !t.document || t.document.nodeType !== 9)
    return a.isSupported = !1, a;
  var s = t.document, o = t.document, u = t.DocumentFragment, p = t.HTMLTemplateElement, E = t.Node, S = t.Element, L = t.NodeFilter, k = t.NamedNodeMap, $e = k === void 0 ? t.NamedNodeMap || t.MozNamedAttrMap : k, pe = t.HTMLFormElement, Z = t.DOMParser, J = t.trustedTypes, Q = S.prototype, Mt = se(Q, "cloneNode"), wt = se(Q, "nextSibling"), Nt = se(Q, "childNodes"), me = se(Q, "parentNode");
  if (typeof p == "function") {
    var de = o.createElement("template");
    de.content && de.content.ownerDocument && (o = de.content.ownerDocument);
  }
  var M = yr(J, s), Te = M ? M.createHTML("") : "", ee = o, ve = ee.implementation, Ct = ee.createNodeIterator, Dt = ee.createDocumentFragment, It = ee.getElementsByTagName, xt = s.importNode, je = {};
  try {
    je = W(o).documentMode ? o.documentMode : {};
  } catch {
  }
  var C = {};
  a.isSupported = typeof me == "function" && ve && ve.createHTMLDocument !== void 0 && je !== 9;
  var he = cr, _e = fr, Ee = pr, kt = mr, Pt = dr, Ft = vr, Ye = hr, Ut = Er, Ae = Tr, d = null, qe = l({}, [].concat(N(Et), N(ke), N(Pe), N(Fe), N(At))), T = null, Ve = l({}, [].concat(N(yt), N(Ue), N(gt), N(le))), f = Object.seal(Object.create(null, {
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
  })), q = null, ye = null, Xe = !0, ge = !0, Ke = !1, Ze = !0, z = !1, Se = !0, F = !1, be = !1, Re = !1, G = !1, te = !1, re = !1, Je = !0, Qe = !1, Ht = "user-content-", Oe = !0, V = !1, B = {}, $ = null, et = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), tt = null, rt = l({}, ["audio", "video", "img", "source", "image", "track"]), Le = null, at = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ae = "http://www.w3.org/1998/Math/MathML", ne = "http://www.w3.org/2000/svg", D = "http://www.w3.org/1999/xhtml", j = D, Me = !1, we = null, Wt = l({}, [ae, ne, D], Ie), U, zt = ["application/xhtml+xml", "text/html"], Gt = "text/html", v, Y = null, Bt = o.createElement("form"), nt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ne = function(e) {
    Y && Y === e || ((!e || P(e) !== "object") && (e = {}), e = W(e), U = // eslint-disable-next-line unicorn/prefer-includes
    zt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? U = Gt : U = e.PARSER_MEDIA_TYPE, v = U === "application/xhtml+xml" ? Ie : ce, d = "ALLOWED_TAGS" in e ? l({}, e.ALLOWED_TAGS, v) : qe, T = "ALLOWED_ATTR" in e ? l({}, e.ALLOWED_ATTR, v) : Ve, we = "ALLOWED_NAMESPACES" in e ? l({}, e.ALLOWED_NAMESPACES, Ie) : Wt, Le = "ADD_URI_SAFE_ATTR" in e ? l(
      W(at),
      // eslint-disable-line indent
      e.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      v
      // eslint-disable-line indent
    ) : at, tt = "ADD_DATA_URI_TAGS" in e ? l(
      W(rt),
      // eslint-disable-line indent
      e.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      v
      // eslint-disable-line indent
    ) : rt, $ = "FORBID_CONTENTS" in e ? l({}, e.FORBID_CONTENTS, v) : et, q = "FORBID_TAGS" in e ? l({}, e.FORBID_TAGS, v) : {}, ye = "FORBID_ATTR" in e ? l({}, e.FORBID_ATTR, v) : {}, B = "USE_PROFILES" in e ? e.USE_PROFILES : !1, Xe = e.ALLOW_ARIA_ATTR !== !1, ge = e.ALLOW_DATA_ATTR !== !1, Ke = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ze = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = e.SAFE_FOR_TEMPLATES || !1, Se = e.SAFE_FOR_XML !== !1, F = e.WHOLE_DOCUMENT || !1, G = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, re = e.RETURN_TRUSTED_TYPE || !1, Re = e.FORCE_BODY || !1, Je = e.SANITIZE_DOM !== !1, Qe = e.SANITIZE_NAMED_PROPS || !1, Oe = e.KEEP_CONTENT !== !1, V = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, j = e.NAMESPACE || D, f = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && nt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && nt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (ge = !1), te && (G = !0), B && (d = l({}, N(At)), T = [], B.html === !0 && (l(d, Et), l(T, yt)), B.svg === !0 && (l(d, ke), l(T, Ue), l(T, le)), B.svgFilters === !0 && (l(d, Pe), l(T, Ue), l(T, le)), B.mathMl === !0 && (l(d, Fe), l(T, gt), l(T, le))), e.ADD_TAGS && (d === qe && (d = W(d)), l(d, e.ADD_TAGS, v)), e.ADD_ATTR && (T === Ve && (T = W(T)), l(T, e.ADD_ATTR, v)), e.ADD_URI_SAFE_ATTR && l(Le, e.ADD_URI_SAFE_ATTR, v), e.FORBID_CONTENTS && ($ === et && ($ = W($)), l($, e.FORBID_CONTENTS, v)), Oe && (d["#text"] = !0), F && l(d, ["html", "head", "body"]), d.table && (l(d, ["tbody"]), delete q.tbody), y && y(e), Y = e);
  }, ot = l({}, ["mi", "mo", "mn", "ms", "mtext"]), it = l({}, ["annotation-xml"]), $t = l({}, ["title", "style", "font", "a", "script"]), oe = l({}, ke);
  l(oe, Pe), l(oe, lr);
  var Ce = l({}, Fe);
  l(Ce, ur);
  var jt = function(e) {
    var r = me(e);
    (!r || !r.tagName) && (r = {
      namespaceURI: j,
      tagName: "template"
    });
    var n = ce(e.tagName), c = ce(r.tagName);
    return we[e.namespaceURI] ? e.namespaceURI === ne ? r.namespaceURI === D ? n === "svg" : r.namespaceURI === ae ? n === "svg" && (c === "annotation-xml" || ot[c]) : !!oe[n] : e.namespaceURI === ae ? r.namespaceURI === D ? n === "math" : r.namespaceURI === ne ? n === "math" && it[c] : !!Ce[n] : e.namespaceURI === D ? r.namespaceURI === ne && !it[c] || r.namespaceURI === ae && !ot[c] ? !1 : !Ce[n] && ($t[n] || !oe[n]) : !!(U === "application/xhtml+xml" && we[e.namespaceURI]) : !1;
  }, b = function(e) {
    K(a.removed, {
      element: e
    });
    try {
      e.parentNode.removeChild(e);
    } catch {
      try {
        e.outerHTML = Te;
      } catch {
        e.remove();
      }
    }
  }, ie = function(e, r) {
    try {
      K(a.removed, {
        attribute: r.getAttributeNode(e),
        from: r
      });
    } catch {
      K(a.removed, {
        attribute: null,
        from: r
      });
    }
    if (r.removeAttribute(e), e === "is" && !T[e])
      if (G || te)
        try {
          b(r);
        } catch {
        }
      else
        try {
          r.setAttribute(e, "");
        } catch {
        }
  }, st = function(e) {
    var r, n;
    if (Re)
      e = "<remove></remove>" + e;
    else {
      var c = _t(e, /^[\r\n\t ]+/);
      n = c && c[0];
    }
    U === "application/xhtml+xml" && j === D && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    var g = M ? M.createHTML(e) : e;
    if (j === D)
      try {
        r = new Z().parseFromString(g, U);
      } catch {
      }
    if (!r || !r.documentElement) {
      r = ve.createDocument(j, "template", null);
      try {
        r.documentElement.innerHTML = Me ? Te : g;
      } catch {
      }
    }
    var A = r.body || r.documentElement;
    return e && n && A.insertBefore(o.createTextNode(n), A.childNodes[0] || null), j === D ? It.call(r, F ? "html" : "body")[0] : F ? r.documentElement : A;
  }, lt = function(e) {
    return Ct.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      L.SHOW_ELEMENT | L.SHOW_COMMENT | L.SHOW_TEXT | L.SHOW_PROCESSING_INSTRUCTION | L.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, ut = function(e) {
    return e instanceof pe && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof $e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, X = function(e) {
    return P(E) === "object" ? e instanceof E : e && P(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
  }, I = function(e, r, n) {
    C[e] && nr(C[e], function(c) {
      c.call(a, r, n, Y);
    });
  }, ct = function(e) {
    var r;
    if (I("beforeSanitizeElements", e, null), ut(e) || _(/[\u0080-\uFFFF]/, e.nodeName))
      return b(e), !0;
    var n = v(e.nodeName);
    if (I("uponSanitizeElement", e, {
      tagName: n,
      allowedTags: d
    }), e.hasChildNodes() && !X(e.firstElementChild) && (!X(e.content) || !X(e.content.firstElementChild)) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent) || n === "select" && _(/<template/i, e.innerHTML) || e.nodeType === 7 || Se && e.nodeType === 8 && _(/<[/\w]/g, e.data))
      return b(e), !0;
    if (!d[n] || q[n]) {
      if (!q[n] && pt(n) && (f.tagNameCheck instanceof RegExp && _(f.tagNameCheck, n) || f.tagNameCheck instanceof Function && f.tagNameCheck(n)))
        return !1;
      if (Oe && !$[n]) {
        var c = me(e) || e.parentNode, g = Nt(e) || e.childNodes;
        if (g && c)
          for (var A = g.length, h = A - 1; h >= 0; --h) {
            var H = Mt(g[h], !0);
            H.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(H, wt(e));
          }
      }
      return b(e), !0;
    }
    return e instanceof S && !jt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && _(/<\/no(script|embed|frames)/i, e.innerHTML) ? (b(e), !0) : (z && e.nodeType === 3 && (r = e.textContent, r = w(r, he, " "), r = w(r, _e, " "), r = w(r, Ee, " "), e.textContent !== r && (K(a.removed, {
      element: e.cloneNode()
    }), e.textContent = r)), I("afterSanitizeElements", e, null), !1);
  }, ft = function(e, r, n) {
    if (Je && (r === "id" || r === "name") && (n in o || n in Bt))
      return !1;
    if (!(ge && !ye[r] && _(kt, r))) {
      if (!(Xe && _(Pt, r))) {
        if (!T[r] || ye[r]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pt(e) && (f.tagNameCheck instanceof RegExp && _(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && _(f.attributeNameCheck, r) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(r)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            r === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && _(f.tagNameCheck, n) || f.tagNameCheck instanceof Function && f.tagNameCheck(n)))
          ) return !1;
        } else if (!Le[r]) {
          if (!_(Ae, w(n, Ye, ""))) {
            if (!((r === "src" || r === "xlink:href" || r === "href") && e !== "script" && or(n, "data:") === 0 && tt[e])) {
              if (!(Ke && !_(Ft, w(n, Ye, "")))) {
                if (n)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pt = function(e) {
    return e !== "annotation-xml" && _t(e, Ut);
  }, mt = function(e) {
    var r, n, c, g;
    I("beforeSanitizeAttributes", e, null);
    var A = e.attributes;
    if (A) {
      var h = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: T
      };
      for (g = A.length; g--; ) {
        r = A[g];
        var H = r, m = H.name, De = H.namespaceURI;
        if (n = m === "value" ? r.value : ir(r.value), c = v(m), h.attrName = c, h.attrValue = n, h.keepAttr = !0, h.forceKeepAttr = void 0, I("uponSanitizeAttribute", e, h), n = h.attrValue, !h.forceKeepAttr && (ie(m, e), !!h.keepAttr)) {
          if (!Ze && _(/\/>/i, n)) {
            ie(m, e);
            continue;
          }
          z && (n = w(n, he, " "), n = w(n, _e, " "), n = w(n, Ee, " "));
          var dt = v(e.nodeName);
          if (ft(dt, c, n)) {
            if (Qe && (c === "id" || c === "name") && (ie(m, e), n = Ht + n), Se && _(/((--!?|])>)|<\/(style|title)/i, n)) {
              ie(m, e);
              continue;
            }
            if (M && P(J) === "object" && typeof J.getAttributeType == "function" && !De)
              switch (J.getAttributeType(dt, c)) {
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
              De ? e.setAttributeNS(De, m, n) : e.setAttribute(m, n), ut(e) ? b(e) : ht(a.removed);
            } catch {
            }
          }
        }
      }
      I("afterSanitizeAttributes", e, null);
    }
  }, Yt = function i(e) {
    var r, n = lt(e);
    for (I("beforeSanitizeShadowDOM", e, null); r = n.nextNode(); )
      I("uponSanitizeShadowNode", r, null), !ct(r) && (r.content instanceof u && i(r.content), mt(r));
    I("afterSanitizeShadowDOM", e, null);
  };
  return a.sanitize = function(i) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, n, c, g, A;
    if (Me = !i, Me && (i = "<!-->"), typeof i != "string" && !X(i))
      if (typeof i.toString == "function") {
        if (i = i.toString(), typeof i != "string")
          throw xe("dirty is not a string, aborting");
      } else
        throw xe("toString is not a function");
    if (!a.isSupported) {
      if (P(t.toStaticHTML) === "object" || typeof t.toStaticHTML == "function") {
        if (typeof i == "string")
          return t.toStaticHTML(i);
        if (X(i))
          return t.toStaticHTML(i.outerHTML);
      }
      return i;
    }
    if (be || Ne(e), a.removed = [], typeof i == "string" && (V = !1), V) {
      if (i.nodeName) {
        var h = v(i.nodeName);
        if (!d[h] || q[h])
          throw xe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (i instanceof E)
      r = st("<!---->"), n = r.ownerDocument.importNode(i, !0), n.nodeType === 1 && n.nodeName === "BODY" || n.nodeName === "HTML" ? r = n : r.appendChild(n);
    else {
      if (!G && !z && !F && // eslint-disable-next-line unicorn/prefer-includes
      i.indexOf("<") === -1)
        return M && re ? M.createHTML(i) : i;
      if (r = st(i), !r)
        return G ? null : re ? Te : "";
    }
    r && Re && b(r.firstChild);
    for (var H = lt(V ? i : r); c = H.nextNode(); )
      c.nodeType === 3 && c === g || ct(c) || (c.content instanceof u && Yt(c.content), mt(c), g = c);
    if (g = null, V)
      return i;
    if (G) {
      if (te)
        for (A = Dt.call(r.ownerDocument); r.firstChild; )
          A.appendChild(r.firstChild);
      else
        A = r;
      return (T.shadowroot || T.shadowrootmod) && (A = xt.call(s, A, !0)), A;
    }
    var m = F ? r.outerHTML : r.innerHTML;
    return F && d["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && _(_r, r.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + r.ownerDocument.doctype.name + `>
` + m), z && (m = w(m, he, " "), m = w(m, _e, " "), m = w(m, Ee, " ")), M && re ? M.createHTML(m) : m;
  }, a.setConfig = function(i) {
    Ne(i), be = !0;
  }, a.clearConfig = function() {
    Y = null, be = !1;
  }, a.isValidAttribute = function(i, e, r) {
    Y || Ne({});
    var n = v(i), c = v(e);
    return ft(n, c, r);
  }, a.addHook = function(i, e) {
    typeof e == "function" && (C[i] = C[i] || [], K(C[i], e));
  }, a.removeHook = function(i) {
    if (C[i])
      return ht(C[i]);
  }, a.removeHooks = function(i) {
    C[i] && (C[i] = []);
  }, a.removeAllHooks = function() {
    C = {};
  }, a;
}
Ot();
function gr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Lt = { exports: {} }, He, St;
function Sr() {
  if (St) return He;
  St = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return He = t, He;
}
var We, bt;
function br() {
  if (bt) return We;
  bt = 1;
  var t = Sr();
  function a() {
  }
  function s() {
  }
  return s.resetWarningCache = a, We = function() {
    function o(E, S, L, k, $e, pe) {
      if (pe !== t) {
        var Z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Z.name = "Invariant Violation", Z;
      }
    }
    o.isRequired = o;
    function u() {
      return o;
    }
    var p = {
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
      checkPropTypes: s,
      resetWarningCache: a
    };
    return p.PropTypes = p, p;
  }, We;
}
Lt.exports = br()();
var Rr = Lt.exports;
const x = /* @__PURE__ */ gr(Rr);
x.shape({
  event: x.string,
  action: x.string,
  name: x.string,
  region: x.string,
  section: x.string,
  component: x.string,
  type: x.string,
  text: x.string
});
const Or = ({
  event: t = "",
  action: a = "",
  name: s = "",
  type: o = "",
  section: u = "",
  text: p = "",
  region: E = "",
  component: S = ""
}) => {
  const { dataLayer: L } = window, k = {
    event: t.toLowerCase(),
    action: a.toLowerCase(),
    name: s.toLowerCase(),
    type: o.toLowerCase(),
    region: E.toLowerCase(),
    section: u.toLowerCase(),
    text: p.toLowerCase(),
    component: S.toLowerCase()
  };
  L && L.push(k);
}, Lr = "staticMarkup";
function Mr() {
  const a = qt().indexOf(Lr) > -1 ? !0 : void 0;
  return {
    isBootstrap: a,
    isReact: a ? void 0 : !0
  };
}
const Cr = ({ gaData: t, children: a }) => {
  const { isReact: s } = Mr(), { onClick: o, ...u } = a.props;
  return s ? Tt.cloneElement(a, {
    ...u,
    onClick: (p) => (Or(t), o ? o(p) : !0)
  }) : Tt.cloneElement(a, {
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
};
export {
  Cr as GaEventWrapper
};
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
