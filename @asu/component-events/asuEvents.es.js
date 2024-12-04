import * as $e from "react";
import ht, { useRef as ni, useContext as At, createElement as ai, useEffect as ja } from "react";
import * as oi from "react-dom";
import ii from "react-dom";
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fa = { exports: {} }, Et = {};
var Zn;
function si() {
  if (Zn) return Et;
  Zn = 1;
  var e = ht, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, u, h) {
    var g, m = {}, y = null, x = null;
    h !== void 0 && (y = "" + h), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (g in u) n.call(u, g) && !s.hasOwnProperty(g) && (m[g] = u[g]);
    if (c && c.defaultProps) for (g in u = c.defaultProps, u) m[g] === void 0 && (m[g] = u[g]);
    return { $$typeof: r, type: c, key: y, ref: x, props: m, _owner: o.current };
  }
  return Et.Fragment = t, Et.jsx = l, Et.jsxs = l, Et;
}
Fa.exports = si();
var _e = Fa.exports;
function Ua({
  packageName: e = "",
  component: r = "",
  type: t = "",
  configuration: n = {}
}) {
  if (!e || !r) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: r,
    type: t,
    configuration: n
  };
}
var Ne = { env: { NODE_ENV: "production" } }, li = { 651: function(e) {
  e.exports = function() {
    function r(z) {
      return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(L) {
        return typeof L;
      } : function(L) {
        return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
      }, r(z);
    }
    function t(z, L) {
      return t = Object.setPrototypeOf || function(H, $) {
        return H.__proto__ = $, H;
      }, t(z, L);
    }
    function n(z, L, H) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct : function($, P, re) {
        var xe = [null];
        xe.push.apply(xe, P);
        var ze = new (Function.bind.apply($, xe))();
        return re && t(ze, re.prototype), ze;
      }, n.apply(null, arguments);
    }
    function o(z) {
      return function(L) {
        if (Array.isArray(L)) return s(L);
      }(z) || function(L) {
        if (typeof Symbol < "u" && L[Symbol.iterator] != null || L["@@iterator"] != null) return Array.from(L);
      }(z) || function(L, H) {
        if (L) {
          if (typeof L == "string") return s(L, H);
          var $ = Object.prototype.toString.call(L).slice(8, -1);
          return $ === "Object" && L.constructor && ($ = L.constructor.name), $ === "Map" || $ === "Set" ? Array.from(L) : $ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($) ? s(L, H) : void 0;
        }
      }(z) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function s(z, L) {
      (L == null || L > z.length) && (L = z.length);
      for (var H = 0, $ = new Array(L); H < L; H++) $[H] = z[H];
      return $;
    }
    var l = Object.hasOwnProperty, c = Object.setPrototypeOf, u = Object.isFrozen, h = Object.getPrototypeOf, g = Object.getOwnPropertyDescriptor, m = Object.freeze, y = Object.seal, x = Object.create, b = typeof Reflect < "u" && Reflect, w = b.apply, k = b.construct;
    w || (w = function(z, L, H) {
      return z.apply(L, H);
    }), m || (m = function(z) {
      return z;
    }), y || (y = function(z) {
      return z;
    }), k || (k = function(z, L) {
      return n(z, o(L));
    });
    var A, S = te(Array.prototype.forEach), _ = te(Array.prototype.pop), R = te(Array.prototype.push), v = te(String.prototype.toLowerCase), O = te(String.prototype.toString), E = te(String.prototype.match), j = te(String.prototype.replace), J = te(String.prototype.indexOf), pe = te(String.prototype.trim), X = te(RegExp.prototype.test), Y = (A = TypeError, function() {
      for (var z = arguments.length, L = new Array(z), H = 0; H < z; H++) L[H] = arguments[H];
      return k(A, L);
    });
    function te(z) {
      return function(L) {
        for (var H = arguments.length, $ = new Array(H > 1 ? H - 1 : 0), P = 1; P < H; P++) $[P - 1] = arguments[P];
        return w(z, L, $);
      };
    }
    function B(z, L, H) {
      var $;
      H = ($ = H) !== null && $ !== void 0 ? $ : v, c && c(z, null);
      for (var P = L.length; P--; ) {
        var re = L[P];
        if (typeof re == "string") {
          var xe = H(re);
          xe !== re && (u(L) || (L[P] = xe), re = xe);
        }
        z[re] = !0;
      }
      return z;
    }
    function ue(z) {
      var L, H = x(null);
      for (L in z) w(l, z, [L]) === !0 && (H[L] = z[L]);
      return H;
    }
    function Ce(z, L) {
      for (; z !== null; ) {
        var H = g(z, L);
        if (H) {
          if (H.get) return te(H.get);
          if (typeof H.value == "function") return te(H.value);
        }
        z = h(z);
      }
      return function($) {
        return console.warn("fallback value for", $), null;
      };
    }
    var oe = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), he = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Oe = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), V = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), F = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), C = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), T = m(["#text"]), p = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), I = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), f = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), D = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), N = y(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Q = y(/<%[\w\W]*|[\w\W]*%>/gm), Z = y(/\${[\w\W]*}/gm), q = y(/^data-[\-\w.\u00B7-\uFFFF]/), W = y(/^aria-[\-\w]+$/), K = y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), ie = y(/^(?:\w+script|data):/i), ee = y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), ae = y(/^html$/i), G = y(/^[a-z][.\w]*(-[.\w]+)+$/i), ne = function() {
      return typeof window > "u" ? null : window;
    }, Ae = function z() {
      var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ne(), H = function(d) {
        return z(d);
      };
      if (H.version = "2.5.7", H.removed = [], !L || !L.document || L.document.nodeType !== 9) return H.isSupported = !1, H;
      var $ = L.document, P = L.document, re = L.DocumentFragment, xe = L.HTMLTemplateElement, ze = L.Node, Me = L.Element, vt = L.NodeFilter, xn = L.NamedNodeMap, jo = xn === void 0 ? L.NamedNodeMap || L.MozNamedAttrMap : xn, zo = L.HTMLFormElement, Fo = L.DOMParser, _t = L.trustedTypes, Pt = Me.prototype, Uo = Ce(Pt, "cloneNode"), Ho = Ce(Pt, "nextSibling"), qo = Ce(Pt, "childNodes"), pr = Ce(Pt, "parentNode");
      if (typeof xe == "function") {
        var mr = P.createElement("template");
        mr.content && mr.content.ownerDocument && (P = mr.content.ownerDocument);
      }
      var je = function(d, M) {
        if (r(d) !== "object" || typeof d.createPolicy != "function") return null;
        var U = null, se = "data-tt-policy-suffix";
        M.currentScript && M.currentScript.hasAttribute(se) && (U = M.currentScript.getAttribute(se));
        var we = "dompurify" + (U ? "#" + U : "");
        try {
          return d.createPolicy(we, { createHTML: function(ge) {
            return ge;
          }, createScriptURL: function(ge) {
            return ge;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + we + " could not be created."), null;
        }
      }(_t, $), hr = je ? je.createHTML("") : "", It = P, gr = It.implementation, Bo = It.createNodeIterator, Wo = It.createDocumentFragment, Go = It.getElementsByTagName, Vo = $.importNode, Cn = {};
      try {
        Cn = ue(P).documentMode ? P.documentMode : {};
      } catch {
      }
      var Fe = {};
      H.isSupported = typeof pr == "function" && gr && gr.createHTMLDocument !== void 0 && Cn !== 9;
      var nt, ke, yr = N, vr = Q, br = Z, Yo = q, Zo = W, Xo = ie, Tn = ee, Ko = G, wr = K, Ee = null, On = B({}, [].concat(o(oe), o(he), o(Oe), o(F), o(T))), Se = null, Nn = B({}, [].concat(o(p), o(I), o(f), o(D))), ve = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), bt = null, kr = null, An = !0, Er = !0, Rn = !1, _n = !0, at = !1, Sr = !0, Ke = !1, xr = !1, Cr = !1, ot = !1, Lt = !1, $t = !1, Pn = !0, In = !1, Tr = !0, wt = !1, it = {}, st = null, Ln = B({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), $n = null, Dn = B({}, ["audio", "video", "img", "source", "image", "track"]), Or = null, Mn = B({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Dt = "http://www.w3.org/1998/Math/MathML", Mt = "http://www.w3.org/2000/svg", Ue = "http://www.w3.org/1999/xhtml", lt = Ue, jn = !1, Nr = null, Qo = B({}, [Dt, Mt, Ue], O), Jo = ["application/xhtml+xml", "text/html"], ct = null, ei = P.createElement("form"), zn = function(d) {
        return d instanceof RegExp || d instanceof Function;
      }, Ar = function(d) {
        ct && ct === d || (d && r(d) === "object" || (d = {}), d = ue(d), nt = nt = Jo.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? "text/html" : d.PARSER_MEDIA_TYPE, ke = nt === "application/xhtml+xml" ? O : v, Ee = "ALLOWED_TAGS" in d ? B({}, d.ALLOWED_TAGS, ke) : On, Se = "ALLOWED_ATTR" in d ? B({}, d.ALLOWED_ATTR, ke) : Nn, Nr = "ALLOWED_NAMESPACES" in d ? B({}, d.ALLOWED_NAMESPACES, O) : Qo, Or = "ADD_URI_SAFE_ATTR" in d ? B(ue(Mn), d.ADD_URI_SAFE_ATTR, ke) : Mn, $n = "ADD_DATA_URI_TAGS" in d ? B(ue(Dn), d.ADD_DATA_URI_TAGS, ke) : Dn, st = "FORBID_CONTENTS" in d ? B({}, d.FORBID_CONTENTS, ke) : Ln, bt = "FORBID_TAGS" in d ? B({}, d.FORBID_TAGS, ke) : {}, kr = "FORBID_ATTR" in d ? B({}, d.FORBID_ATTR, ke) : {}, it = "USE_PROFILES" in d && d.USE_PROFILES, An = d.ALLOW_ARIA_ATTR !== !1, Er = d.ALLOW_DATA_ATTR !== !1, Rn = d.ALLOW_UNKNOWN_PROTOCOLS || !1, _n = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, at = d.SAFE_FOR_TEMPLATES || !1, Sr = d.SAFE_FOR_XML !== !1, Ke = d.WHOLE_DOCUMENT || !1, ot = d.RETURN_DOM || !1, Lt = d.RETURN_DOM_FRAGMENT || !1, $t = d.RETURN_TRUSTED_TYPE || !1, Cr = d.FORCE_BODY || !1, Pn = d.SANITIZE_DOM !== !1, In = d.SANITIZE_NAMED_PROPS || !1, Tr = d.KEEP_CONTENT !== !1, wt = d.IN_PLACE || !1, wr = d.ALLOWED_URI_REGEXP || wr, lt = d.NAMESPACE || Ue, ve = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && zn(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ve.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && zn(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ve.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), at && (Er = !1), Lt && (ot = !0), it && (Ee = B({}, o(T)), Se = [], it.html === !0 && (B(Ee, oe), B(Se, p)), it.svg === !0 && (B(Ee, he), B(Se, I), B(Se, D)), it.svgFilters === !0 && (B(Ee, Oe), B(Se, I), B(Se, D)), it.mathMl === !0 && (B(Ee, F), B(Se, f), B(Se, D))), d.ADD_TAGS && (Ee === On && (Ee = ue(Ee)), B(Ee, d.ADD_TAGS, ke)), d.ADD_ATTR && (Se === Nn && (Se = ue(Se)), B(Se, d.ADD_ATTR, ke)), d.ADD_URI_SAFE_ATTR && B(Or, d.ADD_URI_SAFE_ATTR, ke), d.FORBID_CONTENTS && (st === Ln && (st = ue(st)), B(st, d.FORBID_CONTENTS, ke)), Tr && (Ee["#text"] = !0), Ke && B(Ee, ["html", "head", "body"]), Ee.table && (B(Ee, ["tbody"]), delete bt.tbody), m && m(d), ct = d);
      }, Fn = B({}, ["mi", "mo", "mn", "ms", "mtext"]), Un = B({}, ["annotation-xml"]), ti = B({}, ["title", "style", "font", "a", "script"]), jt = B({}, he);
      B(jt, Oe), B(jt, V);
      var Rr = B({}, F);
      B(Rr, C);
      var Le = function(d) {
        R(H.removed, { element: d });
        try {
          d.parentNode.removeChild(d);
        } catch {
          try {
            d.outerHTML = hr;
          } catch {
            d.remove();
          }
        }
      }, zt = function(d, M) {
        try {
          R(H.removed, { attribute: M.getAttributeNode(d), from: M });
        } catch {
          R(H.removed, { attribute: null, from: M });
        }
        if (M.removeAttribute(d), d === "is" && !Se[d]) if (ot || Lt) try {
          Le(M);
        } catch {
        }
        else try {
          M.setAttribute(d, "");
        } catch {
        }
      }, Hn = function(d) {
        var M, U;
        if (Cr) d = "<remove></remove>" + d;
        else {
          var se = E(d, /^[\r\n\t ]+/);
          U = se && se[0];
        }
        nt === "application/xhtml+xml" && lt === Ue && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
        var we = je ? je.createHTML(d) : d;
        if (lt === Ue) try {
          M = new Fo().parseFromString(we, nt);
        } catch {
        }
        if (!M || !M.documentElement) {
          M = gr.createDocument(lt, "template", null);
          try {
            M.documentElement.innerHTML = jn ? hr : we;
          } catch {
          }
        }
        var ge = M.body || M.documentElement;
        return d && U && ge.insertBefore(P.createTextNode(U), ge.childNodes[0] || null), lt === Ue ? Go.call(M, Ke ? "html" : "body")[0] : Ke ? M.documentElement : ge;
      }, qn = function(d) {
        return Bo.call(d.ownerDocument || d, d, vt.SHOW_ELEMENT | vt.SHOW_COMMENT | vt.SHOW_TEXT | vt.SHOW_PROCESSING_INSTRUCTION | vt.SHOW_CDATA_SECTION, null, !1);
      }, Bn = function(d) {
        return d instanceof zo && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof jo) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function");
      }, kt = function(d) {
        return r(ze) === "object" ? d instanceof ze : d && r(d) === "object" && typeof d.nodeType == "number" && typeof d.nodeName == "string";
      }, He = function(d, M, U) {
        Fe[d] && S(Fe[d], function(se) {
          se.call(H, M, U, ct);
        });
      }, Wn = function(d) {
        var M;
        if (He("beforeSanitizeElements", d, null), Bn(d) || X(/[\u0080-\uFFFF]/, d.nodeName)) return Le(d), !0;
        var U = ke(d.nodeName);
        if (He("uponSanitizeElement", d, { tagName: U, allowedTags: Ee }), d.hasChildNodes() && !kt(d.firstElementChild) && (!kt(d.content) || !kt(d.content.firstElementChild)) && X(/<[/\w]/g, d.innerHTML) && X(/<[/\w]/g, d.textContent) || U === "select" && X(/<template/i, d.innerHTML) || d.nodeType === 7 || Sr && d.nodeType === 8 && X(/<[/\w]/g, d.data)) return Le(d), !0;
        if (!Ee[U] || bt[U]) {
          if (!bt[U] && Vn(U) && (ve.tagNameCheck instanceof RegExp && X(ve.tagNameCheck, U) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(U)))
            return !1;
          if (Tr && !st[U]) {
            var se = pr(d) || d.parentNode, we = qo(d) || d.childNodes;
            if (we && se) for (var ge = we.length - 1; ge >= 0; --ge) {
              var Te = Uo(we[ge], !0);
              Te.__removalCount = (d.__removalCount || 0) + 1, se.insertBefore(Te, Ho(d));
            }
          }
          return Le(d), !0;
        }
        return d instanceof Me && !function(Re) {
          var be = pr(Re);
          be && be.tagName || (be = { namespaceURI: lt, tagName: "template" });
          var me = v(Re.tagName), Ye = v(be.tagName);
          return !!Nr[Re.namespaceURI] && (Re.namespaceURI === Mt ? be.namespaceURI === Ue ? me === "svg" : be.namespaceURI === Dt ? me === "svg" && (Ye === "annotation-xml" || Fn[Ye]) : !!jt[me] : Re.namespaceURI === Dt ? be.namespaceURI === Ue ? me === "math" : be.namespaceURI === Mt ? me === "math" && Un[Ye] : !!Rr[me] : Re.namespaceURI === Ue ? !(be.namespaceURI === Mt && !Un[Ye]) && !(be.namespaceURI === Dt && !Fn[Ye]) && !Rr[me] && (ti[me] || !jt[me]) : !(nt !== "application/xhtml+xml" || !Nr[Re.namespaceURI]));
        }(d) ? (Le(d), !0) : U !== "noscript" && U !== "noembed" && U !== "noframes" || !X(/<\/no(script|embed|frames)/i, d.innerHTML) ? (at && d.nodeType === 3 && (M = d.textContent, M = j(M, yr, " "), M = j(M, vr, " "), M = j(M, br, " "), d.textContent !== M && (R(H.removed, { element: d.cloneNode() }), d.textContent = M)), He("afterSanitizeElements", d, null), !1) : (Le(d), !0);
      }, Gn = function(d, M, U) {
        if (Pn && (M === "id" || M === "name") && (U in P || U in ei)) return !1;
        if (!(Er && !kr[M] && X(Yo, M))) {
          if (!(An && X(Zo, M))) {
            if (!Se[M] || kr[M]) {
              if (!(Vn(d) && (ve.tagNameCheck instanceof RegExp && X(ve.tagNameCheck, d) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(d)) && (ve.attributeNameCheck instanceof RegExp && X(ve.attributeNameCheck, M) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(M)) || M === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && X(ve.tagNameCheck, U) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(U)))) return !1;
            } else if (!Or[M]) {
              if (!X(wr, j(U, Tn, ""))) {
                if ((M !== "src" && M !== "xlink:href" && M !== "href" || d === "script" || J(U, "data:") !== 0 || !$n[d]) && !(Rn && !X(Xo, j(U, Tn, "")))) {
                  if (U) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, Vn = function(d) {
        return d !== "annotation-xml" && E(d, Ko);
      }, Yn = function(d) {
        var M, U, se, we;
        He("beforeSanitizeAttributes", d, null);
        var ge = d.attributes;
        if (ge) {
          var Te = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Se };
          for (we = ge.length; we--; ) {
            var Re = M = ge[we], be = Re.name, me = Re.namespaceURI;
            if (U = be === "value" ? M.value : pe(M.value), se = ke(be), Te.attrName = se, Te.attrValue = U, Te.keepAttr = !0, Te.forceKeepAttr = void 0, He("uponSanitizeAttribute", d, Te), U = Te.attrValue, !Te.forceKeepAttr && (zt(be, d), Te.keepAttr)) if (_n || !X(/\/>/i, U)) {
              at && (U = j(U, yr, " "), U = j(U, vr, " "), U = j(U, br, " "));
              var Ye = ke(d.nodeName);
              if (Gn(Ye, se, U)) if (!In || se !== "id" && se !== "name" || (zt(be, d), U = "user-content-" + U), Sr && X(/((--!?|])>)|<\/(style|title)/i, U)) zt(be, d);
              else {
                if (je && r(_t) === "object" && typeof _t.getAttributeType == "function" && !me) switch (_t.getAttributeType(Ye, se)) {
                  case "TrustedHTML":
                    U = je.createHTML(U);
                    break;
                  case "TrustedScriptURL":
                    U = je.createScriptURL(U);
                }
                try {
                  me ? d.setAttributeNS(me, be, U) : d.setAttribute(be, U), Bn(d) ? Le(d) : _(H.removed);
                } catch {
                }
              }
            } else zt(be, d);
          }
          He("afterSanitizeAttributes", d, null);
        }
      }, ri = function d(M) {
        var U, se = qn(M);
        for (He("beforeSanitizeShadowDOM", M, null); U = se.nextNode(); ) He("uponSanitizeShadowNode", U, null), Wn(U) || (U.content instanceof re && d(U.content), Yn(U));
        He("afterSanitizeShadowDOM", M, null);
      };
      return H.sanitize = function(d) {
        var M, U, se, we, ge, Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((jn = !d) && (d = "<!-->"), typeof d != "string" && !kt(d)) {
          if (typeof d.toString != "function") throw Y("toString is not a function");
          if (typeof (d = d.toString()) != "string") throw Y("dirty is not a string, aborting");
        }
        if (!H.isSupported) {
          if (r(L.toStaticHTML) === "object" || typeof L.toStaticHTML == "function") {
            if (typeof d == "string") return L.toStaticHTML(d);
            if (kt(d)) return L.toStaticHTML(d.outerHTML);
          }
          return d;
        }
        if (xr || Ar(Te), H.removed = [], typeof d == "string" && (wt = !1), wt) {
          if (d.nodeName) {
            var Re = ke(d.nodeName);
            if (!Ee[Re] || bt[Re]) throw Y("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (d instanceof ze) (U = (M = Hn("<!---->")).ownerDocument.importNode(d, !0)).nodeType === 1 && U.nodeName === "BODY" || U.nodeName === "HTML" ? M = U : M.appendChild(U);
        else {
          if (!ot && !at && !Ke && d.indexOf("<") === -1) return je && $t ? je.createHTML(d) : d;
          if (!(M = Hn(d))) return ot ? null : $t ? hr : "";
        }
        M && Cr && Le(M.firstChild);
        for (var be = qn(wt ? d : M); se = be.nextNode(); ) se.nodeType === 3 && se === we || Wn(se) || (se.content instanceof re && ri(se.content), Yn(se), we = se);
        if (we = null, wt) return d;
        if (ot) {
          if (Lt) for (ge = Wo.call(M.ownerDocument); M.firstChild; ) ge.appendChild(M.firstChild);
          else ge = M;
          return (Se.shadowroot || Se.shadowrootmod) && (ge = Vo.call($, ge, !0)), ge;
        }
        var me = Ke ? M.outerHTML : M.innerHTML;
        return Ke && Ee["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && X(ae, M.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + me), at && (me = j(me, yr, " "), me = j(me, vr, " "), me = j(me, br, " ")), je && $t ? je.createHTML(me) : me;
      }, H.setConfig = function(d) {
        Ar(d), xr = !0;
      }, H.clearConfig = function() {
        ct = null, xr = !1;
      }, H.isValidAttribute = function(d, M, U) {
        ct || Ar({});
        var se = ke(d), we = ke(M);
        return Gn(se, we, U);
      }, H.addHook = function(d, M) {
        typeof M == "function" && (Fe[d] = Fe[d] || [], R(Fe[d], M));
      }, H.removeHook = function(d) {
        if (Fe[d]) return _(Fe[d]);
      }, H.removeHooks = function(d) {
        Fe[d] && (Fe[d] = []);
      }, H.removeAllHooks = function() {
        Fe = {};
      }, H;
    }();
    return Ae;
  }();
}, 985: (e, r, t) => {
  var n = t(524), o = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, s = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, c = {};
  function u(w) {
    return n.isMemo(w) ? l : c[w.$$typeof] || o;
  }
  c[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, c[n.Memo] = l;
  var h = Object.defineProperty, g = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, b = Object.prototype;
  e.exports = function w(k, A, S) {
    if (typeof A != "string") {
      if (b) {
        var _ = x(A);
        _ && _ !== b && w(k, _, S);
      }
      var R = g(A);
      m && (R = R.concat(m(A)));
      for (var v = u(k), O = u(A), E = 0; E < R.length; ++E) {
        var j = R[E];
        if (!(s[j] || S && S[j] || O && O[j] || v && v[j])) {
          var J = y(A, j);
          try {
            h(k, j, J);
          } catch {
          }
        }
      }
    }
    return k;
  };
}, 999: (e, r, t) => {
  var n = t(848);
  function o() {
  }
  function s() {
  }
  s.resetWarningCache = o, e.exports = function() {
    function l(h, g, m, y, x, b) {
      if (b !== n) {
        var w = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw w.name = "Invariant Violation", w;
      }
    }
    function c() {
      return l;
    }
    l.isRequired = l;
    var u = { array: l, bigint: l, bool: l, func: l, number: l, object: l, string: l, symbol: l, any: l, arrayOf: c, element: l, elementType: l, instanceOf: c, node: l, objectOf: c, oneOf: c, oneOfType: c, shape: c, exact: c, checkPropTypes: s, resetWarningCache: o };
    return u.PropTypes = u, u;
  };
}, 67: (e, r, t) => {
  e.exports = t(999)();
}, 848: (e) => {
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 873: (e, r, t) => {
  var n = t(516);
  r.H = n.createRoot, n.hydrateRoot;
}, 320: (e, r) => {
  var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, l = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, u = t ? Symbol.for("react.provider") : 60109, h = t ? Symbol.for("react.context") : 60110, g = t ? Symbol.for("react.async_mode") : 60111, m = t ? Symbol.for("react.concurrent_mode") : 60111, y = t ? Symbol.for("react.forward_ref") : 60112, x = t ? Symbol.for("react.suspense") : 60113, b = t ? Symbol.for("react.suspense_list") : 60120, w = t ? Symbol.for("react.memo") : 60115, k = t ? Symbol.for("react.lazy") : 60116, A = t ? Symbol.for("react.block") : 60121, S = t ? Symbol.for("react.fundamental") : 60117, _ = t ? Symbol.for("react.responder") : 60118, R = t ? Symbol.for("react.scope") : 60119;
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var j = E.$$typeof;
      switch (j) {
        case n:
          switch (E = E.type) {
            case g:
            case m:
            case s:
            case c:
            case l:
            case x:
              return E;
            default:
              switch (E = E && E.$$typeof) {
                case h:
                case y:
                case k:
                case w:
                case u:
                  return E;
                default:
                  return j;
              }
          }
        case o:
          return j;
      }
    }
  }
  function O(E) {
    return v(E) === m;
  }
  r.AsyncMode = g, r.ConcurrentMode = m, r.ContextConsumer = h, r.ContextProvider = u, r.Element = n, r.ForwardRef = y, r.Fragment = s, r.Lazy = k, r.Memo = w, r.Portal = o, r.Profiler = c, r.StrictMode = l, r.Suspense = x, r.isAsyncMode = function(E) {
    return O(E) || v(E) === g;
  }, r.isConcurrentMode = O, r.isContextConsumer = function(E) {
    return v(E) === h;
  }, r.isContextProvider = function(E) {
    return v(E) === u;
  }, r.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }, r.isForwardRef = function(E) {
    return v(E) === y;
  }, r.isFragment = function(E) {
    return v(E) === s;
  }, r.isLazy = function(E) {
    return v(E) === k;
  }, r.isMemo = function(E) {
    return v(E) === w;
  }, r.isPortal = function(E) {
    return v(E) === o;
  }, r.isProfiler = function(E) {
    return v(E) === c;
  }, r.isStrictMode = function(E) {
    return v(E) === l;
  }, r.isSuspense = function(E) {
    return v(E) === x;
  }, r.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === s || E === m || E === c || E === l || E === x || E === b || typeof E == "object" && E !== null && (E.$$typeof === k || E.$$typeof === w || E.$$typeof === u || E.$$typeof === h || E.$$typeof === y || E.$$typeof === S || E.$$typeof === _ || E.$$typeof === R || E.$$typeof === A);
  }, r.typeOf = v;
}, 524: (e, r, t) => {
  e.exports = t(320);
}, 146: (e) => {
  e.exports = function(r, t, n, o) {
    var s = n ? n.call(o, r, t) : void 0;
    if (s !== void 0) return !!s;
    if (r === t) return !0;
    if (typeof r != "object" || !r || typeof t != "object" || !t) return !1;
    var l = Object.keys(r), c = Object.keys(t);
    if (l.length !== c.length) return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(t), h = 0; h < l.length; h++) {
      var g = l[h];
      if (!u(g)) return !1;
      var m = r[g], y = t[g];
      if ((s = n ? n.call(o, m, y, g) : void 0) === !1 || s === void 0 && m !== y) return !1;
    }
    return !0;
  };
}, 516: (e) => {
  e.exports = oi;
}, 373: (e, r) => {
  var t;
  (function() {
    var n = {}.hasOwnProperty;
    function o() {
      for (var c = "", u = 0; u < arguments.length; u++) {
        var h = arguments[u];
        h && (c = l(c, s(h)));
      }
      return c;
    }
    function s(c) {
      if (typeof c == "string" || typeof c == "number") return c;
      if (typeof c != "object") return "";
      if (Array.isArray(c)) return o.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) return c.toString();
      var u = "";
      for (var h in c) n.call(c, h) && c[h] && (u = l(u, h));
      return u;
    }
    function l(c, u) {
      return u ? c ? c + " " + u : c + u : c;
    }
    e.exports ? (o.default = o, e.exports = o) : (t = (function() {
      return o;
    }).apply(r, [])) === void 0 || (e.exports = t);
  })();
} }, Xn = {};
function ye(e) {
  var r = Xn[e];
  if (r !== void 0) return r.exports;
  var t = Xn[e] = { exports: {} };
  return li[e].call(t.exports, t, t.exports, ye), t.exports;
}
ye.n = (e) => {
  var r = e && e.__esModule ? () => e.default : () => e;
  return ye.d(r, { a: r }), r;
}, ye.d = (e, r) => {
  for (var t in r) ye.o(r, t) && !ye.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
}, ye.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), ye.nc = void 0;
var gt = {};
ye.d(gt, { nD: () => ln, n_: () => dn, n9: () => tr, $n: () => Ge, ef: () => rr, fy: () => Ot, Zp: () => nr, TR: () => io, Pb: () => ro, Ur: () => to, _Q: () => oo, lq: () => mn, _V: () => rt, dK: () => or, Fx: () => hn, oz: () => po, YT: () => mo, Gm: () => gn, Ce: () => yn, qm: () => Ss, fh: () => ao, Od: () => pn, fZ: () => no, RE: () => fn, hZ: () => Rs, Nq: () => _s, NJ: () => Ps, bO: () => Is, oP: () => Ls, jl: () => $s, PP: () => Ds, BB: () => Ms, Q9: () => js, vW: () => Fs, VE: () => zs, _v: () => Us, uP: () => Hs });
var ci = ye(67), a = ye.n(ci);
const i = (Kn = { Component: () => $e.Component, createContext: () => $e.createContext, createElement: () => $e.createElement, default: () => $e.default, forwardRef: () => $e.forwardRef, useCallback: () => $e.useCallback, useContext: () => $e.useContext, useEffect: () => $e.useEffect, useImperativeHandle: () => $e.useImperativeHandle, useMemo: () => $e.useMemo, useRef: () => $e.useRef, useState: () => $e.useState }, _r = {}, ye.d(_r, Kn), _r);
var Kn, _r;
const Qn = (e, r, t) => e ? r : t, Vt = (e) => (e || []).join(" ");
var ui = ye(651), di = ye.n(ui);
const De = (e) => ({ __html: di().sanitize(e) }), Jn = (e, r, t) => {
  let n = e;
  const o = [];
  for (; n < r; ) n > 0 && n <= t && o.push(n), n += 1;
  return o;
};
let ea, Pr = !1;
a().shape({ event: a().string, action: a().string, name: a().string, region: a().string, section: a().string, component: a().string, type: a().string, text: a().string });
const Pe = ({ event: e = "", action: r = "", name: t = "", type: n = "", section: o = "", text: s = "", region: l = "", component: c = "" }) => {
  const { dataLayer: u } = window, h = { event: e.toLowerCase(), action: r.toLowerCase(), name: t.toLowerCase(), type: n.toLowerCase(), region: l.toLowerCase(), section: o.toLowerCase(), text: s.toLowerCase(), component: c.toLowerCase() };
  u && u.push(h);
}, fi = a().shape({ url: a().string, altText: a().string, cssClass: a().arrayOf(a().string), size: a().oneOf(["small", "medium", "large"]) }), Ir = a().shape({ text: a().string, maxWidth: a().string, cssClass: a().arrayOf(a().string), highlightColor: a().oneOf(["gold", "black"]) }), Ha = a().shape({ color: a().oneOf(["gold", "maroon", "gray", "dark"]), content: a().shape({ icon: a().string, header: a().string, body: a().string }) });
var pi = ye(373), de = ye.n(pi);
const qa = ({ id: e, item: r, openCard: t, onClick: n }) => {
  var o, s, l, c, u, h;
  return i.default.createElement("div", { className: de()("accordion-item", "mt-3", { [`accordion-item-${r.color}`]: r.color, "accordion-header-icon": (o = r.content) == null ? void 0 : o.icon }) }, i.default.createElement("div", { className: "accordion-header" }, i.default.createElement("h4", null, i.default.createElement("button", { type: "button", "data-testid": "accordion-opener", className: de()({ collapsed: e !== t }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, "aria-expanded": e === t, "aria-controls": `card-body-${e}`, onClick: (g) => {
    var m;
    return n(g, e, (m = r.content) == null ? void 0 : m.header);
  } }, (s = r.content) != null && s.icon ? i.default.createElement("span", { className: "accordion-icon" }, i.default.createElement("i", { className: `${(l = r.content.icon) == null ? void 0 : l[0]} fa-${(c = r.content.icon) == null ? void 0 : c[1]} me-2` }), r.content.header) : (u = r.content) == null ? void 0 : u.header, i.default.createElement("i", { className: "fas fa-chevron-up" })))), ((h = r.content) == null ? void 0 : h.body) && i.default.createElement("div", { id: `card-body-${e}`, className: de()("collapse") }, i.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: De(r.content.body) })));
};
qa.propTypes = { id: a().number, item: Ha, openCard: a().number, onClick: a().func };
const mi = { event: "collapse", name: "onclick", type: "click", region: "main content" }, ln = ({ cards: e, openedCard: r }) => {
  const [t, n] = (0, i.useState)(r), o = (l, c) => {
    Pe({ ...mi, action: c, text: l });
  }, s = (l, c, u) => {
    l.preventDefault(), (t === c || t) && o(e[t - 1].content.header, "close"), t !== c ? (n(c), o(u, "open")) : n(null);
  };
  return i.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((l, c) => l.content.body && l.content.header && i.default.createElement(qa, { key: c + 1, id: c + 1, item: l, openCard: t, onClick: s })));
};
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, dt.apply(null, arguments);
}
ln.propTypes = { cards: a().arrayOf(Ha).isRequired, openedCard: a().number };
const hi = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Ge = ({ label: e, cardTitle: r, ariaLabel: t, block: n, color: o, disabled: s, element: l, href: c, icon: u, innerRef: h, onClick: g, size: m, classes: y, target: x, ...b }) => {
  const w = de()("btn", { [`btn-${o}`]: !0, "btn-md": m === "small", "btn-sm": m === "xsmall", "btn-block": n, disabled: s });
  let k = l;
  return c && l === "button" && (k = "a"), i.default.createElement(k, dt({ type: k === "button" && g ? "button" : void 0 }, b, { className: de()(y) || w, href: c, ref: h, onClick: () => (Pe({ ...hi, text: e, section: r }), void (g == null ? void 0 : g())), "aria-label": t, target: k === "a" ? x : null }), u && i.default.createElement("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]} me-1` }), e);
};
Ge.propTypes = { label: a().string, cardTitle: a().string, ariaLabel: a().string, block: a().bool, color: a().oneOf(["gold", "maroon", "gray", "dark"]), disabled: a().bool, element: a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func }), a().arrayOf(a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func })]))]), href: a().string, icon: a().arrayOf(a().string), innerRef: a().oneOfType([a().object, a().func, a().string]), onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), classes: a().arrayOf(a().string), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) }, Ge.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var Ba = ye(524), gi = ye(146);
ye.n(gi);
const yi = function(e) {
  function r(V, F, C, T, p) {
    for (var I, f, D, N, Q, Z = 0, q = 0, W = 0, K = 0, ie = 0, ee = 0, ae = D = I = 0, G = 0, ne = 0, Ae = 0, z = 0, L = C.length, H = L - 1, $ = "", P = "", re = "", xe = ""; G < L; ) {
      if (f = C.charCodeAt(G), G === H && q + K + W + Z !== 0 && (q !== 0 && (f = q === 47 ? 10 : 47), K = W = Z = 0, L++, H++), q + K + W + Z === 0) {
        if (G === H && (0 < ne && ($ = $.replace(m, "")), 0 < $.trim().length)) {
          switch (f) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += C.charAt(G);
          }
          f = 59;
        }
        switch (f) {
          case 123:
            for (I = ($ = $.trim()).charCodeAt(0), D = 1, z = ++G; G < L; ) {
              switch (f = C.charCodeAt(G)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (f = C.charCodeAt(G + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ae = G + 1; ae < H; ++ae) switch (C.charCodeAt(ae)) {
                          case 47:
                            if (f === 42 && C.charCodeAt(ae - 1) === 42 && G + 2 !== ae) {
                              G = ae + 1;
                              break e;
                            }
                            break;
                          case 10:
                            if (f === 47) {
                              G = ae + 1;
                              break e;
                            }
                        }
                        G = ae;
                      }
                  }
                  break;
                case 91:
                  f++;
                case 40:
                  f++;
                case 34:
                case 39:
                  for (; G++ < H && C.charCodeAt(G) !== f; ) ;
              }
              if (D === 0) break;
              G++;
            }
            if (D = C.substring(z, G), I === 0 && (I = ($ = $.replace(g, "").trim()).charCodeAt(0)), I === 64) {
              switch (0 < ne && ($ = $.replace(m, "")), f = $.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  ne = F;
                  break;
                default:
                  ne = ue;
              }
              if (z = (D = r(F, ne, D, f, p + 1)).length, 0 < oe && (Q = c(3, D, ne = t(ue, $, Ae), F, Y, X, z, f, p, T), $ = ne.join(""), Q !== void 0 && (z = (D = Q.trim()).length) === 0 && (f = 0, D = "")), 0 < z) switch (f) {
                case 115:
                  $ = $.replace(v, l);
                case 100:
                case 109:
                case 45:
                  D = $ + "{" + D + "}";
                  break;
                case 107:
                  D = ($ = $.replace(A, "$1 $2")) + "{" + D + "}", D = B === 1 || B === 2 && s("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                  break;
                default:
                  D = $ + D, T === 112 && (P += D, D = "");
              }
              else D = "";
            } else D = r(F, t(F, $, Ae), D, T, p + 1);
            re += D, D = Ae = ne = ae = I = 0, $ = "", f = C.charCodeAt(++G);
            break;
          case 125:
          case 59:
            if (1 < (z = ($ = (0 < ne ? $.replace(m, "") : $).trim()).length)) switch (ae === 0 && (I = $.charCodeAt(0), I === 45 || 96 < I && 123 > I) && (z = ($ = $.replace(" ", ":")).length), 0 < oe && (Q = c(1, $, F, V, Y, X, P.length, T, p, T)) !== void 0 && (z = ($ = Q.trim()).length) === 0 && ($ = "\0\0"), I = $.charCodeAt(0), f = $.charCodeAt(1), I) {
              case 0:
                break;
              case 64:
                if (f === 105 || f === 99) {
                  xe += $ + C.charAt(G);
                  break;
                }
              default:
                $.charCodeAt(z - 1) !== 58 && (P += o($, I, f, $.charCodeAt(2)));
            }
            Ae = ne = ae = I = 0, $ = "", f = C.charCodeAt(++G);
        }
      }
      switch (f) {
        case 13:
        case 10:
          q === 47 ? q = 0 : 1 + I === 0 && T !== 107 && 0 < $.length && (ne = 1, $ += "\0"), 0 < oe * Oe && c(0, $, F, V, Y, X, P.length, T, p, T), X = 1, Y++;
          break;
        case 59:
        case 125:
          if (q + K + W + Z === 0) {
            X++;
            break;
          }
        default:
          switch (X++, N = C.charAt(G), f) {
            case 9:
            case 32:
              if (K + Z + q === 0) switch (ie) {
                case 44:
                case 58:
                case 9:
                case 32:
                  N = "";
                  break;
                default:
                  f !== 32 && (N = " ");
              }
              break;
            case 0:
              N = "\\0";
              break;
            case 12:
              N = "\\f";
              break;
            case 11:
              N = "\\v";
              break;
            case 38:
              K + q + Z === 0 && (ne = Ae = 1, N = "\f" + N);
              break;
            case 108:
              if (K + q + Z + te === 0 && 0 < ae) switch (G - ae) {
                case 2:
                  ie === 112 && C.charCodeAt(G - 3) === 58 && (te = ie);
                case 8:
                  ee === 111 && (te = ee);
              }
              break;
            case 58:
              K + q + Z === 0 && (ae = G);
              break;
            case 44:
              q + W + K + Z === 0 && (ne = 1, N += "\r");
              break;
            case 34:
            case 39:
              q === 0 && (K = K === f ? 0 : K === 0 ? f : K);
              break;
            case 91:
              K + q + W === 0 && Z++;
              break;
            case 93:
              K + q + W === 0 && Z--;
              break;
            case 41:
              K + q + Z === 0 && W--;
              break;
            case 40:
              K + q + Z === 0 && (I === 0 && (2 * ie + 3 * ee == 533 || (I = 1)), W++);
              break;
            case 64:
              q + W + K + Z + ae + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < K + Z + W)) switch (q) {
                case 0:
                  switch (2 * f + 3 * C.charCodeAt(G + 1)) {
                    case 235:
                      q = 47;
                      break;
                    case 220:
                      z = G, q = 42;
                  }
                  break;
                case 42:
                  f === 47 && ie === 42 && z + 2 !== G && (C.charCodeAt(z + 2) === 33 && (P += C.substring(z, G + 1)), N = "", q = 0);
              }
          }
          q === 0 && ($ += N);
      }
      ee = ie, ie = f, G++;
    }
    if (0 < (z = P.length)) {
      if (ne = F, 0 < oe && (Q = c(2, P, ne, V, Y, X, z, T, p, T)) !== void 0 && (P = Q).length === 0) return xe + P + re;
      if (P = ne.join(",") + "{" + P + "}", B * te != 0) {
        switch (B !== 2 || s(P, 2) || (te = 0), te) {
          case 111:
            P = P.replace(_, ":-moz-$1") + P;
            break;
          case 112:
            P = P.replace(S, "::-webkit-input-$1") + P.replace(S, "::-moz-$1") + P.replace(S, ":-ms-input-$1") + P;
        }
        te = 0;
      }
    }
    return xe + P + re;
  }
  function t(V, F, C) {
    var T = F.trim().split(w);
    F = T;
    var p = T.length, I = V.length;
    switch (I) {
      case 0:
      case 1:
        var f = 0;
        for (V = I === 0 ? "" : V[0] + " "; f < p; ++f) F[f] = n(V, F[f], C).trim();
        break;
      default:
        var D = f = 0;
        for (F = []; f < p; ++f) for (var N = 0; N < I; ++N) F[D++] = n(V[N] + " ", T[f], C).trim();
    }
    return F;
  }
  function n(V, F, C) {
    var T = F.charCodeAt(0);
    switch (33 > T && (T = (F = F.trim()).charCodeAt(0)), T) {
      case 38:
        return F.replace(k, "$1" + V.trim());
      case 58:
        return V.trim() + F.replace(k, "$1" + V.trim());
      default:
        if (0 < 1 * C && 0 < F.indexOf("\f")) return F.replace(k, (V.charCodeAt(0) === 58 ? "" : "$1") + V.trim());
    }
    return V + F;
  }
  function o(V, F, C, T) {
    var p = V + ";", I = 2 * F + 3 * C + 4 * T;
    if (I === 944) {
      V = p.indexOf(":", 9) + 1;
      var f = p.substring(V, p.length - 1).trim();
      return f = p.substring(0, V).trim() + f + ";", B === 1 || B === 2 && s(f, 1) ? "-webkit-" + f + f : f;
    }
    if (B === 0 || B === 2 && !s(p, 1)) return p;
    switch (I) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45) return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11)) return p.replace(pe, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45) switch (p.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
          case 115:
            return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
          case 98:
            return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
        }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99) break;
        return "-webkit-box-pack" + (f = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + p + "-ms-flex-pack" + f + p;
      case 1005:
        return x.test(p) ? p.replace(y, ":-webkit-") + p.replace(y, ":-moz-") + p : p;
      case 1e3:
        switch (F = (f = p.substring(13).trim()).indexOf("-") + 1, f.charCodeAt(0) + f.charCodeAt(F)) {
          case 226:
            f = p.replace(R, "tb");
            break;
          case 232:
            f = p.replace(R, "tb-rl");
            break;
          case 220:
            f = p.replace(R, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + f + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (F = (p = V).length - 10, I = (f = (p.charCodeAt(F) === 33 ? p.substring(0, F) : p).substring(V.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | f.charCodeAt(7))) {
          case 203:
            if (111 > f.charCodeAt(8)) break;
          case 115:
            p = p.replace(f, "-webkit-" + f) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(f, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + p.replace(f, "-webkit-" + f) + ";" + p.replace(f, "-ms-" + f + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return f = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + f + "-ms-flex-" + f + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(E, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(E, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (J.test(V) === !0) return (f = V.substring(V.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(V.replace("stretch", "fill-available"), F, C, T).replace(":fill-available", ":stretch") : p.replace(f, "-webkit-" + f) + p.replace(f, "-moz-" + f.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, C + T === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(b, "$1-webkit-$2") + p;
    }
    return p;
  }
  function s(V, F) {
    var C = V.indexOf(F === 1 ? ":" : "{"), T = V.substring(0, F !== 3 ? C : 10);
    return C = V.substring(C + 1, V.length - 1), he(F !== 2 ? T : T.replace(j, "$1"), C, F);
  }
  function l(V, F) {
    var C = o(F, F.charCodeAt(0), F.charCodeAt(1), F.charCodeAt(2));
    return C !== F + ";" ? C.replace(O, " or ($1)").substring(4) : "(" + F + ")";
  }
  function c(V, F, C, T, p, I, f, D, N, Q) {
    for (var Z, q = 0, W = F; q < oe; ++q) switch (Z = Ce[q].call(h, V, W, C, T, p, I, f, D, N, Q)) {
      case void 0:
      case !1:
      case !0:
      case null:
        break;
      default:
        W = Z;
    }
    if (W !== F) return W;
  }
  function u(V) {
    return (V = V.prefix) !== void 0 && (he = null, V ? typeof V != "function" ? B = 1 : (B = 2, he = V) : B = 0), u;
  }
  function h(V, F) {
    var C = V;
    if (33 > C.charCodeAt(0) && (C = C.trim()), C = [C], 0 < oe) {
      var T = c(-1, F, C, C, Y, X, 0, 0, 0, 0);
      T !== void 0 && typeof T == "string" && (F = T);
    }
    var p = r(ue, C, F, 0, 0);
    return 0 < oe && (T = c(-2, p, C, C, Y, X, p.length, 0, 0, 0)) !== void 0 && (p = T), te = 0, X = Y = 1, p;
  }
  var g = /^\0+/g, m = /[\0\r\f]/g, y = /: */g, x = /zoo|gra/, b = /([,: ])(transform)/g, w = /,\r+?/g, k = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, S = /::(place)/g, _ = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, v = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, E = /-self|flex-/g, j = /[^]*?(:[rp][el]a[\w-]+)[^]*/, J = /stretch|:\s*\w+\-(?:conte|avail)/, pe = /([^-])(image-set\()/, X = 1, Y = 1, te = 0, B = 1, ue = [], Ce = [], oe = 0, he = null, Oe = 0;
  return h.use = function V(F) {
    switch (F) {
      case void 0:
      case null:
        oe = Ce.length = 0;
        break;
      default:
        if (typeof F == "function") Ce[oe++] = F;
        else if (typeof F == "object") for (var C = 0, T = F.length; C < T; ++C) V(F[C]);
        else Oe = 0 | !!F;
    }
    return V;
  }, h.set = u, e !== void 0 && u(e), h;
}, vi = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function bi(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var wi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ta = bi(function(e) {
  return wi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), ki = ye(985), Ei = ye.n(ki);
function Be() {
  return (Be = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ra = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Hr = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, Ba.typeOf)(e);
}, Kt = Object.freeze([]), Ze = Object.freeze({});
function Tt(e) {
  return typeof e == "function";
}
function na(e) {
  return e.displayName || e.name || "Component";
}
function cn(e) {
  return e && typeof e.styledComponentId == "string";
}
var ft = typeof Ne < "u" && Ne.env !== void 0 && (Ne.env.REACT_APP_SC_ATTR || Ne.env.SC_ATTR) || "data-styled", un = typeof window < "u" && "HTMLElement" in window, Si = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ne < "u" && Ne.env !== void 0 && (Ne.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ne.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ne.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ne.env.REACT_APP_SC_DISABLE_SPEEDY : Ne.env.SC_DISABLE_SPEEDY !== void 0 && Ne.env.SC_DISABLE_SPEEDY !== "" && Ne.env.SC_DISABLE_SPEEDY !== "false" && Ne.env.SC_DISABLE_SPEEDY));
function Rt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : ""));
}
var xi = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, l = s; t >= l; ) (l <<= 1) < 0 && Rt(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var c = s; c < l; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), h = 0, g = n.length; h < g; h++) this.tag.insertRule(u, n[h]) && (this.groupSizes[t]++, u++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < s; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), l = s + o, c = s; c < l; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Yt = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), St = 1, Ft = function(e) {
  if (Yt.has(e)) return Yt.get(e);
  for (; Qt.has(St); ) St++;
  var r = St++;
  return Yt.set(e, r), Qt.set(r, e), r;
}, Ci = function(e) {
  return Qt.get(e);
}, Ti = function(e, r) {
  r >= St && (St = r + 1), Yt.set(e, r), Qt.set(r, e);
}, Oi = "style[" + ft + '][data-styled-version="5.3.11"]', Ni = new RegExp("^" + ft + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ai = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, l = o.length; s < l; s++) (n = o[s]) && e.registerName(r, n);
}, Ri = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var l = t[o].trim();
    if (l) {
      var c = l.match(Ni);
      if (c) {
        var u = 0 | parseInt(c[1], 10), h = c[2];
        u !== 0 && (Ti(h, u), Ai(e, h, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, _i = function() {
  return ye.nc;
}, Wa = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var u = c.childNodes, h = u.length; h >= 0; h--) {
      var g = u[h];
      if (g && g.nodeType === 1 && g.hasAttribute(ft)) return g;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ft, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = _i();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, s), n;
}, Pi = function() {
  function e(t) {
    var n = this.element = Wa(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, l = 0, c = s.length; l < c; l++) {
        var u = s[l];
        if (u.ownerNode === o) return u;
      }
      Rt(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Ii = function() {
  function e(t) {
    var n = this.element = Wa(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Li = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), aa = un, $i = { isServer: !un, useCSSOMInjection: !Si }, Jt = function() {
  function e(t, n, o) {
    t === void 0 && (t = Ze), n === void 0 && (n = {}), this.options = Be({}, $i, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && un && aa && (aa = !1, function(s) {
      for (var l = document.querySelectorAll(Oi), c = 0, u = l.length; c < u; c++) {
        var h = l[c];
        h && h.getAttribute(ft) !== "active" && (Ri(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ft(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Be({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, t = o ? new Li(l) : s ? new Pi(l) : new Ii(l), new xi(t)));
    var t, n, o, s, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ft(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ft(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ft(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", l = 0; l < o; l++) {
        var c = Ci(l);
        if (c !== void 0) {
          var u = t.names.get(c), h = n.getGroup(l);
          if (u && h && u.size) {
            var g = ft + ".g" + l + '[id="' + c + '"]', m = "";
            u !== void 0 && u.forEach(function(y) {
              y.length > 0 && (m += y + ",");
            }), s += "" + h + g + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Di = /(a)(d)/gi, oa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function qr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = oa(r % 52) + t;
  return (oa(r % 52) + t).replace(Di, "$1-$2");
}
var ut = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Ga = function(e) {
  return ut(5381, e);
};
function Va(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Tt(t) && !cn(t)) return !1;
  }
  return !0;
}
var Mi = Ga("5.3.11"), ji = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Va(r), this.componentId = t, this.baseHash = ut(Mi, t), this.baseStyle = n, Jt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = tt(this.rules, r, t, n).join(""), c = qr(ut(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, c)) {
        var u = n(l, "." + c, void 0, o);
        t.insertRules(o, c, u);
      }
      s.push(c), this.staticRulesId = c;
    }
    else {
      for (var h = this.rules.length, g = ut(this.baseHash, n.hash), m = "", y = 0; y < h; y++) {
        var x = this.rules[y];
        if (typeof x == "string") m += x;
        else if (x) {
          var b = tt(x, r, t, n), w = Array.isArray(b) ? b.join("") : b;
          g = ut(g, w + y), m += w;
        }
      }
      if (m) {
        var k = qr(g >>> 0);
        if (!t.hasNameForId(o, k)) {
          var A = n(m, "." + k, void 0, o);
          t.insertRules(o, k, A);
        }
        s.push(k);
      }
    }
    return s.join(" ");
  }, e;
}(), zi = /^\s*\/\/.*$/gm, Fi = [":", "[", ".", "#"];
function Ui(e) {
  var r, t, n, o, s = Ze, l = s.options, c = l === void 0 ? Ze : l, u = s.plugins, h = u === void 0 ? Kt : u, g = new yi(c), m = [], y = /* @__PURE__ */ function(w) {
    function k(A) {
      if (A) try {
        w(A + "}");
      } catch {
      }
    }
    return function(A, S, _, R, v, O, E, j, J, pe) {
      switch (A) {
        case 1:
          if (J === 0 && S.charCodeAt(0) === 64) return w(S + ";"), "";
          break;
        case 2:
          if (j === 0) return S + "/*|*/";
          break;
        case 3:
          switch (j) {
            case 102:
            case 112:
              return w(_[0] + S), "";
            default:
              return S + (pe === 0 ? "/*|*/" : "");
          }
        case -2:
          S.split("/*|*/}").forEach(k);
      }
    };
  }(function(w) {
    m.push(w);
  }), x = function(w, k, A) {
    return k === 0 && Fi.indexOf(A[t.length]) !== -1 || A.match(o) ? w : "." + r;
  };
  function b(w, k, A, S) {
    S === void 0 && (S = "&");
    var _ = w.replace(zi, ""), R = k && A ? A + " " + k + " { " + _ + " }" : _;
    return r = S, t = k, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), g(A || !k ? "" : k, R);
  }
  return g.use([].concat(h, [function(w, k, A) {
    w === 2 && A.length && A[0].lastIndexOf(t) > 0 && (A[0] = A[0].replace(n, x));
  }, y, function(w) {
    if (w === -2) {
      var k = m;
      return m = [], k;
    }
  }])), b.hash = h.length ? h.reduce(function(w, k) {
    return k.name || Rt(15), ut(w, k.name);
  }, 5381).toString() : "", b;
}
var Ya = i.default.createContext(), Za = (Ya.Consumer, i.default.createContext()), Hi = (Za.Consumer, new Jt()), Br = Ui();
function qi() {
  return (0, i.useContext)(Ya) || Hi;
}
var Bi = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Br);
      var l = n.name + s.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Rt(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Br), this.name + r.hash;
  }, e;
}(), Wi = /([A-Z])/, Gi = /([A-Z])/g, Vi = /^ms-/, Yi = function(e) {
  return "-" + e.toLowerCase();
};
function ia(e) {
  return Wi.test(e) ? e.replace(Gi, Yi).replace(Vi, "-ms-") : e;
}
var sa = function(e) {
  return e == null || e === !1 || e === "";
};
function tt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], l = 0, c = e.length; l < c; l += 1) (o = tt(e[l], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  return sa(e) ? "" : cn(e) ? "." + e.styledComponentId : Tt(e) ? typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !r ? e : tt(e(r), r, t, n) : e instanceof Bi ? t ? (e.inject(t, n), e.getName(n)) : e : Hr(e) ? function h(g, m) {
    var y, x, b = [];
    for (var w in g) g.hasOwnProperty(w) && !sa(g[w]) && (Array.isArray(g[w]) && g[w].isCss || Tt(g[w]) ? b.push(ia(w) + ":", g[w], ";") : Hr(g[w]) ? b.push.apply(b, h(g[w], w)) : b.push(ia(w) + ": " + (y = w, ((x = g[w]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || y in vi || y.startsWith("--") ? String(x).trim() : x + "px") + ";")));
    return m ? [m + " {"].concat(b, ["}"]) : b;
  }(e) : e.toString();
  var u;
}
var la = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Zi(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Tt(e) || Hr(e) ? la(tt(ra(Kt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : la(tt(ra(e, t)));
}
var Xi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ki = /(^-|-$)/g;
function Lr(e) {
  return e.replace(Xi, "-").replace(Ki, "");
}
function Ut(e) {
  return typeof e == "string" && !0;
}
var Wr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Qi = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ji(e, r, t) {
  var n = e[t];
  Wr(r) && Wr(n) ? Xa(n, r) : e[t] = r;
}
function Xa(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var l = s[o];
    if (Wr(l)) for (var c in l) Qi(c) && Ji(e, l[c], c);
  }
  return e;
}
var Ka = i.default.createContext();
Ka.Consumer;
var $r = {};
function Qa(e, r, t) {
  var n = cn(e), o = !Ut(e), s = r.attrs, l = s === void 0 ? Kt : s, c = r.componentId, u = c === void 0 ? function(S, _) {
    var R = typeof S != "string" ? "sc" : Lr(S);
    $r[R] = ($r[R] || 0) + 1;
    var v = R + "-" + function(O) {
      return qr(Ga(O) >>> 0);
    }("5.3.11" + R + $r[R]);
    return _ ? _ + "-" + v : v;
  }(r.displayName, r.parentComponentId) : c, h = r.displayName, g = h === void 0 ? function(S) {
    return Ut(S) ? "styled." + S : "Styled(" + na(S) + ")";
  }(e) : h, m = r.displayName && r.componentId ? Lr(r.displayName) + "-" + r.componentId : r.componentId || u, y = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, x = r.shouldForwardProp;
  n && e.shouldForwardProp && (x = r.shouldForwardProp ? function(S, _, R) {
    return e.shouldForwardProp(S, _, R) && r.shouldForwardProp(S, _, R);
  } : e.shouldForwardProp);
  var b, w = new ji(t, m, n ? e.componentStyle : void 0), k = w.isStatic && l.length === 0, A = function(S, _) {
    return function(R, v, O, E) {
      var j = R.attrs, J = R.componentStyle, pe = R.defaultProps, X = R.foldedComponentIds, Y = R.shouldForwardProp, te = R.styledComponentId, B = R.target, ue = function(I, f, D) {
        I === void 0 && (I = Ze);
        var N = Be({}, f, { theme: I }), Q = {};
        return D.forEach(function(Z) {
          var q, W, K, ie = Z;
          for (q in Tt(ie) && (ie = ie(N)), ie) N[q] = Q[q] = q === "className" ? (W = Q[q], K = ie[q], W && K ? W + " " + K : W || K) : ie[q];
        }), [N, Q];
      }(function(I, f, D) {
        return D === void 0 && (D = Ze), I.theme !== D.theme && I.theme || f || D.theme;
      }(v, (0, i.useContext)(Ka), pe) || Ze, v, j), Ce = ue[0], oe = ue[1], he = function(I, f, D) {
        var N = qi(), Q = (0, i.useContext)(Za) || Br;
        return f ? I.generateAndInjectStyles(Ze, N, Q) : I.generateAndInjectStyles(D, N, Q);
      }(J, E, Ce), Oe = O, V = oe.$as || v.$as || oe.as || v.as || B, F = Ut(V), C = oe !== v ? Be({}, v, {}, oe) : v, T = {};
      for (var p in C) p[0] !== "$" && p !== "as" && (p === "forwardedAs" ? T.as = C[p] : (Y ? Y(p, ta, V) : !F || ta(p)) && (T[p] = C[p]));
      return v.style && oe.style !== v.style && (T.style = Be({}, v.style, {}, oe.style)), T.className = Array.prototype.concat(X, te, he !== te ? he : null, v.className, oe.className).filter(Boolean).join(" "), T.ref = Oe, (0, i.createElement)(V, T);
    }(b, S, _, k);
  };
  return A.displayName = g, (b = i.default.forwardRef(A)).attrs = y, b.componentStyle = w, b.displayName = g, b.shouldForwardProp = x, b.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Kt, b.styledComponentId = m, b.target = n ? e.target : e, b.withComponent = function(S) {
    var _ = r.componentId, R = function(O, E) {
      if (O == null) return {};
      var j, J, pe = {}, X = Object.keys(O);
      for (J = 0; J < X.length; J++) j = X[J], E.indexOf(j) >= 0 || (pe[j] = O[j]);
      return pe;
    }(r, ["componentId"]), v = _ && _ + "-" + (Ut(S) ? S : Lr(na(S)));
    return Qa(S, Be({}, R, { attrs: y, componentId: v }), t);
  }, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = n ? Xa({}, e.defaultProps, S) : S;
  } }), Object.defineProperty(b, "toString", { value: function() {
    return "." + b.styledComponentId;
  } }), o && Ei()(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), b;
}
var Dr, Gr = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Ze), !(0, Ba.isValidElementType)(n)) return Rt(1, String(n));
    var s = function() {
      return t(n, o, Zi.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return r(t, n, Be({}, o, {}, l));
    }, s.attrs = function(l) {
      return r(t, n, Be({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, s;
  }(Qa, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Gr[e] = Gr(e);
}), (Dr = (function(e, r) {
  this.rules = e, this.componentId = r, this.isStatic = Va(e), Jt.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, r, t, n) {
  var o = n(tt(this.rules, r, t, n).join(""), ""), s = this.componentId + e;
  t.insertRules(s, s, o);
}, Dr.removeStyles = function(e, r) {
  r.clearRules(this.componentId + e);
}, Dr.renderStyles = function(e, r, t, n) {
  e > 2 && Jt.registerId(this.componentId + e), this.removeStyles(e, t), this.createStyles(e, r, t, n);
};
const Ve = Gr, es = Ve.div`
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
    h2 {
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
`, Zt = "On This Page", ts = { event: "collapse", name: "onclick", type: "click", text: Zt }, dn = ({ items: e, firstElementId: r, focusFirstFocusableElement: t = !1 }) => {
  const n = (0, i.useRef)(null), o = function(m) {
    const [y, x] = (0, i.useState)(!1);
    return (0, i.useEffect)(() => {
      const b = window.matchMedia(m);
      b.matches !== y && x(b.matches);
      const w = () => {
        x(b.matches);
      };
      return b.addEventListener("change", w), () => b.removeEventListener("change", w);
    }, [y, m]), y;
  }("(max-width: 991px)"), [s, l] = (0, i.useState)({ hasHeader: !1, hasAltMenuSpacing: !1, containerClass: "container-xl", activeContainer: "", showMenu: !1, sticky: !1 }), c = o ? 110 : 142, u = () => {
    var w;
    const m = {}, y = window.scrollY;
    ((w = document.getElementById(r)) == null ? void 0 : w.getBoundingClientRect().top) >= 0 && (m.sticky = !1, m.activeContainer = ""), y > n.current.getBoundingClientRect().top && (m.sticky = !0);
    const b = s.hasHeader ? c + 103 : 103;
    e == null || e.forEach(({ targetIdName: k }) => {
      const A = document.getElementById(k), S = (A == null ? void 0 : A.getBoundingClientRect().top) - b, _ = (A == null ? void 0 : A.getBoundingClientRect().bottom) - b;
      S < 0 && _ > 0 && (m.activeContainer = k);
    }), l((k) => ({ ...k, ...m }));
  }, h = () => {
    var m;
    m = u, Pr || (Pr = !0, setTimeout(() => {
      m(), Pr = !1;
    }, 150)), ((y) => {
      window.clearTimeout(ea), ea = window.setTimeout(y, 150);
    })(u);
  };
  function g(m = null) {
    if (m === null) return s.containerClass;
    const y = Object.values(m.classList).filter((x) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(x));
    return y.length > 0 ? y.join(" ") : g(m.parentElement);
  }
  return (0, i.useEffect)(() => {
    const m = document.getElementById(r) || null, y = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: g(m) };
    l((x) => ({ ...x, ...y }));
  }, []), (0, i.useEffect)(() => (window == null || window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h)), [s.hasHeader]), (e == null ? void 0 : e.length) > 0 && i.default.createElement(es, { requiresAltMenuSpacing: s.hasAltMenuSpacing, ref: n, className: de()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: s.sticky, "with-header": s.hasHeader }), style: s.showMenu ? { borderBottom: 0 } : {} }, i.default.createElement("div", { className: `${s.containerClass} uds-anchor-menu-wrapper` }, o ? i.default.createElement("button", { className: de()("mobile-menu-toggler", { "show-menu": s.showMenu }), type: "button", onClick: () => {
    Pe({ ...ts, action: s.showMenu ? "close" : "open" }), l((m) => ({ ...m, showMenu: !m.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, i.default.createElement("h2", null, Zt, ":", i.default.createElement("i", { className: "fas fa-chevron-down" }))) : i.default.createElement("h2", null, Zt, ":"), i.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: de()("card", "card-body", "collapse", { show: s.showMenu }) }, i.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": Zt }, e == null ? void 0 : e.map((m) => i.default.createElement(Ge, { "data-testid": `anchor-item-${m.targetIdName}`, key: m.targetIdName, classes: de()("nav-link", { active: s.activeContainer === m.targetIdName }).split(" "), ariaLabel: m.text, label: m.text, icon: m.icon, onClick: () => ((y) => {
    var A, S;
    const x = window.scrollY - (s.hasHeader ? c + 100 : 100), b = o ? 410 : 90;
    let w = ((A = document.getElementById(y)) == null ? void 0 : A.getBoundingClientRect().top) + x;
    var k;
    n.current.classList.contains("sticky") || (w -= b), t && ((S = (k = `#${y}`, (k ? document.querySelector(k) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || S.focus()), window.scrollTo({ top: w, behavior: "smooth" });
  })(m.targetIdName) }))))));
};
dn.propTypes = { items: a().arrayOf(a().shape({ text: a().string.isRequired, targetIdName: a().string.isRequired, icon: a().arrayOf(a().string) })).isRequired, firstElementId: a().string.isRequired, focusFirstFocusableElement: a().bool };
var Ht, rs = (Ht = function(e, r) {
  return Ht = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Ht(e, r);
}, function(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  function t() {
    this.constructor = e;
  }
  Ht(e, r), e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}), ns = function(e) {
  function r(t) {
    var n = e.call(this, t) || this;
    return n.name = "AssertionError", n;
  }
  return rs(r, e), r;
}(Error);
function xt(e, r) {
  if (!e) throw new ns(r);
}
function ur(e) {
  var r = Object.entries(e).filter(function(t) {
    return t[1] != null;
  }).map(function(t) {
    var n = t[0], o = t[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return r.length > 0 ? "?".concat(r.join("&")) : "";
}
var as = /* @__PURE__ */ function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    function n() {
      this.constructor = r;
    }
    e(r, t), r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Qe = function() {
  return Qe = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    return e;
  }, Qe.apply(this, arguments);
}, ca = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  }
  return t;
};
const os = function(e) {
  function r() {
    var t = e !== null && e.apply(this, arguments) || this;
    return t.openShareDialog = function(n) {
      var o, s, l = t.props, c = l.onShareWindowClose, u = l.windowHeight, h = u === void 0 ? 400 : u, g = l.windowPosition, m = g === void 0 ? "windowCenter" : g, y = l.windowWidth, x = y === void 0 ? 550 : y;
      (function(b, w, k) {
        var A = w.height, S = w.width, _ = ca(w, ["height", "width"]), R = Qe({ height: A, width: S, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, _), v = window.open(b, "", Object.keys(R).map(function(E) {
          return "".concat(E, "=").concat(R[E]);
        }).join(", "));
        if (k) var O = window.setInterval(function() {
          try {
            (v === null || v.closed) && (window.clearInterval(O), k(v));
          } catch (E) {
            console.error(E);
          }
        }, 1e3);
      })(n, Qe({ height: h, width: x }, m === "windowCenter" ? (o = x, s = h, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - o / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - s / 2 }) : function(b, w) {
        return { top: (window.screen.height - w) / 2, left: (window.screen.width - b) / 2 };
      }(x, h)), c);
    }, t.handleClick = function(n) {
      return o = t, s = void 0, c = function() {
        var u, h, g, m, y, x, b, w, k, A;
        return function(S, _) {
          var R, v, O, E, j = { label: 0, sent: function() {
            if (1 & O[0]) throw O[1];
            return O[1];
          }, trys: [], ops: [] };
          return E = { next: J(0), throw: J(1), return: J(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
            return this;
          }), E;
          function J(pe) {
            return function(X) {
              return function(Y) {
                if (R) throw new TypeError("Generator is already executing.");
                for (; j; ) try {
                  if (R = 1, v && (O = 2 & Y[0] ? v.return : Y[0] ? v.throw || ((O = v.return) && O.call(v), 0) : v.next) && !(O = O.call(v, Y[1])).done) return O;
                  switch (v = 0, O && (Y = [2 & Y[0], O.value]), Y[0]) {
                    case 0:
                    case 1:
                      O = Y;
                      break;
                    case 4:
                      return j.label++, { value: Y[1], done: !1 };
                    case 5:
                      j.label++, v = Y[1], Y = [0];
                      continue;
                    case 7:
                      Y = j.ops.pop(), j.trys.pop();
                      continue;
                    default:
                      if (!((O = (O = j.trys).length > 0 && O[O.length - 1]) || Y[0] !== 6 && Y[0] !== 2)) {
                        j = 0;
                        continue;
                      }
                      if (Y[0] === 3 && (!O || Y[1] > O[0] && Y[1] < O[3])) {
                        j.label = Y[1];
                        break;
                      }
                      if (Y[0] === 6 && j.label < O[1]) {
                        j.label = O[1], O = Y;
                        break;
                      }
                      if (O && j.label < O[2]) {
                        j.label = O[2], j.ops.push(Y);
                        break;
                      }
                      O[2] && j.ops.pop(), j.trys.pop();
                      continue;
                  }
                  Y = _.call(S, j);
                } catch (te) {
                  Y = [6, te], v = 0;
                } finally {
                  R = O = 0;
                }
                if (5 & Y[0]) throw Y[1];
                return { value: Y[0] ? Y[1] : void 0, done: !0 };
              }([pe, X]);
            };
          }
        }(this, function(S) {
          switch (S.label) {
            case 0:
              return u = this.props, h = u.beforeOnClick, g = u.disabled, m = u.networkLink, y = u.onClick, x = u.url, b = u.openShareDialogOnClick, w = u.opts, k = m(x, w), g ? [2] : (n.preventDefault(), h ? !(_ = A = h()) || typeof _ != "object" && typeof _ != "function" || typeof _.then != "function" ? [3, 2] : [4, A] : [3, 2]);
            case 1:
              S.sent(), S.label = 2;
            case 2:
              return b && this.openShareDialog(k), y && y(n, k), [2];
          }
          var _;
        });
      }, new ((l = void 0) || (l = Promise))(function(u, h) {
        function g(x) {
          try {
            y(c.next(x));
          } catch (b) {
            h(b);
          }
        }
        function m(x) {
          try {
            y(c.throw(x));
          } catch (b) {
            h(b);
          }
        }
        function y(x) {
          var b;
          x.done ? u(x.value) : (b = x.value, b instanceof l ? b : new l(function(w) {
            w(b);
          })).then(g, m);
        }
        y((c = c.apply(o, s || [])).next());
      });
      var o, s, l, c;
    }, t;
  }
  return as(r, e), r.prototype.render = function() {
    var t = this.props, n = (t.beforeOnClick, t.children), o = t.className, s = t.disabled, l = t.disabledStyle, c = t.forwardedRef, u = (t.networkLink, t.networkName), h = (t.onShareWindowClose, t.openShareDialogOnClick, t.opts, t.resetButtonStyle), g = t.style, m = (t.url, t.windowHeight, t.windowPosition, t.windowWidth, ca(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), y = de()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!s, disabled: !!s }, o), x = Qe(Qe(h ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, g), s && l);
    return i.default.createElement("button", Qe({}, m, { "aria-label": m["aria-label"] || u, className: y, onClick: this.handleClick, ref: c, style: x }), n);
  }, r.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }, r;
}(i.Component);
var er = function() {
  return er = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    return e;
  }, er.apply(this, arguments);
};
const dr = function(e, r, t, n) {
  function o(s, l) {
    var c = t(s), u = er({}, s);
    return Object.keys(c).forEach(function(h) {
      delete u[h];
    }), i.default.createElement(os, er({}, n, u, { forwardedRef: l, networkName: e, networkLink: r, opts: t(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), (0, i.forwardRef)(o);
}, ua = dr("facebook", function(e, r) {
  var t = r.quote, n = r.hashtag;
  return xt(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ur({ u: e, quote: t, hashtag: n });
}, function(e) {
  return { quote: e.quote, hashtag: e.hashtag };
}, { windowWidth: 550, windowHeight: 400 });
var Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    return e;
  }, Vr.apply(this, arguments);
};
function fr(e) {
  var r = function(t) {
    var n = t.bgStyle, o = t.borderRadius, s = t.iconFillColor, l = t.round, c = t.size, u = function(h, g) {
      var m = {};
      for (var y in h) Object.prototype.hasOwnProperty.call(h, y) && g.indexOf(y) < 0 && (m[y] = h[y]);
      if (h != null && typeof Object.getOwnPropertySymbols == "function") {
        var x = 0;
        for (y = Object.getOwnPropertySymbols(h); x < y.length; x++) g.indexOf(y[x]) < 0 && Object.prototype.propertyIsEnumerable.call(h, y[x]) && (m[y[x]] = h[y[x]]);
      }
      return m;
    }(t, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return i.default.createElement("svg", Vr({ viewBox: "0 0 64 64", width: c, height: c }, u), l ? i.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : i.default.createElement("rect", { width: "64", height: "64", rx: o, ry: o, fill: e.color, style: n }), i.default.createElement("path", { d: e.path, fill: s }));
  };
  return r.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, r;
}
const da = fr({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), fa = dr("twitter", function(e, r) {
  var t = r.title, n = r.via, o = r.hashtags, s = o === void 0 ? [] : o, l = r.related, c = l === void 0 ? [] : l;
  return xt(e, "twitter.url"), xt(Array.isArray(s), "twitter.hashtags is not an array"), xt(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + ur({ url: e, text: t, via: n, hashtags: s.length > 0 ? s.join(",") : void 0, related: c.length > 0 ? c.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), pa = fr({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), is = dr("email", function(e, r) {
  var t = r.subject, n = r.body, o = r.separator;
  return "mailto:" + ur({ subject: t, body: n ? n + o + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, r) {
  window.location.href = r;
} }), ss = fr({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), ma = dr("linkedin", function(e, r) {
  var t = r.title, n = r.summary, o = r.source;
  return xt(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ur({ url: e, mini: "true", title: t, summary: n, source: o });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), ha = fr({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function Yr(e) {
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Yr(e);
}
function Zr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  return r ? e.split(" ").map(function(t) {
    return r[t] || t;
  }).join(" ") : e;
}
var ls = (typeof window > "u" ? "undefined" : Yr(window)) === "object" && window.Element || function() {
};
a().oneOfType([a().string, a().func, function(e, r, t) {
  if (!(e[r] instanceof ls)) return new Error("Invalid prop `" + r + "` supplied to `" + t + "`. Expected prop to be an instance of Element. Validation failed.");
}, a().shape({ current: a().any })]);
var Xr = a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func }), a().arrayOf(a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func })]))]), cs = ["className", "cssModule", "active", "tag"];
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Kr.apply(this, arguments);
}
var us = { active: a().bool, className: a().string, cssModule: a().object, tag: Xr };
function Ja(e) {
  var r = e.className, t = e.cssModule, n = e.active, o = e.tag, s = o === void 0 ? "li" : o, l = function(u, h) {
    if (u == null) return {};
    var g, m, y = function(b, w) {
      if (b == null) return {};
      var k, A, S = {}, _ = Object.keys(b);
      for (A = 0; A < _.length; A++) k = _[A], w.indexOf(k) >= 0 || (S[k] = b[k]);
      return S;
    }(u, h);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(u);
      for (m = 0; m < x.length; m++) g = x[m], h.indexOf(g) >= 0 || Object.prototype.propertyIsEnumerable.call(u, g) && (y[g] = u[g]);
    }
    return y;
  }(e, cs), c = Zr(de()(r, !!n && "active", "breadcrumb-item"), t);
  return i.default.createElement(s, Kr({}, l, { className: c, "aria-current": n ? "page" : void 0 }));
}
Ja.propTypes = us;
const qt = Ja;
var ds = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function Qr() {
  return Qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Qr.apply(this, arguments);
}
var fs = { "aria-label": a().string, children: a().node, className: a().string, cssModule: a().object, listClassName: a().string, listTag: Xr, tag: Xr };
function eo(e) {
  var r = e.className, t = e.listClassName, n = e.cssModule, o = e.children, s = e.tag, l = s === void 0 ? "nav" : s, c = e.listTag, u = c === void 0 ? "ol" : c, h = e["aria-label"], g = h === void 0 ? "breadcrumb" : h, m = function(b, w) {
    if (b == null) return {};
    var k, A, S = function(R, v) {
      if (R == null) return {};
      var O, E, j = {}, J = Object.keys(R);
      for (E = 0; E < J.length; E++) O = J[E], v.indexOf(O) >= 0 || (j[O] = R[O]);
      return j;
    }(b, w);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(b);
      for (A = 0; A < _.length; A++) k = _[A], w.indexOf(k) >= 0 || Object.prototype.propertyIsEnumerable.call(b, k) && (S[k] = b[k]);
    }
    return S;
  }(e, ds), y = Zr(de()(r), n), x = Zr(de()("breadcrumb", t), n);
  return i.default.createElement(l, Qr({}, m, { className: y, "aria-label": g }), i.default.createElement(u, { className: x }, o));
}
eo.propTypes = fs;
const ps = eo, ms = Ve.div`
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
`, hs = Ve.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, tr = ({ type: e, articleUrl: r, publicationDate: t, title: n, body: o, authorEmail: s, authorName: l, authorPhone: c, authorTitle: u, breadcrumbs: h, calendarUrl: g, eventLocation: m, eventTime: y, headerImageUrl: x, registrationUrl: b, zoomUrl: w }) => {
  const k = de()("col", "col-12", { "col-lg-8": e === "event" && (b || w || g) });
  return i.default.createElement(i.default.Fragment, null, x && e !== "event" && i.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${x})` } }), i.default.createElement(ms, { className: `container ${e}-container wrapper-container` }, h && i.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, i.default.createElement("div", { className: "col col-12" }, i.default.createElement(ps, { listClassName: "breadcrumb" }, h.map((A) => ((S) => S.active ? i.default.createElement(qt, { active: !0, tag: "li", className: "breadcrumb-item" }, i.default.createElement(qt, { tag: "a", href: S.url }, S.title)) : i.default.createElement(qt, { tag: "li", className: "breadcrumb-item" }, i.default.createElement(qt, { tag: "a", href: S.url }, S.title)))(A))))), i.default.createElement("div", { className: "row pb-2 pt-3" }, i.default.createElement("div", { className: k }, i.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && i.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (b || w) && (b ? i.default.createElement("div", { className: "card-button uds-button" }, i.default.createElement(Ge, { color: "maroon", href: b, label: "Register" })) : i.default.createElement("div", { className: "card-button uds-button" }, i.default.createElement(Ge, { color: "maroon", href: w, label: "Attend on Zoom" }))), g && i.default.createElement("div", { className: "card-button uds-button" }, i.default.createElement(Ge, { color: "gray", size: "small", href: g, label: "Add to calendar" })))), e === "event" ? i.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, y && i.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, i.default.createElement("h4", null, i.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), i.default.createElement("div", { dangerouslySetInnerHTML: De(y) })), (b && w || m) && i.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, i.default.createElement("h4", null, i.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), i.default.createElement("div", { dangerouslySetInnerHTML: De(m) }), b && w && i.default.createElement("a", { href: w }, "Attend on Zoom"))) : i.default.createElement("div", { className: "row row-spaced pt-2" }, i.default.createElement("div", { className: "col col-12" }, i.default.createElement("div", { className: "article-social-media" }, i.default.createElement(ua, { url: r, quote: n }, i.default.createElement(da, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(fa, { url: r, quote: n }, i.default.createElement(pa, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(ma, { url: r, quote: n }, i.default.createElement(ha, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), t && i.default.createElement("i", { className: "news-date" }, t))), i.default.createElement("div", { className: "row" }, i.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: De(o), "data-testid": "body" })), e === "news" && i.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, i.default.createElement("div", { className: "col col-12" }, i.default.createElement("div", { className: "author highlight-gold" }, l), u && i.default.createElement("div", { className: "author-title" }, u), s && i.default.createElement("div", { className: "author-contact" }, i.default.createElement("span", { className: "icon-bg" }, i.default.createElement("i", { className: "fas fa-envelope" })), i.default.createElement("a", { href: `mailto: ${s}` }, s)), c && i.default.createElement("div", { className: "author-contact" }, i.default.createElement("span", { className: "icon-bg" }, i.default.createElement("i", { className: "fas fa-phone" })), i.default.createElement("a", { href: `tel: ${c}` }, c)))), e === "event" && i.default.createElement(hs, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, i.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, i.default.createElement("h4", null, "For more information contact:"), i.default.createElement("div", { className: "event-author" }, l), i.default.createElement("div", { className: "event-author-title" }, u), (s || c) && i.default.createElement("div", { className: "event-author-info" }, s && i.default.createElement("div", null, i.default.createElement("a", { href: `mailto: ${s}` }, s)), c && i.default.createElement("div", null, i.default.createElement("a", { href: `tel: ${c}` }, c)))), i.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, i.default.createElement("h4", null, "Share this event:"), i.default.createElement("div", { className: "article-social-media" }, i.default.createElement(ua, { url: r, quote: n }, i.default.createElement(da, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(fa, { url: r, quote: n }, i.default.createElement(pa, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(is, { url: s, quote: n }, i.default.createElement(ss, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), i.default.createElement(ma, { url: r, quote: n }, i.default.createElement(ha, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
tr.propTypes = { type: a().oneOf(["event", "news"]), articleUrl: a().string.isRequired, publicationDate: a().string.isRequired, title: a().string.isRequired, body: a().string.isRequired, authorEmail: a().string, authorName: a().string.isRequired, authorPhone: a().string, authorTitle: a().string, breadcrumbs: a().arrayOf(a().shape({ title: a().string, url: a().string, active: a().bool })), calendarUrl: a().string, headerImageUrl: a().string, eventLocation: a().string, eventTime: a().string, registrationUrl: a().string, zoomUrl: a().string }, tr.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const gs = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, rr = ({ color: e, icon: r, innerRef: t, onClick: n, size: o, cardTitle: s }) => i.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${o === "large" && "btn-circle-large"}`, ref: t, onClick: () => (Pe({ ...gs, text: `${r == null ? void 0 : r[1]} icon`, section: s }), void (n == null ? void 0 : n())), "aria-label": "Close" }, i.default.createElement("i", { className: `${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` }));
rr.propTypes = { color: a().oneOf(["white", "gray", "black"]), icon: a().arrayOf(a().string), innerRef: a().oneOfType([a().object, a().func, a().string]), onClick: a().func, cardTitle: a().string, size: a().oneOf(["large", "small"]) }, rr.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const ys = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Ot = ({ label: e, cardTitle: r, ariaLabel: t, color: n, disabled: o, element: s, innerRef: l, href: c, onClick: u, ...h }) => {
  const g = de()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: o });
  let m = s;
  return c && s === "button" && (m = "a"), i.default.createElement(m, dt({ type: m === "button" && u ? "button" : void 0 }, h, { className: g, href: c, ref: l, onClick: () => (Pe({ ...ys, text: e, section: r }), void (u == null ? void 0 : u())), "aria-label": t }), e);
};
Ot.propTypes = { label: a().string, cardTitle: a().string, ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), disabled: a().bool, element: a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func }), a().arrayOf(a().oneOfType([a().func, a().string, a().shape({ $$typeof: a().symbol, render: a().func })]))]), href: a().string, innerRef: a().oneOfType([a().object, a().func, a().string]), onClick: a().func }, Ot.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const rt = ({ src: e, alt: r, cssClasses: t, loading: n = "lazy", decoding: o = "async", dataTestId: s, fetchPriority: l = "auto", width: c, height: u, cardLink: h, title: g, caption: m, captionTitle: y, border: x, dropShadow: b }) => {
  const w = { src: e, alt: r, loading: n, decoding: o, fetchpriority: l, ...(t == null ? void 0 : t.length) > 0 && { className: Vt(t) }, ...s && { "data-testid": s }, ...c && { width: c }, ...u && { height: u } }, k = de()("uds-img", { borderless: !x, "uds-img-drop-shadow": b }), A = (S) => {
    const _ = S ? `${w.className} ${S}` : w.className;
    return h ? i.default.createElement("a", { href: h }, i.default.createElement("img", dt({}, w, { className: _ })), i.default.createElement("span", { className: "visually-hidden" }, g)) : i.default.createElement("img", dt({}, w, { className: _ }));
  };
  return i.default.createElement(i.default.Fragment, null, m ? i.default.createElement("div", { className: k }, i.default.createElement("figure", { className: "figure uds-figure" }, A(), m && i.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, y && i.default.createElement("h3", null, y), i.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: De(m) })))) : A(k));
};
rt.propTypes = { src: a().string.isRequired, alt: a().string.isRequired, cssClasses: a().arrayOf(a().string), loading: a().oneOf(["lazy", "eager"]), decoding: a().oneOf(["sync", "async", "auto"]), fetchPriority: a().oneOf(["auto", "high", "low"]), width: a().string, height: a().string, dataTestId: a().string, cardLink: a().string, title: a().string, caption: a().string, captionTitle: a().string, border: a().bool, dropShadow: a().bool };
const vs = Ve.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, bs = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, nr = ({ type: e, width: r, horizontal: t, image: n, imageAltText: o, title: s, icon: l, body: c, eventFormat: u, eventLocation: h, eventTime: g, buttons: m, linkLabel: y, linkUrl: x, tags: b, showBorders: w, cardLink: k }) => i.default.createElement(Jr, { type: e, width: r, horizontal: t, image: n, imageAltText: o, title: s, icon: l, body: c, eventFormat: u, eventLocation: h, eventTime: g, buttons: m, linkLabel: y, linkUrl: x, tags: b, showBorders: w, cardLink: k });
nr.propTypes = { type: a().oneOf(["default", "degree", "event", "news", "story"]), width: a().oneOf(["25%", "50%", "75%", "100%"]), horizontal: a().bool, title: a().string.isRequired, icon: a().arrayOf(a().string), body: a().string, eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string, image: a().string, imageAltText: a().string, buttons: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["gold", "maroon", "gray", "dark"]), icon: a().arrayOf(a().string), href: a().string, label: a().string, onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: a().string, linkUrl: a().string, tags: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), href: a().string, label: a().string, onClick: a().func })), showBorders: a().bool, cardLink: a().string }, nr.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const Jr = ({ type: e, width: r, horizontal: t, image: n, imageAltText: o, title: s, icon: l, body: c, eventFormat: u, eventLocation: h, eventTime: g, buttons: m, linkLabel: y, linkUrl: x, tags: b, showBorders: w, cardLink: k }) => {
  const A = de()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${r.replace("%", "")}`]: r !== "100%", "card-horizontal": t, borderless: !w });
  return i.default.createElement(i.default.Fragment, null, i.default.createElement(vs, { className: A, "data-testid": "card-container" }, !!n && i.default.createElement(rt, { src: n, alt: o, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: k, title: s }), !n && l && i.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), t ? i.default.createElement("div", { className: "card-content-wrapper" }, i.default.createElement(ar, { type: e, body: c, eventFormat: u, eventLocation: h, eventTime: g, title: s, buttons: m, linkLabel: y, linkUrl: x, tags: b, cardLink: k })) : i.default.createElement(ar, { type: e, body: c, eventFormat: u, eventLocation: h, eventTime: g, title: s, buttons: m, linkLabel: y, linkUrl: x, tags: b, cardLink: k })));
};
Jr.propTypes = { type: a().oneOf(["default", "degree", "event", "news", "story"]), width: a().oneOf(["25%", "50%", "75%", "100%"]), horizontal: a().bool, title: a().string.isRequired, icon: a().arrayOf(a().string), body: a().string, eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string, image: a().string, imageAltText: a().string, buttons: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["gold", "maroon", "gray", "dark"]), icon: a().arrayOf(a().string), href: a().string, label: a().string, onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: a().string, linkUrl: a().string, tags: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), href: a().string, label: a().string, onClick: a().func })), showBorders: a().bool, cardLink: a().string }, Jr.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const ar = ({ type: e, body: r, eventFormat: t, eventLocation: n, eventTime: o, title: s, buttons: l, linkLabel: c, linkUrl: u, tags: h, cardLink: g }) => {
  return i.default.createElement(i.default.Fragment, null, !!s && i.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, i.default.createElement("h3", { className: "card-title" }, g ? i.default.createElement("a", { href: g }, s) : s)), !!r && i.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, i.default.createElement("div", { dangerouslySetInnerHTML: De(r) })), e === "event" && (o || n) && i.default.createElement(en, { eventFormat: t, eventTime: o, eventLocation: n }), l && i.default.createElement("div", { className: "card-buttons" }, l.map((y) => i.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${y.label}-${y.href}` }, i.default.createElement(Ge, { ariaLabel: y.ariaLabel, color: y.color, icon: y.icon, href: y.href, label: y.label, onClick: y.onClick, size: y.size, target: y.target, cardTitle: s })))), u && c && i.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, i.default.createElement("a", { href: (m = u, m.startsWith("https://") || m.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(m) ? m : `mailto:${m}`), onClick: () => Pe({ ...bs, section: s, text: c }) }, c)), h && i.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, h.map((y) => i.default.createElement(Ot, { key: `${y.label}-${y.href}`, ariaLabel: y.ariaLabel, color: y.color, href: y.href, label: y.label, onClick: y.onClick, cardTitle: s }))));
  var m;
};
ar.propTypes = { type: a().oneOf(["default", "degree", "event", "news", "story"]), body: a().string, eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string, title: a().string.isRequired, buttons: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["gold", "maroon", "gray", "dark"]), icon: a().arrayOf(a().string), href: a().string, label: a().string, onClick: a().func, size: a().oneOf(["default", "small", "xsmall"]), target: a().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: a().string, linkUrl: a().string, tags: a().arrayOf(a().shape({ ariaLabel: a().string, color: a().oneOf(["white", "gray", "dark"]), href: a().string, label: a().string, onClick: a().func })), cardLink: a().string }, ar.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const en = ({ eventFormat: e, eventTime: r, eventLocation: t }) => e === "inline" ? i.default.createElement("div", { className: "card-event-details" }, r && i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "far fa-calendar" })), i.default.createElement("div", { dangerouslySetInnerHTML: De(r) })), t && i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "fas fa-map-marker-alt" })), i.default.createElement("div", { dangerouslySetInnerHTML: De(t) }))) : i.default.createElement(i.default.Fragment, null, r && i.default.createElement("div", { className: "card-event-details" }, i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "far fa-calendar" })), i.default.createElement("div", { dangerouslySetInnerHTML: De(r) }))), t && i.default.createElement("div", { className: "card-event-details" }, i.default.createElement("div", { className: "card-event-icons" }, i.default.createElement("div", null, i.default.createElement("i", { className: "fas fa-map-marker-alt" })), i.default.createElement("span", null, i.default.createElement("div", { dangerouslySetInnerHTML: De(t) })))));
en.propTypes = { eventFormat: a().oneOf(["stack", "inline"]), eventLocation: a().string, eventTime: a().string }, en.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const ws = Ve.div`
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
`, ks = () => i.default.createElement(ws, null, i.default.createElement("div", null), i.default.createElement("div", null), i.default.createElement("div", null), i.default.createElement("div", null)), Es = Ve.section``, to = (0, i.createContext)(null), ro = ({ defaultProps: e, dataSource: r, noFeedText: t, renderHeader: n, renderBody: o, dataTransformer: s = (u) => u, dataFilter: l = (u) => u, maxItems: c }) => {
  const [{ data: u, loading: h, error: g }, m] = (() => {
    const [w, k] = (0, i.useState)(), [A, S] = (0, i.useState)(!1), [_, R] = (0, i.useState)(!1), [v, O] = (0, i.useState)("");
    return (0, i.useEffect)(() => {
      v && (() => {
        R(null), S(!0);
        try {
          fetch(v).then((E) => E.json()).then((E) => {
            k(E), S(!1);
          }).catch((E) => {
            R(E), S(!1);
          });
        } catch (E) {
          R(E);
        }
      })();
    }, [v]), [{ data: w, loading: A, error: _ }, O];
  })(), [y, x] = (0, i.useState)([]), b = { ...e.dataSource, ...r };
  return (0, i.useEffect)(() => {
    m(b == null ? void 0 : b.url);
  }, [b == null ? void 0 : b.url]), (0, i.useEffect)(() => {
    const w = u == null ? void 0 : u.nodes.map(s), k = w == null ? void 0 : w.filter((A) => l(A, r == null ? void 0 : r.filters));
    x(c ? k == null ? void 0 : k.slice(0, c) : k);
  }, [u]), i.default.createElement(to.Provider, { value: { feeds: y } }, i.default.createElement(Es, null, n, g ? i.default.createElement("span", null, "Error, try again!") : i.default.createElement(i.default.Fragment, null, h && !(y != null && y.length) && i.default.createElement("div", { className: "text-center mt-4" }, i.default.createElement(ks, null)), y != null && y.length ? o : !h && i.default.createElement("p", { className: "text-center" }, t))));
};
ro.propTypes = { renderHeader: a().element, renderBody: a().element, maxItems: a().number, dataTransformer: a().func, dataFilter: a().func, noFeedText: a().string };
const fn = a().shape({ color: a().oneOf(["white", "dark"]), text: a().string }), pn = a().shape({ color: a().oneOf(["gold", "maroon", "gray", "dark"]), text: a().string }), Ss = a().shape({ color: a().oneOf(["gold", "maroon", "gray", "dark"]), text: a().string, size: a().string }), no = a().shape({ url: a().string, filters: a().string }), ao = a().shape({ header: fn, ctaButton: pn, dataSource: no, maxItems: a().number }), xs = Ve.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, oo = ({ defaultProps: e, header: r, ctaButton: t }) => {
  const n = { ...e.header, ...r }, o = { ...e.ctaButton, ...t };
  return i.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, i.default.createElement("div", { className: "col-sm-12 col-md-9" }, i.default.createElement("h2", { className: `text-${n.color}` }, n.text)), i.default.createElement(xs, { className: "col-sm-12 col-md-3" }, i.default.createElement("a", { className: `btn btn-${o.color}`, href: o.url, onClick: () => Pe({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: o.text }) }, o.text)));
};
oo.propTypes = { defaultProps: ao, header: fn, ctaButton: pn };
const io = ({ children: e }) => i.default.createElement("div", { className: "row", "data-testid": "feed-body" }, i.default.createElement("div", { className: "col" }, e));
io.propTypes = { children: a().element };
const Cs = Ve.img`
  width: 100%;
`, mn = (e) => {
  const r = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: t, subTitle: n, title: o, contents: s, contentsColor: l }) {
    const c = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, u = { black: "text-dark", white: "text-white", undefined: "" };
    let h = i.default.createElement(i.default.Fragment, null);
    return o && (h = i.default.createElement("h1", { style: { maxWidth: o.maxWidth || "" }, "data-testid": "hero-title" }, i.default.createElement("span", { className: de()({ [u[o.color]]: o.color, [c[o.highlightColor]]: o.highlightColor }) }, o.text))), o && n && (h = i.default.createElement("header", null, i.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, i.default.createElement("span", { className: de()({ [u[n.color]]: n.color, [c[n.highlightColor]]: n.highlightColor }) }, n.text)), h)), i.default.createElement("div", { className: de()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[t == null ? void 0 : t.size]]: t == null ? void 0 : t.size }) }, i.default.createElement("div", { className: "hero-overlay" }), i.default.createElement(Cs, { className: "hero", src: t == null ? void 0 : t.url, alt: t == null ? void 0 : t.altText, "data-testid": "hero-image" }), h, s && i.default.createElement("div", { "data-testid": "hero-content", className: de()("content", { [u[l]]: l }) }, s.map((g, m) => i.default.createElement("p", { key: `content-${m}` }, g.text))));
  }(e), "story-hero": () => function({ image: t, title: n, contents: o }) {
    return console.log({ image: t, title: n, contents: o }), i.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${r}' is not supported by the 'Hero' component.`), null) }[r]();
};
mn.propTypes = { type: a().oneOf(["heading-hero", "story-hero"]), image: fi, title: Ir, subTitle: Ir, contents: a().arrayOf(Ir), contentsColor: a().string };
const qe = ({ dataId: e, isClickeable: r, disabled: t, pageLinkIcon: n, selectedPage: o, onClick: s, ellipses: l, ariaLabel: c, children: u, ariaDisabled: h }) => i.default.createElement("li", { className: de()("page-item", { disabled: t, active: o, elipses: l }) }, r ? i.default.createElement("button", { type: "button", "aria-label": c, className: de()("page-link", { "page-link-icon": n }), onClick: s, "data-testid": "page-link", "data-id": e, "aria-current": o ? "page" : null, "aria-disabled": h }, u, o && i.default.createElement("span", { className: "visually-hidden" }, "(current)")) : i.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, u));
qe.propTypes = { isClickeable: a().bool, disabled: a().bool, pageLinkIcon: a().bool, selectedPage: a().bool, dataId: a().string, onClick: a().func, children: a().node, ellipses: a().bool, ariaLabel: a().string, ariaDisabled: a().bool }, qe.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const Ts = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, or = ({ type: e, background: r, currentPage: t, totalPages: n, onChange: o }) => {
  const [s, l] = (0, i.useState)(null);
  (0, i.useEffect)(() => {
    l(t);
  }, [t]);
  const c = (u, h) => {
    const g = { first: 1, prev: s === 1 ? 1 : s - 1, next: s === n ? n : s + 1, last: n }[h] ?? h;
    l(g), ((m) => {
      Pe({ ...Ts, text: `page ${m}` });
    })(g), o == null || o(u, g);
  };
  return i.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, i.default.createElement("ul", { className: de()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": r === "gray1", "uds-bg-gray": r === "gray2", "uds-bg-dark": r === "gray7" }) }, i.default.createElement(qe, { dataId: "prev", isClickeable: !0, disabled: s === 1, pageLinkIcon: !0, onClick: (u) => c(u, "prev"), ariaDisabled: s === 1, ariaLabel: "Previous Page" }), (() => {
    const u = Qn(s === n - 1, 2, s === n ? 3 : 1), h = Qn(s === 1, 3, s === 2 ? 2 : 1), g = [...Jn(s - u, s, n), ...Jn(s, s + 1 + h, n)];
    return i.default.createElement(i.default.Fragment, null, g[0] !== 1 && i.default.createElement(qe, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: s === 1, onClick: (m) => c(m, "first") }, "1"), g[0] > 2 && i.default.createElement(qe, { ellipses: !0 }, "..."), g.map((m) => i.default.createElement(qe, { ariaLabel: `Page ${m} of ${n}`, isClickeable: !0, key: m, selectedPage: s === m, onClick: (y) => c(y, m) }, m)), g[g.length - 1] < n - 1 && i.default.createElement(qe, { ellipses: !0 }, "..."), g[g.length - 1] !== n && i.default.createElement(qe, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: s === n, onClick: (m) => c(m, "last") }, n));
  })(), i.default.createElement(qe, { dataId: "next", isClickeable: !0, ariaDisabled: s === n, disabled: s === n, pageLinkIcon: !0, onClick: (u) => c(u, "next"), ariaLabel: "Next Page" })));
};
or.propTypes = { type: a().oneOf(["default", "bordered"]).isRequired, background: a().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: a().number, totalPages: a().number, onChange: a().func.isRequired }, or.defaultProps = { currentPage: 1, totalPages: 10 };
const ga = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Je = (e) => e === "small", so = ({ size: e, image: r, imageAlt: t }) => Je(e) ? i.default.createElement("div", { className: "image-wrapper" }, i.default.createElement(rt, { src: r, alt: t, fetchPriority: "high" })) : i.default.createElement(rt, { src: r, alt: t, fetchPriority: "high" });
so.propTypes = { size: a().oneOf(["small", "large"]), image: a().string.isRequired, imageAlt: a().string.isRequired };
const lo = ({ heading: e, citation: r }) => i.default.createElement("div", { className: "citation" }, i.default.createElement("h4", null, e), i.default.createElement("p", null, "— ", r));
lo.propTypes = { heading: a().string.isRequired, citation: a().string.isRequired };
const co = ({ imageSize: e, body: r, heading: t, readMoreLink: n }) => {
  const [o, s] = (0, i.useState)(!1), l = `info-layer-${Math.floor(1e5 * Math.random())}`, c = (u) => {
    u.type !== "click" && u.key !== "Enter" && u.key !== " " || (s(!o), Pe({ ...ga, text: "Expand ranking", action: o ? "open" : "close", section: t }));
  };
  return i.default.createElement("div", { className: de()("info-layer", { active: o }), "data-testid": "info-layer", id: l }, i.default.createElement("div", { className: "content" }, i.default.createElement("div", { className: de()("header", { closed: Je(e) && !o }) }, Je(e) && i.default.createElement("p", { dangerouslySetInnerHTML: De(r) }), !Je(e) && i.default.createElement(i.default.Fragment, null, i.default.createElement("button", { onClick: c, className: "btn-expand", type: "button", "aria-expanded": o, "aria-controls": l }, i.default.createElement("h4", null, t), i.default.createElement("i", { className: "fas fa-chevron-up" }))), Je(e) && i.default.createElement(i.default.Fragment, null, i.default.createElement("button", { onClick: c, className: "btn btn-expand", type: "button", "aria-expanded": o, "aria-controls": l }, i.default.createElement("span", { className: "visually-hidden" }, t), i.default.createElement("i", { className: "fas fa-chevron-up" })))), !Je(e) && i.default.createElement("p", { dangerouslySetInnerHTML: De(r) }), n && i.default.createElement("a", { href: n, className: "read-more", onClick: () => {
    Pe({ ...ga, section: t, text: "read more" });
  } }, "Read more ", i.default.createElement("span", { className: "visually-hidden" }, t), i.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
co.propTypes = { imageSize: a().oneOf(["small", "large"]), body: a().string.isRequired, heading: a().string.isRequired, readMoreLink: a().string };
const hn = ({ imageSize: e = "large", image: r, imageAlt: t, heading: n, body: o, readMoreLink: s = "", citation: l }) => i.default.createElement("div", { className: de()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, i.default.createElement(so, { size: e, image: r, imageAlt: t }), Je(e) && i.default.createElement(lo, { heading: n, citation: l }), i.default.createElement(co, { imageSize: e, body: o, heading: n, readMoreLink: s }));
hn.propTypes = { imageSize: a().oneOf(["small", "large"]).isRequired, image: a().string.isRequired, imageAlt: a().string.isRequired, heading: a().string.isRequired, body: a().string.isRequired, readMoreLink: a().string, citation: a().string };
const Os = Ve.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, uo = ({ hidePrev: e, hideNext: r, clickPrev: t, clickNext: n }) => i.default.createElement(Os, null, !e && i.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: t, tabIndex: -1 }, i.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), i.default.createElement("span", { className: "visually-hidden" }, "Previous")), !r && i.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, i.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), i.default.createElement("span", { className: "visually-hidden" }, "Next")));
uo.propTypes = { hidePrev: a().bool, hideNext: a().bool, clickPrev: a().func.isRequired, clickNext: a().func.isRequired };
const fo = (0, i.forwardRef)(function(e, r) {
  const { id: t, selected: n, title: o, selectTab: s, leftKeyPressed: l, rightKeyPressed: c, icon: u } = e, h = (0, i.useRef)(null);
  return (0, i.useImperativeHandle)(r, () => ({ focus() {
    h.current.focus();
  }, scrollIntoView() {
    var y, x, b, w, k, A, S;
    const g = ((y = h.current) == null ? void 0 : y.offsetWidth) / 2 + h.current.offsetLeft, m = ((b = (x = h.current) == null ? void 0 : x.offsetParent) == null ? void 0 : b.scrollLeft) + ((k = (w = h.current) == null ? void 0 : w.offsetParent) == null ? void 0 : k.offsetWidth) / 2;
    (S = (A = h.current) == null ? void 0 : A.offsetParent) == null || S.scrollBy({ left: g - m });
  } }), []), i.default.createElement("a", { ref: h, className: "nav-item nav-link " + (n ? "active" : ""), id: t, href: `#nav-${t}`, role: "tab", "aria-controls": `nav-${t}`, "aria-selected": n, onClick: (g) => s(g, t, o), onKeyDown: (g) => {
    g.keyCode === 37 ? (g.preventDefault(), l()) : g.keyCode === 39 && (g.preventDefault(), c());
  }, tabIndex: n ? "" : "-1" }, o, " ", u && i.default.createElement("i", { className: `${u == null ? void 0 : u[0]} fa-${u == null ? void 0 : u[1]} me-1` }));
});
fo.propTypes = { id: a().string.isRequired, selected: a().bool.isRequired, title: a().string.isRequired, selectTab: a().func.isRequired, leftKeyPressed: a().func.isRequired, rightKeyPressed: a().func.isRequired, icon: a().arrayOf(a().string) };
const po = ({ id: e, bgColor: r, selected: t, children: n }) => t && i.default.createElement("div", { className: `tab-pane fade show ${t ? "show active" : ""} ${r === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
po.propTypes = { id: a().string.isRequired, bgColor: a().string, selected: a().bool, children: a().oneOfType([a().array, a().element]) };
const mo = ({ initialTab: e = "", children: r, bgColor: t = "", onTabChange: n = () => {
} }) => {
  const o = i.default.Children.toArray(r), s = (0, i.useRef)(!1), [l, c] = (0, i.useState)(e && e !== "null" ? e : o[0].props.id), u = (0, i.useRef)(null), [h, g] = function() {
    const O = (0, i.useRef)({}), E = (0, i.useCallback)((j) => (J) => {
      O.current[j] = J;
    }, []);
    return [O, E];
  }(), m = (O) => {
    var E;
    n(O), (E = h.current[O]) == null || E.focus(), c(O);
  }, [y, x] = (0, i.useState)(0), [b, w] = (0, i.useState)();
  (0, i.useEffect)(() => {
    const O = () => {
      x(u.current.scrollLeft);
    };
    return u.current.addEventListener("scroll", O), O(), () => {
      u.current && u.current.removeEventListener("scroll", O);
    };
  }, [b]), (0, i.useEffect)(() => {
    const O = () => {
      w(u.current.scrollWidth - u.current.offsetWidth);
    };
    return window.addEventListener("resize", O), O(), () => {
      u.current && window.removeEventListener("resize", O);
    };
  }, []), (0, i.useEffect)(() => {
    var O;
    (O = h.current[l]) == null || O.scrollIntoView();
  }, [l]), (0, i.useEffect)(() => {
    s.current && e && e !== "null" && l !== e && c(e);
  }, [e]), (0, i.useEffect)(() => {
    s.current = !0;
  }, []);
  const k = (O) => {
    Pe({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: O });
  }, A = o.map((O) => i.default.cloneElement(O, { bgColor: t, selected: l === O.props.id })), S = (O) => {
    const E = u.current, j = E.scrollWidth - E.clientWidth;
    let J = E.scrollLeft + 200 * O;
    J = Math.max(0, Math.min(j, J)), E.scrollTo({ left: J, behavior: "smooth" });
  }, _ = (O, E, j) => {
    Pe({ event: "link", action: "click", name: "onclick", type: "internal link", text: j }), O.preventDefault(), m(E);
  }, R = (O = !0) => {
    const E = o.length, j = O ? 1 : -1, J = o.findIndex((X) => X.props.id === l), pe = o[(E + J + j) % E].props.id;
    m(pe);
  };
  let v = "uds-tabbed-panels";
  return t === "bg-dark" && (v += " uds-tabbed-panels-dark"), i.default.createElement("div", { className: t }, i.default.createElement("nav", { className: v }, i.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: u }, o.map((O, E) => i.default.createElement(fo, { ref: g(O.props.id), id: O.props.id, title: O.props.title, selected: l === O.props.id, selectTab: _, key: O.props.id, leftKeyPressed: () => R(!1), rightKeyPressed: () => R(), icon: O.props.icon, index: E }))), i.default.createElement(uo, { hidePrev: y <= 0, hideNext: y >= b, clickPrev: () => {
    S(-1), k("left chevron");
  }, clickNext: () => {
    S(1), k("right chevron");
  } })), i.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, A));
};
mo.propTypes = { initialTab: a().string, children: a().arrayOf(a().element).isRequired, bgColor: a().string, onTabChange: a().func };
const gn = ({ imageSource: e, imageAltText: r, quote: t, itemStyle: n = {} }) => {
  var o, s;
  return i.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Vt(n.containerCssClass)}` }, e && i.default.createElement(rt, { src: e, alt: r, dataTestId: "testimonial-image", fetchPriority: "high" }), i.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, i.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), i.default.createElement("blockquote", { style: { paddingLeft: 0 } }, t.title && i.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, i.default.createElement("span", { className: Vt(n.titleCssClass) }, t.title)), t.content && i.default.createElement("p", { className: Vt(n.contentCssClass), "data-testid": "testimonial-content" }, t.content), (!!((o = t.cite) != null && o.name) || !!((s = t.cite) != null && s.description)) && i.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, i.default.createElement("cite", { className: "name" }, t.cite.name), t.cite && i.default.createElement("cite", { className: "description" }, t.cite.description))));
};
gn.propTypes = { quote: a().shape({ title: a().string, content: a().string, cite: a().shape({ name: a().string, description: a().string }) }).isRequired, imageSource: a().string, imageAltText: a().string, itemStyle: a().shape({ containerCssClass: a().arrayOf(a().string), titleCssClass: a().arrayOf(a().string), contentCssClass: a().arrayOf(a().string) }) };
const Ns = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, yn = (e) => {
  const { type: r = "video", url: t = "", vttUrl: n, title: o = "", caption: s, className: l, controls: c = !0 } = e;
  return r === "youtube" ? (({ title: u = "", caption: h, url: g = "", className: m }) => i.default.createElement("div", { className: de()(`uds-video-container ${m}`, { "uds-video-with-caption": h }) }, i.default.createElement("div", { className: "uds-video-player youtube-video" }, i.default.createElement("iframe", { title: u, src: g })), h && i.default.createElement("figure", { "data-testid": "video-caption" }, i.default.createElement("figcaption", null, h))))({ url: t, title: o, caption: s, className: l }) : (({ url: u = "", vttUrl: h, caption: g, title: m = "", className: y, controls: x = !0 }) => {
    const b = (0, i.useRef)(null);
    return i.default.createElement("div", { className: de()(`uds-video-container ${y}`, { "uds-video-with-caption": g }) }, i.default.createElement("div", { className: "uds-video-player" }, i.default.createElement("video", { ref: b, title: m, onClick: () => {
      Pe({ ...Ns, section: m });
    }, playsInline: !0, controls: x || !0 }, i.default.createElement("source", { src: u }), i.default.createElement("track", { src: h, kind: "captions", srcLang: "en", label: "english_captions" }))), g && i.default.createElement("figure", { "data-testid": "video-caption" }, i.default.createElement("figcaption", null, g)));
  })({ url: t, vttUrl: n, title: o, caption: s, className: l, controls: c });
};
yn.propTypes = { type: a().oneOf(["video", "youtube"]), url: a().string, vttUrl: a().string, title: a().string, className: a().string, caption: a().string, controls: a().bool };
var As = ye(873);
const Ie = (e, r, t) => {
  (0, As.H)(t).render(i.default.createElement(e, r));
}, Rs = ({ targetSelector: e, props: r }) => Ie(ln, r, document.querySelector(e)), _s = ({ targetSelector: e, props: r }) => Ie(dn, r, document.querySelector(e)), Ps = ({ targetSelector: e, props: r }) => Ie(tr, r, document.querySelector(e)), Is = ({ targetSelector: e, props: r }) => Ie(Ge, r, document.querySelector(e)), Ls = ({ targetSelector: e, props: r }) => Ie(rr, r, document.querySelector(e)), $s = ({ targetSelector: e, props: r }) => Ie(Ot, r, document.querySelector(e)), Ds = ({ targetSelector: e, props: r }) => Ie(nr, r, document.querySelector(e)), Ms = ({ targetSelector: e, props: r }) => Ie(mn, r, document.querySelector(e)), js = ({ targetSelector: e, props: r }) => Ie(rt, r, document.querySelector(e)), zs = ({ targetSelector: e, props: r }) => Ie(hn, r, document.querySelector(e)), Fs = ({ targetSelector: e, props: r }) => Ie(or, r, document.querySelector(e)), Us = ({ targetSelector: e, props: r }) => Ie(gn, r, document.querySelector(e)), Hs = ({ targetSelector: e, props: r }) => Ie(yn, r, document.querySelector(e));
var ho = gt.Zp, qs = gt.TR, Bs = gt.Pb, go = gt.Ur, Ws = gt._Q, yo = { exports: {} }, Mr = { exports: {} }, le = {};
var ya;
function Gs() {
  if (ya) return le;
  ya = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function _(v) {
    if (typeof v == "object" && v !== null) {
      var O = v.$$typeof;
      switch (O) {
        case r:
          switch (v = v.type, v) {
            case u:
            case h:
            case n:
            case s:
            case o:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case g:
                case b:
                case x:
                case l:
                  return v;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  function R(v) {
    return _(v) === h;
  }
  return le.AsyncMode = u, le.ConcurrentMode = h, le.ContextConsumer = c, le.ContextProvider = l, le.Element = r, le.ForwardRef = g, le.Fragment = n, le.Lazy = b, le.Memo = x, le.Portal = t, le.Profiler = s, le.StrictMode = o, le.Suspense = m, le.isAsyncMode = function(v) {
    return R(v) || _(v) === u;
  }, le.isConcurrentMode = R, le.isContextConsumer = function(v) {
    return _(v) === c;
  }, le.isContextProvider = function(v) {
    return _(v) === l;
  }, le.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }, le.isForwardRef = function(v) {
    return _(v) === g;
  }, le.isFragment = function(v) {
    return _(v) === n;
  }, le.isLazy = function(v) {
    return _(v) === b;
  }, le.isMemo = function(v) {
    return _(v) === x;
  }, le.isPortal = function(v) {
    return _(v) === t;
  }, le.isProfiler = function(v) {
    return _(v) === s;
  }, le.isStrictMode = function(v) {
    return _(v) === o;
  }, le.isSuspense = function(v) {
    return _(v) === m;
  }, le.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === h || v === s || v === o || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === x || v.$$typeof === l || v.$$typeof === c || v.$$typeof === g || v.$$typeof === k || v.$$typeof === A || v.$$typeof === S || v.$$typeof === w);
  }, le.typeOf = _, le;
}
var va;
function vo() {
  return va || (va = 1, Mr.exports = Gs()), Mr.exports;
}
var jr, ba;
function Vs() {
  if (ba) return jr;
  ba = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jr = e, jr;
}
var zr, wa;
function Ys() {
  if (wa) return zr;
  wa = 1;
  var e = Vs();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, zr = function() {
    function n(l, c, u, h, g, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return s.PropTypes = s, s;
  }, zr;
}
yo.exports = Ys()();
var Zs = yo.exports;
const fe = /* @__PURE__ */ za(Zs), bo = fe.shape({
  color: fe.oneOf(["white", "dark"]),
  text: fe.string
}), wo = fe.shape({
  color: fe.oneOf(["gold", "maroon", "gray", "dark"]),
  text: fe.string
});
fe.shape({
  color: fe.oneOf(["gold", "maroon", "gray", "dark"]),
  text: fe.string,
  size: fe.string
});
const ko = fe.shape({
  url: fe.string,
  filters: fe.string
});
fe.shape({
  header: bo,
  ctaButton: wo,
  dataSource: ko,
  maxItems: fe.number
});
const ka = {
  header: {
    color: "dark",
    text: "Events list"
  },
  ctaButton: {
    color: "gold",
    text: "Click to see more events",
    url: "https://asuevents.asu.edu/"
  },
  dataSource: {
    url: "https://asuevents.asu.edu/feed-json/"
  }
}, Ea = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], Sa = (e) => e.toLowerCase().split(" ").join("_"), Xs = (e, r) => {
  if (!r) return !0;
  const t = r.split(",");
  for (let n = 0; n < t.length; n += 1) {
    const o = Sa(t[n]);
    for (let s = 0; s < Ea.length; s += 1) {
      const l = Ea[s];
      if (Sa(e[l] || "").includes(o)) return !0;
    }
  }
  return !1;
}, Ks = (e) => ({
  id: e.node.nid,
  title: e.node.title,
  imageUrl: e.node.image_url,
  location: (e.node.campus || "").trim(),
  interests: e.node.interests,
  startDate: e.node.very_start_date,
  endDate: e.node.very_end_date,
  alias: e.node.alias,
  // Also used for card link in title of card
  audiences: e.node.audiences,
  eventUnits: e.node.event_units,
  eventTopics: e.node.event_topics,
  eventTypes: e.node.event_types,
  collegeUnit: e.node.college_unit,
  eventButtonUrl: e.node.ticketing_rsvp_url,
  eventButtonText: e.node.ticketing_rsvp_txt
}), vn = ({ children: e, header: r, ctaButton: t, dataSource: n, maxItems: o }) => (
  // Calling the components-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the components-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ _e.jsx(
    Bs,
    {
      renderHeader: r && t ? /* @__PURE__ */ _e.jsx(
        Ws,
        {
          header: r,
          ctaButton: t,
          defaultProps: ka
        }
      ) : null,
      renderBody: /* @__PURE__ */ _e.jsx(qs, { children: e }),
      dataTransformer: Ks,
      dataFilter: Xs,
      dataSource: n,
      defaultProps: ka,
      noFeedText: "No events to show.",
      maxItems: o
    }
  )
);
vn.propTypes = {
  header: bo,
  ctaButton: wo,
  dataSource: ko,
  maxItems: fe.number,
  children: fe.element
};
const Qs = fe.shape({
  color: fe.oneOf(["white", "dark"]),
  text: fe.string
}), Js = fe.shape({
  color: fe.oneOf(["gold", "maroon", "gray", "dark"]),
  text: fe.string,
  url: fe.string
}), el = fe.shape({
  url: fe.string.isRequired,
  filters: fe.string
}).isRequired, Eo = {
  header: Qs,
  ctaButton: Js,
  dataSource: el,
  maxItems: fe.number
}, tl = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), xa = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), tn = (e) => {
  let r = e.split("T");
  return r = r.length > 1 ? r.join("T") : `${r[0].split(":")[0]}T00:00:00Z`, r;
}, Ca = (e) => {
  let r = e.getHours(), t = e.getMinutes();
  const n = r >= 12 ? "p.m." : "a.m.";
  return r %= 12, r = r || 12, t = t < 10 ? `0${t}` : t, `${r}:${t} ${n}`;
}, So = (e, r) => {
  const t = tn(e), n = tn(r);
  let o = xa(new Date(t)), s = xa(new Date(n));
  return o = Ca(new Date(o)), s = Ca(new Date(s)), e === r ? o : `${o} - ${s}`;
}, ir = (e, r) => {
  const t = tn(e);
  return {
    ISO: t.split("T")[0],
    COMPLETE: tl(new Date(t))
  }[r];
};
var bn = vo();
function rl(e) {
  function r(C, T, p, I, f) {
    for (var D = 0, N = 0, Q = 0, Z = 0, q, W, K = 0, ie = 0, ee, ae = ee = q = 0, G = 0, ne = 0, Ae = 0, z = 0, L = p.length, H = L - 1, $, P = "", re = "", xe = "", ze = "", Me; G < L; ) {
      if (W = p.charCodeAt(G), G === H && N + Z + Q + D !== 0 && (N !== 0 && (W = N === 47 ? 10 : 47), Z = Q = D = 0, L++, H++), N + Z + Q + D === 0) {
        if (G === H && (0 < ne && (P = P.replace(y, "")), 0 < P.trim().length)) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              P += p.charAt(G);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (P = P.trim(), q = P.charCodeAt(0), ee = 1, z = ++G; G < L; ) {
              switch (W = p.charCodeAt(G)) {
                case 123:
                  ee++;
                  break;
                case 125:
                  ee--;
                  break;
                case 47:
                  switch (W = p.charCodeAt(G + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ae = G + 1; ae < H; ++ae)
                          switch (p.charCodeAt(ae)) {
                            case 47:
                              if (W === 42 && p.charCodeAt(ae - 1) === 42 && G + 2 !== ae) {
                                G = ae + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                G = ae + 1;
                                break e;
                              }
                          }
                        G = ae;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; G++ < H && p.charCodeAt(G) !== W; )
                    ;
              }
              if (ee === 0) break;
              G++;
            }
            switch (ee = p.substring(z, G), q === 0 && (q = (P = P.replace(m, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < ne && (P = P.replace(y, "")), W = P.charCodeAt(1), W) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ne = T;
                    break;
                  default:
                    ne = Ce;
                }
                if (ee = r(T, ne, ee, W, f + 1), z = ee.length, 0 < he && (ne = t(Ce, P, Ae), Me = c(3, ee, ne, T, te, Y, z, W, f, I), P = ne.join(""), Me !== void 0 && (z = (ee = Me.trim()).length) === 0 && (W = 0, ee = "")), 0 < z) switch (W) {
                  case 115:
                    P = P.replace(O, l);
                  case 100:
                  case 109:
                  case 45:
                    ee = P + "{" + ee + "}";
                    break;
                  case 107:
                    P = P.replace(S, "$1 $2"), ee = P + "{" + ee + "}", ee = ue === 1 || ue === 2 && s("@" + ee, 3) ? "@-webkit-" + ee + "@" + ee : "@" + ee;
                    break;
                  default:
                    ee = P + ee, I === 112 && (ee = (re += ee, ""));
                }
                else ee = "";
                break;
              default:
                ee = r(T, t(T, P, Ae), ee, I, f + 1);
            }
            xe += ee, ee = Ae = ne = ae = q = 0, P = "", W = p.charCodeAt(++G);
            break;
          case 125:
          case 59:
            if (P = (0 < ne ? P.replace(y, "") : P).trim(), 1 < (z = P.length)) switch (ae === 0 && (q = P.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (z = (P = P.replace(" ", ":")).length), 0 < he && (Me = c(1, P, T, C, te, Y, re.length, I, f, I)) !== void 0 && (z = (P = Me.trim()).length) === 0 && (P = "\0\0"), q = P.charCodeAt(0), W = P.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (W === 105 || W === 99) {
                  ze += P + p.charAt(G);
                  break;
                }
              default:
                P.charCodeAt(z - 1) !== 58 && (re += o(P, q, W, P.charCodeAt(2)));
            }
            Ae = ne = ae = q = 0, P = "", W = p.charCodeAt(++G);
        }
      }
      switch (W) {
        case 13:
        case 10:
          N === 47 ? N = 0 : 1 + q === 0 && I !== 107 && 0 < P.length && (ne = 1, P += "\0"), 0 < he * V && c(0, P, T, C, te, Y, re.length, I, f, I), Y = 1, te++;
          break;
        case 59:
        case 125:
          if (N + Z + Q + D === 0) {
            Y++;
            break;
          }
        default:
          switch (Y++, $ = p.charAt(G), W) {
            case 9:
            case 32:
              if (Z + D + N === 0) switch (K) {
                case 44:
                case 58:
                case 9:
                case 32:
                  $ = "";
                  break;
                default:
                  W !== 32 && ($ = " ");
              }
              break;
            case 0:
              $ = "\\0";
              break;
            case 12:
              $ = "\\f";
              break;
            case 11:
              $ = "\\v";
              break;
            case 38:
              Z + N + D === 0 && (ne = Ae = 1, $ = "\f" + $);
              break;
            case 108:
              if (Z + N + D + B === 0 && 0 < ae) switch (G - ae) {
                case 2:
                  K === 112 && p.charCodeAt(G - 3) === 58 && (B = K);
                case 8:
                  ie === 111 && (B = ie);
              }
              break;
            case 58:
              Z + N + D === 0 && (ae = G);
              break;
            case 44:
              N + Q + Z + D === 0 && (ne = 1, $ += "\r");
              break;
            case 34:
            case 39:
              N === 0 && (Z = Z === W ? 0 : Z === 0 ? W : Z);
              break;
            case 91:
              Z + N + Q === 0 && D++;
              break;
            case 93:
              Z + N + Q === 0 && D--;
              break;
            case 41:
              Z + N + D === 0 && Q--;
              break;
            case 40:
              if (Z + N + D === 0) {
                if (q === 0) switch (2 * K + 3 * ie) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                Q++;
              }
              break;
            case 64:
              N + Q + Z + D + ae + ee === 0 && (ee = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Z + D + Q)) switch (N) {
                case 0:
                  switch (2 * W + 3 * p.charCodeAt(G + 1)) {
                    case 235:
                      N = 47;
                      break;
                    case 220:
                      z = G, N = 42;
                  }
                  break;
                case 42:
                  W === 47 && K === 42 && z + 2 !== G && (p.charCodeAt(z + 2) === 33 && (re += p.substring(z, G + 1)), $ = "", N = 0);
              }
          }
          N === 0 && (P += $);
      }
      ie = K, K = W, G++;
    }
    if (z = re.length, 0 < z) {
      if (ne = T, 0 < he && (Me = c(2, re, ne, C, te, Y, z, I, f, I), Me !== void 0 && (re = Me).length === 0)) return ze + re + xe;
      if (re = ne.join(",") + "{" + re + "}", ue * B !== 0) {
        switch (ue !== 2 || s(re, 2) || (B = 0), B) {
          case 111:
            re = re.replace(R, ":-moz-$1") + re;
            break;
          case 112:
            re = re.replace(_, "::-webkit-input-$1") + re.replace(_, "::-moz-$1") + re.replace(_, ":-ms-input-$1") + re;
        }
        B = 0;
      }
    }
    return ze + re + xe;
  }
  function t(C, T, p) {
    var I = T.trim().split(k);
    T = I;
    var f = I.length, D = C.length;
    switch (D) {
      case 0:
      case 1:
        var N = 0;
        for (C = D === 0 ? "" : C[0] + " "; N < f; ++N)
          T[N] = n(C, T[N], p).trim();
        break;
      default:
        var Q = N = 0;
        for (T = []; N < f; ++N)
          for (var Z = 0; Z < D; ++Z)
            T[Q++] = n(C[Z] + " ", I[N], p).trim();
    }
    return T;
  }
  function n(C, T, p) {
    var I = T.charCodeAt(0);
    switch (33 > I && (I = (T = T.trim()).charCodeAt(0)), I) {
      case 38:
        return T.replace(A, "$1" + C.trim());
      case 58:
        return C.trim() + T.replace(A, "$1" + C.trim());
      default:
        if (0 < 1 * p && 0 < T.indexOf("\f")) return T.replace(A, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + T;
  }
  function o(C, T, p, I) {
    var f = C + ";", D = 2 * T + 3 * p + 4 * I;
    if (D === 944) {
      C = f.indexOf(":", 9) + 1;
      var N = f.substring(C, f.length - 1).trim();
      return N = f.substring(0, C).trim() + N + ";", ue === 1 || ue === 2 && s(N, 1) ? "-webkit-" + N + N : N;
    }
    if (ue === 0 || ue === 2 && !s(f, 1)) return f;
    switch (D) {
      case 1015:
        return f.charCodeAt(10) === 97 ? "-webkit-" + f + f : f;
      case 951:
        return f.charCodeAt(3) === 116 ? "-webkit-" + f + f : f;
      case 963:
        return f.charCodeAt(5) === 110 ? "-webkit-" + f + f : f;
      case 1009:
        if (f.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + f + f;
      case 978:
        return "-webkit-" + f + "-moz-" + f + f;
      case 1019:
      case 983:
        return "-webkit-" + f + "-moz-" + f + "-ms-" + f + f;
      case 883:
        if (f.charCodeAt(8) === 45) return "-webkit-" + f + f;
        if (0 < f.indexOf("image-set(", 11)) return f.replace(X, "$1-webkit-$2") + f;
        break;
      case 932:
        if (f.charCodeAt(4) === 45) switch (f.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + f.replace("-grow", "") + "-webkit-" + f + "-ms-" + f.replace("grow", "positive") + f;
          case 115:
            return "-webkit-" + f + "-ms-" + f.replace("shrink", "negative") + f;
          case 98:
            return "-webkit-" + f + "-ms-" + f.replace("basis", "preferred-size") + f;
        }
        return "-webkit-" + f + "-ms-" + f + f;
      case 964:
        return "-webkit-" + f + "-ms-flex-" + f + f;
      case 1023:
        if (f.charCodeAt(8) !== 99) break;
        return N = f.substring(f.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + N + "-webkit-" + f + "-ms-flex-pack" + N + f;
      case 1005:
        return b.test(f) ? f.replace(x, ":-webkit-") + f.replace(x, ":-moz-") + f : f;
      case 1e3:
        switch (N = f.substring(13).trim(), T = N.indexOf("-") + 1, N.charCodeAt(0) + N.charCodeAt(T)) {
          case 226:
            N = f.replace(v, "tb");
            break;
          case 232:
            N = f.replace(v, "tb-rl");
            break;
          case 220:
            N = f.replace(v, "lr");
            break;
          default:
            return f;
        }
        return "-webkit-" + f + "-ms-" + N + f;
      case 1017:
        if (f.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (T = (f = C).length - 10, N = (f.charCodeAt(T) === 33 ? f.substring(0, T) : f).substring(C.indexOf(":", 7) + 1).trim(), D = N.charCodeAt(0) + (N.charCodeAt(7) | 0)) {
          case 203:
            if (111 > N.charCodeAt(8)) break;
          case 115:
            f = f.replace(N, "-webkit-" + N) + ";" + f;
            break;
          case 207:
          case 102:
            f = f.replace(N, "-webkit-" + (102 < D ? "inline-" : "") + "box") + ";" + f.replace(N, "-webkit-" + N) + ";" + f.replace(N, "-ms-" + N + "box") + ";" + f;
        }
        return f + ";";
      case 938:
        if (f.charCodeAt(5) === 45) switch (f.charCodeAt(6)) {
          case 105:
            return N = f.replace("-items", ""), "-webkit-" + f + "-webkit-box-" + N + "-ms-flex-" + N + f;
          case 115:
            return "-webkit-" + f + "-ms-flex-item-" + f.replace(j, "") + f;
          default:
            return "-webkit-" + f + "-ms-flex-line-pack" + f.replace("align-content", "").replace(j, "") + f;
        }
        break;
      case 973:
      case 989:
        if (f.charCodeAt(3) !== 45 || f.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (pe.test(C) === !0) return (N = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(C.replace("stretch", "fill-available"), T, p, I).replace(":fill-available", ":stretch") : f.replace(N, "-webkit-" + N) + f.replace(N, "-moz-" + N.replace("fill-", "")) + f;
        break;
      case 962:
        if (f = "-webkit-" + f + (f.charCodeAt(5) === 102 ? "-ms-" + f : "") + f, p + I === 211 && f.charCodeAt(13) === 105 && 0 < f.indexOf("transform", 10)) return f.substring(0, f.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + f;
    }
    return f;
  }
  function s(C, T) {
    var p = C.indexOf(T === 1 ? ":" : "{"), I = C.substring(0, T !== 3 ? p : 10);
    return p = C.substring(p + 1, C.length - 1), Oe(T !== 2 ? I : I.replace(J, "$1"), p, T);
  }
  function l(C, T) {
    var p = o(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return p !== T + ";" ? p.replace(E, " or ($1)").substring(4) : "(" + T + ")";
  }
  function c(C, T, p, I, f, D, N, Q, Z, q) {
    for (var W = 0, K = T, ie; W < he; ++W)
      switch (ie = oe[W].call(g, C, K, p, I, f, D, N, Q, Z, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          K = ie;
      }
    if (K !== T) return K;
  }
  function u(C) {
    switch (C) {
      case void 0:
      case null:
        he = oe.length = 0;
        break;
      default:
        if (typeof C == "function") oe[he++] = C;
        else if (typeof C == "object") for (var T = 0, p = C.length; T < p; ++T)
          u(C[T]);
        else V = !!C | 0;
    }
    return u;
  }
  function h(C) {
    return C = C.prefix, C !== void 0 && (Oe = null, C ? typeof C != "function" ? ue = 1 : (ue = 2, Oe = C) : ue = 0), h;
  }
  function g(C, T) {
    var p = C;
    if (33 > p.charCodeAt(0) && (p = p.trim()), F = p, p = [F], 0 < he) {
      var I = c(-1, T, p, p, te, Y, 0, 0, 0, 0);
      I !== void 0 && typeof I == "string" && (T = I);
    }
    var f = r(Ce, p, T, 0, 0);
    return 0 < he && (I = c(-2, f, p, p, te, Y, f.length, 0, 0, 0), I !== void 0 && (f = I)), F = "", B = 0, Y = te = 1, f;
  }
  var m = /^\0+/g, y = /[\0\r\f]/g, x = /: */g, b = /zoo|gra/, w = /([,: ])(transform)/g, k = /,\r+?/g, A = /([\t\r\n ])*\f?&/g, S = /@(k\w+)\s*(\S*)\s*/, _ = /::(place)/g, R = /:(read-only)/g, v = /[svh]\w+-[tblr]{2}/, O = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, j = /-self|flex-/g, J = /[^]*?(:[rp][el]a[\w-]+)[^]*/, pe = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, Y = 1, te = 1, B = 0, ue = 1, Ce = [], oe = [], he = 0, Oe = null, V = 0, F = "";
  return g.use = u, g.set = h, e !== void 0 && h(e), g;
}
var nl = {
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
function al(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ol = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ta = /* @__PURE__ */ al(
  function(e) {
    return ol.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wn = vo(), il = {
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
}, sl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ll = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, kn = {};
kn[wn.ForwardRef] = ll;
kn[wn.Memo] = xo;
function Oa(e) {
  return wn.isMemo(e) ? xo : kn[e.$$typeof] || il;
}
var cl = Object.defineProperty, ul = Object.getOwnPropertyNames, Na = Object.getOwnPropertySymbols, dl = Object.getOwnPropertyDescriptor, fl = Object.getPrototypeOf, Aa = Object.prototype;
function Co(e, r, t) {
  if (typeof r != "string") {
    if (Aa) {
      var n = fl(r);
      n && n !== Aa && Co(e, n, t);
    }
    var o = ul(r);
    Na && (o = o.concat(Na(r)));
    for (var s = Oa(e), l = Oa(r), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!sl[u] && !(t && t[u]) && !(l && l[u]) && !(s && s[u])) {
        var h = dl(r, u);
        try {
          cl(e, u, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var pl = Co;
const ml = /* @__PURE__ */ za(pl);
var ce = { env: { NODE_ENV: "production" } };
function We() {
  return (We = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ra = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, rn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !bn.typeOf(e);
}, sr = Object.freeze([]), Xe = Object.freeze({});
function Nt(e) {
  return typeof e == "function";
}
function nn(e) {
  return ce.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function En(e) {
  return e && typeof e.styledComponentId == "string";
}
var pt = typeof ce < "u" && ce.env !== void 0 && (ce.env.REACT_APP_SC_ATTR || ce.env.SC_ATTR) || "data-styled", Sn = typeof window < "u" && "HTMLElement" in window, hl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ce < "u" && ce.env !== void 0 && (ce.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ce.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ce.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ce.env.REACT_APP_SC_DISABLE_SPEEDY : ce.env.SC_DISABLE_SPEEDY !== void 0 && ce.env.SC_DISABLE_SPEEDY !== "" ? ce.env.SC_DISABLE_SPEEDY !== "false" && ce.env.SC_DISABLE_SPEEDY : ce.env.NODE_ENV !== "production")), gl = ce.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function yl() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function yt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw ce.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(yl.apply(void 0, [gl[e]].concat(t)).trim());
}
var vl = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++) n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, l = s; t >= l; ) (l <<= 1) < 0 && yt(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(o), this.length = l;
      for (var c = s; c < l; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(t + 1), h = 0, g = n.length; h < g; h++) this.tag.insertRule(u, n[h]) && (this.groupSizes[t]++, u++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), s = o + n;
      this.groupSizes[t] = 0;
      for (var l = o; l < s; l++) this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), l = s + o, c = s; c < l; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Xt = /* @__PURE__ */ new Map(), lr = /* @__PURE__ */ new Map(), Ct = 1, Bt = function(e) {
  if (Xt.has(e)) return Xt.get(e);
  for (; lr.has(Ct); ) Ct++;
  var r = Ct++;
  return ce.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && yt(16, "" + r), Xt.set(e, r), lr.set(r, e), r;
}, bl = function(e) {
  return lr.get(e);
}, wl = function(e, r) {
  r >= Ct && (Ct = r + 1), Xt.set(e, r), lr.set(r, e);
}, kl = "style[" + pt + '][data-styled-version="5.3.11"]', El = new RegExp("^" + pt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Sl = function(e, r, t) {
  for (var n, o = t.split(","), s = 0, l = o.length; s < l; s++) (n = o[s]) && e.registerName(r, n);
}, xl = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = t.length; o < s; o++) {
    var l = t[o].trim();
    if (l) {
      var c = l.match(El);
      if (c) {
        var u = 0 | parseInt(c[1], 10), h = c[2];
        u !== 0 && (wl(h, u), Sl(e, h, c[3]), e.getTag().insertRules(u, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, Cl = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, To = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var u = c.childNodes, h = u.length; h >= 0; h--) {
      var g = u[h];
      if (g && g.nodeType === 1 && g.hasAttribute(pt)) return g;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(pt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = Cl();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, s), n;
}, Tl = function() {
  function e(t) {
    var n = this.element = To(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, l = 0, c = s.length; l < c; l++) {
        var u = s[l];
        if (u.ownerNode === o) return u;
      }
      yt(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Ol = function() {
  function e(t) {
    var n = this.element = To(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Nl = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), _a = Sn, Al = { isServer: !Sn, useCSSOMInjection: !hl }, Oo = function() {
  function e(t, n, o) {
    t === void 0 && (t = Xe), n === void 0 && (n = {}), this.options = We({}, Al, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Sn && _a && (_a = !1, function(s) {
      for (var l = document.querySelectorAll(kl), c = 0, u = l.length; c < u; c++) {
        var h = l[c];
        h && h.getAttribute(pt) !== "active" && (xl(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Bt(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(We({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, l = n.target, t = o ? new Nl(l) : s ? new Tl(l) : new Ol(l), new vl(t)));
    var t, n, o, s, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Bt(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Bt(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Bt(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, s = "", l = 0; l < o; l++) {
        var c = bl(l);
        if (c !== void 0) {
          var u = t.names.get(c), h = n.getGroup(l);
          if (u && h && u.size) {
            var g = pt + ".g" + l + '[id="' + c + '"]', m = "";
            u !== void 0 && u.forEach(function(y) {
              y.length > 0 && (m += y + ",");
            }), s += "" + h + g + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Rl = /(a)(d)/gi, Pa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function an(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Pa(r % 52) + t;
  return (Pa(r % 52) + t).replace(Rl, "$1-$2");
}
var et = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, No = function(e) {
  return et(5381, e);
};
function _l(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Nt(t) && !En(t)) return !1;
  }
  return !0;
}
var Pl = No("5.3.11"), Il = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = ce.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && _l(r), this.componentId = t, this.baseHash = et(Pl, t), this.baseStyle = n, Oo.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var l = mt(this.rules, r, t, n).join(""), c = an(et(this.baseHash, l) >>> 0);
      if (!t.hasNameForId(o, c)) {
        var u = n(l, "." + c, void 0, o);
        t.insertRules(o, c, u);
      }
      s.push(c), this.staticRulesId = c;
    }
    else {
      for (var h = this.rules.length, g = et(this.baseHash, n.hash), m = "", y = 0; y < h; y++) {
        var x = this.rules[y];
        if (typeof x == "string") m += x, ce.env.NODE_ENV !== "production" && (g = et(g, x + y));
        else if (x) {
          var b = mt(x, r, t, n), w = Array.isArray(b) ? b.join("") : b;
          g = et(g, w + y), m += w;
        }
      }
      if (m) {
        var k = an(g >>> 0);
        if (!t.hasNameForId(o, k)) {
          var A = n(m, "." + k, void 0, o);
          t.insertRules(o, k, A);
        }
        s.push(k);
      }
    }
    return s.join(" ");
  }, e;
}(), Ll = /^\s*\/\/.*$/gm, $l = [":", "[", ".", "#"];
function Dl(e) {
  var r, t, n, o, s = Xe, l = s.options, c = l === void 0 ? Xe : l, u = s.plugins, h = u === void 0 ? sr : u, g = new rl(c), m = [], y = /* @__PURE__ */ function(w) {
    function k(A) {
      if (A) try {
        w(A + "}");
      } catch {
      }
    }
    return function(A, S, _, R, v, O, E, j, J, pe) {
      switch (A) {
        case 1:
          if (J === 0 && S.charCodeAt(0) === 64) return w(S + ";"), "";
          break;
        case 2:
          if (j === 0) return S + "/*|*/";
          break;
        case 3:
          switch (j) {
            case 102:
            case 112:
              return w(_[0] + S), "";
            default:
              return S + (pe === 0 ? "/*|*/" : "");
          }
        case -2:
          S.split("/*|*/}").forEach(k);
      }
    };
  }(function(w) {
    m.push(w);
  }), x = function(w, k, A) {
    return k === 0 && $l.indexOf(A[t.length]) !== -1 || A.match(o) ? w : "." + r;
  };
  function b(w, k, A, S) {
    S === void 0 && (S = "&");
    var _ = w.replace(Ll, ""), R = k && A ? A + " " + k + " { " + _ + " }" : _;
    return r = S, t = k, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), g(A || !k ? "" : k, R);
  }
  return g.use([].concat(h, [function(w, k, A) {
    w === 2 && A.length && A[0].lastIndexOf(t) > 0 && (A[0] = A[0].replace(n, x));
  }, y, function(w) {
    if (w === -2) {
      var k = m;
      return m = [], k;
    }
  }])), b.hash = h.length ? h.reduce(function(w, k) {
    return k.name || yt(15), et(w, k.name);
  }, 5381).toString() : "", b;
}
var Ao = ht.createContext();
Ao.Consumer;
var Ro = ht.createContext(), Ml = (Ro.Consumer, new Oo()), on = Dl();
function jl() {
  return At(Ao) || Ml;
}
function zl() {
  return At(Ro) || on;
}
var Fl = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = on);
      var l = n.name + s.hash;
      o.hasNameForId(n.id, l) || o.insertRules(n.id, l, s(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return yt(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = on), this.name + r.hash;
  }, e;
}(), Ul = /([A-Z])/, Hl = /([A-Z])/g, ql = /^ms-/, Bl = function(e) {
  return "-" + e.toLowerCase();
};
function Ia(e) {
  return Ul.test(e) ? e.replace(Hl, Bl).replace(ql, "-ms-") : e;
}
var La = function(e) {
  return e == null || e === !1 || e === "";
};
function mt(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], l = 0, c = e.length; l < c; l += 1) (o = mt(e[l], r, t, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (La(e)) return "";
  if (En(e)) return "." + e.styledComponentId;
  if (Nt(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !r) return e;
    var u = e(r);
    return ce.env.NODE_ENV !== "production" && bn.isElement(u) && console.warn(nn(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mt(u, r, t, n);
  }
  var h;
  return e instanceof Fl ? t ? (e.inject(t, n), e.getName(n)) : e : rn(e) ? function g(m, y) {
    var x, b, w = [];
    for (var k in m) m.hasOwnProperty(k) && !La(m[k]) && (Array.isArray(m[k]) && m[k].isCss || Nt(m[k]) ? w.push(Ia(k) + ":", m[k], ";") : rn(m[k]) ? w.push.apply(w, g(m[k], k)) : w.push(Ia(k) + ": " + (x = k, (b = m[k]) == null || typeof b == "boolean" || b === "" ? "" : typeof b != "number" || b === 0 || x in nl || x.startsWith("--") ? String(b).trim() : b + "px") + ";"));
    return y ? [y + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var $a = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wl(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return Nt(e) || rn(e) ? $a(mt(Ra(sr, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : $a(mt(Ra(e, t)));
}
var Da = /invalid hook call/i, Wt = /* @__PURE__ */ new Set(), Gl = function(e, r) {
  if (ce.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (Da.test(s)) o = !1, Wt.delete(t);
        else {
          for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) c[u - 1] = arguments[u];
          n.apply(void 0, [s].concat(c));
        }
      }, ni(), o && !Wt.has(t) && (console.warn(t), Wt.add(t));
    } catch (s) {
      Da.test(s.message) && Wt.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Vl = function(e, r, t) {
  return t === void 0 && (t = Xe), e.theme !== t.theme && e.theme || r || t.theme;
}, Yl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zl = /(^-|-$)/g;
function Fr(e) {
  return e.replace(Yl, "-").replace(Zl, "");
}
var Xl = function(e) {
  return an(No(e) >>> 0);
};
function Gt(e) {
  return typeof e == "string" && (ce.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var sn = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Kl = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ql(e, r, t) {
  var n = e[t];
  sn(r) && sn(n) ? _o(n, r) : e[t] = r;
}
function _o(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var o = 0, s = t; o < s.length; o++) {
    var l = s[o];
    if (sn(l)) for (var c in l) Kl(c) && Ql(e, l[c], c);
  }
  return e;
}
var Po = ht.createContext();
Po.Consumer;
var Ur = {};
function Io(e, r, t) {
  var n = En(e), o = !Gt(e), s = r.attrs, l = s === void 0 ? sr : s, c = r.componentId, u = c === void 0 ? function(S, _) {
    var R = typeof S != "string" ? "sc" : Fr(S);
    Ur[R] = (Ur[R] || 0) + 1;
    var v = R + "-" + Xl("5.3.11" + R + Ur[R]);
    return _ ? _ + "-" + v : v;
  }(r.displayName, r.parentComponentId) : c, h = r.displayName, g = h === void 0 ? function(S) {
    return Gt(S) ? "styled." + S : "Styled(" + nn(S) + ")";
  }(e) : h, m = r.displayName && r.componentId ? Fr(r.displayName) + "-" + r.componentId : r.componentId || u, y = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, x = r.shouldForwardProp;
  n && e.shouldForwardProp && (x = r.shouldForwardProp ? function(S, _, R) {
    return e.shouldForwardProp(S, _, R) && r.shouldForwardProp(S, _, R);
  } : e.shouldForwardProp);
  var b, w = new Il(t, m, n ? e.componentStyle : void 0), k = w.isStatic && l.length === 0, A = function(S, _) {
    return function(R, v, O, E) {
      var j = R.attrs, J = R.componentStyle, pe = R.defaultProps, X = R.foldedComponentIds, Y = R.shouldForwardProp, te = R.styledComponentId, B = R.target, ue = function(I, f, D) {
        I === void 0 && (I = Xe);
        var N = We({}, f, { theme: I }), Q = {};
        return D.forEach(function(Z) {
          var q, W, K, ie = Z;
          for (q in Nt(ie) && (ie = ie(N)), ie) N[q] = Q[q] = q === "className" ? (W = Q[q], K = ie[q], W && K ? W + " " + K : W || K) : ie[q];
        }), [N, Q];
      }(Vl(v, At(Po), pe) || Xe, v, j), Ce = ue[0], oe = ue[1], he = function(I, f, D, N) {
        var Q = jl(), Z = zl(), q = f ? I.generateAndInjectStyles(Xe, Q, Z) : I.generateAndInjectStyles(D, Q, Z);
        return ce.env.NODE_ENV !== "production" && !f && N && N(q), q;
      }(J, E, Ce, ce.env.NODE_ENV !== "production" ? R.warnTooManyClasses : void 0), Oe = O, V = oe.$as || v.$as || oe.as || v.as || B, F = Gt(V), C = oe !== v ? We({}, v, {}, oe) : v, T = {};
      for (var p in C) p[0] !== "$" && p !== "as" && (p === "forwardedAs" ? T.as = C[p] : (Y ? Y(p, Ta, V) : !F || Ta(p)) && (T[p] = C[p]));
      return v.style && oe.style !== v.style && (T.style = We({}, v.style, {}, oe.style)), T.className = Array.prototype.concat(X, te, he !== te ? he : null, v.className, oe.className).filter(Boolean).join(" "), T.ref = Oe, ai(V, T);
    }(b, S, _, k);
  };
  return A.displayName = g, (b = ht.forwardRef(A)).attrs = y, b.componentStyle = w, b.displayName = g, b.shouldForwardProp = x, b.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : sr, b.styledComponentId = m, b.target = n ? e.target : e, b.withComponent = function(S) {
    var _ = r.componentId, R = function(O, E) {
      if (O == null) return {};
      var j, J, pe = {}, X = Object.keys(O);
      for (J = 0; J < X.length; J++) j = X[J], E.indexOf(j) >= 0 || (pe[j] = O[j]);
      return pe;
    }(r, ["componentId"]), v = _ && _ + "-" + (Gt(S) ? S : Fr(nn(S)));
    return Io(S, We({}, R, { attrs: y, componentId: v }), t);
  }, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = n ? _o({}, e.defaultProps, S) : S;
  } }), ce.env.NODE_ENV !== "production" && (Gl(g, m), b.warnTooManyClasses = /* @__PURE__ */ function(S, _) {
    var R = {}, v = !1;
    return function(O) {
      if (!v && (R[O] = !0, Object.keys(R).length >= 200)) {
        var E = _ ? ' with the id of "' + _ + '"' : "";
        console.warn("Over 200 classes were generated for component " + S + E + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), v = !0, R = {};
      }
    };
  }(g, m)), Object.defineProperty(b, "toString", { value: function() {
    return "." + b.styledComponentId;
  } }), o && ml(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), b;
}
var cr = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = Xe), !bn.isValidElementType(n)) return yt(1, String(n));
    var s = function() {
      return t(n, o, Wl.apply(void 0, arguments));
    };
    return s.withConfig = function(l) {
      return r(t, n, We({}, o, {}, l));
    }, s.attrs = function(l) {
      return r(t, n, We({}, o, { attrs: Array.prototype.concat(o.attrs, l).filter(Boolean) }));
    }, s;
  }(Io, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  cr[e] = cr(e);
});
ce.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ce.env.NODE_ENV !== "production" && ce.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Jl = cr.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  li {
    .card-img-top {
      border-radius: 0 !important;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .card-event-details {
      flex-direction: column;
      .card-event-icons {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 24px;
        }
      }
    }
  }
`, ec = () => {
  const { feeds: e } = At(go);
  return /* @__PURE__ */ _e.jsx(Jl, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ _e.jsx("li", { children: /* @__PURE__ */ _e.jsx(
    ho,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${ir(r.startDate, "COMPLETE")} <br /> ${So(
        r.startDate,
        r.endDate
      )}
              </span>`,
      eventLocation: r.location,
      clickable: !!r.alias,
      cardLink: `${r.alias}/?eventDate=${ir(
        r.startDate,
        "ISO"
      )}`,
      title: r.title,
      image: r.imageUrl,
      imageAltText: r.title,
      linkLabel: r.eventButtonText,
      linkUrl: r.eventButtonUrl
    }
  ) }, r.id)) });
}, Lo = ({ header: e, ctaButton: r, dataSource: t, maxItems: n }) => (ja(() => {
  typeof window < "u" && Ua({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: r,
      dataSource: t,
      maxItems: n
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ _e.jsx(vn, { header: e, ctaButton: r, dataSource: t, maxItems: n, children: /* @__PURE__ */ _e.jsx(ec, {}) }));
Lo.propTypes = Eo;
const tc = cr.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  li {
    max-width: 100%;
    width: 100%;
  }
  .card {
    height: 235px;
    .card-img-top {
      width: 235px;
      height: auto;
      border-radius: 0 !important;
    }
    .card-event-icons {
      &:nth-child(1) {
        width: 58%;
      }
      &:nth-child(2) {
        width: 42%;
      }
    }
  }
  @media (max-width: 992px) {
    .card {
      height: 100%;
      .card-event-details {
        flex-direction: column;
        .card-event-icons {
          width: 100%;
          &:nth-child(1) {
            margin-bottom: 24px;
          }
        }
      }
      .card-img-top {
        height: auto;
        width: auto;
      }
    }
  }
`, rc = () => {
  const { feeds: e } = At(go);
  return /* @__PURE__ */ _e.jsx(tc, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((r) => /* @__PURE__ */ _e.jsx("li", { children: /* @__PURE__ */ _e.jsx(
    ho,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${ir(r.startDate, "COMPLETE")} <br /> ${So(
        r.startDate,
        r.endDate
      )}
              </span>`,
      eventLocation: r.location,
      clickable: !!r.alias,
      cardLink: `${r.alias}/?eventDate=${ir(
        r.startDate,
        "ISO"
      )}`,
      title: r.title,
      image: r.imageUrl,
      imageAltText: r.title,
      linkLabel: r.eventButtonText,
      linkUrl: r.eventButtonUrl
    }
  ) }, r.id)) });
}, $o = ({ header: e, ctaButton: r, dataSource: t, maxItems: n }) => (ja(() => {
  typeof window < "u" && Ua({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: r,
      dataSource: t,
      maxItems: n
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ _e.jsx(vn, { header: e, ctaButton: r, dataSource: t, maxItems: n, children: /* @__PURE__ */ _e.jsx(rc, {}) }));
$o.propTypes = Eo;
var Do, Ma = ii;
Do = Ma.createRoot, Ma.hydrateRoot;
const Mo = (e, r, t) => {
  Do(t).render(ht.createElement(e, r));
}, ic = ({ targetSelector: e, props: r }) => {
  Mo(Lo, r, document.querySelector(e));
}, sc = ({ targetSelector: e, props: r }) => {
  Mo($o, r, document.querySelector(e));
};
export {
  Lo as CardsGridEvents,
  $o as CardsListEvents,
  ic as initCardsGridEventsComponent,
  sc as initCardsListEventsComponent
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
