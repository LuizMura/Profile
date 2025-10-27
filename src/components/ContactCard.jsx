import React from "react";

export default function ContactCard({ title, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl bg-white/70 shadow"
    >
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-slate-600">{text}</p>
      </div>
    </a>
  );
}
