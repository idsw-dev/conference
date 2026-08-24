import { j as e } from "./jsx-runtime.7faW4zRM.js";
import { r as a } from "./index.DhYZZe0J.js";
function m(s, l) {
  const [t, n] = a.useState(!1),
    r = a.useRef(s);
  return (
    a.useEffect(() => {
      r.current = s;
    }, [s]),
    a.useEffect(() => {
      let c;
      return (
        t && (c = window.setInterval(() => r.current(), l)),
        () => {
          c !== void 0 && window.clearInterval(c);
        }
      );
    }, [t, l]),
    {
      start: () => n(!0),
      stop: () => n(!1),
      toggle: () => n((c) => !c),
      active: t,
    }
  );
}
function i(s) {
  return s.toString().padStart(2, "0");
}
function u({ date: s, ...l }) {
  const targetTime = s ? new Date(s).getTime() : 0;
  const isPast = targetTime <= new Date().getTime();
  const [t, n] = a.useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [ended, setEnded] = a.useState(isPast);
  function r() {
    const d = new Date(),
      x = targetTime - d.getTime();
    if (x <= 0) {
      setEnded(true);
    } else {
      setEnded(false);
      n({
        days: Math.floor(x / (1e3 * 60 * 60 * 24)),
        hours: Math.floor((x / (1e3 * 60 * 60)) % 24),
        mins: Math.floor((x / (1e3 * 60)) % 60),
        secs: Math.floor((x / 1e3) % 60),
      });
    }
  }
  const { start: o } = m(r, 1e3);
  a.useEffect(() => {
    r();
    o();
  }, []);
  if (ended) {
    return e.jsxs("div", {
      className:
        "flex flex-col items-center justify-center text-center gap-3 py-2",
      children: [
        e.jsx("span", {
          className: "text-3xl font-bold text-white md:text-5xl tracking-tight",
          children: "EVENT CONCLUDED",
        }),
        e.jsx("span", {
          className:
            "text-base font-normal text-gray-400 xl:text-2xl tracking-wider uppercase",
          children: "Thank you for joining IDSW 2024",
        }),
      ],
    });
  }
  return e.jsxs("div", {
    ...l,
    className: `flex flex-wrap gap-8 xl:gap-4 ${l.className}`,
    children: [
      e.jsxs("div", {
        className: "flex flex-row items-center gap-5 md:flex-col",
        children: [
          e.jsx("span", {
            className: "min-w-16 text-center text-3xl font-bold md:text-5xl",
            children: i(t.days),
          }),
          e.jsx("span", {
            className: "text-base text-gray-400 xl:text-2xl",
            children: "DAYS",
          }),
        ],
      }),
      e.jsx("div", {
        className: "mx-4 mt-2 hidden text-gray-500 lg:block",
        children: ":",
      }),
      e.jsxs("div", {
        className: "flex items-center gap-5 md:flex-col",
        children: [
          e.jsx("span", {
            className: "min-w-16 text-center text-3xl font-bold md:text-5xl",
            children: i(t.hours),
          }),
          e.jsx("span", {
            className: "min-w-16 text-base text-gray-400 xl:text-2xl",
            children: "HOURS",
          }),
        ],
      }),
      e.jsx("div", {
        className: "mx-4 mt-2 hidden text-gray-500 lg:block",
        children: ":",
      }),
      e.jsxs("div", {
        className: "flex items-center gap-5 md:flex-col",
        children: [
          e.jsx("span", {
            className: "min-w-16 text-center text-3xl font-bold md:text-5xl",
            children: i(t.mins),
          }),
          e.jsx("span", {
            className: "text-base text-gray-400 xl:text-2xl",
            children: "MINUTES",
          }),
        ],
      }),
      e.jsx("div", {
        className: "mx-4 mt-2 hidden text-gray-500 lg:block",
        children: ":",
      }),
      e.jsxs("div", {
        className: "flex items-center gap-5 md:flex-col",
        children: [
          e.jsx("span", {
            className: "min-w-16 text-center text-3xl font-bold md:text-5xl",
            children: i(t.secs),
          }),
          e.jsx("span", {
            className: "text-base text-gray-400 xl:text-2xl",
            children: "SECONDS",
          }),
        ],
      }),
    ],
  });
}
export { u as default };
