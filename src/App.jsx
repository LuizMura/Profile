import React, { useState } from "react";
import { translations } from "./translations";
import { Menu, X } from "lucide-react";
export default function App() {
  const [lang, setLang] = useState("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#577089] via-[#868787] to-[#f7fff6] font-sans text-slate-900">
      {/* NAVBAR */}
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

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#about" className="text-sm hover:underline">
              {t.sobre}
            </a>
            <a href="#projects" className="text-sm hover:underline">
              {t.projetos}
            </a>
            <a href="#contact" className="text-sm hover:underline">
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
              className="inline-block ml-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-transparent bg-gradient-to-r from-[#bde1f3] to-[#d9f7ff] hover:opacity-95 transition"
            >
              {t.baixarCurriculo}
            </a>

            {/* Switcher */}
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

          {/* Mobile actions (menu + idioma) */}
          <div className="md:hidden flex items-center gap-2">
            {/* Switcher sempre visível */}
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

            {/* Botão do menu mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-white/70 rounded-md shadow transition hover:bg-white"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Menu mobile com animação */}
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
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-green-50/80 border border-white-700">
            <span className="text-sm text-grey-700">{t.portifolio}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight whitespace-pre-line">
            {t.heroTitle}
          </h2>

          <p className="text-slate-900 -mt-3">{t.heroDesc}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-full text-sm font-semibold shadow-md bg-gradient-to-r from-[#8eff8d] to-[#b6ffc2]"
            >
              {t.verProjetos}
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
              className="px-5 py-3 rounded-full text-sm border border-slate-700 bg-gray-200"
            >
              {t.baixarCurriculo}
            </a>
          </div>
        </section>

        <aside className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-86 md:h-86 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-400 bg-white/70">
            <img
              src="./Luiz Murakami.jpg"
              alt="My photo"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </aside>
      </main>

      {/* ABOUT + SKILLS */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/60 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">{t.sobreMim}</h3>
            <p className="text-slate-700 leading-relaxed">{t.sobreMimDesc}</p>

            <h4 className="mt-6 font-medium">{t.oQueFaço}</h4>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-inside">
              <li>• {t.webResponsivo}</li>
              <li>• {t.apliReact}</li>
              <li>• {t.interaApiFirebase}</li>
              <li>• {t.otimiPerfo}</li>
            </ul>
          </div>

          <aside className="bg-white/60 p-6 rounded-2xl shadow">
            <h4 className="text-lg font-semibold mb-3">{t.habilidades}</h4>
            <div className="flex flex-wrap gap-2">
              {t.skillList.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm rounded-full border text-slate-700 bg-gradient-to-r from-[#fff1f8] to-[#e8fbff]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-slate-600">
                {t.disponivel}
              </h5>
              <p className="text-sm">{t.contrato}</p>

              <h5 className="mt-4 text-sm font-medium text-slate-600">
                {t.local}
              </h5>
              <p className="text-sm">{t.brasil}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">{t.projetosRecentes}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: t.dogtownTitle,
              desc: t.dogtownDesc,
              link: "https://www.dogtownbrew.com.br/",
            },
            {
              title: t.tarefasTitle,
              desc: t.tarefasDesc,
              link: "https://luizmura.github.io/Task-App/",
            },
            {
              title: t.weatherTitle,
              desc: t.weatherDesc,
              link: "https://luizmura.github.io/Weather-App/",
            },
          ].map((p) => (
            <article
              key={p.title}
              className="bg-white/60 p-5 rounded-2xl shadow hover:translate-y-1 transition-transform"
            >
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-slate-700 mt-2">{p.desc}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 rounded-2xl border bg-white/40"
                >
                  {t.ver}
                </a>
                <a href="#contact" className="text-sm text-slate-600">
                  {t.detalhes}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-[#589db1] via-[#7ac6cb] to-[#4dbdd4] p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-3">{t.contato}</h3>
          <p className="text-slate-700">{t.contatoDesc}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:luiz-murakami@hotmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/70 shadow"
            >
              <div>
                <p className="text-sm font-medium">{t.email}</p>
                <p className="text-xs text-slate-600">
                  luiz-murakami@hotmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/5516981072615"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/70 shadow"
            >
              <div>
                <p className="text-sm font-medium">{t.whatsapp}</p>
                <p className="text-xs text-slate-600">+55 16 98107-2615</p>
              </div>
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            {t.ouMeEncontre}:
            <a
              href="https://www.linkedin.com/in/luizmura"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {" "}
              LinkedIn
            </a>{" "}
            •
            <a
              href="https://github.com/LuizMura"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {" "}
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 py-6 border-t border-white/40">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600">
          {t.copyright} {new Date().getFullYear()} Luiz Murakami
        </div>
      </footer>
    </div>
  );
}
