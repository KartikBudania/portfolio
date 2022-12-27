import React from "react";

const ContactMe = () =>{
    return (
        <section id="contact">
        <h1>{'<wrapper id= "contact">'}</h1>
        <div className="details">
            <div className="detail">
                <h6>Get in touch 📡</h6>
                <h3>Have any questions?</h3>
                <h3>Shoot me an email or find me around the web.</h3>
                <h2>// Some socials</h2>
                <p className="socials"><a href="https://twitter.com/kartik_budania"><i className="fa-brands fa-twitter"></i></a>          <a href="https://github.com/KartikBudania"><i className="fa-brands fa-github"></i></a></p>
            </div>
            <div className="detail">
                <form>
                    <input type="text" id="name" placeholder="Name" required></input>
                    <input type="email" id="email" placeholder="Email" required></input>
                    <textarea id="message" rows="4" placeholder="Message"></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
        <h1>{'</wrapper>'}</h1>
        </section>
    )
};

export default ContactMe;