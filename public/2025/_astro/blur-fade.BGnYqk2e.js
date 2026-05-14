import { j as O } from "./jsx-runtime.D_zvdyIk.js";
import { r as p } from "./index.RH_Wq4ov.js";
import {
  n as fe,
  p as y,
  f as S,
  g as us,
  h as cs,
  W as $n,
  j as hs,
  k as Hn,
  l as Gt,
  s as st,
  o as W,
  q as fs,
  r as ds,
  t as ms,
  v as ps,
  J as de,
  w as Z,
  x as gt,
  y as yt,
  z as zn,
  A as vt,
  B as U,
  C as gs,
  D as ys,
  E as vs,
  F as ke,
  G as Xt,
  H as Vt,
  I as k,
  K as xs,
  L as Ts,
  N as Ps,
  M as me,
  u as pe,
  b as Gn,
  O as ge,
  a as D,
  P as Xn,
  Q as w,
  m as rt,
  c as q,
  S as Yn,
  R,
  T as _n,
  U as Yt,
  V as Zn,
  X as qn,
  Y as Jn,
  Z as Ss,
  _ as It,
  e as Vs,
} from "./use-in-view.BpDTmf6i.js";
const ye = p.createContext({}),
  Rt = p.createContext(null),
  Qn = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function ti(t) {
  return typeof t == "object" && t !== null;
}
const ei = (t) => /^0[^.\s]+$/u.test(t);
function ve(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
function ws(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const X = (t) => (t * 180) / Math.PI,
  _t = (t) => {
    const e = X(Math.atan2(t[1], t[0]));
    return Zt(e);
  },
  As = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: _t,
    rotateZ: _t,
    skewX: (t) => X(Math.atan(t[1])),
    skewY: (t) => X(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Zt = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  Fe = _t,
  Oe = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  Ne = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  Cs = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Oe,
    scaleY: Ne,
    scale: (t) => (Oe(t) + Ne(t)) / 2,
    rotateX: (t) => Zt(X(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Zt(X(Math.atan2(-t[2], t[0]))),
    rotateZ: Fe,
    rotate: Fe,
    skewX: (t) => X(Math.atan(t[4])),
    skewY: (t) => X(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function qt(t) {
  return t.includes("scale") ? 1 : 0;
}
function Jt(t, e) {
  if (!t || t === "none") return qt(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let i, s;
  if (n) ((i = Cs), (s = n));
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((i = As), (s = a));
  }
  if (!s) return qt(e);
  const r = i[e],
    o = s[1].split(",").map(Ds);
  return typeof r == "function" ? r(o) : o[r];
}
const bs = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Jt(n, e);
};
function Ds(t) {
  return parseFloat(t.trim());
}
const lt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ut = new Set(lt),
  Ue = (t) => t === fe || t === y,
  Ms = new Set(["x", "y", "z"]),
  Es = lt.filter((t) => !Ms.has(t));
function Rs(t) {
  const e = [];
  return (
    Es.forEach((n) => {
      const i = t.getValue(n);
      i !== void 0 &&
        (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const Y = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => Jt(e, "x"),
  y: (t, { transform: e }) => Jt(e, "y"),
};
Y.translateX = Y.x;
Y.translateY = Y.y;
const _ = new Set();
let Qt = !1,
  te = !1,
  ee = !1;
function ni() {
  if (te) {
    const t = Array.from(_).filter((i) => i.needsMeasurement),
      e = new Set(t.map((i) => i.element)),
      n = new Map();
    (e.forEach((i) => {
      const s = Rs(i);
      s.length && (n.set(i, s), i.render());
    }),
      t.forEach((i) => i.measureInitialState()),
      e.forEach((i) => {
        i.render();
        const s = n.get(i);
        s &&
          s.forEach(([r, o]) => {
            i.getValue(r)?.set(o);
          });
      }),
      t.forEach((i) => i.measureEndState()),
      t.forEach((i) => {
        i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
      }));
  }
  ((te = !1), (Qt = !1), _.forEach((t) => t.complete(ee)), _.clear());
}
function ii() {
  _.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (te = !0));
  });
}
function Ls() {
  ((ee = !0), ii(), ni(), (ee = !1));
}
class xe {
  constructor(e, n, i, s, r, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = i),
      (this.motionValue = s),
      (this.element = r),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (_.add(this), Qt || ((Qt = !0), S.read(ii), S.resolveKeyframes(ni)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: i,
      motionValue: s,
    } = this;
    if (e[0] === null) {
      const r = s?.get(),
        o = e[e.length - 1];
      if (r !== void 0) e[0] = r;
      else if (i && n) {
        const a = i.readValue(n, o);
        a != null && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = o), s && r === void 0 && s.set(e[0]));
    }
    ws(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      _.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (_.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Bs = (t) => t.startsWith("--");
function js(t, e, n) {
  Bs(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const Is = ve(() => window.ScrollTimeline !== void 0),
  ks = {};
function Fs(t, e) {
  const n = ve(t);
  return () => ks[e] ?? n();
}
const si = Fs(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ft = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
  We = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ft([0, 0.65, 0.55, 1]),
    circOut: ft([0.55, 0, 1, 0.45]),
    backIn: ft([0.31, 0.01, 0.66, -0.59]),
    backOut: ft([0.33, 1.53, 0.69, 0.99]),
  };
function oi(t, e) {
  if (t)
    return typeof t == "function"
      ? si()
        ? us(t, e)
        : "ease-out"
      : cs(t)
        ? ft(t)
        : Array.isArray(t)
          ? t.map((n) => oi(n, e) || We.easeOut)
          : We[t];
}
function Os(
  t,
  e,
  n,
  {
    delay: i = 0,
    duration: s = 300,
    repeat: r = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0,
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const h = oi(a, s);
  Array.isArray(h) && (u.easing = h);
  const f = {
    delay: i,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: r + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (c && (f.pseudoElement = c), t.animate(u, f));
}
function ri(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Ns({ type: t, ...e }) {
  return ri(t) && si()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Us extends $n {
  constructor(e) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !e))
      return;
    const {
      element: n,
      name: i,
      keyframes: s,
      pseudoElement: r,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!r),
      (this.allowFlatten = o),
      (this.options = e),
      hs(typeof e.type != "string"));
    const c = Ns(e);
    ((this.animation = Os(n, i, s, c, r)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !r)) {
          const u = Hn(s, this.options, a, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(u) : js(n, i, u),
            this.animation.cancel());
        }
        (l?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Gt(Number(e));
  }
  get time() {
    return Gt(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    ((this.finishedTime = null), (this.animation.currentTime = st(e)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, observe: n }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      e && Is() ? ((this.animation.timeline = e), W) : n(this)
    );
  }
}
const ai = { anticipate: ms, backInOut: ds, circInOut: fs };
function Ws(t) {
  return t in ai;
}
function Ks(t) {
  typeof t.ease == "string" && Ws(t.ease) && (t.ease = ai[t.ease]);
}
const Ke = 10;
class $s extends Us {
  constructor(e) {
    (Ks(e),
      ps(e),
      super(e),
      e.startTime && (this.startTime = e.startTime),
      (this.options = e));
  }
  updateMotionValue(e) {
    const {
      motionValue: n,
      onUpdate: i,
      onComplete: s,
      element: r,
      ...o
    } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new de({ ...o, autoplay: !1 }),
      l = st(this.finishedTime ?? this.time);
    (n.setWithVelocity(a.sample(l - Ke).value, a.sample(l).value, Ke),
      a.stop());
  }
}
const $e = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (Z.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function Hs(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function zs(t, e, n, i) {
  const s = t[0];
  if (s === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const r = t[t.length - 1],
    o = $e(s, e),
    a = $e(r, e);
  return !o || !a ? !1 : Hs(t) || ((n === "spring" || ri(n)) && i);
}
function ne(t) {
  ((t.duration = 0), t.type);
}
const Gs = new Set(["opacity", "clipPath", "filter", "transform"]),
  Xs = ve(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ys(t) {
  const {
    motionValue: e,
    name: n,
    repeatDelay: i,
    repeatType: s,
    damping: r,
    type: o,
  } = t;
  if (!(e?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: l, transformTemplate: c } = e.owner.getProps();
  return (
    Xs() &&
    n &&
    Gs.has(n) &&
    (n !== "transform" || !c) &&
    !l &&
    !i &&
    s !== "mirror" &&
    r !== 0 &&
    o !== "inertia"
  );
}
const _s = 40;
class Zs extends $n {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: i = "keyframes",
    repeat: s = 0,
    repeatDelay: r = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: c,
    element: u,
    ...h
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = gt.now()));
    const f = {
        autoplay: e,
        delay: n,
        type: i,
        repeat: s,
        repeatDelay: r,
        repeatType: o,
        name: l,
        motionValue: c,
        element: u,
        ...h,
      },
      d = u?.KeyframeResolver || xe;
    ((this.keyframeResolver = new d(
      a,
      (m, x, P) => this.onKeyframesResolved(m, x, f, !P),
      l,
      c,
      u,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(e, n, i, s) {
    this.keyframeResolver = void 0;
    const {
      name: r,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: u,
    } = i;
    ((this.resolvedAt = gt.now()),
      zs(e, r, o, a) ||
        ((yt.instantAnimations || !l) && u?.(Hn(e, i, n)),
        (e[0] = e[e.length - 1]),
        ne(i),
        (i.repeat = 0)));
    const f = {
        startTime: s
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > _s
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...i,
        keyframes: e,
      },
      d =
        !c && Ys(f)
          ? new $s({ ...f, element: f.motionValue.owner.current })
          : new de(f);
    (d.finished.then(() => this.notifyFinished()).catch(W),
      this.pendingTimeline &&
        ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = d));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), Ls()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
const qs = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Js(t) {
  const e = qs.exec(t);
  if (!e) return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
function li(t, e, n = 1) {
  const [i, s] = Js(t);
  if (!i) return;
  const r = window.getComputedStyle(e).getPropertyValue(i);
  if (r) {
    const o = r.trim();
    return Qn(o) ? parseFloat(o) : o;
  }
  return zn(s) ? li(s, e, n + 1) : s;
}
function Te(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const ui = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...lt,
  ]),
  Qs = { test: (t) => t === "auto", parse: (t) => t },
  ci = (t) => (e) => e.test(t),
  hi = [fe, y, vt, U, gs, ys, Qs],
  He = (t) => hi.find(ci(t));
function to(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || ei(t)
      : !0;
}
const eo = new Set(["brightness", "contrast", "saturate", "opacity"]);
function no(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [i] = n.match(vs) || [];
  if (!i) return t;
  const s = n.replace(i, "");
  let r = eo.has(e) ? 1 : 0;
  return (i !== n && (r *= 100), e + "(" + r + s + ")");
}
const io = /\b([a-z-]*)\(.*?\)/gu,
  ie = {
    ...Z,
    getAnimatableNone: (t) => {
      const e = t.match(io);
      return e ? e.map(no).join(" ") : t;
    },
  },
  ze = { ...fe, transform: Math.round },
  so = {
    rotate: U,
    rotateX: U,
    rotateY: U,
    rotateZ: U,
    scale: Vt,
    scaleX: Vt,
    scaleY: Vt,
    scaleZ: Vt,
    skew: U,
    skewX: U,
    skewY: U,
    distance: y,
    translateX: y,
    translateY: y,
    translateZ: y,
    x: y,
    y,
    z: y,
    perspective: y,
    transformPerspective: y,
    opacity: Xt,
    originX: ke,
    originY: ke,
    originZ: y,
  },
  Pe = {
    borderWidth: y,
    borderTopWidth: y,
    borderRightWidth: y,
    borderBottomWidth: y,
    borderLeftWidth: y,
    borderRadius: y,
    radius: y,
    borderTopLeftRadius: y,
    borderTopRightRadius: y,
    borderBottomRightRadius: y,
    borderBottomLeftRadius: y,
    width: y,
    maxWidth: y,
    height: y,
    maxHeight: y,
    top: y,
    right: y,
    bottom: y,
    left: y,
    padding: y,
    paddingTop: y,
    paddingRight: y,
    paddingBottom: y,
    paddingLeft: y,
    margin: y,
    marginTop: y,
    marginRight: y,
    marginBottom: y,
    marginLeft: y,
    backgroundPositionX: y,
    backgroundPositionY: y,
    ...so,
    zIndex: ze,
    fillOpacity: Xt,
    strokeOpacity: Xt,
    numOctaves: ze,
  },
  oo = {
    ...Pe,
    color: k,
    backgroundColor: k,
    outlineColor: k,
    fill: k,
    stroke: k,
    borderColor: k,
    borderTopColor: k,
    borderRightColor: k,
    borderBottomColor: k,
    borderLeftColor: k,
    filter: ie,
    WebkitFilter: ie,
  },
  fi = (t) => oo[t];
function di(t, e) {
  let n = fi(t);
  return (
    n !== ie && (n = Z),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const ro = new Set(["auto", "none", "0"]);
function ao(t, e, n) {
  let i = 0,
    s;
  for (; i < t.length && !s; ) {
    const r = t[i];
    (typeof r == "string" && !ro.has(r) && xs(r).values.length && (s = t[i]),
      i++);
  }
  if (s && n) for (const r of e) t[r] = di(n, s);
}
class lo extends xe {
  constructor(e, n, i, s, r) {
    super(e, n, i, s, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && ((c = c.trim()), zn(c))) {
        const u = li(c, n.current);
        (u !== void 0 && (e[l] = u),
          l === e.length - 1 && (this.finalKeyframe = c));
      }
    }
    if ((this.resolveNoneKeyframes(), !ui.has(i) || e.length !== 2)) return;
    const [s, r] = e,
      o = He(s),
      a = He(r);
    if (o !== a)
      if (Ue(o) && Ue(a))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == "string" && (e[l] = parseFloat(c));
        }
      else Y[i] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      i = [];
    for (let s = 0; s < e.length; s++) (e[s] === null || to(e[s])) && i.push(s);
    i.length && ao(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current) return;
    (i === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Y[i](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin));
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: i } = this;
    if (!e || !e.current) return;
    const s = e.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const r = i.length - 1,
      o = i[r];
    ((i[r] = Y[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([a, l]) => {
          e.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes());
  }
}
const mi = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
function pi(t) {
  return ti(t) && "offsetHeight" in t;
}
const { schedule: Se } = Ts(queueMicrotask, !1),
  F = { x: !1, y: !1 };
function gi() {
  return F.x || F.y;
}
function uo(t) {
  return t === "x" || t === "y"
    ? F[t]
      ? null
      : ((F[t] = !0),
        () => {
          F[t] = !1;
        })
    : F.x || F.y
      ? null
      : ((F.x = F.y = !0),
        () => {
          F.x = F.y = !1;
        });
}
function yi(t, e) {
  const n = Ps(t),
    i = new AbortController(),
    s = { passive: !0, ...e, signal: i.signal };
  return [n, s, () => i.abort()];
}
function Ge(t) {
  return !(t.pointerType === "touch" || gi());
}
function co(t, e, n = {}) {
  const [i, s, r] = yi(t, n),
    o = (a) => {
      if (!Ge(a)) return;
      const { target: l } = a,
        c = e(l, a);
      if (typeof c != "function" || !l) return;
      const u = (h) => {
        Ge(h) && (c(h), l.removeEventListener("pointerleave", u));
      };
      l.addEventListener("pointerleave", u, s);
    };
  return (
    i.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    r
  );
}
const vi = (t, e) => (e ? (t === e ? !0 : vi(t, e.parentElement)) : !1),
  Ve = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  ho = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fo(t) {
  return ho.has(t.tagName) || t.tabIndex !== -1;
}
const Ct = new WeakSet();
function Xe(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function kt(t, e) {
  t.dispatchEvent(
    new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
  );
}
const mo = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const i = Xe(() => {
    if (Ct.has(n)) return;
    kt(n, "down");
    const s = Xe(() => {
        kt(n, "up");
      }),
      r = () => kt(n, "cancel");
    (n.addEventListener("keyup", s, e), n.addEventListener("blur", r, e));
  });
  (n.addEventListener("keydown", i, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", i), e));
};
function Ye(t) {
  return Ve(t) && !gi();
}
function po(t, e, n = {}) {
  const [i, s, r] = yi(t, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Ye(a)) return;
      Ct.add(l);
      const c = e(l, a),
        u = (d, m) => {
          (window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", f),
            Ct.has(l) && Ct.delete(l),
            Ye(d) && typeof c == "function" && c(d, { success: m }));
        },
        h = (d) => {
          u(
            d,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              vi(l, d.target),
          );
        },
        f = (d) => {
          u(d, !1);
        };
      (window.addEventListener("pointerup", h, s),
        window.addEventListener("pointercancel", f, s));
    };
  return (
    i.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        pi(a) &&
          (a.addEventListener("focus", (c) => mo(c, s)),
          !fo(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    r
  );
}
function xi(t) {
  return ti(t) && "ownerSVGElement" in t;
}
function go(t) {
  return xi(t) && t.tagName === "svg";
}
const yo = [...hi, k, Z],
  vo = (t) => yo.find(ci(t));
class xo extends p.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const i = n.offsetParent,
        s = (pi(i) && i.offsetWidth) || 0,
        r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft),
        (r.right = s - r.width - r.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function To({ children: t, isPresent: e, anchorX: n, root: i }) {
  const s = p.useId(),
    r = p.useRef(null),
    o = p.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = p.useContext(me);
  return (
    p.useInsertionEffect(() => {
      const { width: l, height: c, top: u, left: h, right: f } = o.current;
      if (e || !r.current || !l || !c) return;
      const d = n === "left" ? `left: ${h}` : `right: ${f}`;
      r.current.dataset.motionPopId = s;
      const m = document.createElement("style");
      a && (m.nonce = a);
      const x = i ?? document.head;
      return (
        x.appendChild(m),
        m.sheet &&
          m.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `),
        () => {
          x.contains(m) && x.removeChild(m);
        }
      );
    }, [e]),
    O.jsx(xo, {
      isPresent: e,
      childRef: r,
      sizeRef: o,
      children: p.cloneElement(t, { ref: r }),
    })
  );
}
const Po = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: i,
  custom: s,
  presenceAffectsLayout: r,
  mode: o,
  anchorX: a,
  root: l,
}) => {
  const c = pe(So),
    u = p.useId();
  let h = !0,
    f = p.useMemo(
      () => (
        (h = !1),
        {
          id: u,
          initial: e,
          isPresent: n,
          custom: s,
          onExitComplete: (d) => {
            c.set(d, !0);
            for (const m of c.values()) if (!m) return;
            i && i();
          },
          register: (d) => (c.set(d, !1), () => c.delete(d)),
        }
      ),
      [n, c, i],
    );
  return (
    r && h && (f = { ...f }),
    p.useMemo(() => {
      c.forEach((d, m) => c.set(m, !1));
    }, [n]),
    p.useEffect(() => {
      !n && !c.size && i && i();
    }, [n]),
    o === "popLayout" &&
      (t = O.jsx(To, { isPresent: n, anchorX: a, root: l, children: t })),
    O.jsx(Rt.Provider, { value: f, children: t })
  );
};
function So() {
  return new Map();
}
function Ti(t = !0) {
  const e = p.useContext(Rt);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e,
    r = p.useId();
  p.useEffect(() => {
    if (t) return s(r);
  }, [t]);
  const o = p.useCallback(() => t && i && i(r), [r, i, t]);
  return !n && i ? [!1, o] : [!0];
}
const wt = (t) => t.key || "";
function _e(t) {
  const e = [];
  return (
    p.Children.forEach(t, (n) => {
      p.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Vo = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: i,
    presenceAffectsLayout: s = !0,
    mode: r = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [c, u] = Ti(o),
      h = p.useMemo(() => _e(t), [t]),
      f = o && !c ? [] : h.map(wt),
      d = p.useRef(!0),
      m = p.useRef(h),
      x = pe(() => new Map()),
      [P, v] = p.useState(h),
      [g, T] = p.useState(h);
    Gn(() => {
      ((d.current = !1), (m.current = h));
      for (let M = 0; M < g.length; M++) {
        const C = wt(g[M]);
        f.includes(C) ? x.delete(C) : x.get(C) !== !0 && x.set(C, !1);
      }
    }, [g, f.length, f.join("-")]);
    const A = [];
    if (h !== P) {
      let M = [...h];
      for (let C = 0; C < g.length; C++) {
        const N = g[C],
          J = wt(N);
        f.includes(J) || (M.splice(C, 0, N), A.push(N));
      }
      return (r === "wait" && A.length && (M = A), T(_e(M)), v(h), null);
    }
    const { forceRender: L } = p.useContext(ye);
    return O.jsx(O.Fragment, {
      children: g.map((M) => {
        const C = wt(M),
          N = o && !c ? !1 : h === g || f.includes(C),
          J = () => {
            if (x.has(C)) x.set(C, !0);
            else return;
            let ct = !0;
            (x.forEach(($) => {
              $ || (ct = !1);
            }),
              ct && (L?.(), T(m.current), o && u?.(), i && i()));
          };
        return O.jsx(
          Po,
          {
            isPresent: N,
            initial: !d.current || n ? void 0 : !1,
            custom: e,
            presenceAffectsLayout: s,
            mode: r,
            root: l,
            onExitComplete: N ? void 0 : J,
            anchorX: a,
            children: M,
          },
          C,
        );
      }),
    });
  },
  Pi = p.createContext({ strict: !1 }),
  Ze = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  at = {};
for (const t in Ze) at[t] = { isEnabled: (e) => Ze[t].some((n) => !!e[n]) };
function wo(t) {
  for (const e in t) at[e] = { ...at[e], ...t[e] };
}
const Ao = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Mt(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Ao.has(t)
  );
}
let Si = (t) => !Mt(t);
function Co(t) {
  typeof t == "function" && (Si = (e) => (e.startsWith("on") ? !Mt(e) : t(e)));
}
try {
  Co(require("@emotion/is-prop-valid").default);
} catch {}
function bo(t, e, n) {
  const i = {};
  for (const s in t)
    (s === "values" && typeof t.values == "object") ||
      ((Si(s) ||
        (n === !0 && Mt(s)) ||
        (!e && !Mt(s)) ||
        (t.draggable && s.startsWith("onDrag"))) &&
        (i[s] = t[s]));
  return i;
}
const Lt = p.createContext({});
function Bt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function xt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const we = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ae = ["initial", ...we];
function jt(t) {
  return Bt(t.animate) || Ae.some((e) => xt(t[e]));
}
function Vi(t) {
  return !!(jt(t) || t.variants);
}
function Do(t, e) {
  if (jt(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || xt(n) ? n : void 0,
      animate: xt(i) ? i : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Mo(t) {
  const { initial: e, animate: n } = Do(t, p.useContext(Lt));
  return p.useMemo(() => ({ initial: e, animate: n }), [qe(e), qe(n)]);
}
function qe(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Tt = {};
function Eo(t) {
  for (const e in t) ((Tt[e] = t[e]), ge(e) && (Tt[e].isCSSVariable = !0));
}
function wi(t, { layout: e, layoutId: n }) {
  return (
    ut.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!Tt[t] || t === "opacity"))
  );
}
const Ro = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Lo = lt.length;
function Bo(t, e, n) {
  let i = "",
    s = !0;
  for (let r = 0; r < Lo; r++) {
    const o = lt[r],
      a = t[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = mi(a, Pe[o]);
      if (!l) {
        s = !1;
        const u = Ro[o] || o;
        i += `${u}(${c}) `;
      }
      n && (e[o] = c);
    }
  }
  return ((i = i.trim()), n ? (i = n(e, s ? "" : i)) : s && (i = "none"), i);
}
function Ce(t, e, n) {
  const { style: i, vars: s, transformOrigin: r } = t;
  let o = !1,
    a = !1;
  for (const l in e) {
    const c = e[l];
    if (ut.has(l)) {
      o = !0;
      continue;
    } else if (ge(l)) {
      s[l] = c;
      continue;
    } else {
      const u = mi(c, Pe[l]);
      l.startsWith("origin") ? ((a = !0), (r[l] = u)) : (i[l] = u);
    }
  }
  if (
    (e.transform ||
      (o || n
        ? (i.transform = Bo(e, t.transform, n))
        : i.transform && (i.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = r;
    i.transformOrigin = `${l} ${c} ${u}`;
  }
}
const be = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ai(t, e, n) {
  for (const i in e) !D(e[i]) && !wi(i, n) && (t[i] = e[i]);
}
function jo({ transformTemplate: t }, e) {
  return p.useMemo(() => {
    const n = be();
    return (Ce(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function Io(t, e) {
  const n = t.style || {},
    i = {};
  return (Ai(i, n, t), Object.assign(i, jo(t, e)), i);
}
function ko(t, e) {
  const n = {},
    i = Io(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = i),
    n
  );
}
const Fo = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Oo = { offset: "strokeDashoffset", array: "strokeDasharray" };
function No(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const r = s ? Fo : Oo;
  t[r.offset] = y.transform(-i);
  const o = y.transform(e),
    a = y.transform(n);
  t[r.array] = `${o} ${a}`;
}
function Ci(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: i,
    pathLength: s,
    pathSpacing: r = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  c,
  u,
) {
  if ((Ce(t, a, c), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: h, style: f } = t;
  (h.transform && ((f.transform = h.transform), delete h.transform),
    (f.transform || h.transformOrigin) &&
      ((f.transformOrigin = h.transformOrigin ?? "50% 50%"),
      delete h.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? "fill-box"), delete h.transformBox),
    e !== void 0 && (h.x = e),
    n !== void 0 && (h.y = n),
    i !== void 0 && (h.scale = i),
    s !== void 0 && No(h, s, r, o, !1));
}
const bi = () => ({ ...be(), attrs: {} }),
  Di = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Uo(t, e, n, i) {
  const s = p.useMemo(() => {
    const r = bi();
    return (
      Ci(r, e, Di(i), t.transformTemplate, t.style),
      { ...r.attrs, style: { ...r.style } }
    );
  }, [e]);
  if (t.style) {
    const r = {};
    (Ai(r, t.style, t), (s.style = { ...r, ...s.style }));
  }
  return s;
}
const Wo = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function De(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Wo.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function Ko(t, e, n, { latestValues: i }, s, r = !1) {
  const a = (De(t) ? Uo : ko)(e, i, s, t),
    l = bo(e, typeof t == "string", r),
    c = t !== p.Fragment ? { ...l, ...a, ref: n } : {},
    { children: u } = e,
    h = p.useMemo(() => (D(u) ? u.get() : u), [u]);
  return p.createElement(t, { ...c, children: h });
}
function Je(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, i) => {
      ((e[0][i] = n.get()), (e[1][i] = n.getVelocity()));
    }),
    e
  );
}
function Me(t, e, n, i) {
  if (typeof e == "function") {
    const [s, r] = Je(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [s, r] = Je(i);
    e = e(n !== void 0 ? n : t.custom, s, r);
  }
  return e;
}
function bt(t) {
  return D(t) ? t.get() : t;
}
function $o({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, i, s) {
  return { latestValues: Ho(n, i, s, t), renderState: e() };
}
function Ho(t, e, n, i) {
  const s = {},
    r = i(t, {});
  for (const f in r) s[f] = bt(r[f]);
  let { initial: o, animate: a } = t;
  const l = jt(t),
    c = Vi(t);
  e &&
    c &&
    !l &&
    t.inherit !== !1 &&
    (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const h = u ? a : o;
  if (h && typeof h != "boolean" && !Bt(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const m = Me(t, f[d]);
      if (m) {
        const { transitionEnd: x, transition: P, ...v } = m;
        for (const g in v) {
          let T = v[g];
          if (Array.isArray(T)) {
            const A = u ? T.length - 1 : 0;
            T = T[A];
          }
          T !== null && (s[g] = T);
        }
        for (const g in x) s[g] = x[g];
      }
    }
  }
  return s;
}
const Mi = (t) => (e, n) => {
  const i = p.useContext(Lt),
    s = p.useContext(Rt),
    r = () => $o(t, e, i, s);
  return n ? r() : pe(r);
};
function Ee(t, e, n) {
  const { style: i } = t,
    s = {};
  for (const r in i)
    (D(i[r]) ||
      (e.style && D(e.style[r])) ||
      wi(r, t) ||
      n?.getValue(r)?.liveStyle !== void 0) &&
      (s[r] = i[r]);
  return s;
}
const zo = Mi({ scrapeMotionValuesFromProps: Ee, createRenderState: be });
function Ei(t, e, n) {
  const i = Ee(t, e, n);
  for (const s in t)
    if (D(t[s]) || D(e[s])) {
      const r =
        lt.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      i[r] = t[s];
    }
  return i;
}
const Go = Mi({ scrapeMotionValuesFromProps: Ei, createRenderState: bi }),
  Xo = Symbol.for("motionComponentSymbol");
function tt(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Yo(t, e, n) {
  return p.useCallback(
    (i) => {
      (i && t.onMount && t.onMount(i),
        e && (i ? e.mount(i) : e.unmount()),
        n && (typeof n == "function" ? n(i) : tt(n) && (n.current = i)));
    },
    [e],
  );
}
const Re = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  _o = "framerAppearId",
  Ri = "data-" + Re(_o),
  Li = p.createContext({});
function Zo(t, e, n, i, s) {
  const { visualElement: r } = p.useContext(Lt),
    o = p.useContext(Pi),
    a = p.useContext(Rt),
    l = p.useContext(me).reducedMotion,
    c = p.useRef(null);
  ((i = i || o.renderer),
    !c.current &&
      i &&
      (c.current = i(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      })));
  const u = c.current,
    h = p.useContext(Li);
  u &&
    !u.projection &&
    s &&
    (u.type === "html" || u.type === "svg") &&
    qo(c.current, n, s, h);
  const f = p.useRef(!1);
  p.useInsertionEffect(() => {
    u && f.current && u.update(n, a);
  });
  const d = n[Ri],
    m = p.useRef(
      !!d &&
        !window.MotionHandoffIsComplete?.(d) &&
        window.MotionHasOptimisedAnimation?.(d),
    );
  return (
    Gn(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        u.scheduleRenderMicrotask(),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    p.useEffect(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        m.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(d);
          }),
          (m.current = !1)),
        (u.enteringChildren = void 0));
    }),
    u
  );
}
function qo(t, e, n, i) {
  const {
    layoutId: s,
    layout: r,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: u,
  } = e;
  ((t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : Bi(t.parent),
  )),
    t.projection.setOptions({
      layoutId: s,
      layout: r,
      alwaysMeasureLayout: !!o || (a && tt(a)),
      visualElement: t,
      animationType: typeof r == "string" ? r : "both",
      initialPromotionConfig: i,
      crossfade: u,
      layoutScroll: l,
      layoutRoot: c,
    }));
}
function Bi(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Bi(t.parent);
}
function Ft(t, { forwardMotionProps: e = !1 } = {}, n, i) {
  n && wo(n);
  const s = De(t) ? Go : zo;
  function r(a, l) {
    let c;
    const u = { ...p.useContext(me), ...a, layoutId: Jo(a) },
      { isStatic: h } = u,
      f = Mo(a),
      d = s(a, h);
    if (!h && Xn) {
      Qo();
      const m = tr(u);
      ((c = m.MeasureLayout),
        (f.visualElement = Zo(t, d, u, i, m.ProjectionNode)));
    }
    return O.jsxs(Lt.Provider, {
      value: f,
      children: [
        c && f.visualElement
          ? O.jsx(c, { visualElement: f.visualElement, ...u })
          : null,
        Ko(t, a, Yo(d, f.visualElement, l), d, h, e),
      ],
    });
  }
  r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const o = p.forwardRef(r);
  return ((o[Xo] = t), o);
}
function Jo({ layoutId: t }) {
  const e = p.useContext(ye).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Qo(t, e) {
  p.useContext(Pi).strict;
}
function tr(t) {
  const { drag: e, layout: n } = at;
  if (!e && !n) return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout:
      e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function er(t, e) {
  if (typeof Proxy > "u") return Ft;
  const n = new Map(),
    i = (r, o) => Ft(r, o, t, e),
    s = (r, o) => i(r, o);
  return new Proxy(s, {
    get: (r, o) =>
      o === "create"
        ? i
        : (n.has(o) || n.set(o, Ft(o, void 0, t, e)), n.get(o)),
  });
}
function ji({ top: t, left: e, right: n, bottom: i }) {
  return { x: { min: e, max: n }, y: { min: t, max: i } };
}
function nr({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ir(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    i = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: i.y, right: i.x };
}
function Ot(t) {
  return t === void 0 || t === 1;
}
function se({ scale: t, scaleX: e, scaleY: n }) {
  return !Ot(t) || !Ot(e) || !Ot(n);
}
function G(t) {
  return (
    se(t) ||
    Ii(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function Ii(t) {
  return Qe(t.x) || Qe(t.y);
}
function Qe(t) {
  return t && t !== "0%";
}
function Et(t, e, n) {
  const i = t - n,
    s = e * i;
  return n + s;
}
function tn(t, e, n, i, s) {
  return (s !== void 0 && (t = Et(t, s, i)), Et(t, n, i) + e);
}
function oe(t, e = 0, n = 1, i, s) {
  ((t.min = tn(t.min, e, n, i, s)), (t.max = tn(t.max, e, n, i, s)));
}
function ki(t, { x: e, y: n }) {
  (oe(t.x, e.translate, e.scale, e.originPoint),
    oe(t.y, n.translate, n.scale, n.originPoint));
}
const en = 0.999999999999,
  nn = 1.0000000000001;
function sr(t, e, n, i = !1) {
  const s = n.length;
  if (!s) return;
  e.x = e.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    ((r = n[a]), (o = r.projectionDelta));
    const { visualElement: l } = r.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (i &&
        r.options.layoutScroll &&
        r.scroll &&
        r !== r.root &&
        nt(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), ki(t, o)),
      i && G(r.latestValues) && nt(t, r.latestValues));
  }
  (e.x < nn && e.x > en && (e.x = 1), e.y < nn && e.y > en && (e.y = 1));
}
function et(t, e) {
  ((t.min = t.min + e), (t.max = t.max + e));
}
function sn(t, e, n, i, s = 0.5) {
  const r = w(t.min, t.max, s);
  oe(t, e, n, r, i);
}
function nt(t, e) {
  (sn(t.x, e.x, e.scaleX, e.scale, e.originX),
    sn(t.y, e.y, e.scaleY, e.scale, e.originY));
}
function Fi(t, e) {
  return ji(ir(t.getBoundingClientRect(), e));
}
function or(t, e, n) {
  const i = Fi(t, n),
    { scroll: s } = e;
  return (s && (et(i.x, s.offset.x), et(i.y, s.offset.y)), i);
}
const on = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  it = () => ({ x: on(), y: on() }),
  rn = () => ({ min: 0, max: 0 }),
  V = () => ({ x: rn(), y: rn() }),
  re = { current: null },
  Oi = { current: !1 };
function rr() {
  if (((Oi.current = !0), !!Xn))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (re.current = t.matches);
      (t.addEventListener("change", e), e());
    } else re.current = !1;
}
const ar = new WeakMap();
function lr(t, e, n) {
  for (const i in e) {
    const s = e[i],
      r = n[i];
    if (D(s)) t.addValue(i, s);
    else if (D(r)) t.addValue(i, rt(s, { owner: t }));
    else if (r !== s)
      if (t.hasValue(i)) {
        const o = t.getValue(i);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = t.getStaticValue(i);
        t.addValue(i, rt(o !== void 0 ? o : s, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const an = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class ur {
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: i,
      reducedMotionConfig: s,
      blockInitialAnimation: r,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = xe),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = gt.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), S.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: c } = o;
    ((this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = i),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!r),
      (this.isControllingVariants = jt(n)),
      (this.isVariantNode = Vi(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const f in h) {
      const d = h[f];
      l[f] !== void 0 && D(d) && d.set(l[f]);
    }
  }
  mount(e) {
    ((this.current = e),
      ar.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      Oi.current || rr(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : re.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      q(this.notifyUpdate),
      q(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e),
      this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = ut.has(e);
    i && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      ((this.latestValues[e] = o),
        this.props.onUpdate && S.preRender(this.notifyUpdate),
        i && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let r;
    (window.MotionCheckAppearSync &&
      (r = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (s(), r && r(), n.owner && n.stop());
      }));
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in at) {
      const n = at[e];
      if (!n) continue;
      const { isEnabled: i, Feature: s } = n;
      if (
        (!this.features[e] &&
          s &&
          i(this.props) &&
          (this.features[e] = new s(this)),
        this.features[e])
      ) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : V();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let i = 0; i < an.length; i++) {
      const s = an[i];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const r = "on" + s,
        o = e[r];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    ((this.prevMotionValues = lr(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i &&
      (i && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let i = this.values.get(e);
    return (
      i === void 0 &&
        n !== void 0 &&
        ((i = rt(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, i)),
      i
    );
  }
  readValue(e, n) {
    let i =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      i != null &&
        (typeof i == "string" && (Qn(i) || ei(i))
          ? (i = parseFloat(i))
          : !vo(i) && Z.test(n) && (i = di(e, n)),
        this.setBaseTarget(e, D(i) ? i.get() : i)),
      D(i) ? i.get() : i
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const r = Me(this.props, n, this.presenceContext?.custom);
      r && (i = r[e]);
    }
    if (n && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !D(s)
      ? s
      : this.initialValues[e] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (
      this.events[e] || (this.events[e] = new Yn()),
      this.events[e].add(n)
    );
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Se.render(this.render);
  }
}
class Ni extends ur {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = lo));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    (delete n[e], delete i[e]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    D(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Ui(t, { style: e, vars: n }, i, s) {
  const r = t.style;
  let o;
  for (o in e) r[o] = e[o];
  s?.applyProjectionStyles(r, i);
  for (o in n) r.setProperty(o, n[o]);
}
function cr(t) {
  return window.getComputedStyle(t);
}
class hr extends Ni {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Ui));
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) return this.projection?.isProjecting ? qt(n) : bs(e, n);
    {
      const i = cr(e),
        s = (ge(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Fi(e, n);
  }
  build(e, n, i) {
    Ce(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Ee(e, n, i);
  }
}
const Wi = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function fr(t, e, n, i) {
  Ui(t, e, void 0, i);
  for (const s in e.attrs) t.setAttribute(Wi.has(s) ? s : Re(s), e.attrs[s]);
}
class dr extends Ni {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = V));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const i = fi(n);
      return (i && i.default) || 0;
    }
    return ((n = Wi.has(n) ? n : Re(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Ei(e, n, i);
  }
  build(e, n, i) {
    Ci(e, n, this.isSVGTag, i.transformTemplate, i.style);
  }
  renderInstance(e, n, i, s) {
    fr(e, n, i, s);
  }
  mount(e) {
    ((this.isSVGTag = Di(e.tagName)), super.mount(e));
  }
}
const mr = (t, e) =>
  De(t) ? new dr(e) : new hr(e, { allowProjection: t !== p.Fragment });
function ot(t, e, n) {
  const i = t.getProps();
  return Me(i, e, n !== void 0 ? n : i.custom, t);
}
const ae = (t) => Array.isArray(t);
function pr(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, rt(n));
}
function gr(t) {
  return ae(t) ? t[t.length - 1] || 0 : t;
}
function yr(t, e) {
  const n = ot(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...r } = n || {};
  r = { ...r, ...i };
  for (const o in r) {
    const a = gr(r[o]);
    pr(t, o, a);
  }
}
function vr(t) {
  return !!(D(t) && t.add);
}
function le(t, e) {
  const n = t.getValue("willChange");
  if (vr(n)) return n.add(e);
  if (!n && yt.WillChange) {
    const i = new yt.WillChange("auto");
    (t.addValue("willChange", i), i.add(e));
  }
}
function Ki(t) {
  return t.props[Ri];
}
const xr = (t) => t !== null;
function Tr(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(xr),
    r = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[r];
}
const Pr = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Sr = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Vr = { type: "keyframes", duration: 0.8 },
  wr = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ar = (t, { keyframes: e }) =>
    e.length > 2
      ? Vr
      : ut.has(t)
        ? t.startsWith("scale")
          ? Sr(e[1])
          : Pr
        : wr;
function Cr({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: s,
  repeat: r,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const Le =
  (t, e, n, i = {}, s, r) =>
  (o) => {
    const a = Te(i, t) || {},
      l = a.delay || i.delay || 0;
    let { elapsed: c = 0 } = i;
    c = c - st(l);
    const u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (f) => {
        (e.set(f), a.onUpdate && a.onUpdate(f));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: t,
      motionValue: e,
      element: r ? void 0 : s,
    };
    (Cr(a) || Object.assign(u, Ar(t, u)),
      u.duration && (u.duration = st(u.duration)),
      u.repeatDelay && (u.repeatDelay = st(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let h = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (ne(u), u.delay === 0 && (h = !0)),
      (yt.instantAnimations || yt.skipAnimations) &&
        ((h = !0), ne(u), (u.delay = 0)),
      (u.allowFlatten = !a.type && !a.ease),
      h && !r && e.get() !== void 0)
    ) {
      const f = Tr(u.keyframes, a);
      if (f !== void 0) {
        S.update(() => {
          (u.onUpdate(f), u.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new de(u) : new Zs(u);
  };
function br({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), i);
}
function $i(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let { transition: r = t.getDefaultTransition(), transitionEnd: o, ...a } = e;
  i && (r = i);
  const l = [],
    c = s && t.animationState && t.animationState.getState()[s];
  for (const u in a) {
    const h = t.getValue(u, t.latestValues[u] ?? null),
      f = a[u];
    if (f === void 0 || (c && br(c, u))) continue;
    const d = { delay: n, ...Te(r || {}, u) },
      m = h.get();
    if (
      m !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(f) &&
      f === m &&
      !d.velocity
    )
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const v = Ki(t);
      if (v) {
        const g = window.MotionHandoffAnimation(v, u, S);
        g !== null && ((d.startTime = g), (x = !0));
      }
    }
    (le(t, u),
      h.start(
        Le(u, h, f, t.shouldReduceMotion && ui.has(u) ? { type: !1 } : d, t, x),
      ));
    const P = h.animation;
    P && l.push(P);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        S.update(() => {
          o && yr(t, o);
        });
      }),
    l
  );
}
function Hi(t, e, n, i = 0, s = 1) {
  const r = Array.from(t)
      .sort((c, u) => c.sortNodePosition(u))
      .indexOf(e),
    o = t.size,
    a = (o - 1) * i;
  return typeof n == "function" ? n(r, o) : s === 1 ? r * i : a - r * i;
}
function ue(t, e, n = {}) {
  const i = ot(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const r = i ? () => Promise.all($i(t, i, n)) : () => Promise.resolve(),
    o =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: u,
              staggerDirection: h,
            } = s;
            return Dr(t, e, l, c, u, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [r, o] : [o, r];
    return l().then(() => c());
  } else return Promise.all([r(), o(n.delay)]);
}
function Dr(t, e, n = 0, i = 0, s = 0, r = 1, o) {
  const a = [];
  for (const l of t.variantChildren)
    (l.notify("AnimationStart", e),
      a.push(
        ue(l, e, {
          ...o,
          delay:
            n +
            (typeof i == "function" ? 0 : i) +
            Hi(t.variantChildren, l, i, s, r),
        }).then(() => l.notify("AnimationComplete", e)),
      ));
  return Promise.all(a);
}
function Mr(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((r) => ue(t, r, n));
    i = Promise.all(s);
  } else if (typeof e == "string") i = ue(t, e, n);
  else {
    const s = typeof e == "function" ? ot(t, e, n.custom) : e;
    i = Promise.all($i(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function zi(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
  return !0;
}
const Er = Ae.length;
function Gi(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Gi(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < Er; n++) {
    const i = Ae[n],
      s = t.props[i];
    (xt(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const Rr = [...we].reverse(),
  Lr = we.length;
function Br(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: i }) => Mr(t, n, i)));
}
function jr(t) {
  let e = Br(t),
    n = ln(),
    i = !0;
  const s = (l) => (c, u) => {
    const h = ot(t, u, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: d, ...m } = h;
      c = { ...c, ...m, ...d };
    }
    return c;
  };
  function r(l) {
    e = l(t);
  }
  function o(l) {
    const { props: c } = t,
      u = Gi(t.parent) || {},
      h = [],
      f = new Set();
    let d = {},
      m = 1 / 0;
    for (let P = 0; P < Lr; P++) {
      const v = Rr[P],
        g = n[v],
        T = c[v] !== void 0 ? c[v] : u[v],
        A = xt(T),
        L = v === l ? g.isActive : null;
      L === !1 && (m = P);
      let M = T === u[v] && T !== c[v] && A;
      if (
        (M && i && t.manuallyAnimateOnMount && (M = !1),
        (g.protectedKeys = { ...d }),
        (!g.isActive && L === null) ||
          (!T && !g.prevProp) ||
          Bt(T) ||
          typeof T == "boolean")
      )
        continue;
      const C = Ir(g.prevProp, T);
      let N = C || (v === l && g.isActive && !M && A) || (P > m && A),
        J = !1;
      const ct = Array.isArray(T) ? T : [T];
      let $ = ct.reduce(s(v), {});
      L === !1 && ($ = {});
      const { prevResolvedValues: Be = {} } = g,
        as = { ...Be, ...$ },
        je = (b) => {
          ((N = !0),
            f.has(b) && ((J = !0), f.delete(b)),
            (g.needsAnimating[b] = !0));
          const B = t.getValue(b);
          B && (B.liveStyle = !1);
        };
      for (const b in as) {
        const B = $[b],
          H = Be[b];
        if (d.hasOwnProperty(b)) continue;
        let Q = !1;
        (ae(B) && ae(H) ? (Q = !zi(B, H)) : (Q = B !== H),
          Q
            ? B != null
              ? je(b)
              : f.add(b)
            : B !== void 0 && f.has(b)
              ? je(b)
              : (g.protectedKeys[b] = !0));
      }
      ((g.prevProp = T),
        (g.prevResolvedValues = $),
        g.isActive && (d = { ...d, ...$ }),
        i && t.blockInitialAnimation && (N = !1));
      const Ie = M && C;
      N &&
        (!Ie || J) &&
        h.push(
          ...ct.map((b) => {
            const B = { type: v };
            if (
              typeof b == "string" &&
              i &&
              !Ie &&
              t.manuallyAnimateOnMount &&
              t.parent
            ) {
              const { parent: H } = t,
                Q = ot(H, b);
              if (H.enteringChildren && Q) {
                const { delayChildren: ls } = Q.transition || {};
                B.delay = Hi(H.enteringChildren, t, ls);
              }
            }
            return { animation: b, options: B };
          }),
        );
    }
    if (f.size) {
      const P = {};
      if (typeof c.initial != "boolean") {
        const v = ot(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        v && v.transition && (P.transition = v.transition);
      }
      (f.forEach((v) => {
        const g = t.getBaseTarget(v),
          T = t.getValue(v);
        (T && (T.liveStyle = !0), (P[v] = g ?? null));
      }),
        h.push({ animation: P }));
    }
    let x = !!h.length;
    return (
      i &&
        (c.initial === !1 || c.initial === c.animate) &&
        !t.manuallyAnimateOnMount &&
        (x = !1),
      (i = !1),
      x ? e(h) : Promise.resolve()
    );
  }
  function a(l, c) {
    if (n[l].isActive === c) return Promise.resolve();
    (t.variantChildren?.forEach((h) => h.animationState?.setActive(l, c)),
      (n[l].isActive = c));
    const u = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      ((n = ln()), (i = !0));
    },
  };
}
function Ir(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !zi(e, t) : !1;
}
function z(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function ln() {
  return {
    animate: z(!0),
    whileInView: z(),
    whileHover: z(),
    whileTap: z(),
    whileDrag: z(),
    whileFocus: z(),
    exit: z(),
  };
}
class K {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
class kr extends K {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = jr(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Bt(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let Fr = 0;
class Or extends K {
  constructor() {
    (super(...arguments), (this.id = Fr++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const s = this.node.animationState.setActive("exit", !e);
    n &&
      !e &&
      s.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() {}
}
const Nr = { animation: { Feature: kr }, exit: { Feature: Or } };
function Pt(t, e, n, i = { passive: !0 }) {
  return (t.addEventListener(e, n, i), () => t.removeEventListener(e, n));
}
function St(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const Ur = (t) => (e) => Ve(e) && t(e, St(e));
function dt(t, e, n, i) {
  return Pt(t, e, Ur(n), i);
}
const Xi = 1e-4,
  Wr = 1 - Xi,
  Kr = 1 + Xi,
  Yi = 0.01,
  $r = 0 - Yi,
  Hr = 0 + Yi;
function E(t) {
  return t.max - t.min;
}
function zr(t, e, n) {
  return Math.abs(t - e) <= n;
}
function un(t, e, n, i = 0.5) {
  ((t.origin = i),
    (t.originPoint = w(e.min, e.max, t.origin)),
    (t.scale = E(n) / E(e)),
    (t.translate = w(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= Wr && t.scale <= Kr) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= $r && t.translate <= Hr) || isNaN(t.translate)) &&
      (t.translate = 0));
}
function mt(t, e, n, i) {
  (un(t.x, e.x, n.x, i ? i.originX : void 0),
    un(t.y, e.y, n.y, i ? i.originY : void 0));
}
function cn(t, e, n) {
  ((t.min = n.min + e.min), (t.max = t.min + E(e)));
}
function Gr(t, e, n) {
  (cn(t.x, e.x, n.x), cn(t.y, e.y, n.y));
}
function hn(t, e, n) {
  ((t.min = e.min - n.min), (t.max = t.min + E(e)));
}
function pt(t, e, n) {
  (hn(t.x, e.x, n.x), hn(t.y, e.y, n.y));
}
function I(t) {
  return [t("x"), t("y")];
}
const _i = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  fn = (t, e) => Math.abs(t - e);
function Xr(t, e) {
  const n = fn(t.x, e.x),
    i = fn(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Zi {
  constructor(
    e,
    n,
    {
      transformPagePoint: i,
      contextWindow: s = window,
      dragSnapToOrigin: r = !1,
      distanceThreshold: o = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Ut(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          m = Xr(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!d && !m) return;
        const { point: x } = f,
          { timestamp: P } = R;
        this.history.push({ ...x, timestamp: P });
        const { onStart: v, onMove: g } = this.handlers;
        (d ||
          (v && v(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, d) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Nt(d, this.transformPagePoint)),
          S.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: m, onSessionEnd: x, resumeAnimation: P } = this.handlers;
        if (
          (this.dragSnapToOrigin && P && P(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = Ut(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Nt(d, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && m && m(f, v), x && x(f, v));
      }),
      !Ve(e))
    )
      return;
    ((this.dragSnapToOrigin = r),
      (this.handlers = n),
      (this.transformPagePoint = i),
      (this.distanceThreshold = o),
      (this.contextWindow = s || window));
    const a = St(e),
      l = Nt(a, this.transformPagePoint),
      { point: c } = l,
      { timestamp: u } = R;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: h } = n;
    (h && h(e, Ut(l, this.history)),
      (this.removeListeners = _n(
        dt(this.contextWindow, "pointermove", this.handlePointerMove),
        dt(this.contextWindow, "pointerup", this.handlePointerUp),
        dt(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), q(this.updatePoint));
  }
}
function Nt(t, e) {
  return e ? { point: e(t.point) } : t;
}
function dn(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ut({ point: t }, e) {
  return {
    point: t,
    delta: dn(t, qi(e)),
    offset: dn(t, Yr(e)),
    velocity: _r(e, 0.1),
  };
}
function Yr(t) {
  return t[0];
}
function qi(t) {
  return t[t.length - 1];
}
function _r(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    i = null;
  const s = qi(t);
  for (; n >= 0 && ((i = t[n]), !(s.timestamp - i.timestamp > st(e))); ) n--;
  if (!i) return { x: 0, y: 0 };
  const r = Gt(s.timestamp - i.timestamp);
  if (r === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - i.x) / r, y: (s.y - i.y) / r };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function Zr(t, { min: e, max: n }, i) {
  return (
    e !== void 0 && t < e
      ? (t = i ? w(e, t, i.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = i ? w(n, t, i.max) : Math.min(t, n)),
    t
  );
}
function mn(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function qr(t, { top: e, left: n, bottom: i, right: s }) {
  return { x: mn(t.x, n, s), y: mn(t.y, e, i) };
}
function pn(t, e) {
  let n = e.min - t.min,
    i = e.max - t.max;
  return (
    e.max - e.min < t.max - t.min && ([n, i] = [i, n]),
    { min: n, max: i }
  );
}
function Jr(t, e) {
  return { x: pn(t.x, e.x), y: pn(t.y, e.y) };
}
function Qr(t, e) {
  let n = 0.5;
  const i = E(t),
    s = E(e);
  return (
    s > i
      ? (n = Yt(e.min, e.max - i, t.min))
      : i > s && (n = Yt(t.min, t.max - s, e.min)),
    Zn(0, 1, n)
  );
}
function ta(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const ce = 0.35;
function ea(t = ce) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = ce),
    { x: gn(t, "left", "right"), y: gn(t, "top", "bottom") }
  );
}
function gn(t, e, n) {
  return { min: yn(t, e), max: yn(t, n) };
}
function yn(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const na = new WeakMap();
class ia {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = V()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: i } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1) return;
    const r = (h) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(St(h).point));
      },
      o = (h, f) => {
        const { drag: d, dragPropagation: m, onDragStart: x } = this.getProps();
        if (
          d &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = uo(d)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          I((v) => {
            let g = this.getAxisMotionValue(v).get() || 0;
            if (vt.test(g)) {
              const { projection: T } = this.visualElement;
              if (T && T.layout) {
                const A = T.layout.layoutBox[v];
                A && (g = E(A) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[v] = g;
          }),
          x && S.postRender(() => x(h, f)),
          le(this.visualElement, "transform"));
        const { animationState: P } = this.visualElement;
        P && P.setActive("whileDrag", !0);
      },
      a = (h, f) => {
        ((this.latestPointerEvent = h), (this.latestPanInfo = f));
        const {
          dragPropagation: d,
          dragDirectionLock: m,
          onDirectionLock: x,
          onDrag: P,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: v } = f;
        if (m && this.currentDirection === null) {
          ((this.currentDirection = sa(v)),
            this.currentDirection !== null && x && x(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, v),
          this.updateAxis("y", f.point, v),
          this.visualElement.render(),
          P && P(h, f));
      },
      l = (h, f) => {
        ((this.latestPointerEvent = h),
          (this.latestPanInfo = f),
          this.stop(h, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      c = () =>
        I(
          (h) =>
            this.getAnimationState(h) === "paused" &&
            this.getAxisMotionValue(h).animation?.play(),
        ),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Zi(
      e,
      {
        onSessionStart: r,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        distanceThreshold: i,
        contextWindow: _i(this.visualElement),
      },
    );
  }
  stop(e, n) {
    const i = e || this.latestPointerEvent,
      s = n || this.latestPanInfo,
      r = this.isDragging;
    if ((this.cancel(), !r || !s || !i)) return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && S.postRender(() => a(i, s));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: i } = this.getProps();
    (!i &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !At(e, s, this.currentDirection)) return;
    const r = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + i[e];
    (this.constraints &&
      this.constraints[e] &&
      (o = Zr(o, this.constraints[e], this.elastic[e])),
      r.set(o));
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      s = this.constraints;
    (e && tt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && i
        ? (this.constraints = qr(i.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = ea(n)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        I((r) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(r) &&
            (this.constraints[r] = ta(i.layoutBox[r], this.constraints[r]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !tt(e)) return !1;
    const i = e.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const r = or(i, s.root, this.visualElement.getTransformPagePoint());
    let o = Jr(s.layout.layoutBox, r);
    if (n) {
      const a = n(nr(o));
      ((this.hasMutatedConstraints = !!a), a && (o = ji(a)));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: i,
        dragElastic: s,
        dragTransition: r,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = I((u) => {
        if (!At(u, n, this.currentDirection)) return;
        let h = (l && l[u]) || {};
        o && (h = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          d = s ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: i ? e[u] : 0,
            bounceStiffness: f,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...r,
            ...h,
          };
        return this.startAxisValueAnimation(u, m);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return (
      le(this.visualElement, e),
      i.start(Le(e, i, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    I((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    I((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      i = this.visualElement.getProps(),
      s = i[n];
    return (
      s ||
      this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    I((n) => {
      const { drag: i } = this.getProps();
      if (!At(n, i, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        r = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        r.set(e[n] - w(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: i } = this.visualElement;
    if (!tt(n) || !i || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    I((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Qr({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = r ? r({}, "") : "none"),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      I((o) => {
        if (!At(o, e, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(w(l, c, s[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    na.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = dt(e, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      i = () => {
        const { dragConstraints: l } = this.getProps();
        tt(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      r = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      S.read(i));
    const o = Pt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (I((u) => {
              const h = this.getAxisMotionValue(u);
              h &&
                ((this.originPoint[u] += l[u].translate),
                h.set(h.get() + l[u].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), r(), a && a());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: i = !1,
        dragPropagation: s = !1,
        dragConstraints: r = !1,
        dragElastic: o = ce,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: r,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function At(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function sa(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
class oa extends K {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = W),
      (this.removeListeners = W),
      (this.controls = new ia(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || W));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const vn = (t) => (e, n) => {
  t && S.postRender(() => t(e, n));
};
class ra extends K {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = W));
  }
  onPointerDown(e) {
    this.session = new Zi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: _i(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: i,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: vn(e),
      onStart: vn(n),
      onMove: i,
      onEnd: (r, o) => {
        (delete this.session, s && S.postRender(() => s(r, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = dt(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const Dt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function xn(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const ht = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (y.test(t)) t = parseFloat(t);
        else return t;
      const n = xn(t, e.target.x),
        i = xn(t, e.target.y);
      return `${n}% ${i}%`;
    },
  },
  aa = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const i = t,
        s = Z.parse(t);
      if (s.length > 5) return i;
      const r = Z.createTransformer(t),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((s[0 + o] /= a), (s[1 + o] /= l));
      const c = w(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        r(s)
      );
    },
  };
let Wt = !1;
class la extends p.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: i,
        layoutId: s,
      } = this.props,
      { projection: r } = e;
    (Eo(ua),
      r &&
        (n.group && n.group.add(r),
        i && i.register && s && i.register(r),
        Wt && r.root.didUpdate(),
        r.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        r.setOptions({
          ...r.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Dt.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: i,
        drag: s,
        isPresent: r,
      } = this.props,
      { projection: o } = i;
    return (
      o &&
        ((o.isPresent = r),
        (Wt = !0),
        s || e.layoutDependency !== n || n === void 0 || e.isPresent !== r
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== r &&
          (r
            ? o.promote()
            : o.relegate() ||
              S.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      Se.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: i,
      } = this.props,
      { projection: s } = e;
    ((Wt = !0),
      s &&
        (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        i && i.deregister && i.deregister(s)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ji(t) {
  const [e, n] = Ti(),
    i = p.useContext(ye);
  return O.jsx(la, {
    ...t,
    layoutGroup: i,
    switchLayoutGroup: p.useContext(Li),
    isPresent: e,
    safeToRemove: n,
  });
}
const ua = {
  borderRadius: {
    ...ht,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: ht,
  borderTopRightRadius: ht,
  borderBottomLeftRadius: ht,
  borderBottomRightRadius: ht,
  boxShadow: aa,
};
function ca(t, e, n) {
  const i = D(t) ? t : rt(t);
  return (i.start(Le("", i, e, n)), i.animation);
}
const ha = (t, e) => t.depth - e.depth;
class fa {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (qn(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (Jn(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(ha),
      (this.isDirty = !1),
      this.children.forEach(e));
  }
}
function da(t, e) {
  const n = gt.now(),
    i = ({ timestamp: s }) => {
      const r = s - n;
      r >= e && (q(i), t(r - e));
    };
  return (S.setup(i, !0), () => q(i));
}
const Qi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ma = Qi.length,
  Tn = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Pn = (t) => typeof t == "number" || y.test(t);
function pa(t, e, n, i, s, r) {
  s
    ? ((t.opacity = w(0, n.opacity ?? 1, ga(i))),
      (t.opacityExit = w(e.opacity ?? 1, 0, ya(i))))
    : r && (t.opacity = w(e.opacity ?? 1, n.opacity ?? 1, i));
  for (let o = 0; o < ma; o++) {
    const a = `border${Qi[o]}Radius`;
    let l = Sn(e, a),
      c = Sn(n, a);
    if (l === void 0 && c === void 0) continue;
    (l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || Pn(l) === Pn(c)
        ? ((t[a] = Math.max(w(Tn(l), Tn(c), i), 0)),
          (vt.test(c) || vt.test(l)) && (t[a] += "%"))
        : (t[a] = c));
  }
  (e.rotate || n.rotate) && (t.rotate = w(e.rotate || 0, n.rotate || 0, i));
}
function Sn(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const ga = ts(0, 0.5, Ss),
  ya = ts(0.5, 0.95, W);
function ts(t, e, n) {
  return (i) => (i < t ? 0 : i > e ? 1 : n(Yt(t, e, i)));
}
function Vn(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function j(t, e) {
  (Vn(t.x, e.x), Vn(t.y, e.y));
}
function wn(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
function An(t, e, n, i, s) {
  return (
    (t -= e),
    (t = Et(t, 1 / n, i)),
    s !== void 0 && (t = Et(t, 1 / s, i)),
    t
  );
}
function va(t, e = 0, n = 1, i = 0.5, s, r = t, o = t) {
  if (
    (vt.test(e) &&
      ((e = parseFloat(e)), (e = w(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let a = w(r.min, r.max, i);
  (t === r && (a -= e),
    (t.min = An(t.min, e, n, a, s)),
    (t.max = An(t.max, e, n, a, s)));
}
function Cn(t, e, [n, i, s], r, o) {
  va(t, e[n], e[i], e[s], e.scale, r, o);
}
const xa = ["x", "scaleX", "originX"],
  Ta = ["y", "scaleY", "originY"];
function bn(t, e, n, i) {
  (Cn(t.x, e, xa, n ? n.x : void 0, i ? i.x : void 0),
    Cn(t.y, e, Ta, n ? n.y : void 0, i ? i.y : void 0));
}
function Dn(t) {
  return t.translate === 0 && t.scale === 1;
}
function es(t) {
  return Dn(t.x) && Dn(t.y);
}
function Mn(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Pa(t, e) {
  return Mn(t.x, e.x) && Mn(t.y, e.y);
}
function En(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function ns(t, e) {
  return En(t.x, e.x) && En(t.y, e.y);
}
function Rn(t) {
  return E(t.x) / E(t.y);
}
function Ln(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class Sa {
  constructor() {
    this.members = [];
  }
  add(e) {
    (qn(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (Jn(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0) return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const r = this.members[s];
      if (r.isPresent !== !1) {
        i = r;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && ((this.prevLead = i), (this.lead = e), e.show(), i)) {
      (i.instance && i.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = i),
        n && (e.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((e.snapshot = i.snapshot),
          (e.snapshot.latestValues = i.animationValues || i.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      (n.onExitComplete && n.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Va(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x,
    r = t.y.translate / e.y,
    o = n?.z || 0;
  if (
    ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: h,
      rotateY: f,
      skewX: d,
      skewY: m,
    } = n;
    (c && (i = `perspective(${c}px) ${i}`),
      u && (i += `rotate(${u}deg) `),
      h && (i += `rotateX(${h}deg) `),
      f && (i += `rotateY(${f}deg) `),
      d && (i += `skewX(${d}deg) `),
      m && (i += `skewY(${m}deg) `));
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none");
}
const Kt = ["", "X", "Y", "Z"],
  wa = 1e3;
let Aa = 0;
function $t(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && ((n[t] = s[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
}
function is(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Ki(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", S, !(s || r));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && is(i);
}
function ss({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = e?.()) {
      ((this.id = Aa++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Da),
            this.nodes.forEach(La),
            this.nodes.forEach(Ba),
            this.nodes.forEach(Ma));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new fa());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Yn()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = xi(o) && !go(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let u,
          h = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (S.read(() => {
          h = window.innerWidth;
        }),
          t(o, () => {
            const d = window.innerWidth;
            d !== h &&
              ((h = d),
              (this.root.updateBlockedByResize = !0),
              u && u(),
              (u = da(f, 250)),
              Dt.hasAnimatedSinceResize &&
                ((Dt.hasAnimatedSinceResize = !1), this.nodes.forEach(In)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: u,
              hasLayoutChanged: h,
              hasRelativeLayoutChanged: f,
              layout: d,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const m =
                  this.options.transition || c.getDefaultTransition() || Oa,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: P } =
                  c.getProps(),
                v = !this.targetLayout || !ns(this.targetLayout, d),
                g = !h && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                g ||
                (h && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const T = { ...Te(m, "layout"), onPlay: x, onComplete: P };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((T.delay = 0), (T.type = !1)),
                  this.startAnimation(T),
                  this.setAnimationOrigin(u, g));
              } else
                (h || In(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = d;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        q(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(ja),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          is(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        ((h.shouldResetTransform = !0),
          h.updateScroll("snapshot"),
          h.options.layoutRoot && h.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = c
        ? c(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Bn));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(jn);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Ra),
            this.nodes.forEach(Ca),
            this.nodes.forEach(ba))
          : this.nodes.forEach(jn),
        this.clearAllSnapshots());
      const a = gt.now();
      ((R.delta = Zn(0, 1e3 / 60, a - R.timestamp)),
        (R.timestamp = a),
        (R.isProcessing = !0),
        It.update.process(R),
        It.preRender.process(R),
        It.render.process(R),
        (R.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Se.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Ea), this.sharedNodes.forEach(Ia));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        S.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      S.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !E(this.snapshot.measuredBox.x) &&
          !E(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = V()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !es(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || G(this.latestValues) || u) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Na(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return V();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Ua))) {
        const { scroll: c } = this.root;
        c && (et(a.x, c.offset.x), et(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = V();
      if ((j(a, o), this.scroll?.wasRoot)) return a;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l],
          { scroll: u, options: h } = c;
        c !== this.root &&
          u &&
          h.layoutScroll &&
          (u.wasRoot && j(a, o), et(a.x, u.offset.x), et(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = V();
      j(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        (!a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          nt(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          G(u.latestValues) && nt(l, u.latestValues));
      }
      return (G(this.latestValues) && nt(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = V();
      j(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !G(c.latestValues)) continue;
        se(c.latestValues) && c.updateSnapshot();
        const u = V(),
          h = c.measurePageBox();
        (j(u, h),
          bn(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u));
      }
      return (G(this.latestValues) && bn(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== R.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (
          ((this.resolvedRelativeTargetAt = R.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1
            ? ((this.relativeParent = f),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = V()),
              (this.relativeTargetOrigin = V()),
              pt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                f.layout.layoutBox,
              ),
              j(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = V()), (this.targetWithTransforms = V())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Gr(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : j(this.target, this.layout.layoutBox),
                ki(this.target, this.targetDelta))
              : j(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f &&
          !!f.resumingFrom == !!this.resumingFrom &&
          !f.options.layoutScroll &&
          f.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = f),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = V()),
              (this.relativeTargetOrigin = V()),
              pt(this.relativeTargetOrigin, this.target, f.target),
              j(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          se(this.parent.latestValues) ||
          Ii(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === R.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: c, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || u))
      )
        return;
      j(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        f = this.treeScale.y;
      (sr(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = V())));
      const { target: d } = o;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (wn(this.prevProjectionDelta.x, this.projectionDelta.x),
          wn(this.prevProjectionDelta.y, this.projectionDelta.y)),
        mt(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== f ||
          !Ln(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ln(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.visualElement?.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = it()),
        (this.projectionDelta = it()),
        (this.projectionDeltaWithTransform = it()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        h = it();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = V(),
        d = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        x = d !== m,
        P = this.getStack(),
        v = !P || P.members.length <= 1,
        g = !!(x && !v && this.options.crossfade === !0 && !this.path.some(Fa));
      this.animationProgress = 0;
      let T;
      ((this.mixTargetDelta = (A) => {
        const L = A / 1e3;
        (kn(h.x, o.x, L),
          kn(h.y, o.y, L),
          this.setTargetDelta(h),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (pt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ka(this.relativeTarget, this.relativeTargetOrigin, f, L),
            T && Pa(this.relativeTarget, T) && (this.isProjectionDirty = !1),
            T || (T = V()),
            j(T, this.relativeTarget)),
          x &&
            ((this.animationValues = u), pa(u, c, this.latestValues, L, g, v)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = L));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (q(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = S.update(() => {
          ((Dt.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = rt(0)),
            (this.currentAnimation = ca(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(wa),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          os(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || V();
          const h = E(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + h));
          const f = E(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + f));
        }
        (j(a, l),
          nt(a, u),
          mt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new Sa()),
        this.sharedNodes.get(o).add(a));
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      (c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && $t("z", o, c, this.animationValues);
      for (let u = 0; u < Kt.length; u++)
        ($t(`rotate${Kt[u]}`, o, c, this.animationValues),
          $t(`skew${Kt[u]}`, o, c, this.animationValues));
      o.render();
      for (const u in c)
        (o.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = bt(a?.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = bt(a?.pointerEvents) || "")),
          this.hasProjected &&
            !G(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let h = Va(this.projectionDeltaWithTransform, this.treeScale, u);
      (l && (h = l(u, h)), (o.transform = h));
      const { x: f, y: d } = this.projectionDelta;
      ((o.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`),
        c.animationValues
          ? (o.opacity =
              c === this
                ? (u.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : u.opacityExit)
          : (o.opacity =
              c === this
                ? u.opacity !== void 0
                  ? u.opacity
                  : ""
                : u.opacityExit !== void 0
                  ? u.opacityExit
                  : 0));
      for (const m in Tt) {
        if (u[m] === void 0) continue;
        const { correct: x, applyTo: P, isCSSVariable: v } = Tt[m],
          g = h === "none" ? u[m] : x(u[m], c);
        if (P) {
          const T = P.length;
          for (let A = 0; A < T; A++) o[P[A]] = g;
        } else
          v ? (this.options.visualElement.renderState.vars[m] = g) : (o[m] = g);
      }
      this.options.layoutId &&
        (o.pointerEvents = c === this ? bt(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => o.currentAnimation?.stop()),
        this.root.nodes.forEach(Bn),
        this.root.sharedNodes.clear());
    }
  };
}
function Ca(t) {
  t.updateLayout();
}
function ba(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = t.layout,
      { animationType: s } = t.options,
      r = e.source !== t.layout.source;
    s === "size"
      ? I((u) => {
          const h = r ? e.measuredBox[u] : e.layoutBox[u],
            f = E(h);
          ((h.min = n[u].min), (h.max = h.min + f));
        })
      : os(s, e.layoutBox, n) &&
        I((u) => {
          const h = r ? e.measuredBox[u] : e.layoutBox[u],
            f = E(n[u]);
          ((h.max = h.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[u].max = t.relativeTarget[u].min + f)));
        });
    const o = it();
    mt(o, n, e.layoutBox);
    const a = it();
    r ? mt(a, t.applyTransform(i, !0), e.measuredBox) : mt(a, n, e.layoutBox);
    const l = !es(o);
    let c = !1;
    if (!t.resumeFrom) {
      const u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: f } = u;
        if (h && f) {
          const d = V();
          pt(d, e.layoutBox, h.layoutBox);
          const m = V();
          (pt(m, n, f.layoutBox),
            ns(d, m) || (c = !0),
            u.options.layoutRoot &&
              ((t.relativeTarget = m),
              (t.relativeTargetOrigin = d),
              (t.relativeParent = u)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Da(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Ma(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Ea(t) {
  t.clearSnapshot();
}
function Bn(t) {
  t.clearMeasurements();
}
function jn(t) {
  t.isLayoutDirty = !1;
}
function Ra(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform());
}
function In(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function La(t) {
  t.resolveTargetDelta();
}
function Ba(t) {
  t.calcProjection();
}
function ja(t) {
  t.resetSkewAndRotation();
}
function Ia(t) {
  t.removeLeadSnapshot();
}
function kn(t, e, n) {
  ((t.translate = w(e.translate, 0, n)),
    (t.scale = w(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function Fn(t, e, n, i) {
  ((t.min = w(e.min, n.min, i)), (t.max = w(e.max, n.max, i)));
}
function ka(t, e, n, i) {
  (Fn(t.x, e.x, n.x, i), Fn(t.y, e.y, n.y, i));
}
function Fa(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Oa = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  On = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  Nn = On("applewebkit/") && !On("chrome/") ? Math.round : W;
function Un(t) {
  ((t.min = Nn(t.min)), (t.max = Nn(t.max)));
}
function Na(t) {
  (Un(t.x), Un(t.y));
}
function os(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !zr(Rn(e), Rn(n), 0.2))
  );
}
function Ua(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Wa = ss({
    attachResizeListener: (t, e) => Pt(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ht = { current: void 0 },
  rs = ss({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Ht.current) {
        const t = new Wa({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Ht.current = t));
      }
      return Ht.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Ka = {
    pan: { Feature: ra },
    drag: { Feature: oa, ProjectionNode: rs, MeasureLayout: Ji },
  };
function Wn(t, e, n) {
  const { props: i } = t;
  t.animationState &&
    i.whileHover &&
    t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    r = i[s];
  r && S.postRender(() => r(e, St(e)));
}
class $a extends K {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = co(
        e,
        (n, i) => (Wn(this.node, i, "Start"), (s) => Wn(this.node, s, "End")),
      ));
  }
  unmount() {}
}
class Ha extends K {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = _n(
      Pt(this.node.current, "focus", () => this.onFocus()),
      Pt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Kn(t, e, n) {
  const { props: i } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    i.whileTap &&
    t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    r = i[s];
  r && S.postRender(() => r(e, St(e)));
}
class za extends K {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = po(
        e,
        (n, i) => (
          Kn(this.node, i, "Start"),
          (s, { success: r }) => Kn(this.node, s, r ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const he = new WeakMap(),
  zt = new WeakMap(),
  Ga = (t) => {
    const e = he.get(t.target);
    e && e(t);
  },
  Xa = (t) => {
    t.forEach(Ga);
  };
function Ya({ root: t, ...e }) {
  const n = t || document;
  zt.has(n) || zt.set(n, {});
  const i = zt.get(n),
    s = JSON.stringify(e);
  return (
    i[s] || (i[s] = new IntersectionObserver(Xa, { root: t, ...e })),
    i[s]
  );
}
function _a(t, e, n) {
  const i = Ya(e);
  return (
    he.set(t, n),
    i.observe(t),
    () => {
      (he.delete(t), i.unobserve(t));
    }
  );
}
const Za = { some: 0, all: 1 };
class qa extends K {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: i, amount: s = "some", once: r } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof s == "number" ? s : Za[s],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), r && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
          f = c ? u : h;
        f && f(l);
      };
    return _a(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ja(e, n)) && this.startObserver();
  }
  unmount() {}
}
function Ja({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Qa = {
    inView: { Feature: qa },
    tap: { Feature: za },
    focus: { Feature: Ha },
    hover: { Feature: $a },
  },
  tl = { layout: { ProjectionNode: rs, MeasureLayout: Ji } },
  el = { ...Nr, ...Qa, ...Ka, ...tl },
  nl = er(el, mr);
function ll({
  children: t,
  className: e,
  variant: n,
  duration: i = 0.4,
  delay: s = 0,
  offset: r = 6,
  direction: o = "down",
  inView: a = !1,
  inViewMargin: l = "-50px",
  blur: c = "6px",
  ...u
}) {
  const h = p.useRef(null),
    f = Vs(h, { once: !0, margin: l }),
    d = !a || f,
    m = {
      hidden: {
        [o === "left" || o === "right" ? "x" : "y"]:
          o === "right" || o === "down" ? -r : r,
        opacity: 0,
        filter: `blur(${c})`,
      },
      visible: {
        [o === "left" || o === "right" ? "x" : "y"]: 0,
        opacity: 1,
        filter: "blur(0px)",
      },
    },
    x = n || m;
  return O.jsx(Vo, {
    children: O.jsx(nl.div, {
      ref: h,
      initial: "hidden",
      animate: d ? "visible" : "hidden",
      exit: "hidden",
      variants: x,
      transition: { delay: 0.04 + s, duration: i, ease: "easeOut" },
      className: e,
      ...u,
      children: t,
    }),
  });
}
export { ll as BlurFade };
