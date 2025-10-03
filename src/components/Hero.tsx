

export default function Hero(){

    return(
         <>
    <section id='hero' className="hero">
        <div className="container hero inner">
            <div className="left">
            <h1 className="hero-title"> Hyrije Taga—Web Developer</h1>
            <p className="lead">I am a Web Developer with experience in key technologies such as React, Node.js, MongoDB, and JavaScript, and I am passionate about building efficient and innovative solutions. I am seeking to contribute to a dynamic team where I can leverage my skills in application development and problem-solving..</p>
            <div style={{ display: "flex", gap: "12px" }}>
                <a className="btn btn-primary" href="#project">View Projects</a>
                <a className='btn btn-ghost' href="#contact">Contact Me</a>
            </div>
            </div>
            <div className="right">
                <div style={{
                    width: 560,
            height: 420,
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(210, 213, 223, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#04263a",
            marginLeft:"100px",
            fontWeight: 900,
            backgroundImage: `url("https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg")`,
             backgroundRepeat: "no-repeat",
              marginBottom: "250px",
              backgroundPosition: "center",
              backgroundSize: "cover",

                }}></div>

            </div>


        </div>

    </section>
    
    </>

    )
   
}


 