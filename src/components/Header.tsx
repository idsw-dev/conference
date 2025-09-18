import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    });
  }, []);
  const menus = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Speakers",
      href: "#speakers",
    },
    {
      name: "Highlight",
      href: "#highlight",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <header>
      <nav
        className={`fixed top-0 right-0 left-0 z-10 border-gray-200 transition duration-200 ${isScrolled ? "scrolled bg-white shadow-xl" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-10 py-5">
          <a
            href="#"
            className={`flex items-center space-x-3 transition duration-200 rtl:space-x-reverse`}
          >
            <img src="/nav-logo.png" className="h-8" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              ></path>
            </svg>
          </button>
          <div
            className={`w-full transition duration-200 md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col rounded-lg border bg-white p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse dark:border-gray-700">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.href}
                    onClick={() => setIsOpen(!isOpen)}
                    className="menu-link text-primary-dark block rounded px-3 py-2 md:bg-transparent md:p-0 lg:text-white"
                    aria-current="page"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
