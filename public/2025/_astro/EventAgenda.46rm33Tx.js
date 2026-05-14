import { j as e } from "./jsx-runtime.D_zvdyIk.js";
import { r as c } from "./index.RH_Wq4ov.js";
import { BlurFade as o } from "./blur-fade.BGnYqk2e.js";
import "./use-in-view.BpDTmf6i.js";
function j({ data: n }) {
  const [i, a] = c.useState(0),
    d = (t) => {
      t !== i && a(t);
    },
    x = (t) => {
      switch (t) {
        case "keynote":
          return e.jsxs("div", {
            className:
              "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 text-xs font-semibold text-yellow-300",
            children: [
              e.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                children: e.jsx("path", {
                  d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                }),
              }),
              "Keynote",
            ],
          });
        case "sponsors":
          return e.jsxs("div", {
            className:
              "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 text-xs font-semibold text-purple-300",
            children: [
              e.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                  e.jsx("path", {
                    d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
                  }),
                  e.jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" }),
                ],
              }),
              "Sponsor Session",
            ],
          });
        case "break":
          return e.jsxs("div", {
            className:
              "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-semibold text-amber-300",
            children: [
              e.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                  e.jsx("path", { d: "M17 8h1a4 4 0 1 1 0 8h-1" }),
                  e.jsx("path", {
                    d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",
                  }),
                  e.jsx("line", { x1: "6", x2: "6", y1: "2", y2: "4" }),
                  e.jsx("line", { x1: "10", x2: "10", y1: "2", y2: "4" }),
                  e.jsx("line", { x1: "14", x2: "14", y1: "2", y2: "4" }),
                ],
              }),
              "Break",
            ],
          });
        case "others":
          return null;
        default:
          return null;
      }
    };
  return e.jsx("section", {
    id: "agenda",
    className: "relative z-10 bg-[#080814] bg-gradient-to-b py-12 text-white",
    children: e.jsx("div", {
      className: "container mx-auto",
      children: e.jsxs("div", {
        className: "mx-auto",
        children: [
          e.jsxs("div", {
            className: "section-header mb-12 text-center",
            children: [
              e.jsx("h2", {
                className: "mb-2 text-2xl font-bold md:text-3xl",
                children: "Event Agenda",
              }),
              e.jsx("span", {
                className: "text-xl",
                children: "Explore sessions and speakers for each day.",
              }),
            ],
          }),
          e.jsx("div", {
            className: "mb-8 flex justify-center",
            children: e.jsx("div", {
              className:
                "relative inline-flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm",
              children: n.map((t, r) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => d(r),
                    className: `relative z-10 cursor-pointer rounded-md px-6 py-3 text-base font-semibold transition-all duration-300 ${i === r ? "bg-blue-600/30 text-white shadow-lg shadow-blue-500/20 backdrop-blur-md" : "bg-transparent text-white/60 hover:bg-blue-600/20 hover:text-white/80"} `,
                    children: [
                      "Day ",
                      r + 1,
                      " ",
                      e.jsxs("span", {
                        className: `text-white/60 ${i === r ? "text-white" : ""}`,
                        children: ["(", t.date, ")"],
                      }),
                    ],
                  },
                  `tab-${t.day}-${t.date}`,
                ),
              ),
            }),
          }),
          e.jsx("div", {
            className: "relative min-h-[500px]",
            children: n.map((t, r) =>
              e.jsx(
                "div",
                {
                  className: `transition-opacity duration-300 ${i === r ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"} `,
                  children: e.jsx("div", {
                    className: "space-y-4",
                    children:
                      i === r &&
                      t.agendas.map((s, l) =>
                        e.jsx(
                          o,
                          {
                            delay: 0.1 + l * 0.05,
                            children: e.jsx("div", {
                              className:
                                "group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#04060F] bg-gradient-to-br from-[#04060F]/95 via-[#070C1A]/95 to-[#0A1230]/90 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10",
                              children: e.jsxs("div", {
                                className: "flex-1 p-5",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "mb-3 flex flex-wrap items-center gap-2",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "inline-flex items-center gap-2 rounded-md bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-300",
                                        children: [
                                          e.jsxs("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "text-blue-300",
                                            "aria-hidden": "true",
                                            children: [
                                              e.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                              }),
                                              e.jsx("polyline", {
                                                points: "12 6 12 12 16 14",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("span", {
                                            children: [
                                              s.time_start,
                                              s.time_end && ` - ${s.time_end}`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      x(s.type),
                                    ],
                                  }),
                                  e.jsx("h3", {
                                    className:
                                      "mb-2 max-w-4xl text-lg font-bold text-white",
                                    children: s.title,
                                  }),
                                  s.speakers &&
                                    s.speakers.length > 0 &&
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-white/70",
                                      children: [
                                        e.jsxs("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          "aria-hidden": "true",
                                          children: [
                                            e.jsx("path", {
                                              d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                                            }),
                                            e.jsx("circle", {
                                              cx: "9",
                                              cy: "7",
                                              r: "4",
                                            }),
                                            e.jsx("path", {
                                              d: "M22 21v-2a4 4 0 0 0-3-3.87",
                                            }),
                                            e.jsx("path", {
                                              d: "M16 3.13a4 4 0 0 1 0 7.75",
                                            }),
                                          ],
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          children: s.speakers.join(", "),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            }),
                          },
                          `agenda-${t.date}-${s.time_start}-${l}`,
                        ),
                      ),
                  }),
                },
                `day-${t.day}-${t.date}`,
              ),
            ),
          }),
          e.jsx("div", {
            className: "mt-8 text-center",
            children: e.jsx(o, {
              delay: 0.8,
              children: e.jsx("p", {
                className: "text-lg text-gray-300",
                children:
                  "The event committee may change the schedule at any time.",
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
export { j as default };
