import he, { Component as xn, forwardRef as On, useRef as Cn, useContext as rr, createElement as kn } from "react";
function nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jr = { exports: {} }, Ke = {};
var Tr;
function Nn() {
  if (Tr) return Ke;
  Tr = 1;
  var e = he, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, f, u) {
    var v, w = {}, C = null, I = null;
    u !== void 0 && (C = "" + u), f.key !== void 0 && (C = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (v in f) n.call(f, v) && !o.hasOwnProperty(v) && (w[v] = f[v]);
    if (c && c.defaultProps) for (v in f = c.defaultProps, f) w[v] === void 0 && (w[v] = f[v]);
    return { $$typeof: r, type: c, key: C, ref: I, props: w, _owner: a.current };
  }
  return Ke.Fragment = t, Ke.jsx = s, Ke.jsxs = s, Ke;
}
Jr.exports = Nn();
var y = Jr.exports, en = { exports: {} };
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function t() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        c && (o = a(o, n(c)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return t.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var c in o)
        r.call(o, c) && o[c] && (s = a(s, c));
      return s;
    }
    function a(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(en);
var Rn = en.exports;
const We = /* @__PURE__ */ nr(Rn);
var tn = { exports: {} }, kt = { exports: {} }, U = {};
var Er;
function Pn() {
  if (Er) return U;
  Er = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, L = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function D(d) {
    if (typeof d == "object" && d !== null) {
      var G = d.$$typeof;
      switch (G) {
        case r:
          switch (d = d.type, d) {
            case f:
            case u:
            case n:
            case o:
            case a:
            case w:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case v:
                case E:
                case I:
                case s:
                  return d;
                default:
                  return G;
              }
          }
        case t:
          return G;
      }
    }
  }
  function R(d) {
    return D(d) === u;
  }
  return U.AsyncMode = f, U.ConcurrentMode = u, U.ContextConsumer = c, U.ContextProvider = s, U.Element = r, U.ForwardRef = v, U.Fragment = n, U.Lazy = E, U.Memo = I, U.Portal = t, U.Profiler = o, U.StrictMode = a, U.Suspense = w, U.isAsyncMode = function(d) {
    return R(d) || D(d) === f;
  }, U.isConcurrentMode = R, U.isContextConsumer = function(d) {
    return D(d) === c;
  }, U.isContextProvider = function(d) {
    return D(d) === s;
  }, U.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, U.isForwardRef = function(d) {
    return D(d) === v;
  }, U.isFragment = function(d) {
    return D(d) === n;
  }, U.isLazy = function(d) {
    return D(d) === E;
  }, U.isMemo = function(d) {
    return D(d) === I;
  }, U.isPortal = function(d) {
    return D(d) === t;
  }, U.isProfiler = function(d) {
    return D(d) === o;
  }, U.isStrictMode = function(d) {
    return D(d) === a;
  }, U.isSuspense = function(d) {
    return D(d) === w;
  }, U.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === u || d === o || d === a || d === w || d === C || typeof d == "object" && d !== null && (d.$$typeof === E || d.$$typeof === I || d.$$typeof === s || d.$$typeof === c || d.$$typeof === v || d.$$typeof === O || d.$$typeof === $ || d.$$typeof === N || d.$$typeof === L);
  }, U.typeOf = D, U;
}
var xr;
function rn() {
  return xr || (xr = 1, kt.exports = Pn()), kt.exports;
}
var Nt, Or;
function In() {
  if (Or) return Nt;
  Or = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nt = e, Nt;
}
var Rt, Cr;
function Ln() {
  if (Cr) return Rt;
  Cr = 1;
  var e = In();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Rt = function() {
    function n(s, c, f, u, v, w) {
      if (w !== e) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
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
      checkPropTypes: t,
      resetWarningCache: r
    };
    return o.PropTypes = o, o;
  }, Rt;
}
tn.exports = Ln()();
var Dn = tn.exports;
const h = /* @__PURE__ */ nr(Dn);
var Ht = function() {
  return Ht = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ht.apply(this, arguments);
}, jn = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]]);
  return t;
};
function wt(e) {
  var r = function(t) {
    var n = t.bgStyle, a = t.borderRadius, o = t.iconFillColor, s = t.round, c = t.size, f = jn(t, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return he.createElement(
      "svg",
      Ht({ viewBox: "0 0 64 64", width: c, height: c }, f),
      s ? he.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : he.createElement("rect", { width: "64", height: "64", rx: a, ry: a, fill: e.color, style: n }),
      he.createElement("path", { d: e.path, fill: o })
    );
  };
  return r.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, r;
}
var Mn = wt({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function _t(e) {
  var r = Object.entries(e).filter(function(t) {
    var n = t[1];
    return n != null;
  }).map(function(t) {
    var n = t[0], a = t[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return r.length > 0 ? "?".concat(r.join("&")) : "";
}
var Fn = /* @__PURE__ */ function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Pe = function() {
  return Pe = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Pe.apply(this, arguments);
}, zn = function(e, r, t, n) {
  function a(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function c(v) {
      try {
        u(n.next(v));
      } catch (w) {
        s(w);
      }
    }
    function f(v) {
      try {
        u(n.throw(v));
      } catch (w) {
        s(w);
      }
    }
    function u(v) {
      v.done ? o(v.value) : a(v.value).then(c, f);
    }
    u((n = n.apply(e, r || [])).next());
  });
}, $n = function(e, r) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, s;
  return s = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(u) {
    return function(v) {
      return f([u, v]);
    };
  }
  function f(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, a && (o = u[0] & 2 ? a.return : u[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, u[1])).done) return o;
      switch (a = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
        case 0:
        case 1:
          o = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < o[1]) {
            t.label = o[1], o = u;
            break;
          }
          if (o && t.label < o[2]) {
            t.label = o[2], t.ops.push(u);
            break;
          }
          o[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = r.call(e, t);
    } catch (v) {
      u = [6, v], a = 0;
    } finally {
      n = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, nn = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]]);
  return t;
}, Hn = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Bn = function(e, r) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - r / 2
  };
}, Un = function(e, r) {
  return {
    top: (window.screen.height - r) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Wn(e, r, t) {
  var n = r.height, a = r.width, o = nn(r, ["height", "width"]), s = Pe({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, o), c = window.open(e, "", Object.keys(s).map(function(u) {
    return "".concat(u, "=").concat(s[u]);
  }).join(", "));
  if (t)
    var f = window.setInterval(function() {
      try {
        (c === null || c.closed) && (window.clearInterval(f), t(c));
      } catch (u) {
        console.error(u);
      }
    }, 1e3);
  return c;
}
var Gn = (
  /** @class */
  function(e) {
    Fn(r, e);
    function r() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.openShareDialog = function(n) {
        var a = t.props, o = a.onShareWindowClose, s = a.windowHeight, c = s === void 0 ? 400 : s, f = a.windowPosition, u = f === void 0 ? "windowCenter" : f, v = a.windowWidth, w = v === void 0 ? 550 : v, C = Pe({ height: c, width: w }, u === "windowCenter" ? Bn(w, c) : Un(w, c));
        Wn(n, C, o);
      }, t.handleClick = function(n) {
        return zn(t, void 0, void 0, function() {
          var a, o, s, c, f, u, v, w, C, I;
          return $n(this, function(E) {
            switch (E.label) {
              case 0:
                return a = this.props, o = a.beforeOnClick, s = a.disabled, c = a.networkLink, f = a.onClick, u = a.url, v = a.openShareDialogOnClick, w = a.opts, C = c(u, w), s ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), o ? (I = o(), Hn(I) ? [4, I] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return v && this.openShareDialog(C), f && f(n, C), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, t;
    }
    return r.prototype.render = function() {
      var t = this.props;
      t.beforeOnClick;
      var n = t.children, a = t.className, o = t.disabled, s = t.disabledStyle, c = t.forwardedRef;
      t.networkLink;
      var f = t.networkName;
      t.onShareWindowClose, t.openShareDialogOnClick, t.opts;
      var u = t.resetButtonStyle, v = t.style;
      t.url, t.windowHeight, t.windowPosition, t.windowWidth;
      var w = nn(t, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), C = We("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!o,
        disabled: !!o
      }, a), I = Pe(Pe(u ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, v), o && s);
      return he.createElement("button", Pe({}, w, { "aria-label": w["aria-label"] || f, className: C, onClick: this.handleClick, ref: c, style: I }), n);
    }, r.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, r;
  }(xn)
), mt = function() {
  return mt = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mt.apply(this, arguments);
};
function St(e, r, t, n) {
  function a(o, s) {
    var c = t(o), f = mt({}, o), u = Object.keys(c);
    return u.forEach(function(v) {
      delete f[v];
    }), he.createElement(Gn, mt({}, n, f, { forwardedRef: s, networkName: e, networkLink: r, opts: t(o) }));
  }
  return a.displayName = "ShareButton-".concat(e), On(a);
}
function Vn(e, r) {
  var t = r.subject, n = r.body, a = r.separator;
  return "mailto:" + _t({ subject: t, body: n ? n + a + e : e });
}
var qn = St("email", Vn, function(e) {
  return {
    subject: e.subject,
    body: e.body,
    separator: e.separator || " "
  };
}, {
  openShareDialogOnClick: !1,
  onClick: function(e, r) {
    window.location.href = r;
  }
}), kr = wt({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), Yn = /* @__PURE__ */ function() {
  var e = function(r, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
    }, e(r, t);
  };
  return function(r, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(r, t);
    function n() {
      this.constructor = r;
    }
    r.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Xn = (
  /** @class */
  function(e) {
    Yn(r, e);
    function r(t) {
      var n = e.call(this, t) || this;
      return n.name = "AssertionError", n;
    }
    return r;
  }(Error)
);
function Je(e, r) {
  if (!e)
    throw new Xn(r);
}
function Zn(e, r) {
  var t = r.quote, n = r.hashtag;
  return Je(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + _t({
    u: e,
    quote: t,
    hashtag: n
  });
}
var Nr = St("facebook", Zn, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Rr = wt({
  color: "#007fb1",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function Kn(e, r) {
  var t = r.title, n = r.summary, a = r.source;
  return Je(e, "linkedin.url"), "https://linkedin.com/shareArticle" + _t({ url: e, mini: "true", title: t, summary: n, source: a });
}
var Pr = St("linkedin", Kn, function(e) {
  var r = e.title, t = e.summary, n = e.source;
  return { title: r, summary: t, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
}), Ir = wt({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function Qn(e, r) {
  var t = r.title, n = r.via, a = r.hashtags, o = a === void 0 ? [] : a, s = r.related, c = s === void 0 ? [] : s;
  return Je(e, "twitter.url"), Je(Array.isArray(o), "twitter.hashtags is not an array"), Je(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + _t({
    url: e,
    text: t,
    via: n,
    hashtags: o.length > 0 ? o.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
var Lr = St("twitter", Qn, function(e) {
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
function Bt(e) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bt(e);
}
var Jn;
function Ut() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Jn;
  return r ? e.split(" ").map(function(t) {
    return r[t] || t;
  }).join(" ") : e;
}
var ea = (typeof window > "u" ? "undefined" : Bt(window)) === "object" && window.Element || function() {
};
function ta(e, r, t) {
  if (!(e[r] instanceof ea))
    return new Error("Invalid prop `" + r + "` supplied to `" + t + "`. Expected prop to be an instance of Element. Validation failed.");
}
h.oneOfType([h.string, h.func, ta, h.shape({
  current: h.any
})]);
var Wt = h.oneOfType([h.func, h.string, h.shape({
  $$typeof: h.symbol,
  render: h.func
}), h.arrayOf(h.oneOfType([h.func, h.string, h.shape({
  $$typeof: h.symbol,
  render: h.func
})]))]), ra = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Gt.apply(this, arguments);
}
function na(e, r) {
  if (e == null) return {};
  var t = aa(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function aa(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var oa = {
  /** Aria label */
  "aria-label": h.string,
  /** Pass children so this component can wrap them */
  children: h.node,
  /** Add custom class */
  className: h.string,
  /** Change existing className with a new className */
  cssModule: h.object,
  /** Add custom class to list tag */
  listClassName: h.string,
  /** Set a custom element for list tag */
  listTag: Wt,
  /** Set a custom element for this component */
  tag: Wt
};
function an(e) {
  var r = e.className, t = e.listClassName, n = e.cssModule, a = e.children, o = e.tag, s = o === void 0 ? "nav" : o, c = e.listTag, f = c === void 0 ? "ol" : c, u = e["aria-label"], v = u === void 0 ? "breadcrumb" : u, w = na(e, ra), C = Ut(We(r), n), I = Ut(We("breadcrumb", t), n);
  return /* @__PURE__ */ he.createElement(s, Gt({}, w, {
    className: C,
    "aria-label": v
  }), /* @__PURE__ */ he.createElement(f, {
    className: I
  }, a));
}
an.propTypes = oa;
var ia = ["className", "cssModule", "active", "tag"];
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
function sa(e, r) {
  if (e == null) return {};
  var t = la(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function la(e, r) {
  if (e == null) return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var ca = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: h.bool,
  /** Add custom class to the element */
  className: h.string,
  /** Change existing className with a new className */
  cssModule: h.object,
  /** Set a custom element for this component */
  tag: Wt
};
function qt(e) {
  var r = e.className, t = e.cssModule, n = e.active, a = e.tag, o = a === void 0 ? "li" : a, s = sa(e, ia), c = Ut(We(r, n ? "active" : !1, "breadcrumb-item"), t);
  return /* @__PURE__ */ he.createElement(o, Vt({}, s, {
    className: c,
    "aria-current": n ? "page" : void 0
  }));
}
qt.propTypes = ca;
function je(e) {
  "@babel/helpers - typeof";
  return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, je(e);
}
function Yt(e, r) {
  return Yt = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Yt(e, r);
}
function ua() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function dt(e, r, t) {
  return ua() ? dt = Reflect.construct : dt = function(a, o, s) {
    var c = [null];
    c.push.apply(c, o);
    var f = Function.bind.apply(a, c), u = new f();
    return s && Yt(u, s.prototype), u;
  }, dt.apply(null, arguments);
}
function Ae(e) {
  return fa(e) || da(e) || pa(e) || ha();
}
function fa(e) {
  if (Array.isArray(e)) return Xt(e);
}
function da(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function pa(e, r) {
  if (e) {
    if (typeof e == "string") return Xt(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Xt(e, r);
  }
}
function Xt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ha() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ma = Object.hasOwnProperty, Dr = Object.setPrototypeOf, va = Object.isFrozen, ga = Object.getPrototypeOf, ya = Object.getOwnPropertyDescriptor, le = Object.freeze, we = Object.seal, ba = Object.create, on = typeof Reflect < "u" && Reflect, vt = on.apply, Zt = on.construct;
vt || (vt = function(r, t, n) {
  return r.apply(t, n);
});
le || (le = function(r) {
  return r;
});
we || (we = function(r) {
  return r;
});
Zt || (Zt = function(r, t) {
  return dt(r, Ae(t));
});
var wa = _e(Array.prototype.forEach), jr = _e(Array.prototype.pop), Qe = _e(Array.prototype.push), pt = _e(String.prototype.toLowerCase), Pt = _e(String.prototype.toString), Mr = _e(String.prototype.match), Se = _e(String.prototype.replace), _a = _e(String.prototype.indexOf), Sa = _e(String.prototype.trim), ae = _e(RegExp.prototype.test), It = Aa(TypeError);
function _e(e) {
  return function(r) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      n[a - 1] = arguments[a];
    return vt(e, r, n);
  };
}
function Aa(e) {
  return function() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    return Zt(e, t);
  };
}
function j(e, r, t) {
  var n;
  t = (n = t) !== null && n !== void 0 ? n : pt, Dr && Dr(e, null);
  for (var a = r.length; a--; ) {
    var o = r[a];
    if (typeof o == "string") {
      var s = t(o);
      s !== o && (va(r) || (r[a] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function Be(e) {
  var r = ba(null), t;
  for (t in e)
    vt(ma, e, [t]) === !0 && (r[t] = e[t]);
  return r;
}
function st(e, r) {
  for (; e !== null; ) {
    var t = ya(e, r);
    if (t) {
      if (t.get)
        return _e(t.get);
      if (typeof t.value == "function")
        return _e(t.value);
    }
    e = ga(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var Fr = le(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Lt = le(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Dt = le(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ta = le(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), jt = le(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ea = le(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zr = le(["#text"]), $r = le(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Mt = le(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hr = le(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), lt = le(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xa = we(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Oa = we(/<%[\w\W]*|[\w\W]*%>/gm), Ca = we(/\${[\w\W]*}/gm), ka = we(/^data-[\-\w.\u00B7-\uFFFF]/), Na = we(/^aria-[\-\w]+$/), Ra = we(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pa = we(/^(?:\w+script|data):/i), Ia = we(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), La = we(/^html$/i), Da = we(/^[a-z][.\w]*(-[.\w]+)+$/i), ja = function() {
  return typeof window > "u" ? null : window;
}, Ma = function(r, t) {
  if (je(r) !== "object" || typeof r.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(a) && (n = t.currentScript.getAttribute(a));
  var o = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(o, {
      createHTML: function(c) {
        return c;
      },
      createScriptURL: function(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function sn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ja(), r = function(i) {
    return sn(i);
  };
  if (r.version = "2.5.7", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  var t = e.document, n = e.document, a = e.DocumentFragment, o = e.HTMLTemplateElement, s = e.Node, c = e.Element, f = e.NodeFilter, u = e.NamedNodeMap, v = u === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : u, w = e.HTMLFormElement, C = e.DOMParser, I = e.trustedTypes, E = c.prototype, L = st(E, "cloneNode"), O = st(E, "nextSibling"), $ = st(E, "childNodes"), N = st(E, "parentNode");
  if (typeof o == "function") {
    var D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  var R = Ma(I, t), d = R ? R.createHTML("") : "", G = n, ve = G.implementation, ce = G.createNodeIterator, ge = G.createDocumentFragment, Te = G.getElementsByTagName, Le = t.importNode, oe = {};
  try {
    oe = Be(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var X = {};
  r.isSupported = typeof N == "function" && ve && ve.createHTMLDocument !== void 0 && oe !== 9;
  var ue = xa, te = Oa, xe = Ca, me = ka, fe = Na, Fe = Pa, Oe = Ia, ze = Da, S = Ra, g = null, _ = j({}, [].concat(Ae(Fr), Ae(Lt), Ae(Dt), Ae(jt), Ae(zr))), A = null, l = j({}, [].concat(Ae($r), Ae(Mt), Ae(Hr), Ae(lt))), x = Object.seal(Object.create(null, {
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
  })), m = null, V = null, H = !0, F = !0, P = !1, J = !0, K = !1, M = !0, Y = !1, z = !1, Q = !1, ye = !1, Z = !1, Ce = !1, De = !0, de = !1, k = "user-content-", q = !0, ke = !1, Ee = {}, se = null, cr = j({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), ur = null, fr = j({}, ["audio", "video", "img", "source", "image", "track"]), At = null, dr = j({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), nt = "http://www.w3.org/1998/Math/MathML", at = "http://www.w3.org/2000/svg", Ne = "http://www.w3.org/1999/xhtml", Ge = Ne, Tt = !1, Et = null, bn = j({}, [nt, at, Ne], Pt), $e, wn = ["application/xhtml+xml", "text/html"], _n = "text/html", re, Ve = null, Sn = n.createElement("form"), pr = function(i) {
    return i instanceof RegExp || i instanceof Function;
  }, xt = function(i) {
    Ve && Ve === i || ((!i || je(i) !== "object") && (i = {}), i = Be(i), $e = // eslint-disable-next-line unicorn/prefer-includes
    wn.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? $e = _n : $e = i.PARSER_MEDIA_TYPE, re = $e === "application/xhtml+xml" ? Pt : pt, g = "ALLOWED_TAGS" in i ? j({}, i.ALLOWED_TAGS, re) : _, A = "ALLOWED_ATTR" in i ? j({}, i.ALLOWED_ATTR, re) : l, Et = "ALLOWED_NAMESPACES" in i ? j({}, i.ALLOWED_NAMESPACES, Pt) : bn, At = "ADD_URI_SAFE_ATTR" in i ? j(
      Be(dr),
      // eslint-disable-line indent
      i.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : dr, ur = "ADD_DATA_URI_TAGS" in i ? j(
      Be(fr),
      // eslint-disable-line indent
      i.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      re
      // eslint-disable-line indent
    ) : fr, se = "FORBID_CONTENTS" in i ? j({}, i.FORBID_CONTENTS, re) : cr, m = "FORBID_TAGS" in i ? j({}, i.FORBID_TAGS, re) : {}, V = "FORBID_ATTR" in i ? j({}, i.FORBID_ATTR, re) : {}, Ee = "USE_PROFILES" in i ? i.USE_PROFILES : !1, H = i.ALLOW_ARIA_ATTR !== !1, F = i.ALLOW_DATA_ATTR !== !1, P = i.ALLOW_UNKNOWN_PROTOCOLS || !1, J = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1, K = i.SAFE_FOR_TEMPLATES || !1, M = i.SAFE_FOR_XML !== !1, Y = i.WHOLE_DOCUMENT || !1, ye = i.RETURN_DOM || !1, Z = i.RETURN_DOM_FRAGMENT || !1, Ce = i.RETURN_TRUSTED_TYPE || !1, Q = i.FORCE_BODY || !1, De = i.SANITIZE_DOM !== !1, de = i.SANITIZE_NAMED_PROPS || !1, q = i.KEEP_CONTENT !== !1, ke = i.IN_PLACE || !1, S = i.ALLOWED_URI_REGEXP || S, Ge = i.NAMESPACE || Ne, x = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && pr(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (x.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && pr(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (x.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), K && (F = !1), Z && (ye = !0), Ee && (g = j({}, Ae(zr)), A = [], Ee.html === !0 && (j(g, Fr), j(A, $r)), Ee.svg === !0 && (j(g, Lt), j(A, Mt), j(A, lt)), Ee.svgFilters === !0 && (j(g, Dt), j(A, Mt), j(A, lt)), Ee.mathMl === !0 && (j(g, jt), j(A, Hr), j(A, lt))), i.ADD_TAGS && (g === _ && (g = Be(g)), j(g, i.ADD_TAGS, re)), i.ADD_ATTR && (A === l && (A = Be(A)), j(A, i.ADD_ATTR, re)), i.ADD_URI_SAFE_ATTR && j(At, i.ADD_URI_SAFE_ATTR, re), i.FORBID_CONTENTS && (se === cr && (se = Be(se)), j(se, i.FORBID_CONTENTS, re)), q && (g["#text"] = !0), Y && j(g, ["html", "head", "body"]), g.table && (j(g, ["tbody"]), delete m.tbody), le && le(i), Ve = i);
  }, hr = j({}, ["mi", "mo", "mn", "ms", "mtext"]), mr = j({}, ["annotation-xml"]), An = j({}, ["title", "style", "font", "a", "script"]), ot = j({}, Lt);
  j(ot, Dt), j(ot, Ta);
  var Ot = j({}, jt);
  j(Ot, Ea);
  var Tn = function(i) {
    var p = N(i);
    (!p || !p.tagName) && (p = {
      namespaceURI: Ge,
      tagName: "template"
    });
    var b = pt(i.tagName), B = pt(p.tagName);
    return Et[i.namespaceURI] ? i.namespaceURI === at ? p.namespaceURI === Ne ? b === "svg" : p.namespaceURI === nt ? b === "svg" && (B === "annotation-xml" || hr[B]) : !!ot[b] : i.namespaceURI === nt ? p.namespaceURI === Ne ? b === "math" : p.namespaceURI === at ? b === "math" && mr[B] : !!Ot[b] : i.namespaceURI === Ne ? p.namespaceURI === at && !mr[B] || p.namespaceURI === nt && !hr[B] ? !1 : !Ot[b] && (An[b] || !ot[b]) : !!($e === "application/xhtml+xml" && Et[i.namespaceURI]) : !1;
  }, be = function(i) {
    Qe(r.removed, {
      element: i
    });
    try {
      i.parentNode.removeChild(i);
    } catch {
      try {
        i.outerHTML = d;
      } catch {
        i.remove();
      }
    }
  }, it = function(i, p) {
    try {
      Qe(r.removed, {
        attribute: p.getAttributeNode(i),
        from: p
      });
    } catch {
      Qe(r.removed, {
        attribute: null,
        from: p
      });
    }
    if (p.removeAttribute(i), i === "is" && !A[i])
      if (ye || Z)
        try {
          be(p);
        } catch {
        }
      else
        try {
          p.setAttribute(i, "");
        } catch {
        }
  }, vr = function(i) {
    var p, b;
    if (Q)
      i = "<remove></remove>" + i;
    else {
      var B = Mr(i, /^[\r\n\t ]+/);
      b = B && B[0];
    }
    $e === "application/xhtml+xml" && Ge === Ne && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
    var pe = R ? R.createHTML(i) : i;
    if (Ge === Ne)
      try {
        p = new C().parseFromString(pe, $e);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = ve.createDocument(Ge, "template", null);
      try {
        p.documentElement.innerHTML = Tt ? d : pe;
      } catch {
      }
    }
    var ie = p.body || p.documentElement;
    return i && b && ie.insertBefore(n.createTextNode(b), ie.childNodes[0] || null), Ge === Ne ? Te.call(p, Y ? "html" : "body")[0] : Y ? p.documentElement : ie;
  }, gr = function(i) {
    return ce.call(
      i.ownerDocument || i,
      i,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, yr = function(i) {
    return i instanceof w && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof v) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function");
  }, Ze = function(i) {
    return je(s) === "object" ? i instanceof s : i && je(i) === "object" && typeof i.nodeType == "number" && typeof i.nodeName == "string";
  }, Re = function(i, p, b) {
    X[i] && wa(X[i], function(B) {
      B.call(r, p, b, Ve);
    });
  }, br = function(i) {
    var p;
    if (Re("beforeSanitizeElements", i, null), yr(i) || ae(/[\u0080-\uFFFF]/, i.nodeName))
      return be(i), !0;
    var b = re(i.nodeName);
    if (Re("uponSanitizeElement", i, {
      tagName: b,
      allowedTags: g
    }), i.hasChildNodes() && !Ze(i.firstElementChild) && (!Ze(i.content) || !Ze(i.content.firstElementChild)) && ae(/<[/\w]/g, i.innerHTML) && ae(/<[/\w]/g, i.textContent) || b === "select" && ae(/<template/i, i.innerHTML) || i.nodeType === 7 || M && i.nodeType === 8 && ae(/<[/\w]/g, i.data))
      return be(i), !0;
    if (!g[b] || m[b]) {
      if (!m[b] && _r(b) && (x.tagNameCheck instanceof RegExp && ae(x.tagNameCheck, b) || x.tagNameCheck instanceof Function && x.tagNameCheck(b)))
        return !1;
      if (q && !se[b]) {
        var B = N(i) || i.parentNode, pe = $(i) || i.childNodes;
        if (pe && B)
          for (var ie = pe.length, ne = ie - 1; ne >= 0; --ne) {
            var He = L(pe[ne], !0);
            He.__removalCount = (i.__removalCount || 0) + 1, B.insertBefore(He, O(i));
          }
      }
      return be(i), !0;
    }
    return i instanceof c && !Tn(i) || (b === "noscript" || b === "noembed" || b === "noframes") && ae(/<\/no(script|embed|frames)/i, i.innerHTML) ? (be(i), !0) : (K && i.nodeType === 3 && (p = i.textContent, p = Se(p, ue, " "), p = Se(p, te, " "), p = Se(p, xe, " "), i.textContent !== p && (Qe(r.removed, {
      element: i.cloneNode()
    }), i.textContent = p)), Re("afterSanitizeElements", i, null), !1);
  }, wr = function(i, p, b) {
    if (De && (p === "id" || p === "name") && (b in n || b in Sn))
      return !1;
    if (!(F && !V[p] && ae(me, p))) {
      if (!(H && ae(fe, p))) {
        if (!A[p] || V[p]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(_r(i) && (x.tagNameCheck instanceof RegExp && ae(x.tagNameCheck, i) || x.tagNameCheck instanceof Function && x.tagNameCheck(i)) && (x.attributeNameCheck instanceof RegExp && ae(x.attributeNameCheck, p) || x.attributeNameCheck instanceof Function && x.attributeNameCheck(p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            p === "is" && x.allowCustomizedBuiltInElements && (x.tagNameCheck instanceof RegExp && ae(x.tagNameCheck, b) || x.tagNameCheck instanceof Function && x.tagNameCheck(b)))
          ) return !1;
        } else if (!At[p]) {
          if (!ae(S, Se(b, Oe, ""))) {
            if (!((p === "src" || p === "xlink:href" || p === "href") && i !== "script" && _a(b, "data:") === 0 && ur[i])) {
              if (!(P && !ae(Fe, Se(b, Oe, "")))) {
                if (b)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, _r = function(i) {
    return i !== "annotation-xml" && Mr(i, ze);
  }, Sr = function(i) {
    var p, b, B, pe;
    Re("beforeSanitizeAttributes", i, null);
    var ie = i.attributes;
    if (ie) {
      var ne = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: A
      };
      for (pe = ie.length; pe--; ) {
        p = ie[pe];
        var He = p, ee = He.name, Ct = He.namespaceURI;
        if (b = ee === "value" ? p.value : Sa(p.value), B = re(ee), ne.attrName = B, ne.attrValue = b, ne.keepAttr = !0, ne.forceKeepAttr = void 0, Re("uponSanitizeAttribute", i, ne), b = ne.attrValue, !ne.forceKeepAttr && (it(ee, i), !!ne.keepAttr)) {
          if (!J && ae(/\/>/i, b)) {
            it(ee, i);
            continue;
          }
          K && (b = Se(b, ue, " "), b = Se(b, te, " "), b = Se(b, xe, " "));
          var Ar = re(i.nodeName);
          if (wr(Ar, B, b)) {
            if (de && (B === "id" || B === "name") && (it(ee, i), b = k + b), M && ae(/((--!?|])>)|<\/(style|title)/i, b)) {
              it(ee, i);
              continue;
            }
            if (R && je(I) === "object" && typeof I.getAttributeType == "function" && !Ct)
              switch (I.getAttributeType(Ar, B)) {
                case "TrustedHTML": {
                  b = R.createHTML(b);
                  break;
                }
                case "TrustedScriptURL": {
                  b = R.createScriptURL(b);
                  break;
                }
              }
            try {
              Ct ? i.setAttributeNS(Ct, ee, b) : i.setAttribute(ee, b), yr(i) ? be(i) : jr(r.removed);
            } catch {
            }
          }
        }
      }
      Re("afterSanitizeAttributes", i, null);
    }
  }, En = function T(i) {
    var p, b = gr(i);
    for (Re("beforeSanitizeShadowDOM", i, null); p = b.nextNode(); )
      Re("uponSanitizeShadowNode", p, null), !br(p) && (p.content instanceof a && T(p.content), Sr(p));
    Re("afterSanitizeShadowDOM", i, null);
  };
  return r.sanitize = function(T) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p, b, B, pe, ie;
    if (Tt = !T, Tt && (T = "<!-->"), typeof T != "string" && !Ze(T))
      if (typeof T.toString == "function") {
        if (T = T.toString(), typeof T != "string")
          throw It("dirty is not a string, aborting");
      } else
        throw It("toString is not a function");
    if (!r.isSupported) {
      if (je(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof T == "string")
          return e.toStaticHTML(T);
        if (Ze(T))
          return e.toStaticHTML(T.outerHTML);
      }
      return T;
    }
    if (z || xt(i), r.removed = [], typeof T == "string" && (ke = !1), ke) {
      if (T.nodeName) {
        var ne = re(T.nodeName);
        if (!g[ne] || m[ne])
          throw It("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (T instanceof s)
      p = vr("<!---->"), b = p.ownerDocument.importNode(T, !0), b.nodeType === 1 && b.nodeName === "BODY" || b.nodeName === "HTML" ? p = b : p.appendChild(b);
    else {
      if (!ye && !K && !Y && // eslint-disable-next-line unicorn/prefer-includes
      T.indexOf("<") === -1)
        return R && Ce ? R.createHTML(T) : T;
      if (p = vr(T), !p)
        return ye ? null : Ce ? d : "";
    }
    p && Q && be(p.firstChild);
    for (var He = gr(ke ? T : p); B = He.nextNode(); )
      B.nodeType === 3 && B === pe || br(B) || (B.content instanceof a && En(B.content), Sr(B), pe = B);
    if (pe = null, ke)
      return T;
    if (ye) {
      if (Z)
        for (ie = ge.call(p.ownerDocument); p.firstChild; )
          ie.appendChild(p.firstChild);
      else
        ie = p;
      return (A.shadowroot || A.shadowrootmod) && (ie = Le.call(t, ie, !0)), ie;
    }
    var ee = Y ? p.outerHTML : p.innerHTML;
    return Y && g["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && ae(La, p.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + ee), K && (ee = Se(ee, ue, " "), ee = Se(ee, te, " "), ee = Se(ee, xe, " ")), R && Ce ? R.createHTML(ee) : ee;
  }, r.setConfig = function(T) {
    xt(T), z = !0;
  }, r.clearConfig = function() {
    Ve = null, z = !1;
  }, r.isValidAttribute = function(T, i, p) {
    Ve || xt({});
    var b = re(T), B = re(i);
    return wr(b, B, p);
  }, r.addHook = function(T, i) {
    typeof i == "function" && (X[T] = X[T] || [], Qe(X[T], i));
  }, r.removeHook = function(T) {
    if (X[T])
      return jr(X[T]);
  }, r.removeHooks = function(T) {
    X[T] && (X[T] = []);
  }, r.removeAllHooks = function() {
    X = {};
  }, r;
}
var Fa = sn();
const Ft = (e) => ({ __html: Fa.sanitize(e) });
h.shape({
  event: h.string,
  action: h.string,
  name: h.string,
  region: h.string,
  section: h.string,
  component: h.string,
  type: h.string,
  text: h.string
});
const za = ({
  event: e = "",
  action: r = "",
  name: t = "",
  type: n = "",
  section: a = "",
  text: o = "",
  region: s = "",
  component: c = ""
}) => {
  const { dataLayer: f } = window, u = {
    event: e.toLowerCase(),
    action: r.toLowerCase(),
    name: t.toLowerCase(),
    type: n.toLowerCase(),
    region: s.toLowerCase(),
    section: a.toLowerCase(),
    text: o.toLowerCase(),
    component: c.toLowerCase()
  };
  f && f.push(u);
}, $a = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, et = ({
  label: e,
  cardTitle: r,
  ariaLabel: t,
  block: n,
  color: a,
  disabled: o,
  element: s,
  href: c,
  icon: f,
  innerRef: u,
  onClick: v,
  size: w,
  classes: C,
  target: I,
  ...E
}) => {
  const L = We("btn", {
    [`btn-${a}`]: !0,
    "btn-md": w === "small",
    "btn-sm": w === "xsmall",
    "btn-block": n,
    disabled: o
  });
  let O = s;
  c && s === "button" && (O = "a");
  const $ = (N) => {
    za({ ...$a, text: N, section: r }), v == null || v();
  };
  return /* @__PURE__ */ y.jsxs(
    O,
    {
      type: O === "button" && v ? "button" : void 0,
      ...E,
      className: We(C) || L,
      href: c,
      ref: u,
      onClick: () => $(e),
      "aria-label": t,
      target: O === "a" ? I : null,
      children: [
        f && /* @__PURE__ */ y.jsx("i", { className: `${f == null ? void 0 : f[0]} fa-${f == null ? void 0 : f[1]} me-1` }),
        e
      ]
    }
  );
};
et.propTypes = {
  /**
   * Button label
   */
  label: h.string,
  /**
   * Card title
   */
  cardTitle: h.string,
  /**
    ARIA label for accessibility
  */
  ariaLabel: h.string,
  /**
    Render button as a block-button?
  */
  block: h.bool,
  /**
    Button background color
  */
  color: h.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: h.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: h.oneOfType([
    h.func,
    h.string,
    h.shape({ $$typeof: h.symbol, render: h.func }),
    h.arrayOf(
      h.oneOfType([
        h.func,
        h.string,
        h.shape({ $$typeof: h.symbol, render: h.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: h.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: h.arrayOf(h.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: h.oneOfType([
    h.object,
    h.func,
    h.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: h.func,
  /**
    Button size
  */
  size: h.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: h.arrayOf(h.string),
  /**
   Link target type
   */
  target: h.oneOf(["_blank", "_self", "_top", "_parent"])
};
et.defaultProps = {
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
var ar = rn();
function Ha(e) {
  function r(S, g, _, A, l) {
    for (var x = 0, m = 0, V = 0, H = 0, F, P, J = 0, K = 0, M, Y = M = F = 0, z = 0, Q = 0, ye = 0, Z = 0, Ce = _.length, De = Ce - 1, de, k = "", q = "", ke = "", Ee = "", se; z < Ce; ) {
      if (P = _.charCodeAt(z), z === De && m + H + V + x !== 0 && (m !== 0 && (P = m === 47 ? 10 : 47), H = V = x = 0, Ce++, De++), m + H + V + x === 0) {
        if (z === De && (0 < Q && (k = k.replace(C, "")), 0 < k.trim().length)) {
          switch (P) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              k += _.charAt(z);
          }
          P = 59;
        }
        switch (P) {
          case 123:
            for (k = k.trim(), F = k.charCodeAt(0), M = 1, Z = ++z; z < Ce; ) {
              switch (P = _.charCodeAt(z)) {
                case 123:
                  M++;
                  break;
                case 125:
                  M--;
                  break;
                case 47:
                  switch (P = _.charCodeAt(z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Y = z + 1; Y < De; ++Y)
                          switch (_.charCodeAt(Y)) {
                            case 47:
                              if (P === 42 && _.charCodeAt(Y - 1) === 42 && z + 2 !== Y) {
                                z = Y + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (P === 47) {
                                z = Y + 1;
                                break e;
                              }
                          }
                        z = Y;
                      }
                  }
                  break;
                case 91:
                  P++;
                case 40:
                  P++;
                case 34:
                case 39:
                  for (; z++ < De && _.charCodeAt(z) !== P; )
                    ;
              }
              if (M === 0) break;
              z++;
            }
            switch (M = _.substring(Z, z), F === 0 && (F = (k = k.replace(w, "").trim()).charCodeAt(0)), F) {
              case 64:
                switch (0 < Q && (k = k.replace(C, "")), P = k.charCodeAt(1), P) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Q = g;
                    break;
                  default:
                    Q = xe;
                }
                if (M = r(g, Q, M, P, l + 1), Z = M.length, 0 < fe && (Q = t(xe, k, ye), se = c(3, M, Q, g, X, oe, Z, P, l, A), k = Q.join(""), se !== void 0 && (Z = (M = se.trim()).length) === 0 && (P = 0, M = "")), 0 < Z) switch (P) {
                  case 115:
                    k = k.replace(G, s);
                  case 100:
                  case 109:
                  case 45:
                    M = k + "{" + M + "}";
                    break;
                  case 107:
                    k = k.replace(N, "$1 $2"), M = k + "{" + M + "}", M = te === 1 || te === 2 && o("@" + M, 3) ? "@-webkit-" + M + "@" + M : "@" + M;
                    break;
                  default:
                    M = k + M, A === 112 && (M = (q += M, ""));
                }
                else M = "";
                break;
              default:
                M = r(g, t(g, k, ye), M, A, l + 1);
            }
            ke += M, M = ye = Q = Y = F = 0, k = "", P = _.charCodeAt(++z);
            break;
          case 125:
          case 59:
            if (k = (0 < Q ? k.replace(C, "") : k).trim(), 1 < (Z = k.length)) switch (Y === 0 && (F = k.charCodeAt(0), F === 45 || 96 < F && 123 > F) && (Z = (k = k.replace(" ", ":")).length), 0 < fe && (se = c(1, k, g, S, X, oe, q.length, A, l, A)) !== void 0 && (Z = (k = se.trim()).length) === 0 && (k = "\0\0"), F = k.charCodeAt(0), P = k.charCodeAt(1), F) {
              case 0:
                break;
              case 64:
                if (P === 105 || P === 99) {
                  Ee += k + _.charAt(z);
                  break;
                }
              default:
                k.charCodeAt(Z - 1) !== 58 && (q += a(k, F, P, k.charCodeAt(2)));
            }
            ye = Q = Y = F = 0, k = "", P = _.charCodeAt(++z);
        }
      }
      switch (P) {
        case 13:
        case 10:
          m === 47 ? m = 0 : 1 + F === 0 && A !== 107 && 0 < k.length && (Q = 1, k += "\0"), 0 < fe * Oe && c(0, k, g, S, X, oe, q.length, A, l, A), oe = 1, X++;
          break;
        case 59:
        case 125:
          if (m + H + V + x === 0) {
            oe++;
            break;
          }
        default:
          switch (oe++, de = _.charAt(z), P) {
            case 9:
            case 32:
              if (H + x + m === 0) switch (J) {
                case 44:
                case 58:
                case 9:
                case 32:
                  de = "";
                  break;
                default:
                  P !== 32 && (de = " ");
              }
              break;
            case 0:
              de = "\\0";
              break;
            case 12:
              de = "\\f";
              break;
            case 11:
              de = "\\v";
              break;
            case 38:
              H + m + x === 0 && (Q = ye = 1, de = "\f" + de);
              break;
            case 108:
              if (H + m + x + ue === 0 && 0 < Y) switch (z - Y) {
                case 2:
                  J === 112 && _.charCodeAt(z - 3) === 58 && (ue = J);
                case 8:
                  K === 111 && (ue = K);
              }
              break;
            case 58:
              H + m + x === 0 && (Y = z);
              break;
            case 44:
              m + V + H + x === 0 && (Q = 1, de += "\r");
              break;
            case 34:
            case 39:
              m === 0 && (H = H === P ? 0 : H === 0 ? P : H);
              break;
            case 91:
              H + m + V === 0 && x++;
              break;
            case 93:
              H + m + V === 0 && x--;
              break;
            case 41:
              H + m + x === 0 && V--;
              break;
            case 40:
              if (H + m + x === 0) {
                if (F === 0) switch (2 * J + 3 * K) {
                  case 533:
                    break;
                  default:
                    F = 1;
                }
                V++;
              }
              break;
            case 64:
              m + V + H + x + Y + M === 0 && (M = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + x + V)) switch (m) {
                case 0:
                  switch (2 * P + 3 * _.charCodeAt(z + 1)) {
                    case 235:
                      m = 47;
                      break;
                    case 220:
                      Z = z, m = 42;
                  }
                  break;
                case 42:
                  P === 47 && J === 42 && Z + 2 !== z && (_.charCodeAt(Z + 2) === 33 && (q += _.substring(Z, z + 1)), de = "", m = 0);
              }
          }
          m === 0 && (k += de);
      }
      K = J, J = P, z++;
    }
    if (Z = q.length, 0 < Z) {
      if (Q = g, 0 < fe && (se = c(2, q, Q, S, X, oe, Z, A, l, A), se !== void 0 && (q = se).length === 0)) return Ee + q + ke;
      if (q = Q.join(",") + "{" + q + "}", te * ue !== 0) {
        switch (te !== 2 || o(q, 2) || (ue = 0), ue) {
          case 111:
            q = q.replace(R, ":-moz-$1") + q;
            break;
          case 112:
            q = q.replace(D, "::-webkit-input-$1") + q.replace(D, "::-moz-$1") + q.replace(D, ":-ms-input-$1") + q;
        }
        ue = 0;
      }
    }
    return Ee + q + ke;
  }
  function t(S, g, _) {
    var A = g.trim().split(O);
    g = A;
    var l = A.length, x = S.length;
    switch (x) {
      case 0:
      case 1:
        var m = 0;
        for (S = x === 0 ? "" : S[0] + " "; m < l; ++m)
          g[m] = n(S, g[m], _).trim();
        break;
      default:
        var V = m = 0;
        for (g = []; m < l; ++m)
          for (var H = 0; H < x; ++H)
            g[V++] = n(S[H] + " ", A[m], _).trim();
    }
    return g;
  }
  function n(S, g, _) {
    var A = g.charCodeAt(0);
    switch (33 > A && (A = (g = g.trim()).charCodeAt(0)), A) {
      case 38:
        return g.replace($, "$1" + S.trim());
      case 58:
        return S.trim() + g.replace($, "$1" + S.trim());
      default:
        if (0 < 1 * _ && 0 < g.indexOf("\f")) return g.replace($, (S.charCodeAt(0) === 58 ? "" : "$1") + S.trim());
    }
    return S + g;
  }
  function a(S, g, _, A) {
    var l = S + ";", x = 2 * g + 3 * _ + 4 * A;
    if (x === 944) {
      S = l.indexOf(":", 9) + 1;
      var m = l.substring(S, l.length - 1).trim();
      return m = l.substring(0, S).trim() + m + ";", te === 1 || te === 2 && o(m, 1) ? "-webkit-" + m + m : m;
    }
    if (te === 0 || te === 2 && !o(l, 1)) return l;
    switch (x) {
      case 1015:
        return l.charCodeAt(10) === 97 ? "-webkit-" + l + l : l;
      case 951:
        return l.charCodeAt(3) === 116 ? "-webkit-" + l + l : l;
      case 963:
        return l.charCodeAt(5) === 110 ? "-webkit-" + l + l : l;
      case 1009:
        if (l.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + l + l;
      case 978:
        return "-webkit-" + l + "-moz-" + l + l;
      case 1019:
      case 983:
        return "-webkit-" + l + "-moz-" + l + "-ms-" + l + l;
      case 883:
        if (l.charCodeAt(8) === 45) return "-webkit-" + l + l;
        if (0 < l.indexOf("image-set(", 11)) return l.replace(Le, "$1-webkit-$2") + l;
        break;
      case 932:
        if (l.charCodeAt(4) === 45) switch (l.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + l.replace("-grow", "") + "-webkit-" + l + "-ms-" + l.replace("grow", "positive") + l;
          case 115:
            return "-webkit-" + l + "-ms-" + l.replace("shrink", "negative") + l;
          case 98:
            return "-webkit-" + l + "-ms-" + l.replace("basis", "preferred-size") + l;
        }
        return "-webkit-" + l + "-ms-" + l + l;
      case 964:
        return "-webkit-" + l + "-ms-flex-" + l + l;
      case 1023:
        if (l.charCodeAt(8) !== 99) break;
        return m = l.substring(l.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + m + "-webkit-" + l + "-ms-flex-pack" + m + l;
      case 1005:
        return E.test(l) ? l.replace(I, ":-webkit-") + l.replace(I, ":-moz-") + l : l;
      case 1e3:
        switch (m = l.substring(13).trim(), g = m.indexOf("-") + 1, m.charCodeAt(0) + m.charCodeAt(g)) {
          case 226:
            m = l.replace(d, "tb");
            break;
          case 232:
            m = l.replace(d, "tb-rl");
            break;
          case 220:
            m = l.replace(d, "lr");
            break;
          default:
            return l;
        }
        return "-webkit-" + l + "-ms-" + m + l;
      case 1017:
        if (l.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (g = (l = S).length - 10, m = (l.charCodeAt(g) === 33 ? l.substring(0, g) : l).substring(S.indexOf(":", 7) + 1).trim(), x = m.charCodeAt(0) + (m.charCodeAt(7) | 0)) {
          case 203:
            if (111 > m.charCodeAt(8)) break;
          case 115:
            l = l.replace(m, "-webkit-" + m) + ";" + l;
            break;
          case 207:
          case 102:
            l = l.replace(m, "-webkit-" + (102 < x ? "inline-" : "") + "box") + ";" + l.replace(m, "-webkit-" + m) + ";" + l.replace(m, "-ms-" + m + "box") + ";" + l;
        }
        return l + ";";
      case 938:
        if (l.charCodeAt(5) === 45) switch (l.charCodeAt(6)) {
          case 105:
            return m = l.replace("-items", ""), "-webkit-" + l + "-webkit-box-" + m + "-ms-flex-" + m + l;
          case 115:
            return "-webkit-" + l + "-ms-flex-item-" + l.replace(ce, "") + l;
          default:
            return "-webkit-" + l + "-ms-flex-line-pack" + l.replace("align-content", "").replace(ce, "") + l;
        }
        break;
      case 973:
      case 989:
        if (l.charCodeAt(3) !== 45 || l.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Te.test(S) === !0) return (m = S.substring(S.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(S.replace("stretch", "fill-available"), g, _, A).replace(":fill-available", ":stretch") : l.replace(m, "-webkit-" + m) + l.replace(m, "-moz-" + m.replace("fill-", "")) + l;
        break;
      case 962:
        if (l = "-webkit-" + l + (l.charCodeAt(5) === 102 ? "-ms-" + l : "") + l, _ + A === 211 && l.charCodeAt(13) === 105 && 0 < l.indexOf("transform", 10)) return l.substring(0, l.indexOf(";", 27) + 1).replace(L, "$1-webkit-$2") + l;
    }
    return l;
  }
  function o(S, g) {
    var _ = S.indexOf(g === 1 ? ":" : "{"), A = S.substring(0, g !== 3 ? _ : 10);
    return _ = S.substring(_ + 1, S.length - 1), Fe(g !== 2 ? A : A.replace(ge, "$1"), _, g);
  }
  function s(S, g) {
    var _ = a(g, g.charCodeAt(0), g.charCodeAt(1), g.charCodeAt(2));
    return _ !== g + ";" ? _.replace(ve, " or ($1)").substring(4) : "(" + g + ")";
  }
  function c(S, g, _, A, l, x, m, V, H, F) {
    for (var P = 0, J = g, K; P < fe; ++P)
      switch (K = me[P].call(v, S, J, _, A, l, x, m, V, H, F)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          J = K;
      }
    if (J !== g) return J;
  }
  function f(S) {
    switch (S) {
      case void 0:
      case null:
        fe = me.length = 0;
        break;
      default:
        if (typeof S == "function") me[fe++] = S;
        else if (typeof S == "object") for (var g = 0, _ = S.length; g < _; ++g)
          f(S[g]);
        else Oe = !!S | 0;
    }
    return f;
  }
  function u(S) {
    return S = S.prefix, S !== void 0 && (Fe = null, S ? typeof S != "function" ? te = 1 : (te = 2, Fe = S) : te = 0), u;
  }
  function v(S, g) {
    var _ = S;
    if (33 > _.charCodeAt(0) && (_ = _.trim()), ze = _, _ = [ze], 0 < fe) {
      var A = c(-1, g, _, _, X, oe, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (g = A);
    }
    var l = r(xe, _, g, 0, 0);
    return 0 < fe && (A = c(-2, l, _, _, X, oe, l.length, 0, 0, 0), A !== void 0 && (l = A)), ze = "", ue = 0, oe = X = 1, l;
  }
  var w = /^\0+/g, C = /[\0\r\f]/g, I = /: */g, E = /zoo|gra/, L = /([,: ])(transform)/g, O = /,\r+?/g, $ = /([\t\r\n ])*\f?&/g, N = /@(k\w+)\s*(\S*)\s*/, D = /::(place)/g, R = /:(read-only)/g, d = /[svh]\w+-[tblr]{2}/, G = /\(\s*(.*)\s*\)/g, ve = /([\s\S]*?);/g, ce = /-self|flex-/g, ge = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Te = /stretch|:\s*\w+\-(?:conte|avail)/, Le = /([^-])(image-set\()/, oe = 1, X = 1, ue = 0, te = 1, xe = [], me = [], fe = 0, Fe = null, Oe = 0, ze = "";
  return v.use = f, v.set = u, e !== void 0 && u(e), v;
}
var Ba = {
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
function Ua(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Wa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Br = /* @__PURE__ */ Ua(
  function(e) {
    return Wa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), or = rn(), Ga = {
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
}, Va = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, qa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ln = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ir = {};
ir[or.ForwardRef] = qa;
ir[or.Memo] = ln;
function Ur(e) {
  return or.isMemo(e) ? ln : ir[e.$$typeof] || Ga;
}
var Ya = Object.defineProperty, Xa = Object.getOwnPropertyNames, Wr = Object.getOwnPropertySymbols, Za = Object.getOwnPropertyDescriptor, Ka = Object.getPrototypeOf, Gr = Object.prototype;
function cn(e, r, t) {
  if (typeof r != "string") {
    if (Gr) {
      var n = Ka(r);
      n && n !== Gr && cn(e, n, t);
    }
    var a = Xa(r);
    Wr && (a = a.concat(Wr(r)));
    for (var o = Ur(e), s = Ur(r), c = 0; c < a.length; ++c) {
      var f = a[c];
      if (!Va[f] && !(t && t[f]) && !(s && s[f]) && !(o && o[f])) {
        var u = Za(r, f);
        try {
          Ya(e, f, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Qa = cn;
const Ja = /* @__PURE__ */ nr(Qa);
var W = { env: { NODE_ENV: "production" } };
function Ie() {
  return (Ie = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Vr = function(e, r) {
  for (var t = [e[0]], n = 0, a = r.length; n < a; n += 1) t.push(r[n], e[n + 1]);
  return t;
}, Kt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ar.typeOf(e);
}, gt = Object.freeze([]), Me = Object.freeze({});
function rt(e) {
  return typeof e == "function";
}
function Qt(e) {
  return W.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function sr(e) {
  return e && typeof e.styledComponentId == "string";
}
var qe = typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_ATTR || W.env.SC_ATTR) || "data-styled", lr = typeof window < "u" && "HTMLElement" in window, eo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof W < "u" && W.env !== void 0 && (W.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.env.REACT_APP_SC_DISABLE_SPEEDY : W.env.SC_DISABLE_SPEEDY !== void 0 && W.env.SC_DISABLE_SPEEDY !== "" ? W.env.SC_DISABLE_SPEEDY !== "false" && W.env.SC_DISABLE_SPEEDY : W.env.NODE_ENV !== "production")), to = W.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function ro() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1) r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function Xe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  throw W.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(ro.apply(void 0, [to[e]].concat(t)).trim());
}
var no = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, a = 0; a < t; a++) n += this.groupSizes[a];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, s = o; t >= s; ) (s <<= 1) < 0 && Xe(16, "" + t);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = o; c < s; c++) this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), u = 0, v = n.length; u < v; u++) this.tag.insertRule(f, n[u]) && (this.groupSizes[t]++, f++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], a = this.indexOfGroup(t), o = a + n;
      this.groupSizes[t] = 0;
      for (var s = a; s < o; s++) this.tag.deleteRule(a);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var a = this.groupSizes[t], o = this.indexOfGroup(t), s = o + a, c = o; c < s; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), ht = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), tt = 1, ct = function(e) {
  if (ht.has(e)) return ht.get(e);
  for (; yt.has(tt); ) tt++;
  var r = tt++;
  return W.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Xe(16, "" + r), ht.set(e, r), yt.set(r, e), r;
}, ao = function(e) {
  return yt.get(e);
}, oo = function(e, r) {
  r >= tt && (tt = r + 1), ht.set(e, r), yt.set(r, e);
}, io = "style[" + qe + '][data-styled-version="5.3.11"]', so = new RegExp("^" + qe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), lo = function(e, r, t) {
  for (var n, a = t.split(","), o = 0, s = a.length; o < s; o++) (n = a[o]) && e.registerName(r, n);
}, co = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], a = 0, o = t.length; a < o; a++) {
    var s = t[a].trim();
    if (s) {
      var c = s.match(so);
      if (c) {
        var f = 0 | parseInt(c[1], 10), u = c[2];
        f !== 0 && (oo(u, f), lo(e, u, c[3]), e.getTag().insertRules(f, n)), n.length = 0;
      } else n.push(s);
    }
  }
}, uo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, un = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), a = function(c) {
    for (var f = c.childNodes, u = f.length; u >= 0; u--) {
      var v = f[u];
      if (v && v.nodeType === 1 && v.hasAttribute(qe)) return v;
    }
  }(t), o = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(qe, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var s = uo();
  return s && n.setAttribute("nonce", s), t.insertBefore(n, o), n;
}, fo = function() {
  function e(t) {
    var n = this.element = un(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var o = document.styleSheets, s = 0, c = o.length; s < c; s++) {
        var f = o[s];
        if (f.ownerNode === a) return f;
      }
      Xe(17);
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
}(), po = function() {
  function e(t) {
    var n = this.element = un(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(n), o = this.nodes[t];
      return this.element.insertBefore(a, o || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ho = function() {
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
}(), qr = lr, mo = { isServer: !lr, useCSSOMInjection: !eo }, fn = function() {
  function e(t, n, a) {
    t === void 0 && (t = Me), n === void 0 && (n = {}), this.options = Ie({}, mo, {}, t), this.gs = n, this.names = new Map(a), this.server = !!t.isServer, !this.server && lr && qr && (qr = !1, function(o) {
      for (var s = document.querySelectorAll(io), c = 0, f = s.length; c < f; c++) {
        var u = s[c];
        u && u.getAttribute(qe) !== "active" && (co(o, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(t) {
    return ct(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Ie({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, o = n.useCSSOMInjection, s = n.target, t = a ? new ho(s) : o ? new fo(s) : new po(s), new no(t)));
    var t, n, a, o, s;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (ct(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(t, a);
    }
  }, r.insertRules = function(t, n, a) {
    this.registerName(t, n), this.getTag().insertRules(ct(t), a);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(ct(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), a = n.length, o = "", s = 0; s < a; s++) {
        var c = ao(s);
        if (c !== void 0) {
          var f = t.names.get(c), u = n.getGroup(s);
          if (f && u && f.size) {
            var v = qe + ".g" + s + '[id="' + c + '"]', w = "";
            f !== void 0 && f.forEach(function(C) {
              C.length > 0 && (w += C + ",");
            }), o += "" + u + v + '{content:"' + w + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), vo = /(a)(d)/gi, Yr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Jt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Yr(r % 52) + t;
  return (Yr(r % 52) + t).replace(vo, "$1-$2");
}
var Ue = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, dn = function(e) {
  return Ue(5381, e);
};
function go(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (rt(t) && !sr(t)) return !1;
  }
  return !0;
}
var yo = dn("5.3.11"), bo = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = W.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && go(r), this.componentId = t, this.baseHash = Ue(yo, t), this.baseStyle = n, fn.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var a = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(a, this.staticRulesId)) o.push(this.staticRulesId);
    else {
      var s = Ye(this.rules, r, t, n).join(""), c = Jt(Ue(this.baseHash, s) >>> 0);
      if (!t.hasNameForId(a, c)) {
        var f = n(s, "." + c, void 0, a);
        t.insertRules(a, c, f);
      }
      o.push(c), this.staticRulesId = c;
    }
    else {
      for (var u = this.rules.length, v = Ue(this.baseHash, n.hash), w = "", C = 0; C < u; C++) {
        var I = this.rules[C];
        if (typeof I == "string") w += I, W.env.NODE_ENV !== "production" && (v = Ue(v, I + C));
        else if (I) {
          var E = Ye(I, r, t, n), L = Array.isArray(E) ? E.join("") : E;
          v = Ue(v, L + C), w += L;
        }
      }
      if (w) {
        var O = Jt(v >>> 0);
        if (!t.hasNameForId(a, O)) {
          var $ = n(w, "." + O, void 0, a);
          t.insertRules(a, O, $);
        }
        o.push(O);
      }
    }
    return o.join(" ");
  }, e;
}(), wo = /^\s*\/\/.*$/gm, _o = [":", "[", ".", "#"];
function So(e) {
  var r, t, n, a, o = Me, s = o.options, c = s === void 0 ? Me : s, f = o.plugins, u = f === void 0 ? gt : f, v = new Ha(c), w = [], C = /* @__PURE__ */ function(L) {
    function O($) {
      if ($) try {
        L($ + "}");
      } catch {
      }
    }
    return function($, N, D, R, d, G, ve, ce, ge, Te) {
      switch ($) {
        case 1:
          if (ge === 0 && N.charCodeAt(0) === 64) return L(N + ";"), "";
          break;
        case 2:
          if (ce === 0) return N + "/*|*/";
          break;
        case 3:
          switch (ce) {
            case 102:
            case 112:
              return L(D[0] + N), "";
            default:
              return N + (Te === 0 ? "/*|*/" : "");
          }
        case -2:
          N.split("/*|*/}").forEach(O);
      }
    };
  }(function(L) {
    w.push(L);
  }), I = function(L, O, $) {
    return O === 0 && _o.indexOf($[t.length]) !== -1 || $.match(a) ? L : "." + r;
  };
  function E(L, O, $, N) {
    N === void 0 && (N = "&");
    var D = L.replace(wo, ""), R = O && $ ? $ + " " + O + " { " + D + " }" : D;
    return r = N, t = O, n = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), v($ || !O ? "" : O, R);
  }
  return v.use([].concat(u, [function(L, O, $) {
    L === 2 && $.length && $[0].lastIndexOf(t) > 0 && ($[0] = $[0].replace(n, I));
  }, C, function(L) {
    if (L === -2) {
      var O = w;
      return w = [], O;
    }
  }])), E.hash = u.length ? u.reduce(function(L, O) {
    return O.name || Xe(15), Ue(L, O.name);
  }, 5381).toString() : "", E;
}
var pn = he.createContext();
pn.Consumer;
var hn = he.createContext(), Ao = (hn.Consumer, new fn()), er = So();
function To() {
  return rr(pn) || Ao;
}
function Eo() {
  return rr(hn) || er;
}
var xo = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(a, o) {
      o === void 0 && (o = er);
      var s = n.name + o.hash;
      a.hasNameForId(n.id, s) || a.insertRules(n.id, s, o(n.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Xe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = er), this.name + r.hash;
  }, e;
}(), Oo = /([A-Z])/, Co = /([A-Z])/g, ko = /^ms-/, No = function(e) {
  return "-" + e.toLowerCase();
};
function Xr(e) {
  return Oo.test(e) ? e.replace(Co, No).replace(ko, "-ms-") : e;
}
var Zr = function(e) {
  return e == null || e === !1 || e === "";
};
function Ye(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var a, o = [], s = 0, c = e.length; s < c; s += 1) (a = Ye(e[s], r, t, n)) !== "" && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
    return o;
  }
  if (Zr(e)) return "";
  if (sr(e)) return "." + e.styledComponentId;
  if (rt(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !r) return e;
    var f = e(r);
    return W.env.NODE_ENV !== "production" && ar.isElement(f) && console.warn(Qt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ye(f, r, t, n);
  }
  var u;
  return e instanceof xo ? t ? (e.inject(t, n), e.getName(n)) : e : Kt(e) ? function v(w, C) {
    var I, E, L = [];
    for (var O in w) w.hasOwnProperty(O) && !Zr(w[O]) && (Array.isArray(w[O]) && w[O].isCss || rt(w[O]) ? L.push(Xr(O) + ":", w[O], ";") : Kt(w[O]) ? L.push.apply(L, v(w[O], O)) : L.push(Xr(O) + ": " + (I = O, (E = w[O]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || I in Ba || I.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return C ? [C + " {"].concat(L, ["}"]) : L;
  }(e) : e.toString();
}
var Kr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ro(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  return rt(e) || Kt(e) ? Kr(Ye(Vr(gt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Kr(Ye(Vr(e, t)));
}
var Qr = /invalid hook call/i, ut = /* @__PURE__ */ new Set(), Po = function(e, r) {
  if (W.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(o) {
        if (Qr.test(o)) a = !1, ut.delete(t);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++) c[f - 1] = arguments[f];
          n.apply(void 0, [o].concat(c));
        }
      }, Cn(), a && !ut.has(t) && (console.warn(t), ut.add(t));
    } catch (o) {
      Qr.test(o.message) && ut.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Io = function(e, r, t) {
  return t === void 0 && (t = Me), e.theme !== t.theme && e.theme || r || t.theme;
}, Lo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Do = /(^-|-$)/g;
function zt(e) {
  return e.replace(Lo, "-").replace(Do, "");
}
var jo = function(e) {
  return Jt(dn(e) >>> 0);
};
function ft(e) {
  return typeof e == "string" && (W.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var tr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Mo = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Fo(e, r, t) {
  var n = e[t];
  tr(r) && tr(n) ? mn(n, r) : e[t] = r;
}
function mn(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
  for (var a = 0, o = t; a < o.length; a++) {
    var s = o[a];
    if (tr(s)) for (var c in s) Mo(c) && Fo(e, s[c], c);
  }
  return e;
}
var vn = he.createContext();
vn.Consumer;
var $t = {};
function gn(e, r, t) {
  var n = sr(e), a = !ft(e), o = r.attrs, s = o === void 0 ? gt : o, c = r.componentId, f = c === void 0 ? function(N, D) {
    var R = typeof N != "string" ? "sc" : zt(N);
    $t[R] = ($t[R] || 0) + 1;
    var d = R + "-" + jo("5.3.11" + R + $t[R]);
    return D ? D + "-" + d : d;
  }(r.displayName, r.parentComponentId) : c, u = r.displayName, v = u === void 0 ? function(N) {
    return ft(N) ? "styled." + N : "Styled(" + Qt(N) + ")";
  }(e) : u, w = r.displayName && r.componentId ? zt(r.displayName) + "-" + r.componentId : r.componentId || f, C = n && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, I = r.shouldForwardProp;
  n && e.shouldForwardProp && (I = r.shouldForwardProp ? function(N, D, R) {
    return e.shouldForwardProp(N, D, R) && r.shouldForwardProp(N, D, R);
  } : e.shouldForwardProp);
  var E, L = new bo(t, w, n ? e.componentStyle : void 0), O = L.isStatic && s.length === 0, $ = function(N, D) {
    return function(R, d, G, ve) {
      var ce = R.attrs, ge = R.componentStyle, Te = R.defaultProps, Le = R.foldedComponentIds, oe = R.shouldForwardProp, X = R.styledComponentId, ue = R.target, te = function(A, l, x) {
        A === void 0 && (A = Me);
        var m = Ie({}, l, { theme: A }), V = {};
        return x.forEach(function(H) {
          var F, P, J, K = H;
          for (F in rt(K) && (K = K(m)), K) m[F] = V[F] = F === "className" ? (P = V[F], J = K[F], P && J ? P + " " + J : P || J) : K[F];
        }), [m, V];
      }(Io(d, rr(vn), Te) || Me, d, ce), xe = te[0], me = te[1], fe = function(A, l, x, m) {
        var V = To(), H = Eo(), F = l ? A.generateAndInjectStyles(Me, V, H) : A.generateAndInjectStyles(x, V, H);
        return W.env.NODE_ENV !== "production" && !l && m && m(F), F;
      }(ge, ve, xe, W.env.NODE_ENV !== "production" ? R.warnTooManyClasses : void 0), Fe = G, Oe = me.$as || d.$as || me.as || d.as || ue, ze = ft(Oe), S = me !== d ? Ie({}, d, {}, me) : d, g = {};
      for (var _ in S) _[0] !== "$" && _ !== "as" && (_ === "forwardedAs" ? g.as = S[_] : (oe ? oe(_, Br, Oe) : !ze || Br(_)) && (g[_] = S[_]));
      return d.style && me.style !== d.style && (g.style = Ie({}, d.style, {}, me.style)), g.className = Array.prototype.concat(Le, X, fe !== X ? fe : null, d.className, me.className).filter(Boolean).join(" "), g.ref = Fe, kn(Oe, g);
    }(E, N, D, O);
  };
  return $.displayName = v, (E = he.forwardRef($)).attrs = C, E.componentStyle = L, E.displayName = v, E.shouldForwardProp = I, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : gt, E.styledComponentId = w, E.target = n ? e.target : e, E.withComponent = function(N) {
    var D = r.componentId, R = function(G, ve) {
      if (G == null) return {};
      var ce, ge, Te = {}, Le = Object.keys(G);
      for (ge = 0; ge < Le.length; ge++) ce = Le[ge], ve.indexOf(ce) >= 0 || (Te[ce] = G[ce]);
      return Te;
    }(r, ["componentId"]), d = D && D + "-" + (ft(N) ? N : zt(Qt(N)));
    return gn(N, Ie({}, R, { attrs: C, componentId: d }), t);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(N) {
    this._foldedDefaultProps = n ? mn({}, e.defaultProps, N) : N;
  } }), W.env.NODE_ENV !== "production" && (Po(v, w), E.warnTooManyClasses = /* @__PURE__ */ function(N, D) {
    var R = {}, d = !1;
    return function(G) {
      if (!d && (R[G] = !0, Object.keys(R).length >= 200)) {
        var ve = D ? ' with the id of "' + D + '"' : "";
        console.warn("Over 200 classes were generated for component " + N + ve + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), d = !0, R = {};
      }
    };
  }(v, w)), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), a && Ja(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var bt = function(e) {
  return function r(t, n, a) {
    if (a === void 0 && (a = Me), !ar.isValidElementType(n)) return Xe(1, String(n));
    var o = function() {
      return t(n, a, Ro.apply(void 0, arguments));
    };
    return o.withConfig = function(s) {
      return r(t, n, Ie({}, a, {}, s));
    }, o.attrs = function(s) {
      return r(t, n, Ie({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, o;
  }(gn, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  bt[e] = bt(e);
});
W.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), W.env.NODE_ENV !== "production" && W.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const zo = bt.div`
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
`, $o = bt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, yn = ({
  type: e,
  articleUrl: r,
  publicationDate: t,
  title: n,
  body: a,
  authorEmail: o,
  authorName: s,
  authorPhone: c,
  authorTitle: f,
  breadcrumbs: u,
  calendarUrl: v,
  eventLocation: w,
  eventTime: C,
  headerImageUrl: I,
  registrationUrl: E,
  zoomUrl: L
}) => {
  const O = We("col", "col-12", {
    "col-lg-8": e === "event" && (E || L || v)
  }), $ = () => E ? /* @__PURE__ */ y.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ y.jsx(et, { color: "maroon", href: E, label: "Register" }) }) : /* @__PURE__ */ y.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ y.jsx(et, { color: "maroon", href: L, label: "Attend on Zoom" }) }), N = () => /* @__PURE__ */ y.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ y.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ y.jsx("div", { className: "author highlight-gold", children: s }),
    f && /* @__PURE__ */ y.jsx("div", { className: "author-title", children: f }),
    o && /* @__PURE__ */ y.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ y.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ y.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ y.jsx("a", { href: `mailto: ${o}`, children: o })
    ] }),
    c && /* @__PURE__ */ y.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ y.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ y.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ y.jsx("a", { href: `tel: ${c}`, children: c })
    ] })
  ] }) }), D = () => /* @__PURE__ */ y.jsxs(
    $o,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ y.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ y.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ y.jsx("div", { className: "event-author", children: s }),
          /* @__PURE__ */ y.jsx("div", { className: "event-author-title", children: f }),
          (o || c) && /* @__PURE__ */ y.jsxs("div", { className: "event-author-info", children: [
            o && /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx("a", { href: `mailto: ${o}`, children: o }) }),
            c && /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx("a", { href: `tel: ${c}`, children: c }) })
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ y.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ y.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ y.jsx(Nr, { url: r, quote: n, children: /* @__PURE__ */ y.jsx(
              kr,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ y.jsx(Lr, { url: r, quote: n, children: /* @__PURE__ */ y.jsx(
              Ir,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ y.jsx(qn, { url: o, quote: n, children: /* @__PURE__ */ y.jsx(
              Mn,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ y.jsx(Pr, { url: r, quote: n, children: /* @__PURE__ */ y.jsx(
              Rr,
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
  ), R = () => /* @__PURE__ */ y.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ y.jsxs("h4", { children: [
      /* @__PURE__ */ y.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ y.jsx("div", { dangerouslySetInnerHTML: Ft(w) }),
    E && L && /* @__PURE__ */ y.jsx("a", { href: L, children: "Attend on Zoom" })
  ] }), d = (G) => /* @__PURE__ */ y.jsx(
    qt,
    {
      active: G.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ y.jsx(qt, { tag: "a", href: G.url, children: G.title })
    },
    G.title
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    I && e !== "event" && /* @__PURE__ */ y.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${I})`
        }
      }
    ),
    /* @__PURE__ */ y.jsxs(zo, { className: `container ${e}-container wrapper-container`, children: [
      u && /* @__PURE__ */ y.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ y.jsx("div", { className: "col col-12", children: /* @__PURE__ */ y.jsx(an, { listClassName: "breadcrumb", children: u.map((G) => d(G)) }) }) }),
      /* @__PURE__ */ y.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ y.jsx("div", { className: O, children: /* @__PURE__ */ y.jsx("h2", { "data-testid": "title", children: n }) }),
        e === "event" && /* @__PURE__ */ y.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (E || L) && $(),
          v && /* @__PURE__ */ y.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ y.jsx(
            et,
            {
              color: "gray",
              size: "small",
              href: v,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      e === "event" ? /* @__PURE__ */ y.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        C && /* @__PURE__ */ y.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ y.jsxs("h4", { children: [
            /* @__PURE__ */ y.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ y.jsx(
            "div",
            {
              dangerouslySetInnerHTML: Ft(C)
            }
          )
        ] }),
        (E && L || w) && R()
      ] }) : /* @__PURE__ */ y.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ y.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ y.jsx(Nr, { url: r, quote: n, children: /* @__PURE__ */ y.jsx(
            kr,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ y.jsx(Lr, { url: r, quote: n, children: /* @__PURE__ */ y.jsx(
            Ir,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ y.jsx(Pr, { url: r, quote: n, children: /* @__PURE__ */ y.jsx(
            Rr,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        t && /* @__PURE__ */ y.jsx("i", { className: "news-date", children: t })
      ] }) }),
      /* @__PURE__ */ y.jsx("div", { className: "row", children: /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: Ft(a),
          "data-testid": "body"
        }
      ) }),
      e === "news" && N(),
      e === "event" && D()
    ] })
  ] });
};
yn.propTypes = {
  /**
   * Type of article
   */
  type: h.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: h.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: h.string.isRequired,
  /**
   * Title
   */
  title: h.string.isRequired,
  /**
   * Body content for the article
   */
  body: h.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: h.string,
  /**
   * Article author full name
   */
  authorName: h.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: h.string,
  /**
   * Article author title
   */
  authorTitle: h.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: h.arrayOf(
    h.shape({
      title: h.string,
      url: h.string,
      active: h.bool
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: h.string,
  /**
   * Article image
   */
  headerImageUrl: h.string,
  /**
   * Event location
   */
  eventLocation: h.string,
  /**
   * Event time
   */
  eventTime: h.string,
  /**
   * URL for a registation button
   */
  registrationUrl: h.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: h.string
};
yn.defaultProps = {
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
export {
  yn as Article
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
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE */
