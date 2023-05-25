import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d2lz4gx",
        "template_9t2jdcc",
        e.target,
        "xczMJUEQNuJsxTklF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact">
      <h1>{'<wrapper id= "contact">'}</h1>
      <div className="details">
        <div className="detail">
          <h6>Get in touch 📡</h6>
          <h3>Have any questions?</h3>
          <h3>Shoot me an email or find me around the web.</h3>
          <h2>// Some socials</h2>
          <p className="socials">
            <a href="https://twitter.com/kartik_budania" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>{" "}
            <a href="https://github.com/KartikBudania" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
        </div>
        <div className="detail">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
            <textarea
              name="message"
              id="message"
              cols="35"
              rows="8"
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
      <h1>{"</wrapper>"}</h1>
    </section>
  );
};

export default ContactMe;
