import React from "react";

export default function SkillsPanel({ t }) {
  return (
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
        <h5 className="text-sm font-medium text-slate-600">{t.disponivel}</h5>
        <p className="text-sm">{t.contrato}</p>

        <h5 className="mt-4 text-sm font-medium text-slate-600">{t.local}</h5>
        <p className="text-sm">{t.brasil}</p>
      </div>
    </aside>
  );
}
