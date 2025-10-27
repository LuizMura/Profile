import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ t }) {
  const projects = [
    {
      title: t.dogtownTitle,
      desc: t.dogtownDesc,
      link: "https://www.dogtownbrew.com.br/",
      iframe: true, // flag para mostrar o iframe
    },
    {
      title: t.tarefasTitle,
      desc: t.tarefasDesc,
      link: "https://luizmura.github.io/Task-App/",
      iframe: true,
    },
    {
      title: t.weatherTitle,
      desc: t.weatherDesc,
      link: "https://luizmura.github.io/Weather-App/",
      iframe: true,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-semibold mb-6">{t.projetosRecentes}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} t={t} />
        ))}
      </div>
    </section>
  );
}
