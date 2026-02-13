export default function Project() {
  const projects = [
    {
      title: "Bahir Dar University Student Union Selection System",
      description: [
        "Real-time voting features",
        "Admin dashboard for election management",
        "Result visualization and analytics",
      ],
      tech: ["React", "CSS"],
      github: "https://github.com/eyerusabebe0/Student-Union",
    },
    {
      title: "Church Website",
      description: [
        "Content management system",
        "Event scheduling",
        "Member communication features",
      ],
      tech: ["React", "CSS"],
      github: "https://github.com/eyerusabebe0/Church-website",
    },
    {
      title: "Gym Company Profile",
      description: [
        "Membership management system",
        "Class scheduling and trainer booking",
        "Workout programs and progress tracking",
      ],
      tech: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/eyerusabebe0/Gym-house",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-zinc-900">
      <h3 className="text-4xl font-extrabold mb-16 text-center text-indigo-400 underline decoration-indigo-400 decoration-4 underline-offset-8">
        Projects
      </h3>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl shadow-xl bg-zinc-950 hover:shadow-2xl transition-transform duration-300 hover:scale-105 border border-zinc-800"
          >
            <div className="mb-4">
              <h4 className="text-2xl font-bold mb-4 text-indigo-400">
                {project.title}
              </h4>
              <ul className="list-disc list-inside mb-4 text-zinc-100 space-y-1">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
              <p className="text-indigo-400 flex flex-wrap gap-2 mb-3 sm:mb-0">
                <strong>Tech:</strong>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-400/10 text-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-100 bg-indigo-500/20 hover:bg-indigo-500/40 rounded-full transition"
              >
                🐙 View Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
