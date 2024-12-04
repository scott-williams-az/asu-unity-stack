import ce, { useState as ge, useEffect as _e, useRef as at, useContext as Br, createElement as ca, Component as ua, forwardRef as ui, createContext as da, useImperativeHandle as fa, useCallback as pa } from "react";
import ha from "react-dom";
function zr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = { exports: {} }, mt = {};
var wn;
function ma() {
  if (wn) return mt;
  wn = 1;
  var e = ce, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, d) {
    var f, h = {}, m = null, x = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (f in u) n.call(u, f) && !i.hasOwnProperty(f) && (h[f] = u[f]);
    if (c && c.defaultProps) for (f in u = c.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: t, type: c, key: m, ref: x, props: h, _owner: a.current };
  }
  return mt.Fragment = r, mt.jsx = s, mt.jsxs = s, mt;
}
di.exports = ma();
var l = di.exports, fi = { exports: {} }, pi = { exports: {} }, U = {};
var xn;
function ga() {
  if (xn) return U;
  xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function N(b) {
    if (typeof b == "object" && b !== null) {
      var H = b.$$typeof;
      switch (H) {
        case t:
          switch (b = b.type, b) {
            case u:
            case d:
            case n:
            case i:
            case a:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case f:
                case y:
                case x:
                case s:
                  return b;
                default:
                  return H;
              }
          }
        case r:
          return H;
      }
    }
  }
  function j(b) {
    return N(b) === d;
  }
  return U.AsyncMode = u, U.ConcurrentMode = d, U.ContextConsumer = c, U.ContextProvider = s, U.Element = t, U.ForwardRef = f, U.Fragment = n, U.Lazy = y, U.Memo = x, U.Portal = r, U.Profiler = i, U.StrictMode = a, U.Suspense = h, U.isAsyncMode = function(b) {
    return j(b) || N(b) === u;
  }, U.isConcurrentMode = j, U.isContextConsumer = function(b) {
    return N(b) === c;
  }, U.isContextProvider = function(b) {
    return N(b) === s;
  }, U.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, U.isForwardRef = function(b) {
    return N(b) === f;
  }, U.isFragment = function(b) {
    return N(b) === n;
  }, U.isLazy = function(b) {
    return N(b) === y;
  }, U.isMemo = function(b) {
    return N(b) === x;
  }, U.isPortal = function(b) {
    return N(b) === r;
  }, U.isProfiler = function(b) {
    return N(b) === i;
  }, U.isStrictMode = function(b) {
    return N(b) === a;
  }, U.isSuspense = function(b) {
    return N(b) === h;
  }, U.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === a || b === h || b === m || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === x || b.$$typeof === s || b.$$typeof === c || b.$$typeof === f || b.$$typeof === v || b.$$typeof === O || b.$$typeof === k || b.$$typeof === w);
  }, U.typeOf = N, U;
}
pi.exports = ga();
var Ut = pi.exports, sr, Sn;
function va() {
  if (Sn) return sr;
  Sn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sr = e, sr;
}
var lr, _n;
function ya() {
  if (_n) return lr;
  _n = 1;
  var e = va();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, lr = function() {
    function n(s, c, u, d, f, h) {
      if (h !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, lr;
}
fi.exports = ya()();
var ba = fi.exports;
const o = /* @__PURE__ */ zr(ba), wa = () => {
  const [e, t] = ge(), [r, n] = ge(!1), [a, i] = ge(!1), [s, c] = ge("");
  return _e(() => {
    if (!s) return;
    (() => {
      i(null), n(!0);
      try {
        fetch(s).then((d) => d.json()).then((d) => {
          t(d), n(!1);
        }).catch((d) => {
          i(d), n(!1);
        });
      } catch (d) {
        i(d);
      }
    })();
  }, [s]), [{ data: e, loading: r, error: a }, c];
};
function xa(e) {
  const [t, r] = ge(!1);
  return _e(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const a = () => {
      r(n.matches);
    };
    return n.addEventListener("change", a), () => n.removeEventListener("change", a);
  }, [t, e]), t;
}
const Tn = (e, t, r) => e ? t : r, Rt = (e) => (e || []).join(" ");
function Xe(e) {
  "@babel/helpers - typeof";
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xe(e);
}
function br(e, t) {
  return br = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, br(e, t);
}
function Sa() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Lt(e, t, r) {
  return Sa() ? Lt = Reflect.construct : Lt = function(a, i, s) {
    var c = [null];
    c.push.apply(c, i);
    var u = Function.bind.apply(a, c), d = new u();
    return s && br(d, s.prototype), d;
  }, Lt.apply(null, arguments);
}
function Le(e) {
  return _a(e) || Ta(e) || ka(e) || Oa();
}
function _a(e) {
  if (Array.isArray(e)) return wr(e);
}
function Ta(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ka(e, t) {
  if (e) {
    if (typeof e == "string") return wr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wr(e, t);
  }
}
function wr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Aa = Object.hasOwnProperty, kn = Object.setPrototypeOf, Na = Object.isFrozen, ja = Object.getPrototypeOf, Ca = Object.getOwnPropertyDescriptor, ve = Object.freeze, Ce = Object.seal, Ea = Object.create, hi = typeof Reflect < "u" && Reflect, Ht = hi.apply, xr = hi.construct;
Ht || (Ht = function(t, r, n) {
  return t.apply(r, n);
});
ve || (ve = function(t) {
  return t;
});
Ce || (Ce = function(t) {
  return t;
});
xr || (xr = function(t, r) {
  return Lt(t, Le(r));
});
var Ra = Ee(Array.prototype.forEach), On = Ee(Array.prototype.pop), gt = Ee(Array.prototype.push), It = Ee(String.prototype.toLowerCase), cr = Ee(String.prototype.toString), An = Ee(String.prototype.match), Re = Ee(String.prototype.replace), La = Ee(String.prototype.indexOf), Ia = Ee(String.prototype.trim), de = Ee(RegExp.prototype.test), ur = Pa(TypeError);
function Ee(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ht(e, t, n);
  };
}
function Pa(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return xr(e, r);
  };
}
function $(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : It, kn && kn(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var s = r(i);
      s !== i && (Na(t) || (t[a] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function rt(e) {
  var t = Ea(null), r;
  for (r in e)
    Ht(Aa, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function kt(e, t) {
  for (; e !== null; ) {
    var r = Ca(e, t);
    if (r) {
      if (r.get)
        return Ee(r.get);
      if (typeof r.value == "function")
        return Ee(r.value);
    }
    e = ja(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Nn = ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), dr = ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fr = ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ma = ve(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pr = ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Da = ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jn = ve(["#text"]), Cn = ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), hr = ve(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), En = ve(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ot = ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $a = Ce(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ha = Ce(/<%[\w\W]*|[\w\W]*%>/gm), Ba = Ce(/\${[\w\W]*}/gm), za = Ce(/^data-[\-\w.\u00B7-\uFFFF]/), Fa = Ce(/^aria-[\-\w]+$/), Wa = Ce(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), qa = Ce(/^(?:\w+script|data):/i), Va = Ce(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ua = Ce(/^html$/i), Ya = Ce(/^[a-z][.\w]*(-[.\w]+)+$/i), Xa = function() {
  return typeof window > "u" ? null : window;
}, Ga = function(t, r) {
  if (Xe(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML: function(c) {
        return c;
      },
      createScriptURL: function(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function mi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xa(), t = function(p) {
    return mi(p);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, s = e.Node, c = e.Element, u = e.NodeFilter, d = e.NamedNodeMap, f = d === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : d, h = e.HTMLFormElement, m = e.DOMParser, x = e.trustedTypes, y = c.prototype, w = kt(y, "cloneNode"), v = kt(y, "nextSibling"), O = kt(y, "childNodes"), k = kt(y, "parentNode");
  if (typeof i == "function") {
    var N = n.createElement("template");
    N.content && N.content.ownerDocument && (n = N.content.ownerDocument);
  }
  var j = Ga(x, r), b = j ? j.createHTML("") : "", H = n, I = H.implementation, q = H.createNodeIterator, ne = H.createDocumentFragment, ke = H.getElementsByTagName, ye = r.importNode, oe = {};
  try {
    oe = rt(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var J = {};
  t.isSupported = typeof k == "function" && I && I.createHTMLDocument !== void 0 && oe !== 9;
  var be = $a, se = Ha, Me = Ba, Oe = za, we = Fa, Qe = qa, De = Va, Je = Ya, E = Wa, T = null, C = $({}, [].concat(Le(Nn), Le(dr), Le(fr), Le(pr), Le(jn))), R = null, g = $({}, [].concat(Le(Cn), Le(hr), Le(En), Le(Ot))), P = Object.seal(Object.create(null, {
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
  })), _ = null, G = null, W = !0, z = !0, D = !1, ie = !0, te = !1, B = !0, Z = !1, F = !1, re = !1, Ae = !1, ee = !1, $e = !1, Ye = !0, xe = !1, M = "user-content-", K = !0, He = !1, Pe = {}, me = null, an = $({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), on = null, sn = $({}, ["audio", "video", "img", "source", "image", "track"]), tr = null, ln = $({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", St = "http://www.w3.org/2000/svg", Be = "http://www.w3.org/1999/xhtml", ot = Be, rr = !1, nr = null, ra = $({}, [xt, St, Be], cr), et, na = ["application/xhtml+xml", "text/html"], ia = "text/html", le, st = null, aa = n.createElement("form"), cn = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, ir = function(p) {
    st && st === p || ((!p || Xe(p) !== "object") && (p = {}), p = rt(p), et = // eslint-disable-next-line unicorn/prefer-includes
    na.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? et = ia : et = p.PARSER_MEDIA_TYPE, le = et === "application/xhtml+xml" ? cr : It, T = "ALLOWED_TAGS" in p ? $({}, p.ALLOWED_TAGS, le) : C, R = "ALLOWED_ATTR" in p ? $({}, p.ALLOWED_ATTR, le) : g, nr = "ALLOWED_NAMESPACES" in p ? $({}, p.ALLOWED_NAMESPACES, cr) : ra, tr = "ADD_URI_SAFE_ATTR" in p ? $(
      rt(ln),
      // eslint-disable-line indent
      p.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      le
      // eslint-disable-line indent
    ) : ln, on = "ADD_DATA_URI_TAGS" in p ? $(
      rt(sn),
      // eslint-disable-line indent
      p.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      le
      // eslint-disable-line indent
    ) : sn, me = "FORBID_CONTENTS" in p ? $({}, p.FORBID_CONTENTS, le) : an, _ = "FORBID_TAGS" in p ? $({}, p.FORBID_TAGS, le) : {}, G = "FORBID_ATTR" in p ? $({}, p.FORBID_ATTR, le) : {}, Pe = "USE_PROFILES" in p ? p.USE_PROFILES : !1, W = p.ALLOW_ARIA_ATTR !== !1, z = p.ALLOW_DATA_ATTR !== !1, D = p.ALLOW_UNKNOWN_PROTOCOLS || !1, ie = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = p.SAFE_FOR_TEMPLATES || !1, B = p.SAFE_FOR_XML !== !1, Z = p.WHOLE_DOCUMENT || !1, Ae = p.RETURN_DOM || !1, ee = p.RETURN_DOM_FRAGMENT || !1, $e = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, Ye = p.SANITIZE_DOM !== !1, xe = p.SANITIZE_NAMED_PROPS || !1, K = p.KEEP_CONTENT !== !1, He = p.IN_PLACE || !1, E = p.ALLOWED_URI_REGEXP || E, ot = p.NAMESPACE || Be, P = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && cn(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && cn(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (z = !1), ee && (Ae = !0), Pe && (T = $({}, Le(jn)), R = [], Pe.html === !0 && ($(T, Nn), $(R, Cn)), Pe.svg === !0 && ($(T, dr), $(R, hr), $(R, Ot)), Pe.svgFilters === !0 && ($(T, fr), $(R, hr), $(R, Ot)), Pe.mathMl === !0 && ($(T, pr), $(R, En), $(R, Ot))), p.ADD_TAGS && (T === C && (T = rt(T)), $(T, p.ADD_TAGS, le)), p.ADD_ATTR && (R === g && (R = rt(R)), $(R, p.ADD_ATTR, le)), p.ADD_URI_SAFE_ATTR && $(tr, p.ADD_URI_SAFE_ATTR, le), p.FORBID_CONTENTS && (me === an && (me = rt(me)), $(me, p.FORBID_CONTENTS, le)), K && (T["#text"] = !0), Z && $(T, ["html", "head", "body"]), T.table && ($(T, ["tbody"]), delete _.tbody), ve && ve(p), st = p);
  }, un = $({}, ["mi", "mo", "mn", "ms", "mtext"]), dn = $({}, ["annotation-xml"]), oa = $({}, ["title", "style", "font", "a", "script"]), _t = $({}, dr);
  $(_t, fr), $(_t, Ma);
  var ar = $({}, pr);
  $(ar, Da);
  var sa = function(p) {
    var S = k(p);
    (!S || !S.tagName) && (S = {
      namespaceURI: ot,
      tagName: "template"
    });
    var A = It(p.tagName), V = It(S.tagName);
    return nr[p.namespaceURI] ? p.namespaceURI === St ? S.namespaceURI === Be ? A === "svg" : S.namespaceURI === xt ? A === "svg" && (V === "annotation-xml" || un[V]) : !!_t[A] : p.namespaceURI === xt ? S.namespaceURI === Be ? A === "math" : S.namespaceURI === St ? A === "math" && dn[V] : !!ar[A] : p.namespaceURI === Be ? S.namespaceURI === St && !dn[V] || S.namespaceURI === xt && !un[V] ? !1 : !ar[A] && (oa[A] || !_t[A]) : !!(et === "application/xhtml+xml" && nr[p.namespaceURI]) : !1;
  }, Ne = function(p) {
    gt(t.removed, {
      element: p
    });
    try {
      p.parentNode.removeChild(p);
    } catch {
      try {
        p.outerHTML = b;
      } catch {
        p.remove();
      }
    }
  }, Tt = function(p, S) {
    try {
      gt(t.removed, {
        attribute: S.getAttributeNode(p),
        from: S
      });
    } catch {
      gt(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(p), p === "is" && !R[p])
      if (Ae || ee)
        try {
          Ne(S);
        } catch {
        }
      else
        try {
          S.setAttribute(p, "");
        } catch {
        }
  }, fn = function(p) {
    var S, A;
    if (re)
      p = "<remove></remove>" + p;
    else {
      var V = An(p, /^[\r\n\t ]+/);
      A = V && V[0];
    }
    et === "application/xhtml+xml" && ot === Be && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    var Se = j ? j.createHTML(p) : p;
    if (ot === Be)
      try {
        S = new m().parseFromString(Se, et);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = I.createDocument(ot, "template", null);
      try {
        S.documentElement.innerHTML = rr ? b : Se;
      } catch {
      }
    }
    var pe = S.body || S.documentElement;
    return p && A && pe.insertBefore(n.createTextNode(A), pe.childNodes[0] || null), ot === Be ? ke.call(S, Z ? "html" : "body")[0] : Z ? S.documentElement : pe;
  }, pn = function(p) {
    return q.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, hn = function(p) {
    return p instanceof h && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof f) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, ht = function(p) {
    return Xe(s) === "object" ? p instanceof s : p && Xe(p) === "object" && typeof p.nodeType == "number" && typeof p.nodeName == "string";
  }, ze = function(p, S, A) {
    J[p] && Ra(J[p], function(V) {
      V.call(t, S, A, st);
    });
  }, mn = function(p) {
    var S;
    if (ze("beforeSanitizeElements", p, null), hn(p) || de(/[\u0080-\uFFFF]/, p.nodeName))
      return Ne(p), !0;
    var A = le(p.nodeName);
    if (ze("uponSanitizeElement", p, {
      tagName: A,
      allowedTags: T
    }), p.hasChildNodes() && !ht(p.firstElementChild) && (!ht(p.content) || !ht(p.content.firstElementChild)) && de(/<[/\w]/g, p.innerHTML) && de(/<[/\w]/g, p.textContent) || A === "select" && de(/<template/i, p.innerHTML) || p.nodeType === 7 || B && p.nodeType === 8 && de(/<[/\w]/g, p.data))
      return Ne(p), !0;
    if (!T[A] || _[A]) {
      if (!_[A] && vn(A) && (P.tagNameCheck instanceof RegExp && de(P.tagNameCheck, A) || P.tagNameCheck instanceof Function && P.tagNameCheck(A)))
        return !1;
      if (K && !me[A]) {
        var V = k(p) || p.parentNode, Se = O(p) || p.childNodes;
        if (Se && V)
          for (var pe = Se.length, ue = pe - 1; ue >= 0; --ue) {
            var tt = w(Se[ue], !0);
            tt.__removalCount = (p.__removalCount || 0) + 1, V.insertBefore(tt, v(p));
          }
      }
      return Ne(p), !0;
    }
    return p instanceof c && !sa(p) || (A === "noscript" || A === "noembed" || A === "noframes") && de(/<\/no(script|embed|frames)/i, p.innerHTML) ? (Ne(p), !0) : (te && p.nodeType === 3 && (S = p.textContent, S = Re(S, be, " "), S = Re(S, se, " "), S = Re(S, Me, " "), p.textContent !== S && (gt(t.removed, {
      element: p.cloneNode()
    }), p.textContent = S)), ze("afterSanitizeElements", p, null), !1);
  }, gn = function(p, S, A) {
    if (Ye && (S === "id" || S === "name") && (A in n || A in aa))
      return !1;
    if (!(z && !G[S] && de(Oe, S))) {
      if (!(W && de(we, S))) {
        if (!R[S] || G[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(vn(p) && (P.tagNameCheck instanceof RegExp && de(P.tagNameCheck, p) || P.tagNameCheck instanceof Function && P.tagNameCheck(p)) && (P.attributeNameCheck instanceof RegExp && de(P.attributeNameCheck, S) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && de(P.tagNameCheck, A) || P.tagNameCheck instanceof Function && P.tagNameCheck(A)))
          ) return !1;
        } else if (!tr[S]) {
          if (!de(E, Re(A, De, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && p !== "script" && La(A, "data:") === 0 && on[p])) {
              if (!(D && !de(Qe, Re(A, De, "")))) {
                if (A)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, vn = function(p) {
    return p !== "annotation-xml" && An(p, Je);
  }, yn = function(p) {
    var S, A, V, Se;
    ze("beforeSanitizeAttributes", p, null);
    var pe = p.attributes;
    if (pe) {
      var ue = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: R
      };
      for (Se = pe.length; Se--; ) {
        S = pe[Se];
        var tt = S, ae = tt.name, or = tt.namespaceURI;
        if (A = ae === "value" ? S.value : Ia(S.value), V = le(ae), ue.attrName = V, ue.attrValue = A, ue.keepAttr = !0, ue.forceKeepAttr = void 0, ze("uponSanitizeAttribute", p, ue), A = ue.attrValue, !ue.forceKeepAttr && (Tt(ae, p), !!ue.keepAttr)) {
          if (!ie && de(/\/>/i, A)) {
            Tt(ae, p);
            continue;
          }
          te && (A = Re(A, be, " "), A = Re(A, se, " "), A = Re(A, Me, " "));
          var bn = le(p.nodeName);
          if (gn(bn, V, A)) {
            if (xe && (V === "id" || V === "name") && (Tt(ae, p), A = M + A), B && de(/((--!?|])>)|<\/(style|title)/i, A)) {
              Tt(ae, p);
              continue;
            }
            if (j && Xe(x) === "object" && typeof x.getAttributeType == "function" && !or)
              switch (x.getAttributeType(bn, V)) {
                case "TrustedHTML": {
                  A = j.createHTML(A);
                  break;
                }
                case "TrustedScriptURL": {
                  A = j.createScriptURL(A);
                  break;
                }
              }
            try {
              or ? p.setAttributeNS(or, ae, A) : p.setAttribute(ae, A), hn(p) ? Ne(p) : On(t.removed);
            } catch {
            }
          }
        }
      }
      ze("afterSanitizeAttributes", p, null);
    }
  }, la = function L(p) {
    var S, A = pn(p);
    for (ze("beforeSanitizeShadowDOM", p, null); S = A.nextNode(); )
      ze("uponSanitizeShadowNode", S, null), !mn(S) && (S.content instanceof a && L(S.content), yn(S));
    ze("afterSanitizeShadowDOM", p, null);
  };
  return t.sanitize = function(L) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, A, V, Se, pe;
    if (rr = !L, rr && (L = "<!-->"), typeof L != "string" && !ht(L))
      if (typeof L.toString == "function") {
        if (L = L.toString(), typeof L != "string")
          throw ur("dirty is not a string, aborting");
      } else
        throw ur("toString is not a function");
    if (!t.isSupported) {
      if (Xe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof L == "string")
          return e.toStaticHTML(L);
        if (ht(L))
          return e.toStaticHTML(L.outerHTML);
      }
      return L;
    }
    if (F || ir(p), t.removed = [], typeof L == "string" && (He = !1), He) {
      if (L.nodeName) {
        var ue = le(L.nodeName);
        if (!T[ue] || _[ue])
          throw ur("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (L instanceof s)
      S = fn("<!---->"), A = S.ownerDocument.importNode(L, !0), A.nodeType === 1 && A.nodeName === "BODY" || A.nodeName === "HTML" ? S = A : S.appendChild(A);
    else {
      if (!Ae && !te && !Z && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return j && $e ? j.createHTML(L) : L;
      if (S = fn(L), !S)
        return Ae ? null : $e ? b : "";
    }
    S && re && Ne(S.firstChild);
    for (var tt = pn(He ? L : S); V = tt.nextNode(); )
      V.nodeType === 3 && V === Se || mn(V) || (V.content instanceof a && la(V.content), yn(V), Se = V);
    if (Se = null, He)
      return L;
    if (Ae) {
      if (ee)
        for (pe = ne.call(S.ownerDocument); S.firstChild; )
          pe.appendChild(S.firstChild);
      else
        pe = S;
      return (R.shadowroot || R.shadowrootmod) && (pe = ye.call(r, pe, !0)), pe;
    }
    var ae = Z ? S.outerHTML : S.innerHTML;
    return Z && T["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && de(Ua, S.ownerDocument.doctype.name) && (ae = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + ae), te && (ae = Re(ae, be, " "), ae = Re(ae, se, " "), ae = Re(ae, Me, " ")), j && $e ? j.createHTML(ae) : ae;
  }, t.setConfig = function(L) {
    ir(L), F = !0;
  }, t.clearConfig = function() {
    st = null, F = !1;
  }, t.isValidAttribute = function(L, p, S) {
    st || ir({});
    var A = le(L), V = le(p);
    return gn(A, V, S);
  }, t.addHook = function(L, p) {
    typeof p == "function" && (J[L] = J[L] || [], gt(J[L], p));
  }, t.removeHook = function(L) {
    if (J[L])
      return On(J[L]);
  }, t.removeHooks = function(L) {
    J[L] && (J[L] = []);
  }, t.removeAllHooks = function() {
    J = {};
  }, t;
}
var Ka = mi();
function Za(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const je = (e) => ({ __html: Ka.sanitize(e) }), Rn = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let mr = !1;
const Qa = (e, t) => {
  mr || (mr = !0, setTimeout(() => {
    e(), mr = !1;
  }, t));
};
let Ln;
const Ja = (e, t) => {
  window.clearTimeout(Ln), Ln = window.setTimeout(e, t);
};
o.shape({
  event: o.string,
  action: o.string,
  name: o.string,
  region: o.string,
  section: o.string,
  component: o.string,
  type: o.string,
  text: o.string
});
const he = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: s = "",
  component: c = ""
}) => {
  const { dataLayer: u } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: c.toLowerCase()
  };
  u && u.push(d);
}, eo = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), gr = o.shape({
  text: o.string,
  maxWidth: o.string,
  cssClass: o.arrayOf(o.string),
  highlightColor: o.oneOf(["gold", "black"])
}), gi = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  content: o.shape({
    icon: o.string,
    header: o.string,
    body: o.string
  })
});
var vi = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        c && (i = a(i, n(c)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var c in i)
        t.call(i, c) && i[c] && (s = a(s, c));
      return s;
    }
    function a(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(vi);
var to = vi.exports;
const X = /* @__PURE__ */ zr(to), yi = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var a, i, s, c, u, d;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: X("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (a = t.content) == null ? void 0 : a.icon
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ l.jsx("h4", { children: /* @__PURE__ */ l.jsxs(
          "a",
          {
            "data-testid": "accordion-opener",
            className: X({ collapsed: e !== r }),
            "data-bs-toggle": "collapse",
            href: `#card-body-${e}`,
            role: "button",
            "aria-expanded": e === r,
            "aria-controls": `card-body-${e}`,
            onClick: (f) => {
              var h;
              return n(f, e, (h = t.content) == null ? void 0 : h.header);
            },
            children: [
              (i = t.content) != null && i.icon ? /* @__PURE__ */ l.jsxs("span", { className: "accordion-icon", children: [
                /* @__PURE__ */ l.jsx(
                  "i",
                  {
                    className: `${(s = t.content.icon) == null ? void 0 : s[0]} fa-${(c = t.content.icon) == null ? void 0 : c[1]} me-2`
                  }
                ),
                t.content.header
              ] }) : (u = t.content) == null ? void 0 : u.header,
              /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-up" })
            ]
          }
        ) }) }),
        ((d = t.content) == null ? void 0 : d.body) && /* @__PURE__ */ l.jsx("div", { id: `card-body-${e}`, className: X("collapse"), children: /* @__PURE__ */ l.jsx(
          "div",
          {
            className: "accordion-body",
            dangerouslySetInnerHTML: je(t.content.body)
          }
        ) })
      ]
    }
  );
};
yi.propTypes = {
  id: o.number,
  item: gi,
  openCard: o.number,
  onClick: o.func
};
const ro = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, In = {
  OPEN: "open",
  CLOSE: "close"
}, bi = ({ cards: e, openedCard: t }) => {
  const [r, n] = ge(t), a = (s, c) => {
    he({
      ...ro,
      action: c,
      text: s
    });
  }, i = (s, c, u) => {
    s.preventDefault(), (r === c || r) && a(
      e[r - 1].content.header,
      In.CLOSE
    ), r !== c ? (n(c), a(u, In.OPEN)) : n(null);
  };
  return /* @__PURE__ */ l.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, c) => s.content.body && s.content.header && /* @__PURE__ */ l.jsx(
      yi,
      {
        id: c + 1,
        item: s,
        openCard: r,
        onClick: i
      },
      c + 1
    )
  ) });
};
bi.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: o.arrayOf(gi).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: o.number
};
const no = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ge = ({
  label: e,
  cardTitle: t,
  ariaLabel: r,
  block: n,
  color: a,
  disabled: i,
  element: s,
  href: c,
  icon: u,
  innerRef: d,
  onClick: f,
  size: h,
  classes: m,
  target: x,
  ...y
}) => {
  const w = X("btn", {
    [`btn-${a}`]: !0,
    "btn-md": h === "small",
    "btn-sm": h === "xsmall",
    "btn-block": n,
    disabled: i
  });
  let v = s;
  c && s === "button" && (v = "a");
  const O = (k) => {
    he({ ...no, text: k, section: t }), f == null || f();
  };
  return /* @__PURE__ */ l.jsxs(
    v,
    {
      type: v === "button" && f ? "button" : void 0,
      ...y,
      className: X(m) || w,
      href: c,
      ref: d,
      onClick: () => O(e),
      "aria-label": r,
      target: v === "a" ? x : null,
      children: [
        u && /* @__PURE__ */ l.jsx("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]} me-1` }),
        e
      ]
    }
  );
};
Ge.propTypes = {
  /**
   * Button label
   */
  label: o.string,
  /**
   * Card title
   */
  cardTitle: o.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Render button as a block-button?
  */
  block: o.bool,
  /**
    Button background color
  */
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func,
  /**
    Button size
  */
  size: o.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: o.arrayOf(o.string),
  /**
   Link target type
   */
  target: o.oneOf(["_blank", "_self", "_top", "_parent"])
};
Ge.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  block: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "default",
  classes: void 0,
  target: "_self"
};
function io(e) {
  function t(E, T, C, R, g) {
    for (var P = 0, _ = 0, G = 0, W = 0, z, D, ie = 0, te = 0, B, Z = B = z = 0, F = 0, re = 0, Ae = 0, ee = 0, $e = C.length, Ye = $e - 1, xe, M = "", K = "", He = "", Pe = "", me; F < $e; ) {
      if (D = C.charCodeAt(F), F === Ye && _ + W + G + P !== 0 && (_ !== 0 && (D = _ === 47 ? 10 : 47), W = G = P = 0, $e++, Ye++), _ + W + G + P === 0) {
        if (F === Ye && (0 < re && (M = M.replace(m, "")), 0 < M.trim().length)) {
          switch (D) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              M += C.charAt(F);
          }
          D = 59;
        }
        switch (D) {
          case 123:
            for (M = M.trim(), z = M.charCodeAt(0), B = 1, ee = ++F; F < $e; ) {
              switch (D = C.charCodeAt(F)) {
                case 123:
                  B++;
                  break;
                case 125:
                  B--;
                  break;
                case 47:
                  switch (D = C.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Z = F + 1; Z < Ye; ++Z)
                          switch (C.charCodeAt(Z)) {
                            case 47:
                              if (D === 42 && C.charCodeAt(Z - 1) === 42 && F + 2 !== Z) {
                                F = Z + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (D === 47) {
                                F = Z + 1;
                                break e;
                              }
                          }
                        F = Z;
                      }
                  }
                  break;
                case 91:
                  D++;
                case 40:
                  D++;
                case 34:
                case 39:
                  for (; F++ < Ye && C.charCodeAt(F) !== D; )
                    ;
              }
              if (B === 0) break;
              F++;
            }
            switch (B = C.substring(ee, F), z === 0 && (z = (M = M.replace(h, "").trim()).charCodeAt(0)), z) {
              case 64:
                switch (0 < re && (M = M.replace(m, "")), D = M.charCodeAt(1), D) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    re = T;
                    break;
                  default:
                    re = Me;
                }
                if (B = t(T, re, B, D, g + 1), ee = B.length, 0 < we && (re = r(Me, M, Ae), me = c(3, B, re, T, J, oe, ee, D, g, R), M = re.join(""), me !== void 0 && (ee = (B = me.trim()).length) === 0 && (D = 0, B = "")), 0 < ee) switch (D) {
                  case 115:
                    M = M.replace(H, s);
                  case 100:
                  case 109:
                  case 45:
                    B = M + "{" + B + "}";
                    break;
                  case 107:
                    M = M.replace(k, "$1 $2"), B = M + "{" + B + "}", B = se === 1 || se === 2 && i("@" + B, 3) ? "@-webkit-" + B + "@" + B : "@" + B;
                    break;
                  default:
                    B = M + B, R === 112 && (B = (K += B, ""));
                }
                else B = "";
                break;
              default:
                B = t(T, r(T, M, Ae), B, R, g + 1);
            }
            He += B, B = Ae = re = Z = z = 0, M = "", D = C.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (M = (0 < re ? M.replace(m, "") : M).trim(), 1 < (ee = M.length)) switch (Z === 0 && (z = M.charCodeAt(0), z === 45 || 96 < z && 123 > z) && (ee = (M = M.replace(" ", ":")).length), 0 < we && (me = c(1, M, T, E, J, oe, K.length, R, g, R)) !== void 0 && (ee = (M = me.trim()).length) === 0 && (M = "\0\0"), z = M.charCodeAt(0), D = M.charCodeAt(1), z) {
              case 0:
                break;
              case 64:
                if (D === 105 || D === 99) {
                  Pe += M + C.charAt(F);
                  break;
                }
              default:
                M.charCodeAt(ee - 1) !== 58 && (K += a(M, z, D, M.charCodeAt(2)));
            }
            Ae = re = Z = z = 0, M = "", D = C.charCodeAt(++F);
        }
      }
      switch (D) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + z === 0 && R !== 107 && 0 < M.length && (re = 1, M += "\0"), 0 < we * De && c(0, M, T, E, J, oe, K.length, R, g, R), oe = 1, J++;
          break;
        case 59:
        case 125:
          if (_ + W + G + P === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, xe = C.charAt(F), D) {
            case 9:
            case 32:
              if (W + P + _ === 0) switch (ie) {
                case 44:
                case 58:
                case 9:
                case 32:
                  xe = "";
                  break;
                default:
                  D !== 32 && (xe = " ");
              }
              break;
            case 0:
              xe = "\\0";
              break;
            case 12:
              xe = "\\f";
              break;
            case 11:
              xe = "\\v";
              break;
            case 38:
              W + _ + P === 0 && (re = Ae = 1, xe = "\f" + xe);
              break;
            case 108:
              if (W + _ + P + be === 0 && 0 < Z) switch (F - Z) {
                case 2:
                  ie === 112 && C.charCodeAt(F - 3) === 58 && (be = ie);
                case 8:
                  te === 111 && (be = te);
              }
              break;
            case 58:
              W + _ + P === 0 && (Z = F);
              break;
            case 44:
              _ + G + W + P === 0 && (re = 1, xe += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (W = W === D ? 0 : W === 0 ? D : W);
              break;
            case 91:
              W + _ + G === 0 && P++;
              break;
            case 93:
              W + _ + G === 0 && P--;
              break;
            case 41:
              W + _ + P === 0 && G--;
              break;
            case 40:
              if (W + _ + P === 0) {
                if (z === 0) switch (2 * ie + 3 * te) {
                  case 533:
                    break;
                  default:
                    z = 1;
                }
                G++;
              }
              break;
            case 64:
              _ + G + W + P + Z + B === 0 && (B = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + P + G)) switch (_) {
                case 0:
                  switch (2 * D + 3 * C.charCodeAt(F + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      ee = F, _ = 42;
                  }
                  break;
                case 42:
                  D === 47 && ie === 42 && ee + 2 !== F && (C.charCodeAt(ee + 2) === 33 && (K += C.substring(ee, F + 1)), xe = "", _ = 0);
              }
          }
          _ === 0 && (M += xe);
      }
      te = ie, ie = D, F++;
    }
    if (ee = K.length, 0 < ee) {
      if (re = T, 0 < we && (me = c(2, K, re, E, J, oe, ee, R, g, R), me !== void 0 && (K = me).length === 0)) return Pe + K + He;
      if (K = re.join(",") + "{" + K + "}", se * be !== 0) {
        switch (se !== 2 || i(K, 2) || (be = 0), be) {
          case 111:
            K = K.replace(j, ":-moz-$1") + K;
            break;
          case 112:
            K = K.replace(N, "::-webkit-input-$1") + K.replace(N, "::-moz-$1") + K.replace(N, ":-ms-input-$1") + K;
        }
        be = 0;
      }
    }
    return Pe + K + He;
  }
  function r(E, T, C) {
    var R = T.trim().split(v);
    T = R;
    var g = R.length, P = E.length;
    switch (P) {
      case 0:
      case 1:
        var _ = 0;
        for (E = P === 0 ? "" : E[0] + " "; _ < g; ++_)
          T[_] = n(E, T[_], C).trim();
        break;
      default:
        var G = _ = 0;
        for (T = []; _ < g; ++_)
          for (var W = 0; W < P; ++W)
            T[G++] = n(E[W] + " ", R[_], C).trim();
    }
    return T;
  }
  function n(E, T, C) {
    var R = T.charCodeAt(0);
    switch (33 > R && (R = (T = T.trim()).charCodeAt(0)), R) {
      case 38:
        return T.replace(O, "$1" + E.trim());
      case 58:
        return E.trim() + T.replace(O, "$1" + E.trim());
      default:
        if (0 < 1 * C && 0 < T.indexOf("\f")) return T.replace(O, (E.charCodeAt(0) === 58 ? "" : "$1") + E.trim());
    }
    return E + T;
  }
  function a(E, T, C, R) {
    var g = E + ";", P = 2 * T + 3 * C + 4 * R;
    if (P === 944) {
      E = g.indexOf(":", 9) + 1;
      var _ = g.substring(E, g.length - 1).trim();
      return _ = g.substring(0, E).trim() + _ + ";", se === 1 || se === 2 && i(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (se === 0 || se === 2 && !i(g, 1)) return g;
    switch (P) {
      case 1015:
        return g.charCodeAt(10) === 97 ? "-webkit-" + g + g : g;
      case 951:
        return g.charCodeAt(3) === 116 ? "-webkit-" + g + g : g;
      case 963:
        return g.charCodeAt(5) === 110 ? "-webkit-" + g + g : g;
      case 1009:
        if (g.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + g + g;
      case 978:
        return "-webkit-" + g + "-moz-" + g + g;
      case 1019:
      case 983:
        return "-webkit-" + g + "-moz-" + g + "-ms-" + g + g;
      case 883:
        if (g.charCodeAt(8) === 45) return "-webkit-" + g + g;
        if (0 < g.indexOf("image-set(", 11)) return g.replace(ye, "$1-webkit-$2") + g;
        break;
      case 932:
        if (g.charCodeAt(4) === 45) switch (g.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + g.replace("-grow", "") + "-webkit-" + g + "-ms-" + g.replace("grow", "positive") + g;
          case 115:
            return "-webkit-" + g + "-ms-" + g.replace("shrink", "negative") + g;
          case 98:
            return "-webkit-" + g + "-ms-" + g.replace("basis", "preferred-size") + g;
        }
        return "-webkit-" + g + "-ms-" + g + g;
      case 964:
        return "-webkit-" + g + "-ms-flex-" + g + g;
      case 1023:
        if (g.charCodeAt(8) !== 99) break;
        return _ = g.substring(g.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + g + "-ms-flex-pack" + _ + g;
      case 1005:
        return y.test(g) ? g.replace(x, ":-webkit-") + g.replace(x, ":-moz-") + g : g;
      case 1e3:
        switch (_ = g.substring(13).trim(), T = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(T)) {
          case 226:
            _ = g.replace(b, "tb");
            break;
          case 232:
            _ = g.replace(b, "tb-rl");
            break;
          case 220:
            _ = g.replace(b, "lr");
            break;
          default:
            return g;
        }
        return "-webkit-" + g + "-ms-" + _ + g;
      case 1017:
        if (g.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (T = (g = E).length - 10, _ = (g.charCodeAt(T) === 33 ? g.substring(0, T) : g).substring(E.indexOf(":", 7) + 1).trim(), P = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            g = g.replace(_, "-webkit-" + _) + ";" + g;
            break;
          case 207:
          case 102:
            g = g.replace(_, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + g.replace(_, "-webkit-" + _) + ";" + g.replace(_, "-ms-" + _ + "box") + ";" + g;
        }
        return g + ";";
      case 938:
        if (g.charCodeAt(5) === 45) switch (g.charCodeAt(6)) {
          case 105:
            return _ = g.replace("-items", ""), "-webkit-" + g + "-webkit-box-" + _ + "-ms-flex-" + _ + g;
          case 115:
            return "-webkit-" + g + "-ms-flex-item-" + g.replace(q, "") + g;
          default:
            return "-webkit-" + g + "-ms-flex-line-pack" + g.replace("align-content", "").replace(q, "") + g;
        }
        break;
      case 973:
      case 989:
        if (g.charCodeAt(3) !== 45 || g.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ke.test(E) === !0) return (_ = E.substring(E.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(E.replace("stretch", "fill-available"), T, C, R).replace(":fill-available", ":stretch") : g.replace(_, "-webkit-" + _) + g.replace(_, "-moz-" + _.replace("fill-", "")) + g;
        break;
      case 962:
        if (g = "-webkit-" + g + (g.charCodeAt(5) === 102 ? "-ms-" + g : "") + g, C + R === 211 && g.charCodeAt(13) === 105 && 0 < g.indexOf("transform", 10)) return g.substring(0, g.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + g;
    }
    return g;
  }
  function i(E, T) {
    var C = E.indexOf(T === 1 ? ":" : "{"), R = E.substring(0, T !== 3 ? C : 10);
    return C = E.substring(C + 1, E.length - 1), Qe(T !== 2 ? R : R.replace(ne, "$1"), C, T);
  }
  function s(E, T) {
    var C = a(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return C !== T + ";" ? C.replace(I, " or ($1)").substring(4) : "(" + T + ")";
  }
  function c(E, T, C, R, g, P, _, G, W, z) {
    for (var D = 0, ie = T, te; D < we; ++D)
      switch (te = Oe[D].call(f, E, ie, C, R, g, P, _, G, W, z)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ie = te;
      }
    if (ie !== T) return ie;
  }
  function u(E) {
    switch (E) {
      case void 0:
      case null:
        we = Oe.length = 0;
        break;
      default:
        if (typeof E == "function") Oe[we++] = E;
        else if (typeof E == "object") for (var T = 0, C = E.length; T < C; ++T)
          u(E[T]);
        else De = !!E | 0;
    }
    return u;
  }
  function d(E) {
    return E = E.prefix, E !== void 0 && (Qe = null, E ? typeof E != "function" ? se = 1 : (se = 2, Qe = E) : se = 0), d;
  }
  function f(E, T) {
    var C = E;
    if (33 > C.charCodeAt(0) && (C = C.trim()), Je = C, C = [Je], 0 < we) {
      var R = c(-1, T, C, C, J, oe, 0, 0, 0, 0);
      R !== void 0 && typeof R == "string" && (T = R);
    }
    var g = t(Me, C, T, 0, 0);
    return 0 < we && (R = c(-2, g, C, C, J, oe, g.length, 0, 0, 0), R !== void 0 && (g = R)), Je = "", be = 0, oe = J = 1, g;
  }
  var h = /^\0+/g, m = /[\0\r\f]/g, x = /: */g, y = /zoo|gra/, w = /([,: ])(transform)/g, v = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, k = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, j = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, I = /([\s\S]*?);/g, q = /-self|flex-/g, ne = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ke = /stretch|:\s*\w+\-(?:conte|avail)/, ye = /([^-])(image-set\()/, oe = 1, J = 1, be = 0, se = 1, Me = [], Oe = [], we = 0, Qe = null, De = 0, Je = "";
  return f.use = u, f.set = d, e !== void 0 && d(e), f;
}
var ao = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function oo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var so = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pn = /* @__PURE__ */ oo(
  function(e) {
    return so.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Fr = Ut, lo = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, co = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, uo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wr = {};
Wr[Fr.ForwardRef] = uo;
Wr[Fr.Memo] = wi;
function Mn(e) {
  return Fr.isMemo(e) ? wi : Wr[e.$$typeof] || lo;
}
var fo = Object.defineProperty, po = Object.getOwnPropertyNames, Dn = Object.getOwnPropertySymbols, ho = Object.getOwnPropertyDescriptor, mo = Object.getPrototypeOf, $n = Object.prototype;
function xi(e, t, r) {
  if (typeof t != "string") {
    if ($n) {
      var n = mo(t);
      n && n !== $n && xi(e, n, r);
    }
    var a = po(t);
    Dn && (a = a.concat(Dn(t)));
    for (var i = Mn(e), s = Mn(t), c = 0; c < a.length; ++c) {
      var u = a[c];
      if (!co[u] && !(r && r[u]) && !(s && s[u]) && !(i && i[u])) {
        var d = ho(t, u);
        try {
          fo(e, u, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var go = xi;
const vo = /* @__PURE__ */ zr(go);
var Y = { env: { NODE_ENV: "production" } };
function Ve() {
  return (Ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Hn = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Sr = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ut.typeOf(e);
}, Bt = Object.freeze([]), Ke = Object.freeze({});
function bt(e) {
  return typeof e == "function";
}
function _r(e) {
  return Y.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function qr(e) {
  return e && typeof e.styledComponentId == "string";
}
var lt = typeof Y < "u" && Y.env !== void 0 && (Y.env.REACT_APP_SC_ATTR || Y.env.SC_ATTR) || "data-styled", Vr = typeof window < "u" && "HTMLElement" in window, yo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Y < "u" && Y.env !== void 0 && (Y.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Y.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.env.REACT_APP_SC_DISABLE_SPEEDY : Y.env.SC_DISABLE_SPEEDY !== void 0 && Y.env.SC_DISABLE_SPEEDY !== "" ? Y.env.SC_DISABLE_SPEEDY !== "false" && Y.env.SC_DISABLE_SPEEDY : Y.env.NODE_ENV !== "production")), bo = Y.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function wo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function pt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Y.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(wo.apply(void 0, [bo[e]].concat(r)).trim());
}
var xo = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, s = i; r >= s; ) (s <<= 1) < 0 && pt(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = i; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), d = 0, f = n.length; d < f; d++) this.tag.insertRule(u, n[d]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var s = a; s < i; s++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), s = i + a, c = i; c < s; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Pt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), vt = 1, At = function(e) {
  if (Pt.has(e)) return Pt.get(e);
  for (; zt.has(vt); ) vt++;
  var t = vt++;
  return Y.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && pt(16, "" + t), Pt.set(e, t), zt.set(t, e), t;
}, So = function(e) {
  return zt.get(e);
}, _o = function(e, t) {
  t >= vt && (vt = t + 1), Pt.set(e, t), zt.set(t, e);
}, To = "style[" + lt + '][data-styled-version="5.3.11"]', ko = new RegExp("^" + lt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Oo = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, s = a.length; i < s; i++) (n = a[i]) && e.registerName(t, n);
}, Ao = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var s = r[a].trim();
    if (s) {
      var c = s.match(ko);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (_o(d, u), Oo(e, d, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, No = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Si = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(c) {
    for (var u = c.childNodes, d = u.length; d >= 0; d--) {
      var f = u[d];
      if (f && f.nodeType === 1 && f.hasAttribute(lt)) return f;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(lt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = No();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, jo = function() {
  function e(r) {
    var n = this.element = Si(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, s = 0, c = i.length; s < c; s++) {
        var u = i[s];
        if (u.ownerNode === a) return u;
      }
      pt(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Co = function() {
  function e(r) {
    var n = this.element = Si(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Eo = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Bn = Vr, Ro = { isServer: !Vr, useCSSOMInjection: !yo }, _i = function() {
  function e(r, n, a) {
    r === void 0 && (r = Ke), n === void 0 && (n = {}), this.options = Ve({}, Ro, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Vr && Bn && (Bn = !1, function(i) {
      for (var s = document.querySelectorAll(To), c = 0, u = s.length; c < u; c++) {
        var d = s[c];
        d && d.getAttribute(lt) !== "active" && (Ao(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return At(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ve({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, s = n.target, r = a ? new Eo(s) : i ? new jo(s) : new Co(s), new xo(r)));
    var r, n, a, i, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (At(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(At(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(At(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", s = 0; s < a; s++) {
        var c = So(s);
        if (c !== void 0) {
          var u = r.names.get(c), d = n.getGroup(s);
          if (u && d && u.size) {
            var f = lt + ".g" + s + '[id="' + c + '"]', h = "";
            u !== void 0 && u.forEach(function(m) {
              m.length > 0 && (h += m + ",");
            }), i += "" + d + f + '{content:"' + h + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Lo = /(a)(d)/gi, zn = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Tr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = zn(t % 52) + r;
  return (zn(t % 52) + r).replace(Lo, "$1-$2");
}
var nt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ti = function(e) {
  return nt(5381, e);
};
function Io(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (bt(r) && !qr(r)) return !1;
  }
  return !0;
}
var Po = Ti("5.3.11"), Mo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = Y.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Io(t), this.componentId = r, this.baseHash = nt(Po, r), this.baseStyle = n, _i.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var s = ct(this.rules, t, r, n).join(""), c = Tr(nt(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(a, c)) {
        var u = n(s, "." + c, void 0, a);
        r.insertRules(a, c, u);
      }
      i.push(c), this.staticRulesId = c;
    }
    else {
      for (var d = this.rules.length, f = nt(this.baseHash, n.hash), h = "", m = 0; m < d; m++) {
        var x = this.rules[m];
        if (typeof x == "string") h += x, Y.env.NODE_ENV !== "production" && (f = nt(f, x + m));
        else if (x) {
          var y = ct(x, t, r, n), w = Array.isArray(y) ? y.join("") : y;
          f = nt(f, w + m), h += w;
        }
      }
      if (h) {
        var v = Tr(f >>> 0);
        if (!r.hasNameForId(a, v)) {
          var O = n(h, "." + v, void 0, a);
          r.insertRules(a, v, O);
        }
        i.push(v);
      }
    }
    return i.join(" ");
  }, e;
}(), Do = /^\s*\/\/.*$/gm, $o = [":", "[", ".", "#"];
function Ho(e) {
  var t, r, n, a, i = Ke, s = i.options, c = s === void 0 ? Ke : s, u = i.plugins, d = u === void 0 ? Bt : u, f = new io(c), h = [], m = /* @__PURE__ */ function(w) {
    function v(O) {
      if (O) try {
        w(O + "}");
      } catch {
      }
    }
    return function(O, k, N, j, b, H, I, q, ne, ke) {
      switch (O) {
        case 1:
          if (ne === 0 && k.charCodeAt(0) === 64) return w(k + ";"), "";
          break;
        case 2:
          if (q === 0) return k + "/*|*/";
          break;
        case 3:
          switch (q) {
            case 102:
            case 112:
              return w(N[0] + k), "";
            default:
              return k + (ke === 0 ? "/*|*/" : "");
          }
        case -2:
          k.split("/*|*/}").forEach(v);
      }
    };
  }(function(w) {
    h.push(w);
  }), x = function(w, v, O) {
    return v === 0 && $o.indexOf(O[r.length]) !== -1 || O.match(a) ? w : "." + t;
  };
  function y(w, v, O, k) {
    k === void 0 && (k = "&");
    var N = w.replace(Do, ""), j = v && O ? O + " " + v + " { " + N + " }" : N;
    return t = k, r = v, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), f(O || !v ? "" : v, j);
  }
  return f.use([].concat(d, [function(w, v, O) {
    w === 2 && O.length && O[0].lastIndexOf(r) > 0 && (O[0] = O[0].replace(n, x));
  }, m, function(w) {
    if (w === -2) {
      var v = h;
      return h = [], v;
    }
  }])), y.hash = d.length ? d.reduce(function(w, v) {
    return v.name || pt(15), nt(w, v.name);
  }, 5381).toString() : "", y;
}
var ki = ce.createContext();
ki.Consumer;
var Oi = ce.createContext(), Bo = (Oi.Consumer, new _i()), kr = Ho();
function zo() {
  return Br(ki) || Bo;
}
function Fo() {
  return Br(Oi) || kr;
}
var Wo = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = kr);
      var s = n.name + i.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return pt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = kr), this.name + t.hash;
  }, e;
}(), qo = /([A-Z])/, Vo = /([A-Z])/g, Uo = /^ms-/, Yo = function(e) {
  return "-" + e.toLowerCase();
};
function Fn(e) {
  return qo.test(e) ? e.replace(Vo, Yo).replace(Uo, "-ms-") : e;
}
var Wn = function(e) {
  return e == null || e === !1 || e === "";
};
function ct(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], s = 0, c = e.length; s < c; s += 1) (a = ct(e[s], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (Wn(e)) return "";
  if (qr(e)) return "." + e.styledComponentId;
  if (bt(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var u = e(t);
    return Y.env.NODE_ENV !== "production" && Ut.isElement(u) && console.warn(_r(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ct(u, t, r, n);
  }
  var d;
  return e instanceof Wo ? r ? (e.inject(r, n), e.getName(n)) : e : Sr(e) ? function f(h, m) {
    var x, y, w = [];
    for (var v in h) h.hasOwnProperty(v) && !Wn(h[v]) && (Array.isArray(h[v]) && h[v].isCss || bt(h[v]) ? w.push(Fn(v) + ":", h[v], ";") : Sr(h[v]) ? w.push.apply(w, f(h[v], v)) : w.push(Fn(v) + ": " + (x = v, (y = h[v]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || x in ao || x.startsWith("--") ? String(y).trim() : y + "px") + ";"));
    return m ? [m + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var qn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Xo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return bt(e) || Sr(e) ? qn(ct(Hn(Bt, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : qn(ct(Hn(e, r)));
}
var Vn = /invalid hook call/i, Nt = /* @__PURE__ */ new Set(), Go = function(e, t) {
  if (Y.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (Vn.test(i)) a = !1, Nt.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
          n.apply(void 0, [i].concat(c));
        }
      }, at(), a && !Nt.has(r) && (console.warn(r), Nt.add(r));
    } catch (i) {
      Vn.test(i.message) && Nt.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Ko = function(e, t, r) {
  return r === void 0 && (r = Ke), e.theme !== r.theme && e.theme || t || r.theme;
}, Zo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Qo = /(^-|-$)/g;
function vr(e) {
  return e.replace(Zo, "-").replace(Qo, "");
}
var Jo = function(e) {
  return Tr(Ti(e) >>> 0);
};
function jt(e) {
  return typeof e == "string" && (Y.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Or = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, es = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ts(e, t, r) {
  var n = e[r];
  Or(t) && Or(n) ? Ai(n, t) : e[r] = t;
}
function Ai(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var s = i[a];
    if (Or(s)) for (var c in s) es(c) && ts(e, s[c], c);
  }
  return e;
}
var Ni = ce.createContext();
Ni.Consumer;
var yr = {};
function ji(e, t, r) {
  var n = qr(e), a = !jt(e), i = t.attrs, s = i === void 0 ? Bt : i, c = t.componentId, u = c === void 0 ? function(k, N) {
    var j = typeof k != "string" ? "sc" : vr(k);
    yr[j] = (yr[j] || 0) + 1;
    var b = j + "-" + Jo("5.3.11" + j + yr[j]);
    return N ? N + "-" + b : b;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, f = d === void 0 ? function(k) {
    return jt(k) ? "styled." + k : "Styled(" + _r(k) + ")";
  }(e) : d, h = t.displayName && t.componentId ? vr(t.displayName) + "-" + t.componentId : t.componentId || u, m = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, x = t.shouldForwardProp;
  n && e.shouldForwardProp && (x = t.shouldForwardProp ? function(k, N, j) {
    return e.shouldForwardProp(k, N, j) && t.shouldForwardProp(k, N, j);
  } : e.shouldForwardProp);
  var y, w = new Mo(r, h, n ? e.componentStyle : void 0), v = w.isStatic && s.length === 0, O = function(k, N) {
    return function(j, b, H, I) {
      var q = j.attrs, ne = j.componentStyle, ke = j.defaultProps, ye = j.foldedComponentIds, oe = j.shouldForwardProp, J = j.styledComponentId, be = j.target, se = function(R, g, P) {
        R === void 0 && (R = Ke);
        var _ = Ve({}, g, { theme: R }), G = {};
        return P.forEach(function(W) {
          var z, D, ie, te = W;
          for (z in bt(te) && (te = te(_)), te) _[z] = G[z] = z === "className" ? (D = G[z], ie = te[z], D && ie ? D + " " + ie : D || ie) : te[z];
        }), [_, G];
      }(Ko(b, Br(Ni), ke) || Ke, b, q), Me = se[0], Oe = se[1], we = function(R, g, P, _) {
        var G = zo(), W = Fo(), z = g ? R.generateAndInjectStyles(Ke, G, W) : R.generateAndInjectStyles(P, G, W);
        return Y.env.NODE_ENV !== "production" && !g && _ && _(z), z;
      }(ne, I, Me, Y.env.NODE_ENV !== "production" ? j.warnTooManyClasses : void 0), Qe = H, De = Oe.$as || b.$as || Oe.as || b.as || be, Je = jt(De), E = Oe !== b ? Ve({}, b, {}, Oe) : b, T = {};
      for (var C in E) C[0] !== "$" && C !== "as" && (C === "forwardedAs" ? T.as = E[C] : (oe ? oe(C, Pn, De) : !Je || Pn(C)) && (T[C] = E[C]));
      return b.style && Oe.style !== b.style && (T.style = Ve({}, b.style, {}, Oe.style)), T.className = Array.prototype.concat(ye, J, we !== J ? we : null, b.className, Oe.className).filter(Boolean).join(" "), T.ref = Qe, ca(De, T);
    }(y, k, N, v);
  };
  return O.displayName = f, (y = ce.forwardRef(O)).attrs = m, y.componentStyle = w, y.displayName = f, y.shouldForwardProp = x, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Bt, y.styledComponentId = h, y.target = n ? e.target : e, y.withComponent = function(k) {
    var N = t.componentId, j = function(H, I) {
      if (H == null) return {};
      var q, ne, ke = {}, ye = Object.keys(H);
      for (ne = 0; ne < ye.length; ne++) q = ye[ne], I.indexOf(q) >= 0 || (ke[q] = H[q]);
      return ke;
    }(t, ["componentId"]), b = N && N + "-" + (jt(k) ? k : vr(_r(k)));
    return ji(k, Ve({}, j, { attrs: m, componentId: b }), r);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? Ai({}, e.defaultProps, k) : k;
  } }), Y.env.NODE_ENV !== "production" && (Go(f, h), y.warnTooManyClasses = /* @__PURE__ */ function(k, N) {
    var j = {}, b = !1;
    return function(H) {
      if (!b && (j[H] = !0, Object.keys(j).length >= 200)) {
        var I = N ? ' with the id of "' + N + '"' : "";
        console.warn("Over 200 classes were generated for component " + k + I + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), b = !0, j = {};
      }
    };
  }(f, h)), Object.defineProperty(y, "toString", { value: function() {
    return "." + y.styledComponentId;
  } }), a && vo(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Ie = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Ke), !Ut.isValidElementType(n)) return pt(1, String(n));
    var i = function() {
      return r(n, a, Xo.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return t(r, n, Ve({}, a, {}, s));
    }, i.attrs = function(s) {
      return t(r, n, Ve({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, i;
  }(ji, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ie[e] = Ie(e);
});
Y.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), Y.env.NODE_ENV !== "production" && Y.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const rs = Ie.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e }) => e ? "112px" : "142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`, Mt = "On This Page", ns = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: Mt
}, Ci = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = at(null), a = xa("(max-width: 991px)"), [i, s] = ge({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), c = a ? 110 : 142, u = () => {
    var b;
    const v = {}, O = window.scrollY, k = (b = document.getElementById(t)) == null ? void 0 : b.getBoundingClientRect().top, N = 103;
    k >= 0 && (v.sticky = !1, v.activeContainer = ""), O > n.current.getBoundingClientRect().top && (v.sticky = !0);
    const j = i.hasHeader ? c + N : N;
    e == null || e.forEach(({ targetIdName: H }) => {
      const I = document.getElementById(H), q = (I == null ? void 0 : I.getBoundingClientRect().top) - j, ne = (I == null ? void 0 : I.getBoundingClientRect().bottom) - j;
      q < 0 && ne > 0 && (v.activeContainer = H);
    }), s((H) => ({
      ...H,
      ...v
    }));
  }, d = () => {
    Qa(u, 150), Ja(u, 150);
  }, f = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), h = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function m(v = null) {
    if (v === null) return i.containerClass;
    const O = Object.values(v.classList).filter(
      (k) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(k)
    );
    return O.length > 0 ? O.join(" ") : m(v.parentElement);
  }
  _e(() => {
    const v = document.getElementById(t) || null, O = {
      hasHeader: f(),
      hasAltMenuSpacing: h(),
      containerClass: m(v)
    };
    s((k) => ({
      ...k,
      ...O
    }));
  }, []), _e(() => (window == null || window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [i.hasHeader]);
  const x = (v) => {
    var j, b;
    const O = window.scrollY - (i.hasHeader ? c + 100 : 100), k = a ? 410 : 90;
    let N = ((j = document.getElementById(v)) == null ? void 0 : j.getBoundingClientRect().top) + O;
    n.current.classList.contains("sticky") || (N -= k), r && ((b = Za(`#${v}`)) == null || b.focus()), window.scrollTo({ top: N, behavior: "smooth" });
  }, y = () => {
    he({
      ...ns,
      action: i.showMenu ? "close" : "open"
    });
  }, w = () => {
    s((v) => ({
      ...v,
      showMenu: !v.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ l.jsx(
    rs,
    {
      requiresAltMenuSpacing: i.hasAltMenuSpacing,
      ref: n,
      className: X(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: i.sticky,
          "with-header": i.hasHeader
        }
      ),
      style: i.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ l.jsxs("div", { className: `${i.containerClass} uds-anchor-menu-wrapper`, children: [
        a ? /* @__PURE__ */ l.jsx(
          "button",
          {
            className: X("mobile-menu-toggler", {
              "show-menu": i.showMenu
            }),
            type: "button",
            onClick: () => {
              y(), w();
            },
            "data-bs-toggle": "collapse",
            "data-bs-target": "#collapseAnchorMenu",
            "aria-controls": "collapseAnchorMenu",
            children: /* @__PURE__ */ l.jsxs("h4", { children: [
              Mt,
              ":",
              /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-down" })
            ] })
          }
        ) : /* @__PURE__ */ l.jsxs("h4", { children: [
          Mt,
          ":"
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: X("card", "card-body", "collapse", {
              show: i.showMenu
            }),
            children: /* @__PURE__ */ l.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": Mt,
                children: e == null ? void 0 : e.map((v) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ l.jsx(
                    Ge,
                    {
                      "data-testid": `anchor-item-${v.targetIdName}`,
                      classes: X("nav-link", {
                        active: i.activeContainer === v.targetIdName
                      }).split(" "),
                      ariaLabel: v.text,
                      label: v.text,
                      icon: v.icon,
                      onClick: () => x(v.targetIdName)
                    },
                    v.targetIdName
                  )
                ))
              }
            )
          }
        )
      ] })
    }
  );
};
Ci.propTypes = {
  /**
   * Anchor menu items
   */
  items: o.arrayOf(
    o.shape({
      text: o.string.isRequired,
      targetIdName: o.string.isRequired,
      icon: o.arrayOf(o.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: o.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: o.bool
};
var Ar = function() {
  return Ar = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ar.apply(this, arguments);
}, is = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Yt(e) {
  var t = function(r) {
    var n = r.bgStyle, a = r.borderRadius, i = r.iconFillColor, s = r.round, c = r.size, u = is(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return ce.createElement(
      "svg",
      Ar({ viewBox: "0 0 64 64", width: c, height: c }, u),
      s ? ce.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : ce.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }),
      ce.createElement("path", { d: e.path, fill: i })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
var as = Yt({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function Xt(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var os = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), We = function() {
  return We = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, We.apply(this, arguments);
}, ss = function(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function c(f) {
      try {
        d(n.next(f));
      } catch (h) {
        s(h);
      }
    }
    function u(f) {
      try {
        d(n.throw(f));
      } catch (h) {
        s(h);
      }
    }
    function d(f) {
      f.done ? i(f.value) : a(f.value).then(c, u);
    }
    d((n = n.apply(e, t || [])).next());
  });
}, ls = function(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, s;
  return s = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(d) {
    return function(f) {
      return u([d, f]);
    };
  }
  function u(d) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, a && (i = d[0] & 2 ? a.return : d[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, d[1])).done) return i;
      switch (a = 0, i && (d = [d[0] & 2, i.value]), d[0]) {
        case 0:
        case 1:
          i = d;
          break;
        case 4:
          return r.label++, { value: d[1], done: !1 };
        case 5:
          r.label++, a = d[1], d = [0];
          continue;
        case 7:
          d = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            r = 0;
            continue;
          }
          if (d[0] === 3 && (!i || d[1] > i[0] && d[1] < i[3])) {
            r.label = d[1];
            break;
          }
          if (d[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = d;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(d);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      d = t.call(e, r);
    } catch (f) {
      d = [6, f], a = 0;
    } finally {
      n = i = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}, Ei = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, cs = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, us = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, ds = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function fs(e, t, r) {
  var n = t.height, a = t.width, i = Ei(t, ["height", "width"]), s = We({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, i), c = window.open(e, "", Object.keys(s).map(function(d) {
    return "".concat(d, "=").concat(s[d]);
  }).join(", "));
  if (r)
    var u = window.setInterval(function() {
      try {
        (c === null || c.closed) && (window.clearInterval(u), r(c));
      } catch (d) {
        console.error(d);
      }
    }, 1e3);
  return c;
}
var ps = (
  /** @class */
  function(e) {
    os(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, i = a.onShareWindowClose, s = a.windowHeight, c = s === void 0 ? 400 : s, u = a.windowPosition, d = u === void 0 ? "windowCenter" : u, f = a.windowWidth, h = f === void 0 ? 550 : f, m = We({ height: c, width: h }, d === "windowCenter" ? us(h, c) : ds(h, c));
        fs(n, m, i);
      }, r.handleClick = function(n) {
        return ss(r, void 0, void 0, function() {
          var a, i, s, c, u, d, f, h, m, x;
          return ls(this, function(y) {
            switch (y.label) {
              case 0:
                return a = this.props, i = a.beforeOnClick, s = a.disabled, c = a.networkLink, u = a.onClick, d = a.url, f = a.openShareDialogOnClick, h = a.opts, m = c(d, h), s ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), i ? (x = i(), cs(x) ? [4, x] : [3, 2]) : [3, 2]);
              case 1:
                y.sent(), y.label = 2;
              case 2:
                return f && this.openShareDialog(m), u && u(n, m), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, r;
    }
    return t.prototype.render = function() {
      var r = this.props;
      r.beforeOnClick;
      var n = r.children, a = r.className, i = r.disabled, s = r.disabledStyle, c = r.forwardedRef;
      r.networkLink;
      var u = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var d = r.resetButtonStyle, f = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var h = Ei(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), m = X("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!i,
        disabled: !!i
      }, a), x = We(We(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, f), i && s);
      return ce.createElement("button", We({}, h, { "aria-label": h["aria-label"] || u, className: m, onClick: this.handleClick, ref: c, style: x }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(ua)
), Ft = function() {
  return Ft = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ft.apply(this, arguments);
};
function Gt(e, t, r, n) {
  function a(i, s) {
    var c = r(i), u = Ft({}, i), d = Object.keys(c);
    return d.forEach(function(f) {
      delete u[f];
    }), ce.createElement(ps, Ft({}, n, u, { forwardedRef: s, networkName: e, networkLink: t, opts: r(i) }));
  }
  return a.displayName = "ShareButton-".concat(e), ui(a);
}
function hs(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Xt({ subject: r, body: n ? n + a + e : e });
}
var ms = Gt("email", hs, function(e) {
  return {
    subject: e.subject,
    body: e.body,
    separator: e.separator || " "
  };
}, {
  openShareDialogOnClick: !1,
  onClick: function(e, t) {
    window.location.href = t;
  }
}), Un = Yt({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), gs = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), vs = (
  /** @class */
  function(e) {
    gs(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function yt(e, t) {
  if (!e)
    throw new vs(t);
}
function ys(e, t) {
  var r = t.quote, n = t.hashtag;
  return yt(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Xt({
    u: e,
    quote: r,
    hashtag: n
  });
}
var Yn = Gt("facebook", ys, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Xn = Yt({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function bs(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return yt(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Xt({ url: e, mini: "true", title: r, summary: n, source: a });
}
var Gn = Gt("linkedin", bs, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
}), Kn = Yt({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function ws(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, i = a === void 0 ? [] : a, s = t.related, c = s === void 0 ? [] : s;
  return yt(e, "twitter.url"), yt(Array.isArray(i), "twitter.hashtags is not an array"), yt(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + Xt({
    url: e,
    text: r,
    via: n,
    hashtags: i.length > 0 ? i.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
var Zn = Gt("twitter", ws, function(e) {
  return {
    hashtags: e.hashtags,
    title: e.title,
    via: e.via,
    related: e.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
var xs;
function jr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xs;
  return t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var Ss = (typeof window > "u" ? "undefined" : Nr(window)) === "object" && window.Element || function() {
};
function _s(e, t, r) {
  if (!(e[t] instanceof Ss))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
o.oneOfType([o.string, o.func, _s, o.shape({
  current: o.any
})]);
var Cr = o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
}), o.arrayOf(o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
})]))]), Ts = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function Er() {
  return Er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Er.apply(this, arguments);
}
function ks(e, t) {
  if (e == null) return {};
  var r = Os(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Os(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var As = {
  /** Aria label */
  "aria-label": o.string,
  /** Pass children so this component can wrap them */
  children: o.node,
  /** Add custom class */
  className: o.string,
  /** Change existing className with a new className */
  cssModule: o.object,
  /** Add custom class to list tag */
  listClassName: o.string,
  /** Set a custom element for list tag */
  listTag: Cr,
  /** Set a custom element for this component */
  tag: Cr
};
function Ri(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, i = e.tag, s = i === void 0 ? "nav" : i, c = e.listTag, u = c === void 0 ? "ol" : c, d = e["aria-label"], f = d === void 0 ? "breadcrumb" : d, h = ks(e, Ts), m = jr(X(t), n), x = jr(X("breadcrumb", r), n);
  return /* @__PURE__ */ ce.createElement(s, Er({}, h, {
    className: m,
    "aria-label": f
  }), /* @__PURE__ */ ce.createElement(u, {
    className: x
  }, a));
}
Ri.propTypes = As;
var Ns = ["className", "cssModule", "active", "tag"];
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rr.apply(this, arguments);
}
function js(e, t) {
  if (e == null) return {};
  var r = Cs(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Cs(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Es = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: o.bool,
  /** Add custom class to the element */
  className: o.string,
  /** Change existing className with a new className */
  cssModule: o.object,
  /** Set a custom element for this component */
  tag: Cr
};
function Lr(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, i = a === void 0 ? "li" : a, s = js(e, Ns), c = jr(X(t, n ? "active" : !1, "breadcrumb-item"), r);
  return /* @__PURE__ */ ce.createElement(i, Rr({}, s, {
    className: c,
    "aria-current": n ? "page" : void 0
  }));
}
Lr.propTypes = Es;
const Rs = Ie.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`, Ls = Ie.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, Ur = ({
  type: e,
  articleUrl: t,
  publicationDate: r,
  title: n,
  body: a,
  authorEmail: i,
  authorName: s,
  authorPhone: c,
  authorTitle: u,
  breadcrumbs: d,
  calendarUrl: f,
  eventLocation: h,
  eventTime: m,
  headerImageUrl: x,
  registrationUrl: y,
  zoomUrl: w
}) => {
  const v = X("col", "col-12", {
    "col-lg-8": e === "event" && (y || w || f)
  }), O = () => y ? /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(Ge, { color: "maroon", href: y, label: "Register" }) }) : /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(Ge, { color: "maroon", href: w, label: "Attend on Zoom" }) }), k = () => /* @__PURE__ */ l.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ l.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ l.jsx("div", { className: "author highlight-gold", children: s }),
    u && /* @__PURE__ */ l.jsx("div", { className: "author-title", children: u }),
    i && /* @__PURE__ */ l.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ l.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ l.jsx("a", { href: `mailto: ${i}`, children: i })
    ] }),
    c && /* @__PURE__ */ l.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ l.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ l.jsx("a", { href: `tel: ${c}`, children: c })
    ] })
  ] }) }), N = () => /* @__PURE__ */ l.jsxs(
    Ls,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ l.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ l.jsx("div", { className: "event-author", children: s }),
          /* @__PURE__ */ l.jsx("div", { className: "event-author-title", children: u }),
          (i || c) && /* @__PURE__ */ l.jsxs("div", { className: "event-author-info", children: [
            i && /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("a", { href: `mailto: ${i}`, children: i }) }),
            c && /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("a", { href: `tel: ${c}`, children: c }) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ l.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ l.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ l.jsx(Yn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              Un,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(Zn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              Kn,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(ms, { url: i, quote: n, children: /* @__PURE__ */ l.jsx(
              as,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(Gn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              Xn,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) })
          ] })
        ] })
      ]
    }
  ), j = () => /* @__PURE__ */ l.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ l.jsxs("h4", { children: [
      /* @__PURE__ */ l.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: je(h) }),
    y && w && /* @__PURE__ */ l.jsx("a", { href: w, children: "Attend on Zoom" })
  ] }), b = (H) => /* @__PURE__ */ l.jsx(
    Lr,
    {
      active: H.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ l.jsx(Lr, { tag: "a", href: H.url, children: H.title })
    },
    H.title
  );
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    x && e !== "event" && /* @__PURE__ */ l.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${x})`
        }
      }
    ),
    /* @__PURE__ */ l.jsxs(Rs, { className: `container ${e}-container wrapper-container`, children: [
      d && /* @__PURE__ */ l.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ l.jsx("div", { className: "col col-12", children: /* @__PURE__ */ l.jsx(Ri, { listClassName: "breadcrumb", children: d.map((H) => b(H)) }) }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ l.jsx("div", { className: v, children: /* @__PURE__ */ l.jsx("h2", { "data-testid": "title", children: n }) }),
        e === "event" && /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (y || w) && O(),
          f && /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(
            Ge,
            {
              color: "gray",
              size: "small",
              href: f,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      e === "event" ? /* @__PURE__ */ l.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        m && /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ l.jsxs("h4", { children: [
            /* @__PURE__ */ l.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              dangerouslySetInnerHTML: je(m)
            }
          )
        ] }),
        (y && w || h) && j()
      ] }) : /* @__PURE__ */ l.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ l.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ l.jsx(Yn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            Un,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ l.jsx(Zn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            Kn,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ l.jsx(Gn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            Xn,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        r && /* @__PURE__ */ l.jsx("i", { className: "news-date", children: r })
      ] }) }),
      /* @__PURE__ */ l.jsx("div", { className: "row", children: /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: je(a),
          "data-testid": "body"
        }
      ) }),
      e === "news" && k(),
      e === "event" && N()
    ] })
  ] });
};
Ur.propTypes = {
  /**
   * Type of article
   */
  type: o.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: o.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: o.string.isRequired,
  /**
   * Title
   */
  title: o.string.isRequired,
  /**
   * Body content for the article
   */
  body: o.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: o.string,
  /**
   * Article author full name
   */
  authorName: o.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: o.string,
  /**
   * Article author title
   */
  authorTitle: o.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: o.arrayOf(
    o.shape({
      title: o.string,
      url: o.string,
      active: o.bool
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: o.string,
  /**
   * Article image
   */
  headerImageUrl: o.string,
  /**
   * Event location
   */
  eventLocation: o.string,
  /**
   * Event time
   */
  eventTime: o.string,
  /**
   * URL for a registation button
   */
  registrationUrl: o.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: o.string
};
Ur.defaultProps = {
  type: "news",
  authorEmail: void 0,
  authorPhone: void 0,
  authorTitle: void 0,
  breadcrumbs: void 0,
  calendarUrl: void 0,
  headerImageUrl: void 0,
  eventLocation: void 0,
  eventTime: void 0,
  registrationUrl: void 0,
  zoomUrl: void 0
};
const Is = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Yr = ({
  color: e,
  icon: t,
  innerRef: r,
  onClick: n,
  size: a,
  cardTitle: i
}) => {
  const s = (c) => {
    he({ ...Is, text: c, section: i }), n == null || n();
  };
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      type: "button",
      className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"}`,
      ref: r,
      onClick: () => s(`${t == null ? void 0 : t[1]} icon`),
      "aria-label": "Close",
      children: /* @__PURE__ */ l.jsx("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` })
    }
  );
};
Yr.propTypes = {
  /**
    Color the button based on the background color
  */
  color: o.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func,
  /**
   * Card title
   */
  cardTitle: o.string,
  /**
    Button size
  */
  size: o.oneOf(["large", "small"])
};
Yr.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const Ps = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Kt = ({
  label: e,
  cardTitle: t,
  ariaLabel: r,
  color: n,
  disabled: a,
  element: i,
  innerRef: s,
  href: c,
  onClick: u,
  ...d
}) => {
  const f = X("btn", "btn-tag", {
    "btn-tag-alt-white": n === "white",
    "btn-tag-alt-gray": n === "gray",
    "btn-tag-alt-dark": n === "dark",
    disabled: a
  });
  let h = i;
  c && i === "button" && (h = "a");
  const m = (x) => {
    he({ ...Ps, text: x, section: t }), u == null || u();
  };
  return (
    // @ts-ignore
    /* @__PURE__ */ l.jsx(
      h,
      {
        type: h === "button" && u ? "button" : void 0,
        ...d,
        className: f,
        href: c,
        ref: s,
        onClick: () => m(e),
        "aria-label": r,
        children: e
      }
    )
  );
};
Kt.propTypes = {
  /**
    Button tag label
  */
  label: o.string,
  /**
   * Card title
   */
  cardTitle: o.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Button background color
  */
  color: o.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func
};
Kt.defaultProps = {
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
const ut = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: i,
  fetchPriority: s = "auto",
  width: c,
  height: u,
  cardLink: d,
  title: f,
  caption: h,
  captionTitle: m,
  border: x,
  dropShadow: y
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: s,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Rt(r) },
    ...i && { "data-testid": i },
    ...c && { width: c },
    ...u && { height: u }
  }, v = X("uds-img", {
    borderless: !x,
    "uds-img-drop-shadow": y
  }), O = (N) => {
    const j = N ? `${w.className} ${N}` : w.className;
    return d ? /* @__PURE__ */ l.jsxs("a", { href: d, children: [
      /* @__PURE__ */ l.jsx("img", { ...w, className: j }),
      /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: f })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ l.jsx("img", { ...w, className: j })
    );
  }, k = () => /* @__PURE__ */ l.jsx("div", { className: v, children: /* @__PURE__ */ l.jsxs("figure", { className: "figure uds-figure", children: [
    O(),
    h && /* @__PURE__ */ l.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      m && /* @__PURE__ */ l.jsx("h3", { children: m }),
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: je(h)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: h ? k() : O(v) });
};
ut.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: o.string.isRequired,
  /**
   * Image alt text
   */
  alt: o.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: o.arrayOf(o.string),
  /**
   * Image loading mode
   */
  loading: o.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: o.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: o.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: o.string,
  /**
   * Height of the image
   */
  height: o.string,
  dataTestId: o.string,
  cardLink: o.string,
  title: o.string,
  caption: o.string,
  captionTitle: o.string,
  border: o.bool,
  dropShadow: o.bool
};
const Ms = Ie.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ds = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), $s = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ds(e) ? `mailto:${e}` : e, Hs = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, qe = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: s,
  body: c,
  eventFormat: u,
  eventLocation: d,
  eventTime: f,
  buttons: h,
  linkLabel: m,
  linkUrl: x,
  tags: y,
  showBorders: w,
  cardLink: v
}) => /* @__PURE__ */ l.jsx(
  Xr,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: i,
    icon: s,
    body: c,
    eventFormat: u,
    eventLocation: d,
    eventTime: f,
    buttons: h,
    linkLabel: m,
    linkUrl: x,
    tags: y,
    showBorders: w,
    cardLink: v
  }
);
qe.propTypes = {
  /**
   * Type of card
   */
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: o.bool,
  /**
   * Card title
   */
  title: o.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * Card body content
   */
  body: o.string,
  /**
   * Event info format
   */
  eventFormat: o.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: o.string,
  /**
   * Event start time
   */
  eventTime: o.string,
  /**
   * Card header image
   */
  image: o.string,
  /**
   * Card header image alt text
   */
  imageAltText: o.string,
  /**
   * Buttons
   */
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  /**
   * Tags
   */
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: o.bool,
  /**
   * Card link
   */
  cardLink: o.string
};
qe.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: void 0,
  eventFormat: "stack",
  eventTime: void 0,
  eventLocation: void 0,
  icon: void 0,
  image: void 0,
  imageAltText: void 0,
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Xr = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: s,
  body: c,
  eventFormat: u,
  eventLocation: d,
  eventTime: f,
  buttons: h,
  linkLabel: m,
  linkUrl: x,
  tags: y,
  showBorders: w,
  cardLink: v
}) => {
  const O = X("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(Ms, { className: O, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ l.jsx(
      ut,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: v,
        title: i
      }
    ),
    !n && s && /* @__PURE__ */ l.jsx(
      "i",
      {
        className: `${s == null ? void 0 : s[0]} fa-${s == null ? void 0 : s[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ l.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ l.jsx(
      Wt,
      {
        type: e,
        body: c,
        eventFormat: u,
        eventLocation: d,
        eventTime: f,
        title: i,
        buttons: h,
        linkLabel: m,
        linkUrl: x,
        tags: y,
        cardLink: v
      }
    ) }) : /* @__PURE__ */ l.jsx(
      Wt,
      {
        type: e,
        body: c,
        eventFormat: u,
        eventLocation: d,
        eventTime: f,
        title: i,
        buttons: h,
        linkLabel: m,
        linkUrl: x,
        tags: y,
        cardLink: v
      }
    )
  ] }) });
};
Xr.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: o.bool,
  title: o.string.isRequired,
  icon: o.arrayOf(o.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  image: o.string,
  imageAltText: o.string,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  showBorders: o.bool,
  cardLink: o.string
};
Xr.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: void 0,
  image: "",
  imageAltText: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Wt = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: i,
  buttons: s,
  linkLabel: c,
  linkUrl: u,
  tags: d,
  cardLink: f
}) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  !!i && /* @__PURE__ */ l.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: f ? /* @__PURE__ */ l.jsx("a", { href: f, children: i }) : i }) }),
  !!t && /* @__PURE__ */ l.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: je(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ l.jsx(
    Gr,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  s && /* @__PURE__ */ l.jsx("div", { className: "card-buttons", children: s.map((h) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ l.jsx(
        Ge,
        {
          ariaLabel: h.ariaLabel,
          color: h.color,
          icon: h.icon,
          href: h.href,
          label: h.label,
          onClick: h.onClick,
          size: h.size,
          target: h.target,
          cardTitle: i
        }
      )
    },
    `${h.label}-${h.href}`
  )) }),
  u && c && /* @__PURE__ */ l.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ l.jsx(
    "a",
    {
      href: $s(u),
      onClick: () => he({
        ...Hs,
        section: i,
        text: c
      }),
      children: c
    }
  ) }),
  d && /* @__PURE__ */ l.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((h) => (
    // @ts-ignore
    /* @__PURE__ */ l.jsx(
      Kt,
      {
        ariaLabel: h.ariaLabel,
        color: h.color,
        href: h.href,
        label: h.label,
        onClick: h.onClick,
        cardTitle: i
      },
      `${h.label}-${h.href}`
    )
  )) })
] });
Wt.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  title: o.string.isRequired,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  cardLink: o.string
};
Wt.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0
};
const Gr = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ l.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: je(t) })
  ] }),
  r && /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: je(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  t && /* @__PURE__ */ l.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: je(t) })
  ] }) }),
  r && /* @__PURE__ */ l.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ l.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ l.jsx("span", { children: /* @__PURE__ */ l.jsx(
      "div",
      {
        dangerouslySetInnerHTML: je(r)
      }
    ) })
  ] }) })
] });
Gr.propTypes = {
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string
};
Gr.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const Bs = Ie.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 3px;
    border: 3px solid #1b1b1b;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1b1b1b transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, zs = () => /* @__PURE__ */ l.jsxs(Bs, { children: [
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {})
] }), Fs = Ie.section``, Ws = da(null), qs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: a,
  dataTransformer: i = (u) => u,
  dataFilter: s = (u) => u,
  maxItems: c
}) => {
  const [{ data: u, loading: d, error: f }, h] = wa(), [m, x] = ge([]), y = { ...e.dataSource, ...t };
  return _e(() => {
    h(y == null ? void 0 : y.url);
  }, [y == null ? void 0 : y.url]), _e(() => {
    const w = u == null ? void 0 : u.nodes.map(i), v = w == null ? void 0 : w.filter(
      (O) => s(O, t == null ? void 0 : t.filters)
    );
    x(c ? v == null ? void 0 : v.slice(0, c) : v);
  }, [u]), // Init the context to be used on its childrens
  /* @__PURE__ */ l.jsx(Ws.Provider, { value: { feeds: m }, children: /* @__PURE__ */ l.jsxs(Fs, { children: [
    n,
    f ? /* @__PURE__ */ l.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      d && !(m != null && m.length) && /* @__PURE__ */ l.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ l.jsx(zs, {}) }),
      m != null && m.length ? a : !d && /* @__PURE__ */ l.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
qs.propTypes = {
  renderHeader: o.element,
  renderBody: o.element,
  maxItems: o.number,
  dataTransformer: o.func,
  dataFilter: o.func,
  noFeedText: o.string
};
const Li = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), Ii = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string
}), gc = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string,
  size: o.string
}), Vs = o.shape({
  url: o.string,
  filters: o.string
}), Us = o.shape({
  header: Li,
  ctaButton: Ii,
  dataSource: Vs,
  maxItems: o.number
}), Ys = Ie.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Xs = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ l.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ l.jsx(Ys, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ l.jsx(
          "a",
          {
            className: `btn btn-${a.color}`,
            href: a.url,
            onClick: () => he({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: a.text
            }),
            children: a.text
          }
        ) })
      ]
    }
  );
};
Xs.propTypes = {
  defaultProps: Us,
  header: Li,
  ctaButton: Ii
};
const Gs = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ l.jsx("div", { className: "col", children: e }) });
Gs.propTypes = {
  children: o.element
};
const Ks = Ie.img`
  width: 100%;
`;
function Zs({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ l.jsx("div", { children: "TODO: to be implemented" });
}
function Qs({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: a
}) {
  const i = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: ""
  }, s = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, c = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: X("uds-hero", {
        [i[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ l.jsx(
          Ks,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ l.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: X({
              [c[t.color]]: t.color,
              [s[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ l.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: X({
              [c[r.color]]: r.color,
              [s[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: X("content", {
              [c[a]]: a
            }),
            children: n.map((u, d) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ l.jsx("p", { children: u.text }, `content-${d}`)
            ))
          }
        )
      ]
    }
  );
}
const Pi = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => Qs(e),
    "story-hero": () => Zs(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Pi.propTypes = {
  type: o.oneOf(["heading-hero", "story-hero"]),
  image: eo,
  title: gr,
  subTitle: gr,
  contents: o.arrayOf(gr),
  contentsColor: o.string
};
const Fe = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: a,
  onClick: i,
  ellipses: s,
  ariaLabel: c,
  children: u,
  ariaDisabled: d
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    className: X("page-item", {
      disabled: r,
      active: a,
      elipses: s
    }),
    children: t ? /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        "aria-label": c,
        className: X("page-link", {
          "page-link-icon": n
        }),
        onClick: i,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": d,
        children: [
          u,
          a && /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ l.jsx("span", { className: "page-link", "data-testid": "page-link", children: u })
  }
);
Fe.propTypes = {
  isClickeable: o.bool,
  disabled: o.bool,
  pageLinkIcon: o.bool,
  selectedPage: o.bool,
  dataId: o.string,
  onClick: o.func,
  children: o.node,
  ellipses: o.bool,
  ariaLabel: o.string,
  ariaDisabled: o.bool
};
Fe.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const Js = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Kr = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: a
}) => {
  const [i, s] = ge(null);
  _e(() => {
    s(r);
  }, [r]);
  const c = (f) => {
    he({ ...Js, text: `page ${f}` });
  }, u = (f, h) => {
    const x = {
      first: 1,
      prev: i === 1 ? 1 : i - 1,
      next: i === n ? n : i + 1,
      last: n
    }[h] ?? h;
    s(x), c(x), a == null || a(f, x);
  }, d = () => {
    const f = Tn(
      i === n - 1,
      2,
      i === n ? 3 : 1
    ), h = Tn(
      i === 1,
      3,
      i === 2 ? 2 : 1
    ), m = Rn(
      i - f,
      i,
      n
    ), x = Rn(
      i,
      i + 1 + h,
      n
    ), y = [...m, ...x];
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      y[0] !== 1 && /* @__PURE__ */ l.jsx(
        Fe,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: i === 1,
          onClick: (w) => u(w, "first"),
          children: "1"
        }
      ),
      y[0] > 2 && /* @__PURE__ */ l.jsx(Fe, { ellipses: !0, children: "..." }),
      y.map((w) => /* @__PURE__ */ l.jsx(
        Fe,
        {
          ariaLabel: `Page ${w} of ${n}`,
          isClickeable: !0,
          selectedPage: i === w,
          onClick: (v) => u(v, w),
          children: w
        },
        w
      )),
      y[y.length - 1] < n - 1 && /* @__PURE__ */ l.jsx(Fe, { ellipses: !0, children: "..." }),
      y[y.length - 1] !== n && /* @__PURE__ */ l.jsx(
        Fe,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: i === n,
          onClick: (w) => u(w, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ l.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ l.jsxs(
    "ul",
    {
      className: X(
        "pagination",
        "justify-content-center",
        "pt-2",
        "pb-2",
        {
          border: e === "bordered",
          "uds-bg-gray1": t === "gray1",
          "uds-bg-gray": t === "gray2",
          "uds-bg-dark": t === "gray7"
        }
      ),
      children: [
        /* @__PURE__ */ l.jsx(
          Fe,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: i === 1,
            pageLinkIcon: !0,
            onClick: (f) => u(f, "prev"),
            ariaDisabled: i === 1,
            ariaLabel: "Previous Page"
          }
        ),
        d(),
        /* @__PURE__ */ l.jsx(
          Fe,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: i === n,
            disabled: i === n,
            pageLinkIcon: !0,
            onClick: (f) => u(f, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Kr.propTypes = {
  /**
   * Type of pagination
   */
  type: o.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: o.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: o.number,
  /**
   * Total number of pages
   */
  totalPages: o.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: o.func.isRequired
};
Kr.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
const Qn = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Jn = {
  OPEN: "open",
  CLOSE: "close"
}, el = {
  LARGE: "large",
  SMALL: "small"
}, it = (e) => e === el.SMALL, Mi = ({ size: e, image: t, imageAlt: r }) => it(e) ? /* @__PURE__ */ l.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ l.jsx(ut, { src: t, alt: r, fetchPriority: "high" }) }) : /* @__PURE__ */ l.jsx(ut, { src: t, alt: r, fetchPriority: "high" });
Mi.propTypes = {
  size: o.oneOf(["small", "large"]),
  image: o.string.isRequired,
  imageAlt: o.string.isRequired
};
const Di = ({ heading: e, citation: t }) => /* @__PURE__ */ l.jsxs("div", { className: "citation", children: [
  /* @__PURE__ */ l.jsx("h4", { children: e }),
  /* @__PURE__ */ l.jsxs("p", { children: [
    "— ",
    t
  ] })
] });
Di.propTypes = {
  heading: o.string.isRequired,
  citation: o.string.isRequired
};
const $i = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, i] = ge(!1), s = `info-layer-${Math.floor(Math.random() * 1e5)}`, c = (u) => {
    (u.type === "click" || u.key === "Enter" || u.key === " ") && (i(!a), he({
      ...Qn,
      text: "Expand ranking",
      action: a ? Jn.OPEN : Jn.CLOSE,
      section: r
    }));
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: X("info-layer", { active: a }),
      "data-testid": "info-layer",
      id: s,
      children: /* @__PURE__ */ l.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: X("header", {
              closed: it(e) && !a
            }),
            children: [
              it(e) && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ l.jsx("p", { dangerouslySetInnerHTML: je(t) }),
              !it(e) && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(
                "button",
                {
                  onClick: c,
                  className: "btn-expand",
                  type: "button",
                  "aria-expanded": a,
                  "aria-controls": s,
                  children: [
                    /* @__PURE__ */ l.jsx("h4", { children: r }),
                    /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              ) }),
              it(e) && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(
                "button",
                {
                  onClick: c,
                  className: "btn btn-expand",
                  type: "button",
                  "aria-expanded": a,
                  "aria-controls": s,
                  children: [
                    /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: r }),
                    /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              ) })
            ]
          }
        ),
        !it(e) && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ l.jsx("p", { dangerouslySetInnerHTML: je(t) }),
        n && /* @__PURE__ */ l.jsxs(
          "a",
          {
            href: n,
            className: "read-more",
            onClick: () => {
              he({
                ...Qn,
                section: r,
                text: "read more"
              });
            },
            children: [
              "Read more ",
              /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: r }),
              /* @__PURE__ */ l.jsx(
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
$i.propTypes = {
  imageSize: o.oneOf(["small", "large"]),
  body: o.string.isRequired,
  heading: o.string.isRequired,
  readMoreLink: o.string
};
const Hi = ({
  imageSize: e = "large",
  image: t,
  imageAlt: r,
  heading: n,
  body: a,
  readMoreLink: i = "",
  citation: s
}) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: X("card-ranking", {
      "large-image": e === "large",
      "small-image": e === "small"
    }),
    children: [
      /* @__PURE__ */ l.jsx(Mi, { size: e, image: t, imageAlt: r }),
      it(e) && /* @__PURE__ */ l.jsx(Di, { heading: n, citation: s }),
      /* @__PURE__ */ l.jsx(
        $i,
        {
          imageSize: e,
          body: a,
          heading: n,
          readMoreLink: i
        }
      )
    ]
  }
);
Hi.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: o.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: o.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: o.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: o.string.isRequired,
  /**
   * Ranking card body content
   */
  body: o.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: o.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: o.string
};
const tl = Ie.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Bi = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => /* @__PURE__ */ l.jsxs(tl, { children: [
  !e && /* @__PURE__ */ l.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: r,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ),
  !t && /* @__PURE__ */ l.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: n,
      tabIndex: -1,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  )
] });
Bi.propTypes = {
  hidePrev: o.bool,
  hideNext: o.bool,
  clickPrev: o.func.isRequired,
  clickNext: o.func.isRequired
};
const zi = ui(function(t, r) {
  const {
    id: n,
    selected: a,
    title: i,
    selectTab: s,
    leftKeyPressed: c,
    rightKeyPressed: u,
    icon: d
  } = t, f = at(null);
  fa(
    r,
    () => ({
      focus() {
        f.current.focus();
      },
      scrollIntoView() {
        var y, w, v, O, k, N, j;
        const m = ((y = f.current) == null ? void 0 : y.offsetWidth) / 2 + f.current.offsetLeft, x = ((v = (w = f.current) == null ? void 0 : w.offsetParent) == null ? void 0 : v.scrollLeft) + ((k = (O = f.current) == null ? void 0 : O.offsetParent) == null ? void 0 : k.offsetWidth) / 2;
        (j = (N = f.current) == null ? void 0 : N.offsetParent) == null || j.scrollBy({
          left: m - x
        });
      }
    }),
    []
  );
  const h = (m) => {
    m.keyCode === 37 ? (m.preventDefault(), c()) : m.keyCode === 39 && (m.preventDefault(), u());
  };
  return /* @__PURE__ */ l.jsxs(
    "a",
    {
      ref: f,
      className: `nav-item nav-link ${a ? "active" : ""}`,
      id: n,
      href: `#nav-${n}`,
      role: "tab",
      "aria-controls": `nav-${n}`,
      "aria-selected": a,
      onClick: (m) => s(m, n, i),
      onKeyDown: h,
      tabIndex: a ? "" : "-1",
      children: [
        i,
        " ",
        d && /* @__PURE__ */ l.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` })
      ]
    }
  );
});
zi.propTypes = {
  id: o.string.isRequired,
  selected: o.bool.isRequired,
  title: o.string.isRequired,
  selectTab: o.func.isRequired,
  leftKeyPressed: o.func.isRequired,
  rightKeyPressed: o.func.isRequired,
  icon: o.arrayOf(o.string)
};
function rl() {
  const e = at({}), t = pa(
    (r) => (n) => {
      e.current[r] = n;
    },
    []
  );
  return [e, t];
}
const nl = ({ id: e, bgColor: t, selected: r, children: n }) => r && /* @__PURE__ */ l.jsx(
  "div",
  {
    className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
nl.propTypes = {
  id: o.string.isRequired,
  bgColor: o.string,
  selected: o.bool,
  children: o.oneOfType([o.array, o.element])
};
const Fi = ({
  initialTab: e = "",
  children: t,
  bgColor: r = "",
  onTabChange: n = (a) => {
  }
}) => {
  const a = ce.Children.toArray(t), i = at(!1), [s, c] = ge(
    e && e !== "null" ? e : a[0].props.id
  ), u = at(null), [d, f] = rl(), h = (I) => {
    var q;
    n(I), (q = d.current[I]) == null || q.focus(), c(I);
  }, [m, x] = ge(0), [y, w] = ge();
  _e(() => {
    const I = () => {
      x(u.current.scrollLeft);
    };
    return u.current.addEventListener("scroll", I), I(), () => {
      u.current && u.current.removeEventListener("scroll", I);
    };
  }, [y]), _e(() => {
    const I = () => {
      w(
        u.current.scrollWidth - u.current.offsetWidth
      );
    };
    return window.addEventListener("resize", I), I(), () => {
      u.current && window.removeEventListener("resize", I);
    };
  }, []), _e(() => {
    var I;
    (I = d.current[s]) == null || I.scrollIntoView();
  }, [s]), _e(() => {
    i.current && e && e !== "null" && s !== e && c(e);
  }, [e]), _e(() => {
    i.current = !0;
  }, []);
  const v = (I) => {
    he({
      event: "select",
      action: "click",
      name: "onclick",
      type: "carousel",
      region: "main content",
      text: I
    });
  }, O = (I) => {
    he({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      text: I
    });
  }, k = a.map((I) => ce.cloneElement(I, {
    bgColor: r,
    selected: s === I.props.id
  })), N = (I) => {
    const q = u.current, ne = q.scrollWidth - q.clientWidth;
    let ye = q.scrollLeft + 200 * I;
    ye = Math.max(0, Math.min(ne, ye)), q.scrollTo({
      left: ye,
      behavior: "smooth"
    });
  }, j = (I, q, ne) => {
    O(ne), I.preventDefault(), h(q);
  }, b = (I = !0) => {
    const q = a.length, ne = I ? 1 : -1, ke = a.findIndex((oe) => oe.props.id === s), ye = a[(q + ke + ne) % q].props.id;
    h(ye);
  };
  let H = "uds-tabbed-panels";
  return r === "bg-dark" && (H += " uds-tabbed-panels-dark"), /* @__PURE__ */ l.jsxs("div", { className: r, children: [
    /* @__PURE__ */ l.jsxs("nav", { className: H, children: [
      /* @__PURE__ */ l.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: u, children: a.map((I, q) => /* @__PURE__ */ l.jsx(
        zi,
        {
          ref: f(I.props.id),
          id: I.props.id,
          title: I.props.title,
          selected: s === I.props.id,
          selectTab: j,
          leftKeyPressed: () => b(!1),
          rightKeyPressed: () => b(),
          icon: I.props.icon,
          index: q
        },
        I.props.id
      )) }),
      /* @__PURE__ */ l.jsx(
        Bi,
        {
          hidePrev: m <= 0,
          hideNext: m >= y,
          clickPrev: () => {
            N(-1), v("left chevron");
          },
          clickNext: () => {
            N(1), v("right chevron");
          }
        }
      )
    ] }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: k
      }
    )
  ] });
};
Fi.propTypes = {
  initialTab: o.string,
  children: o.arrayOf(o.element).isRequired,
  bgColor: o.string,
  onTabChange: o.func
};
const Zr = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, i;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Rt(n.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ l.jsx(
          ut,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ l.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ l.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ l.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          r.title && /* @__PURE__ */ l.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ l.jsx("span", { className: Rt(n.titleCssClass), children: r.title }) }),
          r.content && /* @__PURE__ */ l.jsx(
            "p",
            {
              className: Rt(n.contentCssClass),
              "data-testid": "testimonial-content",
              children: r.content
            }
          ),
          (!!((a = r.cite) != null && a.name) || !!((i = r.cite) != null && i.description)) && /* @__PURE__ */ l.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ l.jsx("cite", { className: "name", children: r.cite.name }),
            r.cite && /* @__PURE__ */ l.jsx("cite", { className: "description", children: r.cite.description })
          ] })
        ] })
      ]
    }
  );
};
Zr.propTypes = {
  quote: o.shape({
    title: o.string,
    content: o.string,
    cite: o.shape({
      name: o.string,
      description: o.string
    })
  }).isRequired,
  imageSource: o.string,
  imageAltText: o.string,
  itemStyle: o.shape({
    containerCssClass: o.arrayOf(o.string),
    titleCssClass: o.arrayOf(o.string),
    contentCssClass: o.arrayOf(o.string)
  })
};
const il = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, al = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: a,
  controls: i = !0
}) => {
  const s = at(null), c = () => {
    he({ ...il, section: n });
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: X(`uds-video-container ${a}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ l.jsxs(
          "video",
          {
            ref: s,
            title: n,
            onClick: c,
            playsInline: !0,
            controls: i || !0,
            children: [
              /* @__PURE__ */ l.jsx("source", { src: e }),
              /* @__PURE__ */ l.jsx(
                "track",
                {
                  src: t,
                  kind: "captions",
                  srcLang: "en",
                  label: "english_captions"
                }
              )
            ]
          }
        ) }),
        r && /* @__PURE__ */ l.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ l.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, ol = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: X(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ l.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ l.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ l.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ l.jsx("figcaption", { children: t }) })
    ]
  }
), Wi = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: a = "",
    caption: i,
    className: s,
    controls: c = !0
  } = e;
  return t === "youtube" ? ol({ url: r, title: a, caption: i, className: s }) : al({
    url: r,
    vttUrl: n,
    title: a,
    caption: i,
    className: s,
    controls: c
  });
};
Wi.propTypes = {
  type: o.oneOf(["video", "youtube"]),
  url: o.string,
  vttUrl: o.string,
  title: o.string,
  className: o.string,
  caption: o.string,
  controls: o.bool
};
const sl = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Qr = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ l.jsx(
    "div",
    {
      role: "group",
      className: "glide__bullets",
      "data-glide-el": "controls[nav]",
      "data-testid": "bullets-container",
      onClick: (t) => t.stopPropagation(),
      onKeyDown: (t) => t.stopPropagation(),
      children: e
    }
  )
);
Qr.propTypes = {
  children: o.oneOfType([
    o.element,
    o.arrayOf(o.element)
  ]).isRequired
};
const qi = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`,
          onClick: () => he({ ...sl })
        },
        `bullet-${r}`
      )
    );
  return /* @__PURE__ */ l.jsx(Qr, { children: t });
};
qi.propTypes = {
  buttonCount: o.number.isRequired
};
const Vi = ({ imageItems: e, onItemClick: t = () => null }) => {
  const r = (a, i) => {
    const { ariaSelected: s } = a.currentTarget.dataset;
    a.currentTarget.dataset.ariaSelected = String(!s), a.stopPropagation(), t(i);
  }, n = e.map((a, i) => /* @__PURE__ */ l.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${i}`,
      "aria-label": `Slide view ${i + 1}`,
      "aria-selected": "false",
      onClick: (s) => r(s, i),
      onKeyDown: (s) => r(s, i),
      children: /* @__PURE__ */ l.jsx(
        "img",
        {
          src: a,
          alt: `Slide ${i + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${i}`
  ));
  return /* @__PURE__ */ l.jsx(Qr, { children: n });
};
Vi.propTypes = {
  imageItems: o.arrayOf(o.string).isRequired,
  onItemClick: o.func
};
const Jr = ({ onClick: e = () => null }) => /* @__PURE__ */ l.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
Jr.propTypes = {
  onClick: o.func
};
const en = ({ onClick: e = () => null }) => /* @__PURE__ */ l.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ l.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
en.propTypes = {
  onClick: o.func
};
const ei = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, tn = ({ children: e = null }) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
tn.propTypes = {
  children: o.arrayOf(o.element)
};
const Ui = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ l.jsxs(tn, { children: [
  /* @__PURE__ */ l.jsx(
    en,
    {
      onClick: () => {
        e(), he({ ...ei, text: "left chevron" });
      }
    }
  ),
  t,
  /* @__PURE__ */ l.jsx(
    Jr,
    {
      onClick: () => {
        e(), he({ ...ei, text: "right chevron" });
      }
    }
  )
] });
Ui.propTypes = {
  children: o.element,
  onClick: o.func
};
const Yi = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ l.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ l.jsx("ul", { className: "glide__slides", children: t });
};
Yi.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: o.arrayOf(o.object)
};
function ti(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ti(Object(r), !0).forEach(function(n) {
      cl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ti(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dt = function(t) {
    return typeof t;
  } : Dt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dt(e);
}
function Zt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Qt(e, t, r) {
  return t && ll(e.prototype, t), e;
}
function cl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ul(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Ir(e, t);
}
function dt(e) {
  return dt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, dt(e);
}
function Ir(e, t) {
  return Ir = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Ir(e, t);
}
function dl() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pl(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fl(e);
}
function hl(e) {
  var t = dl();
  return function() {
    var n = dt(e), a;
    if (t) {
      var i = dt(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return pl(this, a);
  };
}
function ml(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = dt(e), e !== null); )
    ;
  return e;
}
function $t() {
  return typeof Reflect < "u" && Reflect.get ? $t = Reflect.get : $t = function(t, r, n) {
    var a = ml(t, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
    }
  }, $t.apply(this, arguments);
}
var gl = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: "slider",
  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,
  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,
  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,
  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,
  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: !1,
  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: !0,
  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: !0,
  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: !1,
  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,
  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,
  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: "",
  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,
  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,
  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,
  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: !0,
  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,
  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: !0,
  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,
  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: "ltr",
  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,
  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,
  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},
  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: "glide--swipeable",
    dragging: "glide--dragging",
    direction: {
      ltr: "glide--ltr",
      rtl: "glide--rtl"
    },
    type: {
      slider: "glide--slider",
      carousel: "glide--carousel"
    },
    slide: {
      clone: "glide__slide--clone",
      active: "glide__slide--active"
    },
    arrow: {
      disabled: "glide__arrow--disabled"
    },
    nav: {
      active: "glide__bullet--active"
    }
  }
};
function Ue(e) {
  console.error("[Glide warn]: ".concat(e));
}
function fe(e) {
  return parseInt(e);
}
function vl(e) {
  return parseFloat(e);
}
function Pr(e) {
  return typeof e == "string";
}
function ft(e) {
  var t = Dt(e);
  return t === "function" || t === "object" && !!e;
}
function qt(e) {
  return typeof e == "function";
}
function Xi(e) {
  return typeof e > "u";
}
function Mr(e) {
  return e.constructor === Array;
}
function yl(e, t, r) {
  var n = {};
  for (var a in t)
    qt(t[a]) ? n[a] = t[a](e, n, r) : Ue("Extension must be a function");
  for (var i in n)
    qt(n[i].mount) && n[i].mount();
  return n;
}
function Q(e, t, r) {
  Object.defineProperty(e, t, r);
}
function bl(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Dr(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = ri(ri({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var wl = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zt(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Qt(e, [{
    key: "on",
    value: function(r, n) {
      if (Mr(r)) {
        for (var a = 0; a < r.length; a++)
          this.on(r[a], n);
        return;
      }
      this.hop.call(this.events, r) || (this.events[r] = []);
      var i = this.events[r].push(n) - 1;
      return {
        remove: function() {
          delete this.events[r][i];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */
  }, {
    key: "emit",
    value: function(r, n) {
      if (Mr(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(i) {
        i(n || {});
      });
    }
  }]), e;
}(), xl = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Zt(this, e), this._c = {}, this._t = [], this._e = new wl(), this.disabled = !1, this.selector = t, this.settings = Dr(gl, r), this.index = this.settings.startAt;
  }
  return Qt(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), ft(r) ? this._c = yl(this, r, this._e) : Ue("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */
  }, {
    key: "mutate",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return Mr(r) ? this._t = r : Ue("You need to provide a array on `mutate()`"), this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */
  }, {
    key: "update",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = Dr(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */
  }, {
    key: "go",
    value: function(r) {
      return this._c.Run.make(r), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(r) {
      return this._c.Transition.disable(), this._c.Move.make(r), this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */
  }, {
    key: "destroy",
    value: function() {
      return this._e.emit("destroy"), this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */
  }, {
    key: "play",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return r && (this.settings.autoplay = r), this._e.emit("play"), this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */
  }, {
    key: "pause",
    value: function() {
      return this._e.emit("pause"), this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */
  }, {
    key: "disable",
    value: function() {
      return this.disabled = !0, this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */
  }, {
    key: "enable",
    value: function() {
      return this.disabled = !1, this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */
  }, {
    key: "on",
    value: function(r, n) {
      return this._e.on(r, n), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(r) {
      return this.settings.type === r;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */
  }, {
    key: "settings",
    get: function() {
      return this._o;
    },
    set: function(r) {
      ft(r) ? this._o = r : Ue("Options must be an `object` instance.");
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */
  }, {
    key: "index",
    get: function() {
      return this._i;
    },
    set: function(r) {
      this._i = fe(r);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */
  }, {
    key: "type",
    get: function() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */
  }, {
    key: "disabled",
    get: function() {
      return this._d;
    },
    set: function(r) {
      this._d = !!r;
    }
  }]), e;
}();
function Sl(e, t, r) {
  var n = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function() {
      this._o = !1;
    },
    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function(d) {
      var f = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = d, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        f.isStart() && r.emit("run.start", f.move), f.isEnd() && r.emit("run.end", f.move), f.isOffset() && (f._o = !1, r.emit("run.offset", f.move)), r.emit("run.after", f.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var d = this.move, f = this.length, h = d.steps, m = d.direction, x = 1;
      if (m === "=") {
        if (e.settings.bound && fe(h) > f) {
          e.index = f;
          return;
        }
        e.index = h;
        return;
      }
      if (m === ">" && h === ">") {
        e.index = f;
        return;
      }
      if (m === "<" && h === "<") {
        e.index = 0;
        return;
      }
      if (m === "|" && (x = e.settings.perView || 1), m === ">" || m === "|" && h === ">") {
        var y = a(x);
        y > f && (this._o = !0), e.index = i(y, x);
        return;
      }
      if (m === "<" || m === "|" && h === "<") {
        var w = s(x);
        w < 0 && (this._o = !0), e.index = c(w, x);
        return;
      }
      Ue("Invalid direction pattern [".concat(m).concat(h, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return e.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return e.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return d ? this._o ? d === "|>" ? this.move.direction === "|" && this.move.steps === ">" : d === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === d : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return e.isType("slider") && e.settings.focusAt !== "center" && e.settings.bound;
    }
  };
  function a(u) {
    var d = e.index;
    return e.isType("carousel") ? d + u : d + (u - d % u);
  }
  function i(u, d) {
    var f = n.length;
    return u <= f ? u : e.isType("carousel") ? u - (f + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? f : 0 : n.isBound() ? f : Math.floor(f / d) * d;
  }
  function s(u) {
    var d = e.index;
    if (e.isType("carousel"))
      return d - u;
    var f = Math.ceil(d / u);
    return (f - 1) * u;
  }
  function c(u, d) {
    var f = n.length;
    return u >= 0 ? u : e.isType("carousel") ? u + (f + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? f : Math.floor(f / d) * d : 0;
  }
  return Q(n, "move", {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function() {
      return this._m;
    },
    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function(d) {
      var f = d.substr(1);
      this._m = {
        direction: d.substr(0, 1),
        steps: f ? fe(f) ? fe(f) : f : 0
      };
    }
  }), Q(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.settings, f = t.Html.slides.length;
      return this.isBound() ? f - 1 - (fe(d.perView) - 1) + fe(d.focusAt) : f - 1;
    }
  }), Q(n, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), n;
}
function ni() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Jt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, s, c = 0, u = function() {
    c = r.leading === !1 ? 0 : ni(), n = null, s = e.apply(a, i), n || (a = i = null);
  }, d = function() {
    var h = ni();
    !c && r.leading === !1 && (c = h);
    var m = t - (h - c);
    return a = this, i = arguments, m <= 0 || m > t ? (n && (clearTimeout(n), n = null), c = h, s = e.apply(a, i), n || (a = i = null)) : !n && r.trailing !== !1 && (n = setTimeout(u, m)), s;
  };
  return d.cancel = function() {
    clearTimeout(n), c = 0, n = a = i = null;
  }, d;
}
var Ct = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function _l(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var s = 0, c = i.length; s < c; s++) {
        var u = i[s].style, d = t.Direction.value;
        s !== 0 ? u[Ct[d][0]] = "".concat(this.value / 2, "px") : u[Ct[d][0]] = "", s !== i.length - 1 ? u[Ct[d][1]] = "".concat(this.value / 2, "px") : u[Ct[d][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var s = 0, c = i.length; s < c; s++) {
        var u = i[s].style;
        u.marginLeft = "", u.marginRight = "";
      }
    }
  };
  return Q(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return fe(e.settings.gap);
    }
  }), Q(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), Q(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var i = e.settings.perView;
      return n.value * (i - 1) / i;
    }
  }), r.on(["build.after", "update"], Jt(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function Gi(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function $r(e) {
  return Array.prototype.slice.call(e);
}
var Tl = '[data-glide-el="track"]';
function kl(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Tl), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = $r(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Q(n, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return n._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(i) {
      Pr(i) && (i = document.querySelector(i)), i !== null ? n._r = i : Ue("Root element must be a existing Html node");
    }
  }), Q(n, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return n._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(i) {
      n._t = i;
    }
  }), Q(n, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return n.track.children[0];
    }
  }), r.on("update", function() {
    n.collectSlides();
  }), n;
}
function Ol(e, t, r) {
  var n = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return Q(n, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(i) {
      ft(i) ? (i.before = fe(i.before), i.after = fe(i.after)) : i = fe(i), n._v = i;
    }
  }), Q(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, s = e.settings.perView;
      return ft(i) ? i.before / s + i.after / s : i * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Al(e, t, r) {
  var n = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._o = 0;
    },
    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function() {
      var i = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
        });
      });
    }
  };
  return Q(n, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return n._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(i) {
      n._o = Xi(i) ? 0 : fe(i);
    }
  }), Q(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Q(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var i = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + i : s - i;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Nl(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var i = "".concat(this.slideWidth, "px"), s = t.Html.slides, c = 0; c < s.length; c++)
        s[c].style.width = i;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var i = t.Html.slides, s = 0; s < i.length; s++)
        i[s].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Q(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Q(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Q(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Q(n, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), r.on(["build.before", "resize", "update"], function() {
    n.setupSlides(), n.setupWrapper();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function jl(e, t, r) {
  var n = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      r.emit("build.before"), this.typeClass(), this.activeClass(), r.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      t.Html.root.classList.add(e.settings.classes.type[e.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var i = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(i.slide.active), Gi(s).forEach(function(c) {
        c.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, s = i.type, c = i.slide;
      t.Html.root.classList.remove(s[e.settings.type]), t.Html.slides.forEach(function(u) {
        u.classList.remove(c.active);
      });
    }
  };
  return r.on(["destroy", "update"], function() {
    n.removeClasses();
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), r.on("move.after", function() {
    n.activeClass();
  }), n;
}
function Cl(e, t, r) {
  var n = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], e.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, c = e.settings, u = c.perView, d = c.classes, f = c.cloningRatio;
      if (s.length > 0)
        for (var h = +!!e.settings.peek, m = u + h + Math.round(u / 2), x = s.slice(0, m).reverse(), y = s.slice(m * -1), w = 0; w < Math.max(f, Math.floor(u / s.length)); w++) {
          for (var v = 0; v < x.length; v++) {
            var O = x[v].cloneNode(!0);
            O.classList.add(d.slide.clone), i.push(O);
          }
          for (var k = 0; k < y.length; k++) {
            var N = y[k].cloneNode(!0);
            N.classList.add(d.slide.clone), i.unshift(N);
          }
        }
      return i;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var i = this.items, s = t.Html, c = s.wrapper, u = s.slides, d = Math.floor(i.length / 2), f = i.slice(0, d).reverse(), h = i.slice(d * -1).reverse(), m = "".concat(t.Sizes.slideWidth, "px"), x = 0; x < h.length; x++)
        c.appendChild(h[x]);
      for (var y = 0; y < f.length; y++)
        c.insertBefore(f[y], u[0]);
      for (var w = 0; w < i.length; w++)
        i[w].style.width = m;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, s = 0; s < i.length; s++)
        t.Html.wrapper.removeChild(i[s]);
    }
  };
  return Q(n, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length;
    }
  }), r.on("update", function() {
    n.remove(), n.mount(), n.append();
  }), r.on("build.before", function() {
    e.isType("carousel") && n.append();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
var Ze = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zt(this, e), this.listeners = t;
  }
  return Qt(e, [{
    key: "on",
    value: function(r, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Pr(r) && (r = [r]);
      for (var s = 0; s < r.length; s++)
        this.listeners[r[s]] = a, n.addEventListener(r[s], this.listeners[r[s]], i);
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
  }, {
    key: "off",
    value: function(r, n) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Pr(r) && (r = [r]);
      for (var i = 0; i < r.length; i++)
        n.removeEventListener(r[i], this.listeners[r[i]], a);
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */
  }, {
    key: "destroy",
    value: function() {
      delete this.listeners;
    }
  }]), e;
}();
function El(e, t, r) {
  var n = new Ze(), a = {
    /**
     * Initializes window bindings.
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("resize", window, Jt(function() {
        r.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("resize", window);
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
var Rl = ["ltr", "rtl"], Ll = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Il(e, t, r) {
  var n = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(i) {
      var s = i.slice(0, 1);
      return this.is("rtl") ? i.split(s).join(Ll[s]) : i;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(i) {
      return this.value === i;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      t.Html.root.classList.add(e.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      t.Html.root.classList.remove(e.settings.classes.direction[this.value]);
    }
  };
  return Q(n, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(i) {
      Rl.indexOf(i) > -1 ? n._v = i : Ue("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Pl(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return t.Direction.is("rtl") ? -n : n;
    }
  };
}
function Ml(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = Math.floor(n / t.Sizes.slideWidth);
      return n + t.Gaps.value * a;
    }
  };
}
function Dl(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return n + t.Clones.grow / 2;
    }
  };
}
function $l(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      if (e.settings.focusAt >= 0) {
        var a = t.Peek.value;
        return ft(a) ? n - a.before : n - a;
      }
      return n;
    }
  };
}
function Hl(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = t.Gaps.value, i = t.Sizes.width, s = e.settings.focusAt, c = t.Sizes.slideWidth;
      return s === "center" ? n - (i / 2 - c / 2) : n - c * s - a * s;
    }
  };
}
function Bl(e, t, r) {
  var n = [Ml, Dl, $l, Hl].concat(e._t, [Pl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var s = 0; s < n.length; s++) {
        var c = n[s];
        qt(c) && qt(c().modify) ? i = c(e, t, r).modify(i) : Ue("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function zl(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var s = Bl(e, t).mutate(i), c = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = c, t.Html.wrapper.style.webkitTransform = c, t.Html.wrapper.style.transform = c;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var i = t.Sizes.length, s = e.index, c = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (s - c) : (s + c) % i;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var i = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i * -1 : i;
    }
  };
  return r.on("move", function(a) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(a.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var i = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(i - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function Fl(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(s) {
      var c = e.settings;
      return n ? "".concat(s, " 0ms ").concat(c.animationTimingFunc) : "".concat(s, " ").concat(this.duration, "ms ").concat(c.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(s);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transition = "";
    },
    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function(s) {
      setTimeout(function() {
        s();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      n = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      n = !0, this.set();
    }
  };
  return Q(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var s = e.settings;
      return e.isType("slider") && t.Run.offset ? s.rewindDuration : s.animationDuration;
    }
  }), r.on("move", function() {
    a.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    a.disable();
  }), r.on("run", function() {
    a.enable();
  }), r.on("destroy", function() {
    a.remove();
  }), a;
}
var Ki = !1;
try {
  var ii = Object.defineProperty({}, "passive", {
    get: function() {
      Ki = !0;
    }
  });
  window.addEventListener("testPassive", null, ii), window.removeEventListener("testPassive", null, ii);
} catch {
}
var Hr = Ki, Et = ["touchstart", "mousedown"], ai = ["touchmove", "mousemove"], oi = ["touchend", "touchcancel", "mouseup", "mouseleave"], si = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Wl(e, t, r) {
  var n = new Ze(), a = 0, i = 0, s = 0, c = !1, u = Hr ? {
    passive: !0
  } : !1, d = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function() {
      this.bindSwipeStart();
    },
    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function(h) {
      if (!c && !e.disabled) {
        this.disable();
        var m = this.touches(h);
        a = null, i = fe(m.pageX), s = fe(m.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(h) {
      if (!e.disabled) {
        var m = e.settings, x = m.touchAngle, y = m.touchRatio, w = m.classes, v = this.touches(h), O = fe(v.pageX) - i, k = fe(v.pageY) - s, N = Math.abs(O << 2), j = Math.abs(k << 2), b = Math.sqrt(N + j), H = Math.sqrt(j);
        if (a = Math.asin(H / b), a * 180 / Math.PI < x)
          h.stopPropagation(), t.Move.make(O * vl(y)), t.Html.root.classList.add(w.dragging), r.emit("swipe.move");
        else
          return !1;
      }
    },
    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function(h) {
      if (!e.disabled) {
        var m = e.settings, x = m.perSwipe, y = m.touchAngle, w = m.classes, v = this.touches(h), O = this.threshold(h), k = v.pageX - i, N = a * 180 / Math.PI;
        this.enable(), k > O && N < y ? t.Run.make(t.Direction.resolve("".concat(x, "<"))) : k < -O && N < y ? t.Run.make(t.Direction.resolve("".concat(x, ">"))) : t.Move.make(), t.Html.root.classList.remove(w.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var h = this, m = e.settings, x = m.swipeThreshold, y = m.dragThreshold;
      x && n.on(Et[0], t.Html.wrapper, function(w) {
        h.start(w);
      }, u), y && n.on(Et[1], t.Html.wrapper, function(w) {
        h.start(w);
      }, u);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Et[0], t.Html.wrapper, u), n.off(Et[1], t.Html.wrapper, u);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var h = this;
      n.on(ai, t.Html.wrapper, Jt(function(m) {
        h.move(m);
      }, e.settings.throttle), u);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(ai, t.Html.wrapper, u);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var h = this;
      n.on(oi, t.Html.wrapper, function(m) {
        h.end(m);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(oi, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(h) {
      return si.indexOf(h.type) > -1 ? h : h.touches[0] || h.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(h) {
      var m = e.settings;
      return si.indexOf(h.type) > -1 ? m.dragThreshold : m.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return c = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return c = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    d.unbindSwipeStart(), d.unbindSwipeMove(), d.unbindSwipeEnd(), n.destroy();
  }), d;
}
function ql(e, t, r) {
  var n = new Ze(), a = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("dragstart", t.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(s) {
      s.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function Vl(e, t, r) {
  var n = new Ze(), a = !1, i = !1, s = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = t.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(u) {
      i && (u.stopPropagation(), u.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (i = !0, !a) {
        for (var u = 0; u < this.items.length; u++)
          this.items[u].draggable = !1;
        a = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (i = !1, a) {
        for (var u = 0; u < this.items.length; u++)
          this.items[u].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return Q(s, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return s._a;
    }
  }), r.on("swipe.move", function() {
    s.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      s.attach();
    });
  }), r.on("destroy", function() {
    s.attach(), s.unbind(), n.destroy();
  }), s;
}
var Ul = '[data-glide-el="controls[nav]"]', rn = '[data-glide-el^="controls"]', Yl = "".concat(rn, ' [data-glide-dir*="<"]'), Xl = "".concat(rn, ' [data-glide-dir*=">"]');
function Gl(e, t, r) {
  var n = new Ze(), a = Hr ? {
    passive: !0
  } : !1, i = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Ul), this._c = t.Html.root.querySelectorAll(rn), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Yl),
        next: t.Html.root.querySelectorAll(Xl)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var c = 0; c < this._n.length; c++)
        this.addClass(this._n[c].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var c = 0; c < this._n.length; c++)
        this.removeClass(this._n[c].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(c) {
      var u = e.settings, d = c[e.index];
      d && (d.classList.add(u.classes.nav.active), Gi(d).forEach(function(f) {
        f.classList.remove(u.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(c) {
      var u = c[e.index];
      u == null || u.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var c = i._arrowControls.next, u = i._arrowControls.previous;
        this.resetArrowState(c, u), e.index === 0 && this.disableArrow(u), e.index === t.Run.length && this.disableArrow(c);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var c = e.settings, u = arguments.length, d = new Array(u), f = 0; f < u; f++)
        d[f] = arguments[f];
      d.forEach(function(h) {
        $r(h).forEach(function(m) {
          m.classList.remove(c.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var c = e.settings, u = arguments.length, d = new Array(u), f = 0; f < u; f++)
        d[f] = arguments[f];
      d.forEach(function(h) {
        $r(h).forEach(function(m) {
          m.classList.add(c.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var c = 0; c < this._c.length; c++)
        this.bind(this._c[c].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var c = 0; c < this._c.length; c++)
        this.unbind(this._c[c].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(c) {
      for (var u = 0; u < c.length; u++)
        n.on("click", c[u], this.click), n.on("touchstart", c[u], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(c) {
      for (var u = 0; u < c.length; u++)
        n.off(["click", "touchstart"], c[u]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(c) {
      !Hr && c.type === "touchstart" && c.preventDefault();
      var u = c.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(u));
    }
  };
  return Q(i, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return i._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    i.setActive();
  }), r.on(["mount.after", "run"], function() {
    i.setArrowState();
  }), r.on("destroy", function() {
    i.removeBindings(), i.removeActive(), n.destroy();
  }), i;
}
function Kl(e, t, r) {
  var n = new Ze(), a = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      e.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(s) {
      var c = e.settings.perSwipe, u = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(s.code) && t.Run.make(t.Direction.resolve("".concat(c).concat(u[s.code])));
    }
  };
  return r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function Zl(e, t, r) {
  var n = new Ze(), a = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), e.settings.hoverpause && this.bind();
    },
    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function() {
      this._e = !0;
    },
    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function() {
      this._e = !1;
    },
    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function() {
      var s = this;
      this._e && (this.enable(), e.settings.autoplay && Xi(this._i) && (this._i = setInterval(function() {
        s.stop(), t.Run.make(">"), s.start(), r.emit("autoplay");
      }, this.time)));
    },
    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function() {
      this._i = clearInterval(this._i);
    },
    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function() {
      var s = this;
      n.on("mouseover", t.Html.root, function() {
        s._e && s.stop();
      }), n.on("mouseout", t.Html.root, function() {
        s._e && s.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      n.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return Q(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return fe(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    a.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    a.stop();
  }), r.on(["pause", "destroy"], function() {
    a.disable(), a.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    a.start();
  }), r.on(["play"], function() {
    a.enable(), a.start();
  }), r.on("update", function() {
    a.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), a;
}
function li(e) {
  return ft(e) ? bl(e) : (Ue("Breakpoints option must be an object"), {});
}
function Ql(e, t, r) {
  var n = new Ze(), a = e.settings, i = li(a.breakpoints), s = Object.assign({}, a), c = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(d) {
      if (typeof window.matchMedia < "u") {
        for (var f in d)
          if (d.hasOwnProperty(f) && window.matchMedia("(max-width: ".concat(f, "px)")).matches)
            return d[f];
      }
      return s;
    }
  };
  return Object.assign(a, c.match(i)), n.on("resize", window, Jt(function() {
    e.settings = Dr(a, c.match(i));
  }, e.settings.throttle)), r.on("update", function() {
    i = li(i), s = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), c;
}
var Jl = {
  // Required
  Html: kl,
  Translate: zl,
  Transition: Fl,
  Direction: Il,
  Peek: Ol,
  Sizes: Nl,
  Gaps: _l,
  Move: Al,
  Clones: Cl,
  Resize: El,
  Build: jl,
  Run: Sl,
  // Optional
  Swipe: Wl,
  Images: ql,
  Anchors: Vl,
  Controls: Gl,
  Keyboard: Kl,
  Autoplay: Zl,
  Breakpoints: Ql
}, ec = /* @__PURE__ */ function(e) {
  ul(r, e);
  var t = hl(r);
  function r() {
    return Zt(this, r), t.apply(this, arguments);
  }
  return Qt(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return $t(dt(r.prototype), "mount", this).call(this, Object.assign({}, Jl, a));
    }
  }]), r;
}(xl);
function tc(e) {
  let t, r, n;
  switch (e) {
    case 3:
      t = 1, r = 2, n = 3;
      break;
    case 2:
      t = 1, r = 2, n = 2;
      break;
    case 1:
    default:
      t = 1, r = 1, n = 1;
  }
  return {
    perViewSm: t,
    perViewMd: r,
    perViewLg: n
  };
}
function rc(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: i, perViewLg: s } = tc(e), c = r ? 24 : 0, u = r ? { before: 48, after: 48 } : 0, d = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: c,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: n ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: s,
    // Can be overwritten at breakpoints
    peek: d,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: u
      },
      768: {
        // BS4 md
        perView: i,
        peek: u
      },
      992: {
        // BS4 lg
        perView: s,
        peek: u
      },
      1260: {
        // BS4 xl
        perView: s,
        peek: u
      },
      1400: {
        perView: s,
        peek: d
      },
      1920: {
        perView: s,
        peek: d
      }
    }
  };
}
function nc(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), i = e.querySelector(".glide__track"), s = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const c = ["slider-start", "slider-mid", "slider-end"], u = "glide__arrow--disabled";
  i == null || i.classList.remove(...c), s == null || s.classList.remove(...c), t === 0 ? (i == null || i.classList.add("slider-start"), s == null || s.classList.add("slider-start"), n.classList.add(u), a.classList.remove(u)) : t >= r - 1 ? (i == null || i.classList.add("slider-end"), s == null || s.classList.add("slider-end"), n.classList.remove(u), a.classList.add(u)) : (i == null || i.classList.add("slider-mid"), s == null || s.classList.add("slider-mid"), n.classList.remove(u), a.classList.remove(u));
}
function ic(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, i = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((s, c) => {
    c < a || c > i ? (s.setAttribute("aria-hidden", "true"), s.setAttribute("tabindex", "-1"), s.setAttribute("inert", "")) : (s.setAttribute("aria-hidden", "false"), s.removeAttribute("tabindex"), s.removeAttribute("inert"));
  });
}
function ac({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: i = !0,
  isDraggable: s
}) {
  const c = rc(t, n, i, s), u = new ec(`#${e}`, c);
  let d = document.querySelector(`#${e}`);
  return d.addEventListener("keyup", (f) => {
    const h = f;
    h.keyCode === 39 ? u.go(">") : h.keyCode === 37 ? u.go("<") : h.keyCode === 13 && u.go(document.activeElement.dataset.glideDir);
  }), u.on("build.before", () => {
    d = document.querySelector(`#${e}`), d && d.classList.add("slider-start");
  }), u.on("move", () => {
    if (d = document.querySelector(`#${e}`), !d) return;
    const f = u.index;
    ic(d, f, t);
    const h = d.querySelector(".navigation-slider"), m = d.querySelector(".image-navigator-images");
    if (h && m) {
      const x = h.querySelectorAll(
        ".bullet-image-container"
      ), y = h.clientWidth, w = 82, v = x[f], O = m.getBoundingClientRect().x, k = h.getBoundingClientRect().x - O, N = v.getBoundingClientRect().x - O, j = v.getBoundingClientRect().x + v.getBoundingClientRect().width - O;
      if (f === 0 || N <= 0 + w)
        h.style.left = `${k - N + w}px`;
      else if (j >= y - w) {
        const b = j - y;
        h.style.left = `${k - b - w}px`;
      }
    }
    nc(d, f, r), d.setAttribute("data-current-index", f), a && a(f);
  }), u.mount(), u;
}
function oc(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const wt = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: i,
  role: s,
  ariaLabelledBy: c,
  isFullWidth: u,
  removeSideBackground: d = !1,
  hasNavButtons: f = !0,
  hasPositionIndicators: h = !0,
  imageAutoSize: m = !0,
  onItemClick: x = () => null,
  hasPeek: y = !0,
  isDraggable: w = !0,
  hasShadow: v = !0
}) => {
  const O = `glide-${Math.ceil(Math.random() * 1e4)}`, k = oc(n.length, e);
  return _e(() => {
    ac({
      instanceName: O,
      perView: e,
      buttonCount: k,
      isFullWidth: u,
      onItemClick: x,
      hasPeek: y,
      isDraggable: w
    });
  }, [
    O,
    e,
    k,
    u,
    x,
    y,
    w
  ]), /* @__PURE__ */ l.jsxs(
    "div",
    {
      role: s,
      "aria-labelledby": c,
      className: `glide ${a}`,
      id: O,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": d,
      "data-image-auto-size": m,
      "data-has-shadow": v,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ l.jsx(Yi, { carouselItems: n }) }),
        i ? (
          // @ts-ignore
          /* @__PURE__ */ l.jsx(i, { instanceName: O })
        ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          h && /* @__PURE__ */ l.jsx(qi, { buttonCount: k }),
          f && /* @__PURE__ */ l.jsx(Ui, {})
        ] })
      ]
    }
  );
};
wt.propTypes = {
  perView: o.number,
  width: o.string,
  maxWidth: o.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: o.arrayOf(o.object).isRequired,
  cssClass: o.string,
  CustomNavComponent: o.func,
  role: o.string,
  ariaLabelledBy: o.string,
  onItemClick: o.func,
  isFullWidth: o.bool,
  removeSideBackground: o.bool,
  hasNavButtons: o.bool,
  hasPositionIndicators: o.bool,
  imageAutoSize: o.bool,
  hasPeek: o.bool,
  isDraggable: o.bool,
  hasShadow: o.bool
};
const sc = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: i,
  eventTime: s,
  buttons: c,
  linkLabel: u,
  linkUrl: d,
  tags: f
}, h, m, x) => {
  var y;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ l.jsx(
      qe,
      {
        type: h,
        horizontal: m,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: x,
        eventLocation: i,
        eventTime: s,
        buttons: c,
        linkLabel: u,
        linkUrl: d || ((y = c == null ? void 0 : c[0]) == null ? void 0 : y.href),
        tags: f
      }
    )
  };
}, Zi = ({
  perView: e = 0,
  cardItems: t,
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: i = void 0,
  maxWidth: s = void 0,
  imageAutoSize: c = !0
}) => {
  const u = parseInt(`${e}`, 10), d = t.map(
    (h) => sc(h, r, a, n)
  ), f = t.length > u;
  return /* @__PURE__ */ l.jsx(
    wt,
    {
      perView: +u,
      maxWidth: s,
      width: i,
      carouselItems: d,
      cssClass: "aligned-carousel",
      imageAutoSize: c,
      removeSideBackground: t.length <= u,
      hasPositionIndicators: f,
      hasNavButtons: f,
      isDraggable: f,
      hasShadow: !0
    }
  );
};
Zi.propTypes = {
  perView: o.string.isRequired,
  cardItems: o.arrayOf(
    o.shape({
      title: o.string.isRequired,
      content: o.string,
      eventLocation: o.string,
      eventTime: o.string,
      image: o.string,
      imageAltText: o.string,
      buttons: qe.propTypes.buttons,
      linkLabel: o.string,
      linkUrl: o.string,
      tags: qe.propTypes.tags
    })
  ).isRequired,
  cardType: qe.propTypes.type,
  cardEventFormat: qe.propTypes.eventFormat,
  cardHorizontal: qe.propTypes.horizontal,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const lc = ({ id: e, imageSource: t, imageAltText: r, title: n, content: a }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx("div", { className: "uds-img", children: /* @__PURE__ */ l.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ l.jsx(
      "img",
      {
        src: t,
        className: "uds-img figure-img img-fluid",
        alt: r,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (n || a) && /* @__PURE__ */ l.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ l.jsx("div", { className: "uds-caption-text", children: n ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("h3", { children: n }),
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: a } })
        ) })
      }
    )
  ] }) })
}), Qi = ({
  perView: e = 0,
  imageItems: t,
  width: r = void 0,
  maxWidth: n = void 0,
  imageAutoSize: a = !0
}) => {
  const i = parseInt(`${e}`, 10), s = t.map(lc), c = t.length > i;
  return /* @__PURE__ */ l.jsx(
    wt,
    {
      perView: +i,
      maxWidth: n,
      width: r,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: s,
      imageAutoSize: a,
      removeSideBackground: t.length <= i,
      hasPositionIndicators: c,
      hasNavButtons: c,
      isDraggable: c,
      hasShadow: !0
    }
  );
};
Qi.propTypes = {
  perView: o.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: o.arrayOf(o.object).isRequired,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const cc = (e, t) => {
  if (!e)
    return 0;
  const r = (e.match(/<br/g) || []).length, n = t / 6;
  return (parseInt(`${e.length / n}`, 10) + r) * 20;
}, Vt = {
  imageItems: o.arrayOf(
    o.shape({
      id: o.number,
      imageSource: o.string,
      thumbnailSource: o.string,
      imageAltText: o.string,
      content: o.oneOfType([o.string, o.element])
    })
  ),
  hasContent: o.bool
}, uc = ({ id: e, imageSource: t, imageAltText: r }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx("div", { className: "uds-img", children: /* @__PURE__ */ l.jsx(
    "img",
    {
      src: t,
      className: "uds-img figure-img img-fluid",
      alt: r,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), Ji = ({ instanceName: e, imageItems: t, hasContent: r }) => {
  const n = "data-current-index", [a, i] = ge(t[0].title), [s, c] = ge(t[0].content), u = (f) => {
    const h = t[f];
    i(h.title), c(h.content);
  };
  _e(() => {
    const f = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (f) {
      const y = parseInt(
        window.getComputedStyle(f, null).getPropertyValue("width").split("px")[0],
        10
      ), w = t.reduce((v, O) => {
        const k = cc(O.content, y);
        return k > v ? k : v;
      }, 0);
      f.style.height = `${w}px`;
    }
    const h = document.querySelector(`#${e}`);
    function m(y) {
      for (const w of y)
        if (w && w.attributeName === n)
          return u(+h.getAttribute(n));
      return null;
    }
    new MutationObserver(m).observe(h, {
      attributes: !0
    });
  }, [e]);
  const d = t.map((f) => f.imageSource);
  return /* @__PURE__ */ l.jsxs("div", { className: "image-gallery-action-area", "data-has-content": r, children: [
    /* @__PURE__ */ l.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ l.jsxs(tn, { children: [
      /* @__PURE__ */ l.jsx(en, {}),
      /* @__PURE__ */ l.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ l.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ l.jsx(
        Vi,
        {
          imageItems: d,
          onItemClick: (f) => u(f)
        }
      ) }) }),
      /* @__PURE__ */ l.jsx(Jr, {})
    ] }) }),
    r && (a || s) ? /* @__PURE__ */ l.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ l.jsxs("div", { className: "uds-caption-text", children: [
          a ? /* @__PURE__ */ l.jsx("h3", { children: a }) : null,
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: s } })
        ] })
      }
    ) : null
  ] });
};
Ji.propTypes = {
  instanceName: o.string,
  imageItems: Vt.imageItems,
  hasContent: Vt.hasContent
};
const ea = ({
  width: e,
  maxWidth: t,
  imageItems: r,
  hasContent: n = !1,
  imageAutoSize: a = !0
}) => {
  const i = r.map(uc), s = r.length > 1;
  return /* @__PURE__ */ l.jsx(
    wt,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: i,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: n ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: a,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: c }) => /* @__PURE__ */ l.jsx(
        Ji,
        {
          instanceName: c,
          hasContent: n,
          imageItems: r
        }
      ),
      removeSideBackground: r.length <= 1,
      hasPositionIndicators: s,
      hasNavButtons: s,
      isDraggable: s,
      hasShadow: !0
    }
  );
};
ea.propTypes = {
  imageItems: Vt.imageItems.isRequired,
  hasContent: Vt.hasContent,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const dc = ({ id: e, imageSource: t, imageAltText: r, quote: n }, a = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx(
    Zr,
    {
      imageSource: t,
      imageAltText: r,
      quote: n,
      itemStyle: a
    }
  )
}), ta = ({
  width: e,
  maxWidth: t,
  testimonialItems: r,
  itemStyle: n = {},
  hasNavButtons: a = !1,
  hasPositionIndicators: i = !1,
  imageAutoSize: s = !0
}) => {
  const c = r.map(
    (u) => dc(u, n)
  );
  return /* @__PURE__ */ l.jsx(
    wt,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: c,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: a,
      hasPositionIndicators: i,
      imageAutoSize: s,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
ta.propTypes = {
  testimonialItems: o.arrayOf(
    o.shape({
      title: o.string,
      content: o.string,
      cite: o.shape({
        name: o.string,
        description: o.string
      })
    })
  ).isRequired,
  itemStyle: o.shape({
    containerCssClass: o.arrayOf(o.string),
    titleCssClass: o.arrayOf(o.string),
    contentCssClass: o.arrayOf(o.string)
  }),
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool,
  hasNavButtons: o.bool,
  hasPositionIndicators: o.bool
};
var nn, ci = ha;
nn = ci.createRoot, ci.hydrateRoot;
const fc = (e, t, r) => {
  nn(r).render(ce.createElement(e, t));
}, er = ({ typeCarousel: e, targetSelector: t, props: r }) => {
  const a = {
    card: Zi,
    testimonial: ta,
    image: Qi,
    "image-gallery": ea
  }[e];
  a && fc(a, r, document.querySelector(t));
}, vc = ({ targetSelector: e, props: t }) => er({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), yc = ({ targetSelector: e, props: t }) => {
  er({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, bc = ({ targetSelector: e, props: t }) => {
  er({ typeCarousel: "image", targetSelector: e, props: t });
}, wc = ({ targetSelector: e, props: t }) => {
  er({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
}, Te = (e, t, r) => {
  nn(r).render(ce.createElement(e, t));
}, xc = ({ targetSelector: e, props: t }) => Te(bi, t, document.querySelector(e)), Sc = ({ targetSelector: e, props: t }) => Te(Ci, t, document.querySelector(e)), _c = ({ targetSelector: e, props: t }) => Te(Ur, t, document.querySelector(e)), Tc = ({ targetSelector: e, props: t }) => Te(Ge, t, document.querySelector(e)), kc = ({ targetSelector: e, props: t }) => Te(Yr, t, document.querySelector(e)), Oc = ({ targetSelector: e, props: t }) => Te(Kt, t, document.querySelector(e)), Ac = ({ targetSelector: e, props: t }) => Te(qe, t, document.querySelector(e)), Nc = ({ targetSelector: e, props: t }) => Te(Pi, t, document.querySelector(e)), jc = ({ targetSelector: e, props: t }) => Te(ut, t, document.querySelector(e)), Cc = ({ targetSelector: e, props: t }) => Te(Hi, t, document.querySelector(e)), Ec = ({ targetSelector: e, props: t }) => Te(Kr, t, document.querySelector(e)), Rc = ({ targetSelector: e, props: t }) => Te(Zr, t, document.querySelector(e)), Lc = ({ targetSelector: e, props: t }) => Te(Wi, t, document.querySelector(e)), Ic = ({ targetSelector: e, props: t }) => Te(Fi, t, document.querySelector(e));
export {
  bi as Accordion,
  Ci as AnchorMenu,
  Ur as Article,
  Ge as Button,
  Yr as ButtonIconOnly,
  Kt as ButtonTag,
  qe as Card,
  Zi as CardCarousel,
  Gs as FeedBody,
  qs as FeedContainerProvider,
  Ws as FeedContext,
  Xs as FeedHeader,
  Pi as Hero,
  ut as Image,
  Qi as ImageCarousel,
  ea as ImageGalleryCarousel,
  Kr as Pagination,
  Hi as RankingCard,
  nl as Tab,
  Fi as TabbedPanels,
  Zr as Testimonial,
  ta as TestimonialCarousel,
  Wi as Video,
  gc as feedCardButtonShape,
  Us as feedComponentShape,
  Ii as feedCtaButtonShape,
  Vs as feedDataSourceShape,
  Li as feedHeaderShape,
  xc as initAccordion,
  Sc as initAnchorMenu,
  _c as initArticle,
  Tc as initButton,
  kc as initButtonIconOnly,
  Oc as initButtonTag,
  Ac as initCard,
  vc as initCardCarousel,
  Nc as initHero,
  jc as initImage,
  bc as initImageCarousel,
  wc as initImageGalleryCarousel,
  Ec as initPagination,
  Cc as initRankingCard,
  Ic as initTabbedPanels,
  Rc as initTestimonial,
  yc as initTestimonialCarousel,
  Lc as initVideo
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
/** @license React v16.13.1
 * react-is.production.min.js
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
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
