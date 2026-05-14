import { j as e } from "./jsx-runtime.D_zvdyIk.js";
import { r as s } from "./index.RH_Wq4ov.js";
import { c as i } from "./createLucideIcon.0GkCQ-FG.js";
/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  c = i("menu", d);
function u() {
  const [a, n] = s.useState(!1),
    [r, o] = s.useState(!1);
  s.useEffect(() => {
    (window.addEventListener("scroll", () => {
      o(window.scrollY > 0);
    }),
      window.addEventListener("resize", () => {
        window.innerWidth < 768 && n(!1);
      }));
  }, []);
  const l = [
    { name: "Home", href: "/#" },
    { name: "Speakers", href: "/#speakers" },
    { name: "Agenda", href: "/#agenda" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];
  return e.jsx("header", {
    children: e.jsx("nav", {
      className: `fixed top-0 right-0 left-0 z-[999] border-gray-200 transition-all duration-300 ease-in-out ${r ? "bg-dark/40 shadow-lg backdrop-blur-md" : "bg-transparent"}`,
      children: e.jsxs("div", {
        className:
          "mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-10 py-5",
        children: [
          e.jsx("a", {
            href: "/",
            className:
              "flex items-center space-x-3 transition duration-200 rtl:space-x-reverse",
            children: e.jsx("img", {
              src: "/nav-logo.png",
              className: "h-8",
              alt: "Flowbite Logo",
            }),
          }),
          e.jsxs("button", {
            "data-collapse-toggle": "navbar-default",
            type: "button",
            onClick: () => n(!a),
            className:
              "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm transition-colors duration-300 focus:ring-2 focus:ring-white focus:outline-none md:hidden",
            "aria-controls": "navbar-default",
            "aria-expanded": "false",
            children: [
              e.jsx("span", {
                className: "sr-only",
                children: "Open main menu",
              }),
              e.jsx(c, { className: "h-8 w-8 text-white" }),
            ],
          }),
          e.jsx("div", {
            className: `w-full transition duration-200 md:block md:w-auto ${a ? "block" : "hidden"}`,
            id: "navbar-default",
            children: e.jsx("ul", {
              className:
                "mt-4 flex flex-col rounded-lg bg-white p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:bg-transparent md:p-0 rtl:space-x-reverse",
              children: l.map((t) =>
                e.jsx(
                  "li",
                  {
                    children: e.jsx("a", {
                      href: t.href,
                      onClick: () => n(!a),
                      className:
                        "menu-link block rounded px-3 py-2 text-gray-900 transition-colors duration-300 hover:text-blue-500 md:bg-transparent md:p-0 md:text-white",
                      "aria-current": "page",
                      children: t.name,
                    }),
                  },
                  t.name,
                ),
              ),
            }),
          }),
        ],
      }),
    }),
  });
}
export { u as default };
