import { r as O } from "./index.RH_Wq4ov.js";
function os(e) {
  const t = O.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Ue = typeof window < "u",
  as = Ue ? O.useLayoutEffect : O.useEffect;
function Ge(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Le(e, t) {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}
const V = (e, t, s) => (s > t ? t : s < e ? e : s);
let Te = () => {};
const q = {},
  Z = (e) => e,
  qe = (e, t) => (s) => t(e(s)),
  ie = (...e) => e.reduce(qe),
  ve = (e, t, s) => {
    const r = t - e;
    return r === 0 ? 1 : (s - e) / r;
  };
class We {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Ge(this.subscriptions, t), () => Le(this.subscriptions, t));
  }
  notify(t, s, r) {
    const n = this.subscriptions.length;
    if (n)
      if (n === 1) this.subscriptions[0](t, s, r);
      else
        for (let i = 0; i < n; i++) {
          const o = this.subscriptions[i];
          o && o(t, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const H = (e) => e * 1e3,
  C = (e) => e / 1e3;
function xe(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Me = (e, t, s) =>
    (((1 - 3 * s + 3 * t) * e + (3 * s - 6 * t)) * e + 3 * t) * e,
  _e = 1e-7,
  $e = 12;
function ze(e, t, s, r, n) {
  let i,
    o,
    a = 0;
  do ((o = t + (s - t) / 2), (i = Me(o, r, n) - e), i > 0 ? (s = o) : (t = o));
  while (Math.abs(i) > _e && ++a < $e);
  return o;
}
function K(e, t, s, r) {
  if (e === t && s === r) return Z;
  const n = (i) => ze(i, 0, 1, e, s);
  return (i) => (i === 0 || i === 1 ? i : Me(n(i), t, r));
}
const De = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Ae = (e) => (t) => 1 - e(1 - t),
  we = K(0.33, 1.53, 0.69, 0.99),
  oe = Ae(we),
  je = De(oe),
  Ze = (e) =>
    (e *= 2) < 1 ? 0.5 * oe(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ae = (e) => 1 - Math.sin(Math.acos(e)),
  He = Ae(ae),
  Je = De(ae),
  Xe = K(0.42, 0, 1, 1),
  Qe = K(0, 0, 0.58, 1),
  Fe = K(0.42, 0, 0.58, 1),
  Ye = (e) => Array.isArray(e) && typeof e[0] != "number",
  et = (e) => Array.isArray(e) && typeof e[0] == "number",
  tt = {
    linear: Z,
    easeIn: Xe,
    easeInOut: Fe,
    easeOut: Qe,
    circIn: ae,
    circInOut: Je,
    circOut: He,
    backIn: oe,
    backInOut: je,
    backOut: we,
    anticipate: Ze,
  },
  st = (e) => typeof e == "string",
  fe = (e) => {
    if (et(e)) {
      Te(e.length === 4);
      const [t, s, r, n] = e;
      return K(t, s, r, n);
    } else if (st(e)) return tt[e];
    return e;
  },
  G = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function nt(e, t) {
  let s = new Set(),
    r = new Set(),
    n = !1,
    i = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (o.has(c) && (u.schedule(c), e()), c(a));
  }
  const u = {
    schedule: (c, f = !1, p = !1) => {
      const T = p && n ? s : r;
      return (f && o.add(c), T.has(c) || T.add(c), c);
    },
    cancel: (c) => {
      (r.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((a = c), n)) {
        i = !0;
        return;
      }
      ((n = !0),
        ([s, r] = [r, s]),
        s.forEach(l),
        s.clear(),
        (n = !1),
        i && ((i = !1), u.process(c)));
    },
  };
  return u;
}
const rt = 40;
function it(e, t) {
  let s = !1,
    r = !0;
  const n = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (s = !0),
    o = G.reduce((g, x) => ((g[x] = nt(i)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: p,
      render: A,
      postRender: T,
    } = o,
    m = () => {
      const g = q.useManualTiming ? n.timestamp : performance.now();
      ((s = !1),
        q.useManualTiming ||
          (n.delta = r ? 1e3 / 60 : Math.max(Math.min(g - n.timestamp, rt), 1)),
        (n.timestamp = g),
        (n.isProcessing = !0),
        a.process(n),
        l.process(n),
        u.process(n),
        c.process(n),
        f.process(n),
        p.process(n),
        A.process(n),
        T.process(n),
        (n.isProcessing = !1),
        s && t && ((r = !1), e(m)));
    },
    M = () => {
      ((s = !0), (r = !0), n.isProcessing || e(m));
    };
  return {
    schedule: G.reduce((g, x) => {
      const h = o[x];
      return (
        (g[x] = (b, D = !1, d = !1) => (s || M(), h.schedule(b, D, d))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let x = 0; x < G.length; x++) o[G[x]].cancel(g);
    },
    state: n,
    steps: o,
  };
}
const {
  schedule: Se,
  cancel: ot,
  state: W,
  steps: cs,
} = it(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Z, !0);
let L;
function at() {
  L = void 0;
}
const k = {
    now: () => (
      L === void 0 &&
        k.set(
          W.isProcessing || q.useManualTiming ? W.timestamp : performance.now(),
        ),
      L
    ),
    set: (e) => {
      ((L = e), queueMicrotask(at));
    },
  },
  ke = (e) => (t) => typeof t == "string" && t.startsWith(e),
  ls = ke("--"),
  ct = ke("var(--"),
  lt = (e) => (ct(e) ? ut.test(e.split("/*")[0].trim()) : !1),
  ut =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ce = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ee = { ...ce, transform: (e) => V(0, 1, e) },
  us = { ...ce, default: 1 },
  R = (e) => Math.round(e * 1e5) / 1e5,
  Ie = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ht(e) {
  return e == null;
}
const ft =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  le = (e, t) => (s) =>
    !!(
      (typeof s == "string" && ft.test(s) && s.startsWith(e)) ||
      (t && !ht(s) && Object.prototype.hasOwnProperty.call(s, t))
    ),
  Ce = (e, t, s) => (r) => {
    if (typeof r != "string") return r;
    const [n, i, o, a] = r.match(Ie);
    return {
      [e]: parseFloat(n),
      [t]: parseFloat(i),
      [s]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  dt = (e) => V(0, 255, e),
  X = { ...ce, transform: (e) => Math.round(dt(e)) },
  I = {
    test: le("rgb", "red"),
    parse: Ce("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: s, alpha: r = 1 }) =>
      "rgba(" +
      X.transform(e) +
      ", " +
      X.transform(t) +
      ", " +
      X.transform(s) +
      ", " +
      R(Ee.transform(r)) +
      ")",
  };
function pt(e) {
  let t = "",
    s = "",
    r = "",
    n = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (s = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (n = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (s = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (n = e.substring(4, 5)),
        (t += t),
        (s += s),
        (r += r),
        (n += n)),
    {
      red: parseInt(t, 16),
      green: parseInt(s, 16),
      blue: parseInt(r, 16),
      alpha: n ? parseInt(n, 16) / 255 : 1,
    }
  );
}
const te = { test: le("#"), parse: pt, transform: I.transform },
  U = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  hs = U("deg"),
  N = U("%"),
  fs = U("px"),
  ds = U("vh"),
  ps = U("vw"),
  ms = {
    ...N,
    parse: (e) => N.parse(e) / 100,
    transform: (e) => N.transform(e * 100),
  },
  P = {
    test: le("hsl", "hue"),
    parse: Ce("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: s, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      N.transform(R(t)) +
      ", " +
      N.transform(R(s)) +
      ", " +
      R(Ee.transform(r)) +
      ")",
  },
  E = {
    test: (e) => I.test(e) || te.test(e) || P.test(e),
    parse: (e) =>
      I.test(e) ? I.parse(e) : P.test(e) ? P.parse(e) : te.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? I.transform(e)
          : P.transform(e),
    getAnimatableNone: (e) => {
      const t = E.parse(e);
      return ((t.alpha = 0), E.transform(t));
    },
  },
  mt =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function gt(e) {
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (e.match(Ie)?.length || 0) + (e.match(mt)?.length || 0) > 0
  );
}
const Ve = "number",
  Pe = "color",
  yt = "var",
  bt = "var(",
  de = "${}",
  Tt =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _(e) {
  const t = e.toString(),
    s = [],
    r = { color: [], number: [], var: [] },
    n = [];
  let i = 0;
  const a = t
    .replace(
      Tt,
      (l) => (
        E.test(l)
          ? (r.color.push(i), n.push(Pe), s.push(E.parse(l)))
          : l.startsWith(bt)
            ? (r.var.push(i), n.push(yt), s.push(l))
            : (r.number.push(i), n.push(Ve), s.push(parseFloat(l))),
        ++i,
        de
      ),
    )
    .split(de);
  return { values: s, split: a, indexes: r, types: n };
}
function Oe(e) {
  return _(e).values;
}
function Re(e) {
  const { split: t, types: s } = _(e),
    r = t.length;
  return (n) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), n[o] !== void 0)) {
        const a = s[o];
        a === Ve
          ? (i += R(n[o]))
          : a === Pe
            ? (i += E.transform(n[o]))
            : (i += n[o]);
      }
    return i;
  };
}
const vt = (e) =>
  typeof e == "number" ? 0 : E.test(e) ? E.getAnimatableNone(e) : e;
function xt(e) {
  const t = Oe(e);
  return Re(e)(t.map(vt));
}
const Mt = {
  test: gt,
  parse: Oe,
  createTransformer: Re,
  getAnimatableNone: xt,
};
function Q(e, t, s) {
  return (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? e + (t - e) * 6 * s
      : s < 1 / 2
        ? t
        : s < 2 / 3
          ? e + (t - e) * (2 / 3 - s) * 6
          : e
  );
}
function Dt({ hue: e, saturation: t, lightness: s, alpha: r }) {
  ((e /= 360), (t /= 100), (s /= 100));
  let n = 0,
    i = 0,
    o = 0;
  if (!t) n = i = o = s;
  else {
    const a = s < 0.5 ? s * (1 + t) : s + t - s * t,
      l = 2 * s - a;
    ((n = Q(l, a, e + 1 / 3)), (i = Q(l, a, e)), (o = Q(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function $(e, t) {
  return (s) => (s > 0 ? t : e);
}
const J = (e, t, s) => e + (t - e) * s,
  Y = (e, t, s) => {
    const r = e * e,
      n = s * (t * t - r) + r;
    return n < 0 ? 0 : Math.sqrt(n);
  },
  At = [te, I, P],
  wt = (e) => At.find((t) => t.test(e));
function pe(e) {
  const t = wt(e);
  if (!t) return !1;
  let s = t.parse(e);
  return (t === P && (s = Dt(s)), s);
}
const me = (e, t) => {
    const s = pe(e),
      r = pe(t);
    if (!s || !r) return $(e, t);
    const n = { ...s };
    return (i) => (
      (n.red = Y(s.red, r.red, i)),
      (n.green = Y(s.green, r.green, i)),
      (n.blue = Y(s.blue, r.blue, i)),
      (n.alpha = J(s.alpha, r.alpha, i)),
      I.transform(n)
    );
  },
  se = new Set(["none", "hidden"]);
function Ft(e, t) {
  return se.has(e) ? (s) => (s <= 0 ? e : t) : (s) => (s >= 1 ? t : e);
}
function St(e, t) {
  return (s) => J(e, t, s);
}
function ue(e) {
  return typeof e == "number"
    ? St
    : typeof e == "string"
      ? lt(e)
        ? $
        : E.test(e)
          ? me
          : It
      : Array.isArray(e)
        ? Ne
        : typeof e == "object"
          ? E.test(e)
            ? me
            : kt
          : $;
}
function Ne(e, t) {
  const s = [...e],
    r = s.length,
    n = e.map((i, o) => ue(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) s[o] = n[o](i);
    return s;
  };
}
function kt(e, t) {
  const s = { ...e, ...t },
    r = {};
  for (const n in s)
    e[n] !== void 0 && t[n] !== void 0 && (r[n] = ue(e[n])(e[n], t[n]));
  return (n) => {
    for (const i in r) s[i] = r[i](n);
    return s;
  };
}
function Et(e, t) {
  const s = [],
    r = { color: 0, var: 0, number: 0 };
  for (let n = 0; n < t.values.length; n++) {
    const i = t.types[n],
      o = e.indexes[i][r[i]],
      a = e.values[o] ?? 0;
    ((s[n] = a), r[i]++);
  }
  return s;
}
const It = (e, t) => {
  const s = Mt.createTransformer(t),
    r = _(e),
    n = _(t);
  return r.indexes.var.length === n.indexes.var.length &&
    r.indexes.color.length === n.indexes.color.length &&
    r.indexes.number.length >= n.indexes.number.length
    ? (se.has(e) && !n.values.length) || (se.has(t) && !r.values.length)
      ? Ft(e, t)
      : ie(Ne(Et(r, n), n.values), s)
    : $(e, t);
};
function Be(e, t, s) {
  return typeof e == "number" && typeof t == "number" && typeof s == "number"
    ? J(e, t, s)
    : ue(e)(e, t);
}
const Ct = (e) => {
    const t = ({ timestamp: s }) => e(s);
    return {
      start: (s = !0) => Se.update(t, s),
      stop: () => ot(t),
      now: () => (W.isProcessing ? W.timestamp : k.now()),
    };
  },
  Vt = (e, t, s = 10) => {
    let r = "";
    const n = Math.max(Math.round(t / s), 2);
    for (let i = 0; i < n; i++)
      r += Math.round(e(i / (n - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  z = 2e4;
function he(e) {
  let t = 0;
  const s = 50;
  let r = e.next(t);
  for (; !r.done && t < z; ) ((t += s), (r = e.next(t)));
  return t >= z ? 1 / 0 : t;
}
function Pt(e, t = 100, s) {
  const r = s({ ...e, keyframes: [0, t] }),
    n = Math.min(he(r), z);
  return {
    type: "keyframes",
    ease: (i) => r.next(n * i).value / t,
    duration: C(n),
  };
}
const Ot = 5;
function Ke(e, t, s) {
  const r = Math.max(t - Ot, 0);
  return xe(s - e(r), t - r);
}
const y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  ee = 0.001;
function Rt({
  duration: e = y.duration,
  bounce: t = y.bounce,
  velocity: s = y.velocity,
  mass: r = y.mass,
}) {
  let n,
    i,
    o = 1 - t;
  ((o = V(y.minDamping, y.maxDamping, o)),
    (e = V(y.minDuration, y.maxDuration, C(e))),
    o < 1
      ? ((n = (u) => {
          const c = u * o,
            f = c * e,
            p = c - s,
            A = ne(u, o),
            T = Math.exp(-f);
          return ee - (p / A) * T;
        }),
        (i = (u) => {
          const f = u * o * e,
            p = f * s + s,
            A = Math.pow(o, 2) * Math.pow(u, 2) * e,
            T = Math.exp(-f),
            m = ne(Math.pow(u, 2), o);
          return ((-n(u) + ee > 0 ? -1 : 1) * ((p - A) * T)) / m;
        }))
      : ((n = (u) => {
          const c = Math.exp(-u * e),
            f = (u - s) * e + 1;
          return -ee + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (s - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = Bt(n, i, a);
  if (((e = H(e)), isNaN(l)))
    return { stiffness: y.stiffness, damping: y.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Nt = 12;
function Bt(e, t, s) {
  let r = s;
  for (let n = 1; n < Nt; n++) r = r - e(r) / t(r);
  return r;
}
function ne(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Kt = ["duration", "bounce"],
  Ut = ["stiffness", "damping", "mass"];
function ge(e, t) {
  return t.some((s) => e[s] !== void 0);
}
function Gt(e) {
  let t = {
    velocity: y.velocity,
    stiffness: y.stiffness,
    damping: y.damping,
    mass: y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ge(e, Ut) && ge(e, Kt))
    if (e.visualDuration) {
      const s = e.visualDuration,
        r = (2 * Math.PI) / (s * 1.2),
        n = r * r,
        i = 2 * V(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
      t = { ...t, mass: y.mass, stiffness: n, damping: i };
    } else {
      const s = Rt(e);
      ((t = { ...t, ...s, mass: y.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function j(e = y.visualDuration, t = y.bounce) {
  const s =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: n } = s;
  const i = s.keyframes[0],
    o = s.keyframes[s.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: p,
      isResolvedFromDuration: A,
    } = Gt({ ...s, velocity: -C(s.velocity || 0) }),
    T = p || 0,
    m = u / (2 * Math.sqrt(l * c)),
    M = o - i,
    v = C(Math.sqrt(l / c)),
    F = Math.abs(M) < 5;
  (r || (r = F ? y.restSpeed.granular : y.restSpeed.default),
    n || (n = F ? y.restDelta.granular : y.restDelta.default));
  let g;
  if (m < 1) {
    const h = ne(v, m);
    g = (b) => {
      const D = Math.exp(-m * v * b);
      return (
        o - D * (((T + m * v * M) / h) * Math.sin(h * b) + M * Math.cos(h * b))
      );
    };
  } else if (m === 1) g = (h) => o - Math.exp(-v * h) * (M + (T + v * M) * h);
  else {
    const h = v * Math.sqrt(m * m - 1);
    g = (b) => {
      const D = Math.exp(-m * v * b),
        d = Math.min(h * b, 300);
      return (
        o - (D * ((T + m * v * M) * Math.sinh(d) + h * M * Math.cosh(d))) / h
      );
    };
  }
  const x = {
    calculatedDuration: (A && f) || null,
    next: (h) => {
      const b = g(h);
      if (A) a.done = h >= f;
      else {
        let D = h === 0 ? T : 0;
        m < 1 && (D = h === 0 ? H(T) : Ke(g, h, b));
        const d = Math.abs(D) <= r,
          w = Math.abs(o - b) <= n;
        a.done = d && w;
      }
      return ((a.value = a.done ? o : b), a);
    },
    toString: () => {
      const h = Math.min(he(x), z),
        b = Vt((D) => x.next(h * D).value, h, 30);
      return h + "ms " + b;
    },
    toTransition: () => {},
  };
  return x;
}
j.applyToOptions = (e) => {
  const t = Pt(e, 100, j);
  return (
    (e.ease = t.ease),
    (e.duration = H(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
function re({
  keyframes: e,
  velocity: t = 0,
  power: s = 0.8,
  timeConstant: r = 325,
  bounceDamping: n = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    p = { done: !1, value: f },
    A = (d) => (a !== void 0 && d < a) || (l !== void 0 && d > l),
    T = (d) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - d) < Math.abs(l - d)
          ? a
          : l;
  let m = s * t;
  const M = f + m,
    v = o === void 0 ? M : o(M);
  v !== M && (m = v - f);
  const F = (d) => -m * Math.exp(-d / r),
    g = (d) => v + F(d),
    x = (d) => {
      const w = F(d),
        S = g(d);
      ((p.done = Math.abs(w) <= u), (p.value = p.done ? v : S));
    };
  let h, b;
  const D = (d) => {
    A(p.value) &&
      ((h = d),
      (b = j({
        keyframes: [p.value, T(p.value)],
        velocity: Ke(g, d, p.value),
        damping: n,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (d) => {
        let w = !1;
        return (
          !b && h === void 0 && ((w = !0), x(d), D(d)),
          h !== void 0 && d >= h ? b.next(d - h) : (!w && x(d), p)
        );
      },
    }
  );
}
function Lt(e, t, s) {
  const r = [],
    n = s || q.mix || Be,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = n(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Z : t;
      a = ie(l, a);
    }
    r.push(a);
  }
  return r;
}
function qt(e, t, { clamp: s = !0, ease: r, mixer: n } = {}) {
  const i = e.length;
  if ((Te(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Lt(t, r, n),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const p = ve(e[f], e[f + 1], c);
      return a[f](p);
    };
  return s ? (c) => u(V(e[0], e[i - 1], c)) : u;
}
function Wt(e, t) {
  const s = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const n = ve(0, t, r);
    e.push(J(s, 1, n));
  }
}
function _t(e) {
  const t = [0];
  return (Wt(t, e.length - 1), t);
}
function $t(e, t) {
  return e.map((s) => s * t);
}
function zt(e, t) {
  return e.map(() => t || Fe).splice(0, e.length - 1);
}
function B({
  duration: e = 300,
  keyframes: t,
  times: s,
  ease: r = "easeInOut",
}) {
  const n = Ye(r) ? r.map(fe) : fe(r),
    i = { done: !1, value: t[0] },
    o = $t(s && s.length === t.length ? s : _t(t), e),
    a = qt(o, t, { ease: Array.isArray(n) ? n : zt(t, n) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const jt = (e) => e !== null;
function Zt(e, { repeat: t, repeatType: s = "loop" }, r, n = 1) {
  const i = e.filter(jt),
    a = n < 0 || (t && s !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const Ht = { decay: re, inertia: re, tween: B, keyframes: B, spring: j };
function Jt(e) {
  typeof e.type == "string" && (e.type = Ht[e.type]);
}
class Xt {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, s) {
    return this.finished.then(t, s);
  }
}
const Qt = (e) => e / 100;
class gs extends Xt {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: s } = this.options;
        (s && s.updatedAt !== k.now() && this.tick(k.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Jt(t);
    const {
      type: s = B,
      repeat: r = 0,
      repeatDelay: n = 0,
      repeatType: i,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = s || B;
    l !== B &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = ie(Qt, Be(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (i === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = he(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + n),
      (this.totalDuration = this.resolvedDuration * (r + 1) - n),
      (this.generator = u));
  }
  updateTime(t) {
    const s = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = s);
  }
  tick(t, s = !1) {
    const {
      generator: r,
      totalDuration: n,
      mixKeyframes: i,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: p,
      repeatDelay: A,
      type: T,
      onUpdate: m,
      finalKeyframe: M,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - n / this.speed, this.startTime)),
      s ? (this.currentTime = t) : this.updateTime(t));
    const v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      F = this.playbackSpeed >= 0 ? v < 0 : v > n;
    ((this.currentTime = Math.max(v, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = n));
    let g = this.currentTime,
      x = r;
    if (f) {
      const d = Math.min(this.currentTime, n) / a;
      let w = Math.floor(d),
        S = d % 1;
      (!S && d >= 1 && (S = 1),
        S === 1 && w--,
        (w = Math.min(w, f + 1)),
        !!(w % 2) &&
          (p === "reverse"
            ? ((S = 1 - S), A && (S -= A / a))
            : p === "mirror" && (x = o)),
        (g = V(0, 1, S) * a));
    }
    const h = F ? { done: !1, value: c[0] } : x.next(g);
    i && (h.value = i(h.value));
    let { done: b } = h;
    !F &&
      l !== null &&
      (b =
        this.playbackSpeed >= 0
          ? this.currentTime >= n
          : this.currentTime <= 0);
    const D =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && b));
    return (
      D && T !== re && (h.value = Zt(c, this.options, M, this.speed)),
      m && m(h.value),
      D && this.finish(),
      h
    );
  }
  then(t, s) {
    return this.finished.then(t, s);
  }
  get duration() {
    return C(this.calculatedDuration);
  }
  get time() {
    return C(this.currentTime);
  }
  set time(t) {
    ((t = H(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(k.now());
    const s = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), s && (this.time = C(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: t = Ct, startTime: s } = this.options;
    (this.driver || (this.driver = t((n) => this.tick(n))),
      this.options.onPlay?.());
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = s ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(k.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      t.observe(this)
    );
  }
}
function Yt(e, t, s) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const n = document.querySelectorAll(e);
    return n ? Array.from(n) : [];
  }
  return Array.from(e);
}
const ye = 30,
  es = (e) => !isNaN(parseFloat(e)),
  be = { current: void 0 };
class ts {
  constructor(t, s = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        const n = k.now();
        if (
          (this.updatedAt !== n && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const i of this.dependents) i.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = s.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = k.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = es(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, s) {
    this.events[t] || (this.events[t] = new We());
    const r = this.events[t].add(s);
    return t === "change"
      ? () => {
          (r(),
            Se.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, s) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = s));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, s, r) {
    (this.set(s),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, s = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      s && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return (be.current && be.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = k.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > ye
    )
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, ye);
    return xe(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((s) => {
        ((this.hasAnimated = !0),
          (this.animation = t(s)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ys(e, t) {
  return new ts(e, t);
}
const bs = (e) => !!(e && e.getVelocity),
  Ts = O.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  ss = { some: 0, all: 1 };
function ns(e, t, { root: s, margin: r, amount: n = "some" } = {}) {
  const i = Yt(e),
    o = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const f = o.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const p = t(c.target, c);
            typeof p == "function" ? o.set(c.target, p) : l.unobserve(c.target);
          } else typeof f == "function" && (f(c), o.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: s,
      rootMargin: r,
      threshold: typeof n == "number" ? n : ss[n],
    });
  return (i.forEach((u) => l.observe(u)), () => l.disconnect());
}
function vs(
  e,
  { root: t, margin: s, amount: r, once: n = !1, initial: i = !1 } = {},
) {
  const [o, a] = O.useState(i);
  return (
    O.useEffect(() => {
      if (!e.current || (n && o)) return;
      const l = () => (a(!0), n ? void 0 : () => a(!1)),
        u = { root: (t && t.current) || void 0, margin: s, amount: r };
      return ns(e.current, l, u);
    }, [t, e, s, n, r]),
    o
  );
}
export {
  N as A,
  hs as B,
  ps as C,
  ds as D,
  Ie as E,
  ms as F,
  Ee as G,
  us as H,
  E as I,
  gs as J,
  _ as K,
  it as L,
  Ts as M,
  Yt as N,
  ls as O,
  Ue as P,
  J as Q,
  W as R,
  We as S,
  ie as T,
  ve as U,
  V,
  Xt as W,
  Ge as X,
  Le as Y,
  He as Z,
  cs as _,
  bs as a,
  as as b,
  ot as c,
  be as d,
  vs as e,
  Se as f,
  Vt as g,
  et as h,
  qt as i,
  Te as j,
  Zt as k,
  C as l,
  ys as m,
  ce as n,
  Z as o,
  fs as p,
  Je as q,
  je as r,
  H as s,
  Ze as t,
  os as u,
  Jt as v,
  Mt as w,
  k as x,
  q as y,
  lt as z,
};
