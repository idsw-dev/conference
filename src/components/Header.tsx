import { useEffect, useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 0)
    })
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsOpen(false)
      }
    })
  }, [])
  const menus = [
    {
      name: 'Home',
      href: '#'
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Agenda',
      href: '#agenda'
    },
    {
      name: 'Speakers',
      href: '#speakers'
    },
    {
      name: 'FAQ',
      href: '#faq'
    },
  ]
  return (
    <header>
      <nav className={`fixed left-0 z-10 right-0 top-0 border-gray-200 transition duration-200 ${isScrolled ? 'bg-white shadow-xl scrolled' : 'bg-transparent '}`}>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a href="#" className={`flex items-center space-x-3 rtl:space-x-reverse transition duration-200 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
            <img src="/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">IDSW</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"></path>
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto transition duration-200 ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul
              className="mt-4 flex flex-col rounded-lg border bg-white md:bg-transparent p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              {
                menus.map(menu => (
                  <li>
                    <a
                      href={menu.href}
                      onClick={() => setIsOpen(!isOpen)}
                      className="menu-link block rounded  px-3 py-2 text-primary-dark md:bg-transparent md:p-0 lg:text-white "
                      aria-current="page">{menu.name}</a
                    >
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}