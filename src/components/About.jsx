import React from "react";
import SkillsPanel from "./SkillsPanel";

export default function About({ t }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/60 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">{t.sobreMim}</h3>
          <p className="text-slate-700 leading-relaxed">{t.sobreMimDesc}</p>

          <h4 className="mt-6 font-medium">{t.oQueFaço}</h4>
          <ul className="mt-3 flex flex-col gap-2 list-inside">
            <li>• {t.webResponsivo}</li>
            <li>• {t.apliReact}</li>
            <li>• {t.interaApiFirebase}</li>
            <li>• {t.otimiPerfo}</li>
          </ul>
        </div>

        <SkillsPanel t={t} />
      </div>
    </section>
  );
}
