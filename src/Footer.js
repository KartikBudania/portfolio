import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">
        <h3>
          © {new Date().getFullYear()} Kartik Budania. All rights reserved.
        </h3>
        <h3>Built with ❤️</h3>
      </div>
    </section>
  );
};

export default Footer;
