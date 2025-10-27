import React from "react";

export default function Hero({ t, lang }) {
  return (
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
  );
}
