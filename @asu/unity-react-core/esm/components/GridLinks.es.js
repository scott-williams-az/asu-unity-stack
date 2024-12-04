import k from "react";
function C(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var x = { exports: {} }, d = {};
var v;
function O() {
  if (v) return d;
  v = 1;
  var e = k, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(p, o, m) {
    var s, l = {}, u = null, _ = null;
    m !== void 0 && (u = "" + m), o.key !== void 0 && (u = "" + o.key), o.ref !== void 0 && (_ = o.ref);
    for (s in o) t.call(o, s) && !r.hasOwnProperty(s) && (l[s] = o[s]);
    if (p && p.defaultProps) for (s in o = p.defaultProps, o) l[s] === void 0 && (l[s] = o[s]);
    return { $$typeof: n, type: p, key: u, ref: _, props: l, _owner: a.current };
  }
  return d.Fragment = i, d.jsx = y, d.jsxs = y, d;
}
x.exports = O();
var f = x.exports, w = { exports: {} }, h, R;
function P() {
  if (R) return h;
  R = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return h = e, h;
}
var g, T;
function S() {
  if (T) return g;
  T = 1;
  var e = P();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, g = function() {
    function t(y, p, o, m, s, l) {
      if (l !== e) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    t.isRequired = t;
    function a() {
      return t;
    }
    var r = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: a,
      element: t,
      elementType: t,
      instanceOf: a,
      node: t,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return r.PropTypes = r, r;
  }, g;
}
w.exports = S()();
var b = w.exports;
const c = /* @__PURE__ */ C(b);
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
const L = ({
  event: e = "",
  action: n = "",
  name: i = "",
  type: t = "",
  section: a = "",
  text: r = "",
  region: y = "",
  component: p = ""
}) => {
  const { dataLayer: o } = window, m = {
    event: e.toLowerCase(),
    action: n.toLowerCase(),
    name: i.toLowerCase(),
    type: t.toLowerCase(),
    region: y.toLowerCase(),
    section: a.toLowerCase(),
    text: r.toLowerCase(),
    component: p.toLowerCase()
  };
  o && o.push(m);
}, j = (e, n) => ({
  "data-ga": e.text,
  "data-ga-name": e.name,
  "data-ga-event": e.event,
  "data-ga-action": e.action,
  "data-ga-type": e.type,
  "data-ga-region": e.region,
  "data-ga-section": e.section,
  "data-ga-component": e.component,
  onClick: typeof n == "function" ? n : void 0
}), E = (e, n) => ({
  onClick: (i) => {
    L(e);
  }
});
function F(e, n, i) {
  return n ? j(e, i) : E(e);
}
const N = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, q = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, D = ({
  gridLinkItems: e,
  numColumns: n,
  textColor: i,
  useExternal: t = !1,
  children: a
}) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        n,
        N[i]
      ].join(" "),
      children: e && e.map((r) => /* @__PURE__ */ f.jsxs(
        "a",
        {
          href: r.href,
          ...F(
            {
              ...q,
              text: r.label,
              section: `grid links ${r.label}`
            },
            t
          ),
          children: [
            /* @__PURE__ */ f.jsx("span", { className: `fa fa-fw ${r.icon}` }),
            r.label
          ]
        },
        r.label + r.href
      ))
    }
  ),
  /* @__PURE__ */ f.jsx("div", { children: a })
] });
export {
  D as GridLinks
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
