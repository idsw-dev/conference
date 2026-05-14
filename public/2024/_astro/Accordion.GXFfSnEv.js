import { j as n } from "./jsx-runtime.7faW4zRM.js";
import { r } from "./index.DhYZZe0J.js";
function g({ data: c, ...l }) {
  const [t, a] = r.useState(-1),
    [x, h] = r.useState([]),
    i = r.useRef([]);
  r.useEffect(() => {
    const o = i.current.map((e) => e?.scrollHeight ?? 0);
    h(o);
  }, [c]);
  const d = (o) => {
      a(t === o ? -1 : o);
    },
    m = (o, e) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), d(e));
    };
  return n.jsx("div", {
    className: "accordion flex flex-col",
    ...l,
    children: c.map((o, e) =>
      n.jsxs(
        "div",
        {
          className: "accordion-item",
          children: [
            n.jsxs("div", {
              className:
                "accordion-title flex cursor-pointer items-center border border-[#B8CAE3] bg-[#F3F8FF] p-5",
              onClick: () => d(e),
              onKeyDown: (s) => m(s, e),
              "aria-expanded": t === e,
              "aria-controls": `accordion-content-${e}`,
              tabIndex: 0,
              role: "button",
              children: [
                n.jsx("a", {
                  className: "flex-1",
                  id: `accordion-title-${e}`,
                  children: o.question,
                }),
                n.jsx("div", {
                  className: `accordion-icon ${t === e ? "rotate-180 transform" : ""}`,
                  children: n.jsx(p, {}),
                }),
              ],
            }),
            n.jsx("div", {
              id: `accordion-content-${e}`,
              "aria-labelledby": `accordion-title-${e}`,
              "aria-hidden": e !== t,
              className: `accordion-content overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out ${t === e ? "border" : ""}`,
              style: { maxHeight: t === e ? `${x[e]}px` : "0px" },
              children: n.jsx("div", {
                className: "accordion-content-padding px-4 py-4",
                ref: (s) => (i.current[e] = s),
                children: o.answer,
              }),
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function p() {
  return n.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    children: n.jsx("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30 12L16 24L2 12",
    }),
  });
}
export { g as default };
