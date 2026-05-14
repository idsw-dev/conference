import { j as n } from "./jsx-runtime.D_zvdyIk.js";
import { r as c } from "./index.RH_Wq4ov.js";
import { c as m } from "./createLucideIcon.0GkCQ-FG.js";
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  u = m("chevron-down", p);
function b({ data: s, ...l }) {
  const [o, a] = c.useState(-1),
    [x, f] = c.useState([]),
    i = c.useRef([]);
  c.useEffect(() => {
    const t = i.current.map((e) => e?.scrollHeight ?? 0);
    f(t);
  }, [s]);
  const d = (t) => {
      a(o === t ? -1 : t);
    },
    h = (t, e) => {
      (t.key === "Enter" || t.key === " ") && (t.preventDefault(), d(e));
    };
  return n.jsx("div", {
    className: "accordion flex flex-col text-left",
    ...l,
    children: s.map((t, e) =>
      n.jsxs(
        "div",
        {
          className: "accordion-item mb-2 rounded-xl bg-[#8BA6FF33]",
          children: [
            n.jsxs("div", {
              className: `accordion-title flex cursor-pointer items-start p-5 ${o === e ? "border-b border-white/20" : ""}`,
              onClick: () => d(e),
              onKeyDown: (r) => h(r, e),
              "aria-expanded": o === e,
              "aria-controls": `accordion-content-${e}`,
              tabIndex: 0,
              role: "button",
              children: [
                n.jsx("a", {
                  className: "flex-1 text-left",
                  id: `accordion-title-${e}`,
                  children: t.question,
                }),
                n.jsx("div", {
                  className: `accordion-icon flex-shrink-0 ${o === e ? "rotate-180 transform" : ""}`,
                  children: n.jsx(u, {}),
                }),
              ],
            }),
            n.jsx("div", {
              id: `accordion-content-${e}`,
              "aria-labelledby": `accordion-title-${e}`,
              "aria-hidden": e !== o,
              className:
                "accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out",
              style: { maxHeight: o === e ? `${x[e]}px` : "0px" },
              children: n.jsx("div", {
                className: "accordion-content-padding px-4 py-4 text-left",
                ref: (r) => {
                  i.current[e] = r;
                },
                children: t.answer,
              }),
            }),
          ],
        },
        e,
      ),
    ),
  });
}
export { b as default };
