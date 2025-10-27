import React from "react";

export default function ProjectCard({ title, desc, link, t, iframe }) {
  return (
    <article className="bg-white/60 p-5 rounded-2xl shadow hover:translate-y-1 transition-transform">
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

      <div className="mt-4 flex items-center gap-3">
        <a
          href={link}
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
  );
}
