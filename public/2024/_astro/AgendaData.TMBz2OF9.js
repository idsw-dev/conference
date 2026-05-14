import { j as l } from "./jsx-runtime.7faW4zRM.js";
import { r as P } from "./index.DhYZZe0J.js";
import "./index.95d291e9.l0sNRNKZ.js";
const C = "modulepreload",
  L = function (e) {
    return "/2024/" + e;
  },
  b = {},
  f = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i = a?.nonce || a?.getAttribute("nonce");
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = L(c)), c in b)) return;
          b[c] = !0;
          const d = c.endsWith(".css"),
            u = d ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${u}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = d ? "stylesheet" : C),
            d || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = c),
            i && m.setAttribute("nonce", i),
            document.head.appendChild(m),
            d)
          )
            return new Promise(($, O) => {
              (m.addEventListener("load", $),
                m.addEventListener("error", () =>
                  O(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
      );
    }
    function o(a) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented))
        throw a;
    }
    return s.then((a) => {
      for (const i of a || []) i.status === "rejected" && o(i.reason);
      return t().catch(o);
    });
  },
  v = {
    name: "InvalidComponentArgs",
    title: "Invalid component arguments.",
    message: (e) =>
      `Invalid arguments passed to${e ? ` <${e}>` : ""} component.`,
    hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`.",
  },
  y = {
    name: "AstroGlobUsedOutside",
    title: "Astro.glob() used outside of an Astro file.",
    message: (e) =>
      `\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,
    hint: "See Vite's documentation on `import.meta.glob` for more information: https://vite.dev/guide/features.html#glob-import",
  },
  w = {
    name: "AstroGlobNoMatch",
    title: "Astro.glob() did not match any files.",
    message: (e) => `\`Astro.glob(${e})\` did not return any matching files.`,
    hint: "Check the pattern for typos.",
  };
function F(e) {
  return e.replace(
    /\r\n|\r(?!\n)|\n/g,
    `
`,
  );
}
function D(e, t) {
  if (!t || t.line === void 0 || t.column === void 0) return "";
  const n = F(e)
      .split(
        `
`,
      )
      .map((a) => a.replace(/\t/g, "  ")),
    r = [];
  for (let a = -2; a <= 2; a++) n[t.line + a] && r.push(t.line + a);
  let s = 0;
  for (const a of r) {
    let i = `> ${a}`;
    i.length > s && (s = i.length);
  }
  let o = "";
  for (const a of r) {
    const i = a === t.line - 1;
    ((o += i ? "> " : "  "),
      (o += `${a + 1} | ${n[a]}
`),
      i &&
        (o += `${Array.from({ length: s }).join(" ")}  | ${Array.from({ length: t.column }).join(" ")}^
`));
  }
  return o;
}
class g extends Error {
  loc;
  title;
  hint;
  frame;
  type = "AstroError";
  constructor(t, n) {
    const {
      name: r,
      title: s,
      message: o,
      stack: a,
      location: i,
      hint: c,
      frame: d,
    } = t;
    (super(o, n),
      (this.title = s),
      (this.name = r),
      o && (this.message = o),
      (this.stack = a || this.stack),
      (this.loc = i),
      (this.hint = c),
      (this.frame = d));
  }
  setLocation(t) {
    this.loc = t;
  }
  setName(t) {
    this.name = t;
  }
  setMessage(t) {
    this.message = t;
  }
  setHint(t) {
    this.hint = t;
  }
  setFrame(t, n) {
    this.frame = D(t, n);
  }
  static is(t) {
    return t.type === "AstroError";
  }
}
function V(e) {
  return !(e.length !== 3 || !e[0] || typeof e[0] != "object");
}
function j(e, t, n) {
  const r = t?.split("/").pop()?.replace(".astro", "") ?? "",
    s = (...o) => {
      if (!V(o)) throw new g({ ...v, message: v.message(r) });
      return e(...o);
    };
  return (
    Object.defineProperty(s, "name", { value: r, writable: !1 }),
    (s.isAstroComponentFactory = !0),
    (s.moduleId = t),
    (s.propagation = n),
    s
  );
}
function H(e) {
  return j(e.factory, e.moduleId, e.propagation);
}
function M(e, t, n) {
  return typeof e == "function" ? j(e, t, n) : H(e);
}
const q = "4.16.9";
function B() {
  return (t) => {
    if (typeof t == "string")
      throw new g({ ...y, message: y.message(JSON.stringify(t)) });
    let n = [...Object.values(t)];
    if (n.length === 0)
      throw new g({ ...w, message: w.message(JSON.stringify(t)) });
    return Promise.all(n.map((r) => r()));
  };
}
function U(e) {
  return { site: void 0, generator: `Astro v${q}`, glob: B() };
}
typeof process < "u" && process.stdout && process.stdout.isTTY;
const { replace: G } = "",
  W = /[&<>'"]/g,
  z = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
  J = (e) => z[e],
  Y = (e) => G.call(e, W, J);
function E(e) {
  return (
    !!e && typeof e == "object" && "then" in e && typeof e.then == "function"
  );
}
const K = Y;
class h extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const I = (e) => (e instanceof h ? e : typeof e == "string" ? new h(e) : e);
function Q(e) {
  return Object.prototype.toString.call(e) === "[object HTMLString]";
}
const X = Symbol.for("astro:render");
function Z(e) {
  return Object.defineProperty(e, X, { value: !0 });
}
const ee = () => {};
class te {
  chunks = [];
  renderPromise;
  destination;
  constructor(t) {
    ((this.renderPromise = t(this)),
      Promise.resolve(this.renderPromise).catch(ee));
  }
  write(t) {
    this.destination ? this.destination.write(t) : this.chunks.push(t);
  }
  async renderToFinalDestination(t) {
    for (const n of this.chunks) t.write(n);
    ((this.destination = t), await this.renderPromise);
  }
}
function T(e) {
  return new te(e);
}
typeof process < "u" && Object.prototype.toString.call(process);
function re() {
  return Z({ type: "maybe-head" });
}
const N = Symbol.for("astro.renderTemplateResult");
class ne {
  [N] = !0;
  htmlParts;
  expressions;
  error;
  constructor(t, n) {
    ((this.htmlParts = t),
      (this.error = void 0),
      (this.expressions = n.map((r) =>
        E(r)
          ? Promise.resolve(r).catch((s) => {
              if (!this.error) throw ((this.error = s), s);
            })
          : r,
      )));
  }
  async render(t) {
    const n = this.expressions.map((r) =>
      T((s) => {
        if (r || r === 0) return p(s, r);
      }),
    );
    for (let r = 0; r < this.htmlParts.length; r++) {
      const s = this.htmlParts[r],
        o = n[r];
      (t.write(I(s)), o && (await o.renderToFinalDestination(t)));
    }
  }
}
function se(e) {
  return typeof e == "object" && e !== null && !!e[N];
}
function oe(e, ...t) {
  return new ne(e, t);
}
const x = Symbol.for("astro:slot-string");
class ae extends h {
  instructions;
  [x];
  constructor(t, n) {
    (super(t), (this.instructions = n), (this[x] = !0));
  }
}
new TextEncoder();
new TextDecoder();
function ie(e) {
  return (
    !!e &&
    typeof e == "object" &&
    "render" in e &&
    typeof e.render == "function"
  );
}
async function p(e, t) {
  if ((E(t) && (t = await t), t instanceof ae)) e.write(t);
  else if (Q(t)) e.write(t);
  else if (Array.isArray(t)) {
    const n = t.map((r) => T((s) => p(s, r)));
    for (const r of n) r && (await r.renderToFinalDestination(e));
  } else if (typeof t == "function") await p(e, t());
  else if (typeof t == "string") e.write(I(K(t)));
  else if (!(!t && t !== 0))
    if (ie(t)) await t.render(e);
    else if (se(t)) await t.render(e);
    else if (le(t)) await t.render(e);
    else if (ArrayBuffer.isView(t)) e.write(t);
    else if (
      typeof t == "object" &&
      (Symbol.asyncIterator in t || Symbol.iterator in t)
    )
      for await (const n of t) await p(e, n);
    else e.write(t);
}
const ce = Symbol.for("astro.componentInstance");
function le(e) {
  return typeof e == "object" && e !== null && !!e[ce];
}
var _;
(function (e) {
  ((e[(e.Include = 0)] = "Include"), (e[(e.None = 1)] = "None"));
})(_ || (_ = {}));
var A;
(function (e) {
  ((e[(e.Required = 0)] = "Required"), (e[(e.Ignore = 1)] = "Ignore"));
})(A || (A = {}));
var k;
(function (e) {
  ((e[(e.Include = 0)] = "Include"), (e[(e.None = 1)] = "None"));
})(k || (k = {}));
var S;
(function (e) {
  ((e[(e.Required = 0)] = "Required"), (e[(e.Ignore = 1)] = "Ignore"));
})(S || (S = {}));
new TextEncoder();
new TextDecoder();
"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"
  .split("")
  .reduce((e, t) => ((e[t.charCodeAt(0)] = t), e), []);
"-0123456789_".split("").reduce((e, t) => ((e[t.charCodeAt(0)] = t), e), []);
const R = {
    src: "/2024/_astro/default.BwGPpvjV.png",
    width: 378,
    height: 434,
    format: "png",
  },
  me = Object.freeze(
    Object.defineProperty({ __proto__: null, default: R }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  de = U(),
  fe = M(
    async (e, t, n) => {
      const r = e.createAstro(de, t, n);
      r.self = fe;
      const s = {},
        { data: o } = r.props,
        a = await r.glob(
          Object.assign({
            "../data/images/speakers/default.png": () =>
              f(() => Promise.resolve().then(() => me), void 0),
            "../data/images/speakers/ibam.png": () =>
              f(() => import("./ibam.BxusXPox.js"), []),
            "../data/images/speakers/imre.png": () =>
              f(() => import("./imre.CGcC82zZ.js"), []),
            "../data/images/speakers/listiarso.png": () =>
              f(() => import("./listiarso.C8Wb10rz.js"), []),
            "../data/images/speakers/secgron.png": () =>
              f(() => import("./secgron.oQzv4F7R.js"), []),
            "../data/images/speakers/tintin.png": () =>
              f(() => import("./tintin.CDKRz0p1.js"), []),
            "../data/images/speakers/tre.png": () =>
              f(() => import("./tre.BYiXLhev.js"), []),
          }),
          () => "../data/images/speakers/*.{png,jpg,jpeg,svg,webp}",
        );
      o.speakers?.forEach((c) => {
        let d = a.find((m) => c.imageName == m.default.src),
          u;
        (d ? (u = d.default) : (u = R), (s[c.name] = u));
      });
      function i() {
        return o.speakers?.join(", ");
      }
      return oe`${re()}<div class="event-card col-span-12 mb-8 flex bg-gradient-to-r from-[#2F4D78] to-[#28456F] text-white lg:grid-rows-1" data-astro-cid-h4bw6n5x> <!-- {
    data.speakers?.map((speaker) => (
      <div class="event-card-image w-1/4 flex-shrink-0">
        <Image
          src={speakerImg[speaker.name]}
          alt="test"
          height={200}
          class:list={["aspect-video h-full w-full object-cover"]}
        />
      </div>
    ))
  } --> <!-- <div class="event-card-speaker col-span-7 col-start-5 ml-5 py-4 lg:col-span-2 lg:col-start-3 lg:ml-0">
    <h3 class="event-card-speaker-name mb-3 text-xl font-bold">
      {data.speaker.name}
    </h3>
    <p class="event-card-speaker-description font-light">
      {data.speaker.title}
    </p>
  </div> --> <div class="event-card-content lg:border-t-none border-t-none border-t-white border-opacity-50 p-4" data-astro-cid-h4bw6n5x> <h3 class="event-card-title mb-3 text-xl font-bold" data-astro-cid-h4bw6n5x> ${o.title} </h3> <p class="event-card-description mb-4 leading-tight" data-astro-cid-h4bw6n5x> ${i()} </p> <p class="event-card-time font-medium" data-astro-cid-h4bw6n5x> ${o.time_start} - ${o.time_end} </p> </div> </div> `;
    },
    "/tmp/idsw-archive-build/2024/src/components/EventCard.astro",
    void 0,
  );
function he({ data: e }) {
  const [t, n] = P.useState(0);
  return l.jsxs("div", {
    className: "grid grid-cols-12",
    children: [
      l.jsxs("div", {
        className:
          "agenda-left relative col-span-12 items-end pb-0 lg:col-span-3 lg:block",
        children: [
          l.jsx("div", { className: "bg-to-start bg-primary-dark" }),
          l.jsxs("div", {
            className: "agenda-text text-white",
            children: [
              l.jsx("h2", {
                className: "mb-12 text-3xl font-bold lg:text-5xl",
                children: "Event Agenda",
              }),
              l.jsx("div", {
                className: "flex lg:flex-col gap-5 text-left mb-8",
                children: e.map((r, s) =>
                  l.jsx(
                    "button",
                    {
                      onClick: () => n(s),
                      className:
                        t == s
                          ? "w-full bg-lightblue p-5 text-left text-2xl font-bold"
                          : "w-full bg-white/10 p-5 text-left text-2xl font-bold text-white/60 transition hover:bg-lightblue/20 hover:text-white/80",
                      children: r.day,
                    },
                    s,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      l.jsx("div", {
        className:
          "agenda-right relative col-span-12 grid flex-shrink grid-cols-9 flex-col lg:col-start-5",
        children: e.map((r, s) =>
          s == t
            ? r.agendas.map((o, a) =>
                l.jsx(
                  "div",
                  {
                    className:
                      "event-card col-span-12 mb-8 flex bg-gradient-to-r from-[#2F4D78] to-[#28456F] text-white lg:grid-rows-1",
                    children: l.jsxs("div", {
                      className:
                        "event-card-content lg:border-t-none border-t-none border-t-white border-opacity-50 p-4",
                      children: [
                        l.jsx("h3", {
                          className: "event-card-title mb-3 text-xl font-bold",
                          children: o.title,
                        }),
                        l.jsx("p", {
                          className:
                            "event-card-description mb-4 leading-tight",
                          children: o.speakers?.join(", "),
                        }),
                        l.jsxs("p", {
                          className: "event-card-time font-medium",
                          children: [o.time_start, " - ", o.time_end],
                        }),
                      ],
                    }),
                  },
                  a,
                ),
              )
            : "",
        ),
      }),
    ],
  });
}
export { he as default };
