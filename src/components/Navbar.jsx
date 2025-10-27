import React from "react";
import { Menu, X } from "lucide-react";
import CopyLink from "./CopyLinkButton";

export default function Navbar({ lang, setLang, menuOpen, setMenuOpen, t }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/30">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
            <img
              src="./Luiz Murakami.jpg"
              alt="Photo"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Luiz Murakami</h1>
            <p className="text-xs text-slate-600">Front-end Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {/* <a href="#about" className="text-sm hover:underline">
            {t.sobre}
          </a>
          <a href="#projects" className="text-sm hover:underline">
            {t.projetos}
          </a>
          <a href="#contact" className="text-sm hover:underline">
            {t.contato}
          </a> */}
          <a
            href={
              lang === "pt"
                ? `${
                    import.meta.env.BASE_URL
                  }Curriculo- Luiz Henrique E. Murakami.pdf`
                : `${
                    import.meta.env.BASE_URL
                  }Resume CV - Luiz Henrique E. Murakami.pdf`
            }
            download
            className="whitespace-nowrap inline-block ml-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-transparent bg-gradient-to-r from-[#bde1f3] to-[#d9f7ff] hover:opacity-95 transition"
          >
            {t.baixarCurriculo}
          </a>
          <CopyLink t={t} />

          {/* Language Switcher */}
          <div className="ml-4 flex gap-2">
            <button
              onClick={() => setLang("pt")}
              className={`px-2 py-1 rounded transition ${
                lang === "pt" ? "bg-slate-300" : "bg-white/60"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded transition ${
                lang === "en" ? "bg-slate-300" : "bg-white/60"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <div className="flex gap-1">
            <button
              onClick={() => setLang("pt")}
              className={`px-2 py-1 rounded text-xs ${
                lang === "pt" ? "bg-slate-300" : "bg-white/60"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded text-xs ${
                lang === "en" ? "bg-slate-300" : "bg-white/60"
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-white/70 rounded-md shadow hover:bg-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-5 border-t border-white/40 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium hover:underline"
          >
            {t.sobre}
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium hover:underline"
          >
            {t.projetos}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium hover:underline"
          >
            {t.contato}
          </a>
          <a
            href={
              lang === "pt"
                ? `${
                    import.meta.env.BASE_URL
                  }Curriculo- Luiz Henrique E. Murakami.pdf`
                : `${
                    import.meta.env.BASE_URL
                  }Resume CV - Luiz Henrique E. Murakami.pdf`
            }
            download
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-full text-sm font-medium shadow-sm bg-gradient-to-r from-[#bde1f3] to-[#d9f7ff] hover:opacity-90 transition"
          >
            {t.baixarCurriculo}
          </a>
          <CopyLink t={t} />
        </div>
      </nav>
    </header>
  );
}
