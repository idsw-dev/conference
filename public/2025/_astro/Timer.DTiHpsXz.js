import { j as t } from "./jsx-runtime.D_zvdyIk.js";
import { r as x } from "./index.RH_Wq4ov.js";
const r = ({ value: n, label: l }) =>
  t.jsxs("div", {
    className: "flex flex-col items-center",
    children: [
      t.jsx("span", {
        className:
          "text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl",
        children: n,
      }),
      t.jsx("span", {
        className:
          "mt-1 text-xs font-medium tracking-wider text-white sm:text-sm",
        children: l,
      }),
    ],
  });
function c() {
  const n = "2025-11-22T00:00:00Z",
    l = () => {
      const e = +new Date(n) - +new Date();
      return e > 0
        ? {
            days: Math.floor(e / 864e5),
            hours: Math.floor((e / 36e5) % 24),
            minutes: Math.floor((e / 1e3 / 60) % 60),
            seconds: Math.floor((e / 1e3) % 60),
          }
        : null;
    },
    [s, m] = x.useState(l());
  x.useEffect(() => {
    const e = setInterval(() => {
      m(l());
    }, 1e3);
    return () => clearInterval(e);
  }, []);
  const a = (e) => e.toString().padStart(2, "0");
  return s
    ? t.jsxs("div", {
        className:
          "flex items-center gap-2 rounded-3xl border border-white/40 bg-white/25 px-12 py-6 sm:gap-4 sm:px-20 sm:py-8 md:gap-8",
        children: [
          t.jsx(r, { value: a(s.days), label: "DAYS" }),
          t.jsx("span", {
            className: "sm:text-md text-sm font-light text-white md:text-xl",
            children: ":",
          }),
          t.jsx(r, { value: a(s.hours), label: "HOURS" }),
          t.jsx("span", {
            className: "sm:text-md text-sm font-light text-white md:text-xl",
            children: ":",
          }),
          t.jsx(r, { value: a(s.minutes), label: "MINUTES" }),
          t.jsx("span", {
            className: "sm:text-md text-sm font-light text-white md:text-xl",
            children: ":",
          }),
          t.jsx(r, { value: a(s.seconds), label: "SECONDS" }),
        ],
      })
    : t.jsx("div", {
        className: "text-lg font-bold text-slate-800",
        children: "The call for proposals is now closed.",
      });
}
export { c as default };
