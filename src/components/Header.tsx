import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

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
      href: "/#",
    },
    {
      name: "Speakers",
      href: "/#speakers",
    },
    {
      name: "Agenda",
      href: "/#agenda",
    },
    {
      name: "FAQ",
      href: "/#faq",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];
  return (
    <header>
      <nav
        className={`fixed top-0 right-0 left-0 z-[999] border-gray-200 transition-all duration-300 ease-in-out ${isScrolled ? "bg-dark/40 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-10 py-5">
          <a
            href="/"
            className={`flex items-center space-x-3 transition duration-200 rtl:space-x-reverse`}
          >
            <img src="/nav-logo.png" className="h-8" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm transition-colors duration-300 focus:ring-2 focus:ring-white focus:outline-none md:hidden`}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-8 w-8 text-white" />
          </button>
          <div
            className={`w-full transition duration-200 md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
            id="navbar-default"
          >
            <ul
              className={`mt-4 flex flex-col rounded-lg bg-white p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:bg-transparent md:p-0 rtl:space-x-reverse`}
            >
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.href}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`menu-link block rounded px-3 py-2 text-gray-900 transition-colors duration-300 hover:text-blue-500 md:bg-transparent md:p-0 md:text-white`}
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
