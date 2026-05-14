import { j as _e } from "./jsx-runtime.D_zvdyIk.js";
import { r as I } from "./index.RH_Wq4ov.js";
import {
  i as Be,
  f as Ce,
  a as Se,
  J as Ue,
  u as Ae,
  M as Me,
  m as We,
  b as $e,
  c as De,
  d as oe,
  e as Je,
} from "./use-in-view.BpDTmf6i.js";
function qe(...e) {
  const t = !Array.isArray(e[0]),
    r = t ? 0 : -1,
    o = e[0 + r],
    n = e[1 + r],
    l = e[2 + r],
    i = e[3 + r],
    p = Be(n, l, i);
  return t ? p(o) : p;
}
function He(e, t, r) {
  const o = e.get();
  let n = null,
    l = o,
    i;
  const p = typeof o == "string" ? o.replace(/[\d.-]/g, "") : void 0,
    d = () => {
      n && (n.stop(), (n = null));
    },
    g = () => {
      (d(),
        (n = new Ue({
          keyframes: [xe(e.get()), xe(l)],
          velocity: e.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...r,
          onUpdate: i,
        })));
    };
  if (
    (e.attach(
      (f, x) => ((l = f), (i = (z) => x(he(z, p))), Ce.postRender(g), e.get()),
      d,
    ),
    Se(t))
  ) {
    const f = t.on("change", (z) => e.set(he(z, p))),
      x = e.on("destroy", f);
    return () => {
      (f(), x());
    };
  }
  return d;
}
function he(e, t) {
  return t ? e + t : e;
}
function xe(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function ie(e) {
  const t = Ae(() => We(e)),
    { isStatic: r } = I.useContext(Me);
  if (r) {
    const [, o] = I.useState(e);
    I.useEffect(() => t.on("change", o), []);
  }
  return t;
}
function Ie(e, t) {
  const r = ie(t()),
    o = () => r.set(t());
  return (
    o(),
    $e(() => {
      const n = () => Ce.preRender(o, !1, !0),
        l = e.map((i) => i.on("change", n));
      return () => {
        (l.forEach((i) => i()), De(o));
      };
    }),
    r
  );
}
function Xe(e) {
  ((oe.current = []), e());
  const t = Ie(oe.current, e);
  return ((oe.current = void 0), t);
}
function Ke(e, t, r, o) {
  if (typeof e == "function") return Xe(e);
  const n = qe(t, r, o);
  return Array.isArray(e) ? we(e, n) : we([e], ([l]) => n(l));
}
function we(e, t) {
  const r = Ae(() => []);
  return Ie(e, () => {
    r.length = 0;
    const o = e.length;
    for (let n = 0; n < o; n++) r[n] = e[n].get();
    return t(r);
  });
}
function Qe(e, t = {}) {
  const { isStatic: r } = I.useContext(Me),
    o = () => (Se(e) ? e.get() : e);
  if (r) return Ke(o);
  const n = ie(o());
  return (I.useInsertionEffect(() => He(n, e, t), [n, JSON.stringify(t)]), n);
}
function Re(e) {
  var t,
    r,
    o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++)
        e[t] && (r = Re(e[t])) && (o && (o += " "), (o += r));
    } else for (r in e) e[r] && (o && (o += " "), (o += r));
  return o;
}
function Ye() {
  for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
    (e = arguments[r]) && (t = Re(e)) && (o && (o += " "), (o += t));
  return o;
}
const le = "-",
  Ze = (e) => {
    const t = oo(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (i) => {
        const p = i.split(le);
        return (p[0] === "" && p.length !== 1 && p.shift(), Pe(p, t) || eo(i));
      },
      getConflictingClassGroupIds: (i, p) => {
        const d = r[i] || [];
        return p && o[i] ? [...d, ...o[i]] : d;
      },
    };
  },
  Pe = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      o = t.nextPart.get(r),
      n = o ? Pe(e.slice(1), o) : void 0;
    if (n) return n;
    if (t.validators.length === 0) return;
    const l = e.join(le);
    return t.validators.find(({ validator: i }) => i(l))?.classGroupId;
  },
  ye = /^\[(.+)\]$/,
  eo = (e) => {
    if (ye.test(e)) {
      const t = ye.exec(e)[1],
        r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  oo = (e) => {
    const { theme: t, classGroups: r } = e,
      o = { nextPart: new Map(), validators: [] };
    for (const n in r) ne(r[n], o, n, t);
    return o;
  },
  ne = (e, t, r, o) => {
    e.forEach((n) => {
      if (typeof n == "string") {
        const l = n === "" ? t : ke(t, n);
        l.classGroupId = r;
        return;
      }
      if (typeof n == "function") {
        if (ro(n)) {
          ne(n(o), t, r, o);
          return;
        }
        t.validators.push({ validator: n, classGroupId: r });
        return;
      }
      Object.entries(n).forEach(([l, i]) => {
        ne(i, ke(t, l), r, o);
      });
    });
  },
  ke = (e, t) => {
    let r = e;
    return (
      t.split(le).forEach((o) => {
        (r.nextPart.has(o) ||
          r.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(o)));
      }),
      r
    );
  },
  ro = (e) => e.isThemeGetter,
  to = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      o = new Map();
    const n = (l, i) => {
      (r.set(l, i), t++, t > e && ((t = 0), (o = r), (r = new Map())));
    };
    return {
      get(l) {
        let i = r.get(l);
        if (i !== void 0) return i;
        if ((i = o.get(l)) !== void 0) return (n(l, i), i);
      },
      set(l, i) {
        r.has(l) ? r.set(l, i) : n(l, i);
      },
    };
  },
  se = "!",
  ae = ":",
  no = ae.length,
  so = (e) => {
    const { prefix: t, experimentalParseClassName: r } = e;
    let o = (n) => {
      const l = [];
      let i = 0,
        p = 0,
        d = 0,
        g;
      for (let k = 0; k < n.length; k++) {
        let v = n[k];
        if (i === 0 && p === 0) {
          if (v === ae) {
            (l.push(n.slice(d, k)), (d = k + no));
            continue;
          }
          if (v === "/") {
            g = k;
            continue;
          }
        }
        v === "[" ? i++ : v === "]" ? i-- : v === "(" ? p++ : v === ")" && p--;
      }
      const f = l.length === 0 ? n : n.substring(d),
        x = ao(f),
        z = x !== f,
        _ = g && g > d ? g - d : void 0;
      return {
        modifiers: l,
        hasImportantModifier: z,
        baseClassName: x,
        maybePostfixModifierPosition: _,
      };
    };
    if (t) {
      const n = t + ae,
        l = o;
      o = (i) =>
        i.startsWith(n)
          ? l(i.substring(n.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: i,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const n = o;
      o = (l) => r({ className: l, parseClassName: n });
    }
    return o;
  },
  ao = (e) =>
    e.endsWith(se)
      ? e.substring(0, e.length - 1)
      : e.startsWith(se)
        ? e.substring(1)
        : e,
  io = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const n = [];
      let l = [];
      return (
        o.forEach((i) => {
          i[0] === "[" || t[i] ? (n.push(...l.sort(), i), (l = [])) : l.push(i);
        }),
        n.push(...l.sort()),
        n
      );
    };
  },
  lo = (e) => ({
    cache: to(e.cacheSize),
    parseClassName: so(e),
    sortModifiers: io(e),
    ...Ze(e),
  }),
  co = /\s+/,
  mo = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: o,
        getConflictingClassGroupIds: n,
        sortModifiers: l,
      } = t,
      i = [],
      p = e.trim().split(co);
    let d = "";
    for (let g = p.length - 1; g >= 0; g -= 1) {
      const f = p[g],
        {
          isExternal: x,
          modifiers: z,
          hasImportantModifier: _,
          baseClassName: k,
          maybePostfixModifierPosition: v,
        } = r(f);
      if (x) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      let T = !!v,
        R = o(T ? k.substring(0, v) : k);
      if (!R) {
        if (!T) {
          d = f + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((R = o(k)), !R)) {
          d = f + (d.length > 0 ? " " + d : d);
          continue;
        }
        T = !1;
      }
      const $ = l(z).join(":"),
        B = _ ? $ + se : $,
        V = B + R;
      if (i.includes(V)) continue;
      i.push(V);
      const N = n(R, T);
      for (let P = 0; P < N.length; ++P) {
        const U = N[P];
        i.push(B + U);
      }
      d = f + (d.length > 0 ? " " + d : d);
    }
    return d;
  };
function uo() {
  let e = 0,
    t,
    r,
    o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ge(t)) && (o && (o += " "), (o += r));
  return o;
}
const Ge = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ge(e[o])) && (r && (r += " "), (r += t));
  return r;
};
function po(e, ...t) {
  let r,
    o,
    n,
    l = i;
  function i(d) {
    const g = t.reduce((f, x) => x(f), e());
    return ((r = lo(g)), (o = r.cache.get), (n = r.cache.set), (l = p), p(d));
  }
  function p(d) {
    const g = o(d);
    if (g) return g;
    const f = mo(d, r);
    return (n(d, f), f);
  }
  return function () {
    return l(uo.apply(null, arguments));
  };
}
const b = (e) => {
    const t = (r) => r[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Ee = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Te = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  fo = /^\d+\/\d+$/,
  go = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  bo =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ho = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  xo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  wo =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  F = (e) => fo.test(e),
  u = (e) => !!e && !Number.isNaN(Number(e)),
  M = (e) => !!e && Number.isInteger(Number(e)),
  re = (e) => e.endsWith("%") && u(e.slice(0, -1)),
  A = (e) => go.test(e),
  yo = () => !0,
  ko = (e) => bo.test(e) && !ho.test(e),
  Ve = () => !1,
  vo = (e) => xo.test(e),
  zo = (e) => wo.test(e),
  Co = (e) => !s(e) && !a(e),
  So = (e) => j(e, Fe, Ve),
  s = (e) => Ee.test(e),
  E = (e) => j(e, je, ko),
  te = (e) => j(e, Po, u),
  ve = (e) => j(e, Ne, Ve),
  Ao = (e) => j(e, Le, zo),
  K = (e) => j(e, Oe, vo),
  a = (e) => Te.test(e),
  W = (e) => O(e, je),
  Mo = (e) => O(e, Go),
  ze = (e) => O(e, Ne),
  Io = (e) => O(e, Fe),
  Ro = (e) => O(e, Le),
  Q = (e) => O(e, Oe, !0),
  j = (e, t, r) => {
    const o = Ee.exec(e);
    return o ? (o[1] ? t(o[1]) : r(o[2])) : !1;
  },
  O = (e, t, r = !1) => {
    const o = Te.exec(e);
    return o ? (o[1] ? t(o[1]) : r) : !1;
  },
  Ne = (e) => e === "position" || e === "percentage",
  Le = (e) => e === "image" || e === "url",
  Fe = (e) => e === "length" || e === "size" || e === "bg-size",
  je = (e) => e === "length",
  Po = (e) => e === "number",
  Go = (e) => e === "family-name",
  Oe = (e) => e === "shadow",
  Eo = () => {
    const e = b("color"),
      t = b("font"),
      r = b("text"),
      o = b("font-weight"),
      n = b("tracking"),
      l = b("leading"),
      i = b("breakpoint"),
      p = b("container"),
      d = b("spacing"),
      g = b("radius"),
      f = b("shadow"),
      x = b("inset-shadow"),
      z = b("text-shadow"),
      _ = b("drop-shadow"),
      k = b("blur"),
      v = b("perspective"),
      T = b("aspect"),
      R = b("ease"),
      $ = b("animate"),
      B = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      N = () => [...V(), a, s],
      P = () => ["auto", "hidden", "clip", "visible", "scroll"],
      U = () => ["auto", "contain", "none"],
      m = () => [a, s, d],
      C = () => [F, "full", "auto", ...m()],
      ce = () => [M, "none", "subgrid", a, s],
      de = () => ["auto", { span: ["full", M, a, s] }, M, a, s],
      D = () => [M, "auto", a, s],
      me = () => ["auto", "min", "max", "fr", a, s],
      Y = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      L = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      S = () => ["auto", ...m()],
      G = () => [
        F,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...m(),
      ],
      c = () => [e, a, s],
      ue = () => [...V(), ze, ve, { position: [a, s] }],
      pe = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      fe = () => ["auto", "cover", "contain", Io, So, { size: [a, s] }],
      Z = () => [re, W, E],
      w = () => ["", "none", "full", g, a, s],
      y = () => ["", u, W, E],
      J = () => ["solid", "dashed", "dotted", "double"],
      ge = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      h = () => [u, re, ze, ve],
      be = () => ["", "none", k, a, s],
      q = () => ["none", u, a, s],
      H = () => ["none", u, a, s],
      ee = () => [u, a, s],
      X = () => [F, "full", ...m()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [A],
        breakpoint: [A],
        color: [yo],
        container: [A],
        "drop-shadow": [A],
        ease: ["in", "out", "in-out"],
        font: [Co],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [A],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [A],
        shadow: [A],
        spacing: ["px", u],
        text: [A],
        "text-shadow": [A],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", F, s, a, T] }],
        container: ["container"],
        columns: [{ columns: [u, s, a, p] }],
        "break-after": [{ "break-after": B() }],
        "break-before": [{ "break-before": B() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: N() }],
        overflow: [{ overflow: P() }],
        "overflow-x": [{ "overflow-x": P() }],
        "overflow-y": [{ "overflow-y": P() }],
        overscroll: [{ overscroll: U() }],
        "overscroll-x": [{ "overscroll-x": U() }],
        "overscroll-y": [{ "overscroll-y": U() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: C() }],
        "inset-x": [{ "inset-x": C() }],
        "inset-y": [{ "inset-y": C() }],
        start: [{ start: C() }],
        end: [{ end: C() }],
        top: [{ top: C() }],
        right: [{ right: C() }],
        bottom: [{ bottom: C() }],
        left: [{ left: C() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [M, "auto", a, s] }],
        basis: [{ basis: [F, "full", "auto", p, ...m()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [u, F, "auto", "initial", "none", s] }],
        grow: [{ grow: ["", u, a, s] }],
        shrink: [{ shrink: ["", u, a, s] }],
        order: [{ order: [M, "first", "last", "none", a, s] }],
        "grid-cols": [{ "grid-cols": ce() }],
        "col-start-end": [{ col: de() }],
        "col-start": [{ "col-start": D() }],
        "col-end": [{ "col-end": D() }],
        "grid-rows": [{ "grid-rows": ce() }],
        "row-start-end": [{ row: de() }],
        "row-start": [{ "row-start": D() }],
        "row-end": [{ "row-end": D() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": me() }],
        "auto-rows": [{ "auto-rows": me() }],
        gap: [{ gap: m() }],
        "gap-x": [{ "gap-x": m() }],
        "gap-y": [{ "gap-y": m() }],
        "justify-content": [{ justify: [...Y(), "normal"] }],
        "justify-items": [{ "justify-items": [...L(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...L()] }],
        "align-content": [{ content: ["normal", ...Y()] }],
        "align-items": [{ items: [...L(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...L(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Y() }],
        "place-items": [{ "place-items": [...L(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...L()] }],
        p: [{ p: m() }],
        px: [{ px: m() }],
        py: [{ py: m() }],
        ps: [{ ps: m() }],
        pe: [{ pe: m() }],
        pt: [{ pt: m() }],
        pr: [{ pr: m() }],
        pb: [{ pb: m() }],
        pl: [{ pl: m() }],
        m: [{ m: S() }],
        mx: [{ mx: S() }],
        my: [{ my: S() }],
        ms: [{ ms: S() }],
        me: [{ me: S() }],
        mt: [{ mt: S() }],
        mr: [{ mr: S() }],
        mb: [{ mb: S() }],
        ml: [{ ml: S() }],
        "space-x": [{ "space-x": m() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": m() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        w: [{ w: [p, "screen", ...G()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [i] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", r, W, E] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, a, te] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              re,
              s,
            ],
          },
        ],
        "font-family": [{ font: [Mo, s, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [n, a, s] }],
        "line-clamp": [{ "line-clamp": [u, "none", a, te] }],
        leading: [{ leading: [l, ...m()] }],
        "list-image": [{ "list-image": ["none", a, s] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", a, s] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: c() }],
        "text-color": [{ text: c() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...J(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [u, "from-font", "auto", a, E] },
        ],
        "text-decoration-color": [{ decoration: c() }],
        "underline-offset": [{ "underline-offset": [u, "auto", a, s] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: m() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              a,
              s,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", a, s] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ue() }],
        "bg-repeat": [{ bg: pe() }],
        "bg-size": [{ bg: fe() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  M,
                  a,
                  s,
                ],
                radial: ["", a, s],
                conic: [M, a, s],
              },
              Ro,
              Ao,
            ],
          },
        ],
        "bg-color": [{ bg: c() }],
        "gradient-from-pos": [{ from: Z() }],
        "gradient-via-pos": [{ via: Z() }],
        "gradient-to-pos": [{ to: Z() }],
        "gradient-from": [{ from: c() }],
        "gradient-via": [{ via: c() }],
        "gradient-to": [{ to: c() }],
        rounded: [{ rounded: w() }],
        "rounded-s": [{ "rounded-s": w() }],
        "rounded-e": [{ "rounded-e": w() }],
        "rounded-t": [{ "rounded-t": w() }],
        "rounded-r": [{ "rounded-r": w() }],
        "rounded-b": [{ "rounded-b": w() }],
        "rounded-l": [{ "rounded-l": w() }],
        "rounded-ss": [{ "rounded-ss": w() }],
        "rounded-se": [{ "rounded-se": w() }],
        "rounded-ee": [{ "rounded-ee": w() }],
        "rounded-es": [{ "rounded-es": w() }],
        "rounded-tl": [{ "rounded-tl": w() }],
        "rounded-tr": [{ "rounded-tr": w() }],
        "rounded-br": [{ "rounded-br": w() }],
        "rounded-bl": [{ "rounded-bl": w() }],
        "border-w": [{ border: y() }],
        "border-w-x": [{ "border-x": y() }],
        "border-w-y": [{ "border-y": y() }],
        "border-w-s": [{ "border-s": y() }],
        "border-w-e": [{ "border-e": y() }],
        "border-w-t": [{ "border-t": y() }],
        "border-w-r": [{ "border-r": y() }],
        "border-w-b": [{ "border-b": y() }],
        "border-w-l": [{ "border-l": y() }],
        "divide-x": [{ "divide-x": y() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": y() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...J(), "hidden", "none"] }],
        "divide-style": [{ divide: [...J(), "hidden", "none"] }],
        "border-color": [{ border: c() }],
        "border-color-x": [{ "border-x": c() }],
        "border-color-y": [{ "border-y": c() }],
        "border-color-s": [{ "border-s": c() }],
        "border-color-e": [{ "border-e": c() }],
        "border-color-t": [{ "border-t": c() }],
        "border-color-r": [{ "border-r": c() }],
        "border-color-b": [{ "border-b": c() }],
        "border-color-l": [{ "border-l": c() }],
        "divide-color": [{ divide: c() }],
        "outline-style": [{ outline: [...J(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [u, a, s] }],
        "outline-w": [{ outline: ["", u, W, E] }],
        "outline-color": [{ outline: c() }],
        shadow: [{ shadow: ["", "none", f, Q, K] }],
        "shadow-color": [{ shadow: c() }],
        "inset-shadow": [{ "inset-shadow": ["none", x, Q, K] }],
        "inset-shadow-color": [{ "inset-shadow": c() }],
        "ring-w": [{ ring: y() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: c() }],
        "ring-offset-w": [{ "ring-offset": [u, E] }],
        "ring-offset-color": [{ "ring-offset": c() }],
        "inset-ring-w": [{ "inset-ring": y() }],
        "inset-ring-color": [{ "inset-ring": c() }],
        "text-shadow": [{ "text-shadow": ["none", z, Q, K] }],
        "text-shadow-color": [{ "text-shadow": c() }],
        opacity: [{ opacity: [u, a, s] }],
        "mix-blend": [
          { "mix-blend": [...ge(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ge() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [u] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": h() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": h() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": c() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": c() }],
        "mask-image-t-from-pos": [{ "mask-t-from": h() }],
        "mask-image-t-to-pos": [{ "mask-t-to": h() }],
        "mask-image-t-from-color": [{ "mask-t-from": c() }],
        "mask-image-t-to-color": [{ "mask-t-to": c() }],
        "mask-image-r-from-pos": [{ "mask-r-from": h() }],
        "mask-image-r-to-pos": [{ "mask-r-to": h() }],
        "mask-image-r-from-color": [{ "mask-r-from": c() }],
        "mask-image-r-to-color": [{ "mask-r-to": c() }],
        "mask-image-b-from-pos": [{ "mask-b-from": h() }],
        "mask-image-b-to-pos": [{ "mask-b-to": h() }],
        "mask-image-b-from-color": [{ "mask-b-from": c() }],
        "mask-image-b-to-color": [{ "mask-b-to": c() }],
        "mask-image-l-from-pos": [{ "mask-l-from": h() }],
        "mask-image-l-to-pos": [{ "mask-l-to": h() }],
        "mask-image-l-from-color": [{ "mask-l-from": c() }],
        "mask-image-l-to-color": [{ "mask-l-to": c() }],
        "mask-image-x-from-pos": [{ "mask-x-from": h() }],
        "mask-image-x-to-pos": [{ "mask-x-to": h() }],
        "mask-image-x-from-color": [{ "mask-x-from": c() }],
        "mask-image-x-to-color": [{ "mask-x-to": c() }],
        "mask-image-y-from-pos": [{ "mask-y-from": h() }],
        "mask-image-y-to-pos": [{ "mask-y-to": h() }],
        "mask-image-y-from-color": [{ "mask-y-from": c() }],
        "mask-image-y-to-color": [{ "mask-y-to": c() }],
        "mask-image-radial": [{ "mask-radial": [a, s] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": h() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": h() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": c() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": c() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": V() }],
        "mask-image-conic-pos": [{ "mask-conic": [u] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": h() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": h() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": c() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": c() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: ue() }],
        "mask-repeat": [{ mask: pe() }],
        "mask-size": [{ mask: fe() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", a, s] }],
        filter: [{ filter: ["", "none", a, s] }],
        blur: [{ blur: be() }],
        brightness: [{ brightness: [u, a, s] }],
        contrast: [{ contrast: [u, a, s] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Q, K] }],
        "drop-shadow-color": [{ "drop-shadow": c() }],
        grayscale: [{ grayscale: ["", u, a, s] }],
        "hue-rotate": [{ "hue-rotate": [u, a, s] }],
        invert: [{ invert: ["", u, a, s] }],
        saturate: [{ saturate: [u, a, s] }],
        sepia: [{ sepia: ["", u, a, s] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", a, s] }],
        "backdrop-blur": [{ "backdrop-blur": be() }],
        "backdrop-brightness": [{ "backdrop-brightness": [u, a, s] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u, a, s] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", u, a, s] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u, a, s] }],
        "backdrop-invert": [{ "backdrop-invert": ["", u, a, s] }],
        "backdrop-opacity": [{ "backdrop-opacity": [u, a, s] }],
        "backdrop-saturate": [{ "backdrop-saturate": [u, a, s] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", u, a, s] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": m() }],
        "border-spacing-x": [{ "border-spacing-x": m() }],
        "border-spacing-y": [{ "border-spacing-y": m() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              a,
              s,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [u, "initial", a, s] }],
        ease: [{ ease: ["linear", "initial", R, a, s] }],
        delay: [{ delay: [u, a, s] }],
        animate: [{ animate: ["none", $, a, s] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [v, a, s] }],
        "perspective-origin": [{ "perspective-origin": N() }],
        rotate: [{ rotate: q() }],
        "rotate-x": [{ "rotate-x": q() }],
        "rotate-y": [{ "rotate-y": q() }],
        "rotate-z": [{ "rotate-z": q() }],
        scale: [{ scale: H() }],
        "scale-x": [{ "scale-x": H() }],
        "scale-y": [{ "scale-y": H() }],
        "scale-z": [{ "scale-z": H() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ee() }],
        "skew-x": [{ "skew-x": ee() }],
        "skew-y": [{ "skew-y": ee() }],
        transform: [{ transform: [a, s, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: N() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: X() }],
        "translate-x": [{ "translate-x": X() }],
        "translate-y": [{ "translate-y": X() }],
        "translate-z": [{ "translate-z": X() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: c() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: c() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              a,
              s,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": m() }],
        "scroll-mx": [{ "scroll-mx": m() }],
        "scroll-my": [{ "scroll-my": m() }],
        "scroll-ms": [{ "scroll-ms": m() }],
        "scroll-me": [{ "scroll-me": m() }],
        "scroll-mt": [{ "scroll-mt": m() }],
        "scroll-mr": [{ "scroll-mr": m() }],
        "scroll-mb": [{ "scroll-mb": m() }],
        "scroll-ml": [{ "scroll-ml": m() }],
        "scroll-p": [{ "scroll-p": m() }],
        "scroll-px": [{ "scroll-px": m() }],
        "scroll-py": [{ "scroll-py": m() }],
        "scroll-ps": [{ "scroll-ps": m() }],
        "scroll-pe": [{ "scroll-pe": m() }],
        "scroll-pt": [{ "scroll-pt": m() }],
        "scroll-pr": [{ "scroll-pr": m() }],
        "scroll-pb": [{ "scroll-pb": m() }],
        "scroll-pl": [{ "scroll-pl": m() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", a, s] },
        ],
        fill: [{ fill: ["none", ...c()] }],
        "stroke-w": [{ stroke: [u, W, E, te] }],
        stroke: [{ stroke: ["none", ...c()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  To = po(Eo);
function Vo(...e) {
  return To(Ye(e));
}
function jo({
  value: e,
  startValue: t = 0,
  direction: r = "up",
  delay: o = 0,
  className: n,
  decimalPlaces: l = 0,
  ...i
}) {
  const p = I.useRef(null),
    d = ie(r === "down" ? e : t),
    g = Qe(d, { damping: 60, stiffness: 100 }),
    f = Je(p, { once: !0, margin: "0px" });
  return (
    I.useEffect(() => {
      if (f) {
        const x = setTimeout(() => {
          d.set(r === "down" ? t : e);
        }, o * 1e3);
        return () => clearTimeout(x);
      }
    }, [d, f, o, e, r, t]),
    I.useEffect(
      () =>
        g.on("change", (x) => {
          p.current &&
            (p.current.textContent = Intl.NumberFormat("en-US", {
              minimumFractionDigits: l,
              maximumFractionDigits: l,
            }).format(Number(x.toFixed(l))));
        }),
      [g, l],
    ),
    _e.jsx("span", {
      ref: p,
      className: Vo(
        "inline-block tracking-wider text-black tabular-nums dark:text-white",
        n,
      ),
      ...i,
      children: t,
    })
  );
}
export { jo as NumberTicker };
