import React from "react";

export default function Hero({ t, lang }) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-0 items-center">
      <section className="space-y-6">
        <div className="space-y-3">
          <h3 className="leading-12 text-4xl md:text-5xl font-bold whitespace-pre-line">
            {t.heroTitle}
          </h3>
        </div>

        <p className="text-xl text-slate-900 whitespace-pre-line w-full">
          {t.heroDesc}
        </p>

        <div className="flex flex-wrap md:justify-end -mt-5">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sl font-semibold shadow-md bg-gradient-to-r from-[#8eff8d] to-[#b6ffc2]"
          >
            {t.entreEmContato}
          </a>
        </div>
      </section>

      <aside className="flex justify-center md:justify-end">
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-400 bg-white/70">
            <img
              src="./Luiz Murakami.jpg"
              alt="My photo"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="text-sm text-slate-700 text-center">
            <p className="font-semibold text-slate-900">{t.contato}</p>
            <p>
              {t.email}:{" "}
              <a
                href="mailto:luiz-murakami@hotmail.com"
                className="underline underline-offset-2"
              >
                luiz-murakami@hotmail.com
              </a>
            </p>
            <p>
              {t.whatsapp}:{" "}
              <a
                href="https://wa.me/5516981072615"
                className="underline underline-offset-2"
              >
                +55 16 98107-2615
              </a>
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
}
