import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#577089] via-[#868787] to-[#f7fff6] font-sans text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/30">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm">
              <img
                src="./Luiz Murakami.jpg"
                alt="Foto"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Luiz Murakami</h1>
              <p className="text-xs text-slate-600">Front-end Developer</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#about" className="text-sm hover:underline">
              Sobre
            </a>
            <a href="#projects" className="text-sm hover:underline">
              Projetos
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contato
            </a>
            <a
              href="./Luiz Henrique E. Murakami - Currículo.pdf"
              download
              className="inline-block ml-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-transparent bg-gradient-to-r from-[#bde1f3] to-[#d9f7ff] hover:opacity-95"
            >
              Currículo
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="#contact"
              className="text-sm px-3 py-2 rounded-md bg-white/60 shadow"
            >
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-green-50/80 border border-white-700">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#888"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-80 "
            >
              <path
                d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                stroke="#000"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-grey-700">
              Portfólio — front-end e UI
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Olá, sou Luiz Murakami <br></br>Minha missão é transformar desafios
            em resultados.
          </h2>

          <p className="text-slate-700">
            Desenvolvedor Front-end com experiência em React, Vite, Tailwind,
            JavaScript e Firebase. Gosto de transformar ideias em sites
            responsivos, focados em performance e design.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-full text-sm font-semibold shadow-md bg-gradient-to-r from-[#8eff8d] to-[#b6ffc2]"
            >
              Ver Projetos
            </a>
            <a
              href="./Luiz Henrique E. Murakami - Currículo.pdf"
              download
              className="px-5 py-3 rounded-full text-sm border border-slate-700 bg-gray-200"
            >
              Baixar Currículo
            </a>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <a
              href="mailto:luiz-murakami@hotmail.com"
              className="text-sm hover:underline"
            >
              luiz-murakami@hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/luizmura"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/LuizMura"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline"
            >
              GitHub
            </a>
          </div>
        </section>

        <aside className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-86 md:h-86 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-400 bg-white/70">
            <img
              src="./Luiz Murakami.jpg"
              alt="Minha foto"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </aside>
      </main>

      {/* ABOUT + SKILLS */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/60 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Sobre mim</h3>
            <p className="text-slate-700 leading-relaxed">
              Sou fascinado por criar e desenvolver. O Front-end me permite
              transformar idéias em experiências visuais e interativas. Gosto de
              unir criatividade e funcionalidade, sempre atento as tendências e
              as necessidades dos usuários. Meu último trabalho foi para a
              cervejaria DogTown Brew, onde desenvolvi todo o projeto — do
              Front-end à integração com o banco de dados Firebase, incluindo
              autenticação de login para a área administrativa.
            </p>

            <h4 className="mt-6 font-medium">O que eu faço</h4>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-inside">
              <li>
                • Websites responsivos (React, JavaScript, HTML, CSS, Tailwind)
              </li>
              <li>• Aplicações em React + Vite</li>
              <li>• Interações com APIs e Firebase</li>
              <li>• Otimização de performance e SEO básico</li>
            </ul>
          </div>

          <aside className="bg-white/60 p-6 rounded-2xl shadow">
            <h4 className="text-lg font-semibold mb-3">Habilidades</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Firebase",
                "Git",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm rounded-full border text-slate-700 bg-gradient-to-r from-[#fff1f8] to-[#e8fbff]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-slate-600">
                Disponibilidade
              </h5>
              <p className="text-sm">Contrato remoto ou híbrido / Freelance</p>

              <h5 className="mt-4 text-sm font-medium text-slate-600">Local</h5>
              <p className="text-sm">Brasil e exterior (flexível)</p>
            </div>
          </aside>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">Projetos Recentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "DogTown Brew ",
              desc: "Site oficial da cervejaria com cards de produtos, carrinho de compras e área de administrtativa",
              link: "https://www.dogtownbrew.com.br/",
            },
            {
              title: "Tarefas App",
              desc: "Aplicativo React.js + Vite conectado com API JSONPlaceholder para uso de dados prontos",
              link: "https://luizmura.github.io/Task-App/",
            },
            {
              title: "Weather App",
              desc: "Aplicativo React.js + vite consumindo API da OpenWeather para mostrar clima por cidade",
              link: "https://luizmura.github.io/Weather-App/",
            },
          ].map((p) => (
            <article
              key={p.title}
              className="bg-white/60 p-5 rounded-2xl shadow hover:translate-y-1 transition-transform"
            >
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-slate-700 mt-2">{p.desc}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 rounded-2xl border bg-white/40"
                >
                  Ver
                </a>
                <a href="#contact" className="text-sm text-slate-600">
                  Detalhes
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-[#589db1] via-[#7ac6cb] to-[#4dbdd4] p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold mb-3">Contato</h3>
          <p className="text-slate-700">
            Whatsapp ou email é a melhor forma de me contatar.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:luiz-murakami@hotmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/70 shadow"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8.5L12 13L21 8.5"
                  stroke="#ff6ea6"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-slate-600">
                  luiz-murakami@hotmail.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/5516981072615"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/70 shadow"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12a9 9 0 10-2.6 6.06L22 22l-3.94-1.54A9 9 0 0021 12z"
                  stroke="#22c55e"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-sm font-medium">WhatsApp</p>
                <p className="text-xs text-slate-600">+55 16 98107-2615</p>
              </div>
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            Ou me encontre:
            <a
              href="https://www.linkedin.com/in/luizmura"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {" "}
              LinkedIn
            </a>{" "}
            •
            <a
              href="https://github.com/LuizMura"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {" "}
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 py-6 border-t border-white/40">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Luiz Murakami
        </div>
      </footer>
    </div>
  );
}
