
const projects = [
  { title: "Portfolio Website", desc: "Personal website built with React and TypeScript." },
  { title: "E-commerce Demo", desc: "Shopping UI with cart state management." },
  { title: "Task Manager", desc: "Todo app with localStorage persistence." }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid" style={{ marginTop: 12 }}>
          {projects.map((p, i) => (
            <article key={i} className="card">
              <h3 style={{ marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "#475569" }}>{p.desc}</p>
              <div style={{ marginTop: 12 }}>
                <a href="#contact" className="btn btn-ghost">Ask about this</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
