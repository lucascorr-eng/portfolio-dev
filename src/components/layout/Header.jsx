import { useState } from "react";
import menu from "../../assets/icons/menu-bar.svg";
import DividerLine from "../ui/DividerLine";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";

const menuItems = [
  { label: "início", to: "/" },
  { label: "projetos", to: "/projects" },
  { label: "habilidades", to: "/skills" },
  { label: "sobre", to: "/about" },
];

const menuItemsPC = [
  { label: "início", to: "/" },
  { label: "projetos", to: "/projects" },
  { label: "habilidades", to: "/skills" },
  { label: "sobre", to: "/about" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="px-6 lg:grid-cols-2 lg:gap-x-8 lg:w-full lg:max-w-480 lg:mx-auto">
        <div className="flex items-center justify-between w-full p-4 font-firaCode">
          <p>
            <span className="text-green-700">./</span>LucasCorrea
          </p>

          <div className="flex justify-between gap-10 text-gray-500">
            {menuItemsPC.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-500"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <nav className="hidden lg:block">
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 bg-zinc-900 py-1 px-4 rounded-2xl  font-semibold text-center text-white"
            >
              contato
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
            className="lg:hidden"
          >
            <img src={menu} alt="" className="w-6 h-6" />
          </button>
        </div>
      </header>
      <div className="mb-10">
        <DividerLine />
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/45"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 flex h-screen w-[86%] max-w-[320px]
        flex-col bg-white px-4 pb-5 pt-4 transition-transform duration-300 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-6 flex items-center justify-between font-firaCode">
          <p>
            <span className="text-green-700">./</span>LucasCorrea
          </p>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200"
            aria-label="Fechar menu"
          >
            x
          </button>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-between border-b border-gray-200 py-4 text-left"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-4xl font-bold leading-none ${
                      isActive ? "text-black" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={isActive ? "text-green-500" : "text-gray-300"}
                  >
                    →
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-6 rounded-2xl bg-zinc-900 py-3 font-bold text-center text-white"
        >
          contato
        </NavLink>

        <p className="mt-4 text-center font-firaCode text-xs text-gray-500">
          lucascorrea.dev - 2026
        </p>
      </aside>
    </>
  );
}

export default Header;
