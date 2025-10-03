import React from "react";
export default function Contact() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Form submitted"); 
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container contact inner">
          <div className="left">
            <h2 style={{ color: "#ffffffff"}}>Contact Me</h2>
            <p style={{ color: "#ffffffff", marginBottom: 12 }}>
              Do you have any question? Write a message
            </p>
            <form onSubmit={handleSubmit}>
              <input className="input" name="name" placeholder="Your name" required />
              <input className="input" name="email" type="email" placeholder="Your email" required />
              <textarea name="message" placeholder="Your message" required />
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                <button className="btn btn-primary" type="submit">Send message</button>
                <button className="btn" type="reset">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
