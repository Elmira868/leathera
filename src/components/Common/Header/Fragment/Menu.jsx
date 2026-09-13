import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { MenuItem } from "../../../../lib/constants";

const Menu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const panelRef = useRef(null);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the drawer on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenAccordion(null);
  };

  return (
    <nav className="relative z-50">
      {/* Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-0">
        <Link to="/" className="text-base font-semibold tracking-tight md:hidden">
         Menu
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {MenuItem.map((item) => (
            <li
              key={item.key || item.title}
              className="group relative"
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className="relative block py-4 pr-8 text-sm font-medium text-gray-800
                    transition-colors after:absolute after:bottom-3 after:left-0
                    after:h-px after:w-0 after:bg-primary after:transition-all
                    after:duration-200 hover:text-gray-950 group-hover:after:w-[calc(100%-2rem)]"
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  className="relative py-4 pr-8 text-sm font-medium text-gray-800
                    transition-colors after:absolute after:bottom-3 after:left-0
                    after:h-px after:w-0 after:bg-primary after:transition-all
                    after:duration-200 hover:text-gray-950 group-hover:after:w-[calc(100%-2rem)]"
                >
                  {item.title}
                </button>
              )}

              {item.items && (
                <div
                  className="invisible absolute left-0 top-full z-50 w-162.5
                    translate-y-2 rounded-xl border border-gray-100 bg-white p-6
                    opacity-0 shadow-xl transition-all duration-200
                    group-hover:visible group-hover:translate-y-0
                    group-hover:opacity-100"
                >
                  <div className="grid grid-cols-3 gap-8">
                    {item.items.map((category) => (
                      <div key={category.title}>
                        <h3 className="mb-4 text-sm font-bold text-gray-900">
                          {category.title}
                        </h3>
                        <ul className="space-y-3">
                          {category.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                to={subItem.path}
                                className="text-sm text-gray-500 transition-colors
                                  hover:text-primary"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg
            text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="h-6 w-6"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          onClick={closeMobile}
          className={`absolute inset-0 bg-gray-950/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          ref={panelRef}
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm
            flex-col bg-white shadow-2xl transition-transform duration-300
            ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <span className="text-sm font-semibold text-gray-900">Menu</span>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg
                text-gray-600 transition-colors hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-2 py-2">
            {MenuItem.map((item) => {
              const key = item.key || item.title;
              const isOpen = openAccordion === key;

              return (
                <li key={key} className="border-b border-gray-100 last:border-b-0">
                  {item.items ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between px-3
                          py-4 text-left text-sm font-medium text-gray-900"
                      >
                        {item.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0 space-y-5 px-3">
                          {item.items.map((category) => (
                            <div key={category.title}>
                              <h3 className="mb-2 text-xs font-bold text-gray-500">
                                {category.title}
                              </h3>
                              <ul className="space-y-3">
                                {category.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link
                                      to={subItem.path}
                                      onClick={closeMobile}
                                      className="text-sm text-gray-700
                                        hover:text-gray-950"
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.path ? (
                    <Link
                      to={item.path}
                      onClick={closeMobile}
                      className="block px-3 py-4 text-sm font-medium text-gray-900"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button className="block w-full px-3 py-4 text-left text-sm font-medium text-gray-900">
                      {item.title}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;