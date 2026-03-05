import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ t }) {
  const projects = [
    {
      title: t.fujiviewTitle,
      desc: t.fujiviewDesc,
      link: "https://fujiviewtech.com/",
      iframe: true,
    },
    {
      title: t.dogtownTitle,
      desc: t.dogtownDesc,
      link: "https://www.dogtownbrew.com.br/",
      iframe: true, // flag para mostrar o iframe
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-semibold mb-6">{t.projetosRecentes}</h3>
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} t={t} />
        ))}
      </div>
    </section>
  );
}
