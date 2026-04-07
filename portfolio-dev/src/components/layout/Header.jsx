import { useState } from "react";
import menu from "../../assets/icons/menu-bar.svg";
import DividerLine from "../ui/dividerLine";

const menuItems = [
  { label: "início", active: true },
  { label: "projetos", active: false },
  { label: "habilidades", active: false },
  { label: "sobre", active: false },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="mb-10">
        <div className="flex items-center justify-between w-full p-4 font-firaCode">
          <p>
            <span className="text-green-700">./</span>LucasCorrea
          </p>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <img src={menu} alt="" className="w-6 h-6" />
          </button>
        </div>

        <DividerLine />
      </header>

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
            <button
              key={item.label}
              type="button"
              className="flex w-full items-center justify-between border-b border-gray-200 py-4 text-left"
            >
              <span
                className={`text-4xl font-bold leading-none ${
                  item.active ? "text-black" : "text-gray-300"
                }`}
              >
                {item.label}
              </span>
              <span
                className={item.active ? "text-green-500" : "text-gray-300"}
              >
                →
              </span>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="mt-6 rounded-2xl bg-zinc-900 py-3 font-bold text-white"
        >
          contato
        </button>

        <p className="mt-4 text-center font-firaCode text-xs text-gray-500">
          lucascorrea.dev - 2026
        </p>
      </aside>
    </>
  );
}

export default Header;
