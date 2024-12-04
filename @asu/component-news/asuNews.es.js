import * as nt from "react";
import Nt, { useRef as Ls, useContext as ir, createElement as Is, useEffect as En } from "react";
import * as Ps from "react-dom";
import Ms from "react-dom";
function Aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = { exports: {} }, Sr = {};
var pi;
function Ds() {
  if (pi) return Sr;
  pi = 1;
  var e = Nt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var p, f = {}, h = null, T = null;
    d !== void 0 && (h = "" + d), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (p in l) n.call(l, p) && !i.hasOwnProperty(p) && (f[p] = l[p]);
    if (s && s.defaultProps) for (p in l = s.defaultProps, l) f[p] === void 0 && (f[p] = l[p]);
    return { $$typeof: t, type: s, key: h, ref: T, props: f, _owner: a.current };
  }
  return Sr.Fragment = r, Sr.jsx = o, Sr.jsxs = o, Sr;
}
go.exports = Ds();
var D = go.exports, Ze = { env: { NODE_ENV: "production" } }, js = { 651: function(e) {
  e.exports = function() {
    function t(H) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function($) {
        return typeof $;
      } : function($) {
        return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
      }, t(H);
    }
    function r(H, $) {
      return r = Object.setPrototypeOf || function(V, F) {
        return V.__proto__ = F, V;
      }, r(H, $);
    }
    function n(H, $, V) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct : function(F, z, ce) {
        var Te = [null];
        Te.push.apply(Te, z);
        var He = new (Function.bind.apply(F, Te))();
        return ce && r(He, ce.prototype), He;
      }, n.apply(null, arguments);
    }
    function a(H) {
      return function($) {
        if (Array.isArray($)) return i($);
      }(H) || function($) {
        if (typeof Symbol < "u" && $[Symbol.iterator] != null || $["@@iterator"] != null) return Array.from($);
      }(H) || function($, V) {
        if ($) {
          if (typeof $ == "string") return i($, V);
          var F = Object.prototype.toString.call($).slice(8, -1);
          return F === "Object" && $.constructor && (F = $.constructor.name), F === "Map" || F === "Set" ? Array.from($) : F === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F) ? i($, V) : void 0;
        }
      }(H) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function i(H, $) {
      ($ == null || $ > H.length) && ($ = H.length);
      for (var V = 0, F = new Array($); V < $; V++) F[V] = H[V];
      return F;
    }
    var o = Object.hasOwnProperty, s = Object.setPrototypeOf, l = Object.isFrozen, d = Object.getPrototypeOf, p = Object.getOwnPropertyDescriptor, f = Object.freeze, h = Object.seal, T = Object.create, w = typeof Reflect < "u" && Reflect, k = w.apply, S = w.construct;
    k || (k = function(H, $, V) {
      return H.apply($, V);
    }), f || (f = function(H) {
      return H;
    }), h || (h = function(H) {
      return H;
    }), S || (S = function(H, $) {
      return n(H, a($));
    });
    var A, x = re(Array.prototype.forEach), I = re(Array.prototype.pop), L = re(Array.prototype.push), E = re(String.prototype.toLowerCase), N = re(String.prototype.toString), _ = re(String.prototype.match), W = re(String.prototype.replace), le = re(String.prototype.indexOf), we = re(String.prototype.trim), ae = re(RegExp.prototype.test), ee = (A = TypeError, function() {
      for (var H = arguments.length, $ = new Array(H), V = 0; V < H; V++) $[V] = arguments[V];
      return S(A, $);
    });
    function re(H) {
      return function($) {
        for (var V = arguments.length, F = new Array(V > 1 ? V - 1 : 0), z = 1; z < V; z++) F[z - 1] = arguments[z];
        return k(H, $, F);
      };
    }
    function X(H, $, V) {
      var F;
      V = (F = V) !== null && F !== void 0 ? F : E, s && s(H, null);
      for (var z = $.length; z--; ) {
        var ce = $[z];
        if (typeof ce == "string") {
          var Te = V(ce);
          Te !== ce && (l($) || ($[z] = Te), ce = Te);
        }
        H[ce] = !0;
      }
      return H;
    }
    function he(H) {
      var $, V = T(null);
      for ($ in H) k(o, H, [$]) === !0 && (V[$] = H[$]);
      return V;
    }
    function De(H, $) {
      for (; H !== null; ) {
        var V = p(H, $);
        if (V) {
          if (V.get) return re(V.get);
          if (typeof V.value == "function") return re(V.value);
        }
        H = d(H);
      }
      return function(F) {
        return console.warn("fallback value for", F), null;
      };
    }
    var pe = f(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ke = f(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qe = f(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Q = f(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), q = f(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), C = f(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), O = f(["#text"]), y = f(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), P = f(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), g = f(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), M = f(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), R = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ie = h(/<%[\w\W]*|[\w\W]*%>/gm), te = h(/\${[\w\W]*}/gm), Y = h(/^data-[\-\w.\u00B7-\uFFFF]/), Z = h(/^aria-[\-\w]+$/), ne = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), fe = h(/^(?:\w+script|data):/i), oe = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), se = h(/^html$/i), K = h(/^[a-z][.\w]*(-[.\w]+)+$/i), ue = function() {
      return typeof window > "u" ? null : window;
    }, je = function H() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ue(), V = function(v) {
        return H(v);
      };
      if (V.version = "2.5.7", V.removed = [], !$ || !$.document || $.document.nodeType !== 9) return V.isSupported = !1, V;
      var F = $.document, z = $.document, ce = $.DocumentFragment, Te = $.HTMLTemplateElement, He = $.Node, Fe = $.Element, kt = $.NodeFilter, lr = $.NamedNodeMap, Ir = lr === void 0 ? $.NamedNodeMap || $.MozNamedAttrMap : lr, cr = $.HTMLFormElement, Pr = $.DOMParser, ut = $.trustedTypes, dt = Fe.prototype, st = De(dt, "cloneNode"), St = De(dt, "nextSibling"), ur = De(dt, "childNodes"), Lt = De(dt, "parentNode");
      if (typeof Te == "function") {
        var dr = z.createElement("template");
        dr.content && dr.content.ownerDocument && (z = dr.content.ownerDocument);
      }
      var $e = function(v, U) {
        if (t(v) !== "object" || typeof v.createPolicy != "function") return null;
        var G = null, ge = "data-tt-policy-suffix";
        U.currentScript && U.currentScript.hasAttribute(ge) && (G = U.currentScript.getAttribute(ge));
        var ze = "dompurify" + (G ? "#" + G : "");
        try {
          return v.createPolicy(ze, { createHTML: function(Ce) {
            return Ce;
          }, createScriptURL: function(Ce) {
            return Ce;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + ze + " could not be created."), null;
        }
      }(ut, F), fr = $e ? $e.createHTML("") : "", Bt = z, Re = Bt.implementation, Et = Bt.createNodeIterator, Nn = Bt.createDocumentFragment, Mr = Bt.getElementsByTagName, pr = F.importNode, mr = {};
      try {
        mr = he(z).documentMode ? z.documentMode : {};
      } catch {
      }
      var Ke = {};
      V.isSupported = typeof Lt == "function" && Re && Re.createHTMLDocument !== void 0 && mr !== 9;
      var Tt, xe, It = R, hr = ie, Ve = te, Wt = Y, Dr = Z, jr = fe, gr = oe, Pt = K, Qe = ne, Le = null, vr = X({}, [].concat(a(pe), a(ke), a(qe), a(q), a(O))), Ie = null, yr = X({}, [].concat(a(y), a(P), a(g), a(M))), Ae = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), J = null, b = null, j = !0, B = !0, me = !1, Ue = !0, Oe = !1, Pe = !0, Ye = !1, _e = !1, Mt = !1, ft = !1, br = !1, $r = !1, Za = !0, Ka = !1, Rn = !0, wr = !1, qt = {}, Vt = null, Qa = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Ja = null, ei = X({}, ["audio", "video", "img", "source", "image", "track"]), Ln = null, ti = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zr = "http://www.w3.org/1998/Math/MathML", Fr = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml", Yt = pt, ri = !1, In = null, Os = X({}, [zr, Fr, pt], N), _s = ["application/xhtml+xml", "text/html"], Gt = null, Cs = z.createElement("form"), ni = function(v) {
        return v instanceof RegExp || v instanceof Function;
      }, Pn = function(v) {
        Gt && Gt === v || (v && t(v) === "object" || (v = {}), v = he(v), Tt = Tt = _s.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? "text/html" : v.PARSER_MEDIA_TYPE, xe = Tt === "application/xhtml+xml" ? N : E, Le = "ALLOWED_TAGS" in v ? X({}, v.ALLOWED_TAGS, xe) : vr, Ie = "ALLOWED_ATTR" in v ? X({}, v.ALLOWED_ATTR, xe) : yr, In = "ALLOWED_NAMESPACES" in v ? X({}, v.ALLOWED_NAMESPACES, N) : Os, Ln = "ADD_URI_SAFE_ATTR" in v ? X(he(ti), v.ADD_URI_SAFE_ATTR, xe) : ti, Ja = "ADD_DATA_URI_TAGS" in v ? X(he(ei), v.ADD_DATA_URI_TAGS, xe) : ei, Vt = "FORBID_CONTENTS" in v ? X({}, v.FORBID_CONTENTS, xe) : Qa, J = "FORBID_TAGS" in v ? X({}, v.FORBID_TAGS, xe) : {}, b = "FORBID_ATTR" in v ? X({}, v.FORBID_ATTR, xe) : {}, qt = "USE_PROFILES" in v && v.USE_PROFILES, j = v.ALLOW_ARIA_ATTR !== !1, B = v.ALLOW_DATA_ATTR !== !1, me = v.ALLOW_UNKNOWN_PROTOCOLS || !1, Ue = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Oe = v.SAFE_FOR_TEMPLATES || !1, Pe = v.SAFE_FOR_XML !== !1, Ye = v.WHOLE_DOCUMENT || !1, ft = v.RETURN_DOM || !1, br = v.RETURN_DOM_FRAGMENT || !1, $r = v.RETURN_TRUSTED_TYPE || !1, Mt = v.FORCE_BODY || !1, Za = v.SANITIZE_DOM !== !1, Ka = v.SANITIZE_NAMED_PROPS || !1, Rn = v.KEEP_CONTENT !== !1, wr = v.IN_PLACE || !1, Qe = v.ALLOWED_URI_REGEXP || Qe, Yt = v.NAMESPACE || pt, Ae = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && ni(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && ni(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ae.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Oe && (B = !1), br && (ft = !0), qt && (Le = X({}, a(O)), Ie = [], qt.html === !0 && (X(Le, pe), X(Ie, y)), qt.svg === !0 && (X(Le, ke), X(Ie, P), X(Ie, M)), qt.svgFilters === !0 && (X(Le, qe), X(Ie, P), X(Ie, M)), qt.mathMl === !0 && (X(Le, q), X(Ie, g), X(Ie, M))), v.ADD_TAGS && (Le === vr && (Le = he(Le)), X(Le, v.ADD_TAGS, xe)), v.ADD_ATTR && (Ie === yr && (Ie = he(Ie)), X(Ie, v.ADD_ATTR, xe)), v.ADD_URI_SAFE_ATTR && X(Ln, v.ADD_URI_SAFE_ATTR, xe), v.FORBID_CONTENTS && (Vt === Qa && (Vt = he(Vt)), X(Vt, v.FORBID_CONTENTS, xe)), Rn && (Le["#text"] = !0), Ye && X(Le, ["html", "head", "body"]), Le.table && (X(Le, ["tbody"]), delete J.tbody), f && f(v), Gt = v);
      }, ai = X({}, ["mi", "mo", "mn", "ms", "mtext"]), ii = X({}, ["annotation-xml"]), Ns = X({}, ["title", "style", "font", "a", "script"]), Hr = X({}, ke);
      X(Hr, qe), X(Hr, Q);
      var Mn = X({}, q);
      X(Mn, C);
      var rt = function(v) {
        L(V.removed, { element: v });
        try {
          v.parentNode.removeChild(v);
        } catch {
          try {
            v.outerHTML = fr;
          } catch {
            v.remove();
          }
        }
      }, Ur = function(v, U) {
        try {
          L(V.removed, { attribute: U.getAttributeNode(v), from: U });
        } catch {
          L(V.removed, { attribute: null, from: U });
        }
        if (U.removeAttribute(v), v === "is" && !Ie[v]) if (ft || br) try {
          rt(U);
        } catch {
        }
        else try {
          U.setAttribute(v, "");
        } catch {
        }
      }, oi = function(v) {
        var U, G;
        if (Mt) v = "<remove></remove>" + v;
        else {
          var ge = _(v, /^[\r\n\t ]+/);
          G = ge && ge[0];
        }
        Tt === "application/xhtml+xml" && Yt === pt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
        var ze = $e ? $e.createHTML(v) : v;
        if (Yt === pt) try {
          U = new Pr().parseFromString(ze, Tt);
        } catch {
        }
        if (!U || !U.documentElement) {
          U = Re.createDocument(Yt, "template", null);
          try {
            U.documentElement.innerHTML = ri ? fr : ze;
          } catch {
          }
        }
        var Ce = U.body || U.documentElement;
        return v && G && Ce.insertBefore(z.createTextNode(G), Ce.childNodes[0] || null), Yt === pt ? Mr.call(U, Ye ? "html" : "body")[0] : Ye ? U.documentElement : Ce;
      }, si = function(v) {
        return Et.call(v.ownerDocument || v, v, kt.SHOW_ELEMENT | kt.SHOW_COMMENT | kt.SHOW_TEXT | kt.SHOW_PROCESSING_INSTRUCTION | kt.SHOW_CDATA_SECTION, null, !1);
      }, li = function(v) {
        return v instanceof cr && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof Ir) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
      }, kr = function(v) {
        return t(He) === "object" ? v instanceof He : v && t(v) === "object" && typeof v.nodeType == "number" && typeof v.nodeName == "string";
      }, mt = function(v, U, G) {
        Ke[v] && x(Ke[v], function(ge) {
          ge.call(V, U, G, Gt);
        });
      }, ci = function(v) {
        var U;
        if (mt("beforeSanitizeElements", v, null), li(v) || ae(/[\u0080-\uFFFF]/, v.nodeName)) return rt(v), !0;
        var G = xe(v.nodeName);
        if (mt("uponSanitizeElement", v, { tagName: G, allowedTags: Le }), v.hasChildNodes() && !kr(v.firstElementChild) && (!kr(v.content) || !kr(v.content.firstElementChild)) && ae(/<[/\w]/g, v.innerHTML) && ae(/<[/\w]/g, v.textContent) || G === "select" && ae(/<template/i, v.innerHTML) || v.nodeType === 7 || Pe && v.nodeType === 8 && ae(/<[/\w]/g, v.data)) return rt(v), !0;
        if (!Le[G] || J[G]) {
          if (!J[G] && di(G) && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, G) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(G)))
            return !1;
          if (Rn && !Vt[G]) {
            var ge = Lt(v) || v.parentNode, ze = ur(v) || v.childNodes;
            if (ze && ge) for (var Ce = ze.length - 1; Ce >= 0; --Ce) {
              var Ge = st(ze[Ce], !0);
              Ge.__removalCount = (v.__removalCount || 0) + 1, ge.insertBefore(Ge, St(v));
            }
          }
          return rt(v), !0;
        }
        return v instanceof Fe && !function(Je) {
          var Me = Lt(Je);
          Me && Me.tagName || (Me = { namespaceURI: Yt, tagName: "template" });
          var Se = E(Je.tagName), xt = E(Me.tagName);
          return !!In[Je.namespaceURI] && (Je.namespaceURI === Fr ? Me.namespaceURI === pt ? Se === "svg" : Me.namespaceURI === zr ? Se === "svg" && (xt === "annotation-xml" || ai[xt]) : !!Hr[Se] : Je.namespaceURI === zr ? Me.namespaceURI === pt ? Se === "math" : Me.namespaceURI === Fr ? Se === "math" && ii[xt] : !!Mn[Se] : Je.namespaceURI === pt ? !(Me.namespaceURI === Fr && !ii[xt]) && !(Me.namespaceURI === zr && !ai[xt]) && !Mn[Se] && (Ns[Se] || !Hr[Se]) : !(Tt !== "application/xhtml+xml" || !In[Je.namespaceURI]));
        }(v) ? (rt(v), !0) : G !== "noscript" && G !== "noembed" && G !== "noframes" || !ae(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Oe && v.nodeType === 3 && (U = v.textContent, U = W(U, It, " "), U = W(U, hr, " "), U = W(U, Ve, " "), v.textContent !== U && (L(V.removed, { element: v.cloneNode() }), v.textContent = U)), mt("afterSanitizeElements", v, null), !1) : (rt(v), !0);
      }, ui = function(v, U, G) {
        if (Za && (U === "id" || U === "name") && (G in z || G in Cs)) return !1;
        if (!(B && !b[U] && ae(Wt, U))) {
          if (!(j && ae(Dr, U))) {
            if (!Ie[U] || b[U]) {
              if (!(di(v) && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, v) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(v)) && (Ae.attributeNameCheck instanceof RegExp && ae(Ae.attributeNameCheck, U) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(U)) || U === "is" && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, G) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(G)))) return !1;
            } else if (!Ln[U]) {
              if (!ae(Qe, W(G, gr, ""))) {
                if ((U !== "src" && U !== "xlink:href" && U !== "href" || v === "script" || le(G, "data:") !== 0 || !Ja[v]) && !(me && !ae(jr, W(G, gr, "")))) {
                  if (G) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, di = function(v) {
        return v !== "annotation-xml" && _(v, Pt);
      }, fi = function(v) {
        var U, G, ge, ze;
        mt("beforeSanitizeAttributes", v, null);
        var Ce = v.attributes;
        if (Ce) {
          var Ge = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Ie };
          for (ze = Ce.length; ze--; ) {
            var Je = U = Ce[ze], Me = Je.name, Se = Je.namespaceURI;
            if (G = Me === "value" ? U.value : we(U.value), ge = xe(Me), Ge.attrName = ge, Ge.attrValue = G, Ge.keepAttr = !0, Ge.forceKeepAttr = void 0, mt("uponSanitizeAttribute", v, Ge), G = Ge.attrValue, !Ge.forceKeepAttr && (Ur(Me, v), Ge.keepAttr)) if (Ue || !ae(/\/>/i, G)) {
              Oe && (G = W(G, It, " "), G = W(G, hr, " "), G = W(G, Ve, " "));
              var xt = xe(v.nodeName);
              if (ui(xt, ge, G)) if (!Ka || ge !== "id" && ge !== "name" || (Ur(Me, v), G = "user-content-" + G), Pe && ae(/((--!?|])>)|<\/(style|title)/i, G)) Ur(Me, v);
              else {
                if ($e && t(ut) === "object" && typeof ut.getAttributeType == "function" && !Se) switch (ut.getAttributeType(xt, ge)) {
                  case "TrustedHTML":
                    G = $e.createHTML(G);
                    break;
                  case "TrustedScriptURL":
                    G = $e.createScriptURL(G);
                }
                try {
                  Se ? v.setAttributeNS(Se, Me, G) : v.setAttribute(Me, G), li(v) ? rt(v) : I(V.removed);
                } catch {
                }
              }
            } else Ur(Me, v);
          }
          mt("afterSanitizeAttributes", v, null);
        }
      }, Rs = function v(U) {
        var G, ge = si(U);
        for (mt("beforeSanitizeShadowDOM", U, null); G = ge.nextNode(); ) mt("uponSanitizeShadowNode", G, null), ci(G) || (G.content instanceof ce && v(G.content), fi(G));
        mt("afterSanitizeShadowDOM", U, null);
      };
      return V.sanitize = function(v) {
        var U, G, ge, ze, Ce, Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((ri = !v) && (v = "<!-->"), typeof v != "string" && !kr(v)) {
          if (typeof v.toString != "function") throw ee("toString is not a function");
          if (typeof (v = v.toString()) != "string") throw ee("dirty is not a string, aborting");
        }
        if (!V.isSupported) {
          if (t($.toStaticHTML) === "object" || typeof $.toStaticHTML == "function") {
            if (typeof v == "string") return $.toStaticHTML(v);
            if (kr(v)) return $.toStaticHTML(v.outerHTML);
          }
          return v;
        }
        if (_e || Pn(Ge), V.removed = [], typeof v == "string" && (wr = !1), wr) {
          if (v.nodeName) {
            var Je = xe(v.nodeName);
            if (!Le[Je] || J[Je]) throw ee("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (v instanceof He) (G = (U = oi("<!---->")).ownerDocument.importNode(v, !0)).nodeType === 1 && G.nodeName === "BODY" || G.nodeName === "HTML" ? U = G : U.appendChild(G);
        else {
          if (!ft && !Oe && !Ye && v.indexOf("<") === -1) return $e && $r ? $e.createHTML(v) : v;
          if (!(U = oi(v))) return ft ? null : $r ? fr : "";
        }
        U && Mt && rt(U.firstChild);
        for (var Me = si(wr ? v : U); ge = Me.nextNode(); ) ge.nodeType === 3 && ge === ze || ci(ge) || (ge.content instanceof ce && Rs(ge.content), fi(ge), ze = ge);
        if (ze = null, wr) return v;
        if (ft) {
          if (br) for (Ce = Nn.call(U.ownerDocument); U.firstChild; ) Ce.appendChild(U.firstChild);
          else Ce = U;
          return (Ie.shadowroot || Ie.shadowrootmod) && (Ce = pr.call(F, Ce, !0)), Ce;
        }
        var Se = Ye ? U.outerHTML : U.innerHTML;
        return Ye && Le["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && ae(se, U.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + Se), Oe && (Se = W(Se, It, " "), Se = W(Se, hr, " "), Se = W(Se, Ve, " ")), $e && $r ? $e.createHTML(Se) : Se;
      }, V.setConfig = function(v) {
        Pn(v), _e = !0;
      }, V.clearConfig = function() {
        Gt = null, _e = !1;
      }, V.isValidAttribute = function(v, U, G) {
        Gt || Pn({});
        var ge = xe(v), ze = xe(U);
        return ui(ge, ze, G);
      }, V.addHook = function(v, U) {
        typeof U == "function" && (Ke[v] = Ke[v] || [], L(Ke[v], U));
      }, V.removeHook = function(v) {
        if (Ke[v]) return I(Ke[v]);
      }, V.removeHooks = function(v) {
        Ke[v] && (Ke[v] = []);
      }, V.removeAllHooks = function() {
        Ke = {};
      }, V;
    }();
    return je;
  }();
}, 985: (e, t, r) => {
  var n = r(524), a = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, s = {};
  function l(k) {
    return n.isMemo(k) ? o : s[k.$$typeof] || a;
  }
  s[n.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, s[n.Memo] = o;
  var d = Object.defineProperty, p = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, T = Object.getPrototypeOf, w = Object.prototype;
  e.exports = function k(S, A, x) {
    if (typeof A != "string") {
      if (w) {
        var I = T(A);
        I && I !== w && k(S, I, x);
      }
      var L = p(A);
      f && (L = L.concat(f(A)));
      for (var E = l(S), N = l(A), _ = 0; _ < L.length; ++_) {
        var W = L[_];
        if (!(i[W] || x && x[W] || N && N[W] || E && E[W])) {
          var le = h(A, W);
          try {
            d(S, W, le);
          } catch {
          }
        }
      }
    }
    return S;
  };
}, 999: (e, t, r) => {
  var n = r(848);
  function a() {
  }
  function i() {
  }
  i.resetWarningCache = a, e.exports = function() {
    function o(d, p, f, h, T, w) {
      if (w !== n) {
        var k = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw k.name = "Invariant Violation", k;
      }
    }
    function s() {
      return o;
    }
    o.isRequired = o;
    var l = { array: o, bigint: o, bool: o, func: o, number: o, object: o, string: o, symbol: o, any: o, arrayOf: s, element: o, elementType: o, instanceOf: s, node: o, objectOf: s, oneOf: s, oneOfType: s, shape: s, exact: s, checkPropTypes: i, resetWarningCache: a };
    return l.PropTypes = l, l;
  };
}, 67: (e, t, r) => {
  e.exports = r(999)();
}, 848: (e) => {
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 873: (e, t, r) => {
  var n = r(516);
  t.H = n.createRoot, n.hydrateRoot;
}, 320: (e, t) => {
  var r = typeof Symbol == "function" && Symbol.for, n = r ? Symbol.for("react.element") : 60103, a = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, l = r ? Symbol.for("react.provider") : 60109, d = r ? Symbol.for("react.context") : 60110, p = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, k = r ? Symbol.for("react.memo") : 60115, S = r ? Symbol.for("react.lazy") : 60116, A = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, I = r ? Symbol.for("react.responder") : 60118, L = r ? Symbol.for("react.scope") : 60119;
  function E(_) {
    if (typeof _ == "object" && _ !== null) {
      var W = _.$$typeof;
      switch (W) {
        case n:
          switch (_ = _.type) {
            case p:
            case f:
            case i:
            case s:
            case o:
            case T:
              return _;
            default:
              switch (_ = _ && _.$$typeof) {
                case d:
                case h:
                case S:
                case k:
                case l:
                  return _;
                default:
                  return W;
              }
          }
        case a:
          return W;
      }
    }
  }
  function N(_) {
    return E(_) === f;
  }
  t.AsyncMode = p, t.ConcurrentMode = f, t.ContextConsumer = d, t.ContextProvider = l, t.Element = n, t.ForwardRef = h, t.Fragment = i, t.Lazy = S, t.Memo = k, t.Portal = a, t.Profiler = s, t.StrictMode = o, t.Suspense = T, t.isAsyncMode = function(_) {
    return N(_) || E(_) === p;
  }, t.isConcurrentMode = N, t.isContextConsumer = function(_) {
    return E(_) === d;
  }, t.isContextProvider = function(_) {
    return E(_) === l;
  }, t.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === n;
  }, t.isForwardRef = function(_) {
    return E(_) === h;
  }, t.isFragment = function(_) {
    return E(_) === i;
  }, t.isLazy = function(_) {
    return E(_) === S;
  }, t.isMemo = function(_) {
    return E(_) === k;
  }, t.isPortal = function(_) {
    return E(_) === a;
  }, t.isProfiler = function(_) {
    return E(_) === s;
  }, t.isStrictMode = function(_) {
    return E(_) === o;
  }, t.isSuspense = function(_) {
    return E(_) === T;
  }, t.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === i || _ === f || _ === s || _ === o || _ === T || _ === w || typeof _ == "object" && _ !== null && (_.$$typeof === S || _.$$typeof === k || _.$$typeof === l || _.$$typeof === d || _.$$typeof === h || _.$$typeof === x || _.$$typeof === I || _.$$typeof === L || _.$$typeof === A);
  }, t.typeOf = E;
}, 524: (e, t, r) => {
  e.exports = r(320);
}, 146: (e) => {
  e.exports = function(t, r, n, a) {
    var i = n ? n.call(a, t, r) : void 0;
    if (i !== void 0) return !!i;
    if (t === r) return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
    var o = Object.keys(t), s = Object.keys(r);
    if (o.length !== s.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(r), d = 0; d < o.length; d++) {
      var p = o[d];
      if (!l(p)) return !1;
      var f = t[p], h = r[p];
      if ((i = n ? n.call(a, f, h, p) : void 0) === !1 || i === void 0 && f !== h) return !1;
    }
    return !0;
  };
}, 516: (e) => {
  e.exports = Ps;
}, 373: (e, t) => {
  var r;
  (function() {
    var n = {}.hasOwnProperty;
    function a() {
      for (var s = "", l = 0; l < arguments.length; l++) {
        var d = arguments[l];
        d && (s = o(s, i(d)));
      }
      return s;
    }
    function i(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return a.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) return s.toString();
      var l = "";
      for (var d in s) n.call(s, d) && s[d] && (l = o(l, d));
      return l;
    }
    function o(s, l) {
      return l ? s ? s + " " + l : s + l : s;
    }
    e.exports ? (a.default = a, e.exports = a) : (r = (function() {
      return a;
    }).apply(t, [])) === void 0 || (e.exports = r);
  })();
} }, mi = {};
function Ne(e) {
  var t = mi[e];
  if (t !== void 0) return t.exports;
  var r = mi[e] = { exports: {} };
  return js[e].call(r.exports, r, r.exports, Ne), r.exports;
}
Ne.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return Ne.d(t, { a: t }), t;
}, Ne.d = (e, t) => {
  for (var r in t) Ne.o(t, r) && !Ne.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
}, Ne.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ne.nc = void 0;
var or = {};
Ne.d(or, { nD: () => Oa, n_: () => Na, n9: () => pn, $n: () => yt, ef: () => mn, fy: () => _r, Zp: () => hn, TR: () => Mo, Pb: () => Ro, Ur: () => No, _Q: () => Po, lq: () => Ia, _V: () => Ht, dK: () => vn, Fx: () => Pa, oz: () => Ho, YT: () => Uo, Gm: () => Ma, Ce: () => Da, qm: () => Ql, fh: () => Io, Od: () => La, fZ: () => Lo, RE: () => Ra, hZ: () => ic, Nq: () => oc, NJ: () => sc, bO: () => lc, oP: () => cc, jl: () => uc, PP: () => dc, BB: () => fc, Q9: () => pc, vW: () => hc, VE: () => mc, _v: () => gc, uP: () => vc });
var $s = Ne(67), c = Ne.n($s);
const u = (hi = { Component: () => nt.Component, createContext: () => nt.createContext, createElement: () => nt.createElement, default: () => nt.default, forwardRef: () => nt.forwardRef, useCallback: () => nt.useCallback, useContext: () => nt.useContext, useEffect: () => nt.useEffect, useImperativeHandle: () => nt.useImperativeHandle, useMemo: () => nt.useMemo, useRef: () => nt.useRef, useState: () => nt.useState }, Dn = {}, Ne.d(Dn, hi), Dn);
var hi, Dn;
const gi = (e, t, r) => e ? t : r, en = (e) => (e || []).join(" ");
var zs = Ne(651), Fs = Ne.n(zs);
const at = (e) => ({ __html: Fs().sanitize(e) }), vi = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; ) n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let yi, jn = !1;
c().shape({ event: c().string, action: c().string, name: c().string, region: c().string, section: c().string, component: c().string, type: c().string, text: c().string });
const et = ({ event: e = "", action: t = "", name: r = "", type: n = "", section: a = "", text: i = "", region: o = "", component: s = "" }) => {
  const { dataLayer: l } = window, d = { event: e.toLowerCase(), action: t.toLowerCase(), name: r.toLowerCase(), type: n.toLowerCase(), region: o.toLowerCase(), section: a.toLowerCase(), text: i.toLowerCase(), component: s.toLowerCase() };
  l && l.push(d);
}, Hs = c().shape({ url: c().string, altText: c().string, cssClass: c().arrayOf(c().string), size: c().oneOf(["small", "medium", "large"]) }), $n = c().shape({ text: c().string, maxWidth: c().string, cssClass: c().arrayOf(c().string), highlightColor: c().oneOf(["gold", "black"]) }), vo = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), content: c().shape({ icon: c().string, header: c().string, body: c().string }) });
var Us = Ne(373), be = Ne.n(Us);
const yo = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var a, i, o, s, l, d;
  return u.default.createElement("div", { className: be()("accordion-item", "mt-3", { [`accordion-item-${t.color}`]: t.color, "accordion-header-icon": (a = t.content) == null ? void 0 : a.icon }) }, u.default.createElement("div", { className: "accordion-header" }, u.default.createElement("h4", null, u.default.createElement("button", { type: "button", "data-testid": "accordion-opener", className: be()({ collapsed: e !== r }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, "aria-expanded": e === r, "aria-controls": `card-body-${e}`, onClick: (p) => {
    var f;
    return n(p, e, (f = t.content) == null ? void 0 : f.header);
  } }, (i = t.content) != null && i.icon ? u.default.createElement("span", { className: "accordion-icon" }, u.default.createElement("i", { className: `${(o = t.content.icon) == null ? void 0 : o[0]} fa-${(s = t.content.icon) == null ? void 0 : s[1]} me-2` }), t.content.header) : (l = t.content) == null ? void 0 : l.header, u.default.createElement("i", { className: "fas fa-chevron-up" })))), ((d = t.content) == null ? void 0 : d.body) && u.default.createElement("div", { id: `card-body-${e}`, className: be()("collapse") }, u.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: at(t.content.body) })));
};
yo.propTypes = { id: c().number, item: vo, openCard: c().number, onClick: c().func };
const Bs = { event: "collapse", name: "onclick", type: "click", region: "main content" }, Oa = ({ cards: e, openedCard: t }) => {
  const [r, n] = (0, u.useState)(t), a = (o, s) => {
    et({ ...Bs, action: s, text: o });
  }, i = (o, s, l) => {
    o.preventDefault(), (r === s || r) && a(e[r - 1].content.header, "close"), r !== s ? (n(s), a(l, "open")) : n(null);
  };
  return u.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((o, s) => o.content.body && o.content.header && u.default.createElement(yo, { key: s + 1, id: s + 1, item: o, openCard: r, onClick: i })));
};
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kt.apply(null, arguments);
}
Oa.propTypes = { cards: c().arrayOf(vo).isRequired, openedCard: c().number };
const Ws = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, yt = ({ label: e, cardTitle: t, ariaLabel: r, block: n, color: a, disabled: i, element: o, href: s, icon: l, innerRef: d, onClick: p, size: f, classes: h, target: T, ...w }) => {
  const k = be()("btn", { [`btn-${a}`]: !0, "btn-md": f === "small", "btn-sm": f === "xsmall", "btn-block": n, disabled: i });
  let S = o;
  return s && o === "button" && (S = "a"), u.default.createElement(S, Kt({ type: S === "button" && p ? "button" : void 0 }, w, { className: be()(h) || k, href: s, ref: d, onClick: () => (et({ ...Ws, text: e, section: t }), void (p == null ? void 0 : p())), "aria-label": r, target: S === "a" ? T : null }), l && u.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }), e);
};
yt.propTypes = { label: c().string, cardTitle: c().string, ariaLabel: c().string, block: c().bool, color: c().oneOf(["gold", "maroon", "gray", "dark"]), disabled: c().bool, element: c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), href: c().string, icon: c().arrayOf(c().string), innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), classes: c().arrayOf(c().string), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) }, yt.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var bo = Ne(524), qs = Ne(146);
Ne.n(qs);
const Vs = function(e) {
  function t(Q, q, C, O, y) {
    for (var P, g, M, R, ie, te = 0, Y = 0, Z = 0, ne = 0, fe = 0, oe = 0, se = M = P = 0, K = 0, ue = 0, je = 0, H = 0, $ = C.length, V = $ - 1, F = "", z = "", ce = "", Te = ""; K < $; ) {
      if (g = C.charCodeAt(K), K === V && Y + ne + Z + te !== 0 && (Y !== 0 && (g = Y === 47 ? 10 : 47), ne = Z = te = 0, $++, V++), Y + ne + Z + te === 0) {
        if (K === V && (0 < ue && (F = F.replace(f, "")), 0 < F.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              F += C.charAt(K);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (P = (F = F.trim()).charCodeAt(0), M = 1, H = ++K; K < $; ) {
              switch (g = C.charCodeAt(K)) {
                case 123:
                  M++;
                  break;
                case 125:
                  M--;
                  break;
                case 47:
                  switch (g = C.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = K + 1; se < V; ++se) switch (C.charCodeAt(se)) {
                          case 47:
                            if (g === 42 && C.charCodeAt(se - 1) === 42 && K + 2 !== se) {
                              K = se + 1;
                              break e;
                            }
                            break;
                          case 10:
                            if (g === 47) {
                              K = se + 1;
                              break e;
                            }
                        }
                        K = se;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; K++ < V && C.charCodeAt(K) !== g; ) ;
              }
              if (M === 0) break;
              K++;
            }
            if (M = C.substring(H, K), P === 0 && (P = (F = F.replace(p, "").trim()).charCodeAt(0)), P === 64) {
              switch (0 < ue && (F = F.replace(f, "")), g = F.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  ue = q;
                  break;
                default:
                  ue = he;
              }
              if (H = (M = t(q, ue, M, g, y + 1)).length, 0 < pe && (ie = s(3, M, ue = r(he, F, je), q, ee, ae, H, g, y, O), F = ue.join(""), ie !== void 0 && (H = (M = ie.trim()).length) === 0 && (g = 0, M = "")), 0 < H) switch (g) {
                case 115:
                  F = F.replace(E, o);
                case 100:
                case 109:
                case 45:
                  M = F + "{" + M + "}";
                  break;
                case 107:
                  M = (F = F.replace(A, "$1 $2")) + "{" + M + "}", M = X === 1 || X === 2 && i("@" + M, 3) ? "@-webkit-" + M + "@" + M : "@" + M;
                  break;
                default:
                  M = F + M, O === 112 && (z += M, M = "");
              }
              else M = "";
            } else M = t(q, r(q, F, je), M, O, y + 1);
            ce += M, M = je = ue = se = P = 0, F = "", g = C.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (1 < (H = (F = (0 < ue ? F.replace(f, "") : F).trim()).length)) switch (se === 0 && (P = F.charCodeAt(0), P === 45 || 96 < P && 123 > P) && (H = (F = F.replace(" ", ":")).length), 0 < pe && (ie = s(1, F, q, Q, ee, ae, z.length, O, y, O)) !== void 0 && (H = (F = ie.trim()).length) === 0 && (F = "\0\0"), P = F.charCodeAt(0), g = F.charCodeAt(1), P) {
              case 0:
                break;
              case 64:
                if (g === 105 || g === 99) {
                  Te += F + C.charAt(K);
                  break;
                }
              default:
                F.charCodeAt(H - 1) !== 58 && (z += a(F, P, g, F.charCodeAt(2)));
            }
            je = ue = se = P = 0, F = "", g = C.charCodeAt(++K);
        }
      }
      switch (g) {
        case 13:
        case 10:
          Y === 47 ? Y = 0 : 1 + P === 0 && O !== 107 && 0 < F.length && (ue = 1, F += "\0"), 0 < pe * qe && s(0, F, q, Q, ee, ae, z.length, O, y, O), ae = 1, ee++;
          break;
        case 59:
        case 125:
          if (Y + ne + Z + te === 0) {
            ae++;
            break;
          }
        default:
          switch (ae++, R = C.charAt(K), g) {
            case 9:
            case 32:
              if (ne + te + Y === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  R = "";
                  break;
                default:
                  g !== 32 && (R = " ");
              }
              break;
            case 0:
              R = "\\0";
              break;
            case 12:
              R = "\\f";
              break;
            case 11:
              R = "\\v";
              break;
            case 38:
              ne + Y + te === 0 && (ue = je = 1, R = "\f" + R);
              break;
            case 108:
              if (ne + Y + te + re === 0 && 0 < se) switch (K - se) {
                case 2:
                  fe === 112 && C.charCodeAt(K - 3) === 58 && (re = fe);
                case 8:
                  oe === 111 && (re = oe);
              }
              break;
            case 58:
              ne + Y + te === 0 && (se = K);
              break;
            case 44:
              Y + Z + ne + te === 0 && (ue = 1, R += "\r");
              break;
            case 34:
            case 39:
              Y === 0 && (ne = ne === g ? 0 : ne === 0 ? g : ne);
              break;
            case 91:
              ne + Y + Z === 0 && te++;
              break;
            case 93:
              ne + Y + Z === 0 && te--;
              break;
            case 41:
              ne + Y + te === 0 && Z--;
              break;
            case 40:
              ne + Y + te === 0 && (P === 0 && (2 * fe + 3 * oe == 533 || (P = 1)), Z++);
              break;
            case 64:
              Y + Z + ne + te + se + M === 0 && (M = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + te + Z)) switch (Y) {
                case 0:
                  switch (2 * g + 3 * C.charCodeAt(K + 1)) {
                    case 235:
                      Y = 47;
                      break;
                    case 220:
                      H = K, Y = 42;
                  }
                  break;
                case 42:
                  g === 47 && fe === 42 && H + 2 !== K && (C.charCodeAt(H + 2) === 33 && (z += C.substring(H, K + 1)), R = "", Y = 0);
              }
          }
          Y === 0 && (F += R);
      }
      oe = fe, fe = g, K++;
    }
    if (0 < (H = z.length)) {
      if (ue = q, 0 < pe && (ie = s(2, z, ue, Q, ee, ae, H, O, y, O)) !== void 0 && (z = ie).length === 0) return Te + z + ce;
      if (z = ue.join(",") + "{" + z + "}", X * re != 0) {
        switch (X !== 2 || i(z, 2) || (re = 0), re) {
          case 111:
            z = z.replace(I, ":-moz-$1") + z;
            break;
          case 112:
            z = z.replace(x, "::-webkit-input-$1") + z.replace(x, "::-moz-$1") + z.replace(x, ":-ms-input-$1") + z;
        }
        re = 0;
      }
    }
    return Te + z + ce;
  }
  function r(Q, q, C) {
    var O = q.trim().split(k);
    q = O;
    var y = O.length, P = Q.length;
    switch (P) {
      case 0:
      case 1:
        var g = 0;
        for (Q = P === 0 ? "" : Q[0] + " "; g < y; ++g) q[g] = n(Q, q[g], C).trim();
        break;
      default:
        var M = g = 0;
        for (q = []; g < y; ++g) for (var R = 0; R < P; ++R) q[M++] = n(Q[R] + " ", O[g], C).trim();
    }
    return q;
  }
  function n(Q, q, C) {
    var O = q.charCodeAt(0);
    switch (33 > O && (O = (q = q.trim()).charCodeAt(0)), O) {
      case 38:
        return q.replace(S, "$1" + Q.trim());
      case 58:
        return Q.trim() + q.replace(S, "$1" + Q.trim());
      default:
        if (0 < 1 * C && 0 < q.indexOf("\f")) return q.replace(S, (Q.charCodeAt(0) === 58 ? "" : "$1") + Q.trim());
    }
    return Q + q;
  }
  function a(Q, q, C, O) {
    var y = Q + ";", P = 2 * q + 3 * C + 4 * O;
    if (P === 944) {
      Q = y.indexOf(":", 9) + 1;
      var g = y.substring(Q, y.length - 1).trim();
      return g = y.substring(0, Q).trim() + g + ";", X === 1 || X === 2 && i(g, 1) ? "-webkit-" + g + g : g;
    }
    if (X === 0 || X === 2 && !i(y, 1)) return y;
    switch (P) {
      case 1015:
        return y.charCodeAt(10) === 97 ? "-webkit-" + y + y : y;
      case 951:
        return y.charCodeAt(3) === 116 ? "-webkit-" + y + y : y;
      case 963:
        return y.charCodeAt(5) === 110 ? "-webkit-" + y + y : y;
      case 1009:
        if (y.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + y + y;
      case 978:
        return "-webkit-" + y + "-moz-" + y + y;
      case 1019:
      case 983:
        return "-webkit-" + y + "-moz-" + y + "-ms-" + y + y;
      case 883:
        if (y.charCodeAt(8) === 45) return "-webkit-" + y + y;
        if (0 < y.indexOf("image-set(", 11)) return y.replace(we, "$1-webkit-$2") + y;
        break;
      case 932:
        if (y.charCodeAt(4) === 45) switch (y.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + y.replace("-grow", "") + "-webkit-" + y + "-ms-" + y.replace("grow", "positive") + y;
          case 115:
            return "-webkit-" + y + "-ms-" + y.replace("shrink", "negative") + y;
          case 98:
            return "-webkit-" + y + "-ms-" + y.replace("basis", "preferred-size") + y;
        }
        return "-webkit-" + y + "-ms-" + y + y;
      case 964:
        return "-webkit-" + y + "-ms-flex-" + y + y;
      case 1023:
        if (y.charCodeAt(8) !== 99) break;
        return "-webkit-box-pack" + (g = y.substring(y.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + y + "-ms-flex-pack" + g + y;
      case 1005:
        return T.test(y) ? y.replace(h, ":-webkit-") + y.replace(h, ":-moz-") + y : y;
      case 1e3:
        switch (q = (g = y.substring(13).trim()).indexOf("-") + 1, g.charCodeAt(0) + g.charCodeAt(q)) {
          case 226:
            g = y.replace(L, "tb");
            break;
          case 232:
            g = y.replace(L, "tb-rl");
            break;
          case 220:
            g = y.replace(L, "lr");
            break;
          default:
            return y;
        }
        return "-webkit-" + y + "-ms-" + g + y;
      case 1017:
        if (y.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (q = (y = Q).length - 10, P = (g = (y.charCodeAt(q) === 33 ? y.substring(0, q) : y).substring(Q.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | g.charCodeAt(7))) {
          case 203:
            if (111 > g.charCodeAt(8)) break;
          case 115:
            y = y.replace(g, "-webkit-" + g) + ";" + y;
            break;
          case 207:
          case 102:
            y = y.replace(g, "-webkit-" + (102 < P ? "inline-" : "") + "box") + ";" + y.replace(g, "-webkit-" + g) + ";" + y.replace(g, "-ms-" + g + "box") + ";" + y;
        }
        return y + ";";
      case 938:
        if (y.charCodeAt(5) === 45) switch (y.charCodeAt(6)) {
          case 105:
            return g = y.replace("-items", ""), "-webkit-" + y + "-webkit-box-" + g + "-ms-flex-" + g + y;
          case 115:
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(_, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(_, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (le.test(Q) === !0) return (g = Q.substring(Q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(Q.replace("stretch", "fill-available"), q, C, O).replace(":fill-available", ":stretch") : y.replace(g, "-webkit-" + g) + y.replace(g, "-moz-" + g.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, C + O === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function i(Q, q) {
    var C = Q.indexOf(q === 1 ? ":" : "{"), O = Q.substring(0, q !== 3 ? C : 10);
    return C = Q.substring(C + 1, Q.length - 1), ke(q !== 2 ? O : O.replace(W, "$1"), C, q);
  }
  function o(Q, q) {
    var C = a(q, q.charCodeAt(0), q.charCodeAt(1), q.charCodeAt(2));
    return C !== q + ";" ? C.replace(N, " or ($1)").substring(4) : "(" + q + ")";
  }
  function s(Q, q, C, O, y, P, g, M, R, ie) {
    for (var te, Y = 0, Z = q; Y < pe; ++Y) switch (te = De[Y].call(d, Q, Z, C, O, y, P, g, M, R, ie)) {
      case void 0:
      case !1:
      case !0:
      case null:
        break;
      default:
        Z = te;
    }
    if (Z !== q) return Z;
  }
  function l(Q) {
    return (Q = Q.prefix) !== void 0 && (ke = null, Q ? typeof Q != "function" ? X = 1 : (X = 2, ke = Q) : X = 0), l;
  }
  function d(Q, q) {
    var C = Q;
    if (33 > C.charCodeAt(0) && (C = C.trim()), C = [C], 0 < pe) {
      var O = s(-1, q, C, C, ee, ae, 0, 0, 0, 0);
      O !== void 0 && typeof O == "string" && (q = O);
    }
    var y = t(he, C, q, 0, 0);
    return 0 < pe && (O = s(-2, y, C, C, ee, ae, y.length, 0, 0, 0)) !== void 0 && (y = O), re = 0, ae = ee = 1, y;
  }
  var p = /^\0+/g, f = /[\0\r\f]/g, h = /: */g, T = /zoo|gra/, w = /([,: ])(transform)/g, k = /,\r+?/g, S = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, x = /::(place)/g, I = /:(read-only)/g, L = /[svh]\w+-[tblr]{2}/, E = /\(\s*(.*)\s*\)/g, N = /([\s\S]*?);/g, _ = /-self|flex-/g, W = /[^]*?(:[rp][el]a[\w-]+)[^]*/, le = /stretch|:\s*\w+\-(?:conte|avail)/, we = /([^-])(image-set\()/, ae = 1, ee = 1, re = 0, X = 1, he = [], De = [], pe = 0, ke = null, qe = 0;
  return d.use = function Q(q) {
    switch (q) {
      case void 0:
      case null:
        pe = De.length = 0;
        break;
      default:
        if (typeof q == "function") De[pe++] = q;
        else if (typeof q == "object") for (var C = 0, O = q.length; C < O; ++C) Q(q[C]);
        else qe = 0 | !!q;
    }
    return Q;
  }, d.set = l, e !== void 0 && l(e), d;
}, Ys = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Gs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bi = Gs(function(e) {
  return Xs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), Zs = Ne(985), Ks = Ne.n(Zs);
function gt() {
  return (gt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var wi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Jn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, bo.typeOf)(e);
}, cn = Object.freeze([]), _t = Object.freeze({});
function Or(e) {
  return typeof e == "function";
}
function ki(e) {
  return e.displayName || e.name || "Component";
}
function _a(e) {
  return e && typeof e.styledComponentId == "string";
}
var Qt = typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_ATTR || Ze.env.SC_ATTR) || "data-styled", Ca = typeof window < "u" && "HTMLElement" in window, Qs = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ze.env.REACT_APP_SC_DISABLE_SPEEDY : Ze.env.SC_DISABLE_SPEEDY !== void 0 && Ze.env.SC_DISABLE_SPEEDY !== "" && Ze.env.SC_DISABLE_SPEEDY !== "false" && Ze.env.SC_DISABLE_SPEEDY));
function Lr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Js = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, o = i; r >= o; ) (o <<= 1) < 0 && Lr(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(a), this.length = o;
      for (var s = i; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), d = 0, p = n.length; d < p; d++) this.tag.insertRule(l, n[d]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var o = a; o < i; o++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), o = i + a, s = i; s < o; s++) n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), tn = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Tr = 1, Br = function(e) {
  if (tn.has(e)) return tn.get(e);
  for (; un.has(Tr); ) Tr++;
  var t = Tr++;
  return tn.set(e, t), un.set(t, e), t;
}, el = function(e) {
  return un.get(e);
}, tl = function(e, t) {
  t >= Tr && (Tr = t + 1), tn.set(e, t), un.set(t, e);
}, rl = "style[" + Qt + '][data-styled-version="5.3.11"]', nl = new RegExp("^" + Qt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), al = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, il = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var s = o.match(nl);
      if (s) {
        var l = 0 | parseInt(s[1], 10), d = s[2];
        l !== 0 && (tl(d, l), al(e, d, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, ol = function() {
  return Ne.nc;
}, wo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(s) {
    for (var l = s.childNodes, d = l.length; d >= 0; d--) {
      var p = l[d];
      if (p && p.nodeType === 1 && p.hasAttribute(Qt)) return p;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Qt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = ol();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, sl = function() {
  function e(r) {
    var n = this.element = wo(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, o = 0, s = i.length; o < s; o++) {
        var l = i[o];
        if (l.ownerNode === a) return l;
      }
      Lr(17);
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
}(), ll = function() {
  function e(r) {
    var n = this.element = wo(r);
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
}(), cl = function() {
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
}(), Si = Ca, ul = { isServer: !Ca, useCSSOMInjection: !Qs }, dn = function() {
  function e(r, n, a) {
    r === void 0 && (r = _t), n === void 0 && (n = {}), this.options = gt({}, ul, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ca && Si && (Si = !1, function(i) {
      for (var o = document.querySelectorAll(rl), s = 0, l = o.length; s < l; s++) {
        var d = o[s];
        d && d.getAttribute(Qt) !== "active" && (il(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Br(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(gt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new cl(o) : i ? new sl(o) : new ll(o), new Js(r)));
    var r, n, a, i, o;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Br(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Br(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Br(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", o = 0; o < a; o++) {
        var s = el(o);
        if (s !== void 0) {
          var l = r.names.get(s), d = n.getGroup(o);
          if (l && d && l.size) {
            var p = Qt + ".g" + o + '[id="' + s + '"]', f = "";
            l !== void 0 && l.forEach(function(h) {
              h.length > 0 && (f += h + ",");
            }), i += "" + d + p + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), dl = /(a)(d)/gi, Ei = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ea(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ei(t % 52) + r;
  return (Ei(t % 52) + r).replace(dl, "$1-$2");
}
var Xt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, ko = function(e) {
  return Xt(5381, e);
};
function So(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Or(r) && !_a(r)) return !1;
  }
  return !0;
}
var fl = ko("5.3.11"), pl = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && So(t), this.componentId = r, this.baseHash = Xt(fl, r), this.baseStyle = n, dn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = Ft(this.rules, t, r, n).join(""), s = ea(Xt(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(a, s)) {
        var l = n(o, "." + s, void 0, a);
        r.insertRules(a, s, l);
      }
      i.push(s), this.staticRulesId = s;
    }
    else {
      for (var d = this.rules.length, p = Xt(this.baseHash, n.hash), f = "", h = 0; h < d; h++) {
        var T = this.rules[h];
        if (typeof T == "string") f += T;
        else if (T) {
          var w = Ft(T, t, r, n), k = Array.isArray(w) ? w.join("") : w;
          p = Xt(p, k + h), f += k;
        }
      }
      if (f) {
        var S = ea(p >>> 0);
        if (!r.hasNameForId(a, S)) {
          var A = n(f, "." + S, void 0, a);
          r.insertRules(a, S, A);
        }
        i.push(S);
      }
    }
    return i.join(" ");
  }, e;
}(), ml = /^\s*\/\/.*$/gm, hl = [":", "[", ".", "#"];
function gl(e) {
  var t, r, n, a, i = _t, o = i.options, s = o === void 0 ? _t : o, l = i.plugins, d = l === void 0 ? cn : l, p = new Vs(s), f = [], h = /* @__PURE__ */ function(k) {
    function S(A) {
      if (A) try {
        k(A + "}");
      } catch {
      }
    }
    return function(A, x, I, L, E, N, _, W, le, we) {
      switch (A) {
        case 1:
          if (le === 0 && x.charCodeAt(0) === 64) return k(x + ";"), "";
          break;
        case 2:
          if (W === 0) return x + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return k(I[0] + x), "";
            default:
              return x + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(S);
      }
    };
  }(function(k) {
    f.push(k);
  }), T = function(k, S, A) {
    return S === 0 && hl.indexOf(A[r.length]) !== -1 || A.match(a) ? k : "." + t;
  };
  function w(k, S, A, x) {
    x === void 0 && (x = "&");
    var I = k.replace(ml, ""), L = S && A ? A + " " + S + " { " + I + " }" : I;
    return t = x, r = S, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), p(A || !S ? "" : S, L);
  }
  return p.use([].concat(d, [function(k, S, A) {
    k === 2 && A.length && A[0].lastIndexOf(r) > 0 && (A[0] = A[0].replace(n, T));
  }, h, function(k) {
    if (k === -2) {
      var S = f;
      return f = [], S;
    }
  }])), w.hash = d.length ? d.reduce(function(k, S) {
    return S.name || Lr(15), Xt(k, S.name);
  }, 5381).toString() : "", w;
}
var Eo = u.default.createContext(), To = (Eo.Consumer, u.default.createContext()), vl = (To.Consumer, new dn()), ta = gl();
function yl() {
  return (0, u.useContext)(Eo) || vl;
}
var bl = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = ta);
      var o = n.name + i.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return Lr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ta), this.name + t.hash;
  }, e;
}(), wl = /([A-Z])/, kl = /([A-Z])/g, Sl = /^ms-/, El = function(e) {
  return "-" + e.toLowerCase();
};
function Ti(e) {
  return wl.test(e) ? e.replace(kl, El).replace(Sl, "-ms-") : e;
}
var xi = function(e) {
  return e == null || e === !1 || e === "";
};
function Ft(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, s = e.length; o < s; o += 1) (a = Ft(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  return xi(e) ? "" : _a(e) ? "." + e.styledComponentId : Or(e) ? typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !t ? e : Ft(e(t), t, r, n) : e instanceof bl ? r ? (e.inject(r, n), e.getName(n)) : e : Jn(e) ? function d(p, f) {
    var h, T, w = [];
    for (var k in p) p.hasOwnProperty(k) && !xi(p[k]) && (Array.isArray(p[k]) && p[k].isCss || Or(p[k]) ? w.push(Ti(k) + ":", p[k], ";") : Jn(p[k]) ? w.push.apply(w, d(p[k], k)) : w.push(Ti(k) + ": " + (h = k, ((T = p[k]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || h in Ys || h.startsWith("--") ? String(T).trim() : T + "px") + ";")));
    return f ? [f + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
  var l;
}
var Ai = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Tl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Or(e) || Jn(e) ? Ai(Ft(wi(cn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ai(Ft(wi(e, r)));
}
var xl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Al = /(^-|-$)/g;
function zn(e) {
  return e.replace(xl, "-").replace(Al, "");
}
function Wr(e) {
  return typeof e == "string" && !0;
}
var ra = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ol = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function _l(e, t, r) {
  var n = e[r];
  ra(t) && ra(n) ? xo(n, t) : e[r] = t;
}
function xo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (ra(o)) for (var s in o) Ol(s) && _l(e, o[s], s);
  }
  return e;
}
var Ao = u.default.createContext();
Ao.Consumer;
var Fn = {};
function Oo(e, t, r) {
  var n = _a(e), a = !Wr(e), i = t.attrs, o = i === void 0 ? cn : i, s = t.componentId, l = s === void 0 ? function(x, I) {
    var L = typeof x != "string" ? "sc" : zn(x);
    Fn[L] = (Fn[L] || 0) + 1;
    var E = L + "-" + function(N) {
      return ea(ko(N) >>> 0);
    }("5.3.11" + L + Fn[L]);
    return I ? I + "-" + E : E;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, p = d === void 0 ? function(x) {
    return Wr(x) ? "styled." + x : "Styled(" + ki(x) + ")";
  }(e) : d, f = t.displayName && t.componentId ? zn(t.displayName) + "-" + t.componentId : t.componentId || l, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, T = t.shouldForwardProp;
  n && e.shouldForwardProp && (T = t.shouldForwardProp ? function(x, I, L) {
    return e.shouldForwardProp(x, I, L) && t.shouldForwardProp(x, I, L);
  } : e.shouldForwardProp);
  var w, k = new pl(r, f, n ? e.componentStyle : void 0), S = k.isStatic && o.length === 0, A = function(x, I) {
    return function(L, E, N, _) {
      var W = L.attrs, le = L.componentStyle, we = L.defaultProps, ae = L.foldedComponentIds, ee = L.shouldForwardProp, re = L.styledComponentId, X = L.target, he = function(P, g, M) {
        P === void 0 && (P = _t);
        var R = gt({}, g, { theme: P }), ie = {};
        return M.forEach(function(te) {
          var Y, Z, ne, fe = te;
          for (Y in Or(fe) && (fe = fe(R)), fe) R[Y] = ie[Y] = Y === "className" ? (Z = ie[Y], ne = fe[Y], Z && ne ? Z + " " + ne : Z || ne) : fe[Y];
        }), [R, ie];
      }(function(P, g, M) {
        return M === void 0 && (M = _t), P.theme !== M.theme && P.theme || g || M.theme;
      }(E, (0, u.useContext)(Ao), we) || _t, E, W), De = he[0], pe = he[1], ke = function(P, g, M) {
        var R = yl(), ie = (0, u.useContext)(To) || ta;
        return g ? P.generateAndInjectStyles(_t, R, ie) : P.generateAndInjectStyles(M, R, ie);
      }(le, _, De), qe = N, Q = pe.$as || E.$as || pe.as || E.as || X, q = Wr(Q), C = pe !== E ? gt({}, E, {}, pe) : E, O = {};
      for (var y in C) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? O.as = C[y] : (ee ? ee(y, bi, Q) : !q || bi(y)) && (O[y] = C[y]));
      return E.style && pe.style !== E.style && (O.style = gt({}, E.style, {}, pe.style)), O.className = Array.prototype.concat(ae, re, ke !== re ? ke : null, E.className, pe.className).filter(Boolean).join(" "), O.ref = qe, (0, u.createElement)(Q, O);
    }(w, x, I, S);
  };
  return A.displayName = p, (w = u.default.forwardRef(A)).attrs = h, w.componentStyle = k, w.displayName = p, w.shouldForwardProp = T, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : cn, w.styledComponentId = f, w.target = n ? e.target : e, w.withComponent = function(x) {
    var I = t.componentId, L = function(N, _) {
      if (N == null) return {};
      var W, le, we = {}, ae = Object.keys(N);
      for (le = 0; le < ae.length; le++) W = ae[le], _.indexOf(W) >= 0 || (we[W] = N[W]);
      return we;
    }(t, ["componentId"]), E = I && I + "-" + (Wr(x) ? x : zn(ki(x)));
    return Oo(x, gt({}, L, { attrs: h, componentId: E }), r);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? xo({}, e.defaultProps, x) : x;
  } }), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), a && Ks()(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var Hn, na = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = _t), !(0, bo.isValidElementType)(n)) return Lr(1, String(n));
    var i = function() {
      return r(n, a, Tl.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, gt({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, gt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(Oo, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  na[e] = na(e);
}), (Hn = (function(e, t) {
  this.rules = e, this.componentId = t, this.isStatic = So(e), dn.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, t, r, n) {
  var a = n(Ft(this.rules, t, r, n).join(""), ""), i = this.componentId + e;
  r.insertRules(i, i, a);
}, Hn.removeStyles = function(e, t) {
  t.clearRules(this.componentId + e);
}, Hn.renderStyles = function(e, t, r, n) {
  e > 2 && dn.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n);
};
const wt = na, Cl = wt.div`
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
`, rn = "On This Page", Nl = { event: "collapse", name: "onclick", type: "click", text: rn }, Na = ({ items: e, firstElementId: t, focusFirstFocusableElement: r = !1 }) => {
  const n = (0, u.useRef)(null), a = function(f) {
    const [h, T] = (0, u.useState)(!1);
    return (0, u.useEffect)(() => {
      const w = window.matchMedia(f);
      w.matches !== h && T(w.matches);
      const k = () => {
        T(w.matches);
      };
      return w.addEventListener("change", k), () => w.removeEventListener("change", k);
    }, [h, f]), h;
  }("(max-width: 991px)"), [i, o] = (0, u.useState)({ hasHeader: !1, hasAltMenuSpacing: !1, containerClass: "container-xl", activeContainer: "", showMenu: !1, sticky: !1 }), s = a ? 110 : 142, l = () => {
    var k;
    const f = {}, h = window.scrollY;
    ((k = document.getElementById(t)) == null ? void 0 : k.getBoundingClientRect().top) >= 0 && (f.sticky = !1, f.activeContainer = ""), h > n.current.getBoundingClientRect().top && (f.sticky = !0);
    const w = i.hasHeader ? s + 103 : 103;
    e == null || e.forEach(({ targetIdName: S }) => {
      const A = document.getElementById(S), x = (A == null ? void 0 : A.getBoundingClientRect().top) - w, I = (A == null ? void 0 : A.getBoundingClientRect().bottom) - w;
      x < 0 && I > 0 && (f.activeContainer = S);
    }), o((S) => ({ ...S, ...f }));
  }, d = () => {
    var f;
    f = l, jn || (jn = !0, setTimeout(() => {
      f(), jn = !1;
    }, 150)), ((h) => {
      window.clearTimeout(yi), yi = window.setTimeout(h, 150);
    })(l);
  };
  function p(f = null) {
    if (f === null) return i.containerClass;
    const h = Object.values(f.classList).filter((T) => ["container-sm", "container-md", "container", "container-lg", "container-xl", "container-fluid"].includes(T));
    return h.length > 0 ? h.join(" ") : p(f.parentElement);
  }
  return (0, u.useEffect)(() => {
    const f = document.getElementById(t) || null, h = { hasHeader: !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), hasAltMenuSpacing: !!document.getElementById("degreeDetailPageContainer"), containerClass: p(f) };
    o((T) => ({ ...T, ...h }));
  }, []), (0, u.useEffect)(() => (window == null || window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [i.hasHeader]), (e == null ? void 0 : e.length) > 0 && u.default.createElement(Cl, { requiresAltMenuSpacing: i.hasAltMenuSpacing, ref: n, className: be()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: i.sticky, "with-header": i.hasHeader }), style: i.showMenu ? { borderBottom: 0 } : {} }, u.default.createElement("div", { className: `${i.containerClass} uds-anchor-menu-wrapper` }, a ? u.default.createElement("button", { className: be()("mobile-menu-toggler", { "show-menu": i.showMenu }), type: "button", onClick: () => {
    et({ ...Nl, action: i.showMenu ? "close" : "open" }), o((f) => ({ ...f, showMenu: !f.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, u.default.createElement("h2", null, rn, ":", u.default.createElement("i", { className: "fas fa-chevron-down" }))) : u.default.createElement("h2", null, rn, ":"), u.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: be()("card", "card-body", "collapse", { show: i.showMenu }) }, u.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": rn }, e == null ? void 0 : e.map((f) => u.default.createElement(yt, { "data-testid": `anchor-item-${f.targetIdName}`, key: f.targetIdName, classes: be()("nav-link", { active: i.activeContainer === f.targetIdName }).split(" "), ariaLabel: f.text, label: f.text, icon: f.icon, onClick: () => ((h) => {
    var A, x;
    const T = window.scrollY - (i.hasHeader ? s + 100 : 100), w = a ? 410 : 90;
    let k = ((A = document.getElementById(h)) == null ? void 0 : A.getBoundingClientRect().top) + T;
    var S;
    n.current.classList.contains("sticky") || (k -= w), r && ((x = (S = `#${h}`, (S ? document.querySelector(S) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || x.focus()), window.scrollTo({ top: k, behavior: "smooth" });
  })(f.targetIdName) }))))));
};
Na.propTypes = { items: c().arrayOf(c().shape({ text: c().string.isRequired, targetIdName: c().string.isRequired, icon: c().arrayOf(c().string) })).isRequired, firstElementId: c().string.isRequired, focusFirstFocusableElement: c().bool };
var qr, Rl = (qr = function(e, t) {
  return qr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, qr(e, t);
}, function(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  qr(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}), Ll = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.name = "AssertionError", n;
  }
  return Rl(t, e), t;
}(Error);
function xr(e, t) {
  if (!e) throw new Ll(t);
}
function Tn(e) {
  var t = Object.entries(e).filter(function(r) {
    return r[1] != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Il = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function n() {
      this.constructor = t;
    }
    e(t, r), t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), jt = function() {
  return jt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, jt.apply(this, arguments);
}, Oi = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  }
  return r;
};
const Pl = function(e) {
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.openShareDialog = function(n) {
      var a, i, o = r.props, s = o.onShareWindowClose, l = o.windowHeight, d = l === void 0 ? 400 : l, p = o.windowPosition, f = p === void 0 ? "windowCenter" : p, h = o.windowWidth, T = h === void 0 ? 550 : h;
      (function(w, k, S) {
        var A = k.height, x = k.width, I = Oi(k, ["height", "width"]), L = jt({ height: A, width: x, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, I), E = window.open(w, "", Object.keys(L).map(function(_) {
          return "".concat(_, "=").concat(L[_]);
        }).join(", "));
        if (S) var N = window.setInterval(function() {
          try {
            (E === null || E.closed) && (window.clearInterval(N), S(E));
          } catch (_) {
            console.error(_);
          }
        }, 1e3);
      })(n, jt({ height: d, width: T }, f === "windowCenter" ? (a = T, i = d, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - a / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - i / 2 }) : function(w, k) {
        return { top: (window.screen.height - k) / 2, left: (window.screen.width - w) / 2 };
      }(T, d)), s);
    }, r.handleClick = function(n) {
      return a = r, i = void 0, s = function() {
        var l, d, p, f, h, T, w, k, S, A;
        return function(x, I) {
          var L, E, N, _, W = { label: 0, sent: function() {
            if (1 & N[0]) throw N[1];
            return N[1];
          }, trys: [], ops: [] };
          return _ = { next: le(0), throw: le(1), return: le(2) }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
            return this;
          }), _;
          function le(we) {
            return function(ae) {
              return function(ee) {
                if (L) throw new TypeError("Generator is already executing.");
                for (; W; ) try {
                  if (L = 1, E && (N = 2 & ee[0] ? E.return : ee[0] ? E.throw || ((N = E.return) && N.call(E), 0) : E.next) && !(N = N.call(E, ee[1])).done) return N;
                  switch (E = 0, N && (ee = [2 & ee[0], N.value]), ee[0]) {
                    case 0:
                    case 1:
                      N = ee;
                      break;
                    case 4:
                      return W.label++, { value: ee[1], done: !1 };
                    case 5:
                      W.label++, E = ee[1], ee = [0];
                      continue;
                    case 7:
                      ee = W.ops.pop(), W.trys.pop();
                      continue;
                    default:
                      if (!((N = (N = W.trys).length > 0 && N[N.length - 1]) || ee[0] !== 6 && ee[0] !== 2)) {
                        W = 0;
                        continue;
                      }
                      if (ee[0] === 3 && (!N || ee[1] > N[0] && ee[1] < N[3])) {
                        W.label = ee[1];
                        break;
                      }
                      if (ee[0] === 6 && W.label < N[1]) {
                        W.label = N[1], N = ee;
                        break;
                      }
                      if (N && W.label < N[2]) {
                        W.label = N[2], W.ops.push(ee);
                        break;
                      }
                      N[2] && W.ops.pop(), W.trys.pop();
                      continue;
                  }
                  ee = I.call(x, W);
                } catch (re) {
                  ee = [6, re], E = 0;
                } finally {
                  L = N = 0;
                }
                if (5 & ee[0]) throw ee[1];
                return { value: ee[0] ? ee[1] : void 0, done: !0 };
              }([we, ae]);
            };
          }
        }(this, function(x) {
          switch (x.label) {
            case 0:
              return l = this.props, d = l.beforeOnClick, p = l.disabled, f = l.networkLink, h = l.onClick, T = l.url, w = l.openShareDialogOnClick, k = l.opts, S = f(T, k), p ? [2] : (n.preventDefault(), d ? !(I = A = d()) || typeof I != "object" && typeof I != "function" || typeof I.then != "function" ? [3, 2] : [4, A] : [3, 2]);
            case 1:
              x.sent(), x.label = 2;
            case 2:
              return w && this.openShareDialog(S), h && h(n, S), [2];
          }
          var I;
        });
      }, new ((o = void 0) || (o = Promise))(function(l, d) {
        function p(T) {
          try {
            h(s.next(T));
          } catch (w) {
            d(w);
          }
        }
        function f(T) {
          try {
            h(s.throw(T));
          } catch (w) {
            d(w);
          }
        }
        function h(T) {
          var w;
          T.done ? l(T.value) : (w = T.value, w instanceof o ? w : new o(function(k) {
            k(w);
          })).then(p, f);
        }
        h((s = s.apply(a, i || [])).next());
      });
      var a, i, o, s;
    }, r;
  }
  return Il(t, e), t.prototype.render = function() {
    var r = this.props, n = (r.beforeOnClick, r.children), a = r.className, i = r.disabled, o = r.disabledStyle, s = r.forwardedRef, l = (r.networkLink, r.networkName), d = (r.onShareWindowClose, r.openShareDialogOnClick, r.opts, r.resetButtonStyle), p = r.style, f = (r.url, r.windowHeight, r.windowPosition, r.windowWidth, Oi(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), h = be()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!i, disabled: !!i }, a), T = jt(jt(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, p), i && o);
    return u.default.createElement("button", jt({}, f, { "aria-label": f["aria-label"] || l, className: h, onClick: this.handleClick, ref: s, style: T }), n);
  }, t.defaultProps = { disabledStyle: { opacity: 0.6 }, openShareDialogOnClick: !0, resetButtonStyle: !0 }, t;
}(u.Component);
var fn = function() {
  return fn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, fn.apply(this, arguments);
};
const xn = function(e, t, r, n) {
  function a(i, o) {
    var s = r(i), l = fn({}, i);
    return Object.keys(s).forEach(function(d) {
      delete l[d];
    }), u.default.createElement(Pl, fn({}, n, l, { forwardedRef: o, networkName: e, networkLink: t, opts: r(i) }));
  }
  return a.displayName = "ShareButton-".concat(e), (0, u.forwardRef)(a);
}, _i = xn("facebook", function(e, t) {
  var r = t.quote, n = t.hashtag;
  return xr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Tn({ u: e, quote: r, hashtag: n });
}, function(e) {
  return { quote: e.quote, hashtag: e.hashtag };
}, { windowWidth: 550, windowHeight: 400 });
var aa = function() {
  return aa = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, aa.apply(this, arguments);
};
function An(e) {
  var t = function(r) {
    var n = r.bgStyle, a = r.borderRadius, i = r.iconFillColor, o = r.round, s = r.size, l = function(d, p) {
      var f = {};
      for (var h in d) Object.prototype.hasOwnProperty.call(d, h) && p.indexOf(h) < 0 && (f[h] = d[h]);
      if (d != null && typeof Object.getOwnPropertySymbols == "function") {
        var T = 0;
        for (h = Object.getOwnPropertySymbols(d); T < h.length; T++) p.indexOf(h[T]) < 0 && Object.prototype.propertyIsEnumerable.call(d, h[T]) && (f[h[T]] = d[h[T]]);
      }
      return f;
    }(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return u.default.createElement("svg", aa({ viewBox: "0 0 64 64", width: s, height: s }, l), o ? u.default.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : u.default.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }), u.default.createElement("path", { d: e.path, fill: i }));
  };
  return t.defaultProps = { bgStyle: {}, borderRadius: 0, iconFillColor: "white", size: 64 }, t;
}
const Ci = An({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), Ni = xn("twitter", function(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, i = a === void 0 ? [] : a, o = t.related, s = o === void 0 ? [] : o;
  return xr(e, "twitter.url"), xr(Array.isArray(i), "twitter.hashtags is not an array"), xr(Array.isArray(s), "twitter.related is not an array"), "https://twitter.com/share" + Tn({ url: e, text: r, via: n, hashtags: i.length > 0 ? i.join(",") : void 0, related: s.length > 0 ? s.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), Ri = An({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), Ml = xn("email", function(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Tn({ subject: r, body: n ? n + a + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, t) {
  window.location.href = t;
} }), Dl = An({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), Li = xn("linkedin", function(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return xr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Tn({ url: e, mini: "true", title: r, summary: n, source: a });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), Ii = An({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function ia(e) {
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e);
}
function oa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  return t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var jl = (typeof window > "u" ? "undefined" : ia(window)) === "object" && window.Element || function() {
};
c().oneOfType([c().string, c().func, function(e, t, r) {
  if (!(e[t] instanceof jl)) return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}, c().shape({ current: c().any })]);
var sa = c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), $l = ["className", "cssModule", "active", "tag"];
function la() {
  return la = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, la.apply(this, arguments);
}
var zl = { active: c().bool, className: c().string, cssModule: c().object, tag: sa };
function _o(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, i = a === void 0 ? "li" : a, o = function(l, d) {
    if (l == null) return {};
    var p, f, h = function(w, k) {
      if (w == null) return {};
      var S, A, x = {}, I = Object.keys(w);
      for (A = 0; A < I.length; A++) S = I[A], k.indexOf(S) >= 0 || (x[S] = w[S]);
      return x;
    }(l, d);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(l);
      for (f = 0; f < T.length; f++) p = T[f], d.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(l, p) && (h[p] = l[p]);
    }
    return h;
  }(e, $l), s = oa(be()(t, !!n && "active", "breadcrumb-item"), r);
  return u.default.createElement(i, la({}, o, { className: s, "aria-current": n ? "page" : void 0 }));
}
_o.propTypes = zl;
const Vr = _o;
var Fl = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ca.apply(this, arguments);
}
var Hl = { "aria-label": c().string, children: c().node, className: c().string, cssModule: c().object, listClassName: c().string, listTag: sa, tag: sa };
function Co(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, i = e.tag, o = i === void 0 ? "nav" : i, s = e.listTag, l = s === void 0 ? "ol" : s, d = e["aria-label"], p = d === void 0 ? "breadcrumb" : d, f = function(w, k) {
    if (w == null) return {};
    var S, A, x = function(L, E) {
      if (L == null) return {};
      var N, _, W = {}, le = Object.keys(L);
      for (_ = 0; _ < le.length; _++) N = le[_], E.indexOf(N) >= 0 || (W[N] = L[N]);
      return W;
    }(w, k);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(w);
      for (A = 0; A < I.length; A++) S = I[A], k.indexOf(S) >= 0 || Object.prototype.propertyIsEnumerable.call(w, S) && (x[S] = w[S]);
    }
    return x;
  }(e, Fl), h = oa(be()(t), n), T = oa(be()("breadcrumb", r), n);
  return u.default.createElement(o, ca({}, f, { className: h, "aria-label": p }), u.default.createElement(l, { className: T }, a));
}
Co.propTypes = Hl;
const Ul = Co, Bl = wt.div`
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
`, Wl = wt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, pn = ({ type: e, articleUrl: t, publicationDate: r, title: n, body: a, authorEmail: i, authorName: o, authorPhone: s, authorTitle: l, breadcrumbs: d, calendarUrl: p, eventLocation: f, eventTime: h, headerImageUrl: T, registrationUrl: w, zoomUrl: k }) => {
  const S = be()("col", "col-12", { "col-lg-8": e === "event" && (w || k || p) });
  return u.default.createElement(u.default.Fragment, null, T && e !== "event" && u.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${T})` } }), u.default.createElement(Bl, { className: `container ${e}-container wrapper-container` }, d && u.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement(Ul, { listClassName: "breadcrumb" }, d.map((A) => ((x) => x.active ? u.default.createElement(Vr, { active: !0, tag: "li", className: "breadcrumb-item" }, u.default.createElement(Vr, { tag: "a", href: x.url }, x.title)) : u.default.createElement(Vr, { tag: "li", className: "breadcrumb-item" }, u.default.createElement(Vr, { tag: "a", href: x.url }, x.title)))(A))))), u.default.createElement("div", { className: "row pb-2 pt-3" }, u.default.createElement("div", { className: S }, u.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && u.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (w || k) && (w ? u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(yt, { color: "maroon", href: w, label: "Register" })) : u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(yt, { color: "maroon", href: k, label: "Attend on Zoom" }))), p && u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(yt, { color: "gray", size: "small", href: p, label: "Add to calendar" })))), e === "event" ? u.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, h && u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), u.default.createElement("div", { dangerouslySetInnerHTML: at(h) })), (w && k || f) && u.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), u.default.createElement("div", { dangerouslySetInnerHTML: at(f) }), w && k && u.default.createElement("a", { href: k }, "Attend on Zoom"))) : u.default.createElement("div", { className: "row row-spaced pt-2" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(_i, { url: t, quote: n }, u.default.createElement(Ci, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ni, { url: t, quote: n }, u.default.createElement(Ri, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Li, { url: t, quote: n }, u.default.createElement(Ii, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), r && u.default.createElement("i", { className: "news-date" }, r))), u.default.createElement("div", { className: "row" }, u.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: at(a), "data-testid": "body" })), e === "news" && u.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "author highlight-gold" }, o), l && u.default.createElement("div", { className: "author-title" }, l), i && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-envelope" })), u.default.createElement("a", { href: `mailto: ${i}` }, i)), s && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-phone" })), u.default.createElement("a", { href: `tel: ${s}` }, s)))), e === "event" && u.default.createElement(Wl, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "For more information contact:"), u.default.createElement("div", { className: "event-author" }, o), u.default.createElement("div", { className: "event-author-title" }, l), (i || s) && u.default.createElement("div", { className: "event-author-info" }, i && u.default.createElement("div", null, u.default.createElement("a", { href: `mailto: ${i}` }, i)), s && u.default.createElement("div", null, u.default.createElement("a", { href: `tel: ${s}` }, s)))), u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "Share this event:"), u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(_i, { url: t, quote: n }, u.default.createElement(Ci, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ni, { url: t, quote: n }, u.default.createElement(Ri, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ml, { url: i, quote: n }, u.default.createElement(Dl, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Li, { url: t, quote: n }, u.default.createElement(Ii, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
pn.propTypes = { type: c().oneOf(["event", "news"]), articleUrl: c().string.isRequired, publicationDate: c().string.isRequired, title: c().string.isRequired, body: c().string.isRequired, authorEmail: c().string, authorName: c().string.isRequired, authorPhone: c().string, authorTitle: c().string, breadcrumbs: c().arrayOf(c().shape({ title: c().string, url: c().string, active: c().bool })), calendarUrl: c().string, headerImageUrl: c().string, eventLocation: c().string, eventTime: c().string, registrationUrl: c().string, zoomUrl: c().string }, pn.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const ql = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, mn = ({ color: e, icon: t, innerRef: r, onClick: n, size: a, cardTitle: i }) => u.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"}`, ref: r, onClick: () => (et({ ...ql, text: `${t == null ? void 0 : t[1]} icon`, section: i }), void (n == null ? void 0 : n())), "aria-label": "Close" }, u.default.createElement("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` }));
mn.propTypes = { color: c().oneOf(["white", "gray", "black"]), icon: c().arrayOf(c().string), innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func, cardTitle: c().string, size: c().oneOf(["large", "small"]) }, mn.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const Vl = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, _r = ({ label: e, cardTitle: t, ariaLabel: r, color: n, disabled: a, element: i, innerRef: o, href: s, onClick: l, ...d }) => {
  const p = be()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: a });
  let f = i;
  return s && i === "button" && (f = "a"), u.default.createElement(f, Kt({ type: f === "button" && l ? "button" : void 0 }, d, { className: p, href: s, ref: o, onClick: () => (et({ ...Vl, text: e, section: t }), void (l == null ? void 0 : l())), "aria-label": r }), e);
};
_r.propTypes = { label: c().string, cardTitle: c().string, ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), disabled: c().bool, element: c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), href: c().string, innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func }, _r.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const Ht = ({ src: e, alt: t, cssClasses: r, loading: n = "lazy", decoding: a = "async", dataTestId: i, fetchPriority: o = "auto", width: s, height: l, cardLink: d, title: p, caption: f, captionTitle: h, border: T, dropShadow: w }) => {
  const k = { src: e, alt: t, loading: n, decoding: a, fetchpriority: o, ...(r == null ? void 0 : r.length) > 0 && { className: en(r) }, ...i && { "data-testid": i }, ...s && { width: s }, ...l && { height: l } }, S = be()("uds-img", { borderless: !T, "uds-img-drop-shadow": w }), A = (x) => {
    const I = x ? `${k.className} ${x}` : k.className;
    return d ? u.default.createElement("a", { href: d }, u.default.createElement("img", Kt({}, k, { className: I })), u.default.createElement("span", { className: "visually-hidden" }, p)) : u.default.createElement("img", Kt({}, k, { className: I }));
  };
  return u.default.createElement(u.default.Fragment, null, f ? u.default.createElement("div", { className: S }, u.default.createElement("figure", { className: "figure uds-figure" }, A(), f && u.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, h && u.default.createElement("h3", null, h), u.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: at(f) })))) : A(S));
};
Ht.propTypes = { src: c().string.isRequired, alt: c().string.isRequired, cssClasses: c().arrayOf(c().string), loading: c().oneOf(["lazy", "eager"]), decoding: c().oneOf(["sync", "async", "auto"]), fetchPriority: c().oneOf(["auto", "high", "low"]), width: c().string, height: c().string, dataTestId: c().string, cardLink: c().string, title: c().string, caption: c().string, captionTitle: c().string, border: c().bool, dropShadow: c().bool };
const Yl = wt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Gl = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, hn = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: p, buttons: f, linkLabel: h, linkUrl: T, tags: w, showBorders: k, cardLink: S }) => u.default.createElement(ua, { type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: p, buttons: f, linkLabel: h, linkUrl: T, tags: w, showBorders: k, cardLink: S });
hn.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), width: c().oneOf(["25%", "50%", "75%", "100%"]), horizontal: c().bool, title: c().string.isRequired, icon: c().arrayOf(c().string), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, image: c().string, imageAltText: c().string, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), showBorders: c().bool, cardLink: c().string }, hn.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const ua = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: p, buttons: f, linkLabel: h, linkUrl: T, tags: w, showBorders: k, cardLink: S }) => {
  const A = be()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${t.replace("%", "")}`]: t !== "100%", "card-horizontal": r, borderless: !k });
  return u.default.createElement(u.default.Fragment, null, u.default.createElement(Yl, { className: A, "data-testid": "card-container" }, !!n && u.default.createElement(Ht, { src: n, alt: a, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: S, title: i }), !n && o && u.default.createElement("i", { className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), r ? u.default.createElement("div", { className: "card-content-wrapper" }, u.default.createElement(gn, { type: e, body: s, eventFormat: l, eventLocation: d, eventTime: p, title: i, buttons: f, linkLabel: h, linkUrl: T, tags: w, cardLink: S })) : u.default.createElement(gn, { type: e, body: s, eventFormat: l, eventLocation: d, eventTime: p, title: i, buttons: f, linkLabel: h, linkUrl: T, tags: w, cardLink: S })));
};
ua.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), width: c().oneOf(["25%", "50%", "75%", "100%"]), horizontal: c().bool, title: c().string.isRequired, icon: c().arrayOf(c().string), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, image: c().string, imageAltText: c().string, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), showBorders: c().bool, cardLink: c().string }, ua.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const gn = ({ type: e, body: t, eventFormat: r, eventLocation: n, eventTime: a, title: i, buttons: o, linkLabel: s, linkUrl: l, tags: d, cardLink: p }) => {
  return u.default.createElement(u.default.Fragment, null, !!i && u.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, u.default.createElement("h3", { className: "card-title" }, p ? u.default.createElement("a", { href: p }, i) : i)), !!t && u.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, u.default.createElement("div", { dangerouslySetInnerHTML: at(t) })), e === "event" && (a || n) && u.default.createElement(da, { eventFormat: r, eventTime: a, eventLocation: n }), o && u.default.createElement("div", { className: "card-buttons" }, o.map((h) => u.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${h.label}-${h.href}` }, u.default.createElement(yt, { ariaLabel: h.ariaLabel, color: h.color, icon: h.icon, href: h.href, label: h.label, onClick: h.onClick, size: h.size, target: h.target, cardTitle: i })))), l && s && u.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, u.default.createElement("a", { href: (f = l, f.startsWith("https://") || f.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(f) ? f : `mailto:${f}`), onClick: () => et({ ...Gl, section: i, text: s }) }, s)), d && u.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, d.map((h) => u.default.createElement(_r, { key: `${h.label}-${h.href}`, ariaLabel: h.ariaLabel, color: h.color, href: h.href, label: h.label, onClick: h.onClick, cardTitle: i }))));
  var f;
};
gn.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, title: c().string.isRequired, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), cardLink: c().string }, gn.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const da = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? u.default.createElement("div", { className: "card-event-details" }, t && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(t) })), r && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(r) }))) : u.default.createElement(u.default.Fragment, null, t && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(t) }))), r && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("span", null, u.default.createElement("div", { dangerouslySetInnerHTML: at(r) })))));
da.propTypes = { eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string }, da.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const Xl = wt.div`
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
`, Zl = () => u.default.createElement(Xl, null, u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null)), Kl = wt.section``, No = (0, u.createContext)(null), Ro = ({ defaultProps: e, dataSource: t, noFeedText: r, renderHeader: n, renderBody: a, dataTransformer: i = (l) => l, dataFilter: o = (l) => l, maxItems: s }) => {
  const [{ data: l, loading: d, error: p }, f] = (() => {
    const [k, S] = (0, u.useState)(), [A, x] = (0, u.useState)(!1), [I, L] = (0, u.useState)(!1), [E, N] = (0, u.useState)("");
    return (0, u.useEffect)(() => {
      E && (() => {
        L(null), x(!0);
        try {
          fetch(E).then((_) => _.json()).then((_) => {
            S(_), x(!1);
          }).catch((_) => {
            L(_), x(!1);
          });
        } catch (_) {
          L(_);
        }
      })();
    }, [E]), [{ data: k, loading: A, error: I }, N];
  })(), [h, T] = (0, u.useState)([]), w = { ...e.dataSource, ...t };
  return (0, u.useEffect)(() => {
    f(w == null ? void 0 : w.url);
  }, [w == null ? void 0 : w.url]), (0, u.useEffect)(() => {
    const k = l == null ? void 0 : l.nodes.map(i), S = k == null ? void 0 : k.filter((A) => o(A, t == null ? void 0 : t.filters));
    T(s ? S == null ? void 0 : S.slice(0, s) : S);
  }, [l]), u.default.createElement(No.Provider, { value: { feeds: h } }, u.default.createElement(Kl, null, n, p ? u.default.createElement("span", null, "Error, try again!") : u.default.createElement(u.default.Fragment, null, d && !(h != null && h.length) && u.default.createElement("div", { className: "text-center mt-4" }, u.default.createElement(Zl, null)), h != null && h.length ? a : !d && u.default.createElement("p", { className: "text-center" }, r))));
};
Ro.propTypes = { renderHeader: c().element, renderBody: c().element, maxItems: c().number, dataTransformer: c().func, dataFilter: c().func, noFeedText: c().string };
const Ra = c().shape({ color: c().oneOf(["white", "dark"]), text: c().string }), La = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), text: c().string }), Ql = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), text: c().string, size: c().string }), Lo = c().shape({ url: c().string, filters: c().string }), Io = c().shape({ header: Ra, ctaButton: La, dataSource: Lo, maxItems: c().number }), Jl = wt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Po = ({ defaultProps: e, header: t, ctaButton: r }) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return u.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, u.default.createElement("div", { className: "col-sm-12 col-md-9" }, u.default.createElement("h2", { className: `text-${n.color}` }, n.text)), u.default.createElement(Jl, { className: "col-sm-12 col-md-3" }, u.default.createElement("a", { className: `btn btn-${a.color}`, href: a.url, onClick: () => et({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: a.text }) }, a.text)));
};
Po.propTypes = { defaultProps: Io, header: Ra, ctaButton: La };
const Mo = ({ children: e }) => u.default.createElement("div", { className: "row", "data-testid": "feed-body" }, u.default.createElement("div", { className: "col" }, e));
Mo.propTypes = { children: c().element };
const ec = wt.img`
  width: 100%;
`, Ia = (e) => {
  const t = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: r, subTitle: n, title: a, contents: i, contentsColor: o }) {
    const s = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, l = { black: "text-dark", white: "text-white", undefined: "" };
    let d = u.default.createElement(u.default.Fragment, null);
    return a && (d = u.default.createElement("h1", { style: { maxWidth: a.maxWidth || "" }, "data-testid": "hero-title" }, u.default.createElement("span", { className: be()({ [l[a.color]]: a.color, [s[a.highlightColor]]: a.highlightColor }) }, a.text))), a && n && (d = u.default.createElement("header", null, u.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, u.default.createElement("span", { className: be()({ [l[n.color]]: n.color, [s[n.highlightColor]]: n.highlightColor }) }, n.text)), d)), u.default.createElement("div", { className: be()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[r == null ? void 0 : r.size]]: r == null ? void 0 : r.size }) }, u.default.createElement("div", { className: "hero-overlay" }), u.default.createElement(ec, { className: "hero", src: r == null ? void 0 : r.url, alt: r == null ? void 0 : r.altText, "data-testid": "hero-image" }), d, i && u.default.createElement("div", { "data-testid": "hero-content", className: be()("content", { [l[o]]: o }) }, i.map((p, f) => u.default.createElement("p", { key: `content-${f}` }, p.text))));
  }(e), "story-hero": () => function({ image: r, title: n, contents: a }) {
    return console.log({ image: r, title: n, contents: a }), u.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${t}' is not supported by the 'Hero' component.`), null) }[t]();
};
Ia.propTypes = { type: c().oneOf(["heading-hero", "story-hero"]), image: Hs, title: $n, subTitle: $n, contents: c().arrayOf($n), contentsColor: c().string };
const ht = ({ dataId: e, isClickeable: t, disabled: r, pageLinkIcon: n, selectedPage: a, onClick: i, ellipses: o, ariaLabel: s, children: l, ariaDisabled: d }) => u.default.createElement("li", { className: be()("page-item", { disabled: r, active: a, elipses: o }) }, t ? u.default.createElement("button", { type: "button", "aria-label": s, className: be()("page-link", { "page-link-icon": n }), onClick: i, "data-testid": "page-link", "data-id": e, "aria-current": a ? "page" : null, "aria-disabled": d }, l, a && u.default.createElement("span", { className: "visually-hidden" }, "(current)")) : u.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, l));
ht.propTypes = { isClickeable: c().bool, disabled: c().bool, pageLinkIcon: c().bool, selectedPage: c().bool, dataId: c().string, onClick: c().func, children: c().node, ellipses: c().bool, ariaLabel: c().string, ariaDisabled: c().bool }, ht.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const tc = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, vn = ({ type: e, background: t, currentPage: r, totalPages: n, onChange: a }) => {
  const [i, o] = (0, u.useState)(null);
  (0, u.useEffect)(() => {
    o(r);
  }, [r]);
  const s = (l, d) => {
    const p = { first: 1, prev: i === 1 ? 1 : i - 1, next: i === n ? n : i + 1, last: n }[d] ?? d;
    o(p), ((f) => {
      et({ ...tc, text: `page ${f}` });
    })(p), a == null || a(l, p);
  };
  return u.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, u.default.createElement("ul", { className: be()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": t === "gray1", "uds-bg-gray": t === "gray2", "uds-bg-dark": t === "gray7" }) }, u.default.createElement(ht, { dataId: "prev", isClickeable: !0, disabled: i === 1, pageLinkIcon: !0, onClick: (l) => s(l, "prev"), ariaDisabled: i === 1, ariaLabel: "Previous Page" }), (() => {
    const l = gi(i === n - 1, 2, i === n ? 3 : 1), d = gi(i === 1, 3, i === 2 ? 2 : 1), p = [...vi(i - l, i, n), ...vi(i, i + 1 + d, n)];
    return u.default.createElement(u.default.Fragment, null, p[0] !== 1 && u.default.createElement(ht, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: i === 1, onClick: (f) => s(f, "first") }, "1"), p[0] > 2 && u.default.createElement(ht, { ellipses: !0 }, "..."), p.map((f) => u.default.createElement(ht, { ariaLabel: `Page ${f} of ${n}`, isClickeable: !0, key: f, selectedPage: i === f, onClick: (h) => s(h, f) }, f)), p[p.length - 1] < n - 1 && u.default.createElement(ht, { ellipses: !0 }, "..."), p[p.length - 1] !== n && u.default.createElement(ht, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: i === n, onClick: (f) => s(f, "last") }, n));
  })(), u.default.createElement(ht, { dataId: "next", isClickeable: !0, ariaDisabled: i === n, disabled: i === n, pageLinkIcon: !0, onClick: (l) => s(l, "next"), ariaLabel: "Next Page" })));
};
vn.propTypes = { type: c().oneOf(["default", "bordered"]).isRequired, background: c().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: c().number, totalPages: c().number, onChange: c().func.isRequired }, vn.defaultProps = { currentPage: 1, totalPages: 10 };
const Pi = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, $t = (e) => e === "small", Do = ({ size: e, image: t, imageAlt: r }) => $t(e) ? u.default.createElement("div", { className: "image-wrapper" }, u.default.createElement(Ht, { src: t, alt: r, fetchPriority: "high" })) : u.default.createElement(Ht, { src: t, alt: r, fetchPriority: "high" });
Do.propTypes = { size: c().oneOf(["small", "large"]), image: c().string.isRequired, imageAlt: c().string.isRequired };
const jo = ({ heading: e, citation: t }) => u.default.createElement("div", { className: "citation" }, u.default.createElement("h4", null, e), u.default.createElement("p", null, "— ", t));
jo.propTypes = { heading: c().string.isRequired, citation: c().string.isRequired };
const $o = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, i] = (0, u.useState)(!1), o = `info-layer-${Math.floor(1e5 * Math.random())}`, s = (l) => {
    l.type !== "click" && l.key !== "Enter" && l.key !== " " || (i(!a), et({ ...Pi, text: "Expand ranking", action: a ? "open" : "close", section: r }));
  };
  return u.default.createElement("div", { className: be()("info-layer", { active: a }), "data-testid": "info-layer", id: o }, u.default.createElement("div", { className: "content" }, u.default.createElement("div", { className: be()("header", { closed: $t(e) && !a }) }, $t(e) && u.default.createElement("p", { dangerouslySetInnerHTML: at(t) }), !$t(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: s, className: "btn-expand", type: "button", "aria-expanded": a, "aria-controls": o }, u.default.createElement("h4", null, r), u.default.createElement("i", { className: "fas fa-chevron-up" }))), $t(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: s, className: "btn btn-expand", type: "button", "aria-expanded": a, "aria-controls": o }, u.default.createElement("span", { className: "visually-hidden" }, r), u.default.createElement("i", { className: "fas fa-chevron-up" })))), !$t(e) && u.default.createElement("p", { dangerouslySetInnerHTML: at(t) }), n && u.default.createElement("a", { href: n, className: "read-more", onClick: () => {
    et({ ...Pi, section: r, text: "read more" });
  } }, "Read more ", u.default.createElement("span", { className: "visually-hidden" }, r), u.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
$o.propTypes = { imageSize: c().oneOf(["small", "large"]), body: c().string.isRequired, heading: c().string.isRequired, readMoreLink: c().string };
const Pa = ({ imageSize: e = "large", image: t, imageAlt: r, heading: n, body: a, readMoreLink: i = "", citation: o }) => u.default.createElement("div", { className: be()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, u.default.createElement(Do, { size: e, image: t, imageAlt: r }), $t(e) && u.default.createElement(jo, { heading: n, citation: o }), u.default.createElement($o, { imageSize: e, body: a, heading: n, readMoreLink: i }));
Pa.propTypes = { imageSize: c().oneOf(["small", "large"]).isRequired, image: c().string.isRequired, imageAlt: c().string.isRequired, heading: c().string.isRequired, body: c().string.isRequired, readMoreLink: c().string, citation: c().string };
const rc = wt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, zo = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => u.default.createElement(rc, null, !e && u.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: r, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Previous")), !t && u.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Next")));
zo.propTypes = { hidePrev: c().bool, hideNext: c().bool, clickPrev: c().func.isRequired, clickNext: c().func.isRequired };
const Fo = (0, u.forwardRef)(function(e, t) {
  const { id: r, selected: n, title: a, selectTab: i, leftKeyPressed: o, rightKeyPressed: s, icon: l } = e, d = (0, u.useRef)(null);
  return (0, u.useImperativeHandle)(t, () => ({ focus() {
    d.current.focus();
  }, scrollIntoView() {
    var h, T, w, k, S, A, x;
    const p = ((h = d.current) == null ? void 0 : h.offsetWidth) / 2 + d.current.offsetLeft, f = ((w = (T = d.current) == null ? void 0 : T.offsetParent) == null ? void 0 : w.scrollLeft) + ((S = (k = d.current) == null ? void 0 : k.offsetParent) == null ? void 0 : S.offsetWidth) / 2;
    (x = (A = d.current) == null ? void 0 : A.offsetParent) == null || x.scrollBy({ left: p - f });
  } }), []), u.default.createElement("a", { ref: d, className: "nav-item nav-link " + (n ? "active" : ""), id: r, href: `#nav-${r}`, role: "tab", "aria-controls": `nav-${r}`, "aria-selected": n, onClick: (p) => i(p, r, a), onKeyDown: (p) => {
    p.keyCode === 37 ? (p.preventDefault(), o()) : p.keyCode === 39 && (p.preventDefault(), s());
  }, tabIndex: n ? "" : "-1" }, a, " ", l && u.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }));
});
Fo.propTypes = { id: c().string.isRequired, selected: c().bool.isRequired, title: c().string.isRequired, selectTab: c().func.isRequired, leftKeyPressed: c().func.isRequired, rightKeyPressed: c().func.isRequired, icon: c().arrayOf(c().string) };
const Ho = ({ id: e, bgColor: t, selected: r, children: n }) => r && u.default.createElement("div", { className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
Ho.propTypes = { id: c().string.isRequired, bgColor: c().string, selected: c().bool, children: c().oneOfType([c().array, c().element]) };
const Uo = ({ initialTab: e = "", children: t, bgColor: r = "", onTabChange: n = () => {
} }) => {
  const a = u.default.Children.toArray(t), i = (0, u.useRef)(!1), [o, s] = (0, u.useState)(e && e !== "null" ? e : a[0].props.id), l = (0, u.useRef)(null), [d, p] = function() {
    const N = (0, u.useRef)({}), _ = (0, u.useCallback)((W) => (le) => {
      N.current[W] = le;
    }, []);
    return [N, _];
  }(), f = (N) => {
    var _;
    n(N), (_ = d.current[N]) == null || _.focus(), s(N);
  }, [h, T] = (0, u.useState)(0), [w, k] = (0, u.useState)();
  (0, u.useEffect)(() => {
    const N = () => {
      T(l.current.scrollLeft);
    };
    return l.current.addEventListener("scroll", N), N(), () => {
      l.current && l.current.removeEventListener("scroll", N);
    };
  }, [w]), (0, u.useEffect)(() => {
    const N = () => {
      k(l.current.scrollWidth - l.current.offsetWidth);
    };
    return window.addEventListener("resize", N), N(), () => {
      l.current && window.removeEventListener("resize", N);
    };
  }, []), (0, u.useEffect)(() => {
    var N;
    (N = d.current[o]) == null || N.scrollIntoView();
  }, [o]), (0, u.useEffect)(() => {
    i.current && e && e !== "null" && o !== e && s(e);
  }, [e]), (0, u.useEffect)(() => {
    i.current = !0;
  }, []);
  const S = (N) => {
    et({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: N });
  }, A = a.map((N) => u.default.cloneElement(N, { bgColor: r, selected: o === N.props.id })), x = (N) => {
    const _ = l.current, W = _.scrollWidth - _.clientWidth;
    let le = _.scrollLeft + 200 * N;
    le = Math.max(0, Math.min(W, le)), _.scrollTo({ left: le, behavior: "smooth" });
  }, I = (N, _, W) => {
    et({ event: "link", action: "click", name: "onclick", type: "internal link", text: W }), N.preventDefault(), f(_);
  }, L = (N = !0) => {
    const _ = a.length, W = N ? 1 : -1, le = a.findIndex((ae) => ae.props.id === o), we = a[(_ + le + W) % _].props.id;
    f(we);
  };
  let E = "uds-tabbed-panels";
  return r === "bg-dark" && (E += " uds-tabbed-panels-dark"), u.default.createElement("div", { className: r }, u.default.createElement("nav", { className: E }, u.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: l }, a.map((N, _) => u.default.createElement(Fo, { ref: p(N.props.id), id: N.props.id, title: N.props.title, selected: o === N.props.id, selectTab: I, key: N.props.id, leftKeyPressed: () => L(!1), rightKeyPressed: () => L(), icon: N.props.icon, index: _ }))), u.default.createElement(zo, { hidePrev: h <= 0, hideNext: h >= w, clickPrev: () => {
    x(-1), S("left chevron");
  }, clickNext: () => {
    x(1), S("right chevron");
  } })), u.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, A));
};
Uo.propTypes = { initialTab: c().string, children: c().arrayOf(c().element).isRequired, bgColor: c().string, onTabChange: c().func };
const Ma = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, i;
  return u.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${en(n.containerCssClass)}` }, e && u.default.createElement(Ht, { src: e, alt: t, dataTestId: "testimonial-image", fetchPriority: "high" }), u.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, u.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), u.default.createElement("blockquote", { style: { paddingLeft: 0 } }, r.title && u.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, u.default.createElement("span", { className: en(n.titleCssClass) }, r.title)), r.content && u.default.createElement("p", { className: en(n.contentCssClass), "data-testid": "testimonial-content" }, r.content), (!!((a = r.cite) != null && a.name) || !!((i = r.cite) != null && i.description)) && u.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, u.default.createElement("cite", { className: "name" }, r.cite.name), r.cite && u.default.createElement("cite", { className: "description" }, r.cite.description))));
};
Ma.propTypes = { quote: c().shape({ title: c().string, content: c().string, cite: c().shape({ name: c().string, description: c().string }) }).isRequired, imageSource: c().string, imageAltText: c().string, itemStyle: c().shape({ containerCssClass: c().arrayOf(c().string), titleCssClass: c().arrayOf(c().string), contentCssClass: c().arrayOf(c().string) }) };
const nc = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, Da = (e) => {
  const { type: t = "video", url: r = "", vttUrl: n, title: a = "", caption: i, className: o, controls: s = !0 } = e;
  return t === "youtube" ? (({ title: l = "", caption: d, url: p = "", className: f }) => u.default.createElement("div", { className: be()(`uds-video-container ${f}`, { "uds-video-with-caption": d }) }, u.default.createElement("div", { className: "uds-video-player youtube-video" }, u.default.createElement("iframe", { title: l, src: p })), d && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, d))))({ url: r, title: a, caption: i, className: o }) : (({ url: l = "", vttUrl: d, caption: p, title: f = "", className: h, controls: T = !0 }) => {
    const w = (0, u.useRef)(null);
    return u.default.createElement("div", { className: be()(`uds-video-container ${h}`, { "uds-video-with-caption": p }) }, u.default.createElement("div", { className: "uds-video-player" }, u.default.createElement("video", { ref: w, title: f, onClick: () => {
      et({ ...nc, section: f });
    }, playsInline: !0, controls: T || !0 }, u.default.createElement("source", { src: l }), u.default.createElement("track", { src: d, kind: "captions", srcLang: "en", label: "english_captions" }))), p && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, p)));
  })({ url: r, vttUrl: n, title: a, caption: i, className: o, controls: s });
};
Da.propTypes = { type: c().oneOf(["video", "youtube"]), url: c().string, vttUrl: c().string, title: c().string, className: c().string, caption: c().string, controls: c().bool };
var ac = Ne(873);
const tt = (e, t, r) => {
  (0, ac.H)(r).render(u.default.createElement(e, t));
}, ic = ({ targetSelector: e, props: t }) => tt(Oa, t, document.querySelector(e)), oc = ({ targetSelector: e, props: t }) => tt(Na, t, document.querySelector(e)), sc = ({ targetSelector: e, props: t }) => tt(pn, t, document.querySelector(e)), lc = ({ targetSelector: e, props: t }) => tt(yt, t, document.querySelector(e)), cc = ({ targetSelector: e, props: t }) => tt(mn, t, document.querySelector(e)), uc = ({ targetSelector: e, props: t }) => tt(_r, t, document.querySelector(e)), dc = ({ targetSelector: e, props: t }) => tt(hn, t, document.querySelector(e)), fc = ({ targetSelector: e, props: t }) => tt(Ia, t, document.querySelector(e)), pc = ({ targetSelector: e, props: t }) => tt(Ht, t, document.querySelector(e)), mc = ({ targetSelector: e, props: t }) => tt(Pa, t, document.querySelector(e)), hc = ({ targetSelector: e, props: t }) => tt(vn, t, document.querySelector(e)), gc = ({ targetSelector: e, props: t }) => tt(Ma, t, document.querySelector(e)), vc = ({ targetSelector: e, props: t }) => tt(Da, t, document.querySelector(e));
var Bo = or.Zp, yc = or.TR, bc = or.Pb, ja = or.Ur, wc = or._Q;
function $a({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: n = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: n
  };
}
var Wo = { exports: {} }, Un = { exports: {} }, ve = {};
var Mi;
function kc() {
  if (Mi) return ve;
  Mi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function I(E) {
    if (typeof E == "object" && E !== null) {
      var N = E.$$typeof;
      switch (N) {
        case t:
          switch (E = E.type, E) {
            case l:
            case d:
            case n:
            case i:
            case a:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case s:
                case p:
                case w:
                case T:
                case o:
                  return E;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function L(E) {
    return I(E) === d;
  }
  return ve.AsyncMode = l, ve.ConcurrentMode = d, ve.ContextConsumer = s, ve.ContextProvider = o, ve.Element = t, ve.ForwardRef = p, ve.Fragment = n, ve.Lazy = w, ve.Memo = T, ve.Portal = r, ve.Profiler = i, ve.StrictMode = a, ve.Suspense = f, ve.isAsyncMode = function(E) {
    return L(E) || I(E) === l;
  }, ve.isConcurrentMode = L, ve.isContextConsumer = function(E) {
    return I(E) === s;
  }, ve.isContextProvider = function(E) {
    return I(E) === o;
  }, ve.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, ve.isForwardRef = function(E) {
    return I(E) === p;
  }, ve.isFragment = function(E) {
    return I(E) === n;
  }, ve.isLazy = function(E) {
    return I(E) === w;
  }, ve.isMemo = function(E) {
    return I(E) === T;
  }, ve.isPortal = function(E) {
    return I(E) === r;
  }, ve.isProfiler = function(E) {
    return I(E) === i;
  }, ve.isStrictMode = function(E) {
    return I(E) === a;
  }, ve.isSuspense = function(E) {
    return I(E) === f;
  }, ve.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === d || E === i || E === a || E === f || E === h || typeof E == "object" && E !== null && (E.$$typeof === w || E.$$typeof === T || E.$$typeof === o || E.$$typeof === s || E.$$typeof === p || E.$$typeof === S || E.$$typeof === A || E.$$typeof === x || E.$$typeof === k);
  }, ve.typeOf = I, ve;
}
var Di;
function qo() {
  return Di || (Di = 1, Un.exports = kc()), Un.exports;
}
var Bn, ji;
function Sc() {
  if (ji) return Bn;
  ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bn = e, Bn;
}
var Wn, $i;
function Ec() {
  if ($i) return Wn;
  $i = 1;
  var e = Sc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Wn = function() {
    function n(o, s, l, d, p, f) {
      if (f !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, Wn;
}
Wo.exports = Ec()();
var Tc = Wo.exports;
const m = /* @__PURE__ */ Aa(Tc);
var Vo = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (i = a(i, n(s)));
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
      var o = "";
      for (var s in i)
        t.call(i, s) && i[s] && (o = a(o, s));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Vo);
var xc = Vo.exports;
const Cr = /* @__PURE__ */ Aa(xc), Ac = (e) => (e || []).join(" ");
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function fa(e, t) {
  return fa = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, fa(e, t);
}
function Oc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function nn(e, t, r) {
  return Oc() ? nn = Reflect.construct : nn = function(a, i, o) {
    var s = [null];
    s.push.apply(s, i);
    var l = Function.bind.apply(a, s), d = new l();
    return o && fa(d, o.prototype), d;
  }, nn.apply(null, arguments);
}
function ct(e) {
  return _c(e) || Cc(e) || Nc(e) || Rc();
}
function _c(e) {
  if (Array.isArray(e)) return pa(e);
}
function Cc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Nc(e, t) {
  if (e) {
    if (typeof e == "string") return pa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pa(e, t);
  }
}
function pa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Lc = Object.hasOwnProperty, zi = Object.setPrototypeOf, Ic = Object.isFrozen, Pc = Object.getPrototypeOf, Mc = Object.getOwnPropertyDescriptor, Xe = Object.freeze, it = Object.seal, Dc = Object.create, Yo = typeof Reflect < "u" && Reflect, yn = Yo.apply, ma = Yo.construct;
yn || (yn = function(t, r, n) {
  return t.apply(r, n);
});
Xe || (Xe = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
ma || (ma = function(t, r) {
  return nn(t, ct(r));
});
var jc = ot(Array.prototype.forEach), Fi = ot(Array.prototype.pop), Er = ot(Array.prototype.push), an = ot(String.prototype.toLowerCase), qn = ot(String.prototype.toString), Hi = ot(String.prototype.match), lt = ot(String.prototype.replace), $c = ot(String.prototype.indexOf), zc = ot(String.prototype.trim), Be = ot(RegExp.prototype.test), Vn = Fc(TypeError);
function ot(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return yn(e, t, n);
  };
}
function Fc(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ma(e, r);
  };
}
function de(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : an, zi && zi(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var o = r(i);
      o !== i && (Ic(t) || (t[a] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function Dt(e) {
  var t = Dc(null), r;
  for (r in e)
    yn(Lc, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Yr(e, t) {
  for (; e !== null; ) {
    var r = Mc(e, t);
    if (r) {
      if (r.get)
        return ot(r.get);
      if (typeof r.value == "function")
        return ot(r.value);
    }
    e = Pc(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Ui = Xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Yn = Xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gn = Xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hc = Xe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Xn = Xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Uc = Xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Bi = Xe(["#text"]), Wi = Xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Zn = Xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), qi = Xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Gr = Xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bc = it(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wc = it(/<%[\w\W]*|[\w\W]*%>/gm), qc = it(/\${[\w\W]*}/gm), Vc = it(/^data-[\-\w.\u00B7-\uFFFF]/), Yc = it(/^aria-[\-\w]+$/), Gc = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Xc = it(/^(?:\w+script|data):/i), Zc = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Kc = it(/^html$/i), Qc = it(/^[a-z][.\w]*(-[.\w]+)+$/i), Jc = function() {
  return typeof window > "u" ? null : window;
}, eu = function(t, r) {
  if (At(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML: function(s) {
        return s;
      },
      createScriptURL: function(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function Go() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jc(), t = function(b) {
    return Go(b);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, o = e.Node, s = e.Element, l = e.NodeFilter, d = e.NamedNodeMap, p = d === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : d, f = e.HTMLFormElement, h = e.DOMParser, T = e.trustedTypes, w = s.prototype, k = Yr(w, "cloneNode"), S = Yr(w, "nextSibling"), A = Yr(w, "childNodes"), x = Yr(w, "parentNode");
  if (typeof i == "function") {
    var I = n.createElement("template");
    I.content && I.content.ownerDocument && (n = I.content.ownerDocument);
  }
  var L = eu(T, r), E = L ? L.createHTML("") : "", N = n, _ = N.implementation, W = N.createNodeIterator, le = N.createDocumentFragment, we = N.getElementsByTagName, ae = r.importNode, ee = {};
  try {
    ee = Dt(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var re = {};
  t.isSupported = typeof x == "function" && _ && _.createHTMLDocument !== void 0 && ee !== 9;
  var X = Bc, he = Wc, De = qc, pe = Vc, ke = Yc, qe = Xc, Q = Zc, q = Qc, C = Gc, O = null, y = de({}, [].concat(ct(Ui), ct(Yn), ct(Gn), ct(Xn), ct(Bi))), P = null, g = de({}, [].concat(ct(Wi), ct(Zn), ct(qi), ct(Gr))), M = Object.seal(Object.create(null, {
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
  })), R = null, ie = null, te = !0, Y = !0, Z = !1, ne = !0, fe = !1, oe = !0, se = !1, K = !1, ue = !1, je = !1, H = !1, $ = !1, V = !0, F = !1, z = "user-content-", ce = !0, Te = !1, He = {}, Fe = null, kt = de({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), lr = null, Ir = de({}, ["audio", "video", "img", "source", "image", "track"]), cr = null, Pr = de({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ut = "http://www.w3.org/1998/Math/MathML", dt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml", St = st, ur = !1, Lt = null, dr = de({}, [ut, dt, st], qn), $e, fr = ["application/xhtml+xml", "text/html"], Bt = "text/html", Re, Et = null, Nn = n.createElement("form"), Mr = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, pr = function(b) {
    Et && Et === b || ((!b || At(b) !== "object") && (b = {}), b = Dt(b), $e = // eslint-disable-next-line unicorn/prefer-includes
    fr.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? $e = Bt : $e = b.PARSER_MEDIA_TYPE, Re = $e === "application/xhtml+xml" ? qn : an, O = "ALLOWED_TAGS" in b ? de({}, b.ALLOWED_TAGS, Re) : y, P = "ALLOWED_ATTR" in b ? de({}, b.ALLOWED_ATTR, Re) : g, Lt = "ALLOWED_NAMESPACES" in b ? de({}, b.ALLOWED_NAMESPACES, qn) : dr, cr = "ADD_URI_SAFE_ATTR" in b ? de(
      Dt(Pr),
      // eslint-disable-line indent
      b.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : Pr, lr = "ADD_DATA_URI_TAGS" in b ? de(
      Dt(Ir),
      // eslint-disable-line indent
      b.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : Ir, Fe = "FORBID_CONTENTS" in b ? de({}, b.FORBID_CONTENTS, Re) : kt, R = "FORBID_TAGS" in b ? de({}, b.FORBID_TAGS, Re) : {}, ie = "FORBID_ATTR" in b ? de({}, b.FORBID_ATTR, Re) : {}, He = "USE_PROFILES" in b ? b.USE_PROFILES : !1, te = b.ALLOW_ARIA_ATTR !== !1, Y = b.ALLOW_DATA_ATTR !== !1, Z = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, je = b.RETURN_DOM || !1, H = b.RETURN_DOM_FRAGMENT || !1, $ = b.RETURN_TRUSTED_TYPE || !1, ue = b.FORCE_BODY || !1, V = b.SANITIZE_DOM !== !1, F = b.SANITIZE_NAMED_PROPS || !1, ce = b.KEEP_CONTENT !== !1, Te = b.IN_PLACE || !1, C = b.ALLOWED_URI_REGEXP || C, St = b.NAMESPACE || st, M = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Mr(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Mr(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (Y = !1), H && (je = !0), He && (O = de({}, ct(Bi)), P = [], He.html === !0 && (de(O, Ui), de(P, Wi)), He.svg === !0 && (de(O, Yn), de(P, Zn), de(P, Gr)), He.svgFilters === !0 && (de(O, Gn), de(P, Zn), de(P, Gr)), He.mathMl === !0 && (de(O, Xn), de(P, qi), de(P, Gr))), b.ADD_TAGS && (O === y && (O = Dt(O)), de(O, b.ADD_TAGS, Re)), b.ADD_ATTR && (P === g && (P = Dt(P)), de(P, b.ADD_ATTR, Re)), b.ADD_URI_SAFE_ATTR && de(cr, b.ADD_URI_SAFE_ATTR, Re), b.FORBID_CONTENTS && (Fe === kt && (Fe = Dt(Fe)), de(Fe, b.FORBID_CONTENTS, Re)), ce && (O["#text"] = !0), se && de(O, ["html", "head", "body"]), O.table && (de(O, ["tbody"]), delete R.tbody), Xe && Xe(b), Et = b);
  }, mr = de({}, ["mi", "mo", "mn", "ms", "mtext"]), Ke = de({}, ["annotation-xml"]), Tt = de({}, ["title", "style", "font", "a", "script"]), xe = de({}, Yn);
  de(xe, Gn), de(xe, Hc);
  var It = de({}, Xn);
  de(It, Uc);
  var hr = function(b) {
    var j = x(b);
    (!j || !j.tagName) && (j = {
      namespaceURI: St,
      tagName: "template"
    });
    var B = an(b.tagName), me = an(j.tagName);
    return Lt[b.namespaceURI] ? b.namespaceURI === dt ? j.namespaceURI === st ? B === "svg" : j.namespaceURI === ut ? B === "svg" && (me === "annotation-xml" || mr[me]) : !!xe[B] : b.namespaceURI === ut ? j.namespaceURI === st ? B === "math" : j.namespaceURI === dt ? B === "math" && Ke[me] : !!It[B] : b.namespaceURI === st ? j.namespaceURI === dt && !Ke[me] || j.namespaceURI === ut && !mr[me] ? !1 : !It[B] && (Tt[B] || !xe[B]) : !!($e === "application/xhtml+xml" && Lt[b.namespaceURI]) : !1;
  }, Ve = function(b) {
    Er(t.removed, {
      element: b
    });
    try {
      b.parentNode.removeChild(b);
    } catch {
      try {
        b.outerHTML = E;
      } catch {
        b.remove();
      }
    }
  }, Wt = function(b, j) {
    try {
      Er(t.removed, {
        attribute: j.getAttributeNode(b),
        from: j
      });
    } catch {
      Er(t.removed, {
        attribute: null,
        from: j
      });
    }
    if (j.removeAttribute(b), b === "is" && !P[b])
      if (je || H)
        try {
          Ve(j);
        } catch {
        }
      else
        try {
          j.setAttribute(b, "");
        } catch {
        }
  }, Dr = function(b) {
    var j, B;
    if (ue)
      b = "<remove></remove>" + b;
    else {
      var me = Hi(b, /^[\r\n\t ]+/);
      B = me && me[0];
    }
    $e === "application/xhtml+xml" && St === st && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    var Ue = L ? L.createHTML(b) : b;
    if (St === st)
      try {
        j = new h().parseFromString(Ue, $e);
      } catch {
      }
    if (!j || !j.documentElement) {
      j = _.createDocument(St, "template", null);
      try {
        j.documentElement.innerHTML = ur ? E : Ue;
      } catch {
      }
    }
    var Oe = j.body || j.documentElement;
    return b && B && Oe.insertBefore(n.createTextNode(B), Oe.childNodes[0] || null), St === st ? we.call(j, se ? "html" : "body")[0] : se ? j.documentElement : Oe;
  }, jr = function(b) {
    return W.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, gr = function(b) {
    return b instanceof f && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof p) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Pt = function(b) {
    return At(o) === "object" ? b instanceof o : b && At(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
  }, Qe = function(b, j, B) {
    re[b] && jc(re[b], function(me) {
      me.call(t, j, B, Et);
    });
  }, Le = function(b) {
    var j;
    if (Qe("beforeSanitizeElements", b, null), gr(b) || Be(/[\u0080-\uFFFF]/, b.nodeName))
      return Ve(b), !0;
    var B = Re(b.nodeName);
    if (Qe("uponSanitizeElement", b, {
      tagName: B,
      allowedTags: O
    }), b.hasChildNodes() && !Pt(b.firstElementChild) && (!Pt(b.content) || !Pt(b.content.firstElementChild)) && Be(/<[/\w]/g, b.innerHTML) && Be(/<[/\w]/g, b.textContent) || B === "select" && Be(/<template/i, b.innerHTML) || b.nodeType === 7 || oe && b.nodeType === 8 && Be(/<[/\w]/g, b.data))
      return Ve(b), !0;
    if (!O[B] || R[B]) {
      if (!R[B] && Ie(B) && (M.tagNameCheck instanceof RegExp && Be(M.tagNameCheck, B) || M.tagNameCheck instanceof Function && M.tagNameCheck(B)))
        return !1;
      if (ce && !Fe[B]) {
        var me = x(b) || b.parentNode, Ue = A(b) || b.childNodes;
        if (Ue && me)
          for (var Oe = Ue.length, Pe = Oe - 1; Pe >= 0; --Pe) {
            var Ye = k(Ue[Pe], !0);
            Ye.__removalCount = (b.__removalCount || 0) + 1, me.insertBefore(Ye, S(b));
          }
      }
      return Ve(b), !0;
    }
    return b instanceof s && !hr(b) || (B === "noscript" || B === "noembed" || B === "noframes") && Be(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ve(b), !0) : (fe && b.nodeType === 3 && (j = b.textContent, j = lt(j, X, " "), j = lt(j, he, " "), j = lt(j, De, " "), b.textContent !== j && (Er(t.removed, {
      element: b.cloneNode()
    }), b.textContent = j)), Qe("afterSanitizeElements", b, null), !1);
  }, vr = function(b, j, B) {
    if (V && (j === "id" || j === "name") && (B in n || B in Nn))
      return !1;
    if (!(Y && !ie[j] && Be(pe, j))) {
      if (!(te && Be(ke, j))) {
        if (!P[j] || ie[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ie(b) && (M.tagNameCheck instanceof RegExp && Be(M.tagNameCheck, b) || M.tagNameCheck instanceof Function && M.tagNameCheck(b)) && (M.attributeNameCheck instanceof RegExp && Be(M.attributeNameCheck, j) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(j)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && Be(M.tagNameCheck, B) || M.tagNameCheck instanceof Function && M.tagNameCheck(B)))
          ) return !1;
        } else if (!cr[j]) {
          if (!Be(C, lt(B, Q, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && b !== "script" && $c(B, "data:") === 0 && lr[b])) {
              if (!(Z && !Be(qe, lt(B, Q, "")))) {
                if (B)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ie = function(b) {
    return b !== "annotation-xml" && Hi(b, q);
  }, yr = function(b) {
    var j, B, me, Ue;
    Qe("beforeSanitizeAttributes", b, null);
    var Oe = b.attributes;
    if (Oe) {
      var Pe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: P
      };
      for (Ue = Oe.length; Ue--; ) {
        j = Oe[Ue];
        var Ye = j, _e = Ye.name, Mt = Ye.namespaceURI;
        if (B = _e === "value" ? j.value : zc(j.value), me = Re(_e), Pe.attrName = me, Pe.attrValue = B, Pe.keepAttr = !0, Pe.forceKeepAttr = void 0, Qe("uponSanitizeAttribute", b, Pe), B = Pe.attrValue, !Pe.forceKeepAttr && (Wt(_e, b), !!Pe.keepAttr)) {
          if (!ne && Be(/\/>/i, B)) {
            Wt(_e, b);
            continue;
          }
          fe && (B = lt(B, X, " "), B = lt(B, he, " "), B = lt(B, De, " "));
          var ft = Re(b.nodeName);
          if (vr(ft, me, B)) {
            if (F && (me === "id" || me === "name") && (Wt(_e, b), B = z + B), oe && Be(/((--!?|])>)|<\/(style|title)/i, B)) {
              Wt(_e, b);
              continue;
            }
            if (L && At(T) === "object" && typeof T.getAttributeType == "function" && !Mt)
              switch (T.getAttributeType(ft, me)) {
                case "TrustedHTML": {
                  B = L.createHTML(B);
                  break;
                }
                case "TrustedScriptURL": {
                  B = L.createScriptURL(B);
                  break;
                }
              }
            try {
              Mt ? b.setAttributeNS(Mt, _e, B) : b.setAttribute(_e, B), gr(b) ? Ve(b) : Fi(t.removed);
            } catch {
            }
          }
        }
      }
      Qe("afterSanitizeAttributes", b, null);
    }
  }, Ae = function J(b) {
    var j, B = jr(b);
    for (Qe("beforeSanitizeShadowDOM", b, null); j = B.nextNode(); )
      Qe("uponSanitizeShadowNode", j, null), !Le(j) && (j.content instanceof a && J(j.content), yr(j));
    Qe("afterSanitizeShadowDOM", b, null);
  };
  return t.sanitize = function(J) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j, B, me, Ue, Oe;
    if (ur = !J, ur && (J = "<!-->"), typeof J != "string" && !Pt(J))
      if (typeof J.toString == "function") {
        if (J = J.toString(), typeof J != "string")
          throw Vn("dirty is not a string, aborting");
      } else
        throw Vn("toString is not a function");
    if (!t.isSupported) {
      if (At(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof J == "string")
          return e.toStaticHTML(J);
        if (Pt(J))
          return e.toStaticHTML(J.outerHTML);
      }
      return J;
    }
    if (K || pr(b), t.removed = [], typeof J == "string" && (Te = !1), Te) {
      if (J.nodeName) {
        var Pe = Re(J.nodeName);
        if (!O[Pe] || R[Pe])
          throw Vn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (J instanceof o)
      j = Dr("<!---->"), B = j.ownerDocument.importNode(J, !0), B.nodeType === 1 && B.nodeName === "BODY" || B.nodeName === "HTML" ? j = B : j.appendChild(B);
    else {
      if (!je && !fe && !se && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return L && $ ? L.createHTML(J) : J;
      if (j = Dr(J), !j)
        return je ? null : $ ? E : "";
    }
    j && ue && Ve(j.firstChild);
    for (var Ye = jr(Te ? J : j); me = Ye.nextNode(); )
      me.nodeType === 3 && me === Ue || Le(me) || (me.content instanceof a && Ae(me.content), yr(me), Ue = me);
    if (Ue = null, Te)
      return J;
    if (je) {
      if (H)
        for (Oe = le.call(j.ownerDocument); j.firstChild; )
          Oe.appendChild(j.firstChild);
      else
        Oe = j;
      return (P.shadowroot || P.shadowrootmod) && (Oe = ae.call(r, Oe, !0)), Oe;
    }
    var _e = se ? j.outerHTML : j.innerHTML;
    return se && O["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Be(Kc, j.ownerDocument.doctype.name) && (_e = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + _e), fe && (_e = lt(_e, X, " "), _e = lt(_e, he, " "), _e = lt(_e, De, " ")), L && $ ? L.createHTML(_e) : _e;
  }, t.setConfig = function(J) {
    pr(J), K = !0;
  }, t.clearConfig = function() {
    Et = null, K = !1;
  }, t.isValidAttribute = function(J, b, j) {
    Et || pr({});
    var B = Re(J), me = Re(b);
    return vr(B, me, j);
  }, t.addHook = function(J, b) {
    typeof b == "function" && (re[J] = re[J] || [], Er(re[J], b));
  }, t.removeHook = function(J) {
    if (re[J])
      return Fi(re[J]);
  }, t.removeHooks = function(J) {
    re[J] && (re[J] = []);
  }, t.removeAllHooks = function() {
    re = {};
  }, t;
}
var tu = Go();
const Zt = (e) => ({ __html: tu.sanitize(e) });
m.shape({
  event: m.string,
  action: m.string,
  name: m.string,
  region: m.string,
  section: m.string,
  component: m.string,
  type: m.string,
  text: m.string
});
const Jt = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: o = "",
  component: s = ""
}) => {
  const { dataLayer: l } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: o.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: s.toLowerCase()
  };
  l && l.push(d);
}, ru = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, za = ({
  label: e,
  cardTitle: t,
  ariaLabel: r,
  block: n,
  color: a,
  disabled: i,
  element: o,
  href: s,
  icon: l,
  innerRef: d,
  onClick: p,
  size: f,
  classes: h,
  target: T,
  ...w
}) => {
  const k = Cr("btn", {
    [`btn-${a}`]: !0,
    "btn-md": f === "small",
    "btn-sm": f === "xsmall",
    "btn-block": n,
    disabled: i
  });
  let S = o;
  s && o === "button" && (S = "a");
  const A = (x) => {
    Jt({ ...ru, text: x, section: t }), p == null || p();
  };
  return /* @__PURE__ */ D.jsxs(
    S,
    {
      type: S === "button" && p ? "button" : void 0,
      ...w,
      className: Cr(h) || k,
      href: s,
      ref: d,
      onClick: () => A(e),
      "aria-label": r,
      target: S === "a" ? T : null,
      children: [
        l && /* @__PURE__ */ D.jsx("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }),
        e
      ]
    }
  );
};
za.propTypes = {
  /**
   * Button label
   */
  label: m.string,
  /**
   * Card title
   */
  cardTitle: m.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: m.string,
  /**
    Render button as a block-button?
  */
  block: m.bool,
  /**
    Button background color
  */
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: m.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: m.oneOfType([
    m.func,
    m.string,
    m.shape({ $$typeof: m.symbol, render: m.func }),
    m.arrayOf(
      m.oneOfType([
        m.func,
        m.string,
        m.shape({ $$typeof: m.symbol, render: m.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: m.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: m.arrayOf(m.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: m.oneOfType([
    m.object,
    m.func,
    m.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: m.func,
  /**
    Button size
  */
  size: m.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: m.arrayOf(m.string),
  /**
   Link target type
   */
  target: m.oneOf(["_blank", "_self", "_top", "_parent"])
};
za.defaultProps = {
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
const nu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Fa = ({
  label: e,
  cardTitle: t,
  ariaLabel: r,
  color: n,
  disabled: a,
  element: i,
  innerRef: o,
  href: s,
  onClick: l,
  ...d
}) => {
  const p = Cr("btn", "btn-tag", {
    "btn-tag-alt-white": n === "white",
    "btn-tag-alt-gray": n === "gray",
    "btn-tag-alt-dark": n === "dark",
    disabled: a
  });
  let f = i;
  s && i === "button" && (f = "a");
  const h = (T) => {
    Jt({ ...nu, text: T, section: t }), l == null || l();
  };
  return (
    // @ts-ignore
    /* @__PURE__ */ D.jsx(
      f,
      {
        type: f === "button" && l ? "button" : void 0,
        ...d,
        className: p,
        href: s,
        ref: o,
        onClick: () => h(e),
        "aria-label": r,
        children: e
      }
    )
  );
};
Fa.propTypes = {
  /**
    Button tag label
  */
  label: m.string,
  /**
   * Card title
   */
  cardTitle: m.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: m.string,
  /**
    Button background color
  */
  color: m.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: m.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: m.oneOfType([
    m.func,
    m.string,
    m.shape({ $$typeof: m.symbol, render: m.func }),
    m.arrayOf(
      m.oneOfType([
        m.func,
        m.string,
        m.shape({ $$typeof: m.symbol, render: m.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: m.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: m.oneOfType([
    m.object,
    m.func,
    m.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: m.func
};
Fa.defaultProps = {
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
const Xo = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: i,
  fetchPriority: o = "auto",
  width: s,
  height: l,
  cardLink: d,
  title: p,
  caption: f,
  captionTitle: h,
  border: T,
  dropShadow: w
}) => {
  const k = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: o,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Ac(r) },
    ...i && { "data-testid": i },
    ...s && { width: s },
    ...l && { height: l }
  }, S = Cr("uds-img", {
    borderless: !T,
    "uds-img-drop-shadow": w
  }), A = (I) => {
    const L = I ? `${k.className} ${I}` : k.className;
    return d ? /* @__PURE__ */ D.jsxs("a", { href: d, children: [
      /* @__PURE__ */ D.jsx("img", { ...k, className: L }),
      /* @__PURE__ */ D.jsx("span", { className: "visually-hidden", children: p })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ D.jsx("img", { ...k, className: L })
    );
  }, x = () => /* @__PURE__ */ D.jsx("div", { className: S, children: /* @__PURE__ */ D.jsxs("figure", { className: "figure uds-figure", children: [
    A(),
    f && /* @__PURE__ */ D.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      h && /* @__PURE__ */ D.jsx("h3", { children: h }),
      /* @__PURE__ */ D.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Zt(f)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: f ? x() : A(S) });
};
Xo.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: m.string.isRequired,
  /**
   * Image alt text
   */
  alt: m.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: m.arrayOf(m.string),
  /**
   * Image loading mode
   */
  loading: m.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: m.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: m.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: m.string,
  /**
   * Height of the image
   */
  height: m.string,
  dataTestId: m.string,
  cardLink: m.string,
  title: m.string,
  caption: m.string,
  captionTitle: m.string,
  border: m.bool,
  dropShadow: m.bool
};
var Ha = qo();
function au(e) {
  function t(C, O, y, P, g) {
    for (var M = 0, R = 0, ie = 0, te = 0, Y, Z, ne = 0, fe = 0, oe, se = oe = Y = 0, K = 0, ue = 0, je = 0, H = 0, $ = y.length, V = $ - 1, F, z = "", ce = "", Te = "", He = "", Fe; K < $; ) {
      if (Z = y.charCodeAt(K), K === V && R + te + ie + M !== 0 && (R !== 0 && (Z = R === 47 ? 10 : 47), te = ie = M = 0, $++, V++), R + te + ie + M === 0) {
        if (K === V && (0 < ue && (z = z.replace(h, "")), 0 < z.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              z += y.charAt(K);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (z = z.trim(), Y = z.charCodeAt(0), oe = 1, H = ++K; K < $; ) {
              switch (Z = y.charCodeAt(K)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch (Z = y.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = K + 1; se < V; ++se)
                          switch (y.charCodeAt(se)) {
                            case 47:
                              if (Z === 42 && y.charCodeAt(se - 1) === 42 && K + 2 !== se) {
                                K = se + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                K = se + 1;
                                break e;
                              }
                          }
                        K = se;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; K++ < V && y.charCodeAt(K) !== Z; )
                    ;
              }
              if (oe === 0) break;
              K++;
            }
            switch (oe = y.substring(H, K), Y === 0 && (Y = (z = z.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < ue && (z = z.replace(h, "")), Z = z.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ue = O;
                    break;
                  default:
                    ue = De;
                }
                if (oe = t(O, ue, oe, Z, g + 1), H = oe.length, 0 < ke && (ue = r(De, z, je), Fe = s(3, oe, ue, O, re, ee, H, Z, g, P), z = ue.join(""), Fe !== void 0 && (H = (oe = Fe.trim()).length) === 0 && (Z = 0, oe = "")), 0 < H) switch (Z) {
                  case 115:
                    z = z.replace(N, o);
                  case 100:
                  case 109:
                  case 45:
                    oe = z + "{" + oe + "}";
                    break;
                  case 107:
                    z = z.replace(x, "$1 $2"), oe = z + "{" + oe + "}", oe = he === 1 || he === 2 && i("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                    break;
                  default:
                    oe = z + oe, P === 112 && (oe = (ce += oe, ""));
                }
                else oe = "";
                break;
              default:
                oe = t(O, r(O, z, je), oe, P, g + 1);
            }
            Te += oe, oe = je = ue = se = Y = 0, z = "", Z = y.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (z = (0 < ue ? z.replace(h, "") : z).trim(), 1 < (H = z.length)) switch (se === 0 && (Y = z.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (H = (z = z.replace(" ", ":")).length), 0 < ke && (Fe = s(1, z, O, C, re, ee, ce.length, P, g, P)) !== void 0 && (H = (z = Fe.trim()).length) === 0 && (z = "\0\0"), Y = z.charCodeAt(0), Z = z.charCodeAt(1), Y) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  He += z + y.charAt(K);
                  break;
                }
              default:
                z.charCodeAt(H - 1) !== 58 && (ce += a(z, Y, Z, z.charCodeAt(2)));
            }
            je = ue = se = Y = 0, z = "", Z = y.charCodeAt(++K);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          R === 47 ? R = 0 : 1 + Y === 0 && P !== 107 && 0 < z.length && (ue = 1, z += "\0"), 0 < ke * Q && s(0, z, O, C, re, ee, ce.length, P, g, P), ee = 1, re++;
          break;
        case 59:
        case 125:
          if (R + te + ie + M === 0) {
            ee++;
            break;
          }
        default:
          switch (ee++, F = y.charAt(K), Z) {
            case 9:
            case 32:
              if (te + M + R === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  F = "";
                  break;
                default:
                  Z !== 32 && (F = " ");
              }
              break;
            case 0:
              F = "\\0";
              break;
            case 12:
              F = "\\f";
              break;
            case 11:
              F = "\\v";
              break;
            case 38:
              te + R + M === 0 && (ue = je = 1, F = "\f" + F);
              break;
            case 108:
              if (te + R + M + X === 0 && 0 < se) switch (K - se) {
                case 2:
                  ne === 112 && y.charCodeAt(K - 3) === 58 && (X = ne);
                case 8:
                  fe === 111 && (X = fe);
              }
              break;
            case 58:
              te + R + M === 0 && (se = K);
              break;
            case 44:
              R + ie + te + M === 0 && (ue = 1, F += "\r");
              break;
            case 34:
            case 39:
              R === 0 && (te = te === Z ? 0 : te === 0 ? Z : te);
              break;
            case 91:
              te + R + ie === 0 && M++;
              break;
            case 93:
              te + R + ie === 0 && M--;
              break;
            case 41:
              te + R + M === 0 && ie--;
              break;
            case 40:
              if (te + R + M === 0) {
                if (Y === 0) switch (2 * ne + 3 * fe) {
                  case 533:
                    break;
                  default:
                    Y = 1;
                }
                ie++;
              }
              break;
            case 64:
              R + ie + te + M + se + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + M + ie)) switch (R) {
                case 0:
                  switch (2 * Z + 3 * y.charCodeAt(K + 1)) {
                    case 235:
                      R = 47;
                      break;
                    case 220:
                      H = K, R = 42;
                  }
                  break;
                case 42:
                  Z === 47 && ne === 42 && H + 2 !== K && (y.charCodeAt(H + 2) === 33 && (ce += y.substring(H, K + 1)), F = "", R = 0);
              }
          }
          R === 0 && (z += F);
      }
      fe = ne, ne = Z, K++;
    }
    if (H = ce.length, 0 < H) {
      if (ue = O, 0 < ke && (Fe = s(2, ce, ue, C, re, ee, H, P, g, P), Fe !== void 0 && (ce = Fe).length === 0)) return He + ce + Te;
      if (ce = ue.join(",") + "{" + ce + "}", he * X !== 0) {
        switch (he !== 2 || i(ce, 2) || (X = 0), X) {
          case 111:
            ce = ce.replace(L, ":-moz-$1") + ce;
            break;
          case 112:
            ce = ce.replace(I, "::-webkit-input-$1") + ce.replace(I, "::-moz-$1") + ce.replace(I, ":-ms-input-$1") + ce;
        }
        X = 0;
      }
    }
    return He + ce + Te;
  }
  function r(C, O, y) {
    var P = O.trim().split(S);
    O = P;
    var g = P.length, M = C.length;
    switch (M) {
      case 0:
      case 1:
        var R = 0;
        for (C = M === 0 ? "" : C[0] + " "; R < g; ++R)
          O[R] = n(C, O[R], y).trim();
        break;
      default:
        var ie = R = 0;
        for (O = []; R < g; ++R)
          for (var te = 0; te < M; ++te)
            O[ie++] = n(C[te] + " ", P[R], y).trim();
    }
    return O;
  }
  function n(C, O, y) {
    var P = O.charCodeAt(0);
    switch (33 > P && (P = (O = O.trim()).charCodeAt(0)), P) {
      case 38:
        return O.replace(A, "$1" + C.trim());
      case 58:
        return C.trim() + O.replace(A, "$1" + C.trim());
      default:
        if (0 < 1 * y && 0 < O.indexOf("\f")) return O.replace(A, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + O;
  }
  function a(C, O, y, P) {
    var g = C + ";", M = 2 * O + 3 * y + 4 * P;
    if (M === 944) {
      C = g.indexOf(":", 9) + 1;
      var R = g.substring(C, g.length - 1).trim();
      return R = g.substring(0, C).trim() + R + ";", he === 1 || he === 2 && i(R, 1) ? "-webkit-" + R + R : R;
    }
    if (he === 0 || he === 2 && !i(g, 1)) return g;
    switch (M) {
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
        if (0 < g.indexOf("image-set(", 11)) return g.replace(ae, "$1-webkit-$2") + g;
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
        return R = g.substring(g.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + R + "-webkit-" + g + "-ms-flex-pack" + R + g;
      case 1005:
        return w.test(g) ? g.replace(T, ":-webkit-") + g.replace(T, ":-moz-") + g : g;
      case 1e3:
        switch (R = g.substring(13).trim(), O = R.indexOf("-") + 1, R.charCodeAt(0) + R.charCodeAt(O)) {
          case 226:
            R = g.replace(E, "tb");
            break;
          case 232:
            R = g.replace(E, "tb-rl");
            break;
          case 220:
            R = g.replace(E, "lr");
            break;
          default:
            return g;
        }
        return "-webkit-" + g + "-ms-" + R + g;
      case 1017:
        if (g.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (O = (g = C).length - 10, R = (g.charCodeAt(O) === 33 ? g.substring(0, O) : g).substring(C.indexOf(":", 7) + 1).trim(), M = R.charCodeAt(0) + (R.charCodeAt(7) | 0)) {
          case 203:
            if (111 > R.charCodeAt(8)) break;
          case 115:
            g = g.replace(R, "-webkit-" + R) + ";" + g;
            break;
          case 207:
          case 102:
            g = g.replace(R, "-webkit-" + (102 < M ? "inline-" : "") + "box") + ";" + g.replace(R, "-webkit-" + R) + ";" + g.replace(R, "-ms-" + R + "box") + ";" + g;
        }
        return g + ";";
      case 938:
        if (g.charCodeAt(5) === 45) switch (g.charCodeAt(6)) {
          case 105:
            return R = g.replace("-items", ""), "-webkit-" + g + "-webkit-box-" + R + "-ms-flex-" + R + g;
          case 115:
            return "-webkit-" + g + "-ms-flex-item-" + g.replace(W, "") + g;
          default:
            return "-webkit-" + g + "-ms-flex-line-pack" + g.replace("align-content", "").replace(W, "") + g;
        }
        break;
      case 973:
      case 989:
        if (g.charCodeAt(3) !== 45 || g.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(C) === !0) return (R = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(C.replace("stretch", "fill-available"), O, y, P).replace(":fill-available", ":stretch") : g.replace(R, "-webkit-" + R) + g.replace(R, "-moz-" + R.replace("fill-", "")) + g;
        break;
      case 962:
        if (g = "-webkit-" + g + (g.charCodeAt(5) === 102 ? "-ms-" + g : "") + g, y + P === 211 && g.charCodeAt(13) === 105 && 0 < g.indexOf("transform", 10)) return g.substring(0, g.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + g;
    }
    return g;
  }
  function i(C, O) {
    var y = C.indexOf(O === 1 ? ":" : "{"), P = C.substring(0, O !== 3 ? y : 10);
    return y = C.substring(y + 1, C.length - 1), qe(O !== 2 ? P : P.replace(le, "$1"), y, O);
  }
  function o(C, O) {
    var y = a(O, O.charCodeAt(0), O.charCodeAt(1), O.charCodeAt(2));
    return y !== O + ";" ? y.replace(_, " or ($1)").substring(4) : "(" + O + ")";
  }
  function s(C, O, y, P, g, M, R, ie, te, Y) {
    for (var Z = 0, ne = O, fe; Z < ke; ++Z)
      switch (fe = pe[Z].call(p, C, ne, y, P, g, M, R, ie, te, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = fe;
      }
    if (ne !== O) return ne;
  }
  function l(C) {
    switch (C) {
      case void 0:
      case null:
        ke = pe.length = 0;
        break;
      default:
        if (typeof C == "function") pe[ke++] = C;
        else if (typeof C == "object") for (var O = 0, y = C.length; O < y; ++O)
          l(C[O]);
        else Q = !!C | 0;
    }
    return l;
  }
  function d(C) {
    return C = C.prefix, C !== void 0 && (qe = null, C ? typeof C != "function" ? he = 1 : (he = 2, qe = C) : he = 0), d;
  }
  function p(C, O) {
    var y = C;
    if (33 > y.charCodeAt(0) && (y = y.trim()), q = y, y = [q], 0 < ke) {
      var P = s(-1, O, y, y, re, ee, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (O = P);
    }
    var g = t(De, y, O, 0, 0);
    return 0 < ke && (P = s(-2, g, y, y, re, ee, g.length, 0, 0, 0), P !== void 0 && (g = P)), q = "", X = 0, ee = re = 1, g;
  }
  var f = /^\0+/g, h = /[\0\r\f]/g, T = /: */g, w = /zoo|gra/, k = /([,: ])(transform)/g, S = /,\r+?/g, A = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, I = /::(place)/g, L = /:(read-only)/g, E = /[svh]\w+-[tblr]{2}/, N = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, W = /-self|flex-/g, le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, ae = /([^-])(image-set\()/, ee = 1, re = 1, X = 0, he = 1, De = [], pe = [], ke = 0, qe = null, Q = 0, q = "";
  return p.use = l, p.set = d, e !== void 0 && d(e), p;
}
var iu = {
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
function ou(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var su = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vi = /* @__PURE__ */ ou(
  function(e) {
    return su.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ua = qo(), lu = {
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
}, cu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, uu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ba = {};
Ba[Ua.ForwardRef] = uu;
Ba[Ua.Memo] = Zo;
function Yi(e) {
  return Ua.isMemo(e) ? Zo : Ba[e.$$typeof] || lu;
}
var du = Object.defineProperty, fu = Object.getOwnPropertyNames, Gi = Object.getOwnPropertySymbols, pu = Object.getOwnPropertyDescriptor, mu = Object.getPrototypeOf, Xi = Object.prototype;
function Ko(e, t, r) {
  if (typeof t != "string") {
    if (Xi) {
      var n = mu(t);
      n && n !== Xi && Ko(e, n, r);
    }
    var a = fu(t);
    Gi && (a = a.concat(Gi(t)));
    for (var i = Yi(e), o = Yi(t), s = 0; s < a.length; ++s) {
      var l = a[s];
      if (!cu[l] && !(r && r[l]) && !(o && o[l]) && !(i && i[l])) {
        var d = pu(t, l);
        try {
          du(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var hu = Ko;
const gu = /* @__PURE__ */ Aa(hu);
var ye = { env: { NODE_ENV: "production" } };
function vt() {
  return (vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Zi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ha = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ha.typeOf(e);
}, bn = Object.freeze([]), Ct = Object.freeze({});
function Nr(e) {
  return typeof e == "function";
}
function ga(e) {
  return ye.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Wa(e) {
  return e && typeof e.styledComponentId == "string";
}
var er = typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_ATTR || ye.env.SC_ATTR) || "data-styled", qa = typeof window < "u" && "HTMLElement" in window, vu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ye.env.REACT_APP_SC_DISABLE_SPEEDY : ye.env.SC_DISABLE_SPEEDY !== void 0 && ye.env.SC_DISABLE_SPEEDY !== "" ? ye.env.SC_DISABLE_SPEEDY !== "false" && ye.env.SC_DISABLE_SPEEDY : ye.env.NODE_ENV !== "production")), yu = ye.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function bu() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function sr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw ye.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(bu.apply(void 0, [yu[e]].concat(r)).trim());
}
var wu = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, o = i; r >= o; ) (o <<= 1) < 0 && sr(16, "" + r);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(a), this.length = o;
      for (var s = i; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(r + 1), d = 0, p = n.length; d < p; d++) this.tag.insertRule(l, n[d]) && (this.groupSizes[r]++, l++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var o = a; o < i; o++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), o = i + a, s = i; s < o; s++) n += this.tag.getRule(s) + `/*!sc*/
`;
    return n;
  }, e;
}(), on = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), Ar = 1, Xr = function(e) {
  if (on.has(e)) return on.get(e);
  for (; wn.has(Ar); ) Ar++;
  var t = Ar++;
  return ye.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && sr(16, "" + t), on.set(e, t), wn.set(t, e), t;
}, ku = function(e) {
  return wn.get(e);
}, Su = function(e, t) {
  t >= Ar && (Ar = t + 1), on.set(e, t), wn.set(t, e);
}, Eu = "style[" + er + '][data-styled-version="5.3.11"]', Tu = new RegExp("^" + er + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), xu = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, Au = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var s = o.match(Tu);
      if (s) {
        var l = 0 | parseInt(s[1], 10), d = s[2];
        l !== 0 && (Su(d, l), xu(e, d, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, Ou = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Qo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(s) {
    for (var l = s.childNodes, d = l.length; d >= 0; d--) {
      var p = l[d];
      if (p && p.nodeType === 1 && p.hasAttribute(er)) return p;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(er, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = Ou();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, _u = function() {
  function e(r) {
    var n = this.element = Qo(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, o = 0, s = i.length; o < s; o++) {
        var l = i[o];
        if (l.ownerNode === a) return l;
      }
      sr(17);
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
}(), Cu = function() {
  function e(r) {
    var n = this.element = Qo(r);
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
}(), Nu = function() {
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
}(), Ki = qa, Ru = { isServer: !qa, useCSSOMInjection: !vu }, Jo = function() {
  function e(r, n, a) {
    r === void 0 && (r = Ct), n === void 0 && (n = {}), this.options = vt({}, Ru, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && qa && Ki && (Ki = !1, function(i) {
      for (var o = document.querySelectorAll(Eu), s = 0, l = o.length; s < l; s++) {
        var d = o[s];
        d && d.getAttribute(er) !== "active" && (Au(i, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Xr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(vt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new Nu(o) : i ? new _u(o) : new Cu(o), new wu(r)));
    var r, n, a, i, o;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (Xr(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(Xr(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Xr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", o = 0; o < a; o++) {
        var s = ku(o);
        if (s !== void 0) {
          var l = r.names.get(s), d = n.getGroup(o);
          if (l && d && l.size) {
            var p = er + ".g" + o + '[id="' + s + '"]', f = "";
            l !== void 0 && l.forEach(function(h) {
              h.length > 0 && (f += h + ",");
            }), i += "" + d + p + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), Lu = /(a)(d)/gi, Qi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function va(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Qi(t % 52) + r;
  return (Qi(t % 52) + r).replace(Lu, "$1-$2");
}
var zt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, es = function(e) {
  return zt(5381, e);
};
function Iu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Nr(r) && !Wa(r)) return !1;
  }
  return !0;
}
var Pu = es("5.3.11"), Mu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ye.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Iu(t), this.componentId = r, this.baseHash = zt(Pu, r), this.baseStyle = n, Jo.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = tr(this.rules, t, r, n).join(""), s = va(zt(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(a, s)) {
        var l = n(o, "." + s, void 0, a);
        r.insertRules(a, s, l);
      }
      i.push(s), this.staticRulesId = s;
    }
    else {
      for (var d = this.rules.length, p = zt(this.baseHash, n.hash), f = "", h = 0; h < d; h++) {
        var T = this.rules[h];
        if (typeof T == "string") f += T, ye.env.NODE_ENV !== "production" && (p = zt(p, T + h));
        else if (T) {
          var w = tr(T, t, r, n), k = Array.isArray(w) ? w.join("") : w;
          p = zt(p, k + h), f += k;
        }
      }
      if (f) {
        var S = va(p >>> 0);
        if (!r.hasNameForId(a, S)) {
          var A = n(f, "." + S, void 0, a);
          r.insertRules(a, S, A);
        }
        i.push(S);
      }
    }
    return i.join(" ");
  }, e;
}(), Du = /^\s*\/\/.*$/gm, ju = [":", "[", ".", "#"];
function $u(e) {
  var t, r, n, a, i = Ct, o = i.options, s = o === void 0 ? Ct : o, l = i.plugins, d = l === void 0 ? bn : l, p = new au(s), f = [], h = /* @__PURE__ */ function(k) {
    function S(A) {
      if (A) try {
        k(A + "}");
      } catch {
      }
    }
    return function(A, x, I, L, E, N, _, W, le, we) {
      switch (A) {
        case 1:
          if (le === 0 && x.charCodeAt(0) === 64) return k(x + ";"), "";
          break;
        case 2:
          if (W === 0) return x + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return k(I[0] + x), "";
            default:
              return x + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(S);
      }
    };
  }(function(k) {
    f.push(k);
  }), T = function(k, S, A) {
    return S === 0 && ju.indexOf(A[r.length]) !== -1 || A.match(a) ? k : "." + t;
  };
  function w(k, S, A, x) {
    x === void 0 && (x = "&");
    var I = k.replace(Du, ""), L = S && A ? A + " " + S + " { " + I + " }" : I;
    return t = x, r = S, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), p(A || !S ? "" : S, L);
  }
  return p.use([].concat(d, [function(k, S, A) {
    k === 2 && A.length && A[0].lastIndexOf(r) > 0 && (A[0] = A[0].replace(n, T));
  }, h, function(k) {
    if (k === -2) {
      var S = f;
      return f = [], S;
    }
  }])), w.hash = d.length ? d.reduce(function(k, S) {
    return S.name || sr(15), zt(k, S.name);
  }, 5381).toString() : "", w;
}
var ts = Nt.createContext();
ts.Consumer;
var rs = Nt.createContext(), zu = (rs.Consumer, new Jo()), ya = $u();
function Fu() {
  return ir(ts) || zu;
}
function Hu() {
  return ir(rs) || ya;
}
var Uu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = ya);
      var o = n.name + i.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return sr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ya), this.name + t.hash;
  }, e;
}(), Bu = /([A-Z])/, Wu = /([A-Z])/g, qu = /^ms-/, Vu = function(e) {
  return "-" + e.toLowerCase();
};
function Ji(e) {
  return Bu.test(e) ? e.replace(Wu, Vu).replace(qu, "-ms-") : e;
}
var eo = function(e) {
  return e == null || e === !1 || e === "";
};
function tr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, s = e.length; o < s; o += 1) (a = tr(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (eo(e)) return "";
  if (Wa(e)) return "." + e.styledComponentId;
  if (Nr(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var l = e(t);
    return ye.env.NODE_ENV !== "production" && Ha.isElement(l) && console.warn(ga(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), tr(l, t, r, n);
  }
  var d;
  return e instanceof Uu ? r ? (e.inject(r, n), e.getName(n)) : e : ha(e) ? function p(f, h) {
    var T, w, k = [];
    for (var S in f) f.hasOwnProperty(S) && !eo(f[S]) && (Array.isArray(f[S]) && f[S].isCss || Nr(f[S]) ? k.push(Ji(S) + ":", f[S], ";") : ha(f[S]) ? k.push.apply(k, p(f[S], S)) : k.push(Ji(S) + ": " + (T = S, (w = f[S]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || T in iu || T.startsWith("--") ? String(w).trim() : w + "px") + ";"));
    return h ? [h + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var to = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Nr(e) || ha(e) ? to(tr(Zi(bn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : to(tr(Zi(e, r)));
}
var ro = /invalid hook call/i, Zr = /* @__PURE__ */ new Set(), Gu = function(e, t) {
  if (ye.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (ro.test(i)) a = !1, Zr.delete(r);
        else {
          for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) s[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(s));
        }
      }, Ls(), a && !Zr.has(r) && (console.warn(r), Zr.add(r));
    } catch (i) {
      ro.test(i.message) && Zr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Xu = function(e, t, r) {
  return r === void 0 && (r = Ct), e.theme !== r.theme && e.theme || t || r.theme;
}, Zu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ku = /(^-|-$)/g;
function Kn(e) {
  return e.replace(Zu, "-").replace(Ku, "");
}
var Qu = function(e) {
  return va(es(e) >>> 0);
};
function Kr(e) {
  return typeof e == "string" && (ye.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ba = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ju = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function ed(e, t, r) {
  var n = e[r];
  ba(t) && ba(n) ? ns(n, t) : e[r] = t;
}
function ns(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (ba(o)) for (var s in o) Ju(s) && ed(e, o[s], s);
  }
  return e;
}
var as = Nt.createContext();
as.Consumer;
var Qn = {};
function is(e, t, r) {
  var n = Wa(e), a = !Kr(e), i = t.attrs, o = i === void 0 ? bn : i, s = t.componentId, l = s === void 0 ? function(x, I) {
    var L = typeof x != "string" ? "sc" : Kn(x);
    Qn[L] = (Qn[L] || 0) + 1;
    var E = L + "-" + Qu("5.3.11" + L + Qn[L]);
    return I ? I + "-" + E : E;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, p = d === void 0 ? function(x) {
    return Kr(x) ? "styled." + x : "Styled(" + ga(x) + ")";
  }(e) : d, f = t.displayName && t.componentId ? Kn(t.displayName) + "-" + t.componentId : t.componentId || l, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, T = t.shouldForwardProp;
  n && e.shouldForwardProp && (T = t.shouldForwardProp ? function(x, I, L) {
    return e.shouldForwardProp(x, I, L) && t.shouldForwardProp(x, I, L);
  } : e.shouldForwardProp);
  var w, k = new Mu(r, f, n ? e.componentStyle : void 0), S = k.isStatic && o.length === 0, A = function(x, I) {
    return function(L, E, N, _) {
      var W = L.attrs, le = L.componentStyle, we = L.defaultProps, ae = L.foldedComponentIds, ee = L.shouldForwardProp, re = L.styledComponentId, X = L.target, he = function(P, g, M) {
        P === void 0 && (P = Ct);
        var R = vt({}, g, { theme: P }), ie = {};
        return M.forEach(function(te) {
          var Y, Z, ne, fe = te;
          for (Y in Nr(fe) && (fe = fe(R)), fe) R[Y] = ie[Y] = Y === "className" ? (Z = ie[Y], ne = fe[Y], Z && ne ? Z + " " + ne : Z || ne) : fe[Y];
        }), [R, ie];
      }(Xu(E, ir(as), we) || Ct, E, W), De = he[0], pe = he[1], ke = function(P, g, M, R) {
        var ie = Fu(), te = Hu(), Y = g ? P.generateAndInjectStyles(Ct, ie, te) : P.generateAndInjectStyles(M, ie, te);
        return ye.env.NODE_ENV !== "production" && !g && R && R(Y), Y;
      }(le, _, De, ye.env.NODE_ENV !== "production" ? L.warnTooManyClasses : void 0), qe = N, Q = pe.$as || E.$as || pe.as || E.as || X, q = Kr(Q), C = pe !== E ? vt({}, E, {}, pe) : E, O = {};
      for (var y in C) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? O.as = C[y] : (ee ? ee(y, Vi, Q) : !q || Vi(y)) && (O[y] = C[y]));
      return E.style && pe.style !== E.style && (O.style = vt({}, E.style, {}, pe.style)), O.className = Array.prototype.concat(ae, re, ke !== re ? ke : null, E.className, pe.className).filter(Boolean).join(" "), O.ref = qe, Is(Q, O);
    }(w, x, I, S);
  };
  return A.displayName = p, (w = Nt.forwardRef(A)).attrs = h, w.componentStyle = k, w.displayName = p, w.shouldForwardProp = T, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : bn, w.styledComponentId = f, w.target = n ? e.target : e, w.withComponent = function(x) {
    var I = t.componentId, L = function(N, _) {
      if (N == null) return {};
      var W, le, we = {}, ae = Object.keys(N);
      for (le = 0; le < ae.length; le++) W = ae[le], _.indexOf(W) >= 0 || (we[W] = N[W]);
      return we;
    }(t, ["componentId"]), E = I && I + "-" + (Kr(x) ? x : Kn(ga(x)));
    return is(x, vt({}, L, { attrs: h, componentId: E }), r);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? ns({}, e.defaultProps, x) : x;
  } }), ye.env.NODE_ENV !== "production" && (Gu(p, f), w.warnTooManyClasses = /* @__PURE__ */ function(x, I) {
    var L = {}, E = !1;
    return function(N) {
      if (!E && (L[N] = !0, Object.keys(L).length >= 200)) {
        var _ = I ? ' with the id of "' + I + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + _ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, L = {};
      }
    };
  }(p, f)), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), a && gu(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var rr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Ct), !Ha.isValidElementType(n)) return sr(1, String(n));
    var i = function() {
      return r(n, a, Yu.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, vt({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, vt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(is, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rr[e] = rr(e);
});
ye.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ye.env.NODE_ENV !== "production" && ye.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const td = rr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, rd = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), nd = (e) => !e.startsWith("https://") && !e.startsWith("http://") && rd(e) ? `mailto:${e}` : e, ad = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ot = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: o,
  body: s,
  eventFormat: l,
  eventLocation: d,
  eventTime: p,
  buttons: f,
  linkLabel: h,
  linkUrl: T,
  tags: w,
  showBorders: k,
  cardLink: S
}) => /* @__PURE__ */ D.jsx(
  Va,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: i,
    icon: o,
    body: s,
    eventFormat: l,
    eventLocation: d,
    eventTime: p,
    buttons: f,
    linkLabel: h,
    linkUrl: T,
    tags: w,
    showBorders: k,
    cardLink: S
  }
);
Ot.propTypes = {
  /**
   * Type of card
   */
  type: m.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: m.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: m.bool,
  /**
   * Card title
   */
  title: m.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: m.arrayOf(m.string),
  /**
   * Card body content
   */
  body: m.string,
  /**
   * Event info format
   */
  eventFormat: m.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: m.string,
  /**
   * Event start time
   */
  eventTime: m.string,
  /**
   * Card header image
   */
  image: m.string,
  /**
   * Card header image alt text
   */
  imageAltText: m.string,
  /**
   * Buttons
   */
  buttons: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: m.arrayOf(m.string),
      href: m.string,
      label: m.string,
      onClick: m.func,
      size: m.oneOf(["default", "small", "xsmall"]),
      target: m.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: m.string,
  linkUrl: m.string,
  /**
   * Tags
   */
  tags: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["white", "gray", "dark"]),
      href: m.string,
      label: m.string,
      onClick: m.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: m.bool,
  /**
   * Card link
   */
  cardLink: m.string
};
Ot.defaultProps = {
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
const Va = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: o,
  body: s,
  eventFormat: l,
  eventLocation: d,
  eventTime: p,
  buttons: f,
  linkLabel: h,
  linkUrl: T,
  tags: w,
  showBorders: k,
  cardLink: S
}) => {
  const A = Cr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsxs(td, { className: A, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ D.jsx(
      Xo,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: S,
        title: i
      }
    ),
    !n && o && /* @__PURE__ */ D.jsx(
      "i",
      {
        className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ D.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ D.jsx(
      kn,
      {
        type: e,
        body: s,
        eventFormat: l,
        eventLocation: d,
        eventTime: p,
        title: i,
        buttons: f,
        linkLabel: h,
        linkUrl: T,
        tags: w,
        cardLink: S
      }
    ) }) : /* @__PURE__ */ D.jsx(
      kn,
      {
        type: e,
        body: s,
        eventFormat: l,
        eventLocation: d,
        eventTime: p,
        title: i,
        buttons: f,
        linkLabel: h,
        linkUrl: T,
        tags: w,
        cardLink: S
      }
    )
  ] }) });
};
Va.propTypes = {
  type: m.oneOf(["default", "degree", "event", "news", "story"]),
  width: m.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: m.bool,
  title: m.string.isRequired,
  icon: m.arrayOf(m.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: m.string,
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string,
  image: m.string,
  imageAltText: m.string,
  buttons: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: m.arrayOf(m.string),
      href: m.string,
      label: m.string,
      onClick: m.func,
      size: m.oneOf(["default", "small", "xsmall"]),
      target: m.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: m.string,
  linkUrl: m.string,
  tags: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["white", "gray", "dark"]),
      href: m.string,
      label: m.string,
      onClick: m.func
    })
  ),
  showBorders: m.bool,
  cardLink: m.string
};
Va.defaultProps = {
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
const kn = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: i,
  buttons: o,
  linkLabel: s,
  linkUrl: l,
  tags: d,
  cardLink: p
}) => /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  !!i && /* @__PURE__ */ D.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ D.jsx("h3", { className: "card-title", children: p ? /* @__PURE__ */ D.jsx("a", { href: p, children: i }) : i }) }),
  !!t && /* @__PURE__ */ D.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Zt(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ D.jsx(
    Ya,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  o && /* @__PURE__ */ D.jsx("div", { className: "card-buttons", children: o.map((f) => /* @__PURE__ */ D.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ D.jsx(
        za,
        {
          ariaLabel: f.ariaLabel,
          color: f.color,
          icon: f.icon,
          href: f.href,
          label: f.label,
          onClick: f.onClick,
          size: f.size,
          target: f.target,
          cardTitle: i
        }
      )
    },
    `${f.label}-${f.href}`
  )) }),
  l && s && /* @__PURE__ */ D.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ D.jsx(
    "a",
    {
      href: nd(l),
      onClick: () => Jt({
        ...ad,
        section: i,
        text: s
      }),
      children: s
    }
  ) }),
  d && /* @__PURE__ */ D.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((f) => (
    // @ts-ignore
    /* @__PURE__ */ D.jsx(
      Fa,
      {
        ariaLabel: f.ariaLabel,
        color: f.color,
        href: f.href,
        label: f.label,
        onClick: f.onClick,
        cardTitle: i
      },
      `${f.label}-${f.href}`
    )
  )) })
] });
kn.propTypes = {
  type: m.oneOf(["default", "degree", "event", "news", "story"]),
  body: m.string,
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string,
  title: m.string.isRequired,
  buttons: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: m.arrayOf(m.string),
      href: m.string,
      label: m.string,
      onClick: m.func,
      size: m.oneOf(["default", "small", "xsmall"]),
      target: m.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: m.string,
  linkUrl: m.string,
  tags: m.arrayOf(
    m.shape({
      ariaLabel: m.string,
      color: m.oneOf(["white", "gray", "dark"]),
      href: m.string,
      label: m.string,
      onClick: m.func
    })
  ),
  cardLink: m.string
};
kn.defaultProps = {
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
const Ya = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ D.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Zt(t) })
  ] }),
  r && /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ D.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Zt(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  t && /* @__PURE__ */ D.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ D.jsx("div", { dangerouslySetInnerHTML: Zt(t) })
  ] }) }),
  r && /* @__PURE__ */ D.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ D.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ D.jsx("div", { children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ D.jsx("span", { children: /* @__PURE__ */ D.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Zt(r)
      }
    ) })
  ] }) })
] });
Ya.propTypes = {
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string
};
Ya.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const id = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, os = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D.jsx(
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
os.propTypes = {
  children: m.oneOfType([
    m.element,
    m.arrayOf(m.element)
  ]).isRequired
};
const ss = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ D.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`,
          onClick: () => Jt({ ...id })
        },
        `bullet-${r}`
      )
    );
  return /* @__PURE__ */ D.jsx(os, { children: t });
};
ss.propTypes = {
  buttonCount: m.number.isRequired
};
m.arrayOf(m.string).isRequired, m.func;
const ls = ({ onClick: e = () => null }) => /* @__PURE__ */ D.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ D.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
ls.propTypes = {
  onClick: m.func
};
const cs = ({ onClick: e = () => null }) => /* @__PURE__ */ D.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ D.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
cs.propTypes = {
  onClick: m.func
};
const no = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, us = ({ children: e = null }) => /* @__PURE__ */ D.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
us.propTypes = {
  children: m.arrayOf(m.element)
};
const ds = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ D.jsxs(us, { children: [
  /* @__PURE__ */ D.jsx(
    cs,
    {
      onClick: () => {
        e(), Jt({ ...no, text: "left chevron" });
      }
    }
  ),
  t,
  /* @__PURE__ */ D.jsx(
    ls,
    {
      onClick: () => {
        e(), Jt({ ...no, text: "right chevron" });
      }
    }
  )
] });
ds.propTypes = {
  children: m.element,
  onClick: m.func
};
const fs = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ D.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ D.jsx("ul", { className: "glide__slides", children: t });
};
fs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: m.arrayOf(m.object)
};
function ao(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ao(Object(r), !0).forEach(function(n) {
      sd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ao(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sn(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sn = function(t) {
    return typeof t;
  } : sn = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function On(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function od(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function _n(e, t, r) {
  return t && od(e.prototype, t), e;
}
function sd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ld(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && wa(e, t);
}
function nr(e) {
  return nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nr(e);
}
function wa(e, t) {
  return wa = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, wa(e, t);
}
function cd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ud(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dd(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ud(e);
}
function fd(e) {
  var t = cd();
  return function() {
    var n = nr(e), a;
    if (t) {
      var i = nr(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return dd(this, a);
  };
}
function pd(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = nr(e), e !== null); )
    ;
  return e;
}
function ln() {
  return typeof Reflect < "u" && Reflect.get ? ln = Reflect.get : ln = function(t, r, n) {
    var a = pd(t, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
    }
  }, ln.apply(this, arguments);
}
var md = {
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
function bt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function We(e) {
  return parseInt(e);
}
function hd(e) {
  return parseFloat(e);
}
function ka(e) {
  return typeof e == "string";
}
function ar(e) {
  var t = sn(e);
  return t === "function" || t === "object" && !!e;
}
function Sn(e) {
  return typeof e == "function";
}
function ps(e) {
  return typeof e > "u";
}
function Sa(e) {
  return e.constructor === Array;
}
function gd(e, t, r) {
  var n = {};
  for (var a in t)
    Sn(t[a]) ? n[a] = t[a](e, n, r) : bt("Extension must be a function");
  for (var i in n)
    Sn(n[i].mount) && n[i].mount();
  return n;
}
function Ee(e, t, r) {
  Object.defineProperty(e, t, r);
}
function vd(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Ea(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = io(io({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var yd = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    On(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return _n(e, [{
    key: "on",
    value: function(r, n) {
      if (Sa(r)) {
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
      if (Sa(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(i) {
        i(n || {});
      });
    }
  }]), e;
}(), bd = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    On(this, e), this._c = {}, this._t = [], this._e = new yd(), this.disabled = !1, this.selector = t, this.settings = Ea(md, r), this.index = this.settings.startAt;
  }
  return _n(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), ar(r) ? this._c = gd(this, r, this._e) : bt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return Sa(r) ? this._t = r : bt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Ea(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
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
      ar(r) ? this._o = r : bt("Options must be an `object` instance.");
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
      this._i = We(r);
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
function wd(e, t, r) {
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
      var p = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = d, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        p.isStart() && r.emit("run.start", p.move), p.isEnd() && r.emit("run.end", p.move), p.isOffset() && (p._o = !1, r.emit("run.offset", p.move)), r.emit("run.after", p.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var d = this.move, p = this.length, f = d.steps, h = d.direction, T = 1;
      if (h === "=") {
        if (e.settings.bound && We(f) > p) {
          e.index = p;
          return;
        }
        e.index = f;
        return;
      }
      if (h === ">" && f === ">") {
        e.index = p;
        return;
      }
      if (h === "<" && f === "<") {
        e.index = 0;
        return;
      }
      if (h === "|" && (T = e.settings.perView || 1), h === ">" || h === "|" && f === ">") {
        var w = a(T);
        w > p && (this._o = !0), e.index = i(w, T);
        return;
      }
      if (h === "<" || h === "|" && f === "<") {
        var k = o(T);
        k < 0 && (this._o = !0), e.index = s(k, T);
        return;
      }
      bt("Invalid direction pattern [".concat(h).concat(f, "] has been used"));
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
  function a(l) {
    var d = e.index;
    return e.isType("carousel") ? d + l : d + (l - d % l);
  }
  function i(l, d) {
    var p = n.length;
    return l <= p ? l : e.isType("carousel") ? l - (p + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? p : 0 : n.isBound() ? p : Math.floor(p / d) * d;
  }
  function o(l) {
    var d = e.index;
    if (e.isType("carousel"))
      return d - l;
    var p = Math.ceil(d / l);
    return (p - 1) * l;
  }
  function s(l, d) {
    var p = n.length;
    return l >= 0 ? l : e.isType("carousel") ? l + (p + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? p : Math.floor(p / d) * d : 0;
  }
  return Ee(n, "move", {
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
      var p = d.substr(1);
      this._m = {
        direction: d.substr(0, 1),
        steps: p ? We(p) ? We(p) : p : 0
      };
    }
  }), Ee(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.settings, p = t.Html.slides.length;
      return this.isBound() ? p - 1 - (We(d.perView) - 1) + We(d.focusAt) : p - 1;
    }
  }), Ee(n, "offset", {
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
function oo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Cn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, o, s = 0, l = function() {
    s = r.leading === !1 ? 0 : oo(), n = null, o = e.apply(a, i), n || (a = i = null);
  }, d = function() {
    var f = oo();
    !s && r.leading === !1 && (s = f);
    var h = t - (f - s);
    return a = this, i = arguments, h <= 0 || h > t ? (n && (clearTimeout(n), n = null), s = f, o = e.apply(a, i), n || (a = i = null)) : !n && r.trailing !== !1 && (n = setTimeout(l, h)), o;
  };
  return d.cancel = function() {
    clearTimeout(n), s = 0, n = a = i = null;
  }, d;
}
var Qr = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function kd(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(i) {
      for (var o = 0, s = i.length; o < s; o++) {
        var l = i[o].style, d = t.Direction.value;
        o !== 0 ? l[Qr[d][0]] = "".concat(this.value / 2, "px") : l[Qr[d][0]] = "", o !== i.length - 1 ? l[Qr[d][1]] = "".concat(this.value / 2, "px") : l[Qr[d][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(i) {
      for (var o = 0, s = i.length; o < s; o++) {
        var l = i[o].style;
        l.marginLeft = "", l.marginRight = "";
      }
    }
  };
  return Ee(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return We(e.settings.gap);
    }
  }), Ee(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), Ee(n, "reductor", {
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
  }), r.on(["build.after", "update"], Cn(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function ms(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Ta(e) {
  return Array.prototype.slice.call(e);
}
var Sd = '[data-glide-el="track"]';
function Ed(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Sd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Ta(this.wrapper.children).filter(function(i) {
        return !i.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Ee(n, "root", {
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
      ka(i) && (i = document.querySelector(i)), i !== null ? n._r = i : bt("Root element must be a existing Html node");
    }
  }), Ee(n, "track", {
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
  }), Ee(n, "wrapper", {
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
function Td(e, t, r) {
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
  return Ee(n, "value", {
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
      ar(i) ? (i.before = We(i.before), i.after = We(i.after)) : i = We(i), n._v = i;
    }
  }), Ee(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var i = n.value, o = e.settings.perView;
      return ar(i) ? i.before / o + i.after / o : i * 2 / o;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function xd(e, t, r) {
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
      var i = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = o, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: i.value
        });
      });
    }
  };
  return Ee(n, "offset", {
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
      n._o = ps(i) ? 0 : We(i);
    }
  }), Ee(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Ee(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var i = this.offset, o = this.translate;
      return t.Direction.is("rtl") ? o + i : o - i;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Ad(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var i = "".concat(this.slideWidth, "px"), o = t.Html.slides, s = 0; s < o.length; s++)
        o[s].style.width = i;
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
      for (var i = t.Html.slides, o = 0; o < i.length; o++)
        i[o].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Ee(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Ee(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Ee(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Ee(n, "slideWidth", {
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
function Od(e, t, r) {
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
      var i = e.settings.classes, o = t.Html.slides[e.index];
      o && (o.classList.add(i.slide.active), ms(o).forEach(function(s) {
        s.classList.remove(i.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var i = e.settings.classes, o = i.type, s = i.slide;
      t.Html.root.classList.remove(o[e.settings.type]), t.Html.slides.forEach(function(l) {
        l.classList.remove(s.active);
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
function _d(e, t, r) {
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
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = t.Html.slides, s = e.settings, l = s.perView, d = s.classes, p = s.cloningRatio;
      if (o.length > 0)
        for (var f = +!!e.settings.peek, h = l + f + Math.round(l / 2), T = o.slice(0, h).reverse(), w = o.slice(h * -1), k = 0; k < Math.max(p, Math.floor(l / o.length)); k++) {
          for (var S = 0; S < T.length; S++) {
            var A = T[S].cloneNode(!0);
            A.classList.add(d.slide.clone), i.push(A);
          }
          for (var x = 0; x < w.length; x++) {
            var I = w[x].cloneNode(!0);
            I.classList.add(d.slide.clone), i.unshift(I);
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
      for (var i = this.items, o = t.Html, s = o.wrapper, l = o.slides, d = Math.floor(i.length / 2), p = i.slice(0, d).reverse(), f = i.slice(d * -1).reverse(), h = "".concat(t.Sizes.slideWidth, "px"), T = 0; T < f.length; T++)
        s.appendChild(f[T]);
      for (var w = 0; w < p.length; w++)
        s.insertBefore(p[w], l[0]);
      for (var k = 0; k < i.length; k++)
        i[k].style.width = h;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var i = this.items, o = 0; o < i.length; o++)
        t.Html.wrapper.removeChild(i[o]);
    }
  };
  return Ee(n, "grow", {
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
var Rt = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    On(this, e), this.listeners = t;
  }
  return _n(e, [{
    key: "on",
    value: function(r, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      ka(r) && (r = [r]);
      for (var o = 0; o < r.length; o++)
        this.listeners[r[o]] = a, n.addEventListener(r[o], this.listeners[r[o]], i);
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
      ka(r) && (r = [r]);
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
function Cd(e, t, r) {
  var n = new Rt(), a = {
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
      n.on("resize", window, Cn(function() {
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
var Nd = ["ltr", "rtl"], Rd = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Ld(e, t, r) {
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
      var o = i.slice(0, 1);
      return this.is("rtl") ? i.split(o).join(Rd[o]) : i;
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
  return Ee(n, "value", {
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
      Nd.indexOf(i) > -1 ? n._v = i : bt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Id(e, t) {
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
function Pd(e, t) {
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
function Md(e, t) {
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
function Dd(e, t) {
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
        return ar(a) ? n - a.before : n - a;
      }
      return n;
    }
  };
}
function jd(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var a = t.Gaps.value, i = t.Sizes.width, o = e.settings.focusAt, s = t.Sizes.slideWidth;
      return o === "center" ? n - (i / 2 - s / 2) : n - s * o - a * o;
    }
  };
}
function $d(e, t, r) {
  var n = [Pd, Md, Dd, jd].concat(e._t, [Id]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(i) {
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        Sn(s) && Sn(s().modify) ? i = s(e, t, r).modify(i) : bt("Transformer should be a function that returns an object with `modify()` method");
      }
      return i;
    }
  };
}
function zd(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var o = $d(e, t).mutate(i), s = "translate3d(".concat(-1 * o, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = s, t.Html.wrapper.style.webkitTransform = s, t.Html.wrapper.style.transform = s;
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
      var i = t.Sizes.length, o = e.index, s = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? i + (o - s) : (o + s) % i;
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
function Fd(e, t, r) {
  var n = !1, a = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(o) {
      var s = e.settings;
      return n ? "".concat(o, " 0ms ").concat(s.animationTimingFunc) : "".concat(o, " ").concat(this.duration, "ms ").concat(s.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(o);
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
    after: function(o) {
      setTimeout(function() {
        o();
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
  return Ee(a, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var o = e.settings;
      return e.isType("slider") && t.Run.offset ? o.rewindDuration : o.animationDuration;
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
var hs = !1;
try {
  var so = Object.defineProperty({}, "passive", {
    get: function() {
      hs = !0;
    }
  });
  window.addEventListener("testPassive", null, so), window.removeEventListener("testPassive", null, so);
} catch {
}
var xa = hs, Jr = ["touchstart", "mousedown"], lo = ["touchmove", "mousemove"], co = ["touchend", "touchcancel", "mouseup", "mouseleave"], uo = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Hd(e, t, r) {
  var n = new Rt(), a = 0, i = 0, o = 0, s = !1, l = xa ? {
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
    start: function(f) {
      if (!s && !e.disabled) {
        this.disable();
        var h = this.touches(f);
        a = null, i = We(h.pageX), o = We(h.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(f) {
      if (!e.disabled) {
        var h = e.settings, T = h.touchAngle, w = h.touchRatio, k = h.classes, S = this.touches(f), A = We(S.pageX) - i, x = We(S.pageY) - o, I = Math.abs(A << 2), L = Math.abs(x << 2), E = Math.sqrt(I + L), N = Math.sqrt(L);
        if (a = Math.asin(N / E), a * 180 / Math.PI < T)
          f.stopPropagation(), t.Move.make(A * hd(w)), t.Html.root.classList.add(k.dragging), r.emit("swipe.move");
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
    end: function(f) {
      if (!e.disabled) {
        var h = e.settings, T = h.perSwipe, w = h.touchAngle, k = h.classes, S = this.touches(f), A = this.threshold(f), x = S.pageX - i, I = a * 180 / Math.PI;
        this.enable(), x > A && I < w ? t.Run.make(t.Direction.resolve("".concat(T, "<"))) : x < -A && I < w ? t.Run.make(t.Direction.resolve("".concat(T, ">"))) : t.Move.make(), t.Html.root.classList.remove(k.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var f = this, h = e.settings, T = h.swipeThreshold, w = h.dragThreshold;
      T && n.on(Jr[0], t.Html.wrapper, function(k) {
        f.start(k);
      }, l), w && n.on(Jr[1], t.Html.wrapper, function(k) {
        f.start(k);
      }, l);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(Jr[0], t.Html.wrapper, l), n.off(Jr[1], t.Html.wrapper, l);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var f = this;
      n.on(lo, t.Html.wrapper, Cn(function(h) {
        f.move(h);
      }, e.settings.throttle), l);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(lo, t.Html.wrapper, l);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var f = this;
      n.on(co, t.Html.wrapper, function(h) {
        f.end(h);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(co, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(f) {
      return uo.indexOf(f.type) > -1 ? f : f.touches[0] || f.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(f) {
      var h = e.settings;
      return uo.indexOf(f.type) > -1 ? h.dragThreshold : h.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return s = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return s = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    d.unbindSwipeStart(), d.unbindSwipeMove(), d.unbindSwipeEnd(), n.destroy();
  }), d;
}
function Ud(e, t, r) {
  var n = new Rt(), a = {
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
    dragstart: function(o) {
      o.preventDefault();
    }
  };
  return r.on("destroy", function() {
    a.unbind(), n.destroy();
  }), a;
}
function Bd(e, t, r) {
  var n = new Rt(), a = !1, i = !1, o = {
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
    click: function(l) {
      i && (l.stopPropagation(), l.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (i = !0, !a) {
        for (var l = 0; l < this.items.length; l++)
          this.items[l].draggable = !1;
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
        for (var l = 0; l < this.items.length; l++)
          this.items[l].draggable = !0;
        a = !1;
      }
      return this;
    }
  };
  return Ee(o, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return o._a;
    }
  }), r.on("swipe.move", function() {
    o.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      o.attach();
    });
  }), r.on("destroy", function() {
    o.attach(), o.unbind(), n.destroy();
  }), o;
}
var Wd = '[data-glide-el="controls[nav]"]', Ga = '[data-glide-el^="controls"]', qd = "".concat(Ga, ' [data-glide-dir*="<"]'), Vd = "".concat(Ga, ' [data-glide-dir*=">"]');
function Yd(e, t, r) {
  var n = new Rt(), a = xa ? {
    passive: !0
  } : !1, i = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Wd), this._c = t.Html.root.querySelectorAll(Ga), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(qd),
        next: t.Html.root.querySelectorAll(Vd)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var s = 0; s < this._n.length; s++)
        this.addClass(this._n[s].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var s = 0; s < this._n.length; s++)
        this.removeClass(this._n[s].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(s) {
      var l = e.settings, d = s[e.index];
      d && (d.classList.add(l.classes.nav.active), ms(d).forEach(function(p) {
        p.classList.remove(l.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(s) {
      var l = s[e.index];
      l == null || l.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var s = i._arrowControls.next, l = i._arrowControls.previous;
        this.resetArrowState(s, l), e.index === 0 && this.disableArrow(l), e.index === t.Run.length && this.disableArrow(s);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var s = e.settings, l = arguments.length, d = new Array(l), p = 0; p < l; p++)
        d[p] = arguments[p];
      d.forEach(function(f) {
        Ta(f).forEach(function(h) {
          h.classList.remove(s.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var s = e.settings, l = arguments.length, d = new Array(l), p = 0; p < l; p++)
        d[p] = arguments[p];
      d.forEach(function(f) {
        Ta(f).forEach(function(h) {
          h.classList.add(s.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var s = 0; s < this._c.length; s++)
        this.bind(this._c[s].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var s = 0; s < this._c.length; s++)
        this.unbind(this._c[s].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(s) {
      for (var l = 0; l < s.length; l++)
        n.on("click", s[l], this.click), n.on("touchstart", s[l], this.click, a);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(s) {
      for (var l = 0; l < s.length; l++)
        n.off(["click", "touchstart"], s[l]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(s) {
      !xa && s.type === "touchstart" && s.preventDefault();
      var l = s.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(l));
    }
  };
  return Ee(i, "items", {
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
function Gd(e, t, r) {
  var n = new Rt(), a = {
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
    press: function(o) {
      var s = e.settings.perSwipe, l = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(o.code) && t.Run.make(t.Direction.resolve("".concat(s).concat(l[o.code])));
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
function Xd(e, t, r) {
  var n = new Rt(), a = {
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
      var o = this;
      this._e && (this.enable(), e.settings.autoplay && ps(this._i) && (this._i = setInterval(function() {
        o.stop(), t.Run.make(">"), o.start(), r.emit("autoplay");
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
      var o = this;
      n.on("mouseover", t.Html.root, function() {
        o._e && o.stop();
      }), n.on("mouseout", t.Html.root, function() {
        o._e && o.start();
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
  return Ee(a, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var o = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return We(o || e.settings.autoplay);
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
function fo(e) {
  return ar(e) ? vd(e) : (bt("Breakpoints option must be an object"), {});
}
function Zd(e, t, r) {
  var n = new Rt(), a = e.settings, i = fo(a.breakpoints), o = Object.assign({}, a), s = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(d) {
      if (typeof window.matchMedia < "u") {
        for (var p in d)
          if (d.hasOwnProperty(p) && window.matchMedia("(max-width: ".concat(p, "px)")).matches)
            return d[p];
      }
      return o;
    }
  };
  return Object.assign(a, s.match(i)), n.on("resize", window, Cn(function() {
    e.settings = Ea(a, s.match(i));
  }, e.settings.throttle)), r.on("update", function() {
    i = fo(i), o = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), s;
}
var Kd = {
  // Required
  Html: Ed,
  Translate: zd,
  Transition: Fd,
  Direction: Ld,
  Peek: Td,
  Sizes: Ad,
  Gaps: kd,
  Move: xd,
  Clones: _d,
  Resize: Cd,
  Build: Od,
  Run: wd,
  // Optional
  Swipe: Hd,
  Images: Ud,
  Anchors: Bd,
  Controls: Yd,
  Keyboard: Gd,
  Autoplay: Xd,
  Breakpoints: Zd
}, Qd = /* @__PURE__ */ function(e) {
  ld(r, e);
  var t = fd(r);
  function r() {
    return On(this, r), t.apply(this, arguments);
  }
  return _n(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ln(nr(r.prototype), "mount", this).call(this, Object.assign({}, Kd, a));
    }
  }]), r;
}(bd);
function Jd(e) {
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
function ef(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: i, perViewLg: o } = Jd(e), s = r ? 24 : 0, l = r ? { before: 48, after: 48 } : 0, d = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: s,
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
    perView: o,
    // Can be overwritten at breakpoints
    peek: d,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: a,
        peek: l
      },
      768: {
        // BS4 md
        perView: i,
        peek: l
      },
      992: {
        // BS4 lg
        perView: o,
        peek: l
      },
      1260: {
        // BS4 xl
        perView: o,
        peek: l
      },
      1400: {
        perView: o,
        peek: d
      },
      1920: {
        perView: o,
        peek: d
      }
    }
  };
}
function tf(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), i = e.querySelector(".glide__track"), o = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const s = ["slider-start", "slider-mid", "slider-end"], l = "glide__arrow--disabled";
  i == null || i.classList.remove(...s), o == null || o.classList.remove(...s), t === 0 ? (i == null || i.classList.add("slider-start"), o == null || o.classList.add("slider-start"), n.classList.add(l), a.classList.remove(l)) : t >= r - 1 ? (i == null || i.classList.add("slider-end"), o == null || o.classList.add("slider-end"), n.classList.remove(l), a.classList.add(l)) : (i == null || i.classList.add("slider-mid"), o == null || o.classList.add("slider-mid"), n.classList.remove(l), a.classList.remove(l));
}
function rf(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, i = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((o, s) => {
    s < a || s > i ? (o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", "-1"), o.setAttribute("inert", "")) : (o.setAttribute("aria-hidden", "false"), o.removeAttribute("tabindex"), o.removeAttribute("inert"));
  });
}
function nf({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: i = !0,
  isDraggable: o
}) {
  const s = ef(t, n, i, o), l = new Qd(`#${e}`, s);
  let d = document.querySelector(`#${e}`);
  return d.addEventListener("keyup", (p) => {
    const f = p;
    f.keyCode === 39 ? l.go(">") : f.keyCode === 37 ? l.go("<") : f.keyCode === 13 && l.go(document.activeElement.dataset.glideDir);
  }), l.on("build.before", () => {
    d = document.querySelector(`#${e}`), d && d.classList.add("slider-start");
  }), l.on("move", () => {
    if (d = document.querySelector(`#${e}`), !d) return;
    const p = l.index;
    rf(d, p, t);
    const f = d.querySelector(".navigation-slider"), h = d.querySelector(".image-navigator-images");
    if (f && h) {
      const T = f.querySelectorAll(
        ".bullet-image-container"
      ), w = f.clientWidth, k = 82, S = T[p], A = h.getBoundingClientRect().x, x = f.getBoundingClientRect().x - A, I = S.getBoundingClientRect().x - A, L = S.getBoundingClientRect().x + S.getBoundingClientRect().width - A;
      if (p === 0 || I <= 0 + k)
        f.style.left = `${x - I + k}px`;
      else if (L >= w - k) {
        const E = L - w;
        f.style.left = `${x - E - k}px`;
      }
    }
    tf(d, p, r), d.setAttribute("data-current-index", p), a && a(p);
  }), l.mount(), l;
}
function af(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const gs = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: a = "",
  CustomNavComponent: i,
  role: o,
  ariaLabelledBy: s,
  isFullWidth: l,
  removeSideBackground: d = !1,
  hasNavButtons: p = !0,
  hasPositionIndicators: f = !0,
  imageAutoSize: h = !0,
  onItemClick: T = () => null,
  hasPeek: w = !0,
  isDraggable: k = !0,
  hasShadow: S = !0
}) => {
  const A = `glide-${Math.ceil(Math.random() * 1e4)}`, x = af(n.length, e);
  return En(() => {
    nf({
      instanceName: A,
      perView: e,
      buttonCount: x,
      isFullWidth: l,
      onItemClick: T,
      hasPeek: w,
      isDraggable: k
    });
  }, [
    A,
    e,
    x,
    l,
    T,
    w,
    k
  ]), /* @__PURE__ */ D.jsxs(
    "div",
    {
      role: o,
      "aria-labelledby": s,
      className: `glide ${a}`,
      id: A,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": d,
      "data-image-auto-size": h,
      "data-has-shadow": S,
      children: [
        /* @__PURE__ */ D.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ D.jsx(fs, { carouselItems: n }) }),
        i ? (
          // @ts-ignore
          /* @__PURE__ */ D.jsx(i, { instanceName: A })
        ) : /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
          f && /* @__PURE__ */ D.jsx(ss, { buttonCount: x }),
          p && /* @__PURE__ */ D.jsx(ds, {})
        ] })
      ]
    }
  );
};
gs.propTypes = {
  perView: m.number,
  width: m.string,
  maxWidth: m.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: m.arrayOf(m.object).isRequired,
  cssClass: m.string,
  CustomNavComponent: m.func,
  role: m.string,
  ariaLabelledBy: m.string,
  onItemClick: m.func,
  isFullWidth: m.bool,
  removeSideBackground: m.bool,
  hasNavButtons: m.bool,
  hasPositionIndicators: m.bool,
  imageAutoSize: m.bool,
  hasPeek: m.bool,
  isDraggable: m.bool,
  hasShadow: m.bool
};
const of = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: a,
  eventLocation: i,
  eventTime: o,
  buttons: s,
  linkLabel: l,
  linkUrl: d,
  tags: p
}, f, h, T) => {
  var w;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ D.jsx(
      Ot,
      {
        type: f,
        horizontal: h,
        image: t,
        imageAltText: r,
        title: n,
        body: a,
        eventFormat: T,
        eventLocation: i,
        eventTime: o,
        buttons: s,
        linkLabel: l,
        linkUrl: d || ((w = s == null ? void 0 : s[0]) == null ? void 0 : w.href),
        tags: p
      }
    )
  };
}, vs = ({
  perView: e = 0,
  cardItems: t,
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: a = !1,
  width: i = void 0,
  maxWidth: o = void 0,
  imageAutoSize: s = !0
}) => {
  const l = parseInt(`${e}`, 10), d = t.map(
    (f) => of(f, r, a, n)
  ), p = t.length > l;
  return /* @__PURE__ */ D.jsx(
    gs,
    {
      perView: +l,
      maxWidth: o,
      width: i,
      carouselItems: d,
      cssClass: "aligned-carousel",
      imageAutoSize: s,
      removeSideBackground: t.length <= l,
      hasPositionIndicators: p,
      hasNavButtons: p,
      isDraggable: p,
      hasShadow: !0
    }
  );
};
vs.propTypes = {
  perView: m.string.isRequired,
  cardItems: m.arrayOf(
    m.shape({
      title: m.string.isRequired,
      content: m.string,
      eventLocation: m.string,
      eventTime: m.string,
      image: m.string,
      imageAltText: m.string,
      buttons: Ot.propTypes.buttons,
      linkLabel: m.string,
      linkUrl: m.string,
      tags: Ot.propTypes.tags
    })
  ).isRequired,
  cardType: Ot.propTypes.type,
  cardEventFormat: Ot.propTypes.eventFormat,
  cardHorizontal: Ot.propTypes.horizontal,
  width: m.string,
  maxWidth: m.string,
  imageAutoSize: m.bool
};
const ys = m.shape({
  color: m.oneOf(["white", "dark"]),
  text: m.string
}), bs = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  text: m.string
}), ws = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  text: m.string,
  size: m.string
}), ks = m.shape({
  url: m.string,
  filters: m.string
});
m.shape({
  header: ys,
  ctaButton: bs,
  dataSource: ks,
  maxItems: m.number
});
const Rr = {
  header: {
    color: "dark",
    text: ""
  },
  ctaButton: {
    color: "gold",
    text: "More stories and videos",
    url: "https://news.asu.edu"
  },
  cardButton: {
    color: "maroon",
    text: "Read at ASU News",
    size: "default"
  },
  dataSource: {
    url: "https://asunow.asu.edu/feeds-json"
  }
}, po = ["newsUnits", "interests", "audiences", "eventTypes"], sf = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < po.length; n += 1) {
    const a = po[n];
    for (let i = 0; i < r.length; i += 1) {
      const o = r[i], l = (e[a] || "").match(new RegExp(o, "gi"));
      if ((l == null ? void 0 : l.length) > 0) return !0;
    }
  }
  return !1;
}, mo = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, lf = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_url,
  title: mo(e.title, 80),
  content: mo(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), Ut = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: a
}) => {
  var s;
  const i = (s = n.filters) == null ? void 0 : s.replace(/_/g, " "), o = { ...n, filters: i };
  return /* @__PURE__ */ D.jsx(
    bc,
    {
      renderHeader: t && r ? /* @__PURE__ */ D.jsx(
        wc,
        {
          header: t,
          ctaButton: r,
          defaultProps: Rr
        }
      ) : null,
      renderBody: /* @__PURE__ */ D.jsx(yc, { children: e }),
      dataTransformer: lf,
      dataFilter: sf,
      dataSource: o,
      defaultProps: Rr,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Ut.propTypes = {
  header: ys,
  ctaButton: bs,
  dataSource: ks,
  maxItems: m.number,
  children: m.element
};
const cf = rr.section``, uf = (e, t, r) => ({
  id: t,
  imageSource: e.imageUrl,
  imageAltText: e.imageAltText,
  title: e.title,
  content: e.content,
  buttons: [
    {
      ariaLabel: r.text,
      color: r.color,
      label: r.text,
      size: r.size,
      href: e.buttonLink
    }
  ]
}), df = ({ cardButton: e }) => {
  const { feeds: t } = ir(ja), r = t == null ? void 0 : t.map(
    (n, a) => uf(n, a, e)
  );
  return /* @__PURE__ */ D.jsx(cf, { children: /* @__PURE__ */ D.jsx(
    vs,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, Ss = ({ cardButton: e, ...t }) => (En(() => {
  typeof window < "u" && $a({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ D.jsx(Ut, { ...t, children: /* @__PURE__ */ D.jsx(
  df,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
Ss.propTypes = Ut.propTypes;
const Es = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), ff = rr.section`
  .c-card {
    height: 100%;
  }
`, pf = (e, t) => /* @__PURE__ */ D.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ D.jsx(
      Bo,
      {
        type: "default",
        eventFormat: "inline",
        eventLocation: e.location,
        clickable: !!e.buttonLink,
        cardLink: e.alias,
        clickHref: e.buttonLink,
        title: e.title,
        body: `<p class="card-text text-dark">${e.content}</p>`,
        image: e.imageUrl,
        imageAltText: e.title,
        linkLabel: e.eventButtonText,
        linkUrl: e.eventButtonUrl || e.buttonLink,
        buttons: [
          {
            ariaLabel: t.text,
            color: t.color,
            label: t.text,
            size: t.size,
            href: e.buttonLink
          }
        ],
        tags: Es(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), mf = ({ cardButton: e }) => {
  const { feeds: t } = ir(ja);
  return /* @__PURE__ */ D.jsx(ff, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ D.jsx(Nt.Fragment, { children: pf(r, e) }, n)
  )) });
}, Ts = ({ cardButton: e, ...t }) => (En(() => {
  typeof window < "u" && $a({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ D.jsx(Ut, { ...t, children: /* @__PURE__ */ D.jsx(
  mf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
Ts.propTypes = {
  ...Ut.propTypes,
  cardButton: ws
};
const hf = rr.section``, gf = (e, t) => /* @__PURE__ */ D.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ D.jsx(
  Bo,
  {
    type: "story",
    horizontal: !0,
    eventFormat: "inline",
    eventLocation: e.location,
    clickable: !!e.buttonLink,
    cardLink: e.alias,
    clickHref: e.buttonLink,
    title: e.title,
    body: `<p class="card-text text-dark">${e.content}</p>`,
    image: e.imageUrl,
    imageAltText: e.title,
    linkLabel: e.eventButtonText,
    linkUrl: e.eventButtonUrl || (e == null ? void 0 : e.buttonLink),
    buttons: [
      {
        ariaLabel: t.text,
        color: t.color,
        label: t.text,
        size: t.size,
        href: e.buttonLink
      }
    ],
    tags: Es(e == null ? void 0 : e.interests)
  }
) }, e.id), vf = ({ cardButton: e }) => {
  const { feeds: t } = ir(ja);
  return /* @__PURE__ */ D.jsx(hf, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ D.jsx(Nt.Fragment, { children: gf(r, e) }, n)
  )) });
}, xs = ({ cardButton: e, ...t }) => (En(() => {
  typeof window < "u" && $a({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ D.jsx(Ut, { ...t, children: /* @__PURE__ */ D.jsx(
  vf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
xs.propTypes = { ...Ut.propTypes, feedCardButtonShape: ws };
var As, ho = Ms;
As = ho.createRoot, ho.hydrateRoot;
const Xa = (e, t, r) => {
  As(r).render(Nt.createElement(e, t));
}, kf = ({ targetSelector: e, props: t }) => {
  Xa(Ts, t, document.querySelector(e));
}, Sf = ({ targetSelector: e, props: t }) => {
  Xa(xs, t, document.querySelector(e));
}, Ef = ({ targetSelector: e, props: t }) => {
  Xa(Ss, t, document.querySelector(e));
};
export {
  Ss as CardCarouselNews,
  Ts as CardGridNews,
  xs as CardListlNews,
  Ef as initCardCarouselNewsComponent,
  kf as initCardGridNewsComponent,
  Sf as initCardListNewsComponent
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
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
