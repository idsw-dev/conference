import { j as e } from "./jsx-runtime.7faW4zRM.js";
import { r as t } from "./index.DhYZZe0J.js";
function c() {
  const [r, a] = t.useState(!1),
    [n, l] = t.useState(!1);
  t.useEffect(() => {
    (window.addEventListener("scroll", () => {
      l(window.scrollY > 0);
    }),
      window.addEventListener("resize", () => {
        window.innerWidth < 768 && a(!1);
      }));
  }, []);
  const o = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "#speakers" },
    { name: "FAQ", href: "#faq" },
  ];
  return e.jsx("header", {
    children: e.jsx("nav", {
      className: `fixed left-0 right-0 top-0 z-10 border-gray-200 transition duration-200 ${n ? "scrolled bg-white shadow-xl" : "bg-transparent"}`,
      children: e.jsxs("div", {
        className:
          "mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-10 py-5",
        children: [
          e.jsxs("a", {
            href: "#",
            className: `flex items-center space-x-3 transition duration-200 rtl:space-x-reverse ${n ? "opacity-100" : "opacity-0"}`,
            children: [
              e.jsx("img", {
                src: "/logo.svg",
                className: "h-8",
                alt: "Flowbite Logo",
              }),
              e.jsx("span", {
                className:
                  "self-center whitespace-nowrap text-2xl font-semibold",
                children: "IDSW",
              }),
            ],
          }),
          e.jsxs("button", {
            "data-collapse-toggle": "navbar-default",
            type: "button",
            onClick: () => a(!r),
            className:
              "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
            "aria-controls": "navbar-default",
            "aria-expanded": "false",
            children: [
              e.jsx("span", {
                className: "sr-only",
                children: "Open main menu",
              }),
              e.jsx("svg", {
                className: "h-5 w-5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 17 14",
                children: e.jsx("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M1 1h15M1 7h15M1 13h15",
                }),
              }),
            ],
          }),
          e.jsx("div", {
            className: `w-full transition duration-200 md:block md:w-auto ${r ? "block" : "hidden"}`,
            id: "navbar-default",
            children: e.jsx("ul", {
              className:
                "mt-4 flex flex-col rounded-lg border bg-white p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse",
              children: o.map((s) =>
                e.jsx(
                  "li",
                  {
                    children: e.jsx("a", {
                      href: s.href,
                      onClick: () => a(!r),
                      className:
                        "menu-link block rounded px-3 py-2 text-primary-dark md:bg-transparent md:p-0 lg:text-white",
                      "aria-current": "page",
                      children: s.name,
                    }),
                  },
                  s.name,
                ),
              ),
            }),
          }),
        ],
      }),
    }),
  });
}
export { c as default };
