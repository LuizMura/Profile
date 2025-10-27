import React, { useState } from "react";
import { translations } from "./translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#577089] via-[#868787] to-[#f7fff6] font-sans text-slate-900">
      <Navbar
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      <Hero lang={lang} t={t} />
      <About t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
