import * as nt from "react";
import Rt, { useRef as Cs, useContext as ir, createElement as Rs, useEffect as En } from "react";
import * as Ls from "react-dom";
import Ps from "react-dom";
function xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ho = { exports: {} }, Sr = {};
var fi;
function Is() {
  if (fi) return Sr;
  fi = 1;
  var e = Rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, l, d) {
    var p, f = {}, h = null, T = null;
    d !== void 0 && (h = "" + d), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (p in l) n.call(l, p) && !i.hasOwnProperty(p) && (f[p] = l[p]);
    if (s && s.defaultProps) for (p in l = s.defaultProps, l) f[p] === void 0 && (f[p] = l[p]);
    return { $$typeof: t, type: s, key: h, ref: T, props: f, _owner: a.current };
  }
  return Sr.Fragment = r, Sr.jsx = o, Sr.jsxs = o, Sr;
}
ho.exports = Is();
var M = ho.exports, Ze = { env: { NODE_ENV: "production" } }, Ms = { 651: function(e) {
  e.exports = function() {
    function t(H) {
      return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function($) {
        return typeof $;
      } : function($) {
        return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
      }, t(H);
    }
    function r(H, $) {
      return r = Object.setPrototypeOf || function(V, z) {
        return V.__proto__ = z, V;
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
      }() ? Reflect.construct : function(z, F, le) {
        var Te = [null];
        Te.push.apply(Te, F);
        var He = new (Function.bind.apply(z, Te))();
        return le && r(He, le.prototype), He;
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
          var z = Object.prototype.toString.call($).slice(8, -1);
          return z === "Object" && $.constructor && (z = $.constructor.name), z === "Map" || z === "Set" ? Array.from($) : z === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z) ? i($, V) : void 0;
        }
      }(H) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function i(H, $) {
      ($ == null || $ > H.length) && ($ = H.length);
      for (var V = 0, z = new Array($); V < $; V++) z[V] = H[V];
      return z;
    }
    var o = Object.hasOwnProperty, s = Object.setPrototypeOf, l = Object.isFrozen, d = Object.getPrototypeOf, p = Object.getOwnPropertyDescriptor, f = Object.freeze, h = Object.seal, T = Object.create, w = typeof Reflect < "u" && Reflect, k = w.apply, E = w.construct;
    k || (k = function(H, $, V) {
      return H.apply($, V);
    }), f || (f = function(H) {
      return H;
    }), h || (h = function(H) {
      return H;
    }), E || (E = function(H, $) {
      return n(H, a($));
    });
    var _, x = re(Array.prototype.forEach), D = re(Array.prototype.pop), L = re(Array.prototype.push), S = re(String.prototype.toLowerCase), R = re(String.prototype.toString), O = re(String.prototype.match), W = re(String.prototype.replace), de = re(String.prototype.indexOf), we = re(String.prototype.trim), ae = re(RegExp.prototype.test), ee = (_ = TypeError, function() {
      for (var H = arguments.length, $ = new Array(H), V = 0; V < H; V++) $[V] = arguments[V];
      return E(_, $);
    });
    function re(H) {
      return function($) {
        for (var V = arguments.length, z = new Array(V > 1 ? V - 1 : 0), F = 1; F < V; F++) z[F - 1] = arguments[F];
        return k(H, $, z);
      };
    }
    function X(H, $, V) {
      var z;
      V = (z = V) !== null && z !== void 0 ? z : S, s && s(H, null);
      for (var F = $.length; F--; ) {
        var le = $[F];
        if (typeof le == "string") {
          var Te = V(le);
          Te !== le && (l($) || ($[F] = Te), le = Te);
        }
        H[le] = !0;
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
      return function(z) {
        return console.warn("fallback value for", z), null;
      };
    }
    var pe = f(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ke = f(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qe = f(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Q = f(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), q = f(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), N = f(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), A = f(["#text"]), y = f(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), P = f(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), g = f(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), I = f(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), C = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ie = h(/<%[\w\W]*|[\w\W]*%>/gm), te = h(/\${[\w\W]*}/gm), Y = h(/^data-[\-\w.\u00B7-\uFFFF]/), Z = h(/^aria-[\-\w]+$/), ne = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), fe = h(/^(?:\w+script|data):/i), oe = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), se = h(/^html$/i), K = h(/^[a-z][.\w]*(-[.\w]+)+$/i), ce = function() {
      return typeof window > "u" ? null : window;
    }, je = function H() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ce(), V = function(v) {
        return H(v);
      };
      if (V.version = "2.5.6", V.removed = [], !$ || !$.document || $.document.nodeType !== 9) return V.isSupported = !1, V;
      var z = $.document, F = $.document, le = $.DocumentFragment, Te = $.HTMLTemplateElement, He = $.Node, ze = $.Element, kt = $.NodeFilter, lr = $.NamedNodeMap, Pr = lr === void 0 ? $.NamedNodeMap || $.MozNamedAttrMap : lr, cr = $.HTMLFormElement, Ir = $.DOMParser, ut = $.trustedTypes, dt = ze.prototype, st = De(dt, "cloneNode"), St = De(dt, "nextSibling"), ur = De(dt, "childNodes"), Pt = De(dt, "parentNode");
      if (typeof Te == "function") {
        var dr = F.createElement("template");
        dr.content && dr.content.ownerDocument && (F = dr.content.ownerDocument);
      }
      var $e = function(v, U) {
        if (t(v) !== "object" || typeof v.createPolicy != "function") return null;
        var G = null, ge = "data-tt-policy-suffix";
        U.currentScript && U.currentScript.hasAttribute(ge) && (G = U.currentScript.getAttribute(ge));
        var Fe = "dompurify" + (G ? "#" + G : "");
        try {
          return v.createPolicy(Fe, { createHTML: function(Ne) {
            return Ne;
          }, createScriptURL: function(Ne) {
            return Ne;
          } });
        } catch {
          return console.warn("TrustedTypes policy " + Fe + " could not be created."), null;
        }
      }(ut, z), fr = $e ? $e.createHTML("") : "", Wt = F, Ce = Wt.implementation, Et = Wt.createNodeIterator, Cn = Wt.createDocumentFragment, Mr = Wt.getElementsByTagName, pr = z.importNode, mr = {};
      try {
        mr = he(F).documentMode ? F.documentMode : {};
      } catch {
      }
      var Ke = {};
      V.isSupported = typeof Pt == "function" && Ce && Ce.createHTMLDocument !== void 0 && mr !== 9;
      var Tt, xe, It = C, hr = ie, Ve = te, qt = Y, Dr = Z, jr = fe, gr = oe, Mt = K, Qe = ne, Le = null, vr = X({}, [].concat(a(pe), a(ke), a(qe), a(q), a(A))), Pe = null, yr = X({}, [].concat(a(y), a(P), a(g), a(I))), Ae = Object.seal(Object.create(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), J = null, b = null, j = !0, B = !0, me = !1, Ue = !0, _e = !1, Ie = !0, Ye = !1, Oe = !1, Dt = !1, ft = !1, br = !1, $r = !1, Xa = !0, Za = !1, Rn = !0, wr = !1, Vt = {}, Yt = null, Ka = X({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Qa = null, Ja = X({}, ["audio", "video", "img", "source", "image", "track"]), Ln = null, ei = X({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fr = "http://www.w3.org/1998/Math/MathML", zr = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml", Gt = pt, ti = !1, Pn = null, xs = X({}, [Fr, zr, pt], R), As = ["application/xhtml+xml", "text/html"], Xt = null, _s = F.createElement("form"), ri = function(v) {
        return v instanceof RegExp || v instanceof Function;
      }, In = function(v) {
        Xt && Xt === v || (v && t(v) === "object" || (v = {}), v = he(v), Tt = Tt = As.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? "text/html" : v.PARSER_MEDIA_TYPE, xe = Tt === "application/xhtml+xml" ? R : S, Le = "ALLOWED_TAGS" in v ? X({}, v.ALLOWED_TAGS, xe) : vr, Pe = "ALLOWED_ATTR" in v ? X({}, v.ALLOWED_ATTR, xe) : yr, Pn = "ALLOWED_NAMESPACES" in v ? X({}, v.ALLOWED_NAMESPACES, R) : xs, Ln = "ADD_URI_SAFE_ATTR" in v ? X(he(ei), v.ADD_URI_SAFE_ATTR, xe) : ei, Qa = "ADD_DATA_URI_TAGS" in v ? X(he(Ja), v.ADD_DATA_URI_TAGS, xe) : Ja, Yt = "FORBID_CONTENTS" in v ? X({}, v.FORBID_CONTENTS, xe) : Ka, J = "FORBID_TAGS" in v ? X({}, v.FORBID_TAGS, xe) : {}, b = "FORBID_ATTR" in v ? X({}, v.FORBID_ATTR, xe) : {}, Vt = "USE_PROFILES" in v && v.USE_PROFILES, j = v.ALLOW_ARIA_ATTR !== !1, B = v.ALLOW_DATA_ATTR !== !1, me = v.ALLOW_UNKNOWN_PROTOCOLS || !1, Ue = v.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _e = v.SAFE_FOR_TEMPLATES || !1, Ie = v.SAFE_FOR_XML !== !1, Ye = v.WHOLE_DOCUMENT || !1, ft = v.RETURN_DOM || !1, br = v.RETURN_DOM_FRAGMENT || !1, $r = v.RETURN_TRUSTED_TYPE || !1, Dt = v.FORCE_BODY || !1, Xa = v.SANITIZE_DOM !== !1, Za = v.SANITIZE_NAMED_PROPS || !1, Rn = v.KEEP_CONTENT !== !1, wr = v.IN_PLACE || !1, Qe = v.ALLOWED_URI_REGEXP || Qe, Gt = v.NAMESPACE || pt, Ae = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && ri(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && ri(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ae.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _e && (B = !1), br && (ft = !0), Vt && (Le = X({}, a(A)), Pe = [], Vt.html === !0 && (X(Le, pe), X(Pe, y)), Vt.svg === !0 && (X(Le, ke), X(Pe, P), X(Pe, I)), Vt.svgFilters === !0 && (X(Le, qe), X(Pe, P), X(Pe, I)), Vt.mathMl === !0 && (X(Le, q), X(Pe, g), X(Pe, I))), v.ADD_TAGS && (Le === vr && (Le = he(Le)), X(Le, v.ADD_TAGS, xe)), v.ADD_ATTR && (Pe === yr && (Pe = he(Pe)), X(Pe, v.ADD_ATTR, xe)), v.ADD_URI_SAFE_ATTR && X(Ln, v.ADD_URI_SAFE_ATTR, xe), v.FORBID_CONTENTS && (Yt === Ka && (Yt = he(Yt)), X(Yt, v.FORBID_CONTENTS, xe)), Rn && (Le["#text"] = !0), Ye && X(Le, ["html", "head", "body"]), Le.table && (X(Le, ["tbody"]), delete J.tbody), f && f(v), Xt = v);
      }, ni = X({}, ["mi", "mo", "mn", "ms", "mtext"]), ai = X({}, ["foreignobject", "annotation-xml"]), Os = X({}, ["title", "style", "font", "a", "script"]), Hr = X({}, ke);
      X(Hr, qe), X(Hr, Q);
      var Mn = X({}, q);
      X(Mn, N);
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
        if (U.removeAttribute(v), v === "is" && !Pe[v]) if (ft || br) try {
          rt(U);
        } catch {
        }
        else try {
          U.setAttribute(v, "");
        } catch {
        }
      }, ii = function(v) {
        var U, G;
        if (Dt) v = "<remove></remove>" + v;
        else {
          var ge = O(v, /^[\r\n\t ]+/);
          G = ge && ge[0];
        }
        Tt === "application/xhtml+xml" && Gt === pt && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
        var Fe = $e ? $e.createHTML(v) : v;
        if (Gt === pt) try {
          U = new Ir().parseFromString(Fe, Tt);
        } catch {
        }
        if (!U || !U.documentElement) {
          U = Ce.createDocument(Gt, "template", null);
          try {
            U.documentElement.innerHTML = ti ? fr : Fe;
          } catch {
          }
        }
        var Ne = U.body || U.documentElement;
        return v && G && Ne.insertBefore(F.createTextNode(G), Ne.childNodes[0] || null), Gt === pt ? Mr.call(U, Ye ? "html" : "body")[0] : Ye ? U.documentElement : Ne;
      }, oi = function(v) {
        return Et.call(v.ownerDocument || v, v, kt.SHOW_ELEMENT | kt.SHOW_COMMENT | kt.SHOW_TEXT | kt.SHOW_PROCESSING_INSTRUCTION | kt.SHOW_CDATA_SECTION, null, !1);
      }, si = function(v) {
        return v instanceof cr && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof Pr) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
      }, kr = function(v) {
        return t(He) === "object" ? v instanceof He : v && t(v) === "object" && typeof v.nodeType == "number" && typeof v.nodeName == "string";
      }, mt = function(v, U, G) {
        Ke[v] && x(Ke[v], function(ge) {
          ge.call(V, U, G, Xt);
        });
      }, li = function(v) {
        var U;
        if (mt("beforeSanitizeElements", v, null), si(v) || ae(/[\u0080-\uFFFF]/, v.nodeName)) return rt(v), !0;
        var G = xe(v.nodeName);
        if (mt("uponSanitizeElement", v, { tagName: G, allowedTags: Le }), v.hasChildNodes() && !kr(v.firstElementChild) && (!kr(v.content) || !kr(v.content.firstElementChild)) && ae(/<[/\w]/g, v.innerHTML) && ae(/<[/\w]/g, v.textContent) || G === "select" && ae(/<template/i, v.innerHTML) || v.nodeType === 7 || Ie && v.nodeType === 8 && ae(/<[/\w]/g, v.data)) return rt(v), !0;
        if (!Le[G] || J[G]) {
          if (!J[G] && ui(G) && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, G) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(G)))
            return !1;
          if (Rn && !Yt[G]) {
            var ge = Pt(v) || v.parentNode, Fe = ur(v) || v.childNodes;
            if (Fe && ge) for (var Ne = Fe.length - 1; Ne >= 0; --Ne) {
              var Ge = st(Fe[Ne], !0);
              Ge.__removalCount = (v.__removalCount || 0) + 1, ge.insertBefore(Ge, St(v));
            }
          }
          return rt(v), !0;
        }
        return v instanceof ze && !function(Je) {
          var Me = Pt(Je);
          Me && Me.tagName || (Me = { namespaceURI: Gt, tagName: "template" });
          var Se = S(Je.tagName), xt = S(Me.tagName);
          return !!Pn[Je.namespaceURI] && (Je.namespaceURI === zr ? Me.namespaceURI === pt ? Se === "svg" : Me.namespaceURI === Fr ? Se === "svg" && (xt === "annotation-xml" || ni[xt]) : !!Hr[Se] : Je.namespaceURI === Fr ? Me.namespaceURI === pt ? Se === "math" : Me.namespaceURI === zr ? Se === "math" && ai[xt] : !!Mn[Se] : Je.namespaceURI === pt ? !(Me.namespaceURI === zr && !ai[xt]) && !(Me.namespaceURI === Fr && !ni[xt]) && !Mn[Se] && (Os[Se] || !Hr[Se]) : !(Tt !== "application/xhtml+xml" || !Pn[Je.namespaceURI]));
        }(v) ? (rt(v), !0) : G !== "noscript" && G !== "noembed" && G !== "noframes" || !ae(/<\/no(script|embed|frames)/i, v.innerHTML) ? (_e && v.nodeType === 3 && (U = v.textContent, U = W(U, It, " "), U = W(U, hr, " "), U = W(U, Ve, " "), v.textContent !== U && (L(V.removed, { element: v.cloneNode() }), v.textContent = U)), mt("afterSanitizeElements", v, null), !1) : (rt(v), !0);
      }, ci = function(v, U, G) {
        if (Xa && (U === "id" || U === "name") && (G in F || G in _s)) return !1;
        if (!(B && !b[U] && ae(qt, U))) {
          if (!(j && ae(Dr, U))) {
            if (!Pe[U] || b[U]) {
              if (!(ui(v) && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, v) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(v)) && (Ae.attributeNameCheck instanceof RegExp && ae(Ae.attributeNameCheck, U) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(U)) || U === "is" && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && ae(Ae.tagNameCheck, G) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(G)))) return !1;
            } else if (!Ln[U]) {
              if (!ae(Qe, W(G, gr, ""))) {
                if ((U !== "src" && U !== "xlink:href" && U !== "href" || v === "script" || de(G, "data:") !== 0 || !Qa[v]) && !(me && !ae(jr, W(G, gr, "")))) {
                  if (G) return !1;
                }
              }
            }
          }
        }
        return !0;
      }, ui = function(v) {
        return v !== "annotation-xml" && O(v, Mt);
      }, di = function(v) {
        var U, G, ge, Fe;
        mt("beforeSanitizeAttributes", v, null);
        var Ne = v.attributes;
        if (Ne) {
          var Ge = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Pe };
          for (Fe = Ne.length; Fe--; ) {
            var Je = U = Ne[Fe], Me = Je.name, Se = Je.namespaceURI;
            if (G = Me === "value" ? U.value : we(U.value), ge = xe(Me), Ge.attrName = ge, Ge.attrValue = G, Ge.keepAttr = !0, Ge.forceKeepAttr = void 0, mt("uponSanitizeAttribute", v, Ge), G = Ge.attrValue, Ie && ae(/((--!?|])>)|<\/(style|title)/i, G)) Ur(Me, v);
            else if (!Ge.forceKeepAttr && (Ur(Me, v), Ge.keepAttr)) if (Ue || !ae(/\/>/i, G)) {
              _e && (G = W(G, It, " "), G = W(G, hr, " "), G = W(G, Ve, " "));
              var xt = xe(v.nodeName);
              if (ci(xt, ge, G)) {
                if (!Za || ge !== "id" && ge !== "name" || (Ur(Me, v), G = "user-content-" + G), $e && t(ut) === "object" && typeof ut.getAttributeType == "function" && !Se) switch (ut.getAttributeType(xt, ge)) {
                  case "TrustedHTML":
                    G = $e.createHTML(G);
                    break;
                  case "TrustedScriptURL":
                    G = $e.createScriptURL(G);
                }
                try {
                  Se ? v.setAttributeNS(Se, Me, G) : v.setAttribute(Me, G), si(v) ? rt(v) : D(V.removed);
                } catch {
                }
              }
            } else Ur(Me, v);
          }
          mt("afterSanitizeAttributes", v, null);
        }
      }, Ns = function v(U) {
        var G, ge = oi(U);
        for (mt("beforeSanitizeShadowDOM", U, null); G = ge.nextNode(); ) mt("uponSanitizeShadowNode", G, null), li(G) || (G.content instanceof le && v(G.content), di(G));
        mt("afterSanitizeShadowDOM", U, null);
      };
      return V.sanitize = function(v) {
        var U, G, ge, Fe, Ne, Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((ti = !v) && (v = "<!-->"), typeof v != "string" && !kr(v)) {
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
        if (Oe || In(Ge), V.removed = [], typeof v == "string" && (wr = !1), wr) {
          if (v.nodeName) {
            var Je = xe(v.nodeName);
            if (!Le[Je] || J[Je]) throw ee("root node is forbidden and cannot be sanitized in-place");
          }
        } else if (v instanceof He) (G = (U = ii("<!---->")).ownerDocument.importNode(v, !0)).nodeType === 1 && G.nodeName === "BODY" || G.nodeName === "HTML" ? U = G : U.appendChild(G);
        else {
          if (!ft && !_e && !Ye && v.indexOf("<") === -1) return $e && $r ? $e.createHTML(v) : v;
          if (!(U = ii(v))) return ft ? null : $r ? fr : "";
        }
        U && Dt && rt(U.firstChild);
        for (var Me = oi(wr ? v : U); ge = Me.nextNode(); ) ge.nodeType === 3 && ge === Fe || li(ge) || (ge.content instanceof le && Ns(ge.content), di(ge), Fe = ge);
        if (Fe = null, wr) return v;
        if (ft) {
          if (br) for (Ne = Cn.call(U.ownerDocument); U.firstChild; ) Ne.appendChild(U.firstChild);
          else Ne = U;
          return (Pe.shadowroot || Pe.shadowrootmod) && (Ne = pr.call(z, Ne, !0)), Ne;
        }
        var Se = Ye ? U.outerHTML : U.innerHTML;
        return Ye && Le["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && ae(se, U.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + Se), _e && (Se = W(Se, It, " "), Se = W(Se, hr, " "), Se = W(Se, Ve, " ")), $e && $r ? $e.createHTML(Se) : Se;
      }, V.setConfig = function(v) {
        In(v), Oe = !0;
      }, V.clearConfig = function() {
        Xt = null, Oe = !1;
      }, V.isValidAttribute = function(v, U, G) {
        Xt || In({});
        var ge = xe(v), Fe = xe(U);
        return ci(ge, Fe, G);
      }, V.addHook = function(v, U) {
        typeof U == "function" && (Ke[v] = Ke[v] || [], L(Ke[v], U));
      }, V.removeHook = function(v) {
        if (Ke[v]) return D(Ke[v]);
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
  e.exports = function k(E, _, x) {
    if (typeof _ != "string") {
      if (w) {
        var D = T(_);
        D && D !== w && k(E, D, x);
      }
      var L = p(_);
      f && (L = L.concat(f(_)));
      for (var S = l(E), R = l(_), O = 0; O < L.length; ++O) {
        var W = L[O];
        if (!(i[W] || x && x[W] || R && R[W] || S && S[W])) {
          var de = h(_, W);
          try {
            d(E, W, de);
          } catch {
          }
        }
      }
    }
    return E;
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
}, 320: (e, t) => {
  var r = typeof Symbol == "function" && Symbol.for, n = r ? Symbol.for("react.element") : 60103, a = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, l = r ? Symbol.for("react.provider") : 60109, d = r ? Symbol.for("react.context") : 60110, p = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, h = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, w = r ? Symbol.for("react.suspense_list") : 60120, k = r ? Symbol.for("react.memo") : 60115, E = r ? Symbol.for("react.lazy") : 60116, _ = r ? Symbol.for("react.block") : 60121, x = r ? Symbol.for("react.fundamental") : 60117, D = r ? Symbol.for("react.responder") : 60118, L = r ? Symbol.for("react.scope") : 60119;
  function S(O) {
    if (typeof O == "object" && O !== null) {
      var W = O.$$typeof;
      switch (W) {
        case n:
          switch (O = O.type) {
            case p:
            case f:
            case i:
            case s:
            case o:
            case T:
              return O;
            default:
              switch (O = O && O.$$typeof) {
                case d:
                case h:
                case E:
                case k:
                case l:
                  return O;
                default:
                  return W;
              }
          }
        case a:
          return W;
      }
    }
  }
  function R(O) {
    return S(O) === f;
  }
  t.AsyncMode = p, t.ConcurrentMode = f, t.ContextConsumer = d, t.ContextProvider = l, t.Element = n, t.ForwardRef = h, t.Fragment = i, t.Lazy = E, t.Memo = k, t.Portal = a, t.Profiler = s, t.StrictMode = o, t.Suspense = T, t.isAsyncMode = function(O) {
    return R(O) || S(O) === p;
  }, t.isConcurrentMode = R, t.isContextConsumer = function(O) {
    return S(O) === d;
  }, t.isContextProvider = function(O) {
    return S(O) === l;
  }, t.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === n;
  }, t.isForwardRef = function(O) {
    return S(O) === h;
  }, t.isFragment = function(O) {
    return S(O) === i;
  }, t.isLazy = function(O) {
    return S(O) === E;
  }, t.isMemo = function(O) {
    return S(O) === k;
  }, t.isPortal = function(O) {
    return S(O) === a;
  }, t.isProfiler = function(O) {
    return S(O) === s;
  }, t.isStrictMode = function(O) {
    return S(O) === o;
  }, t.isSuspense = function(O) {
    return S(O) === T;
  }, t.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === i || O === f || O === s || O === o || O === T || O === w || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === k || O.$$typeof === l || O.$$typeof === d || O.$$typeof === h || O.$$typeof === x || O.$$typeof === D || O.$$typeof === L || O.$$typeof === _);
  }, t.typeOf = S;
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
} }, pi = {};
function Re(e) {
  var t = pi[e];
  if (t !== void 0) return t.exports;
  var r = pi[e] = { exports: {} };
  return Ms[e].call(r.exports, r, r.exports, Re), r.exports;
}
Re.n = (e) => {
  var t = e && e.__esModule ? () => e.default : () => e;
  return Re.d(t, { a: t }), t;
}, Re.d = (e, t) => {
  for (var r in t) Re.o(t, r) && !Re.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
}, Re.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Re.nc = void 0;
var or = {};
Re.d(or, { nD: () => Aa, n_: () => Na, n9: () => pn, $n: () => yt, ef: () => mn, fy: () => Or, Zp: () => hn, TR: () => Po, Pb: () => No, Ur: () => Oo, _Q: () => Lo, lq: () => La, _V: () => Ut, dK: () => vn, Fx: () => Pa, oz: () => Fo, YT: () => zo, Gm: () => Ia, Ce: () => Ma, qm: () => Xl, fh: () => Ro, Od: () => Ra, fZ: () => Co, RE: () => Ca, hZ: () => rc, Nq: () => nc, NJ: () => ac, bO: () => ic, oP: () => oc, jl: () => sc, PP: () => lc, BB: () => cc, Q9: () => uc, vW: () => fc, VE: () => dc, _v: () => pc, uP: () => mc });
var Ds = Re(67), c = Re.n(Ds);
const u = (mi = { Component: () => nt.Component, createContext: () => nt.createContext, createElement: () => nt.createElement, default: () => nt.default, forwardRef: () => nt.forwardRef, useCallback: () => nt.useCallback, useContext: () => nt.useContext, useEffect: () => nt.useEffect, useImperativeHandle: () => nt.useImperativeHandle, useMemo: () => nt.useMemo, useRef: () => nt.useRef, useState: () => nt.useState }, Dn = {}, Re.d(Dn, mi), Dn);
var mi, Dn;
const hi = (e, t, r) => e ? t : r, en = (e) => (e || []).join(" ");
var js = Re(651);
const at = (e) => ({ __html: (0, js.sanitize)(e) }), gi = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; ) n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
let vi, jn = !1;
c().shape({ event: c().string, action: c().string, name: c().string, region: c().string, section: c().string, component: c().string, type: c().string, text: c().string });
const et = ({ event: e = "", action: t = "", name: r = "", type: n = "", section: a = "", text: i = "", region: o = "", component: s = "" }) => {
  const { dataLayer: l } = window, d = { event: e.toLowerCase(), action: t.toLowerCase(), name: r.toLowerCase(), type: n.toLowerCase(), region: o.toLowerCase(), section: a.toLowerCase(), text: i.toLowerCase(), component: s.toLowerCase() };
  l && l.push(d);
}, $s = c().shape({ url: c().string, altText: c().string, cssClass: c().arrayOf(c().string), size: c().oneOf(["small", "medium", "large"]) }), $n = c().shape({ text: c().string, maxWidth: c().string, cssClass: c().arrayOf(c().string), highlightColor: c().oneOf(["gold", "black"]) }), go = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), content: c().shape({ icon: c().string, header: c().string, body: c().string }) });
var Fs = Re(373), be = Re.n(Fs);
const vo = ({ id: e, item: t, openCard: r, onClick: n }) => {
  var a, i, o, s, l, d;
  return u.default.createElement("div", { className: be()("accordion-item", "mt-3", { [`accordion-item-${t.color}`]: t.color, "accordion-header-icon": (a = t.content) == null ? void 0 : a.icon }) }, u.default.createElement("div", { className: "accordion-header" }, u.default.createElement("h4", null, u.default.createElement("a", { "data-testid": "accordion-opener", className: be()({ collapsed: e !== r }), "data-bs-toggle": "collapse", href: `#card-body-${e}`, role: "button", "aria-expanded": e === r, "aria-controls": `card-body-${e}`, onClick: (p) => {
    var f;
    return n(p, e, (f = t.content) == null ? void 0 : f.header);
  } }, (i = t.content) != null && i.icon ? u.default.createElement("span", { className: "accordion-icon" }, u.default.createElement("i", { className: `${(o = t.content.icon) == null ? void 0 : o[0]} fa-${(s = t.content.icon) == null ? void 0 : s[1]} me-2` }), t.content.header) : (l = t.content) == null ? void 0 : l.header, u.default.createElement("i", { className: "fas fa-chevron-up" })))), ((d = t.content) == null ? void 0 : d.body) && u.default.createElement("div", { id: `card-body-${e}`, className: be()("collapse") }, u.default.createElement("div", { className: "accordion-body", dangerouslySetInnerHTML: at(t.content.body) })));
};
vo.propTypes = { id: c().number, item: go, openCard: c().number, onClick: c().func };
const zs = { event: "collapse", name: "onclick", type: "click", region: "main content" }, Aa = ({ cards: e, openedCard: t }) => {
  const [r, n] = (0, u.useState)(t), a = (o, s) => {
    et({ ...zs, action: s, text: o });
  }, i = (o, s, l) => {
    o.preventDefault(), (r === s || r) && a(e[r - 1].content.header, "close"), r !== s ? (n(s), a(l, "open")) : n(null);
  };
  return u.default.createElement("div", { className: "accordion" }, e == null ? void 0 : e.map((o, s) => o.content.body && o.content.header && u.default.createElement(vo, { key: s + 1, id: s + 1, item: o, openCard: r, onClick: i })));
};
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ct.apply(null, arguments);
}
Aa.propTypes = { cards: c().arrayOf(go).isRequired, openedCard: c().number };
const Hs = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, yt = ({ label: e, cardTitle: t, ariaLabel: r, block: n, color: a, disabled: i, element: o, href: s, icon: l, innerRef: d, onClick: p, size: f, classes: h, target: T, ...w }) => {
  const k = be()("btn", { [`btn-${a}`]: !0, "btn-md": f === "small", "btn-sm": f === "xsmall", "btn-block": n, disabled: i });
  let E = o;
  return s && o === "button" && (E = "a"), u.default.createElement(E, Ct({ type: E === "button" && p ? "button" : void 0 }, w, { className: be()(h) || k, href: s, ref: d, onClick: () => (et({ ...Hs, text: e, section: t }), void (p == null ? void 0 : p())), "aria-label": r, target: E === "a" ? T : null }), l && u.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }), e);
};
yt.propTypes = { label: c().string, cardTitle: c().string, ariaLabel: c().string, block: c().bool, color: c().oneOf(["gold", "maroon", "gray", "dark"]), disabled: c().bool, element: c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), href: c().string, icon: c().arrayOf(c().string), innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), classes: c().arrayOf(c().string), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) }, yt.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, block: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, icon: void 0, innerRef: void 0, onClick: void 0, size: "default", classes: void 0, target: "_self" };
var yo = Re(524), Us = Re(146);
Re.n(Us);
const Bs = function(e) {
  function t(Q, q, N, A, y) {
    for (var P, g, I, C, ie, te = 0, Y = 0, Z = 0, ne = 0, fe = 0, oe = 0, se = I = P = 0, K = 0, ce = 0, je = 0, H = 0, $ = N.length, V = $ - 1, z = "", F = "", le = "", Te = ""; K < $; ) {
      if (g = N.charCodeAt(K), K === V && Y + ne + Z + te !== 0 && (Y !== 0 && (g = Y === 47 ? 10 : 47), ne = Z = te = 0, $++, V++), Y + ne + Z + te === 0) {
        if (K === V && (0 < ce && (z = z.replace(f, "")), 0 < z.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              z += N.charAt(K);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (P = (z = z.trim()).charCodeAt(0), I = 1, H = ++K; K < $; ) {
              switch (g = N.charCodeAt(K)) {
                case 123:
                  I++;
                  break;
                case 125:
                  I--;
                  break;
                case 47:
                  switch (g = N.charCodeAt(K + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (se = K + 1; se < V; ++se) switch (N.charCodeAt(se)) {
                          case 47:
                            if (g === 42 && N.charCodeAt(se - 1) === 42 && K + 2 !== se) {
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
                  for (; K++ < V && N.charCodeAt(K) !== g; ) ;
              }
              if (I === 0) break;
              K++;
            }
            if (I = N.substring(H, K), P === 0 && (P = (z = z.replace(p, "").trim()).charCodeAt(0)), P === 64) {
              switch (0 < ce && (z = z.replace(f, "")), g = z.charCodeAt(1)) {
                case 100:
                case 109:
                case 115:
                case 45:
                  ce = q;
                  break;
                default:
                  ce = he;
              }
              if (H = (I = t(q, ce, I, g, y + 1)).length, 0 < pe && (ie = s(3, I, ce = r(he, z, je), q, ee, ae, H, g, y, A), z = ce.join(""), ie !== void 0 && (H = (I = ie.trim()).length) === 0 && (g = 0, I = "")), 0 < H) switch (g) {
                case 115:
                  z = z.replace(S, o);
                case 100:
                case 109:
                case 45:
                  I = z + "{" + I + "}";
                  break;
                case 107:
                  I = (z = z.replace(_, "$1 $2")) + "{" + I + "}", I = X === 1 || X === 2 && i("@" + I, 3) ? "@-webkit-" + I + "@" + I : "@" + I;
                  break;
                default:
                  I = z + I, A === 112 && (F += I, I = "");
              }
              else I = "";
            } else I = t(q, r(q, z, je), I, A, y + 1);
            le += I, I = je = ce = se = P = 0, z = "", g = N.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (1 < (H = (z = (0 < ce ? z.replace(f, "") : z).trim()).length)) switch (se === 0 && (P = z.charCodeAt(0), P === 45 || 96 < P && 123 > P) && (H = (z = z.replace(" ", ":")).length), 0 < pe && (ie = s(1, z, q, Q, ee, ae, F.length, A, y, A)) !== void 0 && (H = (z = ie.trim()).length) === 0 && (z = "\0\0"), P = z.charCodeAt(0), g = z.charCodeAt(1), P) {
              case 0:
                break;
              case 64:
                if (g === 105 || g === 99) {
                  Te += z + N.charAt(K);
                  break;
                }
              default:
                z.charCodeAt(H - 1) !== 58 && (F += a(z, P, g, z.charCodeAt(2)));
            }
            je = ce = se = P = 0, z = "", g = N.charCodeAt(++K);
        }
      }
      switch (g) {
        case 13:
        case 10:
          Y === 47 ? Y = 0 : 1 + P === 0 && A !== 107 && 0 < z.length && (ce = 1, z += "\0"), 0 < pe * qe && s(0, z, q, Q, ee, ae, F.length, A, y, A), ae = 1, ee++;
          break;
        case 59:
        case 125:
          if (Y + ne + Z + te === 0) {
            ae++;
            break;
          }
        default:
          switch (ae++, C = N.charAt(K), g) {
            case 9:
            case 32:
              if (ne + te + Y === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  C = "";
                  break;
                default:
                  g !== 32 && (C = " ");
              }
              break;
            case 0:
              C = "\\0";
              break;
            case 12:
              C = "\\f";
              break;
            case 11:
              C = "\\v";
              break;
            case 38:
              ne + Y + te === 0 && (ce = je = 1, C = "\f" + C);
              break;
            case 108:
              if (ne + Y + te + re === 0 && 0 < se) switch (K - se) {
                case 2:
                  fe === 112 && N.charCodeAt(K - 3) === 58 && (re = fe);
                case 8:
                  oe === 111 && (re = oe);
              }
              break;
            case 58:
              ne + Y + te === 0 && (se = K);
              break;
            case 44:
              Y + Z + ne + te === 0 && (ce = 1, C += "\r");
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
              Y + Z + ne + te + se + I === 0 && (I = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ne + te + Z)) switch (Y) {
                case 0:
                  switch (2 * g + 3 * N.charCodeAt(K + 1)) {
                    case 235:
                      Y = 47;
                      break;
                    case 220:
                      H = K, Y = 42;
                  }
                  break;
                case 42:
                  g === 47 && fe === 42 && H + 2 !== K && (N.charCodeAt(H + 2) === 33 && (F += N.substring(H, K + 1)), C = "", Y = 0);
              }
          }
          Y === 0 && (z += C);
      }
      oe = fe, fe = g, K++;
    }
    if (0 < (H = F.length)) {
      if (ce = q, 0 < pe && (ie = s(2, F, ce, Q, ee, ae, H, A, y, A)) !== void 0 && (F = ie).length === 0) return Te + F + le;
      if (F = ce.join(",") + "{" + F + "}", X * re != 0) {
        switch (X !== 2 || i(F, 2) || (re = 0), re) {
          case 111:
            F = F.replace(D, ":-moz-$1") + F;
            break;
          case 112:
            F = F.replace(x, "::-webkit-input-$1") + F.replace(x, "::-moz-$1") + F.replace(x, ":-ms-input-$1") + F;
        }
        re = 0;
      }
    }
    return Te + F + le;
  }
  function r(Q, q, N) {
    var A = q.trim().split(k);
    q = A;
    var y = A.length, P = Q.length;
    switch (P) {
      case 0:
      case 1:
        var g = 0;
        for (Q = P === 0 ? "" : Q[0] + " "; g < y; ++g) q[g] = n(Q, q[g], N).trim();
        break;
      default:
        var I = g = 0;
        for (q = []; g < y; ++g) for (var C = 0; C < P; ++C) q[I++] = n(Q[C] + " ", A[g], N).trim();
    }
    return q;
  }
  function n(Q, q, N) {
    var A = q.charCodeAt(0);
    switch (33 > A && (A = (q = q.trim()).charCodeAt(0)), A) {
      case 38:
        return q.replace(E, "$1" + Q.trim());
      case 58:
        return Q.trim() + q.replace(E, "$1" + Q.trim());
      default:
        if (0 < 1 * N && 0 < q.indexOf("\f")) return q.replace(E, (Q.charCodeAt(0) === 58 ? "" : "$1") + Q.trim());
    }
    return Q + q;
  }
  function a(Q, q, N, A) {
    var y = Q + ";", P = 2 * q + 3 * N + 4 * A;
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
            return "-webkit-" + y + "-ms-flex-item-" + y.replace(O, "") + y;
          default:
            return "-webkit-" + y + "-ms-flex-line-pack" + y.replace("align-content", "").replace(O, "") + y;
        }
        break;
      case 973:
      case 989:
        if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (de.test(Q) === !0) return (g = Q.substring(Q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(Q.replace("stretch", "fill-available"), q, N, A).replace(":fill-available", ":stretch") : y.replace(g, "-webkit-" + g) + y.replace(g, "-moz-" + g.replace("fill-", "")) + y;
        break;
      case 962:
        if (y = "-webkit-" + y + (y.charCodeAt(5) === 102 ? "-ms-" + y : "") + y, N + A === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf("transform", 10)) return y.substring(0, y.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + y;
    }
    return y;
  }
  function i(Q, q) {
    var N = Q.indexOf(q === 1 ? ":" : "{"), A = Q.substring(0, q !== 3 ? N : 10);
    return N = Q.substring(N + 1, Q.length - 1), ke(q !== 2 ? A : A.replace(W, "$1"), N, q);
  }
  function o(Q, q) {
    var N = a(q, q.charCodeAt(0), q.charCodeAt(1), q.charCodeAt(2));
    return N !== q + ";" ? N.replace(R, " or ($1)").substring(4) : "(" + q + ")";
  }
  function s(Q, q, N, A, y, P, g, I, C, ie) {
    for (var te, Y = 0, Z = q; Y < pe; ++Y) switch (te = De[Y].call(d, Q, Z, N, A, y, P, g, I, C, ie)) {
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
    var N = Q;
    if (33 > N.charCodeAt(0) && (N = N.trim()), N = [N], 0 < pe) {
      var A = s(-1, q, N, N, ee, ae, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (q = A);
    }
    var y = t(he, N, q, 0, 0);
    return 0 < pe && (A = s(-2, y, N, N, ee, ae, y.length, 0, 0, 0)) !== void 0 && (y = A), re = 0, ae = ee = 1, y;
  }
  var p = /^\0+/g, f = /[\0\r\f]/g, h = /: */g, T = /zoo|gra/, w = /([,: ])(transform)/g, k = /,\r+?/g, E = /([\t\r\n ])*\f?&/g, _ = /@(k\w+)\s*(\S*)\s*/, x = /::(place)/g, D = /:(read-only)/g, L = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, R = /([\s\S]*?);/g, O = /-self|flex-/g, W = /[^]*?(:[rp][el]a[\w-]+)[^]*/, de = /stretch|:\s*\w+\-(?:conte|avail)/, we = /([^-])(image-set\()/, ae = 1, ee = 1, re = 0, X = 1, he = [], De = [], pe = 0, ke = null, qe = 0;
  return d.use = function Q(q) {
    switch (q) {
      case void 0:
      case null:
        pe = De.length = 0;
        break;
      default:
        if (typeof q == "function") De[pe++] = q;
        else if (typeof q == "object") for (var N = 0, A = q.length; N < A; ++N) Q(q[N]);
        else qe = 0 | !!q;
    }
    return Q;
  }, d.set = l, e !== void 0 && l(e), d;
}, Ws = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function qs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Vs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yi = qs(function(e) {
  return Vs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
}), Ys = Re(985), Gs = Re.n(Ys);
function gt() {
  return (gt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var bi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Jn = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !(0, yo.typeOf)(e);
}, cn = Object.freeze([]), Ot = Object.freeze({});
function _r(e) {
  return typeof e == "function";
}
function wi(e) {
  return e.displayName || e.name || "Component";
}
function _a(e) {
  return e && typeof e.styledComponentId == "string";
}
var Qt = typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_ATTR || Ze.env.SC_ATTR) || "data-styled", Oa = typeof window < "u" && "HTMLElement" in window, Xs = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Ze < "u" && Ze.env !== void 0 && (Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Ze.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Ze.env.REACT_APP_SC_DISABLE_SPEEDY : Ze.env.SC_DISABLE_SPEEDY !== void 0 && Ze.env.SC_DISABLE_SPEEDY !== "" && Ze.env.SC_DISABLE_SPEEDY !== "false" && Ze.env.SC_DISABLE_SPEEDY));
function Lr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Zs = function() {
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
}, Ks = function(e) {
  return un.get(e);
}, Qs = function(e, t) {
  t >= Tr && (Tr = t + 1), tn.set(e, t), un.set(t, e);
}, Js = "style[" + Qt + '][data-styled-version="5.3.11"]', el = new RegExp("^" + Qt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), tl = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, rl = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var s = o.match(el);
      if (s) {
        var l = 0 | parseInt(s[1], 10), d = s[2];
        l !== 0 && (Qs(d, l), tl(e, d, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, nl = function() {
  return Re.nc;
}, bo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(s) {
    for (var l = s.childNodes, d = l.length; d >= 0; d--) {
      var p = l[d];
      if (p && p.nodeType === 1 && p.hasAttribute(Qt)) return p;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(Qt, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = nl();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, al = function() {
  function e(r) {
    var n = this.element = bo(r);
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
}(), il = function() {
  function e(r) {
    var n = this.element = bo(r);
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
}(), ol = function() {
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
}(), ki = Oa, sl = { isServer: !Oa, useCSSOMInjection: !Xs }, dn = function() {
  function e(r, n, a) {
    r === void 0 && (r = Ot), n === void 0 && (n = {}), this.options = gt({}, sl, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Oa && ki && (ki = !1, function(i) {
      for (var o = document.querySelectorAll(Js), s = 0, l = o.length; s < l; s++) {
        var d = o[s];
        d && d.getAttribute(Qt) !== "active" && (rl(i, d), d.parentNode && d.parentNode.removeChild(d));
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
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new ol(o) : i ? new al(o) : new il(o), new Zs(r)));
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
        var s = Ks(o);
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
}(), ll = /(a)(d)/gi, Si = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ea(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Si(t % 52) + r;
  return (Si(t % 52) + r).replace(ll, "$1-$2");
}
var Zt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, wo = function(e) {
  return Zt(5381, e);
};
function ko(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (_r(r) && !_a(r)) return !1;
  }
  return !0;
}
var cl = wo("5.3.11"), ul = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ko(t), this.componentId = r, this.baseHash = Zt(cl, r), this.baseStyle = n, dn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = Ht(this.rules, t, r, n).join(""), s = ea(Zt(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(a, s)) {
        var l = n(o, "." + s, void 0, a);
        r.insertRules(a, s, l);
      }
      i.push(s), this.staticRulesId = s;
    }
    else {
      for (var d = this.rules.length, p = Zt(this.baseHash, n.hash), f = "", h = 0; h < d; h++) {
        var T = this.rules[h];
        if (typeof T == "string") f += T;
        else if (T) {
          var w = Ht(T, t, r, n), k = Array.isArray(w) ? w.join("") : w;
          p = Zt(p, k + h), f += k;
        }
      }
      if (f) {
        var E = ea(p >>> 0);
        if (!r.hasNameForId(a, E)) {
          var _ = n(f, "." + E, void 0, a);
          r.insertRules(a, E, _);
        }
        i.push(E);
      }
    }
    return i.join(" ");
  }, e;
}(), dl = /^\s*\/\/.*$/gm, fl = [":", "[", ".", "#"];
function pl(e) {
  var t, r, n, a, i = Ot, o = i.options, s = o === void 0 ? Ot : o, l = i.plugins, d = l === void 0 ? cn : l, p = new Bs(s), f = [], h = /* @__PURE__ */ function(k) {
    function E(_) {
      if (_) try {
        k(_ + "}");
      } catch {
      }
    }
    return function(_, x, D, L, S, R, O, W, de, we) {
      switch (_) {
        case 1:
          if (de === 0 && x.charCodeAt(0) === 64) return k(x + ";"), "";
          break;
        case 2:
          if (W === 0) return x + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return k(D[0] + x), "";
            default:
              return x + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(E);
      }
    };
  }(function(k) {
    f.push(k);
  }), T = function(k, E, _) {
    return E === 0 && fl.indexOf(_[r.length]) !== -1 || _.match(a) ? k : "." + t;
  };
  function w(k, E, _, x) {
    x === void 0 && (x = "&");
    var D = k.replace(dl, ""), L = E && _ ? _ + " " + E + " { " + D + " }" : D;
    return t = x, r = E, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), p(_ || !E ? "" : E, L);
  }
  return p.use([].concat(d, [function(k, E, _) {
    k === 2 && _.length && _[0].lastIndexOf(r) > 0 && (_[0] = _[0].replace(n, T));
  }, h, function(k) {
    if (k === -2) {
      var E = f;
      return f = [], E;
    }
  }])), w.hash = d.length ? d.reduce(function(k, E) {
    return E.name || Lr(15), Zt(k, E.name);
  }, 5381).toString() : "", w;
}
var So = u.default.createContext(), Eo = (So.Consumer, u.default.createContext()), ml = (Eo.Consumer, new dn()), ta = pl();
function hl() {
  return (0, u.useContext)(So) || ml;
}
var gl = function() {
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
}(), vl = /([A-Z])/, yl = /([A-Z])/g, bl = /^ms-/, wl = function(e) {
  return "-" + e.toLowerCase();
};
function Ei(e) {
  return vl.test(e) ? e.replace(yl, wl).replace(bl, "-ms-") : e;
}
var Ti = function(e) {
  return e == null || e === !1 || e === "";
};
function Ht(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, s = e.length; o < s; o += 1) (a = Ht(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  return Ti(e) ? "" : _a(e) ? "." + e.styledComponentId : _r(e) ? typeof (l = e) != "function" || l.prototype && l.prototype.isReactComponent || !t ? e : Ht(e(t), t, r, n) : e instanceof gl ? r ? (e.inject(r, n), e.getName(n)) : e : Jn(e) ? function d(p, f) {
    var h, T, w = [];
    for (var k in p) p.hasOwnProperty(k) && !Ti(p[k]) && (Array.isArray(p[k]) && p[k].isCss || _r(p[k]) ? w.push(Ei(k) + ":", p[k], ";") : Jn(p[k]) ? w.push.apply(w, d(p[k], k)) : w.push(Ei(k) + ": " + (h = k, ((T = p[k]) == null || typeof T == "boolean" || T === "" ? "" : typeof T != "number" || T === 0 || h in Ws || h.startsWith("--") ? String(T).trim() : T + "px") + ";")));
    return f ? [f + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
  var l;
}
var xi = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function kl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return _r(e) || Jn(e) ? xi(Ht(bi(cn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : xi(Ht(bi(e, r)));
}
var Sl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, El = /(^-|-$)/g;
function Fn(e) {
  return e.replace(Sl, "-").replace(El, "");
}
function Wr(e) {
  return typeof e == "string" && !0;
}
var ra = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Tl = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function xl(e, t, r) {
  var n = e[r];
  ra(t) && ra(n) ? To(n, t) : e[r] = t;
}
function To(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (ra(o)) for (var s in o) Tl(s) && xl(e, o[s], s);
  }
  return e;
}
var xo = u.default.createContext();
xo.Consumer;
var zn = {};
function Ao(e, t, r) {
  var n = _a(e), a = !Wr(e), i = t.attrs, o = i === void 0 ? cn : i, s = t.componentId, l = s === void 0 ? function(x, D) {
    var L = typeof x != "string" ? "sc" : Fn(x);
    zn[L] = (zn[L] || 0) + 1;
    var S = L + "-" + function(R) {
      return ea(wo(R) >>> 0);
    }("5.3.11" + L + zn[L]);
    return D ? D + "-" + S : S;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, p = d === void 0 ? function(x) {
    return Wr(x) ? "styled." + x : "Styled(" + wi(x) + ")";
  }(e) : d, f = t.displayName && t.componentId ? Fn(t.displayName) + "-" + t.componentId : t.componentId || l, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, T = t.shouldForwardProp;
  n && e.shouldForwardProp && (T = t.shouldForwardProp ? function(x, D, L) {
    return e.shouldForwardProp(x, D, L) && t.shouldForwardProp(x, D, L);
  } : e.shouldForwardProp);
  var w, k = new ul(r, f, n ? e.componentStyle : void 0), E = k.isStatic && o.length === 0, _ = function(x, D) {
    return function(L, S, R, O) {
      var W = L.attrs, de = L.componentStyle, we = L.defaultProps, ae = L.foldedComponentIds, ee = L.shouldForwardProp, re = L.styledComponentId, X = L.target, he = function(P, g, I) {
        P === void 0 && (P = Ot);
        var C = gt({}, g, { theme: P }), ie = {};
        return I.forEach(function(te) {
          var Y, Z, ne, fe = te;
          for (Y in _r(fe) && (fe = fe(C)), fe) C[Y] = ie[Y] = Y === "className" ? (Z = ie[Y], ne = fe[Y], Z && ne ? Z + " " + ne : Z || ne) : fe[Y];
        }), [C, ie];
      }(function(P, g, I) {
        return I === void 0 && (I = Ot), P.theme !== I.theme && P.theme || g || I.theme;
      }(S, (0, u.useContext)(xo), we) || Ot, S, W), De = he[0], pe = he[1], ke = function(P, g, I) {
        var C = hl(), ie = (0, u.useContext)(Eo) || ta;
        return g ? P.generateAndInjectStyles(Ot, C, ie) : P.generateAndInjectStyles(I, C, ie);
      }(de, O, De), qe = R, Q = pe.$as || S.$as || pe.as || S.as || X, q = Wr(Q), N = pe !== S ? gt({}, S, {}, pe) : S, A = {};
      for (var y in N) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? A.as = N[y] : (ee ? ee(y, yi, Q) : !q || yi(y)) && (A[y] = N[y]));
      return S.style && pe.style !== S.style && (A.style = gt({}, S.style, {}, pe.style)), A.className = Array.prototype.concat(ae, re, ke !== re ? ke : null, S.className, pe.className).filter(Boolean).join(" "), A.ref = qe, (0, u.createElement)(Q, A);
    }(w, x, D, E);
  };
  return _.displayName = p, (w = u.default.forwardRef(_)).attrs = h, w.componentStyle = k, w.displayName = p, w.shouldForwardProp = T, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : cn, w.styledComponentId = f, w.target = n ? e.target : e, w.withComponent = function(x) {
    var D = t.componentId, L = function(R, O) {
      if (R == null) return {};
      var W, de, we = {}, ae = Object.keys(R);
      for (de = 0; de < ae.length; de++) W = ae[de], O.indexOf(W) >= 0 || (we[W] = R[W]);
      return we;
    }(t, ["componentId"]), S = D && D + "-" + (Wr(x) ? x : Fn(wi(x)));
    return Ao(x, gt({}, L, { attrs: h, componentId: S }), r);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? To({}, e.defaultProps, x) : x;
  } }), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), a && Gs()(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var Hn, na = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Ot), !(0, yo.isValidElementType)(n)) return Lr(1, String(n));
    var i = function() {
      return r(n, a, kl.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, gt({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, gt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(Ao, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  na[e] = na(e);
}), (Hn = (function(e, t) {
  this.rules = e, this.componentId = t, this.isStatic = ko(e), dn.registerId(this.componentId + 1);
}).prototype).createStyles = function(e, t, r, n) {
  var a = n(Ht(this.rules, t, r, n).join(""), ""), i = this.componentId + e;
  r.insertRules(i, i, a);
}, Hn.removeStyles = function(e, t) {
  t.clearRules(this.componentId + e);
}, Hn.renderStyles = function(e, t, r, n) {
  e > 2 && dn.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n);
};
const wt = na, Al = wt.div`
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
`, rn = "On This Page", _l = { event: "collapse", name: "onclick", type: "click", text: rn }, Na = ({ items: e, firstElementId: t, focusFirstFocusableElement: r = !1 }) => {
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
    e == null || e.forEach(({ targetIdName: E }) => {
      const _ = document.getElementById(E), x = (_ == null ? void 0 : _.getBoundingClientRect().top) - w, D = (_ == null ? void 0 : _.getBoundingClientRect().bottom) - w;
      x < 0 && D > 0 && (f.activeContainer = E);
    }), o((E) => ({ ...E, ...f }));
  }, d = () => {
    var f;
    f = l, jn || (jn = !0, setTimeout(() => {
      f(), jn = !1;
    }, 150)), ((h) => {
      window.clearTimeout(vi), vi = window.setTimeout(h, 150);
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
  }, []), (0, u.useEffect)(() => (window == null || window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [i.hasHeader]), (e == null ? void 0 : e.length) > 0 && u.default.createElement(Al, { requiresAltMenuSpacing: i.hasAltMenuSpacing, ref: n, className: be()("uds-anchor-menu", "uds-anchor-menu-expanded-lg", "mb-4", { sticky: i.sticky, "with-header": i.hasHeader }), style: i.showMenu ? { borderBottom: 0 } : {} }, u.default.createElement("div", { className: `${i.containerClass} uds-anchor-menu-wrapper` }, a ? u.default.createElement("button", { className: be()("mobile-menu-toggler", { "show-menu": i.showMenu }), type: "button", onClick: () => {
    et({ ..._l, action: i.showMenu ? "close" : "open" }), o((f) => ({ ...f, showMenu: !f.showMenu }));
  }, "data-bs-toggle": "collapse", "data-bs-target": "#collapseAnchorMenu", "aria-controls": "collapseAnchorMenu" }, u.default.createElement("h4", null, rn, ":", u.default.createElement("i", { className: "fas fa-chevron-down" }))) : u.default.createElement("h4", null, rn, ":"), u.default.createElement("div", { "data-testid": "anchor-menu-container", id: "collapseAnchorMenu", className: be()("card", "card-body", "collapse", { show: i.showMenu }) }, u.default.createElement("nav", { "data-testid": "anchor-menu", className: "nav", "aria-label": rn }, e == null ? void 0 : e.map((f) => u.default.createElement(yt, { "data-testid": `anchor-item-${f.targetIdName}`, key: f.targetIdName, classes: be()("nav-link", { active: i.activeContainer === f.targetIdName }).split(" "), ariaLabel: f.text, label: f.text, icon: f.icon, onClick: () => ((h) => {
    var _, x;
    const T = window.scrollY - (i.hasHeader ? s + 100 : 100), w = a ? 410 : 90;
    let k = ((_ = document.getElementById(h)) == null ? void 0 : _.getBoundingClientRect().top) + T;
    var E;
    n.current.classList.contains("sticky") || (k -= w), r && ((x = (E = `#${h}`, (E ? document.querySelector(E) : document).querySelector('button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'))) == null || x.focus()), window.scrollTo({ top: k, behavior: "smooth" });
  })(f.targetIdName) }))))));
};
Na.propTypes = { items: c().arrayOf(c().shape({ text: c().string.isRequired, targetIdName: c().string.isRequired, icon: c().arrayOf(c().string) })).isRequired, firstElementId: c().string.isRequired, focusFirstFocusableElement: c().bool };
var qr, Ol = (qr = function(e, t) {
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
}), Nl = function(e) {
  function t(r) {
    var n = e.call(this, r) || this;
    return n.name = "AssertionError", n;
  }
  return Ol(t, e), t;
}(Error);
function xr(e, t) {
  if (!e) throw new Nl(t);
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
var Cl = /* @__PURE__ */ function() {
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
}(), $t = function() {
  return $t = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }, $t.apply(this, arguments);
}, Ai = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  }
  return r;
};
const Rl = function(e) {
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.openShareDialog = function(n) {
      var a, i, o = r.props, s = o.onShareWindowClose, l = o.windowHeight, d = l === void 0 ? 400 : l, p = o.windowPosition, f = p === void 0 ? "windowCenter" : p, h = o.windowWidth, T = h === void 0 ? 550 : h;
      (function(w, k, E) {
        var _ = k.height, x = k.width, D = Ai(k, ["height", "width"]), L = $t({ height: _, width: x, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, D), S = window.open(w, "", Object.keys(L).map(function(O) {
          return "".concat(O, "=").concat(L[O]);
        }).join(", "));
        if (E) var R = window.setInterval(function() {
          try {
            (S === null || S.closed) && (window.clearInterval(R), E(S));
          } catch (O) {
            console.error(O);
          }
        }, 1e3);
      })(n, $t({ height: d, width: T }, f === "windowCenter" ? (a = T, i = d, { left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - a / 2, top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - i / 2 }) : function(w, k) {
        return { top: (window.screen.height - k) / 2, left: (window.screen.width - w) / 2 };
      }(T, d)), s);
    }, r.handleClick = function(n) {
      return a = r, i = void 0, s = function() {
        var l, d, p, f, h, T, w, k, E, _;
        return function(x, D) {
          var L, S, R, O, W = { label: 0, sent: function() {
            if (1 & R[0]) throw R[1];
            return R[1];
          }, trys: [], ops: [] };
          return O = { next: de(0), throw: de(1), return: de(2) }, typeof Symbol == "function" && (O[Symbol.iterator] = function() {
            return this;
          }), O;
          function de(we) {
            return function(ae) {
              return function(ee) {
                if (L) throw new TypeError("Generator is already executing.");
                for (; W; ) try {
                  if (L = 1, S && (R = 2 & ee[0] ? S.return : ee[0] ? S.throw || ((R = S.return) && R.call(S), 0) : S.next) && !(R = R.call(S, ee[1])).done) return R;
                  switch (S = 0, R && (ee = [2 & ee[0], R.value]), ee[0]) {
                    case 0:
                    case 1:
                      R = ee;
                      break;
                    case 4:
                      return W.label++, { value: ee[1], done: !1 };
                    case 5:
                      W.label++, S = ee[1], ee = [0];
                      continue;
                    case 7:
                      ee = W.ops.pop(), W.trys.pop();
                      continue;
                    default:
                      if (!((R = (R = W.trys).length > 0 && R[R.length - 1]) || ee[0] !== 6 && ee[0] !== 2)) {
                        W = 0;
                        continue;
                      }
                      if (ee[0] === 3 && (!R || ee[1] > R[0] && ee[1] < R[3])) {
                        W.label = ee[1];
                        break;
                      }
                      if (ee[0] === 6 && W.label < R[1]) {
                        W.label = R[1], R = ee;
                        break;
                      }
                      if (R && W.label < R[2]) {
                        W.label = R[2], W.ops.push(ee);
                        break;
                      }
                      R[2] && W.ops.pop(), W.trys.pop();
                      continue;
                  }
                  ee = D.call(x, W);
                } catch (re) {
                  ee = [6, re], S = 0;
                } finally {
                  L = R = 0;
                }
                if (5 & ee[0]) throw ee[1];
                return { value: ee[0] ? ee[1] : void 0, done: !0 };
              }([we, ae]);
            };
          }
        }(this, function(x) {
          switch (x.label) {
            case 0:
              return l = this.props, d = l.beforeOnClick, p = l.disabled, f = l.networkLink, h = l.onClick, T = l.url, w = l.openShareDialogOnClick, k = l.opts, E = f(T, k), p ? [2] : (n.preventDefault(), d ? !(D = _ = d()) || typeof D != "object" && typeof D != "function" || typeof D.then != "function" ? [3, 2] : [4, _] : [3, 2]);
            case 1:
              x.sent(), x.label = 2;
            case 2:
              return w && this.openShareDialog(E), h && h(n, E), [2];
          }
          var D;
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
  return Cl(t, e), t.prototype.render = function() {
    var r = this.props, n = (r.beforeOnClick, r.children), a = r.className, i = r.disabled, o = r.disabledStyle, s = r.forwardedRef, l = (r.networkLink, r.networkName), d = (r.onShareWindowClose, r.openShareDialogOnClick, r.opts, r.resetButtonStyle), p = r.style, f = (r.url, r.windowHeight, r.windowPosition, r.windowWidth, Ai(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"])), h = be()("react-share__ShareButton", { "react-share__ShareButton--disabled": !!i, disabled: !!i }, a), T = $t($t(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, p), i && o);
    return u.default.createElement("button", $t({}, f, { "aria-label": f["aria-label"] || l, className: h, onClick: this.handleClick, ref: s, style: T }), n);
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
    }), u.default.createElement(Rl, fn({}, n, l, { forwardedRef: o, networkName: e, networkLink: t, opts: r(i) }));
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
const Oi = An({ color: "#3b5998", networkName: "facebook", path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" }), Ni = xn("twitter", function(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, i = a === void 0 ? [] : a, o = t.related, s = o === void 0 ? [] : o;
  return xr(e, "twitter.url"), xr(Array.isArray(i), "twitter.hashtags is not an array"), xr(Array.isArray(s), "twitter.related is not an array"), "https://twitter.com/share" + Tn({ url: e, text: r, via: n, hashtags: i.length > 0 ? i.join(",") : void 0, related: s.length > 0 ? s.join(",") : void 0 });
}, function(e) {
  return { hashtags: e.hashtags, title: e.title, via: e.via, related: e.related };
}, { windowWidth: 550, windowHeight: 400 }), Ci = An({ color: "#00aced", networkName: "twitter", path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" }), Ll = xn("email", function(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Tn({ subject: r, body: n ? n + a + e : e });
}, function(e) {
  return { subject: e.subject, body: e.body, separator: e.separator || " " };
}, { openShareDialogOnClick: !1, onClick: function(e, t) {
  window.location.href = t;
} }), Pl = An({ color: "#7f7f7f", networkName: "email", path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" }), Ri = xn("linkedin", function(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return xr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Tn({ url: e, mini: "true", title: r, summary: n, source: a });
}, function(e) {
  return { title: e.title, summary: e.summary, source: e.source };
}, { windowWidth: 750, windowHeight: 600 }), Li = An({ color: "#007fb1", networkName: "linkedin", path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" });
function _o(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function ia(e, t) {
  return e === void 0 && (e = ""), t === void 0 && (t = void 0), t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var Il = typeof window == "object" && window.Element || function() {
};
c().oneOfType([c().string, c().func, function(e, t, r) {
  if (!(e[t] instanceof Il)) return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}, c().shape({ current: c().any })]);
var oa = c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), Ml = ["className", "cssModule", "active", "tag"], Dl = { tag: oa, active: c().bool, className: c().string, cssModule: c().object }, sa = function(e) {
  var t = e.className, r = e.cssModule, n = e.active, a = e.tag, i = _o(e, Ml), o = ia(be()(t, !!n && "active", "breadcrumb-item"), r);
  return u.default.createElement(a, Ct({}, i, { className: o, "aria-current": n ? "page" : void 0 }));
};
sa.propTypes = Dl, sa.defaultProps = { tag: "li" };
const Vr = sa;
var jl = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"], $l = { tag: oa, listTag: oa, className: c().string, listClassName: c().string, cssModule: c().object, children: c().node, "aria-label": c().string }, la = function(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, a = e.children, i = e.tag, o = e.listTag, s = e["aria-label"], l = _o(e, jl), d = ia(be()(t), n), p = ia(be()("breadcrumb", r), n);
  return u.default.createElement(i, Ct({}, l, { className: d, "aria-label": s }), u.default.createElement(o, { className: p }, a));
};
la.propTypes = $l, la.defaultProps = { tag: "nav", listTag: "ol", "aria-label": "breadcrumb" };
const Fl = la, zl = wt.div`
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
`, Hl = wt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, pn = ({ type: e, articleUrl: t, publicationDate: r, title: n, body: a, authorEmail: i, authorName: o, authorPhone: s, authorTitle: l, breadcrumbs: d, calendarUrl: p, eventLocation: f, eventTime: h, headerImageUrl: T, registrationUrl: w, zoomUrl: k }) => {
  const E = be()("col", "col-12", { "col-lg-8": e === "event" && (w || k || p) });
  return u.default.createElement(u.default.Fragment, null, T && e !== "event" && u.default.createElement("div", { "data-testid": "uds-hero", className: "uds-hero uds-hero-md", style: { backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${T})` } }), u.default.createElement(zl, { className: `container ${e}-container wrapper-container` }, d && u.default.createElement("div", { className: "row pt-4", "data-testid": "breadcrumbs" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement(Fl, { listClassName: "breadcrumb" }, d.map((_) => ((x) => x.active ? u.default.createElement(Vr, { active: !0, tag: "li", className: "breadcrumb-item" }, u.default.createElement(Vr, { tag: "a", href: x.url }, x.title)) : u.default.createElement(Vr, { tag: "li", className: "breadcrumb-item" }, u.default.createElement(Vr, { tag: "a", href: x.url }, x.title)))(_))))), u.default.createElement("div", { className: "row pb-2 pt-3" }, u.default.createElement("div", { className: E }, u.default.createElement("h2", { "data-testid": "title" }, n)), e === "event" && u.default.createElement("div", { className: "col col-lg-4 col-xs-12" }, (w || k) && (w ? u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(yt, { color: "maroon", href: w, label: "Register" })) : u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(yt, { color: "maroon", href: k, label: "Attend on Zoom" }))), p && u.default.createElement("div", { className: "card-button uds-button" }, u.default.createElement(yt, { color: "gray", size: "small", href: p, label: "Add to calendar" })))), e === "event" ? u.default.createElement("div", { className: "row row-spaced pt-3 mb-2" }, h && u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-sm-12" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "far fa-calendar" }), "Date and time:"), u.default.createElement("div", { dangerouslySetInnerHTML: at(h) })), (w && k || f) && u.default.createElement("div", { className: "col col-12 col-lg-4 col-md-6" }, u.default.createElement("h4", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" }), "Location:"), u.default.createElement("div", { dangerouslySetInnerHTML: at(f) }), w && k && u.default.createElement("a", { href: k }, "Attend on Zoom"))) : u.default.createElement("div", { className: "row row-spaced pt-2" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(_i, { url: t, quote: n }, u.default.createElement(Oi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ni, { url: t, quote: n }, u.default.createElement(Ci, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ri, { url: t, quote: n }, u.default.createElement(Li, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } }))), r && u.default.createElement("i", { className: "news-date" }, r))), u.default.createElement("div", { className: "row" }, u.default.createElement("div", { className: "col col-12", dangerouslySetInnerHTML: at(a), "data-testid": "body" })), e === "news" && u.default.createElement("div", { className: "row pb-2", "data-testid": "author-info" }, u.default.createElement("div", { className: "col col-12" }, u.default.createElement("div", { className: "author highlight-gold" }, o), l && u.default.createElement("div", { className: "author-title" }, l), i && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-envelope" })), u.default.createElement("a", { href: `mailto: ${i}` }, i)), s && u.default.createElement("div", { className: "author-contact" }, u.default.createElement("span", { className: "icon-bg" }, u.default.createElement("i", { className: "fas fa-phone" })), u.default.createElement("a", { href: `tel: ${s}` }, s)))), e === "event" && u.default.createElement(Hl, { className: "row row-spaced mt-3 pt-6 pb-2 event-info", "data-testid": "event-info" }, u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "For more information contact:"), u.default.createElement("div", { className: "event-author" }, o), u.default.createElement("div", { className: "event-author-title" }, l), (i || s) && u.default.createElement("div", { className: "event-author-info" }, i && u.default.createElement("div", null, u.default.createElement("a", { href: `mailto: ${i}` }, i)), s && u.default.createElement("div", null, u.default.createElement("a", { href: `tel: ${s}` }, s)))), u.default.createElement("div", { className: "col col-lg-4 col-md-6 col-12" }, u.default.createElement("h4", null, "Share this event:"), u.default.createElement("div", { className: "article-social-media" }, u.default.createElement(_i, { url: t, quote: n }, u.default.createElement(Oi, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ni, { url: t, quote: n }, u.default.createElement(Ci, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ll, { url: i, quote: n }, u.default.createElement(Pl, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })), u.default.createElement(Ri, { url: t, quote: n }, u.default.createElement(Li, { size: 28, borderRadius: 4, bgStyle: { fill: "maroon" } })))))));
};
pn.propTypes = { type: c().oneOf(["event", "news"]), articleUrl: c().string.isRequired, publicationDate: c().string.isRequired, title: c().string.isRequired, body: c().string.isRequired, authorEmail: c().string, authorName: c().string.isRequired, authorPhone: c().string, authorTitle: c().string, breadcrumbs: c().arrayOf(c().shape({ title: c().string, url: c().string, active: c().bool })), calendarUrl: c().string, headerImageUrl: c().string, eventLocation: c().string, eventTime: c().string, registrationUrl: c().string, zoomUrl: c().string }, pn.defaultProps = { type: "news", authorEmail: void 0, authorPhone: void 0, authorTitle: void 0, breadcrumbs: void 0, calendarUrl: void 0, headerImageUrl: void 0, eventLocation: void 0, eventTime: void 0, registrationUrl: void 0, zoomUrl: void 0 };
const Ul = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, mn = ({ color: e, icon: t, innerRef: r, onClick: n, size: a, cardTitle: i }) => u.default.createElement("button", { type: "button", className: `btn btn-circle btn-circle-alt-${e} ${a === "large" && "btn-circle-large"}`, ref: r, onClick: () => (et({ ...Ul, text: `${t == null ? void 0 : t[1]} icon`, section: i }), void (n == null ? void 0 : n())), "aria-label": "Close" }, u.default.createElement("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` }));
mn.propTypes = { color: c().oneOf(["white", "gray", "black"]), icon: c().arrayOf(c().string), innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func, cardTitle: c().string, size: c().oneOf(["large", "small"]) }, mn.defaultProps = { color: "gray", icon: void 0, innerRef: void 0, onClick: void 0, size: "small", cardTitle: "" };
const Bl = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Or = ({ label: e, cardTitle: t, ariaLabel: r, color: n, disabled: a, element: i, innerRef: o, href: s, onClick: l, ...d }) => {
  const p = be()("btn", "btn-tag", { "btn-tag-alt-white": n === "white", "btn-tag-alt-gray": n === "gray", "btn-tag-alt-dark": n === "dark", disabled: a });
  let f = i;
  return s && i === "button" && (f = "a"), u.default.createElement(f, Ct({ type: f === "button" && l ? "button" : void 0 }, d, { className: p, href: s, ref: o, onClick: () => (et({ ...Bl, text: e, section: t }), void (l == null ? void 0 : l())), "aria-label": r }), e);
};
Or.propTypes = { label: c().string, cardTitle: c().string, ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), disabled: c().bool, element: c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func }), c().arrayOf(c().oneOfType([c().func, c().string, c().shape({ $$typeof: c().symbol, render: c().func })]))]), href: c().string, innerRef: c().oneOfType([c().object, c().func, c().string]), onClick: c().func }, Or.defaultProps = { label: "", cardTitle: "", ariaLabel: void 0, color: "gray", disabled: void 0, element: "button", href: void 0, innerRef: void 0, onClick: void 0 };
const Ut = ({ src: e, alt: t, cssClasses: r, loading: n = "lazy", decoding: a = "async", dataTestId: i, fetchPriority: o = "auto", width: s, height: l, cardLink: d, title: p, caption: f, captionTitle: h, border: T, dropShadow: w }) => {
  const k = { src: e, alt: t, loading: n, decoding: a, fetchpriority: o, ...(r == null ? void 0 : r.length) > 0 && { className: en(r) }, ...i && { "data-testid": i }, ...s && { width: s }, ...l && { height: l } }, E = be()("uds-img", { borderless: !T, "uds-img-drop-shadow": w }), _ = (x) => {
    const D = x ? `${k.className} ${x}` : k.className;
    return d ? u.default.createElement("a", { href: d }, u.default.createElement("img", Ct({}, k, { className: D })), u.default.createElement("span", { className: "visually-hidden" }, p)) : u.default.createElement("img", Ct({}, k, { className: D }));
  };
  return u.default.createElement(u.default.Fragment, null, f ? u.default.createElement("div", { className: E }, u.default.createElement("figure", { className: "figure uds-figure" }, _(), f && u.default.createElement("figcaption", { className: "figure-caption uds-figure-caption" }, h && u.default.createElement("h3", null, h), u.default.createElement("span", { className: "uds-caption-text", dangerouslySetInnerHTML: at(f) })))) : _(E));
};
Ut.propTypes = { src: c().string.isRequired, alt: c().string.isRequired, cssClasses: c().arrayOf(c().string), loading: c().oneOf(["lazy", "eager"]), decoding: c().oneOf(["sync", "async", "auto"]), fetchPriority: c().oneOf(["auto", "high", "low"]), width: c().string, height: c().string, dataTestId: c().string, cardLink: c().string, title: c().string, caption: c().string, captionTitle: c().string, border: c().bool, dropShadow: c().bool };
const Wl = wt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, ql = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, hn = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: p, buttons: f, linkLabel: h, linkUrl: T, tags: w, showBorders: k, cardLink: E }) => u.default.createElement(ca, { type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: p, buttons: f, linkLabel: h, linkUrl: T, tags: w, showBorders: k, cardLink: E });
hn.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), width: c().oneOf(["25%", "50%", "75%", "100%"]), horizontal: c().bool, title: c().string.isRequired, icon: c().arrayOf(c().string), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, image: c().string, imageAltText: c().string, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), showBorders: c().bool, cardLink: c().string }, hn.defaultProps = { type: "default", width: "100%", horizontal: !1, body: void 0, eventFormat: "stack", eventTime: void 0, eventLocation: void 0, icon: void 0, image: void 0, imageAltText: void 0, buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const ca = ({ type: e, width: t, horizontal: r, image: n, imageAltText: a, title: i, icon: o, body: s, eventFormat: l, eventLocation: d, eventTime: p, buttons: f, linkLabel: h, linkUrl: T, tags: w, showBorders: k, cardLink: E }) => {
  const _ = be()("card", "cards-components", { "card-degree": e === "degree", "card-event": e === "event", "card-story": e === "story", [`w-${t.replace("%", "")}`]: t !== "100%", "card-horizontal": r, borderless: !k });
  return u.default.createElement(u.default.Fragment, null, u.default.createElement(Wl, { className: _, "data-testid": "card-container" }, !!n && u.default.createElement(Ut, { src: n, alt: a, dataTestId: "card-image", cssClasses: ["card-img-top"], cardLink: E, title: i }), !n && o && u.default.createElement("i", { className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`, "data-testid": "card-icon" }), r ? u.default.createElement("div", { className: "card-content-wrapper" }, u.default.createElement(gn, { type: e, body: s, eventFormat: l, eventLocation: d, eventTime: p, title: i, buttons: f, linkLabel: h, linkUrl: T, tags: w, cardLink: E })) : u.default.createElement(gn, { type: e, body: s, eventFormat: l, eventLocation: d, eventTime: p, title: i, buttons: f, linkLabel: h, linkUrl: T, tags: w, cardLink: E })));
};
ca.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), width: c().oneOf(["25%", "50%", "75%", "100%"]), horizontal: c().bool, title: c().string.isRequired, icon: c().arrayOf(c().string), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, image: c().string, imageAltText: c().string, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), showBorders: c().bool, cardLink: c().string }, ca.defaultProps = { type: "default", width: "100%", horizontal: !1, body: "", eventFormat: "stack", eventTime: "", eventLocation: "", icon: void 0, image: "", imageAltText: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0, showBorders: !0 };
const gn = ({ type: e, body: t, eventFormat: r, eventLocation: n, eventTime: a, title: i, buttons: o, linkLabel: s, linkUrl: l, tags: d, cardLink: p }) => {
  return u.default.createElement(u.default.Fragment, null, !!i && u.default.createElement("div", { className: "card-header", "data-testid": "card-title" }, u.default.createElement("h3", { className: "card-title" }, p ? u.default.createElement("a", { href: p }, i) : i)), !!t && u.default.createElement("div", { className: "card-body", "data-testid": "card-body" }, u.default.createElement("div", { dangerouslySetInnerHTML: at(t) })), e === "event" && (a || n) && u.default.createElement(ua, { eventFormat: r, eventTime: a, eventLocation: n }), o && u.default.createElement("div", { className: "card-buttons" }, o.map((h) => u.default.createElement("div", { className: "card-button", "data-testid": "card-button", key: `${h.label}-${h.href}` }, u.default.createElement(yt, { ariaLabel: h.ariaLabel, color: h.color, icon: h.icon, href: h.href, label: h.label, onClick: h.onClick, size: h.size, target: h.target, cardTitle: i })))), l && s && u.default.createElement("div", { className: "card-link", "data-testid": "card-link" }, u.default.createElement("a", { href: (f = l, f.startsWith("https://") || f.startsWith("http://") || !/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(f) ? f : `mailto:${f}`), onClick: () => et({ ...ql, section: i, text: s }) }, s)), d && u.default.createElement("div", { className: "card-tags", "data-testid": "card-tags" }, d.map((h) => u.default.createElement(Or, { key: `${h.label}-${h.href}`, ariaLabel: h.ariaLabel, color: h.color, href: h.href, label: h.label, onClick: h.onClick, cardTitle: i }))));
  var f;
};
gn.propTypes = { type: c().oneOf(["default", "degree", "event", "news", "story"]), body: c().string, eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string, title: c().string.isRequired, buttons: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["gold", "maroon", "gray", "dark"]), icon: c().arrayOf(c().string), href: c().string, label: c().string, onClick: c().func, size: c().oneOf(["default", "small", "xsmall"]), target: c().oneOf(["_blank", "_self", "_top", "_parent"]) })), linkLabel: c().string, linkUrl: c().string, tags: c().arrayOf(c().shape({ ariaLabel: c().string, color: c().oneOf(["white", "gray", "dark"]), href: c().string, label: c().string, onClick: c().func })), cardLink: c().string }, gn.defaultProps = { type: "default", body: "", eventFormat: "stack", eventLocation: "", eventTime: "", buttons: void 0, linkLabel: void 0, linkUrl: void 0, tags: void 0 };
const ua = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? u.default.createElement("div", { className: "card-event-details" }, t && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(t) })), r && u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(r) }))) : u.default.createElement(u.default.Fragment, null, t && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "far fa-calendar" })), u.default.createElement("div", { dangerouslySetInnerHTML: at(t) }))), r && u.default.createElement("div", { className: "card-event-details" }, u.default.createElement("div", { className: "card-event-icons" }, u.default.createElement("div", null, u.default.createElement("i", { className: "fas fa-map-marker-alt" })), u.default.createElement("span", null, u.default.createElement("div", { dangerouslySetInnerHTML: at(r) })))));
ua.propTypes = { eventFormat: c().oneOf(["stack", "inline"]), eventLocation: c().string, eventTime: c().string }, ua.defaultProps = { eventFormat: "stack", eventLocation: "", eventTime: "" };
const Vl = wt.div`
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
`, Yl = () => u.default.createElement(Vl, null, u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null), u.default.createElement("div", null)), Gl = wt.section``, Oo = (0, u.createContext)(null), No = ({ defaultProps: e, dataSource: t, noFeedText: r, renderHeader: n, renderBody: a, dataTransformer: i = (l) => l, dataFilter: o = (l) => l, maxItems: s }) => {
  const [{ data: l, loading: d, error: p }, f] = (() => {
    const [k, E] = (0, u.useState)(), [_, x] = (0, u.useState)(!1), [D, L] = (0, u.useState)(!1), [S, R] = (0, u.useState)("");
    return (0, u.useEffect)(() => {
      S && (() => {
        L(null), x(!0);
        try {
          fetch(S).then((O) => O.json()).then((O) => {
            E(O), x(!1);
          }).catch((O) => {
            L(O), x(!1);
          });
        } catch (O) {
          L(O);
        }
      })();
    }, [S]), [{ data: k, loading: _, error: D }, R];
  })(), [h, T] = (0, u.useState)([]), w = { ...e.dataSource, ...t };
  return (0, u.useEffect)(() => {
    f(w == null ? void 0 : w.url);
  }, [w == null ? void 0 : w.url]), (0, u.useEffect)(() => {
    const k = l == null ? void 0 : l.nodes.map(i), E = k == null ? void 0 : k.filter((_) => o(_, t == null ? void 0 : t.filters));
    T(s ? E == null ? void 0 : E.slice(0, s) : E);
  }, [l]), u.default.createElement(Oo.Provider, { value: { feeds: h } }, u.default.createElement(Gl, null, n, p ? u.default.createElement("span", null, "Error, try again!") : u.default.createElement(u.default.Fragment, null, d && !(h != null && h.length) && u.default.createElement("div", { className: "text-center mt-4" }, u.default.createElement(Yl, null)), h != null && h.length ? a : !d && u.default.createElement("p", { className: "text-center" }, r))));
};
No.propTypes = { renderHeader: c().element, renderBody: c().element, maxItems: c().number, dataTransformer: c().func, dataFilter: c().func, noFeedText: c().string };
const Ca = c().shape({ color: c().oneOf(["white", "dark"]), text: c().string }), Ra = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), text: c().string }), Xl = c().shape({ color: c().oneOf(["gold", "maroon", "gray", "dark"]), text: c().string, size: c().string }), Co = c().shape({ url: c().string, filters: c().string }), Ro = c().shape({ header: Ca, ctaButton: Ra, dataSource: Co, maxItems: c().number }), Zl = wt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Lo = ({ defaultProps: e, header: t, ctaButton: r }) => {
  const n = { ...e.header, ...t }, a = { ...e.ctaButton, ...r };
  return u.default.createElement("div", { className: "row justify-content-between align-items-center pb-6", "data-testid": "feed-header" }, u.default.createElement("div", { className: "col-sm-12 col-md-9" }, u.default.createElement("h2", { className: `text-${n.color}` }, n.text)), u.default.createElement(Zl, { className: "col-sm-12 col-md-3" }, u.default.createElement("a", { className: `btn btn-${a.color}`, href: a.url, onClick: () => et({ event: "link", action: "click", name: "onclick", type: "internal link", region: "main content", section: n.text, text: a.text }) }, a.text)));
};
Lo.propTypes = { defaultProps: Ro, header: Ca, ctaButton: Ra };
const Po = ({ children: e }) => u.default.createElement("div", { className: "row", "data-testid": "feed-body" }, u.default.createElement("div", { className: "col" }, e));
Po.propTypes = { children: c().element };
const Kl = wt.img`
  width: 100%;
`, La = (e) => {
  const t = e.type || "heading-hero";
  return { "heading-hero": () => function({ image: r, subTitle: n, title: a, contents: i, contentsColor: o }) {
    const s = { gold: "highlight-gold", black: "highlight-black", white: "highlight-white", none: "text-white", undefined: "" }, l = { black: "text-dark", white: "text-white", undefined: "" };
    let d = u.default.createElement(u.default.Fragment, null);
    return a && (d = u.default.createElement("h1", { style: { maxWidth: a.maxWidth || "" }, "data-testid": "hero-title" }, u.default.createElement("span", { className: be()({ [l[a.color]]: a.color, [s[a.highlightColor]]: a.highlightColor }) }, a.text))), a && n && (d = u.default.createElement("header", null, u.default.createElement("p", { className: "hero-subtitle", "data-testid": "hero-subtitle" }, u.default.createElement("span", { className: be()({ [l[n.color]]: n.color, [s[n.highlightColor]]: n.highlightColor }) }, n.text)), d)), u.default.createElement("div", { className: be()("uds-hero", { [{ small: "uds-hero-sm", medium: "uds-hero-md", large: "uds-hero-lg", undefined: "" }[r == null ? void 0 : r.size]]: r == null ? void 0 : r.size }) }, u.default.createElement("div", { className: "hero-overlay" }), u.default.createElement(Kl, { className: "hero", src: r == null ? void 0 : r.url, alt: r == null ? void 0 : r.altText, "data-testid": "hero-image" }), d, i && u.default.createElement("div", { "data-testid": "hero-content", className: be()("content", { [l[o]]: o }) }, i.map((p, f) => u.default.createElement("p", { key: `content-${f}` }, p.text))));
  }(e), "story-hero": () => function({ image: r, title: n, contents: a }) {
    return console.log({ image: r, title: n, contents: a }), u.default.createElement("div", null, "TODO: to be implemented");
  }(e), undefined: () => (console.error(`the type '${t}' is not supported by the 'Hero' component.`), null) }[t]();
};
La.propTypes = { type: c().oneOf(["heading-hero", "story-hero"]), image: $s, title: $n, subTitle: $n, contents: c().arrayOf($n), contentsColor: c().string };
const ht = ({ dataId: e, isClickeable: t, disabled: r, pageLinkIcon: n, selectedPage: a, onClick: i, ellipses: o, ariaLabel: s, children: l, ariaDisabled: d }) => u.default.createElement("li", { className: be()("page-item", { disabled: r, active: a, elipses: o }) }, t ? u.default.createElement("button", { type: "button", "aria-label": s, className: be()("page-link", { "page-link-icon": n }), onClick: i, "data-testid": "page-link", "data-id": e, "aria-current": a ? "page" : null, "aria-disabled": d }, l, a && u.default.createElement("span", { className: "visually-hidden" }, "(current)")) : u.default.createElement("span", { className: "page-link", "data-testid": "page-link" }, l));
ht.propTypes = { isClickeable: c().bool, disabled: c().bool, pageLinkIcon: c().bool, selectedPage: c().bool, dataId: c().string, onClick: c().func, children: c().node, ellipses: c().bool, ariaLabel: c().string, ariaDisabled: c().bool }, ht.defaultProps = { isClickeable: !1, disabled: !1, pageLinkIcon: !1, selectedPage: !1, onClick: () => {
} };
const Ql = { event: "select", action: "click", name: "onclick", type: "pagination", region: "main content" }, vn = ({ type: e, background: t, currentPage: r, totalPages: n, onChange: a }) => {
  const [i, o] = (0, u.useState)(null);
  (0, u.useEffect)(() => {
    o(r);
  }, [r]);
  const s = (l, d) => {
    const p = { first: 1, prev: i === 1 ? 1 : i - 1, next: i === n ? n : i + 1, last: n }[d] ?? d;
    o(p), ((f) => {
      et({ ...Ql, text: `page ${f}` });
    })(p), a == null || a(l, p);
  };
  return u.default.createElement("nav", { "aria-label": "Pagination", "data-testid": "pagination" }, u.default.createElement("ul", { className: be()("pagination", "justify-content-center", "pt-2", "pb-2", { border: e === "bordered", "uds-bg-gray1": t === "gray1", "uds-bg-gray": t === "gray2", "uds-bg-dark": t === "gray7" }) }, u.default.createElement(ht, { dataId: "prev", isClickeable: !0, disabled: i === 1, pageLinkIcon: !0, onClick: (l) => s(l, "prev"), ariaDisabled: i === 1, ariaLabel: "Previous Page" }), (() => {
    const l = hi(i === n - 1, 2, i === n ? 3 : 1), d = hi(i === 1, 3, i === 2 ? 2 : 1), p = [...gi(i - l, i, n), ...gi(i, i + 1 + d, n)];
    return u.default.createElement(u.default.Fragment, null, p[0] !== 1 && u.default.createElement(ht, { ariaLabel: `Page 1 of ${n}`, isClickeable: !0, selectedPage: i === 1, onClick: (f) => s(f, "first") }, "1"), p[0] > 2 && u.default.createElement(ht, { ellipses: !0 }, "..."), p.map((f) => u.default.createElement(ht, { ariaLabel: `Page ${f} of ${n}`, isClickeable: !0, key: f, selectedPage: i === f, onClick: (h) => s(h, f) }, f)), p[p.length - 1] < n - 1 && u.default.createElement(ht, { ellipses: !0 }, "..."), p[p.length - 1] !== n && u.default.createElement(ht, { isClickeable: !0, ariaLabel: `Page ${n} of ${n}`, selectedPage: i === n, onClick: (f) => s(f, "last") }, n));
  })(), u.default.createElement(ht, { dataId: "next", isClickeable: !0, ariaDisabled: i === n, disabled: i === n, pageLinkIcon: !0, onClick: (l) => s(l, "next"), ariaLabel: "Next Page" })));
};
vn.propTypes = { type: c().oneOf(["default", "bordered"]).isRequired, background: c().oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, currentPage: c().number, totalPages: c().number, onChange: c().func.isRequired }, vn.defaultProps = { currentPage: 1, totalPages: 10 };
const Pi = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content" }, Ft = (e) => e === "small", Io = ({ size: e, image: t, imageAlt: r }) => Ft(e) ? u.default.createElement("div", { className: "image-wrapper" }, u.default.createElement(Ut, { src: t, alt: r, fetchPriority: "high" })) : u.default.createElement(Ut, { src: t, alt: r, fetchPriority: "high" });
Io.propTypes = { size: c().oneOf(["small", "large"]), image: c().string.isRequired, imageAlt: c().string.isRequired };
const Mo = ({ heading: e, citation: t }) => u.default.createElement("div", { className: "citation" }, u.default.createElement("h4", null, e), u.default.createElement("p", null, "— ", t));
Mo.propTypes = { heading: c().string.isRequired, citation: c().string.isRequired };
const Do = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [a, i] = (0, u.useState)(!1), o = `info-layer-${Math.floor(1e5 * Math.random())}`, s = (l) => {
    l.type !== "click" && l.key !== "Enter" && l.key !== " " || (i(!a), et({ ...Pi, text: "Expand ranking", action: a ? "open" : "close", section: r }));
  };
  return u.default.createElement("div", { className: be()("info-layer", { active: a }), "data-testid": "info-layer", id: o }, u.default.createElement("div", { className: "content" }, u.default.createElement("div", { className: be()("header", { closed: Ft(e) && !a }) }, Ft(e) && u.default.createElement("p", { dangerouslySetInnerHTML: at(t) }), !Ft(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: s, className: "btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": o }, u.default.createElement("h4", null, r), u.default.createElement("i", { className: "fas fa-chevron-up" }))), Ft(e) && u.default.createElement(u.default.Fragment, null, u.default.createElement("button", { onClick: s, className: "btn btn-expand", "aria-label": "Expand ranking", type: "button", "aria-expanded": a, "aria-controls": o }, u.default.createElement("i", { className: "fas fa-chevron-up" })))), !Ft(e) && u.default.createElement("p", { dangerouslySetInnerHTML: at(t) }), n && u.default.createElement("a", { href: n, "aria-label": "Read more", className: "read-more", onClick: () => {
    et({ ...Pi, section: r, text: "read more" });
  } }, "Read more ", u.default.createElement("span", { className: "visually-hidden" }, r), u.default.createElement("span", { className: "fas icon-small fa-arrow-right", "aria-hidden": "true" }))));
};
Do.propTypes = { imageSize: c().oneOf(["small", "large"]), body: c().string.isRequired, heading: c().string.isRequired, readMoreLink: c().string };
const Pa = ({ imageSize: e = "large", image: t, imageAlt: r, heading: n, body: a, readMoreLink: i = "", citation: o }) => u.default.createElement("div", { className: be()("card-ranking", { "large-image": e === "large", "small-image": e === "small" }) }, u.default.createElement(Io, { size: e, image: t, imageAlt: r }), Ft(e) && u.default.createElement(Mo, { heading: n, citation: o }), u.default.createElement(Do, { imageSize: e, body: a, heading: n, readMoreLink: i }));
Pa.propTypes = { imageSize: c().oneOf(["small", "large"]).isRequired, image: c().string.isRequired, imageAlt: c().string.isRequired, heading: c().string.isRequired, body: c().string.isRequired, readMoreLink: c().string, citation: c().string };
const Jl = wt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, jo = ({ hidePrev: e, hideNext: t, clickPrev: r, clickNext: n }) => u.default.createElement(Jl, null, !e && u.default.createElement("button", { className: "scroll-control-prev", type: "button", onClick: r, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Previous")), !t && u.default.createElement("button", { className: "scroll-control-next", type: "button", onClick: n, tabIndex: -1 }, u.default.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }), u.default.createElement("span", { className: "visually-hidden" }, "Next")));
jo.propTypes = { hidePrev: c().bool, hideNext: c().bool, clickPrev: c().func.isRequired, clickNext: c().func.isRequired };
const $o = (0, u.forwardRef)(function(e, t) {
  const { id: r, selected: n, title: a, selectTab: i, leftKeyPressed: o, rightKeyPressed: s, icon: l } = e, d = (0, u.useRef)(null);
  return (0, u.useImperativeHandle)(t, () => ({ focus() {
    d.current.focus();
  }, scrollIntoView() {
    var h, T, w, k, E, _, x;
    const p = ((h = d.current) == null ? void 0 : h.offsetWidth) / 2 + d.current.offsetLeft, f = ((w = (T = d.current) == null ? void 0 : T.offsetParent) == null ? void 0 : w.scrollLeft) + ((E = (k = d.current) == null ? void 0 : k.offsetParent) == null ? void 0 : E.offsetWidth) / 2;
    (x = (_ = d.current) == null ? void 0 : _.offsetParent) == null || x.scrollBy({ left: p - f });
  } }), []), u.default.createElement("a", { ref: d, className: "nav-item nav-link " + (n ? "active" : ""), id: r, href: `#nav-${r}`, role: "tab", "aria-controls": `nav-${r}`, "aria-selected": n, onClick: (p) => i(p, r, a), onKeyDown: (p) => {
    p.keyCode === 37 ? (p.preventDefault(), o()) : p.keyCode === 39 && (p.preventDefault(), s());
  }, tabIndex: n ? "" : "-1" }, a, " ", l && u.default.createElement("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }));
});
$o.propTypes = { id: c().string.isRequired, selected: c().bool.isRequired, title: c().string.isRequired, selectTab: c().func.isRequired, leftKeyPressed: c().func.isRequired, rightKeyPressed: c().func.isRequired, icon: c().arrayOf(c().string) };
const Fo = ({ id: e, bgColor: t, selected: r, children: n }) => r && u.default.createElement("div", { className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`, id: `nav-${e}`, role: "tabpanel", "aria-labelledby": `nav-${e}-tab` }, n);
Fo.propTypes = { id: c().string.isRequired, bgColor: c().string, selected: c().bool, children: c().oneOfType([c().array, c().element]) };
const zo = ({ initialTab: e = "", children: t, bgColor: r = "", onTabChange: n = () => {
} }) => {
  const a = u.default.Children.toArray(t), i = (0, u.useRef)(!1), [o, s] = (0, u.useState)(e && e !== "null" ? e : a[0].props.id), l = (0, u.useRef)(null), [d, p] = function() {
    const R = (0, u.useRef)({}), O = (0, u.useCallback)((W) => (de) => {
      R.current[W] = de;
    }, []);
    return [R, O];
  }(), f = (R) => {
    var O;
    n(R), (O = d.current[R]) == null || O.focus(), s(R);
  }, [h, T] = (0, u.useState)(0), [w, k] = (0, u.useState)();
  (0, u.useEffect)(() => {
    const R = () => {
      T(l.current.scrollLeft);
    };
    return l.current.addEventListener("scroll", R), R(), () => {
      l.current && l.current.removeEventListener("scroll", R);
    };
  }, [w]), (0, u.useEffect)(() => {
    const R = () => {
      k(l.current.scrollWidth - l.current.offsetWidth);
    };
    return window.addEventListener("resize", R), R(), () => {
      l.current && window.removeEventListener("resize", R);
    };
  }, []), (0, u.useEffect)(() => {
    var R;
    (R = d.current[o]) == null || R.scrollIntoView();
  }, [o]), (0, u.useEffect)(() => {
    i.current && e && e !== "null" && o !== e && s(e);
  }, [e]), (0, u.useEffect)(() => {
    i.current = !0;
  }, []);
  const E = (R) => {
    et({ event: "select", action: "click", name: "onclick", type: "carousel", region: "main content", text: R });
  }, _ = a.map((R) => u.default.cloneElement(R, { bgColor: r, selected: o === R.props.id })), x = (R) => {
    const O = l.current, W = O.scrollWidth - O.clientWidth;
    let de = O.scrollLeft + 200 * R;
    de = Math.max(0, Math.min(W, de)), O.scrollTo({ left: de, behavior: "smooth" });
  }, D = (R, O, W) => {
    et({ event: "link", action: "click", name: "onclick", type: "internal link", text: W }), R.preventDefault(), f(O);
  }, L = (R = !0) => {
    const O = a.length, W = R ? 1 : -1, de = a.findIndex((ae) => ae.props.id === o), we = a[(O + de + W) % O].props.id;
    f(we);
  };
  let S = "uds-tabbed-panels";
  return r === "bg-dark" && (S += " uds-tabbed-panels-dark"), u.default.createElement("div", { className: r }, u.default.createElement("nav", { className: S }, u.default.createElement("div", { className: "nav nav-tabs", role: "tablist", ref: l }, a.map((R, O) => u.default.createElement($o, { ref: p(R.props.id), id: R.props.id, title: R.props.title, selected: o === R.props.id, selectTab: D, key: R.props.id, leftKeyPressed: () => L(!1), rightKeyPressed: () => L(), icon: R.props.icon, index: O }))), u.default.createElement(jo, { hidePrev: h <= 0, hideNext: h >= w, clickPrev: () => {
    x(-1), E("left chevron");
  }, clickNext: () => {
    x(1), E("right chevron");
  } })), u.default.createElement("div", { className: "tab-content", tabIndex: 0, role: "tabpanel", id: "nav-tabContent" }, _));
};
zo.propTypes = { initialTab: c().string, children: c().arrayOf(c().element).isRequired, bgColor: c().string, onTabChange: c().func };
const Ia = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var a, i;
  return u.default.createElement("div", { className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${en(n.containerCssClass)}` }, e && u.default.createElement(Ut, { src: e, alt: t, dataTestId: "testimonial-image", fetchPriority: "high" }), u.default.createElement("svg", { role: "presentation", viewBox: "0 0 302.87 245.82" }, u.default.createElement("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" })), u.default.createElement("blockquote", { style: { paddingLeft: 0 } }, r.title && u.default.createElement("h3", { className: "text-center", "data-testid": "testimonial-title" }, u.default.createElement("span", { className: en(n.titleCssClass) }, r.title)), r.content && u.default.createElement("p", { className: en(n.contentCssClass), "data-testid": "testimonial-content" }, r.content), (!!((a = r.cite) != null && a.name) || !!((i = r.cite) != null && i.description)) && u.default.createElement("div", { className: "citation", "data-testid": "testimonial-citation" }, u.default.createElement("cite", { className: "name" }, r.cite.name), r.cite && u.default.createElement("cite", { className: "description" }, r.cite.description))));
};
Ia.propTypes = { quote: c().shape({ title: c().string, content: c().string, cite: c().shape({ name: c().string, description: c().string }) }).isRequired, imageSource: c().string, imageAltText: c().string, itemStyle: c().shape({ containerCssClass: c().arrayOf(c().string), titleCssClass: c().arrayOf(c().string), contentCssClass: c().arrayOf(c().string) }) };
const ec = { name: "onclick", event: "link", action: "click", type: "internal link", region: "main content", text: "play button" }, Ma = (e) => {
  const { type: t = "video", url: r = "", vttUrl: n, title: a = "", caption: i, className: o, controls: s = !0 } = e;
  return t === "youtube" ? (({ title: l = "", caption: d, url: p = "", className: f }) => u.default.createElement("div", { className: be()(`uds-video-container ${f}`, { "uds-video-with-caption": d }) }, u.default.createElement("div", { className: "uds-video-player youtube-video" }, u.default.createElement("iframe", { title: l, src: p })), d && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, d))))({ url: r, title: a, caption: i, className: o }) : (({ url: l = "", vttUrl: d, caption: p, title: f = "", className: h, controls: T = !0 }) => {
    const w = (0, u.useRef)(null);
    return u.default.createElement("div", { className: be()(`uds-video-container ${h}`, { "uds-video-with-caption": p }) }, u.default.createElement("div", { className: "uds-video-player" }, u.default.createElement("video", { ref: w, title: f, onClick: () => {
      et({ ...ec, section: f });
    }, playsInline: !0, controls: T || !0 }, u.default.createElement("source", { src: l }), u.default.createElement("track", { src: d, kind: "captions", srcLang: "en", label: "english_captions" }))), p && u.default.createElement("figure", { "data-testid": "video-caption" }, u.default.createElement("figcaption", null, p)));
  })({ url: r, vttUrl: n, title: a, caption: i, className: o, controls: s });
};
Ma.propTypes = { type: c().oneOf(["video", "youtube"]), url: c().string, vttUrl: c().string, title: c().string, className: c().string, caption: c().string, controls: c().bool };
const tc = ((e) => {
  var t = {};
  return Re.d(t, e), t;
})({ default: () => Ls.default }), tt = (e, t, r) => {
  tc.default.render(u.default.createElement(e, t), r);
}, rc = ({ targetSelector: e, props: t }) => tt(Aa, t, document.querySelector(e)), nc = ({ targetSelector: e, props: t }) => tt(Na, t, document.querySelector(e)), ac = ({ targetSelector: e, props: t }) => tt(pn, t, document.querySelector(e)), ic = ({ targetSelector: e, props: t }) => tt(yt, t, document.querySelector(e)), oc = ({ targetSelector: e, props: t }) => tt(mn, t, document.querySelector(e)), sc = ({ targetSelector: e, props: t }) => tt(Or, t, document.querySelector(e)), lc = ({ targetSelector: e, props: t }) => tt(hn, t, document.querySelector(e)), cc = ({ targetSelector: e, props: t }) => tt(La, t, document.querySelector(e)), uc = ({ targetSelector: e, props: t }) => tt(Ut, t, document.querySelector(e)), dc = ({ targetSelector: e, props: t }) => tt(Pa, t, document.querySelector(e)), fc = ({ targetSelector: e, props: t }) => tt(vn, t, document.querySelector(e)), pc = ({ targetSelector: e, props: t }) => tt(Ia, t, document.querySelector(e)), mc = ({ targetSelector: e, props: t }) => tt(Ma, t, document.querySelector(e));
var Ho = or.Zp, hc = or.TR, gc = or.Pb, Da = or.Ur, vc = or._Q;
function ja({
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
var Uo = { exports: {} }, Un = { exports: {} }, ve = {};
var Ii;
function yc() {
  if (Ii) return ve;
  Ii = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function D(S) {
    if (typeof S == "object" && S !== null) {
      var R = S.$$typeof;
      switch (R) {
        case t:
          switch (S = S.type, S) {
            case l:
            case d:
            case n:
            case i:
            case a:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case p:
                case w:
                case T:
                case o:
                  return S;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function L(S) {
    return D(S) === d;
  }
  return ve.AsyncMode = l, ve.ConcurrentMode = d, ve.ContextConsumer = s, ve.ContextProvider = o, ve.Element = t, ve.ForwardRef = p, ve.Fragment = n, ve.Lazy = w, ve.Memo = T, ve.Portal = r, ve.Profiler = i, ve.StrictMode = a, ve.Suspense = f, ve.isAsyncMode = function(S) {
    return L(S) || D(S) === l;
  }, ve.isConcurrentMode = L, ve.isContextConsumer = function(S) {
    return D(S) === s;
  }, ve.isContextProvider = function(S) {
    return D(S) === o;
  }, ve.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ve.isForwardRef = function(S) {
    return D(S) === p;
  }, ve.isFragment = function(S) {
    return D(S) === n;
  }, ve.isLazy = function(S) {
    return D(S) === w;
  }, ve.isMemo = function(S) {
    return D(S) === T;
  }, ve.isPortal = function(S) {
    return D(S) === r;
  }, ve.isProfiler = function(S) {
    return D(S) === i;
  }, ve.isStrictMode = function(S) {
    return D(S) === a;
  }, ve.isSuspense = function(S) {
    return D(S) === f;
  }, ve.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === d || S === i || S === a || S === f || S === h || typeof S == "object" && S !== null && (S.$$typeof === w || S.$$typeof === T || S.$$typeof === o || S.$$typeof === s || S.$$typeof === p || S.$$typeof === E || S.$$typeof === _ || S.$$typeof === x || S.$$typeof === k);
  }, ve.typeOf = D, ve;
}
var Mi;
function Bo() {
  return Mi || (Mi = 1, Un.exports = yc()), Un.exports;
}
var Bn, Di;
function bc() {
  if (Di) return Bn;
  Di = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bn = e, Bn;
}
var Wn, ji;
function wc() {
  if (ji) return Wn;
  ji = 1;
  var e = bc();
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
Uo.exports = wc()();
var kc = Uo.exports;
const m = /* @__PURE__ */ xa(kc);
var Wo = { exports: {} };
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
})(Wo);
var Sc = Wo.exports;
const Nr = /* @__PURE__ */ xa(Sc), Ec = (e) => (e || []).join(" ");
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function da(e, t) {
  return da = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, da(e, t);
}
function Tc() {
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
  return Tc() ? nn = Reflect.construct : nn = function(a, i, o) {
    var s = [null];
    s.push.apply(s, i);
    var l = Function.bind.apply(a, s), d = new l();
    return o && da(d, o.prototype), d;
  }, nn.apply(null, arguments);
}
function ct(e) {
  return xc(e) || Ac(e) || _c(e) || Oc();
}
function xc(e) {
  if (Array.isArray(e)) return fa(e);
}
function Ac(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _c(e, t) {
  if (e) {
    if (typeof e == "string") return fa(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fa(e, t);
  }
}
function fa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Nc = Object.hasOwnProperty, $i = Object.setPrototypeOf, Cc = Object.isFrozen, Rc = Object.getPrototypeOf, Lc = Object.getOwnPropertyDescriptor, Xe = Object.freeze, it = Object.seal, Pc = Object.create, qo = typeof Reflect < "u" && Reflect, yn = qo.apply, pa = qo.construct;
yn || (yn = function(t, r, n) {
  return t.apply(r, n);
});
Xe || (Xe = function(t) {
  return t;
});
it || (it = function(t) {
  return t;
});
pa || (pa = function(t, r) {
  return nn(t, ct(r));
});
var Ic = ot(Array.prototype.forEach), Fi = ot(Array.prototype.pop), Er = ot(Array.prototype.push), an = ot(String.prototype.toLowerCase), qn = ot(String.prototype.toString), zi = ot(String.prototype.match), lt = ot(String.prototype.replace), Mc = ot(String.prototype.indexOf), Dc = ot(String.prototype.trim), Be = ot(RegExp.prototype.test), Vn = jc(TypeError);
function ot(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return yn(e, t, n);
  };
}
function jc(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return pa(e, r);
  };
}
function ue(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : an, $i && $i(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var o = r(i);
      o !== i && (Cc(t) || (t[a] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function jt(e) {
  var t = Pc(null), r;
  for (r in e)
    yn(Nc, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function Yr(e, t) {
  for (; e !== null; ) {
    var r = Lc(e, t);
    if (r) {
      if (r.get)
        return ot(r.get);
      if (typeof r.value == "function")
        return ot(r.value);
    }
    e = Rc(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Hi = Xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Yn = Xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Gn = Xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), $c = Xe(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Xn = Xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Fc = Xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ui = Xe(["#text"]), Bi = Xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Zn = Xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Wi = Xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Gr = Xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), zc = it(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Hc = it(/<%[\w\W]*|[\w\W]*%>/gm), Uc = it(/\${[\w\W]*}/gm), Bc = it(/^data-[\-\w.\u00B7-\uFFFF]/), Wc = it(/^aria-[\-\w]+$/), qc = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Vc = it(/^(?:\w+script|data):/i), Yc = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Gc = it(/^html$/i), Xc = it(/^[a-z][.\w]*(-[.\w]+)+$/i), Zc = function() {
  return typeof window > "u" ? null : window;
}, Kc = function(t, r) {
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
function Vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zc(), t = function(b) {
    return Vo(b);
  };
  if (t.version = "2.5.7", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, o = e.Node, s = e.Element, l = e.NodeFilter, d = e.NamedNodeMap, p = d === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : d, f = e.HTMLFormElement, h = e.DOMParser, T = e.trustedTypes, w = s.prototype, k = Yr(w, "cloneNode"), E = Yr(w, "nextSibling"), _ = Yr(w, "childNodes"), x = Yr(w, "parentNode");
  if (typeof i == "function") {
    var D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  var L = Kc(T, r), S = L ? L.createHTML("") : "", R = n, O = R.implementation, W = R.createNodeIterator, de = R.createDocumentFragment, we = R.getElementsByTagName, ae = r.importNode, ee = {};
  try {
    ee = jt(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var re = {};
  t.isSupported = typeof x == "function" && O && O.createHTMLDocument !== void 0 && ee !== 9;
  var X = zc, he = Hc, De = Uc, pe = Bc, ke = Wc, qe = Vc, Q = Yc, q = Xc, N = qc, A = null, y = ue({}, [].concat(ct(Hi), ct(Yn), ct(Gn), ct(Xn), ct(Ui))), P = null, g = ue({}, [].concat(ct(Bi), ct(Zn), ct(Wi), ct(Gr))), I = Object.seal(Object.create(null, {
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
  })), C = null, ie = null, te = !0, Y = !0, Z = !1, ne = !0, fe = !1, oe = !0, se = !1, K = !1, ce = !1, je = !1, H = !1, $ = !1, V = !0, z = !1, F = "user-content-", le = !0, Te = !1, He = {}, ze = null, kt = ue({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), lr = null, Pr = ue({}, ["audio", "video", "img", "source", "image", "track"]), cr = null, Ir = ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ut = "http://www.w3.org/1998/Math/MathML", dt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml", St = st, ur = !1, Pt = null, dr = ue({}, [ut, dt, st], qn), $e, fr = ["application/xhtml+xml", "text/html"], Wt = "text/html", Ce, Et = null, Cn = n.createElement("form"), Mr = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, pr = function(b) {
    Et && Et === b || ((!b || At(b) !== "object") && (b = {}), b = jt(b), $e = // eslint-disable-next-line unicorn/prefer-includes
    fr.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? $e = Wt : $e = b.PARSER_MEDIA_TYPE, Ce = $e === "application/xhtml+xml" ? qn : an, A = "ALLOWED_TAGS" in b ? ue({}, b.ALLOWED_TAGS, Ce) : y, P = "ALLOWED_ATTR" in b ? ue({}, b.ALLOWED_ATTR, Ce) : g, Pt = "ALLOWED_NAMESPACES" in b ? ue({}, b.ALLOWED_NAMESPACES, qn) : dr, cr = "ADD_URI_SAFE_ATTR" in b ? ue(
      jt(Ir),
      // eslint-disable-line indent
      b.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Ce
      // eslint-disable-line indent
    ) : Ir, lr = "ADD_DATA_URI_TAGS" in b ? ue(
      jt(Pr),
      // eslint-disable-line indent
      b.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Ce
      // eslint-disable-line indent
    ) : Pr, ze = "FORBID_CONTENTS" in b ? ue({}, b.FORBID_CONTENTS, Ce) : kt, C = "FORBID_TAGS" in b ? ue({}, b.FORBID_TAGS, Ce) : {}, ie = "FORBID_ATTR" in b ? ue({}, b.FORBID_ATTR, Ce) : {}, He = "USE_PROFILES" in b ? b.USE_PROFILES : !1, te = b.ALLOW_ARIA_ATTR !== !1, Y = b.ALLOW_DATA_ATTR !== !1, Z = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ne = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, je = b.RETURN_DOM || !1, H = b.RETURN_DOM_FRAGMENT || !1, $ = b.RETURN_TRUSTED_TYPE || !1, ce = b.FORCE_BODY || !1, V = b.SANITIZE_DOM !== !1, z = b.SANITIZE_NAMED_PROPS || !1, le = b.KEEP_CONTENT !== !1, Te = b.IN_PLACE || !1, N = b.ALLOWED_URI_REGEXP || N, St = b.NAMESPACE || st, I = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Mr(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (I.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Mr(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (I.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (Y = !1), H && (je = !0), He && (A = ue({}, ct(Ui)), P = [], He.html === !0 && (ue(A, Hi), ue(P, Bi)), He.svg === !0 && (ue(A, Yn), ue(P, Zn), ue(P, Gr)), He.svgFilters === !0 && (ue(A, Gn), ue(P, Zn), ue(P, Gr)), He.mathMl === !0 && (ue(A, Xn), ue(P, Wi), ue(P, Gr))), b.ADD_TAGS && (A === y && (A = jt(A)), ue(A, b.ADD_TAGS, Ce)), b.ADD_ATTR && (P === g && (P = jt(P)), ue(P, b.ADD_ATTR, Ce)), b.ADD_URI_SAFE_ATTR && ue(cr, b.ADD_URI_SAFE_ATTR, Ce), b.FORBID_CONTENTS && (ze === kt && (ze = jt(ze)), ue(ze, b.FORBID_CONTENTS, Ce)), le && (A["#text"] = !0), se && ue(A, ["html", "head", "body"]), A.table && (ue(A, ["tbody"]), delete C.tbody), Xe && Xe(b), Et = b);
  }, mr = ue({}, ["mi", "mo", "mn", "ms", "mtext"]), Ke = ue({}, ["annotation-xml"]), Tt = ue({}, ["title", "style", "font", "a", "script"]), xe = ue({}, Yn);
  ue(xe, Gn), ue(xe, $c);
  var It = ue({}, Xn);
  ue(It, Fc);
  var hr = function(b) {
    var j = x(b);
    (!j || !j.tagName) && (j = {
      namespaceURI: St,
      tagName: "template"
    });
    var B = an(b.tagName), me = an(j.tagName);
    return Pt[b.namespaceURI] ? b.namespaceURI === dt ? j.namespaceURI === st ? B === "svg" : j.namespaceURI === ut ? B === "svg" && (me === "annotation-xml" || mr[me]) : !!xe[B] : b.namespaceURI === ut ? j.namespaceURI === st ? B === "math" : j.namespaceURI === dt ? B === "math" && Ke[me] : !!It[B] : b.namespaceURI === st ? j.namespaceURI === dt && !Ke[me] || j.namespaceURI === ut && !mr[me] ? !1 : !It[B] && (Tt[B] || !xe[B]) : !!($e === "application/xhtml+xml" && Pt[b.namespaceURI]) : !1;
  }, Ve = function(b) {
    Er(t.removed, {
      element: b
    });
    try {
      b.parentNode.removeChild(b);
    } catch {
      try {
        b.outerHTML = S;
      } catch {
        b.remove();
      }
    }
  }, qt = function(b, j) {
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
    if (ce)
      b = "<remove></remove>" + b;
    else {
      var me = zi(b, /^[\r\n\t ]+/);
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
      j = O.createDocument(St, "template", null);
      try {
        j.documentElement.innerHTML = ur ? S : Ue;
      } catch {
      }
    }
    var _e = j.body || j.documentElement;
    return b && B && _e.insertBefore(n.createTextNode(B), _e.childNodes[0] || null), St === st ? we.call(j, se ? "html" : "body")[0] : se ? j.documentElement : _e;
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
  }, Mt = function(b) {
    return At(o) === "object" ? b instanceof o : b && At(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
  }, Qe = function(b, j, B) {
    re[b] && Ic(re[b], function(me) {
      me.call(t, j, B, Et);
    });
  }, Le = function(b) {
    var j;
    if (Qe("beforeSanitizeElements", b, null), gr(b) || Be(/[\u0080-\uFFFF]/, b.nodeName))
      return Ve(b), !0;
    var B = Ce(b.nodeName);
    if (Qe("uponSanitizeElement", b, {
      tagName: B,
      allowedTags: A
    }), b.hasChildNodes() && !Mt(b.firstElementChild) && (!Mt(b.content) || !Mt(b.content.firstElementChild)) && Be(/<[/\w]/g, b.innerHTML) && Be(/<[/\w]/g, b.textContent) || B === "select" && Be(/<template/i, b.innerHTML) || b.nodeType === 7 || oe && b.nodeType === 8 && Be(/<[/\w]/g, b.data))
      return Ve(b), !0;
    if (!A[B] || C[B]) {
      if (!C[B] && Pe(B) && (I.tagNameCheck instanceof RegExp && Be(I.tagNameCheck, B) || I.tagNameCheck instanceof Function && I.tagNameCheck(B)))
        return !1;
      if (le && !ze[B]) {
        var me = x(b) || b.parentNode, Ue = _(b) || b.childNodes;
        if (Ue && me)
          for (var _e = Ue.length, Ie = _e - 1; Ie >= 0; --Ie) {
            var Ye = k(Ue[Ie], !0);
            Ye.__removalCount = (b.__removalCount || 0) + 1, me.insertBefore(Ye, E(b));
          }
      }
      return Ve(b), !0;
    }
    return b instanceof s && !hr(b) || (B === "noscript" || B === "noembed" || B === "noframes") && Be(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ve(b), !0) : (fe && b.nodeType === 3 && (j = b.textContent, j = lt(j, X, " "), j = lt(j, he, " "), j = lt(j, De, " "), b.textContent !== j && (Er(t.removed, {
      element: b.cloneNode()
    }), b.textContent = j)), Qe("afterSanitizeElements", b, null), !1);
  }, vr = function(b, j, B) {
    if (V && (j === "id" || j === "name") && (B in n || B in Cn))
      return !1;
    if (!(Y && !ie[j] && Be(pe, j))) {
      if (!(te && Be(ke, j))) {
        if (!P[j] || ie[j]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Pe(b) && (I.tagNameCheck instanceof RegExp && Be(I.tagNameCheck, b) || I.tagNameCheck instanceof Function && I.tagNameCheck(b)) && (I.attributeNameCheck instanceof RegExp && Be(I.attributeNameCheck, j) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(j)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            j === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && Be(I.tagNameCheck, B) || I.tagNameCheck instanceof Function && I.tagNameCheck(B)))
          ) return !1;
        } else if (!cr[j]) {
          if (!Be(N, lt(B, Q, ""))) {
            if (!((j === "src" || j === "xlink:href" || j === "href") && b !== "script" && Mc(B, "data:") === 0 && lr[b])) {
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
  }, Pe = function(b) {
    return b !== "annotation-xml" && zi(b, q);
  }, yr = function(b) {
    var j, B, me, Ue;
    Qe("beforeSanitizeAttributes", b, null);
    var _e = b.attributes;
    if (_e) {
      var Ie = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: P
      };
      for (Ue = _e.length; Ue--; ) {
        j = _e[Ue];
        var Ye = j, Oe = Ye.name, Dt = Ye.namespaceURI;
        if (B = Oe === "value" ? j.value : Dc(j.value), me = Ce(Oe), Ie.attrName = me, Ie.attrValue = B, Ie.keepAttr = !0, Ie.forceKeepAttr = void 0, Qe("uponSanitizeAttribute", b, Ie), B = Ie.attrValue, !Ie.forceKeepAttr && (qt(Oe, b), !!Ie.keepAttr)) {
          if (!ne && Be(/\/>/i, B)) {
            qt(Oe, b);
            continue;
          }
          fe && (B = lt(B, X, " "), B = lt(B, he, " "), B = lt(B, De, " "));
          var ft = Ce(b.nodeName);
          if (vr(ft, me, B)) {
            if (z && (me === "id" || me === "name") && (qt(Oe, b), B = F + B), oe && Be(/((--!?|])>)|<\/(style|title)/i, B)) {
              qt(Oe, b);
              continue;
            }
            if (L && At(T) === "object" && typeof T.getAttributeType == "function" && !Dt)
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
              Dt ? b.setAttributeNS(Dt, Oe, B) : b.setAttribute(Oe, B), gr(b) ? Ve(b) : Fi(t.removed);
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
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j, B, me, Ue, _e;
    if (ur = !J, ur && (J = "<!-->"), typeof J != "string" && !Mt(J))
      if (typeof J.toString == "function") {
        if (J = J.toString(), typeof J != "string")
          throw Vn("dirty is not a string, aborting");
      } else
        throw Vn("toString is not a function");
    if (!t.isSupported) {
      if (At(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof J == "string")
          return e.toStaticHTML(J);
        if (Mt(J))
          return e.toStaticHTML(J.outerHTML);
      }
      return J;
    }
    if (K || pr(b), t.removed = [], typeof J == "string" && (Te = !1), Te) {
      if (J.nodeName) {
        var Ie = Ce(J.nodeName);
        if (!A[Ie] || C[Ie])
          throw Vn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (J instanceof o)
      j = Dr("<!---->"), B = j.ownerDocument.importNode(J, !0), B.nodeType === 1 && B.nodeName === "BODY" || B.nodeName === "HTML" ? j = B : j.appendChild(B);
    else {
      if (!je && !fe && !se && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return L && $ ? L.createHTML(J) : J;
      if (j = Dr(J), !j)
        return je ? null : $ ? S : "";
    }
    j && ce && Ve(j.firstChild);
    for (var Ye = jr(Te ? J : j); me = Ye.nextNode(); )
      me.nodeType === 3 && me === Ue || Le(me) || (me.content instanceof a && Ae(me.content), yr(me), Ue = me);
    if (Ue = null, Te)
      return J;
    if (je) {
      if (H)
        for (_e = de.call(j.ownerDocument); j.firstChild; )
          _e.appendChild(j.firstChild);
      else
        _e = j;
      return (P.shadowroot || P.shadowrootmod) && (_e = ae.call(r, _e, !0)), _e;
    }
    var Oe = se ? j.outerHTML : j.innerHTML;
    return se && A["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Be(Gc, j.ownerDocument.doctype.name) && (Oe = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + Oe), fe && (Oe = lt(Oe, X, " "), Oe = lt(Oe, he, " "), Oe = lt(Oe, De, " ")), L && $ ? L.createHTML(Oe) : Oe;
  }, t.setConfig = function(J) {
    pr(J), K = !0;
  }, t.clearConfig = function() {
    Et = null, K = !1;
  }, t.isValidAttribute = function(J, b, j) {
    Et || pr({});
    var B = Ce(J), me = Ce(b);
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
var Qc = Vo();
const Kt = (e) => ({ __html: Qc.sanitize(e) });
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
}, Jc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, $a = ({
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
  const k = Nr("btn", {
    [`btn-${a}`]: !0,
    "btn-md": f === "small",
    "btn-sm": f === "xsmall",
    "btn-block": n,
    disabled: i
  });
  let E = o;
  s && o === "button" && (E = "a");
  const _ = (x) => {
    Jt({ ...Jc, text: x, section: t }), p == null || p();
  };
  return /* @__PURE__ */ M.jsxs(
    E,
    {
      type: E === "button" && p ? "button" : void 0,
      ...w,
      className: Nr(h) || k,
      href: s,
      ref: d,
      onClick: () => _(e),
      "aria-label": r,
      target: E === "a" ? T : null,
      children: [
        l && /* @__PURE__ */ M.jsx("i", { className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} me-1` }),
        e
      ]
    }
  );
};
$a.propTypes = {
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
$a.defaultProps = {
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
const eu = {
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
  const p = Nr("btn", "btn-tag", {
    "btn-tag-alt-white": n === "white",
    "btn-tag-alt-gray": n === "gray",
    "btn-tag-alt-dark": n === "dark",
    disabled: a
  });
  let f = i;
  s && i === "button" && (f = "a");
  const h = (T) => {
    Jt({ ...eu, text: T, section: t }), l == null || l();
  };
  return (
    // @ts-ignore
    /* @__PURE__ */ M.jsx(
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
const Yo = ({
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
    ...(r == null ? void 0 : r.length) > 0 && { className: Ec(r) },
    ...i && { "data-testid": i },
    ...s && { width: s },
    ...l && { height: l }
  }, E = Nr("uds-img", {
    borderless: !T,
    "uds-img-drop-shadow": w
  }), _ = (D) => {
    const L = D ? `${k.className} ${D}` : k.className;
    return d ? /* @__PURE__ */ M.jsxs("a", { href: d, children: [
      /* @__PURE__ */ M.jsx("img", { ...k, className: L }),
      /* @__PURE__ */ M.jsx("span", { className: "visually-hidden", children: p })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ M.jsx("img", { ...k, className: L })
    );
  }, x = () => /* @__PURE__ */ M.jsx("div", { className: E, children: /* @__PURE__ */ M.jsxs("figure", { className: "figure uds-figure", children: [
    _(),
    f && /* @__PURE__ */ M.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      h && /* @__PURE__ */ M.jsx("h3", { children: h }),
      /* @__PURE__ */ M.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Kt(f)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: f ? x() : _(E) });
};
Yo.propTypes = {
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
var za = Bo();
function tu(e) {
  function t(N, A, y, P, g) {
    for (var I = 0, C = 0, ie = 0, te = 0, Y, Z, ne = 0, fe = 0, oe, se = oe = Y = 0, K = 0, ce = 0, je = 0, H = 0, $ = y.length, V = $ - 1, z, F = "", le = "", Te = "", He = "", ze; K < $; ) {
      if (Z = y.charCodeAt(K), K === V && C + te + ie + I !== 0 && (C !== 0 && (Z = C === 47 ? 10 : 47), te = ie = I = 0, $++, V++), C + te + ie + I === 0) {
        if (K === V && (0 < ce && (F = F.replace(h, "")), 0 < F.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              F += y.charAt(K);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (F = F.trim(), Y = F.charCodeAt(0), oe = 1, H = ++K; K < $; ) {
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
            switch (oe = y.substring(H, K), Y === 0 && (Y = (F = F.replace(f, "").trim()).charCodeAt(0)), Y) {
              case 64:
                switch (0 < ce && (F = F.replace(h, "")), Z = F.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ce = A;
                    break;
                  default:
                    ce = De;
                }
                if (oe = t(A, ce, oe, Z, g + 1), H = oe.length, 0 < ke && (ce = r(De, F, je), ze = s(3, oe, ce, A, re, ee, H, Z, g, P), F = ce.join(""), ze !== void 0 && (H = (oe = ze.trim()).length) === 0 && (Z = 0, oe = "")), 0 < H) switch (Z) {
                  case 115:
                    F = F.replace(R, o);
                  case 100:
                  case 109:
                  case 45:
                    oe = F + "{" + oe + "}";
                    break;
                  case 107:
                    F = F.replace(x, "$1 $2"), oe = F + "{" + oe + "}", oe = he === 1 || he === 2 && i("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                    break;
                  default:
                    oe = F + oe, P === 112 && (oe = (le += oe, ""));
                }
                else oe = "";
                break;
              default:
                oe = t(A, r(A, F, je), oe, P, g + 1);
            }
            Te += oe, oe = je = ce = se = Y = 0, F = "", Z = y.charCodeAt(++K);
            break;
          case 125:
          case 59:
            if (F = (0 < ce ? F.replace(h, "") : F).trim(), 1 < (H = F.length)) switch (se === 0 && (Y = F.charCodeAt(0), Y === 45 || 96 < Y && 123 > Y) && (H = (F = F.replace(" ", ":")).length), 0 < ke && (ze = s(1, F, A, N, re, ee, le.length, P, g, P)) !== void 0 && (H = (F = ze.trim()).length) === 0 && (F = "\0\0"), Y = F.charCodeAt(0), Z = F.charCodeAt(1), Y) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  He += F + y.charAt(K);
                  break;
                }
              default:
                F.charCodeAt(H - 1) !== 58 && (le += a(F, Y, Z, F.charCodeAt(2)));
            }
            je = ce = se = Y = 0, F = "", Z = y.charCodeAt(++K);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + Y === 0 && P !== 107 && 0 < F.length && (ce = 1, F += "\0"), 0 < ke * Q && s(0, F, A, N, re, ee, le.length, P, g, P), ee = 1, re++;
          break;
        case 59:
        case 125:
          if (C + te + ie + I === 0) {
            ee++;
            break;
          }
        default:
          switch (ee++, z = y.charAt(K), Z) {
            case 9:
            case 32:
              if (te + I + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  z = "";
                  break;
                default:
                  Z !== 32 && (z = " ");
              }
              break;
            case 0:
              z = "\\0";
              break;
            case 12:
              z = "\\f";
              break;
            case 11:
              z = "\\v";
              break;
            case 38:
              te + C + I === 0 && (ce = je = 1, z = "\f" + z);
              break;
            case 108:
              if (te + C + I + X === 0 && 0 < se) switch (K - se) {
                case 2:
                  ne === 112 && y.charCodeAt(K - 3) === 58 && (X = ne);
                case 8:
                  fe === 111 && (X = fe);
              }
              break;
            case 58:
              te + C + I === 0 && (se = K);
              break;
            case 44:
              C + ie + te + I === 0 && (ce = 1, z += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (te = te === Z ? 0 : te === 0 ? Z : te);
              break;
            case 91:
              te + C + ie === 0 && I++;
              break;
            case 93:
              te + C + ie === 0 && I--;
              break;
            case 41:
              te + C + I === 0 && ie--;
              break;
            case 40:
              if (te + C + I === 0) {
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
              C + ie + te + I + se + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + I + ie)) switch (C) {
                case 0:
                  switch (2 * Z + 3 * y.charCodeAt(K + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      H = K, C = 42;
                  }
                  break;
                case 42:
                  Z === 47 && ne === 42 && H + 2 !== K && (y.charCodeAt(H + 2) === 33 && (le += y.substring(H, K + 1)), z = "", C = 0);
              }
          }
          C === 0 && (F += z);
      }
      fe = ne, ne = Z, K++;
    }
    if (H = le.length, 0 < H) {
      if (ce = A, 0 < ke && (ze = s(2, le, ce, N, re, ee, H, P, g, P), ze !== void 0 && (le = ze).length === 0)) return He + le + Te;
      if (le = ce.join(",") + "{" + le + "}", he * X !== 0) {
        switch (he !== 2 || i(le, 2) || (X = 0), X) {
          case 111:
            le = le.replace(L, ":-moz-$1") + le;
            break;
          case 112:
            le = le.replace(D, "::-webkit-input-$1") + le.replace(D, "::-moz-$1") + le.replace(D, ":-ms-input-$1") + le;
        }
        X = 0;
      }
    }
    return He + le + Te;
  }
  function r(N, A, y) {
    var P = A.trim().split(E);
    A = P;
    var g = P.length, I = N.length;
    switch (I) {
      case 0:
      case 1:
        var C = 0;
        for (N = I === 0 ? "" : N[0] + " "; C < g; ++C)
          A[C] = n(N, A[C], y).trim();
        break;
      default:
        var ie = C = 0;
        for (A = []; C < g; ++C)
          for (var te = 0; te < I; ++te)
            A[ie++] = n(N[te] + " ", P[C], y).trim();
    }
    return A;
  }
  function n(N, A, y) {
    var P = A.charCodeAt(0);
    switch (33 > P && (P = (A = A.trim()).charCodeAt(0)), P) {
      case 38:
        return A.replace(_, "$1" + N.trim());
      case 58:
        return N.trim() + A.replace(_, "$1" + N.trim());
      default:
        if (0 < 1 * y && 0 < A.indexOf("\f")) return A.replace(_, (N.charCodeAt(0) === 58 ? "" : "$1") + N.trim());
    }
    return N + A;
  }
  function a(N, A, y, P) {
    var g = N + ";", I = 2 * A + 3 * y + 4 * P;
    if (I === 944) {
      N = g.indexOf(":", 9) + 1;
      var C = g.substring(N, g.length - 1).trim();
      return C = g.substring(0, N).trim() + C + ";", he === 1 || he === 2 && i(C, 1) ? "-webkit-" + C + C : C;
    }
    if (he === 0 || he === 2 && !i(g, 1)) return g;
    switch (I) {
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
        return C = g.substring(g.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + g + "-ms-flex-pack" + C + g;
      case 1005:
        return w.test(g) ? g.replace(T, ":-webkit-") + g.replace(T, ":-moz-") + g : g;
      case 1e3:
        switch (C = g.substring(13).trim(), A = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(A)) {
          case 226:
            C = g.replace(S, "tb");
            break;
          case 232:
            C = g.replace(S, "tb-rl");
            break;
          case 220:
            C = g.replace(S, "lr");
            break;
          default:
            return g;
        }
        return "-webkit-" + g + "-ms-" + C + g;
      case 1017:
        if (g.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (A = (g = N).length - 10, C = (g.charCodeAt(A) === 33 ? g.substring(0, A) : g).substring(N.indexOf(":", 7) + 1).trim(), I = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            g = g.replace(C, "-webkit-" + C) + ";" + g;
            break;
          case 207:
          case 102:
            g = g.replace(C, "-webkit-" + (102 < I ? "inline-" : "") + "box") + ";" + g.replace(C, "-webkit-" + C) + ";" + g.replace(C, "-ms-" + C + "box") + ";" + g;
        }
        return g + ";";
      case 938:
        if (g.charCodeAt(5) === 45) switch (g.charCodeAt(6)) {
          case 105:
            return C = g.replace("-items", ""), "-webkit-" + g + "-webkit-box-" + C + "-ms-flex-" + C + g;
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
        if (we.test(N) === !0) return (C = N.substring(N.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(N.replace("stretch", "fill-available"), A, y, P).replace(":fill-available", ":stretch") : g.replace(C, "-webkit-" + C) + g.replace(C, "-moz-" + C.replace("fill-", "")) + g;
        break;
      case 962:
        if (g = "-webkit-" + g + (g.charCodeAt(5) === 102 ? "-ms-" + g : "") + g, y + P === 211 && g.charCodeAt(13) === 105 && 0 < g.indexOf("transform", 10)) return g.substring(0, g.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + g;
    }
    return g;
  }
  function i(N, A) {
    var y = N.indexOf(A === 1 ? ":" : "{"), P = N.substring(0, A !== 3 ? y : 10);
    return y = N.substring(y + 1, N.length - 1), qe(A !== 2 ? P : P.replace(de, "$1"), y, A);
  }
  function o(N, A) {
    var y = a(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return y !== A + ";" ? y.replace(O, " or ($1)").substring(4) : "(" + A + ")";
  }
  function s(N, A, y, P, g, I, C, ie, te, Y) {
    for (var Z = 0, ne = A, fe; Z < ke; ++Z)
      switch (fe = pe[Z].call(p, N, ne, y, P, g, I, C, ie, te, Y)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = fe;
      }
    if (ne !== A) return ne;
  }
  function l(N) {
    switch (N) {
      case void 0:
      case null:
        ke = pe.length = 0;
        break;
      default:
        if (typeof N == "function") pe[ke++] = N;
        else if (typeof N == "object") for (var A = 0, y = N.length; A < y; ++A)
          l(N[A]);
        else Q = !!N | 0;
    }
    return l;
  }
  function d(N) {
    return N = N.prefix, N !== void 0 && (qe = null, N ? typeof N != "function" ? he = 1 : (he = 2, qe = N) : he = 0), d;
  }
  function p(N, A) {
    var y = N;
    if (33 > y.charCodeAt(0) && (y = y.trim()), q = y, y = [q], 0 < ke) {
      var P = s(-1, A, y, y, re, ee, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (A = P);
    }
    var g = t(De, y, A, 0, 0);
    return 0 < ke && (P = s(-2, g, y, y, re, ee, g.length, 0, 0, 0), P !== void 0 && (g = P)), q = "", X = 0, ee = re = 1, g;
  }
  var f = /^\0+/g, h = /[\0\r\f]/g, T = /: */g, w = /zoo|gra/, k = /([,: ])(transform)/g, E = /,\r+?/g, _ = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, D = /::(place)/g, L = /:(read-only)/g, S = /[svh]\w+-[tblr]{2}/, R = /\(\s*(.*)\s*\)/g, O = /([\s\S]*?);/g, W = /-self|flex-/g, de = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, ae = /([^-])(image-set\()/, ee = 1, re = 1, X = 0, he = 1, De = [], pe = [], ke = 0, qe = null, Q = 0, q = "";
  return p.use = l, p.set = d, e !== void 0 && d(e), p;
}
var ru = {
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
function nu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var au = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qi = /* @__PURE__ */ nu(
  function(e) {
    return au.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ha = Bo(), iu = {
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
}, ou = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, su = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Go = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ua = {};
Ua[Ha.ForwardRef] = su;
Ua[Ha.Memo] = Go;
function Vi(e) {
  return Ha.isMemo(e) ? Go : Ua[e.$$typeof] || iu;
}
var lu = Object.defineProperty, cu = Object.getOwnPropertyNames, Yi = Object.getOwnPropertySymbols, uu = Object.getOwnPropertyDescriptor, du = Object.getPrototypeOf, Gi = Object.prototype;
function Xo(e, t, r) {
  if (typeof t != "string") {
    if (Gi) {
      var n = du(t);
      n && n !== Gi && Xo(e, n, r);
    }
    var a = cu(t);
    Yi && (a = a.concat(Yi(t)));
    for (var i = Vi(e), o = Vi(t), s = 0; s < a.length; ++s) {
      var l = a[s];
      if (!ou[l] && !(r && r[l]) && !(o && o[l]) && !(i && i[l])) {
        var d = uu(t, l);
        try {
          lu(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var fu = Xo;
const pu = /* @__PURE__ */ xa(fu);
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
var Xi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ma = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !za.typeOf(e);
}, bn = Object.freeze([]), Nt = Object.freeze({});
function Cr(e) {
  return typeof e == "function";
}
function ha(e) {
  return ye.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ba(e) {
  return e && typeof e.styledComponentId == "string";
}
var er = typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_ATTR || ye.env.SC_ATTR) || "data-styled", Wa = typeof window < "u" && "HTMLElement" in window, mu = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ye < "u" && ye.env !== void 0 && (ye.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ye.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ye.env.REACT_APP_SC_DISABLE_SPEEDY : ye.env.SC_DISABLE_SPEEDY !== void 0 && ye.env.SC_DISABLE_SPEEDY !== "" ? ye.env.SC_DISABLE_SPEEDY !== "false" && ye.env.SC_DISABLE_SPEEDY : ye.env.NODE_ENV !== "production")), hu = ye.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function gu() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function sr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw ye.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(gu.apply(void 0, [hu[e]].concat(r)).trim());
}
var vu = function() {
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
}, yu = function(e) {
  return wn.get(e);
}, bu = function(e, t) {
  t >= Ar && (Ar = t + 1), on.set(e, t), wn.set(t, e);
}, wu = "style[" + er + '][data-styled-version="5.3.11"]', ku = new RegExp("^" + er + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Su = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, o = a.length; i < o; i++) (n = a[i]) && e.registerName(t, n);
}, Eu = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var o = r[a].trim();
    if (o) {
      var s = o.match(ku);
      if (s) {
        var l = 0 | parseInt(s[1], 10), d = s[2];
        l !== 0 && (bu(d, l), Su(e, d, s[3]), e.getTag().insertRules(l, n)), n.length = 0;
      } else n.push(o);
    }
  }
}, Tu = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Zo = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(s) {
    for (var l = s.childNodes, d = l.length; d >= 0; d--) {
      var p = l[d];
      if (p && p.nodeType === 1 && p.hasAttribute(er)) return p;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(er, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var o = Tu();
  return o && n.setAttribute("nonce", o), r.insertBefore(n, i), n;
}, xu = function() {
  function e(r) {
    var n = this.element = Zo(r);
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
}(), Au = function() {
  function e(r) {
    var n = this.element = Zo(r);
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
}(), _u = function() {
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
}(), Zi = Wa, Ou = { isServer: !Wa, useCSSOMInjection: !mu }, Ko = function() {
  function e(r, n, a) {
    r === void 0 && (r = Nt), n === void 0 && (n = {}), this.options = vt({}, Ou, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Wa && Zi && (Zi = !1, function(i) {
      for (var o = document.querySelectorAll(wu), s = 0, l = o.length; s < l; s++) {
        var d = o[s];
        d && d.getAttribute(er) !== "active" && (Eu(i, d), d.parentNode && d.parentNode.removeChild(d));
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
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, o = n.target, r = a ? new _u(o) : i ? new xu(o) : new Au(o), new vu(r)));
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
        var s = yu(o);
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
}(), Nu = /(a)(d)/gi, Ki = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ga(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ki(t % 52) + r;
  return (Ki(t % 52) + r).replace(Nu, "$1-$2");
}
var zt = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Qo = function(e) {
  return zt(5381, e);
};
function Cu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Cr(r) && !Ba(r)) return !1;
  }
  return !0;
}
var Ru = Qo("5.3.11"), Lu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = ye.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Cu(t), this.componentId = r, this.baseHash = zt(Ru, r), this.baseStyle = n, Ko.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var o = tr(this.rules, t, r, n).join(""), s = ga(zt(this.baseHash, o) >>> 0);
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
        var E = ga(p >>> 0);
        if (!r.hasNameForId(a, E)) {
          var _ = n(f, "." + E, void 0, a);
          r.insertRules(a, E, _);
        }
        i.push(E);
      }
    }
    return i.join(" ");
  }, e;
}(), Pu = /^\s*\/\/.*$/gm, Iu = [":", "[", ".", "#"];
function Mu(e) {
  var t, r, n, a, i = Nt, o = i.options, s = o === void 0 ? Nt : o, l = i.plugins, d = l === void 0 ? bn : l, p = new tu(s), f = [], h = /* @__PURE__ */ function(k) {
    function E(_) {
      if (_) try {
        k(_ + "}");
      } catch {
      }
    }
    return function(_, x, D, L, S, R, O, W, de, we) {
      switch (_) {
        case 1:
          if (de === 0 && x.charCodeAt(0) === 64) return k(x + ";"), "";
          break;
        case 2:
          if (W === 0) return x + "/*|*/";
          break;
        case 3:
          switch (W) {
            case 102:
            case 112:
              return k(D[0] + x), "";
            default:
              return x + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          x.split("/*|*/}").forEach(E);
      }
    };
  }(function(k) {
    f.push(k);
  }), T = function(k, E, _) {
    return E === 0 && Iu.indexOf(_[r.length]) !== -1 || _.match(a) ? k : "." + t;
  };
  function w(k, E, _, x) {
    x === void 0 && (x = "&");
    var D = k.replace(Pu, ""), L = E && _ ? _ + " " + E + " { " + D + " }" : D;
    return t = x, r = E, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), p(_ || !E ? "" : E, L);
  }
  return p.use([].concat(d, [function(k, E, _) {
    k === 2 && _.length && _[0].lastIndexOf(r) > 0 && (_[0] = _[0].replace(n, T));
  }, h, function(k) {
    if (k === -2) {
      var E = f;
      return f = [], E;
    }
  }])), w.hash = d.length ? d.reduce(function(k, E) {
    return E.name || sr(15), zt(k, E.name);
  }, 5381).toString() : "", w;
}
var Jo = Rt.createContext();
Jo.Consumer;
var es = Rt.createContext(), Du = (es.Consumer, new Ko()), va = Mu();
function ju() {
  return ir(Jo) || Du;
}
function $u() {
  return ir(es) || va;
}
var Fu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = va);
      var o = n.name + i.hash;
      a.hasNameForId(n.id, o) || a.insertRules(n.id, o, i(n.rules, o, "@keyframes"));
    }, this.toString = function() {
      return sr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = va), this.name + t.hash;
  }, e;
}(), zu = /([A-Z])/, Hu = /([A-Z])/g, Uu = /^ms-/, Bu = function(e) {
  return "-" + e.toLowerCase();
};
function Qi(e) {
  return zu.test(e) ? e.replace(Hu, Bu).replace(Uu, "-ms-") : e;
}
var Ji = function(e) {
  return e == null || e === !1 || e === "";
};
function tr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], o = 0, s = e.length; o < s; o += 1) (a = tr(e[o], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (Ji(e)) return "";
  if (Ba(e)) return "." + e.styledComponentId;
  if (Cr(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var l = e(t);
    return ye.env.NODE_ENV !== "production" && za.isElement(l) && console.warn(ha(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), tr(l, t, r, n);
  }
  var d;
  return e instanceof Fu ? r ? (e.inject(r, n), e.getName(n)) : e : ma(e) ? function p(f, h) {
    var T, w, k = [];
    for (var E in f) f.hasOwnProperty(E) && !Ji(f[E]) && (Array.isArray(f[E]) && f[E].isCss || Cr(f[E]) ? k.push(Qi(E) + ":", f[E], ";") : ma(f[E]) ? k.push.apply(k, p(f[E], E)) : k.push(Qi(E) + ": " + (T = E, (w = f[E]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || T in ru || T.startsWith("--") ? String(w).trim() : w + "px") + ";"));
    return h ? [h + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var eo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Cr(e) || ma(e) ? eo(tr(Xi(bn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : eo(tr(Xi(e, r)));
}
var to = /invalid hook call/i, Zr = /* @__PURE__ */ new Set(), qu = function(e, t) {
  if (ye.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (to.test(i)) a = !1, Zr.delete(r);
        else {
          for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) s[l - 1] = arguments[l];
          n.apply(void 0, [i].concat(s));
        }
      }, Cs(), a && !Zr.has(r) && (console.warn(r), Zr.add(r));
    } catch (i) {
      to.test(i.message) && Zr.delete(r);
    } finally {
      console.error = n;
    }
  }
}, Vu = function(e, t, r) {
  return r === void 0 && (r = Nt), e.theme !== r.theme && e.theme || t || r.theme;
}, Yu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Gu = /(^-|-$)/g;
function Kn(e) {
  return e.replace(Yu, "-").replace(Gu, "");
}
var Xu = function(e) {
  return ga(Qo(e) >>> 0);
};
function Kr(e) {
  return typeof e == "string" && (ye.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ya = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Zu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ku(e, t, r) {
  var n = e[r];
  ya(t) && ya(n) ? ts(n, t) : e[r] = t;
}
function ts(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var o = i[a];
    if (ya(o)) for (var s in o) Zu(s) && Ku(e, o[s], s);
  }
  return e;
}
var rs = Rt.createContext();
rs.Consumer;
var Qn = {};
function ns(e, t, r) {
  var n = Ba(e), a = !Kr(e), i = t.attrs, o = i === void 0 ? bn : i, s = t.componentId, l = s === void 0 ? function(x, D) {
    var L = typeof x != "string" ? "sc" : Kn(x);
    Qn[L] = (Qn[L] || 0) + 1;
    var S = L + "-" + Xu("5.3.11" + L + Qn[L]);
    return D ? D + "-" + S : S;
  }(t.displayName, t.parentComponentId) : s, d = t.displayName, p = d === void 0 ? function(x) {
    return Kr(x) ? "styled." + x : "Styled(" + ha(x) + ")";
  }(e) : d, f = t.displayName && t.componentId ? Kn(t.displayName) + "-" + t.componentId : t.componentId || l, h = n && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, T = t.shouldForwardProp;
  n && e.shouldForwardProp && (T = t.shouldForwardProp ? function(x, D, L) {
    return e.shouldForwardProp(x, D, L) && t.shouldForwardProp(x, D, L);
  } : e.shouldForwardProp);
  var w, k = new Lu(r, f, n ? e.componentStyle : void 0), E = k.isStatic && o.length === 0, _ = function(x, D) {
    return function(L, S, R, O) {
      var W = L.attrs, de = L.componentStyle, we = L.defaultProps, ae = L.foldedComponentIds, ee = L.shouldForwardProp, re = L.styledComponentId, X = L.target, he = function(P, g, I) {
        P === void 0 && (P = Nt);
        var C = vt({}, g, { theme: P }), ie = {};
        return I.forEach(function(te) {
          var Y, Z, ne, fe = te;
          for (Y in Cr(fe) && (fe = fe(C)), fe) C[Y] = ie[Y] = Y === "className" ? (Z = ie[Y], ne = fe[Y], Z && ne ? Z + " " + ne : Z || ne) : fe[Y];
        }), [C, ie];
      }(Vu(S, ir(rs), we) || Nt, S, W), De = he[0], pe = he[1], ke = function(P, g, I, C) {
        var ie = ju(), te = $u(), Y = g ? P.generateAndInjectStyles(Nt, ie, te) : P.generateAndInjectStyles(I, ie, te);
        return ye.env.NODE_ENV !== "production" && !g && C && C(Y), Y;
      }(de, O, De, ye.env.NODE_ENV !== "production" ? L.warnTooManyClasses : void 0), qe = R, Q = pe.$as || S.$as || pe.as || S.as || X, q = Kr(Q), N = pe !== S ? vt({}, S, {}, pe) : S, A = {};
      for (var y in N) y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? A.as = N[y] : (ee ? ee(y, qi, Q) : !q || qi(y)) && (A[y] = N[y]));
      return S.style && pe.style !== S.style && (A.style = vt({}, S.style, {}, pe.style)), A.className = Array.prototype.concat(ae, re, ke !== re ? ke : null, S.className, pe.className).filter(Boolean).join(" "), A.ref = qe, Rs(Q, A);
    }(w, x, D, E);
  };
  return _.displayName = p, (w = Rt.forwardRef(_)).attrs = h, w.componentStyle = k, w.displayName = p, w.shouldForwardProp = T, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : bn, w.styledComponentId = f, w.target = n ? e.target : e, w.withComponent = function(x) {
    var D = t.componentId, L = function(R, O) {
      if (R == null) return {};
      var W, de, we = {}, ae = Object.keys(R);
      for (de = 0; de < ae.length; de++) W = ae[de], O.indexOf(W) >= 0 || (we[W] = R[W]);
      return we;
    }(t, ["componentId"]), S = D && D + "-" + (Kr(x) ? x : Kn(ha(x)));
    return ns(x, vt({}, L, { attrs: h, componentId: S }), r);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? ts({}, e.defaultProps, x) : x;
  } }), ye.env.NODE_ENV !== "production" && (qu(p, f), w.warnTooManyClasses = /* @__PURE__ */ function(x, D) {
    var L = {}, S = !1;
    return function(R) {
      if (!S && (L[R] = !0, Object.keys(L).length >= 200)) {
        var O = D ? ' with the id of "' + D + '"' : "";
        console.warn("Over 200 classes were generated for component " + x + O + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, L = {};
      }
    };
  }(p, f)), Object.defineProperty(w, "toString", { value: function() {
    return "." + w.styledComponentId;
  } }), a && pu(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var rr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Nt), !za.isValidElementType(n)) return sr(1, String(n));
    var i = function() {
      return r(n, a, Wu.apply(void 0, arguments));
    };
    return i.withConfig = function(o) {
      return t(r, n, vt({}, a, {}, o));
    }, i.attrs = function(o) {
      return t(r, n, vt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
    }, i;
  }(ns, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  rr[e] = rr(e);
});
ye.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), ye.env.NODE_ENV !== "production" && ye.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Qu = rr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ju = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), ed = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ju(e) ? `mailto:${e}` : e, td = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, _t = ({
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
  cardLink: E
}) => /* @__PURE__ */ M.jsx(
  qa,
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
    cardLink: E
  }
);
_t.propTypes = {
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
_t.defaultProps = {
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
const qa = ({
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
  cardLink: E
}) => {
  const _ = Nr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: /* @__PURE__ */ M.jsxs(Qu, { className: _, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ M.jsx(
      Yo,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: E,
        title: i
      }
    ),
    !n && o && /* @__PURE__ */ M.jsx(
      "i",
      {
        className: `${o == null ? void 0 : o[0]} fa-${o == null ? void 0 : o[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ M.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ M.jsx(
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
        cardLink: E
      }
    ) }) : /* @__PURE__ */ M.jsx(
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
        cardLink: E
      }
    )
  ] }) });
};
qa.propTypes = {
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
qa.defaultProps = {
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
}) => /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
  !!i && /* @__PURE__ */ M.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ M.jsx("h3", { className: "card-title", children: p ? /* @__PURE__ */ M.jsx("a", { href: p, children: i }) : i }) }),
  !!t && /* @__PURE__ */ M.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Kt(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ M.jsx(
    Va,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  o && /* @__PURE__ */ M.jsx("div", { className: "card-buttons", children: o.map((f) => /* @__PURE__ */ M.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ M.jsx(
        $a,
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
  l && s && /* @__PURE__ */ M.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ M.jsx(
    "a",
    {
      href: ed(l),
      onClick: () => Jt({
        ...td,
        section: i,
        text: s
      }),
      children: s
    }
  ) }),
  d && /* @__PURE__ */ M.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((f) => (
    // @ts-ignore
    /* @__PURE__ */ M.jsx(
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
const Va = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ M.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Kt(t) })
  ] }),
  r && /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ M.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Kt(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
  t && /* @__PURE__ */ M.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ M.jsx("div", { dangerouslySetInnerHTML: Kt(t) })
  ] }) }),
  r && /* @__PURE__ */ M.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ M.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ M.jsx("div", { children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ M.jsx("span", { children: /* @__PURE__ */ M.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Kt(r)
      }
    ) })
  ] }) })
] });
Va.propTypes = {
  eventFormat: m.oneOf(["stack", "inline"]),
  eventLocation: m.string,
  eventTime: m.string
};
Va.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
const rd = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, as = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M.jsx(
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
as.propTypes = {
  children: m.oneOfType([
    m.element,
    m.arrayOf(m.element)
  ]).isRequired
};
const is = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ M.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`,
          onClick: () => Jt({ ...rd })
        },
        `bullet-${r}`
      )
    );
  return /* @__PURE__ */ M.jsx(as, { children: t });
};
is.propTypes = {
  buttonCount: m.number.isRequired
};
m.arrayOf(m.string).isRequired, m.func;
const os = ({ onClick: e = () => null }) => /* @__PURE__ */ M.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ M.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
os.propTypes = {
  onClick: m.func
};
const ss = ({ onClick: e = () => null }) => /* @__PURE__ */ M.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ M.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
ss.propTypes = {
  onClick: m.func
};
const ro = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, ls = ({ children: e = null }) => /* @__PURE__ */ M.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
ls.propTypes = {
  children: m.arrayOf(m.element)
};
const cs = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ M.jsxs(ls, { children: [
  /* @__PURE__ */ M.jsx(
    ss,
    {
      onClick: () => {
        e(), Jt({ ...ro, text: "left chevron" });
      }
    }
  ),
  t,
  /* @__PURE__ */ M.jsx(
    os,
    {
      onClick: () => {
        e(), Jt({ ...ro, text: "right chevron" });
      }
    }
  )
] });
cs.propTypes = {
  children: m.element,
  onClick: m.func
};
const us = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ M.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ M.jsx("ul", { className: "glide__slides", children: t });
};
us.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: m.arrayOf(m.object)
};
function no(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? no(Object(r), !0).forEach(function(n) {
      ad(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function(n) {
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
function _n(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function On(e, t, r) {
  return t && nd(e.prototype, t), e;
}
function ad(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function id(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && ba(e, t);
}
function nr(e) {
  return nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nr(e);
}
function ba(e, t) {
  return ba = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, ba(e, t);
}
function od() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ld(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sd(e);
}
function cd(e) {
  var t = od();
  return function() {
    var n = nr(e), a;
    if (t) {
      var i = nr(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return ld(this, a);
  };
}
function ud(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = nr(e), e !== null); )
    ;
  return e;
}
function ln() {
  return typeof Reflect < "u" && Reflect.get ? ln = Reflect.get : ln = function(t, r, n) {
    var a = ud(t, r);
    if (a) {
      var i = Object.getOwnPropertyDescriptor(a, r);
      return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
    }
  }, ln.apply(this, arguments);
}
var dd = {
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
function fd(e) {
  return parseFloat(e);
}
function wa(e) {
  return typeof e == "string";
}
function ar(e) {
  var t = sn(e);
  return t === "function" || t === "object" && !!e;
}
function Sn(e) {
  return typeof e == "function";
}
function ds(e) {
  return typeof e > "u";
}
function ka(e) {
  return e.constructor === Array;
}
function pd(e, t, r) {
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
function md(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Sa(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(a) {
      t.classes.hasOwnProperty(a) && (r.classes[a] = ao(ao({}, e.classes[a]), t.classes[a]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var hd = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _n(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return On(e, [{
    key: "on",
    value: function(r, n) {
      if (ka(r)) {
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
      if (ka(r)) {
        for (var a = 0; a < r.length; a++)
          this.emit(r[a], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(i) {
        i(n || {});
      });
    }
  }]), e;
}(), gd = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _n(this, e), this._c = {}, this._t = [], this._e = new hd(), this.disabled = !1, this.selector = t, this.settings = Sa(dd, r), this.index = this.settings.startAt;
  }
  return On(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), ar(r) ? this._c = pd(this, r, this._e) : bt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return ka(r) ? this._t = r : bt("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Sa(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
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
function vd(e, t, r) {
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
function io() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Nn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, a, i, o, s = 0, l = function() {
    s = r.leading === !1 ? 0 : io(), n = null, o = e.apply(a, i), n || (a = i = null);
  }, d = function() {
    var f = io();
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
function yd(e, t, r) {
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
  }), r.on(["build.after", "update"], Nn(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function fs(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Ea(e) {
  return Array.prototype.slice.call(e);
}
var bd = '[data-glide-el="track"]';
function wd(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(bd), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Ea(this.wrapper.children).filter(function(i) {
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
      wa(i) && (i = document.querySelector(i)), i !== null ? n._r = i : bt("Root element must be a existing Html node");
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
function kd(e, t, r) {
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
function Sd(e, t, r) {
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
      n._o = ds(i) ? 0 : We(i);
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
function Ed(e, t, r) {
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
function Td(e, t, r) {
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
      o && (o.classList.add(i.slide.active), fs(o).forEach(function(s) {
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
function xd(e, t, r) {
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
          for (var E = 0; E < T.length; E++) {
            var _ = T[E].cloneNode(!0);
            _.classList.add(d.slide.clone), i.push(_);
          }
          for (var x = 0; x < w.length; x++) {
            var D = w[x].cloneNode(!0);
            D.classList.add(d.slide.clone), i.unshift(D);
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
var Lt = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _n(this, e), this.listeners = t;
  }
  return On(e, [{
    key: "on",
    value: function(r, n, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      wa(r) && (r = [r]);
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
      wa(r) && (r = [r]);
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
function Ad(e, t, r) {
  var n = new Lt(), a = {
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
      n.on("resize", window, Nn(function() {
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
var _d = ["ltr", "rtl"], Od = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Nd(e, t, r) {
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
      return this.is("rtl") ? i.split(o).join(Od[o]) : i;
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
      _d.indexOf(i) > -1 ? n._v = i : bt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Cd(e, t) {
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
function Rd(e, t) {
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
function Ld(e, t) {
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
function Pd(e, t) {
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
function Id(e, t) {
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
function Md(e, t, r) {
  var n = [Rd, Ld, Pd, Id].concat(e._t, [Cd]);
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
function Dd(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(i) {
      var o = Md(e, t).mutate(i), s = "translate3d(".concat(-1 * o, "px, 0px, 0px)");
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
function jd(e, t, r) {
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
var ps = !1;
try {
  var oo = Object.defineProperty({}, "passive", {
    get: function() {
      ps = !0;
    }
  });
  window.addEventListener("testPassive", null, oo), window.removeEventListener("testPassive", null, oo);
} catch {
}
var Ta = ps, Jr = ["touchstart", "mousedown"], so = ["touchmove", "mousemove"], lo = ["touchend", "touchcancel", "mouseup", "mouseleave"], co = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function $d(e, t, r) {
  var n = new Lt(), a = 0, i = 0, o = 0, s = !1, l = Ta ? {
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
        var h = e.settings, T = h.touchAngle, w = h.touchRatio, k = h.classes, E = this.touches(f), _ = We(E.pageX) - i, x = We(E.pageY) - o, D = Math.abs(_ << 2), L = Math.abs(x << 2), S = Math.sqrt(D + L), R = Math.sqrt(L);
        if (a = Math.asin(R / S), a * 180 / Math.PI < T)
          f.stopPropagation(), t.Move.make(_ * fd(w)), t.Html.root.classList.add(k.dragging), r.emit("swipe.move");
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
        var h = e.settings, T = h.perSwipe, w = h.touchAngle, k = h.classes, E = this.touches(f), _ = this.threshold(f), x = E.pageX - i, D = a * 180 / Math.PI;
        this.enable(), x > _ && D < w ? t.Run.make(t.Direction.resolve("".concat(T, "<"))) : x < -_ && D < w ? t.Run.make(t.Direction.resolve("".concat(T, ">"))) : t.Move.make(), t.Html.root.classList.remove(k.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
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
      n.on(so, t.Html.wrapper, Nn(function(h) {
        f.move(h);
      }, e.settings.throttle), l);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(so, t.Html.wrapper, l);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var f = this;
      n.on(lo, t.Html.wrapper, function(h) {
        f.end(h);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(lo, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(f) {
      return co.indexOf(f.type) > -1 ? f : f.touches[0] || f.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(f) {
      var h = e.settings;
      return co.indexOf(f.type) > -1 ? h.dragThreshold : h.swipeThreshold;
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
function Fd(e, t, r) {
  var n = new Lt(), a = {
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
function zd(e, t, r) {
  var n = new Lt(), a = !1, i = !1, o = {
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
var Hd = '[data-glide-el="controls[nav]"]', Ya = '[data-glide-el^="controls"]', Ud = "".concat(Ya, ' [data-glide-dir*="<"]'), Bd = "".concat(Ya, ' [data-glide-dir*=">"]');
function Wd(e, t, r) {
  var n = new Lt(), a = Ta ? {
    passive: !0
  } : !1, i = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(Hd), this._c = t.Html.root.querySelectorAll(Ya), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(Ud),
        next: t.Html.root.querySelectorAll(Bd)
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
      d && (d.classList.add(l.classes.nav.active), fs(d).forEach(function(p) {
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
        Ea(f).forEach(function(h) {
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
        Ea(f).forEach(function(h) {
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
      !Ta && s.type === "touchstart" && s.preventDefault();
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
function qd(e, t, r) {
  var n = new Lt(), a = {
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
function Vd(e, t, r) {
  var n = new Lt(), a = {
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
      this._e && (this.enable(), e.settings.autoplay && ds(this._i) && (this._i = setInterval(function() {
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
function uo(e) {
  return ar(e) ? md(e) : (bt("Breakpoints option must be an object"), {});
}
function Yd(e, t, r) {
  var n = new Lt(), a = e.settings, i = uo(a.breakpoints), o = Object.assign({}, a), s = {
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
  return Object.assign(a, s.match(i)), n.on("resize", window, Nn(function() {
    e.settings = Sa(a, s.match(i));
  }, e.settings.throttle)), r.on("update", function() {
    i = uo(i), o = Object.assign({}, a);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), s;
}
var Gd = {
  // Required
  Html: wd,
  Translate: Dd,
  Transition: jd,
  Direction: Nd,
  Peek: kd,
  Sizes: Ed,
  Gaps: yd,
  Move: Sd,
  Clones: xd,
  Resize: Ad,
  Build: Td,
  Run: vd,
  // Optional
  Swipe: $d,
  Images: Fd,
  Anchors: zd,
  Controls: Wd,
  Keyboard: qd,
  Autoplay: Vd,
  Breakpoints: Yd
}, Xd = /* @__PURE__ */ function(e) {
  id(r, e);
  var t = cd(r);
  function r() {
    return _n(this, r), t.apply(this, arguments);
  }
  return On(r, [{
    key: "mount",
    value: function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return ln(nr(r.prototype), "mount", this).call(this, Object.assign({}, Gd, a));
    }
  }]), r;
}(gd);
function Zd(e) {
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
function Kd(e = 1, t, r = !0, n) {
  const { perViewSm: a, perViewMd: i, perViewLg: o } = Zd(e), s = r ? 24 : 0, l = r ? { before: 48, after: 48 } : 0, d = r ? { before: 124, after: 124 } : 0;
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
function Qd(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), a = e.querySelector(".glide__arrow--next"), i = e.querySelector(".glide__track"), o = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || a)) return;
  const s = ["slider-start", "slider-mid", "slider-end"], l = "glide__arrow--disabled";
  i == null || i.classList.remove(...s), o == null || o.classList.remove(...s), t === 0 ? (i == null || i.classList.add("slider-start"), o == null || o.classList.add("slider-start"), n.classList.add(l), a.classList.remove(l)) : t >= r - 1 ? (i == null || i.classList.add("slider-end"), o == null || o.classList.add("slider-end"), n.classList.remove(l), a.classList.add(l)) : (i == null || i.classList.add("slider-mid"), o == null || o.classList.add("slider-mid"), n.classList.remove(l), a.classList.remove(l));
}
function Jd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), a = t, i = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((o, s) => {
    s < a || s > i ? (o.setAttribute("aria-hidden", "true"), o.setAttribute("tabindex", "-1"), o.setAttribute("inert", "")) : (o.setAttribute("aria-hidden", "false"), o.removeAttribute("tabindex"), o.removeAttribute("inert"));
  });
}
function ef({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: a,
  hasPeek: i = !0,
  isDraggable: o
}) {
  const s = Kd(t, n, i, o), l = new Xd(`#${e}`, s);
  let d = document.querySelector(`#${e}`);
  return d.addEventListener("keyup", (p) => {
    const f = p;
    f.keyCode === 39 ? l.go(">") : f.keyCode === 37 ? l.go("<") : f.keyCode === 13 && l.go(document.activeElement.dataset.glideDir);
  }), l.on("build.before", () => {
    d = document.querySelector(`#${e}`), d && d.classList.add("slider-start");
  }), l.on("move", () => {
    if (d = document.querySelector(`#${e}`), !d) return;
    const p = l.index;
    Jd(d, p, t);
    const f = d.querySelector(".navigation-slider"), h = d.querySelector(".image-navigator-images");
    if (f && h) {
      const T = f.querySelectorAll(
        ".bullet-image-container"
      ), w = f.clientWidth, k = 82, E = T[p], _ = h.getBoundingClientRect().x, x = f.getBoundingClientRect().x - _, D = E.getBoundingClientRect().x - _, L = E.getBoundingClientRect().x + E.getBoundingClientRect().width - _;
      if (p === 0 || D <= 0 + k)
        f.style.left = `${x - D + k}px`;
      else if (L >= w - k) {
        const S = L - w;
        f.style.left = `${x - S - k}px`;
      }
    }
    Qd(d, p, r), d.setAttribute("data-current-index", p), a && a(p);
  }), l.mount(), l;
}
function tf(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const ms = ({
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
  hasShadow: E = !0
}) => {
  const _ = `glide-${Math.ceil(Math.random() * 1e4)}`, x = tf(n.length, e);
  return En(() => {
    ef({
      instanceName: _,
      perView: e,
      buttonCount: x,
      isFullWidth: l,
      onItemClick: T,
      hasPeek: w,
      isDraggable: k
    });
  }, [
    _,
    e,
    x,
    l,
    T,
    w,
    k
  ]), /* @__PURE__ */ M.jsxs(
    "div",
    {
      role: o,
      "aria-labelledby": s,
      className: `glide ${a}`,
      id: _,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": d,
      "data-image-auto-size": h,
      "data-has-shadow": E,
      children: [
        /* @__PURE__ */ M.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ M.jsx(us, { carouselItems: n }) }),
        i ? (
          // @ts-ignore
          /* @__PURE__ */ M.jsx(i, { instanceName: _ })
        ) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          f && /* @__PURE__ */ M.jsx(is, { buttonCount: x }),
          p && /* @__PURE__ */ M.jsx(cs, {})
        ] })
      ]
    }
  );
};
ms.propTypes = {
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
const rf = ({
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
    item: /* @__PURE__ */ M.jsx(
      _t,
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
}, hs = ({
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
    (f) => rf(f, r, a, n)
  ), p = t.length > l;
  return /* @__PURE__ */ M.jsx(
    ms,
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
hs.propTypes = {
  perView: m.string.isRequired,
  cardItems: m.arrayOf(
    m.shape({
      title: m.string.isRequired,
      content: m.string,
      eventLocation: m.string,
      eventTime: m.string,
      image: m.string,
      imageAltText: m.string,
      buttons: _t.propTypes.buttons,
      linkLabel: m.string,
      linkUrl: m.string,
      tags: _t.propTypes.tags
    })
  ).isRequired,
  cardType: _t.propTypes.type,
  cardEventFormat: _t.propTypes.eventFormat,
  cardHorizontal: _t.propTypes.horizontal,
  width: m.string,
  maxWidth: m.string,
  imageAutoSize: m.bool
};
const gs = m.shape({
  color: m.oneOf(["white", "dark"]),
  text: m.string
}), vs = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  text: m.string
}), ys = m.shape({
  color: m.oneOf(["gold", "maroon", "gray", "dark"]),
  text: m.string,
  size: m.string
}), bs = m.shape({
  url: m.string,
  filters: m.string
});
m.shape({
  header: gs,
  ctaButton: vs,
  dataSource: bs,
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
}, fo = ["newsUnits", "interests", "audiences", "eventTypes"], nf = (e, t = "") => {
  if (!t) return !0;
  const r = t.split(",");
  for (let n = 0; n < fo.length; n += 1) {
    const a = fo[n];
    for (let i = 0; i < r.length; i += 1) {
      const o = r[i], l = (e[a] || "").match(new RegExp(o, "gi"));
      if ((l == null ? void 0 : l.length) > 0) return !0;
    }
  }
  return !1;
}, po = (e, t) => {
  let r = e;
  return r.length > t && (r = r.substr(0, r.lastIndexOf(" ", t)), r += "..."), r;
}, af = ({ node: e }, t) => ({
  index: t,
  id: e.nid,
  imageUrl: e.image_url,
  imageAltText: e.image_url,
  title: po(e.title, 80),
  content: po(e == null ? void 0 : e.clas_teaser, 140),
  buttonLink: e.path,
  interests: e.interests,
  newsUnits: e.news_units,
  eventTypes: e.event_types,
  alias: e.path
  // Used for card link in title, matches component-events data transformer
}), Bt = ({
  children: e,
  header: t,
  ctaButton: r,
  dataSource: n,
  maxItems: a
}) => {
  var s;
  const i = (s = n.filters) == null ? void 0 : s.replace(/_/g, " "), o = { ...n, filters: i };
  return /* @__PURE__ */ M.jsx(
    gc,
    {
      renderHeader: t && r ? /* @__PURE__ */ M.jsx(
        vc,
        {
          header: t,
          ctaButton: r,
          defaultProps: Rr
        }
      ) : null,
      renderBody: /* @__PURE__ */ M.jsx(hc, { children: e }),
      dataTransformer: af,
      dataFilter: nf,
      dataSource: o,
      defaultProps: Rr,
      noFeedText: "No news to show.",
      maxItems: a
    }
  );
};
Bt.propTypes = {
  header: gs,
  ctaButton: vs,
  dataSource: bs,
  maxItems: m.number,
  children: m.element
};
const of = rr.section``, sf = (e, t, r) => ({
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
}), lf = ({ cardButton: e }) => {
  const { feeds: t } = ir(Da), r = t == null ? void 0 : t.map(
    (n, a) => sf(n, a, e)
  );
  return /* @__PURE__ */ M.jsx(of, { children: /* @__PURE__ */ M.jsx(
    hs,
    {
      width: "auto",
      cardType: "story",
      perView: "3",
      cardItems: r || []
    }
  ) });
}, ws = ({ cardButton: e, ...t }) => (En(() => {
  typeof window < "u" && ja({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: e,
      props: t
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ M.jsx(Bt, { ...t, children: /* @__PURE__ */ M.jsx(
  lf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
ws.propTypes = Bt.propTypes;
const ks = (e = "") => (e == null ? void 0 : e.length) === 0 ? [] : e.split("|").map((r) => ({
  label: r
})).filter((r) => r), cf = rr.section`
  .c-card {
    height: 100%;
  }
`, uf = (e, t) => /* @__PURE__ */ M.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ M.jsx(
      Ho,
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
        tags: ks(e == null ? void 0 : e.interests)
      }
    )
  },
  e.id
), df = ({ cardButton: e }) => {
  const { feeds: t } = ir(Da);
  return /* @__PURE__ */ M.jsx(cf, { className: "row row-spaced", "data-testid": "grid-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ M.jsx(Rt.Fragment, { children: uf(r, e) }, n)
  )) });
}, Ss = ({ cardButton: e, ...t }) => (En(() => {
  typeof window < "u" && ja({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ M.jsx(Bt, { ...t, children: /* @__PURE__ */ M.jsx(
  df,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
Ss.propTypes = {
  ...Bt.propTypes,
  cardButton: ys
};
const ff = rr.section``, pf = (e, t) => /* @__PURE__ */ M.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ M.jsx(
  Ho,
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
    tags: ks(e == null ? void 0 : e.interests)
  }
) }, e.id), mf = ({ cardButton: e }) => {
  const { feeds: t } = ir(Da);
  return /* @__PURE__ */ M.jsx(ff, { className: "row-spaced", "data-testid": "list-view-container", children: t == null ? void 0 : t.map((r, n) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ M.jsx(Rt.Fragment, { children: pf(r, e) }, n)
  )) });
}, Es = ({ cardButton: e, ...t }) => (En(() => {
  typeof window < "u" && ja({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: e,
      ...t
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ M.jsx(Bt, { ...t, children: /* @__PURE__ */ M.jsx(
  mf,
  {
    cardButton: { ...Rr.cardButton, ...e }
  }
) }));
Es.propTypes = { ...Bt.propTypes, feedCardButtonShape: ys };
var Ts, mo = Ps;
Ts = mo.createRoot, mo.hydrateRoot;
const Ga = (e, t, r) => {
  Ts(r).render(Rt.createElement(e, t));
}, yf = ({ targetSelector: e, props: t }) => {
  Ga(Ss, t, document.querySelector(e));
}, bf = ({ targetSelector: e, props: t }) => {
  Ga(Es, t, document.querySelector(e));
}, wf = ({ targetSelector: e, props: t }) => {
  Ga(ws, t, document.querySelector(e));
};
export {
  ws as CardCarouselNews,
  Ss as CardGridNews,
  Es as CardListlNews,
  wf as initCardCarouselNewsComponent,
  yf as initCardGridNewsComponent,
  bf as initCardListNewsComponent
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
