import React from "react";

export default function Footer({ t }) {
  return (
    <footer className="mt-12 py-6 border-t border-white/40">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600">
        {t.copyright} {new Date().getFullYear()} Luiz Murakami
      </div>
    </footer>
  );
}
