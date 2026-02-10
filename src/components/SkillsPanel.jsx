import React from "react";

export default function SkillsPanel({ t }) {
  const skills = [
    {
      alt: "Next.js",
      src: "https://devicons.railway.com/i/nextjs-dark.svg",
      label: "Next.js",
    },
    {
      alt: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      label: "React",
    },

    {
      alt: "TypeScript",
      src: "https://devicons.railway.com/i/typescript.svg",
      label: "TypeScript",
    },

    {
      alt: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      label: "Tailwind",
    },

    {
      alt: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      label: "Node.js",
    },
    {
      alt: "Firebase",
      src: "https://devicons.railway.com/i/firebase.svg",
      label: "Firebase",
    },
    {
      alt: "Supabase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      label: "Supabase",
    },

    { alt: "Git", src: "https://devicons.railway.com/i/git.svg", label: "Git" },
    {
      alt: "GitHub",
      src: "https://devicons.railway.com/i/github-dark.svg",
      label: "GitHub",
    },
    {
      alt: "Vercel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      label: "Vercel",
    },
  ];

  return (
    <aside className="bg-white/20 p-6 rounded-2xl shadow backdrop-blur-md">
      <h4 className="text-md font-semibold mb-4">Tech Stack</h4>

      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-1.5">
        {skills.map(({ alt, src, label }) => (
          <div className="flex flex-col items-center w-14 text-center">
            <img
              alt={alt}
              src={src}
              className="w-10 h-10 object-contain drop-shadow-sm transition-transform hover:scale-110"
            />
            <span className="py-[2px] text-[12px]  text-slate-900 w-full block">
              {label}
            </span>
          </div>
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
