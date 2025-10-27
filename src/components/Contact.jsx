import React from "react";
import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";

export default function Contact({ t }) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-gradient-to-r from-[#589db1] via-[#7ac6cb] to-[#4dbdd4] p-6 rounded-2xl shadow">
        <h3 className="text-2xl font-semibold mb-3">{t.contato}</h3>
        <p className="text-slate-700">{t.contatoDesc}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ContactCard
            title={t.email}
            text="luiz-murakami@hotmail.com"
            href="mailto:luiz-murakami@hotmail.com"
          />
          <ContactCard
            title={t.whatsapp}
            text="+55 16 98107-2615"
            href="https://wa.me/5516981072615"
          />
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}
