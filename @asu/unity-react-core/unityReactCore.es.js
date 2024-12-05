import ne, { useState as he, useEffect as _e, useId as va, useRef as Qe, useContext as Ur, createElement as ya, Component as ba, forwardRef as mi, createContext as wa, useImperativeHandle as xa, useCallback as Sa } from "react";
import _a from "react-dom";
function Yr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gi = { exports: {} }, vt = {};
var kn;
function Ta() {
  if (kn) return vt;
  kn = 1;
  var e = ne, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, d) {
    var f, h = {}, m = null, x = null;
    d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (f in u) n.call(u, f) && !a.hasOwnProperty(f) && (h[f] = u[f]);
    if (c && c.defaultProps) for (f in u = c.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: t, type: c, key: m, ref: x, props: h, _owner: i.current };
  }
  return vt.Fragment = r, vt.jsx = s, vt.jsxs = s, vt;
}
gi.exports = Ta();
var l = gi.exports, vi = { exports: {} }, yi = { exports: {} }, Y = {};
var On;
function ka() {
  if (On) return Y;
  On = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function N(b) {
    if (typeof b == "object" && b !== null) {
      var H = b.$$typeof;
      switch (H) {
        case t:
          switch (b = b.type, b) {
            case u:
            case d:
            case n:
            case a:
            case i:
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
  return Y.AsyncMode = u, Y.ConcurrentMode = d, Y.ContextConsumer = c, Y.ContextProvider = s, Y.Element = t, Y.ForwardRef = f, Y.Fragment = n, Y.Lazy = y, Y.Memo = x, Y.Portal = r, Y.Profiler = a, Y.StrictMode = i, Y.Suspense = h, Y.isAsyncMode = function(b) {
    return j(b) || N(b) === u;
  }, Y.isConcurrentMode = j, Y.isContextConsumer = function(b) {
    return N(b) === c;
  }, Y.isContextProvider = function(b) {
    return N(b) === s;
  }, Y.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Y.isForwardRef = function(b) {
    return N(b) === f;
  }, Y.isFragment = function(b) {
    return N(b) === n;
  }, Y.isLazy = function(b) {
    return N(b) === y;
  }, Y.isMemo = function(b) {
    return N(b) === x;
  }, Y.isPortal = function(b) {
    return N(b) === r;
  }, Y.isProfiler = function(b) {
    return N(b) === a;
  }, Y.isStrictMode = function(b) {
    return N(b) === i;
  }, Y.isSuspense = function(b) {
    return N(b) === h;
  }, Y.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === a || b === i || b === h || b === m || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === x || b.$$typeof === s || b.$$typeof === c || b.$$typeof === f || b.$$typeof === v || b.$$typeof === O || b.$$typeof === k || b.$$typeof === w);
  }, Y.typeOf = N, Y;
}
yi.exports = ka();
var Kt = yi.exports, pr, An;
function Oa() {
  if (An) return pr;
  An = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pr = e, pr;
}
var hr, Nn;
function Aa() {
  if (Nn) return hr;
  Nn = 1;
  var e = Oa();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, hr = function() {
    function n(s, c, u, d, f, h) {
      if (h !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, hr;
}
vi.exports = Aa()();
var Na = vi.exports;
const o = /* @__PURE__ */ Yr(Na), ja = () => {
  const [e, t] = he(), [r, n] = he(!1), [i, a] = he(!1), [s, c] = he("");
  return _e(() => {
    if (!s) return;
    (() => {
      a(null), n(!0);
      try {
        fetch(s).then((d) => d.json()).then((d) => {
          t(d), n(!1);
        }).catch((d) => {
          a(d), n(!1);
        });
      } catch (d) {
        a(d);
      }
    })();
  }, [s]), [{ data: e, loading: r, error: i }, c];
};
function Ea(e) {
  const [t, r] = he(!1);
  return _e(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const i = () => {
      r(n.matches);
    };
    return n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, [t, e]), t;
}
const jn = (e, t, r) => e ? t : r, It = (e) => (e || []).join(" ");
function Xe(e) {
  "@babel/helpers - typeof";
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xe(e);
}
function kr(e, t) {
  return kr = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, kr(e, t);
}
function Ca() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pt(e, t, r) {
  return Ca() ? Pt = Reflect.construct : Pt = function(i, a, s) {
    var c = [null];
    c.push.apply(c, a);
    var u = Function.bind.apply(i, c), d = new u();
    return s && kr(d, s.prototype), d;
  }, Pt.apply(null, arguments);
}
function Le(e) {
  return Ra(e) || La(e) || Ia(e) || Pa();
}
function Ra(e) {
  if (Array.isArray(e)) return Or(e);
}
function La(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ia(e, t) {
  if (e) {
    if (typeof e == "string") return Or(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Or(e, t);
  }
}
function Or(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Pa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ma = Object.hasOwnProperty, En = Object.setPrototypeOf, Da = Object.isFrozen, $a = Object.getPrototypeOf, Ha = Object.getOwnPropertyDescriptor, ve = Object.freeze, Ee = Object.seal, Ba = Object.create, bi = typeof Reflect < "u" && Reflect, Wt = bi.apply, Ar = bi.construct;
Wt || (Wt = function(t, r, n) {
  return t.apply(r, n);
});
ve || (ve = function(t) {
  return t;
});
Ee || (Ee = function(t) {
  return t;
});
Ar || (Ar = function(t, r) {
  return Pt(t, Le(r));
});
var Fa = Ce(Array.prototype.forEach), Cn = Ce(Array.prototype.pop), yt = Ce(Array.prototype.push), Mt = Ce(String.prototype.toLowerCase), mr = Ce(String.prototype.toString), Rn = Ce(String.prototype.match), Re = Ce(String.prototype.replace), za = Ce(String.prototype.indexOf), Wa = Ce(String.prototype.trim), fe = Ce(RegExp.prototype.test), gr = qa(TypeError);
function Ce(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Wt(e, t, n);
  };
}
function qa(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Ar(e, r);
  };
}
function $(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : Mt, En && En(e, null);
  for (var i = t.length; i--; ) {
    var a = t[i];
    if (typeof a == "string") {
      var s = r(a);
      s !== a && (Da(t) || (t[i] = s), a = s);
    }
    e[a] = !0;
  }
  return e;
}
function it(e) {
  var t = Ba(null), r;
  for (r in e)
    Wt(Ma, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function At(e, t) {
  for (; e !== null; ) {
    var r = Ha(e, t);
    if (r) {
      if (r.get)
        return Ce(r.get);
      if (typeof r.value == "function")
        return Ce(r.value);
    }
    e = $a(e);
  }
  function n(i) {
    return console.warn("fallback value for", i), null;
  }
  return n;
}
var Ln = ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vr = ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), yr = ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Va = ve(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), br = ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ua = ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), In = ve(["#text"]), Pn = ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), wr = ve(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mn = ve(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Nt = ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ya = Ee(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ga = Ee(/<%[\w\W]*|[\w\W]*%>/gm), Xa = Ee(/\${[\w\W]*}/gm), Ka = Ee(/^data-[\-\w.\u00B7-\uFFFF]/), Za = Ee(/^aria-[\-\w]+$/), Qa = Ee(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ja = Ee(/^(?:\w+script|data):/i), eo = Ee(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), to = Ee(/^html$/i), ro = Ee(/^[a-z][.\w]*(-[.\w]+)+$/i), no = function() {
  return typeof window > "u" ? null : window;
}, io = function(t, r) {
  if (Xe(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, i = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(i) && (n = r.currentScript.getAttribute(i));
  var a = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(a, {
      createHTML: function(c) {
        return c;
      },
      createScriptURL: function(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
};
function wi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : no(), t = function(p) {
    return wi(p);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, i = e.DocumentFragment, a = e.HTMLTemplateElement, s = e.Node, c = e.Element, u = e.NodeFilter, d = e.NamedNodeMap, f = d === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : d, h = e.HTMLFormElement, m = e.DOMParser, x = e.trustedTypes, y = c.prototype, w = At(y, "cloneNode"), v = At(y, "nextSibling"), O = At(y, "childNodes"), k = At(y, "parentNode");
  if (typeof a == "function") {
    var N = n.createElement("template");
    N.content && N.content.ownerDocument && (n = N.content.ownerDocument);
  }
  var j = io(x, r), b = j ? j.createHTML("") : "", H = n, I = H.implementation, q = H.createNodeIterator, ie = H.createDocumentFragment, ke = H.getElementsByTagName, ye = r.importNode, le = {};
  try {
    le = it(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var J = {};
  t.isSupported = typeof k == "function" && I && I.createHTMLDocument !== void 0 && le !== 9;
  var be = Ya, ce = Ga, De = Xa, Oe = Ka, we = Za, et = Ja, $e = eo, tt = ro, C = Qa, T = null, E = $({}, [].concat(Le(Ln), Le(vr), Le(yr), Le(br), Le(In))), R = null, g = $({}, [].concat(Le(Pn), Le(wr), Le(Mn), Le(Nt))), P = Object.seal(Object.create(null, {
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
  })), _ = null, X = null, W = !0, F = !0, D = !1, ae = !0, te = !1, B = !0, Z = !1, z = !1, re = !1, Ae = !1, ee = !1, He = !1, Ge = !0, xe = !1, M = "user-content-", K = !0, Be = !1, Pe = {}, ge = null, un = $({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), dn = null, fn = $({}, ["audio", "video", "img", "source", "image", "track"]), sr = null, pn = $({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), _t = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", Fe = "http://www.w3.org/1999/xhtml", lt = Fe, lr = !1, cr = null, ua = $({}, [_t, Tt, Fe], mr), rt, da = ["application/xhtml+xml", "text/html"], fa = "text/html", ue, ct = null, pa = n.createElement("form"), hn = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, ur = function(p) {
    ct && ct === p || ((!p || Xe(p) !== "object") && (p = {}), p = it(p), rt = // eslint-disable-next-line unicorn/prefer-includes
    da.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? rt = fa : rt = p.PARSER_MEDIA_TYPE, ue = rt === "application/xhtml+xml" ? mr : Mt, T = "ALLOWED_TAGS" in p ? $({}, p.ALLOWED_TAGS, ue) : E, R = "ALLOWED_ATTR" in p ? $({}, p.ALLOWED_ATTR, ue) : g, cr = "ALLOWED_NAMESPACES" in p ? $({}, p.ALLOWED_NAMESPACES, mr) : ua, sr = "ADD_URI_SAFE_ATTR" in p ? $(
      it(pn),
      // eslint-disable-line indent
      p.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      ue
      // eslint-disable-line indent
    ) : pn, dn = "ADD_DATA_URI_TAGS" in p ? $(
      it(fn),
      // eslint-disable-line indent
      p.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      ue
      // eslint-disable-line indent
    ) : fn, ge = "FORBID_CONTENTS" in p ? $({}, p.FORBID_CONTENTS, ue) : un, _ = "FORBID_TAGS" in p ? $({}, p.FORBID_TAGS, ue) : {}, X = "FORBID_ATTR" in p ? $({}, p.FORBID_ATTR, ue) : {}, Pe = "USE_PROFILES" in p ? p.USE_PROFILES : !1, W = p.ALLOW_ARIA_ATTR !== !1, F = p.ALLOW_DATA_ATTR !== !1, D = p.ALLOW_UNKNOWN_PROTOCOLS || !1, ae = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = p.SAFE_FOR_TEMPLATES || !1, B = p.SAFE_FOR_XML !== !1, Z = p.WHOLE_DOCUMENT || !1, Ae = p.RETURN_DOM || !1, ee = p.RETURN_DOM_FRAGMENT || !1, He = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, Ge = p.SANITIZE_DOM !== !1, xe = p.SANITIZE_NAMED_PROPS || !1, K = p.KEEP_CONTENT !== !1, Be = p.IN_PLACE || !1, C = p.ALLOWED_URI_REGEXP || C, lt = p.NAMESPACE || Fe, P = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && hn(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && hn(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (F = !1), ee && (Ae = !0), Pe && (T = $({}, Le(In)), R = [], Pe.html === !0 && ($(T, Ln), $(R, Pn)), Pe.svg === !0 && ($(T, vr), $(R, wr), $(R, Nt)), Pe.svgFilters === !0 && ($(T, yr), $(R, wr), $(R, Nt)), Pe.mathMl === !0 && ($(T, br), $(R, Mn), $(R, Nt))), p.ADD_TAGS && (T === E && (T = it(T)), $(T, p.ADD_TAGS, ue)), p.ADD_ATTR && (R === g && (R = it(R)), $(R, p.ADD_ATTR, ue)), p.ADD_URI_SAFE_ATTR && $(sr, p.ADD_URI_SAFE_ATTR, ue), p.FORBID_CONTENTS && (ge === un && (ge = it(ge)), $(ge, p.FORBID_CONTENTS, ue)), K && (T["#text"] = !0), Z && $(T, ["html", "head", "body"]), T.table && ($(T, ["tbody"]), delete _.tbody), ve && ve(p), ct = p);
  }, mn = $({}, ["mi", "mo", "mn", "ms", "mtext"]), gn = $({}, ["annotation-xml"]), ha = $({}, ["title", "style", "font", "a", "script"]), kt = $({}, vr);
  $(kt, yr), $(kt, Va);
  var dr = $({}, br);
  $(dr, Ua);
  var ma = function(p) {
    var S = k(p);
    (!S || !S.tagName) && (S = {
      namespaceURI: lt,
      tagName: "template"
    });
    var A = Mt(p.tagName), V = Mt(S.tagName);
    return cr[p.namespaceURI] ? p.namespaceURI === Tt ? S.namespaceURI === Fe ? A === "svg" : S.namespaceURI === _t ? A === "svg" && (V === "annotation-xml" || mn[V]) : !!kt[A] : p.namespaceURI === _t ? S.namespaceURI === Fe ? A === "math" : S.namespaceURI === Tt ? A === "math" && gn[V] : !!dr[A] : p.namespaceURI === Fe ? S.namespaceURI === Tt && !gn[V] || S.namespaceURI === _t && !mn[V] ? !1 : !dr[A] && (ha[A] || !kt[A]) : !!(rt === "application/xhtml+xml" && cr[p.namespaceURI]) : !1;
  }, Ne = function(p) {
    yt(t.removed, {
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
  }, Ot = function(p, S) {
    try {
      yt(t.removed, {
        attribute: S.getAttributeNode(p),
        from: S
      });
    } catch {
      yt(t.removed, {
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
  }, vn = function(p) {
    var S, A;
    if (re)
      p = "<remove></remove>" + p;
    else {
      var V = Rn(p, /^[\r\n\t ]+/);
      A = V && V[0];
    }
    rt === "application/xhtml+xml" && lt === Fe && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    var Se = j ? j.createHTML(p) : p;
    if (lt === Fe)
      try {
        S = new m().parseFromString(Se, rt);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = I.createDocument(lt, "template", null);
      try {
        S.documentElement.innerHTML = lr ? b : Se;
      } catch {
      }
    }
    var me = S.body || S.documentElement;
    return p && A && me.insertBefore(n.createTextNode(A), me.childNodes[0] || null), lt === Fe ? ke.call(S, Z ? "html" : "body")[0] : Z ? S.documentElement : me;
  }, yn = function(p) {
    return q.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, bn = function(p) {
    return p instanceof h && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof f) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, gt = function(p) {
    return Xe(s) === "object" ? p instanceof s : p && Xe(p) === "object" && typeof p.nodeType == "number" && typeof p.nodeName == "string";
  }, ze = function(p, S, A) {
    J[p] && Fa(J[p], function(V) {
      V.call(t, S, A, ct);
    });
  }, wn = function(p) {
    var S;
    if (ze("beforeSanitizeElements", p, null), bn(p) || fe(/[\u0080-\uFFFF]/, p.nodeName))
      return Ne(p), !0;
    var A = ue(p.nodeName);
    if (ze("uponSanitizeElement", p, {
      tagName: A,
      allowedTags: T
    }), p.hasChildNodes() && !gt(p.firstElementChild) && (!gt(p.content) || !gt(p.content.firstElementChild)) && fe(/<[/\w]/g, p.innerHTML) && fe(/<[/\w]/g, p.textContent) || A === "select" && fe(/<template/i, p.innerHTML) || p.nodeType === 7 || B && p.nodeType === 8 && fe(/<[/\w]/g, p.data))
      return Ne(p), !0;
    if (!T[A] || _[A]) {
      if (!_[A] && Sn(A) && (P.tagNameCheck instanceof RegExp && fe(P.tagNameCheck, A) || P.tagNameCheck instanceof Function && P.tagNameCheck(A)))
        return !1;
      if (K && !ge[A]) {
        var V = k(p) || p.parentNode, Se = O(p) || p.childNodes;
        if (Se && V)
          for (var me = Se.length, de = me - 1; de >= 0; --de) {
            var nt = w(Se[de], !0);
            nt.__removalCount = (p.__removalCount || 0) + 1, V.insertBefore(nt, v(p));
          }
      }
      return Ne(p), !0;
    }
    return p instanceof c && !ma(p) || (A === "noscript" || A === "noembed" || A === "noframes") && fe(/<\/no(script|embed|frames)/i, p.innerHTML) ? (Ne(p), !0) : (te && p.nodeType === 3 && (S = p.textContent, S = Re(S, be, " "), S = Re(S, ce, " "), S = Re(S, De, " "), p.textContent !== S && (yt(t.removed, {
      element: p.cloneNode()
    }), p.textContent = S)), ze("afterSanitizeElements", p, null), !1);
  }, xn = function(p, S, A) {
    if (Ge && (S === "id" || S === "name") && (A in n || A in pa))
      return !1;
    if (!(F && !X[S] && fe(Oe, S))) {
      if (!(W && fe(we, S))) {
        if (!R[S] || X[S]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Sn(p) && (P.tagNameCheck instanceof RegExp && fe(P.tagNameCheck, p) || P.tagNameCheck instanceof Function && P.tagNameCheck(p)) && (P.attributeNameCheck instanceof RegExp && fe(P.attributeNameCheck, S) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            S === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && fe(P.tagNameCheck, A) || P.tagNameCheck instanceof Function && P.tagNameCheck(A)))
          ) return !1;
        } else if (!sr[S]) {
          if (!fe(C, Re(A, $e, ""))) {
            if (!((S === "src" || S === "xlink:href" || S === "href") && p !== "script" && za(A, "data:") === 0 && dn[p])) {
              if (!(D && !fe(et, Re(A, $e, "")))) {
                if (A)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Sn = function(p) {
    return p !== "annotation-xml" && Rn(p, tt);
  }, _n = function(p) {
    var S, A, V, Se;
    ze("beforeSanitizeAttributes", p, null);
    var me = p.attributes;
    if (me) {
      var de = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: R
      };
      for (Se = me.length; Se--; ) {
        S = me[Se];
        var nt = S, oe = nt.name, fr = nt.namespaceURI;
        if (A = oe === "value" ? S.value : Wa(S.value), V = ue(oe), de.attrName = V, de.attrValue = A, de.keepAttr = !0, de.forceKeepAttr = void 0, ze("uponSanitizeAttribute", p, de), A = de.attrValue, !de.forceKeepAttr && (Ot(oe, p), !!de.keepAttr)) {
          if (!ae && fe(/\/>/i, A)) {
            Ot(oe, p);
            continue;
          }
          te && (A = Re(A, be, " "), A = Re(A, ce, " "), A = Re(A, De, " "));
          var Tn = ue(p.nodeName);
          if (xn(Tn, V, A)) {
            if (xe && (V === "id" || V === "name") && (Ot(oe, p), A = M + A), B && fe(/((--!?|])>)|<\/(style|title)/i, A)) {
              Ot(oe, p);
              continue;
            }
            if (j && Xe(x) === "object" && typeof x.getAttributeType == "function" && !fr)
              switch (x.getAttributeType(Tn, V)) {
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
              fr ? p.setAttributeNS(fr, oe, A) : p.setAttribute(oe, A), bn(p) ? Ne(p) : Cn(t.removed);
            } catch {
            }
          }
        }
      }
      ze("afterSanitizeAttributes", p, null);
    }
  }, ga = function L(p) {
    var S, A = yn(p);
    for (ze("beforeSanitizeShadowDOM", p, null); S = A.nextNode(); )
      ze("uponSanitizeShadowNode", S, null), !wn(S) && (S.content instanceof i && L(S.content), _n(S));
    ze("afterSanitizeShadowDOM", p, null);
  };
  return t.sanitize = function(L) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S, A, V, Se, me;
    if (lr = !L, lr && (L = "<!-->"), typeof L != "string" && !gt(L))
      if (typeof L.toString == "function") {
        if (L = L.toString(), typeof L != "string")
          throw gr("dirty is not a string, aborting");
      } else
        throw gr("toString is not a function");
    if (!t.isSupported) {
      if (Xe(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof L == "string")
          return e.toStaticHTML(L);
        if (gt(L))
          return e.toStaticHTML(L.outerHTML);
      }
      return L;
    }
    if (z || ur(p), t.removed = [], typeof L == "string" && (Be = !1), Be) {
      if (L.nodeName) {
        var de = ue(L.nodeName);
        if (!T[de] || _[de])
          throw gr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (L instanceof s)
      S = vn("<!---->"), A = S.ownerDocument.importNode(L, !0), A.nodeType === 1 && A.nodeName === "BODY" || A.nodeName === "HTML" ? S = A : S.appendChild(A);
    else {
      if (!Ae && !te && !Z && // eslint-disable-next-line unicorn/prefer-includes
      L.indexOf("<") === -1)
        return j && He ? j.createHTML(L) : L;
      if (S = vn(L), !S)
        return Ae ? null : He ? b : "";
    }
    S && re && Ne(S.firstChild);
    for (var nt = yn(Be ? L : S); V = nt.nextNode(); )
      V.nodeType === 3 && V === Se || wn(V) || (V.content instanceof i && ga(V.content), _n(V), Se = V);
    if (Se = null, Be)
      return L;
    if (Ae) {
      if (ee)
        for (me = ie.call(S.ownerDocument); S.firstChild; )
          me.appendChild(S.firstChild);
      else
        me = S;
      return (R.shadowroot || R.shadowrootmod) && (me = ye.call(r, me, !0)), me;
    }
    var oe = Z ? S.outerHTML : S.innerHTML;
    return Z && T["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && fe(to, S.ownerDocument.doctype.name) && (oe = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + oe), te && (oe = Re(oe, be, " "), oe = Re(oe, ce, " "), oe = Re(oe, De, " ")), j && He ? j.createHTML(oe) : oe;
  }, t.setConfig = function(L) {
    ur(L), z = !0;
  }, t.clearConfig = function() {
    ct = null, z = !1;
  }, t.isValidAttribute = function(L, p, S) {
    ct || ur({});
    var A = ue(L), V = ue(p);
    return xn(A, V, S);
  }, t.addHook = function(L, p) {
    typeof p == "function" && (J[L] = J[L] || [], yt(J[L], p));
  }, t.removeHook = function(L) {
    if (J[L])
      return Cn(J[L]);
  }, t.removeHooks = function(L) {
    J[L] && (J[L] = []);
  }, t.removeAllHooks = function() {
    J = {};
  }, t;
}
var ao = wi();
function oo(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const je = (e) => ({ __html: ao.sanitize(e) }), Dn = (e, t, r) => {
  let n = e;
  const i = [];
  for (; n < t; )
    n > 0 && n <= r && i.push(n), n += 1;
  return i;
};
let xr = !1;
const so = (e, t) => {
  xr || (xr = !0, setTimeout(() => {
    e(), xr = !1;
  }, t));
};
let $n;
const lo = (e, t) => {
  window.clearTimeout($n), $n = window.setTimeout(e, t);
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
const Te = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: i = "",
  text: a = "",
  region: s = "",
  component: c = ""
}) => {
  const { dataLayer: u } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: i.toLowerCase(),
    text: a.toLowerCase(),
    component: c.toLowerCase()
  };
  u && u.push(d);
}, co = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), Sr = o.shape({
  text: o.string,
  maxWidth: o.string,
  cssClass: o.arrayOf(o.string),
  highlightColor: o.oneOf(["gold", "black"])
}), xi = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  content: o.shape({
    icon: o.string,
    header: o.string,
    body: o.string
  })
});
var Si = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        c && (a = i(a, n(c)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var s = "";
      for (var c in a)
        t.call(a, c) && a[c] && (s = i(s, c));
      return s;
    }
    function i(a, s) {
      return s ? a ? a + " " + s : a + s : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Si);
var uo = Si.exports;
const U = /* @__PURE__ */ Yr(uo), _i = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var i, a, s, c, u, d;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: U("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (i = t.content) == null ? void 0 : i.icon
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ l.jsx("h4", { children: /* @__PURE__ */ l.jsxs(
          "a",
          {
            "data-testid": "accordion-opener",
            className: U({ collapsed: e !== r }),
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
              (a = t.content) != null && a.icon ? /* @__PURE__ */ l.jsxs("span", { className: "accordion-icon", children: [
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
        ((d = t.content) == null ? void 0 : d.body) && /* @__PURE__ */ l.jsx("div", { id: `card-body-${e}`, className: U("collapse"), children: /* @__PURE__ */ l.jsx(
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
_i.propTypes = {
  id: o.number,
  item: xi,
  openCard: o.number,
  onClick: o.func
};
const fo = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Hn = {
  OPEN: "open",
  CLOSE: "close"
}, Ti = ({ cards: e, openedCard: t }) => {
  const [r, n] = he(t), i = (s, c) => {
    Te({
      ...fo,
      action: c,
      text: s
    });
  }, a = (s, c, u) => {
    s.preventDefault(), (r === c || r) && i(
      e[r - 1].content.header,
      Hn.CLOSE
    ), r !== c ? (n(c), i(u, Hn.OPEN)) : n(null);
  };
  return /* @__PURE__ */ l.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, c) => s.content.body && s.content.header && /* @__PURE__ */ l.jsx(
      _i,
      {
        id: c + 1,
        item: s,
        openCard: r,
        onClick: a
      },
      c + 1
    )
  ) });
};
Ti.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: o.arrayOf(xi).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: o.number
};
const po = "staticMarkup";
function ki() {
  const t = va().indexOf(po) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const Zt = ({ gaData: e, children: t }) => {
  const { isReact: r } = ki(), { onClick: n, ...i } = t.props;
  return r ? ne.cloneElement(t, {
    ...i,
    onClick: (a) => (Te(e), n ? n(a) : !0)
  }) : ne.cloneElement(t, {
    ...i,
    onClick: n,
    "data-ga": e.text,
    "data-ga-name": e.name,
    "data-ga-event": e.event,
    "data-ga-action": e.action,
    "data-ga-type": e.type,
    "data-ga-region": e.region,
    "data-ga-section": e.section,
    "data-ga-component": e.component
  });
}, ho = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ke = ({
  label: e,
  cardTitle: t,
  ariaLabel: r,
  block: n,
  color: i,
  disabled: a,
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
  const w = U("btn", {
    [`btn-${i}`]: !0,
    "btn-md": h === "small",
    "btn-sm": h === "xsmall",
    "btn-block": n,
    disabled: a
  });
  let v = s;
  c && s === "button" && (v = "a");
  const O = (k) => {
    f == null || f();
  };
  return /* @__PURE__ */ l.jsx(
    Zt,
    {
      gaData: { ...ho, text: e, section: t },
      children: /* @__PURE__ */ l.jsxs(
        v,
        {
          type: v === "button" && f ? "button" : void 0,
          ...y,
          className: U(m) || w,
          href: c,
          ref: d,
          onClick: O,
          "aria-label": r,
          target: v === "a" ? x : null,
          children: [
            u && /* @__PURE__ */ l.jsx("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Ke.propTypes = {
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
Ke.defaultProps = {
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
function mo(e) {
  function t(C, T, E, R, g) {
    for (var P = 0, _ = 0, X = 0, W = 0, F, D, ae = 0, te = 0, B, Z = B = F = 0, z = 0, re = 0, Ae = 0, ee = 0, He = E.length, Ge = He - 1, xe, M = "", K = "", Be = "", Pe = "", ge; z < He; ) {
      if (D = E.charCodeAt(z), z === Ge && _ + W + X + P !== 0 && (_ !== 0 && (D = _ === 47 ? 10 : 47), W = X = P = 0, He++, Ge++), _ + W + X + P === 0) {
        if (z === Ge && (0 < re && (M = M.replace(m, "")), 0 < M.trim().length)) {
          switch (D) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              M += E.charAt(z);
          }
          D = 59;
        }
        switch (D) {
          case 123:
            for (M = M.trim(), F = M.charCodeAt(0), B = 1, ee = ++z; z < He; ) {
              switch (D = E.charCodeAt(z)) {
                case 123:
                  B++;
                  break;
                case 125:
                  B--;
                  break;
                case 47:
                  switch (D = E.charCodeAt(z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Z = z + 1; Z < Ge; ++Z)
                          switch (E.charCodeAt(Z)) {
                            case 47:
                              if (D === 42 && E.charCodeAt(Z - 1) === 42 && z + 2 !== Z) {
                                z = Z + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (D === 47) {
                                z = Z + 1;
                                break e;
                              }
                          }
                        z = Z;
                      }
                  }
                  break;
                case 91:
                  D++;
                case 40:
                  D++;
                case 34:
                case 39:
                  for (; z++ < Ge && E.charCodeAt(z) !== D; )
                    ;
              }
              if (B === 0) break;
              z++;
            }
            switch (B = E.substring(ee, z), F === 0 && (F = (M = M.replace(h, "").trim()).charCodeAt(0)), F) {
              case 64:
                switch (0 < re && (M = M.replace(m, "")), D = M.charCodeAt(1), D) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    re = T;
                    break;
                  default:
                    re = De;
                }
                if (B = t(T, re, B, D, g + 1), ee = B.length, 0 < we && (re = r(De, M, Ae), ge = c(3, B, re, T, J, le, ee, D, g, R), M = re.join(""), ge !== void 0 && (ee = (B = ge.trim()).length) === 0 && (D = 0, B = "")), 0 < ee) switch (D) {
                  case 115:
                    M = M.replace(H, s);
                  case 100:
                  case 109:
                  case 45:
                    B = M + "{" + B + "}";
                    break;
                  case 107:
                    M = M.replace(k, "$1 $2"), B = M + "{" + B + "}", B = ce === 1 || ce === 2 && a("@" + B, 3) ? "@-webkit-" + B + "@" + B : "@" + B;
                    break;
                  default:
                    B = M + B, R === 112 && (B = (K += B, ""));
                }
                else B = "";
                break;
              default:
                B = t(T, r(T, M, Ae), B, R, g + 1);
            }
            Be += B, B = Ae = re = Z = F = 0, M = "", D = E.charCodeAt(++z);
            break;
          case 125:
          case 59:
            if (M = (0 < re ? M.replace(m, "") : M).trim(), 1 < (ee = M.length)) switch (Z === 0 && (F = M.charCodeAt(0), F === 45 || 96 < F && 123 > F) && (ee = (M = M.replace(" ", ":")).length), 0 < we && (ge = c(1, M, T, C, J, le, K.length, R, g, R)) !== void 0 && (ee = (M = ge.trim()).length) === 0 && (M = "\0\0"), F = M.charCodeAt(0), D = M.charCodeAt(1), F) {
              case 0:
                break;
              case 64:
                if (D === 105 || D === 99) {
                  Pe += M + E.charAt(z);
                  break;
                }
              default:
                M.charCodeAt(ee - 1) !== 58 && (K += i(M, F, D, M.charCodeAt(2)));
            }
            Ae = re = Z = F = 0, M = "", D = E.charCodeAt(++z);
        }
      }
      switch (D) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + F === 0 && R !== 107 && 0 < M.length && (re = 1, M += "\0"), 0 < we * $e && c(0, M, T, C, J, le, K.length, R, g, R), le = 1, J++;
          break;
        case 59:
        case 125:
          if (_ + W + X + P === 0) {
            le++;
            break;
          }
        default:
          switch (le++, xe = E.charAt(z), D) {
            case 9:
            case 32:
              if (W + P + _ === 0) switch (ae) {
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
              if (W + _ + P + be === 0 && 0 < Z) switch (z - Z) {
                case 2:
                  ae === 112 && E.charCodeAt(z - 3) === 58 && (be = ae);
                case 8:
                  te === 111 && (be = te);
              }
              break;
            case 58:
              W + _ + P === 0 && (Z = z);
              break;
            case 44:
              _ + X + W + P === 0 && (re = 1, xe += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (W = W === D ? 0 : W === 0 ? D : W);
              break;
            case 91:
              W + _ + X === 0 && P++;
              break;
            case 93:
              W + _ + X === 0 && P--;
              break;
            case 41:
              W + _ + P === 0 && X--;
              break;
            case 40:
              if (W + _ + P === 0) {
                if (F === 0) switch (2 * ae + 3 * te) {
                  case 533:
                    break;
                  default:
                    F = 1;
                }
                X++;
              }
              break;
            case 64:
              _ + X + W + P + Z + B === 0 && (B = 1);
              break;
            case 42:
            case 47:
              if (!(0 < W + P + X)) switch (_) {
                case 0:
                  switch (2 * D + 3 * E.charCodeAt(z + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      ee = z, _ = 42;
                  }
                  break;
                case 42:
                  D === 47 && ae === 42 && ee + 2 !== z && (E.charCodeAt(ee + 2) === 33 && (K += E.substring(ee, z + 1)), xe = "", _ = 0);
              }
          }
          _ === 0 && (M += xe);
      }
      te = ae, ae = D, z++;
    }
    if (ee = K.length, 0 < ee) {
      if (re = T, 0 < we && (ge = c(2, K, re, C, J, le, ee, R, g, R), ge !== void 0 && (K = ge).length === 0)) return Pe + K + Be;
      if (K = re.join(",") + "{" + K + "}", ce * be !== 0) {
        switch (ce !== 2 || a(K, 2) || (be = 0), be) {
          case 111:
            K = K.replace(j, ":-moz-$1") + K;
            break;
          case 112:
            K = K.replace(N, "::-webkit-input-$1") + K.replace(N, "::-moz-$1") + K.replace(N, ":-ms-input-$1") + K;
        }
        be = 0;
      }
    }
    return Pe + K + Be;
  }
  function r(C, T, E) {
    var R = T.trim().split(v);
    T = R;
    var g = R.length, P = C.length;
    switch (P) {
      case 0:
      case 1:
        var _ = 0;
        for (C = P === 0 ? "" : C[0] + " "; _ < g; ++_)
          T[_] = n(C, T[_], E).trim();
        break;
      default:
        var X = _ = 0;
        for (T = []; _ < g; ++_)
          for (var W = 0; W < P; ++W)
            T[X++] = n(C[W] + " ", R[_], E).trim();
    }
    return T;
  }
  function n(C, T, E) {
    var R = T.charCodeAt(0);
    switch (33 > R && (R = (T = T.trim()).charCodeAt(0)), R) {
      case 38:
        return T.replace(O, "$1" + C.trim());
      case 58:
        return C.trim() + T.replace(O, "$1" + C.trim());
      default:
        if (0 < 1 * E && 0 < T.indexOf("\f")) return T.replace(O, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + T;
  }
  function i(C, T, E, R) {
    var g = C + ";", P = 2 * T + 3 * E + 4 * R;
    if (P === 944) {
      C = g.indexOf(":", 9) + 1;
      var _ = g.substring(C, g.length - 1).trim();
      return _ = g.substring(0, C).trim() + _ + ";", ce === 1 || ce === 2 && a(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (ce === 0 || ce === 2 && !a(g, 1)) return g;
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
        switch (T = (g = C).length - 10, _ = (g.charCodeAt(T) === 33 ? g.substring(0, T) : g).substring(C.indexOf(":", 7) + 1).trim(), P = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
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
        if (ke.test(C) === !0) return (_ = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(C.replace("stretch", "fill-available"), T, E, R).replace(":fill-available", ":stretch") : g.replace(_, "-webkit-" + _) + g.replace(_, "-moz-" + _.replace("fill-", "")) + g;
        break;
      case 962:
        if (g = "-webkit-" + g + (g.charCodeAt(5) === 102 ? "-ms-" + g : "") + g, E + R === 211 && g.charCodeAt(13) === 105 && 0 < g.indexOf("transform", 10)) return g.substring(0, g.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + g;
    }
    return g;
  }
  function a(C, T) {
    var E = C.indexOf(T === 1 ? ":" : "{"), R = C.substring(0, T !== 3 ? E : 10);
    return E = C.substring(E + 1, C.length - 1), et(T !== 2 ? R : R.replace(ie, "$1"), E, T);
  }
  function s(C, T) {
    var E = i(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return E !== T + ";" ? E.replace(I, " or ($1)").substring(4) : "(" + T + ")";
  }
  function c(C, T, E, R, g, P, _, X, W, F) {
    for (var D = 0, ae = T, te; D < we; ++D)
      switch (te = Oe[D].call(f, C, ae, E, R, g, P, _, X, W, F)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ae = te;
      }
    if (ae !== T) return ae;
  }
  function u(C) {
    switch (C) {
      case void 0:
      case null:
        we = Oe.length = 0;
        break;
      default:
        if (typeof C == "function") Oe[we++] = C;
        else if (typeof C == "object") for (var T = 0, E = C.length; T < E; ++T)
          u(C[T]);
        else $e = !!C | 0;
    }
    return u;
  }
  function d(C) {
    return C = C.prefix, C !== void 0 && (et = null, C ? typeof C != "function" ? ce = 1 : (ce = 2, et = C) : ce = 0), d;
  }
  function f(C, T) {
    var E = C;
    if (33 > E.charCodeAt(0) && (E = E.trim()), tt = E, E = [tt], 0 < we) {
      var R = c(-1, T, E, E, J, le, 0, 0, 0, 0);
      R !== void 0 && typeof R == "string" && (T = R);
    }
    var g = t(De, E, T, 0, 0);
    return 0 < we && (R = c(-2, g, E, E, J, le, g.length, 0, 0, 0), R !== void 0 && (g = R)), tt = "", be = 0, le = J = 1, g;
  }
  var h = /^\0+/g, m = /[\0\r\f]/g, x = /: */g, y = /zoo|gra/, w = /([,: ])(transform)/g, v = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, k = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, j = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, H = /\(\s*(.*)\s*\)/g, I = /([\s\S]*?);/g, q = /-self|flex-/g, ie = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ke = /stretch|:\s*\w+\-(?:conte|avail)/, ye = /([^-])(image-set\()/, le = 1, J = 1, be = 0, ce = 1, De = [], Oe = [], we = 0, et = null, $e = 0, tt = "";
  return f.use = u, f.set = d, e !== void 0 && d(e), f;
}
var go = {
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
function vo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bn = /* @__PURE__ */ vo(
  function(e) {
    return yo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Gr = Kt, bo = {
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
}, wo = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, xo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Oi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xr = {};
Xr[Gr.ForwardRef] = xo;
Xr[Gr.Memo] = Oi;
function Fn(e) {
  return Gr.isMemo(e) ? Oi : Xr[e.$$typeof] || bo;
}
var So = Object.defineProperty, _o = Object.getOwnPropertyNames, zn = Object.getOwnPropertySymbols, To = Object.getOwnPropertyDescriptor, ko = Object.getPrototypeOf, Wn = Object.prototype;
function Ai(e, t, r) {
  if (typeof t != "string") {
    if (Wn) {
      var n = ko(t);
      n && n !== Wn && Ai(e, n, r);
    }
    var i = _o(t);
    zn && (i = i.concat(zn(t)));
    for (var a = Fn(e), s = Fn(t), c = 0; c < i.length; ++c) {
      var u = i[c];
      if (!wo[u] && !(r && r[u]) && !(s && s[u]) && !(a && a[u])) {
        var d = To(t, u);
        try {
          So(e, u, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Oo = Ai;
const Ao = /* @__PURE__ */ Yr(Oo);
var G = { env: { NODE_ENV: "production" } };
function Ue() {
  return (Ue = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var qn = function(e, t) {
  for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Nr = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Kt.typeOf(e);
}, qt = Object.freeze([]), Ze = Object.freeze({});
function xt(e) {
  return typeof e == "function";
}
function jr(e) {
  return G.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Kr(e) {
  return e && typeof e.styledComponentId == "string";
}
var ut = typeof G < "u" && G.env !== void 0 && (G.env.REACT_APP_SC_ATTR || G.env.SC_ATTR) || "data-styled", Zr = typeof window < "u" && "HTMLElement" in window, No = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof G < "u" && G.env !== void 0 && (G.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && G.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? G.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && G.env.REACT_APP_SC_DISABLE_SPEEDY : G.env.SC_DISABLE_SPEEDY !== void 0 && G.env.SC_DISABLE_SPEEDY !== "" ? G.env.SC_DISABLE_SPEEDY !== "false" && G.env.SC_DISABLE_SPEEDY : G.env.NODE_ENV !== "production")), jo = G.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Eo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function mt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw G.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(Eo.apply(void 0, [jo[e]].concat(r)).trim());
}
var Co = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++) n += this.groupSizes[i];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, a = i.length, s = a; r >= s; ) (s <<= 1) < 0 && mt(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(i), this.length = s;
      for (var c = a; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), d = 0, f = n.length; d < f; d++) this.tag.insertRule(u, n[d]) && (this.groupSizes[r]++, u++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), a = i + n;
      this.groupSizes[r] = 0;
      for (var s = i; s < a; s++) this.tag.deleteRule(i);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var i = this.groupSizes[r], a = this.indexOfGroup(r), s = a + i, c = a; c < s; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Dt = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), bt = 1, jt = function(e) {
  if (Dt.has(e)) return Dt.get(e);
  for (; Vt.has(bt); ) bt++;
  var t = bt++;
  return G.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && mt(16, "" + t), Dt.set(e, t), Vt.set(t, e), t;
}, Ro = function(e) {
  return Vt.get(e);
}, Lo = function(e, t) {
  t >= bt && (bt = t + 1), Dt.set(e, t), Vt.set(t, e);
}, Io = "style[" + ut + '][data-styled-version="5.3.11"]', Po = new RegExp("^" + ut + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Mo = function(e, t, r) {
  for (var n, i = r.split(","), a = 0, s = i.length; a < s; a++) (n = i[a]) && e.registerName(t, n);
}, Do = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], i = 0, a = r.length; i < a; i++) {
    var s = r[i].trim();
    if (s) {
      var c = s.match(Po);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (Lo(d, u), Mo(e, d, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, $o = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ni = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), i = function(c) {
    for (var u = c.childNodes, d = u.length; d >= 0; d--) {
      var f = u[d];
      if (f && f.nodeType === 1 && f.hasAttribute(ut)) return f;
    }
  }(r), a = i !== void 0 ? i.nextSibling : null;
  n.setAttribute(ut, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = $o();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, a), n;
}, Ho = function() {
  function e(r) {
    var n = this.element = Ni(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet) return i.sheet;
      for (var a = document.styleSheets, s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        if (u.ownerNode === i) return u;
      }
      mt(17);
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
}(), Bo = function() {
  function e(r) {
    var n = this.element = Ni(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n), a = this.nodes[r];
      return this.element.insertBefore(i, a || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Fo = function() {
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
}(), Vn = Zr, zo = { isServer: !Zr, useCSSOMInjection: !No }, ji = function() {
  function e(r, n, i) {
    r === void 0 && (r = Ze), n === void 0 && (n = {}), this.options = Ue({}, zo, {}, r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Zr && Vn && (Vn = !1, function(a) {
      for (var s = document.querySelectorAll(Io), c = 0, u = s.length; c < u; c++) {
        var d = s[c];
        d && d.getAttribute(ut) !== "active" && (Do(a, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return jt(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Ue({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (n = this.options).isServer, a = n.useCSSOMInjection, s = n.target, r = i ? new Fo(s) : a ? new Ho(s) : new Bo(s), new Co(r)));
    var r, n, i, a, s;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (jt(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, t.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(jt(r), i);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(jt(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), i = n.length, a = "", s = 0; s < i; s++) {
        var c = Ro(s);
        if (c !== void 0) {
          var u = r.names.get(c), d = n.getGroup(s);
          if (u && d && u.size) {
            var f = ut + ".g" + s + '[id="' + c + '"]', h = "";
            u !== void 0 && u.forEach(function(m) {
              m.length > 0 && (h += m + ",");
            }), a += "" + d + f + '{content:"' + h + `"}/*!sc*/
`;
          }
        }
      }
      return a;
    }(this);
  }, e;
}(), Wo = /(a)(d)/gi, Un = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Er(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Un(t % 52) + r;
  return (Un(t % 52) + r).replace(Wo, "$1-$2");
}
var ot = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ei = function(e) {
  return ot(5381, e);
};
function qo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (xt(r) && !Kr(r)) return !1;
  }
  return !0;
}
var Vo = Ei("5.3.11"), Uo = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = G.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && qo(t), this.componentId = r, this.baseHash = ot(Vo, r), this.baseStyle = n, ji.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var i = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(i, this.staticRulesId)) a.push(this.staticRulesId);
    else {
      var s = dt(this.rules, t, r, n).join(""), c = Er(ot(this.baseHash, s) >>> 0);
      if (!r.hasNameForId(i, c)) {
        var u = n(s, "." + c, void 0, i);
        r.insertRules(i, c, u);
      }
      a.push(c), this.staticRulesId = c;
    }
    else {
      for (var d = this.rules.length, f = ot(this.baseHash, n.hash), h = "", m = 0; m < d; m++) {
        var x = this.rules[m];
        if (typeof x == "string") h += x, G.env.NODE_ENV !== "production" && (f = ot(f, x + m));
        else if (x) {
          var y = dt(x, t, r, n), w = Array.isArray(y) ? y.join("") : y;
          f = ot(f, w + m), h += w;
        }
      }
      if (h) {
        var v = Er(f >>> 0);
        if (!r.hasNameForId(i, v)) {
          var O = n(h, "." + v, void 0, i);
          r.insertRules(i, v, O);
        }
        a.push(v);
      }
    }
    return a.join(" ");
  }, e;
}(), Yo = /^\s*\/\/.*$/gm, Go = [":", "[", ".", "#"];
function Xo(e) {
  var t, r, n, i, a = Ze, s = a.options, c = s === void 0 ? Ze : s, u = a.plugins, d = u === void 0 ? qt : u, f = new mo(c), h = [], m = /* @__PURE__ */ function(w) {
    function v(O) {
      if (O) try {
        w(O + "}");
      } catch {
      }
    }
    return function(O, k, N, j, b, H, I, q, ie, ke) {
      switch (O) {
        case 1:
          if (ie === 0 && k.charCodeAt(0) === 64) return w(k + ";"), "";
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
    return v === 0 && Go.indexOf(O[r.length]) !== -1 || O.match(i) ? w : "." + t;
  };
  function y(w, v, O, k) {
    k === void 0 && (k = "&");
    var N = w.replace(Yo, ""), j = v && O ? O + " " + v + " { " + N + " }" : N;
    return t = k, r = v, n = new RegExp("\\" + r + "\\b", "g"), i = new RegExp("(\\" + r + "\\b){2,}"), f(O || !v ? "" : v, j);
  }
  return f.use([].concat(d, [function(w, v, O) {
    w === 2 && O.length && O[0].lastIndexOf(r) > 0 && (O[0] = O[0].replace(n, x));
  }, m, function(w) {
    if (w === -2) {
      var v = h;
      return h = [], v;
    }
  }])), y.hash = d.length ? d.reduce(function(w, v) {
    return v.name || mt(15), ot(w, v.name);
  }, 5381).toString() : "", y;
}
var Ci = ne.createContext();
Ci.Consumer;
var Ri = ne.createContext(), Ko = (Ri.Consumer, new ji()), Cr = Xo();
function Zo() {
  return Ur(Ci) || Ko;
}
function Qo() {
  return Ur(Ri) || Cr;
}
var Jo = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(i, a) {
      a === void 0 && (a = Cr);
      var s = n.name + a.hash;
      i.hasNameForId(n.id, s) || i.insertRules(n.id, s, a(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return mt(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Cr), this.name + t.hash;
  }, e;
}(), es = /([A-Z])/, ts = /([A-Z])/g, rs = /^ms-/, ns = function(e) {
  return "-" + e.toLowerCase();
};
function Yn(e) {
  return es.test(e) ? e.replace(ts, ns).replace(rs, "-ms-") : e;
}
var Gn = function(e) {
  return e == null || e === !1 || e === "";
};
function dt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var i, a = [], s = 0, c = e.length; s < c; s += 1) (i = dt(e[s], t, r, n)) !== "" && (Array.isArray(i) ? a.push.apply(a, i) : a.push(i));
    return a;
  }
  if (Gn(e)) return "";
  if (Kr(e)) return "." + e.styledComponentId;
  if (xt(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var u = e(t);
    return G.env.NODE_ENV !== "production" && Kt.isElement(u) && console.warn(jr(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), dt(u, t, r, n);
  }
  var d;
  return e instanceof Jo ? r ? (e.inject(r, n), e.getName(n)) : e : Nr(e) ? function f(h, m) {
    var x, y, w = [];
    for (var v in h) h.hasOwnProperty(v) && !Gn(h[v]) && (Array.isArray(h[v]) && h[v].isCss || xt(h[v]) ? w.push(Yn(v) + ":", h[v], ";") : Nr(h[v]) ? w.push.apply(w, f(h[v], v)) : w.push(Yn(v) + ": " + (x = v, (y = h[v]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || x in go || x.startsWith("--") ? String(y).trim() : y + "px") + ";"));
    return m ? [m + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Xn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function is(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return xt(e) || Nr(e) ? Xn(dt(qn(qt, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Xn(dt(qn(e, r)));
}
var Kn = /invalid hook call/i, Et = /* @__PURE__ */ new Set(), as = function(e, t) {
  if (G.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        if (Kn.test(a)) i = !1, Et.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++) c[u - 1] = arguments[u];
          n.apply(void 0, [a].concat(c));
        }
      }, Qe(), i && !Et.has(r) && (console.warn(r), Et.add(r));
    } catch (a) {
      Kn.test(a.message) && Et.delete(r);
    } finally {
      console.error = n;
    }
  }
}, os = function(e, t, r) {
  return r === void 0 && (r = Ze), e.theme !== r.theme && e.theme || t || r.theme;
}, ss = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ls = /(^-|-$)/g;
function _r(e) {
  return e.replace(ss, "-").replace(ls, "");
}
var cs = function(e) {
  return Er(Ei(e) >>> 0);
};
function Ct(e) {
  return typeof e == "string" && (G.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Rr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, us = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ds(e, t, r) {
  var n = e[r];
  Rr(t) && Rr(n) ? Li(n, t) : e[r] = t;
}
function Li(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var i = 0, a = r; i < a.length; i++) {
    var s = a[i];
    if (Rr(s)) for (var c in s) us(c) && ds(e, s[c], c);
  }
  return e;
}
var Ii = ne.createContext();
Ii.Consumer;
var Tr = {};
function Pi(e, t, r) {
  var n = Kr(e), i = !Ct(e), a = t.attrs, s = a === void 0 ? qt : a, c = t.componentId, u = c === void 0 ? function(k, N) {
    var j = typeof k != "string" ? "sc" : _r(k);
    Tr[j] = (Tr[j] || 0) + 1;
    var b = j + "-" + cs("5.3.11" + j + Tr[j]);
    return N ? N + "-" + b : b;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, f = d === void 0 ? function(k) {
    return Ct(k) ? "styled." + k : "Styled(" + jr(k) + ")";
  }(e) : d, h = t.displayName && t.componentId ? _r(t.displayName) + "-" + t.componentId : t.componentId || u, m = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, x = t.shouldForwardProp;
  n && e.shouldForwardProp && (x = t.shouldForwardProp ? function(k, N, j) {
    return e.shouldForwardProp(k, N, j) && t.shouldForwardProp(k, N, j);
  } : e.shouldForwardProp);
  var y, w = new Uo(r, h, n ? e.componentStyle : void 0), v = w.isStatic && s.length === 0, O = function(k, N) {
    return function(j, b, H, I) {
      var q = j.attrs, ie = j.componentStyle, ke = j.defaultProps, ye = j.foldedComponentIds, le = j.shouldForwardProp, J = j.styledComponentId, be = j.target, ce = function(R, g, P) {
        R === void 0 && (R = Ze);
        var _ = Ue({}, g, { theme: R }), X = {};
        return P.forEach(function(W) {
          var F, D, ae, te = W;
          for (F in xt(te) && (te = te(_)), te) _[F] = X[F] = F === "className" ? (D = X[F], ae = te[F], D && ae ? D + " " + ae : D || ae) : te[F];
        }), [_, X];
      }(os(b, Ur(Ii), ke) || Ze, b, q), De = ce[0], Oe = ce[1], we = function(R, g, P, _) {
        var X = Zo(), W = Qo(), F = g ? R.generateAndInjectStyles(Ze, X, W) : R.generateAndInjectStyles(P, X, W);
        return G.env.NODE_ENV !== "production" && !g && _ && _(F), F;
      }(ie, I, De, G.env.NODE_ENV !== "production" ? j.warnTooManyClasses : void 0), et = H, $e = Oe.$as || b.$as || Oe.as || b.as || be, tt = Ct($e), C = Oe !== b ? Ue({}, b, {}, Oe) : b, T = {};
      for (var E in C) E[0] !== "$" && E !== "as" && (E === "forwardedAs" ? T.as = C[E] : (le ? le(E, Bn, $e) : !tt || Bn(E)) && (T[E] = C[E]));
      return b.style && Oe.style !== b.style && (T.style = Ue({}, b.style, {}, Oe.style)), T.className = Array.prototype.concat(ye, J, we !== J ? we : null, b.className, Oe.className).filter(Boolean).join(" "), T.ref = et, ya($e, T);
    }(y, k, N, v);
  };
  return O.displayName = f, (y = ne.forwardRef(O)).attrs = m, y.componentStyle = w, y.displayName = f, y.shouldForwardProp = x, y.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : qt, y.styledComponentId = h, y.target = n ? e.target : e, y.withComponent = function(k) {
    var N = t.componentId, j = function(H, I) {
      if (H == null) return {};
      var q, ie, ke = {}, ye = Object.keys(H);
      for (ie = 0; ie < ye.length; ie++) q = ye[ie], I.indexOf(q) >= 0 || (ke[q] = H[q]);
      return ke;
    }(t, ["componentId"]), b = N && N + "-" + (Ct(k) ? k : _r(jr(k)));
    return Pi(k, Ue({}, j, { attrs: m, componentId: b }), r);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(k) {
    this._foldedDefaultProps = n ? Li({}, e.defaultProps, k) : k;
  } }), G.env.NODE_ENV !== "production" && (as(f, h), y.warnTooManyClasses = /* @__PURE__ */ function(k, N) {
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
  } }), i && Ao(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var Ie = function(e) {
  return function t(r, n, i) {
    if (i === void 0 && (i = Ze), !Kt.isValidElementType(n)) return mt(1, String(n));
    var a = function() {
      return r(n, i, is.apply(void 0, arguments));
    };
    return a.withConfig = function(s) {
      return t(r, n, Ue({}, i, {}, s));
    }, a.attrs = function(s) {
      return t(r, n, Ue({}, i, { attrs: Array.prototype.concat(i.attrs, s).filter(Boolean) }));
    }, a;
  }(Pi, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Ie[e] = Ie(e);
});
G.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), G.env.NODE_ENV !== "production" && G.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const fs = Ie.div`
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
`, $t = "On This Page", ps = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: $t
}, Mi = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = Qe(null), i = Ea("(max-width: 991px)"), [a, s] = he({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), c = i ? 110 : 142, u = () => {
    var b;
    const v = {}, O = window.scrollY, k = (b = document.getElementById(t)) == null ? void 0 : b.getBoundingClientRect().top, N = 103;
    k >= 0 && (v.sticky = !1, v.activeContainer = ""), O > n.current.getBoundingClientRect().top && (v.sticky = !0);
    const j = a.hasHeader ? c + N : N;
    e == null || e.forEach(({ targetIdName: H }) => {
      const I = document.getElementById(H), q = (I == null ? void 0 : I.getBoundingClientRect().top) - j, ie = (I == null ? void 0 : I.getBoundingClientRect().bottom) - j;
      q < 0 && ie > 0 && (v.activeContainer = H);
    }), s((H) => ({
      ...H,
      ...v
    }));
  }, d = () => {
    so(u, 150), lo(u, 150);
  }, f = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), h = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function m(v = null) {
    if (v === null) return a.containerClass;
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
  }, []), _e(() => (window == null || window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [a.hasHeader]);
  const x = (v) => {
    var j, b;
    const O = window.scrollY - (a.hasHeader ? c + 100 : 100), k = i ? 410 : 90;
    let N = ((j = document.getElementById(v)) == null ? void 0 : j.getBoundingClientRect().top) + O;
    n.current.classList.contains("sticky") || (N -= k), r && ((b = oo(`#${v}`)) == null || b.focus()), window.scrollTo({ top: N, behavior: "smooth" });
  }, y = () => {
    Te({
      ...ps,
      action: a.showMenu ? "close" : "open"
    });
  }, w = () => {
    s((v) => ({
      ...v,
      showMenu: !v.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ l.jsx(
    fs,
    {
      requiresAltMenuSpacing: a.hasAltMenuSpacing,
      ref: n,
      className: U(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: a.sticky,
          "with-header": a.hasHeader
        }
      ),
      style: a.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ l.jsxs("div", { className: `${a.containerClass} uds-anchor-menu-wrapper`, children: [
        i ? /* @__PURE__ */ l.jsx(
          "button",
          {
            className: U("mobile-menu-toggler", {
              "show-menu": a.showMenu
            }),
            type: "button",
            onClick: () => {
              y(), w();
            },
            "data-bs-toggle": "collapse",
            "data-bs-target": "#collapseAnchorMenu",
            "aria-controls": "collapseAnchorMenu",
            children: /* @__PURE__ */ l.jsxs("h4", { children: [
              $t,
              ":",
              /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-down" })
            ] })
          }
        ) : /* @__PURE__ */ l.jsxs("h4", { children: [
          $t,
          ":"
        ] }),
        /* @__PURE__ */ l.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: U("card", "card-body", "collapse", {
              show: a.showMenu
            }),
            children: /* @__PURE__ */ l.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": $t,
                children: e == null ? void 0 : e.map((v) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ l.jsx(
                    Ke,
                    {
                      "data-testid": `anchor-item-${v.targetIdName}`,
                      classes: U("nav-link", {
                        active: a.activeContainer === v.targetIdName
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
Mi.propTypes = {
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
var Lr = function() {
  return Lr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Lr.apply(this, arguments);
}, hs = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function Qt(e) {
  var t = function(r) {
    var n = r.bgStyle, i = r.borderRadius, a = r.iconFillColor, s = r.round, c = r.size, u = hs(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return ne.createElement(
      "svg",
      Lr({ viewBox: "0 0 64 64", width: c, height: c }, u),
      s ? ne.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : ne.createElement("rect", { width: "64", height: "64", rx: i, ry: i, fill: e.color, style: n }),
      ne.createElement("path", { d: e.path, fill: a })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
var ms = Qt({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function Jt(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], i = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(i)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var gs = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
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
}(), qe = function() {
  return qe = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, qe.apply(this, arguments);
}, vs = function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
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
      f.done ? a(f.value) : i(f.value).then(c, u);
    }
    d((n = n.apply(e, t || [])).next());
  });
}, ys = function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, s;
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
      if (n = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
      switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
        case 0:
        case 1:
          a = d;
          break;
        case 4:
          return r.label++, { value: d[1], done: !1 };
        case 5:
          r.label++, i = d[1], d = [0];
          continue;
        case 7:
          d = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            r = 0;
            continue;
          }
          if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
            r.label = d[1];
            break;
          }
          if (d[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = d;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(d);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      d = t.call(e, r);
    } catch (f) {
      d = [6, f], i = 0;
    } finally {
      n = a = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}, Di = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, bs = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, ws = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, xs = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Ss(e, t, r) {
  var n = t.height, i = t.width, a = Di(t, ["height", "width"]), s = qe({ height: n, width: i, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, a), c = window.open(e, "", Object.keys(s).map(function(d) {
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
var _s = (
  /** @class */
  function(e) {
    gs(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var i = r.props, a = i.onShareWindowClose, s = i.windowHeight, c = s === void 0 ? 400 : s, u = i.windowPosition, d = u === void 0 ? "windowCenter" : u, f = i.windowWidth, h = f === void 0 ? 550 : f, m = qe({ height: c, width: h }, d === "windowCenter" ? ws(h, c) : xs(h, c));
        Ss(n, m, a);
      }, r.handleClick = function(n) {
        return vs(r, void 0, void 0, function() {
          var i, a, s, c, u, d, f, h, m, x;
          return ys(this, function(y) {
            switch (y.label) {
              case 0:
                return i = this.props, a = i.beforeOnClick, s = i.disabled, c = i.networkLink, u = i.onClick, d = i.url, f = i.openShareDialogOnClick, h = i.opts, m = c(d, h), s ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), a ? (x = a(), bs(x) ? [4, x] : [3, 2]) : [3, 2]);
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
      var n = r.children, i = r.className, a = r.disabled, s = r.disabledStyle, c = r.forwardedRef;
      r.networkLink;
      var u = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var d = r.resetButtonStyle, f = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var h = Di(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), m = U("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!a,
        disabled: !!a
      }, i), x = qe(qe(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, f), a && s);
      return ne.createElement("button", qe({}, h, { "aria-label": h["aria-label"] || u, className: m, onClick: this.handleClick, ref: c, style: x }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(ba)
), Ut = function() {
  return Ut = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ut.apply(this, arguments);
};
function er(e, t, r, n) {
  function i(a, s) {
    var c = r(a), u = Ut({}, a), d = Object.keys(c);
    return d.forEach(function(f) {
      delete u[f];
    }), ne.createElement(_s, Ut({}, n, u, { forwardedRef: s, networkName: e, networkLink: t, opts: r(a) }));
  }
  return i.displayName = "ShareButton-".concat(e), mi(i);
}
function Ts(e, t) {
  var r = t.subject, n = t.body, i = t.separator;
  return "mailto:" + Jt({ subject: r, body: n ? n + i + e : e });
}
var ks = er("email", Ts, function(e) {
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
}), Zn = Qt({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), Os = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
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
}(), As = (
  /** @class */
  function(e) {
    Os(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function wt(e, t) {
  if (!e)
    throw new As(t);
}
function Ns(e, t) {
  var r = t.quote, n = t.hashtag;
  return wt(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Jt({
    u: e,
    quote: r,
    hashtag: n
  });
}
var Qn = er("facebook", Ns, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Jn = Qt({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function js(e, t) {
  var r = t.title, n = t.summary, i = t.source;
  return wt(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Jt({ url: e, mini: "true", title: r, summary: n, source: i });
}
var ei = er("linkedin", js, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
}), ti = Qt({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function Es(e, t) {
  var r = t.title, n = t.via, i = t.hashtags, a = i === void 0 ? [] : i, s = t.related, c = s === void 0 ? [] : s;
  return wt(e, "twitter.url"), wt(Array.isArray(a), "twitter.hashtags is not an array"), wt(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + Jt({
    url: e,
    text: r,
    via: n,
    hashtags: a.length > 0 ? a.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
var ri = er("twitter", Es, function(e) {
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
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
var Cs;
function Pr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cs;
  return t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var Rs = (typeof window > "u" ? "undefined" : Ir(window)) === "object" && window.Element || function() {
};
function Ls(e, t, r) {
  if (!(e[t] instanceof Rs))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
o.oneOfType([o.string, o.func, Ls, o.shape({
  current: o.any
})]);
var Mr = o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
}), o.arrayOf(o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
})]))]), Is = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dr.apply(this, arguments);
}
function Ps(e, t) {
  if (e == null) return {};
  var r = Ms(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ms(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ds = {
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
  listTag: Mr,
  /** Set a custom element for this component */
  tag: Mr
};
function $i(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, i = e.children, a = e.tag, s = a === void 0 ? "nav" : a, c = e.listTag, u = c === void 0 ? "ol" : c, d = e["aria-label"], f = d === void 0 ? "breadcrumb" : d, h = Ps(e, Is), m = Pr(U(t), n), x = Pr(U("breadcrumb", r), n);
  return /* @__PURE__ */ ne.createElement(s, Dr({}, h, {
    className: m,
    "aria-label": f
  }), /* @__PURE__ */ ne.createElement(u, {
    className: x
  }, i));
}
$i.propTypes = Ds;
var $s = ["className", "cssModule", "active", "tag"];
function $r() {
  return $r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $r.apply(this, arguments);
}
function Hs(e, t) {
  if (e == null) return {};
  var r = Bs(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Bs(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Fs = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: o.bool,
  /** Add custom class to the element */
  className: o.string,
  /** Change existing className with a new className */
  cssModule: o.object,
  /** Set a custom element for this component */
  tag: Mr
};
function Hr(e) {
  var t = e.className, r = e.cssModule, n = e.active, i = e.tag, a = i === void 0 ? "li" : i, s = Hs(e, $s), c = Pr(U(t, n ? "active" : !1, "breadcrumb-item"), r);
  return /* @__PURE__ */ ne.createElement(a, $r({}, s, {
    className: c,
    "aria-current": n ? "page" : void 0
  }));
}
Hr.propTypes = Fs;
const zs = Ie.div`
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
`, Ws = Ie.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, Qr = ({
  type: e,
  articleUrl: t,
  publicationDate: r,
  title: n,
  body: i,
  authorEmail: a,
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
  const v = U("col", "col-12", {
    "col-lg-8": e === "event" && (y || w || f)
  }), O = () => y ? /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(Ke, { color: "maroon", href: y, label: "Register" }) }) : /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(Ke, { color: "maroon", href: w, label: "Attend on Zoom" }) }), k = () => /* @__PURE__ */ l.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ l.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ l.jsx("div", { className: "author highlight-gold", children: s }),
    u && /* @__PURE__ */ l.jsx("div", { className: "author-title", children: u }),
    a && /* @__PURE__ */ l.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ l.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ l.jsx("a", { href: `mailto: ${a}`, children: a })
    ] }),
    c && /* @__PURE__ */ l.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ l.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ l.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ l.jsx("a", { href: `tel: ${c}`, children: c })
    ] })
  ] }) }), N = () => /* @__PURE__ */ l.jsxs(
    Ws,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ l.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ l.jsx("div", { className: "event-author", children: s }),
          /* @__PURE__ */ l.jsx("div", { className: "event-author-title", children: u }),
          (a || c) && /* @__PURE__ */ l.jsxs("div", { className: "event-author-info", children: [
            a && /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("a", { href: `mailto: ${a}`, children: a }) }),
            c && /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsx("a", { href: `tel: ${c}`, children: c }) })
          ] })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ l.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ l.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ l.jsx(Qn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              Zn,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(ri, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              ti,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(ks, { url: a, quote: n, children: /* @__PURE__ */ l.jsx(
              ms,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ l.jsx(ei, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
              Jn,
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
    Hr,
    {
      active: H.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ l.jsx(Hr, { tag: "a", href: H.url, children: H.title })
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
    /* @__PURE__ */ l.jsxs(zs, { className: `container ${e}-container wrapper-container`, children: [
      d && /* @__PURE__ */ l.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ l.jsx("div", { className: "col col-12", children: /* @__PURE__ */ l.jsx($i, { listClassName: "breadcrumb", children: d.map((H) => b(H)) }) }) }),
      /* @__PURE__ */ l.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ l.jsx("div", { className: v, children: /* @__PURE__ */ l.jsx("h2", { "data-testid": "title", children: n }) }),
        e === "event" && /* @__PURE__ */ l.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (y || w) && O(),
          f && /* @__PURE__ */ l.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ l.jsx(
            Ke,
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
          /* @__PURE__ */ l.jsx(Qn, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            Zn,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ l.jsx(ri, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            ti,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ l.jsx(ei, { url: t, quote: n, children: /* @__PURE__ */ l.jsx(
            Jn,
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
          dangerouslySetInnerHTML: je(i),
          "data-testid": "body"
        }
      ) }),
      e === "news" && k(),
      e === "event" && N()
    ] })
  ] });
};
Qr.propTypes = {
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
Qr.defaultProps = {
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
const qs = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, tr = ({
  color: e,
  icon: t,
  innerRef: r,
  onClick: n,
  size: i,
  cardTitle: a,
  className: s,
  ...c
}) => {
  const u = () => {
    n == null || n();
  };
  return /* @__PURE__ */ l.jsx(
    Zt,
    {
      gaData: {
        ...qs,
        text: `${t == null ? void 0 : t[1]} icon`,
        section: a
      },
      children: /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${e} ${i === "large" && "btn-circle-large"} ${s}`,
          ref: r,
          "aria-label": "Close",
          onClick: u,
          ...c,
          children: /* @__PURE__ */ l.jsx("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` })
        }
      )
    }
  );
};
tr.propTypes = {
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
  size: o.oneOf(["large", "small"]),
  className: o.string
};
tr.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const Vs = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, rr = ({
  label: e,
  cardTitle: t,
  ariaLabel: r,
  color: n,
  disabled: i,
  element: a,
  innerRef: s,
  href: c,
  onClick: u,
  ...d
}) => {
  const f = U("btn", "btn-tag", {
    "btn-tag-alt-white": n === "white",
    "btn-tag-alt-gray": n === "gray",
    "btn-tag-alt-dark": n === "dark",
    disabled: i
  });
  let h = a;
  c && a === "button" && (h = "a");
  const m = (x) => {
    Te({ ...Vs, text: x, section: t }), u == null || u();
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
rr.propTypes = {
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
rr.defaultProps = {
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
const ft = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: i = "async",
  dataTestId: a,
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
    decoding: i,
    fetchpriority: s,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: It(r) },
    ...a && { "data-testid": a },
    ...c && { width: c },
    ...u && { height: u }
  }, v = U("uds-img", {
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
ft.propTypes = {
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
const Us = Ie.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ys = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Gs = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ys(e) ? `mailto:${e}` : e, Xs = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ve = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: i,
  title: a,
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
  Jr,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: i,
    title: a,
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
Ve.propTypes = {
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
Ve.defaultProps = {
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
const Jr = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: i,
  title: a,
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
  const O = U("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(Us, { className: O, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ l.jsx(
      ft,
      {
        src: n,
        alt: i,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: v,
        title: a
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
      Yt,
      {
        type: e,
        body: c,
        eventFormat: u,
        eventLocation: d,
        eventTime: f,
        title: a,
        buttons: h,
        linkLabel: m,
        linkUrl: x,
        tags: y,
        cardLink: v
      }
    ) }) : /* @__PURE__ */ l.jsx(
      Yt,
      {
        type: e,
        body: c,
        eventFormat: u,
        eventLocation: d,
        eventTime: f,
        title: a,
        buttons: h,
        linkLabel: m,
        linkUrl: x,
        tags: y,
        cardLink: v
      }
    )
  ] }) });
};
Jr.propTypes = {
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
Jr.defaultProps = {
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
const Yt = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: i,
  title: a,
  buttons: s,
  linkLabel: c,
  linkUrl: u,
  tags: d,
  cardLink: f
}) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  !!a && /* @__PURE__ */ l.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: f ? /* @__PURE__ */ l.jsx("a", { href: f, children: a }) : a }) }),
  !!t && /* @__PURE__ */ l.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: je(t) }) }),
  e === "event" && (i || n) && /* @__PURE__ */ l.jsx(
    en,
    {
      eventFormat: r,
      eventTime: i,
      eventLocation: n
    }
  ),
  s && /* @__PURE__ */ l.jsx("div", { className: "card-buttons", children: s.map((h) => /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ l.jsx(
        Ke,
        {
          ariaLabel: h.ariaLabel,
          color: h.color,
          icon: h.icon,
          href: h.href,
          label: h.label,
          onClick: h.onClick,
          size: h.size,
          target: h.target,
          cardTitle: a
        }
      )
    },
    `${h.label}-${h.href}`
  )) }),
  u && c && /* @__PURE__ */ l.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ l.jsx(
    Zt,
    {
      gaData: {
        ...Xs,
        section: a,
        text: c
      },
      children: /* @__PURE__ */ l.jsx("a", { href: Gs(u), children: c })
    }
  ) }),
  d && /* @__PURE__ */ l.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((h) => (
    // @ts-ignore
    /* @__PURE__ */ l.jsx(
      rr,
      {
        ariaLabel: h.ariaLabel,
        color: h.color,
        href: h.href,
        label: h.label,
        onClick: h.onClick,
        cardTitle: a
      },
      `${h.label}-${h.href}`
    )
  )) })
] });
Yt.propTypes = {
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
Yt.defaultProps = {
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
const en = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ l.jsxs("div", { className: "card-event-details", children: [
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
en.propTypes = {
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string
};
en.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
var Ks = /* @__PURE__ */ ((e) => (e.COPY = "copy", e))(Ks || {});
const Zs = ({ type: e }) => e == "copy" ? /* @__PURE__ */ l.jsx("hr", { className: "copy-divider" }) : /* @__PURE__ */ l.jsx("hr", {}), Qs = Ie.div`
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
`, Js = () => /* @__PURE__ */ l.jsxs(Qs, { children: [
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {}),
  /* @__PURE__ */ l.jsx("div", {})
] }), el = Ie.section``, tl = wa(null), rl = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: i,
  dataTransformer: a = (u) => u,
  dataFilter: s = (u) => u,
  maxItems: c
}) => {
  const [{ data: u, loading: d, error: f }, h] = ja(), [m, x] = he([]), y = { ...e.dataSource, ...t };
  return _e(() => {
    h(y == null ? void 0 : y.url);
  }, [y == null ? void 0 : y.url]), _e(() => {
    const w = u == null ? void 0 : u.nodes.map(a), v = w == null ? void 0 : w.filter(
      (O) => s(O, t == null ? void 0 : t.filters)
    );
    x(c ? v == null ? void 0 : v.slice(0, c) : v);
  }, [u]), // Init the context to be used on its childrens
  /* @__PURE__ */ l.jsx(tl.Provider, { value: { feeds: m }, children: /* @__PURE__ */ l.jsxs(el, { children: [
    n,
    f ? /* @__PURE__ */ l.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      d && !(m != null && m.length) && /* @__PURE__ */ l.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ l.jsx(Js, {}) }),
      m != null && m.length ? i : !d && /* @__PURE__ */ l.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
rl.propTypes = {
  renderHeader: o.element,
  renderBody: o.element,
  maxItems: o.number,
  dataTransformer: o.func,
  dataFilter: o.func,
  noFeedText: o.string
};
const Hi = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), Bi = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string
}), Mc = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string,
  size: o.string
}), nl = o.shape({
  url: o.string,
  filters: o.string
}), il = o.shape({
  header: Hi,
  ctaButton: Bi,
  dataSource: nl,
  maxItems: o.number
}), al = Ie.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ol = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, i = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ l.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ l.jsx(al, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ l.jsx(
          "a",
          {
            className: `btn btn-${i.color}`,
            href: i.url,
            onClick: () => Te({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: i.text
            }),
            children: i.text
          }
        ) })
      ]
    }
  );
};
ol.propTypes = {
  defaultProps: il,
  header: Hi,
  ctaButton: Bi
};
const sl = ({ children: e }) => /* @__PURE__ */ l.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ l.jsx("div", { className: "col", children: e }) });
sl.propTypes = {
  children: o.element
};
const ll = Ie.img`
  width: 100%;
`;
function cl({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ l.jsx("div", { children: "TODO: to be implemented" });
}
function ul({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: i
}) {
  const a = {
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
      className: U("uds-hero", {
        [a[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ l.jsx(
          ll,
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
            className: U({
              [c[t.color]]: t.color,
              [s[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ l.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: U({
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
            className: U("content", {
              [c[i]]: i
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
const Fi = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => ul(e),
    "story-hero": () => cl(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Fi.propTypes = {
  type: o.oneOf(["heading-hero", "story-hero"]),
  image: co,
  title: Sr,
  subTitle: Sr,
  contents: o.arrayOf(Sr),
  contentsColor: o.string
};
const We = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: i,
  onClick: a,
  ellipses: s,
  ariaLabel: c,
  children: u,
  ariaDisabled: d
}) => /* @__PURE__ */ l.jsx(
  "li",
  {
    className: U("page-item", {
      disabled: r,
      active: i,
      elipses: s
    }),
    children: t ? /* @__PURE__ */ l.jsxs(
      "button",
      {
        type: "button",
        "aria-label": c,
        className: U("page-link", {
          "page-link-icon": n
        }),
        onClick: a,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": i ? "page" : null,
        "aria-disabled": d,
        children: [
          u,
          i && /* @__PURE__ */ l.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ l.jsx("span", { className: "page-link", "data-testid": "page-link", children: u })
  }
);
We.propTypes = {
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
We.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const dl = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, tn = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: i
}) => {
  const [a, s] = he(null);
  _e(() => {
    s(r);
  }, [r]);
  const c = (f) => {
    Te({ ...dl, text: `page ${f}` });
  }, u = (f, h) => {
    const x = {
      first: 1,
      prev: a === 1 ? 1 : a - 1,
      next: a === n ? n : a + 1,
      last: n
    }[h] ?? h;
    s(x), c(x), i == null || i(f, x);
  }, d = () => {
    const f = jn(
      a === n - 1,
      2,
      a === n ? 3 : 1
    ), h = jn(
      a === 1,
      3,
      a === 2 ? 2 : 1
    ), m = Dn(
      a - f,
      a,
      n
    ), x = Dn(
      a,
      a + 1 + h,
      n
    ), y = [...m, ...x];
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      y[0] !== 1 && /* @__PURE__ */ l.jsx(
        We,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: a === 1,
          onClick: (w) => u(w, "first"),
          children: "1"
        }
      ),
      y[0] > 2 && /* @__PURE__ */ l.jsx(We, { ellipses: !0, children: "..." }),
      y.map((w) => /* @__PURE__ */ l.jsx(
        We,
        {
          ariaLabel: `Page ${w} of ${n}`,
          isClickeable: !0,
          selectedPage: a === w,
          onClick: (v) => u(v, w),
          children: w
        },
        w
      )),
      y[y.length - 1] < n - 1 && /* @__PURE__ */ l.jsx(We, { ellipses: !0, children: "..." }),
      y[y.length - 1] !== n && /* @__PURE__ */ l.jsx(
        We,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: a === n,
          onClick: (w) => u(w, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ l.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ l.jsxs(
    "ul",
    {
      className: U(
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
          We,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: a === 1,
            pageLinkIcon: !0,
            onClick: (f) => u(f, "prev"),
            ariaDisabled: a === 1,
            ariaLabel: "Previous Page"
          }
        ),
        d(),
        /* @__PURE__ */ l.jsx(
          We,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: a === n,
            disabled: a === n,
            pageLinkIcon: !0,
            onClick: (f) => u(f, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
tn.propTypes = {
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
tn.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
const ni = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ii = {
  OPEN: "open",
  CLOSE: "close"
}, fl = {
  LARGE: "large",
  SMALL: "small"
}, st = (e) => e === fl.SMALL, zi = ({ size: e, image: t, imageAlt: r }) => st(e) ? /* @__PURE__ */ l.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ l.jsx(ft, { src: t, alt: r, fetchPriority: "high" }) }) : /* @__PURE__ */ l.jsx(ft, { src: t, alt: r, fetchPriority: "high" });
zi.propTypes = {
  size: o.oneOf(["small", "large"]),
  image: o.string.isRequired,
  imageAlt: o.string.isRequired
};
const Wi = ({ heading: e, citation: t }) => /* @__PURE__ */ l.jsxs("div", { className: "citation", children: [
  /* @__PURE__ */ l.jsx("h4", { children: e }),
  /* @__PURE__ */ l.jsxs("p", { children: [
    "— ",
    t
  ] })
] });
Wi.propTypes = {
  heading: o.string.isRequired,
  citation: o.string.isRequired
};
const qi = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [i, a] = he(!1), s = `info-layer-${Math.floor(Math.random() * 1e5)}`, c = (u) => {
    (u.type === "click" || u.key === "Enter" || u.key === " ") && (a(!i), Te({
      ...ni,
      text: "Expand ranking",
      action: i ? ii.OPEN : ii.CLOSE,
      section: r
    }));
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: U("info-layer", { active: i }),
      "data-testid": "info-layer",
      id: s,
      children: /* @__PURE__ */ l.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: U("header", {
              closed: st(e) && !i
            }),
            children: [
              st(e) && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ l.jsx("p", { dangerouslySetInnerHTML: je(t) }),
              !st(e) && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(
                "button",
                {
                  onClick: c,
                  className: "btn-expand",
                  type: "button",
                  "aria-expanded": i,
                  "aria-controls": s,
                  children: [
                    /* @__PURE__ */ l.jsx("h4", { children: r }),
                    /* @__PURE__ */ l.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              ) }),
              st(e) && /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(
                "button",
                {
                  onClick: c,
                  className: "btn btn-expand",
                  type: "button",
                  "aria-expanded": i,
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
        !st(e) && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ l.jsx("p", { dangerouslySetInnerHTML: je(t) }),
        n && /* @__PURE__ */ l.jsxs(
          "a",
          {
            href: n,
            className: "read-more",
            onClick: () => {
              Te({
                ...ni,
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
qi.propTypes = {
  imageSize: o.oneOf(["small", "large"]),
  body: o.string.isRequired,
  heading: o.string.isRequired,
  readMoreLink: o.string
};
const Vi = ({
  imageSize: e = "large",
  image: t,
  imageAlt: r,
  heading: n,
  body: i,
  readMoreLink: a = "",
  citation: s
}) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: U("card-ranking", {
      "large-image": e === "large",
      "small-image": e === "small"
    }),
    children: [
      /* @__PURE__ */ l.jsx(zi, { size: e, image: t, imageAlt: r }),
      st(e) && /* @__PURE__ */ l.jsx(Wi, { heading: n, citation: s }),
      /* @__PURE__ */ l.jsx(
        qi,
        {
          imageSize: e,
          body: i,
          heading: n,
          readMoreLink: a
        }
      )
    ]
  }
);
Vi.propTypes = {
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
var pl = /* @__PURE__ */ ((e) => (e.WARNING = "warning", e.INFO = "info", e.SUCCESS = "success", e.ERROR = "error", e))(pl || {});
const hl = ({
  type: e,
  dismissable: t,
  children: r
}) => {
  var d, f, h;
  const { isBootstrap: n, isReact: i } = ki(), [a, s] = he(!0), c = () => s(!1), u = {
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
  return a && /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: U("alert", {
        "alert-dismissable": t,
        [`alert-${(d = u[e]) == null ? void 0 : d.alertClass}`]: e
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ l.jsx(
          "span",
          {
            title: (f = u[e]) == null ? void 0 : f.iconTitle,
            className: `fa fa-icon fa-${(h = u[e]) == null ? void 0 : h.iconName}`
          }
        ) }),
        /* @__PURE__ */ l.jsx("div", { className: "alert-content", children: r }),
        t && /* @__PURE__ */ l.jsx("div", { className: "alert-close", children: /* @__PURE__ */ l.jsx(
          tr,
          {
            icon: ["fas", "times"],
            onClick: i && c,
            "data-bs-dismiss": n && "alert"
          }
        ) })
      ]
    }
  );
}, ml = Ie.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Ui = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => /* @__PURE__ */ l.jsxs(ml, { children: [
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
Ui.propTypes = {
  hidePrev: o.bool,
  hideNext: o.bool,
  clickPrev: o.func.isRequired,
  clickNext: o.func.isRequired
};
const Yi = mi(function(t, r) {
  const {
    id: n,
    selected: i,
    title: a,
    selectTab: s,
    leftKeyPressed: c,
    rightKeyPressed: u,
    icon: d
  } = t, f = Qe(null);
  xa(
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
      className: `nav-item nav-link ${i ? "active" : ""}`,
      id: n,
      href: `#nav-${n}`,
      role: "tab",
      "aria-controls": `nav-${n}`,
      "aria-selected": i,
      onClick: (m) => s(m, n, a),
      onKeyDown: h,
      tabIndex: i ? "" : "-1",
      children: [
        a,
        " ",
        d && /* @__PURE__ */ l.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` })
      ]
    }
  );
});
Yi.propTypes = {
  id: o.string.isRequired,
  selected: o.bool.isRequired,
  title: o.string.isRequired,
  selectTab: o.func.isRequired,
  leftKeyPressed: o.func.isRequired,
  rightKeyPressed: o.func.isRequired,
  icon: o.arrayOf(o.string)
};
function gl() {
  const e = Qe({}), t = Sa(
    (r) => (n) => {
      e.current[r] = n;
    },
    []
  );
  return [e, t];
}
const vl = ({ id: e, bgColor: t, selected: r, children: n }) => r && /* @__PURE__ */ l.jsx(
  "div",
  {
    className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
vl.propTypes = {
  id: o.string.isRequired,
  bgColor: o.string,
  selected: o.bool,
  children: o.oneOfType([o.array, o.element])
};
const Gi = ({
  initialTab: e = "",
  children: t,
  bgColor: r = "",
  onTabChange: n = (i) => {
  }
}) => {
  const i = ne.Children.toArray(t), a = Qe(!1), [s, c] = he(
    e && e !== "null" ? e : i[0].props.id
  ), u = Qe(null), [d, f] = gl(), h = (I) => {
    var q;
    n(I), (q = d.current[I]) == null || q.focus(), c(I);
  }, [m, x] = he(0), [y, w] = he();
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
    a.current && e && e !== "null" && s !== e && c(e);
  }, [e]), _e(() => {
    a.current = !0;
  }, []);
  const v = (I) => {
    Te({
      event: "select",
      action: "click",
      name: "onclick",
      type: "carousel",
      region: "main content",
      text: I
    });
  }, O = (I) => {
    Te({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      text: I
    });
  }, k = i.map((I) => ne.cloneElement(I, {
    bgColor: r,
    selected: s === I.props.id
  })), N = (I) => {
    const q = u.current, ie = q.scrollWidth - q.clientWidth;
    let ye = q.scrollLeft + 200 * I;
    ye = Math.max(0, Math.min(ie, ye)), q.scrollTo({
      left: ye,
      behavior: "smooth"
    });
  }, j = (I, q, ie) => {
    O(ie), I.preventDefault(), h(q);
  }, b = (I = !0) => {
    const q = i.length, ie = I ? 1 : -1, ke = i.findIndex((le) => le.props.id === s), ye = i[(q + ke + ie) % q].props.id;
    h(ye);
  };
  let H = "uds-tabbed-panels";
  return r === "bg-dark" && (H += " uds-tabbed-panels-dark"), /* @__PURE__ */ l.jsxs("div", { className: r, children: [
    /* @__PURE__ */ l.jsxs("nav", { className: H, children: [
      /* @__PURE__ */ l.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: u, children: i.map((I, q) => /* @__PURE__ */ l.jsx(
        Yi,
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
        Ui,
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
Gi.propTypes = {
  initialTab: o.string,
  children: o.arrayOf(o.element).isRequired,
  bgColor: o.string,
  onTabChange: o.func
};
const rn = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var i, a;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${It(n.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ l.jsx(
          ft,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ l.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ l.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ l.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          r.title && /* @__PURE__ */ l.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ l.jsx("span", { className: It(n.titleCssClass), children: r.title }) }),
          r.content && /* @__PURE__ */ l.jsx(
            "p",
            {
              className: It(n.contentCssClass),
              "data-testid": "testimonial-content",
              children: r.content
            }
          ),
          (!!((i = r.cite) != null && i.name) || !!((a = r.cite) != null && a.description)) && /* @__PURE__ */ l.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ l.jsx("cite", { className: "name", children: r.cite.name }),
            r.cite && /* @__PURE__ */ l.jsx("cite", { className: "description", children: r.cite.description })
          ] })
        ] })
      ]
    }
  );
};
rn.propTypes = {
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
let yl = 0;
const bl = ({
  title: e,
  content: t,
  triggerElement: r
}) => {
  const [n] = he(`tooltip-${yl++}`), i = Qe(null);
  return /* @__PURE__ */ l.jsxs("span", { className: "uds-tooltip-container", children: [
    ne.cloneElement(r, {
      ref: i,
      "aria-describedby": n,
      tabindex: 0
    }),
    /* @__PURE__ */ l.jsxs("div", { role: "tooltip", className: "uds-tooltip-description", id: n, children: [
      e && /* @__PURE__ */ l.jsx("span", { className: "uds-tooltip-heading", children: e }),
      t
    ] })
  ] });
}, wl = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, xl = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: i,
  controls: a = !0
}) => {
  const s = Qe(null), c = () => {
    Te({ ...wl, section: n });
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: U(`uds-video-container ${i}`, {
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
            controls: a || !0,
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
}, Sl = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ l.jsxs(
  "div",
  {
    className: U(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ l.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ l.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ l.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ l.jsx("figcaption", { children: t }) })
    ]
  }
), Xi = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: i = "",
    caption: a,
    className: s,
    controls: c = !0
  } = e;
  return t === "youtube" ? Sl({ url: r, title: i, caption: a, className: s }) : xl({
    url: r,
    vttUrl: n,
    title: i,
    caption: a,
    className: s,
    controls: c
  });
};
Xi.propTypes = {
  type: o.oneOf(["video", "youtube"]),
  url: o.string,
  vttUrl: o.string,
  title: o.string,
  className: o.string,
  caption: o.string,
  controls: o.bool
};
const _l = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, nn = ({ children: e }) => (
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
nn.propTypes = {
  children: o.oneOfType([
    o.element,
    o.arrayOf(o.element)
  ]).isRequired
};
const Ki = ({ buttonCount: e }) => {
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
          onClick: () => Te({ ..._l })
        },
        `bullet-${r}`
      )
    );
  return /* @__PURE__ */ l.jsx(nn, { children: t });
};
Ki.propTypes = {
  buttonCount: o.number.isRequired
};
const Zi = ({ imageItems: e, onItemClick: t = () => null }) => {
  const r = (i, a) => {
    const { ariaSelected: s } = i.currentTarget.dataset;
    i.currentTarget.dataset.ariaSelected = String(!s), i.stopPropagation(), t(a);
  }, n = e.map((i, a) => /* @__PURE__ */ l.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${a}`,
      "aria-label": `Slide view ${a + 1}`,
      "aria-selected": "false",
      onClick: (s) => r(s, a),
      onKeyDown: (s) => r(s, a),
      children: /* @__PURE__ */ l.jsx(
        "img",
        {
          src: i,
          alt: `Slide ${a + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${a}`
  ));
  return /* @__PURE__ */ l.jsx(nn, { children: n });
};
Zi.propTypes = {
  imageItems: o.arrayOf(o.string).isRequired,
  onItemClick: o.func
};
const an = ({ onClick: e = () => null }) => /* @__PURE__ */ l.jsx(
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
an.propTypes = {
  onClick: o.func
};
const on = ({ onClick: e = () => null }) => /* @__PURE__ */ l.jsx(
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
on.propTypes = {
  onClick: o.func
};
const ai = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, sn = ({ children: e = null }) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
sn.propTypes = {
  children: o.arrayOf(o.element)
};
const Qi = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ l.jsxs(sn, { children: [
  /* @__PURE__ */ l.jsx(
    on,
    {
      onClick: () => {
        e(), Te({ ...ai, text: "left chevron" });
      }
    }
  ),
  t,
  /* @__PURE__ */ l.jsx(
    an,
    {
      onClick: () => {
        e(), Te({ ...ai, text: "right chevron" });
      }
    }
  )
] });
Qi.propTypes = {
  children: o.element,
  onClick: o.func
};
const Ji = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ l.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ l.jsx("ul", { className: "glide__slides", children: t });
};
Ji.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: o.arrayOf(o.object)
};
function oi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oi(Object(r), !0).forEach(function(n) {
      kl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oi(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ht(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(t) {
    return typeof t;
  } : Ht = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ht(e);
}
function nr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ir(e, t, r) {
  return t && Tl(e.prototype, t), e;
}
function kl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ol(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Br(e, t);
}
function pt(e) {
  return pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pt(e);
}
function Br(e, t) {
  return Br = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Br(e, t);
}
function Al() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jl(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Nl(e);
}
function El(e) {
  var t = Al();
  return function() {
    var n = pt(e), i;
    if (t) {
      var a = pt(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return jl(this, i);
  };
}
function Cl(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = pt(e), e !== null); )
    ;
  return e;
}
function Bt() {
  return typeof Reflect < "u" && Reflect.get ? Bt = Reflect.get : Bt = function(t, r, n) {
    var i = Cl(t, r);
    if (i) {
      var a = Object.getOwnPropertyDescriptor(i, r);
      return a.get ? a.get.call(arguments.length < 3 ? t : n) : a.value;
    }
  }, Bt.apply(this, arguments);
}
var Rl = {
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
function Ye(e) {
  console.error("[Glide warn]: ".concat(e));
}
function pe(e) {
  return parseInt(e);
}
function Ll(e) {
  return parseFloat(e);
}
function Fr(e) {
  return typeof e == "string";
}
function ht(e) {
  var t = Ht(e);
  return t === "function" || t === "object" && !!e;
}
function Gt(e) {
  return typeof e == "function";
}
function ea(e) {
  return typeof e > "u";
}
function zr(e) {
  return e.constructor === Array;
}
function Il(e, t, r) {
  var n = {};
  for (var i in t)
    Gt(t[i]) ? n[i] = t[i](e, n, r) : Ye("Extension must be a function");
  for (var a in n)
    Gt(n[a].mount) && n[a].mount();
  return n;
}
function Q(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Pl(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Wr(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(i) {
      t.classes.hasOwnProperty(i) && (r.classes[i] = si(si({}, e.classes[i]), t.classes[i]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var Ml = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    nr(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return ir(e, [{
    key: "on",
    value: function(r, n) {
      if (zr(r)) {
        for (var i = 0; i < r.length; i++)
          this.on(r[i], n);
        return;
      }
      this.hop.call(this.events, r) || (this.events[r] = []);
      var a = this.events[r].push(n) - 1;
      return {
        remove: function() {
          delete this.events[r][a];
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
      if (zr(r)) {
        for (var i = 0; i < r.length; i++)
          this.emit(r[i], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(a) {
        a(n || {});
      });
    }
  }]), e;
}(), Dl = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    nr(this, e), this._c = {}, this._t = [], this._e = new Ml(), this.disabled = !1, this.selector = t, this.settings = Wr(Rl, r), this.index = this.settings.startAt;
  }
  return ir(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), ht(r) ? this._c = Il(this, r, this._e) : Ye("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return zr(r) ? this._t = r : Ye("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Wr(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
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
      ht(r) ? this._o = r : Ye("Options must be an `object` instance.");
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
      this._i = pe(r);
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
function $l(e, t, r) {
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
        if (e.settings.bound && pe(h) > f) {
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
        var y = i(x);
        y > f && (this._o = !0), e.index = a(y, x);
        return;
      }
      if (m === "<" || m === "|" && h === "<") {
        var w = s(x);
        w < 0 && (this._o = !0), e.index = c(w, x);
        return;
      }
      Ye("Invalid direction pattern [".concat(m).concat(h, "] has been used"));
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
  function i(u) {
    var d = e.index;
    return e.isType("carousel") ? d + u : d + (u - d % u);
  }
  function a(u, d) {
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
        steps: f ? pe(f) ? pe(f) : f : 0
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
      return this.isBound() ? f - 1 - (pe(d.perView) - 1) + pe(d.focusAt) : f - 1;
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
function li() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function ar(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, i, a, s, c = 0, u = function() {
    c = r.leading === !1 ? 0 : li(), n = null, s = e.apply(i, a), n || (i = a = null);
  }, d = function() {
    var h = li();
    !c && r.leading === !1 && (c = h);
    var m = t - (h - c);
    return i = this, a = arguments, m <= 0 || m > t ? (n && (clearTimeout(n), n = null), c = h, s = e.apply(i, a), n || (i = a = null)) : !n && r.trailing !== !1 && (n = setTimeout(u, m)), s;
  };
  return d.cancel = function() {
    clearTimeout(n), c = 0, n = i = a = null;
  }, d;
}
var Rt = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Hl(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(a) {
      for (var s = 0, c = a.length; s < c; s++) {
        var u = a[s].style, d = t.Direction.value;
        s !== 0 ? u[Rt[d][0]] = "".concat(this.value / 2, "px") : u[Rt[d][0]] = "", s !== a.length - 1 ? u[Rt[d][1]] = "".concat(this.value / 2, "px") : u[Rt[d][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(a) {
      for (var s = 0, c = a.length; s < c; s++) {
        var u = a[s].style;
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
      return pe(e.settings.gap);
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
      var a = e.settings.perView;
      return n.value * (a - 1) / a;
    }
  }), r.on(["build.after", "update"], ar(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function ta(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function qr(e) {
  return Array.prototype.slice.call(e);
}
var Bl = '[data-glide-el="track"]';
function Fl(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Bl), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = qr(this.wrapper.children).filter(function(a) {
        return !a.classList.contains(e.settings.classes.slide.clone);
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
    set: function(a) {
      Fr(a) && (a = document.querySelector(a)), a !== null ? n._r = a : Ye("Root element must be a existing Html node");
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
    set: function(a) {
      n._t = a;
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
function zl(e, t, r) {
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
    set: function(a) {
      ht(a) ? (a.before = pe(a.before), a.after = pe(a.after)) : a = pe(a), n._v = a;
    }
  }), Q(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var a = n.value, s = e.settings.perView;
      return ht(a) ? a.before / s + a.after / s : a * 2 / s;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Wl(e, t, r) {
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
      var a = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = s, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: a.value
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
    set: function(a) {
      n._o = ea(a) ? 0 : pe(a);
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
      var a = this.offset, s = this.translate;
      return t.Direction.is("rtl") ? s + a : s - a;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function ql(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var a = "".concat(this.slideWidth, "px"), s = t.Html.slides, c = 0; c < s.length; c++)
        s[c].style.width = a;
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
      for (var a = t.Html.slides, s = 0; s < a.length; s++)
        a[s].style.width = "";
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
function Vl(e, t, r) {
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
      var a = e.settings.classes, s = t.Html.slides[e.index];
      s && (s.classList.add(a.slide.active), ta(s).forEach(function(c) {
        c.classList.remove(a.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var a = e.settings.classes, s = a.type, c = a.slide;
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
function Ul(e, t, r) {
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
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = t.Html.slides, c = e.settings, u = c.perView, d = c.classes, f = c.cloningRatio;
      if (s.length > 0)
        for (var h = +!!e.settings.peek, m = u + h + Math.round(u / 2), x = s.slice(0, m).reverse(), y = s.slice(m * -1), w = 0; w < Math.max(f, Math.floor(u / s.length)); w++) {
          for (var v = 0; v < x.length; v++) {
            var O = x[v].cloneNode(!0);
            O.classList.add(d.slide.clone), a.push(O);
          }
          for (var k = 0; k < y.length; k++) {
            var N = y[k].cloneNode(!0);
            N.classList.add(d.slide.clone), a.unshift(N);
          }
        }
      return a;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var a = this.items, s = t.Html, c = s.wrapper, u = s.slides, d = Math.floor(a.length / 2), f = a.slice(0, d).reverse(), h = a.slice(d * -1).reverse(), m = "".concat(t.Sizes.slideWidth, "px"), x = 0; x < h.length; x++)
        c.appendChild(h[x]);
      for (var y = 0; y < f.length; y++)
        c.insertBefore(f[y], u[0]);
      for (var w = 0; w < a.length; w++)
        a[w].style.width = m;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var a = this.items, s = 0; s < a.length; s++)
        t.Html.wrapper.removeChild(a[s]);
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
var Je = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    nr(this, e), this.listeners = t;
  }
  return ir(e, [{
    key: "on",
    value: function(r, n, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Fr(r) && (r = [r]);
      for (var s = 0; s < r.length; s++)
        this.listeners[r[s]] = i, n.addEventListener(r[s], this.listeners[r[s]], a);
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
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Fr(r) && (r = [r]);
      for (var a = 0; a < r.length; a++)
        n.removeEventListener(r[a], this.listeners[r[a]], i);
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
function Yl(e, t, r) {
  var n = new Je(), i = {
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
      n.on("resize", window, ar(function() {
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
    i.unbind(), n.destroy();
  }), i;
}
var Gl = ["ltr", "rtl"], Xl = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Kl(e, t, r) {
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
    resolve: function(a) {
      var s = a.slice(0, 1);
      return this.is("rtl") ? a.split(s).join(Xl[s]) : a;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(a) {
      return this.value === a;
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
    set: function(a) {
      Gl.indexOf(a) > -1 ? n._v = a : Ye("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Zl(e, t) {
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
function Ql(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var i = Math.floor(n / t.Sizes.slideWidth);
      return n + t.Gaps.value * i;
    }
  };
}
function Jl(e, t) {
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
function ec(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      if (e.settings.focusAt >= 0) {
        var i = t.Peek.value;
        return ht(i) ? n - i.before : n - i;
      }
      return n;
    }
  };
}
function tc(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var i = t.Gaps.value, a = t.Sizes.width, s = e.settings.focusAt, c = t.Sizes.slideWidth;
      return s === "center" ? n - (a / 2 - c / 2) : n - c * s - i * s;
    }
  };
}
function rc(e, t, r) {
  var n = [Ql, Jl, ec, tc].concat(e._t, [Zl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(a) {
      for (var s = 0; s < n.length; s++) {
        var c = n[s];
        Gt(c) && Gt(c().modify) ? a = c(e, t, r).modify(a) : Ye("Transformer should be a function that returns an object with `modify()` method");
      }
      return a;
    }
  };
}
function nc(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(a) {
      var s = rc(e, t).mutate(a), c = "translate3d(".concat(-1 * s, "px, 0px, 0px)");
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
      var a = t.Sizes.length, s = e.index, c = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? a + (s - c) : (s + c) % a;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var a = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? a * -1 : a;
    }
  };
  return r.on("move", function(i) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(i.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var a = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(a - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function ic(e, t, r) {
  var n = !1, i = {
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
  return Q(i, "duration", {
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
    i.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    i.disable();
  }), r.on("run", function() {
    i.enable();
  }), r.on("destroy", function() {
    i.remove();
  }), i;
}
var ra = !1;
try {
  var ci = Object.defineProperty({}, "passive", {
    get: function() {
      ra = !0;
    }
  });
  window.addEventListener("testPassive", null, ci), window.removeEventListener("testPassive", null, ci);
} catch {
}
var Vr = ra, Lt = ["touchstart", "mousedown"], ui = ["touchmove", "mousemove"], di = ["touchend", "touchcancel", "mouseup", "mouseleave"], fi = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function ac(e, t, r) {
  var n = new Je(), i = 0, a = 0, s = 0, c = !1, u = Vr ? {
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
        i = null, a = pe(m.pageX), s = pe(m.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(h) {
      if (!e.disabled) {
        var m = e.settings, x = m.touchAngle, y = m.touchRatio, w = m.classes, v = this.touches(h), O = pe(v.pageX) - a, k = pe(v.pageY) - s, N = Math.abs(O << 2), j = Math.abs(k << 2), b = Math.sqrt(N + j), H = Math.sqrt(j);
        if (i = Math.asin(H / b), i * 180 / Math.PI < x)
          h.stopPropagation(), t.Move.make(O * Ll(y)), t.Html.root.classList.add(w.dragging), r.emit("swipe.move");
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
        var m = e.settings, x = m.perSwipe, y = m.touchAngle, w = m.classes, v = this.touches(h), O = this.threshold(h), k = v.pageX - a, N = i * 180 / Math.PI;
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
      x && n.on(Lt[0], t.Html.wrapper, function(w) {
        h.start(w);
      }, u), y && n.on(Lt[1], t.Html.wrapper, function(w) {
        h.start(w);
      }, u);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Lt[0], t.Html.wrapper, u), n.off(Lt[1], t.Html.wrapper, u);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var h = this;
      n.on(ui, t.Html.wrapper, ar(function(m) {
        h.move(m);
      }, e.settings.throttle), u);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(ui, t.Html.wrapper, u);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var h = this;
      n.on(di, t.Html.wrapper, function(m) {
        h.end(m);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(di, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(h) {
      return fi.indexOf(h.type) > -1 ? h : h.touches[0] || h.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(h) {
      var m = e.settings;
      return fi.indexOf(h.type) > -1 ? m.dragThreshold : m.swipeThreshold;
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
function oc(e, t, r) {
  var n = new Je(), i = {
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
    i.unbind(), n.destroy();
  }), i;
}
function sc(e, t, r) {
  var n = new Je(), i = !1, a = !1, s = {
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
      a && (u.stopPropagation(), u.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (a = !0, !i) {
        for (var u = 0; u < this.items.length; u++)
          this.items[u].draggable = !1;
        i = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (a = !1, i) {
        for (var u = 0; u < this.items.length; u++)
          this.items[u].draggable = !0;
        i = !1;
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
var lc = '[data-glide-el="controls[nav]"]', ln = '[data-glide-el^="controls"]', cc = "".concat(ln, ' [data-glide-dir*="<"]'), uc = "".concat(ln, ' [data-glide-dir*=">"]');
function dc(e, t, r) {
  var n = new Je(), i = Vr ? {
    passive: !0
  } : !1, a = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(lc), this._c = t.Html.root.querySelectorAll(ln), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(cc),
        next: t.Html.root.querySelectorAll(uc)
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
      d && (d.classList.add(u.classes.nav.active), ta(d).forEach(function(f) {
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
        var c = a._arrowControls.next, u = a._arrowControls.previous;
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
        qr(h).forEach(function(m) {
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
        qr(h).forEach(function(m) {
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
        n.on("click", c[u], this.click), n.on("touchstart", c[u], this.click, i);
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
      !Vr && c.type === "touchstart" && c.preventDefault();
      var u = c.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(u));
    }
  };
  return Q(a, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return a._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    a.setActive();
  }), r.on(["mount.after", "run"], function() {
    a.setArrowState();
  }), r.on("destroy", function() {
    a.removeBindings(), a.removeActive(), n.destroy();
  }), a;
}
function fc(e, t, r) {
  var n = new Je(), i = {
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
    i.unbind();
  }), r.on("update", function() {
    i.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), i;
}
function pc(e, t, r) {
  var n = new Je(), i = {
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
      this._e && (this.enable(), e.settings.autoplay && ea(this._i) && (this._i = setInterval(function() {
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
  return Q(i, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var s = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return pe(s || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    i.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    i.stop();
  }), r.on(["pause", "destroy"], function() {
    i.disable(), i.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    i.start();
  }), r.on(["play"], function() {
    i.enable(), i.start();
  }), r.on("update", function() {
    i.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), i;
}
function pi(e) {
  return ht(e) ? Pl(e) : (Ye("Breakpoints option must be an object"), {});
}
function hc(e, t, r) {
  var n = new Je(), i = e.settings, a = pi(i.breakpoints), s = Object.assign({}, i), c = {
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
  return Object.assign(i, c.match(a)), n.on("resize", window, ar(function() {
    e.settings = Wr(i, c.match(a));
  }, e.settings.throttle)), r.on("update", function() {
    a = pi(a), s = Object.assign({}, i);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), c;
}
var mc = {
  // Required
  Html: Fl,
  Translate: nc,
  Transition: ic,
  Direction: Kl,
  Peek: zl,
  Sizes: ql,
  Gaps: Hl,
  Move: Wl,
  Clones: Ul,
  Resize: Yl,
  Build: Vl,
  Run: $l,
  // Optional
  Swipe: ac,
  Images: oc,
  Anchors: sc,
  Controls: dc,
  Keyboard: fc,
  Autoplay: pc,
  Breakpoints: hc
}, gc = /* @__PURE__ */ function(e) {
  Ol(r, e);
  var t = El(r);
  function r() {
    return nr(this, r), t.apply(this, arguments);
  }
  return ir(r, [{
    key: "mount",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Bt(pt(r.prototype), "mount", this).call(this, Object.assign({}, mc, i));
    }
  }]), r;
}(Dl);
function vc(e) {
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
function yc(e = 1, t, r = !0, n) {
  const { perViewSm: i, perViewMd: a, perViewLg: s } = vc(e), c = r ? 24 : 0, u = r ? { before: 48, after: 48 } : 0, d = r ? { before: 124, after: 124 } : 0;
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
        perView: i,
        peek: u
      },
      768: {
        // BS4 md
        perView: a,
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
function bc(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), i = e.querySelector(".glide__arrow--next"), a = e.querySelector(".glide__track"), s = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || i)) return;
  const c = ["slider-start", "slider-mid", "slider-end"], u = "glide__arrow--disabled";
  a == null || a.classList.remove(...c), s == null || s.classList.remove(...c), t === 0 ? (a == null || a.classList.add("slider-start"), s == null || s.classList.add("slider-start"), n.classList.add(u), i.classList.remove(u)) : t >= r - 1 ? (a == null || a.classList.add("slider-end"), s == null || s.classList.add("slider-end"), n.classList.remove(u), i.classList.add(u)) : (a == null || a.classList.add("slider-mid"), s == null || s.classList.add("slider-mid"), n.classList.remove(u), i.classList.remove(u));
}
function wc(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), i = t, a = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((s, c) => {
    c < i || c > a ? (s.setAttribute("aria-hidden", "true"), s.setAttribute("tabindex", "-1"), s.setAttribute("inert", "")) : (s.setAttribute("aria-hidden", "false"), s.removeAttribute("tabindex"), s.removeAttribute("inert"));
  });
}
function xc({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: i,
  hasPeek: a = !0,
  isDraggable: s
}) {
  const c = yc(t, n, a, s), u = new gc(`#${e}`, c);
  let d = document.querySelector(`#${e}`);
  return d.addEventListener("keyup", (f) => {
    const h = f;
    h.keyCode === 39 ? u.go(">") : h.keyCode === 37 ? u.go("<") : h.keyCode === 13 && u.go(document.activeElement.dataset.glideDir);
  }), u.on("build.before", () => {
    d = document.querySelector(`#${e}`), d && d.classList.add("slider-start");
  }), u.on("move", () => {
    if (d = document.querySelector(`#${e}`), !d) return;
    const f = u.index;
    wc(d, f, t);
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
    bc(d, f, r), d.setAttribute("data-current-index", f), i && i(f);
  }), u.mount(), u;
}
function Sc(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const St = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: i = "",
  CustomNavComponent: a,
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
  const O = `glide-${Math.ceil(Math.random() * 1e4)}`, k = Sc(n.length, e);
  return _e(() => {
    xc({
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
      className: `glide ${i}`,
      id: O,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": d,
      "data-image-auto-size": m,
      "data-has-shadow": v,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ l.jsx(Ji, { carouselItems: n }) }),
        a ? (
          // @ts-ignore
          /* @__PURE__ */ l.jsx(a, { instanceName: O })
        ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          h && /* @__PURE__ */ l.jsx(Ki, { buttonCount: k }),
          f && /* @__PURE__ */ l.jsx(Qi, {})
        ] })
      ]
    }
  );
};
St.propTypes = {
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
const _c = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: i,
  eventLocation: a,
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
      Ve,
      {
        type: h,
        horizontal: m,
        image: t,
        imageAltText: r,
        title: n,
        body: i,
        eventFormat: x,
        eventLocation: a,
        eventTime: s,
        buttons: c,
        linkLabel: u,
        linkUrl: d || ((y = c == null ? void 0 : c[0]) == null ? void 0 : y.href),
        tags: f
      }
    )
  };
}, na = ({
  perView: e = 0,
  cardItems: t,
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: i = !1,
  width: a = void 0,
  maxWidth: s = void 0,
  imageAutoSize: c = !0
}) => {
  const u = parseInt(`${e}`, 10), d = t.map(
    (h) => _c(h, r, i, n)
  ), f = t.length > u;
  return /* @__PURE__ */ l.jsx(
    St,
    {
      perView: +u,
      maxWidth: s,
      width: a,
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
na.propTypes = {
  perView: o.string.isRequired,
  cardItems: o.arrayOf(
    o.shape({
      title: o.string.isRequired,
      content: o.string,
      eventLocation: o.string,
      eventTime: o.string,
      image: o.string,
      imageAltText: o.string,
      buttons: Ve.propTypes.buttons,
      linkLabel: o.string,
      linkUrl: o.string,
      tags: Ve.propTypes.tags
    })
  ).isRequired,
  cardType: Ve.propTypes.type,
  cardEventFormat: Ve.propTypes.eventFormat,
  cardHorizontal: Ve.propTypes.horizontal,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const Tc = ({ id: e, imageSource: t, imageAltText: r, title: n, content: i }) => ({
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
    (n || i) && /* @__PURE__ */ l.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ l.jsx("div", { className: "uds-caption-text", children: n ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx("h3", { children: n }),
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: i } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: i } })
        ) })
      }
    )
  ] }) })
}), ia = ({
  perView: e = 0,
  imageItems: t,
  width: r = void 0,
  maxWidth: n = void 0,
  imageAutoSize: i = !0
}) => {
  const a = parseInt(`${e}`, 10), s = t.map(Tc), c = t.length > a;
  return /* @__PURE__ */ l.jsx(
    St,
    {
      perView: +a,
      maxWidth: n,
      width: r,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: s,
      imageAutoSize: i,
      removeSideBackground: t.length <= a,
      hasPositionIndicators: c,
      hasNavButtons: c,
      isDraggable: c,
      hasShadow: !0
    }
  );
};
ia.propTypes = {
  perView: o.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: o.arrayOf(o.object).isRequired,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const kc = (e, t) => {
  if (!e)
    return 0;
  const r = (e.match(/<br/g) || []).length, n = t / 6;
  return (parseInt(`${e.length / n}`, 10) + r) * 20;
}, Xt = {
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
}, Oc = ({ id: e, imageSource: t, imageAltText: r }) => ({
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
}), aa = ({ instanceName: e, imageItems: t, hasContent: r }) => {
  const n = "data-current-index", [i, a] = he(t[0].title), [s, c] = he(t[0].content), u = (f) => {
    const h = t[f];
    a(h.title), c(h.content);
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
        const k = kc(O.content, y);
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
    /* @__PURE__ */ l.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ l.jsxs(sn, { children: [
      /* @__PURE__ */ l.jsx(on, {}),
      /* @__PURE__ */ l.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ l.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ l.jsx(
        Zi,
        {
          imageItems: d,
          onItemClick: (f) => u(f)
        }
      ) }) }),
      /* @__PURE__ */ l.jsx(an, {})
    ] }) }),
    r && (i || s) ? /* @__PURE__ */ l.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ l.jsxs("div", { className: "uds-caption-text", children: [
          i ? /* @__PURE__ */ l.jsx("h3", { children: i }) : null,
          /* @__PURE__ */ l.jsx("div", { dangerouslySetInnerHTML: { __html: s } })
        ] })
      }
    ) : null
  ] });
};
aa.propTypes = {
  instanceName: o.string,
  imageItems: Xt.imageItems,
  hasContent: Xt.hasContent
};
const oa = ({
  width: e,
  maxWidth: t,
  imageItems: r,
  hasContent: n = !1,
  imageAutoSize: i = !0
}) => {
  const a = r.map(Oc), s = r.length > 1;
  return /* @__PURE__ */ l.jsx(
    St,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: a,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: n ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: i,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: c }) => /* @__PURE__ */ l.jsx(
        aa,
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
oa.propTypes = {
  imageItems: Xt.imageItems.isRequired,
  hasContent: Xt.hasContent,
  width: o.string,
  maxWidth: o.string,
  imageAutoSize: o.bool
};
const Ac = ({ id: e, imageSource: t, imageAltText: r, quote: n }, i = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ l.jsx(
    rn,
    {
      imageSource: t,
      imageAltText: r,
      quote: n,
      itemStyle: i
    }
  )
}), sa = ({
  width: e,
  maxWidth: t,
  testimonialItems: r,
  itemStyle: n = {},
  hasNavButtons: i = !1,
  hasPositionIndicators: a = !1,
  imageAutoSize: s = !0
}) => {
  const c = r.map(
    (u) => Ac(u, n)
  );
  return /* @__PURE__ */ l.jsx(
    St,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: c,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: i,
      hasPositionIndicators: a,
      imageAutoSize: s,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
sa.propTypes = {
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
var Me = /* @__PURE__ */ ((e) => (e.UNORDERED = "unordered", e.ORDERED = "ordered", e.ICON = "icon", e.STEP = "step", e.DISPLAY = "display", e))(Me || {}), Ft = /* @__PURE__ */ ((e) => (e.UL = "ul", e.OL = "ol", e))(Ft || {}), at = /* @__PURE__ */ ((e) => (e.NONE = "none", e.LIGHT = "light", e.MEDIUM = "medium", e.DARK = "dark", e))(at || {}), zt = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.PRIMARY = "primary", e.SECONDARY = "secondary", e))(zt || {});
const la = (e) => {
  switch (e) {
    case Ft.OL:
    case Me.ORDERED:
    case Me.STEP:
      return Ft.OL;
    default:
      return Ft.UL;
  }
}, ca = ({
  listType: e,
  content: t,
  icon: r,
  nestedType: n,
  nestedItems: i
}) => {
  const [a, ...s] = Array.isArray(t) ? t : [t];
  let c = null;
  if (i != null && i.length) {
    const u = n || e, d = la(u);
    c = /* @__PURE__ */ l.jsx(d, { children: i.map((f, h) => /* @__PURE__ */ l.jsx(ca, { listType: u, ...f }, h)) });
  }
  return /* @__PURE__ */ l.jsxs("li", { children: [
    r && /* @__PURE__ */ l.jsx("span", { className: `fa-li ${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` }),
    a,
    " ",
    s.map((u, d) => [/* @__PURE__ */ l.jsx("br", {}, `br-${d}`), /* @__PURE__ */ l.jsx("span", { children: u }, d)]),
    c
  ] });
}, Nc = ({
  listType: e = Me.UNORDERED,
  backgroundColor: t = at.NONE,
  listItemStyleColor: r = zt.DEFAULT,
  items: n
}) => {
  const i = la(e);
  let a = "maroon", s = "maroon";
  t === at.DARK && (a = "gold", s = "gold"), e === Me.STEP && (a = "uds-steplist-maroon", s = "uds-steplist-gold", t === at.DARK && (a = "uds-steplist-gold"));
  const c = U({
    "uds-list": e === Me.UNORDERED || e === Me.ORDERED,
    "uds-list fa-ul": e === Me.ICON,
    "uds-list uds-steplist": e === Me.STEP,
    "uds-list uds-display-list": e === Me.DISPLAY,
    "light-smokemode": t === at.LIGHT,
    smokemode: t === at.MEDIUM,
    darkmode: t === at.DARK,
    [`${a}`]: r === zt.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${s}`]: r === zt.SECONDARY
  });
  return /* @__PURE__ */ l.jsx(i, { className: c || null, children: n.map((u, d) => /* @__PURE__ */ l.jsx(ca, { listType: e, ...u }, d)) });
}, jc = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, Ec = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Cc = ({
  gridLinkItems: e,
  numColumns: t,
  textColor: r,
  children: n
}) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
  /* @__PURE__ */ l.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        t,
        jc[r]
      ].join(" "),
      children: e && e.map((i) => /* @__PURE__ */ l.jsx(
        Zt,
        {
          gaData: {
            ...Ec,
            text: i.label,
            section: `grid links ${i.label}`
          },
          children: /* @__PURE__ */ l.jsxs("a", { href: i.href, children: [
            /* @__PURE__ */ l.jsx("span", { className: `fa fa-fw ${i.icon}` }),
            i.label
          ] })
        },
        i.label + i.href
      ))
    }
  ),
  /* @__PURE__ */ l.jsx("div", { children: n })
] });
var cn, hi = _a;
cn = hi.createRoot, hi.hydrateRoot;
const Rc = (e, t, r) => {
  cn(r).render(ne.createElement(e, t));
}, or = ({ typeCarousel: e, targetSelector: t, props: r }) => {
  const i = {
    card: na,
    testimonial: sa,
    image: ia,
    "image-gallery": oa
  }[e];
  i && Rc(i, r, document.querySelector(t));
}, Dc = ({ targetSelector: e, props: t }) => or({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), $c = ({ targetSelector: e, props: t }) => {
  or({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, Hc = ({ targetSelector: e, props: t }) => {
  or({ typeCarousel: "image", targetSelector: e, props: t });
}, Bc = ({ targetSelector: e, props: t }) => {
  or({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
}, se = (e, t, r) => {
  cn(r).render(ne.createElement(e, t));
}, Fc = ({ targetSelector: e, props: t }) => se(Ti, t, document.querySelector(e)), zc = ({ targetSelector: e, props: t }) => se(Mi, t, document.querySelector(e)), Wc = ({ targetSelector: e, props: t }) => se(Qr, t, document.querySelector(e)), qc = ({ targetSelector: e, props: t }) => se(Ke, t, document.querySelector(e)), Vc = ({ targetSelector: e, props: t }) => se(tr, t, document.querySelector(e)), Uc = ({ targetSelector: e, props: t }) => se(rr, t, document.querySelector(e)), Yc = ({ targetSelector: e, props: t }) => se(Ve, t, document.querySelector(e)), Gc = ({ targetSelector: e, props: t }) => se(Cc, t, document.querySelector(e)), Xc = ({ targetSelector: e, props: t }) => se(Fi, t, document.querySelector(e)), Kc = ({ targetSelector: e, props: t }) => se(ft, t, document.querySelector(e)), Zc = ({ targetSelector: e, props: t }) => se(Vi, t, document.querySelector(e)), Qc = ({ targetSelector: e, props: t }) => se(tn, t, document.querySelector(e)), Jc = ({ targetSelector: e, props: t }) => se(rn, t, document.querySelector(e)), eu = ({ targetSelector: e, props: t }) => se(Xi, t, document.querySelector(e)), tu = ({ targetSelector: e, props: t }) => se(Gi, t, document.querySelector(e)), ru = ({ targetSelector: e, props: t }) => se(hl, t, document.querySelector(e)), nu = ({ targetSelector: e, props: t }) => se(Zs, t, document.querySelector(e)), iu = ({ targetSelector: e, props: t }) => se(bl, t, document.querySelector(e)), au = ({ targetSelector: e, props: t }) => se(Nc, t, document.querySelector(e));
export {
  Ti as Accordion,
  Mi as AnchorMenu,
  Qr as Article,
  Ke as Button,
  tr as ButtonIconOnly,
  rr as ButtonTag,
  Ve as Card,
  na as CardCarousel,
  Zs as Divider,
  Ks as DividerType,
  sl as FeedBody,
  rl as FeedContainerProvider,
  tl as FeedContext,
  ol as FeedHeader,
  Cc as GridLinks,
  Fi as Hero,
  ft as Image,
  ia as ImageCarousel,
  oa as ImageGalleryCarousel,
  Nc as List,
  tn as Pagination,
  Vi as RankingCard,
  hl as SystemAlert,
  pl as SystemAlertType,
  vl as Tab,
  Gi as TabbedPanels,
  rn as Testimonial,
  sa as TestimonialCarousel,
  bl as Tooltip,
  Xi as Video,
  Mc as feedCardButtonShape,
  il as feedComponentShape,
  Bi as feedCtaButtonShape,
  nl as feedDataSourceShape,
  Hi as feedHeaderShape,
  Fc as initAccordion,
  zc as initAnchorMenu,
  Wc as initArticle,
  qc as initButton,
  Vc as initButtonIconOnly,
  Uc as initButtonTag,
  Yc as initCard,
  Dc as initCardCarousel,
  nu as initDivider,
  Gc as initGridLinks,
  Xc as initHero,
  Kc as initImage,
  Hc as initImageCarousel,
  Bc as initImageGalleryCarousel,
  au as initList,
  Qc as initPagination,
  Zc as initRankingCard,
  ru as initSystemAlert,
  tu as initTabbedPanels,
  Jc as initTestimonial,
  $c as initTestimonialCarousel,
  iu as initTooltip,
  eu as initVideo
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

(function() {
                var css = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`;
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(style);
              })();