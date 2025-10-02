import  { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">HT</div>
          <div>
            <div className="site-name">MyPortfolio</div>
          </div>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {open && (
          <div style={{ background: "#071026", color: "white", padding: 12 }}>
            <div
              className="container"
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <a href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
