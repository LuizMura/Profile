import React from "react";

export default function ProjectCard({ title, desc, link, t, iframe }) {
  return (
    <article className="w-full bg-white/60 p-5 rounded-2xl shadow hover:translate-y-1 transition-transform">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-700 mt-2">{desc}</p>

      {/* iframe responsivo, aparece apenas se a prop 'iframe' for true */}
      {iframe && (
        <div className="mt-4 w-full h-60 md:h-80 border border-zinc-700 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={link}
            title={title}
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-gradient-to-r from-emerald-200 to-lime-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-emerald-300 hover:to-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
        >
          {t.ver}
        </a>
        <a
          href="https://github.com/LuizMura?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60"
        >
          {t.detalhes}
        </a>
      </div>
    </article>
  );
}
